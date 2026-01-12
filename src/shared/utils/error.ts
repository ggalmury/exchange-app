import { ERROR_MESSAGE } from '@/shared/errors/error-message';
import ResultError from '@/shared/errors/client/result-error';
import { ClientErrorCode } from '@/shared/errors/client-error-code';

export const getErrorMessage = (error: Error): string => {
  const defaultErrorMessage = ERROR_MESSAGE[ClientErrorCode.UNKNOWN];

  if (error instanceof ResultError) {
    const code = error.code;

    return ERROR_MESSAGE[code] || defaultErrorMessage;
  }

  return defaultErrorMessage;
};
