export function fadeOnScroll(node, { threshold = 0.15 } = {}) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('in-view');
        observer.unobserve(node); // animate once
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
