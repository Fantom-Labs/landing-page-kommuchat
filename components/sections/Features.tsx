'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  CalendarClock,
  BellRing,
  Users,
  BarChart3,
  LucideIcon,
} from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';

const iconMap: Record<string, LucideIcon> = {
  CalendarClock,
  BellCheck: BellRing,
  BellRing,
  Users,
  BarChart3,
};

const featureImagesById: Record<string, string> = {
  '1': '/images/features-1.png',
  '2': '/images/features-2.png',
  '3': '/images/features-3.png',
  '4': '/images/features-4.png',
};

export function Features() {
  const [activeId, setActiveId] = useState<string>(FEATURES.items[0].id);
  const activeImageSrc = featureImagesById[activeId] ?? '/images/features-1.png';

  return (
    <section id="funcionalidades" className="bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">

        <div className="mb-12">
          <SectionTitle
            badge={FEATURES.badge}
            badgeClassName="!text-[0.65rem]"
            title={
              <>
                Tudo que seu consultório precisa em{' '}
                <span className="text-brand-red">{FEATURES.headlineAccent}</span>.
              </>
            }
            subtitle={FEATURES.subtitle}
            variant="light"
            className="max-w-[560px]"
          />
        </div>

        {/* Bottom row: feature list left, visual right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Feature list */}
          <ul className="flex flex-col gap-2">
            {FEATURES.items.map((item) => {
              const Icon = iconMap[item.icon] ?? CalendarClock;
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F9F6F6] p-5'
                        : 'px-5 py-3 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                          isActive
                            ? 'bg-brand-red/10 text-brand-red'
                            : 'bg-transparent text-[#999999]'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        className={`text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                          isActive ? 'text-[#111111]' : 'text-[#888888]'
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {isActive && (
                      <p className="mt-2 ml-12 text-sm text-[#666666] leading-[1.65]">
                        {item.description}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Visual / mockup area */}
          <div className="relative hidden md:flex items-center justify-center rounded-2xl bg-[#F4F4F5] border border-light-border min-h-[380px] overflow-hidden">
            <Image
              key={activeId}
              src={activeImageSrc}
              alt="Visual da funcionalidade selecionada"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
