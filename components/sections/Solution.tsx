import { SectionTitle } from '@/components/ui/SectionTitle';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SOLUTION_STEPS } from '@/lib/constants';

export function Solution() {
  return (
    <section id="solucao" className="bg-dark-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionTitle
            badge="A solução"
            title="Automatize agendamento, confirmações e lembretes — sem perder o toque humano."
            variant="dark"
            centered
            subtitleMaxWidth={false}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_STEPS.map((step) => (
            <FeatureCard
              key={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
