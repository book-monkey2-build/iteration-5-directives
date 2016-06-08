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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var book_store_service_1 = require('../services/books/book-store.service');
var isbn_pipe_1 = require('../pipes/isbn-pipe/isbn-pipe');
var BookDetailsComponent = (function () {
    function BookDetailsComponent(bs, router) {
        this.bs = bs;
        this.router = router;
    }
    BookDetailsComponent.prototype.routerOnActivate = function (seg) {
        var _this = this;
        this.curr = seg;
        this.bs.getSingle(this.curr.getParam('isbn'))
            .subscribe(function (res) { return _this.book = res; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.deleteBook = function () {
        var _this = this;
        if (confirm("Buch wirklich löschen?")) {
            this.bs.delete(this.book.isbn)
                .subscribe(function (res) { return _this.router.navigate(['../'], _this.curr); });
        }
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            selector: 'book-details',
            moduleId: module.id,
            templateUrl: 'book-details.component.html',
            providers: [book_store_service_1.BookStoreService],
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [isbn_pipe_1.IsbnPipe]
        }), 
        __metadata('design:paramtypes', [book_store_service_1.BookStoreService, router_2.Router])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map