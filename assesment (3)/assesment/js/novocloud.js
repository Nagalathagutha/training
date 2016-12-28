var app = angular.module('novoCloudApp', ["ui.router"]);
app.directive('novoCloudDirective', function() {
    return {
        restrict: 'E',
        templateUrl: './html/navbar.html'
    }

});
           
app.service('novoService', function($http, $q) {
    this.updates = function(url) {
        var def = $q.defer();
        $http.get(url).success(def.resolve)
            .error(def.reject);
        return def.promise;

    }
});
app.controller('novoCloudCntrl',function($scope, novoService) {
     novoService.updates('js/novocloud.json').then(function(data) {
         $scope.getData = data;
        console.log($scope.getData);


     });
    novoService.updates('js/graph.json').then(function(graphdata) {
         $scope.graphdetails = graphdata.Data;
        console.log($scope.graphdetails);
        displayGraph($scope.graphdetails);
     });
    var displayGraph=function(graphdetails) {
		 console.log(graphdetails)
      var chart = new CanvasJS.Chart("chartContainer",
      {
        animationEnabled: true,
          data: [
            { 

              dataPoints: graphdetails,      
              type: "pie",
               
               indexLabel: "{indexlabel} ${y}"
                    
            }
          ]
      });
      chart.render();
    }

});