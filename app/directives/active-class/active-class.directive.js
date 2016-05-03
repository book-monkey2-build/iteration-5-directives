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
var router_1 = require('angular2/router');
var ActiveClassDirective = (function () {
    function ActiveClassDirective(_router) {
        this._router = _router;
    }
    Object.defineProperty(ActiveClassDirective.prototype, "isActive", {
        get: function () {
            return this._router.isRouteActive(this._router.generate(this.routerLink));
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ActiveClassDirective.prototype, "activeClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ActiveClassDirective.prototype, "routerLink", void 0);
    __decorate([
        core_1.HostBinding('class.active'), 
        __metadata('design:type', Boolean)
    ], ActiveClassDirective.prototype, "isActive", null);
    ActiveClassDirective = __decorate([
        core_1.Directive({ selector: '[activeClass]' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ActiveClassDirective);
    return ActiveClassDirective;
}());
exports.ActiveClassDirective = ActiveClassDirective;
//# sourceMappingURL=active-class.directive.js.map