import { useForm } from "react-hook-form";
import { useState } from "react";
import Section from "../components/Section";
import CustomButton from "../components/CustomButton";
import { ContatoFormData } from "../types";
import { CheckCircle, Send } from "lucide-react";

const Contato = () => {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoFormData>();

  const onSubmit = (_data: ContatoFormData) => {
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors";

  return (
    <Section title="Contato" subtitle="Envie sua mensagem para a equipe do projeto">
      <div className="max-w-xl mx-auto">
        {enviado && (
          <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-accent text-accent-foreground animate-fade-in">
            <CheckCircle size={20} />
            <p className="font-medium text-sm">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold mb-1.5">
              Nome *
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              className={inputBase}
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className={inputBase}
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="assunto" className="block text-sm font-semibold mb-1.5">
              Assunto *
            </label>
            <input
              id="assunto"
              type="text"
              placeholder="Assunto da mensagem"
              className={inputBase}
              {...register("assunto", { required: "Assunto é obrigatório" })}
            />
            {errors.assunto && (
              <p className="mt-1 text-sm text-destructive">{errors.assunto.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-semibold mb-1.5">
              Mensagem *
            </label>
            <textarea
              id="mensagem"
              rows={5}
              placeholder="Escreva sua mensagem..."
              className={`${inputBase} resize-none`}
              {...register("mensagem", {
                required: "Mensagem é obrigatória",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter no mínimo 10 caracteres",
                },
              })}
            />
            {errors.mensagem && (
              <p className="mt-1 text-sm text-destructive">{errors.mensagem.message}</p>
            )}
          </div>

          <CustomButton type="submit" variant="primary" className="w-full">
            <Send size={16} className="mr-2" /> Enviar
          </CustomButton>
        </form>
      </div>
    </Section>
  );
};

export default Contato;
