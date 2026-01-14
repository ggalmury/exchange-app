import { useQueryClient, useMutation } from '@tanstack/react-query';

import { isEmptyString } from '@/shared/utils/validate';
import ResultError from '@/shared/errors/client/result-error';

import { AuthErrorCode } from '@/features/auth/errors/auth-error-code';
import login from '@/features/auth/apis/bff/login';
import InvalidFormError from '@/shared/errors/client/invalid-form-error';

interface UseLoginParams {
  onSuccess?: (email: string) => void;
  onError?: (error: Error) => void;
}

const useLogin = ({ onSuccess, onError }: UseLoginParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      if (isEmptyString(email)) throw new InvalidFormError(AuthErrorCode.EMAIL_EMPTY);

      const result = await login(email);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: (_, email) => {
      queryClient.clear();

      onSuccess?.(email);
    },
    onError,
  });
};

export default useLogin;
