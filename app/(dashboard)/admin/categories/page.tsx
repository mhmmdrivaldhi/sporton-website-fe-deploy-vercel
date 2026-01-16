"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import CategoryModal from "../../components/categories/category-modal";
import CategoryTable from "../../components/categories/category-table";

const CategoryManagement = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Category Management</h1>
                    <span className="opacity-50 text-xl">Organize your products into categories.
                    </span>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsOpen(true)}><FiPlus size={20}/>Add Category</Button>
            </div>
            <CategoryTable/>
            <CategoryModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default CategoryManagement;