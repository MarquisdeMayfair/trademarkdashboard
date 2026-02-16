import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Search for a Trademark (UK, EU & US) | Step-by-Step Guide",
  description:
    "Learn how to search for a trademark before you file. Our step-by-step guide covers UK IPO, EUIPO, and USPTO searches, common pitfalls, and how AI clearance reports save time and money.",
  keywords: [
    "how to search for a trademark",
    "trademark search UK",
    "trademark search guide",
    "check trademark availability",
    "trademark clearance search",
    "search trademark register",
  ],
  alternates: {
    canonical: "https://trademarkdashboard.com/guides/trademark-search-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I search for a trademark in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can search the UK IPO trademark register at gov.uk, use the EUIPO's TMview tool for EU marks, or use Trademark Dashboard for instant AI-powered searches across UK, EU, and US registers simultaneously.",
      },
    },
    {
      "@type": "Question",
      name: "Is a trademark search necessary before filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While not legally required, a thorough trademark search is strongly recommended. Filing without searching risks receiving an opposition, wasting filing fees (£170+), and potentially having to rebrand. Professional searches can save thousands in legal costs.",
      },
    },
    {
      "@type": "Question",
      name: "What is a phonetic similarity search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A phonetic similarity search identifies trademarks that sound similar to your proposed mark, even if spelled differently. For example, 'Lyft' and 'Lift' would be flagged. AI-powered searches automate this analysis using algorithms that model how humans perceive sound.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a professional trademark search cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional searches from law firms cost £300-£1,500 per mark. AI-powered services like Trademark Dashboard offer instant clearance reports for free or from £29, covering multiple registers in seconds rather than days.",
      },
    },
  ],
};

export default function TrademarkSearchGuidePage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">Trademark Guides</span>
          <h1>How to Search for a Trademark (UK, EU &amp; US)</h1>
          <p className="lead">
            A complete, step-by-step guide to searching for a trademark before
            you file. Avoid oppositions, save money, and protect your brand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Why trademark searching matters</h2>
          <p>
            Filing a trademark without searching first is like building a house
            without checking the land registry. You could invest months of work
            and thousands of pounds only to discover that someone already owns a
            confusingly similar mark.
          </p>
          <p>
            A proper trademark search helps you:
          </p>
          <ul>
            <li>Avoid wasting filing fees (&pound;170+ at UK IPO)</li>
            <li>Prevent costly oppositions and rebrandings</li>
            <li>Identify potential risks before you commit to a brand</li>
            <li>Strengthen your position if you do face a challenge</li>
          </ul>

          <h2>Step 1: Define what you&apos;re searching for</h2>
          <p>
            Before you search, be clear about what you want to protect. A
            trademark can be a word, phrase, logo, or combination. For a name
            search, start with the exact text of your proposed mark.
          </p>
          <p>
            You should also identify which{" "}
            <Link href="/trademark-classes">Nice classes</Link> your products or
            services fall under, as trademarks are registered per class.
          </p>

          <h2>Step 2: Search the official registers</h2>
          <p>There are three main registers you should check:</p>
          <ul>
            <li>
              <strong>UK IPO</strong> — The UK Intellectual Property Office
              maintains the register for all UK trademarks
            </li>
            <li>
              <strong>EUIPO</strong> — The European Union Intellectual Property
              Office covers EU-wide registrations
            </li>
            <li>
              <strong>USPTO</strong> — The US Patent and Trademark Office for US
              registrations
            </li>
          </ul>
          <p>
            You can search each individually, or use{" "}
            <Link href="/search">Trademark Dashboard</Link> to search all three
            simultaneously with a single query.
          </p>

          <h2>Step 3: Check for phonetic similarities</h2>
          <p>
            Identical matches are the obvious risk, but trademark law also
            considers <strong>confusing similarity</strong>. Two marks that sound
            alike can be refused even if spelled differently. For example:
          </p>
          <ul>
            <li>&quot;Lyft&quot; and &quot;Lift&quot;</li>
            <li>&quot;Xero&quot; and &quot;Zero&quot;</li>
            <li>&quot;Flickr&quot; and &quot;Flicker&quot;</li>
          </ul>
          <p>
            AI-powered phonetic analysis can flag these conflicts automatically,
            saving you from manual guesswork.
          </p>

          <h2>Step 4: Evaluate the results</h2>
          <p>Not every match is a blocker. Consider:</p>
          <ul>
            <li>
              <strong>Class overlap</strong> — A matching name in a completely
              different class may not conflict
            </li>
            <li>
              <strong>Geographic scope</strong> — A US-only registration may not
              block a UK filing
            </li>
            <li>
              <strong>Status</strong> — Expired or abandoned marks are usually
              available
            </li>
            <li>
              <strong>Similarity degree</strong> — Exact matches are high-risk;
              partial overlaps need judgement
            </li>
          </ul>

          <h2>Step 5: Get a professional opinion (if needed)</h2>
          <p>
            For high-value brands or complex results, a trademark attorney can
            provide a formal clearance opinion. This is especially important if
            you find similar marks and need to assess the true risk.
          </p>

          <h2>How AI changes trademark searching</h2>
          <p>
            Traditional trademark searching involves manually querying multiple
            databases, interpreting results, and hiring attorneys for clearance
            opinions. AI-powered platforms like Trademark Dashboard automate this
            process:
          </p>
          <ul>
            <li>
              <strong>Instant multi-register search</strong> — Query UK IPO,
              EUIPO, and USPTO in one go
            </li>
            <li>
              <strong>Phonetic analysis</strong> — Automated sound-alike
              detection across all results
            </li>
            <li>
              <strong>Risk scoring</strong> — AI-generated risk assessments for
              each potential conflict
            </li>
            <li>
              <strong>Class suggestions</strong> — Smart recommendations for
              which classes to file in
            </li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>How do I search for a trademark in the UK?</h3>
          <p>
            You can search the UK IPO trademark register at gov.uk, use
            EUIPO&apos;s TMview tool for EU marks, or use Trademark Dashboard
            for instant AI-powered searches across UK, EU, and US registers
            simultaneously.
          </p>

          <h3>Is a trademark search necessary before filing?</h3>
          <p>
            While not legally required, a thorough trademark search is strongly
            recommended. Filing without searching risks receiving an opposition,
            wasting filing fees (&pound;170+), and potentially having to
            rebrand. Professional searches can save thousands in legal costs.
          </p>

          <h3>What is a phonetic similarity search?</h3>
          <p>
            A phonetic similarity search identifies trademarks that sound
            similar to your proposed mark, even if spelled differently. For
            example, &quot;Lyft&quot; and &quot;Lift&quot; would be flagged.
            AI-powered searches automate this analysis.
          </p>

          <h3>How much does a professional trademark search cost?</h3>
          <p>
            Traditional searches from law firms cost &pound;300&ndash;&pound;1,500 per
            mark. AI-powered services like Trademark Dashboard offer instant
            clearance reports for free or from &pound;29, covering multiple
            registers in seconds rather than days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to search?</h2>
            <p>
              Try our free AI-powered trademark search. Get results from UK,
              EU, and US registers in seconds.
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
