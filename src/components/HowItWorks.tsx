import ScrollReveal from "./ScrollReveal";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="py-24 bg-charcoal-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold/60 font-sans text-xs tracking-[0.4em] uppercase">Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mt-3">
              How It Works
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Gold connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="relative pl-16 md:pl-24 pb-12 last:pb-0 group">
                {/* Medallion */}
                <div className="absolute left-0 md:left-2 top-0 w-12 h-12 md:w-12 md:h-12 rounded-full bg-gradient-gold flex items-center justify-center z-10 gold-glow-sm group-hover:gold-glow transition-all duration-500">
                  <span className="font-serif text-rich-black font-bold text-lg">{i + 1}</span>
                </div>

                <div className="pt-1">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-champagne mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-champagne/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
