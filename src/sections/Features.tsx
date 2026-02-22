import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Zap, MessageSquare, Inbox, Star, Smartphone } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Features = () => {
    const features = [
        { icon: <Monitor />, title: "Precision Built Website", desc: "Designed for conversion. We build high-performance sites that turn visitors into customers automatically." },
        { icon: <Zap />, title: "60 Second AI Response", desc: "Our AI agent answers every enquiry instantly while you're busy working. Never lose a lead to slow replies again." },
        { icon: <MessageSquare />, title: "Multi-Channel Inbox", desc: "One place for everything. WhatsApp, Email, Web Chat and SMS all in one simple, unified dashboard." },
        { icon: <Inbox />, title: "Automated Booking", desc: "Let customers book quotes directly on your calendar. No more back-and-forth phone tag." },
        { icon: <Smartphone />, title: "Mobile CRM", desc: "Manage your entire business from your phone. Quotes, invoices, and chats—all in your pocket." },
        { icon: <Star />, title: "Review Engine", desc: "Automatically requests a 5-star review after every job. Build a reputation that sells for you." }
    ];

    return (
        <section id="features" className="bg-dark relative overflow-hidden py-24 md:py-32">
            <div className="container-tight">
                <SectionHeading
                    title="Everything You Need. Nothing You Don't."
                    subtitle="A complete digital arsenal designed for the modern tradesperson."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 group hover:border-accent/30 transition-all duration-smooth ease-smooth"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-dark transition-all duration-smooth">
                                {f.icon}
                            </div>
                            <h3 className="mb-4">{f.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
