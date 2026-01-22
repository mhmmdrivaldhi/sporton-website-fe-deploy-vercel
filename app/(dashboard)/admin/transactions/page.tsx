"use client";

import { useEffect, useState } from "react";
import TransactionTable from "../../components/transactions/transactions-table";
import TransactionModal from "../../components/transactions/transactions-modal";
import { Transaction } from "@/app/types";
import { getAllTransactions, updateTransaction } from "@/app/services/transaction_service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = async () => {
        try {
            const data = await getAllTransactions();
            setTransactions(data)
        } catch  (error) {
            console.log("Failed to fetch transactions", error);
        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTransaction(null);
    }

    const handleViewDetails = (transaction: Transaction) => {
        setIsModalOpen(true);
        setSelectedTransaction(transaction);
    }

    const handleStatusChange = async (id: string, status: "paid" | "rejected") => {
        try {
            const formData = new FormData();
            formData.append("status", status);
            await updateTransaction(id, formData);
            toast.success("Transaction status updated successfully");
            await fetchTransactions();
        } catch (error) {
            console.log("Failed to update transaction", error);
            toast.error("Failed to update transaction");
        }
    } 

    useEffect(() => {
        fetchTransactions();
    })

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Transactions</h1>
                    <span className="opacity-50 text-xl">Verify incoming payments and manage orders.
                    </span>
                </div>
            </div>
            <TransactionTable transactions = {transactions} onViewDetail={handleViewDetails}/>
            <TransactionModal transaction={selectedTransaction} onStatusChange={handleStatusChange} isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default TransactionManagement;