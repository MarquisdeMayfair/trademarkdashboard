import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Name Risk Scanner — Check Your Brand Name for Trademark Conflicts",
  description:
    "Instantly scan your proposed brand name for trademark risks. AI-powered analysis across UK IPO, EUIPO, and USPTO with phonetic similarity detection and risk scoring.",
  keywords: [
    "brand name check",
    "trademark name search",
    "trademark conflict check",
    "brand name risk",
    "AI trademark scanner",
    "name availability check",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/tools/name-risk-scanner",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI Name Risk Scanner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI Name Risk Scanner uses artificial intelligence to analyse your proposed brand name against existing trademark registers. It checks for identical matches, phonetic similarities, and visual resemblance to flag potential conflicts before you invest in branding or filing.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is AI trademark scanning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI trademark scanning catches conflicts that simple text searches miss, including phonetic similarities (Lyft vs Lift), transliterations, and common misspellings. While no tool replaces legal advice for complex cases, AI scanning is significantly more thorough than manual register searches.",
      },
    },
  ],
};

export default function NameRiskScannerPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">Free AI Tool</span>
          <h1>AI Name Risk Scanner</h1>
          <p className="lead">
            Enter your proposed brand name and get an instant AI-powered risk
            assessment. We scan UK, EU, and US trademark registers for
            identical, phonetic, and visually similar conflicts.
          </p>
          <Link className="btn primary btn-lg" href="/search">
            Scan Your Name Free →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>How the AI Name Risk Scanner works</h2>
          <div className="feature-grid" style={{ margin: "32px 0" }}>
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h4>Enter your name</h4>
              <p>Type your proposed brand, product, or company name.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h4>AI searches 3 registers</h4>
              <p>We scan UK IPO, EUIPO, and USPTO simultaneously.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h4>Phonetic analysis</h4>
              <p>AI identifies sound-alike marks that text searches miss.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">4</div>
              <h4>Risk score</h4>
              <p>Get a clear risk rating with actionable recommendations.</p>
            </div>
          </div>

          <h2>Why use AI for trademark name checking?</h2>
          <p>
            Traditional trademark searches only catch exact or near-exact text
            matches. Our AI goes further by detecting:
          </p>
          <ul>
            <li><strong>Phonetic conflicts</strong> — names that sound alike (&quot;Xero&quot; vs &quot;Zero&quot;)</li>
            <li><strong>Common variations</strong> — dropped letters, creative spellings</li>
            <li><strong>Cross-class risks</strong> — similar marks in related industries</li>
            <li><strong>Multi-register conflicts</strong> — catches marks registered abroad that could still block you</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>What is an AI Name Risk Scanner?</h3>
          <p>
            An AI Name Risk Scanner uses artificial intelligence to analyse
            your proposed brand name against existing trademark registers.
            It checks for identical, phonetic, and visual similarities to flag
            potential conflicts.
          </p>

          <h3>How accurate is AI trademark scanning?</h3>
          <p>
            AI scanning catches conflicts that simple text searches miss. While
            no tool replaces legal advice for complex cases, AI scanning is
            significantly more thorough than manual register searches.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Check your brand name now</h2>
            <p>Free, instant, AI-powered. No account required.</p>
            <Link className="btn btn-white btn-lg" href="/search">
              Scan Your Name →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
