import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare, Star, Zap, User, Clock, CreditCard, CheckCircle2, Phone, Briefcase, TrendingUp } from 'lucide-react';

interface ParallaxCardProps {
    children: React.ReactNode;
    top: string;
    left?: string;
    right?: string;
    speed?: number;
    opacity?: number;
}

const ParallaxCard = ({ children, top, left, right, speed = 1, opacity = 0.8 }: ParallaxCardProps) => {
    const { scrollYProgress } = useScroll();
    // Subtle vertical drift within the viewport based on scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    return (
        <motion.div
            style={{
                y,
                top,
                left,
                right,
                opacity
            }}
            className="fixed pointer-events-none group z-0"
        >
            <div className="glass px-6 py-5 rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md transform transition-transform duration-700">
                {children}
            </div>
        </motion.div>
    );
};

export const SiteBackgroundCards = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Distributed across the viewport */}
            <ParallaxCard top="10%" left="5%" speed={0.4} opacity={0.8}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">New Lead</div>
                        <div className="text-sm font-black text-white">Full Re-wire - £2,400</div>
                    </div>
                </div>
            </ParallaxCard>

            <ParallaxCard top="25%" right="8%" speed={0.7} opacity={0.7}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">AI Agent</div>
                        <div className="text-sm font-bold text-white">Replied in 8.2s</div>
                    </div>
                </div>
            </ParallaxCard>

            <ParallaxCard top="45%" left="15%" speed={1.2} opacity={0.9}>
                <div className="flex items-center gap-3 text-accent">
                    <Zap className="w-8 h-8 fill-accent" />
                    <div className="text-lg font-black uppercase tracking-tighter">Engine Online</div>
                </div>
            </ParallaxCard>

            <ParallaxCard top="65%" right="12%" speed={0.3} opacity={0.7}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">New Payment</div>
                        <div className="text-sm font-bold text-white">Deposit: £150.00</div>
                    </div>
                </div>
            </ParallaxCard>

            <ParallaxCard top="80%" left="8%" speed={0.9} opacity={0.8}>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">5-Star Review</div>
                        <div className="text-sm font-bold text-white">"Fastest response ever."</div>
                    </div>
                </div>
            </ParallaxCard>

            <ParallaxCard top="15%" right="25%" speed={0.2} opacity={0.5}>
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-3 h-3 text-white/40" />
                    <div className="text-[10px] text-white/40 font-bold uppercase">WhatsApp Bot Active</div>
                </div>
            </ParallaxCard>
        </div>
    );
};
