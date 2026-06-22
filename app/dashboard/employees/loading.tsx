import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>

      <CardContent className='grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 items-center'>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </CardContent>
    </Card>
  );
}
