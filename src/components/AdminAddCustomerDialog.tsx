import { useState } from "react";

type Customer = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    ipAddress: string;
    username: string;
    password: string;
    role: "Admin" | "Master Api User" | "Api User";
    enabled: boolean;
};

type AddCustomDialogProps = {
    onCloseAction: () => void;
    onAddAction: (customer: Customer) => void;
};

export default function AdminAddCustomerDialog({
    onCloseAction,
    onAddAction,
}: AddCustomDialogProps) {

    const [form, setForm] = useState<Customer>({
        id: 0,
        name: "",
        email: "",
        phone: "",
        website: "",
        ipAddress: "",
        username: "",
        password: "",
        role: "Api User",
        enabled: true,
    });

    const [error, setError] = useState("");

    const generatePassword = () =>
        Math.random().toString(36).slice(-10);

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (key: keyof Customer, value: string) => {
        setForm(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        if (!form.name) return setError("Name is required");
        if (!validateEmail(form.email)) return setError("Invalid email");
        if (!form.username) return setError("Username is required");

        const newCustomer: Customer = {
            ...form,
            id: Date.now(),
            password: form.password || generatePassword(),
        };

        console.log("API CALL", newCustomer);

        onAddAction(newCustomer);
        onCloseAction();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[520px] max-h-[90vh] overflow-y-auto">

                <h2 className="text-xl font-semibold mb-4">Add Customer</h2>

                {/* Customer Section */}
                <div className="mb-5">
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                        Customer Details
                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                        <input
                            placeholder="Name"
                            className="input"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />

                        <input
                            placeholder="Email"
                            className="input"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />

                        <input
                            placeholder="Phone"
                            className="input"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />

                        <input
                            placeholder="Website"
                            className="input"
                            value={form.website}
                            onChange={(e) => handleChange("website", e.target.value)}
                        />

                        
                        <input
                            placeholder="IP Address"
                            className="input"
                            value={form.ipAddress}
                            onChange={(e) => handleChange("ipAddress", e.target.value)}
                        />

                        <select
                            className="input"
                            value={form.role}
                            onChange={(e) => handleChange("role", e.target.value)}
                        >
                            <option value="Admin">Admin</option>
                            <option value="Master Api User">Master Api User</option>
                            <option value="Api User">Api User</option>
                        </select>

                    </div>
                </div>

                {/* Login Section */}
                <div className="mb-3">
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                        Login Details
                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                        <input
                            placeholder="Username"
                            className="input"
                            value={form.username}
                            onChange={(e) => handleChange("username", e.target.value)}
                        />

                        <div className="flex gap-2">
                            <input
                                placeholder="Password"
                                className="input w-full"
                                value={form.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    handleChange("password", generatePassword())
                                }
                                className="px-2 bg-gray-200 rounded-md text-sm"
                            >
                                Gen
                            </button>
                        </div>

                    </div>
                </div>

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={onCloseAction}
                        className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Create Customer
                    </button>
                </div>
            </div>
        </div>
    );
}