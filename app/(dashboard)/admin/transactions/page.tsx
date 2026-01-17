"use client";

import { useState } from "react";
import TransactionTable from "../../components/transactions/transactions-table";
import TransactionModal from "../../components/transactions/transactions-modal";

const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleViewDetails = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Transactions</h1>
                    <span className="opacity-50 text-xl">Verify incoming payments and manage orders.
                    </span>
                </div>
            </div>
            <TransactionTable onViewDetail={handleViewDetails}/>
            <TransactionModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default TransactionManagement;