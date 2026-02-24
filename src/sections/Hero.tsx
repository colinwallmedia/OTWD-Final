import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface HeroProps {
    onNavigate: (path: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
    const sectionRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect: moves background slightly slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    // Fade out background as we scroll past
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 min-h-screen flex items-center overflow-visible">
            {/* Sticky Parallax Background Container */}
            <div className="absolute inset-0 z-0 pointer-events-none [clip-path:inset(0)]">
                <div className="fixed inset-0 h-full w-full">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                            style={{ backgroundImage: 'url(/images/trade-bg-3.jpg)' }}
                        />
                    </motion.div>
                    {/* Dark Overlay for readability - pinned to the fixed container */}
                    <div className="absolute inset-0 bg-dark/75 backdrop-blur-[1px]" />
                </div>
            </div>


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
                    className="text-description max-w-4xl mx-auto mb-8 text-balance"
                >
                    Every enquiry answered within 60 seconds, quote and book jobs, outrank your competitors so the enquiries come to you first. Automatically.
                </motion.p>

                {/* 4. Objection Killer Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/80 mb-12"
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
                    <Button variant="primary" size="lg" className="w-full sm:w-auto group" onClick={() => onNavigate('/checkout')}>
                        Get Started Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/book-call')}>
                        Book a Demo
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
