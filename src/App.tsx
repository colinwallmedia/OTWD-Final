/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  TrendingUp, 
  Star, 
  MessageSquare, 
  Zap, 
  Smartphone, 
  Inbox, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ShieldAlert,
  MousePointerClick,
  Mail,
  BarChart3,
  Search,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  [key: string]: any;
}) => {
  const variants = {
    primary: 'bg-accent text-dark hover:bg-accent/90 shadow-[0_0_20px_rgba(244,161,0,0.3)]',
    secondary: 'bg-white text-dark hover:bg-white/90',
    outline: 'border border-white/20 text-white hover:bg-white/5'
  };

  return (
    <button 
      className={`px-6 py-3 rounded-full font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/60 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`glass glass-hover p-8 rounded-2xl ${className}`}
  >
    {children}
  </motion.div>
);

// --- Sections ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-display font-bold text-dark text-xl">OTW</div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Off The Wall <span className="text-accent">Digital</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#problem" className="hover:text-accent transition-colors">The Problem</a>
          <a href="#flywheel" className="hover:text-accent transition-colors">The System</a>
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
        </div>

        <div className="hidden md:block">
          <Button variant="primary" className="text-sm py-2 px-5">Book a Call</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#problem" onClick={() => setIsOpen(false)} className="text-lg">The Problem</a>
              <a href="#flywheel" onClick={() => setIsOpen(false)} className="text-lg">The System</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="text-lg">Features</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg">Pricing</a>
              <Button variant="primary" className="w-full">Book a Call</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter text-balance">
          Your Website Should Be <span className="text-accent italic">Working</span> While You Are.
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 text-balance">
          A conversion-optimised website, AI that responds in 60 seconds, and a system that turns 5-star reviews into a flood of new enquiries — all in one.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
      >
        <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
          See How It Works <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
          Book a Free 10-Minute Call
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10"
      >
        {[
          { label: '+38% Enquiry Rate' },
          { label: '£42k Booked in 90 Days' },
          { label: '60 sec AI Response' },
          { label: '4.9★ Rating' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-accent font-display font-bold text-xl md:text-2xl">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
        {/* Trust Badges Placeholders */}
        <div className="font-display font-bold text-xl">TRUSTED TRADES</div>
        <div className="font-display font-bold text-xl">UK BUILT</div>
        <div className="font-display font-bold text-xl">5-STAR RATED</div>
      </div>
    </div>
  </section>
);

const Problem = () => {
  const problems = [
    { icon: <Phone className="text-accent" />, title: "Missed Calls", desc: "Every silent phone is a customer dialling your competitor." },
    { icon: <Clock className="text-accent" />, title: "Slow Replies", desc: "The first to respond wins the job. If it's not you in 60 seconds, it's someone else." },
    { icon: <TrendingUp className="text-accent" />, title: "Lost Leads", desc: "You paid for that click. No follow-up system means money down the drain." },
    { icon: <Inbox className="text-accent" />, title: "Inbox Chaos", desc: "Facebook, WhatsApp, Email, SMS — a notification nightmare with no way to keep track." },
    { icon: <Zap className="text-accent" />, title: "Zero Follow-Up", desc: "80% of sales happen after the 5th contact. Most businesses stop at zero." },
    { icon: <Smartphone className="text-accent" />, title: "Weak Website", desc: "If your site looks outdated, customers won't trust you with their modern projects." },
    { icon: <Star className="text-accent" />, title: "Bad Reviews", desc: "No review system means no control over your reputation." }
  ];

  return (
    <section id="problem" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Cost of Doing Business the Old Way" 
          subtitle="Most tradespeople are losing thousands every month because their digital front door is broken."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-8 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-xl font-display font-bold">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionIntro = () => (
  <section className="py-20 bg-accent text-dark text-center">
    <div className="max-w-4xl mx-auto px-6">
      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold leading-tight"
      >
        We don't just build websites. We build systems that make you the most responsive business in your area.
      </motion.p>
    </div>
  </section>
);

const Flywheel = () => {
  const steps = [
    "Website captures lead",
    "AI responds in 60 seconds",
    "CRM manages conversation",
    "Job gets booked",
    "Review request sent",
    "5-star reviews boost Google Maps ranking",
    "More leads find you",
    "Repeat"
  ];

  return (
    <section id="flywheel" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Growth Flywheel" 
          subtitle="A self-sustaining loop that grows your business while you're on the tools."
        />

        <div className="relative flex flex-col items-center">
          {/* Animated Loop Visualization */}
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            {/* Rotating Outer Ring */}
            <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full animate-flywheel" />
            
            {/* Center Logo/Icon */}
            <div className="z-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(244,161,0,0.4)]">
              <TrendingUp className="w-16 h-16 text-dark" />
            </div>

            {/* Steps positioned around the circle */}
            {steps.map((step, i) => {
              const angle = (i / steps.length) * Math.PI * 2;
              const radius = 45; // percentage
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap z-20 border-accent/30"
                >
                  {step}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile List Version (for better readability on small screens) */}
          <div className="md:hidden mt-12 space-y-4 w-full">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4 glass p-4 rounded-xl">
                <div className="w-8 h-8 bg-accent text-dark rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Smartphone />, title: "Lead-Gen Website", desc: "A 24/7 salesperson that closes deals while you're on the tools." },
    { icon: <Clock />, title: "AI Chat — 60 Seconds", desc: "Responds to every enquiry instantly. Even at 11pm on a Sunday." },
    { icon: <MessageSquare />, title: "Missed Call Text-Back", desc: "Can't answer? An automatic text fires back the moment a call goes unanswered." },
    { icon: <Inbox />, title: "One Inbox", desc: "WhatsApp, Insta, FB, SMS, Email — every message in one place." },
    { icon: <Star />, title: "5-Star Review Engine", desc: "Automated review requests that push you higher in Google Maps." },
    { icon: <Smartphone />, title: "Mobile App", desc: "Manage leads, messages and your business from any job site." }
  ];

  return (
    <section id="features" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Everything You Need. Nothing You Don't." 
          subtitle="Built specifically for trades businesses who want to dominate their local area."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover p-8 rounded-2xl group"
            >
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { step: "01", title: "We Build Your Site", desc: "Conversion-optimised, fast, and built to close." },
    { step: "02", title: "We Plug In the System", desc: "AI, inbox and reviews connected and live in 48 hours." },
    { step: "03", title: "You Win More Jobs", desc: "Focus on the tools. We handle everything else." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="From Zero to Live in 48 Hours" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 -z-10" />

          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-8 shadow-[0_0_30px_rgba(244,161,0,0.3)]">
                {s.step}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
              <p className="text-white/60 text-lg">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const features = [
    "Lead-Gen Website", "AI Chat Widget", "Missed Call Text-Back", 
    "All-in-One CRM", "Unified Inbox", "5-Star Review Engine", 
    "Full Mobile App", "Broadcast Messaging", "Zero Setup Fees", "No Contracts"
  ];

  return (
    <section id="pricing" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Simple, Transparent Pricing" />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="border-accent/30 relative overflow-hidden">
            {/* Accent Badge */}
            <div className="absolute top-0 right-0 bg-accent text-dark px-6 py-2 rounded-bl-2xl font-bold text-sm uppercase tracking-wider">
              Most Popular
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-accent font-display font-bold text-6xl mb-2">£297<span className="text-xl text-white/40">/month</span></div>
                <p className="text-white/60 mb-8">No contracts. Live in 48 hours. Cancel anytime.</p>
                
                <div className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" className="w-full py-4 text-lg">Get Started Now</Button>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h4 className="text-xl font-display font-bold mb-6">Value Comparison</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60">Agency Website</span>
                    <span className="font-bold">£3,000+</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60">AI Chat Software</span>
                    <span className="font-bold">£99/mo</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60">CRM & Inbox</span>
                    <span className="font-bold">£150/mo</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-accent font-bold">Our System</span>
                    <span className="text-accent font-bold">£297/mo</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20 italic text-center text-accent">
                  "One new job a month pays for everything."
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Dave M.", role: "DM Plumbing, Leeds", quote: "Turns out it runs my entire business. The AI replied to two enquiries before I even saw the notification." },
    { name: "Sarah J.", role: "Bright Spark Electricians, Kent", quote: "Booked three jobs while eating a bacon roll. Paid for itself in the first week." },
    { name: "Mike R.", role: "Elevated Roofing, Manchester", quote: "Customers think I hired an office team. It's just this system doing all the heavy lifting." }
  ];

  return (
    <section className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
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

const FinalCTA = () => (
  <section className="py-24 bg-dark relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -z-10" />

    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight"
      >
        Stop Losing Jobs to Businesses That Are Less Skilled Than You.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-white/60 mb-12"
      >
        No setup fees. No contracts. Just more booked jobs.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
      >
        <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-5">
          Book My Free Call <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-5">
          Call Us Now
        </Button>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-accent font-semibold flex items-center justify-center gap-2"
      >
        <ShieldAlert className="w-5 h-5" />
        Availability limited by area — claim your patch before a competitor does.
      </motion.p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-dark">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-display font-bold text-dark text-lg">OTW</div>
        <span className="font-display font-bold text-lg tracking-tight">Off The Wall <span className="text-accent">Digital</span></span>
      </div>

      <div className="text-white/40 text-sm">
        © {new Date().getFullYear()} Off The Wall Digital. All rights reserved.
      </div>

      <div className="flex items-center gap-6 text-white/40 text-sm">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <SolutionIntro />
        <Flywheel />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
