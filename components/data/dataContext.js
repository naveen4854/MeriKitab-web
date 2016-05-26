angular.module('meriKitab')
  .factory('dataContext',['$http',function($http){
    return {
      postWithParams : function(url,data){
        var req = {
                   method: 'POST',
                   url: url,

                   data: data
                  }
        return $http(req);
      },
      executeGet : function(url){
        var req = {
                   method: 'GET',
                   url: url,
                  
                  }
         return $http(req);
       }
    }
  }]);
