System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DateValidator;
    return {
        setters:[],
        execute: function() {
            DateValidator = (function () {
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
            exports_1("DateValidator", DateValidator);
        }
    }
});
//# sourceMappingURL=date.validator.js.map