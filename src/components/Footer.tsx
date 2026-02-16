import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-mark">TD</span>
              <div>
                <span className="logo-title">Trademark Dashboard</span>
                <span className="logo-sub">AI-Powered Trademark Intelligence</span>
              </div>
            </div>
            <p>
              The UK&apos;s first AI trademark clearance platform. Search, clear,
              and protect your brand across UK IPO, EUIPO, and USPTO.
            </p>
          </div>

          <div className="footer-col">
            <h4>Tools</h4>
            <Link href="/tools/name-risk-scanner">AI Name Risk Scanner</Link>
            <Link href="/tools/availability-checker">Availability Checker</Link>
            <Link href="/tools/cost-calculator">Filing Cost Calculator</Link>
            <Link href="/tools/strength-scorer">Trademark Strength Scorer</Link>
            <Link href="/tools/monitoring">Trademark Monitor</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/trademark-classes">All 45 Trademark Classes</Link>
            <Link href="/guides/register-trademark-uk">Register a UK Trademark</Link>
            <Link href="/guides/register-trademark-eu">Register an EU Trademark</Link>
            <Link href="/guides/trademark-vs-copyright-vs-patent">TM vs Copyright vs Patent</Link>
            <Link href="/guides/trademark-search-guide">Trademark Search Guide</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/search">Search Trademarks</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Trademark Dashboard. All rights reserved.</span>
          <div className="footer-data">
            <span>UK IPO</span>
            <span>EUIPO</span>
            <span>USPTO</span>
            <span>WIPO</span>
            <span>TMclass</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
