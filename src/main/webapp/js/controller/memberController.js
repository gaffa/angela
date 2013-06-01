// controller for 'edit member' (ng-repeat in 'view members')
function MemberController($scope, Member, Validation) {

    // will help keeping a backup of members while they are edited to allow resetting them
    $scope.backup = {};
    // represents edit/view toggle-state
    $scope.edit = {};

    /**
     * start edit mode
     */
    $scope.edit = function (member) {

        // backup member
        $scope.backup[member.id] = angular.copy(member);
        // enable edit mode
        $scope.edit[member.id] = true;
    };

    /**
     * cancel edit
     */
    $scope.reset = function (member) {

        // reset model to backup
        angular.extend(member, $scope.backup[member.id]);
        // cancel edit mode
        $scope.edit[member.id] = false;
    };

    /**
     * submit changes
     */
    $scope.submit = function (member) {

        // success-handler for save-call
        var success = function (result) {

            // updated on server, disable edit mode
            $scope.edit[member.id] = false;
        };

        // error-handler for save-call
        var error = function (result) {

            // map validation errors, log all other
            if (result.status == 412) {
                Validation.mapValidationErrors($scope.editMemberForm, result.data);
            } else {
                console.log('error');
            }
        };

        // save to server
        member.$save({}, success, error);
    };

    /**
     * delete member
     */
    $scope.delete = function (member) {

        // success-handler for delete-call
        var success = function (result) {

            // deleted on server, remove from model
            $scope.members.splice($scope.members.indexOf(member), 1);
        };

        // delete member
        Member.delete({id: member.id}, success);
    };

    /**
     * clear validation errors
     */
    $scope.clearValidationErrors = function () {
        Validation.clearAllValidationErrors($scope.editMemberForm);
    }
}