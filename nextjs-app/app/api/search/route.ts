import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Twilio } from 'twilio';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize Twilio
const twilioClient = new Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// WhatsApp configuration
const WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';
const MY_WHATSAPP_NUMBERS = [
  process.env.MY_WHATSAPP_NUMBER || '+2349150270900',
  '+23401954518600' // Second WhatsApp number
];

async function sendToWhatsApp(question: string, answer: string) {
  try {
    const message = `New Search:\n${question}\n\nAI Answer:\n${answer}`;
    
    // Send to all configured WhatsApp numbers
    const sendPromises = MY_WHATSAPP_NUMBERS.map(async (number) => {
      try {
        await twilioClient.messages.create({
          body: message,
          from: WHATSAPP_FROM,
          to: `whatsapp:${number}`,
        });
        console.log(`Message sent to WhatsApp ${number} successfully`);
      } catch (error) {
        console.error(`Failed to send WhatsApp message to ${number}:`, error);
      }
    });
    
    await Promise.allSettled(sendPromises);
    console.log('All WhatsApp messages processed');
  } catch (error) {
    console.error('Failed to send WhatsApp messages:', error);
    // Don't throw error - we still want to return the AI response
  }
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful financial assistant. Keep responses short, clear, and conversational. Focus on investing, retirement, accounts, and financial planning topics."
        },
        {
          role: "user",
          content: question
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    const answer = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Send to WhatsApp (non-blocking)
    sendToWhatsApp(question, answer).catch(console.error);

    return NextResponse.json({ 
      answer: answer.trim(),
      question: question
    });

  } catch (error) {
    console.error('Search API error:', error);
    
    // Fallback response if OpenAI fails
    const fallbackResponse = 'AI service is not configured yet. Please add your OpenAI API key to .env.local file and restart the server.';
    
    return NextResponse.json({ 
      answer: fallbackResponse,
      error: 'AI service temporarily unavailable'
    }, { status: 500 });
  }
}
