class Discount {
    applyDiscounts(cart) {
        let total = cart.viewCart();

        // "Buy 1 Get 1 Free" on Fashion
        for (let itemId in cart.items) {
            let item = cart.items[itemId];
            if (item.product.category === "Fashion" && item.quantity >= 2) {
                total -= item.product.price;  // Free 1 T-shirt
                console.log(`Buy 1 Get 1 Free applied on ${item.product.name}`);
            }
        }

        // 10% off on Electronics
        for (let itemId in cart.items) {
            let item = cart.items[itemId];
            if (item.product.category === "Electronics") {
                let discount = item.product.price * item.quantity * 0.1;
                total -= discount;
                console.log(`10% discount applied on ${item.product.name}`);
            }
        }

        console.log(`Final total after discounts: ${total}`);
        return total;
    }
}

module.exports = Discount