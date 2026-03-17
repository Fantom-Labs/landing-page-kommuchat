import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HERO } from '@/lib/constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#131316] pt-20 sm:pt-28 pb-0 px-[var(--section-padding-x)]">
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
          Mais de 1000 consultas marcadas com IA
        </Badge>
        <h1
          className="animate-fade-up animate-fade-up-delay-1 max-w-[871px] text-[clamp(1.75rem,5vw,60px)] font-medium leading-tight tracking-[-0.03em] [background:linear-gradient(180deg,#FFFFFF_24%,#878789_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] sm:leading-[1.1]"
          style={{ backgroundClip: 'text' }}
        >
          Atendimento virtual 24h por dia para a sua clínica de saúde
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-2 mt-3 max-w-[552px] px-3 text-sm leading-relaxed text-[#B8B8B8] sm:mt-6 sm:px-0 sm:text-base sm:leading-5">
          Tenha uma secretária virtual que atende seus pacientes, agenda consultas, verifica horários livres e cuida dos seus pacientes.</p>
        <div className="relative z-20 animate-fade-up animate-fade-up-delay-2 mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-[15px]">
          <Button
            href={HERO.ctaPrimaryHref}
            variant="cta"
            className="w-full sm:w-auto"
          >
            Comece agora
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button
            href="#como-funciona"
            variant="ghost"
            size="lg"
            className="h-11 w-full sm:w-auto"
          >
            Conheça mais
            <ChevronDown className="ml-1 h-4 w-4" aria-hidden />
          </Button>
        </div>

        {/* Dashboard / hero image — mobile: less overlap; desktop unchanged */}
        <div className="relative z-10 mt-6 w-full max-w-[1710px] -translate-y-[24px] -mb-[24px] sm:mt-16 sm:-translate-y-[100px] sm:-mb-[100px]">
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
