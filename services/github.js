angular.module("routeApp").service('github', function ($http, $q){
    
    return ({
        getSearch:getSearch,
        getUser:getUser,
        getCommits:getCommits
    });
    
    function getSearch(repoName){
        
                    var request = $http({
                        method: "get",
                        url: "https://api.github.com/search/repositories?q="+repoName,
                                        });
                    return( request.then( handleSuccess, handleError ) );
        
    }
    
    function getUser(username){
        
        var request = $http({
                        method: "get",
                        url: "https://api.github.com/users/"+username,
                                        });
                    return( request.then( handleSuccess, handleError ) );
        
    }
    
    function getCommits(repName, fileName){
        
        var request = $http({
                        method: "get",
                        url: "https://api.github.com/repos/"+repName+"/"+fileName+"/commits",
                                        });
                    return( request.then( handleSuccess, handleError ) );
        
    }
    
    
    function handleError( response ) {
                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {
                        return( $q.reject( "An unknown error occurred." ) );
                    }
                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );
                }
                // I transform the successful response, unwrapping the application data
                // from the API response payload.
                function handleSuccess( response ) {
                    return( response.data );
                }
});