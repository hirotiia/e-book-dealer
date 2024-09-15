// 購入履歴を保存するAPI

import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe/stripe';

export async function POST(request: Request) {
  const { sessionId } = await request.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session.client_reference_id || !session.metadata?.bookId) {
      return NextResponse.json({ error: 'Invalid session data' }, { status: 400 });
    }

    const isAlreadyPaid = await prisma.purchase.findFirst({
      where: {
        userId: session.client_reference_id,
        bookId: session.metadata.bookId,
      },
    });

    if (isAlreadyPaid) {
      return NextResponse.json({ message: 'すでに購入済みです。' });
    } else {
      const purchase = await prisma.purchase.create({
        data: {
          userId: session.client_reference_id,
          bookId: session.metadata.bookId,
        },
      });

      return NextResponse.json({ purchase });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
