import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-banking.jpg";
import { ArrowRight, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "IP 2 IP Interbank Transfer",
    description: "Secure server-to-server interbank transfer workflows for eligible corridors. Direct IP-based connectivity between institutions.",
    to: "/ip-to-ip-interbank-transfer",
  },
  {
    icon: Layers,
    title: "Ledger 2 Ledger Transfer",
    description: "Controlled transfers between accounting ledgers and supported digital environments, including DLT/blockchain.",
    to: "/ledger-to-ledger-transfer",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prominence Bank | Institutional-Grade Private Banking Services</title>
        <meta name="description" content="Prominence Bank offers institutional-grade banking services including IP 2 IP Interbank Transfer and Ledger 2 Ledger Transfer for discerning clients worldwide." />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-rich-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-rich-black/30 via-transparent to-rich-black" />
          </div>
          <div className="absolute inset-0 shimmer pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, hsla(43, 72%, 52%, 0.3), transparent 70%)" }}
          />

          <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="font-serif text-rich-black font-bold text-2xl">P</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold leading-tight mb-4"
            >
              Prominence Bank
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-champagne/50 font-sans text-sm tracking-[0.3em] uppercase mb-6"
            >
              Institutional-Grade Private Banking
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-champagne/70 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Exclusive financial services for discerning clients. Secure, compliant, and built for institutional excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/"
                className="px-10 py-4 bg-gradient-gold text-rich-black font-sans font-semibold text-sm tracking-wider hover:shadow-lg hover:shadow-gold/30 transition-all duration-500 gold-glow"
              >
                Open an Account
              </Link>
              <Link
                to="/"
                className="px-10 py-4 border border-gold/40 text-gold font-sans font-semibold text-sm tracking-wider hover:bg-gold/10 hover:border-gold transition-all duration-500"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent" />
        </section>

        {/* Services */}
        <section className="py-24 bg-marble">
          <div className="container mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-gold/60 font-sans text-xs tracking-[0.4em] uppercase">Our Services</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mt-3">
                  Premium Transfer Services
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <Link
                    to={service.to}
                    className="group block p-8 md:p-10 border border-gold/15 hover:border-gold/40 bg-charcoal/30 transition-all duration-500 hover:-translate-y-1 hover:gold-border-glow"
                  >
                    <div className="w-12 h-12 mb-6 flex items-center justify-center bg-gradient-gold rounded-sm">
                      <service.icon className="w-5 h-5 text-rich-black" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-champagne mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-champagne/50 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-sans text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance notice */}
        <section className="py-16 bg-rich-black border-t border-b border-gold/10">
          <div className="container mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <p className="text-champagne/30 font-sans text-xs text-center leading-relaxed max-w-3xl mx-auto">
                All services are available to Prominence Bank account holders only. Subject to eligibility, KYC/AML, sanctions screening, source of funds/wealth validation where required, transaction monitoring, corridor/counterparty acceptance, and final bank approval. Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction or issue any instrument.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
