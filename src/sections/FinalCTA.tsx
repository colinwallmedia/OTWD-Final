import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface FinalCTAProps {
    onNavigate: (path: string) => void;
}

export const FinalCTA = ({ onNavigate }: FinalCTAProps) => (
    <section id="contact" className="bg-dark relative overflow-hidden py-24 md:py-32">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -z-10" />

        <div className="container-tight max-w-4xl text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
            >
                Stop Losing Jobs to Businesses That Are Less Skilled Than You.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60 mb-12"
            >
                No setup fees. No contracts. Just more enquiries, more bookings, more five star reviews.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
                <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => onNavigate('/book-call')}>
                    Book My Free Call <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" href="tel:+440000000000">
                    Call Us Now
                </Button>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-accent font-semibold flex items-center justify-center gap-2"
            >
                <ShieldAlert className="w-5 h-5" />
                Availability limited by area: claim your patch before a competitor does.
            </motion.p>
        </div>
    </section>
);
