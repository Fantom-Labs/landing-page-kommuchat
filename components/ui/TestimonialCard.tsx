'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  stat?: string | null;
  avatar: string;
}

/** Inner content only – use inside motion.li or other wrapper for scroll columns */
export function TestimonialCardContent({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) {
  const isExternalAvatar = avatar.startsWith('http');
  return (
    <>
      <div className="mb-4 flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
            size={16}
            aria-hidden
          />
        ))}
      </div>
      <blockquote className="m-0 p-0">
        <p className="m-0 font-normal leading-relaxed text-[#555555] transition-colors duration-300">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-6 flex items-center gap-3">
          {isExternalAvatar ? (
            <img
              width={40}
              height={40}
              src={avatar}
              alt={`Foto de ${name}`}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-[#f0f0f0] transition-all duration-300 ease-in-out group-hover:ring-brand-red/30"
            />
          ) : (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-light-border ring-2 ring-[#f0f0f0] transition-all duration-300 group-hover:ring-brand-red/30">
              <Image
                src={avatar}
                alt={`Foto de ${name}`}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col">
            <cite className="not-italic tracking-tight leading-5 font-semibold text-[#111111]">
              {name}
            </cite>
            <span className="mt-0.5 text-sm leading-5 tracking-tight text-[#666666]">
              {role}
            </span>
          </div>
        </footer>
      </blockquote>
    </>
  );
}

const cardClassName =
  'group w-full max-w-xs cursor-default select-none rounded-3xl border border-light-border bg-white p-10 shadow-lg shadow-black/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red/30';

/** Standalone card with hover animation – for static grids */
export function TestimonialCard(props: TestimonialCardProps) {
  return (
    <motion.article
      className={cardClassName}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow:
          '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        transition: { type: 'spring', stiffness: 400, damping: 17 },
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <TestimonialCardContent {...props} />
    </motion.article>
  );
}

export { cardClassName as testimonialCardClassName };
