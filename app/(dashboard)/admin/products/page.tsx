"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/products-table";
import { useState } from "react";
import ProductModal from "../../components/products/product-modal";

const ProductManagement = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Product Management</h1>
                    <span className="opacity-50 text-xl">Manage your inventory, prices and stock.</span>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsOpen(true)}><FiPlus size={20}/>Add Product</Button>
            </div>
            <ProductTable/>
            <ProductModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default ProductManagement;