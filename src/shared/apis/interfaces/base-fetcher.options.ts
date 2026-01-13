export interface BaseFetcherOptions {
  endpoint: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  contentType?: 'application/json';
  body?: BodyInit;
}
