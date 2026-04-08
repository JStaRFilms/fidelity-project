/**
 * Navigation configuration for the Fidelity Next.js application.
 * Defines the navigation menu structure based on the HTML navigation.
 */

import type { NavigationConfig, NavSection, NavLink, FooterNavSection } from '@/types/navigation';

/**
 * Secondary navigation links (top header).
 */
export const SECONDARY_NAV: NavLink[] = [
    {
        id: 'customer-service',
        label: 'Customer Service',
        href: '/support/customer-service-new',
        accessLevel: 'public',
        ariaLabel: 'Customer Service',
    },
    {
        id: 'fidelity-assistant',
        label: 'Fidelity Assistant',
        href: '/assistant-profile',
        accessLevel: 'public',
        ariaLabel: 'Fidelity Assistant',
    },
    {
        id: 'profile',
        label: 'Profile',
        href: '/assistant-profile',
        accessLevel: 'authenticated',
        ariaLabel: 'User Profile',
    },
    {
        id: 'open-account',
        label: 'Open an account',
        href: '/open-brokerage-account',
        accessLevel: 'public',
        ariaLabel: 'Open a Brokerage Account',
    },
    {
        id: 'login',
        label: 'Log in',
        href: '/login',
        accessLevel: 'public',
        ariaLabel: 'Log in to your account',
    },
];

/**
 * Main navigation sections - matches the HTML navigation structure.
 */
