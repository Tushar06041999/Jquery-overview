// In js And Introduce to jquery
// Jquey is a javascript libary

document.querySelector("h1").innerHTML="This is javascript version";


// In jquery

$(".root1 h1").text("This is Demo site");

// Html selector and text manipulation
$("h1").html("<i> italic </i>")

// apend prepent after before method in html  All are the jquery method

$("h1").append("Append always use for right side");
$("h1").prepend("prepend use for left side");

// Ading before and after tag using jquery

var tusume=$("<p></p>").text("This is paragraph 2")
$("#para1").after(tusume)

var tusume=$("<p></p>").text("This is paragraph 0")
$("#para1").before(tusume)




// Jquery attribute Manipulation.........attr,removeAttr,setAttribute
let attr=document.querySelector("script").getAttribute("src");
console.log(attr);

let attribute=$("script").attr("src");
console.log(attribute);

// core js

document.querySelector("a").setAttribute("href","https://www.youtube.com");

$("a").attr("href","https://www.youtube.com");
$("a").removeAttr("href") //Now it's value undefined





// Using Jquery to style all of my html elements

// $("p").css("color","green");
// $("p").css({"font-size":"3rem" , "background":"red"})

$("p").addClass("style1");



