import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Button } from '../components/ui/Button';

interface NavProps {
    onNavigate: (path: string) => void;
    onOpenDemo: () => void;
    isSubpage: boolean;
}

export const Nav = ({ onNavigate, onOpenDemo, isSubpage }: NavProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#problem", label: "The Problem", homeOnly: true },
        { href: "#flywheel", label: "The System", homeOnly: true },
        { href: "#features", label: "Features", homeOnly: true },
        { href: "/demo", label: "Demos", action: onOpenDemo },
        { href: "#pricing", label: "Pricing", homeOnly: true },
    ];

    const handleLinkClick = (e: React.MouseEvent, path: string, action?: () => void) => {
        e.preventDefault();
        if (action) {
            action();
            return;
        }

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
                            onClick={(e) => handleLinkClick(e, link.href, link.action)}
                            className="hover:text-accent transition-colors duration-smooth ease-smooth"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeSwitcher />
                    <Button variant="primary" size="sm" onClick={() => onNavigate('/book-call')}>Book a Call</Button>
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
                                    onClick={(e) => handleLinkClick(e, link.href, link.action)}
                                    className="text-lg text-white/70 hover:text-accent font-bold transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="primary" className="w-full mt-4" onClick={() => { onNavigate('/book-call'); setIsOpen(false); }}>
                                Book a Call
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
