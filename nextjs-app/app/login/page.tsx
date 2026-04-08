'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};
        
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Redirect to dashboard on successful login
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-fidelity-green to-fidelity-dark-green flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your Fidelity account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email or Username
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter your email or username"
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-fidelity-green focus:border-transparent ${
                                    errors.password ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c4.9 0 9.413 2.353 11.618 6.087l1.97 1.97a3 3 0 001.415 1.415l2.694 2.693A10.053 10.053 0 0019.916 21.825l-2.694-2.693a3 3 0 00-1.415-1.415l-1.97-1.97A10.05 10.05 0 0112 4.175c-4.9 0-9.413 2.353-11.618 6.087l1.97-1.97a3 3 0 011.415-1.415l2.694-2.693A10.053 10.053 0 0019.916 2.175l-2.694 2.693a3 3 0 00-1.415 1.415l-1.97 1.97A10.05 10.05 0 0112 19.825c-4.9 0-9.413-2.353-11.618-6.087l-1.97-1.97a3 3 0 01-1.415-1.415l-2.694-2.693A10.053 10.053 0 004.084 21.825l2.694-2.693a3 3 0 001.415-1.415l1.97-1.97A10.05 10.05 0 0112 4.175z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2 3a2 2 0 100-4 2 2 0 000 4zm2 3a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-fidelity-green focus:ring-fidelity-green border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">Remember me</span>
                        </label>
                        <Link href="/forgot-password" className="text-sm text-fidelity-green hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-fidelity-green text-white py-3 px-4 rounded-lg hover:bg-fidelity-dark-green focus:ring-4 focus:ring-fidelity-green focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-t-2 border-white"></div>
                                <span className="ml-2">Signing in...</span>
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    {/* Error Message */}
                    {errors.email || errors.password ? (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            <p className="text-sm">Please correct the errors above and try again.</p>
                        </div>
                    ) : null}
                </form>

                {/* Footer Links */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/open-account" className="text-fidelity-green hover:underline font-medium">
                            Open an Account
                        </Link>
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                        Need help? Contact our assistant team at{' '}
                        <a href="tel:09150270900" className="text-fidelity-green hover:underline font-medium">
                            09150270900
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
