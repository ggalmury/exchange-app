import { ERROR_MESSAGE } from '@/shared/errors/error-message';
import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';
import ResultError from '@/shared/errors/client/result-error';

export const getErrorMessage = (error: Error): string => {
  const defaultErrorMessage = ERROR_MESSAGE[ClientErrorCode.UNKNOWN];

  if (error instanceof ClientError || error instanceof ResultError) {
    const code = error.code;

    return ERROR_MESSAGE[code] || defaultErrorMessage;
  }

  return defaultErrorMessage;
};
