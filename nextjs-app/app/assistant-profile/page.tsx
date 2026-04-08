'use client';

import React, { useState } from 'react';

export default function AssistantProfilePage() {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleMessageSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        
        setIsSubmitting(true);
        
        // Simulate sending message to advisor
        setTimeout(() => {
            setIsSubmitting(false);
            setMessage('');
            alert('Message sent to your advisor!');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Advisor Profile</h1>
                    <p className="text-lg text-gray-600">Connect with your dedicated financial advisor</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Advisor Info Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            {/* Profile Header */}
                            <div className="flex items-center mb-6">
                                <div className="w-20 h-20 bg-fidelity-green rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    JD
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-2xl font-bold text-gray-900">John Davidson</h2>
                                    <p className="text-fidelity-green font-medium">Senior Financial Advisor</p>
                                    <div className="flex items-center mt-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="ml-2 text-sm text-gray-600">Available</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Contact Information</h3>
                                    <div className="space-y-2">
                                        <p className="text-sm"><strong>Email:</strong> john.davidson@fidelity.com</p>
                                        <p className="text-sm"><strong>Phone:</strong> (555) 123-4567</p>
                                        <p className="text-sm"><strong>Office:</strong> Boston, MA</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Support Team</h3>
                                    <div className="space-y-2">
                                        <p className="text-sm"><strong>Assistant:</strong> Sarah Miller</p>
                                        <p className="text-sm"><strong>Phone:</strong> 
                                            <a href="tel:09150270900" className="text-fidelity-green hover:underline">
                                                09150270900
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Expertise Areas */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Areas of Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Retirement Planning',
                                        'Investment Strategy',
                                        'Tax Planning',
                                        'Estate Planning',
                                        'Risk Management',
                                        'Portfolio Analysis'
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-fidelity-green bg-opacity-10 text-fidelity-green text-sm rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">About</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    With over 15 years of experience in financial advisory, I specialize in helping clients achieve their retirement and investment goals. 
                                    My approach focuses on personalized strategies tailored to your unique financial situation and risk tolerance.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button className="flex-1 bg-fidelity-green text-white py-3 px-4 rounded-lg hover:bg-fidelity-dark-green">
                                    Schedule Meeting
                                </button>
                                <button className="flex-1 border border-fidelity-green text-fidelity-green py-3 px-4 rounded-lg hover:bg-fidelity-green hover:text-white">
                                    Message Advisor
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Message & Support Card */}
                    <div className="space-y-6">
                        {/* Quick Message */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Send Quick Message</h3>
                            <form onSubmit={handleMessageSubmit} className="space-y-4">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message here..."
                                    rows={4}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent resize-none"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-fidelity-green text-white py-3 px-4 rounded-lg hover:bg-fidelity-dark-green disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-t-2 border-white"></div>
                                            <span className="ml-2">Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Support Contact */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-sm text-red-800 font-medium mb-2">
                                        For urgent matters, please contact our assistant team immediately:
                                    </p>
                                    <a href="tel:09150270900" className="flex items-center justify-center w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3a2 2 0 012 2h3a2 2 0 012 2h3a2 2 0 002-2h-3a2 2 0 00-2h-3a2 2 0 00-2zm2 3a2 2 0 100-4 2 2 0 000 4zm2 3a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                        Call 09150270900
                                    </a>
                                </div>
                                
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-600">
                                        <strong>Available Hours:</strong> Monday-Friday 8AM-8PM EST
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Response Time:</strong> Usually within 2 hours
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Alternative:</strong> 
                                        <a href="#" className="text-fidelity-green hover:underline">
                                            Live Chat Support
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-1.414.001L9 16.586V7a1 1 0 011-1H4a1 1 0 00-1 1v9.586l-2.707 2.293a1 1 0 01-1.414.001L17.657 16.657z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium">Boston Office</p>
                                        <p className="text-sm text-gray-600">200 Seaport Blvd, Boston, MA 02210</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3v4l3-3M9 20l3-3m6 0l-3 3" />
                                    </svg>
                                    <div>
                                        <p className="font-medium">Office Hours</p>
                                        <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
