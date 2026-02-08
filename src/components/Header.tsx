import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ip-to-ip-interbank-transfer", label: "IP 2 IP Transfer" },
    { to: "/ledger-to-ledger-transfer", label: "Ledger 2 Ledger" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-rich-black/90 backdrop-blur-md border-b border-gold/10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="font-serif text-rich-black font-bold text-lg">P</span>
            </div>
            <div>
              <span className="text-gradient-gold font-serif text-xl font-semibold tracking-wider">
                PROMINENCE
              </span>
              <span className="block text-champagne/60 text-[10px] tracking-[0.3em] font-sans uppercase -mt-1">
                Bank
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-sans tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-champagne/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className="px-6 py-2.5 bg-gradient-gold text-rich-black font-sans text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Open an Account
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-champagne"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-6 border-t border-gold/10 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-champagne/70 hover:text-gold text-sm font-sans tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3 bg-gradient-gold text-rich-black font-sans text-sm font-semibold tracking-wide text-center"
            >
              Open an Account
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
