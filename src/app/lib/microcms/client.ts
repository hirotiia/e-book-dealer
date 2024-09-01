import { EBookResponse } from '@/app/api/microcms/types';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'e-book-dealer',
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getBookItems = async (): Promise<EBookResponse> => {
  const allEBooks = await client.getList({
    endpoint: 'e-book',
  });

  return allEBooks;
};
