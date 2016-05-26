angular.module('meriKitab')
.directive('header', function () {
    return {
        restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        //scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
        templateUrl: "/features/header/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});
