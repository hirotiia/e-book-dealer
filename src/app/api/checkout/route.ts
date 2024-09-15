import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { title, price } = await request.json();
  console.log(title, price);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
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
      if (e instanceof Stripe.errors.StripeError) {
        console.error('Stripe error:', e.message);
        return NextResponse.json({ error: e.message }, { status: 400 });
      }
      console.error('Unexpected error:', e);
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'error' }, { status: 500 });
    }
  }
}
