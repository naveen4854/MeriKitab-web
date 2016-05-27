angular.module('meriKitab')
.factory('AuthService',['Session','dataContext', function (Session, dataContext) {
  var authService = {};

  authService.login = function (credentials) {
    return dataContext.postWithParams('/api/login', credentials).success(function(res){
      console.log(res);
      Session.create(res.access_token, '123',
                      'admin'); // TODO update to original api
      return res;
    });
  };

  authService.isAuthenticated = function () {
    //return !!Session && !!Session.userId;
    return !!Session.userId;
  };

  authService.isAuthorized = function (authorizedRoles) {
  //  if (!angular.isArray(authorizedRoles)) {
    //  authorizedRoles = [authorizedRoles];
  //  }
    //return (authService.isAuthenticated() &&
    //  authorizedRoles.indexOf(Session.userRole) !== -1);
    return true;
  };

  return authService;
}]);
