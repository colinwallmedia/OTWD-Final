import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Button } from '../components/ui/Button';

interface NavProps {
    onNavigate: (path: string) => void;
    isSubpage: boolean;
}

export const Nav = ({ onNavigate, isSubpage }: NavProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#problem", label: "The Problem", homeOnly: true },
        { href: "#solution", label: "The Solution", homeOnly: true },
        { href: "#pricing", label: "Pricing", homeOnly: true },
        { href: "#testimonials", label: "Testimonials", homeOnly: true },
    ];

    const handleLinkClick = (e: React.MouseEvent, path: string) => {
        e.preventDefault();

        if (isSubpage && path.startsWith('#')) {
            onNavigate('/');
            setTimeout(() => {
                const el = document.querySelector(path);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            onNavigate(path);
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-smooth ease-smooth ${scrolled || isSubpage ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6'}`}>
            <div className="container-tight flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => onNavigate('/')}
                >
                    <span className="font-display font-bold text-xl tracking-tight text-white">Off The Wall <span className="text-accent">Digital</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="hover:text-accent transition-colors duration-smooth ease-smooth"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeSwitcher />
                    <Button variant="primary" size="sm" className="group" onClick={() => onNavigate('/checkout')}>
                        Get Started Now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
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
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-lg text-white/70 hover:text-accent font-bold transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="primary" className="w-full mt-4 group" onClick={() => { onNavigate('/checkout'); setIsOpen(false); }}>
                                Get Started Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
