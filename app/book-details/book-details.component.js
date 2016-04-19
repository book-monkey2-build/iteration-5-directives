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
var book_store_service_1 = require('../services/books/book-store.service');
var isbn_pipe_1 = require('../pipes/isbn-pipe/isbn-pipe');
var BookDetailsComponent = (function () {
    function BookDetailsComponent(params, bs) {
        this.params = params;
        this.bs = bs;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bs.getSingle(this.params.get('isbn'))
            .subscribe(function (res) { return _this.book = res; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            selector: 'book-details',
            moduleId: module.id,
            templateUrl: 'book-details.html',
            providers: [book_store_service_1.BookStoreService],
            pipes: [isbn_pipe_1.IsbnPipe]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, book_store_service_1.BookStoreService])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map