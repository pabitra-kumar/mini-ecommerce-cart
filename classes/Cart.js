class Cart {
    constructor() {
        this.items = {};
    }

    addToCart(product, quantity) {
        if (this.items[product.productId]) {
            this.items[product.productId].quantity += quantity;
        } else {
            this.items[product.productId] = { product, quantity };
        }
        console.log(`${quantity} ${product.name}(s) added to the cart.`);
    }

    removeFromCart(product, quantity) {
        if (this.items[product.productId]) {
            if (quantity >= this.items[product.productId].quantity) {
                delete this.items[product.productId];
                console.log(`${product.name} removed from the cart.`);
            } else {
                this.items[product.productId].quantity -= quantity;
                console.log(`Reduced ${quantity} ${product.name}(s) in the cart.`);
            }
        } else {
            console.log(`${product.name} is not in the cart.`);
        }
    }

    viewCart() {
        let total = 0;
        console.log("\nYour Cart:");
        for (let itemId in this.items) {
            let item = this.items[itemId];
            let itemTotal = item.product.price * item.quantity;
            total += itemTotal;
            console.log(`${item.product.name} - Quantity: ${item.quantity}, Price: $${item.product.price}, Total: ${itemTotal}`);
        }
        console.log(`Total (before discounts): $${total}\n`);
        return total;
    }
}

// export
module.exports = Cart