import Link from 'next/link';
import Image from 'next/image';
import { FOOTER } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-[#1F1F1F] text-[#666666] pt-16 pb-10 px-[var(--section-padding-x)]">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Link
              href="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded"
              aria-label="KOMMUchat - Página inicial"
            >
              <Image
                src="/images/kommuchat_logo dark.svg"
                alt="KOMMUchat"
                width={160}
                height={54}
                className="w-[160px] h-auto"
              />
            </Link>
            <p className="mt-3 text-sm max-w-[280px]">{FOOTER.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-8 sm:gap-10" aria-label="Links do rodapé">
            {Object.entries(FOOTER.links).map(([group, links]) => (
              <div key={group}>
                <p className="text-[#888888] font-semibold text-sm uppercase tracking-wider mb-3">
                  {group}
                </p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#888888] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="mt-12 pt-8 border-t border-[#1F1F1F] text-sm">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
