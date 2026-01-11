"use client";

import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirm";
import { useState } from "react";

const OrderStatus = () => {
    const [isConfirmed, isSetConfirmed] = useState(true);

    return (
        <main>
            <main className="bg-gray-100 min-h-[80vh] lg:min-h-[100vh] p-3">
            <div className="max-w-5xl mx-auto">
                <h1 className="md:text-3xl text-xl font-bold text-center md:py-8 py-5">Order Status</h1>
            </div>
            {
                isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />
            }
        </main>
        </main>
    )
}

export default OrderStatus;