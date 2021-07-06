$(function() {
 //icon search
 $('#search').click(function() {
     $(".menu-item").addClass('hide-item');
     $(".header__search-form").addClass("active");
     $(".header__box--left").addClass("active");
     $(".close").addClass("active");
     $("#search").hide();
 })
     $(".close").click(function(){
        $(".menu-item").removeClass('hide-item'); 
        $(".header__search-form").removeClass("active");
        $(".header__box--left").removeClass("active");
        $(".close").removeClass("active");
        $("#search").show();
     })

  //При скролле вниз шапка плавно будет умненьшаться 
  window.addEventListener("scroll", function(){
      const header = document.querySelector(".header__top-inner");
      header.classList.toggle("sticky", window.scrollY > 0)
  }) 

  //slider
  $('.slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      //autoplay: true
  });

  //Плюсик loadMore
  $("#loadMore").click(function() {
      $('#boxs .box:hidden').slice(0, 3).slideDown() 
      if (($('#boxs .box:hidden')).length == 0) {
          $('#loadMore').fadeOut('slow')
      }
  });

  //Плюсик new-items
$("#newitemsLoadMore").click(function() {
    $('#newboxs .newbox:hidden').slice(0, 3).slideDown() 
    if (($('#newboxs .newbox:hidden')).length == 0) {
        $('#newitemsLoadMore').fadeOut('slow')
    }
});

  //collection slider
  $('.collection__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
});

//hamburger
$(".hamburger").click(function() {
  $(this).toggleClass('on')
  $(".header__top").toggleClass("off");
  $(".sales-leaders__discount").toggleClass("off"); //sale небыло при прокрутке гамбургера
  $(".new-items__discount").toggleClass("off"); //sale небыло при прокрутке гамбургера
  $(".slick-arrow").toggleClass("off"); //небыло стрелок
  
});

//sidebar
$('ul.main-menu li').click(function(e) {
    e.preventDefault();

    if ($(this).siblings('li').find('ul.sidebar__submenu:visible').length) {
        $('ul.sidebar__submenu').slideUp('normal');
    }
    $(this).find('ul.sidebar__submenu').slideToggle('normal');
});

var t1 = new TimelineMax({ paused: true  });

//TimelineMax - библиотека

t1.to(".menu", 0.3, {
    autoAlpha: 1
});

t1.staggerFrom(
    '.main-menu li a:not(.sidebar__submenu li a)',
    1,
    {
        opacity: 0,
        y: 10,
        ease: Power3.easeInOut
    },
    0.1
);
t1.from(".sidebar__submenu", 0.3, {
    autoAlpha: 0
})

t1.reverse();

$(document).on('click', '.menu-btn', function(){
    t1.reversed(!t1.reversed());
});

$(document).on('click', '.close-menu', function(){
    t1.reversed(!t1.reversed());
});

//cursor
 var cursor = $('.cursor'),
   follower = $('.cursor-follower');
 
var posX = 0, //изначальная позиция курсора 0
    posY = 0, 
    mouseX = 0, //движение мышкой по х
    mouseY = 0; //движение мышкой по у
    
    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posY) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, { //устанавливаем follover
                css: {
                    left: posX - 20,
                    top: posY - 20,
                },
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX - 65,
                    top: mouseY - 65,
                },
            });
        },
    });

    $(document).on("mousemove", function (e) { //mousemove - движение мышкой
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $(".js-slider").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });

    $(".js-slider").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

    //когда курсор попадет на кнопку
    $(".js-slider-btn").on("mouseenter", function () {
        cursor.addClass("hoverBtn"); //при наведении на кнопку будет hoverBtn
    });

    //когда курсор оставит кнопку
    $(".js-slider-btn").on("mouseleave", function () {
        cursor.removeClass("hoverBtn"); 
    });

    //Scroll reveal
    window.sr = ScrollReveal()

    sr.reveal('.animate-left', {
        origin: 'left', 
        duration: 1000, // продолжительн. 1с
        distance: '25rem', //дистанция
        delay: 600, //задержка
    });
    sr.reveal('.animate-right', {
        origin: 'right', 
        duration: 1000, // продолжительн. 1с
        distance: '25rem', //дистанция
        delay: 600, //задержка
    });
    sr.reveal('.animate-top', {
        origin: 'top', 
        duration: 1000, // продолжительн. 1с
        distance: '25rem', //дистанция
        delay: 600, //задержка
    });
    sr.reveal('.animate-bottom', {
        origin: 'bottom', 
        duration: 1000, // продолжительн. 1с
        distance: '25rem', //дистанция
        delay: 600, //задержка
    });
});