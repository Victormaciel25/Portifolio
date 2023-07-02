let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  let header = document.getElementById('header')
  window.addEventListener('scroll',() =>{
    if(window.scrollY >= 400){
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }
  })  