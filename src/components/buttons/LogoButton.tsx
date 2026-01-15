'use client';

import { useRouter } from 'next/navigation';

const LogoButton = () => {
  const router = useRouter();

  return (
    <button className="text-2xl font-bold text-black" onClick={() => router.push('/')}>
      Exchange app
    </button>
  );
};

export default LogoButton;
