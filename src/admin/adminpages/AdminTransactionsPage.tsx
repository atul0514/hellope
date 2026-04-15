import {useFundTransferRequests} from "../../hooks/useFundTransferRequests";
import {useApproveFundTransfer, useRejectFundTransfer} from "../../hooks/useFundTransferActions";
import IndicatorComponent from "../../components/IndicatorComponent.tsx";


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

    <IndicatorComponent loadingName={"Loading transactions..."}/>
        );


    if (isError)
    {


        return (
            <div className="p-4 text-red-500">
                Failed to load transactions
            </div>
        );
    }



    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                Latest Transactions
            </h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-sm table-fixed">

                    {/* Column widths */}
                    <colgroup>
                        <col className="w-[15%]" />
                        <col className="w-[15%]" />
                        <col className="w-[12%]" />
                        <col className="w-[12%]" />
                        <col className="w-[12%]" />
                        <col className="w-[18%]" />
                        <col className="w-[16%]" />
                    </colgroup>

                    {/* Header */}
                    <thead className="bg-bg border-b border-gray-200">
                    <tr className="text-gray-600">
                        <th className="p-4 text-center border-r border-gray-200">Transaction ID</th>
                        <th className="p-4 text-center border-r border-gray-200">Beneficiary</th>
                        <th className="p-4 text-center border-r border-gray-200">Mode</th>
                        <th className="p-4 text-center border-r border-gray-200">Amount</th>
                        <th className="p-4 text-center border-r border-gray-200">Status</th>
                        <th className="p-4 text-center border-r border-gray-200">Created</th>
                        <th className="p-4 text-center">Action</th>
                    </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-200">
                    {data?.map((t: any) => (
                        <tr
                            key={t.id}
                            className="hover:bg-bg transition text-center"
                        >
                            <td className="p-4 border-r border-gray-200 truncate text-blue-600 font-medium">
                                {t.transactionId}
                            </td>

                            <td className="p-4 border-r border-gray-200 truncate text-gray-700">
                                {t.beneficiaryName}
                            </td>

                            <td className="p-4 border-r border-gray-200 truncate text-gray-600">
                                {t.modeOfPayment}
                            </td>

                            <td className="p-4 border-r border-gray-200 font-semibold text-gray-800">
                                ₹{Number(t.amount).toLocaleString()}
                            </td>

                            <td className="p-4 border-r border-gray-200">
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
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

                            <td className="p-4 border-r border-gray-200 truncate text-gray-500">
                                {t.createdDate}
                            </td>

                            <td className="p-4">
                                {(t.status === "Pending" || !t.status) && (
                                    <div className="flex justify-center gap-2 whitespace-nowrap">
                                        <button
                                            onClick={() => handleApprove(t.requestId)}
                                            disabled={approveMutation.isPending}
                                            className="px-3 py-1.5 text-xs rounded-lg bg-green-500 text-white
                      hover:bg-green-600 active:scale-95 transition disabled:opacity-50"
                                        >
                                            Approve
                                        </button>

                                        <button
                                            onClick={() => handleReject(t.requestId)}
                                            disabled={rejectMutation.isPending}
                                            className="px-3 py-1.5 text-xs rounded-lg bg-red-500 text-white
                      hover:bg-red-600 active:scale-95 transition disabled:opacity-50"
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