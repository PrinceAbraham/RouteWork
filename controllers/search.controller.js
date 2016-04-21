angular.module('routeApp').controller('searchController', ['$scope','$location', function ($scope, $location){

        $scope.searchText="";
        $scope.searchButton = function (text){
        $location.path("/repo/"+text);
    }
}]);