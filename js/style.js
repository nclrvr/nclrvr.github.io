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

//Modal
$(document).ready(function(){  
  
//get the height and width of the page  
var window_width = $(window).width();  
var window_height = $(window).height();  
  
//vertical and horizontal centering of modal window(s)  
/*we will use each function so if we have more then 1 
modal window we center them all*/  
$('.modal_window').each(function(){  
  
    //get the height and width of the modal  
    var modal_height = $(this).outerHeight();  
    var modal_width = $(this).outerWidth();  
  
    //calculate top and left offset needed for centering  
    var top = (window_height-modal_height)/2;  
    var left = (window_width-modal_width)/2;  
  
    //apply new top and left css values  
    $(this).css({'top' : top , 'left' : left});  
  
});  
  
    $('.activate_modal').click(function(){  
  
          //get the id of the modal window stored in the name of the activating element  
          var modal_id = $(this).attr('name');  
  
          //use the function to show it  
          show_modal(modal_id);  
          $('body').css({'overflow':'hidden'})
return false;
  
    });  
  
    $('.close_modal').click(function(){  
  
        //use the function to close it  
        close_modal();  
   $('body').css({'overflow':'auto'})
    });  
  
});  
  
  
function close_modal(){  
  
    //hide the mask  
    $('#mask').fadeOut(500);  
  
    //hide modal window(s)  
    $('.modal_window').fadeOut(500);  
  
}  
function show_modal(modal_id){  
  
    //set display to block and opacity to 0 so we can use fadeTo  
    $('#mask').css({ 'display' : 'block', opacity : 0});  
  
    //fade in the mask to opacity 0.8  
    $('#mask').fadeTo(500,0.8);  
  
     //show the modal window  
    $('#'+modal_id).fadeIn(500);  

    $('body').blur(function(){
  
});
  
}  
$(document).keyup(function(e) { 
    if (e.keyCode == 27) { 
        $("#mask").fadeOut(500);
        $('.modal_window').fadeOut(500);  
        
    } 
});

$(document).ready(function() {

    // lets push in a viewport 
    var vpw = (screen.width>=768)?'980':'device-width';
    $('head').prepend('<meta name="viewport" content="width='+vpw+'" />');

});