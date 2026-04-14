import { useFundTransferRequests } from "../../hooks/useFundTransferRequests";
import {
    useApproveFundTransfer,
    useRejectFundTransfer
} from "../../hooks/useFundTransferActions";

export default function AdminTransactionsPage() {

    const {
        data,
        isLoading,
        isError,
    } = useFundTransferRequests();

    const approveMutation =
        useApproveFundTransfer();

    const rejectMutation =
        useRejectFundTransfer();


    const handleApprove = (id: number) => {

        if (confirm("Approve this transaction?")) {

            approveMutation.mutate(id);

        }

    };


    const handleReject = (id: number) => {

        if (confirm("Reject this transaction?")) {

            rejectMutation.mutate(id);

        }

    };


    if (isLoading)

        return (
            <div className="p-4">
                Loading transactions...
            </div>
        );


    if (isError)

        return (
            <div className="p-4 text-red-500">
                Failed to load transactions
            </div>
        );


    return (

        <div className="p-4">

            <h1 className="text-xl font-semibold mb-4">
                Latest Transactions
            </h1>


            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-left">

                        <tr>

                            <th className="p-3">Transaction ID</th>
                            <th className="p-3">Beneficiary</th>
                            <th className="p-3">Mode</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Created</th>
                            <th className="p-3">Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        {data?.map((t: any) => (

                            <tr
                                key={t.id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="p-3 font-medium text-blue-600">
                                    {t.transactionId}
                                </td>


                                <td className="p-3">
                                    {t.beneficiaryName}
                                </td>


                                <td className="p-3">
                                    {t.modeOfPayment}
                                </td>


                                <td className="p-3">
                                    ₹{Number(
                                        t.amount
                                    ).toLocaleString()}
                                </td>


                                <td className="p-3">

                                    <span
                                        className={`px-2 py-1 rounded text-xs
                                        ${
                                            t.status === "Approved"
                                                ? "bg-green-100 text-green-700"
                                                : t.status === "Rejected"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >

                                        {t.status || "Pending"}

                                    </span>

                                </td>


                                <td className="p-3 text-gray-600">
                                    {t.createdDate}
                                </td>


                                <td className="p-3">

                                    {(t.status === "Pending" ||
                                      !t.status) && (

                                        <div className="flex gap-2">

                                            <button
                                                onClick={() =>
                                                    handleApprove(t.requestId)
                                                }
                                                disabled={
                                                    approveMutation.isPending
                                                }
                                                className="px-3 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
                                            >
                                                Approve
                                            </button>


                                            <button
                                                onClick={() =>
                                                    handleReject(t.requestId)
                                                }
                                                disabled={
                                                    rejectMutation.isPending
                                                }
                                                className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                                            >
                                                Reject
                                            </button>



                                        </div>

                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}