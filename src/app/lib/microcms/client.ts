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

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getArticleList = async (): Promise<MicroCMSListResponse<Article>> => {
  const listData = await client.getList<Article>({
    endpoint: 'e-book',
  });

  return listData;
};
