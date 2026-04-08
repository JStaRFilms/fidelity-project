/**
 * Site metadata configuration for the Fidelity Next.js application.
 * Contains SEO, Open Graph, and Twitter card settings.
 */

import { APP_BRAND, ASSETS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';

/**
 * Base site configuration object.
 */
export const SITE_CONFIG = {
    /** Application name */
    name: APP_BRAND.name,
    /** Short display name */
    shortName: APP_BRAND.shortName,
    /** Site description */
    description: APP_BRAND.description,
    /** Official website URL */
    website: APP_BRAND.website,
    /** Default OG image */
    defaultOgImage: ASSETS.defaultOgImage,
    /** Theme color */
    themeColor: '#1a1a1a',
};

/**
 * Page-specific metadata generators - plain objects for flexibility.
 */
export const PAGE_METADATA = {
    /** Home page metadata */
    home: {
        title: APP_BRAND.name,
        description: `${APP_BRAND.tagline} - ${APP_BRAND.description}`,
        path: '/',
    } as const,

    /** Login page metadata */
    login: {
        title: 'Log in to Your Account',
        description: 'Securely log in to your Fidelity account to view your portfolio, trade, and manage your investments.',
        path: '/auth/login',
    } as const,

    
    /** Portfolio page metadata */
    portfolio: {
        title: 'Portfolio Overview',
        description: 'View and manage your investment portfolio, track performance, and analyze your holdings.',
        path: '/accounts/portfolio',
    } as const,

    /** Retirement planning page metadata */
    retirement: {
        title: 'Retirement Planning',
        description: 'Plan for your retirement with Fidelity. Explore retirement accounts, calculators, and investment strategies.',
        path: '/planning/retirement',
    } as const,

    /** News page metadata */
    news: {
        title: 'Market News & Insights',
        description: 'Stay informed with the latest market news, investment insights, and analysis from Fidelity experts.',
        path: '/research/news',
    } as const,
};

/**
 * Generate dynamic page metadata object.
 */
export function generatePageMetadata(
    title: string,
    description: string,
    path: string,
    options?: {
        image?: string;
        noIndex?: boolean;
        modifiedTime?: string;
        publishedTime?: string;
    }
) {
    const canonicalUrl = `${APP_BRAND.website}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: options?.image || ASSETS.defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [options?.image || ASSETS.defaultOgImage],
        },
        robots: options?.noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
    };
}

/**
 * Social media links for the footer.
 */
export const SITE_SOCIAL = {
    facebook: SOCIAL_LINKS.facebook,
    twitter: SOCIAL_LINKS.twitter,
    linkedin: SOCIAL_LINKS.linkedin,
    youtube: SOCIAL_LINKS.youtube,
    instagram: SOCIAL_LINKS.instagram,
};

/**
 * Contact information for the footer.
 */
export const SITE_CONTACT = {
    phone: CONTACT_INFO.phone,
    internationalPhone: CONTACT_INFO.internationalPhone,
    hours: CONTACT_INFO.hours,
    email: CONTACT_INFO.email,
};

/**
 * Legal links.
 */
export const LEGAL_LINKS = [
    { label: 'Privacy Policy', href: '/support/privacy' },
    { label: 'Terms of Use', href: '/support/terms' },
    { label: 'Disclosures', href: '/support/disclosures' },
    { label: 'Accessibility', href: '/support/accessibility' },
    { label: 'Careers', href: '/company/careers' },
];

/**
 * Export complete site configuration.
 */
export const SITE = {
    config: SITE_CONFIG,
    pages: PAGE_METADATA,
    social: SITE_SOCIAL,
    contact: SITE_CONTACT,
    legal: LEGAL_LINKS,
};
