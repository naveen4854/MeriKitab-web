angular.module('meriKitab')
  .factory('dataContext',['$http',function($http){
    return {
      postWithParams : function(url,data){
        var req = {
                   method: 'POST',
                   url: "http://localhost:8080" + url,
                   data: data
                 };
        return $http(req);
      },
      executeGet : function(url){
        var req = {
                   method: 'GET',
                   url: "http://localhost:8080" + url,
                 };
         return $http(req);
       }
    }
  }]);
