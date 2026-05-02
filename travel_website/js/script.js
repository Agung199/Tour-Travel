// Toggle class activate
const navbarNav = document.querySelector('.navbar-nav');
// ketika humberger menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk emnghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});