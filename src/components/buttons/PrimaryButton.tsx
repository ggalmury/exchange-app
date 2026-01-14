'use client';

import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const PrimaryButton = ({ label, ...rest }: PrimaryButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        'w-full rounded-lg bg-gray-700 p-5 text-[1.375rem] font-semibold text-white',
        'hover:bg-[#1B2334]',
      )}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
