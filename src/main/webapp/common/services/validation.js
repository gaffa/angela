// service providing operation for form manipulation based on server validation response

// define module 'validationService', require nothing
angular.module('services.validation', []).factory('Validation', function () {

    var validationService = {};

    /**
     * clears all validation errors in given form
     */
    validationService.clearAllValidationErrors = function (form) {

        // iterate over control candidates
        for (var control in form) {
            // only treat real controls
            if (control[0] != '$') {
                // actually clear validation errors for control
                validationService.clearControlValidationErrors(form[control]);
            }
        }
    };

    /**
     * clears validation errors for given control
     */
    validationService.clearControlValidationErrors = function (control) {

        control.$setValidity(control.name, true);
        control.serverError = undefined;
    };

    /**
     * maps all given errors to given form. note that the map keys must match the controls names in the form
     */
    validationService.mapValidationErrors = function (form, validationErrorMap) {

        Object.keys(validationErrorMap).forEach(function (key) {

            var control = form[key];
            control.serverError = validationErrorMap[key];
            control.$setValidity(control.name, false);
        });
    };

    return validationService;
});