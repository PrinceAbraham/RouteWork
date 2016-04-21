angular.module("routeApp",["ui.router"]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    //console.log('test')
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
        url: '/',
        templateUrl: 'partials/search.html',
        controller: 'searchController'
    })
        .state('/repo/:repo',{
        url:'/repo/:repo',
        templateUrl: 'partials/repoDetails.html',
        controller: 'repoController'
    })
        .state('/repo/:repo/:folder/:fName',{
        url:'/repo/:repo/:folder/:fName',
        templateUrl: 'partials/commitDetails.html',
        controller: 'commitController'
               });
}]);

