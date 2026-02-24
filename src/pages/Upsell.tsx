import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, CheckCircle, ArrowRight, ShieldCheck, Zap, Phone, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export const Upsell = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleAddVoice = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/create-upsell-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ billingCycle: 'monthly' }) // Default to monthly for add-on
            });

            const { url } = await response.json();
            if (url) window.location.href = url;
        } catch (error) {
            console.error('Upsell Error:', error);
            alert('Something went wrong. Please try again or skip.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSkip = () => {
        window.location.href = '/thank-you?success=true&upsell=skipped';
    };

    return (
        <div className="pt-32 pb-20 px-4 min-h-screen bg-dark overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Progress Indicator */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-dark">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] text-accent font-bold mt-2 uppercase tracking-widest">Payment</span>
                        </div>
                        <div className="w-20 h-px bg-accent/30" />
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center text-accent animate-pulse">
                                <Zap className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] text-accent font-bold mt-2 uppercase tracking-widest">Special Offer</span>
                        </div>
                        <div className="w-20 h-px bg-white/10" />
                        <div className="flex flex-col items-center opacity-30">
                            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white">
                                3
                            </div>
                            <span className="text-[10px] text-white font-bold mt-2 uppercase tracking-widest">Summary</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold mb-6"
                    >
                        <Zap className="w-4 h-4 fill-accent" />
                        <span>Wait! Special One-Time Activation</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                        Add an <span className="text-accent">AI Voice Receptionist</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        While we build your system, would you like our AI to carry out your phone calls too? Save <span className="text-white font-bold">£300 per month</span> with this exclusive upgrade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 h-full border-accent/30 bg-accent/5 ring-1 ring-accent/20">
                            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                                <Mic className="w-8 h-8 text-accent" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">Never Miss a Call Again</h2>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                Our Voice AI sounds exactly like a human receptionist. It answers your calls, books appointments directly into your calendar, and gives you a professional front 24/7.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Natural Human Sounding Voice",
                                    "Direct Calendar Booking",
                                    "Instant SMS Notification",
                                    "Handles Multiple Calls at Once",
                                    "No Staff Costs or Management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80">
                                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassCard className="p-8 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="flex -space-x-2">
                                        {[
                                            "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=100&h=100&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop"
                                        ].map((src, i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-white/10 overflow-hidden">
                                                <img src={src} alt="User" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-white/40 text-xs font-medium">84% of trades add this</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-white/40 line-through text-sm">
                                        <span>Standard Setup Price</span>
                                        <span>£497/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center text-white">
                                        <span className="font-bold">Your Priority Access</span>
                                        <div className="text-right">
                                            <div className="text-4xl font-display font-bold text-accent">£200<span className="text-base text-white/60 ml-1">/mo</span></div>
                                            <div className="text-[10px] text-accent uppercase font-bold tracking-widest">You saved £300/mo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full py-6 text-xl group"
                                    onClick={handleAddVoice}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : 'Yes, Add Voice AI'}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <button
                                    onClick={handleSkip}
                                    className="w-full text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center justify-center gap-2 py-2"
                                >
                                    No thanks, I'll stick with the basic system <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-4 py-4 border-t border-white/5 opacity-40">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-widest">100% Secure Activation</span>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-white/40 text-sm max-w-xl mx-auto italic">
                        "The Voice AI is a game changer. It booked three quote visits for me while I was driving yesterday. I didn't even have to touch my phone."
                    </p>
                    <p className="text-white/20 text-xs mt-2">— Mark P., Plumbing & Electrical</p>
                </div>
            </div>
        </div>
    );
};
