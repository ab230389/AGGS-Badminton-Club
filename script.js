const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

manuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});