import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-rich-black border-t border-gold/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
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
            </div>
            <p className="text-champagne/50 text-sm font-sans leading-relaxed max-w-md">
              Institutional-grade banking services for discerning clients. 
              All services are subject to eligibility, compliance review, and final bank approval.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ip-to-ip-interbank-transfer" className="text-champagne/50 hover:text-gold text-sm font-sans transition-colors">
                  IP 2 IP Interbank Transfer
                </Link>
              </li>
              <li>
                <Link to="/ledger-to-ledger-transfer" className="text-champagne/50 hover:text-gold text-sm font-sans transition-colors">
                  Ledger 2 Ledger Transfer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-gold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-champagne/50 hover:text-gold text-sm font-sans transition-colors">
                  Open an Account
                </a>
              </li>
              <li>
                <a href="#" className="text-champagne/50 hover:text-gold text-sm font-sans transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8">
          <p className="text-champagne/30 text-xs font-sans text-center leading-relaxed">
            © {new Date().getFullYear()} Prominence Bank. All rights reserved. Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction. Services are available to Prominence Bank account holders only, subject to eligibility, KYC/AML, sanctions screening, and final bank approval.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
