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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  email: z.email(),
  accountType: z.enum(['personal', 'company']),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
  password: z.string(),
});

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',

      // password: '',
    },
    // mode: 'onChange',
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('login validation passed');
  }

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className='w-full max-w-sm gap-7'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Sign up</CardTitle>
          <CardDescription>Sign up for a new NextBoard account</CardDescription>
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
                name='accountType'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Account Type</FieldLabel>

                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder='Select account type' />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value='personal'>Personal</SelectItem>
                          <SelectItem value='company'>Company</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && (
                      <FieldError>{fieldState.error?.message}</FieldError>
                    )}
                  </Field>
                )}
              />

              {/* <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>Password</FieldLabel>
                    <Input
                      {...field}
                      id='password'
                      aria-invalid={fieldState.invalid}
                      placeholder='12345678'
                      autoComplete='off'
                      type='password'
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[{ message: 'please enter valid password' }]}
                      />
                    )}
                  </Field>
                )}
              /> */}
              <Button type='submit'>Signup</Button>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className='justify-between'>
          <small>Already have an account</small>
          <Button type='submit' variant='outline'>
            <Link href='/login'>Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupPage;
