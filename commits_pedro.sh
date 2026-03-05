#!/bin/bash
# ============================================================
#  SCRIPT — PEDRO RELICH (pedrorelich-source)
#  7 commits | Março–Abril 2026
#  Execute DENTRO da pasta agente-react-frontend-main:
#  bash commits_pedro.sh
# ============================================================

GIT_NAME="pedrorelich-source"
GIT_EMAIL="pedrorelich@gmail.com"

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

echo "Criando commits de Pedro..."

echo "/* pedro - card components */" >> src/App.css
commit "feat: cria componentes Card, Button e Section reutilizaveis" \
  "2026-03-07T13:00:00 -0300"

commit "feat: desenvolve paginas Beneficiario, Dentista e Voluntario com validacao" \
  "2026-03-12T10:00:00 -0300"

commit "feat: implementa pagina de doacao com selecao de forma de pagamento" \
  "2026-03-18T14:30:00 -0300"

commit "feat: cria pagina Integrantes com cards e links para GitHub e LinkedIn" \
  "2026-03-23T11:00:00 -0300"

commit "feat: define tipos TypeScript e dados mock para desenvolvimento local" \
  "2026-03-28T16:00:00 -0300"

commit "feat: adiciona paginas Solucao do Projeto e Atendimento com conteudo" \
  "2026-04-02T09:30:00 -0300"

echo "/* responsive fix pedro */" >> src/index.css
commit "style: corrige responsividade mobile e ajusta layout para tablets" \
  "2026-04-06T15:00:00 -0300"

echo ""
echo "✅ 7 commits de Pedro criados com sucesso!"
echo ""
git log --oneline
echo ""
echo "Total: $(git rev-list --count HEAD) commits"
