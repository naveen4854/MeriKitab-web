angular.module('meriKitab')
.factory('boardService',['$http','dataContext',function($http, dataContext){
  return {
    getBoards : function(){
      return dataContext.executeGet("/api/board");
    },
    addBoard : function(obj){
      return dataContext.postWithParams("/api/board",obj);
    },
  }
}]);
