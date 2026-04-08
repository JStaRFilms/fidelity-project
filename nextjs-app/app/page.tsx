"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Slideshow } from "@/components/Slideshow/Slideshow";
import { SmartSearch } from "@/components/search/SmartSearch";

export default function HomePage() {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDotClick = (cardId: number) => {
    setActiveCard(cardId);
  };

  return (
    <>
      <Header />

      <main>
        <section className="hero" style={{ backgroundImage: "url('/images/img1.PNG')" }}>
          <div className="container">
            <div className="hero-card">
              <h1 className="hero-title">
                Moving money<br />made easy
              </h1>
              <p className="hero-desc">
                Transfer your retirement, investing, or savings account in a few simple steps.
              </p>

              <div className="hero-buttons">
                <Link href="/open-brokerage-account" className="btn btn-primary">
                  Open an account
                </Link>
                <Link href="/start-transfer" className="btn btn-secondary">
                  Start a Transfer
                </Link>
              </div>

              <div className="hero-image-mobile">
                <img src="/images/iiii.PNG" alt="Mobile hero illustration" />
              </div>
            </div>
          </div>
        </section>

        <Slideshow />

        <section className="checking-section">
          <div className="checking-content">
            <div className="checking-image">
              <img src="/images/Wealth-plan-possibilities-new.jpg" alt="Fidelity advisor partner" />
            </div>
            <div className="checking-text">
              <h2 className="checking-title">
                A partner to help<br />bring your plans to life
              </h2>
              <p className="checking-description">
                Collaborate with a dedicated<br />Fidelity advisor to build a<br />
                comprehensive wealth management<br />strategy designed to help you<br />
                meet your goals and evolving needs.
              </p>
              <Link href="/company/advisor" className="checking-button">
                Explore advisor services
              </Link>
            </div>
          </div>
        </section>

        <section className="links-section">
          <div className="links-content" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <a
              href="https://brokercheck.finra.org/firm/summary/7784"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item link-item-black"
            >
              Review Fidelity Brokerage Services with FINRA&apos;s BrokerCheck
            </a>
            <a
              href="https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/FBS-FPWA-CRS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              Regulatory summary of Fidelity services (PDF)
            </a>
          </div>
        </section>

        <section className="cards-section">
          <div className="cards-header">
            <h2 className="cards-title">Expertise you can act on</h2>
          </div>
          <div className="cards-container">
            <div className={`card-item ${isMobile && activeCard === 0 ? 'active' : ''}`}>
              <div className="card-half card-image">
                <img src="/images/im1.avif" alt="Wealth Management" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Wealth Management</h3>
                <p className="card-description">
                  Get a dedicated financial advisor and comprehensive wealth planning to help you manage your investments and reach your financial goals.
                </p>
                <Link href="/planning/wealth-management" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
            <div className={`card-item ${isMobile && activeCard === 1 ? 'active' : ''}`}>
              <div className="card-half card-image">
                <img src="/images/im2.PNG" alt="Retirement Planning" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Retirement Planning</h3>
                <p className="card-description">
                  Plan for your future with comprehensive retirement solutions designed to help you achieve your retirement goals.
                </p>
                <Link href="/planning/plan-retirement" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
            <div className={`card-item ${isMobile && activeCard === 2 ? 'active' : ''}`}>
              <div className="card-half card-image">
                <img src="/images/im3.avif" alt="Investing Guidance" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Investing Guidance</h3>
                <p className="card-description">
                  Get expert investment advice and guidance to help you make informed decisions and build your portfolio.
                </p>
                <Link href="/products/investing-trading" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          
          {/* Carousel dots for mobile/tablet */}
          {isMobile && (
            <div className="carousel-dots">
              <button
                className={`carousel-dot ${activeCard === 0 ? 'active' : ''}`}
                onClick={() => handleDotClick(0)}
                aria-label="Go to Wealth Management card"
              />
              <button
                className={`carousel-dot ${activeCard === 1 ? 'active' : ''}`}
                onClick={() => handleDotClick(1)}
                aria-label="Go to Retirement Planning card"
              />
              <button
                className={`carousel-dot ${activeCard === 2 ? 'active' : ''}`}
                onClick={() => handleDotClick(2)}
                aria-label="Go to Investing Guidance card"
              />
            </div>
          )}
        </section>

        <section className="investing-section">
          <div className="investing-content">
            <div className="investing-text" style={{ paddingLeft: "80px" }}>
              <h2 className="investing-title" style={{ color: "black", fontSize: "32px", fontWeight: "normal" }}>
                Why choose Fidelity?
              </h2>
              <p className="investing-description" style={{ color: "black", fontSize: "18px" }}>
                Our objective insights and disciplined approach have helped generations of customers through all kinds of markets.
              </p>
              <ul className="investing-features" style={{ color: "black", fontSize: "20px", lineHeight: "1.2" }}>
                <li style={{ marginBottom: "8px" }}>A clear, straightforward experience</li>
                <li style={{ marginBottom: "8px" }}>Guidance as life changes</li>
                <li style={{ marginBottom: "8px" }}>A wider range of integrated tools and products</li>
                <li style={{ marginBottom: "8px" }}>Value and transparency at every step</li>
              </ul>
            </div>
            <div className="investing-image">
              <img src="/images/img6.avif" alt="Why choose Fidelity" />
            </div>
          </div>
        </section>

        <section className="retirement-section" style={{ background: "#f5f5f5" }}>
          <div className="retirement-content">
            <div className="retirement-image">
              <img src="/images/img7.avif" alt="Retirement planning" />
            </div>
            <div className="retirement-text">
              <h2 className="retirement-title">Looking for something else?</h2>
              <p className="retirement-description">
                Answer a few questions about your goals<br />
                and we&apos;ll show account options that could work for you.
              </p>
              <Link href="#" className="retirement-button-transparent">
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section className="quick-links-section" style={{ background: "#333333" }}>
          <div
            className="quick-links-content"
            style={{
              display: "flex",
              gap: "0px",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 20px 0 0",
              }}
            >
              <Link href="/products/retirement-iras" className="quick-link" style={{ fontSize: "12px" }}>
                IRAs
              </Link>
              <Link href="/planning/retirement" className="quick-link" style={{ fontSize: "12px" }}>
                Retirement Planning
              </Link>
              <Link href="/products/retirement-iras" className="quick-link" style={{ fontSize: "12px" }}>
                Small Business Retirement Plans
              </Link>
              <Link href="/planning/charitable-giving" className="quick-link" style={{ fontSize: "12px" }}>
                Charitable Giving
              </Link>
              <Link href="/research/marketplace-solutions" className="quick-link" style={{ fontSize: "12px" }}>
                Marketplace Solutions
              </Link>
              <a
                href="https://brokercheck.finra.org/firm/summary/7784"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
                style={{ fontSize: "12px" }}
              >
                FINRA&apos;s BrokerCheck
              </a>
              <Link href="/company/why-fidelity" className="quick-link" style={{ fontSize: "12px" }}>
                Why Fidelity
              </Link>
            </div>
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 10px",
              }}
            >
              <Link href="/research/mutual-funds" className="quick-link" style={{ fontSize: "12px" }}>
                Mutual Funds
              </Link>
              <Link href="/products/etfs" className="quick-link" style={{ fontSize: "12px" }}>
                ETFs
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "12px" }}>
                Fixed Income
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "12px" }}>
                Bonds
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "12px" }}>
                CDs
              </Link>
              <Link href="/research/options" className="quick-link" style={{ fontSize: "12px" }}>
                Options
              </Link>
              <Link href="/products/crypto" className="quick-link" style={{ fontSize: "12px" }}>
                Crypto
              </Link>
              <Link href="/accounts/fidelity-trader-plus" className="quick-link" style={{ fontSize: "12px" }}>
                Fidelity Trader+
              </Link>
              <Link href="/company/locations" className="quick-link" style={{ fontSize: "12px" }}>
                Investor Centers
              </Link>
            </div>
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 10px",
              }}
            >
              <Link href="/research/stocks-etfs-crypto" className="quick-link" style={{ fontSize: "12px" }}>
                Stocks
              </Link>
              <Link href="/company/trading" className="quick-link" style={{ fontSize: "12px" }}>
                Online Trading
              </Link>
              <Link href="/products/direct-indexing" className="quick-link" style={{ fontSize: "12px" }}>
                Direct Indexing
              </Link>
              <Link href="/products/sustainable-investing" className="quick-link" style={{ fontSize: "12px" }}>
                Sustainable Investing
              </Link>
              <Link href="/products/life-insurance" className="quick-link" style={{ fontSize: "12px" }}>
                Annuities
              </Link>
              <Link href="/products/life-insurance" className="quick-link" style={{ fontSize: "12px" }}>
                Life Insurance
              </Link>
              <Link href="/planning/long-term-care" className="quick-link" style={{ fontSize: "12px" }}>
                Long-Term Care Planning
              </Link>
              <Link href="/products/college-savings" className="quick-link" style={{ fontSize: "12px" }}>
                529 Plans
              </Link>
              <Link href="/products/health-savings" className="quick-link" style={{ fontSize: "12px" }}>
                Health Savings Account
              </Link>
            </div>
            <div
              className="quick-links-divider"
              style={{ width: "1px", background: "#ccc" }}
            ></div>
            <div
              className="stay-connected-content"
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0 0 0 20px",
              }}
            >
              <h2 className="stay-connected-title" style={{ color: "#2f7d2f", fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>
                Stay Connected
              </h2>
              
              <div className="investor-center-search mb-6">
                <h3 className="text-white font-semibold mb-3">Search for Answers</h3>
                <SmartSearch 
                  placeholder="Ask about investing, retirement, accounts..." 
                  className="max-w-md"
                />
              </div>

              <div className="investor-center-search">
                <h3 className="text-white font-semibold mb-3">Find an Investor Center</h3>
                <div className="search-container" style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #ccc", borderRadius: "4px", padding: "4px", maxWidth: "300px" }}>
                  <input
                    type="text"
                    placeholder="Locate an Investor Center by ZIP Code"
                    className="search-input"
                    style={{ flex: 1, border: "none", outline: "none", padding: "8px 12px", fontSize: "12px", background: "transparent" }}
                  />
                  <button className="search-button" style={{ background: "#2f7d2f", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}>
                    Search
                  </button>
                </div>
              </div>

              <div className="social-media-links" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", maxWidth: "600px", margin: "0 auto 40px" }}>
                <a href="https://www.instagram.com/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-instagram" style={{ color: "#E4405F", fontSize: "16px" }}></i>
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/fidelity-investments" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-linkedin" style={{ color: "#0077B5", fontSize: "16px" }}></i>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-youtube" style={{ color: "#FF0000", fontSize: "16px" }}></i>
                  YouTube
                </a>
                <a href="https://www.reddit.com/r/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-reddit" style={{ color: "#FF4500", fontSize: "16px" }}></i>
                  Reddit
                </a>
                <a href="https://twitter.com/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-twitter" style={{ color: "#1DA1F2", fontSize: "16px" }}></i>
                  X (Twitter)
                </a>
                <a href="https://www.facebook.com/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-facebook" style={{ color: "#1877F2", fontSize: "16px" }}></i>
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-tiktok" style={{ color: "#000000", fontSize: "16px" }}></i>
                  TikTok
                </a>
                <a href="https://discord.gg/fidelity" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0066CC", fontSize: "12px", textDecoration: "none" }}>
                  <i className="fab fa-discord" style={{ color: "#5865F2", fontSize: "16px" }}></i>
                  Discord
                </a>
              </div>

              <div className="footer-links" style={{ marginTop: "40px", fontSize: "10px", color: "#0066CC", lineHeight: "1.4" }}>
                <div style={{ marginBottom: "10px" }}>
                  <a href="/terms" style={{ color: "#0066CC", textDecoration: "none", marginRight: "8px" }}>Terms of Use</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/privacy" style={{ color: "#0066CC", textDecoration: "none", marginRight: "8px" }}>Privacy</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/security" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Security</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/site-map" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Site Map</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/accessibility" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Accessibility</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/contact" target="_blank" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Contact Us, (Opens in a new window)</a>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <a href="/share-screen" target="_blank" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Share Your Screen</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/disclosures" target="_blank" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Disclosures, (Opens in a new window)</a>
                  <span style={{ margin: "0 5px" }}>•</span>
                  <a href="/cookies" style={{ color: "#666", textDecoration: "none", marginRight: "8px" }}>Manage My Targeting/Advertising Cookies</a>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  This is for persons in US only.
                </div>
                <div>
                  Copyright 1998-2026 FMR LLC. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-disclaimer-section" style={{ background: "#fff", padding: "60px 0" }}>
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
            <div className="footer-disclaimer-content" style={{ fontSize: "10px", color: "#666", lineHeight: "1.2", textAlign: "left" }}>
              <div style={{ marginBottom: "5px" }}>
                Keep in mind that investing involves risk. The value of your investment will fluctuate over time, and you may gain or lose money.
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>1.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  $0.00 commission applies to online U.S. equity trades and exchange-traded funds (ETFs) in a Fidelity retail account only for Fidelity Brokerage Services LLC retail clients. Sell orders are subject to an activity assessment fee (historically from $0.01 to $0.03 per $1,000 of principal). Other exclusions and conditions may apply. A limited number of ETFs are subject to a transaction-based service fee of $100. See full list at Fidelity.com/commissions. Employee equity compensation transactions and accounts managed by advisors or intermediaries through Fidelity Institutional® are subject to different commission schedules.
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>2.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  Zero account minimums and zero account fees apply to retail brokerage accounts only. Expenses charged by investments (e.g., funds, managed accounts, and certain HSAs) and commissions, interest charges, or other expenses for transactions may still apply. See Fidelity.com/commissions for further details.
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>3.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  Fractional share quantities can be entered out to 3 decimal places (.001) as long as value of order is at least $1.00. Dollar-based trades can be entered out to 2 decimal places (e.g. $250.00).
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>4.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  For a distribution to be considered qualified, 5-year aging requirement has to be satisfied, and you must be age 59½ or older or meet one of several exemptions (disability, qualified first-time home purchase, or death among them).
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>5.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  With respect to federal taxation only. Contributions, investment earnings, and distributions may or may not be subject to state taxation.
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>6.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  There are zero account fees and zero account minimums for Fidelity HSAs® offered through Fidelity.com to individuals and employers. There may be commissions, interest charges, and other expenses associated with transacting or holding specific investments (e.g., mutual funds), or selecting certain account features or types (e.g., managed accounts). When a Fidelity HSA® is offered as part of an employer's benefits package (which occurs through NetBenefits®), Fidelity charges employer a recordkeeping fee. This is a common fee charged by HSA providers. This fee may be up to $48/year, but it could be reduced or waived depending on HSA balance. Employers may pass this fee on to their employees. Contact employer for more information. Accounts that have been opened through, or are serviced by, an intermediary, or in connection with your workplace benefits, may incur additional fees or restrictions. Account minimums may apply to certain investments, including purchase of some Fidelity mutual funds that have a minimum investment requirement. If you choose to invest in mutual funds, underlying fund expenses still apply. For more information and details, see fund's prospectus and/or www.fidelity.com/commissions.
                </div>
              </div>
              
              <div style={{ marginBottom: "5px" }}>
                <div style={{ marginBottom: "2px", fontWeight: "600", display: "inline" }}>7.</div>
                <div style={{ paddingLeft: "20px", display: "inline" }}>
                  529 distributions for qualified education expenses are generally federal income tax free. 529 assets may be used to pay for (i) qualified higher education expenses, (ii) qualified expenses for registered apprenticeship programs, (iii) up to $10,000 per taxable year per beneficiary for tuition expenses in connection with enrollment at a public, private, or religious elementary or secondary educational institution. Although such assets may come from multiple 529 accounts, $10,000 qualified withdrawal limit will be aggregated on a per beneficiary basis. The IRS has not provided guidance to date on methodology of allocating $10,000 annual maximum among withdrawals from different 529 accounts, and (iv) amounts paid as principal or interest on any qualified education loan of a 529 plan designated beneficiary or a sibling of designated beneficiary. The amount treated as a qualified expense is subject to a lifetime limit of $10,000 per individual. Although assets may come from multiple 529 accounts, $10,000 qualified withdrawal limit will be aggregated on a per beneficiary basis.
                </div>
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                The information provided herein is general in nature. It is not intended, nor should it be construed, as legal or tax advice. Because administration of an HSA is a taxpayer responsibility, you are strongly encouraged to consult your tax advisor before opening an HSA. You are also encouraged to review information available from Internal Revenue Service (IRS) for taxpayers, which can be found on IRS website at IRS.gov. You can find IRS Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans, and IRS Publication 502, Medical and Dental Expenses, online, or you can call the IRS to request a copy of each at 800-829-3676.
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                The Fidelity Investments logo is a registered service mark of FMR LLC.
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                Fidelity advisors are licensed with Strategic Advisers LLC (Strategic Advisers), a registered investment adviser, and registered with Fidelity Brokerage Services LLC (FBS), a registered broker-dealer. Whether a Fidelity advisor provides advisory services through Strategic Advisers for a fee or brokerage services through FBS will depend on products and services you choose.
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                Fidelity does not provide legal or tax advice. The information herein is general in nature and should not be considered legal or tax advice. Consult an attorney or tax professional regarding your specific situation.
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                The images, graphs, tools, and videos are for illustrative purposes only.
              </div>
              
              <div style={{ marginBottom: "25px" }}>
                Fidelity Brokerage Services LLC, Member NYSE, SIPC, 900 Salem Street, Smithfield, RI 02917
              </div>
              
              <div>
                782377.115.0
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}