import { SectionTitle } from '@/components/ui/SectionTitle';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { HOW_IT_WORKS } from '@/lib/constants';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-dark-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
          <SectionTitle
            badge={HOW_IT_WORKS.badge}
            badgeClassName="border-white/20 bg-white/10 !text-white backdrop-blur-sm"
            title={HOW_IT_WORKS.headline}
            variant="dark"
            centered
            subtitleMaxWidth={false}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.steps.map((step) => (
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
