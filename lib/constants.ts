/** Link principal para checkout / CTA (Kiwify) */
export const CHECKOUT_URL = 'https://pay.kiwify.com.br/pb7u5xV';

export const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Resultados', href: '#recursos' },
  { label: 'Planos', href: '#precos' },
] as const;

export const HERO = {
  badge: 'Mais de 1000 consultas marcadas com IA',
  headline: 'Atendimento virtual 24h por dia para o seu consultório de nutrição ou clínica de saúde',
  headlineAccent: '24h por dia',
  subtitle:
    'Tenha uma secretária virtual que atende seus pacientes, agenda consultas, confirma horários e cuida do seu consultório 24 horas por dia.',
  ctaPrimary: 'Comece agora',
  ctaPrimaryHref: CHECKOUT_URL,
  ctaSecondary: 'Conheça mais',
  ctaSecondaryHref: '#como-funciona',
  microcopy: [
    'Sem fidelidade',
    'Configuração em minutos',
    'Suporte em português',
  ],
} as const;

export const PROBLEM = {
  badge: 'O problema',
  headline: 'WhatsApp virou trabalho em tempo integral.',
  headlineAccent: 'com tudo que você precisa',
  body: 'Entre mensagens de agendamento, confirmações e dúvidas frequentes, sua equipe perde horas. E mesmo assim pacientes continuam sem resposta. Com a KOMMUchat, você tem:',
  checklist: [
    'Lembretes automáticos de consultas para seus pacientes',
    'Atendimento e agendamento de consultas na sua agenda 24h',
    'Respostas humanizadas para todas as dúvidas frequentes',
    'Follow-up automático de pacientes que não agendaram.',
  ],
} as const;

export const SOLUTION_STEPS = [
  {
    id: '1',
    title: 'Conecte seu WhatsApp',
    description: 'Integração em minutos. Seus pacientes continuam falando com o mesmo número.',
    icon: 'MessageCircle',
  },
  {
    id: '2',
    title: 'Seu estilo',
    description: 'Escolha como a IA atende seus pacientes e todas as dúvidas frequentes.',
    icon: 'Workflow',
  },
  {
    id: '3',
    title: 'Agenda integrada',
    description: 'Todas as consultas em um só lugar. CRM com histórico do paciente.',
    icon: 'Calendar',
  },
  {
    id: '4',
    title: 'Humanize quando precisar',
    description: 'Passe para um atendente com contexto completo. Nada se perde.',
    icon: 'UserCheck',
  },
] as const;

export const HOW_IT_WORKS = {
  badge: 'Como funciona',
  headline: 'Do primeiro contato ao pós-consulta, automatizado.',
  steps: SOLUTION_STEPS,
} as const;

export const FEATURES = {
  badge: 'Funcionalidades',
  headline: 'Tudo que seu consultório precisa em um só lugar.',
  headlineAccent: 'um só lugar',
  subtitle: 'Agendamento, CRM, lembretes e relatórios. Sem planilhas nem trabalho manual.',
  cta: 'Ver todos os recursos',
  ctaHref: CHECKOUT_URL,
  items: [
    {
      id: '1',
      title: 'Agendamento 24h',
      description: 'Pacientes agendam sozinhos pelo WhatsApp. Horários disponíveis em tempo real.',
      icon: 'CalendarClock',
    },
    {
      id: '2',
      title: 'Confirmações automáticas',
      description: 'Lembretes e confirmação antes da consulta. Reduza faltas sem ligar.',
      icon: 'BellCheck',
    },
    {
      id: '3',
      title: 'Histórico do paciente',
      description: 'Conversas e histórico em um único perfil. CRM integrado ao WhatsApp.',
      icon: 'Users',
    },
    {
      id: '4',
      title: 'Relatórios e métricas',
      description: 'Taxa de comparecimento, horários mais procurados e desempenho da equipe.',
      icon: 'BarChart3',
    },
  ],
} as const;

