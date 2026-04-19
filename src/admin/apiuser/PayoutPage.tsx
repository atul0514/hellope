import { useState } from "react";
import { MdDelete, MdAdd, MdAccountBalance } from "react-icons/md";
import {
    MdCurrencyRupee,
    MdSend,
    MdPeople,
    MdHistory
} from "react-icons/md";

export default function PayoutPage() {

    const [tab, setTab] = useState("send");

    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-2xl font-bold">
                        Payouts
                    </h1>

                    <p className="text-gray-500 text-sm">

                        Send money via IMPS or UPI using Algotrick (UdaaanPe)

                    </p>

                </div>


                {/* STATUS BADGE */}

                <div className="bg-gray-100 text-gray-500 text-xs px-4 py-1 rounded-full">

                    ● Offline

                </div>

            </div>


            {/* WALLET BALANCE */}

            <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">

                    <MdCurrencyRupee size={24} />

                </div>

                <div>

                    <p className="text-gray-500 text-sm">
                        Wallet Balance
                    </p>

                    <p className="text-2xl font-bold">
                        ₹ 570.00
                    </p>

                </div>

            </div>


            {/* TAB NAVIGATION */}

            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">

                <TabBtn
                    icon={<MdSend />}
                    label="send"
                    title="Send Payout"
                    tab={tab}
                    setTab={setTab}
                />

                <TabBtn
                    icon={<MdPeople />}
                    label="recipients"
                    title="Recipients"
                    tab={tab}
                    setTab={setTab}
                />

                <TabBtn
                    icon={<MdHistory />}
                    label="history"
                    title="History"
                    tab={tab}
                    setTab={setTab}
                />

            </div>


            {/* TAB CONTENT */}

            {tab === "send" && <SendPayoutTab />}

            {tab === "recipients" && <RecipientsTab />}

            {tab === "history" && <HistoryTab />}

        </div>

    );

}


/* TAB BUTTON */

function TabBtn({ icon, label, title, tab, setTab }: any) {

    return (

        <button
            onClick={() => setTab(label)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition
            ${
                tab === label
                    ? "bg-white shadow font-medium"
                    : "text-gray-500"
            }`}
        >

            {icon}

            {title}

        </button>

    );

}


/* SEND PAYOUT TAB */

function SendPayoutTab() {

    return (

        <div className="bg-white rounded-xl shadow p-6 space-y-4">

            <h3 className="font-semibold text-lg flex items-center gap-2">

                <MdSend />

                New Payout

            </h3>


            {/* RECIPIENT */}

            <Input
                label="Recipient"
                placeholder="Select beneficiary"
                type="select"
            />


            {/* AMOUNT */}

            <Input
                label="Amount (₹)"
                placeholder="Min ₹10"
            />


            {/* TRANSFER MODE */}

            <Input
                label="Transfer Mode"
                placeholder="IMPS"
                type="select"
            />


            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm">

                Send Payout

            </button>

        </div>

    );

}


/* RECIPIENT TAB */

function RecipientsTab() {

    const recipients = [

        {
            name: "TARUN KUMAR",
            account: "194601500047",
            ifsc: "ICIC0000001"
        },

        {
            name: "ALGOTRICK SOLUTION",
            account: "921020022921037",
            ifsc: "UTIB0000529"
        }

    ];

    return (

        <div className="bg-white  rounded-xl shadow">

            {/* HEADER */}

            <div className="flex justify-between items-center p-5 border-b">

                <h3 className="font-semibold text-lg">

                    Saved Recipients

                </h3>

                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm">

                    <MdAdd />

                    Add

                </button>

            </div>


            {/* LIST */}

            <div>

                {recipients.map((item, i) => (

                    <div
                        key={i}
                        className="flex justify-between items-center px-5 py-4 border-b last:border-none"
                    >

                        <div className="flex items-center gap-3">

                            <div className="bg-blue-50 text-blue-600 p-2 rounded-md">

                                <MdAccountBalance size={18} />

                            </div>

                            <div>

                                <p className="font-medium">

                                    {item.name}

                                </p>

                                <p className="text-sm text-gray-500">

                                    {item.account} • {item.ifsc}

                                </p>

                            </div>

                        </div>


                        <MdDelete
                            size={18}
                            className="text-gray-400 hover:text-red-500 cursor-pointer"
                        />

                    </div>

                ))}

            </div>

        </div>

    );

}


/* HISTORY TAB */

function HistoryTab() {

    const history = [

        {
            name: "rohit",
            mode: "IMPS",
            order: "ORD-T2Y31TGM1Z",
            date: "4/19/2026, 3:12:28 PM",
            amount: "₹500.00",
            status: "Failed",
            error: "Insufficient balance"
        },

        {
            name: "rohit s",
            mode: "UPI",
            order: "ORD-HAC15S907A",
            date: "4/19/2026, 3:10:08 PM",
            amount: "₹500.00",
            status: "Failed",
            error: "Value cannot be null. (Parameter 's')"
        },

        {
            name: "rohit s",
            mode: "UPI",
            order: "ORD-U9HLCIVGZM",
            date: "4/19/2026, 3:09:43 PM",
            amount: "₹500.00",
            status: "Failed",
            error: "Value cannot be null. (Parameter 's')"
        },

        {
            name: "Akshat",
            mode: "UPI",
            order: "ORD-YK4TXV7WNF",
            date: "4/19/2026, 2:01:22 PM",
            amount: "₹400.00",
            status: "Success",
            utr: "610922076574"
        }

    ];

    return (

        <div className="bg-white  rounded-xl shadow">

            {/* HEADER */}

            <div className="p-5 border-b font-semibold text-lg">

                Payout History

            </div>


            {/* HISTORY LIST */}

            <div>

                {history.map((txn, i) => (

                    <div
                        key={i}
                        className="flex justify-between items-start px-5 py-4 border-b last:border-none"
                    >

                        {/* LEFT SIDE */}

                        <div>

                            <p className="font-medium">

                                {txn.name} — {txn.mode}

                            </p>

                            <p className="text-xs text-gray-400 mt-1">

                                {txn.order} • {txn.date}

                                {txn.utr && ` • UTR: ${txn.utr}`}

                            </p>


                            {txn.error && (

                                <p className="text-xs text-red-500 mt-1">

                                    {txn.error}

                                </p>

                            )}

                        </div>


                        {/* RIGHT SIDE */}

                        <div className="text-right">

                            <p className="font-semibold">

                                {txn.amount}

                            </p>


                            <span
                                className={`text-xs px-2 py-1 rounded-full inline-block mt-1
                                ${
                                    txn.status === "Success"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >

                                {txn.status}

                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}


/* INPUT COMPONENT */

function Input({ label, placeholder, type = "text" }: any) {

    return (

        <div>

            <label className="text-sm font-medium">

                {label}

            </label>


            {type === "select" ? (

                <select className="w-full border rounded-lg px-3 py-2 mt-1">

                    <option>

                        {placeholder}

                    </option>

                </select>

            ) : (

                <input
                    placeholder={placeholder}
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                />

            )}

        </div>

    );

}