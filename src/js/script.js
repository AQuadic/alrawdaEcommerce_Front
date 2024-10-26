// Load Navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('offer&nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            const loginButton = document.getElementById('login-button');
            const dropdownLogin = document.getElementById('dropdown-login');
            const cartButton = document.getElementById('cart-button');
            const dropdownCart = document.getElementById('dropdown-cart');

                        // Login dropdown 

            loginButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click from bubbling up
                dropdownLogin.classList.toggle('hidden');
                // Close cart dropdown if it's open
                if (!dropdownCart.classList.contains('hidden')) {
                    dropdownCart.classList.add('hidden');
                }
            });

            // Cart dropdown 
            cartButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click from bubbling up
                dropdownCart.classList.toggle('hidden');
                // Close login dropdown if it's open
                if (!dropdownLogin.classList.contains('hidden')) {
                    dropdownLogin.classList.add('hidden');
                }
            });

            // Close both dropdowns when clicking outside
            document.addEventListener('click', function() {
                if (!dropdownLogin.classList.contains('hidden')) {
                    dropdownLogin.classList.add('hidden');
                }
                if (!dropdownCart.classList.contains('hidden')) {
                    dropdownCart.classList.add('hidden');
                }
            });
        })
        .catch(error => console.log('Error loading the navbar:', error));
});

// Load Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the footer:', error));
        
});
