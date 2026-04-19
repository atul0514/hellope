import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FooterLinks from "../pages/components/FooterLinks";

export default function RefundPage() {

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
            Refunds & Cancellations
          </h1>

          <p className="text-slate-300 mt-2">
            Last updated: April 19, 2026
          </p>

        </div>

      </div>


      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pb-16 mt-14 space-y-10">


        <Section
          title="1. Overview"
          content={`This Refund & Cancellation Policy outlines the terms under which refunds are processed for transactions conducted through the UdaaanPe platform. All amounts are in Indian Rupees (₹ / INR) and comply with RBI guidelines and applicable consumer protection laws.`}
        />


        <Section
          title="2. Refund Eligibility"
          list={[
            "Failed Transactions: Amount reversed within 5 working days if transaction fails.",
            "Duplicate Transactions: Duplicate charges refunded after verification.",
            "Incorrect Amount Deduction: Excess amount refunded after investigation.",
            "Service Not Delivered: Full refund processed if service was not delivered."
          ]}
        />


        <Section
          title="3. Non-Refundable Items"
          list={[
            "Successfully completed transactions.",
            "Transaction surcharges and service fees.",
            "Low balance penalty charges (₹500/day below ₹1,00,000 wallet balance).",
            "Wallet top-ups via approved fund requests or payment gateway.",
            "Errors caused by incorrect beneficiary details or amount entry."
          ]}
        />


        {/* REFUND PROCESS TABLE */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            4. Refund Process
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full bg-white rounded-xl shadow">

              <thead className="bg-blue-600 text-white">

                <tr>
                  <th className="text-left px-4 py-3">Step</th>
                  <th className="text-left px-4 py-3">Action</th>
                  <th className="text-left px-4 py-3">Timeline</th>
                </tr>

              </thead>

              <tbody className="text-gray-700">

                <TableRow
                  step="1"
                  action="Raise complaint via Support / Email"
                  timeline="Immediate"
                />

                <TableRow
                  step="2"
                  action="Acknowledgement & investigation begins"
                  timeline="Within 24 hours"
                />

                <TableRow
                  step="3"
                  action="Investigation completed & decision communicated"
                  timeline="3–5 working days"
                />

                <TableRow
                  step="4"
                  action="Refund credited to wallet / source account"
                  timeline="5–7 working days"
                />

              </tbody>

            </table>

          </div>

        </div>


        <Section
          title="5. Refund Methods"
          list={[
            "Wallet Credit: Refunded directly to your UdaaanPe wallet.",
            "Source Account: Refund processed to original payment source.",
            "Bank Transfer: Refund via NEFT/IMPS in exceptional cases."
          ]}
        />


        <Section
          title="6. Cancellation Policy"
          list={[
            "Pending transactions can be cancelled before processing.",
            "Processing or successful transactions cannot be cancelled.",
            "Pending fund requests may be cancelled before approval.",
            "Account closure requests processed after balance settlement."
          ]}
        />


        <Section
          title="7. Dispute Resolution"
          content={`If you disagree with our refund decision, you may escalate the matter via our Grievance Redressal mechanism. Unresolved disputes may be further escalated to the RBI Ombudsman for Digital Transactions.`}
        />


        {/* CONTACT SECTION */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-3">
            8. Contact for Refund Queries
          </h2>

          <div className="space-y-2 text-gray-700">

            <p>UdaaanPe — Refund & Support</p>

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
          <FooterLinks/>
    </div>

  );

}



/* SECTION COMPONENT */

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


/* TABLE ROW COMPONENT */

function TableRow({ step, action, timeline }) {

  return (

    <tr className="border-t">

      <td className="px-4 py-3">{step}</td>

      <td className="px-4 py-3">{action}</td>

      <td className="px-4 py-3">{timeline}</td>

    </tr>

  );

}