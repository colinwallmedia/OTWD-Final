import React from 'react';

interface ButtonProps extends React.BaseHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-accent text-dark hover:bg-accent/90 shadow-lg shadow-accent/20',
        secondary: 'bg-white text-dark hover:bg-white/90',
        outline: 'border border-white/20 text-white hover:bg-white/5'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg'
    };

    const baseStyles = 'rounded-full font-semibold transition-all duration-smooth ease-smooth active:scale-95 flex items-center justify-center gap-2';
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={classes}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
};
