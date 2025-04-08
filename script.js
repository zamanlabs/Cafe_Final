// Coffee Menu Data
const coffeeMenu = [
    { name: "Espresso", type: "hot", price: "৳300", img: "Images & Videos/espresso.jpeg", info: "Strong black coffee. Ingredients: Espresso shot.", tag: "classic" },
    { name: "Americano", type: "hot", price: "৳320", img: "Images & Videos/americano.png", info: "Espresso with hot water. Ingredients: Espresso, hot water.", tag: "" },
    { name: "Cappuccino", type: "hot", price: "৳350", img: "Images & Videos/Cappuccino.jpeg", info: "Espresso with steamed milk and foam. Ingredients: Espresso, milk, foam.", tag: "bestseller" },
    { name: "Latte", type: "hot", price: "৳340", img: "Images & Videos/Latte.jpg", info: "Espresso with lots of milk. Ingredients: Espresso, milk.", tag: "popular" },
    { name: "Macchiato", type: "hot", price: "৳330", img: "Images & Videos/Macchiato.jpg", info: "Espresso with a dollop of foam. Ingredients: Espresso, milk foam.", tag: "" },
    { name: "Mocha", type: "hot", price: "৳370", img: "Images & Videos/mocha.jpeg", info: "Chocolate + Coffee. Ingredients: Espresso, milk, cocoa.", tag: "bestseller" },
    { name: "Flat White", type: "hot", price: "৳340", img: "Images & Videos/Flat White.jpeg", info: "Similar to latte but stronger. Ingredients: Espresso, milk.", tag: "" },
    { name: "Cortado", type: "hot", price: "৳330", img: "Images & Videos/cortado.jpg", info: "Equal coffee and milk. Ingredients: Espresso, milk.", tag: "" },
    { name: "Ristretto", type: "hot", price: "৳310", img: "Images & Videos/Ristretto.jpeg", info: "Shorter, more concentrated espresso. Ingredients: Espresso shot.", tag: "special" },
    { name: "Lungo", type: "hot", price: "৳320", img: "Images & Videos/Lungo.jpg", info: "Long espresso. Ingredients: Espresso with more water.", tag: "" },
    { name: "Café au Lait", type: "hot", price: "৳330", img: "Images & Videos/Café au Lait.jpg", info: "Coffee with hot milk. Ingredients: Brewed coffee, milk.", tag: "" },
    { name: "Affogato", type: "cold", price: "৳400", img: "Images & Videos/Affogato.jpg", info: "Espresso poured on ice cream. Ingredients: Espresso, ice cream.", tag: "special" },
    { name: "Cold Brew", type: "cold", price: "৳350", img: "Images & Videos/Cold Brew.jpg", info: "Steeped cold coffee. Ingredients: Coarse-ground coffee, water.", tag: "bestseller" },
    { name: "Iced Coffee", type: "cold", price: "৳330", img: "Images & Videos/Iced Coffee.jpg", info: "Brewed coffee served cold. Ingredients: Coffee, ice.", tag: "popular" },
    { name: "Frappe", type: "cold", price: "৳360", img: "Images & Videos/Frappe.jpg", info: "Blended iced coffee. Ingredients: Instant coffee, ice, sugar.", tag: "bestseller" },
    { name: "Drip Coffee", type: "hot", price: "৳300", img: "Images & Videos/Drip Coffee.jpg", info: "Brewed via drip. Ingredients: Ground coffee, hot water.", tag: "classic" },
    { name: "Doppio", type: "hot", price: "৳320", img: "Images & Videos/Doppio.jpg", info: "Double espresso. Ingredients: 2 espresso shots.", tag: "" },
    { name: "Decaf Coffee", type: "hot", price: "৳310", img: "Images & Videos/Decaf Coffee.jpg", info: "No caffeine coffee. Ingredients: Decaffeinated beans.", tag: "new" },
    { name: "Instant Coffee", type: "hot", price: "৳280", img: "Images & Videos/Instant Coffee.jpg", info: "Quick coffee. Ingredients: Instant powder, hot water.", tag: "" }
];

