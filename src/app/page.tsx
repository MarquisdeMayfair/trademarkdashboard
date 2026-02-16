"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "duplicate"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="cs">
      {/* ── BRAND ── */}
      <header className="cs-header">
        <div className="cs-logo">
          <span className="logo-mark">TD</span>
          <div>
            <span className="logo-title">Trademark Dashboard</span>
            <span className="logo-sub">AI-Powered Trademark Intelligence</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="cs-hero">
        <span className="cs-badge">Coming Soon</span>
        <h1>
          AI-powered trademark search&nbsp;&amp;&nbsp;clearance{" "}
          <span className="gradient-text">
            for&nbsp;the&nbsp;UK,&nbsp;EU&nbsp;&amp;&nbsp;US.
          </span>
        </h1>
        <p className="cs-lead">
          Trademark Dashboard is the UK&apos;s first AI trademark clearance
          platform. Search over 2&nbsp;million trademarks across UK&nbsp;IPO,
          EUIPO, and USPTO in seconds. Get instant risk scores, phonetic
          similarity analysis, and AI&#8209;generated clearance reports — so you
          can protect your brand before someone else does.
        </p>
      </section>

      {/* ── 5 ADVANTAGES ── */}
      <section className="cs-advantages">
        <h2>Five reasons to join the waitlist</h2>
        <div className="cs-grid">
          <div className="cs-card">
            <span className="cs-icon">⚡</span>
            <h3>AI Clearance in 30&nbsp;Seconds</h3>
            <p>
              Our AI agent searches multiple trademark databases simultaneously,
              analyses phonetic and semantic similarity, and generates a
              professional clearance report — instantly.
            </p>
          </div>
          <div className="cs-card">
            <span className="cs-icon">🌍</span>
            <h3>UK, EU &amp; US in One Search</h3>
            <p>
              Post-Brexit, you need to check the UK register separately. We
              unify UK&nbsp;IPO, EUIPO, and USPTO into a single, intelligent
              search that covers every major jurisdiction.
            </p>
          </div>
          <div className="cs-card">
            <span className="cs-icon">🔊</span>
            <h3>Phonetic &amp; Semantic Matching</h3>
            <p>
              Catch conflicts that basic text searches miss. Our AI detects
              sound-alike, look-alike, and meaning-alike trademarks across all
              registers.
            </p>
          </div>
          <div className="cs-card">
            <span className="cs-icon">🆓</span>
            <h3>Free Professional Tools</h3>
            <p>
              Trademark search, class finder, cost calculator, and strength
              scorer — all free on launch. No signup required for basic tools.
            </p>
          </div>
          <div className="cs-card">
            <span className="cs-icon">📡</span>
            <h3>Real-Time Brand Monitoring</h3>
            <p>
              Get instant alerts when new trademarks similar to yours are filed
              in the UK, EU, or US. Protect your brand proactively with
              continuous monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="cs-waitlist">
        <h2>Be the first to know when we launch.</h2>
        <p>
          Join the waitlist for early access, exclusive launch pricing, and a
          free AI clearance report on us.
        </p>

        {status === "success" ? (
          <div className="cs-success">
            <span className="cs-success-icon">✓</span>
            You&apos;re on the list! We&apos;ll notify you when we launch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cs-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status === "loading"}
            />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Joining…" : "Join Waitlist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="cs-error">
            Something went wrong — please try again.
          </p>
        )}
        {status === "duplicate" && (
          <p className="cs-note">You&apos;re already on the list!</p>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer className="cs-footer">
        <span>© {new Date().getFullYear()} Trademark Dashboard Ltd. All rights reserved.</span>
      </footer>
    </div>
  );
}
