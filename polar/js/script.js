$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
            speed: 300
          }
        }
      ]  
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
  //Плюсик loadMore
$("#catalogLoadMore").click(function() {
    $('#boxs .box:hidden').slice(0, 3).slideDown() 
      if (($('#boxs .box:hidden')).length == 0) {
          $('#catalogLoadMore').fadeOut('slow')
      }
}); 
$("#catalogrunLoadMore").click(function() {
  $('#runboxs .runbox:hidden').slice(0, 3).slideDown() 
    if (($('#runboxs .runbox:hidden')).length == 0) {
        $('#catalogrunLoadMore').fadeOut('slow')
    }
}); 


    //Modal
    $('[data-modal="consultation"]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
   
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
    $('.button_product').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.product__info-title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
    
    function valideForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите своё имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введён адрес почты"
          }
        }
      });
    };
    
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+38(999) 999-99-99");

    
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
   });

   //Scroll and pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });
  
  
  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
 });

//product__slider
$('.product__slider-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
  asNavFor: '.product__slider-nav',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        speed: 300
      }
    }
  ]  
});
$('.product__slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.product__slider-inner'
});

 
 new WOW().init();

});
