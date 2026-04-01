'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { CHECKOUT_URL, NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [onLightBg, setOnLightBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOnLightBg(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navPillClass =
    'relative mx-auto flex h-[52px] sm:h-[60px] max-w-[1140px] items-center justify-between rounded-full border px-4 sm:px-6 shadow-[0px_1px_1px_-0.5px_rgba(7,1,19,0.04),0px_2px_2px_-1px_rgba(7,1,19,0.04),inset_0px_0.5px_0.5px_rgba(255,255,255,0.16),inset_0px_1px_3px_rgba(255,255,255,0.12),inset_0px_2px_8px_rgba(255,255,255,0.05)] [filter:drop-shadow(0px_0.5px_0.5px_rgba(7,1,19,0.04))] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[""] transition-all duration-200 ' +
    (onLightBg
      ? 'border-black/10 bg-dark-bg/80 backdrop-blur-[12px] before:border before:border-white/[0.12] before:bg-white/5'
      : 'border-black/10 before:border before:border-white/[0.12]');

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-[var(--section-padding-x)] pt-4 transition-all duration-200"
    >
      <div className={navPillClass}>
        <Link
          href="/"
          className="relative z-10 flex shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-full"
          aria-label="KOMMUchat - Ir para o topo"
          onClick={(e) => {
            setMenuOpen(false);
            if (typeof window === 'undefined') return;
            const path = window.location.pathname;
            if (path === '/' || path === '') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.location.hash) {
                history.replaceState(null, '', '/');
              }
            }
          }}
        >
          <Image
            src="/images/kommuchat_logo dark.svg"
            alt="KOMMUchat"
            width={159}
            height={25}
            className="h-[22px] sm:h-[25px] min-h-[36px] sm:min-h-[40px] w-[130px] sm:w-[159px] object-contain"
            priority
          />
        </Link>

        <nav
          className="relative z-10 hidden md:flex flex-1 items-center justify-center gap-8"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium leading-[14px] text-white hover:text-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded-full py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 hidden md:flex shrink-0 items-center">
          <Button href={CHECKOUT_URL} variant="cta" className="w-[189px]">
            Comece agora
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 top-[5.5rem] sm:top-[7.75rem] bg-dark-bg border-t border-dark-border transition-all duration-200 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-4" aria-label="Menu mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#A0A0A0] hover:text-white py-3 border-b border-dark-border last:border-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              href={CHECKOUT_URL}
              variant="cta"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Comece agora
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
