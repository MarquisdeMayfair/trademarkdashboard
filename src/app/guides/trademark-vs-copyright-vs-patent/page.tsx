import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trademark vs Copyright vs Patent: What's the Difference? | Guide",
  description:
    "Understand the differences between trademarks, copyrights, and patents. Learn which type of IP protection you need for your brand, creative work, or invention.",
  keywords: [
    "trademark vs copyright",
    "trademark vs patent",
    "copyright vs patent",
    "types of intellectual property",
    "IP protection UK",
    "difference between trademark and copyright",
  ],
  alternates: {
    canonical:
      "https://trademarkdashboard.com/guides/trademark-vs-copyright-vs-patent",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a trademark and a copyright?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A trademark protects brand identifiers (names, logos, slogans) used in commerce. Copyright protects original creative works (books, music, art, software code). Trademarks must be registered; copyright exists automatically when a work is created.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a trademark or a patent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A trademark protects your brand identity (name, logo), while a patent protects inventions (new products, processes, or methods). If you have a unique brand name, register a trademark. If you have a novel invention, apply for a patent. Many businesses need both.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have a trademark and copyright on the same thing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A logo can be both copyrighted (as an artistic work) and trademarked (as a brand identifier). The copyright protects the artistic expression, while the trademark protects its use as a brand in commerce.",
      },
    },
  ],
};

export default function TrademarkVsCopyrightVsPatentPage() {
  return (
    <div className="page">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="tool-hero">
        <div className="container">
          <span className="eyebrow">IP Explained</span>
          <h1>Trademark vs Copyright vs Patent</h1>
          <p className="lead">
            Three types of intellectual property, three different purposes.
            Here&apos;s which one you need and when.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Quick comparison</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Trademark</th>
                  <th>Copyright</th>
                  <th>Patent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Protects</strong></td>
                  <td>Brand identifiers (names, logos, slogans)</td>
                  <td>Creative works (books, music, art, code)</td>
                  <td>Inventions (products, processes, methods)</td>
                </tr>
                <tr>
                  <td><strong>Registration</strong></td>
                  <td>Required for full protection</td>
                  <td>Automatic (no registration needed)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td><strong>Duration</strong></td>
                  <td>10 years (renewable indefinitely)</td>
                  <td>Life of author + 70 years</td>
                  <td>20 years (not renewable)</td>
                </tr>
                <tr>
                  <td><strong>UK Cost</strong></td>
                  <td>&pound;170+ (UK IPO)</td>
                  <td>Free (automatic)</td>
                  <td>&pound;4,000+ (UK IPO)</td>
                </tr>
                <tr>
                  <td><strong>Examples</strong></td>
                  <td>Nike &quot;swoosh&quot;, Apple logo, &quot;Just Do It&quot;</td>
                  <td>Harry Potter books, Beatles songs, website copy</td>
                  <td>iPhone design, pharmaceutical formulas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Trademarks: Protecting your brand</h2>
          <p>
            A <strong>trademark</strong> protects the distinctive signs that
            identify your business — your name, logo, slogan, or even a
            specific colour or sound. The purpose is to prevent others from
            using confusingly similar marks in the same commercial space.
          </p>
          <p>Key characteristics:</p>
          <ul>
            <li>Must be registered for full legal protection</li>
            <li>Protected per class of goods/services (<Link href="/trademark-classes">45 Nice classes</Link>)</li>
            <li>Lasts 10 years, renewable indefinitely</li>
            <li>Geographic — you need separate registrations for UK, EU, US, etc.</li>
          </ul>

          <h2>Copyright: Protecting creative works</h2>
          <p>
            <strong>Copyright</strong> protects original creative works the
            moment they are created — no registration required in the UK.
            This includes literary works, music, art, photography, films, and
            software source code.
          </p>
          <p>Key characteristics:</p>
          <ul>
            <li>Arises automatically — no registration needed</li>
            <li>Protects the expression of ideas, not the ideas themselves</li>
            <li>Lasts for the life of the author plus 70 years</li>
            <li>International protection through treaties (Berne Convention)</li>
          </ul>

          <h2>Patents: Protecting inventions</h2>
          <p>
            A <strong>patent</strong> protects new inventions — products,
            processes, or methods that are novel, involve an inventive step,
            and are capable of industrial application.
          </p>
          <p>Key characteristics:</p>
          <ul>
            <li>Must be registered — requires detailed technical documentation</li>
            <li>Expensive (&pound;4,000+ in the UK, more internationally)</li>
            <li>Lasts 20 years and cannot be renewed</li>
            <li>The invention must be disclosed publicly</li>
          </ul>

          <h2>Which do you need?</h2>
          <ul>
            <li>
              <strong>Starting a business?</strong> You almost certainly need a
              trademark for your brand name. <Link href="/search">Search for availability</Link> first.
            </li>
            <li>
              <strong>Creating content?</strong> Copyright protects your work
              automatically, but consider trademarking the brand under which you
              publish.
            </li>
            <li>
              <strong>Invented something?</strong> A patent protects the
              invention. Trademark the product name separately.
            </li>
            <li>
              <strong>Building software?</strong> The code is copyrighted
              automatically. The brand name and logo should be trademarked.
              Novel technical processes may be patentable.
            </li>
          </ul>

          <h2>Can you have overlapping protection?</h2>
          <p>
            Absolutely. A logo can be both copyrighted (as artistic work) and
            trademarked (as a brand identifier). A product name can be
            trademarked while the product itself is patented. Layering IP
            protection is a smart strategy for maximum coverage.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>What is the difference between a trademark and a copyright?</h3>
          <p>
            A trademark protects brand identifiers (names, logos, slogans) used
            in commerce. Copyright protects original creative works. Trademarks
            must be registered; copyright exists automatically.
          </p>

          <h3>Do I need a trademark or a patent?</h3>
          <p>
            A trademark protects your brand identity, while a patent protects
            inventions. If you have a unique brand name, register a trademark.
            If you have a novel invention, apply for a patent. Many businesses
            need both.
          </p>

          <h3>Can I have a trademark and copyright on the same thing?</h3>
          <p>
            Yes. A logo can be both copyrighted and trademarked. The copyright
            protects the artistic expression, while the trademark protects its
            use as a brand in commerce.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Protect your brand today</h2>
            <p>
              Start with a free trademark search to check if your brand name is
              available across UK, EU, and US registers.
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
