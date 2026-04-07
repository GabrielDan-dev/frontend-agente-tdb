import { useForm } from "react-hook-form";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import CustomButton from "../components/CustomButton";
import { VoluntarioFormData } from "../types";
import { CheckCircle, Send } from "lucide-react";

const areasAtuacao = [
  { value: "administrativo", label: "Administrativo" },
  { value: "triagem", label: "Triagem" },
  { value: "eventos", label: "Eventos" },
  { value: "comunicacao", label: "Comunicação" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "outro", label: "Outro" },
];

const disponibilidades = [
  { value: "manha", label: "Manhã" },
  { value: "tarde", label: "Tarde" },
  { value: "noite", label: "Noite" },
  { value: "finais-semana", label: "Finais de semana" },
  { value: "flexivel", label: "Flexível" },
];

const Voluntario = () => {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VoluntarioFormData>();

  const onSubmit = (_data: VoluntarioFormData) => {
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <PageContainer title="Quero Ser Voluntário" subtitle="Preencha o formulário abaixo para se cadastrar como voluntário da Turma do Bem">
      <div className="max-w-xl mx-auto">
        {enviado && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground animate-fade-in">
            <CheckCircle size={20} />
            <p className="font-medium text-sm">Cadastro enviado com sucesso! Entraremos em contato em breve.</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          <FormInput
            id="nomeCompleto"
            label="Nome completo"
            placeholder="Seu nome completo"
            error={errors.nomeCompleto?.message}
            {...register("nomeCompleto", { required: "Nome é obrigatório" })}
          />
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            error={errors.email?.message}
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
            })}
          />
          <FormInput
            id="telefone"
            label="Telefone"
            placeholder="(11) 99999-9999"
            error={errors.telefone?.message}
            {...register("telefone", { required: "Telefone é obrigatório" })}
          />
          <FormSelect
            id="areaAtuacao"
            label="Área de atuação"
            options={areasAtuacao}
            error={errors.areaAtuacao?.message}
            {...register("areaAtuacao", { required: "Selecione uma área" })}
          />
          <FormSelect
            id="disponibilidade"
            label="Disponibilidade"
            options={disponibilidades}
            error={errors.disponibilidade?.message}
            {...register("disponibilidade", { required: "Selecione a disponibilidade" })}
          />
          <div>
            <label htmlFor="observacoes" className="block text-sm font-semibold mb-1.5">Observações</label>
            <textarea
              id="observacoes"
              rows={4}
              placeholder="Conte-nos mais sobre você..."
              className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
              {...register("observacoes")}
            />
          </div>
          <CustomButton type="submit" variant="primary" className="w-full">
            <Send size={16} className="mr-2" /> Enviar Cadastro
          </CustomButton>
        </form>
      </div>
    </PageContainer>
  );
};

export default Voluntario;
