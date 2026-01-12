import { NextRequest } from 'next/server';

import ResponseParseFailedError from '@/shared/errors/client/response-parse-failed-error';

export const parseJsonOrThrow = async <T>(request: NextRequest): Promise<T> => {
  try {
    return (await request.json()) as T;
  } catch {
    throw new ResponseParseFailedError();
  }
};
