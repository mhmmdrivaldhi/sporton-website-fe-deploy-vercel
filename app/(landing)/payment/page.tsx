import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[100vh] pt-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="md:text-3xl text-xl font-bold text-center md:py-8 py-5">Payment</h1>
            <div className="grid md:grid-cols-2 md:gap-14 gap-7">
                <PaymentOptions/>
                <PaymentSteps/>
            </div>
            </div>
        </main>
    )
}
export default Payment;