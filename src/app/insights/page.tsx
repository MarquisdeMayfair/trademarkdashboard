import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bars = [22, 46, 64, 78, 58, 82, 50];

export default function InsightsPage() {
  return (
    <div className="page">
      <Nav />

      <main className="container">
        <section className="section">
          <h2>Trademark filing insights</h2>
          <p className="subhead">
            AI-powered analytics on trademark filing trends across UK IPO,
            EUIPO, and USPTO. Current visuals are placeholders for layout.
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

      <Footer />
    </div>
  );
}
