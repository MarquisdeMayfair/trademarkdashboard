import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trademark Dashboard | AI-Powered UK Trademark Search & Clearance",
  description:
    "Search 2M+ UK, EU, and US trademarks instantly. AI-powered clearance reports, phonetic similarity analysis, and real-time monitoring. Free trademark search tools for founders, attorneys, and brand owners.",
  keywords: [
    "trademark search",
    "UK trademark search",
    "EU trademark search",
    "trademark clearance",
    "AI trademark search",
    "trademark class",
    "Nice classification",
    "register trademark UK",
    "EUIPO search",
    "brand name check",
  ],
  authors: [{ name: "Trademark Dashboard" }],
  openGraph: {
    title: "Trademark Dashboard | AI-Powered UK Trademark Search & Clearance",
    description:
      "Search 2M+ UK, EU, and US trademarks instantly. AI-powered clearance reports and phonetic similarity analysis.",
    url: "https://trademarkdashboard.com",
    siteName: "Trademark Dashboard",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademark Dashboard | AI-Powered Trademark Search",
    description:
      "Search 2M+ trademarks across UK IPO, EUIPO, and USPTO. Free AI clearance reports in 30 seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://trademarkdashboard.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trademark Dashboard",
      url: "https://trademarkdashboard.com",
      description:
        "AI-powered trademark intelligence platform for UK, EU, and US trademark search and clearance.",
    },
    {
      "@type": "WebSite",
      name: "Trademark Dashboard",
      url: "https://trademarkdashboard.com",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://trademarkdashboard.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
