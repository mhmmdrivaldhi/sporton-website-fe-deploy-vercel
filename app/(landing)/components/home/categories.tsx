import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    {
        name: "Running",
        imgUrl: "category-running.png"
    },
    {
        name: "Tennis",
        imgUrl: "category-tennis.png"
    },
    {
        name: "Basketball",
        imgUrl: "category-basketball.png"
    },
    {
        name: "Football",
        imgUrl: "category-football.png"
    },
    {
        name: "Badminton",
        imgUrl: "category-badminton.png"
    },
    {
        name: "Swimming",
        imgUrl: "category-swimming.png"
    },
];

const CategoriesSection = () => {
    return (
        <section id="category-section" className="container mx-auto md:py-30 py-15 md:px-16 px-5">
            <div className="flex justify-between">
                <h2 className="font-bold md:text-2xl">Browse By Categories</h2>
                <Link href="#" className="flex gap-2 text-primary font-medium">
                    <span className="self-center">See all categories</span>
                    <FiArrowRight className="self-center"/>
                </Link>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-12 mt-8">
                {categoryList.map((category, index) => (
                    <div className="rounded-lg bg-gradient-to-r from-[#f1f1f1] to-[#f7f7f7] w-full aspect-square flex justify-center" key={index}>
                        <div className="self-center">
                        <Image 
                            src={`/images/categories/${category.imgUrl}`}
                            alt={category.name}
                            width={86}
                            height="86"
                            className="mb-[10px]"
                        />
                        <div className="text-primary font-medium text-xl text-center">
                            {category.name}
                        </div>
                        </div>
                    </div>
                ))} 
            </div>
        </section>
    )
}

export default CategoriesSection;