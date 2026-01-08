import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-20 flex gap-12 px-16">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image
                    src="/images/products/football-shoes.png"
                    alt="Football Shoes"
                    width={564}
                    height={378}
                    className="aspect-square object-contain w-full"
                />        
            </div>
            <div className="w-full py-7 px-7">
                <h1 className="font-bold text-4xl mb-5">SportsOn HyperSoccer v2</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-8">
                    Football
                </div>
                <p className="leading-loose">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary text-[32px] font-semibold py-10">
                    {
                        PriceFormatter(458000)
                    }
                </div>
                <ProductActions/>
            </div>
        </main>
    )
}

export default ProductDetail;
