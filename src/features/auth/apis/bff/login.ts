import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/models/result';

import type { LoginRequest } from '@/features/auth/models/login-request';

const login = async (body: LoginRequest): Promise<Result<null>> => {
  const endpoint = '/auth/login';

  return await bffFetcher({
    endpoint,
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(body),
  });
};

export default login;
