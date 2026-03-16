import { Check } from 'lucide-react';
import { CHECKOUT_URL } from '@/lib/constants';
import { Button } from './Button';

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  featured: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const isFeatured = plan.featured;

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-8 ${
        isFeatured
          ? 'bg-dark-bg border-2 border-brand-red shadow-red-glow-lg text-white'
          : 'bg-light-card border border-light-border shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#111111]'
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Recomendado
          </span>
        </div>
      )}
      <h3 className={`text-xl font-bold ${isFeatured ? 'text-white' : 'text-[#111111]'}`}>
        {plan.name}
      </h3>
      <p className={`mt-1 text-sm ${isFeatured ? 'text-[#A0A0A0]' : 'text-[#555555]'}`}>
        {plan.description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className={`text-2xl ${isFeatured ? 'text-[#888888]' : 'text-[#888888]'}`}>R$</span>
        <span className="text-4xl font-extrabold tracking-[-0.03em]">{plan.price}</span>
        <span className={`text-sm ${isFeatured ? 'text-[#888888]' : 'text-[#888888]'}`}>
          /{plan.period}
        </span>
      </div>
      <ul className="mt-6 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#22C55E]" size={20} />
            <span className={isFeatured ? 'text-[#A0A0A0]' : 'text-[#555555]'}>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 w-full">
        <Button
          href={CHECKOUT_URL}
          variant="primary"
          size="md"
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}
