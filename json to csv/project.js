	
var app=angular.module('myapp',[]);
	app.controller('mycntrl',function($scope,$window){
		$scope.empno="";
		$scope.name="";
		$scope.designation="";
		$scope.exp="";
		$scope.dob="";
		$scope.doj="";
		$scope.empdatabase=[];
		
		$scope.addemp=function(){
			$scope.shows=false;
			$scope.show=false;
			
			if($scope.empno==""||$scope.name=="" ||$scope.description=="" ||$scope.exp=="" ||$scope.dob=="" ||$scope.doj==""){
				alert("cant left fields empty");
			}
			else{
			
				var emp={}
				emp.empno=$scope.empno;
				emp.name=$scope.name;
				emp.designation=$scope.designation;
				emp.exp=$scope.exp;
				emp.dob=$scope.dob;
				emp.doj=$scope.doj;
				$scope.empdatabase.push(emp);
				
				console.log($scope.empdatabase);
					
				
				alert("details entered");
			}
		}
			
	
	$scope.details=$scope.empdatabase;
	$scope.editdetails=function(x){

		$scope.show=true;
		$scope.shows=true;
		$scope.empno=x.empno;
		$scope.name=x.name;
		$scope.designation=x.designation;
		$scope.exp=x.exp;
		$scope.dob=x.dob;
		$scope.doj=x.doj;

		$scope.details=$scope.empdatabase;
		$scope.updatedetails=function(){
		
			for(i=0;i<$scope.empdatabase.length;i++){
				
				if($scope.empdatabase[i].empno==x.empno){
					$scope.empdatabase[i].empno=$scope.empno;
					$scope.empdatabase[i].name=$scope.name;
					$scope.empdatabase[i].designation=$scope.designation;
					$scope.empdatabase[i].exp=$scope.exp;
					$scope.empdatabase[i].dob=$scope.dob;
					$scope.empdatabase[i].doj=$scope.doj;
			
				}
			}
		
		
		}
	}
	$scope.deletedetails=function(x){
		for(i=0;i<$scope.empdatabase.length;i++){
				
			$scope.empdatabase.splice(i,1)
					
		}
			
	}
	$scope.toemployee=function(){
		$scope.shows=false;
		$scope.show=false;
		
	}
	$scope.convertJsonToCsv=function(){
		var json3 = $scope.empdatabase;

		DownloadJSON2CSV(json3);

		function DownloadJSON2CSV(objArray)
		{
			var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

			var str = '';

			for (var i = 0; i < array.length; i++) {
				var line = '';

				for (var index in array[i]) {
					line += array[i][index] + ',';
				}

				str += line + '\r\n';
			}
			window.open( "data:text/csv;charset=utf-8," + escape(str))
		}

	}

});
