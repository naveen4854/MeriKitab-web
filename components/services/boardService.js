angular.module('meriKitab')
.factory('boardService',['$http','dataContext',function($http, dataContext){
  return {
    getBoards : function(){
      return dataContext.executeGet("http://localhost:8080/api/board");
    },
    addBoard : function(){
      return dataContext.postWithParams("http://localhost:8080/api/board",{'name':'asdasda','type':'SchoolBoard'});
    }
  }
}]);
