$(document).ready(function() {
  $('.resume_link').click(function(){
    $('.resume_holder').toggle();
    $('.main_holder').toggle();
    scroll(0,0);
  })
  
  $('.other_link').click(function(){
    $('.resume_holder').hide();
    $('.main_holder').show();
  })
});