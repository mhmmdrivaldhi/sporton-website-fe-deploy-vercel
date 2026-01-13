import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirm";
import { getTransactionById } from "@/app/services/transaction_service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({params}: TPageProps) => {
    const {id} = await params;
    const transaction = await getTransactionById(id)
    console.log(transaction);

    return (
        <main>
            <main className="bg-gray-100 min-h-[80vh] lg:min-h-[100vh] pt-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="md:text-3xl text-xl font-bold text-center md:py-8 py-5">Order Status</h1>
            </div>
            {transaction.status === "pending" && <OrderSubmitted/>}, 
            {transaction.status === "paid" && <OrderConfirmed/>},
            {transaction.status === "rejected" && <OrderRejected/>}
        </main>
        </main>
    )
}

export default OrderStatus;