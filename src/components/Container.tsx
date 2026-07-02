import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean; // if true, removes default padding
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  id?: string;
}

export function Container({
  children,
  clean = false,
  size = 'lg',
  className = '',
  id,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      id={id}
      className={`mx-auto w-full ${clean ? '' : 'px-6 md:px-12 lg:px-16'} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
