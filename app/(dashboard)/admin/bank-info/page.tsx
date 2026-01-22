"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import BankInformationList from "../../components/bank-info/bank-info-list";
import BankModal from "../../components/bank-info/bank-modal";
import { Bank } from "@/app/types";
import { deleteBank, getAllBanks } from "@/app/services/bank_service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

const BankInformation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [banks, setBanks] = useState<Bank[]>([])
    const [selectedBank, setSelectedBank] = useState<Bank | null>(null)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [bankToDeleteId, setBankToDeleteId] = useState("")

    const fetchBanks = async () => {
        try {
            const data = await getAllBanks();
            setBanks(data)
        } catch (error) {
            console.error("Error fetching banks:", error);
        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBank(null);
    }

    const handleEdit = (bank: Bank) => {
        setSelectedBank(bank);
        setIsModalOpen(true);
    }

    const handleDelete = (id: string) => {
        setBankToDeleteId(id)
        setIsDeleteModalOpen(true)    
    }

    const handleDeleteConfirm = async () => {
        if (!bankToDeleteId) return

        try {
            await deleteBank(bankToDeleteId)
            toast.success("Bank deleted successfully")
            setBankToDeleteId("")
            setIsDeleteModalOpen(false)
            fetchBanks();
        } catch (error) {
            console.error("Error deleting bank:", error);
            toast.error("Error deleting bank")
        }
    }

    useEffect(() => {
        fetchBanks();
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Bank Information</h1>
                    <span className="opacity-50 text-xl">Manage destination accounts for customer transfers.
                    </span>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsModalOpen(true)}><FiPlus size={20}/>Add Bank Account</Button>
            </div>
            <BankInformationList banks = {banks} onEdit = {handleEdit} onDelete = {handleDelete} />
            <BankModal isOpen={isModalOpen} onSuccess={fetchBanks} onClose={handleCloseModal} bank = {selectedBank}/>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
        </div>
    )
}

export default BankInformation;