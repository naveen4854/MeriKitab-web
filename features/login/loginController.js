angular.module('meriKitab')
.controller('LoginController', function ($scope, $rootScope, myConfig, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials)
    .then(function (res) {
      $rootScope.$broadcast(myConfig.AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(res.data);
    }, function () {
      $rootScope.$broadcast(myConfig.AUTH_EVENTS.loginFailed);
    });
  };
})
