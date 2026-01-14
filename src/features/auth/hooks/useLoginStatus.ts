import { useMemo } from 'react';

import useMyWallet from '@/features/wallet/hooks/useMyWallet';

const useLoginStatus = () => {
  const { data: myWallet, isLoading } = useMyWallet();

  const isLogin = useMemo(() => !!myWallet, [myWallet]);

  return { isLogin, isLoading };
};

export default useLoginStatus;
