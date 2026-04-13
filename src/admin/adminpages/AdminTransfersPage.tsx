import { useState } from "react";

type PaymentMode = "BANK" | "UPI";

type FormState = {
    modeOfPayment: string;
    beneficiaryName: string;
    amount: number;

    accountName: string;
    bankName: string;
    ifscCode: string;

    screenshot: File | null;
};

export default function PaymentPage() {
    const [tab, setTab] = useState<PaymentMode>("BANK");

    const [form, setForm] = useState<FormState>({
        modeOfPayment: "",
        beneficiaryName: "",
        amount: 0,

        accountName: "",
        bankName: "",
        ifscCode: "",

        screenshot: null,
    });

    const beneficiaries = [
        "John Doe",
        "ABC Pvt Ltd",
        "XYZ Traders",
    ];

    const handleChange = (key: keyof FormState, value: any) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        console.log("SUBMIT DATA:", form);
        alert("Payment Submitted");
    };

    const inputClass =
        "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex justify-center">

            {/* FORM WRAPPER (HALF WIDTH) */}
            <div className="w-full max-w-2xl">

                {/* HEADER */}
                <h1 className="text-xl font-semibold mb-4">
                    Payment Request
                </h1>

                {/* TABS */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setTab("BANK")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            tab === "BANK"
                                ? "bg-blue-600 text-white"
                                : "bg-white border"
                        }`}
                    >
                        Bank Transfer
                    </button>

                    <button
                        onClick={() => setTab("UPI")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            tab === "UPI"
                                ? "bg-blue-600 text-white"
                                : "bg-white border"
                        }`}
                    >
                        UPI Transfer
                    </button>
                </div>

                {/* FORM */}
                <div className="bg-white p-6 rounded-xl shadow-md">

                    {/* SINGLE FIELD PER ROW */}
                    <div className="flex flex-col gap-4">

                        {/* BANK TAB */}
                        {tab === "BANK" && (
                            <>
                                {/* MODE */}
                                <div className="w-full">
                                    <label className="text-sm">Mode Of Payment</label>
                                    <select
                                        className={inputClass}
                                        value={form.modeOfPayment}
                                        onChange={(e) =>
                                            handleChange("modeOfPayment", e.target.value)
                                        }
                                    >
                                        <option value="">Select Mode</option>
                                        <option value="IMPS">IMPS</option>
                                        <option value="NEFT">NEFT</option>
                                        <option value="RTGS">RTGS</option>
                                    </select>
                                </div>

                                {/* BENEFICIARY */}
                                <div className="w-full">
                                    <label className="text-sm">Beneficiary Name</label>
                                    <select
                                        className={inputClass}
                                        value={form.beneficiaryName}
                                        onChange={(e) =>
                                            handleChange("beneficiaryName", e.target.value)
                                        }
                                    >
                                        <option value="">Select Beneficiary</option>
                                        {beneficiaries.map((b, i) => (
                                            <option key={i} value={b}>
                                                {b}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* AMOUNT */}
                                <div className="w-full">
                                    <label className="text-sm">Amount</label>
                                    <input
                                        type="number"
                                        className={inputClass}
                                        value={form.amount}
                                        onChange={(e) =>
                                            handleChange("amount", Number(e.target.value))
                                        }
                                    />
                                </div>
                            </>
                        )}

                        {/* UPI TAB */}
                        {tab === "UPI" && (
                            <>
                                <div className="w-full">
                                    <label className="text-sm">Account Name</label>
                                    <input
                                        className={inputClass}
                                        value={form.accountName}
                                        onChange={(e) =>
                                            handleChange("accountName", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="text-sm">Bank Name</label>
                                    <input
                                        className={inputClass}
                                        value={form.bankName}
                                        onChange={(e) =>
                                            handleChange("bankName", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="text-sm">IFSC Code</label>
                                    <input
                                        className={inputClass}
                                        value={form.ifscCode}
                                        onChange={(e) =>
                                            handleChange("ifscCode", e.target.value)
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <label className="text-sm">Amount</label>
                                    <input
                                        type="number"
                                        className={inputClass}
                                        value={form.amount}
                                        onChange={(e) =>
                                            handleChange("amount", Number(e.target.value))
                                        }
                                    />
                                </div>
                            </>
                        )}

                        {/* SCREENSHOT */}
                        <div className="w-full">
                            <label className="text-sm">Screenshot</label>
                            <input
                                type="file"
                                className="w-full border rounded-lg px-3 py-2 text-sm"
                                onChange={(e) =>
                                    handleChange(
                                        "screenshot",
                                        e.target.files?.[0] || null
                                    )
                                }
                            />
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Submit Payment
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}