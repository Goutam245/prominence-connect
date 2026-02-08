import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  tags: string[];
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-dark font-sans text-xs tracking-[0.4em] uppercase">Support</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mt-3">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-gold/15 bg-secondary-foreground/[0.02] px-6 data-[state=open]:border-gold/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="font-serif text-lg text-rich-black hover:text-gold hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-sans tracking-wider uppercase px-2.5 py-1 bg-gold/10 text-gold-dark border border-gold/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
