(function(){
	'use strict';
	angular
	.module('ui.bootstrap.demo')
	.controller('deleteCntrl',function(initialData,commonSerivce,$uibModalInstance){
		var deleteData={}
		console.log();
		deleteData.cancelDel=function(){
			// alert('hi');
			$uibModalInstance.dismiss('cancel');

		}
		deleteData.confirmDel=function(){
			
			
			commonSerivce.displyInTable[initialData.key].splice(initialData.index,1);
			$uibModalInstance.dismiss('cancel');
		
		}
		return deleteData;
	})
	
})();