import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, CheckCircle2, Phone, TrendingUp } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { useEffect } from 'react';

export const BookCall = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <div className="container-tight">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter"
                    >
                        Book a demo - See the <span className="text-accent italic">system in action</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Save 4 hours a day. No hard sell, just a plan for your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-3xl font-display font-bold text-white">What we'll cover on the call:</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Identify the Leaks", desc: "We'll find exactly where you're losing leads and why." },
                                    { title: "Streamline Your Schedule", desc: "How to automate your bookings so you stop playing phone tag." },
                                    { title: "The AI Strategy", desc: "A custom plan for your automated enquiry responder." },
                                    { title: "Immediate ROI", desc: "The steps to making the system pay for itself in the first 30 days." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl text-white mb-1">{item.title}</div>
                                            <div className="text-white/60 leading-relaxed">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-8 rounded-3xl border border-accent/20 bg-accent/5 relative overflow-hidden">
                            <div className="relative z-10 flex gap-6 items-center">
                                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-dark">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold text-white">£2,375 Recovered</div>
                                    <div className="text-accent font-bold uppercase tracking-wider text-[10px]">
                                        Avg. Missed Revenue + 23% Enquiry Jump
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Calendar Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass p-1 overflow-hidden rounded-3xl"
                    >
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/booking/IgSO6bWnLnHcqzFPgFb0"
                            style={{ width: '100%', border: 'none', minHeight: '600px' }}
                            scrolling="no"
                            id="IgSO6bWnLnHcqzFPgFb0_1771834553139"
                        />
                    </motion.div>
                </div>

                <div className="mt-20 text-center space-y-4">
                    <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Prefer a direct chat?</p>
                    <a href="tel:+447883320855" className="inline-flex items-center gap-3 text-3xl font-display font-bold text-white hover:text-accent transition-colors">
                        <Phone className="w-8 h-8 text-accent" /> +44 7883 320855
                    </a>
                </div>
            </div>
        </div>
    );
};
