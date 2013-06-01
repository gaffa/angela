// main application configuration

// define module 'angela' with dependencies to memberService and validationService
var appModule = angular.module('angela', ['memberFactory', 'validationService']);

// configure module
appModule.config(
    [
        // configure routes
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/viewmembers', {templateUrl: 'partials/membersview.html', controller: MembersController});
            $routeProvider.otherwise({redirectTo: '/viewmembers'});
        }
    ]
);