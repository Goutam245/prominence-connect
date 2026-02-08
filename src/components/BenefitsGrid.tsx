import ScrollReveal from "./ScrollReveal";
import { LucideIcon } from "lucide-react";

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  benefits: BenefitItem[];
}

const BenefitsGrid = ({ benefits }: BenefitsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {benefits.map((benefit, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="group relative p-8 bg-cream border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:gold-border-glow">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-gold rounded-sm">
                <benefit.icon className="w-5 h-5 text-rich-black" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-rich-black mb-2">{benefit.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default BenefitsGrid;
