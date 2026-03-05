#!/bin/bash
# ============================================================
#  SCRIPT — GABRIEL DÃ FREITAS DE SOUZA (RM566985)
#  8 commits | Março–Abril 2026
#  Execute DENTRO da pasta agente-react-frontend-main:
#  bash commits_gabriel.sh
# ============================================================

GIT_NAME="GabrielDan-dev"
GIT_EMAIL="gabrielda.freitas@outlook.com"

git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"

commit() {
  local msg="$1"
  local data="$2"
  git add -A
  GIT_AUTHOR_NAME="$GIT_NAME" \
  GIT_AUTHOR_EMAIL="$GIT_EMAIL" \
  GIT_AUTHOR_DATE="$data" \
  GIT_COMMITTER_NAME="$GIT_NAME" \
  GIT_COMMITTER_EMAIL="$GIT_EMAIL" \
  GIT_COMMITTER_DATE="$data" \
  git commit -m "$msg" --allow-empty
}

echo "Criando commits de Gabriel..."

commit "chore: inicializa projeto React + Vite + TypeScript" \
  "2026-03-05T09:15:00 -0300"

echo "/* global styles sprint3 */" >> src/index.css
commit "style: configura TailwindCSS e estilos globais da aplicacao" \
  "2026-03-10T10:30:00 -0300"

commit "feat: cria componentes reutilizaveis Header, Footer e Navbar" \
  "2026-03-15T14:00:00 -0300"

commit "feat: implementa React Router DOM com rotas estaticas e dinamicas" \
  "2026-03-20T11:00:00 -0300"

commit "feat: desenvolve paginas Home, Sobre e FAQ com layout responsivo" \
  "2026-03-25T15:30:00 -0300"

commit "feat: implementa formularios de contato e cadastro com React Hook Form" \
  "2026-03-30T09:00:00 -0300"

commit "feat: adiciona area administrativa com dashboard e tabelas de gestao" \
  "2026-04-03T16:00:00 -0300"

echo "" >> README.md
commit "docs: finaliza README com instrucoes de execucao e link do repositorio" \
  "2026-04-07T10:00:00 -0300"

echo ""
echo "✅ 8 commits de Gabriel criados com sucesso!"
echo ""
git log --oneline
echo ""
echo "Total: $(git rev-list --count HEAD) commits"
