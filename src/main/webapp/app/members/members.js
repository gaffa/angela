angular.module('members', ['resources.members', 'member']);

angular.module('members').controller('MembersController', function ($scope, Member) {

    // load all members
    $scope.members = Member.list();
});