// controller for "view members"
function MembersController($scope, Member, Validation) {

    // load all members
    $scope.members = Member.list();

    /**
     * add member
     */
    $scope.add = function (newMember) {

        // clear validation errors
        $scope.clearValidationErrors();

        // success-handler for save-call
        var success = function (result) {

            // successfully pushed to server, now push to model
            $scope.members.push(member);

            // clear input
            $scope.newMember.name = "";
        };

        // error-handler for save-call
        var error = function (result) {

            // error occured
            if (result.status == 412) {
                Validation.mapValidationErrors($scope.addMemberForm, result.data);
            } else {
                console.log('error');
            }
        }

        // store new member
        var member = new Member();
        angular.extend(member, newMember);
        member.$save({}, success, error);
    };

    /**
     * clear validation errors
     */
    $scope.clearValidationErrors = function () {
        Validation.clearAllValidationErrors($scope.addMemberForm);
    }
}