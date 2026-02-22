import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Star, Zap, User, Clock, ArrowRight } from 'lucide-react';

interface FloatingCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FloatingContainer = ({ children, className, delay = 0 }: FloatingCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: 1,
            y: [0, -15, 0],
            rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
            opacity: { duration: 0.8, delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
        }}
        className={`absolute pointer-events-none ${className}`}
    >
        <div className="glass p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md">
            {children}
        </div>
    </motion.div>
);

export const FloatingProofCards = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden lg:block">
            {/* Lead Notification Card */}
            <FloatingContainer className="top-[20%] left-[10%] w-64" delay={0.2}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">New Lead Received</div>
                        <div className="text-sm font-bold text-white">Full Re-wire - £2,400</div>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px]">
                    <span className="text-accent font-bold">High Priority</span>
                    <span className="text-white/40">2 mins ago</span>
                </div>
            </FloatingContainer>

            {/* AI Agent Card */}
            <FloatingContainer className="top-[45%] right-[8%] w-72" delay={1.5}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">AI Agent Active</div>
                        <div className="text-sm font-bold text-white">Enquiry Handled Instantly</div>
                    </div>
                </div>
                <div className="mt-3 p-2 bg-white/5 rounded-lg text-[10px] text-white/60 italic">
                    "Replied to John in 8 seconds..."
                </div>
            </FloatingContainer>

            {/* 5-Star Review Card */}
            <FloatingContainer className="bottom-[25%] left-[15%] w-60" delay={0.8}>
                <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                </div>
                <div className="text-xs text-white/80 font-medium mb-1">
                    "Fantastic work, arrived on time!"
                </div>
                <div className="text-[10px] text-white/40">— David H., London</div>
            </FloatingContainer>

            {/* Booking Card */}
            <FloatingContainer className="bottom-[15%] right-[15%] w-56" delay={2.2}>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-white">New Booking</div>
                        <div className="text-[10px] text-white/40">Tomorrow at 9:00 AM</div>
                    </div>
                </div>
            </FloatingContainer>
        </div>
    );
};
