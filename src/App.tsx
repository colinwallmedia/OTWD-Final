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
  Users,
  Palette,
  PoundSterling,
  Monitor,
  Layout
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
    primary: 'bg-accent text-dark hover:bg-accent/90 shadow-lg shadow-accent/20',
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

// --- Themes ---

const THEMES = [
  { name: 'Amber', color: '#f4a100' },
  { name: 'Green', color: '#00df9a' },
  { name: 'Neon', color: '#D1FE17' }
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const toggleTheme = () => {
    const next = (currentTheme + 1) % THEMES.length;
    setCurrentTheme(next);
    document.documentElement.style.setProperty('--accent-color', THEMES[next].color);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/10 transition-all flex items-center gap-2 group"
      title="Switch Theme"
    >
      <Palette className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold uppercase tracking-widest hidden lg:block">{THEMES[currentTheme].name}</span>
    </button>
  );
};

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
          <span className="font-display font-bold text-xl tracking-tight">Off The Wall <span className="text-accent">Digital</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#problem" className="hover:text-accent transition-colors">The Problem</a>
          <a href="#flywheel" className="hover:text-accent transition-colors">The System</a>
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="primary" className="text-sm py-2 px-5">Book a Call</Button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
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

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 1. Pill Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold mb-8"
        >
          <Star className="w-4 h-4 fill-accent" />
          <span>From First Enquiry to 5-Star Review</span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tighter text-balance"
        >
          Your Website Should Be <span className="text-accent italic">Working</span> While You Are.
        </motion.h1>

        {/* 3. Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-8 leading-relaxed text-balance"
        >
          Every enquiry answered within 60 seconds, quote and book jobs, outrank your competitors so the enquiries come to you first. Automatically.
        </motion.p>

        {/* 4. Objection Killer Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-12 mt-12"
        >
          No Tech Skill Required - Managed from the palm of your hand
        </motion.p>

        {/* 5. CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
            See How It Works <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
            Book a Free 10-Minute Call
          </Button>
        </motion.div>

        {/* 6. Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
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
          <div className="font-display font-bold text-xl">TRUSTED TRADES</div>
          <div className="font-display font-bold text-xl">UK BUILT</div>
          <div className="font-display font-bold text-xl">5-STAR RATED</div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    { icon: <MessageSquare className="text-accent" />, title: "Missed Enquiries", desc: "Every unanswered message is a customer moving on to your competitor." },
    { icon: <Clock className="text-accent" />, title: "Slow Replies", desc: "The first to reply wins the job. If you're not responding in 60 seconds, someone else already is." },
    { icon: <TrendingUp className="text-accent" />, title: "Lost Leads", desc: "You paid for that enquiry. No follow-up system means money straight down the drain." },
    { icon: <Inbox className="text-accent" />, title: "Inbox Chaos", desc: "WhatsApp, Instagram, Email, text: messages everywhere, jobs slipping through the cracks." },
    { icon: <Zap className="text-accent" />, title: "Zero Follow-Up", desc: "80% of jobs are won after the 5th contact. Most businesses give up after the first." },
    { icon: <Smartphone className="text-accent" />, title: "Weak Website", desc: "If your site looks outdated, customers won't trust you before you've even said hello." },
    { icon: <Star className="text-accent" />, title: "Bad Reviews", desc: "One bad review can cost you ten jobs. Without a system, you're leaving your reputation to chance." }
  ];

  return (
    <section id="problem" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Sound Familiar?" 
          subtitle="Most tradespeople are losing thousands every month to problems they don't even know they have."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 0 20px rgba(244, 161, 0, 0.15)",
                borderColor: "rgba(244, 161, 0, 0.3)"
              }}
              className="glass p-8 rounded-2xl flex flex-col gap-4 border border-white/5 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group"
              >
                <div className="group-hover:animate-pulse">
                  {p.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-display font-bold">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}

          {/* Card 8 - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 7 * 0.08 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.4)"
            }}
            className="bg-accent p-8 rounded-2xl flex flex-col gap-4 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] cursor-pointer group transition-all duration-300"
          >
            <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center">
              <Zap className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-dark">Sound familiar?</h3>
            <p className="text-dark font-medium">We fix all of this.</p>
            <div className="mt-auto">
              <a href="#flywheel" className="text-dark font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                See The Solution <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
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
        We build growth systems that make you the most trusted and responsive business in your area
      </motion.p>
    </div>
  </section>
);

const Flywheel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { 
      title: "Website captures lead", 
      icon: <MousePointerClick className="w-5 h-5" />, 
      benefit: "Your 24/7 digital storefront never sleeps, catching every opportunity." 
    },
    { 
      title: "Agent responds in 60 seconds", 
      icon: <Clock className="w-5 h-5" />, 
      benefit: "Instant engagement while the lead is hot, beating competitors to the punch." 
    },
    { 
      title: "CRM tracks conversations", 
      icon: <Users className="w-5 h-5" />, 
      benefit: "Never lose a lead in the noise again. Every chat is organized and tracked." 
    },
    { 
      title: "Agent quotes job", 
      icon: <Zap className="w-5 h-5" />, 
      benefit: "Professional quotes sent in minutes, showing customers you're the pro." 
    },
    { 
      title: "Jobs get booked", 
      icon: <CheckCircle2 className="w-5 h-5" />, 
      benefit: "A consistent flow of high-value work booked directly into your calendar." 
    },
    { 
      title: "Review requested", 
      icon: <MessageSquare className="w-5 h-5" />, 
      benefit: "Automated requests build your social proof without you lifting a finger." 
    },
    { 
      title: "5 Star review boost trust", 
      icon: <Star className="w-5 h-5" />, 
      benefit: "Dominate local search and Google Maps with a perfect reputation." 
    },
    { 
      title: "More customers find you", 
      icon: <TrendingUp className="w-5 h-5" />, 
      benefit: "Organic growth that compounds over time, lowering your lead costs." 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="flywheel" className="relative py-24 overflow-hidden bg-dark">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="The Growth Flywheel" 
          subtitle="A self-sustaining loop that grows your business while you're on the tools."
        />

        <div className="relative flex flex-col items-center min-h-[600px] justify-center">
          {/* Animated Loop Visualization */}
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            {/* Animated Connector Path (Desktop) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <motion.circle
                cx="50"
                cy="50"
                r="48"
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
                r="48"
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
              className="z-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-[0_0_50px_var(--accent-color)] relative"
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
              <TrendingUp className="w-16 h-16 text-dark" />
            </motion.div>

            {/* Steps positioned around the circle */}
            {steps.map((step, i) => {
              // Adjust angle so first item is at 12 o'clock (top)
              // 0 degrees in Math is 3 o'clock, so we subtract PI/2
              const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 48; // percentage (increased from 42)
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <motion.button
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isActive ? "var(--accent-color)" : "rgba(255, 255, 255, 0.05)",
                      color: isActive ? "#0a0a0a" : "#ffffff",
                      boxShadow: isActive ? "0 0 20px var(--accent-color)" : "none"
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-full glass border-accent/20 transition-all duration-300 whitespace-nowrap"
                  >
                    <span className={isActive ? "text-dark" : "text-accent"}>{step.icon}</span>
                    <span className="text-xs md:text-sm font-bold">{step.title}</span>
                  </motion.button>

                  {/* Hover Benefit Card */}
                  <AnimatePresence>
                    {hoveredStep === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass p-4 rounded-xl z-50 border-accent/30 shadow-2xl"
                      >
                        <div className="text-accent font-display font-bold text-sm mb-1 uppercase tracking-widest">Benefit</div>
                        <div className="text-white text-sm leading-relaxed">{step.benefit}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile List Version */}
          <div className="md:hidden mt-20 space-y-4 w-full px-4">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center gap-4 glass p-4 rounded-xl border-l-4 ${activeStep === i ? 'border-accent' : 'border-transparent'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${activeStep === i ? 'bg-accent text-dark' : 'bg-white/5 text-accent'}`}>
                  {step.icon}
                </div>
                <div>
                  <div className="font-bold text-sm">{step.title}</div>
                  <div className="text-xs text-white/40">{step.benefit}</div>
                </div>
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
    { 
      icon: <Monitor />, 
      title: "Lead-Gen Website", 
      desc: "Your 24/7 salesperson. Captures every enquiry and closes deals while you are on the tools." 
    },
    { 
      icon: <Zap />, 
      title: "60-Second AI Response", 
      desc: "Every enquiry gets a reply in 60 seconds, day or night, job or no job. First to reply wins." 
    },
    { 
      icon: <MessageSquare />, 
      title: "Never Miss an Enquiry", 
      desc: "On a job? The system replies instantly on your behalf so no enquiry ever goes cold." 
    },
    { 
      icon: <Inbox />, 
      title: "One Inbox", 
      desc: "WhatsApp, Instagram, Facebook, text, Email. Every message, one place, zero chaos." 
    },
    { 
      icon: <Star />, 
      title: "5-Star Review Engine", 
      desc: "Automated review requests that build your reputation, boost your Google Maps ranking, and pull enquiries away from your competitors." 
    },
    { 
      icon: <Smartphone />, 
      title: "Run Everything From Your Phone", 
      desc: "No office. No tech skills. Your entire business in the palm of your hand, from the job site or the sofa." 
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Everything You Need. Nothing You Don't." 
          subtitle="Built for trades businesses who want to dominate their local area and never lose an enquiry again."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 0 20px rgba(244, 161, 0, 0.15)",
                borderColor: "rgba(244, 161, 0, 0.3)"
              }}
              className="glass p-8 rounded-2xl group border border-white/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-dark transition-all duration-300 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, opacity: 0.8 }}
                  className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
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
    <section className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10 opacity-10">
        <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="From Zero to Live in 48 Hours" 
          subtitle="Our streamlined process gets you up and running without any downtime."
        />

        <div className="relative">
          {/* Animated Connector Path (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px -z-10">
            <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none" className="overflow-visible">
              <path 
                d="M 0 1 L 100 1" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="0.5" 
                fill="none" 
              />
              <motion.path 
                d="M 0 1 L 100 1" 
                stroke="var(--accent-color)" 
                strokeWidth="1" 
                fill="none"
                strokeDasharray="1, 5"
                animate={{
                  strokeDashoffset: [0, -20]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number Circle */}
                  <div className="relative mb-8">
                    <motion.div 
                      animate={{
                        boxShadow: ["0 0 20px rgba(var(--accent-color), 0.2)", "0 0 40px rgba(var(--accent-color), 0.4)", "0 0 20px rgba(var(--accent-color), 0.2)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 bg-accent text-dark rounded-full flex items-center justify-center text-2xl font-display font-bold relative z-10"
                    >
                      {s.step}
                    </motion.div>
                    
                    {/* Outer Ring */}
                    <div className="absolute inset-[-8px] border border-accent/20 rounded-full group-hover:border-accent/50 transition-colors duration-500" />
                  </div>

                  {/* Content Card */}
                  <div className="glass p-8 rounded-2xl border border-white/5 group-hover:border-accent/20 transition-all duration-500 w-full">
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const features = [
    { name: "Lead-Gen Website", outcome: "Turns visitors into booked jobs" },
    { name: "60-Second AI Response", outcome: "Never lose an enquiry to a slow reply" },
    { name: "Never Miss an Enquiry", outcome: "Instant reply even when you are on the tools" },
    { name: "All-in-One CRM", outcome: "Every lead tracked, nothing falls through" },
    { name: "Unified Inbox", outcome: "All messages, one place, zero chaos" },
    { name: "5-Star Review Engine", outcome: "More reviews, higher rankings, more jobs" },
    { name: "Full Mobile App", outcome: "Run your entire business from your phone" },
    { name: "Broadcast Messaging", outcome: "Promote your business to past customers instantly" },
    { name: "Zero Setup Fees", outcome: "Nothing to pay upfront, ever" },
    { name: "No Contracts", outcome: "Cancel anytime, no questions asked" }
  ];

  const payoffBlocks = [
    {
      icon: <PoundSterling className="w-8 h-8 text-accent" />,
      title: "Extra £2,000 Revenue. Zero Extra Effort.",
      body: "Jobs you are currently losing to faster competitors, won back automatically."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "2 to 4 Hours Saved Every Day",
      body: "No more chasing leads, juggling inboxes or manually sending review requests."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "20% More Job Enquiries",
      body: "A higher ranked, always responsive business that customers find and trust first."
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Less Than £10 a Day to Replace Your Admin." 
          subtitle="The price of 15 minutes of your time. Get back 2 to 4 hours every single day."
        />

        <div className="max-w-[900px] mx-auto space-y-32">
          {/* Part 1: Cost Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-display font-bold text-center">What It's Costing You Right Now</h3>
            <div className="glass overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-white/80 text-lg">Part-time receptionist or admin</span>
                  <span className="font-bold text-xl">£800/mo</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-white/80 text-lg">1 missed job per week from slow or no response</span>
                  <span className="font-bold text-xl text-red-400">£2,000+/mo</span>
                </div>
                <div className="flex justify-between items-center py-8 bg-accent/10 -mx-10 px-10 border-y border-accent/20">
                  <span className="text-accent font-display font-bold text-xl">What you are really losing</span>
                  <span className="text-accent font-display font-bold text-3xl line-through decoration-white/30 decoration-4">£2,800+/mo</span>
                </div>
              </div>
            </div>
            <p className="text-center text-white/40 text-sm italic">
              Based on average UK trade job values. Most businesses do not realise the leak until they fix it.
            </p>
          </motion.div>

          {/* Part 2: Payoff Statement Blocks */}
          <div className="space-y-16">
            <h3 className="text-3xl font-display font-bold text-center">Imagine Your Business With...</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {payoffBlocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {block.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">{block.title}</h4>
                  <p className="text-white/60 leading-relaxed">{block.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-12 space-y-6 text-2xl md:text-4xl leading-relaxed max-w-3xl mx-auto"
            >
              <p>That is not just a better business.</p>
              <p>That is <span className="text-accent font-bold">school pickups</span> you do not miss.</p>
              <p><span className="text-accent font-bold">Weekends</span> you actually switch off.</p>
              <p><span className="text-accent font-bold">Evenings with your family</span> instead of your inbox.</p>
              <p className="pt-4 font-bold">One system. Less than £10 a day.</p>
            </motion.div>
          </div>

          {/* Part 3: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-[700px] mx-auto"
          >
            <GlassCard className="border-accent/30 relative overflow-hidden p-0">
              {/* Everything Included Badge */}
              <div className="absolute top-0 right-0 bg-accent text-dark px-6 py-2 rounded-bl-2xl font-bold text-sm uppercase tracking-wider">
                Everything Included
              </div>

              <div className="p-8 md:p-12 space-y-12">
                <div className="text-center space-y-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-accent font-display font-bold text-7xl">£297</span>
                    <span className="text-xl text-white/60">/month</span>
                  </div>
                  <p className="text-white/40 text-sm">No contracts. Live in 48 hours. Cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm">{f.name}</div>
                        <div className="text-xs italic text-white/40">{f.outcome}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center italic text-white">
                  "One new job a month pays for everything. At the average UK trade job value, this pays for itself with a single booking."
                </div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Button variant="primary" className="w-full py-5 text-xl font-bold shadow-[0_0_30px_rgba(244,161,0,0.3)]">
                    Get Started Now
                  </Button>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
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
        No setup fees. No contracts. Just more enquiries, more bookings, more five star reviews.
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
        Availability limited by area: claim your patch before a competitor does.
      </motion.p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-dark">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
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
