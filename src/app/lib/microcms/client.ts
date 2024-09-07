import { CMSResponse } from '@/types/api/micorcms.types';
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'e-book-dealer',
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getBookItems = async (): Promise<CMSResponse> => {
  const listData = await client.getList({
    endpoint: 'e-book',
  });

  return listData;
};
