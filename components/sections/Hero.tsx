import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HERO } from '@/lib/constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#131316] pt-24 pb-24 sm:pt-28 sm:pb-0 px-[var(--section-padding-x)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/herotexture.png')] bg-cover bg-center opacity-10"
        aria-hidden
      />
      {/* Blurred red ellipses (decorative) — hidden on mobile to avoid overflow */}
      <div
        className="pointer-events-none absolute left-[calc(50%-288px)] top-[250px] hidden h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px] sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[302px] top-[604px] hidden h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px] sm:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[var(--content-max-width)] flex-col items-center text-center">
        <Badge variant="social" className="mb-3 animate-fade-up border-white/10 bg-white/[0.12] text-[#D0D0D0] backdrop-blur-[1.5px] sm:mb-4">
          +1000 consultas marcadas com IA
        </Badge>
        <h1
          className="animate-fade-up animate-fade-up-delay-1 max-w-[871px] text-[clamp(1.75rem,5vw,60px)] font-medium leading-tight tracking-[-0.03em] [background:linear-gradient(180deg,#FFFFFF_24%,#878789_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] sm:leading-[1.1]"
          style={{ backgroundClip: 'text' }}
        >
          Atendimento IA 24h para o seu consultório
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-2 mt-3 max-w-[552px] px-3 text-sm leading-relaxed text-[#B8B8B8] sm:mt-6 sm:px-0 sm:text-base sm:leading-5">
          Criamos sua secretária IA totalmente personalizada para atender seus pacientes, verificar horários livres, agendar consultas, e resolver tudo que você precisa.</p>
        <div className="relative z-20 animate-fade-up animate-fade-up-delay-2 mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-[15px]">
          <Button
            href={HERO.ctaPrimaryHref}
            variant="cta"
            className="w-full sm:w-auto"
          >
            Contrate agora
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button
            href="https://api.whatsapp.com/send?phone=5581999724313&text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20a%20KOMMUchat!%20e%20o%20Atendimento%20IA"
            variant="ghost"
            size="lg"
            className="max-sm:hidden h-11 w-full sm:w-auto"
          >
            Faça uma simulação
            <ChevronDown className="ml-1 h-4 w-4" aria-hidden />
          </Button>
        </div>

        {/* Dashboard / hero image — desktop only; hidden on mobile */}
        <div className="relative z-10 hidden w-full max-w-[1710px] sm:mt-16 sm:block sm:-translate-y-[100px] sm:-mb-[100px]">
          <Image
            src="/images/hero image.png"
            alt="Dashboard KOMMUchat — consultas, pacientes, agenda e relatórios"
            width={1710}
            height={719}
            priority
            className="w-full object-cover object-top"
            sizes="(max-width: 640px) 100vw, 1710px"
          />
        </div>
      </div>

    </section>
  );
}
