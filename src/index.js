/**
 * postgresql-sdk · sovereign wrapper for PostgreSQL
 * Database
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://www.postgresql.org/docs/
 * Homepage: https://postgresql.org
 */

export class Postgresql {
  constructor({ apiKey, baseURL = 'https://postgresql.org', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://www.postgresql.org/docs/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('postgresql ' + res.status);
    return res.json();
  }
}

export default Postgresql;

// Metadata
export const meta = {
  "name": "PostgreSQL",
  "category": "Database",
  "homepage": "https://postgresql.org",
  "docs_url": "https://www.postgresql.org/docs/",
  "endpoints_count": 0
};
