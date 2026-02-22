import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Play, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
    onOpenDemo: () => void;
}

export const HowItWorks = ({ onOpenDemo }: HowItWorksProps) => {
    const steps = [
        { step: "01", title: "We Build Your System", desc: "We set up your complete growth system, inbox, automations, website and review tools, all configured for your trade and your local area." },
        { step: "02", title: "You Review and Approve", desc: "We walk you through everything. You check it, approve it and request any changes before anything goes live." },
        { step: "03", title: "You Go Live, Fully Set Up", desc: "Your system goes live within 48 hours. Leads captured, responses automated, reputation building from day one." }
    ];

    return (
        <section id="how-it-works" className="relative overflow-hidden py-24 md:py-32">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-10">
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" />
            </div>

            <div className="container-tight">
                <SectionHeading
                    title="From Zero to Live in 48 Hours"
                    subtitle="Our streamlined process gets you up and running without any downtime."
                />

                <div className="relative">
                    {/* Animated Connector Path (Desktop) */}
                    <div className="hidden md:block absolute top-[31px] left-[15%] right-[15%] h-[2px] z-0 pointer-events-none">
                        <svg width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible block">
                            <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <motion.line
                                x1="0" y1="1" x2="100%" y2="1"
                                stroke="var(--accent-color)"
                                strokeWidth="1"
                                strokeDasharray="4 8"
                                animate={{ strokeDashoffset: [12, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 items-stretch">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center h-full">
                                    {/* Step Number Circle */}
                                    <div className="relative mb-8">
                                        <motion.div
                                            animate={{
                                                boxShadow: ["0 0 20px rgba(var(--accent-color), 0.2)", "0 0 40px rgba(var(--accent-color), 0.4)", "0 0 20px rgba(var(--accent-color), 0.2)"]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center text-2xl font-display font-bold relative z-10"
                                        >
                                            {s.step}
                                        </motion.div>

                                        {/* Outer Ring */}
                                        <div className="absolute inset-[-8px] border border-accent/20 rounded-full group-hover:border-accent/50 transition-colors duration-smooth ease-smooth" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="glass p-8 rounded-2xl border border-white/5 group-hover:border-accent/20 transition-all duration-smooth ease-smooth w-full flex-1 flex flex-col justify-start">
                                        <h3 className="mb-4 text-xl font-bold group-hover:text-accent transition-colors leading-tight">{s.title}</h3>
                                        <p className="text-white/60 leading-relaxed text-sm md:text-base">{s.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <div className="inline-block glass p-1 rounded-full border border-accent/20">
                            <button
                                onClick={onOpenDemo}
                                className="px-8 py-4 bg-accent text-dark rounded-full font-black flex items-center gap-3 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(244,161,0,0.2)] group"
                            >
                                <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center group-hover:bg-dark/20 transition-colors">
                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                </div>
                                See The Interactive Demo <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
