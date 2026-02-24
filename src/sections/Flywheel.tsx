import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MousePointerClick, Zap, Inbox, CheckCircle2, History, Star, TrendingUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

interface FlywheelProps {
    onNavigate: (path: string) => void;
}

export const Flywheel = ({ onNavigate }: FlywheelProps) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const steps = [
        {
            title: "Get Found",
            cardTitle: "Get Found",
            statusLabel: "Local Visibility",
            icon: <Search className="w-5 h-5" />,
            description: "We optimise your Google presence with real job photos, local keywords and verified reviews so you show up when customers in your area are searching."
        },
        {
            title: "Lead Capture",
            cardTitle: "Lead Capture",
            statusLabel: "Always On",
            icon: <MousePointerClick className="w-5 h-5" />,
            description: "Every enquiry from every channel, WhatsApp, Facebook, Instagram, email and your website, is captured automatically. Nothing slips through."
        },
        {
            title: "Instant Response",
            cardTitle: "Instant Response",
            statusLabel: "60 Second Reply",
            icon: <Zap className="w-5 h-5" />,
            description: "The moment an enquiry lands, an instant reply goes out. You're first to respond every time, even when you're on the tools."
        },
        {
            title: "Handle Enquiry",
            cardTitle: "Handle Enquiry",
            statusLabel: "One Inbox",
            icon: <Inbox className="w-5 h-5" />,
            description: "Enquiries are qualified, organised and prioritised in one inbox. No more jumping between apps. No more missed messages."
        },
        {
            title: "Book Job",
            cardTitle: "Book Job",
            statusLabel: "Automated Booking",
            icon: <CheckCircle2 className="w-5 h-5" />,
            description: "Quotes, follow-ups and booking confirmations are sent automatically. Jobs land in your diary without you lifting a finger."
        },
        {
            title: "Record Coversations",
            cardTitle: "Record Conversations",
            statusLabel: "Full Audit Trail",
            icon: <History className="w-5 h-5" />,
            description: "Every customer conversation is logged and stored. Full history at your fingertips. No more trying to remember who said what."
        },
        {
            title: "Request Review",
            cardTitle: "Request Review",
            statusLabel: "Reputation Builder",
            icon: <Star className="w-5 h-5" />,
            description: "Once a job is complete, a review request is sent automatically. More 5-star reviews, less effort, better reputation."
        },
        {
            title: "Compound Growth",
            cardTitle: "Compound Growth Visibility",
            statusLabel: "Active Growth Phase",
            icon: <TrendingUp className="w-5 h-5" />,
            description: "A stronger reputation drives higher search rankings, feeding more leads back into your system automatically. The loop keeps growing."
        }
    ];

    const nextStep = () => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    };

    const prevStep = () => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextStep();
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, steps.length]);

    return (
        <section id="solution" className="relative overflow-hidden bg-dark py-24 md:py-32">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute w-64 h-64 border border-accent/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container-tight relative z-10">
                <SectionHeading
                    title="Introducing The Growth Flywheel"
                    subtitle="One system that works as a self-sustaining loop, growing your business while you're on the tools."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12">
                    {/* Left: Animated Loop Visualization */}
                    <div className="lg:col-span-7 relative flex items-center justify-center pt-0 pb-8">
                        <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
                            {/* Animated Connector Path (Desktop) */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="38"
                                    fill="none"
                                    stroke="var(--accent-color)"
                                    strokeWidth="0.5"
                                    strokeDasharray="1, 4"
                                    animate={{
                                        strokeDashoffset: [0, -20]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="opacity-40"
                                />
                            </svg>

                            {/* Active Step Path Animation */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none overflow-visible">
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="38"
                                    fill="none"
                                    stroke="var(--accent-color)"
                                    strokeWidth="1"
                                    strokeDasharray="10 1000"
                                    animate={{
                                        rotate: activeStep * (360 / steps.length)
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut"
                                    }}
                                    className="opacity-60"
                                />
                            </svg>

                            {/* Center Logo/Icon with Pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="z-10 w-24 h-24 lg:w-32 lg:h-32 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_var(--accent-color)] relative"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0.3, 0, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-accent rounded-full -z-10"
                                />
                                <TrendingUp className="w-12 h-12 lg:w-16 lg:h-16 text-dark" />
                            </motion.div>

                            {/* Steps positioned around the circle */}
                            {steps.map((step, i) => {
                                const angle = i * (Math.PI / 4) - (Math.PI / 2);

                                // Perfect circular geometry (equidistant 45-degree increments)
                                const radiusX = 46;
                                const radiusY = 46;

                                const x = 50 + radiusX * Math.cos(angle);
                                const y = 50 + radiusY * Math.sin(angle);

                                const isActive = activeStep === i;

                                return (
                                    <div
                                        key={i}
                                        style={{ left: `${x}%`, top: `${y}%` }}
                                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1.1 : 1,
                                                backgroundColor: isActive ? "var(--accent-color)" : "rgba(255, 255, 255, 0.05)",
                                                color: isActive ? "#0a0a0a" : "#ffffff",
                                                boxShadow: isActive ? "0 0 20px var(--accent-color)" : "none"
                                            }}
                                            className="flex items-center gap-3 px-4 py-3 rounded-full glass border-accent/20 transition-all duration-smooth ease-smooth whitespace-nowrap cursor-pointer"
                                            onClick={() => setActiveStep(i)}
                                        >
                                            <span className={isActive ? "text-dark" : "text-accent"}>{step.icon}</span>
                                            <span className="text-xs md:text-sm font-bold">{step.title}</span>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Benefit Detail Panel */}
                    <div
                        className="lg:col-span-5 relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative glass p-8 lg:p-10 rounded-3xl border-accent/20 shadow-2xl overflow-hidden group bg-white/[0.02]">
                            {/* Manual Navigation Arrows (Persistent) */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none z-30">
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevStep(); }}
                                    className="w-10 h-10 rounded-full glass border-accent/10 flex items-center justify-center pointer-events-auto hover:bg-accent hover:text-dark transition-all duration-300 opacity-20 group-hover:opacity-100 hover:scale-110 active:scale-95 translate-x-1 group-hover:translate-x-0"
                                    aria-label="Previous step"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextStep(); }}
                                    className="w-10 h-10 rounded-full glass border-accent/10 flex items-center justify-center pointer-events-auto hover:bg-accent hover:text-dark transition-all duration-300 opacity-20 group-hover:opacity-100 hover:scale-110 active:scale-95 -translate-x-1 group-hover:translate-x-0"
                                    aria-label="Next step"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative"
                                >
                                    {/* Decorative background number */}
                                    <div className="absolute -top-6 -right-6 text-9xl font-black text-accent/5 select-none transition-transform group-hover:scale-110 duration-1000">
                                        {activeStep + 1}
                                    </div>

                                    <div className="relative z-10 px-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-dark mb-6 shadow-lg shadow-accent/20">
                                            {steps[activeStep].icon}
                                        </div>

                                        <div className="text-accent font-display font-bold text-sm mb-2 uppercase tracking-[0.2em]">
                                            Step {activeStep + 1} of {steps.length}
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                                            {steps[activeStep].cardTitle}
                                        </h3>

                                        <div className="h-px w-20 bg-accent/30 mb-8" />

                                        <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-8 min-h-[140px]">
                                            {steps[activeStep].description}
                                        </p>

                                        <div className="flex items-center gap-2 text-accent text-sm font-bold">
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                            {isPaused ? "Paused for reading" : steps[activeStep].statusLabel}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Step Indicators */}
                            <div className="flex justify-center lg:justify-start gap-2 mt-8 relative z-20 px-4">
                                {steps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === i
                                            ? 'w-8 bg-accent'
                                            : 'w-2 bg-white/10 hover:bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center max-w-4xl mx-auto"
                >
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <p className="text-2xl md:text-3xl text-white/80 leading-relaxed max-w-3xl mb-8 font-display font-bold">
                            One system. Fully automated. Your business growing while you're on the tools.
                        </p>
                        <Button variant="primary" size="lg" className="px-10 flex items-center gap-3 group" onClick={() => onNavigate('/checkout')}>
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                        </Button>
                        <p className="text-accent text-sm font-bold mt-2">
                            Availability limited by area
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
