angular.module('routeApp').controller('repoController',['$scope','$stateParams','github','$location', function($scope, $stateParams, github,$location){
    $scope.repoName = $stateParams.repo;
    $scope.folderName = $stateParams.folder;
    $scope.filName = $stateParams.fName;
    github.getUser($scope.repoName).then(function (data){
        $scope.user = data;
        console.log(data);
        callRepo();
    }, function(data){
        $scope.error=data;
    });
    
    var callRepo = function(){
    github.getSearch($scope.repoName).then(function(data){
        $scope.repos = data.items;
                console.log(data);
            });
    }
    
    $scope.callCommit = function (repo){
                            
    $location.path("/repo/"+$scope.repoName+"/"+repo.owner.login+"/"+repo.name);
                                                        
                                        }                                                    
                                                
    
    var onError = function(data){
        $scope.error=data;
        console.log(data);
    }
    
}]);