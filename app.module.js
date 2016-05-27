angular.module('meriKitab', ['ui.router']);
angular.module('meriKitab')
.run(function ($rootScope, myConfig, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    //var authorizedRoles = next.data.authorizedRoles;
    var authorizedRoles = [myConfig.USER_ROLES.admin, myConfig.USER_ROLES.editor]
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(myConfig.AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(myConfig.AUTH_EVENTS.notAuthenticated);
      }
    }
  });
})
.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})
.factory('AuthInterceptor', function ($rootScope, $q,
                                      myConfig) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: myConfig.AUTH_EVENTS.notAuthenticated,
        403: myConfig.AUTH_EVENTS.notAuthorized,
        419: myConfig.AUTH_EVENTS.sessionTimeout,
        440: myConfig.AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }
  };
});
