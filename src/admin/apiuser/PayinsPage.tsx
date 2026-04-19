import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function PayinsPage() {

    const [statusFilter, setStatusFilter] = useState("All");

    const payins = [

        {
            id: "PAY-2401",
            recipient: "Acme Corp",
            amount: "$12,500.00",
            method: "Bank Transfer",
            status: "Success",
            date: "2026-04-15"
        },

        {
            id: "PAY-2402",
            recipient: "John Smith",
            amount: "$3,200.00",
            method: "UPI",
            status: "Pending",
            date: "2026-04-15"
        },

        {
            id: "PAY-2403",
            recipient: "Global Ltd",
            amount: "$8,900.00",
            method: "NEFT",
            status: "Failed",
            date: "2026-04-14"
        },

        {
            id: "PAY-2404",
            recipient: "Jane Doe",
            amount: "$1,450.00",
            method: "IMPS",
            status: "Success",
            date: "2026-04-14"
        },

        {
            id: "PAY-2405",
            recipient: "Tech Inc",
            amount: "$22,000.00",
            method: "RTGS",
            status: "Success",
            date: "2026-04-13"
        },

        {
            id: "PAY-2406",
            recipient: "Digital Co",
            amount: "$5,670.00",
            method: "Bank Transfer",
            status: "Pending",
            date: "2026-04-13"
        },

        {
            id: "PAY-2407",
            recipient: "Alpha LLC",
            amount: "$980.00",
            method: "UPI",
            status: "Failed",
            date: "2026-04-12"
        },

        {
            id: "PAY-2408",
            recipient: "Beta Systems",
            amount: "$15,300.00",
            method: "NEFT",
            status: "Success",
            date: "2026-04-12"
        }

    ];

    const filteredData =
        statusFilter === "All"
            ? payins
            : payins.filter(item => item.status === statusFilter);


    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">

                    Pay-ins

                </h1>

                <p className="text-gray-500 text-sm">

                    Track incoming payment collections

                </p>

            </div>


            {/* SEARCH + FILTER */}

            <div className="flex gap-4 flex-wrap">

                <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white w-full md:w-96">

                    <MdSearch className="text-gray-400" />

                    <input
                        placeholder="Search by ID or recipient..."
                        className="outline-none text-sm w-full"
                    />

                </div>


                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border rounded-lg px-4 py-2 text-sm bg-white"
                >

                    <option>All</option>

                    <option>Success</option>

                    <option>Pending</option>

                    <option>Failed</option>

                </select>

            </div>


            {/* TABLE */}

            <div className="bg-white border rounded-xl shadow overflow-hidden">

                <table className="w-full text-sm">

                    <thead className="bg-gray-50 text-gray-600">

                        <tr>

                            <th className="text-left px-6 py-3">ID</th>

                            <th className="text-left px-6 py-3">Recipient</th>

                            <th className="text-left px-6 py-3">Amount</th>

                            <th className="text-left px-6 py-3">Method</th>

                            <th className="text-left px-6 py-3">Status</th>

                            <th className="text-left px-6 py-3">Date</th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredData.map((row, i) => (

                            <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-3">

                                    {row.id}

                                </td>


                                <td className="px-6 py-3 font-medium">

                                    {row.recipient}

                                </td>


                                <td className="px-6 py-3">

                                    {row.amount}

                                </td>


                                <td className="px-6 py-3">

                                    {row.method}

                                </td>


                                <td className="px-6 py-3">

                                    <StatusBadge status={row.status} />

                                </td>


                                <td className="px-6 py-3 text-gray-500">

                                    {row.date}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}


/* STATUS BADGE COMPONENT */

function StatusBadge({ status }: any) {

    const styles = {

        Success: "bg-green-100 text-green-600",

        Pending: "bg-yellow-100 text-yellow-600",

        Failed: "bg-red-100 text-red-600"

    };

    return (

        <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
        >

            {status}

        </span>

    );

}