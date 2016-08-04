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
var forms_1 = require('@angular/forms');
var isbn_validator_1 = require('../shared/isbn.validator');
var book_1 = require('../shared/book');
var book_store_service_1 = require('../shared/book-store.service');
var BookFormComponent = (function () {
    function BookFormComponent(fb, bs, route) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUpdatingBook = false;
        this.initBook();
        this.route.params.subscribe(function (params) {
            var isbn = params['isbn'];
            if (isbn) {
                _this.isUpdatingBook = true;
                _this.bs.getSingle(isbn)
                    .subscribe(function (b) { return _this.initBook(b); });
            }
        });
    };
    BookFormComponent.prototype.initBook = function (book) {
        var _this = this;
        if (!book)
            book = new book_1.Book('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
        this.myForm = this.fb.group({
            title: [book.title, forms_1.Validators.required],
            subtitle: [book.subtitle],
            isbn: [book.isbn, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    isbn_validator_1.validateIsbn
                ])],
            description: [book.description],
            authors: this.fb.array(book.authors, forms_1.Validators.required),
            thumbnails: this.fb.array(book.thumbnails.map(function (t) { return _this.fb.group({
                url: _this.fb.control(t.url, forms_1.Validators.required),
                title: _this.fb.control(t.title)
            }); })),
            published: [
                book.published,
                forms_1.Validators.pattern('([1-9]|0[1-9]|(1|2)[0-9]|3[0-1])\.([1-9]|0[1-9]|1[0-2])\.[0-9]{4}')
            ]
        });
        // this allows us to manipulate the form at runtime
        this.authorsFormArray = this.myForm.controls['authors'];
        this.thumbnailsFormArray = this.myForm.controls['thumbnails'];
    };
    BookFormComponent.prototype.addAuthorControl = function () {
        this.authorsFormArray.push(this.fb.control(''));
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.thumbnailsFormArray.push(this.fb.group({ url: [''], title: [''] }));
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
            providers: [book_store_service_1.BookStoreService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, book_store_service_1.BookStoreService, router_1.ActivatedRoute])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;
//# sourceMappingURL=book-form.component.js.map