import React from 'react';
import { motion } from 'motion/react';
import { Search, Star, TrendingUp, ArrowRight, ArrowLeft, RotateCw, MousePointer2, MessageCircle, MessageSquare, Instagram, Mail, Phone } from 'lucide-react';
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
                                {msg.isSent && <span className="text-blue-400">✓✓</span>}
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
                    <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">Mike's Plumbing</div>
                    <div className="flex items-center gap-1 text-sm text-white/80">
                        <span className="font-bold">5.0</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent border-0" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(47)</span>
                    </div>
                </div>
                {/* Result 2 */}
                <div className="flex flex-col gap-1">
                    <div className="text-blue-400 text-lg hover:underline cursor-pointer font-medium">AquaFix Heating</div>
                    <div className="flex items-center gap-1 text-sm text-white/80">
                        <span className="font-bold">5.0</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                        </div>
                        <span className="text-white/50">(31)</span>
                    </div>
                </div>
                {/* Greyed out user */}
                <div className="flex flex-col gap-1 opacity-20 blur-[1px] grayscale">
                    <div className="text-blue-400 text-lg">Your Business Name</div>
                    <div className="flex items-center gap-1 text-sm text-white/80">
                        <span className="font-bold">3.2</span>
                        <div className="flex text-accent">
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 fill-accent" />
                            <Star className="w-3.5 h-3.5 text-white/30" />
                            <Star className="w-3.5 h-3.5 text-white/30" />
                        </div>
                        <span className="text-white/50">(2)</span>
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
                        <span className="text-xs text-white/50">3 weeks ago</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Turned up late, no communication. Wouldn't recommend.
                    </p>

                    <div className="mt-4 bg-[#303134] p-3 rounded-lg border border-red-500/20 flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors pointer-events-none" />
                        <div className="text-xs text-white/40 uppercase tracking-widest font-semibold flex items-center gap-2">
                            Owner Response
                        </div>
                        <div className="text-sm text-white/50 italic">
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
                <div className="flex-1 bg-[#202124] rounded-md h-7 flex items-center px-3 text-xs text-white/50 truncate">
                    http://unsecured-domain.com
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

