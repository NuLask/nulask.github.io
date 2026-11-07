const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (menuButton && links) {
  const mobile = window.matchMedia('(max-width:800px)');

  const setOpen = (open) => {
    links.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
      'aria-label',
      open ? 'Close navigation' : 'Open navigation'
    );
  };

  menuButton.addEventListener('click', () => {
    setOpen(!links.classList.contains('open'));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && links.classList.contains('open')) {
      setOpen(false);
      menuButton.focus();
    }
  });

  links.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!mobile.matches) return;

      const target = document.getElementById(link.getAttribute('href').slice(1));
      setOpen(false);
      if (!target) {
        menuButton.focus();
        return;
      }

      event.preventDefault();
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });

  mobile.addEventListener('change', () => {
    const active = document.activeElement;
    const focusWasInside = links.contains(active);
    const focusWasToggle = active === menuButton;
    setOpen(false);

    if (mobile.matches && focusWasInside) {
      menuButton.focus();
    } else if (!mobile.matches && focusWasToggle) {
      links.querySelector('a')?.focus();
    }
  });

  document.documentElement.classList.add('nav-enhanced');
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
