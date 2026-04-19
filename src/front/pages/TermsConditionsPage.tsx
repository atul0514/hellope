import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FooterLinks from "../pages/components/FooterLinks";

/* ---------- TYPES ---------- */

type SectionProps = {
  title: string;
  content?: string;
  list?: string[];
};

/* ---------- PAGE ---------- */

export default function TermsConditionsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* HEADER */}

      <div className="bg-slate-900 text-white px-10">

        <div className="max-w-5xl mx-auto px-6 pb-12 pt-10">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-200 font-medium mb-6"
          >
            <FaArrowLeft />
            Back to Home
          </button>

          <h1 className="text-4xl font-bold">
            Terms & Conditions
          </h1>

          <p className="text-slate-300 mt-2">
            Last updated: April 1, 2026
          </p>

        </div>

      </div>


      {/* CONTENT */}

      <div className="max-w-5xl mx-auto px-6 pb-16 mt-14 space-y-10">

        <Section
          title="1. Acceptance of Terms"
          content='By accessing or using the UdaaanPe platform ("Platform"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our services. UdaaanPe is operated from DLF Corporate Green Tower 1, Sector 74, Gurgaon, Haryana 122001.'
        />

        <Section
          title="2. Definitions"
          list={[
            '"Platform" refers to the UdaaanPe website, mobile application, APIs, and related services.',
            '"User" refers to any individual, merchant, or business entity registered on the Platform.',
            '"Admin" refers to the master account holder with full platform management access.',
            '"Master User" refers to users with upline privileges.',
            '"API User" refers to users integrating payment APIs.',
            '"Wallet" refers to the digital wallet maintained on the Platform.',
          ]}
        />

        <Section
          title="3. Eligibility"
          content="To use the Platform, you must be at least 18 years old, a resident of India, and possess a valid PAN card and bank account. Business entities must be duly registered under applicable Indian laws. You must complete KYC verification before accessing transaction services."
        />

        <Section
          title="4. Account & Registration"
          list={[
            "Maintain confidentiality of login credentials.",
            "One account per individual/entity only.",
            "Downline accounts managed by respective Admin/Master users.",
            "Report unauthorized access immediately.",
            "Accounts may be suspended for violation of Terms.",
          ]}
        />

        <Section
          title="5. Services"
          list={[
            "Pay-In via UPI, bank transfer, payment links.",
            "Payout via NEFT, RTGS, IMPS, UPI.",
            "QR Code Payments for merchant collections.",
            "Virtual Accounts for reconciliation.",
            "Wallet services for fund management.",
            "Payment Links for invoices & collections.",
            "REST API integrations for developers.",
          ]}
        />

        <Section
          title="6. Wallet & Fund Requests"
          list={[
            "Wallet balances maintained in INR and non-interest bearing.",
            "Fund requests require upline approval.",
            "Direct top-ups reflect immediately.",
            "Wallet usable only within Platform.",
            "Balances may be frozen in suspected fraud cases.",
          ]}
        />

        <Section
          title="7. Fees & Charges"
          content="Transaction fees will be communicated during initiation. Fee structures may change with prior notice. GST and applicable taxes will be charged as per prevailing laws. Detailed schedules are available on the dashboard."
        />

        <Section
          title="8. Prohibited Activities"
          list={[
            "Fraudulent or unlawful activities.",
            "Providing incorrect KYC information.",
            "Unauthorized system access attempts.",
            "Unauthorized API usage.",
            "Violations of RBI or NPCI rules.",
            "Reverse engineering Platform infrastructure.",
          ]}
        />

        <Section
          title="9. Limitation of Liability"
          content="UdaaanPe shall not be liable for indirect or consequential damages. Total liability shall not exceed transaction fees paid in the preceding 12 months. Banking delays or force majeure events are outside our control."
        />

        <Section
          title="10. Dispute Resolution"
          content="Disputes are governed by Indian law and subject to Gurgaon jurisdiction. Parties agree to attempt resolution via our Grievance Redressal mechanism before legal proceedings."
        />

        <Section
          title="11. Amendments"
          content="We may modify these Terms at any time. Continued use after updates implies acceptance. Material changes will be communicated via email or Platform notifications."
        />


        {/* CONTACT BLOCK */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-3">
            12. Contact
          </h2>

          <div className="space-y-2 text-gray-700">

            <p>UdaaanPe</p>

            <p>
              DLF Corporate Green Tower 1,
              Sector 74, Gurgaon, Haryana 122001
            </p>

            <p>Email: Care@udaaanpe.com</p>

            <p>TelFax: 0124-5181388, 9319411899</p>

            <p>Website: www.udaaanpe.com</p>

          </div>

        </div>

      </div>

      <FooterLinks />

    </div>
  );
}


/* ---------- SECTION COMPONENT ---------- */

function Section({
  title,
  content,
  list,
}: SectionProps) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>

      {content && (
        <p className="text-gray-700 leading-relaxed">
          {content}
        </p>
      )}

      {list && (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {list.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

    </div>

  );

}