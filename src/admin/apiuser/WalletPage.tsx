import { useState } from "react";
import {
  MdAccountBalanceWallet,
  MdSend,
  MdQrCode,
  MdPayment,
} from "react-icons/md";

/* ---------- TYPES ---------- */

type TabType =
  | "request"
  | "gateway"
  | "qr"
  | "transactions";

type TabBtnProps = {
  label: TabType;
  tab: TabType;
  setTab: (value: TabType) => void;
  title: string;
};

type InputProps = {
  label: string;
  placeholder: string;
};

/* ---------- PAGE ---------- */

export default function WalletPage() {
  const [tab, setTab] =
    useState<TabType>("request");

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>
        <h1 className="text-2xl font-bold">
          Wallet
        </h1>

        <p className="text-gray-500 text-sm">
          Manage your wallet, fund requests,
          and transactions
        </p>
      </div>


      {/* BALANCE CARD */}

      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
          <MdAccountBalanceWallet size={26} />
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Your Wallet Balance
          </p>

          <p className="text-2xl font-bold">
            ₹ 570.00
          </p>
        </div>

      </div>


      {/* NOTICE */}

      <div className="bg-orange-50 border border-orange-300 rounded-xl p-5">

        <p className="text-orange-600 font-medium">
          ⚠ Note
        </p>

        <p className="text-sm mt-1">
          Please ensure a minimum balance of
          ₹1,00,000 (One Lakh) is maintained
          in your wallet.
        </p>

        <p className="text-sm text-red-500 mt-1">
          Important: A penalty of ₹500 per day
          will be charged if the balance falls
          below this limit.
        </p>

      </div>


      {/* TAB MENU */}

      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">

        <TabBtn
          label="request"
          tab={tab}
          setTab={setTab}
          title="Request"
        />

        <TabBtn
          label="gateway"
          tab={tab}
          setTab={setTab}
          title="Gateway"
        />

        <TabBtn
          label="qr"
          tab={tab}
          setTab={setTab}
          title="QR"
        />

        <TabBtn
          label="transactions"
          tab={tab}
          setTab={setTab}
          title="Transactions"
        />

      </div>


      {/* TAB CONTENT */}

      {tab === "request" && <FundRequestTab />}
      {tab === "gateway" && <GatewayTab />}
      {tab === "qr" && <QRTab />}
      {tab === "transactions" &&
        <TransactionsTab />}

    </div>
  );
}


/* ---------- TAB BUTTON ---------- */

function TabBtn({
  label,
  tab,
  setTab,
  title,
}: TabBtnProps) {
  return (
    <button
      onClick={() => setTab(label)}
      className={`px-4 py-2 text-sm rounded-md transition ${
        tab === label
          ? "bg-white shadow font-medium"
          : "text-gray-500"
      }`}
    >
      {title}
    </button>
  );
}


/* ---------- REQUEST TAB ---------- */

function FundRequestTab() {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">

      <h3 className="font-semibold text-lg flex gap-2 items-center">
        <MdSend />
        Send Fund Request to Upline
      </h3>

      <Input
        label="Amount (₹)"
        placeholder="Enter amount"
      />

      <Input
        label="Note (optional)"
        placeholder="Reason for request"
      />

      <div>
        <label className="text-sm font-medium">
          Payment Slip (optional)
        </label>

        <input
          type="file"
          className="block mt-1"
        />
      </div>

      <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm">
        Send Request
      </button>

    </div>
  );
}


/* ---------- GATEWAY TAB ---------- */

function GatewayTab() {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">

      <h3 className="font-semibold text-lg flex gap-2 items-center">
        <MdPayment />
        Add Funds via Payment Gateway
      </h3>

      <div className="bg-orange-50 border border-orange-300 rounded-lg p-4 text-sm">
        Gateway Charge: 2.5%
      </div>

      <Input
        label="Amount (₹)"
        placeholder="Enter amount (₹500 – ₹50,000)"
      />

      <div className="flex gap-2">

        {[500, 1000, 5000, 10000].map(
          (amt: number) => (
            <button
              key={amt}
              className="border px-3 py-1 rounded-lg text-sm"
            >
              ₹{amt}
            </button>
          )
        )}

      </div>

      <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm">
        Pay with Cashfree
      </button>

    </div>
  );
}


/* ---------- QR TAB ---------- */

function QRTab() {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center space-y-4">

      <h3 className="font-semibold text-lg flex justify-center gap-2">
        <MdQrCode />
        QR Code Payment
      </h3>

      <p className="text-gray-500 text-sm">
        Scan & pay with any UPI app to add funds
      </p>

    </div>
  );
}


/* ---------- TRANSACTION TAB ---------- */

function TransactionsTab() {

  const transactions = [
    { type: "Payout", amount: "+₹505.00" },
    { type: "Payout", amount: "+₹505.00" },
    { type: "Payout", amount: "+₹405.00" },
    { type: "Topup", amount: "+₹5,000.00" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="font-semibold text-lg mb-4">
        Recent Transactions
      </h3>

      {transactions.map(
        (txn, i: number) => (
          <div
            key={i}
            className="flex justify-between border-b py-3 text-sm"
          >
            <div>
              <p className="font-medium">
                {txn.type}
              </p>

              <p className="text-gray-400">
                4/19/2026
              </p>
            </div>

            <div className="text-green-600 font-semibold">
              {txn.amount}
            </div>
          </div>
        )
      )}

    </div>
  );
}


/* ---------- INPUT COMPONENT ---------- */

function Input({
  label,
  placeholder,
}: InputProps) {
  return (
    <div>

      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      />

    </div>
  );
}