import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceOverview from "@/components/ServiceOverview";
import BenefitsGrid from "@/components/BenefitsGrid";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import ComplianceSection from "@/components/ComplianceSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-ledger.jpg";
import { BookOpen, Shield, Search, Lock, Building2, Layers, RefreshCw, Server } from "lucide-react";

const benefits = [
  {
    icon: RefreshCw,
    title: "Efficient Value Movement",
    description: "Streamlined internal value movement and reconciliation between ledger systems.",
  },
  {
    icon: BookOpen,
    title: "Audit-Friendly Records",
    description: "Comprehensive ledger records and traceability for institutional-grade audit compliance.",
  },
  {
    icon: Layers,
    title: "Digital Workflow Support",
    description: "Supports eligible digital workflows including DLT/blockchain environments where permitted.",
  },
  {
    icon: Lock,
    title: "Controlled Access",
    description: "Authentication and monitoring ensure secure, controlled access to all ledger operations.",
  },
];

const steps = [
  {
    title: "Initiate Instruction",
    description: "Client initiates an instruction through internal or supported digital rail.",
  },
  {
    title: "Validate Authorization",
    description: "Bank validates authorization, destination details, and feasibility of the transfer.",
  },
  {
    title: "Compliance & Risk Checks",
    description: "Compliance screening and risk checks are performed on all ledger transfer instructions.",
  },
  {
    title: "Post & Confirm",
    description: "Ledger entries are posted and confirmations are issued through official channels.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Treasury Sweeps",
    description: "Internal treasury sweeps and intra-group movements between accounting ledgers.",
  },
  {
    icon: Server,
    title: "Digital Settlement",
    description: "Eligible digital settlement flows and custody-related movements.",
  },
  {
    icon: RefreshCw,
    title: "Operational Reconciliation",
    description: "Operational reconciliation between platforms and ledger systems.",
  },
];

const faqs = [
  {
    question: "What is a Ledger-to-Ledger transfer?",
    answer: "A transfer of value recorded from one ledger system to another, including internal ledgers and DLT/blockchain environments.",
    tags: ["ledger to ledger", "L2L", "DLT", "blockchain", "accounting records"],
  },
  {
    question: "Who can use Ledger-to-Ledger transfers?",
    answer: "Eligible Prominence Bank account holders, subject to policy, jurisdiction, and transaction risk assessment.",
    tags: ["account holders", "eligibility", "policy", "jurisdiction"],
  },
  {
    question: "Is Ledger-to-Ledger the same as a bank wire?",
    answer: "Not necessarily. A wire uses payment rails; ledger-to-ledger may involve internal posting or eligible DLT settlement.",
    tags: ["bank wire vs ledger", "payment rails", "internal posting", "DLT settlement"],
  },
  {
    question: "What assets can be transferred?",
    answer: "Depending on policy, bank ledger balances and/or supported digital assets, subject to jurisdiction and compliance conditions.",
    tags: ["digital assets", "supported assets", "jurisdiction", "compliance"],
  },
  {
    question: "Are Ledger-to-Ledger transfers reversible?",
    answer: "Internal transfers may be reversible before final posting; external ledger confirmations (e.g., on-chain) may be irreversible.",
    tags: ["reversibility", "final posting", "on-chain confirmation", "finality"],
  },
  {
    question: "How are transactions verified?",
    answer: "Transfers include authentication controls, audit logs, and—where applicable—external confirmation mechanisms.",
    tags: ["audit trail", "authentication", "verification", "confirmation"],
  },
  {
    question: "What compliance checks apply?",
    answer: "KYC/AML, sanctions screening, and monitoring apply. The bank may request supporting documentation for higher-risk flows.",
    tags: ["KYC AML", "sanctions", "monitoring", "supporting documents"],
  },
  {
    question: "Do you support integrations?",
    answer: "Where feasible, integrations may be implemented via APIs or standardized messaging, subject to security review and scope definition.",
    tags: ["API integration", "ISO 20022", "security review", "S2S"],
  },
];

const LedgerToLedgerTransfer = () => {
  return (
    <>
      <Helmet>
        <title>Ledger 2 Ledger Transfer | Prominence Bank - Digital Ledger Banking</title>
        <meta name="description" content="Controlled transfers between accounting ledgers and supported digital environments. Ledger-to-Ledger transfer services at Prominence Bank for institutional clients." />
        <meta name="keywords" content="ledger to ledger transfer, L2L transfer, DLT banking, blockchain transfer, internal ledger transfer, digital settlement" />
        <link rel="canonical" href="/ledger-to-ledger-transfer" />
      </Helmet>

      <Header />

      <main>
        <HeroSection
          title="Ledger 2 Ledger Transfer"
          tagline="Controlled transfers between accounting ledgers and supported digital environments."
          backgroundImage={heroImage}
        />

        <ServiceOverview
          title="Service Overview"
          description="Ledger-to-Ledger transfers record movement of value from one ledger system to another, including internal accounting ledgers and supported DLT/blockchain environments. This service provides efficient, auditable value transfers with controlled access and comprehensive monitoring across eligible digital and traditional platforms."
        />

        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-gold-dark font-sans text-xs tracking-[0.4em] uppercase">Advantages</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-rich-black mt-3">
                  Key Benefits
                </h2>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <BenefitsGrid benefits={benefits} />
            </div>
          </div>
        </section>

        <HowItWorks steps={steps} />

        <UseCases useCases={useCases} />

        <ComplianceSection
          text="Available to eligible account holders only. Digital ledger activity is subject to jurisdiction, policy, KYC/AML, sanctions screening, and transaction monitoring. All transfers require final bank approval."
          disclaimer="Not all assets or corridors are supported. Finality depends on the underlying rail (internal posting vs. external ledger confirmation). Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction."
        />

        <FAQSection faqs={faqs} />

        <CTABanner />
      </main>

      <Footer />
    </>
  );
};

export default LedgerToLedgerTransfer;
