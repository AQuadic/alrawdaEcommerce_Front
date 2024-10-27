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
            const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
            
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenu = document.getElementById('close-menu');
            
            // Login dropdown 
            loginButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click from bubbling up
                dropdownLogin.classList.toggle('hidden');
                // Close cart dropdown if it's open
                dropdownCart.classList.add('hidden');
            });
            
            // Cart dropdown 
            cartButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click from bubbling up
                dropdownCart.classList.toggle('hidden');
                // Close login dropdown if it's open
                dropdownLogin.classList.add('hidden');
            });
            
            // Close both dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                // Check if the click is outside both dropdowns
                if (!loginButton.contains(event.target) && !dropdownLogin.contains(event.target)) {
                    dropdownLogin.classList.add('hidden');
                }
                if (!cartButton.contains(event.target) && !dropdownCart.contains(event.target)) {
                    dropdownCart.classList.add('hidden');
                }
            });
            
            mobileMenuButton.addEventListener('click', function () {
                console.log('heree');
              const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
              mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
              mobileMenu.classList.toggle('hidden');
            });

            closeMenu.addEventListener('click', function () {
                console.log('here');
                
                mobileMenu.classList.toggle('hidden');
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
document.addEventListener("DOMContentLoaded", function() {
    fetch('offer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('offer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the offer:', error));
        
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('contactbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contactbar').innerHTML = data;
        })
        .catch(error => console.log('Error loading the contactbar:', error));
        
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.log('Error loading the header:', error));
    
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('featurs.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('featurs').innerHTML = data;
        })
        .catch(error => console.log('Error loading the featurs:', error));
    
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('categoriesSlider.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('categoriesSlider').innerHTML = data;
            var HeaderSwiper = new Swiper(".default-carousel", {
                loop: true,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
            
                });
            
            var CategorysSwiper2 = new Swiper(".multiple-slide-carousel", {
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 10,
                    navigation: {
                      nextEl: " .swiper-button-next",
                      prevEl: " .swiper-button-prev",
                    },
                    breakpoints: {
                     1920: {
                         slidesPerView: 6,
                         spaceBetween: 10
                     },
                     1028: {
                         slidesPerView: 6,
                         spaceBetween: 10
                     },
                     550: {
                         slidesPerView: 3,
                         spaceBetween: 0
                     },
            
                   }
                  });
            
              ProductDetailsSwiper= new Swiper(".multiple-slide-carousel-ProductDetails", {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                  nextEl: " .swiper-button-next-ProductDetails",
                  prevEl: " .swiper-button-prev-ProductDetails",
                },
                breakpoints: {
                 1920: {
                     slidesPerView: 6,
                     spaceBetween: 10
                 },
                 1028: {
                     slidesPerView: 6,
                     spaceBetween: 10
                 },
                 550: {
                     slidesPerView: 3,
                     spaceBetween: 0
                 },
            
               }
              })
            
            //             
            document.getElementById('countries-button').addEventListener('click', function() {
                const dropdown = document.getElementById('dropdown-countries');
                dropdown.classList.toggle('hidden');
              }); 
        })
        .catch(error => console.log('Error loading the categoriesSlider:', error));
    
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('bestDeals.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bestDeals').innerHTML = data;
        })
        .catch(error => console.log('Error loading the bestDeals:', error));
    
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('featursProducts.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('featursProducts').innerHTML = data;
        })
        .catch(error => console.log('Error loading the featursProducts:', error));
    
});