import Link from 'next/link';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-lg',
  md: 'px-6 py-3 text-[0.9rem] rounded-lg',
  lg: 'px-9 py-4 text-base rounded-[10px]',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-red hover:bg-brand-redHover text-white font-semibold border-0 shadow-none hover:shadow-red-glow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
  ghost:
    'bg-transparent hover:bg-white/[0.06] text-[#A0A0A0] hover:text-white border border-white/10 hover:border-white/25 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center tracking-[-0.01em] ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  );
}
