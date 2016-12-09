var app=angular.module('promiseapp',[]);
app.service('promiseservice',function($http,$q){
	
	this.getjson=function(url){
		var info=$q.defer();
		$http.get(url).success(info.resolve)
		.error(info.reject);
		return info.promise;
			
	}
});
	app.controller('promisecntrl',function($scope,promiseservice){
		
		promiseservice.getjson('js/json.js').then(function(data){
			$scope.getdetails=data;
			console.log($scope.getdetails);
		});
	});