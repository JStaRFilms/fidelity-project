"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (window.innerWidth > 768) return;
        if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
             // Logic from style.js says: if (!nav.contains(e.target) || toggle.contains(e.target)) return; closeAllDropdowns();
             // But here we might want to close the whole menu or just dropdowns?
             // style.js: document.addEventListener('click', ... closeAllDropdowns());
             // It seems clicking outside closes dropdowns but keeps menu open?
             // "if (!nav.classList.contains('is-open')) return;"
             // "closeAllDropdowns();"
             setOpenDropdown(null);
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdownHandler = (id: string) => {
    if (window.innerWidth > 768) return;
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSubmenuHandler = (id: string, e: React.MouseEvent) => {
    if (window.innerWidth > 768) return;
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <header className="site-header">
      <div className="header-green">
        <div className="container header-green-inner">
          <Link className="brand" href="/" aria-label="Fidelity">
            <img
              className="brand-logo"
              src="https://www.fidelity.com/static/fidelity-rebrand/fidelity-2.0/images/fidelity-logo.svg"
              alt="Fidelity"
            />
          </Link>

          <div className="header-links">
            <Link className="header-link" href="/pages/customer-service">
              Customer Service
            </Link>
            <Link className="header-link" href="/pages/fidelity-assistant">
              Fidelity Assistant
            </Link>
            <Link className="header-link" href="/pages/profile">
              Profile
            </Link>
            <Link className="header-btn header-btn--light" href="/pages/open-account">
              Open an account
            </Link>
            <Link className="header-btn header-btn--outline" href="/pages/login">
              Log in
            </Link>
          </div>
        </div>
      </div>

      <div className="header-white">
        <div className="container header-white-inner">
          <nav
            className={`nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
            id="mainNav"
            aria-label="Primary"
            ref={navRef}
          >
            <div className={`nav-item ${openDropdown === "accounts" ? "is-open" : ""}`}>
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === "accounts"}
                onClick={() => toggleDropdownHandler("accounts")}
              >
                Accounts &amp; Trade
                {/* Font awesome icons were used in CSS/HTML but might need explicit class if not showing */}
              </button>
              <div className="dropdown" role="menu">
                <div className="dropdown-list" role="none">
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/portfolio" role="menuitem">
                    <span className="dropdown-text">Portfolio</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/account-positions" role="menuitem">
                    <span className="dropdown-text">Account Positions</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/trade" role="menuitem">
                    <span className="dropdown-text">Trade</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/fidelity-trader-plus-web" role="menuitem">
                    <span className="dropdown-text">Fidelity Trader+ Web</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link" href="/pages/fidelity-trader-plus" role="menuitem">
                    <span className="dropdown-text">Fidelity Trader+</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/transfers" role="menuitem">
                    <span className="dropdown-text">Transfers</span>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/cash-management" role="menuitem">
                    <span className="dropdown-text">Cash Management</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/bill-pay" role="menuitem">
                    <span className="dropdown-text">Bill Pay</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/full-view" role="menuitem">
                    <span className="dropdown-text">Full View</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/security-settings" role="menuitem">
                    <span className="dropdown-text">Security Settings</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/account-features" role="menuitem">
                    <span className="dropdown-text">Account Features</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/documents" role="menuitem">
                    <span className="dropdown-text">Documents</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link" href="/pages/tax-forms-information" role="menuitem">
                    <span className="dropdown-text">Tax Forms &amp; Information</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/retirement-distributions" role="menuitem">
                    <span className="dropdown-text">Retirement Distributions</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/refer-a-friend" role="menuitem">
                    <span className="dropdown-text">Refer a Friend</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`nav-item ${openDropdown === "planning" ? "is-open" : ""}`}>
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === "planning"}
                onClick={() => toggleDropdownHandler("planning")}
              >
                Planning &amp; Advice
              </button>
              <div className="dropdown dropdown--planning" role="menu">
                <div className="dropdown-list" role="none">
                  <Link className="dropdown-link" href="/pages/what-we-offer" role="menuitem">
                    <span className="dropdown-text">What We Offer</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/build-your-free-plan" role="menuitem">
                    <span className="dropdown-text">Build Your Free Plan</span>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/my-goals" role="menuitem">
                    <span className="dropdown-text">My Goals</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link" href="/pages/financial-basics" role="menuitem">
                    <span className="dropdown-text">Financial Basics</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/building-savings" role="menuitem">
                    <span className="dropdown-text">Building Savings</span>
                  </Link>

                  <div className={`dropdown-item dropdown-item--submenu ${openSubmenu === "robo" ? "is-open" : ""}`} role="none">
                    <button
                      className="dropdown-subtrigger"
                      type="button"
                      aria-expanded={openSubmenu === "robo"}
                      onClick={(e) => toggleSubmenuHandler("robo", e)}
                    >
                      <span className="dropdown-text">Robo Investing Plus Advice</span>
                      <i className="fas fa-angle-right dropdown-caret" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-submenu" role="menu">
                      <div className="dropdown-subtitle" role="none">
                        Robo Investing Plus Advice
                      </div>
                      <Link className="dropdown-link" href="/pages/wealth-management" role="menuitem">
                        <span className="dropdown-text">Wealth Management</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/find-an-advisor" role="menuitem">
                        <span className="dropdown-text">Find an Advisor</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/retirement" role="menuitem">
                        <span className="dropdown-text">Retirement</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/life-events" role="menuitem">
                        <span className="dropdown-text">Life Events</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/saving-investing-for-a-child" role="menuitem">
                        <span className="dropdown-text">Saving &amp; Investing for a Child</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/charitable-giving" role="menuitem">
                        <span className="dropdown-text">Charitable Giving</span>
                      </Link>
                      <Link className="dropdown-link" href="/pages/long-term-care-planning" role="menuitem">
                        <span className="dropdown-text">Long-Term Care Planning</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`nav-item ${openDropdown === "news" ? "is-open" : ""}`}>
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === "news"}
                onClick={() => toggleDropdownHandler("news")}
              >
                News &amp; Research
              </button>
              <div className="dropdown" role="menu">
                <div className="dropdown-list" role="none">
                  <Link className="dropdown-link" href="/pages/news" role="menuitem">
                    <span className="dropdown-text">News</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/wealth-management-insights" role="menuitem">
                    <span className="dropdown-text">Wealth Management Insights</span>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/watchlist" role="menuitem">
                    <span className="dropdown-text">Watchlist</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/alerts" role="menuitem">
                    <span className="dropdown-text">Alerts</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link" href="/pages/stocks-etfs-crypto" role="menuitem">
                    <span className="dropdown-text">Stocks, ETFs, Crypto</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/mutual-funds" role="menuitem">
                    <span className="dropdown-text">Mutual Funds</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/fixed-income-bonds-cds" role="menuitem">
                    <span className="dropdown-text">Fixed Income, Bonds &amp; CDs</span>
                  </Link>
                  <Link className="dropdown-link dropdown-link--locked" href="/pages/options" role="menuitem">
                    <span className="dropdown-text">Options</span>
                    <i className="fas fa-lock dropdown-lock" aria-hidden="true"></i>
                  </Link>
                  <Link className="dropdown-link" href="/pages/ipos" role="menuitem">
                    <span className="dropdown-text">IPOs</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/annuities" role="menuitem">
                    <span className="dropdown-text">Annuities</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/learn" role="menuitem">
                    <span className="dropdown-text">Learn</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`nav-item ${openDropdown === "products" ? "is-open" : ""}`}>
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === "products"}
                onClick={() => toggleDropdownHandler("products")}
              >
                Products
              </button>
              <div className="dropdown dropdown--products" role="menu">
                <div className="dropdown-tabs" role="none">
                  <Link className="dropdown-tab" href="/pages/retirement-iras">
                    Retirement &amp; IRAs
                  </Link>
                  <Link className="dropdown-tab" href="/pages/spending-saving">
                    Spending &amp; Saving
                  </Link>
                  <Link className="dropdown-tab dropdown-tab--active" href="/pages/investing-trading">
                    Investing &amp; Trading
                  </Link>
                </div>
                <div className="dropdown-list" role="none">
                  <Link className="dropdown-link" href="/pages/mutual-funds" role="menuitem">
                    <span className="dropdown-text">Mutual Funds</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/crypto" role="menuitem">
                    <span className="dropdown-text">Crypto</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/direct-indexing" role="menuitem">
                    <span className="dropdown-text">Direct Indexing</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/fixed-income-bonds-cds" role="menuitem">
                    <span className="dropdown-text">Fixed Income, Bonds &amp; CDs</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/etfs" role="menuitem">
                    <span className="dropdown-text">ETFs</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/options" role="menuitem">
                    <span className="dropdown-text">Options</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/sustainable-investing" role="menuitem">
                    <span className="dropdown-text">Sustainable Investing</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/managed-accounts" role="menuitem">
                    <span className="dropdown-text">Managed Accounts</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/529-college-savings" role="menuitem">
                    <span className="dropdown-text">529 College Savings</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/health-savings-accounts" role="menuitem">
                    <span className="dropdown-text">Health Savings Accounts</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/annuities" role="menuitem">
                    <span className="dropdown-text">Annuities</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/life-insurance" role="menuitem">
                    <span className="dropdown-text">Life Insurance</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`nav-item ${openDropdown === "why-fidelity" ? "is-open" : ""}`}>
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === "why-fidelity"}
                onClick={() => toggleDropdownHandler("why-fidelity")}
              >
                Why Fidelity
              </button>
              <div className="dropdown" role="menu">
                <div className="dropdown-list" role="none">
                  <Link className="dropdown-link" href="/pages/fidelity-advantage" role="menuitem">
                    <span className="dropdown-text">The Fidelity Advantage</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/planning-advice" role="menuitem">
                    <span className="dropdown-text">Planning &amp; Advice</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/trading" role="menuitem">
                    <span className="dropdown-text">Trading</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/straightforward-pricing" role="menuitem">
                    <span className="dropdown-text">Straightforward Pricing</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/insights-tools" role="menuitem">
                    <span className="dropdown-text">Insights &amp; Tools</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/security-protection" role="menuitem">
                    <span className="dropdown-text">Security &amp; Protection</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/fdic-sipc-coverage" role="menuitem">
                    <span className="dropdown-text">FDIC &amp; SIPC Coverage</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/marketplace-solutions" role="menuitem">
                    <span className="dropdown-text">Marketplace Solutions</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/about-fidelity" role="menuitem">
                    <span className="dropdown-text">About Fidelity</span>
                  </Link>
                  <Link className="dropdown-link" href="/pages/careers" role="menuitem">
                    <span className="dropdown-text">Careers</span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-right">
            <div className="search">
              <i className="fas fa-search search-icon" aria-hidden="true"></i>
              <input
                className="search-input"
                type="text"
                placeholder="How can we help?"
                aria-label="Search"
              />
            </div>

            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-controls="mainNav"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
