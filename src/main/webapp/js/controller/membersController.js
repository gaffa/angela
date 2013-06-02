// controller for "view members"
function MembersController($scope, Member) {

    // load all members
    $scope.members = Member.list();
}