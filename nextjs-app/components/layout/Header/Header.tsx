/**
 * Header Component
 * Main header with green top bar and white navigation bar
 * Uses legacy CSS classes for exact UI replication
 */
'use client';

import React, { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { Navigation } from '../Navigation/Navigation';

export interface HeaderProps {
    /** Optional additional CSS class */
    className?: string;
    /** Whether user is authenticated */
    isAuthenticated?: boolean;
    /** Whether to show the navigation bar */
    showNavigation?: boolean;
}

export function Header({
    className = '',
    isAuthenticated = false,
    showNavigation = true,
}: HeaderProps): React.ReactElement {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Detect mobile/tablet view
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 1024;
            console.log('Window width:', window.innerWidth, 'Is mobile:', mobile);
            setIsMobile(mobile);
        };
        
        // Initial check
        checkMobile();
        
        // Add resize listener with debouncing
        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkMobile, 100);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <header className={`site-header ${className} ${isHeaderVisible ? '' : 'hidden'}`}>
            {/* Green Top Bar */}
            <TopBar 
                isAuthenticated={isAuthenticated} 
                isMobileMenuOpen={isMobileMenuOpen}
                onToggleMobileMenu={toggleMobileMenu}
            />

            {/* White Navigation Bar - Hidden on mobile/tablet */}
            {showNavigation && !isMobile && (
                <div className="header-white">
                    <div className="container header-white-inner">
                        <Navigation />
                    </div>
                </div>
            )}

            {/* Mobile Navigation Menu - Only shown on mobile/tablet */}
            {isMobile && (
                <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                    <Navigation />
                </div>
            )}
        </header>
    );
}