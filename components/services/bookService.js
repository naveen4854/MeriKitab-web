angular.module('meriKitab')
.factory('bookService',['$http','dataContext',function($http, dataContext){
    return {
      getBooks : function(){
        return dataContext.executeGet("http://localhost:8080/api/board");
      }
    }
}]);
