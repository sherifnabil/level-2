$(function () {
  //setting header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());

  });
  //adding class active to  links
  $('.links li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

//trigger the bxslider
  $('.slider').bxSlider({
    pager:false
  });

  $('.links li a').click(function () {

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000);
  });


  (function autoslider () {
    $('.overlay .acti').each(function () {

      if (!$(this).is(':last-child')) {

        $(this).delay(3000).fadeOut(1000, function() {

          $(this).removeClass('acti').next().addClass('acti').fadeIn();

          autoslider();

        });
      }else{
        $(this).delay(3000).fadeOut(1000, function () {

          $(this).removeClass('acti');

          $('.overlay .acti').eq(0).addClass('acti').fadeIn();

          autoslider();

        });
      }
    });

  })();
  //trigger nicescroll
  $("body").niceScroll({
cursorcolor:"aquamarine",
cursorwidth:"8px",
});




});
