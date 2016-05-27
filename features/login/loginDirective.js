angular.module('meriKitab')
.directive('loginDialog', function (myConfig) {
  return {
    restrict: 'A',
    template: '<div ng-if="visible" ng-include="\'/features/login/login.html\'">',
    controller: 'LoginController',
    link: function (scope) {
      var showDialog = function () {
        scope.visible = true;
      };
      var hideDialog = function () {
        scope.visible = false;
      };

      scope.visible = false;
      scope.$on(myConfig.AUTH_EVENTS.notAuthenticated, showDialog);
      scope.$on(myConfig.AUTH_EVENTS.sessionTimeout, showDialog);
      scope.$on(myConfig.AUTH_EVENTS.loginFailed, showDialog);
      scope.$on(myConfig.AUTH_EVENTS.loginSuccess, hideDialog);
    }
  };
})
