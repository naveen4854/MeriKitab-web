angular.module('meriKitab')
.controller('applicationController',['$scope','myConfig','AuthService', function ($scope,  myConfig, AuthService) {
    $scope.currentUser = {name:'naveen'};
    $scope.userRoles = myConfig.USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
}]);
