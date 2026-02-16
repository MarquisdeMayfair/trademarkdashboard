import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { niceClasses, featuredClasses } from "@/lib/classes";

const tools = [
  {
    icon: "🔍",
    title: "AI Name Risk Scanner",
    desc: "Instant AI-powered similarity scoring across UK, EU, and US trademark databases with phonetic and semantic matching.",
    href: "/tools/name-risk-scanner",
    keyword: "AI trademark similarity search",
  },
  {
    icon: "📋",
    title: "Trademark Class Finder",
    desc: "Browse all 45 Nice classes with plain-English descriptions, filing volumes, and industry mapping.",
    href: "/trademark-classes",
    keyword: "Nice classification finder",
  },
  {
    icon: "✅",
    title: "Brand Availability Checker",
    desc: "Check if your brand name is available as a trademark across multiple jurisdictions in seconds.",
    href: "/tools/availability-checker",
    keyword: "is my brand name trademarked",
  },
  {
    icon: "💷",
    title: "Filing Cost Calculator",
    desc: "Estimate UK IPO, EUIPO, and USPTO filing costs based on your classes, territories, and filing strategy.",
    href: "/tools/cost-calculator",
    keyword: "trademark registration cost UK",
  },
  {
    icon: "📡",
    title: "Trademark Monitor",
    desc: "Real-time alerts when new trademarks similar to yours are filed. Protect your brand proactively.",
    href: "/tools/monitoring",
    keyword: "trademark monitoring service",
  },
  {
    icon: "💪",
    title: "Trademark Strength Scorer",
    desc: "Assess how distinctive and defensible your trademark is before you file. Get an instant strength rating.",
    href: "/tools/strength-scorer",
    keyword: "trademark distinctiveness checker",
  },
  {
    icon: "⚖️",
    title: "TM vs Copyright vs Patent",
    desc: "Understand which type of IP protection you need. Interactive comparison guide for founders and creators.",
    href: "/guides/trademark-vs-copyright-vs-patent",
    keyword: "trademark vs copyright",
  },
  {
    icon: "📊",
    title: "Filing Insights & Trends",
    desc: "Explore real-time trademark filing trends, class demand data, and competitive intelligence dashboards.",
    href: "/insights",
    keyword: "trademark filing trends",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "£0",
    period: "",
    desc: "For quick searches and exploration",
    features: [
      "Unlimited trademark searches",
      "Basic similarity results",
      "1 trademark watch alert",
      "All 45 class guides",
      "Cost calculator access",
    ],
    featured: false,
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "£29",
    period: "/mo",
    desc: "For founders and small businesses",
    features: [
      "Everything in Free",
      "AI risk scores on search",
      "10 trademark watch alerts",
      "Phonetic matching analysis",
      "PDF search reports",
      "Priority support",
    ],
    featured: false,
    cta: "Start Pro Trial",
  },
  {
    name: "AI Agent",
    price: "£99",
    period: "/mo",
    desc: "Full AI clearance automation",
    features: [
      "Everything in Pro",
      "AI clearance reports (30s)",
      "Multi-jurisdiction analysis",
      "Semantic similarity engine",
      "Unlimited watch alerts",
      "API access",
      "White-label reports",
    ],
    featured: true,
    cta: "Try AI Agent",
  },
  {
    name: "Enterprise",
    price: "£499",
    period: "/mo",
    desc: "For law firms and agencies",
    features: [
      "Everything in AI Agent",
      "Bulk portfolio analysis",
      "Team collaboration",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
    ],
    featured: false,
    cta: "Contact Sales",
  },
];

