angular.module('meriKitab')
.factory('boardService',['$http','dataContext',function($http, dataContext){
  return {
    getBoards : function(){
      return dataContext.executeGet("http://localhost:8080/api/board");
    },
    addBoard : function(obj){
      return dataContext.postWithParams("http://localhost:8080/api/board",obj);
    },


    addFranchise : function(obj){
      return dataContext.postWithParams("http://localhost:8080/api/franchise",obj);
    }
  }
}]);
