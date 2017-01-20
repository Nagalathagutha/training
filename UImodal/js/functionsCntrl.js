
(function() {
    'use strict';
    angular
        .module('ui.bootstrap.demo')
        .controller('functionsCntrl',function(commonSerivce){
        		
        		var fnc={};
        		fnc.paymentDetails={};
                fnc.paymentDetails.paymentdata=null,
                fnc.paymentDetails.accountingdata=null,
                fnc.paymentDetails.frequencydata=null,
                    console.log(commonSerivce.isEdit())
                    console.log(commonSerivce.isEditTrue);
                if(commonSerivce.isEditTrue){
                    fnc.paymentDetails.paymentdata=
                    commonSerivce.adjustEditDetails.paymentdata;
                    fnc.paymentDetails.accountingdata=
                    commonSerivce.adjustEditDetails.accountingdata;
                    fnc.paymentDetails.frequencydata=
                    commonSerivce.adjustEditDetails.frequencydata;

                }
                // commonSerivce.adjustEditDetails
                // mI.showSave=(initialData.key!= undefined)?true:false;
             // if(mI.showSave){
             //    commonSerivce.getDetailsToEdit(initialData.key,initialData.index);
             //    mI.getAllEditDetails=commonSerivce.adjustEditDetails;
             //    console.log(mI.getAllEditDetails);
             //    fnc.paymentDetails.paymentdata=
             //    fnc.paymentDetails.accountingdata
             //    // mI.getAllDetails=initialData.data;
             // }
        		
        		fnc.paymentinput=function(info){
        			
        			fnc.paymentDetails.paymentdata=info;

        		}
        		fnc.Accountinginput=function(info){
        			fnc.paymentDetails.accountingdata=info;
        		}
        		fnc.FrequencyInput=function(info){
        			fnc.paymentDetails.frequencydata=info;
        		}

        		commonSerivce.getAllPaymentDetails(fnc.paymentDetails);
        		return fnc;
        });
})();
