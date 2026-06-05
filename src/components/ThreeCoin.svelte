<script>
	import { onMount } from 'svelte';

	export let colourway = 'default';
	export let size = 'default';
	export let showShadow = true;
	export let markType = 'logo';

	let canvas;
	let shadow;
	let frameId;
	let cleanup = () => {};

	onMount(() => {
		let disposed = false;

		async function initialise() {
			const THREE = await import('three');

			if (disposed) return;

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
			camera.position.set(0, 0, 4.75);

			const renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true,
				antialias: true,
				preserveDrawingBuffer: true,
				powerPreference: 'high-performance'
			});
			renderer.setClearColor(0x000000, 0);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
			renderer.outputColorSpace = THREE.SRGBColorSpace;

			const coin = new THREE.Group();
			coin.rotation.x = THREE.MathUtils.degToRad(-7);
			coin.rotation.y = THREE.MathUtils.degToRad(28);
			coin.rotation.z = THREE.MathUtils.degToRad(-2);
			scene.add(coin);

			const palettes = {
				default: {
					face: 0x1f1f1f,
					edge: 0x181818,
					inner: 0x242424,
					mark: 0xededed
				},
				flipped: {
					face: 0xe8e1d8,
					edge: 0xdee2a6,
					inner: 0xededed,
					mark: 0x1b1b1b
				}
			};
			const palette = palettes[colourway] ?? palettes.default;

			const dark = new THREE.MeshStandardMaterial({
				color: palette.face,
				roughness: 0.94,
				metalness: 0
			});
			const edge = new THREE.MeshStandardMaterial({
				color: palette.edge,
				roughness: 0.92,
				metalness: 0
			});
			const inner = new THREE.MeshStandardMaterial({
				color: palette.inner,
				roughness: 0.96,
				metalness: 0
			});
			const mark = new THREE.MeshStandardMaterial({
				color: palette.mark,
				roughness: 0.58,
				metalness: 0
			});

			const radius = 1;
			const depth = 0.13;
			const faceOffset = depth / 2 + 0.01;
			const frontMarkOffset = faceOffset + 0.014;

			const bodyGeometry = new THREE.CylinderGeometry(radius, radius, depth, 112, 1, false);
			bodyGeometry.rotateX(Math.PI / 2);
			const body = new THREE.Mesh(bodyGeometry, [edge, dark, dark]);
			coin.add(body);

			const frontInset = new THREE.Mesh(new THREE.CircleGeometry(0.86, 96), inner);
			frontInset.position.z = faceOffset;
			coin.add(frontInset);

			const backInset = new THREE.Mesh(new THREE.CircleGeometry(0.86, 96), inner);
			backInset.position.z = -faceOffset;
			backInset.rotation.y = Math.PI;
			coin.add(backInset);

			const rimGeometry = new THREE.TorusGeometry(0.88, 0.008, 8, 112);
			const frontRim = new THREE.Mesh(rimGeometry, edge);
			frontRim.position.z = faceOffset + 0.004;
			coin.add(frontRim);

			const backRim = frontRim.clone();
			backRim.position.z = -faceOffset - 0.004;
			coin.add(backRim);

			const outerBevelGeometry = new THREE.TorusGeometry(radius - 0.015, 0.012, 8, 112);
			const frontBevel = new THREE.Mesh(outerBevelGeometry, edge);
			frontBevel.position.z = depth / 2;
			coin.add(frontBevel);

			const backBevel = frontBevel.clone();
			backBevel.position.z = -depth / 2;
			coin.add(backBevel);

			function createLogoMark(z, flipped = false) {
				const logo = new THREE.Group();
				logo.position.z = z;

				const dot = new THREE.Mesh(new THREE.CircleGeometry(0.075, 32), mark);
				dot.position.set(-0.28, -0.24, 0);

				const slash = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.82, 0.018), mark);
				slash.position.set(0.1, 0.02, 0);
				slash.rotation.z = THREE.MathUtils.degToRad(-12);

				logo.add(dot, slash);
				if (flipped) logo.rotation.y = Math.PI;
				return logo;
			}

			async function createPoundMark(z, flipped = false) {
				const [{ FontLoader }, { TextGeometry }, fontData] = await Promise.all([
					import('three/examples/jsm/loaders/FontLoader.js'),
					import('three/examples/jsm/geometries/TextGeometry.js'),
					import('three/examples/fonts/helvetiker_bold.typeface.json')
				]);
				const font = new FontLoader().parse(fontData.default ?? fontData);
				const geometry = new TextGeometry('£', {
					font,
					size: 0.74,
					depth: 0.018,
					curveSegments: 10,
					bevelEnabled: false
				});

				geometry.computeBoundingBox();
				const box = geometry.boundingBox;
				const width = box.max.x - box.min.x;
				const height = box.max.y - box.min.y;
				geometry.translate(-box.min.x - width / 2, -box.min.y - height / 2 - 0.015, 0);

				const pound = new THREE.Group();
				pound.position.z = z;

				const symbol = new THREE.Mesh(geometry, mark);
				pound.add(symbol);

				if (flipped) pound.rotation.y = Math.PI;
				return pound;
			}

			if (markType === 'pound') {
				coin.add(await createPoundMark(frontMarkOffset));
				coin.add(await createPoundMark(-frontMarkOffset, true));
			} else {
				coin.add(createLogoMark(frontMarkOffset));
				coin.add(createLogoMark(-frontMarkOffset, true));
			}

			const ambient = new THREE.AmbientLight(0xffffff, 2.4);
			scene.add(ambient);

			const key = new THREE.DirectionalLight(0xffffff, 1.35);
			key.position.set(2.5, 3, 4);
			scene.add(key);

			const fill = new THREE.DirectionalLight(0xffffff, 1.1);
			fill.position.set(-2, -1.5, 3);
			scene.add(fill);

			const resize = () => {
				const rect = canvas.getBoundingClientRect();
				const width = Math.max(1, Math.floor(rect.width));
				const height = Math.max(1, Math.floor(rect.height));
				renderer.setSize(width, height, false);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			};

			const resizeObserver = new ResizeObserver(resize);
			resizeObserver.observe(canvas);
			resize();

			const render = (time) => {
				const seconds = time * 0.001;
				const baseAngle = THREE.MathUtils.degToRad(28);
				const baseTiltX = THREE.MathUtils.degToRad(-7);
				const baseTiltZ = THREE.MathUtils.degToRad(-2);
				const pauseDuration = 1.25;
				const spinDuration = 0.72;
				const segmentDuration = pauseDuration + spinDuration;
				const cycleDuration = segmentDuration * 2;
				const phase = seconds % cycleDuration;
				const halfTurn = Math.floor(phase / segmentDuration);
				const localPhase = phase % segmentDuration;
				const spinProgress =
					localPhase > pauseDuration ? Math.min((localPhase - pauseDuration) / spinDuration, 1) : 0;
				const easedSpin = spinProgress * spinProgress * (3 - 2 * spinProgress);
				const pauseProgress = spinProgress === 0 ? Math.min(localPhase / pauseDuration, 1) : 1;
				const settle =
					spinProgress === 0
						? Math.sin(pauseProgress * Math.PI * 2.1) * Math.pow(1 - pauseProgress, 2.4)
						: 0;

				coin.rotation.x = baseTiltX + settle * THREE.MathUtils.degToRad(0.9);
				coin.rotation.y =
					baseAngle +
					halfTurn * Math.PI +
					easedSpin * Math.PI +
					settle * THREE.MathUtils.degToRad(2);
				coin.rotation.z = baseTiltZ - settle * THREE.MathUtils.degToRad(0.75);
				coin.position.y = 0.08;
				coin.scale.setScalar(1 + Math.abs(settle) * 0.012);

				const faceAmount = Math.abs(Math.cos(coin.rotation.y));
				const scaleX = 0.2 + faceAmount * 0.8;
				const scaleY = 0.74 + faceAmount * 0.26;
				const opacity = 0.18 + faceAmount * 0.22;

				if (shadow) {
					shadow.style.transform = `translateX(-50%) scale(${scaleX}, ${scaleY})`;
					shadow.style.opacity = opacity.toFixed(3);
				}

				renderer.render(scene, camera);
				frameId = requestAnimationFrame(render);
			};

			frameId = requestAnimationFrame(render);

			cleanup = () => {
				cancelAnimationFrame(frameId);
				resizeObserver.disconnect();
				renderer.dispose();
				bodyGeometry.dispose();
				rimGeometry.dispose();
				outerBevelGeometry.dispose();
				dark.dispose();
				edge.dispose();
				inner.dispose();
				mark.dispose();
				scene.traverse((object) => {
					if (
						object.geometry &&
						object.geometry !== bodyGeometry &&
						object.geometry !== rimGeometry &&
						object.geometry !== outerBevelGeometry
					) {
						object.geometry.dispose();
					}
				});
			};
		}

		initialise();

		return () => {
			disposed = true;
			cleanup();
		};
	});
