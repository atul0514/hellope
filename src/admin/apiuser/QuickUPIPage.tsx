import { useState } from "react";
import { MdPhoneIphone, MdSend } from "react-icons/md";

export default function QuickUPIPage() {

    const [form, setForm] = useState({

        beneficiaryName: "",
        upiId: "",
        mobile: "",
        amount: ""

    });

    const handleChange = (e: any) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = () => {

        console.log("UPI Transfer:", form);

        // future API integration
        // POST /payout/quick-upi

    };

    return (

        <div className="space-y-6">


            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">

                    Quick UPI Transfer

                </h1>

                <p className="text-gray-500 text-sm">

                    Send instant UPI payments directly to beneficiaries

                </p>

            </div>


            {/* CARD */}

            <div className="bg-white rounded-xl shadow p-6 max-w-3xl">


                {/* TITLE */}

                <div className="flex items-center gap-2 mb-6 font-semibold text-lg">

                    <MdPhoneIphone />

                    UPI Payment Details

                </div>


                {/* FORM */}

                <div className="grid md:grid-cols-2 gap-5">


                    {/* BENEFICIARY NAME */}

                    <Input
                        label="Beneficiary Name *"
                        name="beneficiaryName"
                        placeholder="Receiver name"
                        value={form.beneficiaryName}
                        onChange={handleChange}
                        full
                    />


                    {/* UPI ID */}

                    <Input
                        label="UPI ID *"
                        name="upiId"
                        placeholder="name@bank"
                        value={form.upiId}
                        onChange={handleChange}
                    />


                    {/* MOBILE */}

                    <Input
                        label="Mobile (Optional)"
                        name="mobile"
                        placeholder="9876543210"
                        value={form.mobile}
                        onChange={handleChange}
                    />


                    {/* AMOUNT */}

                    <Input
                        label="Amount (₹) *"
                        name="amount"
                        placeholder="100.00"
                        value={form.amount}
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

                    Send UPI

                </button>

            </div>

        </div>

    );

}


/* INPUT COMPONENT */

function Input({

    label,
    name,
    placeholder,
    value,
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
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
            />

        </div>

    );

}