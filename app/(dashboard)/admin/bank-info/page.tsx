"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import BankInformationList from "../../components/bank-info/bank-info-list";
import BankModal from "../../components/bank-info/bank-modal";

const BankInformation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold">Bank Information</h1>
                    <span className="opacity-50 text-xl">Manage destination accounts for customer transfers.
                    </span>
                </div>
                <Button size="small" className="rounded-lg" onClick={() => setIsOpen(true)}><FiPlus size={20}/>Add Bank Account</Button>
            </div>
            <BankInformationList/>
            <BankModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    )
}

export default BankInformation;