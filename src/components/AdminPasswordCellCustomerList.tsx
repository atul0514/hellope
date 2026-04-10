import { useState } from "react";

export function AdminPasswordCellCustomerList({ password }: { password: string }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <span>{show ? password : "••••••••"}</span>

            <button
                onClick={() => setShow(!show)}
                className="text-primary text-xs ml-2"
            >
                {show ? "Hide" : "Show"}
            </button>
        </>
    );
}