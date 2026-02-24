import Stripe from 'stripe';
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { priceId } = req.body;
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Use the priceId passed from the frontend, or fallback to Monthly
                        price: priceId || process.env.STRIPE_PRICE_ID_MONTHLY,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: `${process.env.APP_URL}/#/checkout?success=true`,
                cancel_url: `${process.env.APP_URL}/#/checkout?canceled=true`,
            });

            res.status(200).json({ url: session.url });
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
