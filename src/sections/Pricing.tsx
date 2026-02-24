import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldAlert, Zap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

interface PricingProps {
    onNavigate: (path: string) => void;
}

export const Pricing = ({ onNavigate }: PricingProps) => {
    const losses = [
        { name: "Invisible on Google", val: "£3,600" },
        { name: "Cold quote", val: "£2,400" },
        { name: "Reputational damage", val: "£2,000" },
        { name: "Weak website", val: "£1,800" },
        { name: "Inbox chaos", val: "£1,800" },
        { name: "Missed enquiry", val: "£1,800" },
        { name: "Unpaid invoices", val: "16 Hours" }
    ];

    const inclusions = [
        "AI-Powered Response System",
        "Automated Follow-up Engine",
        "Lead Capture & Organisation",
        "Self-Growing Reputation Management",
        "Full Mobile Command Center"
    ];

    return (
        <section id="pricing" className="relative overflow-hidden">
            {/* Background elements - Surgical fix: z-index -1 to avoid blocking */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none -z-10" />

            <div className="container-tight relative z-10">
                {/* Bridging Headline */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Stop the Leak. Start the Growth.
                        </h2>
                        <p className="text-description">
                            Compare the cost of your current admin headache against a system that works while you are on the tools.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Left Column: The Cost of Doing Nothing */}
                    <motion.div
                        initial={{ opacity: 1, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{
                            backgroundColor: "rgba(239, 68, 68, 0.25)",
                            borderColor: "rgba(239, 68, 68, 0.6)",
                            scale: 1.02
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col h-full p-8 md:p-12 border border-red-500/20 bg-red-500/10 backdrop-blur-lg rounded-2xl cursor-default group/risk relative z-20 shadow-2xl transition-colors duration-500"
                    >
                        <div className="mb-10">
                            <div className="flex items-center gap-3 text-red-500 mb-4">
                                <ShieldAlert className="w-6 h-6" />
                                <span className="font-bold uppercase tracking-widest text-sm text-red-500/80">The Risk</span>
                            </div>
                            <h3 className="text-white text-3xl font-display font-bold mb-2">The Cost of Doing Nothing</h3>
                            <p className="text-white/40 font-medium">Based on real scenarios for the average UK tradesperson.</p>
                        </div>

                        <div className="space-y-4 mb-12">
                            {losses.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                                    <span className="text-white/60 font-medium">{item.name}</span>
                                    <span className="text-white/80 font-bold">{item.val}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/10">
                            <div className="flex flex-col">
                                <span className="text-white/40 text-sm font-bold uppercase tracking-wider mb-1">Total Lost Per Month</span>
                                <span className="text-red-500 font-display font-bold text-3xl md:text-4xl">
                                    £13,400 <span className="text-white/40 text-xl font-sans">+ 16 Hours</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Investment */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover="hover"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="glass h-full p-8 md:p-12 border-accent/20 bg-white/[0.03] rounded-3xl relative overflow-hidden group/solution cursor-default z-20 transition-colors duration-500 hover:bg-white/[0.05]"
                    >
                        {/* Primary Animated Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            variants={{
                                hover: {
                                    scale: 2,
                                    opacity: 0.6,
                                    backgroundColor: "rgba(244, 161, 0, 0.5)"
                                }
                            }}
                            transition={{
                                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                hover: { duration: 0.4 }
                            }}
                            className="absolute top-0 right-0 w-80 h-80 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"
                        />

                        {/* Secondary Depth Glow */}
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            variants={{
                                hover: {
                                    scale: 1.5,
                                    opacity: 0.3,
                                }
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"
                        />

                        {/* Premium Light Sweep Effect */}
                        <motion.div
                            variants={{
                                hover: {
                                    x: ["-100%", "200%"],
                                    transition: {
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }
                                }
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] pointer-events-none z-10"
                        />

                        {/* Border Glow Highlight */}
                        <motion.div
                            variants={{
                                hover: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            className="absolute inset-0 border-2 border-accent/40 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_20px_rgba(244,161,0,0.1)]"
                        />

                        <div className="relative z-20 flex flex-col h-full transition-transform duration-500 group-hover/solution:translate-y-[-4px]">
                            <div className="mb-10">
                                <div className="flex items-center gap-3 text-accent mb-4">
                                    <Zap className="w-6 h-6 fill-accent" />
                                    <span className="font-bold uppercase tracking-widest text-sm">The Solution</span>
                                </div>
                                <h3 className="text-white text-3xl font-display font-bold mb-2">The Investment</h3>
                                <p className="text-white/40 font-medium text-lg">One system. Zero set-up fees. No contracts.</p>
                            </div>

                            <div className="mb-10">
                                <div className="inline-flex px-3 py-1 rounded-full bg-accent text-dark text-[10px] font-bold uppercase tracking-wider mb-4">
                                    Best Value
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-accent font-display font-bold text-6xl">£297</span>
                                    <span className="text-white/40 text-lg">per month</span>
                                </div>
                                <p className="text-accent/80 font-bold mt-2">Less than one missed job.</p>
                            </div>

                            <ul className="space-y-4 mb-12">
                                {inclusions.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/90 group/item">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:rotate-12" />
                                        <span className="text-lg font-medium transition-colors duration-300 group-hover/item:text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto space-y-8">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full text-lg h-14 shadow-lg shadow-accent/10 transition-all duration-500 group-hover/solution:shadow-[0_0_30px_rgba(244,161,0,0.4)] group-hover/solution:scale-[1.02] flex items-center justify-center gap-2 group"
                                    onClick={() => onNavigate('/checkout')}
                                >
                                    Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                                </Button>

                                <div className="pt-8 border-t border-accent/20">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-sm font-bold uppercase tracking-wider mb-1">Win More jobs & scale your business</span>
                                        <span className="text-accent font-display font-bold text-3xl md:text-4xl">
                                            Less than £10 <span className="text-white/40 text-xl font-sans">a day</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Final Emotional Close */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    className="mt-32 text-center max-w-4xl mx-auto space-y-6"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 tracking-tight"
                    >
                        That is not just a <span className="text-accent underline decoration-accent/30 underline-offset-8">better business</span>.
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 tracking-tight"
                    >
                        That is <span className="text-accent/90">school pickups</span> you do not miss.
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 tracking-tight"
                    >
                        Weekends you actually <span className="text-accent/90 focus-ring">switch off</span>.
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 tracking-tight"
                    >
                        Evenings with your <span className="text-accent">family</span> instead of your inbox.
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { type: "spring", stiffness: 100, delay: 1.2 }
                            }
                        }}
                        className="pt-10 flex flex-col items-center gap-4"
                    >
                        <div className="h-px w-24 bg-accent/30 mb-4" />
                        <div className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter">
                            One system. <span className="relative inline-block whitespace-nowrap">
                                <span className="text-accent">Less than £10 a day.</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 overflow-visible pointer-events-none" viewBox="0 0 300 12" preserveAspectRatio="none">
                                    <motion.path
                                        d="M5 8 Q 150 12 295 8"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        fill="none"
                                        className="text-accent/60"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                                    />
                                    <motion.path
                                        d="M10 10 Q 160 14 290 10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        fill="none"
                                        className="text-accent/40"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 2, duration: 0.9, ease: "easeOut" }}
                                    />
                                </svg>
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
