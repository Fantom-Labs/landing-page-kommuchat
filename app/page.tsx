import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { SocialProof } from '@/components/sections/SocialProof';
import { AllInOne } from '@/components/sections/AllInOne';
import { FAQ } from '@/components/sections/FAQ';
// import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FAQ_ITEMS } from '@/lib/constants';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KOMMUchat',
  url: 'https://kommuchat.com.br',
  logo: 'https://kommuchat.com.br/images/kommuchat_logo%20dark.svg',
  description:
    'Secretária virtual com IA para clínicas e consultórios. Automatize atendimento e agendamento via WhatsApp.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'Portuguese',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main>
        <Header />
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <SocialProof />
        <AllInOne />
        <FAQ />
        {/* <Pricing /> */}
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
