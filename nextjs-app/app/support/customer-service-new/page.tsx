'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CustomerServicePage() {
    const [activeTab, setActiveTab] = useState('general');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const tabs = [
        { id: 'general', label: 'General Support', icon: '🔧' },
        { id: 'accounts', label: 'Account Help', icon: '👤' },
        { id: 'technical', label: 'Technical Support', icon: '💻' },
        { id: 'security', label: 'Security', icon: '🔒' },
    ];

    const faqs = {
        general: [
            {
                question: 'How do I reset my password?',
                answer: 'Click the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your email to reset your password.'
            },
            {
                question: 'How do I open a new account?',
                answer: 'Click "Open an Account" in the top navigation. Follow the step-by-step process to create your new Fidelity account. You\'ll need to provide personal information and verify your identity.'
            },
            {
                question: 'What are Fidelity\'s business hours?',
                answer: 'Our customer service is available Monday-Friday 8AM-8PM EST. For urgent matters, our automated phone system is available 24/7.'
            },
        ],
        accounts: [
            {
                question: 'How do I update my personal information?',
                answer: 'Log in to your account and navigate to Profile > Personal Information. You can update your address, phone number, and other personal details there.'
            },
            {
                question: 'How do I close my account?',
                answer: 'Account closure requests must be made in writing. Please call our customer service team at 09150270900 for assistance with account closure.'
            },
            {
                question: 'How do I add a beneficiary?',
                answer: 'Navigate to Profile > Beneficiaries to add or update beneficiary information for your accounts. This ensures your assets are distributed according to your wishes.'
            },
        ],
        technical: [
            {
                question: 'Why can\'t I log in to my account?',
                answer: 'Ensure you\'re using the correct username and password. Clear your browser cache and cookies. If issues persist, use the "Forgot Password" option or contact support.'
            },
            {
                question: 'The website is loading slowly',
                answer: 'Try clearing your browser cache, disable browser extensions, or try a different browser. Our technical team monitors performance continuously.'
            },
            {
                question: 'Mobile app not working',
                answer: 'Ensure you have the latest version of the app. Check your internet connection and try restarting the app. Contact technical support if issues continue.'
            },
        ],
        security: [
            {
                question: 'How do I enable two-factor authentication?',
                answer: 'Go to Profile > Security Settings and enable Two-Factor Authentication. We recommend using an authenticator app for enhanced security.'
            },
            {
                question: 'Is my account secure?',
                answer: 'Fidelity uses bank-level encryption and multi-layer security. We monitor accounts 24/7 for suspicious activity and will alert you immediately.'
            },
            {
                question: 'What should I do if I suspect fraud?',
                answer: 'Contact us immediately at 09150270900. We\'ll secure your account and investigate any suspicious activity. Never share your login credentials.'
            },
        ],
    };

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-fidelity-green text-white py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Customer Service</h1>
                        <p className="text-xl opacity-90">We're here to help with all Your Financial Needs</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Quick Actions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-6 text-gray-900">Quick Actions</h2>
                            
                            <div className="space-y-4">
                                <Link href="/login" className="block p-4 bg-fidelity-green text-white rounded-lg hover:bg-fidelity-dark-green transition-colors text-center">
                                    <div className="font-semibold">Log In to Your Account</div>
                                    <div className="text-sm opacity-90">Access your accounts and portfolio</div>
                                </Link>
                                
                                <Link href="/open-account" className="block p-4 border-2 border-fidelity-green text-fidelity-green rounded-lg hover:bg-fidelity-green hover:text-white transition-colors text-center">
                                    <div className="font-semibold">Open New Account</div>
                                    <div className="text-sm opacity-90">Start investing with Fidelity</div>
                                </Link>

                                <Link href="/start-transfer" className="block p-4 border-2 border-gray-300 rounded-lg hover:border-fidelity-green transition-colors text-center">
                                    <div className="font-semibold text-gray-900">Start Transfer</div>
                                    <div className="text-sm text-gray-600">Move money between accounts</div>
                                </Link>

                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="font-semibold text-red-800 mb-2">Need Immediate Help?</div>
                                    <div className="text-red-700 mb-3">Call our assistant team:</div>
                                    <a href="tel:09150270900" className="text-2xl font-bold text-red-600 hover:text-red-800">
                                        09150270900
                                    </a>
                                    <div className="text-sm text-red-600 mt-2">Available 24/7 for urgent matters</div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Information</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700 w-24">Phone:</span>
                                        <a href="tel:09150270900" className="text-fidelity-green hover:underline">09150270900</a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700 w-24">Email:</span>
                                        <a href="mailto:support@fidelity.com" className="text-fidelity-green hover:underline">support@fidelity.com</a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700 w-24">Hours:</span>
                                        <span className="text-gray-900">Mon-Fri 8AM-8PM EST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Tabs and FAQ */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            {/* Tabs */}
                            <div className="flex space-x-1 mb-6 border-b border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`pb-3 px-4 font-medium transition-colors border-b-2 ${
                                            activeTab === tab.id
                                                ? 'text-fidelity-green border-fidelity-green'
                                                : 'text-gray-600 border-transparent hover:text-gray-900'
                                        }`}
                                    >
                                        <span className="mr-2">{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ Content */}
                            <div className="space-y-4">
                                {faqs[activeTab as keyof typeof faqs].map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
                                        >
                                            <span className="font-medium text-gray-900">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform ${
                                                    expandedFaq === index ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        
                                        {expandedFaq === index && (
                                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Help Section */}
                <div className="max-w-7xl mx-auto px-4 mt-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Additional Resources</h2>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-fidelity-green rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13.25l-1.5 1.5m1.5-1.5h13.25m-13.25 0h13.25" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Help Center</h3>
                                <p className="text-gray-600 mb-4">Browse our comprehensive help articles and guides</p>
                                <Link href="/support/help-center" className="inline-flex items-center text-fidelity-green hover:text-fidelity-dark-green font-medium">
                                    Visit Help Center
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4 4H5l-4-4V6a2 2 0 012-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Live Chat</h3>
                                <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                                <button className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium">
                                    Start Chat
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12h.01" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Schedule Appointment</h3>
                                <p className="text-gray-600 mb-4">Book a call with a financial advisor</p>
                                <Link href="/assistant-profile" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium">
                                    Schedule Now
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h18M8 15l4-4 4 4H4l4-4z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
