$('body').find('.vraag').click(function(){
	
  //Expand or collapse this panel
  $(this).next().slideToggle('fast');

  //Hide the other panels
  $(".antwoord").not($(this).next()).slideUp('fast');
 
});

$(document).ready(function(){
    $(".vraag").hover(function(){
        $("#footer").toggleClass(".main");
    });
});


/*
$("a").hover(function() {
    // deze functie wordt gerund wanneer je over een link hovert.
    // dan gaan we aan alle links een class toevoegen
    $("a").addClass("main");
    // behalve aan de link waar je over heen hovert
    $(this).removeClass("main");
}, function() {
		// deze functie wordt gerund wanneer je je muis weer van de link weg-beweegt
    // de class wordt overal weer weggehaald
		$("a").removeClass("main");
});
*/
