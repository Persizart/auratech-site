# AuraTechIA - Site Oficial

Site oficial da AuraTechIA, empresa especializada em soluções de Inteligência Artificial e tecnologia.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Linguagem de programação tipada
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface moderna
- **Lucide React** - Ícones SVG

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/auratech-site.git
cd auratech-site
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build para Produção

Para gerar a versão estática do site:

```bash
npm run build
```

Os arquivos serão gerados na pasta `out/`.

## 🌐 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Configuração necessária:

1. No seu repositório GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O deploy será feito automaticamente a cada push na branch `main`

## 📁 Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       └── nextjs.yml          # Workflow do GitHub Actions
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── about/             # Página Sobre
│   │   ├── contact/           # Página Contato
│   │   ├── portfolio/         # Página Portfólio
│   │   ├── services/          # Página Serviços
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── animations/        # Componentes de animação
│   │   ├── layout/           # Componentes de layout
│   │   └── ui/               # Componentes de interface
│   └── lib/                  # Utilitários e tipos
├── next.config.js            # Configuração do Next.js
├── tailwind.config.ts        # Configuração do Tailwind
└── package.json             # Dependências do projeto
```

## 🎨 Personalização

### Cores e Tema
As cores do tema podem ser personalizadas no arquivo `src/app/globals.css` nas variáveis CSS customizadas.

### Componentes
Os componentes estão organizados em:
- `src/components/ui/` - Componentes base (botões, cards, etc.)
- `src/components/layout/` - Componentes de layout (navbar, footer)
- `src/components/animations/` - Componentes com animações

## 📞 Contato

Para mais informações sobre a AuraTechIA:
- Website: [Em breve no GitHub Pages]
- Email: contato@auratech.ia

## 📄 Licença

Este projeto é propriedade da AuraTechIA. Todos os direitos reservados.

