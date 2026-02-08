import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTABanner = () => {
  return (
    <section className="relative py-24 bg-marble overflow-hidden">
      {/* Gold radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, hsla(43, 72%, 52%, 0.4), transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <span className="text-gold/60 font-sans text-xs tracking-[0.4em] uppercase">Get Started</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-gold mt-3 mb-4 max-w-3xl mx-auto">
            Join Prominence Bank to Access Institutional-Grade Services
          </h2>
          <p className="font-sans text-champagne/60 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Become an account holder to access this service. Open an account online or contact Prominence Bank for eligibility review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
