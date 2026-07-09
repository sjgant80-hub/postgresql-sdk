/**
 * postgresql-sdk TypeScript declarations
 */
export interface PostgresqlOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Postgresql {
  constructor(options?: PostgresqlOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Postgresql;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
