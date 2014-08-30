var $document = $(document),
    $element = $('#ah'),
    className = 'hasScrolled';

$document.scroll(function() {
  if ($document.scrollTop() >= 470) {
    // user scrolled 300 pixels or more;
    // do stuff
    //console.log('derp');
    //$element.removeClass("navbar-red");
    $element.addClass(className);
  } 
  else {
  	//$element.addClass("navbar-red");
    $element.removeClass(className);
  }
});
