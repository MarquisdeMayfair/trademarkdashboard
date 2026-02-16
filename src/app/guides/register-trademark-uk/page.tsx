import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Register a Trademark in the UK (2026 Guide) | Trademark Dashboard",
  description:
    "Step-by-step guide to registering a UK trademark with the IPO. Covers costs, timelines, Nice classes, and how to avoid common mistakes. Updated for 2026.",
  keywords: [
    "register trademark UK",
    "UK trademark registration",
    "how to trademark a name UK",
    "UK IPO trademark application",
    "trademark registration cost UK",
    "register a brand name UK",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/guides/register-trademark-uk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to register a trademark in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A UK trademark costs £170 for one class online or £200 by post. Each additional class is £50. Most straightforward applications can be completed without a solicitor, though complex cases may benefit from professional advice.",
      },
    },
    {
      "@type": "Question",
      name: "How long does UK trademark registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If no oppositions are filed, UK trademark registration typically takes around 4 months from application to registration. The examination phase takes about 2-3 weeks, followed by a 2-month opposition period.",
      },
    },
    {
      "@type": "Question",
      name: "Can I register a trademark myself in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can file directly with the UK IPO online. You don't need a solicitor or trademark attorney. However, a thorough trademark search before filing is essential to avoid wasting your fee on an application that may be refused.",
      },
    },
  ],
};

export default function RegisterTrademarkUKPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">UK Trademark Guide</span>
          <h1>How to Register a Trademark in the UK (2026)</h1>
          <p className="lead">
            A practical, step-by-step guide to registering your brand name,
            logo, or slogan with the UK Intellectual Property Office.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>UK trademark registration at a glance</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              margin: "24px 0",
            }}
          >
            <div className="class-card">
              <h4>&pound;170</h4>
              <span>First class (online)</span>
            </div>
            <div className="class-card">
              <h4>&pound;50</h4>
              <span>Each extra class</span>
            </div>
            <div className="class-card">
              <h4>~4 months</h4>
              <span>Typical timeline</span>
            </div>
            <div className="class-card">
              <h4>10 years</h4>
              <span>Protection period</span>
            </div>
          </div>

          <h2>Step 1: Search before you file</h2>
          <p>
            The most important step happens before you even start your
            application. A thorough{" "}
            <Link href="/guides/trademark-search-guide">trademark search</Link>{" "}
            ensures your proposed mark isn&apos;t already registered or
            confusingly similar to an existing one.
          </p>
          <p>
            Use our{" "}
            <Link href="/search">free AI-powered search</Link> to check UK IPO,
            EUIPO, and USPTO registers in seconds. This can save you &pound;170+
            in wasted filing fees and months of delay.
          </p>

          <h2>Step 2: Choose your Nice classes</h2>
          <p>
            Trademarks are registered per class of goods or services. The
            international{" "}
            <Link href="/trademark-classes">Nice Classification</Link> system
            has 45 classes — 34 for goods and 11 for services. You need to
            select at least one class that matches what your brand covers.
          </p>
          <p>
            For example, a software company would typically file in{" "}
            <Link href="/trademark-classes/class-9">Class 9</Link> (software)
            and possibly{" "}
            <Link href="/trademark-classes/class-42">Class 42</Link> (SaaS
            services).
          </p>

          <h2>Step 3: Prepare your application</h2>
          <p>You&apos;ll need:</p>
          <ul>
            <li>The exact mark you want to register (word, logo, or both)</li>
            <li>A description of your goods/services in each chosen class</li>
            <li>Your personal or business details</li>
            <li>Payment of &pound;170 + &pound;50 per additional class</li>
          </ul>

          <h2>Step 4: File online with the UK IPO</h2>
          <p>
            The UK IPO offers an online application service that takes about
            30 minutes to complete. You&apos;ll receive a filing receipt with
            your application number immediately.
          </p>

          <h2>Step 5: Examination</h2>
          <p>
            An IPO examiner will review your application within 2&ndash;3
            weeks. They check for:
          </p>
          <ul>
            <li>Absolute grounds for refusal (mark is too descriptive or generic)</li>
            <li>Correct classification of goods/services</li>
            <li>Proper representation of the mark</li>
          </ul>
          <p>
            If there are issues, you&apos;ll receive an examination report and
            have the opportunity to respond.
          </p>

          <h2>Step 6: Publication and opposition period</h2>
          <p>
            Once accepted, your mark is published for
            a <strong>2-month opposition period</strong>. Any third party can
            oppose your registration during this time. Most applications pass
            through without opposition.
          </p>

          <h2>Step 7: Registration</h2>
          <p>
            If no opposition is filed, your trademark is registered and you
            receive a certificate. Your mark is protected for{" "}
            <strong>10 years</strong> from the filing date and can be renewed
            indefinitely.
          </p>

          <h2>Common mistakes to avoid</h2>
          <ul>
            <li>
              <strong>Filing without searching</strong> — The most expensive
              mistake. Always search first.
            </li>
            <li>
              <strong>Choosing the wrong class</strong> — Protecting software in
              a clothing class won&apos;t help you.
            </li>
            <li>
              <strong>Being too descriptive</strong> — Marks that simply describe
              what you sell (&quot;Quality Shoes&quot;) will be refused.
            </li>
            <li>
              <strong>Forgetting to renew</strong> — Set a reminder for 10 years
              after filing.
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>How much does it cost to register a trademark in the UK?</h3>
          <p>
            A UK trademark costs &pound;170 for one class online or &pound;200
            by post. Each additional class is &pound;50. Most straightforward
            applications can be completed without a solicitor.
          </p>

          <h3>How long does UK trademark registration take?</h3>
          <p>
            If no oppositions are filed, registration typically takes around 4
            months. Examination takes 2&ndash;3 weeks, followed by a 2-month
            opposition period.
          </p>

          <h3>Can I register a trademark myself in the UK?</h3>
          <p>
            Yes, you can file directly with the UK IPO online. You don&apos;t
            need a solicitor or trademark attorney. However, a thorough{" "}
            <Link href="/guides/trademark-search-guide">trademark search</Link>{" "}
            before filing is essential.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Search before you file</h2>
            <p>
              Check your brand name across UK, EU, and US registers in seconds.
              Free AI-powered clearance reports.
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