export const MAIN_NAV: NavSection[] = [
    {
        id: 'accounts-trade',
        label: 'Accounts & Trade',
        type: 'dropdown',
        accessLevel: 'public',
        ariaLabel: 'Accounts and Trading',
        links: [
            {
                id: 'portfolio',
                label: 'Portfolio',
                href: '/accounts/portfolio',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'account-positions',
                label: 'Account Positions',
                href: '/accounts/positions',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'trade',
                label: 'Trade',
                href: '/accounts/trade',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'fidelity-trader-plus-web',
                label: 'Fidelity Trader+ Web',
                href: '/accounts/fidelity-trader-plus-web',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'fidelity-trader-plus',
                label: 'Fidelity Trader+',
                href: '/accounts/fidelity-trader-plus',
                accessLevel: 'public',
            },
            {
                id: 'transfers',
                label: 'Transfers',
                href: '/start-transfer',
                accessLevel: 'public',
            },
            {
                id: 'cash-management',
                label: 'Cash Management',
                href: '/accounts/cash-management',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'bill-pay',
                label: 'Bill Pay',
                href: '/accounts/bill-pay',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'full-view',
                label: 'Full View',
                href: '/accounts/full-view',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'security-settings',
                label: 'Security Settings',
                href: '/accounts/security-settings',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'account-features',
                label: 'Account Features',
                href: '/accounts/features',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'documents',
                label: 'Documents',
                href: '/accounts/documents',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'tax-forms',
                label: 'Tax Forms & Information',
                href: '/accounts/tax-forms',
                accessLevel: 'public',
            },
            {
                id: 'retirement-distributions',
                label: 'Retirement Distributions',
                href: '/accounts/retirement-distributions',
                accessLevel: 'public',
            },
            {
                id: 'refer-friend',
                label: 'Refer a Friend',
                href: '/accounts/refer-friend',
                accessLevel: 'public',
            },
        ],
    },
    {
        id: 'planning-advice',
        label: 'Planning & Advice',
        type: 'dropdown',
        accessLevel: 'public',
        ariaLabel: 'Planning and Advice',
        links: [
            {
                id: 'what-we-offer',
                label: 'What We Offer',
                href: '/planning/what-we-offer',
                accessLevel: 'public',
            },
            {
                id: 'build-free-plan',
                label: 'Build Your Free Plan',
                href: '/planning/free-plan',
                accessLevel: 'public',
            },
            {
                id: 'my-goals',
                label: 'My Goals',
                href: '/planning/my-goals',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'financial-basics',
                label: 'Financial Basics',
                href: '/planning/financial-basics',
                accessLevel: 'public',
            },
            {
                id: 'building-savings',
                label: 'Building Savings',
                href: '/planning/building-savings',
                accessLevel: 'public',
            },
        ],
        submenus: [
            {
                id: 'robo-advice',
                title: 'Robo Investing Plus Advice',
                links: [
                    {
                        id: 'wealth-management',
                        label: 'Wealth Management',
                        href: '/planning/wealth-management',
                        accessLevel: 'public',
                    },
                    {
                        id: 'find-advisor',
                        label: 'Find an Advisor',
                        href: '/planning/find-advisor',
                        accessLevel: 'public',
                    },
                    {
                        id: 'retirement',
                        label: 'Retirement',
                        href: '/planning/retirement',
                        accessLevel: 'public',
                    },
                    {
                        id: 'life-events',
                        label: 'Life Events',
                        href: '/planning/life-events',
                        accessLevel: 'public',
                    },
                    {
                        id: 'saving-child',
                        label: 'Saving & Investing for a Child',
                        href: '/planning/savings-child',
                        accessLevel: 'public',
                    },
                    {
                        id: 'charitable-giving',
                        label: 'Charitable Giving',
                        href: '/planning/charitable-giving',
                        accessLevel: 'public',
                    },
                    {
                        id: 'long-term-care',
                        label: 'Long-Term Care Planning',
                        href: '/planning/long-term-care',
                        accessLevel: 'public',
                    },
                ],
            },
        ],
    },
    {
        id: 'news-research',
        label: 'News & Research',
        type: 'dropdown',
        accessLevel: 'public',
        ariaLabel: 'News and Research',
        links: [
            {
                id: 'news',
                label: 'News',
                href: '/research/news',
                accessLevel: 'public',
            },
            {
                id: 'wealth-insights',
                label: 'Wealth Management Insights',
                href: '/research/insights',
                accessLevel: 'public',
            },
            {
                id: 'watchlist',
                label: 'Watchlist',
                href: '/research/watchlist',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'alerts',
                label: 'Alerts',
                href: '/research/alerts',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'stocks-etfs-crypto',
                label: 'Stocks, ETFs, Crypto',
                href: '/research/stocks-etfs-crypto',
                accessLevel: 'public',
            },
            {
                id: 'mutual-funds',
                label: 'Mutual Funds',
                href: '/research/mutual-funds',
                accessLevel: 'public',
            },
            {
                id: 'fixed-income',
                label: 'Fixed Income, Bonds & CDs',
                href: '/research/fixed-income',
                accessLevel: 'public',
            },
            {
                id: 'options',
                label: 'Options',
                href: '/research/options',
                accessLevel: 'authenticated',
                icon: 'fas fa-lock',
            },
            {
                id: 'ipos',
                label: 'IPOs',
                href: '/research/ipos',
                accessLevel: 'public',
            },
            {
                id: 'annuities',
                label: 'Annuities',
                href: '/research/annuities',
                accessLevel: 'public',
            },
            {
                id: 'learn',
                label: 'Learn',
                href: '/research/learn',
                accessLevel: 'public',
            },
        ],
    },
    {
        id: 'products',
        label: 'Products',
        type: 'dropdown',
        accessLevel: 'public',
        ariaLabel: 'Products and Services',
        links: [
            {
                id: 'mutual-funds-product',
                label: 'Mutual Funds',
                href: '/products/investing-trading#mutual-funds',
                accessLevel: 'public',
            },
            {
                id: 'crypto-product',
                label: 'Crypto',
                href: '/products/crypto',
                accessLevel: 'public',
            },
            {
                id: 'direct-indexing',
                label: 'Direct Indexing',
                href: '/products/direct-indexing',
                accessLevel: 'public',
            },
            {
                id: 'fixed-income-product',
                label: 'Fixed Income, Bonds & CDs',
                href: '/products/investing-trading#fixed-income',
                accessLevel: 'public',
            },
            {
                id: 'etfs-product',
                label: 'ETFs',
                href: '/products/etfs',
                accessLevel: 'public',
            },
            {
                id: 'options-product',
                label: 'Options',
                href: '/products/investing-trading#options',
                accessLevel: 'public',
            },
            {
                id: 'sustainable-investing',
                label: 'Sustainable Investing',
                href: '/products/sustainable-investing',
                accessLevel: 'public',
            },
            {
                id: 'managed-accounts',
                label: 'Managed Accounts',
                href: '/products/managed-accounts',
                accessLevel: 'public',
            },
            {
                id: '529-college-savings',
                label: '529 College Savings',
                href: '/products/college-savings',
                accessLevel: 'public',
            },
            {
                id: 'health-savings-accounts',
                label: 'Health Savings Accounts',
                href: '/products/health-savings',
                accessLevel: 'public',
            },
            {
                id: 'annuities-product',
                label: 'Annuities',
                href: '/products/investing-trading#annuities',
                accessLevel: 'public',
            },
            {
                id: 'life-insurance',
                label: 'Life Insurance',
                href: '/products/life-insurance',
                accessLevel: 'public',
            },
        ],
    },
    {
        id: 'why-fidelity',
        label: 'Why Fidelity',
        type: 'dropdown',
        accessLevel: 'public',
        ariaLabel: 'Why Fidelity',
        links: [
            {
                id: 'fidelity-advantage',
                label: 'The Fidelity Advantage',
                href: '/company/fidelity-advantage',
                accessLevel: 'public',
            },
            {
                id: 'planning-advice-company',
                label: 'Planning & Advice',
                href: '/planning/advice',
                accessLevel: 'public',
            },
            {
                id: 'trading-company',
                label: 'Trading',
                href: '/company/trading',
                accessLevel: 'public',
            },
            {
                id: 'straightforward-pricing',
                label: 'Straightforward Pricing',
                href: '/company/pricing',
                accessLevel: 'public',
            },
            {
                id: 'insights-tools',
                label: 'Insights & Tools',
                href: '/research/insights-tools',
                accessLevel: 'public',
            },
            {
                id: 'security-protection',
                label: 'Security & Protection',
                href: '/company/security',
                accessLevel: 'public',
            },
            {
                id: 'fdic-sipc',
                label: 'FDIC & SIPC Coverage',
                href: '/company/fdic-sipc',
                accessLevel: 'public',
            },
            {
                id: 'marketplace-solutions',
                label: 'Marketplace Solutions',
                href: '/research/marketplace-solutions',
                accessLevel: 'public',
            },
            {
                id: 'about-fidelity',
                label: 'About Fidelity',
                href: '/company/about',
                accessLevel: 'public',
            },
            {
                id: 'careers',
                label: 'Careers',
                href: '/company/careers',
                accessLevel: 'public',
            },
        ],
    },
];

