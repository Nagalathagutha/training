var app = angular.module('PaymentApp', ["ui.router"]);
	app.config(function($stateProvider,$urlRouterProvider) {
		
	   $stateProvider
	   .state("modal", {
			url:"/modal",

			  templateUrl: 'html/modal2.html'

	  })
	});
app.directive('paymentAppDirective', function() {
    return {
        restrict: 'E',
       templateUrl: './html/home.html'
    }

});
 


app.service('paymentService', function($http, $q) {
    this.updates = function(url) {
        var def = $q.defer();
        $http.get(url).success(def.resolve)
            .error(def.reject);
        return def.promise;

    }
});
app.controller('paymentCntrl', function($scope, paymentService) {
	$scope.frequencyarray=[];
	$scope.paymentarray=[];
    paymentService.updates('js/c_frequecyType.json').then(function(data) {
        $scope.frequencyvalues = data;
        for(var i=0;i< $scope.frequencyvalues.length;i++){
        	var str=$scope.frequencyvalues[i].path;
        	console.log(str);
        	var res = str.split("\\");
        	$scope.frequencyarray.push(res[2]);
        	console.log($scope.frequencyarray);

        }
        console.log($scope.frequencyvalues);
    });
    frequencydata="";
    $scope.sendtoinput=function(input){
    	$scope.frequencydata=input;

    }
    paymentService.updates('js/c_paymentType.json').then(function(data) {
        $scope.paymentvalues = data;
        for(var i=0;i< $scope.paymentvalues.length;i++){
        	var str=$scope.paymentvalues[i].path;
        	console.log(str);
        	var res = str.split("\\");
        	$scope.paymentarray.push(res[2]);
        	console.log($scope.paymentarray);
        }
        console.log($scope.paymentvalues);
    });
    $scope.paymentdata="";
    $scope.paymentinput=function(input){
    	$scope.paymentdata=input;

    }
    paymentService.updates('js/l_AccountingType.json').then(function(data) {
        $scope.Accountingvalues = data.result;
        console.log($scope.Accountingvalues);
    });
    $scope.paymentinput=function(input){
    	$scope.paymentdata=input;

    }
    paymentService.updates('js/l_ChargeAmountBasis.json').then(function(data) {
        $scope.ChargeAmountvalues = data.result;
        console.log($scope.ChargeAmountvalues);
    });
    paymentService.updates('js/l_GrowthType.json').then(function(data) {
        $scope.Growthvalues = data.result;
        console.log($scope.Growthvalues);
    });
    paymentService.updates('js/l_PaymentDueDay.json').then(function(data) {
        $scope.PaymentDueDayvalues = data.result;
        console.log($scope.PaymentDueDayvalues);
    });
    $scope.PaymentDueDayinput=function(input){
    	$scope.PaymentDueDaydata=input;

    }
    paymentService.updates('js/l_PaymentDueOn.json').then(function(data) {
        $scope.PaymentDueOnvalues = data.result;
        console.log($scope.PaymentDueOnvalues);
    });
    $scope.PaymentDueinput=function(input){
    	$scope.PaymentDuedata=input;

    }
   paymentService.updates('js/l_PaymentTiming.json').then(function(data) {
        $scope.PaymentTimingvalues = data.result;
        console.log($scope.PaymentTimingvalues);
    });
   $scope.PaymentTiminginput=function(input){
    	$scope.PaymentTimingdata=input;

    }
    $scope.openMOdal=function(){
    	 $('#myModal').modal('hide');
    $('#myModal1').modal('show');
    }

});