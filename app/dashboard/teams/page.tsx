'use client';

import TeamsStats from '../components/teams/teams-stats';

const TeamsPage = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Teams</h1>
        <p className='text-muted-foreground'>
          Overview of team performance, distribution and support activity.
        </p>
      </div>

      <TeamsStats />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='rounded-xl border p-5 space-y-2'>
          <h3 className='font-semibold'>Most Active Team</h3>
          <p className='text-2xl font-bold'>Alpha</p>
          <p className='text-sm text-muted-foreground'>
            Highest engagement this month
          </p>
        </div>

        <div className='rounded-xl border p-5 space-y-2'>
          <h3 className='font-semibold'>Best Performance</h3>
          <p className='text-2xl font-bold'>Delta</p>
          <p className='text-sm text-muted-foreground'>
            Highest task completion rate
          </p>
        </div>

        <div className='rounded-xl border p-5 space-y-2'>
          <h3 className='font-semibold'>Needs Attention</h3>
          <p className='text-2xl font-bold'>Canary</p>
          <p className='text-sm text-muted-foreground'>
            Lower support resolution speed
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
