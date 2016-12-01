var app=angular.module('jsonapp',[]);
app.service('httpservice', function($http) {
	this.getData = function(callbackFunc) {

		$http.get("js/json.js").success(function(data){
			console.log(data)
			callbackFunc(data);
		   
		}).error(function(){
			alert("error");
		});
	}
	
	this.getData2 = function(callbackFunc) {

		$http.get("js/json1.js").success(function(data){
			console.log(data)
			callbackFunc(data);
		   
		}).error(function(){
			alert("error");
		});
	}
});

app.controller('jsoncntrl',function($scope,httpservice){
	$scope.myjson=null;
	$scope.getjson=function(){

    httpservice.getData(function(dataResponse) {
        $scope.myjson = dataResponse;
        console.log($scope.myjson)
    
    });
	}
	console.log($scope.myjson);
	$scope.deleteFun=function(index){
		
	$scope.myjson.empdetails.splice(index,1);
			
		
		
		
	}
});
	
app.controller('jsoncntrl2',function($scope,httpservice){
	console.log("hj")
	$scope.myjson=null;
	$scope.getjson=function(){

    httpservice.getData2(function(dataResponse) {
        $scope.myjson = dataResponse;
        console.log($scope.myjson)
    
    });
	}
	console.log($scope.myjson);
	$scope.deleteFun=function(index){
		
	$scope.myjson.empdetails.splice(index,1);
			
		
		
		
	}
});
app.directive("httpdirective",function(){
	return{
		restrict:'E',
		scope:{
			data:'=',
			getdetails:'&',
			deletedata:'&'
		},
		templateUrl:'httpjson.html'

	}
});

 