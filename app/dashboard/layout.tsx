import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <div className='bg-muted overflow-auto p-4'>side panel</div>
      <div className='overflow-auto py-2 px-4'>
        <h1 className='pb-4 text-5xl font-bold'>Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}
