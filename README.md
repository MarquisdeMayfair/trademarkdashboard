# Trademark Dashboard

A public, SEO-first trademark data portal focused on EUIPO filings. Phase 1 delivers free search + insights to drive conversion into trademark applications. Phase 2 adds monitoring, watchlists, and paid services.

## What’s here
- Home page with conversion-first positioning and tool overview.
- Search page with filter layout and result cards (demo placeholders).
- Insights page with chart placeholders and SEO funnel guidance.

## Data sources
See `docs/data-sources.md` for EUIPO API constraints, rate limits, and additional sources to consider.

## Development
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## EUIPO integration
Create a local env file at `.env.local`:
```bash
EUIPO_CLIENT_ID=your_client_id
EUIPO_CLIENT_SECRET=your_client_secret
# or use your app-specific keys
TRADEMARK_DASHBOARD_CLIENT_ID=your_client_id
TRADEMARK_DASHBOARD_CLIENT_SECRET=your_client_secret

# Optional overrides (sandbox defaults are used if unset)
EUIPO_AUTH_URL=https://auth-sandbox.euipo.europa.eu/oidc/accessToken
EUIPO_API_BASE=https://api-sandbox.euipo.europa.eu
```

Server proxy endpoint (use for server-side search calls):
`GET /api/euipo/search?query_params_here`

## Project structure
- `src/app/page.tsx`: landing page.
- `src/app/search/page.tsx`: search layout.
- `src/app/insights/page.tsx`: analytics layout.
- `src/app/globals.css`: global styles and layout tokens.
