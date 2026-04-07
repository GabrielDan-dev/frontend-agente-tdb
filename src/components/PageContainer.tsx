import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageContainer = ({ children, title, subtitle }: PageContainerProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>
        {children}
      </div>
    </section>
  );
};

export default PageContainer;
