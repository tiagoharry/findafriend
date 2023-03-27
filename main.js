const menu = document.querySelector('.menu-mobile')
const menuDrop = document.querySelector('.menu-drop')

menu.addEventListener('click', () => {
  menuDrop.classList.toggle('hide')
  document.querySelector('.menu-close').classList.toggle('hide')
  document.querySelector('.menu-open').classList.toggle('hide')
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
 cssMode: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  keyboard: true,
});