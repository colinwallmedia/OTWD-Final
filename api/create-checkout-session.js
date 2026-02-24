import Stripe from 'stripe';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error('STRIPE_SECRET_KEY is not configured in environment variables.');
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const { priceId } = req.body;
        const origin = req.headers.origin || process.env.APP_URL || 'https://offthewalldigital.com';

        console.log('Creating checkout session for:', priceId);

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId || process.env.STRIPE_PRICE_ID_MONTHLY,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${origin}/upsell?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/payment-canceled?canceled=true`,
        });

        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error('Stripe error:', err.message);
        res.status(500).json({ error: err.message });
    }
}
