webpackJsonp([1,4],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFactory; });

var BookFactory = (function () {
    function BookFactory() {
    }
    BookFactory.empty = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */]('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
    };
    BookFactory.fromObject = function (rawBook) {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */](rawBook.isbn, rawBook.title, rawBook.authors, typeof (rawBook.published) === 'string' ?
            new Date(rawBook.published) : rawBook.published, rawBook.subtitle, rawBook.rating, rawBook.thumbnails, rawBook.description);
    };
    return BookFactory;
}());

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-factory.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = (function () {
    function BookDetailsComponent(bs, router, route) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.book = __WEBPACK_IMPORTED_MODULE_2__shared_book_factory__["a" /* BookFactory */].empty();
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        this.bs.getSingle(params['isbn'])
            .subscribe(function (b) { return _this.book = b; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        var _this = this;
        if (confirm('Buch wirklich löschen?')) {
            this.bs.remove(this.book.isbn)
                .subscribe(function (res) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bm-book-details',
        template: __webpack_require__(531)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], BookDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-details.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_book_factory__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_book_store_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_form_error_messages__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_book_validators__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookFormComponent = (function () {
    function BookFormComponent(fb, bs, route, router) {
        this.fb = fb;
        this.bs = bs;
        this.route = route;
        this.router = router;
        this.book = __WEBPACK_IMPORTED_MODULE_3__shared_book_factory__["a" /* BookFactory */].empty();
        this.errors = {};
        this.isUpdatingBook = false;
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isbn = this.route.snapshot.params['isbn'];
        if (isbn) {
            this.isUpdatingBook = true;
            this.bs.getSingle(isbn)
                .subscribe(function (book) {
                _this.book = book;
                _this.initBook();
            });
        }
        this.initBook();
    };
    BookFormComponent.prototype.initBook = function () {
        var _this = this;
        this.buildAuthorsArray();
        this.buildThumbnailsArray();
        this.myForm = this.fb.group({
            title: [this.book.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            subtitle: this.book.subtitle,
            isbn: [this.book.isbn, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_6__shared_book_validators__["a" /* BookValidators */].isbnFormat
                ], this.isUpdatingBook ? null : __WEBPACK_IMPORTED_MODULE_6__shared_book_validators__["a" /* BookValidators */].isbnExists(this.bs)],
            description: this.book.description,
            authors: this.authors,
            thumbnails: this.thumbnails,
            published: this.book.published
        });
        this.myForm.statusChanges.subscribe(function () { return _this.updateErrorMessages(); });
    };
    BookFormComponent.prototype.buildAuthorsArray = function () {
        this.authors = this.fb.array(this.book.authors, __WEBPACK_IMPORTED_MODULE_6__shared_book_validators__["a" /* BookValidators */].atLeastOneAuthor);
    };
    BookFormComponent.prototype.buildThumbnailsArray = function () {
        var _this = this;
        this.thumbnails = this.fb.array(this.book.thumbnails.map(function (t) { return _this.fb.group({
            url: _this.fb.control(t.url),
            title: _this.fb.control(t.title)
        }); }));
    };
    BookFormComponent.prototype.addAuthorControl = function () {
        this.authors.push(this.fb.control(null));
    };
    BookFormComponent.prototype.addThumbnailControl = function () {
        this.thumbnails.push(this.fb.group({ url: null, title: null }));
    };
    BookFormComponent.prototype.submitForm = function () {
        var _this = this;
        // filter empty values
        this.myForm.value.authors = this.myForm.value.authors.filter(function (author) { return author; });
        this.myForm.value.thumbnails = this.myForm.value.thumbnails.filter(function (thumbnail) { return thumbnail.url; });
        var book = __WEBPACK_IMPORTED_MODULE_3__shared_book_factory__["a" /* BookFactory */].fromObject(this.myForm.value);
        if (this.isUpdatingBook) {
            this.bs.update(book).subscribe(function (res) {
                _this.router.navigate(['../../books', book.isbn], { relativeTo: _this.route });
            });
        }
        else {
            this.bs.create(book).subscribe(function (res) {
                _this.book = __WEBPACK_IMPORTED_MODULE_3__shared_book_factory__["a" /* BookFactory */].empty();
                _this.myForm.reset(__WEBPACK_IMPORTED_MODULE_3__shared_book_factory__["a" /* BookFactory */].empty());
            });
        }
    };
    BookFormComponent.prototype.updateErrorMessages = function () {
        this.errors = {};
        for (var _i = 0, BookFormErrorMessages_1 = __WEBPACK_IMPORTED_MODULE_5__book_form_error_messages__["a" /* BookFormErrorMessages */]; _i < BookFormErrorMessages_1.length; _i++) {
            var message = BookFormErrorMessages_1[_i];
            var control = this.myForm.get(message.forControl);
            if (control &&
                control.dirty &&
                control.invalid &&
                control.errors[message.forValidator] &&
                !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }
    };
    return BookFormComponent;
}());
BookFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bm-book-form',
        template: __webpack_require__(532)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_book_store_service__["a" /* BookStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_book_store_service__["a" /* BookStoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], BookFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-form.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books$ = this.bs.getAll();
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bm-book-list',
        template: __webpack_require__(534)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */]) === "function" && _a || Object])
], BookListComponent);

var _a;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.bookSelected = function (book) {
        this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'bm-home',
        template: "\n  <div class=\"ui container two column grid\">\n\n    <div class=\"ui container column\">\n      <h1>Home</h1>\n      <p>Das ist der BookMonkey.</p>\n      <a routerLink=\"../books\" class=\"ui red button\">\n        Buchliste ansehen\n        <i class=\"right arrow icon\"></i>\n      </a>\n    </div>\n\n    <bm-search (bookSelected)=\"bookSelected($event)\" class=\"column\"></bm-search>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/home.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(463);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_details_book_details_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_form_book_form_component__ = __webpack_require__(311);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: 'books/:isbn',
        component: __WEBPACK_IMPORTED_MODULE_4__book_details_book_details_component__["a" /* BookDetailsComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_5__book_form_book_form_component__["a" /* BookFormComponent */]
    },
    {
        path: 'admin/:isbn',
        component: __WEBPACK_IMPORTED_MODULE_5__book_form_book_form_component__["a" /* BookFormComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app-routing.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bm-root',
        template: __webpack_require__(530)
    })
], AppComponent);

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_list_book_list_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_list_item_book_list_item_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_details_book_details_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_book_store_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_isbn_pipe__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_zoom_directive__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_delay_directive__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__book_list_item_book_list_item_component__["a" /* BookListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__book_details_book_details_component__["a" /* BookDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__book_form_book_form_component__["a" /* BookFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_isbn_pipe__["a" /* IsbnPipe */],
            __WEBPACK_IMPORTED_MODULE_15__shared_zoom_directive__["a" /* ZoomDirective */],
            __WEBPACK_IMPORTED_MODULE_16__shared_delay_directive__["a" /* DelayDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_date_value_accessor__["DateValueAccessorModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__shared_book_store_service__["a" /* BookStoreService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["LOCALE_ID"], useValue: 'de' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFormErrorMessages; });
var ErrorMessage = (function () {
    function ErrorMessage(forControl, forValidator, text) {
        this.forControl = forControl;
        this.forValidator = forValidator;
        this.text = text;
    }
    return ErrorMessage;
}());

var BookFormErrorMessages = [
    new ErrorMessage('title', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ErrorMessage('isbn', 'required', 'Es muss eine ISBN angegeben werden'),
    new ErrorMessage('isbn', 'isbnFormat', 'Die ISBN muss aus 10 oder 13 Zeichen bestehen'),
    new ErrorMessage('isbn', 'isbnExists', 'Die ISBN existiert bereits'),
    new ErrorMessage('published', 'required', 'Es muss ein Erscheinungsdatum angegeben werden'),
    new ErrorMessage('authors', 'atLeastOneAuthor', 'Es muss ein Autor angegeben werden')
];
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-form-error-messages.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListItemComponent = (function () {
    function BookListItemComponent() {
    }
    return BookListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === "function" && _a || Object)
], BookListItemComponent.prototype, "book", void 0);
BookListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'a.bm-book-list-item',
        template: __webpack_require__(533)
    })
], BookListItemComponent);

var _a;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list-item.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(bs) {
        this.bs = bs;
        this.isLoading = false;
        this.foundBooks = [];
        this.bookSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyup
            .debounceTime(500)
            .distinctUntilChanged()
            .do(function () { return _this.isLoading = true; })
            .switchMap(function (searchTerm) { return _this.bs.getAllSearch(searchTerm); })
            .do(function () { return _this.isLoading = false; })
            .subscribe(function (books) { return _this.foundBooks = books; });
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "bookSelected", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bm-search',
        template: __webpack_require__(535)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/search.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookValidators; });
var BookValidators = (function () {
    function BookValidators() {
    }
    BookValidators.isbnFormat = function (control) {
        if (!control.value) {
            return null;
        }
        var isolatedNumbers = control.value.replace(/-/g, '');
        var isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
        return isbnPattern.test(isolatedNumbers) ? null : {
            isbnFormat: { valid: false }
        };
    };
    BookValidators.atLeastOneAuthor = function (controlArray) {
        var check = controlArray.controls.some(function (el) {
            return (el.value) ? true : false;
        });
        return check ? null : {
            atLeastOneAuthor: { valid: false }
        };
    };
    BookValidators.isbnExists = function (bs) {
        return function (control) {
            return bs.check(control.value)
                .map(function (exists) { return (exists === false) ? null : {
                isbnExists: { valid: false }
            }; });
        };
    };
    return BookValidators;
}());

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.validators.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelayDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DelayDirective = (function () {
    function DelayDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    DelayDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewContainerRef.createEmbeddedView(_this.templateRef);
        }, this.bmDelay);
    };
    return DelayDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DelayDirective.prototype, "bmDelay", void 0);
DelayDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[bmDelay]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], DelayDirective);

var _a, _b;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/delay.directive.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsbnPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsbnPipe = (function () {
    function IsbnPipe() {
    }
    IsbnPipe.prototype.transform = function (value, addPrefix) {
        if (!value || value.length !== 10 && value.length !== 13) {
            return null;
        }
        var prefix = '';
        if (addPrefix) {
            prefix = (value.length === 10) ? 'ISBN-10: ' : 'ISBN-13: ';
        }
        if (value.length === 10) {
            return prefix + value;
        }
        else {
            return "" + prefix + value.substr(0, 3) + "-" + value.substr(3);
        }
    };
    return IsbnPipe;
}());
IsbnPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'isbn'
    })
], IsbnPipe);

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/isbn.pipe.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZoomDirective = (function () {
    function ZoomDirective() {
    }
    ZoomDirective.prototype.onMouseEnter = function () {
        this.isZoomed = true;
    };
    ZoomDirective.prototype.onMouseLeave = function () {
        this.isZoomed = false;
    };
    return ZoomDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.small'),
    __metadata("design:type", Boolean)
], ZoomDirective.prototype, "isZoomed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZoomDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ZoomDirective.prototype, "onMouseLeave", null);
ZoomDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[bmZoom]' })
], ZoomDirective);

//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/zoom.directive.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/environment.js.map

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui three item tabs menu\">\n  <a routerLink=\"home\"  routerLinkActive=\"active\" class=\"item\">Home</a>\n  <a routerLink=\"books\" routerLinkActive=\"active\" class=\"item\">Bücher</a>\n  <a routerLink=\"admin\" routerLinkActive=\"active\" class=\"item\">Administration</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" [src]=\"book?.thumbnails && book?.thumbnails[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book?.title }}</h1>\n    <h3 class=\"ui header\">{{ book?.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book?.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book?.isbn | isbn:true }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book?.published | date:'longDate' }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <span *ngFor=\"let r of getRating(book?.rating); let i = index\">\n          <i class=\"yellow star icon\" *bmDelay=\"500 + i * 200\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book?.thumbnails\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button class=\"ui tiny red labeled icon button\"\n        (click)=\"removeBook()\">\n  <i class=\"remove icon\"></i> Buch löschen\n</button>\n<a class=\"ui tiny yellow labeled icon button\"\n   [routerLink]=\"['../../admin', book?.isbn]\">\n  <i class=\"write icon\"></i> Buch bearbeiten\n</a>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<h1>Buchformular</h1>\n<form class=\"ui large form\"\n      [formGroup]=\"myForm\"\n      (ngSubmit)=\"submitForm()\">\n\n  <div class=\"field\">\n    <label>Buchtitel</label>\n    <input formControlName=\"title\">\n    <div *ngIf=\"errors.title\" class=\"ui negative message\">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Untertitel</label>\n    <input formControlName=\"subtitle\">\n  </div>\n  <div class=\"field\" [class.disabled]=\"isUpdatingBook\">\n    <label>ISBN-Nummer</label>\n    <input formControlName=\"isbn\">\n    <div *ngIf=\"errors.isbn\" class=\"ui negative message\">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Erscheinungsdatum</label>\n    <input type=\"date\"\n           useValueAsDate\n           formControlName=\"published\">\n    <div *ngIf=\"errors.published\" class=\"ui negative message\">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Autoren</label>\n    <div class=\"fields\" formArrayName=\"authors\">\n      <div class=\"fifteen wide field\" *ngFor=\"let control of authors.controls; let i = index\">\n        <input [formControlName]=\"i\" placeholder=\"Autor {{i+1}}\">\n      </div>\n      <div class=\"one wide field\">\n        <button (click)=\"addAuthorControl()\" class=\"ui large button\" type=\"button\"> + </button>\n      </div>\n    </div>\n    <div *ngIf=\"errors.authors\" class=\"ui negative message\">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Beschreibung</label>\n    <textarea formControlName=\"description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"field\">\n    <label>Bilder</label>\n    <div formArrayName=\"thumbnails\">\n      <div class=\"fields\"\n          *ngFor=\"let control of thumbnails.controls; let i = index; let l = last\"\n          [formGroupName]=\"i\">\n        <div class=\"nine wide field\">\n          <input formControlName=\"url\" placeholder=\"http://bild{{i+1}}_Url\">\n        </div>\n        <div class=\"six wide field\">\n          <input formControlName=\"title\" placeholder=\"Bild {{i+1}} Titel\">\n        </div>\n        <div class=\"one wide field\" *ngIf=\"l\">\n          <button (click)=\"addThumbnailControl()\" class=\"ui large button\" type=\"button\"> + </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"myForm.invalid\">Speichern</button>\n</form>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails\"\n     [src]=\"book.thumbnails[0].url\"\n     bmZoom>\n<div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div class=\"description\">{{ book.subtitle }}</div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">{{ book.isbn | isbn:true }}</div>\n</div>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\"\n     *ngIf=\"books$ | async; else loading; let books\">\n  <a class=\"bm-book-list-item item\"\n     *ngFor=\"let b of books\"\n     [book]=\"b\"\n     [routerLink]=\"b.isbn\"></a>\n  <p *ngIf=\"!books.length\">Es wurden noch keine Bücher eingetragen.</p>\n</div>\n<template #loading>\n  <div class=\"ui active dimmer\">\n    <div class=\"ui large text loader\">Daten werden geladen...</div>\n  </div>\n</template>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui search\"  [ngClass]=\"{ loading: isLoading }\">\r\n  <div class=\"ui icon input\">\r\n    <input (keyup)=\"keyup.emit(searchTerm.value)\" #searchTerm class=\"prompt\" type=\"text\" placeholder=\"Search...\">\r\n    <i class=\"search icon\"></i>\r\n  </div>\r\n  <div class=\"results transition\" [ngClass]=\"{ visible: foundBooks.length }\">\r\n\r\n    <a href (click)=\"bookSelected.emit(book); false\" class=\"result\" *ngFor=\"let book of foundBooks\">\r\n      <div class=\"content\">\r\n        <div class=\"title\" >{{ book.title }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_factory__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = 'https://book-monkey2-api.angular-buch.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.check = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn + "/check")
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn)
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    BookStoreService.prototype.getAllSearch = function (searchTerm) {
        return this.http
            .get(this.api + "/books/search/" + searchTerm)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    return BookStoreService;
}());
BookStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookStoreService);

var _a;
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-store.service.js.map

/***/ })

},[576]);
//# sourceMappingURL=main.bundle.map