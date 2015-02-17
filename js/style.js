$(document).ready(function() {
 var wHeight = $(window).height();
 var stickToBot = wHeight - $('.nav').outerHeight(true);
   $('.logo').hide();
 $('.logo').fadeIn();

 $('.navbar').hide();
 $('.nav-logo').hide();

 $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 30) {
    $('.navbar').fadeIn();
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
    $('.navbar').css({'position':'fixed','top' :'0px', 'background':'white'});
    $('ul li').css({'font-size':'1em'});
    $('.nav-logo').fadeIn();

  }
  else {
   $('.navbar').css({'position':'absolute','top': stickToBot +'px', 'background':'#fafafa'});
    $('ul li').css({'font-size':'1em'});
    $('.nav-logo').fadeOut();

    $(document).ready(function() {

       function setHeight() {
        var windowHeight = $(window).innerHeight();
       
      };
      setHeight();

      $(document).load(function () { $(window).resize(function() {
        setHeight();
      });
});

    });
  }
});
});

});


