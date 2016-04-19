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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = location.hostname === 'localhost' ? 'http://localhost:3000' : 'http://book-monkey2-api.angular2buch.de';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .map(function (response) { return response.json(); });
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .map(function (response) { return response.json(); });
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers });
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers });
    };
    BookStoreService.prototype.delete = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn);
    };
    BookStoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BookStoreService);
    return BookStoreService;
}());
exports.BookStoreService = BookStoreService;
//# sourceMappingURL=book-store.service.js.map