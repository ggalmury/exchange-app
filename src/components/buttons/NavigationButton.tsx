'use client';

import { ButtonHTMLAttributes } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/cn';

interface NavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  to: string;
}

const NavigationButton = ({ label, to, ...rest }: NavigationButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      {...rest}
      className={cn(
        'rounded-xl px-6 py-2 text-[1.25rem] font-medium text-gray-300',
        'hover:bg-gray-100',
        pathname === to && 'font-bold text-gray-900',
      )}
      type="button"
      onClick={() => router.push(to)}
    >
      {label}
    </button>
  );
};

export default NavigationButton;
