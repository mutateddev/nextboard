'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type MenuItemProps = {
  children: ReactNode;
  href: string;
};

const MenuItem = ({ children, href }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'block hover:bg-white dark:hover:bg-zinc-700 p-2 rounded-md text-muted-foreground hover:text-foreground ',
          isActive &&
            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
