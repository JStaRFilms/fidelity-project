/**
 * Mobile-Optimized Slideshow Component
 * Matches the mobile/tablet UI design from screenshots
 */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  title: string;
  image: string;
  links?: Array<{
    href: string;
    style: React.CSSProperties;
  }>;
  content?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const SLIDES: Slide[] = [
  {
    id: 0,
    title: 'Start investing',
    image: '/images/img2.PNG',
    links: [
      { href: '/start-investing', style: { top: '73%', left: '4%', width: '20%', height: '5%' } },
      { href: '/support/learn-more', style: { top: '73%', left: '26%', width: '16%', height: '5%' } }
    ],
    content: {
      title: 'Start investing',
      description: 'Open an account and start investing with confidence. Get access to a wide range of investment options and tools to help you reach your financial goals.',
      buttonText: 'Open an account',
      buttonLink: '/start-investing'
    }
  },
  {
    id: 1,
    title: 'Save for retirement',
    image: '/images/img3.PNG',
    content: {
      title: 'Save for retirement',
      description: 'Plan for your future with retirement savings accounts. Choose from IRAs, 401(k)s, and other retirement planning options.',
      buttonText: 'Start planning',
      buttonLink: '/planning/retirement'
    }
  },
  {
    id: 2,
    title: 'Save for healthcare',
    image: '/images/img4.PNG',
    content: {
      title: 'Save for healthcare',
      description: 'Prepare for medical expenses with health savings accounts. HSAs and other healthcare savings options to help manage healthcare costs.',
      buttonText: 'Learn more',
      buttonLink: '/products/health-savings'
    }
  },
  {
    id: 3,
    title: 'Invest for a child',
    image: '/images/img5.PNG',
    content: {
      title: 'Invest for a child',
      description: 'Start investing for your child\'s future with custodial accounts. Education savings plans and investment accounts for minors.',
      buttonText: 'Get started',
      buttonLink: '/investing/custodial-accounts'
    }
  }
];

export function Slideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navScrollRef = useRef<HTMLDivElement>(null);

  // Check if mobile/tablet on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper function to get correct image based on screen size
  const getSlideImage = (slide: Slide) => {
    if (isMobile) {
      // Mobile/Tablet images - use correct paths from img folder
      const mobileImages: { [key: number]: string } = {
        0: '/img/img6.PNG', // Start investing
        1: '/img/img9.PNG', // Save for retirement
        2: '/img/img7.PNG', // Save for healthcare
        3: '/img/img8.PNG'  // Invest for a child
      };
      return mobileImages[slide.id] || slide.image;
    }
    // Desktop images (default)
    return slide.image;
  };

  // Handle slide change
  const handleSlideClick = (slideId: number) => {
    setActiveSlide(slideId);
    // Scroll to active button on mobile
    if (navScrollRef.current && window.innerWidth <= 1024) {
      const activeButton = navScrollRef.current.querySelector(`[data-slide="${slideId}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  // Handle dropdown option click
  const handleDropdownClick = (slideId: number) => {
    setActiveSlide(slideId);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.slideshow-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section className="slideshow-section">
      <div className="container">
        {/* Mobile/Tablet Header with Title, Progress Bar, and Three-Dot Menu */}
        <div className="slideshow-header">
          <div className="slideshow-header-content">
            <h2 className="slideshow-title">{SLIDES[activeSlide].title}</h2>
            <div className="slideshow-progress-bar">
              <div 
                className="slideshow-progress-fill" 
                style={{ width: `${((activeSlide + 1) / SLIDES.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="slideshow-dropdown-container">
            <button 
              className="slideshow-dropdown-toggle" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="More options"
              aria-expanded={isDropdownOpen}
            >
              <span className="slideshow-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className={`slideshow-dropdown ${isDropdownOpen ? 'is-open' : ''}`}>
              <div className="slideshow-dropdown-header">More</div>
              <div className="slideshow-dropdown-divider"></div>
              {SLIDES.map((slide) => (
                <button
                  key={slide.id}
                  className="slideshow-dropdown-option"
                  onClick={() => handleDropdownClick(slide.id)}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Area - REPLACED WITH SLIDE TEXT */}
        <div className="slideshow-nav-area mobile-only">
          {SLIDES.map((slide) => (
            <div 
              key={slide.id} 
              className={`slide-nav-content ${activeSlide === slide.id ? 'active' : ''}`}
            >
              <div className="slide-nav-text">
                <h3>{slide.content?.title || slide.title}</h3>
                <p>{slide.content?.description}</p>
              </div>
              {slide.content?.buttonLink && (
                <div className="slide-nav-button-container">
                  <Link href={slide.content.buttonLink} className="slide-nav-action-btn">
                    {slide.content.buttonText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Navigation (hidden on mobile/tablet) */}
        <div className="slideshow-nav desktop-nav">
          {SLIDES.map((slide) => (
            <button
              key={slide.id}
              className={`slideshow-btn ${activeSlide === slide.id ? 'active' : ''}`}
              onClick={() => handleSlideClick(slide.id)}
              data-slide={slide.id}
            >
              <span>{slide.title}</span>
            </button>
          ))}
        </div>

        {/* Slideshow Content */}
        <div className="slideshow-content">
          {SLIDES.map((slide) => (
            <div key={slide.id} className={`slide ${activeSlide === slide.id ? 'active' : ''}`}>
              <div className="slide-image">
                <img src={getSlideImage(slide)} alt={slide.title} />
                {slide.links?.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="slide-link-area"
                    style={link.style}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
