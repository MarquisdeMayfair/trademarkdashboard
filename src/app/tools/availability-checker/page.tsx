import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trademark Availability Checker — Is Your Brand Name Available?",
  description:
    "Check if your brand name is available as a trademark across UK IPO, EUIPO, and USPTO. Instant results with AI-powered similarity analysis.",
  keywords: [
    "trademark availability check",
    "is my trademark available",
    "brand name availability",
    "trademark name search free",
    "check trademark UK",
    "trademark search free",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/tools/availability-checker",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I check if a trademark is available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search the relevant trademark registers (UK IPO, EUIPO, USPTO) for your proposed name. Our free availability checker searches all three registers simultaneously and flags conflicts including phonetically similar marks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I check trademark availability for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Trademark Dashboard offers free trademark availability checks across UK, EU, and US registers. The basic search is completely free with no account required.",
      },
    },
  ],
};

export default function AvailabilityCheckerPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">Free Tool</span>
          <h1>Trademark Availability Checker</h1>
          <p className="lead">
            Is your brand name available? Find out instantly. We check UK IPO,
            EUIPO, and USPTO in one search.
          </p>
          <Link className="btn primary btn-lg" href="/search">
            Check Availability Free →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Check trademark availability in 3 registers at once</h2>
          <p>
            Instead of searching each register individually, our availability
            checker queries all major trademark databases simultaneously:
          </p>
          <div className="feature-grid" style={{ margin: "32px 0" }}>
            <div className="feature-card">
              <div className="feature-icon">🇬🇧</div>
              <h4>UK IPO</h4>
              <p>2M+ UK trademarks from the Intellectual Property Office.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🇪🇺</div>
              <h4>EUIPO</h4>
              <p>EU Trade Marks covering all 27 member states.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🇺🇸</div>
              <h4>USPTO</h4>
              <p>US federal trademark registrations and applications.</p>
            </div>
          </div>

          <h2>What the availability check includes</h2>
          <ul>
            <li><strong>Exact match search</strong> — Identical marks in your selected classes</li>
            <li><strong>Similarity analysis</strong> — Marks that could cause confusion</li>
            <li><strong>Status filtering</strong> — Active, pending, and recently expired marks</li>
            <li><strong>Class breakdown</strong> — Results organised by Nice classification</li>
          </ul>

          <h2>Why checking availability matters</h2>
          <p>
            Filing a trademark that conflicts with an existing registration
            wastes your filing fee (&pound;170+ at UK IPO) and delays your
            launch. A quick availability check before filing can save you
            hundreds of pounds and months of frustration.
          </p>
          <p>
            Read our full{" "}
            <Link href="/guides/trademark-search-guide">
              trademark search guide
            </Link>{" "}
            for a deeper dive into conducting thorough searches.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>How do I check if a trademark is available?</h3>
          <p>
            Search the relevant trademark registers for your proposed name. Our
            free checker searches UK, EU, and US registers simultaneously and
            flags conflicts including phonetically similar marks.
          </p>

          <h3>Can I check trademark availability for free?</h3>
          <p>
            Yes. Trademark Dashboard offers free trademark availability checks
            across UK, EU, and US registers. No account required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Check your trademark now</h2>
            <p>Free, instant results across 3 major registers.</p>
            <Link className="btn btn-white btn-lg" href="/search">
              Check Availability →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
