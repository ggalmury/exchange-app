import type { Result } from '@/shared/models/result';
import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';

const logout = async (): Promise<Result<null>> => {
  const endpoint = '/auth/logout';

  return await bffFetcher({
    endpoint,
    method: 'POST',
  });
};

export default logout;