// Header Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach(n => {
        if (n) {
            n.addEventListener("click", () => {
                const hamburgerElem = document.querySelector(".hamburger");
                const navLinksElem = document.querySelector(".nav-links");
                
                if (hamburgerElem && navLinksElem) {
                    hamburgerElem.classList.remove("active");
                    navLinksElem.classList.remove("active");
                }
            });
        }
    });
});

// Smooth Scrolling (for index.html)
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    if (navLinks.length > 0) {
        navLinks.forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                const href = this.getAttribute("href");
                
                // Handle navigation to sections on the same page
                if (href.includes('#') && !href.startsWith('index.html')) {
                    const targetId = href;
                    const target = document.querySelector(targetId);
                    
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: "smooth" });
                    }
                }
                // Links already containing index.html will navigate normally
            });
        });
    }
});

// Menu Display and Filtering (for index.html)
const menuContainer = document.getElementById("menu-container");
if (menuContainer) {
    function displayMenu(data) {
        // Add loading effect
        menuContainer.classList.add('loading');
        menuContainer.innerHTML = "";
        
        // Create a small delay for the loading animation
        setTimeout(() => {
            data.forEach(coffee => {
                const card = document.createElement("div");
                card.className = "coffee-card";
                card.setAttribute("data-type", coffee.type);
                
                // Generate tag HTML if coffee has a tag
                let tagHTML = '';
                if (coffee.tag) {
                    const tagClass = coffee.tag === 'bestseller' ? 'bestseller' : 
                                    coffee.tag === 'special' ? 'special' : 
                                    coffee.tag === 'new' ? 'new' : '';
                    const tagText = coffee.tag === 'bestseller' ? 'BEST SELLER' : 
                                coffee.tag === 'special' ? 'CHEF\'S SPECIAL' : 
                                coffee.tag === 'new' ? 'NEW' : 
                                coffee.tag === 'popular' ? 'POPULAR' : 
                                coffee.tag.toUpperCase();
                    tagHTML = `<div class="coffee-tag ${tagClass}">${tagText}</div>`;
                }
                
                card.innerHTML = `
                    ${tagHTML}
                    <div class="coffee-card-img-container">
                        <img src="${coffee.img}" alt="${coffee.name}">
                        <div class="image-overlay"></div>
                        <div class="quick-view">View Details</div>
                    </div>
                    <div class="coffee-details">
                        <h3>${coffee.name}</h3>
                        <div class="info-row">
                            <p class="price">${coffee.price}</p>
                        </div>
                        <div class="info-box">${coffee.info}</div>
                        <div class="card-actions">
                            <button class="order-button full-width" onclick="showQuickView('${coffee.name}', '${coffee.img}', '${coffee.info}', '${coffee.price}')">View & Order</button>
                        </div>
                    </div>
                `;
                
                menuContainer.appendChild(card);
                
                // Add animation class with delay based on index
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, 100 * Array.from(menuContainer.children).indexOf(card));
            });
            
            // Remove loading class
            menuContainer.classList.remove('loading');
            
            // Add event listeners for quick view buttons
            document.querySelectorAll('.quick-view').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const card = this.closest('.coffee-card');
                    const name = card.querySelector('h3').textContent;
                    const img = card.querySelector('img').getAttribute('src');
                    const info = card.querySelector('.info-box').textContent;
                    const price = card.querySelector('.price').textContent;
                    
                    showQuickView(name, img, info, price);
                });
            });
            
            // Add animation to coffee cards on hover by adding a class
            document.querySelectorAll('.coffee-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.classList.add('coffee-hover');
                });
                
                card.addEventListener('mouseleave', function() {
                    this.classList.remove('coffee-hover');
                });
            });
        }, 300); // Small delay for loading effect
    }

    function filterCoffee(type) {
        // Apply active class to the clicked button
        const buttons = document.querySelectorAll('.filter button');
        buttons.forEach(btn => {
            if (btn.innerText.toLowerCase() === type) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Add class for transition effect
        menuContainer.classList.add('filtering');
        
        // Short delay for animation
        setTimeout(() => {
            if (type === 'all') {
                displayMenu(coffeeMenu);
            } else {
                const filtered = coffeeMenu.filter(coffee => coffee.type === type);
                displayMenu(filtered);
            }
            
            // Remove transition class
            setTimeout(() => {
                menuContainer.classList.remove('filtering');
            }, 100);
        }, 300);
    }
    
    // Quick view modal function
    function showQuickView(name, img, info, price) {
        // Check if modal already exists
        let modal = document.getElementById('coffee-modal');
        
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'coffee-modal';
            modal.className = 'coffee-modal';
            document.body.appendChild(modal);
        }
        
        // Define add-on items
        const addonItems = [
            { name: 'Milk', price: '৳20', icon: '🥛' },
            { name: 'Cream', price: '৳30', icon: '🍦' },
            { name: 'Coconut Milk', price: '৳40', icon: '🥥' },
            { name: 'Sugar', price: '৳10', icon: '🍬' },
            { name: 'Honey', price: '৳25', icon: '🍯' },
            { name: 'Cinnamon', price: '৳15', icon: '🌰' },
            { name: 'Vanilla', price: '৳20', icon: '🌱' }
        ];
        
        modal.innerHTML = `
            <div class="coffee-modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-img-container">
                    <img src="${img}" alt="${name}">
                </div>
                <div class="modal-info">
                    <h2>${name}</h2>
                    <p class="modal-price">${price}</p>
                    <p class="modal-description">${info}</p>
                    <div class="modal-actions">
                        <div class="modal-qty">
                            <label>Quantity:</label>
                            <div class="qty-controls">
                                <button class="qty-btn qty-minus" type="button">−</button>
                                <input type="number" min="1" max="99" value="1" class="modal-qty-input">
                                <button class="qty-btn qty-plus" type="button">+</button>
                            </div>
                        </div>
                        <div class="addon-button-container">
                            <button id="show-addons-btn" class="addon-toggle-btn">Add-ons</button>
                            <div class="selected-addons"></div>
                        </div>
                        <div class="modal-total">
                            <span>Total: </span>
                            <span class="total-price">${price}</span>
                        </div>
                        <button class="modal-order-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        
        // Create floating add-on tiles container
        const addonTilesContainer = document.createElement('div');
        addonTilesContainer.className = 'addon-tiles-container';
        addonTilesContainer.style.display = 'none';
        
        // Generate add-on tiles
        let tilesHTML = `<div class="addon-tiles-header">
            <h4>Add-ons</h4>
            <span class="close-addons">&times;</span>
        </div>
        <div class="addon-tiles-content">`;
        
        addonItems.forEach(item => {
            tilesHTML += `
                <div class="addon-tile" data-name="${item.name}" data-price="${item.price}">
                    <div class="addon-tile-inner">
                        <div class="addon-tile-front">
                            <div class="addon-tile-icon">${item.icon}</div>
                            <div class="addon-tile-name">${item.name}</div>
                            <div class="addon-tile-price">${item.price}</div>
                        </div>
                        <div class="addon-tile-back">
                            <button class="add-addon-btn">Add</button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        tilesHTML += `</div>`;
        addonTilesContainer.innerHTML = tilesHTML;
        
        // Append addon tiles container to body
        document.body.appendChild(addonTilesContainer);
        
        modal.style.display = 'flex';
        
        // Get quantity input and buttons
        const qtyInput = modal.querySelector('.modal-qty-input');
        const minusBtn = modal.querySelector('.qty-minus');
        const plusBtn = modal.querySelector('.qty-plus');
        const totalPrice = modal.querySelector('.total-price');
        const showAddonsBtn = modal.querySelector('#show-addons-btn');
        const selectedAddonsContainer = modal.querySelector('.selected-addons');
        
        // Track selected add-ons
        let selectedAddons = [];
        
        // Calculate and update total price
        function updateTotalPrice() {
            // Get base price (remove currency symbol)
            const basePrice = parseInt(price.replace(/[^\d]/g, ''));
            const quantity = parseInt(qtyInput.value);
            
            // Calculate add-ons price
            let addonsPrice = 0;
            selectedAddons.forEach(addon => {
                addonsPrice += parseInt(addon.price.replace(/[^\d]/g, ''));
            });
            
            // Calculate total and update display
            const total = (basePrice + addonsPrice) * quantity;
            totalPrice.textContent = '৳' + total;
        }
        
        // Update selected add-ons display
        function updateSelectedAddonsDisplay() {
            if (selectedAddons.length > 0) {
                showAddonsBtn.textContent = `Add-ons (${selectedAddons.length})`;
                let html = '<div class="selected-addons-list">';
                selectedAddons.forEach(addon => {
                    html += `<div class="selected-addon-item">
                        <span>${addon.icon} ${addon.name}</span>
                        <button class="remove-addon" data-name="${addon.name}">×</button>
                    </div>`;
                });
                html += '</div>';
                selectedAddonsContainer.innerHTML = html;
                
                // Add event listeners to remove buttons
                selectedAddonsContainer.querySelectorAll('.remove-addon').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const addonName = e.target.getAttribute('data-name');
                        selectedAddons = selectedAddons.filter(a => a.name !== addonName);
                        updateSelectedAddonsDisplay();
                        updateTotalPrice();
                        
                        // Reset visual state of the corresponding tile
                        const tile = addonTilesContainer.querySelector(`.addon-tile[data-name="${addonName}"]`);
                        if (tile) {
                            tile.classList.remove('selected-addon');
                        }
                    });
                });
            } else {
                showAddonsBtn.textContent = 'Add-ons';
                selectedAddonsContainer.innerHTML = '';
            }
        }
        
        // Toggle add-on tiles
        showAddonsBtn.addEventListener('click', () => {
            const modalRect = modal.getBoundingClientRect();
            addonTilesContainer.style.display = 'block';
            
            // Position the add-on tiles
            addonTilesContainer.style.top = `${modalRect.top + window.scrollY + 50}px`;
            addonTilesContainer.style.left = `${modalRect.left + window.scrollX + modalRect.width/2 - 200}px`;
            
            // Apply entrance animation
            Array.from(addonTilesContainer.querySelectorAll('.addon-tile')).forEach((tile, index) => {
                // Check if this add-on is already selected
                const addonName = tile.getAttribute('data-name');
                if (selectedAddons.some(a => a.name === addonName)) {
                    tile.classList.add('selected-addon');
                }
                
                setTimeout(() => {
                    tile.classList.add('tile-active');
                }, index * 70);
            });
        });
        
        // Add click handler for add-on tiles
        addonTilesContainer.querySelectorAll('.addon-tile').forEach(tile => {
            tile.addEventListener('click', () => {
                tile.classList.toggle('flipped');
            });
            
            // Add button click
            const addBtn = tile.querySelector('.add-addon-btn');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent tile flip when clicking the button
                
                const addonName = tile.getAttribute('data-name');
                const addonPrice = tile.getAttribute('data-price');
                const icon = tile.querySelector('.addon-tile-icon').textContent;
                
                // Check if already added
                if (!selectedAddons.some(a => a.name === addonName)) {
                    selectedAddons.push({ name: addonName, price: addonPrice, icon: icon });
                    updateSelectedAddonsDisplay();
                    updateTotalPrice();
                    
                    // Visual feedback
                    tile.classList.add('added');
                    tile.classList.add('selected-addon');
                    setTimeout(() => {
                        tile.classList.remove('added');
                        tile.classList.remove('flipped');
                    }, 800);
                }
    });
});
        
        // Close add-on tiles
        addonTilesContainer.querySelector('.close-addons').addEventListener('click', () => {
            // Apply exit animation
            Array.from(addonTilesContainer.querySelectorAll('.addon-tile')).forEach((tile, index) => {
                setTimeout(() => {
                    tile.classList.remove('tile-active');
                }, index * 50);
            });
            
            // Hide container after animation
            setTimeout(() => {
                addonTilesContainer.style.display = 'none';
            }, 500);
        });
        
        // Add event listeners for modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
            addonTilesContainer.remove();
        });
        
        // Minus button click handler with validation
        minusBtn.addEventListener('click', () => {
            let currentVal = parseInt(qtyInput.value);
            if (isNaN(currentVal) || currentVal <= 1) {
                qtyInput.value = 1;
            } else {
                qtyInput.value = currentVal - 1;
            }
            updateTotalPrice();
        });
        
        // Plus button click handler with validation
        plusBtn.addEventListener('click', () => {
            let currentVal = parseInt(qtyInput.value);
            if (isNaN(currentVal)) {
                qtyInput.value = 1;
            } else if (currentVal < 99) {
                qtyInput.value = currentVal + 1;
            }
            updateTotalPrice();
        });
        
        // Input validation for direct edits
        qtyInput.addEventListener('change', () => {
            let currentVal = parseInt(qtyInput.value);
            if (isNaN(currentVal) || currentVal < 1) {
                qtyInput.value = 1;
            } else if (currentVal > 99) {
                qtyInput.value = 99;
            }
            updateTotalPrice();
        });
        
        // Prevent non-numeric input
        qtyInput.addEventListener('keypress', (e) => {
            if (!/^\d*$/.test(e.key)) {
                e.preventDefault();
            }
        });
        
        // Order button click handler
        modal.querySelector('.modal-order-btn').addEventListener('click', () => {
            const qty = qtyInput.value;
            const addonText = selectedAddons.length > 0 
                ? ` with ${selectedAddons.map(a => a.name).join(', ')}` 
                : '';
                
            alert(`Added ${qty} × ${name}${addonText} to cart!`);
            modal.style.display = 'none';
            addonTilesContainer.remove();
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                addonTilesContainer.remove();
            }
        });
    }

    // Initialize menu
    displayMenu(coffeeMenu);
    
    // Create filter buttons dynamically
    const filterSection = document.querySelector('.filter');
    if (filterSection) {
        // Clear existing buttons
        filterSection.innerHTML = '';
        
        // Add "ALL" button
        const allButton = document.createElement('button');
        allButton.textContent = 'ALL';
        allButton.classList.add('active');
        allButton.addEventListener('click', () => filterCoffee('all'));
        filterSection.appendChild(allButton);
        
        // Add "HOT" button
        const hotButton = document.createElement('button');
        hotButton.textContent = 'HOT';
        hotButton.addEventListener('click', () => filterCoffee('hot'));
        filterSection.appendChild(hotButton);
        
        // Add "COLD" button
        const coldButton = document.createElement('button');
        coldButton.textContent = 'COLD';
        coldButton.addEventListener('click', () => filterCoffee('cold'));
        filterSection.appendChild(coldButton);
    }
}

