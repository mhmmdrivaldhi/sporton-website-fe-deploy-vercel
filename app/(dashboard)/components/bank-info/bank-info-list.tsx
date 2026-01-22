import { Bank } from '@/app/types';
import { FiCreditCard, FiEdit2, FiTrash2 } from 'react-icons/fi';

type TBankInfoListProps = {
  banks: Bank[];
  onEdit: (bank: Bank) => void;
  onDelete: (id: string) => void;
}

const BankInformationList = ({banks, onEdit, onDelete}: TBankInfoListProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {banks.map((bank) => (
        <div key={bank._id} className="bg-white rounded-lg border border-gray-200">
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-100 text-blue-600 rounded-md w-12 h-12 flex justify-center items-center">
                <FiCreditCard size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{bank.bankName}</h2>
                <p className="text-gray-600">Bank Transfer</p>
              </div>
            </div>
            <div className="flex gap-3 -mt-7 text-gray-700">
              <button>
                <FiEdit2 size={20} className='cursor-pointer' onClick={() => onEdit(bank)}/>
              </button>
              <button>
                <FiTrash2 size={20} className='cursor-pointer' onClick={() => onDelete(bank._id)}/>
              </button>
            </div>
          </div>
          <div className='p-5 font-medium'>
            <div className='text-gray-500 text-sm opacity-50'>ACCOUNT NUMBER</div>
            <div>{bank.accountNumber}</div>
          </div>
          <div className='p-5 border-t border-gray-200 text-sm'>
            <span className='opacity-50'>Holder : </span> 
            {bank.accountName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInformationList;
