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
var home_component_1 = require('./home/home.component');
var books_component_1 = require('./books/books.component');
var form_component_1 = require('./form/form.component');
var active_class_directive_1 = require('./directives/active-class/active-class.directive');
var BookMonkeyApp = (function () {
    function BookMonkeyApp() {
    }
    BookMonkeyApp = __decorate([
        router_1.RouteConfig([
            { path: 'home/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: 'books/...', name: 'Books', component: books_component_1.BooksComponent },
            { path: 'admin/', name: 'Admin', component: form_component_1.FormComponent }
        ]),
        core_1.Component({
            selector: 'book-monkey-app',
            moduleId: module.id,
            templateUrl: 'book-monkey.html',
            directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], BookMonkeyApp);
    return BookMonkeyApp;
}());
exports.BookMonkeyApp = BookMonkeyApp;
//# sourceMappingURL=book-monkey.js.map