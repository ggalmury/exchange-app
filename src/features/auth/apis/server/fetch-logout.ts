import apiFetcher from '@/shared/apis/fetchers/api-fetcher';

const fetchLogout = async (): Promise<null> => {
  const endpoint = '/auth/logout';

  return await apiFetcher<null>({
    endpoint,
    method: 'POST',
  });
};

export default fetchLogout;
