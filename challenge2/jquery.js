$(document).ready(function() {
    
    $(".bottom_button").on("mouseover", function() {
		$(".bottom_button").fadeTo(1000, 1);
	});
	
	$("img").click(function(){
	    if($(this).attr("src") == "img/1.png") {
	        $(this).attr("src", "img/2.png");
	    }
	    else if($(this).attr("src") == "img/2.png") {
	        $(this).attr("src", "img/3.png");
	    }
	    else if($(this).attr("src") == "img/3.png") {
	        $(this).attr("src", "img/1.png");
	    }
	});
});