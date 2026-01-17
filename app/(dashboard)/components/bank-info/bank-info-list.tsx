import { FiCreditCard, FiEdit2, FiTrash2 } from 'react-icons/fi';

const bankList = [
  {
    bankName: 'Mandiri',
    accountNumber: '1234567890',
    accountName: 'PT SportsOn Digital ',
  },
  {
    bankName: 'BCA',
    accountNumber: '0123123123123',
    accountName: 'PT SportsOn Digital ',
  },
  {
    bankName: 'BRI',
    accountNumber: '4321789332',
    accountName: 'PT SportsOn Digital ',
  },
];

const BankInformationList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {bankList.map((bank, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200">
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
                <FiEdit2 size={20} className='cursor-pointer'/>
              </button>
              <button>
                <FiTrash2 size={20} className='cursor-pointer'/>
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
