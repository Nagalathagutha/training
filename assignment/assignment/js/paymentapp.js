var app = angular.module('PaymentApp', []);
	
app.directive('paymentAppDirective', function() {
    return {
        restrict: 'E',
       templateUrl: 'html/home.html'
    }
});
    app.directive('modal2Directive', function() {
    return {
        restrict: 'E',
       templateUrl: 'html/modal2.html'
    }

});
     app.directive('alertModalDirective', function() {
    return {
        restrict: 'E',
       templateUrl: 'html/popups.html'
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
   
    $scope.paymentinput=function(input){
    	$scope.paymentdata=input;

    }
    paymentService.updates('js/l_AccountingType.json').then(function(data) {
        $scope.Accountingvalues = data.result;
        console.log($scope.Accountingvalues);
    });
    $scope.Accountinginput=function(input){
    	$scope.Accountingdata=input;

    }
    paymentService.updates('js/l_ChargeAmountBasis.json').then(function(data) {
        $scope.ChargeAmountvalues = data.result;
        console.log($scope.ChargeAmountvalues);
    });
	$scope.ChargeAmountinput=function(input){
    	$scope.ChargeAmountdata=input;
		

    }
    paymentService.updates('js/l_GrowthType.json').then(function(data) {
        $scope.Growthvalues = data.result;
        console.log($scope.Growthvalues);
    });
	$scope.Growthinput=function(input){
    	$scope.Growthdata=input;

    }
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
    $scope.showIcon=false;
    $scope.openMOdal=function(){
        $scope.showIcon=true;
    	 $('#myModal').modal('hide');
    $('#myModal1').modal('show');
    }
     $scope.editmodal=function(){

        $('#myModal').modal('show');
        $scope.showIcon=true;

     }
     $scope.saveEditDetails=function(){
        $('#myModal').modal('hide');
        $('#myModal2').modal('show');

     }

     $scope.firstModal=function(){
        $('#myModal').modal('show');
        $scope.showIcon=false;
     }
	$scope.totaldetails=[];

	$scope.savedata=function(){
         $scope.showIcon=false;
		var getdetails={};
		getdetails.frequency=$scope.frequencydata;
		getdetails.payment=$scope.paymentdata;
		getdetails.date=$scope.date;
		getdetails.Accountingdata=$scope.Accountingdata;
		getdetails.ChargeAmountdata=$scope.ChargeAmountdata;
		getdetails.Growthdata=$scope.Growthdata;
		getdetails.PaymentDueDaydata=$scope.PaymentDueDaydata;
		getdetails.PaymentDuedata=$scope.PaymentDuedata;
		getdetails.PaymentTimingdata=$scope.PaymentTimingdata;
         $scope.totaldetails.push
         ({ "paymentType": $scope.paymentdata, "dataObj": getdetails });
         console.log($scope.totaldetails);
		 $('#myModal1').modal('hide');
	}
    $scope.saveEditeddata=function(){
        $scope.totaldetails=[];
         $scope.showIcon=false;
        var getdetails={};
        getdetails.frequency=$scope.frequencydata;
        getdetails.payment=$scope.paymentdata;
        getdetails.date=$scope.date;
        getdetails.Accountingdata=$scope.Accountingdata;
        getdetails.ChargeAmountdata=$scope.ChargeAmountdata;
        getdetails.Growthdata=$scope.Growthdata;
        getdetails.PaymentDueDaydata=$scope.PaymentDueDaydata;
        getdetails.PaymentDuedata=$scope.PaymentDuedata;
        getdetails.PaymentTimingdata=$scope.PaymentTimingdata;
        $scope.totaldetails.push
         ({ "paymentType": $scope.paymentdata, "dataObj": getdetails });
         console.log($scope.totaldetails);
         $('#myModal1').modal('hide');
    }

});