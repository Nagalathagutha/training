$(document).ready(function(){
	$(".divisions").one("click",function(){
		var x=this.id;
	var play1=$("#player1").hasClass("active");
	var play2=$("#player2").hasClass("active");
	console.log(play1);
	console.log(play2);
	console.log(this.id);
	if(play1){
		// $("#"+x).off("click");
       $("#player1").removeClass("active");
		$("#player2").addClass("active");
		//$("#"+x).addClass("heading");
		$("#"+x).text("#");
		
	}
	if(play2){
		// $("#"+x).off("click");
       $("#player2").removeClass("active");
		$("#player1").addClass("active");
		//$("#"+x).addClass("headings");		
		$("#"+x).text("*");
		
	}
	});

});
