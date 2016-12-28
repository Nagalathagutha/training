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
    
    /* novoService.updates('js/graph.json').then(function(graphdata) {
         $scope.graphdetails = graphdata;
        console.log($scope.graphdetails);
        displayGraph($scope.graphdetails);

     });*/
     var displayGraph=function() {
		// console.log(graphdetails)
      var chart = new CanvasJS.Chart("chartContainer",
      {

        animationEnabled: true,
      legend:{
       verticalAlign: "bottom",
       horizontalAlign: "center"
     },

        data: [
        {       
          type: "pie",
         
          toolTipContent: "{name}: <strong>${y}</strong>",
              indexLabel: "{name} ${y}",
              dataPoints: [
                    {  y: 46615.06, name: "Harvest Cost", exploded: true},
                    {  y: 2740.00, name: "Transport Cost" },
                    { y: 3519.75, name: "Cooling Cost" },
                    {  y: 5658.75, name: "Packing Cost"},
                    {  y: 20576.00, name: "Growing Cost" }
                      ]
                    }
       ]
      });
      chart.render();
    }();
});