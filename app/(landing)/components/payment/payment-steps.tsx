"use client";

import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { useState } from "react";
import { transactionCheckout } from "@/app/services/transaction_service";
import { confirmAlert, successAlert, warningAlert } from "@/app/lib/alert";

const PaymentSteps = () => {
    const {push} = useRouter();
    const {customerInfo, items, reset} = useCartStore();
    const [file, setFile] = useState<File | null>(); 
    const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

    const handleConfirmPayment = async () => {
        if (!file) {
            warningAlert("Warning", "Must include proof of payment, Please upload a payment receipt.")
            return;
        }

        if (!customerInfo) {
            warningAlert("Customer Information is Missing, Please provide customer information.");
            push("/checkout");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("customerName", customerInfo.customerName);
            formData.append("customerContact", customerInfo.customerContact!.toString())
            formData.append("customerAddress", customerInfo.customerAddress)
            formData.append("image", file);
            formData.append("purchasedItems", 
                JSON.stringify(items.map((item) => ({
                    productId: item._id,
                    qty: item.qty,
                }))) 
            );
            formData.append("totalPayment", totalPrice.toString());

            const response = await transactionCheckout(formData);

            const confimation = await confirmAlert("Pay Now?", "Make sure all the steps are complete")

            if (confimation.isConfirmed) {
                successAlert("Transaction created successfully!")
                reset();
                push(`/order-status/${response._id}`)
            }

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <CardWithHeader title="Payment Steps">
            <div className="p-5">   
            <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
                <li>
                    Transfer the total amount of <b>{PriceFormatter(totalPrice)}</b> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN)
                </li>
                <li>
                    After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.
                </li>
                <li>
                    Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.
                </li>
            </ol>
            <FileUpload onFileSelect={setFile} />
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="font-bold">Total</div>
                    <div className="text-primary font-bold">
                        {PriceFormatter(totalPrice)}
                    </div>
                </div>
                <Button className="w-full mt-4" variant="dark" onClick={handleConfirmPayment}><FiCheckCircle/> Upload Receipt & Confirm</Button>
            </div>
        </CardWithHeader>
    )
}

export default PaymentSteps;