import Section from "../components/Section";
import CustomButton from "../components/CustomButton";
import { ArrowRight, Heart, Stethoscope, HandHelping, DollarSign, MessageCircle } from "lucide-react";

const programas = [
  {
    titulo: "Programa Dentista do Bem",
    descricao:
      "O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de vulnerabilidade social na faixa dos 11 a 17 anos. Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo tratamento. Após serem selecionados e entrarem no programa, os jovens recebem atendimento odontológico e gratuito – independente da complexidade dos casos – até completarem 18 anos.",
  },
  {
    titulo: "Programa Apolônias do Bem",
    descricao:
      "O Apolônias do Bem é um programa que oferece tratamento odontológico integral e gratuito a mulheres que viveram em situação de violência e tiveram seus dentes afetados durante as agressões. O objetivo é devolver o sorriso, a autoestima e a dignidade a essas mulheres, ajudando-as a quebrar o ciclo da violência e a recomeçar suas vidas.",
  },
];

const participar = [
  { titulo: "Quero Ser Voluntário", descricao: "Ajude na organização, triagens e eventos da TDB.", icon: HandHelping, to: "/voluntario" },
  { titulo: "Sou Dentista", descricao: "Doe seu talento e transforme um sorriso no seu consultório.", icon: Stethoscope, to: "/dentista" },
  { titulo: "Preciso de Atendimento", descricao: "Para jovens de 11 a 17 anos com problemas bucais graves.", icon: Heart, to: "/beneficiario" },
  { titulo: "Fazer Doação", descricao: "Sua contribuição financeira mantém o projeto funcionando.", icon: DollarSign, to: "/doacao" },
  { titulo: "Falar com Atendente", descricao: "Entre em contato com nossa equipe de atendimento.", icon: MessageCircle, to: "/atendimento" },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/atendimento-turma-do-bem.jpg')" }}
        />
        <div className="relative section-container py-20 md:py-32 text-center">
          <p className="text-primary-foreground/70 font-display text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Projeto Acadêmico FIAP
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in">
            Nossos Programas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A Turma do Bem transforma vidas através do acesso à saúde bucal para quem mais precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CustomButton to="/sobre" variant="secondary">
              Saiba Mais <ArrowRight size={16} className="ml-2" />
            </CustomButton>
            <CustomButton to="/contato" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Fale Conosco
            </CustomButton>
          </div>
        </div>
      </div>


      {/* Programas */}
      <Section title="Programas" subtitle="Conheça as iniciativas da Turma do Bem">
        <div className="flex flex-col gap-10">
          {programas.map((p) => (
            <div key={p.titulo} className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground card-shadow">
              <h3 className="inline-block bg-secondary text-secondary-foreground font-display font-bold text-xl md:text-2xl px-5 py-3 rounded-xl -mt-12 mb-4">
                {p.titulo}
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">{p.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quero Participar */}
      <Section title="Quero Participar!" className="bg-muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {participar.map((item) => (
            <CustomButton
              key={item.titulo}
              to={item.to}
              variant="outline"
              className="flex flex-col items-center gap-3 h-auto py-8 px-6 bg-card border-2 border-secondary text-foreground hover:border-primary hover:bg-accent hover:text-foreground"
            >
              <item.icon size={32} className="text-secondary" />
              <span className="font-display font-semibold text-lg text-secondary">{item.titulo}</span>
              <span className="text-muted-foreground text-sm font-normal text-center">{item.descricao}</span>
            </CustomButton>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
