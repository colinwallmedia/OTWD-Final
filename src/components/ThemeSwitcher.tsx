import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { THEMES } from '../constants/themes';

export const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState(0);

    const toggleTheme = () => {
        const next = (currentTheme + 1) % THEMES.length;
        setCurrentTheme(next);
        document.documentElement.style.setProperty('--accent-color', THEMES[next].color);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-white/10 transition-all flex items-center group"
            title="Switch Theme"
        >
            <Palette className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
        </button>
    );
};
