$(document).ready(function(){

  $(window).on('load', function () {
  $('body').addClass('loaded_hiding');
  window.setTimeout(function () {
    $('.preloader').css('display', 'none');
    $('body').removeClass('loaded_hiding');
  }, 500);
});


  $(window).scroll(function(){
    var s = $(this).scrollTop();
    var w = $(this).outerWidth();
    var h = $('header').outerHeight();
    var p = s/h *200;
    var o = 0.5 - p/100;

    var z = 1+(w/5000*p);

    $('.parallax').css('transform', 'scale('+z+')');
    $('.parallax').css('opacity', o);
    if(o<0){
      $('.parallax').css('display', 'none');
    }
    else{
      $('.parallax').css('display', 'block');
    }
  });


  $("#menu").on('click', function(){
    $(this).toggleClass('btn-menu-active');
    $('.nav-menu').slideToggle();
    // $('.nav-menu').toggleClass('nav-menu-active');
  });


  $(".nav-menu, header").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
});
