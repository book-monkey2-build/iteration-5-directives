"use strict";
var DateValidator = (function () {
    function DateValidator() {
    }
    DateValidator.germanDate = function (control) {
        var germanDatePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
        if (!control.value.match(germanDatePattern))
            return { "germanDate": true };
        return null;
    };
    return DateValidator;
}());
exports.DateValidator = DateValidator;
//# sourceMappingURL=date.validator.js.map