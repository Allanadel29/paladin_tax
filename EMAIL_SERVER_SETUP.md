# Paladin Tax - Node.js Email Server Setup Guide

## Overview
This guide explains how to set up and run the Node.js server that handles email submissions from your contact form.

## Prerequisites
- Node.js (version 14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- A Gmail account (paladin.taxandtransferpricing@gmail.com)

## Installation Steps

### 1. Install Node.js
- Download and install Node.js from https://nodejs.org/
- Verify installation by opening Command Prompt and running:
  ```
  node --version
  npm --version
  ```

### 2. Install Dependencies
- Open Command Prompt/Terminal in your project directory
- Run the following command:
  ```
  npm install
  ```
This will install all required packages: Express, Nodemailer, CORS, and Body-Parser.

### 3. Configure Gmail (Important!)

To send emails from your Gmail account, you need to generate an **App Password**:

#### Enable 2-Step Verification (if not already enabled):
1. Go to https://myaccount.google.com/security
2. Click on "2-Step Verification"
3. Follow the setup instructions

#### Generate App Password:
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password

#### Update .env File:
1. Open the `.env` file in your project folder
2. Replace the placeholder with your Gmail app password:
   ```
   EMAIL_USER=paladin.taxandtransferpricing@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   PORT=3000
   ```
3. Save the file

### 4. Run the Server

#### For Development:
```
npm run dev
```
This uses Nodemon for auto-restart on file changes.

#### For Production:
```
npm start
```

You should see output like:
```
Server running on http://localhost:3000
Email service configured for: paladin.taxandtransferpricing@gmail.com
```

## Testing the Setup

### Test the Server:
1. Open your browser and go to: `http://localhost:3000`
2. You should see your website
3. Fill out the contact form and submit
4. Check your Gmail inbox for:
   - **Email 1**: The contact form submission (in paladin.taxandtransferpricing@gmail.com)
   - **Email 2**: A confirmation email sent to the sender

### API Endpoints:
- **POST** `/api/send-email` - Receives form data and sends emails
- **GET** `/api/health` - Health check endpoint

## Form Data Structure
The contact form sends the following data:
```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "subject": "Message Subject",
  "message": "Message content"
}
```

## Features

✅ **Contact Form Handler** - Receives form submissions from the website
✅ **Email Notifications** - Sends emails to paladin.taxandtransferpricing@gmail.com
✅ **Confirmation Email** - Sends confirmation to the visitor
✅ **Email Validation** - Validates email format and checks for disposable addresses
✅ **CORS Enabled** - Allows requests from your website
✅ **Error Handling** - Comprehensive error messages
✅ **HTML Emails** - Professional-looking formatted emails

## Troubleshooting

### Error: "ECONNREFUSED" or "Cannot connect to server"
- Make sure the server is running: `npm start`
- Check that port 3000 is not in use

### Error: "Invalid login credentials"
- Double-check your app password in `.env`
- Ensure 2-Step Verification is enabled
- Re-generate a new app password if needed

### Emails not sending
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in `.env`
- Check Gmail's "Less secure app access" is disabled (it should be if using app passwords)
- Check the console for specific error messages
- Test with: `npm run dev` to see detailed logs

### Form message not showing feedback
- Open browser console (F12) to check for JavaScript errors
- Verify the form element has id="contactForm"
- Check that the message div has id="formMessage"

## Deployment

### Deploying to the Cloud:

#### Heroku:
1. Create a Heroku account at https://www.heroku.com/
2. Install Heroku CLI
3. Run: `heroku create your-app-name`
4. Set environment variables:
   ```
   heroku config:set EMAIL_USER=paladin.taxandtransferpricing@gmail.com
   heroku config:set EMAIL_PASSWORD=your_app_password
   ```
5. Deploy: `git push heroku main`

#### Render:
1. Create account at https://render.com/
2. Connect your GitHub repository
3. Set environment variables in the dashboard
4. Deploy

#### Other Options:
- AWS Elastic Beanstalk
- DigitalOcean
- Replit
- Glitch

## Security Considerations

1. **Never commit `.env` to Git** - It contains sensitive data
2. **Use environment variables** in production, not hardcoded values
3. **Validate all user input** - Already implemented in the server
4. **Use HTTPS in production** - Essential for secure email submissions
5. **Rate limiting** - Consider adding rate limiting for production (not included by default)

## Email Templates

The server sends two types of emails:

### To Business (Paladin Tax):
- Subject: `New Contact Form Submission: [Subject]`
- Contains: Name, Email, Subject, Message

### To Visitor:
- Subject: `We received your message - Paladin Tax`
- Contains: Confirmation that message was received
- Includes: Their message details

## Additional Configuration

### Changing the Port:
Edit `.env` and change:
```
PORT=8000
```

### Changing Email Recipients:
To send notifications to multiple emails, edit `server.js` line with:
```javascript
to: 'paladin.taxandtransferpricing@gmail.com, additional@email.com'
```

## Support

For issues or questions:
- Check the console logs for error messages
- Review the troubleshooting section
- Ensure all files are in the correct directory
- Verify Node.js and npm are correctly installed

## Summary of Files

- `server.js` - Main Express server file
- `package.json` - Project dependencies
- `.env` - Environment configuration (create manually or rename `.env.example`)
- `.gitignore` - Files to exclude from Git
- `main.js` - Updated with form submission handler
- `index.html` - Updated contact form

---

**Created**: April 2026
**Email Service**: Gmail via Nodemailer
**Framework**: Express.js
