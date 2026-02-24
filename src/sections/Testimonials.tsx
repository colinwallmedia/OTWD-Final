import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Testimonials = () => {
    const reviews = [
        { name: "Dave M.", role: "DM Plumbing, Leeds", quote: "Turns out it runs my entire business. The AI replied to two enquiries before I even saw the notification." },
        { name: "Sarah J.", role: "Bright Spark Electricians, Kent", quote: "Booked three jobs while eating a bacon roll. Paid for itself in the first week." },
        { name: "Mike R.", role: "Elevated Roofing, Manchester", quote: "Customers think I hired an office team. It's just this system doing all the heavy lifting." }
    ];

    return (
        <section id="testimonials" className="bg-dark/50">
            <div className="container-tight">
                <SectionHeading title="What the Trade is Saying" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass glass-hover p-8 rounded-2xl"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                            </div>
                            <p className="text-xl italic mb-8 leading-relaxed">"{r.quote}"</p>
                            <div>
                                <div className="font-display font-bold text-lg">{r.name}</div>
                                <div className="text-white/40 text-sm">{r.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
