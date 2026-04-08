/**
 * Navigation Component
 * Main navigation bar with dropdown menus and mobile responsive design
 * Uses legacy CSS classes for exact UI replication
 */

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { MAIN_NAV } from '@/config/navigation';
import type { NavSection } from '@/types/navigation';
import { NavItem } from './NavItem';
import AISearchComponent from '@/components/AISearch/AISearchComponent';

export interface NavigationProps {
    /** Optional additional CSS class */
    className?: string;
    /** Navigation sections to display (defaults to MAIN_NAV) */
    sections?: NavSection[];
    /** Whether to show the search input */
    showSearch?: boolean;
}

/**
 * Navigation Component
 * Main navigation bar with dropdown menus and mobile responsive design
 */
export function Navigation({
    className = '',
    sections = MAIN_NAV,
    showSearch = true
}: NavigationProps): React.ReactElement {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdownToggle = useCallback((dropdownId: string) => {
        setActiveDropdown((prev) => prev === dropdownId ? null : dropdownId);
    }, []);

    const handleDropdownClose = useCallback(() => {
        setActiveDropdown(null);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const navElement = document.getElementById('mainNav');
            const navRightElement = document.querySelector('.nav-right');
            
            if (navElement && navRightElement && 
                !navElement.contains(target) && 
                !navRightElement.contains(target)) {
                handleDropdownClose();
            }
        };

        // Close dropdowns on Escape key
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleDropdownClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [handleDropdownClose]);

    return (
        <>
            <nav
                className={`nav-links ${className}`}
                id="mainNav"
                aria-label="Primary"
            >
                {sections.map((section) => (
                    <NavItem 
                        key={section.id} 
                        section={section}
                        isActive={activeDropdown === section.id}
                        onToggle={() => handleDropdownToggle(section.id)}
                        onClose={handleDropdownClose}
                    />
                ))}
            </nav>

            <div className="nav-right">
                {showSearch && <AISearchComponent />}
            </div>
        </>
    );
}