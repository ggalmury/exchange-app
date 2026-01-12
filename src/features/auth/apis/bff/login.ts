import { CONTENT_TYPE_JSON } from '@/shared/apis/constants/content-type';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/models/result';

import type { LoginRequest } from '@/features/auth/models/login-request';

const login = async (body: LoginRequest): Promise<Result<null>> => {
  const endpoint = '/auth/login';

  return await bffFetcher({
    endpoint,
    method: 'POST',
    options: {
      headers: { 'Content-type': CONTENT_TYPE_JSON },
      body: JSON.stringify(body),
    },
  });
};

export default login;
