const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (menuButton && links) {
  menuButton.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    links.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
