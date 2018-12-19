$(document).ready(function() {
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('#nav-icon')
    nav.slideToggle(200);

    if(icon.attr('name') == 'menu') {
      icon.attr('name', 'close');
    } else {
      icon.attr('name', 'menu');
    }
  });
});
