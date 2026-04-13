import {useState} from "react";
import {UserRoles} from "../utils/userRoles.ts";


type Customer = {
    id: number;
    name: string;
    phone: string;
    website: string;
    ipAddress: string;
    username: string;
    password: string;
    role: UserRoles;
    enabled: boolean;
};

type AddCustomDialogProps = {
    onCloseAction: () => void;
    onAddAction: (customer: Customer) => void;
};

const roleMap: Record<string, number> = {
    "Admin": 1,
    "Master Api User": 2,
    "Api User": 3,
};

export default function AdminAddCustomerDialog({
    onCloseAction,
    onAddAction,
}: AddCustomDialogProps) {

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
    const [loading, setLoading] = useState(false);

    const generatePassword = () =>
        Math.random().toString(36).slice(-10);

    const handleChange = (key: keyof Customer, value: string) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        setError("");

        if (!form.name) return setError("Name is required");
        if (!form.username) return setError("Username is required");

        try {
            setLoading(true);

            const payload = {
                name: form.name,
                phoneNo: form.phone,
                website: form.website,
                ipAddress: form.ipAddress,
                username: form.username,
                password: form.password || generatePassword(),
                roleId: roleMap[form.role],
            };

            console.log("Sending payload:", payload);
            const token =
                 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIklQQWRkcmVzcyI6IjEuMS4xLjEiLCJleHAiOjE3NzYwOTQzNzUsImlzcyI6ImFwaS51ZGFhYW4uY29tIiwiYXVkIjoid3d3LnVkYWFhbi5jb20ifQ.sllGHbRjfum9QpnuXnib0G5kbplwH9lDSv-0zazFjtU";
            const response = await fetch(
                "http://www.udaaanpe.com/api/Auth/Create-New-User",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    body: JSON.stringify(payload),
                            }
            );

            // IMPORTANT: handle non-JSON responses safely
            const text = await response.text();

            let data;
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }

            console.log("API RESPONSE:", data);

            if (!response.ok) {
                throw new Error(
                    typeof data === "string"
                        ? data
                        : data?.message || "Failed to create user"
                );
            }

            onAddAction({
                ...form,
                id: Date.now(),
                password: payload.password,
                enabled: true,
            });

            onCloseAction();

        } catch (err: any) {
            console.error("FETCH ERROR:", err);

       
            if (err.message === "Failed to fetch") {
                setError(
                    "Network error: CORS issue or API server not reachable."
                );
            } else {
                setError(err.message || "Something went wrong");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[520px] max-h-[90vh] overflow-y-auto">

                <h2 className="text-xl font-semibold mb-4">
                    Add Customer
                </h2>

                <div className="grid grid-cols-2 gap-3">

                    <input
                        placeholder="Name"
                        className="input"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
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
                        <option value={UserRoles.Admin}>{UserRoles.Admin}</option>
                        <option value={UserRoles.Masters}>{UserRoles.Masters}</option>
                        <option value={UserRoles.ApiUser}>{UserRoles.ApiUser}</option>
                    </select>

                    <input
                        placeholder="Username"
                        className="input"
                        value={form.username}
                        onChange={(e) => handleChange("username", e.target.value)}
                    />

                    <input
                        placeholder="Password"
                        className="input"
                        value={form.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                    />

                </div>

                {error && (
                    <p className="text-red-500 text-sm mt-3">
                        {error}
                    </p>
                )}

                <div className="flex justify-end gap-3 mt-4">

                    <button
                        onClick={onCloseAction}
                        className="px-4 py-2 border rounded-lg"
                        disabled={loading}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                    >
                        {loading ? "Creating..." : "Create Customer"}
                    </button>

                </div>

            </div>
        </div>
    );
}