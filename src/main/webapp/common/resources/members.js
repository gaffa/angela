// service for rest-communication with members endpoint

angular.module('resources.members', ['ngResource']);

// init factory
angular.module('resources.members').factory('Member', function ($resource) {

    // map to endpoint, define that the id parameter is extracted from json (id property)
    // also define a list- and a delete-method. for all other operations the defaults are fine.
    return $resource('rest/members/:id', {id: '@id'}, {
        list: {method: 'GET', isArray: true},
        delete: {method: 'DELETE'}
    });
});