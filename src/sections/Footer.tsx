import React from 'react';

interface FooterProps {
    onNavigate: (path: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => (
    <footer className="py-12 border-t border-white/5 bg-dark">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-8">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => onNavigate('/')}
            >
                <span className="font-display font-bold text-lg tracking-tight text-white">Off The Wall <span className="text-accent">Digital</span></span>
            </div>

            <div className="text-white/40 text-sm">
                © {new Date().getFullYear()} Off The Wall Digital. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-white/40 text-sm font-medium">
                <button onClick={() => onNavigate('/privacy')} className="hover:text-accent transition-colors duration-smooth ease-smooth">Privacy Policy</button>
                <button onClick={() => onNavigate('/terms')} className="hover:text-accent transition-colors duration-smooth ease-smooth">Terms of Service</button>
                <button onClick={() => onNavigate('/checkout')} className="hover:text-accent transition-colors duration-smooth ease-smooth">Get Started Now</button>
            </div>
        </div>
    </footer>
);
