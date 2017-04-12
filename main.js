
$(function() {

  var target = $('.fading'), guide = $('#nav'),
  zenith, nadir, spot, pilot,
  modern = window.requestAnimationFrame;

  storeDimensions();

  $(window).resize(storeDimensions).scroll(function() {

    spot = $(this).scrollTop();

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

    var item = this.hash,
    destination = $(item).offset().top,
    goal = $(item).find('.fading');

    if (destination != spot && goal.length) goal.stop().fadeOut();

    $('html, body').animate({scrollTop: destination}, 500, function() {

      if (!guide.hasClass('toggle')) guide.addClass('toggle').removeClass('show');

      if (goal.length) {
        goal.fadeTo(250, 1, function() {
        });
      }

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
    if (spot > zenith[i] && spot < nadir[i]) {
      $(this).fadeTo(250,1);
      var pair = $(this).closest('section')[0].id;
      $('.active').removeClass('active');
      $('[href*="' + pair + '"]').addClass('active');
    }
    else if ($(this).css('opacity') !== 0) $(this).fadeTo(0,0);
    }
  });
}

// mobile menu button
$('#trigger').click(function() {
  if (guide.hasClass('toggle')) guide.removeClass('toggle').addClass('show');
  else guide.addClass('toggle').removeClass('show');
});
});

/*$(function() {

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
});*/

// mobile menu button - old
/*(function() {
  $('#trigger').click(function() {
    if ($('#nav').hasClass('toggle')) {
      $('#nav').removeClass('toggle');
      $('#nav').addClass('show');
    } else {
      $('#nav').addClass('toggle');
      $('#nav').removeClass('show');
    }
  });
})();*/
