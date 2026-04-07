import { useForm } from "react-hook-form";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import CustomButton from "../components/CustomButton";
import { DentistaFormData } from "../types";
import { CheckCircle, Send } from "lucide-react";

const especialidades = [
  { value: "clinico-geral", label: "Clínico Geral" },
  { value: "ortodontia", label: "Ortodontia" },
  { value: "endodontia", label: "Endodontia" },
  { value: "periodontia", label: "Periodontia" },
  { value: "protese", label: "Prótese Dentária" },
  { value: "odontopediatria", label: "Odontopediatria" },
  { value: "cirurgia", label: "Cirurgia Bucomaxilofacial" },
  { value: "outro", label: "Outra" },
];

const estados = [
  { value: "AC", label: "Acre" }, { value: "AL", label: "Alagoas" }, { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" }, { value: "BA", label: "Bahia" }, { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" }, { value: "ES", label: "Espírito Santo" }, { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" }, { value: "MT", label: "Mato Grosso" }, { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" }, { value: "PA", label: "Pará" }, { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" }, { value: "PE", label: "Pernambuco" }, { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" }, { value: "RN", label: "Rio Grande do Norte" }, { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" }, { value: "RR", label: "Roraima" }, { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" }, { value: "SE", label: "Sergipe" }, { value: "TO", label: "Tocantins" },
];

const Dentista = () => {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DentistaFormData>();

  const onSubmit = (_data: DentistaFormData) => {
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <PageContainer title="Sou Dentista" subtitle="Cadastre-se para ser voluntário e transformar sorrisos">
      <div className="max-w-xl mx-auto">
        {enviado && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground animate-fade-in">
            <CheckCircle size={20} />
            <p className="font-medium text-sm">Cadastro enviado com sucesso! Agradecemos seu interesse em transformar vidas.</p>
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
            id="cro"
            label="CRO"
            placeholder="Ex: CRO-SP 12345"
            error={errors.cro?.message}
            {...register("cro", { required: "CRO é obrigatório" })}
          />
          <FormSelect
            id="especialidade"
            label="Especialidade"
            options={especialidades}
            error={errors.especialidade?.message}
            {...register("especialidade", { required: "Selecione uma especialidade" })}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              id="cidade"
              label="Cidade"
              placeholder="Sua cidade"
              error={errors.cidade?.message}
              {...register("cidade", { required: "Cidade é obrigatória" })}
            />
            <FormSelect
              id="estado"
              label="Estado"
              options={estados}
              error={errors.estado?.message}
              {...register("estado", { required: "Selecione o estado" })}
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

export default Dentista;
