$(document).ready(function() {

  $("button").click(function(){
    $(".tabcontent").hide();
  })

  $("button.click1").click(function() {
      $("#mon").fadeToggle();

   });

  $("button.click2").click(function() {
      $("#lio").fadeToggle();

   });


  $("button.click3").click(function() {
    $("#tig").fadeToggle();

  });
});
