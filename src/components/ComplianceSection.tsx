import ScrollReveal from "./ScrollReveal";
import { ShieldCheck } from "lucide-react";

interface ComplianceSectionProps {
  text: string;
  disclaimer: string;
}

const ComplianceSection = ({ text, disclaimer }: ComplianceSectionProps) => {
  return (
    <section className="py-20 bg-marble">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="border border-gold/20 p-8 md:p-12 relative">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold" />

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gradient-gold rounded-sm">
                  <ShieldCheck className="w-7 h-7 text-rich-black" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
                    Eligibility & Compliance
                  </h2>
                  <p className="font-sans text-champagne/70 text-sm leading-relaxed mb-4">
                    {text}
                  </p>
                  <p className="font-sans text-champagne/40 text-xs leading-relaxed italic">
                    {disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComplianceSection;
