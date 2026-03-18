'use client';

import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/558199724313';

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-6 sm:right-6 sm:h-[72px] sm:w-[72px]"
    >
      <Image
        src="/images/WP.svg"
        alt=""
        width={72}
        height={72}
        className="h-full w-full"
        aria-hidden
      />
    </a>
  );
}
