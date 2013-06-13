angular.module('member', ['resources.members', 'services.validation']);

angular.module('member').controller('MemberController', function ($scope, Member, Validation, $templateCache) {

    // register new member in scope if none given
    if ($scope.member == undefined) {
        $scope.member = new Member();
    }

    /**
     * start edit mode
     */
    $scope.doedit = function () {

        // backup member
        $scope.backup = angular.copy($scope.member);
        // enable edit mode
        $scope.edit = true;
    };

    /**
     * cancel edit
     */
    $scope.reset = function () {

        // reset model to backup
        angular.extend($scope.member, $scope.backup);
        // cancel edit mode
        $scope.edit = false;
    };

    /**
     * submit changes (or create member)
     */
    $scope.submit = function () {

        $scope.clearValidationErrors();

        var isCreate = $scope.member.id == undefined;

        // success-handler for save-call
        var success = function (result) {
            if (isCreate) {
                // push to model
                $scope.members.push($scope.member);
                // reset to empty form
                $scope.member = new Member();
            } else {
                // updated on server, disable edit mode
                $scope.edit = false;
            }
        };

        // error-handler for save-call
        var error = function (result) {
            // map validation errors, log all other
            if (result.status == 412) {
                Validation.mapValidationErrors($scope.memberForm, result.data);
            } else {
                console.log('error');
            }
        };

        // save to server
        $scope.member.$save({}, success, error);
    };

    /**
     * delete member
     */
    $scope.delete = function () {

        // success-handler for delete-call
        var success = function (result) {
            // deleted on server, remove from model
            $scope.members.splice($scope.members.indexOf($scope.member), 1);
        };

        // delete member
        Member.delete({id: $scope.member.id}, success);
    };

    /**
     * clear validation errors
     */
    $scope.clearValidationErrors = function () {

        Validation.clearAllValidationErrors($scope.memberForm);
    }
});