'use client';

import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Delta', value: 55, fill: '#84cc16' },
  { name: 'Alpha', value: 34, fill: '#3b82f6' },
  { name: 'Canary', value: 11, fill: '#f97316' },
];

const TeamDistributionChart = () => {
  return (
    <ResponsiveContainer width='100%' height={150}>
      <PieChart>
        <Tooltip
          wrapperClassName='dark:bg-black! rounded-md dark:border-border! text-sm!'
          labelClassName='font-bold'
        />
        <Pie data={data} dataKey='value' nameKey='name' />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TeamDistributionChart;
