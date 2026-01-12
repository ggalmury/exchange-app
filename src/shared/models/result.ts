import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ApiError from '@/shared/errors/api/api-error';
import ClientError from '@/shared/errors/client/client-error';

export interface Success<T> {
  ok: true;
  data: T;
}

export interface Failed {
  ok: false;
  statusCode: number;
  code: string;
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
