"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type TrademarkItem = {
  applicationNumber: string;
  status: string;
  niceClasses?: Array<number | string>;
  wordMarkSpecification?: {
    verbalElement?: string;
  };
  applicants?: {
    name?: string;
  }[];
  applicationDate?: string;
  registrationDate?: string;
};

type SearchResponse = {
  data?: {
    trademarks?: TrademarkItem[];
    totalElements?: number;
    totalPages?: number;
    page?: number;
    size?: number;
  };
  error?: string;
  message?: string;
};

const statusOptions = [
  "",
  "REGISTERED",
  "UNDER_EXAMINATION",
  "APPLICATION_PUBLISHED",
  "RECEIVED",
  "OPPOSITION_PENDING",
  "REFUSED",
  "WITHDRAWN",
  "CANCELLED",
  "EXPIRED",
];

const classOptions = [
  "",
  "5",
  "9",
  "35",
  "36",
  "41",
  "42",
  "43",
  "44",
];

const sortOptions = [
  "",
  "applicationNumber:desc",
  "applicationDate:desc",
  "registrationDate:desc",
  "applicationNumber:asc",
];

function buildWildcardValue(value: string) {
  const trimmed = value.trim();
  const escaped = trimmed.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
  const needsQuotes = /[\s"'();,=!~<>]/.test(escaped);
  const wildcard = `*${escaped}*`;
  return needsQuotes ? `"${wildcard}"` : wildcard;
}

function buildQuery(params: {
  term: string;
  searchIn: "word" | "applicant" | "both";
  status: string;
  niceClass: string;
  advanced: string;
}) {
  if (params.advanced.trim()) {
    return params.advanced.trim();
  }

  const filters: string[] = [];
  const term = params.term.trim();

  if (term) {
    const value = buildWildcardValue(term);
    const clauses: string[] = [];

    if (params.searchIn === "word" || params.searchIn === "both") {
      clauses.push(`wordMarkSpecification.verbalElement==${value}`);
    }

    if (params.searchIn === "applicant" || params.searchIn === "both") {
      clauses.push(`applicants.name==${value}`);
    }

    if (/^\d+$/.test(term)) {
      clauses.push(`applicationNumber==${term}`);
    }

    if (clauses.length === 1) {
      filters.push(clauses[0]);
    } else if (clauses.length > 1) {
      filters.push(`(${clauses.join(" or ")})`);
    }
  }

  if (params.status) {
    filters.push(`status==${params.status}`);
  }

  if (params.niceClass) {
    filters.push(`niceClasses=all=(${params.niceClass})`);
  }

  return filters.join(" and ");
}

export default function SearchPage() {
  const [term, setTerm] = useState("");
  const [searchIn, setSearchIn] = useState<"word" | "applicant" | "both">(
    "word",
  );
  const [status, setStatus] = useState("");
  const [niceClass, setNiceClass] = useState("");
  const [sort, setSort] = useState("");
  const [advanced, setAdvanced] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<TrademarkItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const runSearch = async (nextPage = 0) => {
    const query = buildQuery({
      term,
      searchIn,
      status,
      niceClass,
      advanced,
    });

    if (!query) {
      setError("Enter a mark, applicant, or advanced query to search.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const params = new URLSearchParams({
        query,
        page: String(nextPage),
        size: "10",
      });

      if (sort) {
        params.set("sort", sort);
      }

      const response = await fetch(`/api/euipo/search?${params.toString()}`);
      const json = (await response.json()) as SearchResponse;

      if (!response.ok) {
        throw new Error(json.message || "EUIPO request failed");
      }

      const data = json.data;
      setResults(data?.trademarks ?? []);
      setTotal(data?.totalElements ?? 0);
      setPage(data?.page ?? nextPage);
      setTotalPages(data?.totalPages ?? 0);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setPage(0);
    runSearch(0);
  };

  return (
    <div className="page">
      <Nav />

      <main className="container">
        <section className="section">
          <h2>AI-Powered Trademark Search</h2>
          <p className="subhead">
            Search UK, EU, and US trademark registers with AI-powered filters.
            Use the advanced query field if you need precision beyond the basic inputs.
          </p>

          <div className="search-card">
            <div className="search-row">
              <input
                type="text"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSubmit();
                  }
                }}
                placeholder="Search a word mark, applicant, or application number"
                aria-label="Search EU trademarks"
              />
              <button type="button" onClick={handleSubmit}>
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
            <div className="filter-row">
              <select
                aria-label="Search in"
                value={searchIn}
                onChange={(event) =>
                  setSearchIn(event.target.value as "word" | "applicant" | "both")
                }
              >
                <option value="word">Search in: Word mark</option>
                <option value="applicant">Search in: Applicant</option>
                <option value="both">Search in: Both</option>
              </select>
              <select
                aria-label="Status filter"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="">All statuses</option>
                {statusOptions
                  .filter((value) => value)
                  .map((value) => (
                    <option key={value} value={value}>
                      {value.replace(/_/g, " ")}
                    </option>
                  ))}
              </select>
              <select
                aria-label="Class filter"
                value={niceClass}
                onChange={(event) => setNiceClass(event.target.value)}
              >
                <option value="">All classes</option>
                {classOptions
                  .filter((value) => value)
                  .map((value) => (
                    <option key={value} value={value}>
                      Class {value}
                    </option>
                  ))}
              </select>
              <select
                aria-label="Sort filter"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="">Sort: default</option>
                {sortOptions
                  .filter((value) => value)
                  .map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
              </select>
            </div>
            <div className="advanced-row">
              <input
                type="text"
                value={advanced}
                onChange={(event) => setAdvanced(event.target.value)}
                placeholder="Advanced RSQL query (optional)"
                aria-label="Advanced RSQL query"
              />
            </div>
            <div className="hero-meta">
              Example: <code>niceClasses=all=(25,28) and status==REGISTERED</code>
            </div>
            {error ? <div className="error">{error}</div> : null}
          </div>

          <div className="results">
            <div className="table-header">
              <h3>Results</h3>
              <span className="badge">Sandbox data</span>
            </div>

            <div className="result-summary">
              <span>
                {total ? `${total} matches` : "No results yet"}
                {totalPages ? ` · Page ${page + 1} of ${totalPages}` : ""}
              </span>
            </div>

            {loading ? <div className="loading">Loading results…</div> : null}

            {!loading && results.length === 0 ? (
              <div className="result-empty">No matches found.</div>
            ) : null}

            <div className="result-grid">
              {results.map((result) => {
                const mark =
                  result.wordMarkSpecification?.verbalElement ||
                  "(figurative/unknown mark)";
                const applicant = result.applicants?.[0]?.name ||
                  "Owner not available in sandbox";
                const classes = result.niceClasses?.length
                  ? result.niceClasses.join(", ")
                  : "-";

                return (
                  <article className="result-card" key={result.applicationNumber}>
                    <div>
                      <h3>{mark}</h3>
                      <span className="result-owner">Owner: {applicant}</span>
                    </div>
                    <div className="result-meta">
                      <span>Application: {result.applicationNumber}</span>
                      <span>Status: {result.status}</span>
                      <span>Classes: {classes}</span>
                    </div>
                    <Link className="btn ghost" href="/tools/name-risk-scanner">
                      Assess filing risk
                    </Link>
                  </article>
                );
              })}
            </div>

            {totalPages > 1 ? (
              <div className="pagination">
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => runSearch(Math.max(0, page - 1))}
                  disabled={loading || page <= 0}
                >
                  Previous
                </button>
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => runSearch(Math.min(totalPages - 1, page + 1))}
                  disabled={loading || page >= totalPages - 1}
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
