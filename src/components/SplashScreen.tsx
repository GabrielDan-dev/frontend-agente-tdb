import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const end = setTimeout(() => onFinish(), 2400);
    return () => { clearTimeout(timer); clearTimeout(end); };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src="/images/logo-turma-do-bem.png"
        alt="Logo Turma do Bem"
        className="h-28 w-auto animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-lg"
      />
      <span className="mt-4 font-display text-2xl font-bold text-primary-foreground tracking-wide">
        Turma do Bem
      </span>
    </div>
  );
};

export default SplashScreen;
