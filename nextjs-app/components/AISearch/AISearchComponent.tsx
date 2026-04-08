'use client';

import React, { useState } from 'react';

interface AISearchResponse {
    answer: string;
    success: boolean;
    error?: string;
}

export default function AISearchComponent() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState<AISearchResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!question.trim()) return;
        
        setIsLoading(true);
        setResponse(null);
        
        try {
            console.log('Sending question:', question);
            
            const result = await fetch('/api/ai-search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            console.log('Response status:', result.status);
            
            if (!result.ok) {
                const errorText = await result.text();
                console.error('API error:', result.status, errorText);
                throw new Error(`API error: ${result.status}`);
            }

            const data: AISearchResponse = await result.json();
            console.log('Response data:', data);
            
            setResponse(data);
            setIsOpen(true);
        } catch (error) {
            console.error('Search error:', error);
            setResponse({
                answer: 'Please contact our assistant team at 09150270900 for further help.',
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
            setIsOpen(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setQuestion('');
        setResponse(null);
    };

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="How can we help?"
                        className="w-48 px-3 py-0.5 pr-10 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-500"
                        disabled={isLoading}
                    />
                    
                    {/* Search Button */}
                    <button
                        type="submit"
                        disabled={isLoading || !question.trim()}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-t-2 border-white"></div>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-6a2 2 0 012-2h3a2 2 0 012 2h3a2 2 0 012 2zm2 3a2 2 0 100-4 2 2 0 000 4zm2 3a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        )}
                    </button>
                </div>
            </form>

            {/* AI Response Box */}
            {isOpen && response && (
                <div className="absolute top-full left-0 right-0 mt-2 w-full max-w-2xl z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
                        {/* Response Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">AI Assistant Response</h3>
                            <button
                                onClick={handleClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Response Content */}
                        <div className="prose prose prose-sm max-h-96 overflow-y-auto">
                            {response.success ? (
                                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                                    {response.answer}
                                </div>
                            ) : (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-red-800">
                                        {response.error || 'Sorry, I encountered an error. Please try again or contact our assistant team at 09150270900.'}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Response Footer */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                    💡 Need more help? Call our assistant team at{' '}
                                    <a href="tel:09150270900" className="text-fidelity-green hover:underline font-medium">
                                        09150270900
                                    </a>
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
