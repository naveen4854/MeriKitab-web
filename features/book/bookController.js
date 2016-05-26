angular.module('meriKitab')
.controller('bookController',['$scope','$http','bookService',function($scope, $http, bookService){
  //asd
  $scope.books =[
      {id:0,name:'dev'},
      {id:0,name:'tpasd'},
      {id:0,name:'uat'},
      {id:0,name:'tes'}
    ];
    bookService.getBooks();
}]);
