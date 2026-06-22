'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AccountPage = () => {
  const user = {
    name: 'Demo User',
    email: 'demo@nextboard.dev',
    role: 'Frontend Developer',
    plan: 'Free',
  };

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold'>Account</h1>
        <p className='text-muted-foreground'>
          Manage your profile and preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>

        <CardContent className='flex items-center gap-4'>
          <Avatar className='h-14 w-14'>
            <AvatarFallback>
              {user.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className='text-lg font-semibold'>{user.name}</p>
            <p className='text-sm text-muted-foreground'>{user.email}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4'>
          <div className='grid gap-2'>
            <label className='text-sm'>Name</label>
            <Input value={user.name} disabled />
          </div>

          <div className='grid gap-2'>
            <label className='text-sm'>Email</label>
            <Input value={user.email} disabled />
          </div>

          <div className='grid gap-2'>
            <label className='text-sm'>Role</label>
            <Input value={user.role} disabled />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>

        <CardContent className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Current Plan</p>
            <p className='text-sm text-muted-foreground'>{user.plan}</p>
          </div>

          <Button variant='outline'>Upgrade Plan</Button>
        </CardContent>
      </Card>

      <Card className='border-red-500/20'>
        <CardHeader>
          <CardTitle className='text-red-500'>Danger Zone</CardTitle>
        </CardHeader>

        <CardContent className='flex justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            This action cannot be undone
          </p>

          <Button variant='destructive'>Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPage;
