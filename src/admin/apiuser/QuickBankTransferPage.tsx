import { MdAccountBalance, MdSend } from "react-icons/md";
import { useState } from "react";

export default function QuickBankTransferPage() {

    const [form, setForm] = useState({

        beneficiaryName: "",
        accountNumber: "",
        ifsc: "",
        mobile: "",
        mode: "IMPS",
        amount: ""

    });

    const handleChange = (e: any) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };


    const handleSubmit = () => {

        console.log("Transfer Request:", form);

        // future API call here
        // POST /payout/quick-transfer

    };


    return (

        <div className="space-y-6">


            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">

                    Quick Bank Transfer

                </h1>

                <p className="text-gray-500 text-sm">

                    Send instant bank transfers using IMPS / NEFT / UPI

                </p>

            </div>


            {/* CARD */}

            <div className="bg-white rounded-xl shadow p-6 max-w-3xl">


                {/* TITLE */}

                <div className="flex items-center gap-2 mb-6 font-semibold text-lg">

                    <MdAccountBalance />

                    Bank Transfer Details

                </div>


                {/* FORM */}

                <div className="grid md:grid-cols-2 gap-5">


                    {/* BENEFICIARY */}

                    <Input
                        label="Beneficiary Name *"
                        name="beneficiaryName"
                        value={form.beneficiaryName}
                        placeholder="Account holder name"
                        onChange={handleChange}
                        full
                    />


                    {/* ACCOUNT NUMBER */}

                    <Input
                        label="Account Number *"
                        name="accountNumber"
                        value={form.accountNumber}
                        placeholder="1234567890"
                        onChange={handleChange}
                    />


                    {/* IFSC */}

                    <Input
                        label="IFSC Code *"
                        name="ifsc"
                        value={form.ifsc}
                        placeholder="HDFC0000123"
                        onChange={handleChange}
                    />


                    {/* MOBILE */}

                    <Input
                        label="Mobile (Optional)"
                        name="mobile"
                        value={form.mobile}
                        placeholder="9876543210"
                        onChange={handleChange}
                    />


                    {/* MODE */}

                    <div>

                        <label className="text-sm font-medium">

                            Mode *

                        </label>

                        <select
                            name="mode"
                            value={form.mode}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1"
                        >

                            <option>

                                IMPS (Instant)

                            </option>

                            <option>

                                NEFT

                            </option>

                            <option>

                                UPI

                            </option>

                        </select>

                    </div>


                    {/* AMOUNT */}

                    <Input
                        label="Amount (₹) *"
                        name="amount"
                        value={form.amount}
                        placeholder="100.00"
                        onChange={handleChange}
                        full
                    />

                </div>


                {/* BUTTON */}

                <button
                    onClick={handleSubmit}
                    className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg text-sm"
                >

                    <MdSend />

                    Send Transfer

                </button>

            </div>

        </div>

    );

}


/* INPUT COMPONENT */

function Input({

    label,
    name,
    value,
    placeholder,
    onChange,
    full = false

}: any) {

    return (

        <div className={full ? "md:col-span-2" : ""}>

            <label className="text-sm font-medium">

                {label}

            </label>

            <input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
            />

        </div>

    );

}