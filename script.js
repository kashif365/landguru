const navToggler = document.getElementById('navToggler');
const navLinks = document.getElementById('navLinks');

navToggler.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
