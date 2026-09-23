# DUM Sede - Catálogo & Website Institucional

Aplicação web moderna construída com Next.js 15 (App Router), React 19, Tailwind CSS e Framer Motion para a **DUM Sede** (Maputo, Moçambique).

---

## 🚀 Como Fazer o Deploy no Vercel (Recomendado)

O projeto foi organizado segundo as **melhores práticas oficiais da Vercel** para Next.js 15, utilizando **Zero-Config**:

### Método 1: Via Vercel Dashboard (GitHub / Git)

1. Faça o push dos seus commits para o seu repositório no GitHub/GitLab.
2. Aceda a [vercel.com](https://vercel.com) e clique em **"Add New..." > "Project"**.
3. Importe o repositório deste projeto.
4. O Vercel detectará automaticamente as configurações:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Node.js Version**: `20.x` ou `22.x` (definido no `package.json`)
5. Clique em **Deploy**. O deploy será concluído em menos de 1 minuto!

---

### Método 2: Via Vercel CLI (Direto do Terminal)

Se preferir fazer deploy direto do terminal sem interface gráfica:

```bash
# Instalar a CLI da Vercel globalmente (caso não tenha)
npm install -g vercel

# Executar o deploy de preview
vercel

# Para deploy direto em produção
vercel --prod
```

---

## 🛠️ Tecnologias & Otimizações

- **Next.js 15 (App Router)** com geração estática de páginas (SSG - 162 páginas pré-renderizadas).
- **React 19** & **Tailwind CSS**.
- **Otimização de Imagens**: Next.js Image com formatos modernos AVIF e WebP.
- **Cabeçalhos de Segurança**: X-Frame-Options, X-Content-Type-Options e Referrer-Policy integrados no `next.config.mjs`.
- **Zero Config**: Sem necessidade de arquivos legados de override.

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Validar compilação de produção
npm run build
```
