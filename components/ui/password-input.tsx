'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from './input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

function PasswordInput({
  className,
  type,
  ref,
  ...props
}: React.ComponentProps<'input'>) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className='relative'>
      <Input
        type={showPassword ? 'text' : 'password'}
        {...props}
        ref={ref}
        className={cn('pr-10', className)}
      />
      <span
        className='absolute top-1 cursor-pointer select-none right-1.5'
        onClick={() => setShowPassword(prv => !prv)}
      >
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </span>
    </div>
  );
}

export { PasswordInput };