/**
 * Footer navigation sections.
 */
export const FOOTER_NAV: FooterNavSection[] = [
    {
        id: 'planning',
        title: 'Planning & Advice',
        links: [
            { id: 'retirement-footer', label: 'Retirement', href: '/planning/retirement', accessLevel: 'public' },
            { id: 'financial-basics-footer', label: 'Financial Basics', href: '/planning/financial-basics', accessLevel: 'public' },
            { id: 'life-events-footer', label: 'Life Events', href: '/planning/life-events', accessLevel: 'public' },
            { id: 'charitable-giving-footer', label: 'Charitable Giving', href: '/planning/charitable-giving', accessLevel: 'public' },
            { id: 'find-advisor-footer', label: 'Find an Advisor', href: '/planning/find-advisor', accessLevel: 'public' },
        ],
    },
    {
        id: 'investing-trading',
        title: 'Investing & Trading',
        links: [
            { id: 'stocks-etfs-footer', label: 'Stocks, ETFs, Crypto', href: '/research/stocks-etfs-crypto', accessLevel: 'public' },
            { id: 'mutual-funds-footer', label: 'Mutual Funds', href: '/research/mutual-funds', accessLevel: 'public' },
            { id: 'fixed-income-footer', label: 'Fixed Income, Bonds & CDs', href: '/research/fixed-income', accessLevel: 'public' },
            { id: 'options-footer', label: 'Options', href: '/research/options', accessLevel: 'public' },
            { id: 'ipos-footer', label: 'IPOs', href: '/research/ipos', accessLevel: 'public' },
        ],
    },
    {
        id: 'products-services',
        title: 'Products & Services',
        links: [
            { id: 'retirement-iras-footer', label: 'Retirement & IRAs', href: '/products/retirement-iras', accessLevel: 'public' },
            { id: 'spending-saving-footer', label: 'Spending & Saving', href: '/products/spending-saving', accessLevel: 'public' },
            { id: '529-college-footer', label: '529 College Savings', href: '/products/college-savings', accessLevel: 'public' },
            { id: 'health-savings-footer', label: 'Health Savings Accounts', href: '/products/health-savings', accessLevel: 'public' },
            { id: 'life-insurance-footer', label: 'Life Insurance', href: '/products/life-insurance', accessLevel: 'public' },
        ],
    },
    {
        id: 'customer-support',
        title: 'Customer Support',
        links: [
            { id: 'help-center-footer', label: 'Help Center', href: '/support/help-center', accessLevel: 'public' },
            { id: 'contact-footer', label: 'Contact Us', href: '/support/contact', accessLevel: 'public' },
            { id: 'fidelity-assistant-footer', label: 'Fidelity Assistant', href: '/support/fidelity-assistant', accessLevel: 'public' },
            { id: 'locations-footer', label: 'Fidelity Locations', href: '/company/locations', accessLevel: 'public' },
        ],
    },
    {
        id: 'company',
        title: 'Company',
        links: [
            { id: 'about-footer', label: 'About Fidelity', href: '/company/about', accessLevel: 'public' },
            { id: 'careers-footer', label: 'Careers', href: '/company/careers', accessLevel: 'public' },
            { id: 'why-fidelity-footer', label: 'Why Fidelity', href: '/company/why-fidelity', accessLevel: 'public' },
            { id: 'security-footer', label: 'Security', href: '/support/security', accessLevel: 'public' },
        ],
    },
];

/**
 * Complete navigation configuration.
 */
export const NAVIGATION_CONFIG: NavigationConfig = {
    mainNav: MAIN_NAV,
    secondaryNav: SECONDARY_NAV,
    footerNav: FOOTER_NAV,
};

/**
 * Get navigation config for a specific context (authenticated vs anonymous).
 */
export function getNavigationConfig(isAuthenticated: boolean): NavigationConfig {
    return {
        ...NAVIGATION_CONFIG,
        secondaryNav: isAuthenticated
            ? SECONDARY_NAV.filter((link) => link.accessLevel !== 'public' || link.id === 'profile')
            : SECONDARY_NAV,
        mainNav: MAIN_NAV.map((section) => ({
            ...section,
            links: section.links?.map((link) => ({
                ...link,
                isActive: false,
            })),
        })),
    };
}
