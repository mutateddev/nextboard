'use client';

import { ReactNode, useState } from 'react';
import MainMenu from './components/main-menu';
import MenuTitle from './components/menu-title';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className='md:grid md:grid-cols-[250px_1fr] h-screen'>
      <MainMenu className='hidden md:flex' />
      {/* mobile menu */}
      {!isDesktop && (
        <div className='flex justify-between items-center md:hidden sticky top-0 left-0 bg-background border-b border-border p-4'>
          <MenuTitle />
          <Drawer
            direction='right'
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={open => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className='overflow-auto py-3 px-4'>
        <h1 className='pb-4 text-5xl font-bold'>Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
