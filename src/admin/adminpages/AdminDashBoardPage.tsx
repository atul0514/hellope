import {
    FaRupeeSign,
    FaChartLine,
    FaUsers,
    FaHeartbeat
} from "react-icons/fa";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from "recharts";

function AdminDashBoardPage() {

    const payoutTrend = [
        { day: "Apr 26", value: 20000 }
    ];

    const paymentDistribution = [
        { name: "IMPS", value: 65 },
        { name: "UPI", value: 35 }
    ];

    const weeklyTransactions = [
        { day: "Mon", success: 0, failed: 0 },
        { day: "Tue", success: 0, failed: 0 },
        { day: "Wed", success: 0, failed: 0 },
        { day: "Thu", success: 0, failed: 0 },
        { day: "Fri", success: 2, failed: 0 },
        { day: "Sat", success: 1, failed: 1 },
        { day: "Sun", success: 1, failed: 4 }
    ];

    const recentTransactions = [
        {
            id: "ORD-TZY3TTGMT2",
            name: "rohit",
            amount: "₹500",
            mode: "IMPS",
            status: "FAILED",
            date: "4/19/2026"
        },
        {
            id: "ORD-HAC155807A",
            name: "rohit s",
            amount: "₹500",
            mode: "UPI",
            status: "FAILED",
            date: "4/19/2026"
        },
        {
            id: "ORD-YK47XV7WNF",
            name: "Akshat",
            amount: "₹400",
            mode: "UPI",
            status: "SUCCESS",
            date: "4/19/2026"
        }
    ];

    return (

        <div className="space-y-6 min-h-screen">

            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">
                    Dashboard
                </h1>

                <p className="text-gray-500 text-sm">
                    Welcome back! Here's your payment operations overview.
                </p>

            </div>


            {/* TOP CARDS */}

            <div className="grid md:grid-cols-4 gap-6">

                <DashboardCard
                    title="Wallet Balance"
                    value="₹570.00"
                    icon={<FaRupeeSign />}
                />

                <DashboardCard
                    title="Total Payout Volume"
                    value="₹20,360.00"
                    icon={<FaChartLine />}
                />

                <DashboardCard
                    title="Downline Users"
                    value="0"
                    icon={<FaUsers />}
                />

                <DashboardCard
                    title="Success Rate"
                    value="37.5%"
                    icon={<FaHeartbeat />}
                />

            </div>


            {/* LINE CHART */}

            <div className="bg-white rounded-xl shadow p-6">

                <h3 className="font-semibold mb-4">
                    Payout Volume Trend
                </h3>

                <ResponsiveContainer width="100%" height={250}>

                    <LineChart data={payoutTrend}>

                        <XAxis dataKey="day" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#0B2A8A"
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>


            {/* PIE + BAR */}

            <div className="grid md:grid-cols-2 gap-6">

                {/* PIE */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h3 className="font-semibold mb-4">
                        Payment Mode Distribution
                    </h3>

                    <ResponsiveContainer width="100%" height={250}>

                        <PieChart>

                            <Pie
                                data={paymentDistribution}
                                dataKey="value"
                                outerRadius={80}
                            >

                                <Cell fill="#0B2A8A" />

                                <Cell fill="#FF7A18" />

                            </Pie>

                        </PieChart>

                    </ResponsiveContainer>

                </div>


                {/* BAR */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h3 className="font-semibold mb-4">
                        Weekly Transaction Status
                    </h3>

                    <ResponsiveContainer width="100%" height={250}>

                        <BarChart data={weeklyTransactions}>

                            <XAxis dataKey="day" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="success"
                                fill="#16a34a"
                            />

                            <Bar
                                dataKey="failed"
                                fill="#ef4444"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>


            {/* TABLE */}

            <div className="bg-white rounded-xl shadow">

                <div className="flex justify-between p-4 border-b">

                    <h3 className="font-semibold">
                        Recent Transactions
                    </h3>

                    <button className="text-blue-600 text-sm">
                        View All
                    </button>

                </div>


                <table className="w-full text-sm">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="p-3 text-left">
                                ORDER ID
                            </th>

                            <th className="p-3 text-left">
                                BENEFICIARY
                            </th>

                            <th className="p-3 text-left">
                                AMOUNT
                            </th>

                            <th className="p-3 text-left">
                                MODE
                            </th>

                            <th className="p-3 text-left">
                                STATUS
                            </th>

                            <th className="p-3 text-left">
                                DATE
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {recentTransactions.map((txn, i) => (

                            <tr
                                key={i}
                                className="border-t"
                            >

                                <td className="p-3">
                                    {txn.id}
                                </td>

                                <td className="p-3">
                                    {txn.name}
                                </td>

                                <td className="p-3">
                                    {txn.amount}
                                </td>

                                <td className="p-3">
                                    {txn.mode}
                                </td>

                                <td className="p-3">

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs ${
                                            txn.status === "SUCCESS"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }`}
                                    >

                                        {txn.status}

                                    </span>

                                </td>

                                <td className="p-3">
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

export default AdminDashBoardPage;



function DashboardCard({ title, value, icon }) {

    return (

        <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">

            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">

                {icon}

            </div>

            <div>

                <p className="text-lg font-semibold">
                    {value}
                </p>

                <p className="text-gray-500 text-sm">
                    {title}
                </p>

            </div>

        </div>

    );

}