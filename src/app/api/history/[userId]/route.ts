import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

// 購入履歴検索API
export async function GET(request: Request, params: { userId: string }) {
  const { userId } = params;

  try {
    const history = await prisma.purchase.findMany({
      where: { userId },
    });

    return NextResponse.json(history);
  } catch (error) {
    return NextResponse.json(error);
  }
}
