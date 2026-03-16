import { Badge } from './Badge';

interface SectionTitleProps {
  badge?: React.ReactNode;
  badgeClassName?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  subtitleMaxWidth?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

const titleColor = { light: 'text-[#111111]', dark: 'text-white' };
const subtitleColor = { light: 'text-[#555555]', dark: 'text-[#A0A0A0]' };

export function SectionTitle({
  badge,
  badgeClassName,
  title,
  subtitle,
  centered = false,
  subtitleMaxWidth = true,
  variant = 'light',
  className = '',
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : ''} ${className}`}
    >
      {badge && (
        typeof badge === 'string' ? <Badge className={badgeClassName}>{badge}</Badge> : badge
      )}
      <h2 className={`${titleColor[variant]} text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-tight tracking-[-0.02em]`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${subtitleColor[variant]} text-base leading-[1.65] ${
            subtitleMaxWidth ? 'max-w-[520px]' : ''
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
