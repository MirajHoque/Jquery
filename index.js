//css(css property, value): used add css.takes two parameter css property; value
$("h1").css("color", "red");
$("h1").css("font-size", "3rem");
$("h1").css("font-style", "italic");

//multiple css style using json

$("p").css({"color":"black", "font-size": "5rem", "font-style": "bold"});

//addClass():
//$("h3").addClass("style");

//add multiple class
$("h3").addClass("style style2")