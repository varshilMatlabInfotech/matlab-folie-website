import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'font-poppins font-medium rounded-button transition-all duration-300';

  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-primary text-white hover:opacity-90 hover:shadow-lg',
    secondary: 'bg-white text-text-primary border-2 border-primary hover:bg-gray-50',
    outline: 'bg-transparent border-2 border-primary text-text-primary hover:bg-primary hover:bg-opacity-5',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-6 h-12 text-base',
    md: 'px-8 h-14 text-lg lg:text-[20px] leading-[30px]',
    lg: 'px-10 h-16 text-xl',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

