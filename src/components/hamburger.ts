const hamburger = document.querySelector('.hamburger') as HTMLElement
const menu = document.querySelector('.menu') as HTMLElement


hamburger?.addEventListener('click', () => {
  if (menu.classList.contains('menu-active')) {
      menu.classList.remove('menu-active');
  } else {
      menu.classList.add('menu-active');
  }
});
