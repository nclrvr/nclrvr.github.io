$(document).ready(function() {
 var wHeight = $(window).height();
 var stickToBot = $('#home').height(); + $('.nav').outerHeight(true);
   $('.logo').hide();
 $('.logo').fadeIn();

 $('#works').hide();
 $('#contact').hide();
 $('.nav').hide();
 $('.nav-logo').hide();
 $('.nav').css({'top': stickToBot + 'px'});
 $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 30) {
    $('.nav').fadeIn();
    $('.scroll').fadeOut();
  } if ( y > 180) {
 $('#about').fadeIn();

  } if ( y > 500 ) {
  $('#works').fadeIn();
  }
  if ( y > 2010 ) {
  $('#contact').fadeIn();
  }

  if (y == 0) {
    $('.scroll').fadeOut();
  }

$(window).scroll(function() {
   var scrollVal = $(this).scrollTop();
   var state = true
   if ( scrollVal > stickToBot ) {
    $('.nav').css({'position':'fixed','top' :'0px', 'background':'white'});
    $('ul li').css({'font-size':'1em'});
    $('.nav-logo').fadeIn();

  }
  else {
   $('.nav').css({'position':'absolute','top': stickToBot +'px', 'background':'none'});
    $('ul li').css({'font-size':'1.2em'});
    $('.nav-logo').fadeOut();   
  }
});
});

});


