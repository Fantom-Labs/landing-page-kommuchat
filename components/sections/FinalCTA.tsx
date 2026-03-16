'use client';

import { FINAL_CTA } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-dark-bg py-[var(--section-padding-y)]"
    >
      {/* Glow vermelho em largura total */}
      <div
        className="fade-top-lg pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 shadow-cta-glow"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-[var(--content-max-width)] flex-col items-center gap-6 px-[var(--section-padding-x)] py-12 text-center sm:gap-8 md:py-24">
        <div className="relative z-10">
          <Badge className="mb-4 border-white/20 bg-white/10 !text-white backdrop-blur-sm">
            {FINAL_CTA.badge}
          </Badge>
        </div>
        <h2 className="relative z-10 text-3xl font-semibold text-white sm:text-5xl max-w-3xl mx-auto leading-tight tracking-[-0.02em] opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
          {FINAL_CTA.headline}
        </h2>
        <p className="relative z-10 text-base text-[#A0A0A0] sm:text-lg leading-[1.65] max-w-xl mx-auto opacity-0 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:forwards]">
          {FINAL_CTA.subtitle}
        </p>
        <Button
          href={FINAL_CTA.ctaHref}
          variant="primary"
          size="lg"
          className="relative z-10 mt-2 w-full sm:w-auto opacity-0 animate-fade-in-up [animation-delay:500ms] [animation-fill-mode:forwards]"
        >
          {FINAL_CTA.cta}
        </Button>
      </div>
    </section>
  );
}
