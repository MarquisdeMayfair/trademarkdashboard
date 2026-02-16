import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trademark Monitor — Real-Time Brand Protection Alerts",
  description:
    "Monitor trademark registers for new filings that could conflict with your brand. Get instant alerts when similar marks are filed at UK IPO, EUIPO, or USPTO.",
  keywords: [
    "trademark monitoring",
    "trademark watch service",
    "brand monitoring",
    "trademark alerts",
    "trademark opposition alert",
    "protect my trademark",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/tools/monitoring",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is trademark monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trademark monitoring (also called a 'watch service') continuously scans trademark registers for new applications that could conflict with your existing mark. When a similar mark is filed, you're alerted so you can take action — such as filing an opposition — before it's too late.",
      },
    },
    {
      "@type": "Question",
      name: "Why do I need to monitor my trademark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trademark offices don't block conflicting applications automatically. It's up to brand owners to monitor for potential infringements and file oppositions within the legal deadline (2 months UK, 3 months EU). Without monitoring, competitors could register confusingly similar marks.",
      },
    },
  ],
};

export default function MonitoringPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">Brand Protection</span>
          <h1>Trademark Monitor</h1>
          <p className="lead">
            Protect your brand 24/7. Get instant alerts when similar trademarks
            are filed at UK IPO, EUIPO, or USPTO.
          </p>
          <Link className="btn primary btn-lg" href="/search">
            Start Monitoring →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>How trademark monitoring works</h2>
          <div className="feature-grid" style={{ margin: "32px 0" }}>
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h4>Set up your watch</h4>
              <p>Tell us which marks and classes to monitor across which registers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h4>AI scans daily</h4>
              <p>Our AI scans new filings every day for potential conflicts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h4>Instant alerts</h4>
              <p>Get notified immediately when a similar mark is filed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">4</div>
              <h4>Take action</h4>
              <p>Decide whether to oppose within the legal deadline.</p>
            </div>
          </div>

          <h2>Why monitoring matters</h2>
          <p>
            Trademark offices do <strong>not</strong> automatically block
            conflicting applications. It&apos;s your responsibility as a brand
            owner to identify and oppose new filings that threaten your mark.
          </p>
          <ul>
            <li>
              <strong>UK IPO</strong> — You have 2 months after publication to
              file an opposition
            </li>
            <li>
              <strong>EUIPO</strong> — 3-month opposition period after
              publication
            </li>
            <li>
              <strong>USPTO</strong> — 30-day opposition period (extendable)
            </li>
          </ul>
          <p>
            Without monitoring, you might miss these windows entirely, allowing
            a competing mark to be registered.
          </p>

          <h2>What we monitor for</h2>
          <ul>
            <li><strong>Identical marks</strong> — Exact matches to your registered mark</li>
            <li><strong>Phonetic matches</strong> — Names that sound similar to yours</li>
            <li><strong>Visual similarities</strong> — Marks that look alike</li>
            <li><strong>Class conflicts</strong> — New filings in your registered classes and related ones</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>What is trademark monitoring?</h3>
          <p>
            Trademark monitoring continuously scans registers for new
            applications that could conflict with your existing mark. When a
            similar mark is filed, you&apos;re alerted so you can take action
            before the opposition deadline passes.
          </p>

          <h3>Why do I need to monitor my trademark?</h3>
          <p>
            Trademark offices don&apos;t block conflicting applications
            automatically. It&apos;s up to brand owners to monitor and file
            oppositions within the legal deadline. Without monitoring,
            competitors could register confusingly similar marks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Protect your brand</h2>
            <p>
              Set up trademark monitoring and never miss a conflicting filing
              again.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Start Monitoring →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
