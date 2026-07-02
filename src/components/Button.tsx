import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  id,
  ...props
}: ButtonProps) {
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-glow-primary active:scale-[0.98] cursor-pointer';
  
  const variants = {
    primary: 'bg-glow-primary text-glow-bg hover:bg-glow-accent hover:shadow-md hover:shadow-glow-primary/10',
    secondary: 'bg-glow-secondary text-glow-text hover:bg-glow-primary hover:text-white',
    outline: 'border border-glow-border text-glow-text bg-transparent hover:border-glow-primary hover:text-glow-primary',
    text: 'text-glow-text hover:text-glow-primary bg-transparent',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      id={id}
      type={type}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
