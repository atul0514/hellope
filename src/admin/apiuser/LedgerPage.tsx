import { useState } from "react";
import { MdSearch } from "react-icons/md";
import React from "react";

/* ---------- TYPES ---------- */

type LedgerType = "Credit" | "Debit";

type LedgerEntry = {
  type: LedgerType;
  amount: string;
  balance: string;
  description: string;
  referenceType: string;
  referenceId: string;
  date: string;
};

type SummaryCardProps = {
  title: string;
  value: string;
  color?: "green" | "red";
};

/* ---------- PAGE ---------- */

export default function LedgerPage() {
  const [typeFilter, setTypeFilter] = useState<
    "All" | LedgerType
  >("All");

  const ledger: LedgerEntry[] = [
    {
      type: "Credit",
      amount: "+ ₹505.00",
      balance: "₹570.00",
      description: "Refund for failed payout ORD...",
      referenceType: "surcharge reversal",
      referenceId: "ORD-T2Y31TGM1Z",
      date: "4/19/2026, 3:12:33 PM",
    },
    {
      type: "Debit",
      amount: "- ₹5.00",
      balance: "₹65.00",
      description: "Surcharge for payout ORD...",
      referenceType: "commission",
      referenceId: "ORD-T2Y31TGM1Z",
      date: "4/19/2026, 3:12:28 PM",
    },
    {
      type: "Debit",
      amount: "- ₹500.00",
      balance: "₹70.00",
      description: "Payout to rohit - IMPS",
      referenceType: "payout",
      referenceId: "ORD-T2Y31TGM1Z",
      date: "4/19/2026, 3:12:28 PM",
    },
    {
      type: "Credit",
      amount: "+ ₹505.00",
      balance: "₹570.00",
      description: "Refund for failed payout ORD...",
      referenceType: "surcharge reversal",
      referenceId: "ORD-HAC15S907A",
      date: "4/19/2026, 3:10:11 PM",
    },
  ];

  const filteredLedger =
    typeFilter === "All"
      ? ledger
      : ledger.filter(
          (item) => item.type === typeFilter
        );

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>
        <h1 className="text-2xl font-bold">
          Ledger Report
        </h1>

        <p className="text-gray-500 text-sm">
          Complete wallet ledger — all credits & debits
        </p>
      </div>

      {/* SUMMARY CARDS */}

      <div className="grid md:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Entries"
          value="35"
        />

        <SummaryCard
          title="Total Credit"
          value="₹ 28,500.00"
          color="green"
        />

        <SummaryCard
          title="Total Debit"
          value="₹ 27,930.00"
          color="red"
        />

        <SummaryCard
          title="Net Flow"
          value="₹ 570.00"
          color="green"
        />
      </div>

      {/* FILTERS */}

      <div className="flex gap-3 flex-wrap">

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white w-full md:flex-1">
          <MdSearch className="text-gray-400" />

          <input
            placeholder="Search description, reference ID..."
            className="outline-none text-sm w-full"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) =>
            setTypeFilter(
              e.target.value as
                | "All"
                | LedgerType
            )
          }
          className="border rounded-lg px-4 py-2 bg-white text-sm"
        >
          <option>All</option>
          <option>Credit</option>
          <option>Debit</option>
        </select>

        <select className="border rounded-lg px-4 py-2 bg-white text-sm">
          <option>All References</option>
        </select>

        <input
          type="date"
          className="border rounded-lg px-4 py-2 text-sm"
        />

        <input
          type="date"
          className="border rounded-lg px-4 py-2 text-sm"
        />

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-5 py-3 text-left">
                Type
              </th>

              <th className="px-5 py-3 text-left">
                Amount
              </th>

              <th className="px-5 py-3 text-left">
                Balance After
              </th>

              <th className="px-5 py-3 text-left">
                Description
              </th>

              <th className="px-5 py-3 text-left">
                Reference Type
              </th>

              <th className="px-5 py-3 text-left">
                Reference ID
              </th>

              <th className="px-5 py-3 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredLedger.map(
              (item, i) => (
                <tr
                  key={i}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-5 py-4">
                    <TypeBadge
                      type={item.type}
                    />
                  </td>

                  <td
                    className={`px-5 py-4 font-medium ${
                      item.type === "Credit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.amount}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {item.balance}
                  </td>

                  <td className="px-5 py-4">
                    {item.description}
                  </td>

                  <td className="px-5 py-4">
                    <ReferenceBadge
                      text={
                        item.referenceType
                      }
                    />
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {item.referenceId}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {item.date}
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function SummaryCard({
  title,
  value,
  color,
}: SummaryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">

      <p className="text-xs text-gray-400">
        {title}
      </p>

      <div
        className={`mt-2 text-lg font-semibold ${
          color === "green"
            ? "text-green-600"
            : color === "red"
            ? "text-red-600"
            : ""
        }`}
      >
        {value}
      </div>

    </div>
  );
}

function TypeBadge({
  type,
}: {
  type: LedgerType;
}) {
  const styles: Record<
    LedgerType,
    string
  > = {
    Credit:
      "bg-green-100 text-green-600",
    Debit:
      "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[type]}`}
    >
      {type}
    </span>
  );
}

function ReferenceBadge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
      {text}
    </span>
  );
}