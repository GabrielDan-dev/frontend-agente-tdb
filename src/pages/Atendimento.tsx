import { useForm } from "react-hook-form";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import { AtendimentoFormData } from "../types";
import { CheckCircle, Send } from "lucide-react";

const Atendimento = () => {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AtendimentoFormData>();

  const onSubmit = (_data: AtendimentoFormData) => {
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <PageContainer title="Falar com Atendente" subtitle="Envie sua mensagem e nossa equipe responderá o mais breve possível">
      <div className="max-w-xl mx-auto">
        {enviado && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground animate-fade-in">
            <CheckCircle size={20} />
            <p className="font-medium text-sm">Mensagem enviada com sucesso! Um atendente responderá em breve.</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          <FormInput
            id="nome"
            label="Nome"
            placeholder="Seu nome"
            error={errors.nome?.message}
            {...register("nome", { required: "Nome é obrigatório" })}
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
            id="assunto"
            label="Assunto"
            placeholder="Assunto da mensagem"
            error={errors.assunto?.message}
            {...register("assunto", { required: "Assunto é obrigatório" })}
          />
          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold mb-1.5">Mensagem *</label>
            <textarea
              id="mensagem"
              rows={5}
              placeholder="Escreva sua mensagem..."
              className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
              {...register("mensagem", {
                required: "Mensagem é obrigatória",
                minLength: { value: 10, message: "A mensagem deve ter no mínimo 10 caracteres" },
              })}
            />
            {errors.mensagem && <p className="mt-1 text-sm text-destructive">{errors.mensagem.message}</p>}
          </div>
          <CustomButton type="submit" variant="primary" className="w-full">
            <Send size={16} className="mr-2" /> Enviar Mensagem
          </CustomButton>
        </form>
      </div>
    </PageContainer>
  );
};

export default Atendimento;
