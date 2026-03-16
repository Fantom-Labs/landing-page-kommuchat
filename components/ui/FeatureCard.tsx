import {
  MessageCircle,
  Workflow,
  Calendar,
  UserCheck,
  CalendarClock,
  BellRing,
  Users,
  BarChart3,
  HandHelping,
  LayoutGrid,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Workflow,
  Calendar,
  UserCheck,
  CalendarClock,
  BellCheck: BellRing,
  BellRing,
  Users,
  BarChart3,
  HandHelping,
  LayoutGrid,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  variant: 'dark' | 'light';
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  variant,
  className = '',
}: FeatureCardProps) {
  const Icon = iconMap[icon] ?? MessageCircle;

  if (variant === 'dark') {
    return (
      <article
        className={`group rounded-xl border border-dark-border bg-dark-card p-6 sm:p-8 transition-all duration-200 hover:border-brand-red hover:-translate-y-0.5 ${className}`}
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] border border-brand-red/20 bg-brand-red/10 text-brand-red">
          <Icon size={22} />
        </div>
        <h3 className="text-white text-xl font-semibold tracking-[-0.01em]">{title}</h3>
        <p className="mt-2 text-[#A0A0A0] text-base leading-[1.65]">{description}</p>
      </article>
    );
  }

  return (
    <article
      className={`group rounded-xl border border-light-border bg-light-card p-7 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 ${className}`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
        <Icon size={20} />
      </div>
      <h3 className="text-[#111111] text-xl font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="mt-2 text-[#666666] text-base leading-[1.65]">{description}</p>
    </article>
  );
}
