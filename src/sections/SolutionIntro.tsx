import React from 'react';
import { motion } from 'motion/react';

export const SolutionIntro = () => (
    <section className="bg-accent text-dark text-center">
        <div className="container-tight">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-dark mb-6">We Fix All Of This. Automatically.</h2>
                <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-80">
                    The only all-in-one growth system built exclusively for tradespeople who are too busy for tech.
                </p>
            </motion.div>
        </div>
    </section>
);
