const navItems = document.querySelector('.navigation__list');
const checkbox = document.getElementById('navi-toggle');


navItems.addEventListener('click', closeNav);

function closeNav() {
  checkbox.checked = false;
}