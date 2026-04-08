/**
 * TopBar Component
 * Green top bar with brand logo, utility links, and CTA buttons
 * Uses legacy CSS classes for exact UI replication
 */
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { SECONDARY_NAV } from '@/config/navigation';

/**
 * Filter utility links (non-CTA links)
 */
function isUtilityLink(id: string): boolean {
    return id !== 'open-account' && id !== 'login';
}

/**
 * Filter CTA buttons
 */
function isCtaButton(id: string): boolean {
    return id === 'open-account' || id === 'login';
}

/**
 * Check if a link is for authenticated users only
 */
function isAuthenticatedOnly(id: string): boolean {
    return id === 'profile';
}

export interface TopBarProps {
    /** Optional additional CSS class */
    className?: string;
    /** Whether user is authenticated */
    isAuthenticated?: boolean;
    /** Whether mobile menu is open */
    isMobileMenuOpen?: boolean;
    /** Mobile menu toggle function */
    onToggleMobileMenu?: () => void;
}

export function TopBar({ className = '', isAuthenticated = false, isMobileMenuOpen = false, onToggleMobileMenu }: TopBarProps): React.ReactElement {
    const utilityLinks = SECONDARY_NAV.filter((link) => isUtilityLink(link.id));
    const ctaButtons = SECONDARY_NAV.filter((link) => isCtaButton(link.id));
    const authenticatedLink = SECONDARY_NAV.find((link) => link.id === 'profile');
    const loginButton = ctaButtons.find((button) => button.id === 'login');

    // Effect to add/remove 'is-open' class to body when mobile menu state changes
    useEffect(() => {
        // Only run on client-side
        if (typeof window !== 'undefined') {
            if (isMobileMenuOpen) {
                document.body.classList.add('mobile-menu-open');
            } else {
                document.body.classList.remove('mobile-menu-open');
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <div className={`header-green ${className}`}>
            <div className="container header-green-inner">
                {/* Mobile Hamburger Menu - Left side */}
                <button 
                    className="hamburger-menu" 
                    type="button" 
                    aria-label="Toggle menu" 
                    aria-expanded={isMobileMenuOpen}
                    onClick={onToggleMobileMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                {/* Brand Logo - Centered on Mobile */}
                <Link href="/" className="brand" aria-label="Fidelity Investments - Home">
                    <span className="mobile-brand-text">Fidelity</span>
                    <img 
                        src="/logo-horizontal.svg" 
                        alt="Fidelity Investment" 
                        className="brand-logo desktop-only"
                    />
                </Link>

                {/* Mobile Log in Button - Right side */}
                {loginButton && (
                    <Link
                        href={loginButton.href}
                        className="mobile-login-btn"
                        aria-label={loginButton.ariaLabel}
                    >
                        {loginButton.label}
                    </Link>
                )}

                {/* Desktop Utility Links and CTA Buttons */}
                <div className="header-links desktop-only">
                    {/* Utility Links (Customer Service, Fidelity Assistant, etc.) */}
                    {utilityLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="header-link"
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Profile link for authenticated users */}
                    {isAuthenticated && authenticatedLink && (
                        <Link
                            href={authenticatedLink.href}
                            className="header-link"
                            aria-label={authenticatedLink.ariaLabel}
                        >
                            {authenticatedLink.label}
                        </Link>
                    )}

                    {/* CTA Buttons (Open an account, Log in) */}
                    {ctaButtons.map((button) => (
                        <Link
                            key={button.id}
                            href={button.href}
                            className={`header-btn header-btn--${button.id === 'login' ? 'light' : 'primary'}`}
                            aria-label={button.ariaLabel}
                        >
                            {button.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}