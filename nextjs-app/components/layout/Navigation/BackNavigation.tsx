'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BackNavigationProps {
    /** Optional custom back URL */
    backUrl?: string;
    /** Show forward navigation if available */
    showForward?: boolean;
    /** Forward navigation URL */
    forwardUrl?: string;
    /** Custom className */
    className?: string;
}

export function BackNavigation({ 
    backUrl, 
    showForward = false, 
    forwardUrl, 
    className = '' 
}: BackNavigationProps) {
    const router = useRouter();

    const handleBack = () => {
        if (backUrl) {
            router.push(backUrl);
        } else {
            router.back();
        }
    };

    return (
        <div className={`flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200 ${className}`}>
            <div className="flex items-center space-x-4">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 19l-7-7 7-7" 
                        />
                    </svg>
                    <span className="font-medium">Back</span>
                </button>

                {/* Forward Button */}
                {showForward && forwardUrl && (
                    <Link
                        href={forwardUrl}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                        <span className="font-medium">Next</span>
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
}
