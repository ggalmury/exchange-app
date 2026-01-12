import ResponseParseFailedError from '@/shared/errors/client/response-parse-failed-error';

export const parseJsonOrThrow = async <T>(request: Request): Promise<T> => {
  try {
    return (await request.json()) as T;
  } catch {
    throw new ResponseParseFailedError();
  }
};
