import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Register an EU Trademark (EUTM) | Step-by-Step Guide 2026",
  description:
    "Complete guide to registering an EU trademark (EUTM) with EUIPO. Covers costs, timeline, Nice classes, and differences from UK trademark registration.",
  keywords: [
    "register EU trademark",
    "EUTM registration",
    "EUIPO trademark application",
    "EU trademark cost",
    "how to register a trademark in Europe",
    "European trademark registration",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/guides/register-trademark-eu",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EU trademark cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EUTM costs €850 for one class, €900 for two classes, and €150 for each additional class when filed online. This single registration covers all 27 EU member states.",
      },
    },
    {
      "@type": "Question",
      name: "Does an EU trademark cover the UK after Brexit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Since Brexit on 1 January 2021, EU trademarks no longer cover the UK. You need separate registrations: a UK trademark with the UK IPO and an EUTM with EUIPO. Existing EUTMs were automatically cloned to the UK register.",
      },
    },
    {
      "@type": "Question",
      name: "How long does EU trademark registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If no oppositions are filed and the application passes examination, registration typically takes 5-6 months. Fast-track applications using pre-approved terms from the Harmonised Database can be processed more quickly.",
      },
    },
  ],
};

export default function RegisterTrademarkEUPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">EU Trademark Guide</span>
          <h1>How to Register an EU Trademark (EUTM)</h1>
          <p className="lead">
            One registration, 27 countries. Everything you need to know about
            filing an EU Trade Mark with EUIPO.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>EU trademark registration at a glance</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              margin: "24px 0",
            }}
          >
            <div className="class-card">
              <h4>&euro;850</h4>
              <span>One class (online)</span>
            </div>
            <div className="class-card">
              <h4>&euro;900</h4>
              <span>Two classes</span>
            </div>
            <div className="class-card">
              <h4>~5&ndash;6 months</h4>
              <span>Typical timeline</span>
            </div>
            <div className="class-card">
              <h4>27 countries</h4>
              <span>One registration</span>
            </div>
          </div>

          <h2>What is an EU Trade Mark (EUTM)?</h2>
          <p>
            An EUTM gives you trademark protection across all 27 EU member
            states with a single application filed at the European Union
            Intellectual Property Office (EUIPO) in Alicante, Spain.
          </p>
          <p>
            <strong>Since Brexit</strong>, an EUTM no longer covers the United
            Kingdom. If you need UK protection, you must file a separate
            application with the{" "}
            <Link href="/guides/register-trademark-uk">UK IPO</Link>.
          </p>

          <h2>Step 1: Search for conflicts</h2>
          <p>
            Before filing, search for existing marks that could conflict with
            yours. EUIPO provides some search tools, but they only cover EU
            registrations. Use{" "}
            <Link href="/search">Trademark Dashboard</Link> to search UK, EU,
            and US registers simultaneously with AI-powered phonetic analysis.
          </p>

          <h2>Step 2: Choose your Nice classes</h2>
          <p>
            Like UK trademarks, EUTMs use the{" "}
            <Link href="/trademark-classes">Nice Classification</Link> system.
            The EUIPO pricing encourages filing in two classes (&euro;900 for
            two vs &euro;850 for one), so consider whether a second class makes
            sense for your business.
          </p>

          <h2>Step 3: File online at EUIPO</h2>
          <p>
            EUIPO offers an online filing system. Using pre-approved terms from
            the Harmonised Database qualifies you for &quot;Fast Track&quot;
            examination, which can significantly speed up the process.
          </p>

          <h2>Step 4: Examination</h2>
          <p>
            EUIPO examiners check for absolute grounds (descriptiveness,
            genericness) but <strong>do not examine for prior rights</strong>.
            This means your application won&apos;t be refused just because a
            similar mark exists — but the owner of that mark can oppose it.
          </p>

          <h2>Step 5: Opposition period</h2>
          <p>
            After publication, there is a <strong>3-month opposition period</strong>{" "}
            (longer than the UK&apos;s 2 months). Third parties can file
            oppositions based on earlier rights in any EU member state.
          </p>

          <h2>Step 6: Registration</h2>
          <p>
            If no opposition is filed, your EUTM is registered and valid for{" "}
            <strong>10 years</strong>, renewable indefinitely.
          </p>

          <h2>UK + EU: Do you need both?</h2>
          <p>
            If you do business in both the UK and EU, you need separate
            registrations. Many businesses file both simultaneously to ensure
            maximum protection from day one.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>How much does an EU trademark cost?</h3>
          <p>
            An EUTM costs &euro;850 for one class, &euro;900 for two classes,
            and &euro;150 for each additional class when filed online. This
            single registration covers all 27 EU member states.
          </p>

          <h3>Does an EU trademark cover the UK after Brexit?</h3>
          <p>
            No. Since 1 January 2021, EU trademarks no longer cover the UK.
            You need separate registrations. Existing EUTMs held before Brexit
            were automatically cloned to the UK register.
          </p>

          <h3>How long does EU trademark registration take?</h3>
          <p>
            Registration typically takes 5&ndash;6 months if no oppositions are
            filed. Fast-track applications using pre-approved terms can be
            processed more quickly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Search EU trademarks instantly</h2>
            <p>
              Check availability across all 27 EU member states with our
              AI-powered search engine.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Free EU Trademark Search →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
