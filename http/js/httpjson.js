var app=angular.module('jsonapp',[]);

app.controller('jsoncntrl',function($scope,$http){
	$scope.getjson=function(){
		$http.get("js/json.js")
			.then(function(response){
				
				$scope.myjson=response.data.empdetails;
				console.log($scope.myjson);
		});
	}
});
app.directive("httpdirective",function(){
	return{
		restrict:'E',
		scope:{
			data:'=',
			getdetails:'&'
		},
		templateUrl:'httpjson.html'

	}
});

 