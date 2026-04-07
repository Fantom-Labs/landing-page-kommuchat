/** Link principal para checkout / CTA (Kiwify) */
export const CHECKOUT_URL = 'https://pay.kiwify.com.br/pb7u5xV';

export const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Recursos', href: '#recursos' },
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
  body: 'Nossa equipe de suporte configura, programa e ajusta toda a sua secretária IA de forma personalizada para o seu consultório. Você não precisa entender de tecnologia, nem perder tempo com isso.',
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
    title: 'Conecte em minutos',
    description: 'Integração com seu WhatsApp em minutos. Você não precisa trocar o número do seu consultório.',
    icon: 'MessageCircle',
  },
  {
    id: '2',
    title: 'Personalizamos para você',
    description: 'Construímos sua secretária IA para atender seus pacientes de forma totalmente personalizada.',
    icon: 'Workflow',
  },
  {
    id: '3',
    title: 'Agenda integrada',
    description: 'Todas as consultas em um só lugar. Painel de controle com histórico do paciente.',
    icon: 'Calendar',
  },
  {
    id: '4',
    title: 'Tenha total controle sobre a sua IA',
    description: 'Com nosso CRM, você tem total controle sobre a sua IA',
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
  headline: 'Tudo que seu consultório precisa em uma secretária só.',
  headlineAccent: 'uma secretária só',
  subtitle: 'Agendamento, CRM, lembretes e relatórios. Construímos a sua secretária IA totalmente personalizada para você.',
  cta: 'Ver todos os recursos',
  ctaHref: CHECKOUT_URL,
  items: [
    {
      id: '1',
      title: 'Agendamentos',
      description: 'Nossa secretária IA atende seus pacientes, busca os melhores horários na sua agenda e marca a consulta de forma totalmente automatizada.',
      icon: 'CalendarClock',
    },
    {
      id: '2',
      title: 'Confirmações automáticas',
      description: 'Ela envia lembretes e confirmações automáticas de forma estratégica, garantindo que o paciente não esqueça da consulta.',
      icon: 'BellCheck',
    },
    {
      id: '3',
      title: 'Atendimento 24h por dia',
      description: 'A sua secretária IA trabalha 24h por dia, todos os dias da semana. Nunca tira folga e está sempre pronta para oferecer o melhor atendimento.',
      icon: 'Users',
    },
    {
      id: '4',
      title: 'Relatórios e métricas',
      description: 'Ela cria relatórios importantes, onde você pode mensurar a taxa de comparecimento, o desempenho da sua equipe e muito mais.',
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
  {
    id: '4',
    quote:
      'Estou desde 2016 em parceria com a KOMMU. Nesse período pude contar com essa equipe maravilhosa que pode me ajudar a alcançar meus objetivos. Hoje estou bem satisfeito!!',
    name: 'Dr. Jaziel Ribeiro',
    role: 'Novo Olhar',
    stat: null,
    avatar: '/images/profile5.png',
  },
  {
    id: '5',
    quote:
      'O diferencial da KOMMU é entender os anseios do clientes e adequá-los às premissas do mercado!',
    name: 'Dr. Gustavo Motta',
    role: 'Cirurgião Plástico',
    stat: null,
    avatar: '/images/profile7.png',
  },
  {
    id: '6',
    quote:
      'Indico a KOMMU, pois o sucesso da nossa parceria é onde juntos enxergamos os resultados.',
    name: 'Dr. Rodrigo Mello',
    role: 'Novo Olhar Oftalmologia',
    stat: null,
    avatar: '/images/profile6.png',
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
  headline: 'Seu atendimento completo com uma só ferramenta, sem perder tempo nem pacientes',
  headlineAccent: 'sem perder tempo nem pacientes',
  subtitle:
    'Pare de alternar entre WhatsApp, planilhas e agenda. Com a KOMMUchat, você centraliza conversas, CRM, agendamentos e relatórios em uma única plataforma, de forma simples, organizada e com o apoio da nossa equipe de suporte.',
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
