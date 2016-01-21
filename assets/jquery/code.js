$(function() {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",

  });
});

$(function() {
  $("#news-acc").accordion({
    collapsible: true,
    heightStyle: "content",
    active: false
  });
});

$(function() {
  $('.tlt').textillate({ in : {
      effect: 'fadeIn'
    }
  });
})

// https://github.com/kswedberg/jquery-smooth-scroll/blob/master/demo/index.html
$(document).ready(function() {
  $('body').smoothScroll({
    delegateSelector: 'ul.nav a'
  });
  $('p.subnav a').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      scrollTarget: link.hash
    });
  });
  $('#change-speed').on('click', function() {
    var $p1 = $('ul.nav a').first(),
      p1Opts = $p1.smoothScroll('options') || {};
    p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
    $p1.smoothScroll('options', p1Opts);
  });
  $('button.scrollsomething').click(function() {
    $.smoothScroll({
      scrollElement: $('div.scrollme'),
      scrollTarget: '#findme'
    });
    return false;
  });
  $('button.scrollhorz').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '.horiz'
    });
    return false;
  });
});
