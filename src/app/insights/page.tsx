import Link from "next/link";

const bars = [22, 46, 64, 78, 58, 82, 50];

export default function InsightsPage() {
  return (
    <div className="page">
      <header className="nav container">
        <Link className="logo" href="/">
          <span className="logo-mark">TA</span>
          <div>
            <span className="logo-title">Trademark Dashboard</span>
            <span className="logo-sub">EU trademark data portal</span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link href="/insights">Insights</Link>
          <Link href="/search">Search</Link>
          <Link href="/#classes">Classes</Link>
        </nav>
        <div className="nav-actions">
          <Link className="btn ghost" href="/">
            Back home
          </Link>
          <Link className="btn primary" href="/#apply">
            Apply for EU trademark
          </Link>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2>EU filing insights (sample)</h2>
          <p className="subhead">
            This dashboard will be driven by EUIPO API data once the key is
            active. Current visuals are placeholders for layout.
          </p>

          <div className="insight-grid">
            <div className="chart-card">
              <div className="table-header">
                <h3>Weekly filings by class</h3>
                <span className="badge">Demo</span>
              </div>
              <div className="chart" aria-hidden="true">
                {bars.map((value, index) => (
                  <div
                    key={`bar-${index}`}
                    className="chart-bar"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
              <p className="chart-note">Class 9, 35, 41, 42 trending upward.</p>
            </div>
            <div className="chart-card">
              <div className="table-header">
                <h3>Similarity density map</h3>
                <span className="badge">Demo</span>
              </div>
              <div className="heatmap" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div className="heatmap-cell" key={`cell-${index}`} />
                ))}
              </div>
              <p className="chart-note">
                Identify crowded naming zones before filing.
              </p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Industry landing pages</h3>
              <p>
                Generate SEO pages for each industry with class guidance, trend
                stats, and case studies.
              </p>
            </div>
            <div className="card">
              <h3>Competitor tracking</h3>
              <p>
                Create watchlists for new filings by class, keyword, or owner
                name.
              </p>
            </div>
            <div className="card">
              <h3>Conversion-ready CTA</h3>
              <p>
                Every insight page ends with a direct filing CTA and consultation
                booking.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
