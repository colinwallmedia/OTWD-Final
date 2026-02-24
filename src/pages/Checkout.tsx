import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    CheckCircle,
    Lock,
    ShieldCheck,
    Clock,
    Smartphone,
    MessageSquare,
    Rocket,
    HelpCircle,
    ChevronDown,
    ArrowRight,
    Star
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export const Checkout = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'canceled' | null>(null);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    const plans = {
        monthly: {
            price: '£297',
            id: 'price_1T43QvJpU8C3Lg1Csbax3EyH',
            label: 'Monthly'
        },
        annual: {
            price: '£2,970',
            id: 'price_1T43QvJpU8C3Lg1COXyFgsoP',
            label: 'Annual (Save 17%)'
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('success') === 'true') {
            setStatus('success');
        } else if (params.get('canceled') === 'true') {
            setStatus('canceled');
        }
    }, []);

    const handleCheckout = async () => {
        setIsLoading(true);
        const params = new URLSearchParams(window.location.search);
        const affiliateId = params.get('ref') || params.get('aff') || null;

        const requestUrl = '/api/create-checkout-session';
        console.log(`Sending request to: ${requestUrl}`);
        try {
            const response = await fetch(requestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: plans[billingCycle].id,
                    affiliateId: affiliateId
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server returned ${response.status}: ${errorText || 'Empty response'}`);
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                throw new Error(`Expected JSON but got ${contentType || 'nothing'}. Response: ${text.substring(0, 100)}`);
            }

            const { url } = await response.json();
            if (url) {
                window.location.href = url;
            } else {
                throw new Error('No redirect URL returned from server');
            }
        } catch (error) {
            console.error('Checkout Error:', error);
            const message = error instanceof Error ? error.message : 'Something went wrong';
            alert(`Stripe Error: ${message}. Check the browser console and terminal for details.`);
        } finally {
            setIsLoading(false);
        }
    };

    const faqItems = [
        {
            q: "What does 'No long contracts' actually mean?",
            a: "Exactly that. You pay month-to-month. If you want to stop, just tell us. We don't believe in trapping tradespeople in 12-month agreements that don't perform."
        },
        {
            q: "How long until my system is live?",
            a: "We typically have your personalized system built and ready for review within 24-48 hours. Once you approve the setup, we can go live immediately."
        },
        {
            q: "Can I change my plan later?",
            a: "Yes, you can switch between monthly and annual billing at any time from your account dashboard, or by contacting our support team."
        },
        {
            q: "Do you take a commission from my jobs?",
            a: "No. You pay a flat subscription fee. Everything you earn from the leads our system generates is 100% yours to keep."
        }
    ];

    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">

                {/* PART 1: Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Secure Checkout</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter"
                    >
                        Order Your <span className="text-accent">Business Growth System</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto mb-8"
                    >
                        Review your order below. You will be redirected to a secure Stripe page to safely complete your payment.
                    </motion.p>

                    {/* Billing Cycle Toggle */}
                    <div className="flex justify-center">
                        <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center gap-1">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-accent text-dark shadow-lg shadow-accent/20' : 'text-white/60 hover:text-white'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('annual')}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${billingCycle === 'annual' ? 'bg-accent text-dark shadow-lg shadow-accent/20' : 'text-white/60 hover:text-white'}`}
                            >
                                Annual <span className="ml-1 text-[10px] opacity-70 bg-dark/20 px-1.5 py-0.5 rounded-full uppercase">Save 17%</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">

                    {/* PART 2: Offer Summary */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <GlassCard className="p-8 border-accent/30 bg-accent/5 ring-1 ring-accent/20 h-full">
                                <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                                    <Rocket className="w-6 h-6 text-accent" />
                                    What's Included:
                                </h2>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "AI-Powered Response System",
                                        "Automated Follow-Up Engine",
                                        "Lead Capture & Organisation",
                                        "Self-Growing Reputation System",
                                        "Full Mobile Command Center"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-white/80">
                                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-white/60">{plans[billingCycle].label} Plan</span>
                                        <div className="text-right">
                                            <div className="text-4xl font-display font-bold text-white">{plans[billingCycle].price}</div>
                                            <div className="text-accent text-sm font-bold">per {billingCycle === 'monthly' ? 'month' : 'year'}</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* PART 3: Secure Payment Details */}
                    <div className="lg:col-span-6 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <GlassCard className="p-8">
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                    <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                                        <Lock className="w-6 h-6 text-accent" />
                                        Secure Payment
                                    </h2>
                                    <div className="flex gap-2">
                                        <ShieldCheck className="w-6 h-6 text-white/20" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            You are about to be redirected to our <span className="text-white font-bold">Secure Stripe Checkout</span> page to complete your subscription.
                                        </p>
                                    </div>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full py-6 text-xl group relative overflow-hidden"
                                        onClick={handleCheckout}
                                        disabled={isLoading}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            {isLoading ? (
                                                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <Lock className="w-5 h-5" />
                                            )}
                                            {isLoading ? 'Redirecting...' : 'Secure Checkout'}
                                            {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />}
                                        </span>
                                    </Button>

                                    <div className="flex flex-col items-center gap-4 py-4 border-t border-white/5">
                                        <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                                            {/* Stripe Logo placeholder / mention */}
                                            <span className="text-xs font-bold tracking-widest uppercase">Powered by Stripe</span>
                                        </div>
                                        <p className="text-center text-white/40 text-xs">
                                            256-bit SSL Encrypted Payment. Your card data is never stored on our servers.
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                            </div>
                            <p className="text-white/80 italic text-sm">
                                "The system paid for itself within the first 48 hours. It booked a boiler install while I was on site, which would have been a missed lead otherwise."
                            </p>
                            <p className="text-white/40 text-xs mt-2">— Dave M., Heating Engineer</p>
                        </motion.div>
                    </div>
                </div>

                {/* PART 4: FAQ Section */}
                <div className="max-w-3xl mx-auto mt-24 mb-12">
                    <div className="flex items-center gap-3 mb-10">
                        <HelpCircle className="w-8 h-8 text-accent" />
                        <h2 className="text-3xl font-display font-bold text-white">Common Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-display font-bold text-white pr-8">{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: activeFaq === i ? 'auto' : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/10 mt-0">
                                        {item.a}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
