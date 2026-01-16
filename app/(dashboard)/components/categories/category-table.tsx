import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
    {
        imgUrl: "/images/categories/category-running.png",
        category: "Running",
        description: "All Running Items, Shoes, Shirts"
    },
    {
        imgUrl: "/images/categories/category-football.png",
        category: "Football",
        description: "All Football Items, Shoes, Shirts"
    },
]

const CategoryTable = () => {
    return (
        <div className="bg-white rounded-xl border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Description</th>
                        <th className="px-6 py-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <div className="aspect-square bg-gray-100 rounded-md">
                                            <Image
                                                src={data.imgUrl}
                                                alt={data.category}
                                                width={40}
                                                height={40}
                                                className="aspect-square object-contain"
                                            />
                                        </div>
                                        <span>{data.category}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    <div>
                                        {data.description}
                                    </div>
                                </td>
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

export default CategoryTable;