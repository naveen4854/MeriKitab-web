angular.module('meriKitab')
.controller('boardController',['$scope','$http','boardService',function($scope, $http, boardService){
  $scope.boards = {};
  boardService.getBoards().success(function(data){
    $scope.boards = data;
  });

  $scope.board ={};
  $scope.addBoard = function(){
    boardService.addBoard($scope.board).success(function(data){
      boardService.getBoards().success(function(data){
        $scope.boards = data;
      });
    });
  }
}]);
