import express from 'express';
import Stripe from 'stripe';
import 'dotenv/config';
import cors from 'cors';

const app = express();
app.use(express.json());

// Simple In-Memory Rate Limiter
const requestCounts = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requestCounts.has(ip)) {
        requestCounts.set(ip, { count: 1, firstRequest: now });
        return next();
    }

    const userData = requestCounts.get(ip);
    if (now - userData.firstRequest > RATE_LIMIT_WINDOW) {
        userData.count = 1;
        userData.firstRequest = now;
        return next();
    }

    userData.count++;
    if (userData.count > MAX_REQUESTS) {
        return res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
    next();
};

app.use('/api/', rateLimiter);

const allowedOrigins = [
    process.env.APP_URL,
    'https://offthewalldigital.com',
    'https://www.offthewalldigital.com',
    'http://localhost:3000',
    'http://localhost:5173'
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('CORS not allowed'), false);
        }
        callback(null, true);
    }
}));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.get('/', (req, res) => {
    res.send('Backend is operational.');
});

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { priceId, affiliateId } = req.body;
        const origin = req.headers.origin || process.env.APP_URL || 'https://offthewalldigital.com';

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
        console.error('Checkout error:', err.message);
        res.status(500).json({ error: 'An error occurred during checkout. Please try again.' });
    }
});

app.post('/api/create-upsell-session', async (req, res) => {
    try {
        const { billingCycle, affiliateId } = req.body;
        const origin = req.headers.origin || process.env.APP_URL || 'https://offthewalldigital.com';

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
        res.status(500).json({ error: 'An error occurred during upsell. Please try again.' });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
