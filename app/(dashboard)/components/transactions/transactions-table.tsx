import PriceFormatter from "@/app/utils/price-formatter";
import { FiEye } from "react-icons/fi";

const transactionData = [
    {
        date: "23/02/2026 19:32",
        customer: "John Doe",
        contact: "08231223123",
        total: 450000,
        status: "pending",
    },
    {
        date: "23/02/2026 13:32",
        customer: "Delon Marx",
        contact: "08231223123",
        total: 753000,
        status: "paid",
    },
    {
        date: "23/02/2026 13:32",
        customer: "Delon Marx",
        contact: "08231223123",
        total: 753000,
        status: "rejected",
    },
]

type TViewDetailProps = {
    onViewDetail: () => void;
}


const TransactionTable = ({ onViewDetail}: TViewDetailProps) => {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-100 border border-yellow-500 text-yellow-600";
            case "paid":
                return "bg-green-100 border border-green-500 text-green-600";
            case "rejected":
                return "bg-red-100 border border-red-500 text-red-600";
        }
    } 

    return (
        <div className="bg-white rounded-xl border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Customer</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Total</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactionData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <span>{data.date}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    {data.customer}
                                </td>
                                <td className="px-6 py-4 font-medium">{data.contact}</td>
                                <td className="px-6 py-4 font-medium">
                                    {PriceFormatter(data.total)}
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <div className={`px-1 py-1 text-center rounded-full ${getStatusColor(data.status)}`}>
                                        {data.status.toUpperCase()}
                                    </div>
                                </td>
                                <td className="flex gap-4 items-center py-4 text-dark font-medium">
                                    <button className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 w-fit py-3 px-3 rounded-lg" onClick={onViewDetail}>
                                        <FiEye size={20}/>
                                        <span>View Details</span>
                                    </button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable;