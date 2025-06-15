require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// API endpoint for form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'hldesignedit@gmail.com',
    subject: `Portfolio Contact: ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    // HTML version
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Your message has been sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Serve static frontend files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
