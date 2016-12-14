var app=angular.module('myApp',[]);
 app.controller('myCntrl',function($scope,practiceFilterFilter){
	 $scope.name="gutha";
	 console.log(typeof($scope.name));
	 console.log($scope.name);
	  $scope.capital=practiceFilterFilter($scope.name);
		 console.log( $scope.capital);
	 $scope.clicks=function(){
		 alert("clck me!");
		

		 
	 }
 });
  app.controller('myCntrl1',function($scope){
	 $scope.name=['krishna','naga','latha','sujatha','gutha'];
	 
  });
 
 app.filter('practiceFilter',function(){
	 return function(item){
		var x=[];
		for(var i=0;i<item.length;i++){
			if(i%2==0){
				x.push(item[i].toUpperCase());
			}
			else{
				x.push(item[i]);
			}
		}
		
		return x.join('');
		 
	 };
 });
 

 app.directive('lathaDir',function(){
	return{
		restrict:'E',
		templateUrl:'temp.html',
		replace:true,
		transclude:true,
		controller:['$scope',function directiveCntrl($scope){
			$scope.age="23";
		}],
		scope:{
		names:'=',
		btn:'&'	
		},
		
		link:function(scope,element,attr){
			 
			 scope.names="nag";
			 scope.latha=function(){
				 alert('hi');
				
			 }
		console.log(scope.names);
		element.on('click',function(){
			//var e=angular.element(document).find('.div1');
			var e = angular.element(document.querySelector('.div1'));
			console.log(e);
			e.addClass('div2')
		});
		}
	};
 });	