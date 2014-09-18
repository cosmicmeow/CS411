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

  $('#panel_cs410').collapse({
    hide: true
  });

  $('#panel_cs411').collapse({
    toggle: true,
    hide: false
  });

  $(".panel-title").on("click", function(){
    if ($(this).find("span").hasClass("rotated")){
      $(this).find("span").removeClass("rotated");
    }
    else{
      $(this).find("span").addClass("rotated");
    }
  });

});