(function() {
    'use strict';
    angular
        .module('ui.bootstrap.demo')
        .service('commonSerivce',function(){
        	var cs={};
        	cs.getAllDetails={};
            cs.displyInTable={};
            cs.adjustEditDetails={};
            cs.isEditTrue=false;
        	cs.getAllOptions=function(data){
        		cs.getAllOptions=data;
        		console.log(cs.getAllOptions);
        	}
			cs.getAllPaymentDetails=function(data){
				cs.getAllDetails=data;
                
				console.log(cs.getAllDetails);

        	}
            cs.sendDetailsToNext=function(){
                cs.saveDetails=cs.getAllDetails;
            }
            cs.getAllPaymentParamsDetails=function(data){
                cs.saveParamsDetails=data;
            }
            cs.saveAllDetails=function(){
                var clonedData=angular.copy(cs.getAllDetails);
                if(clonedData.paymentdata in cs.displyInTable){
                    cs.displyInTable[clonedData.paymentdata].push(clonedData);
                    console.log(cs.displyInTable);
                    return cs.displyInTable;
                }
                else{
                    cs.displyInTable[clonedData.paymentdata]=[];
                    cs.displyInTable[clonedData.paymentdata].push(clonedData);
                    console.log(cs.displyInTable);
                    return cs.displyInTable;
                }
              }
              cs.getDetailsToEdit=function(key,index){

                cs.adjustEditDetails=cs.displyInTable[key][index]
                return cs.adjustEditDetails;

              }
              
              cs.isEdit=function(){
                console.log(cs.adjustEditDetails);
                if(cs.adjustEditDetails!= undefined){
                cs.isEditTrue=true;
            }
                return cs.isEditTrue;
              };
              cs.editAllDetails=function(key,index){
                var clonedEditData=angular.copy(cs.getAllDetails);
                
                    cs.displyInTable[key][index]=clonedEditData;
                    console.log(cs.displyInTable);
                    return cs.displyInTable;
               


              }

        	return cs;
        })
    })();