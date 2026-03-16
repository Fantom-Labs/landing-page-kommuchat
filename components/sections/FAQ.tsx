'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FAQItem } from '@/components/ui/FAQItem';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <SectionTitle
              badge="Perguntas frequentes"
              title="Tire suas dúvidas"
              subtitle="Respostas rápidas sobre a KOMMUchat e como ela se encaixa na sua clínica."
              variant="light"
            />
          </div>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FAQItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
