import ScrollReveal from "./ScrollReveal";

interface ServiceOverviewProps {
  title: string;
  description: string;
}

const ServiceOverview = ({ title, description }: ServiceOverviewProps) => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-dark font-sans text-xs tracking-[0.4em] uppercase">Overview</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mt-3 mb-8">
              {title}
            </h2>
            <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServiceOverview;
