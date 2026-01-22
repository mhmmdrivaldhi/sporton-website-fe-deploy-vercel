import Button from '@/app/(landing)/components/ui/button';
import Modal from '../ui/modal';
import Image from 'next/image';
import PriceFormatter from '@/app/utils/price-formatter';
import { FiCheck, FiX } from 'react-icons/fi';
import { Transaction } from '@/app/types';
import { useState } from 'react';
import { getImageUrl } from '@/app/lib/api';
import { DiVim } from 'react-icons/di';

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
  onStatusChange: (id :string, status: "paid" | "rejected") => Promise<void>;
};

const TransactionModal = ({ isOpen, onClose, transaction, onStatusChange }: TransactionModalProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  
  if (!transaction) return;

  const handleStatusUpdate = async (status: "paid" | "rejected") => {
    setIsUpdating(true);
    try {
      await onStatusChange(transaction._id, status)
    } catch (error) {
      console.error(error)
    } finally {
      setIsUpdating(false);
      onClose();
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div className='min-w-50'>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          {
            transaction.paymentProof ? (
              <Image src={getImageUrl(transaction.paymentProof)} alt="payment proof" width={200} height={401} />
            ) : (
              <div className='text-center p-4'>
                <p className='text-sm'>No payment uploaded</p>
              </div>
            )
          }
        </div>
        <div className='w-full'>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-4 p-5 text-xs">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">{new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">{transaction.customerName}</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">{transaction.customerContact}</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
              <div className="text-right">{transaction.customerAddress}</div>
            </div>
          </div>
          <h4 className="font-semibold text-sm py-3">Items Purchased</h4>
          <div className="space-y-3">
            {
              transaction.purchasedItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-2 flex justify-between items-center gap-2">
                  <div className="bg-gray-100 rounded p-2 aspect-square h-12 w-12">
                    <Image src={getImageUrl(getImageUrl(item.productId.imageUrl))} alt={item.productId.name} width={40} height={40} className="aspect-square object-contain" />
                  </div>
                  <div className="font-medium text-sm items-center">
                    <span>{item.productId.name}</span>
                  </div>
                  <div className="font-medium text-sm items-center ml-auto">
                    <span>{item.qty} Units</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex justify-between py-3">
            <h4 className="font-semibold text-sm">Total</h4>
            <div className="font-semibold text-sm text-primary">{PriceFormatter(parseInt(transaction.totalPayment))}</div>
          </div>
          <div className="flex justify-end mt-12 gap-5">
            {
              isUpdating ? (
                <div className='text-center'>Updating . . .</div>
              ) : (
                <>
                  <Button className='text-primary! bg-primary-light! rounded-md' size="small" disabled={isUpdating} onClick={() => handleStatusUpdate("rejected")}>
                      <FiX size={20}/>
                      Rejected
                  </Button>
                  <Button className='text-white! bg-[#50C252]! rounded-md' size="small" disabled={isUpdating} onClick={() => handleStatusUpdate("paid")}>
                      <FiCheck size={20}/>
                      Approve
                  </Button>
                </>
              )
            }
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;
