import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/models/result';

const login = async (email: string): Promise<Result<null>> => {
  const endpoint = `/auth/login?email=${email}`;

  return await bffFetcher<null>({
    endpoint,
    method: 'POST',
  });
};

export default login;
