import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const [title, price] = await request.json();
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
      success_url: '/checkout-success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: '/chekout-cancel/',
    });

    return NextResponse.json({ checkout_url: session.url });
  } catch (error) {
    return NextResponse.json(error);
  }
}
