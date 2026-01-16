import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';
import ApiError from '@/shared/errors/api/api-error';

export interface Success<T> {
  readonly ok: true;
  readonly data: T;
}

export interface Failed {
  readonly ok: false;
  readonly statusCode: number;
  readonly code: string;
}

export type Result<T> = Success<T> | Failed;

export const success = <T>(data: T): Success<T> => {
  return { ok: true, data };
};

export const failed = (error: unknown): Failed => {
  if (error instanceof ClientError) {
    return {
      ok: false,
      statusCode: 400,
      code: error.code,
    };
  }

  if (error instanceof ApiError) {
    return {
      ok: false,
      statusCode: error.statusCode,
      code: error.code,
    };
  }

  return {
    ok: false,
    statusCode: 400,
    code: ClientErrorCode.UNKNOWN,
  };
};
