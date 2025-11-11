'use client';

import { useParams, useSearchParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      the {id} and the name is {name} — this is the id of the person
    </div>
  );
}
