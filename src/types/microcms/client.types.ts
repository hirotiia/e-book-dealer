import { MicroCMSDate } from 'microcms-js-sdk';

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
  content: string;
} & MicroCMSDate;
