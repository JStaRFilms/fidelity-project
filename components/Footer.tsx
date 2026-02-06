import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Fidelity</h4>
            <ul>
              <li>
                <Link href="/pages/why-fidelity">Why Fidelity</Link>
              </li>
              <li>
                <Link href="/pages/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/pages/viewpoints">Viewpoints</Link>
              </li>
              <li>
                <Link href="/pages/research">Research</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <Link href="/pages/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/pages/help-center">Help Center</Link>
              </li>
              <li>
                <Link href="/pages/fidelity-locations">Fidelity Locations</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/pages/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/pages/security">Security</Link>
              </li>
              <li>
                <Link href="/pages/disclosures">Disclosures</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FMR LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
