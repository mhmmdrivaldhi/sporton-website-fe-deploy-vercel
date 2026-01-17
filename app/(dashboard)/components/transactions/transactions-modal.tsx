import Button from '@/app/(landing)/components/ui/button';
import Modal from '../ui/modal';
import Image from 'next/image';
import PriceFormatter from '@/app/utils/price-formatter';
import { FiCheck, FiX } from 'react-icons/fi';

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image src="/images/payment-proof-transaction.png" alt="payment proof" width={200} height={401} />
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-4 p-5 text-xs">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">John Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">08123456789</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
              <div className="text-right">Merdeka Street, Jakarta, Indonesia, 332122</div>
            </div>
          </div>
          <h4 className="font-semibold text-sm py-3">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex justify-between items-center gap-2">
            <div className="bg-gray-100 rounded p-2 aspect-square h-12 w-12">
              <Image src="/images/products/shoes-1.png" alt="Product 1" width={40} height={40} className="aspect-square object-contain" />
            </div>
            <div className="font-medium text-sm items-center">
              <span>SportsOn Hyperfast Shoes</span>
            </div>
            <div className="font-medium text-sm items-center ml-auto">
              <span>3 Units</span>
            </div>
          </div>
          <div className="flex justify-between py-3">
            <h4 className="font-semibold text-sm">Total</h4>
            <div className="font-semibold text-sm text-primary">{PriceFormatter(1000000)}</div>
          </div>
          <div className="flex justify-end mt-10 gap-4">
            <Button className='text-primary! bg-primary-light! rounded-md' size="small">
                <FiX size={20}/>
                Reject
            </Button>
            <Button className='text-white! bg-[#50C252]! rounded-md' size="small">
                <FiCheck size={20}/>
                Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;
