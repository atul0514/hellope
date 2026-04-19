import { useState } from "react";
import { MdSend, MdChatBubbleOutline } from "react-icons/md";

export default function SupportPage() {

    const [form, setForm] = useState({
        category: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: any) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = () => {

        console.log("Support Ticket Submitted:", form);

        // future API call
        // POST /support/ticket

    };


    return (

        <div className="space-y-6">


            {/* HEADER */}

            <div>

                <h1 className="text-2xl font-bold">

                    Support

                </h1>

                <p className="text-gray-500 text-sm">

                    Get help with your account

                </p>

            </div>



            {/* SUBMIT TICKET */}

            <div className="bg-white rounded-xl shadow p-6 max-w-3xl">

                <div className="flex items-center gap-2 font-semibold text-lg mb-5">

                    <MdSend />

                    Submit a Ticket

                </div>


                {/* CATEGORY */}

                <div className="mb-4">

                    <label className="text-sm font-medium">

                        Category

                    </label>

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    >

                        <option>Select category</option>

                        <option>Payout Issue</option>

                        <option>Wallet Issue</option>

                        <option>API Issue</option>

                        <option>Account Verification</option>

                        <option>Other</option>

                    </select>

                </div>


                {/* SUBJECT */}

                <div className="mb-4">

                    <label className="text-sm font-medium">

                        Subject

                    </label>

                    <input
                        name="subject"
                        placeholder="Brief description"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />

                </div>


                {/* MESSAGE */}

                <div className="mb-5">

                    <label className="text-sm font-medium">

                        Message

                    </label>

                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Describe your issue in detail..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                    />

                </div>


                {/* BUTTON */}

                <button
                    onClick={handleSubmit}
                    className="bg-primary text-white px-6 py-2 rounded-lg text-sm"
                >

                    Submit Ticket

                </button>

            </div>



            {/* RECENT TICKETS */}

            <div className="bg-white rounded-xl shadow p-6 max-w-3xl">

                <div className="flex items-center gap-2 font-semibold text-lg mb-4">

                    <MdChatBubbleOutline />

                    Recent Tickets

                </div>


                <TicketItem
                    title="Payout delay"
                    id="TK-101"
                    date="2026-04-15"
                    status="Open"
                />

                <TicketItem
                    title="API key not working"
                    id="TK-100"
                    date="2026-04-13"
                    status="Resolved"
                />

                <TicketItem
                    title="Account verification"
                    id="TK-099"
                    date="2026-04-12"
                    status="In Progress"
                />

            </div>

        </div>

    );

}



/* TICKET ROW COMPONENT */

function TicketItem({ title, id, date, status }: any) {

    const statusStyles: any = {

        Open: "bg-yellow-100 text-yellow-600",

        Resolved: "bg-green-100 text-green-600",

        "In Progress": "bg-blue-100 text-blue-600"

    };


    return (

        <div className="flex justify-between items-center border-b last:border-none py-4">

            <div>

                <p className="font-medium">

                    {title}

                </p>

                <p className="text-xs text-gray-400">

                    {id} • {date}

                </p>

            </div>


            <span
                className={`px-3 py-1 rounded-full text-xs ${statusStyles[status]}`}
            >

                {status}

            </span>

        </div>

    );

}