export const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Depois que implementei a KOMMUchat, meus agendamentos aumentaram em 30% e o tempo de resposta caiu para segundos.',
    name: 'Raquel Galvão',
    role: 'VIDASlab, Recife',
    stat: '+60% comparecimento',
    avatar: '/images/profile1.png',
  },
  {
    id: '2',  
    quote:
      'Finalmente parei de perder horas respondendo "qual horário tem?". A KOMMUchat faz isso por mim.',
    name: 'Dra. Aracely Santana',
    role: 'Nutricionista, Ipojuca',
    stat: '98% satisfação',
    avatar: '/images/profile2.png',
  },
  {
    id: '3',
    quote:
      'Configuramos em uma tarde. Agora a recepção cuida do que importa: o paciente na sala.',
    name: 'Dra. Paulla Fontelles',
    role: 'Mellamface, Recife',
    stat: null,
    avatar: '/images/profile3.png',
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: '1',
    question: 'Preciso ter um número novo de WhatsApp?',
    answer:
      'Não. Você usa o mesmo número que já usa hoje. A KOMMUchat integra seu WhatsApp Business. Seus pacientes continuam falando no mesmo lugar.',
  },
  {
    id: '2',
    question: 'A IA responde sozinha ou alguém revisa?',
    answer:
      'A IA responde automaticamente dentro dos fluxos que você escolher (agendamento, confirmação, lembretes). Quando a conversa sair do script ou o paciente pedir um humano, o atendente assume com todo o histórico na tela.',
  },
  {
    id: '3',
    question: 'Funciona com minha agenda atual?',
    answer:
      'Sim. Integramos com Google Agenda. Os horários disponíveis são atualizados em tempo real para o paciente.',
  },
  {
    id: '4',
    question: 'Quanto tempo leva para configurar?',
    answer:
      'A maioria das clínicas fica no ar em menos de 5 dias. Você define o seu fluxo, horários e mensagens. Nosso suporte cria a sua conta e configura a integração inicial.',
  },
  {
    id: '5',
    question: 'E se eu quiser cancelar?',
    answer:
      'Sem fidelidade. Você pode cancelar quando quiser.',
  },
] as const;

export const PRICING_PLANS = [
  {
    id: 'basico',
    name: 'Básico',
    price: 397,
    period: 'mês',
    description: 'Para começar a automatizar',
    features: [
      '1 número WhatsApp',
      'Até 500 conversas/mês',
      'Agendamento automático',
      'Lembretes e confirmações',
      'Suporte por e-mail',
    ],
    cta: 'Começar',
    featured: false,
  },
  {
    id: 'recomendado',
    name: 'Recomendado',
    price: 497,
    period: 'mês',
    description: 'Para clínicas em crescimento',
    features: [
      '1 número WhatsApp',
      'Até 2.000 conversas/mês',
      'Tudo do Básico',
      'CRM com histórico do paciente',
      'Relatórios básicos',
      'Handoff para atendente humano',
      'Suporte prioritário',
    ],
    cta: 'Assinar agora',
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 797,
    period: 'mês',
    description: 'Para redes e grandes volumes',
    features: [
      'Até 3 números WhatsApp',
      'Conversas ilimitadas',
      'Tudo do Recomendado',
      'Multi-atendentes',
      'Relatórios avançados',
      'API e integrações',
      'Gerente de sucesso dedicado',
    ],
    cta: 'Falar com vendas',
    featured: false,
  },
] as const;

export const ALL_IN_ONE = {
  badge: 'Tudo em um',
  headline: 'Conversas, CRM, agenda e relatórios em uma única plataforma.',
  headlineAccent: 'uma única plataforma',
  subtitle:
    'Não precisa mais alternar entre WhatsApp, planilha e agenda. A KOMMUchat centraliza tudo.',
  tabs: [
    { id: 'agenda',     label: 'Agenda',    image: '/images/img-3.png' },
    { id: 'whatsapp',   label: 'WhatsApp',  image: '/images/img-4.png' },
    { id: 'pacientes',  label: 'Pacientes', image: '/images/img-5.png' },
    { id: 'dashboard',  label: 'Dashboard', image: '/images/img-6.png' },
  ],
} as const;

export const FINAL_CTA = {
  badge: 'Comece agora',
  headline: 'Transforme seu atendimento com Inteligência Artificial.',
  subtitle:
    'Adquira já e receba sua secretária virtual personalizada em até 7 dias. Pagamento mensal sem fidelidade.',
  cta: 'Começar agora mesmo',
  ctaHref: CHECKOUT_URL,
} as const;

export const FOOTER = {
  tagline: 'Secretária virtual com IA para clínicas e consultórios.',
  links: {
    Produto: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Preços', href: '#precos' },
      { label: 'FAQ', href: '#faq' },
    ],
    Legal: [
      { label: 'Termos de uso', href: '/termos' },
      { label: 'Privacidade', href: '/privacidade' },
    ],
    Contato: [
      { label: 'Contato', href: CHECKOUT_URL },
    ],
  },
  copyright: `© ${new Date().getFullYear()} KOMMUchat. Todos os direitos reservados.`,
} as const;
