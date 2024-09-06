import { getBookItems } from '@/app/lib/microcms/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const items = await getBookItems();
  return NextResponse.json(items);
}
