angular.module('meriKitab')
.controller('franchiseController',['$scope','$http','franchiseService',function($scope, $http, franchiseService){
  $scope.franchises = {};
  franchiseService.getFranchise().success(function(data){
    $scope.franchises = data;
  });

  $scope.franchise ={};
  $scope.addBoard = function(){
    franchiseService.addFranchise($scope.franchise).success(function(data){

    });
  }
    //boardService.addBoard();
}]);
