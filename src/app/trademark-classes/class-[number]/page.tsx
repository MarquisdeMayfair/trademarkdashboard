import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { niceClasses, getClassByNumber } from "@/lib/classes";

type Props = { params: Promise<{ number: string }> };

export async function generateStaticParams() {
  return niceClasses.map((c) => ({ number: String(c.number) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const cls = getClassByNumber(Number(number));
  if (!cls) return {};

  const title = `Trademark Class ${cls.number} — ${cls.name} | Nice Classification`;
  const description = `Everything you need to know about Trademark Class ${cls.number} (${cls.name}). ${cls.description} Examples: ${cls.examples.slice(0, 4).join(", ")}. File your UK or EU trademark today.`;

  return {
    title,
    description,
    keywords: cls.keywords,
    alternates: {
      canonical: `https://trademarkdashboard.com/trademark-classes/class-${cls.number}`,
    },
    openGraph: {
      title,
      description,
      url: `https://trademarkdashboard.com/trademark-classes/class-${cls.number}`,
    },
  };
}

export default async function ClassPage({ params }: Props) {
  const { number } = await params;
  const cls = getClassByNumber(Number(number));
  if (!cls) notFound();

  const related = cls.relatedClasses
    .map((n) => niceClasses.find((c) => c.number === n))
    .filter(Boolean);

  const isGoods = cls.number <= 34;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is Trademark Class ${cls.number}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Trademark Class ${cls.number} covers ${cls.name.toLowerCase()}. ${cls.description}`,
        },
      },
      {
        "@type": "Question",
        name: `What products or services are in Class ${cls.number}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Class ${cls.number} includes: ${cls.examples.join(", ")}. This is one of the ${isGoods ? "34 goods" : "11 services"} classes in the Nice Classification system.`,
        },
      },
      {
        "@type": "Question",
        name: `How much does it cost to file a trademark in Class ${cls.number}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `UK IPO: £170 for the first class. EUIPO: €850 for one class. USPTO: $250-$350 per class. Additional classes are discounted. Use our cost calculator for a precise estimate.`,
        },
      },
    ],
  };

  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <Link
            href="/trademark-classes"
            style={{
              color: "var(--brand-light)",
              textDecoration: "none",
              fontSize: "14px",
              marginBottom: "8px",
              display: "inline-block",
            }}
          >
            ← All 45 Trademark Classes
          </Link>
          <span className="eyebrow">
            Nice Classification — {isGoods ? "Goods" : "Services"}
          </span>
          <h1>
            Trademark Class {cls.number}: {cls.name}
          </h1>
          <p className="lead">{cls.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>What does Class {cls.number} cover?</h2>
          <p>
            Trademark Class {cls.number} is one of the{" "}
            {isGoods ? "34 goods classes" : "11 services classes"} in the Nice
            Classification system used internationally for trademark
            registration. This class covers <strong>{cls.name.toLowerCase()}</strong>.
          </p>
          <p>{cls.description}</p>

          <h2>Examples of {isGoods ? "products" : "services"} in Class {cls.number}</h2>
          <ul>
            {cls.examples.map((ex) => (
              <li key={ex}>{ex}</li>
            ))}
          </ul>

          <h2>Who files trademarks in Class {cls.number}?</h2>
          <p>
            Common applicants include businesses in the{" "}
            <strong>{cls.shortName.toLowerCase()}</strong> sector. If your
            products or services fall within {cls.name.toLowerCase()}, you
            should consider filing in this class. Many brands also file in
            related classes for broader protection.
          </p>

          <h2>Filing costs for Class {cls.number}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              margin: "24px 0",
            }}
          >
            <div className="class-card">
              <span className="class-number">🇬🇧</span>
              <h4>UK IPO</h4>
              <span>&pound;170 first class</span>
            </div>
            <div className="class-card">
              <span className="class-number">🇪🇺</span>
              <h4>EUIPO</h4>
              <span>&euro;850 first class</span>
            </div>
            <div className="class-card">
              <span className="class-number">🇺🇸</span>
              <h4>USPTO</h4>
              <span>$250&ndash;$350 per class</span>
            </div>
          </div>
          <p>
            Use our{" "}
            <Link href="/tools/cost-calculator">Filing Cost Calculator</Link>{" "}
            for a detailed estimate based on your specific requirements.
          </p>

          {related.length > 0 && (
            <>
              <h2>Related trademark classes</h2>
              <p>
                Brands filing in Class {cls.number} often also file in these
                classes for more comprehensive protection:
              </p>
              <div className="class-grid">
                {related.map((r) =>
                  r ? (
                    <Link
                      href={`/trademark-classes/class-${r.number}`}
                      key={r.number}
                      className="class-card"
                    >
                      <span className="class-number">Class {r.number}</span>
                      <h4>{r.shortName}</h4>
                      <span>{r.examples.slice(0, 2).join(", ")}</span>
                    </Link>
                  ) : null,
                )}
              </div>
            </>
          )}

          <h2>Frequently Asked Questions</h2>

          <h3>What is Trademark Class {cls.number}?</h3>
          <p>
            Trademark Class {cls.number} covers {cls.name.toLowerCase()}.{" "}
            {cls.description}
          </p>

          <h3>What {isGoods ? "products" : "services"} are in Class {cls.number}?</h3>
          <p>
            Class {cls.number} includes: {cls.examples.join(", ")}. This is one
            of the {isGoods ? "34 goods" : "11 services"} classes in the Nice
            Classification system.
          </p>

          <h3>How much does it cost to file in Class {cls.number}?</h3>
          <p>
            UK IPO: &pound;170 for the first class. EUIPO: &euro;850 for one
            class. USPTO: $250&ndash;$350 per class. Additional classes are
            discounted. Use our{" "}
            <Link href="/tools/cost-calculator">cost calculator</Link> for a
            precise estimate.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Search Class {cls.number} trademarks now</h2>
            <p>
              Check if your brand name is available in {cls.name} with our free
              AI-powered search.
            </p>
            <Link className="btn btn-white btn-lg" href="/search">
              Search Class {cls.number} →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
