System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IsbnValidator;
    return {
        setters:[],
        execute: function() {
            IsbnValidator = (function () {
                function IsbnValidator() {
                }
                IsbnValidator.isbn = function (control) {
                    var isolatedNumbers = control.value.replace(/\D/g, '');
                    var isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
                    if (!isolatedNumbers.match(isbnPattern))
                        return { "isbn": true };
                    return null;
                };
                return IsbnValidator;
            }());
            exports_1("IsbnValidator", IsbnValidator);
        }
    }
});
//# sourceMappingURL=isbn.validator.js.map