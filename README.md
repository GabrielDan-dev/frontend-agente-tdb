# Agente TDB — Sprint 03

Projeto acadêmico FIAP — Migração do frontend para React SPA.

## 📋 Descrição

O **Agente TDB** é um sistema inteligente que utiliza IA para auxiliar ONGs na gestão de doações, cadastro de beneficiários e geração de relatórios. Esta Sprint 03 migra todas as páginas da Sprint 02 (HTML estático) para uma aplicação moderna com React.

## 🚀 Tecnologias

- **React 18** — Biblioteca de UI
- **Vite 5** — Build tool
- **TypeScript 5** — Tipagem estática
- **TailwindCSS 3** — Estilização utilitária
- **React Router DOM 6** — Navegação SPA
- **React Hook Form** — Formulários com validação
- **Lucide React** — Ícones

## 📂 Estrutura de Pastas

```
src/
├── components/
│   ├── admin/
│   │   ├── AdminLayout.tsx      # Layout com sidebar da área admin
│   │   ├── AdminModal.tsx       # Modal reutilizável para CRUD
│   │   └── AdminTable.tsx       # Tabela reutilizável para listagens
│   ├── Card.tsx
│   ├── CustomButton.tsx
│   ├── Footer.tsx
│   ├── FormInput.tsx
│   ├── FormSelect.tsx
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── PageContainer.tsx
│   └── Section.tsx
├── data/
│   └── mockData.ts              # Dados simulados (mock do backend Java)
├── pages/
│   ├── admin/
│   │   ├── AdminLogin.tsx       # Tela de login do painel administrativo
│   │   ├── AdminDashboard.tsx   # Dashboard com indicadores
│   │   ├── AdminBeneficiarios.tsx
│   │   ├── AdminDentistas.tsx
│   │   ├── AdminVoluntarios.tsx
│   │   ├── AdminDoacoes.tsx
│   │   └── AdminAtendimentos.tsx
│   ├── Home.tsx
│   ├── Integrantes.tsx
│   ├── Sobre.tsx
│   ├── FAQ.tsx
│   ├── Contato.tsx
│   ├── Solucao.tsx
│   ├── Voluntario.tsx
│   ├── Dentista.tsx
│   ├── Beneficiario.tsx
│   ├── Doacao.tsx
│   └── Atendimento.tsx
├── routes/
│   └── Router.tsx
├── types/
│   └── index.ts                 # Interfaces TypeScript (simulam entidades Java)
└── App.tsx
```


Acesse `http://localhost:5173` no navegador.

## 🛣️ Rotas

| Rota                    | Página              |
| ----------------------- | ------------------- |
| `/`                     | Home                |
| `/sobre`                | Sobre               |
| `/integrantes`          | Integrantes         |
| `/solucao`              | Solução             |
| `/faq`                  | FAQ                 |
| `/contato`              | Contato             |
| `/voluntario`           | Formulário Voluntário |
| `/dentista`             | Formulário Dentista |
| `/beneficiario`         | Formulário Beneficiário |
| `/doacao`               | Formulário Doação   |
| `/atendimento`          | Formulário Atendimento |
| `/admin/login`          | Login Administrativo |
| `/admin`                | Dashboard Admin     |
| `/admin/beneficiarios`  | CRUD Beneficiários  |
| `/admin/dentistas`      | CRUD Dentistas      |
| `/admin/voluntarios`    | CRUD Voluntários    |
| `/admin/doacoes`        | CRUD Doações        |
| `/admin/atendimentos`   | CRUD Atendimentos   |

## 🔐 Área Administrativa

A área administrativa é protegida por **login e senha**. As credenciais de acesso são:

| Campo | Valor           |
| ----- | --------------- |
| E-mail | `admin@tdb.com` |
| Senha  | `admin123`      |

> ⚠️ **Nota:** A autenticação é simulada no frontend (sem backend real). Em produção, seria integrada com o backend Java via API REST com JWT.

## 🧪 Simulação do Backend Java

A área administrativa **simula a integração com um backend Java** que seria desenvolvido em sprints futuras. Os seguintes pontos são simulados:

### Entidades Java simuladas (TypeScript Interfaces)

As interfaces em `src/types/index.ts` representam as entidades que seriam classes Java (JPA/Hibernate):

- **Beneficiario** — equivale a `@Entity Beneficiario` no Java
- **Dentista** — equivale a `@Entity Dentista` no Java
- **Voluntario** — equivale a `@Entity Voluntario` no Java
- **Doacao** — equivale a `@Entity Doacao` no Java
- **Atendimento** — equivale a `@Entity Atendimento` no Java

### Dados Mock (`src/data/mockData.ts`)

Os dados exibidos nas tabelas e no dashboard são **dados fictícios armazenados em memória** usando `useState` do React. Eles simulam o que seria retornado por endpoints REST de um backend Spring Boot:

| Operação CRUD | Simulação Frontend         | Equivalente Java/Spring       |
| ------------- | -------------------------- | ----------------------------- |
| **Create**    | `setState([...prev, novo])`| `POST /api/beneficiarios`     |
| **Read**      | Renderização do estado     | `GET /api/beneficiarios`      |
| **Update**    | `setState(prev.map(...))`  | `PUT /api/beneficiarios/{id}` |
| **Delete**    | `setState(prev.filter(...))` | `DELETE /api/beneficiarios/{id}` |

### Autenticação simulada

O login administrativo utiliza `sessionStorage` para simular uma sessão autenticada. Em produção, seria substituído por autenticação via **Spring Security + JWT**.

> **Importante:** Nenhuma API é consumida. Todos os dados são locais e se perdem ao recarregar a página. O objetivo é demonstrar a interface e a estrutura que conectaria com o backend Java.

## 👥 Integrantes

| Nome         | RM       | Função               |
| ------------ | -------- | -------------------- |
| Gabriel Dã   | RM566985 | Full Stack Developer |
| Pedro Relich | RM567933 | Full Stack Developer |

## 🔗 GitHub

[Repositório do Projeto](https://github.com/GabrielDan-dev/frontend-agente-tdb)

## ▶️ Como Executar

```bash
git clone https://github.com/GabrielDan-dev/frontend-agente-tdb
cd agente-tdb
npm install
npm run dev
```

