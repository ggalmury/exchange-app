'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/shared/utils/cn';
import { toastMessage } from '@/shared/utils/ui';

import useLogout from '@/features/auth/hooks/useLogout';

const LogoutButton = () => {
  const router = useRouter();

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      router.replace('/login');
      toastMessage('로그아웃 되었어요');
    },
  });

  return (
    <button
      className={cn(
        'rounded-lg bg-blue-500 px-6 py-2 text-[1.25rem] font-semibold text-white',
        'hover:bg-blue-600',
      )}
      type="button"
      onClick={() => logout()}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
