const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable:true,
    },
  });

const menuMobil = document.querySelector('.container-menu');
const menuOpenMobil = menuMobil.querySelector('.container-menu__burger')
const menuCloseMobil = document.querySelector('.container-menu__burger-close');
menuCloseMobil.style.display="none";

function toggleMenu(e) {
  e.preventDefault();
  let toggleMenuMobil =  document.querySelector( ".nav__list" ).classList.toggle("is_active");
  if(toggleMenuMobil){
    menuOpenMobil.style.display="none"
    menuCloseMobil.style.display="inline-block"
  }else{
    menuOpenMobil.style.display="initial"
    menuCloseMobil.style.display="none"

  }
}
menuMobil.addEventListener('click', toggleMenu);