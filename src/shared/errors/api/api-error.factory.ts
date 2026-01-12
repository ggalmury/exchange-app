import ApiError from '@/shared/errors/api/api-error';
import BadRequestError from '@/shared/errors/api/bad-request-error';
import UnauthorizedError from '@/shared/errors/api/unauthorized-error';
import NotFoundError from '@/shared/errors/api/not-found-error';
import InternalServerError from '@/shared/errors/api/internal-server-error';

export default class ApiErrorFactory {
  static create(statusCode: number, code: string): ApiError {
    switch (statusCode) {
      case 400:
        return new BadRequestError(code);

      case 401:
        return new UnauthorizedError(code);

      case 404:
        return new NotFoundError(code);

      default:
        return new InternalServerError(code);
    }
  }
}
