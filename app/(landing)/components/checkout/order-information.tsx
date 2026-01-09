const OrderInformation = () => {
    return (
        <div className="bg-white">
            <div className="border-b border-gray-200 py-4 px-5">
                <h2 className="text-lg font-bold">Order Information</h2>
            </div>
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Type your full name" id="full_name"/>
                </div>
                <div className="input-group">
                    <label htmlFor="whatsapp_number">Whatsapp Number</label>
                    <input type="number" placeholder="+62xxxx" id="whatsapp_number"/>
                </div>
                <div className="input-group">
                    <label htmlFor="shipping_addres">Shipping Address</label>
                    <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" id="shipping_address" rows={7}></textarea>
                </div>
            </div>
        </div>
    )
}

export default OrderInformation;