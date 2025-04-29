// Mock Data for cart items
let cartItems = [
    { id: 1, name: "Product 1", price: 10.0, quantity: 1 },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1 },
    { id: 3, name: "Product 3", price: 20.0, quantity: 1 }
  ];
  
  // Elements
  const cartItemsList = document.getElementById("cart-items-list");
  const totalCartValueElem = document.getElementById("total-cart-value");
  const taxAmountElem = document.getElementById("tax-amount");
  const finalCartValueElem = document.getElementById("final-cart-value");
  
  // Render cart items
  function renderCartItems() {
    cartItemsList.innerHTML = "";
    cartItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name}</span>
        <span>
          <button class="quantity-button" onclick="updateQuantity(${item.id}, -1)">-</button>
          ${item.quantity}
          <button class="quantity-button" onclick="updateQuantity(${item.id}, 1)">+</button>
          $${(item.price * item.quantity).toFixed(2)}
        </span>
      `;
      cartItemsList.appendChild(li);
    });
    updateCartSummary();
  }
  
  // Update quantity
  function updateQuantity(itemId, amount) {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity += amount;
      if (item.quantity <= 0) {
        cartItems = cartItems.filter((i) => i.id !== itemId);
      }
    }
    renderCartItems();
  }
  
  // Update cart summary
  function updateCartSummary() {
    const totalValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = totalValue * 0.1;
    const finalValue = totalValue + tax;
  
    totalCartValueElem.textContent = `$${totalValue.toFixed(2)}`;
    taxAmountElem.textContent = `$${tax.toFixed(2)}`;
    finalCartValueElem.textContent = `$${finalValue.toFixed(2)}`;
  }
  
  // Initial render
  renderCartItems();
  