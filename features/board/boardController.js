angular.module('meriKitab')
.controller('boardController',['$scope','$http','boardService',function($scope, $http, boardService){
  $scope.books =[
      {id:0,name:'dev'},
      {id:0,name:'tpasd'},
      {id:0,name:'uat'},
      {id:0,name:'tes'}
    ];
    //boardService.addBoard();
    boardService.getBoards();
}]);
