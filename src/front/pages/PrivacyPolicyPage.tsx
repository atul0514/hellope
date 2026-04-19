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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-slate-300 mt-2">
            Last updated: April 19, 2026
          </p>

        </div>

      </div>


      {/* CONTENT */}

      <div className="max-w-5xl mx-auto px-6 pb-16 mt-14 space-y-10">

        <Section
          title="1. Introduction"
          content='UdaaanPe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment platform and related services. We operate from DLF Corporate Green Tower 1, Sector 74, Gurgaon, Haryana 122001, India.'
        />

        <Section
          title="2. Information We Collect"
          list={[
            "Personal Information: Name, email, phone number, address, DOB, PAN, Aadhaar, bank details.",
            "KYC Documents: Identity and address proofs as required under RBI/NPCI guidelines.",
            "Transaction Data: Pay-in, payout, QR payments, virtual account activity, wallet transfers.",
            "Device Information: IP address, browser type, OS, device identifiers.",
            "Usage Data: Pages visited, feature usage, session duration, platform interactions.",
          ]}
        />

        <Section
          title="3. How We Use Your Information"
          list={[
            "Process pay-in, payout, UPI, QR and wallet transactions.",
            "Verify identity under RBI KYC/AML compliance.",
            "Create and manage your account and wallet.",
            "Detect fraud and unauthorized transactions.",
            "Send service alerts and updates.",
            "Improve platform analytics and user experience.",
            "Comply with applicable laws and regulations.",
          ]}
        />

        <Section
          title="4. Data Sharing & Disclosure"
          list={[
            "Banking partners for NEFT, RTGS, IMPS, UPI processing.",
            "Payment processors for secure transaction execution.",
            "Regulatory authorities like RBI, NPCI, FIU-IND.",
            "Service providers for hosting, SMS/email delivery, analytics.",
            "Law enforcement when required by legal obligation.",
          ]}
        />

        <Section
          title="5. Data Security"
          content="We implement industry-standard safeguards including 256-bit SSL encryption, secure server infrastructure, periodic security audits, and multi-factor authentication. Financial data remains encrypted both at rest and during transmission. However, no system is completely risk-free."
        />

        <Section
          title="6. Data Retention"
          content="We retain personal data while your account remains active and as required under the Prevention of Money Laundering Act (PMLA), Income Tax Act, and RBI regulations. Transaction records are preserved for at least 10 years as mandated."
        />

        <Section
          title="7. Your Rights"
          list={[
            "Access and review your stored personal information.",
            "Request correction of inaccurate data.",
            "Withdraw consent for marketing communication.",
            "Request account deletion (subject to regulatory retention rules).",
            "Lodge complaints with relevant authorities.",
          ]}
        />

        <Section
          title="8. Cookies & Tracking"
          content="We use cookies and similar technologies to enhance usability, remember preferences, and analyze usage patterns. You may control cookies through browser settings, though disabling them may affect functionality."
        />

        <Section
          title="9. Changes to This Policy"
          content='We may update this Privacy Policy periodically. Changes will appear on this page with a revised "Last updated" date. Continued platform use indicates acceptance of the updated policy.'
        />


        {/* CONTACT BLOCK */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-3">
            10. Contact Us
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