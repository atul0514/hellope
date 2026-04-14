import { useState } from "react";
import { useRaiseFundRequest } from "../../hooks/useRaiseFundRequest";
import { jwtDecode } from "jwt-decode";

type PaymentMode = "IMPS" | "RTGS" | "UPI" | "";

type FormState = {
    paymentMode: PaymentMode;
    beneficiaryName: string;
    bankName: string;
    ifscCode: string;
    upiId: string;
    amount: number;
    screenshot: File | null;
};

export default function AdminTransfersPage() {

    const fundRequestMutation =
        useRaiseFundRequest();

    const [form, setForm] =
        useState<FormState>({
            paymentMode: "",
            beneficiaryName: "",
            bankName: "",
            ifscCode: "",
            upiId: "",
            amount: 0,
            screenshot: null,
        });

    /**
     * Handle input change
     */
    const handleChange = (
        key: keyof FormState,
        value: any
    ) => {

        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

    };


    /**
     * Restore userId safely from token/localStorage
     */
    const getUserId = () => {

        let userId =
            localStorage.getItem("userId");

        if (userId) return userId;

        const token =
            localStorage.getItem(
                "admin_token"
            );

        if (!token) return null;

        try {

            const decoded: any =
                jwtDecode(token);

            userId =
                decoded.UserId ||
                decoded.userid ||
                decoded.sub ||
                decoded.nameid ||
                decoded[
                    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
                ];

            if (userId) {

                localStorage.setItem(
                    "userId",
                    userId
                );

            }

            return userId;

        } catch {

            return null;

        }

    };


    /**
     * Reset form after success
     */
    const resetForm = () => {

        setForm({
            paymentMode: "",
            beneficiaryName: "",
            bankName: "",
            ifscCode: "",
            upiId: "",
            amount: 0,
            screenshot: null,
        });

    };


    /**
     * Submit handler
     */
    const handleSubmit = () => {

        const userId =
            getUserId();

        if (!userId)
            return alert(
                "Session expired. Please login again."
            );

        if (!form.paymentMode)
            return alert(
                "Select payment mode"
            );

        if (!form.beneficiaryName)
            return alert(
                "Enter beneficiary name"
            );

        if (!form.bankName)
            return alert(
                "Enter bank name"
            );

        if (
            form.paymentMode !== "UPI" &&
            !form.ifscCode
        )
            return alert(
                "Enter IFSC code"
            );

        if (
            form.paymentMode === "UPI" &&
            !form.upiId
        )
            return alert(
                "Enter UPI ID"
            );

        if (!form.amount)
            return alert(
                "Enter amount"
            );

        /**
         * Backend requires ScreenshotPath string
         * so send filename only
         */
        const screenshotPath =
            form.screenshot?.name ||
            "default.png";


        fundRequestMutation.mutate(

            {

                ScreenshotPath:
                    screenshotPath,

                UserId:
                    Number(userId),

                BankName:
                    form.bankName,

                ModeOfPayment:
                    form.paymentMode,

                BeneficiaryName:
                    form.beneficiaryName,

                Amount:
                    Number(form.amount),

                TransactionId:
                    "TXN" + Date.now(),

                IFSCCode:
                    form.paymentMode !== "UPI"
                        ? form.ifscCode
                        : "",

                UPIId:
                    form.paymentMode === "UPI"
                        ? form.upiId
                        : "",

            },

            {

                onSuccess: () => {

                    alert(
                        "Fund request submitted successfully ✅"
                    );

                    resetForm();

                },

                onError: (
                    err: any
                ) => {

                    console.error(err);

                    alert(

                        err?.response?.data?.title ||

                        "Submission failed"

                    );

                },

            }

        );

    };


    const inputClass =
        "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";


    return (

        <div className="p-6 bg-gray-50 min-h-screen flex justify-center">

            <div className="w-full max-w-2xl">

                <h1 className="text-xl font-semibold mb-6">
                    Add Fund Request
                </h1>

                <div className="bg-white p-6 rounded-xl shadow-md space-y-4">

                    {/* Payment Mode */}

                    <select
                        className={inputClass}
                        value={form.paymentMode}
                        onChange={(e) =>
                            handleChange(
                                "paymentMode",
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Select Mode
                        </option>

                        <option value="IMPS">
                            IMPS
                        </option>

                        <option value="RTGS">
                            RTGS
                        </option>

                        <option value="UPI">
                            UPI
                        </option>

                    </select>


                    {/* Beneficiary */}

                    <input
                        className={inputClass}
                        placeholder="Beneficiary Name"
                        value={form.beneficiaryName}
                        onChange={(e) =>
                            handleChange(
                                "beneficiaryName",
                                e.target.value
                            )
                        }
                    />


                    {/* Bank Name */}

                    <input
                        className={inputClass}
                        placeholder="Bank Name"
                        value={form.bankName}
                        onChange={(e) =>
                            handleChange(
                                "bankName",
                                e.target.value
                            )
                        }
                    />


                    {/* IFSC / UPI */}

                    {form.paymentMode ===
                    "UPI" ? (

                        <input
                            className={inputClass}
                            placeholder="UPI ID"
                            value={form.upiId}
                            onChange={(e) =>
                                handleChange(
                                    "upiId",
                                    e.target.value
                                )
                            }
                        />

                    ) : (

                        <input
                            className={inputClass}
                            placeholder="IFSC Code"
                            value={form.ifscCode}
                            onChange={(e) =>
                                handleChange(
                                    "ifscCode",
                                    e.target.value
                                )
                            }
                        />

                    )}


                    {/* Amount */}

                    <input
                        type="number"
                        className={inputClass}
                        placeholder="Amount"
                        value={form.amount}
                        onChange={(e) =>
                            handleChange(
                                "amount",
                                Number(e.target.value)
                            )
                        }
                    />


                    {/* Screenshot */}

                    <input
                        type="file"
                        onChange={(e) =>
                            handleChange(
                                "screenshot",
                                e.target.files?.[0] || null
                            )
                        }
                    />


                    {/* Submit */}

                    <div className="flex justify-end">

                        <button
                            onClick={handleSubmit}
                            disabled={
                                fundRequestMutation.isPending
                            }
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >

                            {fundRequestMutation.isPending
                                ? "Submitting..."
                                : "Submit Payment"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}