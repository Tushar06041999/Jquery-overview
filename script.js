// In js And Introduce to jquery
// Jquey is a javascript libary

// document.querySelector("h1").innerHTML="This is javascript version";


// // In jquery

// $(".root1 h1").text("This is Demo site");

// // Html selector and text manipulation
// $("h1").html("<i> italic </i>")

// // apend prepent after before method in html  All are the jquery method

// $("h1").append("Append always use for right side");
// $("h1").prepend("prepend use for left side");

// // Ading before and after tag using jquery

// var tusume=$("<p></p>").text("This is paragraph 2")
// $("#para1").after(tusume)

// var tusume=$("<p></p>").text("This is paragraph 0")
// $("#para1").before(tusume)




// // Jquery attribute Manipulation.........attr,removeAttr,setAttribute
// let attr=document.querySelector("script").getAttribute("src");
// console.log(attr);

// let attribute=$("script").attr("src");
// console.log(attribute);

// // core js

// document.querySelector("a").setAttribute("href","https://www.youtube.com");

// $("a").attr("href","https://www.youtube.com");
// $("a").removeAttr("href") //Now it's value undefined





// // Using Jquery to style all of my html elements

// $("p").css("color","green");
// $("p").css({"font-size":"3rem" , "background":"red"})

// $("p").addClass("style1");  //same like remove class



// // Part-06 EventListener start from here

// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector(".style1").innerHTML="I clicked and changed my mind to Do that";
// })


// // For jquery 

// $("button").click(function(){
//     $("p").toggleClass(".style1");
// })

//on use kore multiple button declare kore jai


//No seven login with jquery

// document.querySelector("button").addEventListener("click",function(){
//     let id1=document.getElementById("pass1").value;
//     let id2=document.getElementById("pass2").value;
//     // if(id1.innerTEXT===""){
//     //     alert("Fill with your password");
//     // }
//     // else if(id2.innerHTML===""){
//     //     alert("fill with your password");
//     // }
//     // else 

//     if(id1=== "" || id2=== ""){
//         alert("please Enter password");
//     }
//     else if(id1===id2){
//         alert("password match");
//     }
//     else{
//         alert("wrong password");
//     }
// })

// $("button").click(function(){
//     let id1=$("#pass1").val();
//     let id2=$("#pass2").val();

//     if(id1=== "" || id2=== ""){
//         alert("please Enter password");
//     }
//     else if(id1===id2){
//         alert("password match");
//     }
//     else{
//         alert("wrong password");
//     }
    
// })



// Animation part start from Here

// $("#btn").click(function(){
//     $(".container").hide(2000).show(2000);
// })

// toggole Do show and hide

//fadeIn,fadeOut,fadeToggole,fadeTo method for animation 

// $("#btn").click(function(){
//     $(".container").fadeOut(2000);
// })

// $("#btn").click(function(){
//     $(".container").fadeIn(2000);
// })

// $("#btn").click(function(){
//     $(".container").fadeTo(2000,0.7);
// })


//slide up and slide Down method for animation

// $("#btn").click(function(){
//     $(".container").slideUp(2000);
// })

// $("#btn").click(function(){
//     $(".container").slideUp(2000).slideDown(2000);
// })



// Nine number videos in this series
// Animate mathood
$("#btn").click(function(){
    $(".container").animate({margin:"20px",display:"flex",height:"400px"},100000);
})