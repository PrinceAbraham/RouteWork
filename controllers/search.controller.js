angular.module('routeApp').controller('searchController', ['$scope','$location', function ($scope, $location){

        $scope.searchText="";
        $scope.searchButton = function (text){
        text = text.replace(/ /g,"");
        $location.path("/repo/"+text);
    }
}]);