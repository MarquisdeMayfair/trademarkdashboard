import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav container" style={{ padding: "14px 24px" }}>
      <Link className="logo" href="/">
        <span className="logo-mark">TD</span>
        <div>
          <span className="logo-title">Trademark Dashboard</span>
          <span className="logo-sub">AI-Powered Trademark Intelligence</span>
        </div>
      </Link>
      <nav className="nav-links">
        <Link href="/search">Search</Link>
        <Link href="/trademark-classes">Classes</Link>
        <Link href="/guides/trademark-search-guide">Guides</Link>
        <Link href="/insights">Insights</Link>
      </nav>
      <div className="nav-actions">
        <Link className="btn ghost" href="/search">
          Free Search
        </Link>
        <Link className="btn primary" href="/search">
          Try AI Clearance
        </Link>
      </div>
    </header>
  );
}
