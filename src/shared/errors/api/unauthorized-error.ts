import { ApiErrorCode } from '@/shared/errors/api-error-code';
import ApiError from '@/shared/errors/api/api-error';

export default class UnauthorizedError extends ApiError {
  constructor(code?: string) {
    super(401, code ?? ApiErrorCode.UNAUTHORIZED);

    this.name = 'UnauthorizedError';
  }
}
