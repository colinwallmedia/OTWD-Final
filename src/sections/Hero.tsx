import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GridBackground } from '../components/Hero/GridBackground';

interface HeroProps {
    onNavigate: (path: string) => void;
    onOpenDemo: () => void;
}

export const Hero = ({ onNavigate, onOpenDemo }: HeroProps) => {
    return (
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
            {/* 1. Enhanced Animated Background */}
            <GridBackground />


            <div className="container-tight text-center relative z-10">
                {/* 1. Pill Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold mb-8"
                >
                    <Star className="w-4 h-4 fill-accent" />
                    <span>From First Enquiry to 5-Star Review</span>
                </motion.div>

                {/* 2. Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mb-8 text-balance"
                >
                    Your Website Should Be <span className="text-accent italic">Working</span> While You Are.
                </motion.h1>

                {/* 3. Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-8 leading-relaxed text-balance"
                >
                    Every enquiry answered within 60 seconds, quote and book jobs, outrank your competitors so the enquiries come to you first. Automatically.
                </motion.p>

                {/* 4. Objection Killer Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/80 mb-12 mt-12"
                >
                    No Tech Skill Required - Managed from the palm of your hand
                </motion.p>

                {/* 5. CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={onOpenDemo}>
                        See How It Works <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/book-call')}>
                        Book a Free 10-Minute Call
                    </Button>
                </motion.div>

                {/* 6. Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10"
                >
                    {[
                        { label: '+38% Enquiry Rate' },
                        { label: '£42k Booked in 90 Days' },
                        { label: '60 sec AI Response' },
                        { label: '4.9★ Rating' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-accent font-display font-bold text-xl md:text-2xl">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
                    <div className="font-display font-bold text-xl">TRUSTED TRADES</div>
                    <div className="font-display font-bold text-xl">UK BUILT</div>
                    <div className="font-display font-bold text-xl">5-STAR RATED</div>
                </div>
            </div>
        </section>
    );
};
