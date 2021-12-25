//hide(): hide the seleted element

   //we can use hide() with parameter or without parameter.

   $("#btn").click(function(){
  //$("#div1").hide(2000)
 // $("#div1").hide(2000).show(2000);

  //fadeIn(): gradually changes the opacity of seleted element form hidden to visible.
  //$("#div1").fadeIn(2000);

  //fadeOut(): gradually chanages the opacit of seleted element from visible to hidden.
  //$("#div1").fadeOut(2000);

  //fadeIn(), fadeOut() together
  //$("#div1").fadeOut(2000).fadeIn(2000);

  //fadeToggle(): both fadeIn, fadeOut.
  //$("#div1").fadeToggle(2000);

  //fadeTo(): used for changes the opacity level
  //opacity level 0-1.
  //$("#div1").fadeTo(2000, 0.4);

  //slideUp(): slide up selecte elemnts.
  //$("#div1").slideUp(2000);

  //slideDown(): slide down seleted elements.
  //$("#div1").slideDown(2000);

  //using both slideUp() and slideDown()
  $("#div1").slideUp(2000).slideDown(2000);
})