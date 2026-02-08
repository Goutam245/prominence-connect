import ScrollReveal from "./ScrollReveal";
import { Briefcase, LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

const UseCases = ({ useCases }: UseCasesProps) => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-dark font-sans text-xs tracking-[0.4em] uppercase">Applications</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mt-3">
              Typical Use Cases
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group relative p-8 bg-secondary-foreground/[0.02] border border-gold/15 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5">
                <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-sm bg-gold/10">
                  <uc.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-rich-black mb-2">{uc.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{uc.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
