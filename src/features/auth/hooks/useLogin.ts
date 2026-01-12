import { useQueryClient, useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import login from '@/features/auth/apis/bff/login';
import type { LoginRequest } from '@/features/auth/models/login-request';

interface UseLoginParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useLogin = ({ onSuccess, onError }: UseLoginParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      const loginRequest: LoginRequest = { email };

      const result = await login(loginRequest);
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useLogin;
