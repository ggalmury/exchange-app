import bffFetcher from '@/shared/apis/fetchers/bff-fetcher';
import type { Result } from '@/shared/models/result';

const logout = async (): Promise<Result<null>> => {
  const endpoint = '/auth/logout';

  return await bffFetcher({
    endpoint,
    method: 'POST',
  });
};

export default logout;
