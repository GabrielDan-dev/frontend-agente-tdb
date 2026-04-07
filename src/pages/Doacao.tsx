import { useForm } from "react-hook-form";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import CustomButton from "../components/CustomButton";
import { DoacaoFormData } from "../types";
import { CheckCircle, Heart } from "lucide-react";

const tiposDoacao = [
  { value: "financeira", label: "Doação Financeira" },
  { value: "materiais", label: "Materiais Odontológicos" },
  { value: "equipamentos", label: "Equipamentos" },
  { value: "outro", label: "Outro" },
];

const Doacao = () => {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DoacaoFormData>();

  const onSubmit = (_data: DoacaoFormData) => {
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <PageContainer title="Fazer Doação" subtitle="Sua contribuição mantém o projeto funcionando e transforma vidas">
      <div className="max-w-xl mx-auto">
        {enviado && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground animate-fade-in">
            <CheckCircle size={20} />
            <p className="font-medium text-sm">Obrigado pela sua doação! Entraremos em contato com mais detalhes.</p>
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
          <FormSelect
            id="tipoDoacao"
            label="Tipo de doação"
            options={tiposDoacao}
            error={errors.tipoDoacao?.message}
            {...register("tipoDoacao", { required: "Selecione o tipo de doação" })}
          />
          <FormInput
            id="valor"
            label="Valor (R$)"
            placeholder="Ex: 100,00"
            error={errors.valor?.message}
            {...register("valor", { required: "Informe o valor" })}
          />
          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold mb-1.5">Mensagem</label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Deixe uma mensagem (opcional)..."
              className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
              {...register("mensagem")}
            />
          </div>
          <CustomButton type="submit" variant="primary" className="w-full">
            <Heart size={16} className="mr-2" /> Confirmar Doação
          </CustomButton>
        </form>
      </div>
    </PageContainer>
  );
};

export default Doacao;
