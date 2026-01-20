"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/products-table";
import { useEffect, useState } from "react";
import ProductModal from "../../components/products/product-modal";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product_service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

const ProductManagement = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>();
    const [productToDeleteId, setProductToDeleteId] = useState("");

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            if (data) {
                setProducts(data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } 
    };

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    const handleDelete = (id: string) => {
        setProductToDeleteId(id);
        setIsDeleteModalOpen(true);    
    }

    const handleDeleteConfirm = async () => {
        if (!productToDeleteId) return;
        try {
            await deleteProduct(productToDeleteId)
            fetchProducts()
            toast.success("Product Deleted Successfully!")
            setIsDeleteModalOpen(false);
            setProductToDeleteId("")
        } catch (error) {
            console.error("Error deleting product:", error)
            toast.error("Failed to Delete Product!")
        } 
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Product Management</h1>
                    <span className="opacity-50 text-xl">Manage your inventory, prices and stock.</span>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsModalOpen(true)}><FiPlus size={20}/>Add Product</Button>
            </div>
            <ProductTable products = {products} onEdit={handleEdit} onDelete={handleDelete}/>
            <ProductModal product={selectedProduct} onSuccess={fetchProducts} isOpen={isModalOpen} onClose={handleCloseModal}/>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm}/>
        </div>
    )
}

export default ProductManagement;