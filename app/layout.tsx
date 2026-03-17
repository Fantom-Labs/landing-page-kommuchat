import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KOMMUchat — Secretária Virtual para Clínicas de Saúde',
  icons: {
    icon: '/images/favicon.ico',
  },
  description:
    'Atendimento e agendamento automático via WhatsApp com IA. Reduza faltas, responda pacientes 24h e libere sua equipe com a KOMMUchat.',
  openGraph: {
    title: 'KOMMUchat — Secretária Virtual com IA',
    description:
      'Atendimento e agendamento automático via WhatsApp com IA. Reduza faltas, responda pacientes 24h e libere sua equipe com a KOMMUchat.',
    url: 'https://kommuchat.com.br',
    siteName: 'KOMMUchat',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
