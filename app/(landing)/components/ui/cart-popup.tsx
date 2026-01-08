import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image"
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import Button from "../ui/button";


const cartList = [
    {
        name: "SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        qty: 1,
        imgUrl : "sportshirt-1.png",
    },
    {
        name: "SportsOn HyperSoccer V2",
        category: "Football",
        price: 458000,
        qty: 2,
        imgUrl : "football-shoes.png",
    },
    {
        name: "SportsOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        qty: 1,
        imgUrl : "racket-2.png",
    },
]

const CartPopup = () => {
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);
    return (
        <div className="absolute bg-white right-5 md:right-15 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            {
                cartList.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 flex p-4 gap-3">
                        <div className="bg-primary-light aspect-square w-14 flex justify-center items-center">
                            <Image
                                src={`/images/products/${item.imgUrl}`}
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
                        <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto"><FiTrash2/></Button>
                    </div>
                ))}
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="font-bold">Total</div>
                    <div className="text-primary font-bold">
                        {PriceFormatter(totalPrice)}
                    </div>
                </div>
                <Button className="w-full mt-4" variant="dark" size="small">Checkout Now <FiArrowRight/></Button>
            </div>
        </div>
    )
}

export default CartPopup;