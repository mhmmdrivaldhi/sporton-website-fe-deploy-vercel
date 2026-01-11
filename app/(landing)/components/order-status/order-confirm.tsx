import Image from "next/image";

const OrderConfirm = () => {
    return (

        <div className="bg-white w-full max-w-160 lg:p-16 p-6 flex flex-col justify-center items-center mx-auto">
            <Image
                src="/images/icon-order-confirmed.svg"
                alt="Order Submitted"
                width={117}
                height={117}
                className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Order Confirmed!!</h2>
            <p className="mb-8 text-center">We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.</p>
        </div>
    )
}

export default OrderConfirm;