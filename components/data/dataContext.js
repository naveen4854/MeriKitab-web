angular.module('meriKitab')
  .factory('dataContext',['$http','myConfig',function($http, myConfig){
    return {
      postWithParams : function(url,data){
        var req = {
                   method: 'POST',
                   url: myConfig.urlExt + url,
                   data: data
                 };
        return $http(req);
      },
      executeGet : function(url){
        var req = {
                   method: 'GET',
                   url: myConfig.urlExt + url,
                 };
         return $http(req);
       }
    }
  }]);
