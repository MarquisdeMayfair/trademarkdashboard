import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trademark Filing Cost Calculator — UK, EU & US Costs Compared",
  description:
    "Calculate trademark registration costs for UK IPO, EUIPO, and USPTO. Compare filing fees by number of classes and get a clear cost breakdown for your application.",
  keywords: [
    "trademark cost calculator",
    "trademark registration cost UK",
    "EUIPO filing cost",
    "USPTO trademark fee",
    "how much to trademark a name",
    "trademark filing fees",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/tools/cost-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to trademark a name in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK trademark registration costs £170 for one class online, plus £50 for each additional class. There are no maintenance fees during the 10-year registration period. Renewal costs £200 for one class plus £50 per additional class.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to file a trademark in the UK or EU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a single country, UK is cheaper (£170 vs €850). However, an EU trademark covers 27 countries at once, making it far better value if you need pan-European protection. Filing in both UK and EU costs approximately £170 + €850 = ~£900 total.",
      },
    },
  ],
};

export default function CostCalculatorPage() {
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
          <h1>Trademark Filing Cost Calculator</h1>
          <p className="lead">
            Compare trademark registration costs across UK IPO, EUIPO, and
            USPTO. Know exactly what you&apos;ll pay before you file.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Filing fees at a glance (2026)</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Register</th>
                  <th>1 Class</th>
                  <th>2 Classes</th>
                  <th>3 Classes</th>
                  <th>Each Extra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>🇬🇧 UK IPO</strong></td>
                  <td>&pound;170</td>
                  <td>&pound;220</td>
                  <td>&pound;270</td>
                  <td>+&pound;50</td>
                </tr>
                <tr>
                  <td><strong>🇪🇺 EUIPO</strong></td>
                  <td>&euro;850</td>
                  <td>&euro;900</td>
                  <td>&euro;1,050</td>
                  <td>+&euro;150</td>
                </tr>
                <tr>
                  <td><strong>🇺🇸 USPTO (TEAS+)</strong></td>
                  <td>$350</td>
                  <td>$700</td>
                  <td>$1,050</td>
                  <td>+$350</td>
                </tr>
                <tr>
                  <td><strong>🇺🇸 USPTO (TEAS Standard)</strong></td>
                  <td>$250</td>
                  <td>$500</td>
                  <td>$750</td>
                  <td>+$250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginTop: "8px" }}>
            All fees are official government filing fees and do not include
            attorney costs.
          </p>

          <h2>What&apos;s included in the filing fee?</h2>
          <ul>
            <li>Examination of your application by the trademark office</li>
            <li>Publication for opposition</li>
            <li>Registration certificate</li>
            <li>10 years of protection (UK and EU) or initial protection period (US)</li>
          </ul>

          <h2>Additional costs to budget for</h2>
          <ul>
            <li><strong>Trademark search</strong> — Free with Trademark Dashboard, or &pound;300&ndash;&pound;1,500 with a solicitor</li>
            <li><strong>Attorney fees</strong> — Optional, &pound;500&ndash;&pound;2,000 depending on complexity</li>
            <li><strong>Opposition defence</strong> — &pound;1,000&ndash;&pound;10,000+ if your application is challenged</li>
            <li><strong>Renewal</strong> — Every 10 years (UK: &pound;200 + &pound;50/class; EU: &euro;850 + &euro;150/class)</li>
          </ul>

          <h2>Tips to save money</h2>
          <ul>
            <li>
              <strong>Search before filing</strong> — A free{" "}
              <Link href="/search">AI-powered search</Link> can save you
              &pound;170+ in wasted filing fees.
            </li>
            <li>
              <strong>Choose classes wisely</strong> — Only file in{" "}
              <Link href="/trademark-classes">classes</Link> you genuinely need.
            </li>
            <li>
              <strong>File online</strong> — UK IPO online fees are &pound;30
              cheaper than postal applications.
            </li>
            <li>
              <strong>Use EUIPO&apos;s two-class discount</strong> — Filing for
              two classes costs only &euro;50 more than one.
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>How much does it cost to trademark a name in the UK?</h3>
          <p>
            UK trademark registration costs &pound;170 for one class online,
            plus &pound;50 for each additional class. There are no maintenance
            fees during the 10-year registration period.
          </p>

          <h3>Is it cheaper to file in the UK or EU?</h3>
          <p>
            For a single country, UK is cheaper (&pound;170 vs &euro;850).
            However, an EU trademark covers 27 countries at once, making it far
            better value if you need pan-European protection.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Save money — search before you file</h2>
            <p>
              A free AI trademark search can save you &pound;170+ in wasted
              filing fees. Check availability now.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Free Trademark Search →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
