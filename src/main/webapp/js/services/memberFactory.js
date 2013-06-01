// service for rest-communication with members endpoint

// define module 'memberService', require ngResource (angular rest client)
var memberModule = angular.module('memberFactory', ['ngResource']);

// init factory
memberModule.factory('Member', function ($resource) {

    // map to endpoint, define that the id parameter is extracted from json (id property)
    // also define a list- and a delete-method. for all other operations the defaults are fine.
    return $resource('rest/members/:id', {id: '@id'}, {
        list: {method: 'GET', isArray: true},
        delete: {method: 'DELETE'}
    });
});