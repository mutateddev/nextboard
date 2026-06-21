import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react';
import Link from 'next/link';
import cm from '@/public/images/user-avatars/cm.jpg';
import WorkLocationTrends from './work-location-trends';

const EmployeesStats = () => {
  const tempTotalEmployees = 117;
  const tempEmployeesPresent = 87;
  const tempEmployeesPresentPercentage = Math.floor(
    (tempEmployeesPresent / tempTotalEmployees) * 100,
  );

  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base font-semibold'>
              Total employees
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-start'>
              <UserIcon />
              <span className='text-5xl font-bold font-'>
                {tempTotalEmployees}
              </span>
            </div>
            <div>
              <Button asChild size='sm' className='font-semibold'>
                <Link href='/dashboard/employees'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base font-semibold'>
              Employees present
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2 items-start'>
              {tempEmployeesPresentPercentage > 70 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <span className='text-5xl font-bold font-'>
                {tempEmployeesPresent}
              </span>
            </div>
            <div className='mt-5'>
              {tempEmployeesPresentPercentage > 70 ? (
                <span className='text-xs text-green-500 flex gap-1 items-center'>
                  <BadgeCheckIcon />
                  {tempEmployeesPresentPercentage} of employees are present
                </span>
              ) : (
                <span className='text-xs text-red-500 flex gap-1 items-center'>
                  <AlertTriangleIcon />
                  Only {tempEmployeesPresentPercentage}% of employees are
                  present
                </span>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className='border-pink-500 border flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base font-semibold'>
              Employee of the month
            </CardTitle>
          </CardHeader>
          <CardContent className='mt-auto'>
            <div className='flex items-center pb-5 gap-2'>
              <Avatar size='lg'>
                <AvatarImage src={cm.src} alt='employees of the month avatar' />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <span className='text-2xl'>Colin Murray!</span>
            </div>
            <div className='flex gap-2 items-center text-xs text-muted-foreground'>
              <PartyPopperIcon className='text-pink-500' />
              <span>Congratulations, Colin,</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className='my-5'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <LaptopIcon />
            <span>Employee wark location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStats;
