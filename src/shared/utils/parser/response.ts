import ResponseParseFailedError from '@/shared/errors/client/response-parse-failed-error';

export const parseJsonOrThrow = async <T>(response: Response): Promise<T> => {
  try {
    return (await response.json()) as T;
  } catch {
    throw new ResponseParseFailedError();
  }
};
