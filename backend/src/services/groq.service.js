import Groq from 'groq';

// Initialize Groq client
const groq = new Groq(process.env.GROQ_API_KEY || '');

// System prompt for financial assistant
const FINANCIAL_ASSISTANT_PROMPT = "You are a professional financial assistant. Provide clear, simple, and practical financial advice about banking, savings, investments, loans, and personal finance. Keep responses concise and trustworthy. Avoid risky or misleading advice. If unsure, say so honestly.";

/**
 * Get financial answer from Groq AI using free model
 * @param {string} query - User's financial question
 * @returns {Promise<string>} - AI response
 */
export async function getFinancialAnswer(query) {
  try {
    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY not configured in environment variables');
    }

    console.log('Calling Groq AI with query:', query);

    // Call Groq API with free model
    const chatCompletion = await groq.chat.completions.create({
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
      max_tokens: 500, // Optimize for free tier
      temperature: 0.7,
      top_p: 1,
      stream: false,
    });

    const answer = chatCompletion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    
    console.log('Groq AI response received successfully');
    return answer.trim();

  } catch (error) {
    console.error('Groq AI service error:', error);
    
    // Handle specific error cases
    if (error.status === 401) {
      throw new Error('Invalid Groq API key. Please check your configuration.');
    } else if (error.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    } else if (error.status === 404) {
      throw new Error('Groq API endpoint not found.');
    }
    
    throw new Error(`Groq AI service error: ${error.message}`);
  }
}

export default {
  getFinancialAnswer
};
