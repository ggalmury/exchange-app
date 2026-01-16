import LoginFormCard from '@/features/auth/components/LoginFormCard';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-xl flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-bold text-gray-700">반갑습니다.</p>

          <p className="text-[2rem] text-gray-600">로그인 정보를 입력해주세요.</p>
        </div>

        <LoginFormCard />
      </div>
    </div>
  );
};

export default LoginPage;
