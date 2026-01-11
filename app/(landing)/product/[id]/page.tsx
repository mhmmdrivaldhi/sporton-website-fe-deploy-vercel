import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import PriceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product_service";
import { getImageUrl } from "@/app/lib/api";

type TPageProps = {
    params: Promise<{id: string}>
}

const ProductDetail = async ({params}: TPageProps) => {
    const {id} = await params
    const product = await getProductDetail(id);

    return (
        <main className="container mx-auto flex flex-col lg:flex-row lg:gap-12 gap-10 lg:px-16 px-4 py-10 lg:py-14">
            <div className="bg-primary-light aspect-square  lg:min-w-[560px] flex justify-center items-center">
                <Image
                    src={getImageUrl(product.imageUrl)}
                    alt={product.name}
                    width={564}
                    height={378}
                    className="aspect-square object-contain w-full"
                />        
            </div> 
            <div className="w-full lg:py-7 lg:px-7">
                <h1 className="font-bold lg:text-4xl text-2xl mb-5">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit lg:mb-8 mb-4">
                    {product.category.name}
                </div>
                <p className="leading-loose">
                    {product.description}
                </p>
                <div className="text-primary lg:text-[32px] text-2xl font-semibold lg:py-10 py-5">
                    {
                        PriceFormatter(product.price)
                    }
                </div>
                <ProductActions stock={product.stock}/>
            </div>
        </main>
    )
}

export default ProductDetail;
