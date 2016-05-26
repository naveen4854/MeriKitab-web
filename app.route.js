angular.module('meriKitab', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/board', {
      templateUrl: '/features/board/board.html',
      controller: 'boardController'
    })
    .when('/franchise', {
      templateUrl: '/features/franchise/franchise.html',
      controller: 'franchiseController'
    })
    .otherwise({redirectTo: '/'});
    ;
}]);
