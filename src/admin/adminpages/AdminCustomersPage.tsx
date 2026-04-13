import { useState } from "react";
import AdminAddCustomerDialog from "../../components/AdminAddCustomerDialog.tsx";
import { AdminPasswordCellCustomerList } from "../../components/AdminPasswordCellCustomerList.tsx";

export type Customer = {
    id: number;
    name: string;
    phone: string;
    website: string;
    ipAddress: string;
    username: string;
    password: string;
    role: "Admin" | "Master Api User" | "Api User";
    enabled: boolean;
};

export default function AdminCustomersPage() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const [customers, setCustomers] = useState<Customer[]>([
        {
            id: 1,
            name: "Test user",
            phone: "000000",
            website: "",
            ipAddress: "",
            username: "test1",
            password: "abc12345",
            role: "Api User",
            enabled: true,
        },
        {
            id: 2,
            name: "Demo user",
            phone: "000000",
            website: "",
            ipAddress: "",
            username: "test2",
            password: "xyz98765",
            role: "Api User",
            enabled: false,
        },
    ]);

    return (
        <div className="p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-primary">
                    Customers
                </h1>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                    + Add Customer
                </button>
            </div>

            {/* SEARCH */}
            <input
                type="text"
                placeholder="Search username..."
                className="w-full p-2 mb-4 border rounded-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* TABLE */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-white text-left">
                        <tr>
                            <th className="p-3">No</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers
                            .filter((c) =>
                                c.username.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((c, i) => (
                                <tr key={c.id} className="border-t">
                                    <td className="p-3">{i + 1}</td>
                                    <td>{c.name}</td>
                                    <td>{c.username}</td>

                                    <td>
                                        <AdminPasswordCellCustomerList password={c.password} />
                                    </td>

                                    <td>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={c.enabled}
                                                onChange={() =>
                                                    setCustomers((prev) =>
                                                        prev.map((p) =>
                                                            p.id === c.id
                                                                ? { ...p, enabled: !p.enabled }
                                                                : p
                                                        )
                                                    )
                                                }
                                                className="sr-only peer"
                                            />

                                            <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-600 transition">
                                                <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                                            </div>

                                            <span className="ml-2 text-xs">
                                                {c.enabled ? "Enabled" : "Disabled"}
                                            </span>
                                        </label>
                                    </td>

                                    <td>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1 text-xs bg-primary text-white rounded">
                                                Edit
                                            </button>

                                            <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* DIALOG */}
            {open && (
                <AdminAddCustomerDialog
                    onCloseAction={() => setOpen(false)}
                    onAddAction={(newCustomer) => {
                        setCustomers((prev) => [
                            ...prev,
                            newCustomer,
                        ]);
                    }}
                />
            )}
        </div>
    );
}