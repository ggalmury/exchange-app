'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { toastMessage } from '@/shared/utils/ui';

import PrimaryButton from '@/components/buttons/PrimaryButton';

import useLogin from '@/features/auth/hooks/useLogin';
import LoginFormInput from '@/features/auth/components/LoginFormInput';

const LoginFormCard = () => {
  const router = useRouter();

  const { mutate: login, isPending } = useLogin({
    onSuccess: (email) => {
      router.push('/');
      toastMessage(`환영합니다, ${email}님!`);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') || '');

    login(email);
  };

  return (
    <form
      className="flex w-full flex-col gap-8 rounded-[20px] border border-gray-300 bg-gray-50 px-8 py-6"
      onSubmit={handleSubmit}
    >
      <LoginFormInput
        label="이메일 주소를 입력해주세요."
        name="email"
        type="email"
        placeholder="abc@exchange.com"
        defaultValue=""
      />

      <PrimaryButton label="로그인 하기" type="submit" disabled={isPending} />
    </form>
  );
};

export default LoginFormCard;