</script>

<div
	class="three-coin-stage"
	class:three-coin-stage--footer={size === 'footer'}
	class:three-coin-stage--menu={size === 'menu'}
	aria-hidden="true"
>
	<canvas bind:this={canvas} class="three-coin"></canvas>
	{#if showShadow}
		<span bind:this={shadow} class="three-coin-shadow"></span>
	{/if}
</div>

<style>
	.three-coin-stage {
		position: relative;
		display: grid;
		width: min(76vw, 16rem);
		min-height: clamp(10rem, 20vw, 13.5rem);
		place-items: center;
		overflow: visible;
	}

	.three-coin {
		position: relative;
		z-index: 1;
		display: block;
		width: min(100%, 15rem);
		height: clamp(10rem, 20vw, 13.5rem);
		background: transparent;
	}

	.three-coin-shadow {
		position: absolute;
		bottom: 8%;
		left: 50%;
		z-index: 0;
		width: min(50%, 8.5rem);
		height: 11%;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.25);
		opacity: 0.34;
		transform: translateX(-50%) scale(0.8, 0.95);
		transform-origin: center;
		will-change: opacity, transform;
	}

	.three-coin-stage--footer {
		width: 3.2rem;
		min-height: 3.2rem;
	}

	.three-coin-stage--footer .three-coin {
		width: 3.2rem;
		height: 3.2rem;
	}

	.three-coin-stage--menu {
		width: 4.5rem;
		min-height: 4.5rem;
	}

	.three-coin-stage--menu .three-coin {
		width: 4.5rem;
		height: 4.5rem;
	}

	@media (max-width: 767px) {
		.three-coin-stage {
			width: min(68vw, 13rem);
			min-height: 11rem;
		}

		.three-coin {
			width: min(100%, 12.25rem);
			height: 11rem;
		}

		.three-coin-stage--footer {
			width: 3rem;
			min-height: 3rem;
		}

		.three-coin-stage--footer .three-coin {
			width: 3rem;
			height: 3rem;
		}

		.three-coin-stage--menu {
			width: 4rem;
			min-height: 4rem;
		}

		.three-coin-stage--menu .three-coin {
			width: 4rem;
			height: 4rem;
		}
	}
</style>
