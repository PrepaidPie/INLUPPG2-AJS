var app = angular
    .module('module', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl : "sort-view/brick.html"
        })
    })

   .controller('controller', function($scope) {
        $scope.products = products;

        $scope.sortColumn = "productname";
        $scope.itemsTotal = $scope.products.length;

        $scope.brickActive = true; 
    })