angular.module('routeApp').controller('commitController',['$scope','$stateParams','github', function($scope, $stateParams, github){
    $scope.repoName = $stateParams.repo;
    $scope.folderName = $stateParams.folder;
    $scope.commitName = $stateParams.fName;
    github.getUser($scope.repoName).then(function (data){
        $scope.user = data;
        console.log(data);
        callCommit();
    }, function(data){
        $scope.error=data;
    });
    
    var callCommit = function(){
    github.getCommits($scope.folderName, $scope.commitName).then(function(data){
        $scope.commits = data;
                console.log(data);
            });
    }
    
    var onError = function(data){
        $scope.error=data;
        console.log(data);
    }
    
}]);