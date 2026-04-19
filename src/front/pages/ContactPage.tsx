import { useNavigate, Link } from "react-router-dom";
import FooterLinks from "../pages/components/FooterLinks";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import React from "react";

/* ---------- TYPES ---------- */

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

/* ---------- PAGE ---------- */

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* HEADER */}

      <div className="bg-slate-900 text-white px-6 pt-10 pb-6">

        <div className="max-w-7xl mx-auto">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-200 font-medium mb-6"
          >
            <FaArrowLeft />
            Back to Home
          </button>

          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="text-slate-300 mt-2">
            We're here to help. Reach out to us anytime.
          </p>

        </div>

      </div>


      {/* CONTACT GRID */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 py-10">

        <ContactCard
          icon={<FaPhoneAlt />}
          title="Phone / TelFax"
          content={
            <>
              <p>0124-5181388</p>
              <p>9319411899</p>
            </>
          }
        />

        <ContactCard
          icon={<FaEnvelope />}
          title="Email"
          content={
            <>
              <p>Care@udaaanpe.com</p>

              <span className="text-sm text-gray-500">
                Support inquiries & general queries
              </span>
            </>
          }
        />

        <ContactCard
          icon={<FaMapMarkerAlt />}
          title="Registered Office"
          content={
            <p>
              DLF Corporate Green Tower 1,
              Sector 74, Gurgaon,
              Haryana 122001, India
            </p>
          }
        />

        <ContactCard
          icon={<FaClock />}
          title="Business Hours"
          content={
            <>
              <p>
                Monday – Saturday:
                10:00 AM – 7:00 PM IST
              </p>

              <p>Sunday: Closed</p>
            </>
          }
        />

      </div>


      {/* WEBSITE SECTION */}

      <div className="bg-white shadow-inner border-y">

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">

          <FaGlobe className="text-blue-600 text-xl" />

          <span className="font-semibold">
            Website:
          </span>

          <a
            href="https://www.udaaanpe.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.udaaanpe.com
          </a>

        </div>

      </div>


      {/* GRIEVANCE SECTION */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-2">
            Grievance Redressal
          </h2>

          <p className="opacity-90 leading-relaxed">

            If you have an unresolved complaint,
            please visit our

            <Link
              to="/grievance-redressal"
              className="font-semibold underline ml-1"
            >
              Grievance Redressal page
            </Link>

            {" "}or email us at

            <span className="font-semibold">
              {" "}Care@udaaanpe.com
            </span>.

            Our Grievance Officer will respond within 48 hours.

          </p>

        </div>

      </div>


      {/* FOOTER */}

      <FooterLinks />

    </div>
  );
}


/* ---------- CONTACT CARD COMPONENT ---------- */

function ContactCard({
  icon,
  title,
  content,
}: ContactCardProps) {
  return (

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-7 flex gap-4">

      <div className="text-blue-600 text-2xl mt-1">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {title}
        </h3>

        <div className="text-gray-600 leading-relaxed">
          {content}
        </div>

      </div>

    </div>

  );
}