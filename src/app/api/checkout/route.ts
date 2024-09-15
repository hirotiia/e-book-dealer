import { NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe/stripe';
import Stripe from 'stripe';

export async function POST(request: Request) {
  const { title, price, bookId, useId } = await request.json();
  console.log(title, price);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      metadata: {
        bookId,
      },
      client_reference_id: useId,
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: title,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/chekout-cancel/`,
    });

    return NextResponse.json({ checkout_url: session.url });
  } catch (e) {
    if (e instanceof Stripe.errors.StripeError) {
      console.error('Stripe error:', e.message);
      return NextResponse.json({ error: e.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: 'error' }, { status: 500 });
    }
  }
}
