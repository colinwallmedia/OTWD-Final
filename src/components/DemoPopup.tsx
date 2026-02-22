import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Zap, Bot, Star, ArrowRight } from 'lucide-react';

interface DemoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (path: string) => void;
}

export const DemoPopup = ({ isOpen, onClose, onNavigate }: DemoPopupProps) => {
    const demos = [
        {
            id: 'lead-capture',
            title: 'High Converting Website',
            desc: 'See how we bridge the gap between "Looking" and "Booking".',
            icon: <Zap />,
            path: '/demo/lead-capture'
        },
        {
            id: 'ai-agent',
            title: '24/7 AI Sales Agent',
            desc: 'Watch the AI handle enquiries and book site visits instantly.',
            icon: <Bot />,
            path: '/demo/ai-agent'
        },
        {
            id: 'review-engine',
            title: 'Review & Reputation Engine',
            desc: 'Automate your customer feedback loop to dominate local SEO.',
            icon: <Star />,
            path: '/demo/review-engine'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl glass bg-white/[0.02] border border-white/10 rounded-[40px] shadow-3xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-8 md:p-12 lg:p-16 space-y-12">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-black uppercase tracking-widest">
                                    Interactive Demos
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-none">
                                    See the <span className="text-accent italic">Power</span> in Action
                                </h2>
                                <p className="text-white/40 max-w-lg mx-auto">
                                    Select a feature to see how it works and what it means for your business.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {demos.map((demo) => (
                                    <button
                                        key={demo.id}
                                        onClick={() => {
                                            onNavigate(demo.path);
                                            onClose();
                                        }}
                                        className="group text-left glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 flex flex-col justify-between h-full"
                                    >
                                        <div className="space-y-6">
                                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500">
                                                {demo.icon}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="font-bold text-xl text-white group-hover:text-accent transition-colors">{demo.title}</h3>
                                                <p className="text-white/40 text-sm leading-relaxed">{demo.desc}</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                                            Watch Demo <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-white/10" />)}
                                    </div>
                                    <p className="text-white/40 text-xs italic">Watching now with 12 other businesses.</p>
                                </div>
                                <div className="flex items-center gap-2 text-accent font-bold">
                                    <Play className="w-5 h-5 fill-current" />
                                    <span>All demos under 2 mins</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
