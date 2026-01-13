import { normalizeEndpoint } from '@/shared/utils/url';
import { parseJsonOrThrow } from '@/shared/utils/parser/response';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import ApiRequestError from '@/shared/errors/client/api-request-error';
import { failed, type Result } from '@/shared/models/result';

const bffFetcher = async <T = unknown>({
  endpoint,
  method,
  contentType,
  body,
}: BaseFetcherOptions): Promise<Result<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `/api/${normalizedEndpoint}`;

  const headers = new Headers();
  if (contentType) headers.set('Content-type', contentType);

  const requestOptions: RequestInit = {
    headers,
    method,
    body,
    cache: 'no-store',
    credentials: 'same-origin',
  };

  try {
    const response = await fetch(url, requestOptions);

    return await parseJsonOrThrow<Result<T>>(response);
  } catch {
    return failed(new ApiRequestError());
  }
};

export default bffFetcher;
