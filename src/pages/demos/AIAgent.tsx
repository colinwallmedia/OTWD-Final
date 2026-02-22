import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, MessageSquare, Zap, Clock, Send } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const AIAgentDemo = () => {
    const [messages, setMessages] = useState([
        { role: 'user', text: 'Hi, I need a quote for a new boiler.' },
        { role: 'bot', text: 'Hello! I can certainly help with that. Are you looking for a replacement or a new installation in a different location?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (messages.length === 2) {
                simulateInteraction();
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [messages]);

    const simulateInteraction = () => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'user', text: 'Replacement, same spot.' }]);
            setIsTyping(false);
            setTimeout(() => {
                setIsTyping(true);
                setTimeout(() => {
                    setMessages(prev => [...prev, { role: 'bot', text: 'Great. To give you an accurate quote, could you snap a photo of your current setup and send it here? I can also book a site visit for Tuesday morning if you prefer.' }]);
                    setIsTyping(false);
                }, 1500);
            }, 800)
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-dark">
            <div className="container-tight">
                <SectionHeading
                    title="24/7 AI Enquiry Agent"
                    subtitle="Our AI doesn't just 'reply'—it qualifies leads, handles objections, and books jobs while you sleep."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
                    {/* Left: Simulated Chat */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass rounded-3xl border border-white/5 shadow-3xl overflow-hidden flex flex-col h-[500px]"
                    >
                        <div className="bg-accent/10 p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-white tracking-tight">Your AI Support Agent</div>
                                    <div className="text-xs text-accent font-bold uppercase tracking-widest">Active Now</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-white/5 text-white'
                                        : 'bg-accent/20 border border-accent/20 text-white'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <AnimatePresence>
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-accent/10 p-3 rounded-2xl flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-3">
                            <div className="flex-1 bg-dark/40 border border-white/5 rounded-full px-4 py-2 text-white/20 text-sm flex items-center">
                                Type your message...
                            </div>
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                <Send className="w-5 h-5" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Benefits */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-display font-bold text-white">Why Speed Matters</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                78% of customers buy from the business that responds first. Our AI ensures that is <span className="text-accent font-bold">always you</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: <Zap />, title: "60 Second Response", text: "Zero lag. Instant engagement." },
                                { icon: <Clock />, title: "24/7 Availability", text: "Quotes booked while you're asleep." },
                                { icon: <MessageSquare />, title: "Lead Qualification", text: "Separates the serious buyers from the time-wasters." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 glass rounded-2xl border border-white/5">
                                    <div className="text-accent shrink-0">{item.icon}</div>
                                    <div>
                                        <div className="font-bold text-white">{item.title}</div>
                                        <div className="text-white/40 text-sm">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button variant="primary" size="lg" href="#contact">
                        Get This Working For You
                    </Button>
                </div>
            </div>
        </div>
    );
};
