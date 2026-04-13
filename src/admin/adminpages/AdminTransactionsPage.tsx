import { useState } from "react";

type Transaction = {
    utr: string;
    name: string;
    amount: number;
    time: string;
};

export default function AdminTransactionsPage() {
    const [transactions] = useState<Transaction[]>([
        {
            utr: "UTR1234567890",
            name: "John Doe",
            amount: 5000,
            time: "2026-04-13 10:30 AM",
        },
        {
            utr: "UTR9876543210",
            name: "ABC Pvt Ltd",
            amount: 12000,
            time: "2026-04-13 11:10 AM",
        },
        {
            utr: "UTR5556667778",
            name: "XYZ Traders",
            amount: 3200,
            time: "2026-04-12 05:45 PM",
        },
    ]);

    return (
        <div className="p-4">

            {/* HEADER */}
            <h1 className="text-xl font-semibold mb-4">
                Latest Transactions
            </h1>

            {/* TABLE */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-sm">

                    {/* HEADER */}
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-3">UTR</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Time</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody>
                        {transactions.map((t, index) => (
                            <tr
                                key={index}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="p-3 font-medium text-blue-600">
                                    {t.utr}
                                </td>

                                <td className="p-3">{t.name}</td>

                                <td className="p-3">
                                    ₹{t.amount.toLocaleString()}
                                </td>

                                <td className="p-3 text-gray-600">
                                    {t.time}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}