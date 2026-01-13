"use client";

import OrderInformation from "../components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";
import { useState } from "react";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";
import { confirmAlert, warningAlert } from "@/app/lib/alert";

const Checkout = () => {
    const {push} = useRouter();
    const {customerInfo, setCustomerInfo} = useCartStore();
    const [formData, setFormData] = useState<CustomerInfo>({
        customerName: "",
        customerContact: null,
        customerAddress: "",
    })

    const handleCheckout = async () => {
        if(!formData.customerName || !formData.customerContact || !formData.customerAddress) {
            warningAlert("Warning", "Require to fill in the columns provided")
            return
        }

        setCustomerInfo(formData);

        const confirmation = await confirmAlert("Checkout Now?", "Make sure the order is correct");

        if (confirmation.isConfirmed) {
            push("/payment");
        }
    }

    return (
        <main className="bg-gray-100 min-h-[100vh] pt-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="md:text-3xl text-xl font-bold text-center md:py-8 py-5">Checkout Now</h1>
            <div className="grid md:grid-cols-2 md:gap-14 gap-7">
                <OrderInformation formData={formData} setFormData={setFormData}/>
                <CartItems handlePayment={handleCheckout}/>
            </div>
            </div>
        </main>
    )
}
export default Checkout;