import Link from 'next/link';

type ButtonVariant = 'primary' | 'ghost' | 'cta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm rounded-[99px]',
  md: 'px-6 py-3 text-[0.9rem] rounded-[99px]',
  lg: 'px-9 py-4 text-base rounded-[99px]',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-red hover:bg-brand-redHover text-white font-semibold border-0 shadow-none hover:shadow-red-glow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
  ghost:
    'bg-transparent hover:bg-white/[0.06] text-[#A0A0A0] hover:text-white border border-white/10 hover:border-white/25 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
  cta:
    'h-10 gap-2 rounded-[99px] border border-[#E25050] bg-gradient-to-b from-[#E25050] to-[#EB1414] px-6 text-base font-medium leading-4 text-white shadow-[inset_0px_-6px_16px_#E25050,inset_-1px_-1px_0px_#FFFFFF] transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
};

export function Button({
  children,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center tracking-[-0.01em] ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick} target={target} rel={rel}>
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
