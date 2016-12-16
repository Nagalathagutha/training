var app=angular.module('registrationApp',["ui.router"]);
	app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');
   $stateProvider
   .state("home", {
			url:"/",
			views:{
				home:{
					 templateUrl: 'html/home.html'
				}
			}		
		})
		.state("login", {
			url:"/login",
			
			 views:{
				login:{
					templateUrl: 'html/login.html'
				}
			}		
				
		})
		.state("education", {
			url:"/education",
			 
			 views:{
				education:{
					 templateUrl: 'html/education.html'
				}
			}	
				
		})
		.state("professional", {
			url:"/professional",
			
			
			views:{
				profession:{
					 templateUrl: 'html/professional.html'
				}
			}
			
					
		});
	});
	app.controller('registrationCntrl',function($scope,$rootScope){
		$scope.logindetails={};
		console.log($scope.logindetails);
		$scope.handleClick = function () {
			$rootScope.$broadcast('eventName', $scope.logindetails);
			console.log($scope.logindetails);
		}
		
	});
	app.controller('educationalCntrl',function($scope,$rootScope){
		$scope.education=[]
		$scope.educationdetails={};
		console.log($scope.educationdetails);
		$scope.education.push($scope.educationdetails);
		console.log($scope.education);
	
		$rootScope.$on('eventName', function (event, args) {
			console.log(args);
			$scope.education.push(args);
			console.log($scope.education);
		
		});
		$scope.clickFunc = function () {
			$rootScope.$broadcast('eventSection', $scope.education);
			console.log($scope.education);
		}
		
	});
	app.controller('professionalCntrl',function($scope,$rootScope){
		
		$scope.professionaldetails={};
		console.log($scope.professionaldetails);
		$rootScope.$on('eventName', function (event, args ) {
			$scope.edu = args;
			console.log($scope.edu);
		});
		$rootScope.$on('eventSection', function (event, args ) {
			$scope.qualification=args;
			$scope.qualification.push($scope.professionaldetails);
			console.log($scope.qualification);
		});
		
	});