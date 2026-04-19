import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function ReportPage() {

    const [statusFilter, setStatusFilter] = useState("All");
    const [modeFilter, setModeFilter] = useState("All");

    const transactions = [

        {
            orderId: "ORD-T2Y31TGM1Z",
            name: "rohit",
            account: "92301006109077",
            mode: "IMPS",
            amount: "₹ 500.00",
            surcharge: "₹5.00",
            status: "Failed",
            utr: null,
            date: "4/19/2026, 3:12:28 PM"
        },

        {
            orderId: "ORD-HAC15S907A",
            name: "rohit s",
            account: "5000cr@ybl",
            mode: "UPI",
            amount: "₹ 500.00",
            surcharge: "₹5.00",
            status: "Failed",
            utr: null,
            date: "4/19/2026, 3:10:08 PM"
        },

        {
            orderId: "ORD-U9HLCIVGZM",
            name: "rohit s",
            account: "5000cr@ybl",
            mode: "UPI",
            amount: "₹ 500.00",
            surcharge: "₹5.00",
            status: "Failed",
            utr: null,
            date: "4/19/2026, 3:09:43 PM"
        },

        {
            orderId: "ORD-YK4TXV7WNF",
            name: "Akshat",
            account: "akshobli@okaxis",
            mode: "UPI",
            amount: "₹ 400.00",
            surcharge: "₹5.00",
            status: "Success",
            utr: "610922076574",
            date: "4/19/2026, 2:01:22 PM"
        }

    ];


    const filteredData = transactions.filter(txn => {

        if (statusFilter !== "All" && txn.status !== statusFilter)
            return false;

        if (modeFilter !== "All" && txn.mode !== modeFilter)
            return false;

        return true;

    });


    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">

                    Transaction Report

                </h1>

                <p className="text-gray-500 text-sm">

                    All IMPS & UPI payout transactions

                </p>

            </div>


            {/* SUMMARY CARDS */}

            <div className="grid md:grid-cols-4 gap-4">

                <SummaryCard
                    title="Total Transactions"
                    value="8"
                />

                <SummaryCard
                    title="Total Amount"
                    value="₹ 20,360.00"
                />

                <SummaryCard
                    title="Success / Pending / Failed"
                    value={
                        <span className="flex gap-2">

                            <Badge color="green">3</Badge>

                            <Badge color="yellow">0</Badge>

                            <Badge color="red">5</Badge>

                        </span>
                    }
                />

                <SummaryCard
                    title="Total Surcharge"
                    value="₹ 40.00"
                />

            </div>


            {/* SEARCH + FILTER */}

            <div className="flex gap-4 flex-wrap">

                <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white w-full md:flex-1">

                    <MdSearch className="text-gray-400" />

                    <input
                        placeholder="Search by name, order ID, UTR, account, UPI..."
                        className="outline-none text-sm w-full"
                    />

                </div>


                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border rounded-lg px-4 py-2 bg-white text-sm"
                >

                    <option>All</option>

                    <option>Success</option>

                    <option>Pending</option>

                    <option>Failed</option>

                </select>


                <select
                    value={modeFilter}
                    onChange={(e) => setModeFilter(e.target.value)}
                    className="border rounded-lg px-4 py-2 bg-white text-sm"
                >

                    <option>All</option>

                    <option>IMPS</option>

                    <option>UPI</option>

                </select>

            </div>


            {/* TABLE */}

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full text-sm">

                    <thead className="bg-gray-50 text-gray-600">

                        <tr>

                            <th className="px-5 py-3 text-left">Order ID</th>

                            <th className="px-5 py-3 text-left">Beneficiary</th>

                            <th className="px-5 py-3 text-left">Mode</th>

                            <th className="px-5 py-3 text-left">Amount</th>

                            <th className="px-5 py-3 text-left">Surcharge</th>

                            <th className="px-5 py-3 text-left">Status</th>

                            <th className="px-5 py-3 text-left">UTR</th>

                            <th className="px-5 py-3 text-left">Date</th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredData.map((txn, i) => (

                            <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition"
                            >

                                <td className="px-5 py-4 text-gray-600">

                                    {txn.orderId}

                                </td>


                                <td className="px-5 py-4">

                                    <div className="font-medium">

                                        {txn.name}

                                    </div>

                                    <div className="text-xs text-gray-400">

                                        {txn.account}

                                    </div>

                                </td>


                                <td className="px-5 py-4">

                                    <ModeBadge mode={txn.mode} />

                                </td>


                                <td className="px-5 py-4">

                                    {txn.amount}

                                </td>


                                <td className="px-5 py-4">

                                    {txn.surcharge}

                                </td>


                                <td className="px-5 py-4">

                                    <StatusBadge status={txn.status} />

                                </td>


                                <td className="px-5 py-4 text-gray-500">

                                    {txn.utr || "—"}

                                </td>


                                <td className="px-5 py-4 text-gray-500">

                                    {txn.date}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}


/* SUMMARY CARD */

function SummaryCard({ title, value }: any) {

    return (

        <div className="bg-white border rounded-xl shadow p-4">

            <p className="text-xs text-gray-400">

                {title}

            </p>

            <div className="mt-2 text-lg font-semibold">

                {value}

            </div>

        </div>

    );

}


/* STATUS BADGE */

function StatusBadge({ status }: any) {

    const styles: any = {

        Success: "bg-green-100 text-green-600",
        Failed: "bg-red-100 text-red-600",
        Pending: "bg-yellow-100 text-yellow-600"

    };

    return (

        <span className={`px-3 py-1 text-xs rounded-full ${styles[status]}`}>

            {status}

        </span>

    );

}


/* MODE BADGE */

function ModeBadge({ mode }: any) {

    return (

        <span className="px-3 py-1 text-xs rounded-full bg-gray-100">

            {mode}

        </span>

    );

}


/* SMALL COUNT BADGE */

function Badge({ children, color }: any) {

    const colors: any = {

        green: "bg-green-100 text-green-600",
        yellow: "bg-yellow-100 text-yellow-600",
        red: "bg-red-100 text-red-600"

    };

    return (

        <span className={`px-2 py-1 rounded text-xs ${colors[color]}`}>

            {children}

        </span>

    );

}