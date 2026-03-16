'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ALL_IN_ONE } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function AllInOne() {
  const [activeTab, setActiveTab] = useState(ALL_IN_ONE.tabs[0].id);

  const currentTab = ALL_IN_ONE.tabs.find((t) => t.id === activeTab) ?? ALL_IN_ONE.tabs[0];

  return (
    <section className="bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)] overflow-x-hidden">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        {/* Cabeçalho centralizado */}
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <SectionTitle
            badge={ALL_IN_ONE.badge}
            title={
              <>
                Conversas, CRM, agenda e relatórios em{' '}
                <span className="text-brand-red">{ALL_IN_ONE.headlineAccent}</span>.
              </>
            }
            subtitle={ALL_IN_ONE.subtitle}
            variant="light"
            centered
          />

          {/* Navegação em pill — design de referência */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-light-border bg-white p-1.5 shadow-sm">
            {ALL_IN_ONE.tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Imagem em largura total — troca conforme tab ativa */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <Image
          key={currentTab.id}
          src={currentTab.image}
          alt={`KOMMUchat — ${currentTab.label}`}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </section>
  );
}
