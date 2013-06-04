// service providing operation for form manipulation based on server validation response

// define module 'validationService', require nothing
var validationModule = angular.module('validationService', []);

// init service
validationModule.service('Validation', function () {

    /**
     * clears all validation errors in given form
     */
    this.clearAllValidationErrors = function (form) {

        // iterate over control candidates
        for (var control in form) {
            // only treat real controls
            if (control[0] != '$') {
                // actually clear validation errors for control
                this.clearControlValidationErrors(form[control]);
            }
        }
    };

    /**
     * clears validation errors for given control
     */
    this.clearControlValidationErrors = function (control) {

        control.$setValidity(control.name, true);
        control.serverError = undefined;
    };

    /**
     * maps all given errors to given form. note that the map keys must match the controls names in the form
     */
    this.mapValidationErrors = function (form, validationErrorMap) {

        Object.keys(validationErrorMap).forEach(function (key) {

            var control = form[key];
            control.serverError = validationErrorMap[key];
            control.$setValidity(control.name, false);
        });
    };
});