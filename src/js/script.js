  // Load Navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('offer&nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
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