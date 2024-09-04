'use client';

import { CMSContext } from '@/hooks/context/contextProvider';
import { useContext } from 'react';
import { Books } from '../Books/Books';

export const Products = () => {
  const contents = useContext(CMSContext);
  console.log(contents);

  return <Books dataList={contents} />;
};
