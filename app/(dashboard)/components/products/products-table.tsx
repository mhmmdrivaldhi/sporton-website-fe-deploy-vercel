import PriceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const productData = [
    {
        imgUrl: "/images/products/shoes-2.png",
        product: "SportsOn Hyperfast Shoes",
        category: "Running",
        price: 289000,
        stock: 2,
    },
    {
        imgUrl: "/images/products/sportshirt-1.png",
        product: "SportsOn Slowlivin",
        category: "Running",
        price: 145000,
        stock: 5,
    },
    {
        imgUrl: "/images/products/football-shoes.png",
        product: "SportsOn HyperSocces v2",
        category: "Football",
        price: 756000,
        stock: 3,
    },
]

const ProductTable = () => {
    return (
        <div className="bg-white rounded-xl border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Price</th>
                        <th className="px-6 py-4 font-semibold">Stock</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square bg-gray-100 rounded-md">
                                            <Image
                                                src={data.imgUrl}
                                                alt={data.product}
                                                width={40}
                                                height={40}
                                                className="aspect-square object-contain"
                                            />
                                        </div>
                                        <span>{data.product}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <div className="rounded-md bg-gray-200 px-2 px-1 w-fit">
                                        {data.category}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    {PriceFormatter(data.price)}
                                </td>
                                <td className="px-6 py-4 font-medium">{data.stock} Units</td>
                                <td className="flex gap-4 items-center px-6 py-7.5 text-gray-600">
                                    <button>
                                        <FiEdit2 size={20}/>
                                    </button>
                                    <button>
                                        <FiTrash2 size={20}/>
                                    </button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;