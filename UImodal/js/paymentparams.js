
(function() {
    'use strict';
    angular
        .module('ui.bootstrap.demo')
        .controller('paymentParamsCntrl',function(commonSerivce){
        		
        		var ppc={};
        		ppc.paymentParamsDetails={};
        		
                ppc.growthInput=function(info){
                    ppc.paymentParamsDetails.growthType=info;
                }
        		ppc.ChargeAmountInput=function(info){
                    ppc.paymentParamsDetails.chargedata=info;
                }
        		commonSerivce.getAllPaymentParamsDetails(ppc.paymentParamsDetails);
        		return ppc;
        });
})();
