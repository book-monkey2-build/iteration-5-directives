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
var common_1 = require('@angular/common');
var isbn_validator_1 = require('../validators/isbn.validator');
var book_1 = require('../domain/book');
var book_store_service_1 = require('../services/books/book-store.service');
var BookFormComponent = (function () {
    function BookFormComponent(fb, bs) {
        this.fb = fb;
        this.bs = bs;
        this.isUpdatingBook = false;
        this.initBook();
    }
    BookFormComponent.prototype.routerOnActivate = function (curr) {
        var _this = this;
        var isbn = curr.getParam('isbn');
        if (isbn) {
            this.isUpdatingBook = true;
            this.bs.getSingle(isbn)
                .subscribe(function (b) { return _this.initBook(b); });
        }
    };
    BookFormComponent.prototype.initBook = function (book) {
        var _this = this;
        if (!book)
            book = new book_1.Book('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
        this.myForm = this.fb.group({
            title: [book.title, common_1.Validators.required],
            subtitle: [book.subtitle],
            isbn: [book.isbn, common_1.Validators.compose([
                    common_1.Validators.required,
                    isbn_validator_1.IsbnValidator.isbn
                ])],
            description: [book.description],
            authors: this.fb.array(book.authors, common_1.Validators.required),
            thumbnails: this.fb.array(book.thumbnails.map(function (t) { return _this.fb.group({
                url: _this.fb.control(t.url, common_1.Validators.required),
                title: _this.fb.control(t.title)
            }); })),
            published: [book.published] // , DateValidator.germanDate
        });
        // this allows us to manipulate the form at runtime
        this.authorsControlArray = this.myForm.controls['authors'];
        this.thumbnailsControlArray = this.myForm.controls['thumbnails'];
    };
    BookFormComponent.prototype.addAuthorControl = function () {
        this.authorsControlArray.push(this.fb.control(''));
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: [''] }));
    };
    BookFormComponent.prototype.submitForm = function (formData) {
        this.isUpdatingBook
            ? this.bs.update(formData.value)
                .subscribe(function (res) { return res; })
            : this.bs.create(formData.value)
                .subscribe(function (res) { return res; });
    };
    BookFormComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            moduleId: module.id,
            templateUrl: 'book-form.component.html',
            providers: [book_store_service_1.BookStoreService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, book_store_service_1.BookStoreService])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map