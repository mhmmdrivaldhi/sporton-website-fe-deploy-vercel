"use client";

import { useState } from "react";
import Button from "../ui/button";
import { FiShoppingBag, FiArrowRight, FiChevronUp, FiChevronDown} from "react-icons/fi";

const ProductActions = () => {
    const [qty, setQty] = useState(1);

    return (
        <div className="flex gap-3">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center px-5">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={ () => setQty(qty + 1) }
                    >
                        <FiChevronUp size={24}/>
                    </button>
                    <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
                        onClick={ () => setQty(qty > 1 ? qty - 1 : qty) }
                    >
                        <FiChevronDown size={24}/>
                    </button>
                </div>
            </div>
            <Button className="px-20 w-full">
                <FiShoppingBag size={24}/>
                Add to Cart
            </Button>
            <Button className="px-20 w-full" variant="dark">
                Checkout Now
                <FiArrowRight size={24}/>
            </Button>
        </div>
    )
}

export default ProductActions;