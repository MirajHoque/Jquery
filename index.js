//click(): attach a function to run when clicked event occurs.
//$("button").click(()=>
//    $("h1").text("you are clicked me")
//);

//toggleClass(): toggle b/w classes.
//$("button").click( ()=>
  //  $("h1").toggleClass("style")
//);

//adding event to multiple element
$(".mybutton").click( function(){
    var value = this.innerHTML;
    $("h1").text(value + " is clicked");
} )

//on(): takes two parameter. an event and a function to run when event is clicked.
$(".mybutton").on("mouseover", function(){
    var value = this.innerHTML;
    $("h1").text(value + " is clicked");
})