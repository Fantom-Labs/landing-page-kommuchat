'use client';

import { useState } from 'react';
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

export function Features() {
  const [activeId, setActiveId] = useState<string>(FEATURES.items[1].id);

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
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(#d4d4d8 1px, transparent 1px), linear-gradient(90deg, #d4d4d8 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Active feature highlight card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-8 max-w-[300px] w-full mx-6">
              {(() => {
                const active = FEATURES.items.find((i) => i.id === activeId)!;
                const Icon = iconMap[active.icon] ?? CalendarClock;
                return (
                  <>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-[#111111] text-lg font-bold tracking-[-0.01em]">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#666666] leading-[1.65]">
                      {active.description}
                    </p>
                  </>
                );
              })()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
