// Resize Navbar on Scroll

var navbar = document.querySelector('.navbar');   // when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Navbar Toggler

const navMenu = document.querySelector('.menu');
navTogle = document.querySelector('.menu-btn');
if (navTogle) {
    navTogle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    })
};

// Closing menu when navlink is clicked

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.querySelector('.menu');
    navMenu.classList.remove('active');
};
navLink.forEach(n => n.addEventListener('click', linkAction));