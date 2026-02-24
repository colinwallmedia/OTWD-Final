import React, { useState } from 'react';
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

    const faqItems = [
        {
            q: "What does 'No long contracts' actually mean?",
            a: "Exactly that. You pay month-to-month. If you want to stop, just tell us. We don't believe in trapping tradespeople in 12-month agreements that don't perform."
        },
        {
            q: "I'm not techy at all, will this be difficult?",
            a: "No. We handle 100% of the set-up. You'll manage your entire business from a simple app on your phone that's as easy to use as WhatsApp."
        },
        {
            q: "How does area exclusivity work?",
            a: "To ensure maximum results for our clients, we only work with one trade per specific local area. Once you're in, your competitors are locked out of our system."
        },
        {
            q: "What kind of support do I get?",
            a: "You get a dedicated account manager and a direct UK support line. We're on hand to tweak your AI or update your booking flows whenever you need."
        }
    ];

    return (
        <div className="pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">

                {/* PART 1: Hero Section */}
                <div className="text-center mb-16">
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
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6 text-balance"
                    >
                        Get Your Business Growth System <span className="text-accent">Live in the Next 48 Hours</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-8 text-balance"
                    >
                        Lock in your area, stop the leaks, and start turning missed enquiries into booked jobs: for less than one missed job per month.
                    </motion.p>

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-white/40 font-medium"
                    >
                        <span className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-accent" /> No long contracts
                        </span>
                        <span className="flex items-center gap-2 text-white/80">
                            <CheckCircle className="w-5 h-5 text-accent" /> No set-up fees
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-accent" /> Cancel any time
                        </span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* PART 2: Checkout Form */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <GlassCard className="p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">
                                    1. Basic Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Mobile Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="07123 456789"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Business Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                            placeholder="Smith & Sons"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">What's your trade?</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                                            <option value="" className="bg-dark">Select a trade</option>
                                            <option value="plumbing" className="bg-dark">Plumbing & Heating</option>
                                            <option value="electrical" className="bg-dark">Electrician</option>
                                            <option value="roofing" className="bg-dark">Roofing</option>
                                            <option value="landscaping" className="bg-dark">Landscaping</option>
                                            <option value="general" className="bg-dark">General Building</option>
                                            <option value="other" className="bg-dark">Other Trade</option>
                                        </select>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <GlassCard className="p-8">
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                    <h2 className="text-2xl font-display font-bold text-white">
                                        2. Secure Payment
                                    </h2>
                                    <div className="flex gap-2">
                                        <div className="h-6 w-10 bg-white/10 rounded" />
                                        <div className="h-6 w-10 bg-white/10 rounded" />
                                        <div className="h-6 w-10 bg-white/10 rounded" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">Card Number</label>
                                        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white">
                                            <input type="text" className="bg-transparent border-none focus:outline-none w-full" placeholder="0000 0000 0000 0000" />
                                            <Lock className="w-4 h-4 text-white/20" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/60 ml-1">Expiry Date</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white/60 ml-1">CVC</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="123" />
                                        </div>
                                    </div>

                                    <Button variant="primary" size="lg" className="w-full py-6 text-xl group relative overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            <Lock className="w-5 h-5" /> Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                                        </span>
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </Button>

                                    <p className="text-center text-white/40 text-sm">
                                        Secure payment processed by Stripe. Your data is encrypted.
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* PART 3: Offer Sidebar/Summary */}
                    <div className="lg:col-span-5 sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <GlassCard className="p-8 border-accent/30 bg-accent/5 ring-1 ring-accent/20">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-2xl font-display font-bold text-white">You're Getting:</h2>
                                    <span className="px-3 py-1 rounded-full bg-accent text-dark text-xs font-bold uppercase tracking-wider">
                                        Best Value
                                    </span>
                                </div>

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
                                        <span className="text-white/60">Monthly Investment</span>
                                        <div className="text-right">
                                            <div className="text-4xl font-display font-bold text-white">£297</div>
                                            <div className="text-accent text-sm font-bold">per month</div>
                                        </div>
                                    </div>
                                    <p className="text-white/40 text-xs mt-4 italic">
                                        Availability limited by area. Lock in yours now.
                                    </p>
                                </div>
                            </GlassCard>

                            {/* Small Social Proof/Urgency */}
                            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                                </div>
                                <p className="text-white/80 italic text-sm">
                                    "I was skeptical but it literally paid for itself within the first 48 hours when it booked a boiler install while I was at my kids' football."
                                </p>
                                <p className="text-white/40 text-xs mt-2">: Dave M., Heating Engineer</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* PART 4: "Here’s What Happens Next" */}
                <div className="mt-32 mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                            Here’s <span className="text-accent">What Happens Next</span>
                        </h2>
                        <p className="text-white/60">Your journey from "enquiry chaos" to automated growth in three steps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-px bg-white/10 z-0" />

                        {[
                            {
                                step: "Step 1",
                                title: "We Build (0–24h)",
                                desc: "We configure your AI, inbox, and automations for your specific trade.",
                                icon: Rocket
                            },
                            {
                                step: "Step 2",
                                title: "You Review (24–48h)",
                                desc: "A quick screen-share to approve the set-up and tweak the \"voice\" of your AI.",
                                icon: Smartphone
                            },
                            {
                                step: "Step 3",
                                title: "You Go Live (48h+)",
                                desc: "System active. Leads captured and followed up while you're on the tools.",
                                icon: Clock
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center space-y-4">
                                <div className="w-18 h-18 mx-auto rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-accent font-bold text-sm tracking-widest uppercase">{item.step}</div>
                                    <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[280px] mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PART 5: FAQ Section */}
                <div className="max-w-3xl mx-auto mb-32">
                    <div className="flex items-center gap-3 mb-10">
                        <HelpCircle className="w-8 h-8 text-accent" />
                        <h2 className="text-3xl font-display font-bold text-white">Frequently Asked Questions</h2>
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
