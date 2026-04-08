import { NextRequest, NextResponse } from 'next/server';

interface AISearchRequest {
    question: string;
}

interface AISearchResponse {
    answer: string;
    success: boolean;
    error?: string;
}

// OpenAI API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export async function POST(request: NextRequest) {
    console.log('AI Search API called');
    
    if (request.method !== 'POST') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    try {
        const { question }: AISearchRequest = await request.json();
        console.log('Received question:', question);

        // Validate input
        if (!question || question.trim().length === 0) {
            return NextResponse.json(
                { answer: 'Please enter a question to search.', success: false },
                { status: 400 }
            );
        }

        if (!OPENAI_API_KEY) {
            console.error('OpenAI API key is missing');
            return NextResponse.json(
                { answer: 'Please contact our assistant team at 09150270900 for further help.', success: false },
                { status: 500 }
            );
        }

        console.log('Calling OpenAI API...');
        
        // Call OpenAI API
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional financial assistant for Fidelity Investments. Help users with questions about:
- Account opening and management
- Money transfers between accounts
- Brokerage account services
- Investment options and portfolio management
- Advisor services and scheduling
- Login and security help
- General financial guidance

Always provide helpful, accurate, and professional responses. If you cannot answer a question, advise the user to contact the assistant team at 09150270900. Keep responses concise but comprehensive.`
                    },
                    {
                        role: 'user',
                        content: question
                    }
                ],
                max_tokens: 500,
                temperature: 0.7,
            }),
        });

        console.log('OpenAI response status:', response.status, response.statusText);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenAI API error:', response.status, response.statusText, errorText);
            return NextResponse.json(
                { answer: 'Please contact our assistant team at 09150270900 for further help.', success: false },
                { status: 500 }
            );
        }

        const data = await response.json();
        console.log('OpenAI response data:', data);
        
        const aiAnswer = data.choices[0]?.message?.content || 'I apologize, but I cannot assist with that question. Please contact our assistant team at 09150270900 for further help.';

        console.log('AI Answer:', aiAnswer);

        return NextResponse.json({
            answer: aiAnswer,
            success: true
        });

    } catch (error) {
        console.error('AI Search error:', error);
        return NextResponse.json(
            { answer: 'Please contact our assistant team at 09150270900 for further help.', success: false },
            { status: 500 }
        );
    }
}
