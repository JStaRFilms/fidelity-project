import Link from "next/link";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main>
      <section
        className="hero"
        style={{ "--hero-bg": "url('/img/img1.PNG')" } as React.CSSProperties}
      >
        <div className="container">
          <div className="hero-card">
            <h1 className="hero-title">
              Moving money<br />made easy
            </h1>
            <p className="hero-desc">
              Transfer your retirement, investing, or savings account in a few simple steps.
            </p>

            <div className="hero-buttons">
              <Link href="/pages/open-account" className="btn btn-primary">
                Open an account
              </Link>
              <Link href="/pages/transfers" className="btn btn-secondary">
                Start a Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Slideshow />

      <section className="checking-section">
        <div className="checking-content">
          <div className="checking-image">
            <img src="/img/Wealth-plan-possibilities-new.jpg" alt="Fidelity advisor partner" />
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
            <Link href="/pages/advisor-services" className="checking-button" target="_blank">
              Explore advisor services
            </Link>
          </div>
        </div>
      </section>

      <section className="links-section">
        <div className="links-content">
          <a
            href="https://brokercheck.finra.org/firm/summary/7784"
            target="_blank"
            className="link-item link-item-black"
          >
            Review Fidelity Brokerage Services with FINRA's BrokerCheck
          </a>
          <a
            href="https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/FBS-FPWA-CRS.pdf"
            target="_blank"
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
          <div className="card-item">
            <div className="card-half card-image">
              <img src="/img/im1.avif" alt="Wealth Management" />
            </div>
            <div className="card-half card-content">
              <h3 className="card-title">Wealth Management</h3>
              <p className="card-description">
                Get a dedicated financial advisor and comprehensive wealth planning to help you manage
                your investments and reach your financial goals.
              </p>
              <Link href="#" className="card-link">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card-item">
            <div className="card-half card-image">
              <img src="/img/im2.PNG" alt="Retirement Planning" />
            </div>
            <div className="card-half card-content">
              <h3 className="card-title">Retirement Planning</h3>
              <p className="card-description">
                Plan for your future with comprehensive retirement solutions designed to help you
                achieve your retirement goals.
              </p>
              <Link href="#" className="card-link">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card-item">
            <div className="card-half card-image">
              <img src="/img/im3.avif" alt="Investing Guidance" />
            </div>
            <div className="card-half card-content">
              <h3 className="card-title">Investing Guidance</h3>
              <p className="card-description">
                Get expert investment advice and guidance to help you make informed decisions and
                build your portfolio.
              </p>
              <Link href="#" className="card-link">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="investing-section">
        <div className="investing-content">
          <div className="investing-text" style={{ paddingLeft: "80px" }}>
            <h2
              className="investing-title"
              style={{ color: "black", fontSize: "32px", fontWeight: "normal" }}
            >
              Why choose Fidelity?
            </h2>
            <p
              className="investing-description"
              style={{ color: "black", fontSize: "18px" }}
            >
              Our objective insights and disciplined approach have helped generations of customers
              through all kinds of markets.
            </p>
            <ul
              className="investing-features"
              style={{ color: "black", fontSize: "20px", lineHeight: "1.2" }}
            >
              <li style={{ marginBottom: "8px" }}>A clear, straightforward experience</li>
              <li style={{ marginBottom: "8px" }}>Guidance as life changes</li>
              <li style={{ marginBottom: "8px" }}>A wider range of integrated tools and products</li>
              <li style={{ marginBottom: "8px" }}>Value and transparency at every step</li>
            </ul>
          </div>
          <div className="investing-image">
            <img src="/img/img6.avif" alt="Why choose Fidelity" />
          </div>
        </div>
      </section>

      <section className="retirement-section" style={{ background: "#f5f5f5" }}>
        <div className="retirement-content">
          <div className="retirement-image">
            <img src="/img/img7.avif" alt="Retirement planning" />
          </div>
          <div className="retirement-text">
            <h2 className="retirement-title">Looking for something else?</h2>
            <p className="retirement-description">
              Answer a few questions about your goals<br />and we'll show account options that could
              work for you.
            </p>
            <Link href="#" className="retirement-button-transparent">
              Get started
            </Link>
          </div>
        </div>
      </section>

      <section className="quick-links-section">
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
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Mutual Funds
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              ETFs
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Fixed Income
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Bonds
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              CDs
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Options
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Crypto
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Fidelity Trader+
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
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
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Stocks
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Online Trading
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Direct Indexing
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Sustainable Investing
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Annuities
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Life Insurance
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Long-Term Care Planning
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              529 Plans
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Health Savings Account
            </Link>
          </div>
          <div
            className="quick-links-divider"
            style={{ width: "1px", background: "#000" }}
          ></div>
          <div
            className="quick-links-column"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "0 0 0 20px",
            }}
          >
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              IRAs
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Retirement Planning
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Small Business Retirement Plans
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Charitable Giving
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Marketplace Solutions
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              FINRA's BrokerCheck
            </Link>
            <Link href="#" className="quick-link" style={{ fontSize: "14px" }}>
              Why Fidelity
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
