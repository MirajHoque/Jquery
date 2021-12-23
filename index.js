//select a element inside div
//text(): replace text.
//$(".my-div h1").text("hi");

//slect element based on id
//$("#p1").text("hello");

//select multiple element at once
//$("h1,p").text("hi");

//html method for using html attribute.
//$("#p1").html("<b>goodbye</b>")

//append(): insert specified content at the end of the selected element.
//$("#p1").append("goodbye")

//prepend(): insert specified content at the begaining of the selected element.
//$("#p1").prepend("goodbye");

var myParagraph = $("<P></P>").text("this is paragraph 0");

//before():insert specified content before the select element.
//$("#p1").before(myParagraph);

//after(): insert specified content after the select element.
$("#p1").after(myParagraph);