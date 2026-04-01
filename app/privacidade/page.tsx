import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como a KOMMUchat coleta, usa e protege seus dados pessoais em conformidade com a LGPD.',
  alternates: { canonical: 'https://kommuchat.com.br/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] px-[var(--section-padding-x)] py-16 sm:py-24">
      <div className="mx-auto max-w-[860px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#888888] hover:text-[#111111] transition-colors mb-10"
        >
          ← Voltar para o início
        </Link>

        <h1 className="text-[#111111] text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-2">
          Política de Privacidade
        </h1>
        <p className="text-[#888888] text-sm mb-10">Última atualização: abril de 2026</p>

        <div className="prose prose-neutral max-w-none text-[#444444] leading-relaxed space-y-8">
          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">1. Quem somos</h2>
            <p>
              A <strong>KOMMUchat</strong> é uma plataforma de atendimento e agendamento automático
              para clínicas de saúde. Esta política descreve como coletamos, usamos e protegemos
              suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD —
              Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes categorias de dados:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Dados de contato: nome, e-mail, número de telefone e WhatsApp.</li>
              <li>Dados da clínica: nome, especialidade, horários de atendimento.</li>
              <li>Dados de uso: conversas e agendamentos processados pela plataforma.</li>
              <li>Dados técnicos: endereço IP, tipo de dispositivo e logs de acesso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">3. Como usamos seus dados</h2>
            <p>Os dados são usados para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Prestar e melhorar os serviços contratados.</li>
              <li>Enviar comunicações operacionais e de suporte.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Prevenir fraudes e garantir a segurança da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">4. Compartilhamento de dados</h2>
            <p>
              Não vendemos nem alugamos seus dados. Compartilhamos informações apenas com
              fornecedores necessários para a operação do serviço (ex.: WhatsApp Business API,
              Google Agenda) sob acordos de confidencialidade, ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">5. Seus direitos (LGPD)</h2>
            <p>
              Você tem direito a acessar, corrigir, excluir ou solicitar a portabilidade dos seus
              dados. Para exercer esses direitos, entre em contato pelo e-mail abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">6. Retenção de dados</h2>
            <p>
              Mantemos seus dados pelo período necessário à prestação dos serviços ou conforme
              exigido por lei. Após o cancelamento, os dados são excluídos em até 90 dias.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">7. Segurança</h2>
            <p>
              Aplicamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, perda ou destruição, incluindo criptografia em trânsito (TLS) e em
              repouso.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">8. Contato do encarregado (DPO)</h2>
            <p>
              Dúvidas sobre privacidade e proteção de dados podem ser enviadas para{' '}
              <a
                href="mailto:privacidade@kommuchat.com.br"
                className="text-[#e63030] hover:underline"
              >
                privacidade@kommuchat.com.br
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
