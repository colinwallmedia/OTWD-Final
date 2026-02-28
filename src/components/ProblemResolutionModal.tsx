import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';

interface ProblemResolutionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProblemResolutionModal = ({ isOpen, onClose }: ProblemResolutionModalProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        experience: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://services.leadconnectorhq.com/hooks/07mnL9ovLQrWpRw1FYBB/webhook-trigger/3938f38d-cc5e-4ac2-8211-68563ce64e3a', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'Review Page',
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setIsSubmitted(false);
                    setFormData({ fullName: '', phone: '', email: '', experience: '' });
                }, 4000);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark/95 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="relative w-full max-w-xl z-10"
                    >
                        <div className="absolute -inset-1 bg-accent/20 blur-2xl rounded-[2rem] opacity-20" />
                        <GlassCard className="p-8 md:p-10 border-white/10 shadow-2xl bg-dark/60 backdrop-blur-3xl">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-10 h-10 text-accent" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                                        Received <span className="text-accent">& Logged</span>
                                    </h2>
                                    <p className="text-white/50 text-lg leading-relaxed max-w-sm mx-auto">
                                        We're mobilizing our team to resolve this. Expect a call or email shortly. Thank you for your patience.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                                            <AlertCircle className="w-6 h-6 text-red-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none">
                                                MISSION <span className="text-accent text-xl block mt-1 tracking-widest">CRITICAL</span>
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="text-white/60 mb-10 text-lg leading-relaxed">
                                        We regret that our standards weren't met. Please provide the details below so we can initiate an immediate recovery.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Enter your name"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Enter phone"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">What went wrong?</label>
                                            <textarea
                                                required
                                                placeholder="Please provide details..."
                                                rows={4}
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-16 text-lg tracking-widest uppercase border-0 bg-accent text-dark font-black hover:bg-white hover:text-dark shadow-[0_0_30px_-5px_rgba(244,161,0,0.4)]"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'TRANSMITTING...' : 'INITIATE RECOVERY'}
                                            {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </GlassCard>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
