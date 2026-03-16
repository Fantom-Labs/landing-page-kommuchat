import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HERO } from '@/lib/constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#131316] pt-24 sm:pt-28 pb-0 px-[var(--section-padding-x)]">
      {/* Blurred red ellipses (decorative) */}
      <div
        className="pointer-events-none absolute left-[calc(50%-288px)] top-[250px] h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[302px] top-[604px] h-[576px] w-[576px] rounded-full bg-[rgba(235,20,20,0.17)] opacity-10 blur-[140px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[var(--content-max-width)] flex-col items-center text-center">
        <Badge variant="social" className="mb-4 animate-fade-up border-white/10 bg-white/[0.12] text-[#D0D0D0] backdrop-blur-[1.5px]">
          Mais de 1000 consultas marcadas com IA
        </Badge>
        <h1
          className="animate-fade-up animate-fade-up-delay-1 max-w-[871px] text-[clamp(2rem,5vw,60px)] font-medium leading-[1.1] tracking-[-0.03em] [background:linear-gradient(180deg,#FFFFFF_24%,#878789_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]"
          style={{ backgroundClip: 'text' }}
        >
          Atendimento virtual 24h por dia para a sua clínica de saúde
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-2 mt-4 sm:mt-6 max-w-[552px] px-2 sm:px-0 text-sm sm:text-base leading-relaxed sm:leading-5 text-[#B8B8B8]">
          Tenha uma secretária virtual que atende seus pacientes, agenda consultas, verifica horários livres e cuida dos seus pacientes.</p>
        <div className="relative z-20 animate-fade-up animate-fade-up-delay-2 mt-8 flex flex-col items-center justify-center gap-[15px] sm:flex-row">
          <Button
            href={HERO.ctaPrimaryHref}
            variant="primary"
            size="lg"
            className="w-full rounded-full border-[#E25050] bg-gradient-to-b from-[#E25050] to-[#EB1414] shadow-[inset_0_-6px_16px_#E25050,inset_-1px_-1px_0_#FFFFFF] hover:shadow-[inset_0_-6px_16px_#E25050,inset_-1px_-1px_0_#FFFFFF,0_8px_30px_rgba(230,48,48,0.35)] sm:w-auto"
          >
            <span>Comece agora</span>
            <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
          </Button>
          <Button
            href="#como-funciona"
            variant="ghost"
            size="lg"
            className="w-full rounded-full sm:w-auto"
          >
            Conheça mais
            <ChevronDown className="ml-1 h-4 w-4" aria-hidden />
          </Button>
        </div>

        {/* Dashboard / hero image — 64px from content, -translate-y so section ends at image bottom */}
        <div className="relative z-10 mt-10 sm:mt-16 w-full max-w-[1710px] -translate-y-[40px] -mb-[40px] sm:-translate-y-[100px] sm:-mb-[100px]">
          <Image
            src="/images/hero image.png"
            alt="Dashboard KOMMUchat — consultas, pacientes, agenda e relatórios"
            width={1710}
            height={719}
            priority
            className="w-full object-cover object-top"
          />
        </div>
      </div>

    </section>
  );
}
