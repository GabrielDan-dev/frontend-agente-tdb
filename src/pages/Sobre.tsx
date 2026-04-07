import Section from "../components/Section";
import { AlertTriangle, Lightbulb, Code, Map } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <Section title="Sobre o Projeto" subtitle="Entenda o desafio e a solução proposta para a Turma do Bem">
        <div className="grid md:grid-cols-2 gap-8">
          {/* O Desafio */}
          <div className="bg-card rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <AlertTriangle size={20} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-xl">O Desafio Atual</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente, os contatos da Turma do Bem chegam por múltiplos canais — principalmente e-mail
              e WhatsApp —, o que dificulta o controle e compromete a agilidade nas respostas. Os públicos
              atendidos são: Dentistas, Voluntários, Beneficiados, Doadores e Pessoas que solicitam ajuda.
            </p>
          </div>

          {/* A Solução */}
          <div className="bg-card rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Lightbulb size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">A Solução Proposta</h3>
            </div>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Centralizar todos os atendimentos em uma única plataforma;
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Automatizar o encaminhamento das mensagens para as áreas responsáveis;
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Permitir o acompanhamento do status de cada solicitação;
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Gerar relatórios gerenciais para apoiar a tomada de decisão;
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Garantir agilidade, organização e qualidade no relacionamento.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tecnologias */}
          <div className="bg-card rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Code size={20} className="text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Tecnologias</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Vite", "TailwindCSS", "React Router DOM", "React Hook Form"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-card rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Map size={20} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Roadmap</h3>
            </div>
            <p className="text-muted-foreground italic text-center py-4">
              Em breve: roadmap detalhado do projeto.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Sobre;
