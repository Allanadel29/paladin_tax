const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from /public directory
app.use(express.static(path.join(__dirname, '../public')));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'paladin.taxandtransferpricing@gmail.com',
    pass: process.env.EMAIL_PASSWORD // App password from Gmail
  }
});

// Test the email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email service error:', error);
  } else {
    console.log('Email service ready:', success);
  }
});

// Form submission endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Email to Paladin Tax
    const mailOptions = {
      from: process.env.EMAIL_USER || 'paladin.taxandtransferpricing@gmail.com',
      to: process.env.EMAIL_USER || 'paladin.taxandtransferpricing@gmail.com',
      subject: `New Form Submission: ${subject}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email to Paladin Tax
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the sender
    const confirmationEmail = {
      from: process.env.EMAIL_USER || 'paladin.taxandtransferpricing@gmail.com',
      to: email,
      subject: 'We received your message - Paladin Tax',
      html: `
        <h2>Thank you for contacting Paladin Tax</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,<br>Paladin Tax & Transfer Pricing Solutions Limited</p>
      `
    };

    await transporter.sendMail(confirmationEmail);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending email: ' + error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Serve index.html for root path and catch-all
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Email service configured for:', process.env.EMAIL_USER || 'paladin.taxandtransferpricing@gmail.com');
  });
}

// Export for Vercel
module.exports = app;
