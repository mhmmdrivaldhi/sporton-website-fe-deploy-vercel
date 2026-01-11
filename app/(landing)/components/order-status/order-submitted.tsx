"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
    const reloadOrderStatus = () => {
        window.location.reload();
    }
    return (

        <div className="bg-white w-full max-w-160 lg:p-16 p-6 flex flex-col justify-center items-center mx-auto">
            <Image
                src="/images/icon-order-submitted.svg"
                alt="Order Submitted"
                width={117}
                height={117}
                className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Order Submitted!!</h2>
            <p className="mb-8 text-center">Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            <Button variant="dark" className="w-full" onClick={reloadOrderStatus}><FiRefreshCw />Refresh Order Status</Button>
        </div>
    )
}

export default OrderSubmitted;