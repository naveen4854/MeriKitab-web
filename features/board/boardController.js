angular.module('meriKitab')
.controller('boardController',['$scope','$http','boardService',function($scope, $http, boardService){
  $scope.boards = {};
  boardService.getBoards().success(function(data){
    $scope.boards = data;
  });
    //boardService.addBoard();
}]);
