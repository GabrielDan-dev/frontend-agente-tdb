import type { BeneficiarioFormData, DentistaFormData, VoluntarioFormData, DoacaoFormData, AtendimentoFormData } from "../types";

export interface AdminBeneficiario extends BeneficiarioFormData {
  id: string;
  statusTriagem: "pendente" | "aprovado" | "reprovado";
  dataCadastro: string;
}

export interface AdminDentista extends DentistaFormData {
  id: string;
  ativo: boolean;
  dataCadastro: string;
}

export interface AdminVoluntario extends VoluntarioFormData {
  id: string;
  dataCadastro: string;
}

export interface AdminDoacao extends DoacaoFormData {
  id: string;
  dataCadastro: string;
}

export interface AdminAtendimento extends AtendimentoFormData {
  id: string;
  respondido: boolean;
  dataCadastro: string;
}

export const mockBeneficiarios: AdminBeneficiario[] = [
  { id: "1", nomeCompleto: "Lucas Silva", cpf: "123.456.789-00", dataNascimento: "2008-03-15", responsavel: "Maria Silva", telefone: "(11) 99999-0001", email: "lucas@email.com", cidade: "São Paulo", estado: "SP", statusTriagem: "aprovado", dataCadastro: "2025-01-10" },
  { id: "2", nomeCompleto: "Ana Oliveira", cpf: "987.654.321-00", dataNascimento: "2009-07-22", responsavel: "José Oliveira", telefone: "(11) 99999-0002", email: "ana@email.com", cidade: "Campinas", estado: "SP", statusTriagem: "pendente", dataCadastro: "2025-02-05" },
  { id: "3", nomeCompleto: "Pedro Santos", cpf: "456.789.123-00", dataNascimento: "2010-11-03", responsavel: "Clara Santos", telefone: "(21) 99999-0003", email: "pedro@email.com", cidade: "Rio de Janeiro", estado: "RJ", statusTriagem: "reprovado", dataCadastro: "2025-03-18" },
];

export const mockDentistas: AdminDentista[] = [
  { id: "1", nomeCompleto: "Dra. Fernanda Costa", cro: "SP-12345", especialidade: "Ortodontia", email: "fernanda@email.com", telefone: "(11) 98888-0001", cidade: "São Paulo", estado: "SP", ativo: true, dataCadastro: "2024-06-12" },
  { id: "2", nomeCompleto: "Dr. Ricardo Almeida", cro: "RJ-67890", especialidade: "Endodontia", email: "ricardo@email.com", telefone: "(21) 98888-0002", cidade: "Rio de Janeiro", estado: "RJ", ativo: true, dataCadastro: "2024-08-20" },
  { id: "3", nomeCompleto: "Dra. Patrícia Lima", cro: "MG-11223", especialidade: "Periodontia", email: "patricia@email.com", telefone: "(31) 98888-0003", cidade: "Belo Horizonte", estado: "MG", ativo: false, dataCadastro: "2024-10-05" },
];

export const mockVoluntarios: AdminVoluntario[] = [
  { id: "1", nomeCompleto: "Carla Mendes", email: "carla@email.com", telefone: "(11) 97777-0001", areaAtuacao: "Triagem", disponibilidade: "Fins de semana", observacoes: "Experiência em saúde", dataCadastro: "2025-01-20" },
  { id: "2", nomeCompleto: "Bruno Ferreira", email: "bruno@email.com", telefone: "(11) 97777-0002", areaAtuacao: "Eventos", disponibilidade: "Noites", observacoes: "", dataCadastro: "2025-02-14" },
];

export const mockDoacoes: AdminDoacao[] = [
  { id: "1", nomeCompleto: "Empresa ABC Ltda", email: "abc@empresa.com", tipoDoacao: "Financeira", valor: "5000", mensagem: "Contribuição mensal", dataCadastro: "2025-03-01" },
  { id: "2", nomeCompleto: "João Pereira", email: "joao@email.com", tipoDoacao: "Material", valor: "1200", mensagem: "Doação de equipamentos", dataCadastro: "2025-03-10" },
  { id: "3", nomeCompleto: "Maria Souza", email: "maria@email.com", tipoDoacao: "Financeira", valor: "300", mensagem: "", dataCadastro: "2025-03-15" },
];

export const mockAtendimentos: AdminAtendimento[] = [
  { id: "1", nome: "Teresa Nascimento", email: "teresa@email.com", assunto: "Dúvida sobre inscrição", mensagem: "Gostaria de saber como inscrever meu filho no programa.", respondido: true, dataCadastro: "2025-03-20" },
  { id: "2", nome: "Roberto Dias", email: "roberto@email.com", assunto: "Informação sobre voluntariado", mensagem: "Quero saber como posso ajudar como voluntário.", respondido: false, dataCadastro: "2025-03-22" },
];
