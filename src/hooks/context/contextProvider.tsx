'use client';

import { Content } from '@/app/api/microcms/types';
import { createContext, ReactNode } from 'react';
export const CMSContext = createContext<Content[]>([]);

type Props = {
  children: ReactNode;
  value: Content[];
};

export const ContextProvider = ({ children, value }: Props) => {
  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
};
