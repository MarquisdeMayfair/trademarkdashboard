import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trademark Strength Scorer — How Strong Is Your Brand Name?",
  description:
    "Assess the legal strength of your proposed trademark. Our AI analyses distinctiveness, descriptiveness risk, and phonetic uniqueness to score your mark's registrability.",
  keywords: [
    "trademark strength",
    "how strong is my trademark",
    "trademark distinctiveness",
    "trademark registrability",
    "brand name strength checker",
    "is my trademark distinctive",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/tools/strength-scorer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a trademark strong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strong trademarks are distinctive and don't describe the product or service. The spectrum runs from fanciful (strongest — e.g. 'Kodak'), to arbitrary ('Apple' for computers), suggestive ('Netflix'), descriptive ('Quick Print' — weak), to generic ('Computer' — unregistrable).",
      },
    },
    {
      "@type": "Question",
      name: "Can a descriptive name be trademarked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Purely descriptive names (e.g. 'Best Quality Shoes') are very difficult to register. However, descriptive marks can sometimes gain protection through 'acquired distinctiveness' — evidence that the public associates the name with your brand through long use and advertising.",
      },
    },
  ],
};

export default function StrengthScorerPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">AI Tool</span>
          <h1>Trademark Strength Scorer</h1>
          <p className="lead">
            How registrable is your brand name? Our AI analyses distinctiveness,
            descriptiveness risk, and phonetic uniqueness to give you a clear
            score.
          </p>
          <Link className="btn primary btn-lg" href="/search">
            Score Your Trademark →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>The trademark distinctiveness spectrum</h2>
          <p>
            Trademark law ranks names on a spectrum of distinctiveness. The
            stronger (more distinctive) your mark, the easier it is to register
            and the broader protection you receive.
          </p>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Strength</th>
                  <th>Example</th>
                  <th>Registrable?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Fanciful</strong></td>
                  <td>Strongest</td>
                  <td>Kodak, Xerox</td>
                  <td>Yes — easiest to register</td>
                </tr>
                <tr>
                  <td><strong>Arbitrary</strong></td>
                  <td>Very strong</td>
                  <td>Apple (computers), Shell (fuel)</td>
                  <td>Yes — broadly protectable</td>
                </tr>
                <tr>
                  <td><strong>Suggestive</strong></td>
                  <td>Strong</td>
                  <td>Netflix, Airbus</td>
                  <td>Yes — with some effort</td>
                </tr>
                <tr>
                  <td><strong>Descriptive</strong></td>
                  <td>Weak</td>
                  <td>Quick Print, Best Value</td>
                  <td>Difficult — needs acquired distinctiveness</td>
                </tr>
                <tr>
                  <td><strong>Generic</strong></td>
                  <td>None</td>
                  <td>Computer, Shoes</td>
                  <td>No — never registrable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What our AI analyses</h2>
          <ul>
            <li><strong>Distinctiveness level</strong> — Where your mark falls on the spectrum</li>
            <li><strong>Descriptiveness risk</strong> — Whether your name describes your products/services</li>
            <li><strong>Phonetic uniqueness</strong> — How different your mark sounds from existing registrations</li>
            <li><strong>Length and memorability</strong> — Practical factors that affect brand strength</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>What makes a trademark strong?</h3>
          <p>
            Strong trademarks are distinctive and don&apos;t describe the
            product or service. Fanciful marks (invented words like
            &quot;Kodak&quot;) are the strongest. Descriptive names are the
            weakest and hardest to register.
          </p>

          <h3>Can a descriptive name be trademarked?</h3>
          <p>
            Purely descriptive names are very difficult to register. However,
            they can gain protection through &quot;acquired distinctiveness&quot;
            — evidence that the public associates the name with your brand
            through long use and advertising.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Score your brand name</h2>
            <p>
              Get an instant AI-powered strength analysis of your proposed
              trademark.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Score Your Trademark →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
