import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WhatsappFloat } from '@/components/ui/WhatsappFloat';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kommuchat.com.br'),
  title: {
    default: 'KOMMUchat — Secretária Virtual com IA para Clínicas e Consultórios',
    template: '%s | KOMMUchat',
  },
  description:
    'Automatize o atendimento e agendamento da sua clínica via WhatsApp com IA. Lembretes automáticos, CRM com histórico do paciente e integração com Google Agenda. Reduza faltas e responda pacientes 24h.',
  keywords: [
    'secretária virtual clínica',
    'agendamento automático WhatsApp',
    'atendimento 24h consultório',
    'IA para clínicas de saúde',
    'bot WhatsApp agendamento',
    'CRM para nutricionistas',
    'lembrete de consulta automático',
    'agenda médica online',
    'automação WhatsApp clínica',
    'KOMMUchat',
  ],
  icons: {
    icon: '/images/favicon.ico',
  },
  alternates: {
    canonical: 'https://kommuchat.com.br',
  },
  openGraph: {
    title: 'KOMMUchat — Secretária Virtual com IA para Clínicas',
    description:
      'Automatize o atendimento e agendamento da sua clínica via WhatsApp com IA. Lembretes automáticos, CRM e integração com Google Agenda. Reduza faltas e responda pacientes 24h.',
    url: 'https://kommuchat.com.br',
    siteName: 'KOMMUchat',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/hero%20image.png',
        width: 1710,
        height: 719,
        alt: 'KOMMUchat — Secretária Virtual com IA para Clínicas e Consultórios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOMMUchat — Secretária Virtual com IA para Clínicas',
    description:
      'Automatize o atendimento e agendamento da sua clínica via WhatsApp com IA. Lembretes automáticos, CRM e integração com Google Agenda.',
    images: ['/images/hero%20image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        {children}
        <WhatsappFloat />
      </body>
    </html>
  );
}
