function start() {
  playWelcome();
  showContent();
}

function playWelcome() {
  console.log('[SAO-bootstrap] Playing welcome animation')

  var welcome = $('.welcome');

  var top = ($(window).height() / 2) - (welcome.height() / 2);
  var left = ($(window).width() / 2) - (welcome.width() / 2);
  welcome.css({'top': top + 'px', 'left': left + 'px'});

  welcome.css('visibility','visible').hide().fadeIn(1000);

  welcome.delay(500).queue(function() {
    welcome.addClass("animate").dequeue();
  }).delay(700).queue(function() {
    welcome.hide().dequeue();
  });
}

function showContent() {
  var content = $('.content');

  content.fadeIn(3000);

  
}

$(window).ready(start);
