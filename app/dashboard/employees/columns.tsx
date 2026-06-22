'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ColumnDef } from '@tanstack/react-table';

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) => {
      const { firstName, lastName, avatar } = row.original;

      const initials = `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`;

      return (
        <Avatar>
          {avatar && (
            <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
          )}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'teamName',
    header: 'Team',
  },
  {
    accessorKey: 'isTeamLeader',
    header: 'Leader',
    cell: ({ row }) => {
      const isTeamLeader = row.original.isTeamLeader;
      return isTeamLeader ? (
        <Badge variant='success'>Team Leader 👑</Badge>
      ) : (
        <div></div>
      );
    },
  },
];
