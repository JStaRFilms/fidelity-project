'use client';

import React from 'react';
import Link from 'next/link';

export default function OpenAccountPage() {
    const accountTypes = [
        {
            id: 'brokerage',
            title: 'Brokerage account',
            description: 'Trade smarter with commission-free trading on stocks, ETFs, and options. Access powerful research tools and flexible investment options.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            id: 'retirement',
            title: 'Retirement & IRAs',
            description: 'Save for retirement with tax-advantaged accounts and access planning tools and investment guidance.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            id: 'cash',
            title: 'Cash management',
            description: 'Manage your cash with competitive rates, ATM access, and secure FDIC-insured balances.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
        },
        {
            id: 'hsa',
            title: 'Health savings accounts (HSAs)',
            description: 'Save and pay for qualified medical expenses in a tax-advantaged account while planning for retirement healthcare.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            id: 'crypto',
            title: 'Crypto account',
            description: 'Buy, sell, and hold cryptocurrency securely as part of your investment strategy.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            id: '529',
            title: '529 college savings plans',
            description: 'Save for education expenses with tax-advantaged college savings plans.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Investing isn't just about money—it's about your future
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Let us help you create the future you want for yourself and your loved ones. Whether you're new to investing or an experienced trader, we're here to help you on your way.
                    </p>
                </div>
            </section>

            {/* Account Options Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accountTypes.map((account) => (
                            <div
                                key={account.id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md hover:border-gray-300 transition-all duration-200"
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-6 text-blue-600">
                                    {account.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {account.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {account.description}
                                </p>

                                {/* Button */}
                                <Link
                                    href="/auth/open-account"
                                    className="inline-flex items-center justify-center w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                                >
                                    Open an account
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="bg-white py-16 px-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Need help choosing the right account?
                    </h2>
                    <a
                        href="tel:09150270900"
                        className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                        09150270900
                    </a>
                </div>
            </section>
        </div>
    );
}
