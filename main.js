const menu = document.querySelector('.menu-mobile')
const menuDrop = document.querySelector('.menu-drop')

menu.addEventListener('click', () => {
  menuDrop.classList.toggle('hide')
  document.querySelector('.menu-close').classList.toggle('hide')
  document.querySelector('.menu-open').classList.toggle('hide')
})