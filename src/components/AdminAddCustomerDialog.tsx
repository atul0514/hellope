import { useState } from "react";
import { UserRoles } from "../utils/userRoles.ts";
import { useCreateCustomer } from "../hooks/useCreateCustomer";

type Customer = {
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

type AddCustomDialogProps = {
    onCloseAction: () => void;
    onAddAction: (customer: Customer) => void;
};

const roleMap: Record<string, number> = {
    Admin: 1,
    "Master Api User": 2,
    "Api User": 3,
};

export default function AdminAddCustomerDialog({
    onCloseAction,
    onAddAction,
}: AddCustomDialogProps) {

    const createCustomerMutation = useCreateCustomer();

    const [form, setForm] = useState<Customer>({
        id: 0,
        name: "",
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

    const handleChange = (
        key: keyof Customer,
        value: string
    ) => {

        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

    };

    const handleSubmit = () => {

        setError("");

        if (!form.name)
            return setError("Name is required");

        if (!form.username)
            return setError("Username is required");

        const payload = {

            name: form.name,
            phoneNo: form.phone,
            website: form.website,
            ipAddress: form.ipAddress,
            username: form.username,
            password:
                form.password || generatePassword(),
            roleId:
                roleMap[form.role],

        };

        createCustomerMutation.mutate(
            payload,
            {
                onSuccess: () => {

                    onAddAction({
                        ...form,
                        id: Date.now(),
                        password: payload.password,
                        enabled: true,
                    });

                    onCloseAction();

                },

                onError: (err: any) => {

                    const message =
                        err.response?.data?.message ||
                        err.response?.data ||
                        "Failed to create customer";

                    setError(message);

                },
            }
        );
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-white w-[540px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-5">

                    <h2 className="text-xl font-semibold text-gray-800">

                        Add Customer

                    </h2>

                    <button
                        onClick={onCloseAction}
                        className="text-gray-500 hover:text-black text-lg"
                    >
                        ✕
                    </button>

                </div>

                {/* FORM */}
                <div className="grid grid-cols-2 gap-3">

                    <input
                        placeholder="Name"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.name}
                        onChange={(e) =>
                            handleChange(
                                "name",
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder="Phone"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.phone}
                        onChange={(e) =>
                            handleChange(
                                "phone",
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder="Website"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.website}
                        onChange={(e) =>
                            handleChange(
                                "website",
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder="IP Address"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.ipAddress}
                        onChange={(e) =>
                            handleChange(
                                "ipAddress",
                                e.target.value
                            )
                        }
                    />

                    <select
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400 col-span-2"
                        value={form.role}
                        onChange={(e) =>
                            handleChange(
                                "role",
                                e.target.value
                            )
                        }
                    >

                        <option value={UserRoles.Admin}>
                            {UserRoles.Admin}
                        </option>

                        <option value={UserRoles.Masters}>
                            {UserRoles.Masters}
                        </option>

                        <option value={UserRoles.ApiUser}>
                            {UserRoles.ApiUser}
                        </option>

                    </select>

                    <input
                        placeholder="Username"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.username}
                        onChange={(e) =>
                            handleChange(
                                "username",
                                e.target.value
                            )
                        }
                    />

                    <input
                        placeholder="Password"
                        className="border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        value={form.password}
                        onChange={(e) =>
                            handleChange(
                                "password",
                                e.target.value
                            )
                        }
                    />

                </div>

                {/* ERROR */}
                {error && (
                    <p className="text-red-500 text-sm mt-3">
                        {error}
                    </p>
                )}

                {/* ACTIONS */}
                <div className="flex justify-end gap-3 mt-5">

                    <button
                        onClick={onCloseAction}
                        disabled={
                            createCustomerMutation.isPending
                        }
                        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={
                            createCustomerMutation.isPending
                        }
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >

                        {createCustomerMutation.isPending
                            ? "Creating..."
                            : "Create Customer"}

                    </button>

                </div>

            </div>

        </div>
    );
}