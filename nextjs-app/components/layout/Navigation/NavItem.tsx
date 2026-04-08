/**
 * NavItem Component
 * Renders an individual navigation item with optional dropdown
 * Uses legacy CSS classes for exact UI replication
 */

'use client';

import React from 'react';
import Link from 'next/link';
import type { NavSection } from '@/types/navigation';
import { Dropdown } from './Dropdown';

export interface NavItemProps {
    /** Navigation section data */
    section: NavSection;
    /** Whether this is a simple link (no dropdown) */
    isSimpleLink?: boolean;
    /** Whether this dropdown is currently active */
    isActive?: boolean;
    /** Callback when dropdown is toggled */
    onToggle?: () => void;
    /** Callback when dropdown is closed */
    onClose?: () => void;
}

/**
 * NavItem Component
 * Displays a navigation item with an optional dropdown menu
 */
export function NavItem({
    section,
    isSimpleLink = false,
    isActive = false,
    onToggle,
    onClose
}: NavItemProps): React.ReactElement {
    // Determine specific dropdown classes based on section ID
    let dropdownClasses = 'dropdown';
    
    if (section.id === 'planning-advice') {
        dropdownClasses += ' dropdown--planning';
    } else if (section.id === 'products') {
        dropdownClasses += ' dropdown--products';
    }

    if (isSimpleLink || section.type === 'link') {
        return (
            <div className="nav-item">
                <Link
                    href={section.href ?? '#'}
                    className="nav-trigger"
                    aria-label={section.ariaLabel}
                >
                    {section.label}
                </Link>
            </div>
        );
    }

    return (
        <div className={`nav-item ${isActive ? 'is-open' : ''}`}>
            <button
                type="button"
                className="nav-trigger"
                aria-expanded={isActive}
                aria-label={section.ariaLabel}
                onClick={onToggle}
            >
                {section.label}
            </button>
            {(section.links || section.submenus) && (
                <Dropdown
                    links={section.links || []}
                    submenus={section.submenus}
                    className={dropdownClasses}
                />
            )}
        </div>
    );
}