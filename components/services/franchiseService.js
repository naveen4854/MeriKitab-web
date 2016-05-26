angular.module('meriKitab')
.factory('franchiseService',['$http','dataContext',function($http, dataContext){
  return {
    getFranchise : function(){
      return dataContext.executeGet("http://localhost:8080/api/franchise");
    },
    addFranchise : function(obj){
      return dataContext.postWithParams("http://localhost:8080/api/franchise",obj);
    },
  }
}]);
