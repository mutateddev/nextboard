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
import { CalendarIcon, PersonStandingIcon } from 'lucide-react';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { PasswordInput } from '@/components/ui/password-input';

const accountTypeSchema = z
  .object({
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company') {
      if (!data.companyName || data.companyName.trim() === '') {
        ctx.addIssue({
          path: ['companyName'],
          code: 'custom',
          message: 'Company name is required',
        });
      }
    }

    if (
      data.accountType === 'company' &&
      (!data.numberOfEmployees || data.numberOfEmployees < 1)
    ) {
      ctx.addIssue({
        path: ['numberOfEmployees'],
        code: 'custom',
        message: 'number of employees is required',
      });
    }
  });

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .refine(password => {
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
      }, 'Password must contain at least 1 special character or uppercase letter'),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Password do not match',
      });
    }
  });

const baseSchema = z.object({
  email: z.email(),
  dob: z.date().refine(date => {
    const today = new Date();
    const eighteenYearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );

    return date <= eighteenYearsAgo;
  }, 'You most be at least 18 years old'),
});

const formSchema = baseSchema.and(passwordSchema).and(accountTypeSchema);

const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      accountType: 'personal',
      companyName: '',
      dob: '',
      password: '',
      confirmPassword: '',
      numberOfEmployees: '',
    },
    mode: 'onSubmit',
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('login validation passed', data);
  }

  const accountType = form.watch('accountType');

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
              {accountType === 'company' && (
                <>
                  <Controller
                    name='companyName'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='companyName'>
                          Company Name
                        </FieldLabel>
                        <Input
                          {...field}
                          id='companyName'
                          aria-invalid={fieldState.invalid}
                          placeholder='Company name'
                          autoComplete='off'
                          type='text'
                        />
                        {fieldState.invalid && (
                          <FieldError
                            errors={[{ message: 'Company name is required' }]}
                          />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name='numberOfEmployees'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor=''>Employees</FieldLabel>
                        <Input
                          {...field}
                          id='numberOfEmployees'
                          aria-invalid={fieldState.invalid}
                          placeholder='Employees'
                          autoComplete='off'
                          type='number'
                          min={0}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </>
              )}
              <Controller
                name='dob'
                control={form.control}
                render={({ field, fieldState }) => {
                  const dobFromDate = new Date();
                  dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

                  return (
                    <Field data-invalid={fieldState.invalid} className='pt-1'>
                      <FieldLabel htmlFor='dob'>Date of birth</FieldLabel>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant='outline'
                            className='normal-case flex justify-between'
                          >
                            <span>
                              {field.value
                                ? field.value.toLocaleDateString()
                                : 'Pick a date'}
                            </span>
                            <CalendarIcon />
                          </Button>
                        </PopoverTrigger>

                        <PopoverContent align='start' className='w-auto'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            defaultMonth={field.value ?? new Date()}
                            fixedWeeks
                            weekStartsOn={1}
                            startMonth={dobFromDate}
                            captionLayout='dropdown'
                            disabled={date =>
                              date > new Date() || date < dobFromDate
                            }
                          />
                        </PopoverContent>
                      </Popover>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='password'>Password</FieldLabel>
                    <PasswordInput
                      {...field}
                      id='password'
                      placeholder='*********'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name='confirmPassword'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='confirmPassword'>
                      Confirm password
                    </FieldLabel>
                    <PasswordInput
                      {...field}
                      id='confirmPassword'
                      placeholder='*********'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

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
