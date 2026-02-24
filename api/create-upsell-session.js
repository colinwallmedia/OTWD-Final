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
        const { billingCycle } = req.body;
        const origin = req.headers.origin || process.env.APP_URL || 'https://offthewalldigital.com';

        const priceId = billingCycle === 'annual'
            ? process.env.STRIPE_PRICE_ID_VOICE_ANNUAL
            : process.env.STRIPE_PRICE_ID_VOICE_MONTHLY;

        if (!priceId) {
            throw new Error('Invalid or missing Voice AI Price ID in environment variables.');
        }

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${origin}/thank-you?success=true&upsell=true`,
            cancel_url: `${origin}/thank-you?success=true&upsell=skipped`,
        });

        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error('Upsell error:', err.message);
        res.status(500).json({ error: err.message });
    }
}
