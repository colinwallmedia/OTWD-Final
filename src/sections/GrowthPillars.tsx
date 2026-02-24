import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface GrowthPillarsProps {
    onNavigate: (path: string) => void;
}

export const GrowthPillars = ({ onNavigate }: GrowthPillarsProps) => {
    const pillars = [
        {
            icon: <Target className="w-6 h-6 text-accent" />,
            title: "Pillar 1: Capture Every Enquiry",
            desc: "Every WhatsApp, web form, message and call captured instantly. Nothing slips through the cracks."
        },
        {
            icon: <Zap className="w-6 h-6 text-accent" />,
            title: "Pillar 2: Convert More Jobs",
            desc: "Instant replies, automated follow-ups and booking flows that turn enquiries into confirmed work."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-accent" />,
            title: "Pillar 3: Compound Your Reputation",
            desc: "Automatic review requests and visibility optimisation that pushes you higher in local search."
        }
    ];

    return (
        <section id="growth-pillars" className="relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full opacity-50" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full opacity-30" />

            <div className="container-tight relative z-10">
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Our Three Business Growth Pillars
                        </h2>
                        <p className="text-description">
                            Everything in the Business Growth System is built around these three drivers of revenue and reputation.
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="grid gap-6 relative z-10">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/20 transition-all duration-500 relative overflow-hidden group">
                                    {/* Subtle Card Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Icon Container */}
                                    <div className="relative shrink-0">
                                        <div className="w-14 h-14 rounded-xl bg-dark border border-white/10 flex items-center justify-center relative z-10 group-hover:border-accent/50 transition-colors duration-500">
                                            <div className="text-accent">
                                                {pillar.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-accent/60 font-display font-bold text-[10px] uppercase tracking-[0.2em]">Pillar {i + 1}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                            {pillar.title.split(': ')[1]}
                                        </h3>
                                        <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                                            {pillar.desc}
                                        </p>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none overflow-hidden opacity-10">
                                        <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] border-[0.5px] border-accent/30 rounded-full group-hover:border-accent transition-all duration-1000" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Button variant="primary" size="lg" className="px-10 flex items-center gap-2 mx-auto group" onClick={() => onNavigate('/checkout')}>
                        Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                    </Button>
                    <p className="text-white/40 text-sm mt-4 font-bold">
                        Availability limited by area
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
