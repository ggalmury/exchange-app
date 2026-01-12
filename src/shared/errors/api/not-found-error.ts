import { ApiErrorCode } from '@/shared/errors/api-error-code';
import ApiError from '@/shared/errors/api/api-error';

export default class NotFoundError extends ApiError {
  constructor(code?: string) {
    super(404, code ?? ApiErrorCode.NOT_FOUND);

    this.name = 'NotFoundError';
  }
}
