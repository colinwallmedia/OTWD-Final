import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, TrendingUp, ArrowRight, ArrowLeft, RotateCw, MousePointer2, MessageCircle, MessageSquare, Instagram, Mail, Phone, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

// Local UI components for the mocks

const WhatsAppMock = ({ contact, messages }: { contact: string, messages: any[] }) => {
    return (
        <div className="bg-[#0b141a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-md mx-auto relative group">
            {/* Header */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white font-medium shrink-0">
                    {contact.charAt(0)}
                </div>
                <div className="font-semibold text-white/90 truncate">{contact}</div>
            </div>
            {/* Body */}
            <div className="bg-[#0b141a] px-4 py-6 flex flex-col gap-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className="flex flex-col">
                        {msg.timeLabel && (
                            <div className="text-center text-xs text-white/40 mb-3 mt-1 uppercase tracking-wider">{msg.timeLabel}</div>
                        )}
                        <div className={`max-w-[85%] rounded-lg px-3 py-2 text-sm text-white/90 shadow-sm ${msg.isSent ? 'bg-[#005c4b] self-end rounded-tr-none' : 'bg-[#202c33] self-start rounded-tl-none'}`}>
                            {msg.text}
                            <div className="text-[10px] text-white/50 text-right mt-1.5 flex justify-end items-center gap-1">
                                {msg.time}
                                {msg.isSent && <span className="text-blue-400">Read</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const GoogleSearchMock = () => {
    return (
        <div className="bg-[#202124] rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-md mx-auto p-4 sm:p-6 text-left">
            <div className="bg-[#303134] rounded-full px-4 py-3 flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-white/50" />
                <span className="text-white/80 text-sm">plumbers near me</span>
            </div>

            <div className="flex flex-col gap-5">
                {/* Result 1 */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-white/40 font-display font-bold">1.</span>
                        <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">Mike's Plumbing</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/80 pl-6">
                        <span className="font-bold">5.0</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent border-0" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(154 reviews)</span>
                    </div>
                </div>
                {/* Result 2 */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-white/40 font-display font-bold">2.</span>
                        <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">AquaFix Heating</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/80 pl-6">
                        <span className="font-bold">5.0</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(89 reviews)</span>
                    </div>
                </div>
                {/* Result 3 */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-white/40 font-display font-bold">3.</span>
                        <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">Rapid Response Drains</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/80 pl-6">
                        <span className="font-bold">4.9</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(42 reviews)</span>
                    </div>
                </div>

                <div className="h-px bg-white/5 my-1" />

                {/* Your Business at 56 */}
                <div className="flex flex-col gap-1 relative py-2">
                    <div className="flex items-center gap-2">
                        <span className="text-white/40 font-display font-bold">56.</span>
                        <div className="relative">
                            {/* Hand-drawn marker circle around the name */}
                            <div className="absolute -inset-x-8 -inset-y-4 pointer-events-none z-20">
                                <svg viewBox="0 0 240 60" fill="none" className="w-full h-full preserve-3d overflow-visible">
                                    <motion.path
                                        d="M5,30 C5,5 235,5 235,30 C235,55 5,55 8,35"
                                        stroke="#ef4444"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.9 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                                        style={{ filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.4))' }}
                                    />
                                </svg>
                            </div>
                            <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">Your Plumbing Business</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-white/80 pl-8">
                        <span className="font-bold">5.0</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(1 review) • 3 years ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GoogleReviewMock = () => {
    return (
        <div className="bg-[#202124] rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-md mx-auto p-4 sm:p-6 text-left">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-800 flex items-center justify-center text-white font-medium shrink-0">
                    G
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="text-white/90 font-medium">Gary P.</div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 text-white/20" />
                            <Star className="w-3.5 h-3.5 text-white/20" />
                            <Star className="w-3.5 h-3.5 text-white/20" />
                            <Star className="w-3.5 h-3.5 text-white/20" />
                        </div>
                        <span className="text-xs text-white/50">Posted 3 weeks ago</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Turned up late, no communication. Wouldn't recommend.
                    </p>

                    <div className="mt-4 bg-[#303134] p-3 rounded-lg border border-red-500/30 flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors pointer-events-none" />
                        <div className="flex items-center justify-between">
                            <div className="text-xs text-white/40 uppercase tracking-widest font-semibold flex items-center gap-2">
                                Owner Response
                            </div>
                            <div className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/40 text-[10px] text-red-500 font-bold uppercase tracking-wider">
                                Unanswered
                            </div>
                        </div>
                        <div className="text-sm text-white/90 font-medium italic">
                            No reply provided.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BrowserMock = () => {
    return (
        <div className="bg-[#202124] rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full max-w-md mx-auto text-left relative group">
            {/* Browser top bar */}
            <div className="bg-[#303134] px-4 py-3 flex items-center gap-3 border-b border-white/10">
                <div className="p-1 rounded bg-white/5 flex items-center justify-center relative hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 bg-red-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ArrowLeft className="w-4 h-4 text-white/80" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <RotateCw className="w-4 h-4 text-white/50" />
                <div className="flex-1 bg-[#202124] rounded-md h-7 flex items-center px-3 gap-2 text-xs truncate">
                    <div className="flex items-center gap-1 text-red-500 font-medium shrink-0">
                        <AlertCircle className="w-3 h-3" />
                        <span>Not secure</span>
                    </div>
                    <span className="text-white/30">unsecured-domain.com</span>
                </div>
            </div>
            {/* Cluttered outdated page content */}
            <div className="p-6 bg-[#e0e0e0] text-gray-800 min-h-[220px]">
                <div className="text-xl font-bold font-serif mb-4 text-center">Your Local Plumbing Est 1994</div>
                <div className="text-xs text-center text-blue-800 underline mb-4">Click here to enter site</div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-16 bg-gray-300 border border-gray-400 flex items-center justify-center text-[10px] text-gray-500">Image broken</div>
                    <div className="h-16 bg-gray-300 border border-gray-400 flex items-center justify-center text-[10px] text-gray-500">Image broken</div>
                </div>
                <div className="mt-6 text-xs text-center text-gray-500">
                    Warning: Page loads extremely slowly
                </div>
            </div>

            {/* Mouse click animation */}
            <motion.div
                animate={{ x: [40, -145], y: [60, -90], scale: [1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute bottom-10 right-10 z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            >
                <MousePointer2 className="w-8 h-8 text-black" fill="white" />
            </motion.div>
        </div>
    );
};

const NotificationMock = () => {
    return (
        <div className="bg-black rounded-3xl overflow-hidden border-[6px] border-[#303134] shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-[280px] mx-auto text-left aspect-[9/18] relative flex flex-col pb-8">
            <div className="w-1/2 h-5 bg-black absolute top-0 left-1/4 rounded-b-xl z-10" />
            <div className="pt-10 pb-2 text-center text-white font-medium text-4xl tracking-tight">
                07:00
            </div>
            <div className="text-center text-white/50 text-xs mb-6 font-medium">
                Tuesday, 14 October
            </div>

            <div className="flex flex-col gap-2.5 px-3 flex-1 overflow-visible">
                {/* WhatsApp */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white/90 text-sm">WhatsApp</span>
                            <span className="text-white/50 text-xs">now</span>
                        </div>
                        <span className="text-white/80 text-sm truncate">4 unread messages</span>
                    </div>
                </div>

                {/* Messenger */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-[#0084FF] flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white/90 text-sm">Messenger</span>
                            <span className="text-white/50 text-xs">15m</span>
                        </div>
                        <span className="text-white/80 text-sm truncate">2 new messages</span>
                    </div>
                </div>

                {/* Instagram */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white/90 text-sm">Instagram</span>
                            <span className="text-white/50 text-xs">1h</span>
                        </div>
                        <span className="text-white/80 text-sm truncate">1 new DM</span>
                    </div>
                </div>

                {/* Mail */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white/90 text-sm">Mail</span>
                            <span className="text-white/50 text-xs">2h</span>
                        </div>
                        <span className="text-white/80 text-sm truncate">3 unread emails</span>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 flex gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-[#34c759] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div className="flex flex-col overflow-hidden w-full">
                        <div className="flex justify-between items-center w-full">
                            <span className="font-semibold text-white/90 text-sm">Phone</span>
                            <span className="text-white/50 text-xs">3h</span>
                        </div>
                        <span className="text-white/80 text-sm truncate">2 missed calls</span>
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-4 flex justify-center">
                <div className="w-1/3 h-1 bg-white/30 rounded-full" />
            </div>
        </div>
    );
};

const SCENES = [
    {
        mock: <NotificationMock />,
        title: "The Inbox Spiral",
        caption: "It's 7am. You haven't even got your boots on. One of those is an £850 job. By the time you find it, they've already moved on.",
        subline: "You didn't start a trade business to spend your mornings buried in WhatsApp messages, emails, and missed calls. Every disorganised channel is another hole in your bucket where good jobs quietly slip away.",
        impactExplainer: "Losing out on just 1 job a week can easily amount to over £1800 (avg job £450)",
        loss: "Lost: £1800"
    },
    {
        mock: <GoogleSearchMock />,
        title: "The Invisible Tradesperson",
        caption: "You were 10 minutes away. Dave didn't know you existed.",
        subline: "He went with a competitor who does worse work but has a better Google ranking. Being the best kept secret in town does not pay the bills, it just hands easy money to the businesses that actually show up when customers search.",
        impactExplainer: "Missing 2 jobs a week because you're invisible online easily amounts to £3600 (avg job £450)",
        loss: "Lost: £3600"
    },
    {
        mock: <BrowserMock />,
        title: "Judged in 3 Seconds",
        caption: "They did not call. They did not enquire. They just left. You will never know they were even there.",
        subline: "Your website is your digital shopfront. In 2026, customers decide in 3 seconds whether you are a professional or a cowboy. If your site is slow, broken or looks like it was built in 1994, they will not call. They will simply move on to the next name on Google.",
        impactExplainer: "A bad website bounces good customers. Losing 1 job a week costs you £1800 (avg job £450)",
        loss: "Lost: £1800"
    },
    {
        mock: <GoogleReviewMock />,
        title: "The Silent Reputation Killer",
        caption: "You never saw it. 23 potential customers did before you even finished your morning coffee.",
        subline: "One unfair review from a nightmare customer sits at the top of your profile, poisoning your reputation while you are busy working. Because you are too busy to respond, a hundred happy customers stay quiet, leaving a single local troll to decide whether you get booked or not.",
        impactExplainer: "One bad review can deter dozens of local customers. That reputational damage easily costs £2000 a month in lost bookings.",
        loss: "Lost: £2000"
    },
    {
        mock: (
            <WhatsAppMock
                contact="Sarah M."
                messages={[
                    { text: "Hi, can I get a quote for a new bathroom? Looking to start ASAP.", time: "5:47 pm", isSent: false, timeLabel: "YESTERDAY" },
                    { text: "Sorry, was tied up on a job all day. How can I help?", time: "6:27 pm", isSent: true, timeLabel: "TODAY" },
                    { text: "No worries, I found someone else. Thanks anyway.", time: "6:29 pm", isSent: false }
                ]}
            />
        ),
        title: "Buried in the Job",
        caption: "You were buried in a job yesterday. You finally saw the message today. By then, the job was already gone.",
        subline: "Modern customers expect Amazon-level speed. While you were elbows deep in work, they moved on to the next number on Google. In the digital age, speed is the only loyalty that matters. If you are not the first to reply, you are simply the last to know.",
        impactExplainer: "Being too slow to reply costs you 1 job a week, easily amounting to £1800 (avg job £450)",
        loss: "Lost: £1800"
    },
    {
        mock: (
            <WhatsAppMock
                contact="Tom B."
                messages={[
                    { text: "Hi Tom, just sent that quote over for the extension. Let me know if you have any questions.", time: "4:30 pm", isSent: true, timeLabel: "2 WEEKS AGO" },
                    { text: "Thanks, received. Need to think about it and speak to the wife.", time: "2:14 pm", isSent: false },
                    { text: "Went with someone else in the end. We hadn't heard from you so assumed you were too busy for the work. Sorry mate.", time: "9:05 am", isSent: false, timeLabel: "YESTERDAY" }
                ]}
            />
        ),
        title: "Working for Free",
        caption: "You drove out, measured up and priced it. Then you let it slip through your fingers.",
        subline: "You did the hard work, but you were too busy to follow up. While your perfectly good quote sat buried in their inbox, a competitor who was more organised swooped in and took the job. One automated follow-up text would have won it. Instead, you just spent your evening working for free.",
        impactExplainer: "Forgetting to follow up on high-value quotes costs you 1-2 jobs a month. That is up to £2400 left on the table.",
        loss: "Lost: £2400"
    },
    {
        mock: (
            <WhatsAppMock
                contact="Dave"
                messages={[
                    { text: "Invoice sent.", time: "4:00 pm", isSent: true, timeLabel: "3 WEEKS AGO" },
                    { text: "Hi Dave, just checking you received the invoice?", time: "9:30 am", isSent: true, timeLabel: "2 WEEKS AGO" },
                    { text: "Yeah sorry mate, been busy, will sort it tonight.", time: "11:15 am", isSent: false },
                    { text: "Hi Dave, invoice is still outstanding. Can you please confirm payment?", time: "5:15 pm", isSent: true, timeLabel: "YESTERDAY" }
                ]}
            />
        ),
        title: "The Unpaid Debt Collector",
        caption: "You did the work perfectly. Now you have to beg to get paid.",
        subline: "You did not start a business to play debt collector. The awkward texts, the lost Saturday mornings and the constant cash flow anxiety are draining your energy. You are essentially working for free until that money hits your account. Every minute spent chasing an old invoice is a minute you could be earning on a new job or spending with your family.",
        impactExplainer: "Chasing invoices wastes 4 hours of your time every single week. That is 16 hours a month you could be earning on the tools or spending at home.",
        loss: "Lost: 16 Hours Admin"
    }
];

const StoryScene = ({ mock, title, caption, subline, impactExplainer, loss, isActive }: { mock: React.ReactNode, title: React.ReactNode, caption: React.ReactNode, subline?: React.ReactNode, impactExplainer?: React.ReactNode, loss?: string, isActive: boolean }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto py-8 lg:py-12 h-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
                <div className="relative inline-block mx-auto lg:mx-0 w-fit">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 relative z-10">
                        {title}
                    </h3>
                    <motion.div
                        className="absolute -bottom-1 left-0 h-1 bg-accent/80 rounded-full z-0"
                        initial={{ width: 0, opacity: 0 }}
                        animate={isActive ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    />
                </div>
                <p className="text-xl md:text-2xl font-display font-medium leading-tight text-white/90 tracking-tight mt-2">
                    {caption}
                </p>
                {subline && (
                    <p className="text-white/60 leading-relaxed mt-2">
                        {subline}
                    </p>
                )}
                {impactExplainer && (
                    <p className="text-base text-accent font-medium leading-relaxed mt-4">
                        {impactExplainer}
                    </p>
                )}
                {loss && (
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-5 py-3 mt-6 rounded-full border border-accent/40 bg-accent/10 text-accent font-bold text-base w-fit mx-auto lg:mx-0 shadow-[0_0_30px_rgba(244,161,0,0.2)]">
                        <TrendingUp className="w-5 h-5" />
                        {loss}
                    </div>
                )}
            </div>
            <div className="w-full lg:w-1/2">
                <div className="relative">
                    {/* Glow effect behind mock */}
                    <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full -z-10" />
                    {mock}
                </div>
            </div>
        </div>
    );
};

interface ProblemProps {
    onNavigate: (path: string) => void;
}

export const Problem = ({ onNavigate }: ProblemProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    const nextScene = React.useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % SCENES.length);
    }, []);

    const prevScene = React.useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + SCENES.length) % SCENES.length);
    }, []);

    React.useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextScene, 30000);
        return () => clearInterval(interval);
    }, [isPaused, nextScene]);

    return (
        <section id="problem" className="overflow-hidden">
            <div className="container-tight relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-6"
                >
                    <SectionHeading
                        title={<>Your Business is a <span className="text-accent">Leaky Bucket</span></>}
                        subtitle="You're losing jobs, money and time every single day without even knowing about it. Here's what that actually looks like."
                    />
                </motion.div>

                <div
                    className="relative min-h-[700px] lg:min-h-[600px] group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative z-10">
                        <div className="pt-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <StoryScene
                                        {...SCENES[activeIndex]}
                                        isActive={true}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Manual Controls Below */}
                        <div className="flex flex-col items-center gap-6 mt-6 mb-8">
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={(e) => { e.preventDefault(); prevScene(); }}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-110 active:scale-95 text-white"
                                    aria-label="Previous scenario"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>

                                <div className="flex gap-2">
                                    {SCENES.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-accent' : 'w-2 bg-white/10 hover:bg-white/20'}`}
                                            aria-label={`Go to scenario ${i + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={(e) => { e.preventDefault(); nextScene(); }}
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-110 active:scale-95 text-white"
                                    aria-label="Next scenario"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="text-white/30 text-sm font-medium uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-px bg-white/10" />
                                Scenario {activeIndex + 1} of {SCENES.length}
                                <span className="w-8 h-px bg-white/10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-balance">
                            That's <span className="relative inline-block">
                                <span className="text-accent">£13,400</span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                    className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                                />
                            </span> gone. This month alone.
                        </h2>
                        <p className="text-description mb-4">
                            And you didn't know about any of it.
                        </p>
                        <Button variant="primary" size="lg" className="mt-4 px-10" onClick={() => onNavigate('#solution')}>
                            See The Solution <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

