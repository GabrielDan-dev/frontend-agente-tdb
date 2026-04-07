import { ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  to?: string;
  className?: string;
}

const variantStyles = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
};

const CustomButton = ({ children, variant = "primary", to, className = "", ...props }: ButtonProps) => {
  const base = `inline-flex items-center justify-center px-6 py-3 rounded-lg font-display font-semibold text-sm tracking-wide transition-all duration-200 ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
