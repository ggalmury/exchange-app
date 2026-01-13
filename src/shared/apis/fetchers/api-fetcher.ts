import { normalizeEndpoint } from '@/shared/utils/url';
import { parseJsonOrThrow } from '@/shared/utils/parser/response';
import type { BaseFetcherOptions } from '@/shared/apis/interfaces/base-fetcher.options';
import ApiErrorFactory from '@/shared/errors/api/api-error.factory';
import ApiError from '@/shared/errors/api/api-error';
import ApiRequestError from '@/shared/errors/client/api-request-error';
import type { ApiResponse } from '@/shared/models/api-response';

interface ApiFetcherOptions extends BaseFetcherOptions {
  token?: string;
}

const apiFetcher = async <T = unknown>({
  endpoint,
  method,
  contentType,
  body,
  token,
}: ApiFetcherOptions): Promise<ApiResponse<T>> => {
  const normalizedEndpoint = normalizeEndpoint(endpoint);
  const url = `${process.env.API_SERVER_URL}/${normalizedEndpoint}`;

  const headers = new Headers();
  if (contentType) headers.set('Content-type', contentType);
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const requestOptions: RequestInit = {
    headers,
    method,
    body,
    cache: 'no-store',
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const statusCode = response.status;
      const body = await parseJsonOrThrow<ApiResponse<null>>(response);
      const code = body.code;

      throw ApiErrorFactory.create(statusCode, code);
    }

    return await parseJsonOrThrow<ApiResponse<T>>(response);
  } catch (e) {
    if (e instanceof ApiError) throw e;

    throw new ApiRequestError();
  }
};

export default apiFetcher;
