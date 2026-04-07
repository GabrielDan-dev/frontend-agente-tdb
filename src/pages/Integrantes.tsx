import Section from "../components/Section";
import { IntegranteType } from "../types";
import { Github, Linkedin } from "lucide-react";

const integrantes: IntegranteType[] = [
  {
    nome: "Pedro Relich",
    rm: "567933",
    turma: "1TDSPA",
    foto: "/images/pedro-relich.jpeg",
    github: "https://github.com/pedrorelich-source?tab=overview&from=2025-12-01&to=2025-12-31",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-relich-de-lima-b40493358/",
  },
  {
    nome: "Gabriel Dã",
    rm: "566985",
    turma: "1TDSPA",
    foto: "/images/Screenshot 2025-11-09 at 22.12.09.png",
    github: "https://github.com/GabrielDan-dev",
    linkedin: "https://www.linkedin.com/in/gabriel-d%C3%A3-freitas-de-souza-45139b37a",
  },
];
const Integrantes = () => {
  return (
    <Section title="Equipe do Projeto" subtitle="Conheça os integrantes por trás do projeto">
      <div className="flex flex-wrap justify-center gap-8">
        {integrantes.map((integrante) => (
          <div
            key={integrante.rm}
            className="bg-card rounded-lg border-2 border-primary p-6 text-center card-shadow"
          >
            <img
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
            />
            <h3 className="font-display font-semibold text-xl text-secondary">{integrante.nome}</h3>
            <p className="text-foreground font-semibold mt-1">RM: {integrante.rm}</p>
            <p className="text-foreground font-semibold">Turma: {integrante.turma}</p>
            <div className="flex justify-center gap-4 mt-4">
              {integrante.github && (
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${integrante.nome}`}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Github size={24} />
                </a>
              )}
              {integrante.linkedin && (
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${integrante.nome}`}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Integrantes;
