(function () {
    'use strict';

    angular
        .module('ui.bootstrap.demo')
.service('paymentService', function($http, $q) {
	var files=[];
    this.updates = function(url) {
    	console.log(url)
        var def = $q.defer();
        $http.get(url).success(def.resolve)
            .error(def.reject);

        return def.promise;


    }
   
});
})();
