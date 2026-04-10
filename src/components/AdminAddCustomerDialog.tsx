import {useState} from "react";


type AddCustomDialogProps = {
    onCloseAction: () => void;
    onAddAction: (customer: any) => void;
};

export default function AdminAddCustomerDialog({ onCloseAction, onAddAction }: AddCustomDialogProps) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const generatePassword = () =>
        Math.random().toString(36).slice(-10);

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setError("Invalid email");
            return;
        }

        const newCustomer = {
            id: Date.now(),
            email,
            password: generatePassword(),
            enabled: true,
        };

        // API CALL (replace later)
        console.log("API CALL", newCustomer);

        onAddAction(newCustomer);
        onCloseAction();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-96">

                <h2 className="text-lg font-bold mb-4">Add Customer</h2>

                <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border p-2 rounded mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-xs mb-2">{error}</p>
                )}

                <div className="flex justify-end gap-2 mt-4">
                    <button onClick={onCloseAction} className="px-3 py-2">
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="bg-primary text-white px-3 py-2 rounded"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}