const StoryScene = ({ mock, title, caption, subline, impactExplainer, loss, index }: { mock: React.ReactNode, title: React.ReactNode, caption: React.ReactNode, subline?: React.ReactNode, impactExplainer?: React.ReactNode, loss?: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-5xl mx-auto py-16 lg:py-24 border-b border-white/5 last:border-0"
        >
            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                    {/* Glow effect behind mock */}
                    <div className="absolute inset-0 bg-accent/10 blur-[60px] rounded-full -z-10" />
                    {mock}
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
                <div className="relative inline-block mx-auto lg:mx-0 w-fit">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 relative z-10">
                        {title}
                    </h2>
                    <motion.div
                        className="absolute -bottom-1 left-0 h-1 bg-accent/80 rounded-full z-0"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '100%', opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight text-white/90 tracking-tight mt-2">
                    {caption}
                </h3>
                {subline && (
                    <p className="text-lg text-white/60 leading-relaxed mt-2">
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
        </motion.div>
    );
};

export const Problem = () => {
    return (
        <section id="problem" className="bg-dark py-24 md:py-32">
            <div className="container-tight">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <SectionHeading
                        title={<>Your Business is a <span className="text-accent">Leaky Bucket</span></>}
                        subtitle="You're losing jobs, money and time every single day without even knowing about it. Here's what that actually looks like."
                    />
                </motion.div>

                <div className="flex flex-col mt-4">
                    {/* Scene 1: The Inbox Spiral (Inbox Chaos) */}
                    <StoryScene
                        index={0}
                        mock={<NotificationMock />}
                        title="The Inbox Spiral"
                        caption="It's 7am. You haven't even got your boots on. One of those is an £850 job. By the time you find it, they've already moved on."
                        subline="You didn't start a trade business to spend your mornings buried in WhatsApp messages, emails, and missed calls. Every disorganised channel is another hole in your bucket where good jobs quietly slip away."
                        impactExplainer="Losing out on just 1 job a week can easily amount to over £1800 (avg job £450)"
                        loss="Lost: £1800"
                    />

                    {/* Scene 2: The Google Search (Lost Leads) */}
                    <StoryScene
                        index={1}
                        mock={<GoogleSearchMock />}
                        title="The Invisible Tradesperson"
                        caption="You were 10 minutes away. Dave didn't know you existed."
                        subline="He went with a competitor who does worse work but has a better Google ranking. Being the best kept secret in town does not pay the bills, it just hands easy money to the businesses that actually show up when customers search."
                        impactExplainer="Missing 2 jobs a week because you're invisible online easily amounts to £3600 (avg job £450)"
                        loss="Lost: £3600"
                    />

                    {/* Scene 3: The 3-Second Bounce (Weak Website) */}
                    <StoryScene
                        index={2}
                        mock={<BrowserMock />}
                        title="The 3-Second Bounce"
                        caption="They didn't call. They didn't enquire. They just left. You'll never know they were even there."
                        subline="Your website is your shopfront. In 2026, customers decide in 3 seconds whether to trust you. No real photos of your work, no visible reviews, no easy way to contact you and they're gone."
                        impactExplainer="A bad website bounces good customers. Losing 1 job a week costs you £1800 (avg job £450)"
                        loss="Lost: £1800"
                    />

                    {/* Scene 4: The Review Ambush (Bad Reviews) */}
                    <StoryScene
                        index={3}
                        mock={<GoogleReviewMock />}
                        title="The Review Ambush"
                        caption="You never saw it. 23 people did before you did."
                        subline="One unfair review from a nightmare customer sits at the top of your profile, poisoning your reputation while you are busy working. A hundred happy customers stay quiet, leaving the local troll to ruin your bookings."
                        impactExplainer="One bad review can deter dozens of local customers. That reputational damage easily costs £2000 a month in lost bookings."
                        loss="Lost: £2000"
                    />

                    {/* Scene 5: The WhatsApp Ghost (Missed Enquiries) */}
                    <StoryScene
                        index={4}
                        mock={
                            <WhatsAppMock
                                contact="Sarah M."
                                messages={[
                                    { text: "Hi, can I get a quote for a new bathroom? Looking to start ASAP", time: "5:47 pm", isSent: false, timeLabel: "Today" },
                                    { text: "No worries, found someone else 👍", time: "8:12 pm", isSent: false }
                                ]}
                            />
                        }
                        title="The WhatsApp Ghost"
                        caption="You were on a job. You didn't see it until 9pm. Job gone."
                        subline="Customers expect Amazon-level speed. While you were elbows deep in a job, they moved on to the next number on Google. Speed is the new loyalty, and if you are not the first to reply, you are the last to know."
                        impactExplainer="Being too slow to reply costs you 1 job a week, easily amounting to £1800 (avg job £450)"
                        loss="Lost: £1800"
                    />

                    {/* Scene 6: The Follow-Up That Never Came (Zero Follow-Up) */}
                    <StoryScene
                        index={5}
                        mock={
                            <WhatsAppMock
                                contact="Tom B."
                                messages={[
                                    { text: "Thanks for the quote, need to think about it", time: "2:14 pm", isSent: false, timeLabel: "2 weeks ago" },
                                    { text: "Went with someone else in the end, sorry mate", time: "9:05 am", isSent: false, timeLabel: "Yesterday" }
                                ]}
                            />
                        }
                        title="The Quote That Went Cold"
                        caption="One automated follow-up text would have won it. It never sent."
                        subline="You drove out, measured up, priced it out, and sent it over. Then... silence. You were too busy to follow up, and a competitor swooped in while your perfectly good quote sat buried in their inbox."
                        impactExplainer="Forgetting to follow up on high-value quotes costs you 1-2 jobs a month. That's up to £2400 left on the table."
                        loss="Lost: £2400"
                    />

                    {/* Scene 7: The Invoice Black Hole (Admin / Time) */}
                    <StoryScene
                        index={6}
                        mock={
                            <WhatsAppMock
                                contact="Dave"
                                messages={[
                                    { text: "Invoice sent ✓", time: "4:00 pm", isSent: true, timeLabel: "3 weeks ago" },
                                    { text: "Just checking you received the invoice?", time: "9:30 am", isSent: true, timeLabel: "2 weeks ago" },
                                    { text: "Yeah sorry mate, been busy, will sort it", time: "11:15 am", isSent: false },
                                    { text: "Hi Dave, invoice still outstanding...", time: "5:15 pm", isSent: true, timeLabel: "Yesterday" }
                                ]}
                            />
                        }
                        title="The Invoice Black Hole"
                        caption="45 minutes chasing money you already earned. Every. Single. Month."
                        subline="You did the work perfectly, but now you have to play debt collector. The awkward texts, the lost Saturday mornings, the cash flow anxiety. You are working for free until that money actually hits your bank account."
                        impactExplainer="Chasing invoices wastes 4 hours of your time every single week. That's 16 hours a month you could be earning on the tools or spending at home."
                        loss="Lost: 16 Hours Admin"
                    />
                </div>

                {/* Bottom CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                            That's <span className="text-accent underline decoration-2 underline-offset-8">£13,400</span> gone. This month alone.
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 font-medium mb-4">
                            And you didn't know about any of it.
                        </p>
                        <Button variant="primary" size="lg" className="mt-4 px-10" href="#flywheel">
                            See The Solution <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
