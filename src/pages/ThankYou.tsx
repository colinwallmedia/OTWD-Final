import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Rocket, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export const ThankYou = () => {
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Welcome to <span className="text-accent">Off The Wall Digital</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        Your payment was successful. We're excited to help you automate your business growth and lock in your area.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="p-8 h-full border-accent/20">
                            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                <Rocket className="w-6 h-6 text-accent" />
                                Immediate Next Steps
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 font-bold text-sm text-accent transition-colors">1</div>
                                    <p className="text-white/80 leading-relaxed">
                                        Check your email for your <span className="text-white font-bold">Welcome Pack</span> and login credentials.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 font-bold text-sm text-accent transition-colors">2</div>
                                    <p className="text-white/80 leading-relaxed">
                                        Complete the onboarding survey (linked below) so we can tailor the AI to your specific trade and area.
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 font-bold text-sm text-accent transition-colors">3</div>
                                    <p className="text-white/80 leading-relaxed">
                                        We'll reach out within the next 24 hours to schedule your onboarding call.
                                    </p>
                                </li>
                            </ul>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <GlassCard className="p-8">
                            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-accent" />
                                Onboarding Survey
                            </h3>
                            <p className="text-white/60 mb-8 text-sm leading-relaxed">
                                Please take 5 minutes to tell us about your service area and typical jobs. This allows us to set up your AI accurately.
                            </p>
                            <Button variant="primary" className="w-full group" href="https://survey-link.com" target="_blank">
                                Start Onboarding Survey <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-accent" />
                                Book Setup Call
                            </h3>
                            <p className="text-white/60 mb-8 text-sm leading-relaxed">
                                Ready to go even faster? Secure your setup call slot now.
                            </p>
                            <Button variant="outline" className="w-full" onClick={() => window.location.href = '/book-call'}>
                                Book My Session
                            </Button>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
