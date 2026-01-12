import { ClientErrorCode } from '@/shared/errors/client-error-code';
import ClientError from '@/shared/errors/client/client-error';

export default class ResponseParseFailedError extends ClientError {
  constructor() {
    super(ClientErrorCode.RESPONSE_PARSE_FAILED);

    this.name = 'ResponseParseFailedError';
  }
}
