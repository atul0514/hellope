import { useNavigate } from "react-router-dom";
import FooterLinks from "../pages/components/FooterLinks";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function GrievancePage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* HEADER */}
      <div className="bg-slate-900 text-white px-10 ">
        <div className="max-w-5xl mx-auto px-6 pb-6 pt-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-6"
          >
            <FaArrowLeft />
            Back to Home
          </button>

          <h1 className="text-4xl font-bold text-white-900">
            Grievance Redressal
          </h1>

          <p className="text-white-500 mt-2">
            Last updated: April 19, 2026
          </p>

        </div>       

      </div>


      <div className="max-w-5xl mx-auto px-6 pb-16 mt-10 space-y-10">

        {/* SECTION 1 */}
        <Section
          title="1. Our Commitment"
          content={`UdaaanPe is committed to providing a transparent, fair, and efficient grievance redressal mechanism for all our users. This policy complies with Reserve Bank of India (RBI) guidelines for payment aggregators and intermediaries.`}
        />


        {/* SECTION 2 */}
        <Section
          title="2. Types of Grievances"
          list={[
            "Failed or delayed transactions (Pay-in, Payout, UPI, NEFT/RTGS/IMPS)",
            "Unauthorized or fraudulent transactions",
            "Incorrect deduction or credit of wallet funds",
            "Fund request approval issues",
            "KYC verification delays or rejections",
            "QR code / payment link / virtual account issues",
            "API integration issues or downtime",
            "Service quality concerns or misconduct"
          ]}
        />


        {/* SECTION 3 */}
        <h2 className="text-2xl font-semibold">
          3. Grievance Redressal Process
        </h2>


        {/* LEVEL CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          <LevelCard
            title="Level 1 — Customer Support"
            description="Acknowledgement within 24 hours. Resolution within 7 working days."
          >
            <ContactLine icon={<FaEnvelope />} text="Care@udaaanpe.net" />
            <ContactLine icon={<FaPhoneAlt />} text="0124-5181388 / 9319411899" />
            <ContactLine icon={"🎫"} text="Support ticket via dashboard" />
          </LevelCard>


          <LevelCard
            title="Level 2 — Grievance Officer"
            description="Escalate if unresolved after 7 working days. Response within 48 hours."
          >
            <ContactLine icon={<FaBuilding />} text="DLF Corporate Green Tower 1, Gurgaon" />
            <ContactLine icon={<FaEnvelope />} text="Care@udaaanpe.net" />
            <ContactLine icon={<FaPhoneAlt />} text="0124-5181388" />
          </LevelCard>


          <LevelCard
            title="Level 3 — RBI Escalation"
            description="Escalate after 30 days if unresolved."
          >
            <ContactLine
              icon={<FaExternalLinkAlt />}
              text="https://cms.rbi.org.in"
            />
            <ContactLine icon={"📞"} text="RBI Helpline: 14448" />
          </LevelCard>

        </div>


        {/* SECTION 4 */}
        <Section
          title="4. Information Required"
          list={[
            "Registered name, email and mobile number",
            "Transaction ID / reference number",
            "Date and time of transaction",
            "Detailed description of issue",
            "Supporting screenshots or documents"
          ]}
        />


        {/* SECTION 5 TABLE */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            5. Turnaround Time (TAT)
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full bg-white rounded-xl shadow">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="text-left px-4 py-3">Complaint Type</th>
                  <th className="text-left px-4 py-3">Resolution Time</th>
                </tr>

              </thead>

              <tbody className="text-gray-700">

                <TableRow type="Failed transaction" tat="5 working days" />
                <TableRow type="Unauthorized transaction" tat="7–10 working days" />
                <TableRow type="Wallet issues" tat="3 working days" />
                <TableRow type="KYC issues" tat="7 working days" />
                <TableRow type="API / technical issues" tat="5 working days" />
                <TableRow type="General complaints" tat="7 working days" />

              </tbody>

            </table>

          </div>

        </div>


        {/* SECTION 6 */}
        <Section
          title="6. Refund Policy"
          content={`Refunds for failed transactions will be initiated within 5 working days after resolution. If third-party banks are involved, timelines depend on the respective institution.`}
        />


        {/* SECTION 7 */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-3">
            7. Contact Us
          </h2>

          <div className="space-y-2 text-gray-700">

            <p>UdaaanPe — Grievance Redressal</p>

            <p>
              DLF Corporate Green Tower 1,
              Sector 74, Gurgaon, Haryana 122001
            </p>

            <p>Email: Care@udaaanpe.net</p>

            <p>TelFax: 0124-5181388, 9319411899</p>

            <p>Website: www.udaaanpe.net</p>

          </div>

        </div>

      </div>

      <FooterLinks />

    </div>

  );

}



/* COMPONENTS */

function Section({ title, content, list }) {

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
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

    </div>

  );

}


function LevelCard({ title, description, children }) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-5">

      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-3">
        {description}
      </p>

      <div className="space-y-2 text-gray-700">
        {children}
      </div>

    </div>

  );

}


function ContactLine({ icon, text }) {

  return (

    <div className="flex items-center gap-2 text-sm">
      <span className="text-blue-600">{icon}</span>
      {text}
    </div>

  );

}


function TableRow({ type, tat }) {

  return (

    <tr className="border-t">

      <td className="px-4 py-3">{type}</td>

      <td className="px-4 py-3">{tat}</td>

    </tr>

  );

}