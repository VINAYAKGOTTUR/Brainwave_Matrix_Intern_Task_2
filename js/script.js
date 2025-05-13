document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const products = [
        // Men's Clothing (15 items)
        { id: 1, title: 'Men\'s Casual T-Shirt', category: 'men', price: 19.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Men\'s Slim Fit Jeans', category: 'men', price: 49.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Men\'s Formal Shirt', category: 'men', price: 29.99, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Men\'s Hoodie', category: 'men', price: 39.99, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Men\'s Leather Jacket', category: 'men', price: 99.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Men\'s Sports Shoes', category: 'men', price: 59.99, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 7, title: 'Men\'s Shorts', category: 'men', price: 24.99, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Men\'s Winter Coat', category: 'men', price: 89.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 9, title: 'Men\'s Swim Trunks', category: 'men', price: 34.99, image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 10, title: 'Men\'s Dress Pants', category: 'men', price: 44.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 11, title: 'Men\'s Polo Shirt', category: 'men', price: 27.99, image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 12, title: 'Men\'s Denim Jacket', category: 'men', price: 64.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 13, title: 'Men\'s Sneakers', category: 'men', price: 54.99, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 14, title: 'Men\'s Sweater', category: 'men', price: 39.99, image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 15, title: 'Men\'s Suit', category: 'men', price: 199.99, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        
        // Women's Clothing (15 items)
        { id: 16, title: 'Women\'s Summer Dress', category: 'women', price: 39.99, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 17, title: 'Women\'s Skinny Jeans', category: 'women', price: 49.99, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 18, title: 'Women\'s Blouse', category: 'women', price: 29.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 19, title: 'Women\'s Cardigan', category: 'women', price: 34.99, image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 20, title: 'Women\'s Leather Jacket', category: 'women', price: 109.99, image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 21, title: 'Women\'s High Heels', category: 'women', price: 69.99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 22, title: 'Women\'s Skirt', category: 'women', price: 27.99, image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 23, title: 'Women\'s Winter Coat', category: 'women', price: 99.99, image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 24, title: 'Women\'s Bikini', category: 'women', price: 39.99, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 25, title: 'Women\'s Leggings', category: 'women', price: 24.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 26, title: 'Women\'s T-Shirt', category: 'women', price: 19.99, image: 'https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 27, title: 'Women\'s Denim Jacket', category: 'women', price: 59.99, image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 28, title: 'Women\'s Sandals', category: 'women', price: 34.99, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 29, title: 'Women\'s Sweater', category: 'women', price: 44.99, image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { id: 30, title: 'Women\'s Evening Gown', category: 'women', price: 149.99, image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
    ];
    
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Display products
    function displayProducts(category = 'all') {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <span class="product-category">${product.category}</span>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                
                // Check if product is already in cart
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update cart count
                updateCartCount();
                
                // Show success message
                alert(`${product.title} added to cart!`);
            });
        });
    }
    
    // Update cart count in header
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }
    
    // Initialize
    displayProducts();
    updateCartCount();
    
    // Category filtering
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active link
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const category = this.getAttribute('data-category');
            displayProducts(category);
        });
    });
    
    // Logout button
    document.querySelector('.logout-btn').addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = 'index.html';
        }
    });
});