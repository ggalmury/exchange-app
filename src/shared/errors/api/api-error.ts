export default abstract class ApiError extends Error {
  readonly statusCode: number;
  readonly code: string;

  constructor(statusCode: number, code: string) {
    super(statusCode.toString());

    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
  }
}
