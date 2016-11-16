$(document).ready(function(){
	var array=[1,2,3];
	var array2=[3,2,1,4,5,6];
	for(var i=0;i<array.length;i++){
		$("#demo").append(array[i]+"<br>");
	}	
	
	var array3=[];
	array3=array;
	console.log(array3);
	
	$("#check").click(function(){
		for(var i=0;i<array2.length;i++){
			var flag=true;
			for(var j=0;j<array3.length;j++){
				if(array2[i]==array3[j]){
					flag=false;	
				}
			}
			if(flag==true){
				  array3.push(array2[i]);
				  console.log(array3);
				 
				$("#demo1").append(array3[i]+"<br>");
				
			}
		}
		for(i=0;i<array3.length;i++){
			$("#demo2").append(array3[i]+"<br>");
		}
			
	});
		
	 
	
});

