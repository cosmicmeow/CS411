var $document = $(document),
    $element = $('#ah'),
    className = 'hasScrolled';

$document.scroll(function() {
  if ($document.scrollTop() >= 470) {
    $element.addClass(className);
  } 
  else {
    $element.removeClass(className);
  }
});

$(function(){
	$("#navbar").load("navbar.html"); 
	$("footer").load("footer.html"); 
});