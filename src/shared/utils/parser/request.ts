import { NextRequest } from 'next/server';

import ResponseParseFailedError from '@/shared/errors/client/response-parse-failed-error';

export const parseJsonOrThrow = async (request: NextRequest): Promise<unknown> => {
  try {
    return await request.json();
  } catch {
    throw new ResponseParseFailedError();
  }
};
