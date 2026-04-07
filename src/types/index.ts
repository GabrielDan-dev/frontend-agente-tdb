export interface IntegranteType {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github?: string;
  linkedin?: string;
}

export interface FAQItemType {
  pergunta: string;
  resposta: string;
}

export interface ContatoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface VoluntarioFormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  areaAtuacao: string;
  disponibilidade: string;
  observacoes: string;
}

export interface DentistaFormData {
  nomeCompleto: string;
  cro: string;
  especialidade: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
}

export interface BeneficiarioFormData {
  nomeCompleto: string;
  cpf: string;
  dataNascimento: string;
  responsavel: string;
  telefone: string;
  email: string;
  cidade: string;
  estado: string;
}

export interface DoacaoFormData {
  nomeCompleto: string;
  email: string;
  tipoDoacao: string;
  valor: string;
  mensagem: string;
}

export interface AtendimentoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface BeneficioType {
  titulo: string;
  descricao: string;
  icone: string;
}
