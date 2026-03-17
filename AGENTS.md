# AGENTS.md

## Projeto
- Nome: **NLW Operator (devroast)**
- Stack principal: **Next.js + React + TypeScript + Tailwind CSS**
- Objetivo: interface para enviar código e receber uma análise/"roast".

## Regras Globais
- Priorize componentes **pequenos, reutilizáveis** e com API de **composição**.
- Em componentes com comportamento (ex.: toggle), use primitivos do **Base UI**.
- Code block deve usar **Shiki** (tema `vesper`) e renderização no **server side**.
- Mantenha visual consistente com o design do projeto (tema escuro, tipografia mono).

## Padrões de Código
- Use **named exports** (sem default export para UI compartilhada).
- Componentes em `src/components/ui` devem ser genéricos e agnósticos de página.
- Evite lógica de API nas páginas de interface inicial: prefira dados estáticos até integração.

## Estrutura-chave
- `src/app`: rotas e layout global
- `src/components/ui`: biblioteca de componentes reutilizáveis
- `src/components/app`: componentes de composição de páginas
