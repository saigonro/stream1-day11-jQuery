$(document).ready(function() {
	
	// $("p").click(function() {
	// 	alert("You clicked on a paragraph");
	// });
	
	// $("p").mouseover(function() {
	// 	$(this).css("color", "red");	
	// });

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$("p").on("click", function() {
		$("p").css("color", "red");
	});
	$("h2").on("mouseover", function() {
		$("h2").css("background-color", "lightblue");
		$(this).css("font-size", "36px");
	});
	$(".bottom_button").on("mouseover", function() {
		$("body").css("background-color", "black");
	});
	$(".bottom_button").on("mouseleave", function() {
		$("body").css("background-color", "gray");
	});


}); 
