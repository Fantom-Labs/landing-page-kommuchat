'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import {
  TestimonialCardContent,
  testimonialCardClassName,
} from '@/components/ui/TestimonialCard';

type TestimonialItem = (typeof TESTIMONIALS)[number];

// 6 testimonials → 2 per column (no repetition)
const firstColumn = [...TESTIMONIALS].slice(0, 2);
const secondColumn = [...TESTIMONIALS].slice(2, 4);
const thirdColumn = [...TESTIMONIALS].slice(4, 6);

function TestimonialsColumn({
  testimonials,
  duration = 15,
  className = '',
}: {
  testimonials: TestimonialItem[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6 transition-colors duration-300"
      >
        {[
          ...Array(2)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                {testimonials.map((t, i) => (
                  <motion.li
                    key={`${index}-${t.id}-${i}`}
                    aria-hidden={index === 1 ? 'true' : 'false'}
                    tabIndex={index === 1 ? -1 : 0}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      boxShadow:
                        '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                    whileFocus={{
                      scale: 1.03,
                      y: -8,
                      boxShadow:
                        '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                      transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                    className={testimonialCardClassName}
                  >
                    <TestimonialCardContent
                      quote={t.quote}
                      name={t.name}
                      role={t.role}
                      stat={t.stat}
                      avatar={t.avatar}
                    />
                  </motion.li>
                ))}
              </React.Fragment>
            )),
        ]}
      </motion.ul>
    </div>
  );
}

export function SocialProof() {
  return (
    <section
      id="resultados"
      aria-labelledby="social-proof-heading"
      className="overflow-hidden bg-light-bg py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 },
          }}
          className="relative z-10"
        >
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-14">
            <SectionTitle
              badge="Quem usa"
              title="Clínicas que já automatizaram o WhatsApp"
              subtitle="Nutricionistas, psicólogos e consultórios que reduziram faltas e ganharam tempo."
              variant="light"
              centered
            />
          </div>

          {/* Mobile: coluna animada com pelo menos 4 depoimentos */}
          <div
            className="mt-10 flex justify-center overflow-hidden max-h-[740px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:hidden"
            role="region"
            aria-label="Depoimentos em rolagem"
          >
            <TestimonialsColumn
              testimonials={[...TESTIMONIALS].slice(0, 4)}
              duration={18}
            />
          </div>

          {/* Desktop: colunas animadas com rolagem infinita (comportamento atual) */}
          <div
            className="mt-10 hidden justify-center gap-6 overflow-hidden max-h-[740px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:flex"
            role="region"
            aria-label="Depoimentos em rolagem"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={19}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              duration={17}
              className="hidden lg:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
