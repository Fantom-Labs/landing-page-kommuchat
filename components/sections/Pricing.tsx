import { PRICING_PLANS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PricingCard } from '@/components/ui/PricingCard';

export function Pricing() {
  return (
    <section id="precos" className="bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14">
          <SectionTitle
            badge="Preços"
            title="Planos simples. Sem surpresas."
            subtitle="Escolha o que cabe na sua clínica. Sem fidelidade."
            variant="light"
            centered
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
