 var app=angular.module('newsApp',["ui.router"]);
 app.config(function($stateProvider,$urlRouterProvider) {
	 $urlRouterProvider.otherwise('/');
   $stateProvider
   .state("index", {
		url:"",

		  templateUrl: 'html/home.html'


        })
		.state("news",{
			url:"/news",
			views:{
				"new":{
			templateUrl:'html/news.html'
				}
			}
		})
		.state("politics",{
			url:"/politics",
			views:{
				"new":{
			templateUrl:'html/politics.html'
				}
			}
		})
		.state("weather",{
			url:"/weather",
			views:{
				"new":{
			templateUrl:'html/weather.html'
				}
			}
		})
		.state("indianbusiness",{
			url:"/indianbusiness",
			views:{
				"new":{
			templateUrl:'html/indianbusiness.html'
				}
			}
		})
		.state("tennis",{
			url:"/tennis",
			views:{
				"new":{
			templateUrl:'html/tennis.html'
				}
			}
		})
		.state("hyderabad",{
			url:"/hyderabad",
			views:{
				"new":{
			templateUrl:'html/hyderabad.html'
				}
			}
		})
		.state("delhi",{
			url:"/delhi",
			views:{
				"new":{
			templateUrl:'html/delhi.html'
				}
			}
		})
		.state("us",{
			url:"/us",
			views:{
				"new":{
			templateUrl:'html/us.html'
				}
			}
		})
		.state("china",{
			url:"/china",
			views:{
				"new":{
			templateUrl:'html/china.html'
				}
			}
		})
		.state("pakistan",{
			url:"/pakistan",
			views:{
				"new":{
			templateUrl:'html/pakistan.html'
				}
			}
		})
		.state("international",{
			url:"/international",
			views:{
				"new":{
			templateUrl:'html/international.html'
				}
			}
		})
		.state("market",{
			url:"/market",
			views:{
				"new":{
			templateUrl:'html/market.html'
				}
			}
		})
		.state("tech",{
			url:"/tech",
			views:{
				"new":{
			templateUrl:'html/tech.html'
				}
			}
		})
		.state("gadget",{
			url:"/gadget",
			views:{
				"new":{
			templateUrl:'html/gadget.html'
				}
			}
		})
		.state("review",{
			url:"/review",
			views:{
				"new":{
			templateUrl:'html/review.html'
				}
			}
		})
		.state("footbal",{
			url:"/footbal",
			views:{
				"new":{
			templateUrl:'html/footbal.html'
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

	console.log(values);
	$q.all(values).then(function(data){
		$scope.news1 = data[0];
		console.log($scope.news1);
		$scope.name=data[1];
		console.log($scope.name);


	 });
 });
  app.controller('dateCntrl',function($scope){
	  $scope.date = new Date();
	  console.log($scope.date);
  });
  app.controller('loginCntrl',function($scope,loginFactory,$location){
    $scope.name="";
    $scope.mailid="";
    $scope.password="";
    
    $scope.submit=function(){
      $scope.loginData=loginFactory.saveData($scope.name,$scope.mailid,$scope.password);
      console.log($scope.loginData);

    }

  });
  app.service('loginFactory',function(){

      this.saveData=function(name,mailid,password){
        var details={};
        details.name=name;
        details.mailid=mailid;
        details.password=password;
        console.log(details);
        return details;
      }

  })

 app.directive('navbarDirective',function(){
		return{
			restrict:'E',

		templateUrl:'html/navbar.html'
		}
	});
