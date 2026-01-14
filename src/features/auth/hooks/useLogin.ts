import { useQueryClient, useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import login from '@/features/auth/apis/bff/login';

interface UseLoginParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useLogin = ({ onSuccess, onError }: UseLoginParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) => {
      const result = await login(email);
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
