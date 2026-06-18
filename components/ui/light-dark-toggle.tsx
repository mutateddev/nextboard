'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const LightDarkToggle = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
          }}
        >
          <Button className={className} variant={'outline'}>
            <SunIcon className='block dark:hidden' />
            <MoonIcon className='hidden dark:block' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className='hidden dark:inline'>Enable light Mode</span>
          <span className='inline dark:hidden'>Enable dark Mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
