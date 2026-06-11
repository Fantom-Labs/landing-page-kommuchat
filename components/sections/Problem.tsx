'use client';
import { PROBLEM } from '@/lib/constants';
import { Check } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { WhatsappBubble } from '@/components/ui/WhatsappBubble';
import { useEffect, useRef, useState } from 'react';

const problemMessages = [
  { type: 'incoming' as const, text: 'Oi, qual horário tem disponível essa semana?' },
  { type: 'outgoing' as const, text: 'Olá! Temos segunda 14h, quarta 10h e quinta 16h. Qual prefere?' },
  { type: 'incoming' as const, text: 'Quarta 10h por favor' },
  { type: 'outgoing' as const, text: 'Agendado! Você receberá um lembrete antes. Até quarta!' },
];

export function Problem() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingType, setTypingType] = useState<'incoming' | 'outgoing' | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationStarted]);

  useEffect(() => {
    if (!animationStarted) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const startCycle = () => {
      setVisibleCount(0);
      setTypingType(problemMessages[0].type);

      const showMessage = (i: number) => {
        setVisibleCount(i + 1);
        setTypingType(null);
        const next = i + 1;
        if (next < problemMessages.length) {
          timeoutId = setTimeout(() => {
            setTypingType(problemMessages[next].type);
            timeoutId = setTimeout(() => showMessage(next), 1800);
          }, 2000);
        } else {
          timeoutId = setTimeout(startCycle, 3000);
        }
      };

      timeoutId = setTimeout(() => showMessage(0), 1800);
    };

    startCycle();

    return () => clearTimeout(timeoutId);
  }, [animationStarted]);

  return (
    <section ref={sectionRef} id="problema" className="bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <SectionTitle
              badge={<Badge variant="atendimento">Você não precisa se preocupar com nada</Badge>}
              title={
                <>
                 Criamos a sua secretária virtual {' '}
                  <span className="text-brand-red">{PROBLEM.headlineAccent}</span>.
                </>
              }
              subtitle={PROBLEM.body}
              variant="light"
            />
            <ul className="mt-8 space-y-3" aria-label="Dores do dia a dia">
              {PROBLEM.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#555555] text-[0.925rem]">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <WhatsappBubble messages={problemMessages.slice(0, visibleCount)} typingType={typingType} />
          </div>
        </div>
      </div>
    </section>
  );
}
