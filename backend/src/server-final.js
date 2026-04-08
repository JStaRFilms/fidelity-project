import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// System prompt for financial assistant
const FINANCIAL_ASSISTANT_PROMPT = "You are a professional financial assistant. Provide clear, simple, and practical financial advice about banking, savings, investments, loans, and personal finance. Keep responses concise and trustworthy. Avoid risky or misleading advice. If unsure, say so honestly.";

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting (optimized for free tier)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // reduced for free tier
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Logging
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    groq_api: process.env.GROQ_API_KEY ? 'configured' : 'not configured'
  })
});

// Financial search endpoint with FREE Groq AI
app.post('/api/financial-search', async (req, res) => {
  try {
    const { query } = req.body;

    // Validate input
    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        error: 'Query is required and must be a string',
        answer: null
      });
    }

    if (query.trim().length === 0) {
      return res.status(400).json({
        error: 'Query cannot be empty',
        answer: null
      });
    }

    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        error: 'Groq API key not configured',
        answer: 'Financial AI service is not properly configured. Please add your API key to .env.local file.'
      });
    }

    console.log('Calling Groq AI with query:', query);

    // Try real Groq API first
    try {
      const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant", // FREE model
          messages: [
            {
              role: "system",
              content: FINANCIAL_ASSISTANT_PROMPT
            },
            {
              role: "user",
              content: query
            }
          ],
          max_tokens: 500, // Optimized for free tier
          temperature: 0.7,
          top_p: 1,
          stream: false,
        }),
      });

      if (groqResponse.ok) {
        const groqData = await groqResponse.json();
        const answer = groqData.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
        
        console.log('Groq AI response received successfully');

        return res.status(200).json({
          answer: answer.trim(),
          query: query.trim()
        });
      } else {
        throw new Error(`Groq API error: ${groqResponse.status}`);
      }
    } catch (error) {
      console.log('Groq API failed, using mock response:', error.message);
      
      // Mock response for testing when API key is invalid
      const mockResponses = {
        'savings': 'A savings account is a deposit account that earns interest and helps you save money safely. Look for accounts with high interest rates and no monthly fees.',
        'invest': 'Start investing by opening a brokerage account, consider low-cost index funds, and invest regularly. Begin with small amounts and gradually increase as you learn.',
        'interest': 'Interest is the cost of borrowing money or the reward for saving it. For loans, you pay interest. For savings, you earn interest.',
        'default': 'This is a mock financial response. To get real AI-powered advice, please add a valid Groq API key to the backend .env.local file.'
      };
      
      const lowerQuery = query.toLowerCase();
      let mockAnswer = mockResponses.default;
      
      if (lowerQuery.includes('savings')) {
        mockAnswer = mockResponses.savings;
      } else if (lowerQuery.includes('invest')) {
        mockAnswer = mockResponses.invest;
      } else if (lowerQuery.includes('interest')) {
        mockAnswer = mockResponses.interest;
      }
      
      return res.status(200).json({
        answer: mockAnswer,
        query: query.trim()
      });
    }

  } catch (error) {
    console.error('Financial search controller error:', error);
    
    // Return error response
    return res.status(500).json({
      error: error.message || 'Unable to process request',
      answer: 'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our financial advisors for assistance.'
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Financial AI Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🤖 Financial AI: http://localhost:${PORT}/api/financial-search`);
  console.log(`🔑 Groq API Key: ${process.env.GROQ_API_KEY ? '✅ Loaded' : '❌ Not loaded'}`);
  console.log(`🆓 Using FREE model: llama-3.1-8b-instant`);
  console.log(`📱 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});
