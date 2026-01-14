import { ClientErrorCode } from '@/shared/errors/client-error-code';
import { ApiErrorCode } from '@/shared/errors/api-error-code';
import { OrderErrorCode } from '@/features/order/errors/order-error-code';

export const ERROR_MESSAGE: Record<string, string> = {
  [ClientErrorCode.UNKNOWN]: '알 수 없는 에러가 발생했어요.',
  [ClientErrorCode.INITIALIZE_FAILED]: '서비스 초기화에 실패했어요. 잠시 후 다시 시도해 주세요.',
  [ClientErrorCode.API_REQUEST_FAILED]: '요청에 실패했어요. 잠시 후 다시 시도해 주세요.',
  [ClientErrorCode.INVALID_PARAM]: '경로가 올바르지 않아요. 다시 한번 확인해 주세요.',
  [ClientErrorCode.INVALID_FORM]: '입력 값이 올바르지 않아요. 다시 한번 확인해 주세요.',
  [ClientErrorCode.RESPONSE_PARSE_FAILED]: '데이터 처리 중 문제가 발생했어요.',

  [ApiErrorCode.BAD_REQUEST]: '잘못된 요청입니다.',
  [ApiErrorCode.NOT_FOUND]: '요청한 URL을 찾을 수 없어요.',
  [ApiErrorCode.UNAUTHORIZED]: '로그인이 필요한 서비스입니다.',
  [ApiErrorCode.VALIDATION_ERROR]: '요청 데이터가 이상해요.',
  [ApiErrorCode.MISSING_PARAMETER]: '필수 요청 파라미터가 누락되었어요.',

  [OrderErrorCode.EXCHANGE_RATE_MISMATCH]:
    '환율 정보가 일치하지 않습니다. 잠시 후 다시 시도해 주세요.',
};
