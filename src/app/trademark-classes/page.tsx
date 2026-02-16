import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { niceClasses } from "@/lib/classes";

export const metadata: Metadata = {
  title: "All 45 Trademark Classes Explained | Nice Classification Guide",
  description:
    "Browse all 45 Nice trademark classes with plain-English descriptions, real examples, and filing guidance. Find the right class for your UK, EU, or US trademark application.",
  keywords: [
    "trademark classes",
    "Nice classification",
    "trademark class list",
    "Nice classes explained",
    "trademark classification UK",
    "what trademark class do I need",
  ],
  alternates: { canonical: "https://trademarkdashboard.com/trademark-classes" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the 45 trademark classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 45 trademark classes are categories defined by the Nice Classification system. Classes 1-34 cover goods (products) and classes 35-45 cover services. Every trademark application must specify which classes the mark will be registered in.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right trademark class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose the class that best describes your products or services. For example, software falls under Class 9, clothing under Class 25, and restaurant services under Class 43. You can register in multiple classes for broader protection.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to register a trademark in multiple classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK IPO charges £170 for the first class and £50 for each additional class. EUIPO charges €850 for one class, €900 for two, and €150 per additional class beyond two. USPTO charges $250-$350 per class.",
      },
    },
  ],
};

const goodsClasses = niceClasses.filter((c) => c.number <= 34);
const serviceClasses = niceClasses.filter((c) => c.number >= 35);

export default function TrademarkClassesPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">Nice Classification System</span>
          <h1>All 45 Trademark Classes Explained</h1>
          <p className="lead">
            Every trademark must be filed in at least one of 45 internationally
            recognised classes. Browse them below to find the right class for
            your brand, with plain-English descriptions and real examples.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Goods — Classes 1 to 34</h2>
          <p className="subhead">
            Physical products including chemicals, cosmetics, electronics,
            clothing, food, and beverages.
          </p>
          <div className="class-grid">
            {goodsClasses.map((cls) => (
              <Link
                href={`/trademark-classes/class-${cls.number}`}
                key={cls.number}
                className="class-card"
              >
                <span className="class-number">Class {cls.number}</span>
                <h4>{cls.shortName}</h4>
                <span>{cls.examples.slice(0, 3).join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <h2>Services — Classes 35 to 45</h2>
          <p className="subhead">
            Business services including advertising, finance, technology, legal,
            education, and hospitality.
          </p>
          <div className="class-grid">
            {serviceClasses.map((cls) => (
              <Link
                href={`/trademark-classes/class-${cls.number}`}
                key={cls.number}
                className="class-card"
              >
                <span className="class-number">Class {cls.number}</span>
                <h4>{cls.shortName}</h4>
                <span>{cls.examples.slice(0, 3).join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Frequently Asked Questions</h2>

          <h3>What are the 45 trademark classes?</h3>
          <p>
            The 45 trademark classes are categories defined by the{" "}
            <strong>Nice Classification</strong> system, administered by the
            World Intellectual Property Organization (WIPO). Classes 1&ndash;34
            cover goods (physical products) and classes 35&ndash;45 cover
            services. Every trademark application filed at the UK&nbsp;IPO,
            EUIPO, or USPTO must specify which classes the mark will be
            registered in.
          </p>

          <h3>How do I choose the right trademark class?</h3>
          <p>
            Choose the class that best describes your products or services. For
            example, software falls under <strong>Class&nbsp;9</strong>,
            clothing under <strong>Class&nbsp;25</strong>, and restaurant
            services under <strong>Class&nbsp;43</strong>. You can register in
            multiple classes for broader protection. Use our{" "}
            <Link href="/search">AI-powered search</Link> to identify which
            classes competitors in your industry typically file under.
          </p>

          <h3>How much does it cost to register in multiple classes?</h3>
          <p>
            UK&nbsp;IPO charges &pound;170 for the first class and &pound;50
            for each additional class. EUIPO charges &euro;850 for one class,
            &euro;900 for two, and &euro;150 per additional class beyond two.
            USPTO charges $250&ndash;$350 per class. Use our{" "}
            <Link href="/tools/cost-calculator">Filing Cost Calculator</Link>{" "}
            for an instant estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Not sure which class you need?</h2>
            <p>
              Search your brand name and our AI will suggest the most relevant
              trademark classes based on your industry.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Try Free AI Search
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
