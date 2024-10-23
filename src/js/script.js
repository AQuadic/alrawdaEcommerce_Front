// Load Navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('offer&nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
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