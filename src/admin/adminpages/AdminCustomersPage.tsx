import { useState } from "react";
import AdminAddCustomerDialog from "../../components/AdminAddCustomerDialog.tsx";
import { AdminPasswordCellCustomerList } from "../../components/AdminPasswordCellCustomerList.tsx";
import { useCustomers } from "../../hooks/useCustomers";
import IndicatorComponent from "../../components/IndicatorComponent.tsx";


export default function AdminCustomersPage() {

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState("");


    /**
     * FETCH CUSTOMERS FROM API
     */

    const {

        data: customers,

        isLoading,

        isError

    } = useCustomers();


    if (isLoading)

        return (

            <IndicatorComponent loadingName={"Loading customers..."}/>
        );


    if (isError)

        return (

            <div className="p-6 text-red-500">

                Failed to load customers

            </div>

        );


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

            <div className="relative mb-4">

                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">

                    <svg

                        className="w-4 h-4 text-gray-400"

                        fill="none"

                        stroke="currentColor"

                        strokeWidth={2}

                        viewBox="0 0 24 24"

                    >

                        <path

                            strokeLinecap="round"

                            strokeLinejoin="round"

                            d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"

                        />

                    </svg>

                </div>


                <input

                    type="text"

                    placeholder="Search by username..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    className="

                        w-full pl-10 pr-4 py-2.5

                        border border-gray-200

                        rounded-lg

                        bg-white

                        text-sm

                        shadow-sm

                        focus:outline-none

                        focus:ring-1 focus:ring-primary

                        focus:border-primary

                        transition

                    "

                />

            </div>


            {/* TABLE */}

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">

                <table className="w-full text-sm table-fixed">

                    <thead className="bg-bg">

                        <tr className="border-b border-gray-200">

                            <th className="p-3 w-[60px] text-center border-r border-gray-200">No</th>

                            <th className="w-[160px] text-center border-r border-gray-200">Name</th>

                            <th className="w-[220px] text-center border-r border-gray-200">Username</th>

                            <th className="w-[200px] text-center border-r border-gray-200">Password</th>

                            <th className="w-[140px] text-center border-r border-gray-200">Status</th>

                            <th className="w-[140px] text-center">Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        {customers

                            ?.filter((c: any) =>

                                c.username

                                    ?.toLowerCase()

                                    .includes(search.toLowerCase())

                            )

                            .map((c: any, i: number) => (

                                <tr

                                    key={c.id}

                                    className="border-b border-gray-200 hover:bg-bg transition-colors duration-200"

                                >

                                    <td className="p-3 text-center border-r border-gray-200">

                                        {i + 1}

                                    </td>


                                    <td className="text-center border-r border-gray-200 truncate">

                                        {c.name}

                                    </td>


                                    <td className="text-center border-r border-gray-200 truncate">

                                        {c.username}

                                    </td>


                                    <td className="text-center border-r border-gray-200">

                                        <div className="flex justify-center">

                                            <AdminPasswordCellCustomerList

                                                password={c.password}

                                            />

                                        </div>

                                    </td>


                                    {/* STATUS SWITCH */}

                                    <td className="text-center border-r border-gray-200">

                                        <label className="inline-flex items-center cursor-pointer w-[120px] justify-center">

                                            <input

                                                type="checkbox"

                                                checked={c.enabled}

                                                readOnly

                                                className="sr-only peer"

                                            />


                                            <div className="relative w-11 h-6 bg-gray-300 rounded-full transition-colors duration-300 peer-checked:bg-green-600">

                                                <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5" />

                                            </div>


                                            <span className="ml-2 text-xs font-medium w-[80px] inline-block">

                                                {c.enabled

                                                    ? "Enabled"

                                                    : "Disabled"}

                                            </span>

                                        </label>

                                    </td>


                                    {/* ACTIONS */}

                                    <td className="text-center">

                                        <div className="flex justify-center gap-2">

                                            <button className="px-3 py-1 text-xs rounded bg-primary text-white hover:bg-blue-600">

                                                Edit

                                            </button>


                                            <button className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-700">

                                                Delete

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>


            {/* ADD CUSTOMER DIALOG */}

            {open && (

                <AdminAddCustomerDialog

                    onCloseAction={() => setOpen(false)}

                    onAddAction={() => {}}

                />

            )}

        </div>

    );

}