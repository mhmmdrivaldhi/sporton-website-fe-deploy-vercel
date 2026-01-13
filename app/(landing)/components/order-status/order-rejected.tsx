import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const OrderRejected = () => {
    return (

        <div className="bg-white w-full max-w-160 lg:p-16 p-6 flex flex-col justify-center items-center mx-auto">
            <div className="w-30 h-30 bg-primary-light rounded-full mx-auto p-3 mb-8 flex justifiy-center items-center">
                <AiFillCloseCircle className="text-red-700" size={160}/>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Order Rejected!!</h2>
            <p className="mb-8 text-center">I'm sorry your order is rejected because your payment proof is not valid!</p>
        </div>
    )
}

export default OrderRejected;