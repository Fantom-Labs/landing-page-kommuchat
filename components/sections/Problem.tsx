'use client';
import { PROBLEM } from '@/lib/constants';
import { Check, ChevronLeft, Video, Phone, MoreVertical, Smile, Mic } from 'lucide-react';
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
          <div className="flex flex-col order-first md:order-last h-[400px] md:h-[540px] md:w-[350px] md:ml-auto rounded-2xl md:rounded-[32px] overflow-hidden shadow-md border border-black/10">
            {/* Header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#075E54] shrink-0">
              <ChevronLeft size={20} className="text-white/80" />
              <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">SV</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[13px] font-medium leading-none">Secretária Virtual</p>
                <p className="text-white/60 text-[11px] mt-0.5">online</p>
              </div>
              <Video size={18} className="text-white/80 shrink-0" />
              <Phone size={18} className="text-white/80 shrink-0" />
              <MoreVertical size={18} className="text-white/80 shrink-0" />
            </div>
            {/* Chat area */}
            <div className="flex-1 overflow-hidden bg-[#ECE5DD] flex items-center">
              <WhatsappBubble messages={problemMessages.slice(0, visibleCount)} typingType={typingType} />
            </div>
            {/* Footer */}
            <div className="flex items-center gap-2 px-2 py-2 bg-[#F0F0F0] shrink-0">
              <Smile size={22} className="text-[#54656F] shrink-0" />
              <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[13px] text-[#aaa]">
                Mensagem
              </div>
              <Mic size={22} className="text-[#54656F] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
