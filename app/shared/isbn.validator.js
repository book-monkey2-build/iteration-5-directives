"use strict";
function validateIsbn(control) {
    var isolatedNumbers = control.value.replace(/\D/g, '');
    var isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
    return isbnPattern.test(isolatedNumbers) ? null : {
        validateIsbn: { valid: false }
    };
}
exports.validateIsbn = validateIsbn;
//# sourceMappingURL=isbn.validator.js.map