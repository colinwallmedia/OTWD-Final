import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { ProblemResolutionModal } from '../components/ProblemResolutionModal';

const reviewIcons = [
    { id: 1, label: 'Poor', emoji: '😠', color: 'text-red-500' },
    { id: 2, label: 'Fair', emoji: '🙁', color: 'text-orange-500' },
    { id: 3, label: 'Good', emoji: '😐', color: 'text-yellow-400' },
    { id: 4, label: 'Great', emoji: '🙂', color: 'text-lime-400' },
    { id: 5, label: 'Elite', emoji: '😁', color: 'text-green-500' },
];

const GOOGLE_REVIEW_URL = 'https://g.page/r/CQlX-pmoYX_XEAI/review';

export const ReviewPage = () => {
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIconClick = (id: number) => {
        if (id <= 3) {
            setIsModalOpen(true);
        } else {
            window.location.href = GOOGLE_REVIEW_URL;
        }
    };

    return (
        <div className="fixed inset-0 bg-dark overflow-hidden flex items-center justify-center p-4 md:p-8">
            {/* Background Image - High impact */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/trade-bg-3.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50 filter saturate-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-2xl"
            >
                {/* Visual Glow Effect */}
                <div className="absolute -inset-4 bg-accent/30 blur-3xl rounded-[4rem] opacity-20" />

                <GlassCard className="p-0 overflow-hidden border-white/20 shadow-[0_0_80px_-20px_rgba(244,161,0,0.4)] bg-dark/60 backdrop-blur-3xl">
                    {/* Header Section */}
                    <div className="pt-12 pb-6 px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold text-white mb-3 uppercase tracking-tighter"
                        >
                            HOW DID <span className="text-accent underline decoration-accent/30 underline-offset-8">WE DO?</span>
                        </motion.h1>
                        <p className="text-white/60 text-lg font-medium">
                            Your feedback powers our <span className="text-accent text-xl font-bold">AI Evolution.</span>
                        </p>
                    </div>

                    {/* Central AI Image section */}
                    <div className="px-8 pb-4 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
                            <img
                                src="/images/OTWD Profile.png"
                                alt="OTWD Profile"
                                className="relative w-32 h-32 md:w-44 md:h-44 object-cover rounded-2xl border border-white/10 shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* rating icons section */}
                    <div className="px-8 pb-12 pt-6">
                        <div className="flex justify-between items-end max-w-lg mx-auto mb-12 gap-2">
                            {reviewIcons.map((icon) => (
                                <button
                                    key={icon.id}
                                    onMouseEnter={() => setHoveredIcon(icon.id)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                    onClick={() => handleIconClick(icon.id)}
                                    className="group relative flex flex-col items-center flex-1 transition-all duration-300"
                                >
                                    <div className="relative mb-3">
                                        <div className={`absolute inset-0 rounded-2xl blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 ${icon.color} bg-current/10 ${hoveredIcon === icon.id ? 'scale-150' : ''}`} />
                                        <span className={`text-5xl md:text-7xl block transition-all duration-300 transform ${icon.color} ${hoveredIcon === icon.id ? 'scale-135 -translate-y-3 brightness-125 saturate-150 drop-shadow-[0_0_15px_rgba(244,161,0,0.5)]' : 'brightness-[0.8] saturate-[0.8]'}`}>
                                            {icon.emoji}
                                        </span>
                                    </div>
                                    <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${hoveredIcon === icon.id ? 'text-accent opacity-100' : 'text-white/20 opacity-0'}`}>
                                        {icon.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Branding / Bottom text section */}
                        <div className="pt-8 border-t border-white/10 flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px w-8 bg-accent/30" />
                                <span className="text-white font-display font-bold text-sm md:text-base tracking-[0.4em] uppercase italic">
                                    Off The Wall <span className="text-accent">Digital</span>
                                </span>
                                <div className="h-px w-8 bg-accent/30" />
                            </div>

                            <p className="text-white brightness-125 text-center max-w-lg mx-auto leading-relaxed text-lg md:text-xl font-bold px-4">
                                "Your honest feedback is critical to our mission. It helps us sharpen our focus and continue delivering elite results for our partners."
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>

            <ProblemResolutionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};
