'use client';

import { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const LoginInput = ({ label, ...rest }: LoginInputProps) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <p className="text-[1.25rem] font-medium text-gray-600">{label}</p>

      <input
        {...rest}
        className={cn(
          'w-full rounded-lg border border-gray-300 bg-white p-5 text-xl font-semibold text-gray-600',
          'placeholder:text-gray-400',
          'focus:border-gray-700',
        )}
      />
    </div>
  );
};

export default LoginInput;
