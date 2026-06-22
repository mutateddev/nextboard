import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ListChecksIcon,
  PartyPopperIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import cm from '@/public/images/user-avatars/cm.jpg';
import tf from '@/public/images/user-avatars/tf.jpg';
import rl from '@/public/images/user-avatars/rl.jpg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import TeamDistributionChart from './team-distribution-chart';
import SupportTicketsResolved from './support-tickets-resolved';

const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm,
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips',
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes',
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf,
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson',
  },
  {
    firstName: 'Tina',
    lastName: 'Jones',
  },
  {
    firstName: 'Amy',
    lastName: 'Adams',
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl,
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones',
  },
];

const TeamsStats = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base font-semibold'>
              Total teams
            </CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2 items-start'>
              <UsersIcon />
              <span className='text-5xl font-bold font-'>7</span>
            </div>
            <div>
              <Button asChild size='sm' className='font-semibold'>
                <Link href='/dashboard/teams'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex items-center justify-between font-semibold'>
              <span>Team leaders</span>
              <StarIcon className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamLeaders.map(teamLeader => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar size='lg'>
                      {teamLeader.avatar ? (
                        <AvatarImage
                          src={teamLeader.avatar.src}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName}`}
                        />
                      ) : (
                        <AvatarFallback>{`${teamLeader.firstName.at(0)}
                        ${teamLeader.lastName.at(0)}`}</AvatarFallback>
                      )}
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-base flex items-center justify-between font-semibold'>
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className='pb-0'>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className='my-5'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
