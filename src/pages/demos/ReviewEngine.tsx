import React from 'react';
import { motion } from 'motion/react';
import { Star, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const ReviewEngineDemo = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container-tight">
                <SectionHeading
                    title="The 5-Star Reputation Engine"
                    subtitle="Automatically turn happy customers into your best marketing asset. No chasing, no awkward asks."
                />

                <div className="mt-12 space-y-20">
                    {/* The Cycle */}
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {[
                                { title: "1. Job Done", icon: <TrendingUp />, desc: "The second you mark a job as complete in our system..." },
                                { title: "2. Auto-Request", icon: <Users />, desc: "...an SMS/Email request is sent to the customer instantly." },
                                { title: "3. Verified Review", icon: <Star />, desc: "They leave a review, and it's posted to Google and your site." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-8 rounded-3xl border border-white/5 text-center space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-xl text-white">{step.title}</h4>
                                    <p className="text-white/40 text-sm">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Social Proof Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass p-12 rounded-[50px] border border-accent/20 bg-accent/5 max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-bold uppercase tracking-widest text-xs">
                                    Real-world Result
                                </div>
                                <h3 className="text-4xl font-display font-black text-white leading-none"> Dominating Local Search</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Google prioritizes businesses with frequent, fresh reviews. Our system ensures you're always dropping new content on your profile, pushing you to the top of the map.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex text-accent">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                                    </div>
                                    <div className="text-white font-bold text-2xl">4.9/5 Average</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: "John D.", text: "Best service I've had. Fast and very clean!", time: "2 mins ago" },
                                    { name: "Sarah W.", text: "Prompt and professional. Highly recommend.", time: "1 hour ago" }
                                ].map((review, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="bg-dark/60 p-6 rounded-2xl border border-white/5 space-y-2 shadow-2xl"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="font-bold text-white">{review.name}</div>
                                            <div className="text-[10px] uppercase text-white/20 tracking-widest">{review.time}</div>
                                        </div>
                                        <p className="text-white/40 text-sm">"{review.text}"</p>
                                        <div className="flex text-accent gap-0.5"><Star className="w-3 h-3 fill-current" /></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="text-center">
                        <Button variant="primary" size="lg" href="#contact">
                            Start Building Your Reputation <Heart className="inline-block ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
