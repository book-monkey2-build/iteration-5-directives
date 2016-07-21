"use strict";
var IsbnValidator = (function () {
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
exports.IsbnValidator = IsbnValidator;
//# sourceMappingURL=isbn.validator.js.map