$('body').find('.vraag').click(function(){

  //Expand or collapse this panel
  $(this).next().slideToggle('fast');

  //Hide the other panels
  $(".antwoord").not($(this).next()).slideUp('fast');

});
