// Load Navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('offer&nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            const loginButton = document.getElementById('login-button');
            const dropdownLogin = document.getElementById('dropdown-login');
            const userBtn = document.getElementById('userBtn');
            const cartButton = document.getElementById('cart-button');
            const dropdownCart = document.getElementById('dropdown-cart');
            const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
            
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenu = document.getElementById('close-menu');
            
            // State tracking for dropdowns
            let isDropdownCartOpen = false;
            let isDropdownLoginOpen = false;
            
            // Login dropdown 
            loginButton.addEventListener('click', function(event) {
                event.stopPropagation();
                isDropdownLoginOpen = !isDropdownLoginOpen;
                dropdownLogin.classList.toggle('hidden', !isDropdownLoginOpen);
                // Close cart dropdown if it's open
                if (isDropdownCartOpen) {
                    dropdownCart.classList.add('hidden');
                    isDropdownCartOpen = false;
                }
            });
            
            userBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                isDropdownLoginOpen = !isDropdownLoginOpen;
                dropdownLogin.classList.toggle('hidden', !isDropdownLoginOpen);
                // Close cart dropdown if it's open
                if (isDropdownCartOpen) {
                    dropdownCart.classList.add('hidden');
                    isDropdownCartOpen = false;
                }
            });
            
            // Cart dropdown 
            cartButton.addEventListener('click', function(event) {
                event.stopPropagation();
                isDropdownCartOpen = !isDropdownCartOpen;
                dropdownCart.classList.toggle('hidden', !isDropdownCartOpen);
                // Close login dropdown if it's open
                if (isDropdownLoginOpen) {
                    dropdownLogin.classList.add('hidden');
                    isDropdownLoginOpen = false;
                }
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                // Check if the click is outside both dropdowns
                if (isDropdownLoginOpen && !loginButton.contains(event.target) && !dropdownLogin.contains(event.target)) {
                    dropdownLogin.classList.add('hidden');
                    isDropdownLoginOpen = false;
                }
                if (isDropdownCartOpen && !cartButton.contains(event.target) && !dropdownCart.contains(event.target)) {
                    dropdownCart.classList.add('hidden');
                    isDropdownCartOpen = false;
                }
            });
            
            mobileMenuButton.addEventListener('click', function () {
                const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
            });
            
            closeMenu.addEventListener('click', function () {                
                mobileMenu.classList.toggle('hidden');
            });
            
            initializeSidebar();
            
        })
        .catch(error => console.log('Error loading the navbar:', error));
});

function initializeSidebar() {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("-translate-x-full");
    });
    closeSidebar.addEventListener("click", function () {
        sidebar.classList.add("-translate-x-full");
    });
}

// Load Footer
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the footer:', error));
        
});

// Load offer

document.addEventListener("DOMContentLoaded", function() {
    fetch('offer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('offer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the offer:', error));
        
});

// Load contactbar

document.addEventListener("DOMContentLoaded", function() {
    fetch('contactbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contactbar').innerHTML = data;
            const countriesBtn = document.getElementById('countries-button');
            const countriesDropdown = document.getElementById('dropdown-countries');
            
            countriesBtn.addEventListener('click', function() {
                countriesDropdown.classList.toggle('hidden');
            }); 
            
            document.addEventListener('click', function(event) {
                if (!countriesBtn.contains(event.target) && !countriesDropdown.contains(event.target)) {
                    countriesDropdown.classList.add('hidden');
                }
            });
            

        })
        .catch(error => console.log('Error loading the contactbar:', error));
        
});

// Load header

document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            var HeaderSwiper = new Swiper(".default-carousel", {
                loop: true,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
            
                });
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
            var CategorysSwiper = new Swiper(".multiple-slide-carousel", {
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

        })
        .catch(error => console.log('Error loading the categoriesSlider:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('bestDeals.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bestDeals').innerHTML = data;
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
    
            function updateCountdown() {
                // Set the target date (16 days from now)
                const now = new Date();
                const target = new Date(now.getTime() + 16 * 24 * 60 * 60 * 1000);
                target.setHours(12, 11, 9, 0);
    
                // Calculate the difference
                const diff = target - now;
    
                // Calculate days, hours, minutes, seconds
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
                // Format the numbers to always show two digits
                const formatNumber = (num) => String(num).padStart(2, '0');
    
                // Update the DOM elements
                daysEl.textContent = formatNumber(days);
                hoursEl.textContent = formatNumber(hours);
                minutesEl.textContent = formatNumber(minutes);
                secondsEl.textContent = formatNumber(seconds);
    
                // Check if countdown has finished
                if (diff < 0) {
                    clearInterval(timerInterval);
                    document.getElementById('countdown').textContent = "Countdown finished!";
                }
            }
    
            // Update immediately and then every second
            updateCountdown();
            const timerInterval = setInterval(updateCountdown, 1000);
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

document.addEventListener("DOMContentLoaded", function() {
    fetch('PopUpBroductDetails.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('PopUpBroductDetails').innerHTML = data;
            
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
        })
        .catch(error => console.log('Error loading the PopUpBroductDetails:', error));    
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('blueNavbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('blueNavbar').innerHTML = data;
            

        })
        .catch(error => console.log('Error loading the blueNavbar:', error));
    
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('Breadcrumb.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Breadcrumb').innerHTML = data;
            

        })
        .catch(error => console.log('Error loading the Breadcrumb:', error));
    
});

// For Password Eye Icon
function togglePassword(icon) {
    const passwordInput = icon.closest('.relative').querySelector('input[type="password"], input[type="text"]');
    const eyeIcon = icon.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}
