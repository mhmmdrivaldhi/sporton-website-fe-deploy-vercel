const PriceFormatter = (price: number) => {
    const newFormat = Intl.NumberFormat("in-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price)
    return newFormat
}
export default PriceFormatter;