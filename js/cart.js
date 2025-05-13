document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-items");
    const cartCount = document.querySelector(".cart-count");
    const totalDisplay = document.querySelector(".cart-summary h3");

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }

    function updateTotal() {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        totalDisplay.textContent = Total: $${total.toFixed(2)};
    }

    function renderCartItems() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalDisplay.textContent = "Total: $0.00";
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: 
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
                    </p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            saveAndRender();
        }
    });

    cartContainer.addEventListener("change", (e) => {
        if (e.target.classList.contains("quantity-input")) {
            const index = e.target.dataset.index;
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                saveAndRender();
            }
        }
    });

    function saveAndRender() {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
        updateTotal();
    }

    renderCartItems();
    updateCartCount();
    updateTotal();
});