const Product = require("./classes/Product")
const Cart = require("./classes/Cart")
const Discount = require("./Functions/Discount")
const convertCurrency = require("./Functions/ConvertCurrency")

const products = [
    new Product("P001", "Laptop", 1000.00, "Electronics"),
    new Product("P002", "Phone", 500.00, "Electronics"),
    new Product("P003", "T-Shirt", 20.00, "Fashion")
];

const cart = new Cart();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleInput = () => {
    rl.question('Enter command: \n\n', (command) => {
        let [action, productId, quantity] = command.split(' ');

        switch (action) {
            case 'list_products':
                console.log("\nAvailable Products:\n")
                products.map((Prod, i) => {
                    console.log((i + 1) + ". Product ID: " + Prod.productId + " , Name: " + Prod.name + " , Price: $" + Prod.price + " , Category: " + Prod.category + "\n");
                })

            case 'add_to_cart':
                let product = products.find(p => p.productId === productId);
                if (product) cart.addToCart(product, parseInt(quantity));
                break;

            case 'remove_from_cart':
                let productToRemove = products.find(p => p.productId === productId);
                if (productToRemove) cart.removeFromCart(productToRemove, parseInt(quantity));
                break;

            case 'view_cart':
                cart.viewCart();
                break;

            case 'list_discounts':
                console.log('Available Discounts:');
                console.log('1. Buy 1 Get 1 Free on Fashion');
                console.log('2. 10% off on Electronics');
                break;

            case 'checkout':
                let discount = new Discount();
                let totalAfterDiscount = discount.applyDiscounts(cart);

                rl.question('Would you like to view in a different currency? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        rl.question('Enter currency (EUR/GBP): ', (currency) => {
                            convertCurrency(totalAfterDiscount, currency);
                            rl.close();
                        });
                    } else {
                        rl.close();
                    }
                });
                break;

            default:
                console.log('Unknown command');
        }
        handleInput();
    });
};

handleInput();

