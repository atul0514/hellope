import { Link } from "react-router-dom";

export default function FooterLinks() {

  return (

    <footer className="bg-slate-900 text-white py-6">

      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4 text-sm">

        <FooterLink
          label="Privacy Policy"
          to="/privacy-policy"
        />

        |

        <FooterLink
          label="Terms & Conditions"
          to="/terms-conditions"
        />

        |

        <FooterLink
          label="Refunds & Cancellations"
          to="/refund-cancellation"
        />

        |

        <FooterLink
          label="Grievance Redressal"
          to="/grievance-redressal"
        />

      </div>

    </footer>

  );

}


function FooterLink({ label, to }) {

  return (

    <Link
      to={to}
      className="hover:text-blue-400 transition"
    >
      {label}
    </Link>

  );

}