var app=angular.module('myapp',[]);
app.controller('mycntrl',function($scope){
	$scope.name="";
	$scope.password="";
	$scope.array=function(){
		$scope.display=[];
		$scope.display.push($scope.name,$scope.password);
	}
});