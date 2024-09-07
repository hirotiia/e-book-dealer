import { createClient, MicroCMSListResponse } from 'microcms-js-sdk';
import type { MicroCMSDate } from 'microcms-js-sdk';

export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  price: number;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
} & MicroCMSDate;

const client = createClient({
  serviceDomain: 'e-book-dealer',
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getBookItems = async (): Promise<MicroCMSListResponse<Article>> => {
  const listData = await client.getList<Article>({
    endpoint: 'e-book',
  });

  return listData;
};
