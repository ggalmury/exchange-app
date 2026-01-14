import { useQueryClient, useMutation } from '@tanstack/react-query';

import ResultError from '@/shared/errors/client/result-error';

import logout from '@/features/auth/apis/bff/logout';

interface UseLogoutParams {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

const useLogout = ({ onSuccess, onError }: UseLogoutParams = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const result = await logout();
      if (!result.ok) throw new ResultError(result.statusCode, result.code);
    },
    onSuccess: () => {
      queryClient.clear();

      onSuccess?.();
    },
    onError,
  });
};

export default useLogout;
