angular.module('meriKitab')
.controller('franchiseController',['$scope','$http','franchiseService','boardService',function($scope, $http, franchiseService, boardService){
  $scope.franchises = {};
  $scope.boards = {};
  $scope.franchise ={};
  $scope.boardId ={};

  boardService.getBoards().success(function(data){
    $scope.boards = data;
  });

  franchiseService.getFranchise().success(function(data){
    $scope.franchises = data;
  });

  $scope.addFranchise = function(){
    franchiseService.addFranchise($scope.franchise).success(function(data){
      franchiseService.getFranchise().success(function(data){
        $scope.franchises = data;
      });
    });

  }
    //boardService.addBoard();
}]);
