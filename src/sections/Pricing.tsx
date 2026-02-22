import React from 'react';
import { motion } from 'motion/react';
import { PoundSterling, Clock, TrendingUp, CheckCircle2, ShoppingCart } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

interface PricingProps {
    onNavigate: (path: string) => void;
}

export const Pricing = ({ onNavigate }: PricingProps) => {
    const pricingBenefits = [
        {
            title: "A Website That Books Jobs",
            benefit: "While you're on the tools or asleep.",
            details: "Designed specifically to turn local search traffic into confirmed bookings."
        },
        {
            title: "60-Second Lead Response",
            benefit: "AI secures the lead instantly.",
            details: "Our automated agents answer every enquiry while they're still hot."
        },
        {
            title: "Zero Admin Headache",
            benefit: "Every message in one simple app.",
            details: "WhatsApp, Email, Web Chat and SMS all in one unified, simple inbox."
        },
        {
            title: "Automated Booking Flow",
            benefit: "Quotes turn into jobs automatically.",
            details: "Customers book directly onto your calendar. No more phone tag."
        },
        {
            title: "Mobile Business Hero",
            benefit: "Your entire business in your pocket.",
            details: "Quotes, invoices, and active jobs managed entirely from your phone."
        },
        {
            title: "The Reputation Engine",
            benefit: "Reviews collected automatically.",
            details: "Hands-free social proof that makes you the top choice in your area."
        }
    ];

    const payoffBlocks = [
        {
            icon: <PoundSterling className="w-8 h-8 text-accent" />,
            title: "Extra £2,000 Revenue. Zero Extra Effort.",
            body: "Jobs you are currently losing to faster competitors, won back automatically."
        },
        {
            icon: <Clock className="w-8 h-8 text-accent" />,
            title: "2 to 4 Hours Saved Every Day",
            body: "No more chasing leads, juggling inboxes or manually sending review requests."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-accent" />,
            title: "20% More Job Enquiries",
            body: "A higher ranked, always responsive business that customers find and trust first."
        }
    ];

    const ScribbleUnderline = () => (
        <svg
            width="100%"
            height="12"
            viewBox="0 0 400 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-2 left-0 w-full overflow-visible"
            preserveAspectRatio="none"
        >
            <motion.path
                d="M5 8C100 6 250 9 395 6"
                stroke="var(--accent-color)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            />
        </svg>
    );

    return (
        <section id="pricing" className="bg-dark relative overflow-hidden py-24 md:py-32">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container-tight relative z-10">
                <SectionHeading
                    title="Less Than £10 a Day to Replace Your Admin."
                    subtitle="The price of 15 minutes of your time. Get back 2 to 4 hours every single day."
                />

                <div className="max-w-[1000px] mx-auto space-y-32">
                    {/* Part 1: Cost Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-2xl mx-auto"
                    >
                        <h3 className="text-center">The Invisible Income Leak</h3>
                        <p className="text-center text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                            Based on real scenarios, the average tradesperson loses <strong className="text-accent underline decoration-2 underline-offset-4">£13,400</strong> and 16 hours every month to missed enquiries, invisible search listings, cold quotes, bad reviews, chasing unpaid invoices and inbox chaos. Our system costs less than a single mismanaged lead.
                        </p>

                        <div className="glass overflow-hidden rounded-3xl border border-white/5 shadow-2xl bg-white/[0.02]">
                            <div className="p-8 md:p-12 space-y-4">
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Invisible on Google</span>
                                    <span className="font-medium text-lg text-white/90">£3,600</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Cold quote</span>
                                    <span className="font-medium text-lg text-white/90">£2,400</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Reputational damage</span>
                                    <span className="font-medium text-lg text-white/90">£2,000</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Weak website</span>
                                    <span className="font-medium text-lg text-white/90">£1,800</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Inbox chaos</span>
                                    <span className="font-medium text-lg text-white/90">£1,800</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Missed enquiry</span>
                                    <span className="font-medium text-lg text-white/90">£1,800</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-white/80 text-lg flex items-center gap-3"><span className="w-2 h-1 bg-accent rounded-full"></span> Unpaid invoices</span>
                                    <span className="font-medium text-lg text-white/90">16 Hours</span>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 mt-4 border-t border-accent/20 gap-4">
                                    <span className="text-white font-display font-bold text-xl md:text-2xl w-full text-left">Total lost per month</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-accent font-display font-bold text-3xl md:text-4xl shadow-accent leading-none">£13,400</span>
                                        <span className="text-accent/60 font-bold text-lg mt-1">+ 16 hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Part 2: Payoff Statement Blocks */}
                    <div className="space-y-16">
                        <h3 className="text-center">Imagine Your Business With...</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {payoffBlocks.map((block, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-center space-y-4"
                                >
                                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 duration-500">
                                        {block.icon}
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white">{block.title}</h4>
                                    <p className="text-white/60 leading-relaxed text-lg">{block.body}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.4
                                    }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center py-12 space-y-8 text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-4xl mx-auto"
                        >
                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                className="text-white/80"
                            >
                                That is not just a better business.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                                That is <span className="text-accent font-bold">school pickups</span> you do not miss.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                                <span className="text-accent font-bold">Weekends</span> you actually switch off.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                                <span className="text-accent font-bold">Evenings with your family</span> instead of your inbox.
                            </motion.p>
                            <motion.p
                                variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
                                className="pt-12 font-display font-bold text-white relative inline-block"
                            >
                                <span className="relative z-10 text-3xl md:text-4xl lg:text-5xl">One system. Less than £10 a day.</span>
                                <ScribbleUnderline />
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Part 3: Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-[850px] mx-auto"
                    >
                        <GlassCard className="border-accent relative overflow-hidden p-0 shadow-[0_0_80px_rgba(244,161,0,0.15)] hover:shadow-[0_0_120px_rgba(244,161,0,0.3)] transition-shadow duration-500 bg-[#161616]">
                            {/* Most Popular Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-dark px-6 py-2 rounded-b-2xl font-black text-sm uppercase tracking-widest shadow-xl z-20">
                                Most Popular
                            </div>

                            {/* Premium Header */}
                            <div className="bg-gradient-to-b from-accent/10 to-transparent p-12 md:p-16 text-center relative overflow-hidden pt-20">
                                <div className="space-y-4 relative z-10">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-accent font-display font-black text-7xl md:text-9xl tracking-tight">£297</span>
                                            <span className="text-xl md:text-2xl text-white/60 font-bold">/month</span>
                                        </div>
                                        <span className="text-white/50 italic mt-3 text-lg">Less than one missed job</span>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                                        <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-wider">
                                            <CheckCircle2 className="w-5 h-5 text-accent" /> Zero Setup Fees
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-wider">
                                            <CheckCircle2 className="w-5 h-5 text-accent" /> No Contracts
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-wider">
                                            <CheckCircle2 className="w-5 h-5 text-accent" /> Cancel Anytime
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 border-t border-accent/10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                                    {pricingBenefits.map((f, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4 group"
                                        >
                                            <div className="mt-1 shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <div className="font-display font-bold text-xl text-white leading-tight mb-1">
                                                    {f.title}
                                                </div>
                                                <div className="text-white/70 text-sm leading-relaxed">
                                                    {f.details}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button variant="primary" size="lg" className="w-full py-8 text-2xl font-black shadow-[0_20px_50px_rgba(244,161,0,0.3)] hover:shadow-[0_25px_60px_rgba(244,161,0,0.5)] transition-all duration-500 uppercase flex items-center justify-center gap-4" onClick={() => onNavigate('/book-call')}>
                                        <ShoppingCart className="w-8 h-8" />
                                        BUY NOW
                                    </Button>
                                </motion.div>

                                <p className="text-center text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-8">
                                    Secure onboarding • Live in 48 hours • Professional UK Support
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
