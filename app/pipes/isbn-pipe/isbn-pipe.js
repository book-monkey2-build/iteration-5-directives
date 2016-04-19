"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var IsbnPipe = (function () {
    function IsbnPipe() {
    }
    IsbnPipe.prototype.transform = function (value, args) {
        if (!value || value.length !== 10 && value.length !== 13)
            return null;
        var prefix = '';
        if (args[0]) {
            prefix = (value.length === 10) ? 'ISBN-10: ' : 'ISBN-13: ';
        }
        if (value.length === 10)
            return prefix + value;
        else
            return "" + prefix + value.substr(0, 3) + "-" + value.substr(3);
    };
    IsbnPipe = __decorate([
        core_1.Pipe({
            name: 'isbn'
        }), 
        __metadata('design:paramtypes', [])
    ], IsbnPipe);
    return IsbnPipe;
}());
exports.IsbnPipe = IsbnPipe;
//# sourceMappingURL=isbn-pipe.js.map