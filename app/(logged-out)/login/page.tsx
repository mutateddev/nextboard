'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm '>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Login</CardTitle>
          <CardDescription>Login to your NextBoard account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <h1>login form</h1>
          </form>
        </CardContent>
        <CardFooter className='justify-between'>
          <small>Don&apos;t have an account?</small>
          <Button type='submit' variant='outline'>
            <Link href='/sign-up'>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
