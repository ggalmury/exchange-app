import Link from 'next/link';

import { cn } from '@/shared/utils/cn';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center">
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-extrabold text-gray-800">404</p>
        <p className="text-2xl font-semibold text-gray-700">요청하신 페이지를 찾을 수 없어요.</p>
        <p className="text-base text-gray-500">주소를 다시 확인하거나 홈으로 이동해 주세요.</p>
      </div>

      <Link
        className={cn(
          'rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white',
          'hover:bg-blue-600',
        )}
        href="/"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
