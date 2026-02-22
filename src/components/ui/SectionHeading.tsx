import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
    title: React.ReactNode;
    subtitle?: string;
    centered?: boolean;
}

export const SectionHeading = ({
    title,
    subtitle,
    centered = true
}: SectionHeadingProps) => (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-lg max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);
