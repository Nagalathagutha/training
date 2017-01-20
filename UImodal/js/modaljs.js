(function() {
    'use strict';
    angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
})();
(function() {
    'use strict';

    angular
        .module('ui.bootstrap.demo')
        .controller('ModalDemoCtrl', function($uibModal, $log, $document,
            paymentService,commonSerivce) {
            var ctrl = {};
             ctrl.tableData=commonSerivce.displyInTable;
            ctrl.animationsEnabled = true;

            ctrl.open = function(key,index) {

                // var parentElem = parentSelector ?
                //     angular.element($document[0].querySelector('.modal-demo' + parentSelector)) : undefined;
                var modalInstance = $uibModal.open({
                    animation: ctrl.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                     controller: 'ModalInstanceCtrl',
                    templateUrl: 'views/footer.html',
                    controllerAs: 'mI',
                    size: 'lg',
                    // appendTo: parentElem,
                    resolve: {
                        initialData: function() {
                            return {
                            key : key,
                            index : index,
                            
                          }
                          
                        }
                    }
                });


            };

           ctrl.delete=function(key,index){
                $uibModal.open({
                      templateUrl: './Views/deleteModal.html',
                      size : 'md',
                      keyboard:false,
                      backdrop : 'static',
                      controller: 'deleteCntrl',
                      controllerAs: 'dc',
                      resolve : {
                        initialData : function(){
                          return {
                            key : key,
                            index : index
                          }
                        }
                     }
                });

              }
              ctrl.editmodal=function(key,index){
                ctrl.open(key,index)
              }
            return ctrl;

        });
})();

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.




