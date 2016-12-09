 var app=angular.module('newsApp',["ui.router"]);
 app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');
   $stateProvider
   .state("index", {
		url:"",
		
		  templateUrl: 'html/home.html'
		
                
        })
		.state("index.news",{
			url:"/news",
			views:{
				"new":{
			templateUrl:'html/news.html'
				}
			}
		})
		.state("index.politics",{
			url:"/politics",
			views:{
				"new":{
			templateUrl:'html/politics.html'
				}
			}
		});
 });
 app.service('politicsService',function($http,$q){
	 this.updates=function(url){
		 var def=$q.defer();
		 $http.get(url).success(def.resolve)
		 .error(def.reject);
		 return def.promise;
		 
	 }
 });
 app.controller('newsCntrl',function($scope,politicsService,$q){
	 var values=[];
	var json1= politicsService.updates('js/politicsjson.js');
	values.push(json1);
	var json2= politicsService.updates('js/politicsjson1.js');
	values.push(json2);
	var json3= politicsService.updates('js/politicsjson2.js');
	values.push(json3);
	console.log(values);
	$q.all(values).then(function(data){
		$scope.news1= data[0];
		console.log($scope.news1);
		
		
		
	 }); 
 });
  app.controller('dateCntrl',function($scope){
	  $scope.date = new Date();
	  console.log($scope.date);
  });
 app.directive('navbarDirective',function(){
		return{
			restrict:'E',
		
		templateUrl:'html/navbar.html'
		}
	});