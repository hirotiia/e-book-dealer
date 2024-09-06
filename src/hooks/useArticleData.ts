'use client';

import { Content } from '@/types/api/micorcms.types';
import { useEffect, useState } from 'react';

export const useArticleData = (): Content[] => {
  const [data, setData] = useState<Content[]>([]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch('/api/microcms/');
        const { contents } = await response.json();
        setData(contents);
      } catch (error) {
        console.error(`failed fetching data： ${error}`);
      }
    };

    request();
  }, []);
  return data;
};
