import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HERO } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#131316] min-h-[640px] sm:min-h-[800px] flex items-stretch sm:items-center pt-24 pb-16 sm:pt-0 sm:pb-0 px-[var(--section-padding-x)]">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/herotexture.png')] bg-cover bg-center opacity-10"
        aria-hidden
      />
      {/* Red blur effects */}
      <div
        className="pointer-events-none absolute left-[calc(50%-288px)] top-[250px] hidden h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px] sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[302px] top-[604px] hidden h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px] sm:block"
        aria-hidden
      />

      {/* Hero image — mobile */}
      <div className="absolute inset-0 pointer-events-none sm:hidden">
        <Image
          src="/images/hero-mobile.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />
      </div>
      {/* Hero image — desktop */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <Image
          src="/images/hero-img.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--content-max-width)] flex flex-col sm:block sm:-translate-y-2">
        <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left w-full sm:max-w-[831px] rounded-2xl sm:rounded-none backdrop-blur-[30px] sm:backdrop-blur-none bg-black/10 sm:bg-transparent border border-white/[0.04] sm:border-transparent px-6 py-10 sm:px-0 sm:py-0 justify-between sm:justify-start">
          <Badge
            variant="social"
            className="mb-3 animate-fade-up border-white/10 bg-white/[0.12] text-[#D0D0D0] backdrop-blur-[1.5px] sm:mb-4"
          >
            +1000 consultas marcadas com IA
          </Badge>
          <h1
            className="animate-fade-up animate-fade-up-delay-1 text-[clamp(1.75rem,5vw,60px)] font-medium leading-tight tracking-[-0.03em] [background:linear-gradient(180deg,#FFFFFF_24%,#878789_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] sm:leading-[1.1]"
            style={{ backgroundClip: 'text' }}
          >
            <span className="block">Atendimento IA 24h</span>
            <span className="block">para o seu consultório</span>
          </h1>
          <p className="animate-fade-up animate-fade-up-delay-2 mt-2 max-w-[488px] px-3 text-sm leading-relaxed text-[#B8B8B8] sm:mt-6 sm:px-0 sm:text-base sm:leading-5">
            Criamos sua secretária IA totalmente personalizada para atender seus pacientes, verificar horários livres, agendar consultas, e resolver tudo que você precisa.
          </p>
          <div className="relative z-20 animate-fade-up animate-fade-up-delay-2 mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-start sm:gap-[15px]">
            <Button
              href={HERO.ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="cta"
              className="w-full sm:w-auto"
            >
              Contrate agora
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="https://api.whatsapp.com/send?phone=5581999724313&text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20a%20KOMMUchat!%20e%20o%20Atendimento%20IA"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              className="h-11 w-full sm:w-auto"
            >
              Teste no whatsapp
              <span className="relative ml-2 flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_6px_2px_rgba(235,20,20,0.7)]" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
