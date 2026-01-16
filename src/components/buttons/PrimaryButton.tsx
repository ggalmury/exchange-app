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
        'w-full rounded-xl bg-gray-700 p-5 text-[1.375rem] font-semibold text-white',
        'hover:bg-gray-800',
        'disabled:bg-gray-400',
      )}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
