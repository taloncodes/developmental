import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';

dotenv.config();


if (import.meta.env.MODE === 'development') {
  import('dotenv').then((dotenv) => {
    dotenv.config();  // Ensure your Mailgun API key and domain are loaded from .env
  });
}

export async function POST({ request }) {
  const { fname, lname, email, phone, message } = await request.json();

  // Prepare the Mailgun client
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.eu.mailgun.net/',
  });

  // Prepare the email data
  const emailData = {
    from: process.env.MAILGUN_DOMAIN, 
    to: ['talon@developmental.pro'], // Recipient email
    subject: 'Developmental Website Enquiry',
    text: `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    // Send email using Mailgun API
    const response = await mg.messages.create('mg.developmental.pro', emailData);
    
    // Return a success response to the client
    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted and email sent!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Return an error response to the client
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
