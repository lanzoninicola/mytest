const priceWithDiscountOf = (discount) => (price) => {
    return price - (discount * price)
}

const applyDiscount10 = priceWithDiscountOf(0.10)
const applyDiscount20 = priceWithDiscountOf(0.20)
const applyDiscount50 = priceWithDiscountOf(0.50)


const priceWithDiscountOf20 = applyDiscount20(100)

const priceWithDiscountOf50 = applyDiscount50(100)

console.log(priceWithDiscountOf50)