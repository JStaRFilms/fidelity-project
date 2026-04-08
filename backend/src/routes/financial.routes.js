import express from 'express';
import { financialSearch } from '../controllers/financial.controller.js';

const router = express.Router();

/**
 * @route   POST /api/financial-search
 * @desc    Get financial advice from Groq AI
 * @access   Public
 */
router.post('/financial-search', financialSearch);

export default router;
