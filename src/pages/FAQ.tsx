import { useState } from "react";
import Section from "../components/Section";
import { FAQItemType } from "../types";
import { ChevronDown } from "lucide-react";

const faqData: FAQItemType[] = [
  {
    pergunta: "Qual o prazo do projeto?",
    resposta: "O prazo para entrega do projeto é de 3 meses.",
  },
  {
    pergunta: "Quem pode usar a ferramenta?",
    resposta:
      "A ferramenta é destinada aos públicos da ONG Turma do Bem, incluindo dentistas, voluntários, beneficiados, doadores e pessoas que solicitam ajuda.",
  },
  {
    pergunta: "Como posso contribuir com o projeto?",
    resposta: "Você pode contribuir entrando em contato com a equipe pelo formulário de contato.",
  },
  {
    pergunta: "A ferramenta é gratuita para a ONG?",
    resposta:
      "Sim, como um projeto acadêmico para a Turma do Bem, a ferramenta será entregue gratuitamente para a ONG.",
  },
  {
    pergunta: "Quais são os principais benefícios da ferramenta?",
    resposta:
      "Os principais benefícios incluem a centralização de atendimentos, automação de encaminhamentos, acompanhamento de status e geração de relatórios gerenciais para otimizar a gestão.",
  },
  {
    pergunta: "Em que fase de desenvolvimento o projeto se encontra?",
    resposta:
      "Atualmente, o projeto está na fase de front-end design, focando na interface do usuário e na responsividade.",
  },
  {
    pergunta: "Existe documentação técnica disponível?",
    resposta: "Sim, toda a documentação técnica do projeto estará disponível no nosso repositório GitHub.",
  },
];

const AccordionItem = ({ item, isOpen, onToggle }: { item: FAQItemType; isOpen: boolean; onToggle: () => void }) => (
  <div className="border border-border rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/10 transition-colors"
    >
      <span className="font-display font-semibold text-foreground pr-4">{item.pergunta}</span>
      <ChevronDown
        size={20}
        className={`text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{item.resposta}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section title="Perguntas Frequentes" subtitle="Tire suas dúvidas sobre o projeto">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
