import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../components/ui/SectionHeading';

type LegalSection = 'terms' | 'privacy';

export const Legal = () => {
    const [activeSection, setActiveSection] = useState<LegalSection>('terms');

    const content = {
        terms: {
            title: "Terms & Conditions",
            lastUpdated: "Last updated: February 22, 2026",
            paragraphs: [
                "By using Off The Wall Digital's services, you agree to these terms. Our system is designed to provide automated lead generation and business management tools for tradespeople.",
                "Service Availability: While we strive for 100% uptime, our automated AI agents and website services are dependent on third-party infrastructure. We do not guarantee uninterrupted service.",
                "Subscription: Your monthly fee of £297 covers the full suite of tools. You can cancel at any time. No partial refunds are provided for the current billing cycle.",
                "Intellectual Property: Any content we create for your website remains yours upon full payment, but the underlying system architecture and AI logic are the property of Off The Wall Digital."
            ]
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: February 22, 2026",
            paragraphs: [
                "Your privacy is critical. We only collect data that is necessary for the system to function—such as customer enquiries, contact details, and calendar availability.",
                "Data Usage: Lead information captured by your website or AI agent is used strictly for your business operations. We never sell your data to third parties.",
                "Data Storage: All customer data is stored in secure, encrypted environments compliant with UK data protection standards.",
                "AI Interactions: AI agent transcripts are stored for quality control and to help the system better understand your business needs over time."
            ]
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
            <div className="container-tight">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center gap-4 mb-12">
                        {(['terms', 'privacy'] as const).map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeSection === section
                                    ? 'bg-accent text-dark shadow-[0_0_20px_var(--accent-color)]'
                                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {content[section].title}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="glass p-10 md:p-16 rounded-[40px] border border-white/5 shadow-3xl space-y-8"
                        >
                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-display font-black text-white">
                                    {content[activeSection].title}
                                </h1>
                                <p className="text-accent/60 font-medium uppercase tracking-widest text-xs">
                                    {content[activeSection].lastUpdated}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {content[activeSection].paragraphs.map((p, i) => (
                                    <p key={i} className="text-white/60 text-lg md:text-xl leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-16 text-center text-white/20 text-sm">
                        For any legal inquiries, please contact: <span className="text-white/40 font-bold">legal@offthewall.digital</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