// Authentication Functionality (for signin.html and signup.html)
document.addEventListener('DOMContentLoaded', function() {
    const signinTab = document.getElementById('signin-tab');
    const signupTab = document.getElementById('signup-tab');
    const nameGroup = document.getElementById('name-group');
    const confirmGroup = document.getElementById('confirm-group');
    const submitBtn = document.getElementById('submit-btn');
    const toggleLink = document.getElementById('toggle-link');
    const forgotPassword = document.getElementById('forgot-password');
    const modal = document.getElementById('forgot-password-modal');
    const closeBtn = document.querySelector('.close');
    const steps = document.querySelectorAll('.step');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const resetPasswordBtn = document.getElementById('reset-password-btn');

    // Reviews Carousel Functionality
    const reviewTrack = document.querySelector('.reviews-track');
    const prevReviewBtn = document.getElementById('prev-review');
    const nextReviewBtn = document.getElementById('next-review');
    const reviewDots = document.querySelectorAll('.review-dot');
    
    if (reviewTrack && prevReviewBtn && nextReviewBtn) {
        let currentIndex = 0;
        const totalReviews = document.querySelectorAll('.review-card').length;
        
        // Set initial position
        function updateCarousel() {
            // Calculate the position based on current index
            const position = -(currentIndex * 25); // 25% for each review (100% / 4)
            reviewTrack.style.transform = `translateX(${position}%)`;
            
            // Update active review card
            document.querySelectorAll('.review-card').forEach((card, index) => {
                if (index === currentIndex) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.filter = 'blur(0)';
                } else {
                    card.style.opacity = '0.7';
                    card.style.transform = 'scale(0.9)';
                    card.style.filter = 'blur(2px)';
                }
            });
            
            // Update active dot
            reviewDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Navigate to previous review
        prevReviewBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
            updateCarousel();
        });
        
        // Navigate to next review
        nextReviewBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalReviews;
            updateCarousel();
        });
        
        // Dot navigation
        reviewDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
        
        // Auto-advance carousel every 7 seconds
        let carouselInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalReviews;
            updateCarousel();
        }, 7000);
        
        // Pause auto-advance on mouse hover
        document.querySelector('.reviews-carousel').addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        // Resume auto-advance when mouse leaves
        document.querySelector('.reviews-carousel').addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalReviews;
                updateCarousel();
            }, 7000);
        });
        
        // Add animation variables to stars
        document.querySelectorAll('.star').forEach((star, index) => {
            star.style.setProperty('--i', index % 5);
        });
        
        // Set initial rotation value for coffee beans
        document.querySelectorAll('.coffee-bean-1').forEach(bean => {
            bean.style.setProperty('--rotation', '30deg');
        });
        
        document.querySelectorAll('.coffee-bean-2').forEach(bean => {
            bean.style.setProperty('--rotation', '-20deg');
        });
        
        // Initialize carousel
        updateCarousel();
    }

    if (signinTab && signupTab) {
        // Tab switching
        signinTab.addEventListener('click', () => {
            window.location.href = 'signin.html';
        });

        signupTab.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    if (forgotPassword) {
        // Forgot Password Modal
        forgotPassword.addEventListener('click', () => {
            modal.style.display = 'block';
            steps[0].style.display = 'block';
            steps[1].style.display = 'none';
            steps[2].style.display = 'none';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    if (sendOtpBtn) {
        // Password Reset Steps
        sendOtpBtn.addEventListener('click', () => {
            steps[0].style.display = 'none';
            steps[1].style.display = 'block';
        });
    }

    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener('click', () => {
            steps[1].style.display = 'none';
            steps[2].style.display = 'block';
        });
    }

    if (submitBtn) {
        // Form Submission
        submitBtn.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (window.location.pathname.includes('signup.html')) {
                const name = document.getElementById('name').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }
                // Add signup logic here
                alert('Sign up successful!');
                window.location.href = 'signin.html';
            } else {
                // Add signin logic here
                alert('Sign in successful!');
                window.location.href = 'index.html';
            }
        });
    }
});

// Navigation to Login (for index.html)
function goToLogin() {
    window.location.href = 'signin.html';
}

// Make all links with class contact-link show a subtle animation when clicked
document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.getAttribute('href') !== 'contact.html') {
                e.preventDefault();
                
                link.classList.add('clicked');
                
                setTimeout(() => {
                    link.classList.remove('clicked');
                    
                    // For email links, try to open default email client
                    if (link.href.startsWith('mailto:')) {
                        window.location.href = link.href;
                    }
                    // For tel links, try to initiate a call if on mobile
                    else if (link.href.startsWith('tel:')) {
                        window.location.href = link.href;
                    }
                }, 300);
            }
        });
    });
    
    // Add animation for social media icons
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.add('heartbeat');
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.remove('heartbeat');
            }
        });
    });
});
