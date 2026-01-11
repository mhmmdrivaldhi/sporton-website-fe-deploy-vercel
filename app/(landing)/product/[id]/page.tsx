import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto flex flex-col lg:flex-row lg:gap-12 gap-10 lg:px-16 px-4 py-10 lg:py-14">
            <div className="bg-primary-light aspect-square  lg:min-w-[560px] flex justify-center items-center">
                <Image
                    src="/images/products/football-shoes.png"
                    alt="Football Shoes"
                    width={564}
                    height={378}
                    className="aspect-square object-contain w-full"
                />        
            </div>
            <div className="w-full lg:py-7 lg:px-7">
                <h1 className="font-bold lg:text-4xl text-2xl mb-5">SportsOn HyperSoccer v2</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit lg:mb-8 mb-4">
                    Football
                </div>
                <p className="leading-loose">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary lg:text-[32px] text-2xl font-semibold lg:py-10 py-5">
                    {
                        PriceFormatter(458000)
                    }
                </div>
                <ProductActions />
            </div>
        </main>
    )
}

export default ProductDetail;
