import { NextRequest, NextResponse } from 'next/server';

// System prompt for financial assistant
const FINANCIAL_ASSISTANT_PROMPT = "You are a professional financial assistant. You provide clear, accurate, and practical financial advice. Focus on banking, savings, investments, credit, and personal finance. Keep answers simple and trustworthy. Avoid risky or misleading advice. If unsure, say so honestly.";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Validate API key
    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      console.error('GROQ_API_KEY is not set in environment variables');
      return NextResponse.json({ 
        error: 'API key not configured',
        answer: 'Financial AI service is not properly configured. Please contact support.'
      }, { status: 500 });
    }

    console.log('Calling Groq API with query:', query);
    console.log('API Key loaded:', groqApiKey ? 'YES' : 'NO');

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: FINANCIAL_ASSISTANT_PROMPT
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API error:', groqResponse.status, errorText);
      
      let errorMessage = 'AI service temporarily unavailable';
      if (groqResponse.status === 401) {
        errorMessage = 'Invalid API key. Please check your Groq API key configuration.';
      } else if (groqResponse.status === 429) {
        errorMessage = 'Too many requests. Please try again later.';
      } else if (groqResponse.status === 404) {
        errorMessage = 'API endpoint not found. Please check configuration.';
      }
      
      return NextResponse.json({ 
        error: errorMessage,
        answer: `I apologize, but ${errorMessage.toLowerCase()}. Please try again or contact our financial advisors for assistance.`
      }, { status: 500 });
    }

    const groqData = await groqResponse.json();
    const answer = groqData.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    console.log('Groq AI response received successfully');

    return NextResponse.json({ 
      answer: answer.trim(),
      query: query
    });

  } catch (error) {
    console.error('Financial search API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json({ 
      answer: `I apologize, but I'm having trouble processing your request right now. Error: ${errorMessage}. Please try again or contact our financial advisors for assistance.`,
      error: errorMessage
    }, { status: 500 });
  }
}
