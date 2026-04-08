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

async function getAIResponse(message: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful financial assistant. Keep responses short, clear, and conversational. Focus on investing, retirement, accounts, and financial planning topics."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('OpenAI API error:', error);
    return 'Sorry, I\'m having trouble responding right now. Please try again later.';
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse Twilio webhook data
    const formData = await request.formData();
    const incomingMsg = formData.get('Body') as string;
    const fromNumber = formData.get('From') as string;
    const toNumber = formData.get('To') as string;

    console.log(`Received WhatsApp message from ${fromNumber}: ${incomingMsg}`);

    if (!incomingMsg || !fromNumber) {
      return NextResponse.json({ error: 'Invalid webhook data' }, { status: 400 });
    }

    // Get AI response
    const aiResponse = await getAIResponse(incomingMsg);

    // Send response back via WhatsApp
    await twilioClient.messages.create({
      body: aiResponse,
      from: toNumber, // Use the 'To' number from incoming message as the 'from' for reply
      to: fromNumber,
    });

    console.log(`Sent WhatsApp reply to ${fromNumber}: ${aiResponse}`);

    // Return TwiML response
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${aiResponse}</Message>
</Response>`;

    return new NextResponse(twiml, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });

  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    
    // Return error response
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>Sorry, I encountered an error. Please try again later.</Message>
</Response>`;

    return new NextResponse(errorTwiml, {
      status: 500,
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }
}

// Handle webhook verification (GET request for Twilio)
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  
  // Return a simple response for webhook verification
  return NextResponse.json({ status: 'WhatsApp webhook is active' });
}
