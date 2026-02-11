const DEFAULT_AUTH_URL = "https://auth-sandbox.euipo.europa.eu/oidc/accessToken";
const DEFAULT_API_BASE = "https://api-sandbox.euipo.europa.eu/trademark-search";

const CLIENT_ID =
  process.env.EUIPO_CLIENT_ID || process.env.TRADEMARK_DASHBOARD_CLIENT_ID;
const CLIENT_SECRET =
  process.env.EUIPO_CLIENT_SECRET ||
  process.env.TRADEMARK_DASHBOARD_CLIENT_SECRET;

const AUTH_URL = process.env.EUIPO_AUTH_URL || DEFAULT_AUTH_URL;
const API_BASE = process.env.EUIPO_API_BASE || DEFAULT_API_BASE;

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error(
    "EUIPO_CLIENT_ID/EUIPO_CLIENT_SECRET (or TRADEMARK_DASHBOARD_CLIENT_ID/TRADEMARK_DASHBOARD_CLIENT_SECRET) must be set in .env.local",
  );
}

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __euipoTokenCache: TokenCache | undefined;
}

async function fetchAccessToken(): Promise<TokenCache> {
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  const response = await fetch(AUTH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`EUIPO token request failed: ${response.status} ${text}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in?: number;
  };

  const expiresIn = data.expires_in ?? 1800;
  return {
    accessToken: data.access_token,
    expiresAt: Date.now() + expiresIn * 1000,
  };
}

export async function getAccessToken(): Promise<string> {
  const cache = globalThis.__euipoTokenCache;
  if (cache && cache.expiresAt - Date.now() > 60_000) {
    return cache.accessToken;
  }

  const fresh = await fetchAccessToken();
  globalThis.__euipoTokenCache = fresh;
  return fresh.accessToken;
}

export async function euipoGet(
  path: string,
  params?: URLSearchParams,
): Promise<unknown> {
  const token = await getAccessToken();
  const url = new URL(path, API_BASE);
  if (params) {
    params.forEach((value, key) => url.searchParams.append(key, value));
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-IBM-Client-Id": CLIENT_ID,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`EUIPO API request failed: ${response.status} ${text}`);
  }

  return response.json();
}

export const euipoConfig = {
  apiBase: API_BASE,
  authUrl: AUTH_URL,
};
