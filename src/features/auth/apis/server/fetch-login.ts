import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

import type { LoginRequest } from '@/features/auth/models/login-request';
import type { LoginResponse } from '@/features/auth/models/login-response';

const fetchLogin = async (body: LoginRequest): Promise<LoginResponse> => {
  const endpoint = '/auth/login';

  return await apiFetcher<LoginResponse>({
    endpoint,
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(body),
  });
};

export default fetchLogin;
