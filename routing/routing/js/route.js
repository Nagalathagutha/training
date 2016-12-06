 var app=angular.module('routeApp',["ui.router"]);
 app.config(function($stateProvider) {
   $stateProvider
    .state("index", {
		url:"",
		views: {
                "nav": {
                    templateUrl: 'html/navbar.html'
                },
                "temp": {
                    templateUrl: 'html/main.html'
                }
            }
            
            
        })
 
	.state("kurtas", {
		url:'/kurtas',
		views: {
                "nav": {
                    templateUrl: 'html/navbar.html'
                },
                "temp": {
                    templateUrl: 'html/kurtas.html'
                }
            }
          
            
        })
		
	.state("kurtasdetail", {
		url:'/kurtasdetail',
		views: {
                "nav": {
                    templateUrl: 'html/navbar.html'
                },
                "temp": {
                    templateUrl: 'html/kurtasdetail.html'
                }
            }
        
            
        })
	.state("shirtdetails", {
		url:'/shirtdetails',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/shirtdetails.html'
                }
            }
           
            
        })
	.state("shirt", {
		url:'/shirt',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/shirt.html'
                }
            }
           
            
        })
	.state("watches", {
		url:'/watches',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/watches.html'
                }
            }
                
        })
	.state("watchdetail", {
		url:'/watchdetail',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/watchdetail.html'
                }
            }
   
            
        })
		  
	.state("women", {
		url:'/women',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/women.html'
                }
			}
            
        })
	.state("men", {
		url:'/men',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/men.html'
                }
			}
            
        })
		.state("sales", {
		url:'/sales',
		views: {
			"nav": {
                    templateUrl: 'html/navbar.html'
                },
                
                "temp": {
                    templateUrl: 'html/sales.html'
                }
			}
         
        })
 });
	/*app.directive('navbarDirective',function(){
		return{
			restrict:'E',
		
		templateUrl:'html/navbar.html'
		}
	});*/
	 app.controller('routeCntrl',function($scope){
	
	 });