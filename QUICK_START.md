# Quick Start Guide - Email Server

## 5 Minute Setup

### Step 1: Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Copy the 16-character password Google gives you

### Step 2: Update .env File
Open `.env` and add your app password:
```
EMAIL_USER=paladin.taxandtransferpricing@gmail.com
EMAIL_PASSWORD=paste_your_16_char_password_here
PORT=3000
```

### Step 3: Install Dependencies
Open Command Prompt in your project folder and run:
```
npm install
```

### Step 4: Start the Server
```
npm start
```

You should see: `Server running on http://localhost:3000`

### Step 5: Test It!
1. Go to http://localhost:3000 in your browser
2. Fill out the contact form
3. Submit and check your email!

---

## Frequently Asked Questions

**Q: Do I need 2-Step Verification enabled?**
A: Yes, Gmail requires 2-Step Verification to generate app passwords. Enable it here: https://myaccount.google.com/security

**Q: Why does my app password have spaces?**
A: Remove all spaces! Gmail's app password might display as `abcd efgh ijkl mnop` but you need to enter it as `abcdefghijklmnop`

**Q: Can I use the same Gmail account?**
A: Yes! The server will send emails from paladin.taxandtransferpricing@gmail.com

**Q: Do I need to keep the server running?**
A: Yes, the server must be running for emails to work. In production, use a service like Heroku or Render to keep it running 24/7.

**Q: Can multiple people send emails?**
A: Yes! Each visitor to your website can submit the form, and you'll receive their email.

---

## Common Commands

| Command | What it does |
|---------|-------------|
| `npm install` | Install all packages (run once) |
| `npm start` | Run the server (production) |
| `npm run dev` | Run the server with auto-restart (development) |
| `Ctrl+C` | Stop the server |

---

## Deployment Checklist

Before going live:
- [ ] Set up app password for Gmail
- [ ] Update `.env` file
- [ ] Test locally with `npm start`
- [ ] Choose a hosting platform (Heroku, Render, etc.)
- [ ] Set environment variables on hosting platform
- [ ] Deploy your code
- [ ] Test the form on the live website
