'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { BackNavigation } from '@/components/layout/Navigation/BackNavigation';

export default function AuthOpenAccountPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ssn: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        accountType: '',
        agreeToTerms: false,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const accountTypes = [
        {
            id: 'brokerage',
            name: 'Brokerage Account',
            features: ['$0 commission trades', 'Advanced trading tools', 'Research access'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            recommended: true,
        },
        {
            id: 'ira',
            name: 'Retirement & IRAs',
            features: ['Tax-deferred growth', 'Contribution deductions', 'Rollover options'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            recommended: false,
        },
        {
            id: 'cash',
            name: 'Cash Management',
            features: ['High-yield savings', 'ATM access', 'FDIC insured'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            recommended: false,
        },
        {
            id: 'hsa',
            name: 'Health Savings Account (HSA)',
            features: ['Tax-free contributions', 'Investment options', 'Medical expense coverage'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            recommended: false,
        },
        {
            id: 'crypto',
            name: 'Crypto Account',
            features: ['Secure trading', 'Multiple cryptocurrencies', 'Cold storage'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            recommended: false,
        },
        {
            id: '529',
            name: '529 College Savings Plan',
            features: ['Tax-free growth', 'State tax benefits', 'Flexible withdrawals'],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            ),
            recommended: false,
        },
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '$0 Account Minimums',
            description: 'Start investing with no minimum balance requirements',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Secure Transactions',
            description: 'Bank-level security and encryption for all transactions',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Powerful Investment Tools',
            description: 'Professional-grade research and trading tools',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Trusted Financial Guidance',
            description: 'Expert advisors and personalized financial planning',
        },
    ];

    const steps = [
        { id: 1, title: 'Account Type', description: 'Choose your account type' },
        { id: 2, title: 'Personal Info', description: 'Your basic information' },
        { id: 3, title: 'Contact Details', description: 'How to reach you' },
        { id: 4, title: 'Review & Submit', description: 'Confirm and submit' },
    ];

    const updateFormData = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.accountType) {
                newErrors.accountType = 'Please select an account type';
            }
        }

        if (step === 2) {
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
            if (!formData.ssn) newErrors.ssn = 'Social Security number is required';
        }

        if (step === 3) {
            if (!formData.email) newErrors.email = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
            if (!formData.phone) newErrors.phone = 'Phone number is required';
            if (!formData.address) newErrors.address = 'Address is required';
            if (!formData.city) newErrors.city = 'City is required';
            if (!formData.state) newErrors.state = 'State is required';
            if (!formData.zip) newErrors.zip = 'ZIP code is required';
        }

        if (step === 4) {
            if (!formData.agreeToTerms) {
                newErrors.agreeToTerms = 'You must agree to the terms and conditions';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(4)) {
            console.log('Opening account:', formData);
            alert('Account opening initiated! This is a demo - in production, this would connect to our backend.');
        }
    };

    const selectedAccount = accountTypes.find(acc => acc.id === formData.accountType);

    return (
        <div className="min-h-screen bg-gray-50">
            <BackNavigation backUrl="/open-brokerage-account" />
            {/* Hero Section */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Choose the account that's right for your future
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Whether you're investing, saving for retirement, or managing cash, we offer account options designed to help you reach your financial goals.
                    </p>
                </div>
            </section>

            {/* Account Selection Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Account Type</h2>
                        <p className="text-lg text-gray-600">Choose the account that best fits your financial needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {accountTypes.map((account) => (
                            <div
                                key={account.id}
                                className={`bg-white rounded-xl shadow-sm border-2 p-8 hover:shadow-lg transition-all duration-200 cursor-pointer ${
                                    formData.accountType === account.id
                                        ? 'border-blue-600 ring-2 ring-blue-100'
                                        : 'border-gray-200 hover:border-gray-300'
                                }`}
                                onClick={() => updateFormData('accountType', account.id)}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-6 text-blue-600">
                                    {account.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {account.name}
                                </h3>

                                
                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {account.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-700">
                                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Recommended Badge */}
                                {account.recommended && (
                                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                        Recommended
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {errors.accountType && (
                        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                            {errors.accountType}
                        </div>
                    )}

                    {/* Continue Button */}
                    <div className="text-center">
                        <button
                            onClick={nextStep}
                            disabled={!formData.accountType}
                            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 focus:ring-4 focus:ring-green-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Continue to Application
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            {currentStep === 1 && (
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
                            <p className="text-lg text-gray-600">Experience the benefits of modern financial services</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-lg mb-4 text-green-600 mx-auto">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Account Opening Form Section */}
            {currentStep > 1 && (
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        {/* Progress Steps */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                            <div className="flex items-center justify-between">
                                {steps.map((step, index) => (
                                    <div key={step.id} className="flex items-center">
                                        <div className="flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                                                currentStep >= step.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}>
                                                {currentStep > step.id ? '✓' : step.id}
                                            </div>
                                            <div className={`text-xs mt-2 text-center ${
                                                currentStep >= step.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                                            }`}>
                                                {step.title}
                                            </div>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`flex-1 h-1 mx-4 ${
                                                currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                                            }`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="bg-white rounded-lg shadow-sm">
                            <form onSubmit={handleSubmit}>
                                {/* Step 2: Personal Information */}
                                {currentStep === 2 && (
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
                                        <p className="text-gray-600 mb-8">We need some basic information to set up your account</p>

                                        <div className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.firstName}
                                                        onChange={(e) => updateFormData('firstName', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="Enter your first name"
                                                    />
                                                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                    <input
                                                        type="text"
                                                        value={formData.lastName}
                                                        onChange={(e) => updateFormData('lastName', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="Enter your last name"
                                                    />
                                                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                                                    <input
                                                        type="date"
                                                        value={formData.dateOfBirth}
                                                        onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                    />
                                                    {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Social Security Number</label>
                                                    <input
                                                        type="text"
                                                        value={formData.ssn}
                                                        onChange={(e) => updateFormData('ssn', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.ssn ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="XXX-XX-XXXX"
                                                    />
                                                    {errors.ssn && <p className="mt-1 text-sm text-red-600">{errors.ssn}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(1)}
                                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Contact Information */}
                                {currentStep === 3 && (
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                                        <p className="text-gray-600 mb-8">How should we contact you about your account?</p>

                                        <div className="space-y-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => updateFormData('email', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="your.email@example.com"
                                                />
                                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => updateFormData('phone', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="(555) 123-4567"
                                                />
                                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                                                <input
                                                    type="text"
                                                    value={formData.address}
                                                    onChange={(e) => updateFormData('address', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                        errors.address ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="123 Main Street"
                                                />
                                                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                                    <input
                                                        type="text"
                                                        value={formData.city}
                                                        onChange={(e) => updateFormData('city', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.city ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="New York"
                                                    />
                                                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                                    <input
                                                        type="text"
                                                        value={formData.state}
                                                        onChange={(e) => updateFormData('state', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.state ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="NY"
                                                    />
                                                    {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                                    <input
                                                        type="text"
                                                        value={formData.zip}
                                                        onChange={(e) => updateFormData('zip', e.target.value)}
                                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                                                            errors.zip ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                        placeholder="10001"
                                                    />
                                                    {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex justify-between">
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Review & Submit */}
                                {currentStep === 4 && (
                                    <div className="p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h2>
                                        <p className="text-gray-600 mb-8">Please review your details before submitting</p>

                                        {selectedAccount && (
                                            <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                                                <h3 className="font-semibold text-gray-900 mb-4">Selected Account</h3>
                                                <div className="flex items-center">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                                                        {selectedAccount.icon}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-900">{selectedAccount.name}</div>
                                                        <div className="text-gray-600">Financial account for your needs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Personal Information</h3>
                                                <div className="space-y-2 text-sm">
                                                    <div><span className="text-gray-600">Name:</span> {formData.firstName} {formData.lastName}</div>
                                                    <div><span className="text-gray-600">Date of Birth:</span> {formData.dateOfBirth}</div>
                                                    <div><span className="text-gray-600">SSN:</span> •••-••-{formData.ssn?.slice(-4)}</div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                                                <div className="space-y-2 text-sm">
                                                    <div><span className="text-gray-600">Email:</span> {formData.email}</div>
                                                    <div><span className="text-gray-600">Phone:</span> {formData.phone}</div>
                                                    <div><span className="text-gray-600">Address:</span> {formData.address}, {formData.city}, {formData.state} {formData.zip}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <label className="flex items-start">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.agreeToTerms}
                                                    onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                                                    className="w-5 h-5 text-blue-600 focus:ring-blue-600 border-gray-300 rounded mt-1"
                                                />
                                                <span className="ml-3 text-sm text-gray-700">
                                                    I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>. I understand that this is a binding agreement and I authorize the platform to verify my information.
                                                </span>
                                            </label>
                                            {errors.agreeToTerms && <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>}
                                        </div>

                                        <div className="mt-8 flex justify-between">
                                            <button
                                                type="button"
                                                onClick={prevStep}
                                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                                            >
                                                Open Account
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            )}

            {/* Help / Support Section */}
            <section className="py-16 px-4 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need help choosing an account?</h2>
                    <p className="text-gray-600 mb-6">Our account specialists are available to help you make the right choice</p>
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
