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
var book_1 = require('../domain/book');
var isbn_pipe_1 = require('../pipes/isbn-pipe/isbn-pipe');
var BookListItem = (function () {
    function BookListItem() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookListItem.prototype, "book", void 0);
    BookListItem = __decorate([
        core_1.Component({
            selector: '.book-list-item',
            moduleId: module.id,
            templateUrl: 'book-list-item.component.html',
            pipes: [isbn_pipe_1.IsbnPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItem);
    return BookListItem;
}());
exports.BookListItem = BookListItem;
//# sourceMappingURL=book-list-item.component.js.map