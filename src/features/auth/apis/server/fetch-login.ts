import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { LoginResponse } from '@/features/auth/models/login-response';

const fetchLogin = async (email: string): Promise<LoginResponse> => {
  const endpoint = `/auth/login?email=${email}`;

  return await apiFetcher<LoginResponse>({
    endpoint,
    method: 'POST',
  });
};

export default fetchLogin;
