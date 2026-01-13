"use client";

import Image from "next/image";
import PriceFormatter from "@/app/utils/price-formatter";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
    handlePayment: () => void;
}

const CartItems = ({handlePayment}: TCartItems) => {
    const {items, removeItem} = useCartStore();

    const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <CardWithHeader title="Cart Items">
            <div className="flex flex-col justify-between h-[calc(100%-70px)]">
                <div className="overflow-auto max-h-[300px]">
                {
                    items.map((item) => (
                        <div key={item._id} className="border-b border-gray-200 flex p-4 gap-3">
                            <div className="bg-primary-light aspect-square w-14 flex justify-center items-center">
                                <Image
                                    src={getImageUrl(item.imageUrl)}
                                    alt={item.name}
                                    width={83}
                                    height={73}
                                    className="aspect-square object-contain"
                                />
                            </div>
                            <div className="self-center">
                                <div className="text-sm font-medium">{item.name}</div>
                                <div className="flex gap-3 text-sx">
                                    <div className="font-medium">{item.qty}x</div>
                                    <div className="text-primary font-bold">
                                        {PriceFormatter(item.price)}
                                    </div>
                                </div>
                            </div>
                            <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto" onClick={() => removeItem(item._id)}><FiTrash2/></Button>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between">
                        <div className="font-bold">Total</div>
                        <div className="text-primary font-bold">
                            {PriceFormatter(totalPrice)}
                        </div>
                    </div>
                    <Button className="w-full mt-4" variant="dark" onClick={handlePayment}><FiCreditCard/> Proceed to Payment</Button>
                </div>
            </div>
        </CardWithHeader>
    )
}

export default CartItems;