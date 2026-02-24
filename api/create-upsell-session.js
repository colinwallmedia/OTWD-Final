import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { billingCycle } = req.body;
            const origin = req.headers.origin || process.env.APP_URL || 'http://localhost:3000';

            const priceId = billingCycle === 'annual'
                ? process.env.STRIPE_PRICE_ID_VOICE_ANNUAL
                : process.env.STRIPE_PRICE_ID_VOICE_MONTHLY;

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
            res.status(err.statusCode || 500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
