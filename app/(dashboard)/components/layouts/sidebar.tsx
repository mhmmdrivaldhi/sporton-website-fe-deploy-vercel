"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBox, FiLayers, FiShoppingCart, FiCreditCard, FiLogOut } from "react-icons/fi";


const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Products",
            icon: FiBox,
            link: "/admin/products"
        },
        {
            name: "Categories",
            icon: FiLayers,
            link: "/admin/categories"
        },
        {
            name: "Transactions",
            icon: FiShoppingCart,
            link: "/admin/transactions"
        },
        {
            name: "Bank Informations",
            icon: FiCreditCard,
            link: "/admin/bank-info"
        },
    ]
    return (
        <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed top-0 left-0">
            <div className="py-8 px-14 border-b border-gray-100 flex items-center justify-center">
                <Image
                    src="/images/logo-admin.svg"
                    alt="Logo Admin"
                    width={215}
                    height={36}
                />   
            </div>
            <div className="flex flex-col gap-2 p-5 mt-8">
                {
                    menuItems.map((menu, index) => {
                        const isActive = menu.link === pathname;

                        return (
                        <Link key={index} href={menu.link} className={`flex gap-3 py-2 px-4.5 rounded-lg font-medium duration-200
                        ${isActive ? 'bg-primary/15 text-primary' : 'hover:bg-primary/15 hover:text-primary'}`}>
                            <menu.icon size={24} />
                            <span>{menu.name} {isActive}</span>
                        </Link>
                    )
                    })
                }
            </div>
            <Link href="#" className="flex gap-3 py-2 px-4.5 font-medium mx-5 hover:bg-red-500 hover:text-gray-100 duration-200 rounded-lg mt-auto mb-10"><FiLogOut size={24} />Log Out</Link>
        </aside>
    )
}

export default Sidebar;