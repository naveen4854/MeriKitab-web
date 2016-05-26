angular.module('meriKitab', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/board', {
      templateUrl: '/features/board/board.html',
      controller: 'boardController'
    })
    ;
}]);
