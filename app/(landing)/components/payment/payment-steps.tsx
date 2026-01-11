"use client";

import { cartList } from "../ui/cart-popup";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
    const {push} = useRouter();

    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);
    const uploadAndConfirm = () => {
        push("/order-status/1");
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
            <FileUpload/>
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="font-bold">Total</div>
                    <div className="text-primary font-bold">
                        {PriceFormatter(totalPrice)}
                    </div>
                </div>
                <Button className="w-full mt-4" variant="dark" onClick={uploadAndConfirm}><FiCheckCircle/> Upload Receipt & Confirm</Button>
            </div>
        </CardWithHeader>
    )
}

export default PaymentSteps;