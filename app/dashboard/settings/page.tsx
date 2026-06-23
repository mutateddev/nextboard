'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const SettingsPage = () => {
  return (
    <div className='space-y-8'>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-bold'>Settings</h1>
        <p className='text-muted-foreground'>
          Manage your application preferences
        </p>
      </div>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>

        <CardContent className='space-y-6'>
          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label>Dark Mode</Label>
              <p className='text-sm text-muted-foreground'>
                Toggle between light and dark theme
              </p>
            </div>
            <Switch />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label>Notifications</Label>
              <p className='text-sm text-muted-foreground'>
                Receive email and app notifications
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className='flex items-center justify-between'>
            <div className='space-y-0.5'>
              <Label>Auto Save</Label>
              <p className='text-sm text-muted-foreground'>
                Automatically save your changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className='border-red-500/20'>
        <CardHeader>
          <CardTitle className='text-red-500'>Danger Zone</CardTitle>
        </CardHeader>

        <CardContent className='flex items-center justify-between'>
          <div>
            <p className='font-medium'>Reset Settings</p>
            <p className='text-sm text-muted-foreground'>
              This will reset all preferences to default
            </p>
          </div>

          <Button variant='destructive'>Reset</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
