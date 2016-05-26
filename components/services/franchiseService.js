angular.module('meriKitab')
.factory('franchiseService',['$http','dataContext',function($http, dataContext){
  return {
    getFranchise : function(){
      return dataContext.executeGet("http://localhost:8080/api/board");
    },
    addFranchise : function(obj){
      return dataContext.postWithParams("http://localhost:8080/api/board",obj);
    },
  }
}]);
