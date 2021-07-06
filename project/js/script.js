
$(function(){


  //slider
  $('.slider__inner').slick({

   nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
   prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
   infinite: false,
   responsive: [
    {
      breakpoint: 1161,
      settings: {
        dots: true,
        arrows: false,
        speed: 300
      }
    }
  ]  
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.header__hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
  })

  

  new WOW().init();
});

