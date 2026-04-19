import { Link } from "react-router-dom";
import FooterLinks from "../pages/components/FooterLinks";

import heroBanner from "../../assets/herobanner.png";
import paymentBanner from "../../assets/payments.jpg";
import logo from "../../assets/logo.png";

import {
  FaMoneyBillWave,
  FaExchangeAlt,
  FaQrcode,
  FaMobileAlt,
  FaUniversity,
  FaShieldAlt
} from "react-icons/fa";

export default function HomePage() {

  return (

    <div className="bg-white">


      {/* ================= HEADER ================= */}

      <header className="absolute top-0 w-full z-50  bg-white/5">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* MENU */}

          <nav className="hidden md:flex gap-8 text-white font-medium">

            <a href="#services">Our Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#partners">Partners</a>

            <Link to="/contact">
              Contact
            </Link>

          </nav>


          {/* BUTTONS */}

          <div className="flex gap-3">

            <Link
              to="/login"
              className="bg-white text-[#0B2A8A] px-4 py-2 rounded-lg font-medium"
            >
              Login
            </Link>

            <Link
              to="/login"
              className="bg-[#FF7A18] text-white px-5 py-2 rounded-lg font-medium shadow"
            >
              Join Our Network
            </Link>

          </div>

        </div>

      </header>



      {/* ================= HERO ================= */}

      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "right 30% center"
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A8A]/90 via-[#0B2A8A]/75 to-transparent"></div>


        <div
          className="relative max-w-7xl mx-auto px-6 w-full py-20"
          data-aos="fade-right"
        >

          <div className="max-w-2xl text-white">


            <img
              src={logo}
              alt="Udaanpe"
              className="h-32 mb-6"
              data-aos="zoom-in"
            />


            <h1 className="text-4xl md:text-6xl font-bold leading-tight">

              Building An Inclusive Future

              <span className="text-[#FF7A18]">

                {" "}For 1bn+ Indians

              </span>

            </h1>


            <p className="mt-6 text-lg text-gray-200">

              AI-led New India's leading fintech platform delivering ultra-low-cost
              banking services through agent networks across Bharat.

            </p>


            <div
              className="mt-8 flex gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <Link
                to="/login"
                className="bg-[#FF7A18] px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Join Our Network →
              </Link>

              <Link
                to="/contact"
                className="border border-white px-6 py-4 rounded-xl"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* ================= STATS ================= */}

      <section className="py-20 bg-[#F8FAFC]">

        <div
          className="max-w-7xl mx-auto px-6 text-center"
          data-aos="fade-up"
        >


          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937]">

            Empowering New India.

            <span className="text-[#FF7A18]">

              {" "}Strengthening its backbone

            </span>

          </h2>


          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">

            Millions of Indians in small towns and semi-urban areas trust our
            agent network for their core banking needs.

          </p>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

            {[
              { number: "16.4L+", label: "Banking Agents" },
              { number: "2.56L", label: "Towns Covered" },
              { number: "95%", label: "Pincode Coverage" },
              { number: "380L", label: "Customer Transactions" },
              { number: "816L", label: "Semi-Urban Customers" },
              { number: "726L", label: "Districts Covered" }
            ].map((stat, i) => (

              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 120}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-8 hover:shadow-md transition"
              >

                <p className="text-[#FF7A18] text-2xl font-bold">
                  {stat.number}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= SERVICES ================= */}

      <section id="services" className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2
            className="text-3xl font-bold text-center"
            data-aos="fade-up"
          >
            Building Platforms for

            <span className="text-[#FF7A18]">
              {" "}Banking Agents & Consumers
            </span>

          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              {
                title: "Cash Withdrawal",
                icon: <FaMoneyBillWave />
              },
              {
                title: "Money Transfer",
                icon: <FaExchangeAlt />
              },
              {
                title: "QR Payments",
                icon: <FaQrcode />
              },
              {
                title: "Recharge & Bills",
                icon: <FaMobileAlt />
              },
              {
                title: "Bank Account Opening",
                icon: <FaUniversity />
              },
              {
                title: "Insurance Services",
                icon: <FaShieldAlt />
              }
            ].map((service, i) => (

              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white rounded-xl shadow border p-6 hover:border-[#FF7A18] hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >

                {/* ICON */}

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#FF7A18]/10 text-[#FF7A18] text-xl mb-4">

                  {service.icon}

                </div>


                {/* TITLE */}

                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="text-sm text-gray-500 mt-2">

                  Secure assisted banking services through Udaanpe network.

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= PRICING ================= */}

      <section id="pricing" className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2
            className="text-3xl font-bold text-center"
            data-aos="fade-up"
          >

            Our Products & Service Pricing

          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              ["Payout (IMPS/NEFT)", "₹3 – ₹15"],
              ["Payout (UPI)", "₹2 – ₹25"],
              ["Pay-In Collection", "₹0 – ₹10"],
              ["QR Code Payments", "₹0 setup"],
              ["Virtual Account", "₹0 setup"],
              ["Wallet Management", "₹0 monthly"]
            ].map(([title, price], i) => (

              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition"
              >

                <h3 className="font-semibold">{title}</h3>

                <p className="text-[#FF7A18] mt-2 font-bold text-xl">{price}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= ABOUT ================= */}

      <section id="about" className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">

            <h2 className="text-3xl font-bold">

              One App.

              <span className="text-[#FF7A18]">

                {" "}Multiple Banking Solutions

              </span>

            </h2>


            <ul className="mt-6 space-y-3 text-gray-600">

              <li>✔ Aadhaar Enabled Payment System</li>
              <li>✔ Domestic Money Transfer</li>
              <li>✔ UPI QR Payments</li>
              <li>✔ Micro ATM Services</li>

            </ul>


            <Link
              to="/login"
              className="inline-block mt-6 bg-[#FF7A18] px-6 py-3 rounded-lg text-white"
            >

              Get Started

            </Link>

          </div>


          <div
            className="rounded-xl overflow-hidden"
            data-aos="fade-left"
          >

            <img
              src={paymentBanner}
              alt="Payment Solutions Banner"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>



      {/* ================= PARTNERS ================= */}

      <section id="partners" className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2
            className="text-3xl font-bold"
            data-aos="fade-up"
          >

            Trusted by

            <span className="text-[#FF7A18]">

              {" "}Banks, Regulators & Industry Experts

            </span>

          </h2>


          <div className="grid md:grid-cols-4 gap-6 mt-10">

            {[
              "RBI Compliance Ready",
              "BBPS Partner",
              "IRCTC Agency",
              "IRDAI Corporate Agency",
              "AU Bank",
              "Kotak Bank",
              "Jana Bank",
              "IIFL Finance"
            ].map((item, i) => (

              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white shadow rounded-lg py-4 hover:shadow-lg transition"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section
        data-aos="fade-up"
        className="bg-gradient-to-r from-[#0B2A8A] via-[#1E40AF] to-[#FF7A18] text-white py-20 text-center"
      >

        <h2 className="text-3xl font-bold">

          Ready to join India’s largest banking agent network?

        </h2>


        <p className="mt-4 opacity-90">

          Start earning by delivering essential financial services in your community.

        </p>


        <Link
          to="/login"
          className="inline-block mt-6 bg-white text-[#0B2A8A] px-6 py-3 rounded-lg font-semibold"
        >

          Get Started Now →

        </Link>

      </section>



      {/* ================= FOOTER ================= */}

      <FooterLinks />

    </div>

  );

}