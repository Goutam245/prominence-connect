import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  tagline: string;
  backgroundImage: string;
}

const HeroSection = ({ title, tagline, backgroundImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rich-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/40 via-transparent to-rich-black" />
      </div>

      {/* Gold particle overlay */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Gold light rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsla(43, 72%, 52%, 0.3), transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6">
            <span className="text-gold/60 font-sans text-xs tracking-[0.4em] uppercase border border-gold/20 px-4 py-2">
              Prominence Bank
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-gold leading-tight mb-6 max-w-5xl mx-auto"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-champagne/70 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent" />
    </section>
  );
};

export default HeroSection;
