import express from 'express';
import Stripe from 'stripe';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(express.json());

const allowedOrigins = [
    process.env.APP_URL,
    'https://offthewalldigital.com',
    'https://www.offthewalldigital.com',
    'http://localhost:3000',
    'http://localhost:5173'
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get('/', (req, res) => {
    res.send('Stripe Backend is running on port 4242!');
});

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { priceId, affiliateId } = req.body;
        console.log('--- New Checkout Session Request ---');
        console.log('Price ID:', priceId);
        console.log('Affiliate ID:', affiliateId);
        console.log('APP_URL:', process.env.APP_URL);

        const origin = req.headers.origin || process.env.APP_URL || 'http://localhost:3000';
        console.log('Using origin for redirects:', origin);

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId || process.env.STRIPE_PRICE_ID_MONTHLY,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            metadata: {
                affiliateId: affiliateId || 'none'
            },
            success_url: `${origin}/upsell?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/payment-canceled?canceled=true`,
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error('Stripe error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/create-upsell-session', async (req, res) => {
    try {
        const { billingCycle, affiliateId } = req.body;
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
            metadata: {
                affiliateId: affiliateId || 'none'
            },
            success_url: `${origin}/thank-you?success=true&upsell=true`,
            cancel_url: `${origin}/thank-you?success=true&upsell=skipped`,
        });

        res.json({ url: session.url });
    } catch (err) {
        console.error('Upsell error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

const PORT = 4242;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    console.log('Stripe Price Monthly:', process.env.STRIPE_PRICE_ID_MONTHLY);
});
