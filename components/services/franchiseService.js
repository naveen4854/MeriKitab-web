angular.module('meriKitab')
.factory('franchiseService',['$http','dataContext',function($http, dataContext){
  return {
    getFranchise : function(){
      return dataContext.executeGet("/api/franchise");
    },
    addFranchise : function(obj){
      return dataContext.postWithParams("/api/franchise",obj);
    },
  }
}]);
