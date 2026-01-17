'use client';

import Button from '@/app/(landing)/components/ui/button';
import Modal from '../ui/modal';

type TBankModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankModal = ({ isOpen, onClose }: TBankModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input type="text" id="bankName" name="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="123124344234234" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name</label>
            <input type="text" id="accountName" name="accountName" placeholder="Holder Name as registered on the account" />
          </div>
        </div>
        <Button className="ml-auto rounded-lg">
          Add Bank Account
        </Button>
      </div>
    </Modal>
  );
};

export default BankModal;
