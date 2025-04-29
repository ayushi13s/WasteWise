let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    const product = { productName, price };
    cart.push(product);
    totalAmount += price;
    updateCart();
}

function removeFromCart(index) {
    const product = cart[index];
    totalAmount -= product.price;
    cart.splice(index, 1); // Remove the item from the cart
    updateCart();
}

function addToWishlist(productName) {
    alert(productName + ' has been added to your wishlist.');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Add product details
        const productDetails = document.createElement('p');
        productDetails.innerText = `${item.productName} - $${item.price}`;
        cartItem.appendChild(productDetails);

        // Add "Remove" button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        cartItem.appendChild(removeButton);

        cartItems.appendChild(cartItem);
    });
    
    totalAmountElement.innerText = totalAmount;
}
