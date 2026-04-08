# Groq AI Financial Assistant Setup Guide

## 🎯 Overview
This guide shows how to integrate the FREE Groq AI model (llama-3.1-8b-instant) into your Flask backend to power the financial search assistant.

## 📦 Installation

### 1. Install Groq SDK
```bash
cd backend
npm install groq
```

### 2. Configure Environment Variables
Add to your `.env` file:
```env
# Groq AI Configuration
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
```

### 3. Get Your Free API Key
1. Go to: https://console.groq.com/keys
2. Sign up for free account
3. Click "Create Key"
4. Copy the key (starts with `gsk_`)
5. Add to your `.env` file

## 🤖 AI Service Implementation

### Core Service: `src/services/groq.service.js`
- Uses FREE model: `llama-3.1-8b-instant`
- Includes financial assistant system prompt
- Handles API errors gracefully
- Optimized for free-tier limits

### Controller: `src/controllers/financial.controller.js`
- Validates input queries
- Calls Groq service
- Returns structured JSON responses
- Comprehensive error handling

### Routes: `src/routes/financial.routes.js`
- POST `/api/financial-search`
- Accepts: `{ "query": "user question" }`
- Returns: `{ "answer": "AI response", "query": "original query" }`

## 🔧 Server Integration

The main server (`src/server.js`) has been updated to:
- Import financial routes
- Mount at `/api/financial-search`
- Handle errors properly
- Log API calls

## 📱 Frontend Integration

Your frontend should call:
```javascript
const response = await fetch('http://localhost:5000/api/financial-search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 
    query: "What is a savings account?" 
  }),
});

const data = await response.json();
console.log(data.answer);
```

## 🧪 Testing

### Test Queries:
1. "What is a savings account?"
2. "How do I invest money?"
3. "What is interest rate?"
4. "Best way to save money?"

### Expected Response:
```json
{
  "answer": "A savings account is a deposit account that earns interest...",
  "query": "What is a savings account?"
}
```

## ⚡ Performance Optimizations

### Free Tier Limits:
- **Model**: llama-3.1-8b-instant (FREE)
- **Max Tokens**: 500 (optimized for speed)
- **Temperature**: 0.7 (balanced creativity)
- **Rate Limiting**: Built into Express app

### Error Handling:
- 401: Invalid API key
- 429: Too many requests
- 500: Service unavailable
- Graceful fallback responses

## 🚀 Starting the Backend

```bash
cd backend
npm install
npm run dev
```

Server will run on: http://localhost:5000

## 🔍 API Endpoint

**POST** `http://localhost:5000/api/financial-search`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "query": "Your financial question here"
}
```

**Success Response (200):**
```json
{
  "answer": "AI-generated financial advice",
  "query": "Your original question"
}
```

**Error Response (500):**
```json
{
  "error": "Error message",
  "answer": "Fallback response for user"
}
```

## 📋 Complete File Structure

```
backend/
├── src/
│   ├── services/
│   │   └── groq.service.js          # Groq AI service
│   ├── controllers/
│   │   └── financial.controller.js  # Request handler
│   ├── routes/
│   │   └── financial.routes.js      # API routes
│   └── server.js                    # Main server (updated)
├── .env                              # Environment variables
└── package.json                      # Dependencies (updated)
```

## 🎯 Key Features

✅ **FREE Model**: Uses llama-3.1-8b-instant (no cost)
✅ **Financial Focus**: Specialized system prompt
✅ **Error Handling**: Comprehensive error management
✅ **Rate Limiting**: Built-in protection
✅ **Production Ready**: Clean, structured code
✅ **Easy Integration**: Simple REST API

## 🔐 Security

- API key stored in environment variables
- Never exposed to frontend
- Input validation and sanitization
- Error messages don't leak sensitive info

## 📞 Support

- **Groq Console**: https://console.groq.com
- **API Docs**: https://console.groq.com/docs
- **Rate Limits**: Check your console for current limits

---

Your Flask backend is now ready to provide intelligent financial advice using the FREE Groq AI model! 🚀
