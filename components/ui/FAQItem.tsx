'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ id, question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-light-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <span className="text-[#111111] font-semibold text-[0.95rem]">{question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-brand-red">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 text-[#666666] text-[0.9rem] leading-[1.65]">{answer}</p>
      </div>
    </div>
  );
}
