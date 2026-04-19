import { useState } from "react";
import {
  MdContentCopy,
  MdRefresh,
  MdVisibility,
  MdSecurity,
} from "react-icons/md";

/* ---------- TYPES ---------- */

type InputFieldProps = {
  label: string;
  defaultValue?: string;
  type?: string;
};

type TokenFieldProps = {
  label: string;
  value: string;
  visible: boolean;
  toggle: () => void;
};

/* ---------- PAGE ---------- */

export default function UserProfilePage() {
  const [showEToken, setShowEToken] =
    useState(false);

  const [showJWT, setShowJWT] =
    useState(false);

  const eToken =
    "etk_live****************919e";

  const jwtToken =
    "eyJhbGci****************a832";

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}

      <div>
        <h1 className="text-2xl font-bold">
          Profile
        </h1>

        <p className="text-gray-500 text-sm">
          Manage your account settings
        </p>
      </div>


      {/* PERSONAL INFO */}

      <section className="bg-white rounded-xl shadow p-6">

        <h2 className="font-semibold text-lg mb-4">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <InputField
            label="Full Name"
            defaultValue="User Name"
          />

          <InputField
            label="Email"
            defaultValue="user@email.com"
          />

        </div>


        <div className="mt-4">

          <InputField
            label="Mobile Number"
            defaultValue="9876543210"
          />

          <p className="text-xs text-gray-400 mt-1">
            Used for payout transactions via
            UPI/IMPS
          </p>

        </div>


        <button className="mt-5 bg-primary text-white px-5 py-2 rounded-lg text-sm">
          Save Changes
        </button>

      </section>


      {/* API CREDENTIALS */}

      <section className="bg-white rounded-xl shadow p-6">

        <div className="flex items-center gap-2 mb-2">

          <MdSecurity />

          <h2 className="font-semibold text-lg">
            API Credentials
          </h2>

        </div>

        <p className="text-gray-500 text-sm mb-4">
          Each API user has their own unique
          credentials. Keep them confidential.
        </p>


        <TokenField
          label="E-Token"
          value={eToken}
          visible={showEToken}
          toggle={() =>
            setShowEToken(!showEToken)
          }
        />


        <TokenField
          label="JWT Token (long-lived)"
          value={jwtToken}
          visible={showJWT}
          toggle={() =>
            setShowJWT(!showJWT)
          }
        />


        <div className="mt-6">

          <label className="text-sm font-medium">
            Allowed IP Addresses
          </label>

          <p className="text-xs text-gray-400 mb-2">
            Whitelist IPs allowed to use your
            API credentials. Leave empty to allow
            all.
          </p>


          <div className="flex gap-3">

            <input
              placeholder="e.g. 203.0.113.5"
              className="flex-1 border rounded-lg px-3 py-2"
            />

            <button className="bg-primary text-white px-5 rounded-lg">
              + Add
            </button>

          </div>


          <p className="text-xs text-gray-400 mt-2">
            No IP restrictions — all IPs allowed
          </p>

        </div>

      </section>


      {/* CHANGE PASSWORD */}

      <section className="bg-white rounded-xl shadow p-6">

        <h2 className="font-semibold text-lg mb-4">
          Change Password
        </h2>


        <div className="grid md:grid-cols-2 gap-4">

          <InputField
            label="Current Password"
            type="password"
          />

          <InputField
            label="New Password"
            type="password"
          />

        </div>


        <button className="mt-5 bg-primary text-white px-5 py-2 rounded-lg text-sm">
          Update Password
        </button>

      </section>

    </div>
  );
}


/* ---------- INPUT FIELD ---------- */

function InputField({
  label,
  defaultValue = "",
  type = "text",
}: InputFieldProps) {

  return (

    <div>

      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      />

    </div>

  );

}


/* ---------- TOKEN FIELD ---------- */

function TokenField({
  label,
  value,
  visible,
  toggle,
}: TokenFieldProps) {

  return (

    <div className="mt-4">

      <label className="text-sm font-medium">
        {label}
      </label>


      <div className="flex gap-2 mt-1">

        <input
          type={visible ? "text" : "password"}
          value={value}
          readOnly
          className="flex-1 border rounded-lg px-3 py-2"
        />


        <button
          onClick={toggle}
          className="border px-3 rounded-lg"
        >
          <MdVisibility />
        </button>


        <button
          onClick={() =>
            navigator.clipboard.writeText(value)
          }
          className="border px-3 rounded-lg"
        >
          <MdContentCopy />
        </button>


        <button className="border px-3 rounded-lg">
          <MdRefresh />
        </button>

      </div>

    </div>

  );

}