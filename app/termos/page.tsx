import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Leia os Termos de Uso da KOMMUchat — secretária virtual com IA para clínicas e consultórios.',
  alternates: { canonical: 'https://kommuchat.com.br/termos' },
};

export default function TermosPage() {
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
          Termos de Uso
        </h1>
        <p className="text-[#888888] text-sm mb-10">Última atualização: abril de 2026</p>

        <div className="prose prose-neutral max-w-none text-[#444444] leading-relaxed space-y-8">
          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">1. Aceitação dos termos</h2>
            <p>
              Ao contratar ou utilizar os serviços da <strong>KOMMUchat</strong>, você concorda com
              estes Termos de Uso. Caso não concorde, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">2. Descrição do serviço</h2>
            <p>
              A KOMMUchat oferece uma plataforma de atendimento e agendamento automático via
              WhatsApp, com inteligência artificial, CRM e integração com Google Agenda, destinada a
              clínicas de saúde, consultórios e profissionais de saúde.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">3. Cadastro e conta</h2>
            <p>
              O cliente é responsável por manter as informações de sua conta atualizadas e pela
              segurança de suas credenciais de acesso. O uso indevido da conta é de exclusiva
              responsabilidade do titular.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">4. Uso aceitável</h2>
            <p>
              O serviço deve ser utilizado apenas para fins lícitos e de acordo com as políticas do
              WhatsApp Business. É vedado o envio de mensagens de spam, conteúdo enganoso ou
              violação de privacidade de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">5. Pagamento e cancelamento</h2>
            <p>
              Os planos são cobrados mensalmente, sem fidelidade. O cancelamento pode ser solicitado
              a qualquer momento e tem efeito ao final do período já pago.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">6. Limitação de responsabilidade</h2>
            <p>
              A KOMMUchat não se responsabiliza por indisponibilidades do WhatsApp, Google ou
              qualquer serviço de terceiros que integre a plataforma. O SLA de uptime é informado no
              contrato de serviço.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">7. Alterações nos termos</h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento. Notificaremos os clientes ativos
              por e-mail sobre mudanças relevantes com, no mínimo, 15 dias de antecedência.
            </p>
          </section>

          <section>
            <h2 className="text-[#111111] text-xl font-semibold mb-3">8. Contato</h2>
            <p>
              Dúvidas sobre estes termos podem ser enviadas para{' '}
              <a
                href="mailto:contato@kommuchat.com.br"
                className="text-[#e63030] hover:underline"
              >
                contato@kommuchat.com.br
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
