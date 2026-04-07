import Section from "../components/Section";
import Card from "../components/Card";
import { ArrowRight, MessageSquare, Users, BarChart3, Workflow } from "lucide-react";

const beneficios = [
  { icon: MessageSquare, titulo: "Centralização de Atendimentos", descricao: "Todos os canais de contato unificados em uma única plataforma para melhor controle." },
  { icon: Workflow, titulo: "Automação de Encaminhamentos", descricao: "Mensagens encaminhadas automaticamente para as áreas responsáveis dentro da ONG." },
  { icon: Users, titulo: "Acompanhamento de Status", descricao: "Cada solicitação acompanhada em tempo real: em aberto, em andamento ou concluído." },
  { icon: BarChart3, titulo: "Relatórios Gerenciais", descricao: "Geração de relatórios para apoiar a tomada de decisão e prestação de contas." },
];

const fluxo = [
  { passo: "1", titulo: "Recebimento", descricao: "Contatos chegam por e-mail, WhatsApp e formulário" },
  { passo: "2", titulo: "Classificação", descricao: "O sistema classifica e encaminha para a área correta" },
  { passo: "3", titulo: "Atendimento", descricao: "Equipe responsável atende a solicitação" },
  { passo: "4", titulo: "Relatório", descricao: "Geração automática de relatórios de acompanhamento" },
];

const Solucao = () => {
  return (
    <>
      <Section title="Nossa Solução" subtitle="Como o sistema transforma a gestão de atendimentos da Turma do Bem">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground text-center text-lg leading-relaxed">
            O Agente TDB é um sistema inteligente que centraliza e automatiza a gestão de
            atendimentos da Turma do Bem, garantindo agilidade, organização e qualidade no
            relacionamento com dentistas, voluntários, beneficiados e doadores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {beneficios.map((b) => (
            <Card key={b.titulo}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <b.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{b.titulo}</h3>
                  <p className="text-muted-foreground text-sm">{b.descricao}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Fluxo do Projeto" className="bg-muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fluxo.map((f, i) => (
            <div key={f.passo} className="relative text-center">
              <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display font-bold text-xl">
                {f.passo}
              </div>
              <h4 className="font-display font-semibold mb-1">{f.titulo}</h4>
              <p className="text-muted-foreground text-sm">{f.descricao}</p>
              {i < fluxo.length - 1 && (
                <ArrowRight size={20} className="hidden lg:block absolute top-5 -right-3 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Solucao;
