$(function(){

$('.slider__inner').slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false,
  responsive: [
    {
      breakpoint: 910,
      settings: {
        dots: true,
        arrows: false,
       
      }
    }
  ]  
});

$('.news__slider-inner').slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false,
});





$('select').styler();


$('.header__btn-menu').on('click',function(){
  $('.menu ul').slideToggle();
});


});

