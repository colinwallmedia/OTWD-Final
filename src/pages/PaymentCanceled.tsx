import React from 'react';
import { motion } from 'motion/react';
import { XCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';

export const PaymentCanceled = () => {
    return (
        <div className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-10 h-10 text-yellow-500" />
                    </div>
                    <h1 className="text-4xl font-display font-bold text-white mb-6">
                        Payment <span className="text-yellow-500">Canceled</span>
                    </h1>
                    <p className="text-white/60 text-lg mb-12 leading-relaxed">
                        It looks like you didn't complete your transaction. No charges were made to your card.
                    </p>

                    <GlassCard className="p-8 mb-8">
                        <h3 className="text-xl font-display font-bold text-white mb-4">Need help? Or changed your mind?</h3>
                        <p className="text-white/60 mb-8 text-sm leading-relaxed">
                            If you encountered a technical issue or have questions about the plans, we're here to help you get started.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Button variant="primary" className="group" onClick={() => window.location.href = '/checkout'}>
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Checkout
                            </Button>
                            <Button variant="outline" className="group" onClick={() => window.location.href = '/book-call'}>
                                Book a Specialist Call <MessageCircle className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </GlassCard>

                    <p className="text-white/40 text-sm">
                        Prefer to speak to someone first? Give us a call at <span className="text-white font-medium">0800-OTW-DIGITAL</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
