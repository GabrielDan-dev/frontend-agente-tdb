import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Shield } from "lucide-react";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/solucao", label: "Solução" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
  { to: "/integrantes", label: "Integrantes" },
];

const formLinks = [
  { to: "/voluntario", label: "Quero Ser Voluntário" },
  { to: "/dentista", label: "Sou Dentista" },
  { to: "/beneficiario", label: "Preciso de Atendimento" },
  { to: "/doacao", label: "Fazer Doação" },
  { to: "/atendimento", label: "Falar com Atendente" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 rounded-md text-primary-foreground/80 hover:text-primary-foreground"
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop */}
      <ul className="hidden lg:flex items-center gap-1">
        {mainLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        {/* Dropdown Participar */}
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              formLinks.some((l) => l.to === location.pathname)
                ? "bg-secondary text-secondary-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Participar <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full right-0 mt-2 w-56 rounded-lg bg-card card-shadow py-2 z-50 animate-fade-in">
              {formLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      location.pathname === link.to
                        ? "text-primary font-semibold bg-accent"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/admin"
            className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            <Shield size={14} /> Admin
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      {open && (
        <ul className="absolute top-full right-0 mt-2 w-56 rounded-lg bg-card card-shadow py-2 z-50 lg:hidden animate-fade-in max-h-[80vh] overflow-y-auto">
          {mainLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  location.pathname === link.to
                    ? "text-primary font-semibold bg-accent"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-border my-1" />
          <li className="px-4 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Participar</li>
          {formLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  location.pathname === link.to
                    ? "text-primary font-semibold bg-accent"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="border-t border-border my-1" />
          <li>
            <Link to="/admin" onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent">
              <Shield size={14} /> Área Administrativa
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
