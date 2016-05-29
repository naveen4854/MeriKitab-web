angular.module('meriKitab')
.factory('AuthService',['Session', 'dataContext', '$rootScope', function (Session, dataContext, $rootScope) {
  var authService = {};

  authService.login = function (credentials) {
    return dataContext.postWithParams('/api/login', credentials).success(function(res){
      console.log(res);
      $rootScope.user = res;
      Session.create(res); // TODO update to original api
      return res;
    });
  };

  authService.isAuthenticated = function () {
    //return !!Session && !!Session.userId;
    return !!$rootScope.user;
  };

  authService.isAuthorized = function (authorizedRoles) {
  //  if (!angular.isArray(authorizedRoles)) {
    //  authorizedRoles = [authorizedRoles];
  //  }
    //return (authService.isAuthenticated() &&
    //  authorizedRoles.indexOf(Session.userRole) !== -1);
    return !!$rootScope.user;
  };

  return authService;
}]);
