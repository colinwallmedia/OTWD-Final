import React from 'react';
import { motion } from 'motion/react';
import { Monitor, MousePointer2, Zap, Layout, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const LeadCaptureDemo = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark overflow-hidden">
            <div className="container-tight">
                <SectionHeading
                    title="Website Lead Capture Demo"
                    subtitle="Stop losing visitors. Start winning customers with our high-conversion website technology."
                />

                <div className="mt-12 space-y-24">
                    {/* Visual Comparison */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass p-8 rounded-3xl border border-white/5 opacity-50 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase">Average Website</div>
                            <div className="h-64 flex items-center justify-center text-white/20 italic">
                                Boring text, hidden contact forms, zero interaction.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass p-8 rounded-3xl border border-accent/30 shadow-[0_0_50px_rgba(244,161,0,0.15)] relative overflow-hidden group"
                        >
                            <div className="absolute top-4 right-4 bg-accent text-dark px-3 py-1 rounded-full text-xs font-black uppercase">Our Tech</div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="font-display font-bold text-2xl">The "Conversion Engine"</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            className="h-full bg-accent"
                                        />
                                    </div>
                                    <p className="text-white/60 leading-relaxed">
                                        We use interactive elements, instant load speeds, and "One-Click Booking" flows that make it impossible for a customer to leave without giving you their details.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Monitor />, title: "Precision Built", desc: "No generic templates. Every pixel is placed to drive the customer toward a booking." },
                            { icon: <Layout />, title: "Mobile Perfect", desc: "90% of your customers book from their phones. We build for mobile first." },
                            { icon: <MousePointer2 />, title: "Smart Capture", desc: "Custom forms that feel like a conversation, not a database entry." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                                <p className="text-white/40 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button variant="primary" size="lg" href="#pricing">
                            Get This on Your Site <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
