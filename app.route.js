angular.module('meriKitab', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/books', {
      templateUrl: '/features/book/books.html',
      controller: 'bookController'
    })
    .when('/board', {
      templateUrl: '/features/board/board.html',
      controller: 'boardController'
    })
    ;
}]);
