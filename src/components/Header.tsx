import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hero-gradient sticky top-0 z-40">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo-turma-do-bem.png" alt="Logo Turma do Bem" className="h-10 w-auto" />
          <span className="font-display text-lg font-bold text-primary-foreground tracking-tight hidden sm:inline">
            Turma do Bem
          </span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
