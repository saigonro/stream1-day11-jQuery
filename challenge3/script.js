$(document).ready(function(){
    
// $(".container").click(function() {
//     $( ".container div" ).hide();
// });

// $(".theButton").click(function() {
//     $(this).hide();
// });

// $(".container").click(function() {
//     $( ".container" ).siblings().css( "opacity", "0.1" );
// });

// $(".superButton").click(function() {
//     $( ".container" ).fadeTo(500, 1);
// });

$(".theButton").on("mouseover", function() {
    $( this ).css("background-color", "black");
});

$(".theButton").on("mouseleave", function() {
    $( this ).css("background-color", "");
});


});