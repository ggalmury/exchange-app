'use client';

import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from '@tanstack/react-query';

import { toastError } from '@/shared/utils/ui';
import { ApiErrorCode } from '@/shared/errors/api-error-code';
import ResultError from '@/shared/errors/client/result-error';

interface QueryProviderProps {
  children: ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  const router = useRouter();

  const [queryClient] = useState(() => {
    let isHandling401 = false;

    const handleError = (error: Error): void => {
      if (
        error instanceof ResultError &&
        error.statusCode === 401 &&
        error.code === ApiErrorCode.UNAUTHORIZED
      ) {
        if (isHandling401) return;
        isHandling401 = true;

        qc.clear();
        router.replace('/');

        setTimeout(() => {
          isHandling401 = false;
        }, 500);

        return;
      }

      toastError(error);
    };

    const qc = new QueryClient({
      queryCache: new QueryCache({ onError: handleError }),
      mutationCache: new MutationCache({ onError: handleError }),
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
          gcTime: 1000 * 60 * 10,
          retry: false,
        },
        mutations: {
          retry: false,
        },
      },
    });

    return qc;
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
