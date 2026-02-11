import Link from "next/link";

const signalHeights = [28, 42, 64, 78, 52, 70];

export default function Home() {
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
          <Link href="#tools">Tools</Link>
          <Link href="#classes">Classes</Link>
        </nav>
        <div className="nav-actions">
          <Link className="btn ghost" href="/search">
            Free search
          </Link>
          <Link className="btn primary" href="#apply">
            Apply for EU trademark
          </Link>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <span className="eyebrow">EUIPO powered signals</span>
            <h1>Find the cleanest brand path in Europe.</h1>
            <p className="lead">
              Search EU trademarks, map class demand, and identify filing risk in
              minutes. Built for founders, agencies, and counsel who want data
              clarity before filing.
            </p>
            <div className="search-card">
              <div className="search-row">
                <input
                  type="text"
                  placeholder="Search a word mark, owner, or class (e.g. AURORA, Class 9)"
                  aria-label="Search EUIPO trademarks"
                />
                <button type="button">Search EUIPO</button>
              </div>
              <div className="search-hints">
                <span className="chip">Similarity radar</span>
                <span className="chip">Class overlap</span>
                <span className="chip">Status timeline</span>
                <span className="chip">Watchlist export</span>
              </div>
              <div className="hero-meta">
                Data cards are sample placeholders until the EUIPO API key is
                connected.
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <span className="badge">Sample snapshot</span>
            <h3 className="panel-title">Live filing pulse</h3>
            <div className="signal-grid" aria-hidden="true">
              {signalHeights.map((height, index) => (
                <div
                  key={`bar-${index}`}
                  className="signal-bar"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="signal-card">
              <span className="signal-label">Fastest moving class</span>
              <span className="signal-value">Class 9 (Tech)</span>
              <span className="signal-label">Momentum rising in EU + UK</span>
            </div>
            <div className="signal-card">
              <span className="signal-label">Cleanest naming window</span>
              <span className="signal-value">Short two-syllable marks</span>
              <span className="signal-label">Lower conflict density</span>
            </div>
          </div>
        </section>

        <section className="section" id="tools">
          <h2>Free tools that turn search traffic into filings.</h2>
          <p className="subhead">
            Each tool is built for SEO discoverability, then funnels into a
            guided filing journey when users are ready to register.
          </p>
          <div className="tool-list">
            <div className="tool">
              <h3>Name Risk Scan</h3>
              <span>
                Instant similarity score across EUIPO filings with exact, phonetic,
                and semantic matches.
              </span>
            </div>
            <div className="tool">
              <h3>Class Explorer</h3>
              <span>
                Browse by industry, see filing volumes per Nice class, and spot
                crowded categories.
              </span>
            </div>
            <div className="tool">
              <h3>Application Timeline</h3>
              <span>
                Visualize typical EUIPO timelines with status checkpoints and
                alert-ready milestones.
              </span>
            </div>
            <div className="tool">
              <h3>Budget + Coverage Planner</h3>
              <span>
                Estimate filing costs and recommend class bundles for startups,
                agencies, and consumer brands.
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="classes">
          <h2>Class demand, grouped by real business language.</h2>
          <p className="subhead">
            Turn Nice classes into understandable market segments with demand
            context and filing advice.
          </p>
          <div className="class-grid">
            <div className="class-card">
              <div className="class-number">Class 9</div>
              <h4>Software + devices</h4>
              <span>Apps, AI, SaaS, wearables</span>
            </div>
            <div className="class-card">
              <div className="class-number">Class 35</div>
              <h4>Marketing + commerce</h4>
              <span>Agency services, retail, ads</span>
            </div>
            <div className="class-card">
              <div className="class-number">Class 41</div>
              <h4>Media + education</h4>
              <span>Courses, streaming, events</span>
            </div>
            <div className="class-card">
              <div className="class-number">Class 42</div>
              <h4>Tech services</h4>
              <span>R&amp;D, software design, AI labs</span>
            </div>
          </div>

          <div className="table-panel">
            <div className="table-header">
              <h3>Most searched sectors (sample)</h3>
              <span className="badge">SEO landing targets</span>
            </div>
            <div className="table-row">
              <strong>Health + wellness brands</strong>
              <span>Class 5</span>
              <span>High conflict density</span>
            </div>
            <div className="table-row">
              <strong>Fintech + crypto apps</strong>
              <span>Class 36</span>
              <span>Rising filing velocity</span>
            </div>
            <div className="table-row">
              <strong>Consumer electronics</strong>
              <span>Class 9</span>
              <span>High brand saturation</span>
            </div>
          </div>
        </section>

        <section className="cta" id="apply">
          <div>
            <h3>Ready to file?</h3>
            <p>
              Turn your shortlist into a protected EU trademark with guided
              filing support, conflict checks, and class selection.
            </p>
          </div>
          <Link className="btn primary" href="/search">
            Start your EU trademark
          </Link>
        </section>

        <footer className="footer">
          <span>Trademark Dashboard beta. EUIPO data integrated after key setup.</span>
          <span>Phase 2: monitoring, watchlists, and filings.</span>
        </footer>
      </main>
    </div>
  );
}
