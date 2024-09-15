'use client';

import { useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

export const ChekoutSuccessClient = (): ReactElement => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  return <p>{sessionId}</p>;
};
