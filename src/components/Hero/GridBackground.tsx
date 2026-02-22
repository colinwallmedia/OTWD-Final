import React from 'react';
import { motion } from 'motion/react';

export const GridBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-80"
                style={{ backgroundImage: 'url(/images/trade-bg-3.jpg)' }}
            />
            {/* Dark Mask for Text Readability */}
            <div className="absolute inset-0 bg-dark/60" />

            {/* Animated Glows */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px]"
            />

            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
            />

            {/* The Grid */}
            <div
                className="absolute inset-0 opacity-[0.25]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            {/* Glowing Intersections (Animated) */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 4,
                            delay: i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(244,161,0,0.8)]"
                        style={{
                            left: `${20 + (i * 15)}% `,
                            top: `${30 + (i * 10)}% `
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
