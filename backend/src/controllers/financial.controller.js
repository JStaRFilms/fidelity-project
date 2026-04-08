import { getFinancialAnswer } from '../services/groq.service.js';

/**
 * Handle financial search request
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
export const financialSearch = async (req, res) => {
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

    // Get AI response
    const answer = await getFinancialAnswer(query.trim());

    // Return successful response
    return res.status(200).json({
      answer,
      query: query.trim()
    });

  } catch (error) {
    console.error('Financial search controller error:', error);
    
    // Return error response
    return res.status(500).json({
      error: error.message || 'Unable to process request',
      answer: 'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our financial advisors for assistance.'
    });
  }
};
