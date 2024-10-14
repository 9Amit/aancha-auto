// script.js

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-content').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    // Wait for 5 seconds
    setTimeout(function() {
        // Add the 'show' class to the div
        document.getElementById('playstoreDiv').classList.add('show');
    }, 5000);
});

function showSignup() {
    document.querySelectorAll('.form')[0].style.display = 'none';
    document.querySelectorAll('.form')[1].style.display = 'flex';
}

function showLogin() {
    document.querySelectorAll('.form')[0].style.display = 'flex';
    document.querySelectorAll('.form')[1].style.display = 'none';
}
