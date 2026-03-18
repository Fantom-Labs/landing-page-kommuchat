## KOMMUchat – Landing Page

Landing page responsiva para um produto de automação de WhatsApp para clínicas de saúde, construída com **Next.js 14**, **React 18** e **Tailwind CSS 3**.  
O foco é performance, animações sutis e um design limpo voltado para conversão.

### Destaques do projeto

- **Stack**: Next.js 14 (App Router), React 18, TypeScript e Tailwind CSS.
- **Animações suaves** com `framer-motion` (scroll animations, loops de depoimentos, hover states).
- **Design responsivo** com breakpoints, ajustes específicos para mobile (carrossel de depoimentos, layouts condicionais).
- **Componentização**: componentes reutilizáveis como `Badge`, `Button`, `SectionTitle`, `FeatureCard`, `TestimonialCard` etc.


### Acesse em https://kommuchat.com.br

### 🚀 Como rodar localmente

Pré‑requisitos:

- Node.js 18+ (recomendado)  
- npm ou yarn

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# acessar em
http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

### 🧱 Estrutura principal

- `app/page.tsx` – composição das seções da landing.
- `components/sections` – seções de alto nível (Hero, Problem, HowItWorks, Features, SocialProof, AllInOne, FAQ, FinalCTA).
- `components/ui` – componentes reutilizáveis de UI (botões, badges, cards, títulos de seção).
- `lib/constants.ts` – cópia dos textos, imagens e dados estáticos (features, depoimentos, FAQs etc.).
- `public/images` – assets otimizados usados no layout.


