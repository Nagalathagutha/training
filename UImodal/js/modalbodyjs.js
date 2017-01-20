(function() {
    'use strict';

    angular
        .module('ui.bootstrap.demo')
        .controller('ModalInstanceCtrl', function(initialData,$uibModalInstance,commonSerivce,
          paymentService) {
            var mI = {};
            mI.getAllDetails = {};
            var listOfData = {}
             mI.toNext=false;

             mI.showSave=(initialData.key!= undefined)?true:false;
             if(mI.showSave){

                commonSerivce.getDetailsToEdit(initialData.key,initialData.index);
                // mI.getAllEditDetails=commonSerivce.adjustEditDetails;
                // console.log(mI.getAllEditDetails);
                // mI.getAllDetails=initialData.data;
             }
            var jsonFileNames = ['c_paymentType', 'l_AccountingType', 'c_frequecyType',
                'l_PaymentTiming', 'l_PaymentDueDay', 'l_PaymentDueOn', 'l_GrowthType',
                'l_ChargeAmountBasis'
            ];

            for (var index = 0; index < jsonFileNames.length; index++) {

                (function(index) {
                    paymentService.updates("js/" + jsonFileNames[index] + ".json").then(function(data) {
                        var list = data;

                        mI.getAllDetails[jsonFileNames[index]] = []
                        if (Array.isArray(list)) {
                            for (var i = 0; i < list.length; i++) {

                                var pathValue = list[i].path;
                                var splitValue = pathValue.split("\\");
                                listOfData =splitValue[2];
                                mI.getAllDetails[jsonFileNames[index]].push(listOfData);

                            }
                        } else {

                           for (var i = 0; i < list.result.length; i++) {
                            listOfData = list.result[i].value;
                            mI.getAllDetails[jsonFileNames[index]].push(listOfData);
                            
                        }
                      }

                    });


                })(index);
                console.log(mI.getAllDetails);

            }


            //  the close and dismiss bindings are used to close the modal from $uibModalInstance.
           
            mI.next=function(){
               mI.toNext=true;
               // mI.showSave=false;
               commonSerivce.sendDetailsToNext();
            }
            mI.previous=function(){
                 mI.toNext=false;
            }
            mI.ok = function() {
                $uibModalInstance.close();
            };

            mI.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
            mI.save=function(){
                
               mI.saveDetails=commonSerivce.saveAllDetails();
               console.log( mI.saveDetails);
               mI.cancel();
            }
            console.log(initialData.index);
            mI.editDetails=function(){
              // commonSerivce.saveAllDetails();
                 mI.toNext=false;
                 commonSerivce.editAllDetails(initialData.key,initialData.index);
                 mI.cancel();
                 
                console.log(initialData.key);
            }

            //commonSerivce.getAllOptions(mI.getAllDetails);
            return mI
        });
})();
