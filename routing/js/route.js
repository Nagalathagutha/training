 var app=angular.module('routeApp',["ui.router"]);
 app.config(function($stateProvider) {
   $stateProvider
    .state("index", {
		url:'',
            templateUrl: 'html/main.html'
            
        })
	.state("kurtas", {
		url:'/kurtas',
            templateUrl: 'html/kurtas.html'
            
        })
		.state("kurtasadetail", {
		url:'/kurtasdetail',
            templateUrl: 'html/kurtasdetail.html'
            
        })
 });
	app.directive('navbarDirective',function(){
		return{
			restrict:'E',
		
		templateUrl:'html/navbar.html'
		}
	});
	 app.controller('routeCntrl',function($scope){
	
	 });