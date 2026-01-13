"use client";

import { useState } from "react";
import Button from "../ui/button";
import { FiShoppingBag, FiArrowRight, FiChevronUp, FiChevronDown} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
    product: Product;
    stock: number
}

const ProductActions = ({product, stock}: TProductActionsProps) => {
    const {addItem} = useCartStore();
    const {push} = useRouter()
    const [qty, setQty] = useState(1);
    const checkout = () => {
        push("/checkout");
    }
    const handleAddtoCart = () => {
        addItem(product, qty)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-3">
            <div className="border border-gray-500 inline-flex w-fit">
                <div className="w-12 w-14 aspect-square text-lg lg:text-xl font-medium border-r border-gray-500 flex justify-center items-center">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col">
                    <button className="border-b border-gray-500 h-1/2 w-10 lg:w-12 flex items-center justify-center cursor-pointer"
                        onClick={ () => setQty(qty < stock ? qty + 1 : qty) }
                    >
                        <FiChevronUp size={24}/>
                    </button>
                    <button className="h-1/2 w-10 lg:w-12 flex items-center justify-center cursor-pointer"
                        onClick={ () => setQty(qty > 1 ? qty - 1 : qty) }
                    >
                        <FiChevronDown size={24}/>
                    </button>
                </div>
            </div>
            <Button className="px-16 w-full" onClick={handleAddtoCart}>
                <FiShoppingBag size={24}/>
                Add to Cart
            </Button>
            <Button className="px-16 w-full" variant="dark" onClick={checkout}>
                Checkout Now
                <FiArrowRight size={24}/>
            </Button>
        </div>
    )
}

export default ProductActions;