$(function() {

  var anchors = ['one','two','three','four','five'],
  target = $('.fading'),
  zenith, nadir, location, pilot,
  modern = window.requestAnimationFrame;

  storeDimensions();

  $(window).resize(storeDimensions).scroll(function() {

    location = $(this).scrollTop();

    if (!pilot) {
    if (modern) requestAnimationFrame(checkFade);
    else checkFade();
    }
  });

  $('.scroll').click(function(e) {

    e.preventDefault();
    pilot = true;

    $('.active').removeClass('active');
    $(this).addClass('active');

    var destination = $(this.hash).offset().top,
    goal = $(this.hash).find('.fading');

    if (destination != location && goal.length) goal.stop().fadeOut();

    $('html, body').animate({scrollTop: destination}, 500, function() {

      if (goal.length) goal.fadeTo(250,1);
      pilot = false;
    });
  });

function storeDimensions() {

  zenith = []; nadir = [];

  target.each(function() {

    var placement = $(this).offset().top;

    zenith.push(placement-$(window).height()*0.8);
    nadir.push(placement+$(this).outerHeight());
  });
}

function checkFade() {

  target.each(function(i) {

    if (!$(this).is(':animated')) {
    if (location > zenith[i] && location < nadir[i]) {
      $(this).fadeTo(250,1);
      var pair = $(this).closest('section')[0].id;
      $('.active').removeClass('active');
      $('[href*="' + pair + '"]').addClass('active');
    }
    else if ($(this).css('opacity') != 0) $(this).fadeTo(0,0);
    }
  });
}
});

// mobile menu button
(function() {
  $('#trigger').click(function() {
    if ($('#nav').hasClass('toggle')) {
      $('#nav').removeClass('toggle');
      $('#nav').addClass('show');
    } else {
      $('#nav').addClass('toggle');
      $('#nav').removeClass('show');
    }
  });
})();

/*(function() {
  $('#one').click(function() {
    if ($('#nav').hasClass('show')) {
      $('#nav').removeClass('show');
      $('#nav').addClass('toggle');
    } else {
      $('#nav').addClass('show');
      $('#nav').removeClass('toggle');
    }
  });
})();*/

/*$( "#one" ).click(function() {
  $( "#nav" ).hide( "slow", function() {
    // Animation complete.
  });
  */

/*$(document).ready(function(){
    $("#one").click(function(){
        $("#nav").hide(1000);
    });
});*/

/*$(document).ready(function(){
    $("#one").click(function(){
        $("#nav").toggle();
    });
});*/

// mobile menu button -- vers
/*(function() {
  $('#trigger').click(function() {
    if ($('#nav').hasClass('navigation')) {
      $('#nav').addClass('show');
    } else {
      $('#nav').removeClass('show');
    }
  });
})();*/

// mobile menu button -- vers
/*(function() {
  $('#one').click(function() {
    if ($('#nav').hasClass('show')) {
      $('#nav').addClass('hide');
    } else {
      $('#nav').removeClass('hide');
    }
  });
})();*/

/*(function() {
  $('#one').click(function() {
    if ($('#nav').hasClass('show')) {
      $('#nav').removeClass('show');
      $('#nav').addClass('toggle');
    } else {
      $('#nav').addClass('show');
      $('#nav').removeClass('toggle');
    }
  });
})();*/