'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function StartInvestingPage() {
    const [selectedGoal, setSelectedGoal] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [investmentAmount, setInvestmentAmount] = useState('');

    const investmentGoals = [
        {
            id: 'retirement',
            title: 'Retirement Planning',
            description: 'Build wealth for your golden years with tax-advantaged accounts',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            accounts: ['Traditional IRA', 'Roth IRA', '401(k) Rollover'],
        },
        {
            id: 'growth',
            title: 'Long-Term Growth',
            description: 'Grow your wealth over time with diversified investments',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0l-8-8-8 8M5 7h8m0 0l8 8-8M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            accounts: ['Individual Brokerage', 'Joint Brokerage', 'Custodial Account'],
        },
        {
            id: 'income',
            title: 'Income Generation',
            description: 'Generate regular income from your investments',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0V1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            accounts: ['Dividend Stocks', 'Bond Funds', 'REITs'],
        },
        {
            id: 'education',
            title: 'Education Savings',
            description: 'Save for education expenses with tax-free growth',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            ),
            accounts: ['529 College Savings', 'Coverdell ESA', 'UTMA/UGMA'],
        },
    ];

    const experienceLevels = [
        {
            id: 'beginner',
            title: 'Just Getting Started',
            description: 'I\'m new to investing and want guidance',
            features: ['Educational Resources', 'Investment Guidance', 'Portfolio Recommendations'],
        },
        {
            id: 'intermediate',
            title: 'Some Experience',
            description: 'I understand the basics and want to take control',
            features: ['Advanced Tools', 'Research Access', 'Self-Directed Options'],
        },
        {
            id: 'advanced',
            title: 'Experienced Investor',
            description: 'I\'m ready for sophisticated investment strategies',
            features: ['Professional Trading', 'Options & Futures', 'Margin Trading'],
        },
    ];

    const investmentAmounts = [
        { id: 'small', label: 'Under $1,000', description: 'Start small and grow over time' },
        { id: 'medium', label: '$1,000 - $10,000', description: 'Build a diversified portfolio' },
        { id: 'large', label: '$10,000 - $50,000', description: 'Substantial investment strategy' },
        { id: 'very-large', label: '$50,000+', description: 'Advanced wealth management' },
    ];

    const recommendedAccounts = {
        retirement: ['Traditional IRA', 'Roth IRA'],
        growth: ['Individual Brokerage', 'Joint Brokerage'],
        income: ['Individual Brokerage', 'IRA'],
        education: ['529 College Savings', 'Coverdell ESA'],
    };

    const getRecommendation = () => {
        if (selectedGoal && experienceLevel && investmentAmount) {
            const goal = investmentGoals.find(g => g.id === selectedGoal);
            const exp = experienceLevels.find(e => e.id === experienceLevel);
            const amount = investmentAmounts.find(a => a.id === investmentAmount);
            
            return {
                goal,
                experience: exp,
                amount,
                accounts: recommendedAccounts[selectedGoal as keyof typeof recommendedAccounts] || [],
            };
        }
        return null;
    };

    const recommendation = getRecommendation();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Start Your Investment Journey
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Take the first step toward building wealth. We'll help you choose the right account and investment strategy for your goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Selection Steps */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Step 1: Investment Goal */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                                    <h2 className="text-2xl font-semibold text-gray-900">What's Your Investment Goal?</h2>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    {investmentGoals.map((goal) => (
                                        <label
                                            key={goal.id}
                                            className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                selectedGoal === goal.id
                                                    ? 'border-gray-800 bg-gray-50'
                                                    : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="goal"
                                                value={goal.id}
                                                checked={selectedGoal === goal.id}
                                                onChange={(e) => setSelectedGoal(e.target.value)}
                                                className="sr-only"
                                            />
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mr-3">
                                                    {goal.icon}
                                                </div>
                                                <div className="font-semibold text-gray-900">{goal.title}</div>
                                            </div>
                                            <div className="text-sm text-gray-600 mb-2">{goal.description}</div>
                                            <div className="text-xs text-gray-500">
                                                {goal.accounts.slice(0, 2).join(', ')}
                                                {goal.accounts.length > 2 && ` +${goal.accounts.length - 2} more`}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Experience Level */}
                            {selectedGoal && (
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                                        <h2 className="text-2xl font-semibold text-gray-900">What's Your Experience Level?</h2>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {experienceLevels.map((level) => (
                                            <label
                                                key={level.id}
                                                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                    experienceLevel === level.id
                                                        ? 'border-gray-800 bg-gray-50'
                                                        : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="experience"
                                                    value={level.id}
                                                    checked={experienceLevel === level.id}
                                                    onChange={(e) => setExperienceLevel(e.target.value)}
                                                    className="sr-only"
                                                />
                                                <div className="font-semibold text-gray-900 mb-1">{level.title}</div>
                                                <div className="text-sm text-gray-600 mb-2">{level.description}</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {level.features.map((feature, index) => (
                                                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Investment Amount */}
                            {selectedGoal && experienceLevel && (
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                                        <h2 className="text-2xl font-semibold text-gray-900">How Much Will You Invest Initially?</h2>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {investmentAmounts.map((amount) => (
                                            <label
                                                key={amount.id}
                                                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                                    investmentAmount === amount.id
                                                        ? 'border-gray-800 bg-gray-50'
                                                        : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="amount"
                                                    value={amount.id}
                                                    checked={investmentAmount === amount.id}
                                                    onChange={(e) => setInvestmentAmount(e.target.value)}
                                                    className="sr-only"
                                                />
                                                <div className="font-semibold text-gray-900 mb-1">{amount.label}</div>
                                                <div className="text-sm text-gray-600">{amount.description}</div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Recommendation */}
                        <div className="lg:col-span-1">
                            {recommendation ? (
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Personalized Recommendation</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Goal</div>
                                            <div className="font-medium text-gray-900">{recommendation.goal?.title}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Experience</div>
                                            <div className="font-medium text-gray-900">{recommendation.experience?.title}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 mb-1">Investment Amount</div>
                                            <div className="font-medium text-gray-900">{recommendation.amount?.label}</div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 mb-6">
                                        <h4 className="font-medium text-gray-900 mb-3">Recommended Accounts</h4>
                                        <div className="space-y-2">
                                            {recommendation.accounts.map((account, index) => (
                                                <div key={index} className="flex items-center">
                                                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{account}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Link href="/open-brokerage-account" className="block w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-900 text-center font-medium transition-colors">
                                            Open Recommended Account
                                        </Link>
                                        
                                        <button className="w-full border border-gray-800 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                                            Learn More About Accounts
                                        </button>
                                    </div>

                                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="font-medium text-gray-800">Need Help?</div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-2">Our investment specialists are here to help</p>
                                        <a href="tel:09150270900" className="text-gray-800 hover:underline font-medium">
                                            09150270900
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                    <div className="text-center py-8">
                                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Complete the Steps Above</h3>
                                        <p className="text-gray-600">Answer all questions to see your personalized investment recommendation</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Resources Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Resources</h2>
                        <p className="text-lg text-gray-600">Educational content and tools to help you succeed</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.246-.523 4.5-.747V6.253z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Education</h3>
                            <p className="text-gray-600">Learn the fundamentals of investing with our comprehensive guides and tutorials.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Analysis</h3>
                            <p className="text-gray-600">Access real-time market data, research reports, and expert insights.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                            <p className="text-gray-600">Connect with financial advisors for personalized investment strategies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