export default function Home() {
  const displayClasses = featuredClasses
    .map((n) => niceClasses.find((c) => c.number === n))
    .filter(Boolean);

  return (
    <div className="page">
      <Nav />

      {/* ── HERO ── */}
      <section className="hero-dark">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">AI-Powered Trademark Intelligence</span>
              <h1>
                Check, clear, and protect your brand{" "}
                <span className="gradient-text">in seconds.</span>
              </h1>
              <p className="lead">
                The UK&apos;s first AI trademark clearance platform. Search 2M+
                marks across UK&nbsp;IPO, EUIPO, and USPTO. Get instant risk
                scores, phonetic similarity analysis, and AI&#8209;generated
                clearance reports.
              </p>
              <div className="hero-search">
                <input
                  type="text"
                  placeholder="Enter your brand name to check availability..."
                  aria-label="Search trademarks"
                />
                <button type="button">Search Free</button>
              </div>
              <div className="hero-chips">
                <span className="chip">UK + EU + US Coverage</span>
                <span className="chip">AI Risk Scoring</span>
                <span className="chip">Phonetic Matching</span>
                <span className="chip">Instant Results</span>
              </div>
            </div>

            <div className="hero-panel">
              <span className="panel-badge">● AI Clearance Result</span>
              <div className="panel-title">Brand: &quot;NovaTech&quot;</div>
              <div className="ai-result">
                <div className="ai-result-row">
                  <span className="ai-result-label">UK IPO — Exact match</span>
                  <span className="risk-badge risk-low">Low Risk</span>
                </div>
                <div className="ai-result-row">
                  <span className="ai-result-label">EUIPO — Phonetic similar</span>
                  <span className="risk-badge risk-medium">Medium Risk</span>
                </div>
                <div className="ai-result-row">
                  <span className="ai-result-label">USPTO — Semantic match</span>
                  <span className="risk-badge risk-low">Low Risk</span>
                </div>
                <div className="ai-result-row">
                  <span className="ai-result-label">Overall AI Assessment</span>
                  <span className="risk-badge risk-low">Clear to File</span>
                </div>
              </div>
              <div className="ai-score-bar">
                <div className="ai-score-fill" style={{ width: "28%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-row">
            <div className="trust-item">
              <span className="trust-value">2M+</span>
              <span className="trust-label">Trademarks Indexed</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">45</span>
              <span className="trust-label">Nice Classes</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">UK IPO</span>
              <span className="trust-label">Primary Data Source</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">EUIPO</span>
              <span className="trust-label">EU Coverage</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">USPTO</span>
              <span className="trust-label">US Coverage</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">&lt;1s</span>
              <span className="trust-label">Average Search Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── AI CLEARANCE AGENT ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: "#fff" }}>
              AI trademark clearance in 30&nbsp;seconds, not 30&nbsp;days.
            </h2>
            <p className="subhead">
              Our AI clearance agent searches multiple databases simultaneously,
              analyses phonetic and semantic similarity, scores risk, and
              generates a professional clearance report — instantly.
            </p>
          </div>
          <div className="ai-flow">
            <div className="ai-step">
              <div className="ai-step-number">1</div>
              <h4 style={{ color: "#fff" }}>Enter Brand</h4>
              <p>Type your proposed brand name and select target classes.</p>
            </div>
            <div className="ai-step">
              <div className="ai-step-number">2</div>
              <h4 style={{ color: "#fff" }}>Multi-DB Search</h4>
              <p>Simultaneously query UK IPO, EUIPO, USPTO, and WIPO databases.</p>
            </div>
            <div className="ai-step">
              <div className="ai-step-number">3</div>
              <h4 style={{ color: "#fff" }}>AI Analysis</h4>
              <p>Phonetic, semantic, and visual similarity scoring by AI.</p>
            </div>
            <div className="ai-step">
              <div className="ai-step-number">4</div>
              <h4 style={{ color: "#fff" }}>Risk Score</h4>
              <p>Get a clear GREEN / AMBER / RED risk assessment per jurisdiction.</p>
            </div>
            <div className="ai-step">
              <div className="ai-step-number">5</div>
              <h4 style={{ color: "#fff" }}>PDF Report</h4>
              <p>Download a professional clearance report ready for your records.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link className="btn btn-white btn-lg" href="/search">
              Try Free AI Clearance →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREE TOOLS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Free trademark tools that save you thousands.</h2>
            <p className="subhead">
              Professional-grade tools trusted by founders, brand owners, and IP
              attorneys. No signup required for basic access.
            </p>
          </div>
          <div className="feature-grid">
            {tools.map((tool) => (
              <Link
                href={tool.href}
                key={tool.title}
                className="feature-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="feature-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <span className="feature-link">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASS EXPLORER ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Explore all 45 trademark classes</h2>
            <p className="subhead">
              The Nice Classification system organises every product and service
              into 45 classes. Find yours and understand the filing landscape.
            </p>
          </div>
          <div className="class-grid">
            {displayClasses.map((cls) =>
              cls ? (
                <Link
                  href={`/trademark-classes/class-${cls.number}`}
                  key={cls.number}
                  className="class-card"
                >
                  <span className="class-number">Class {cls.number}</span>
                  <h4>{cls.shortName}</h4>
                  <span>{cls.examples.slice(0, 3).join(", ")}</span>
                </Link>
              ) : null,
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link className="btn ghost" href="/trademark-classes">
              View all 45 classes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── UK-FIRST ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>The UK&apos;s most comprehensive trademark database.</h2>
            <p className="subhead">
              Post-Brexit, UK businesses must check the UK register separately.
              We&apos;re the only platform with structured, searchable UK
              trademark data alongside EU and global coverage.
            </p>
          </div>
          <div className="coverage-grid">
            <div className="coverage-card coverage-card--primary">
              <h3>🇬🇧 UK IPO</h3>
              <p>
                Primary coverage of the UK Trade Marks Register. Updated weekly
                from the Trade Marks Journal. Full-text search with status
                tracking and class filtering.
              </p>
            </div>
            <div className="coverage-card">
              <h3>🇪🇺 EUIPO</h3>
              <p>
                Complete EU Trade Mark (EUTM) database access. Search across all
                27 member states with a single query. Real-time filing data via
                official API.
              </p>
            </div>
            <div className="coverage-card">
              <h3>🇺🇸 USPTO</h3>
              <p>
                US federal trademark database coverage. Essential for UK brands
                expanding internationally. Cross-reference US filings against
                your UK marks.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <span className="badge badge--success">
              UK data updated weekly from the Trade Marks Journal
            </span>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header">
            <h2>Start free. Scale when you&apos;re ready.</h2>
            <p className="subhead">
              No credit card required. Search trademarks and use our tools for
              free, then upgrade for AI clearance and monitoring.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`pricing-card${tier.featured ? " pricing-card--featured" : ""}`}
              >
                <span className="pricing-tier">{tier.name}</span>
                <div className="pricing-price">
                  {tier.price}
                  {tier.period ? <span>{tier.period}</span> : null}
                </div>
                <p className="pricing-desc">{tier.desc}</p>
                <ul className="pricing-features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  className={`btn ${tier.featured ? "primary" : "ghost"}`}
                  href="/search"
                  style={{ width: "100%" }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to protect your brand?</h2>
            <p>
              Get your free AI clearance report in 30&nbsp;seconds. No signup
              required.
            </p>
            <div className="cta-buttons">
              <Link className="btn btn-white btn-lg" href="/search">
                Try AI Clearance
              </Link>
              <Link
                className="btn btn-lg"
                href="/search"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                }}
              >
                Search Trademarks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
