
// Grab the burger menu and the navbar menu
const burger = document.querySelector('.navbar-burger');
const menu = document.getElementById('navbarMenuHeroB');

// When the burger is clicked, toggle the 'is-active' class
burger.addEventListener('click', () => {
    burger.classList.toggle('is-active'); // Toggle the burger icon
    menu.classList.toggle('is-active');   // Toggle the menu visibility
});
