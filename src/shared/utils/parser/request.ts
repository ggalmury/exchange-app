import { isEmptyString } from '@/shared/utils/validate';
import ResponseParseFailedError from '@/shared/errors/client/response-parse-failed-error';
import InvalidParamError from '@/shared/errors/client/invalid-param-error';

export const parseJsonOrThrow = async <T>(request: Request): Promise<T> => {
  try {
    return (await request.json()) as T;
  } catch {
    throw new ResponseParseFailedError();
  }
};

export const parseQueryParam = (url: URL, key: string): string | null => {
  const value = url.searchParams.get(key);
  if (isEmptyString(value)) return null;

  return value;
};

export const parseQueryParamOrThrow = (url: URL, key: string): string => {
  const value = parseQueryParam(url, key);
  if (!value) throw new InvalidParamError();

  return value;
};
