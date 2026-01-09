import OrderInformation from "../components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";

const Checkout = () => {
    return (
        <main className="bg-gray-100 min-h-[100vh] p-3">
            <div className="max-w-5xl mx-auto">
                <h1 className="md:text-3xl text-xl font-bold text-center md:py-8 py-5">Checkout Now</h1>
            <div className="grid md:grid-cols-2 md:gap-14 gap-7">
                <OrderInformation/>
                <CartItems/>
            </div>
            </div>
        </main>
    )
}
export default Checkout;