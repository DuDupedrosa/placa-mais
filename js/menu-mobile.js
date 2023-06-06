function scrollToSection(id) {
  const section = document.getElementById(id);

  // if (!section) {
  //   window.location.pathname('/');
  // }

  section.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}

function openMenuMobile() {
  const menu = document.getElementById('menu-mobile');
  const menuOpenButton = document.getElementById('menu-mobile-button');
  const menuCloseButton = document.getElementById('menu-mobile-button-close');
  const iconMenuMobileOpen = document.getElementById('icon-menu-open');
  const iconMenuMobileClose = document.getElementById('icon-menu-close');
  menuOpenButton.classList.add('hidden-menu-mobile-button');
  menuCloseButton.classList.remove('hidden-menu-mobile-button-close');
  menu.classList.add('header-nav-list-mobile-open');

  // global event
  window.addEventListener('click', (e) => {
    if (
      e.target !== menu &&
      e.target !== menuOpenButton &&
      e.target !== menuCloseButton &&
      e.target !== iconMenuMobileOpen &&
      e.target !== iconMenuMobileClose
    ) {
      menuOpenButton.classList.remove('hidden-menu-mobile-button');
      menuCloseButton.classList.add('hidden-menu-mobile-button-close');
      menu.classList.remove('header-nav-list-mobile-open');
    }
  });
}

function closeMenuMobile() {
  const menu = document.getElementById('menu-mobile');
  const menuOpenButton = document.getElementById('menu-mobile-button');
  const menuCloseButton = document.getElementById('menu-mobile-button-close');

  menuOpenButton.classList.remove('hidden-menu-mobile-button');
  menuCloseButton.classList.add('hidden-menu-mobile-button-close');
  menu.classList.remove('header-nav-list-mobile-open');
}
