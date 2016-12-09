var app=angular.module('myapp',[]);
	app.controller('mycntrl',function($scope){
		$scope.name="latha";
		$scope.names="santhu";
		$scope.clickme=function(){
			$scope.details={name:"nag",id:"30024"};
			console.log($scope.details);
		}
	});
	app.directive('myDirective',function(){
		return{
			restrict:'E',
			scope:{
				name:'=',
				users:'&'
			},
			templateUrl:'isolate.html'
			
		};
	});