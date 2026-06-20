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
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/components/ui/password-input';

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    // mode: 'onChange',
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('login validation passed');
  }

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm '>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Login</CardTitle>
          <CardDescription>Login to your NextBoard account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className='gap-5'>
              <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                    <Input
                      {...field}
                      id='email'
                      aria-invalid={fieldState.invalid}
                      placeholder='test@gmail.com'
                      autoComplete='off'
                      type='email'
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[{ message: 'please enter valid email' }]}
                      />
                    )}
                  </Field>
                )}
              />

              <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>Password</FieldLabel>
                    <PasswordInput
                      {...field}
                      id='password'
                      aria-invalid={fieldState.invalid}
                      placeholder='12345678'
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[{ message: 'please enter valid password' }]}
                      />
                    )}
                  </Field>
                )}
              />
              <Button type='submit'>Login</Button>
            </FieldGroup>
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
