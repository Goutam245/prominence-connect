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
import heroImage from "@/assets/hero-banking.jpg";
import { Globe, Zap, Shield, Lock, Briefcase, Building2, Clock, Server } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Direct Interbank Connectivity",
    description: "Corridor-dependent direct connectivity between institutions for streamlined institutional transfers.",
  },
  {
    icon: Zap,
    title: "Potentially Faster Execution",
    description: "Once configured, IP 2 IP workflows can enable faster execution compared to traditional rails.",
  },
  {
    icon: Building2,
    title: "Enhanced Operational Coordination",
    description: "Institutional-grade operational coordination for complex treasury and settlement use cases.",
  },
  {
    icon: Shield,
    title: "Strong Security Posture",
    description: "Controlled connectivity with robust security protocols ensuring the integrity of every transfer.",
  },
];

const steps = [
  {
    title: "Establish Secure Connectivity",
    description: "Prominence Bank and the counterparty institution validate feasibility and establish secure connectivity.",
  },
  {
    title: "Submit Transfer Instruction",
    description: "Client submits instruction with beneficiary coordinates and documented purpose.",
  },
  {
    title: "Compliance & Risk Screening",
    description: "Compliance screening and risk approval are performed on all transfer instructions.",
  },
  {
    title: "Execute & Confirm",
    description: "Payment is executed through the established IP workflow and confirmed via official channels.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Institutional Treasury",
    description: "Institutional treasury movements and liquidity operations between qualified counterparties.",
  },
  {
    icon: Briefcase,
    title: "Bilateral Settlements",
    description: "Pre-agreed bilateral settlements between eligible institutions with established connectivity.",
  },
  {
    icon: Clock,
    title: "Time-Sensitive Transfers",
    description: "Time-sensitive bank-to-bank transfers where supported by established IP corridors.",
  },
];

const faqs = [
  {
    question: "What is an IP 2 IP interbank transfer?",
    answer: "A direct interbank transfer conducted via secure IP-based connectivity between two financial institutions' systems.",
    tags: ["IP to IP", "interbank transfer", "server-to-server", "S2S", "secure network"],
  },
  {
    question: "Is IP 2 IP transfer available to the public?",
    answer: "No. It is typically restricted to eligible, pre-qualified Prominence Bank account holders and depends on counterparty readiness.",
    tags: ["pre-qualified", "eligibility", "account holders", "counterparty bank"],
  },
  {
    question: "How fast is an IP 2 IP transfer?",
    answer: "Once configured, it can be near real-time; timing depends on bilateral procedures, operating windows, and compliance checks.",
    tags: ["near real-time", "transfer speed", "bilateral setup", "compliance"],
  },
  {
    question: "What information is required?",
    answer: "Beneficiary coordinates, routing details agreed with the counterparty, currency/amount, purpose of payment, and supporting documents for high-value flows.",
    tags: ["beneficiary coordinates", "routing details", "payment purpose", "documentation"],
  },
  {
    question: "Are IP 2 IP transfers subject to compliance review?",
    answer: "Yes. All transactions remain subject to KYC/AML, sanctions screening, risk assessment, and transaction monitoring.",
    tags: ["KYC AML", "sanctions screening", "risk approval", "monitoring"],
  },
  {
    question: "Can I cancel an IP 2 IP transfer?",
    answer: "Cancellation depends on settlement status and counterparty processing; reversals may not be possible once credited.",
    tags: ["cancellation", "reversal", "settlement finality", "recall"],
  },
  {
    question: "Why would an IP 2 IP transfer be unavailable?",
    answer: "Unsupported corridors, counterparty limitations, incomplete technical setup, or elevated compliance risk can prevent execution.",
    tags: ["corridor limitation", "counterparty restrictions", "technical setup"],
  },
  {
    question: "Do you provide confirmations?",
    answer: "Confirmations are provided via official bank-to-bank channels only (e.g., SWIFT where applicable or verified corporate email).",
    tags: ["bank-to-bank verification", "official channels", "confirmation", "SWIFT"],
  },
];

const IpToIpTransfer = () => {
  return (
    <>
      <Helmet>
        <title>IP 2 IP Interbank Transfer | Prominence Bank - Secure Server-to-Server Banking</title>
        <meta name="description" content="Secure server-to-server interbank transfer workflows for eligible corridors. Direct IP-based connectivity between institutions for institutional-grade transfers at Prominence Bank." />
        <meta name="keywords" content="IP to IP transfer, interbank transfer, server to server banking, S2S payment, secure bank transfer, institutional payments" />
        <link rel="canonical" href="/ip-to-ip-interbank-transfer" />
      </Helmet>

      <Header />

      <main>
        <HeroSection
          title="IP 2 IP Interbank Transfer"
          tagline="Secure server-to-server interbank transfer workflows for eligible corridors."
          backgroundImage={heroImage}
        />

        <ServiceOverview
          title="Service Overview"
          description="IP 2 IP Interbank Transfer refers to a direct interbank transfer via secure IP-based connectivity between institutions. It is typically used for institutional-grade flows where counterparties have established technical and operational alignment. This service enables controlled, auditable transfers through dedicated channels, ensuring the highest standards of security and operational excellence."
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
          text="Available to eligible, pre-qualified account holders only and subject to corridor/counterparty acceptance, technical feasibility, and full compliance review. All transfers are subject to KYC/AML, sanctions screening, source of funds/wealth validation where required, transaction monitoring, and final bank approval."
          disclaimer="Service availability varies and is not offered based on brochure requests. Execution is case-by-case and subject to internal policy and risk appetite. Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction."
        />

        <FAQSection faqs={faqs} />

        <CTABanner />
      </main>

      <Footer />
    </>
  );
};

export default IpToIpTransfer;
