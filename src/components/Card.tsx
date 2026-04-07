import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = true }: CardProps) => {
  return (
    <div
      className={`bg-card rounded-lg p-6 card-shadow transition-all duration-300 ${
        hover ? "hover:card-hover-shadow hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
