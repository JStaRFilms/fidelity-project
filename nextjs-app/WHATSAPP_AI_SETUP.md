# WhatsApp AI Chatbot Integration Setup

This guide will help you set up the hybrid AI system that connects your web app search with WhatsApp.

## 🎯 System Overview

When users search in your web app:
1. Questions are sent to OpenAI via API
2. AI responses are displayed in the frontend
3. Both question and answer are sent to your WhatsApp
4. You can reply on WhatsApp and continue the conversation

## 📋 Prerequisites

- OpenAI API key
- Twilio account (for WhatsApp)
- Node.js environment
- ngrok (for local development webhook testing)

## 🚀 Setup Steps

### 1. Environment Variables

Copy the example file and add your API keys:

```bash
cp env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-actual-openai-key

# Twilio Configuration for WhatsApp
TWILIO_ACCOUNT_SID=ACyour-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Your WhatsApp Numbers (with country code)
MY_WHATSAPP_NUMBER=+2349150270900
# Additional numbers: +23401954518600 (hardcoded in API)
```

### 2. Install Dependencies

```bash
npm install openai twilio
```

### 3. Twilio WhatsApp Setup

#### A. Create Twilio Account
1. Sign up at [twilio.com](https://twilio.com)
2. Get your Account SID and Auth Token from the dashboard

#### B. Set Up WhatsApp Sandbox
1. In Twilio Console, go to Messaging > Try it out > Send a WhatsApp message
2. Follow the sandbox setup instructions
3. Save your sandbox number (usually: `whatsapp:+14155238886`)

#### C. Configure Webhook
1. Start your development server: `npm run dev`
2. Use ngrok to expose your local server:
   ```bash
   ngrok http 3000
   ```
3. Copy the ngrok URL (e.g., `https://abc123.ngrok.io`)
4. In Twilio Console, set the webhook URL to:
   ```
   https://abc123.ngrok.io/webhook/whatsapp
   ```

### 4. OpenAI Setup

1. Create an account at [openai.com](https://openai.com)
2. Go to API keys section and create a new key
3. Add the key to your `.env.local` file

### 5. Test the System

#### A. Test Web App Search
1. Start your app: `npm run dev`
2. Go to your web app
3. Use the search bar to ask a question
4. Check that you receive the question and answer on WhatsApp

#### B. Test WhatsApp Reply
1. Reply to the WhatsApp message you received
2. You should get an AI response back on WhatsApp

## 🔧 API Endpoints

### Search API
- **URL**: `POST /api/search`
- **Body**: `{ "question": "your question here" }`
- **Response**: `{ "answer": "AI response" }`

### WhatsApp Webhook
- **URL**: `POST /webhook/whatsapp`
- **Handles**: Incoming WhatsApp messages
- **Responds**: Automatically with AI-generated replies

## 📱 WhatsApp Features

### Incoming Messages
- Receives messages from any WhatsApp number
- Extracts message content and sender number
- Sends to OpenAI for response

### Outgoing Messages
- Sends search results from web app to both WhatsApp numbers:
  - +2349150270900
  - +23401954518600
- Automatically replies to WhatsApp messages
- Maintains conversation context

## 🛠️ Development Tips

### Local Testing with ngrok
```bash
# Install ngrok
npm install -g ngrok

# Start your app
npm run dev

# In another terminal, expose port 3000
ngrok http 3000
```

### Monitoring Logs
Check your terminal for these logs:
- `Message sent to WhatsApp successfully`
- `Received WhatsApp message from +1234567890: message content`
- `Sent WhatsApp reply to +1234567890: AI response`

### Error Handling
- If WhatsApp fails, the web app still returns AI responses
- All errors are logged to console
- Fallback responses are provided when AI services are down

## 🔒 Security Considerations

- Never commit `.env.local` to version control
- Use environment variables for all API keys
- Validate incoming webhook requests in production
- Consider adding rate limiting for API endpoints

## 📊 Monitoring

### WhatsApp Message Flow
```
Web App Search → OpenAI → Frontend Display
                ↓
            WhatsApp → Your Number
                ↑
WhatsApp Reply → OpenAI → WhatsApp Response
```

### Troubleshooting

#### Common Issues
1. **WhatsApp messages not sending**: Check Twilio credentials and webhook URL
2. **OpenAI errors**: Verify API key and billing
3. **ngrok connection issues**: Restart ngrok and update webhook URL

#### Debug Steps
1. Check browser console for frontend errors
2. Check terminal for backend logs
3. Verify environment variables are loaded
4. Test API endpoints directly with curl

## 🚀 Production Deployment

### Environment Setup
1. Set all environment variables in your hosting platform
2. Update webhook URL to your production domain
3. Configure SSL certificate (required for WhatsApp webhooks)

### Performance Considerations
- Consider caching frequently asked questions
- Monitor OpenAI API usage and costs
- Set up error alerting for webhook failures

## 📞 Support

- **Twilio Support**: [twilio.com/help](https://twilio.com/help)
- **OpenAI Support**: [openai.com/support](https://openai.com/support)
- **ngrok Documentation**: [ngrok.com/docs](https://ngrok.com/docs)

---

**Your system is now ready!** Users can search on your web app and continue conversations on WhatsApp seamlessly.
