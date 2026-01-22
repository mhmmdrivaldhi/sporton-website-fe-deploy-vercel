'use client';

import Button from '@/app/(landing)/components/ui/button';
import Modal from '../ui/modal';
import { Bank } from '@/app/types';
import React, { useEffect, useState } from 'react';
import { createBank, updateBank } from '@/app/services/bank_service';
import { toast } from 'react-toastify';

type TBankModalProps = {
  isOpen: boolean;
  onClose: () => void;
  bank: Bank | null;
  onSuccess: () => void;
};

const BankModal = ({ isOpen, onClose, bank, onSuccess }: TBankModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = !!bank

  const [formData, setFormData] = useState<Partial<Bank>>({
    bankName: "",
    accountNumber: "",
    accountName: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    const {id, value} = e.target;
    setFormData((prev) => ({...prev, [id]: value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    try {
      if (isEditMode) {
        await updateBank(bank._id, formData)
      } else {
        await createBank(formData)
      }

      setFormData({
        bankName: "",
        accountNumber: "",
        accountName: ""
      });
      onSuccess?.();
      onClose?.();
      toast.success(isEditMode ? "Successfully Updated Bank Information" : "Successfully Added Bank Information")
    } catch (error) {
      console.error("Error adding bank:", error);
      toast.error(isEditMode ? "Error Updating Bank Information" : "Error Adding Bank Information")
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (isEditMode && isOpen) {
      setFormData({
        bankName: bank.bankName,
        accountNumber: bank.accountNumber,
        accountName: bank.accountName,
      })
    } else if (isOpen) {
      setFormData({
        bankName: "",
        accountNumber: "",
        accountName: ""
      })
    }
  }, [bank, isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" value={formData.bankName} onChange={handleChange} />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="123124344234234" value={formData.accountNumber} onChange={handleChange} />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name</label>
            <input type="text" id="accountName" name="accountName" placeholder="Holder Name as registered on the account" value={formData.accountName} onChange={handleChange} />
          </div>
        </div>
        <Button className="ml-auto rounded-lg" type='submit' disabled={isSubmitting} onClick={handleSubmit}>
          {isEditMode ? "Update Bank Account" : "Add Bank Account"}
        </Button>
      </form>
    </Modal>
  );
};

export default BankModal;
