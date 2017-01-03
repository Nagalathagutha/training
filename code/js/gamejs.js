var app=angular.module('gameApp',[]);
app.controller('gameCntrl',function($scope){
	var array=[['mayabazar','yenthavadugani','mayuri','nani','majnu','jagadam','chatrapathi','ramayanam','nayak'],
	['white','chartreuse','bisque','blue','black','red','yellow'
	]];
	var hints=[['1957 Indian bilingual epic fantasy film','one of ajiths movie','biopic movie in telugu',
	' directed by S. J. Suryaah',
	' Indian Hindi silent film in 1922','fighting','rajamoulis film','epic fantasy film',
	'also known as leader'],
	[' a color without hue','color precisely halfway between green and yellow','shade of white',
	'Hex/RGB color code = #0000FF','Hex/RGB color code = #0000',' RGB value is (255,0,0)',
	'Hex value is #FFFF00']];
	 $scope.getele=[];
		$scope.lives=[];
		$scope.total=[];
		 $scope.totallives=10;
	function matchingword(){
		
	 	$scope.randomWord = array[Math.floor(Math.random() * array.length)];
    	$scope.random= $scope.randomWord[Math.floor(Math.random() *  $scope.randomWord.length)];
	    console.log($scope.random);
	    if($scope.randomWord==array[0]){
	    	$scope.cat='movie';
	    	
	    }
	    else{
	    	$scope.cat='colors';
	    	console.log($scope.cat);
	    }
	    $scope.cluelength=$scope.random.length;
		 console.log($scope.cluelength);
		var arrayindex=array.indexOf($scope.randomWord);
		console.log(arrayindex);
		var wordindex=$scope.randomWord.indexOf($scope.random);
		console.log(wordindex);
		$scope.displayclue=hints[arrayindex][wordindex];
		// console.log(hints[arrayindex][arrayindex])
		console.log($scope.displayclue);
	
		console.log($scope.random);
  		
		console.log("latha");
	 	$("li").css("background-color","#c1d72e");
	 	
    	$( "li" ).one("click",function( event ) {
    		
			 $scope.get=($(this).html());
		
			$(this).css("background-color","#eee");
		   	console.log($scope.random);

		 
		   	console.log($scope.totallives);
		 
	   		var flag=false;
			 for(var i=0;i<$scope.random.length;i++){
			 		
		    	console.log($scope.random[i]);
		    	console.log($scope.get);

		    	if($scope.random[i]==$scope.get){
		    		$scope.getele[i]=$scope.get
		    		$scope.$apply();
		    		console.log($scope.getele);
		    		flag=true;
		    	$scope.totallives=$scope.totallives;
		    		console.log($scope.totallives);
	    	
   		 		}
   		 	

			}
			 // if(flag==false){

				//  $scope.totallives=($scope.totallives-1);
				//  if($scope.totallives==0){
				//  	alert('you lost the game');
				//  }
     			// console.log( $scope.totallives);
   			 //$scope.$apply();
	 		//  }
			console.log($scope.getele);
			console.log($scope.random)
			var count = 0;
			for (var i = 0; i < $scope.getele.length; i++) {
		     	console.log($scope.getele[i]);
	            if ($scope.getele [i]!=undefined) {
	               	count++;
	                console.log(count);
	            }
		           
	        }
		    
	   
			 if (count == $scope.random.length) {
			 	$scope.winning="you won!";
			 	$scope.$apply();
			 }

			 	 
   		 });
    
	}

	matchingword();
	$scope.next = function(){
	$scope.getele=[];
	$scope.winning='';
	$scope.totallives=10;
	matchingword();


	};

	    


});