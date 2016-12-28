webpackJsonp([0,3],{150:function(t,e,n){"use strict";var i=n(0),o=n(308),r=n(682),a=(n.n(r),n(683)),s=(n.n(a),n(216));n.d(e,"a",function(){return l});var u=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.api="https://book-monkey2-api.angular-buch.com",this.headers=new o.a,this.headers.append("Content-Type","application/json")}return t.prototype.getAll=function(){return this.http.get(this.api+"/books").retry(3).map(function(t){return t.json()}).map(function(t){return t.map(function(t){return s.a.fromObject(t)})})},t.prototype.getSingle=function(t){return this.http.get(this.api+"/book/"+t).retry(3).map(function(t){return t.json()}).map(function(t){return s.a.fromObject(t)})},t.prototype.check=function(t){return this.http.get(this.api+"/book/"+t+"/check").map(function(t){return t.json()})},t.prototype.create=function(t){return this.http.post(this.api+"/book",JSON.stringify(t),{headers:this.headers})},t.prototype.update=function(t){return this.http.put(this.api+"/book/"+t.isbn,JSON.stringify(t),{headers:this.headers})},t.prototype.remove=function(t){return this.http.delete(this.api+"/book/"+t)},t=u([n.i(i.Injectable)(),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.b&&o.b)&&e||Object])],t);var e}()},216:function(t,e,n){"use strict";var i=n(336);n.d(e,"a",function(){return o});var o=function(){function t(){}return t.empty=function(){return new i.a("","",[""],new Date,"",0,[{url:"",title:""}],"")},t.fromObject=function(t){return new i.a(t.isbn,t.title,t.authors,"string"==typeof t.published?new Date(t.published):t.published,t.subtitle,t.rating,t.thumbnails,t.description)},t}()},331:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-root",template:n(674)}),r("design:paramtypes",[])],t)}()},332:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(216),a=n(150);n.d(e,"a",function(){return c});var s=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){this.bs=t,this.router=e,this.route=n,this.book=r.a.empty()}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params;this.bs.getSingle(e.isbn).subscribe(function(e){return t.book=e})},t.prototype.getRating=function(t){return new Array(t)},t.prototype.removeBook=function(){var t=this;confirm("Buch wirklich löschen?")&&this.bs.remove(this.book.isbn).subscribe(function(e){return t.router.navigate(["../"],{relativeTo:t.route})})},t=s([n.i(i.Component)({selector:"bm-book-details",template:n(675)}),u("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.a&&a.a)&&e||Object,"function"==typeof(c="undefined"!=typeof o.a&&o.a)&&c||Object,"function"==typeof(l="undefined"!=typeof o.b&&o.b)&&l||Object])],t);var e,c,l}()},333:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(194),a=n(216),s=n(150),u=n(511),c=n(514);n.d(e,"a",function(){return d});var l=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n,i){this.fb=t,this.bs=e,this.route=n,this.router=i,this.book=a.a.empty(),this.errors={},this.isUpdatingBook=!1}return t.prototype.ngOnInit=function(){var t=this,e=this.route.snapshot.params.isbn;e&&(this.isUpdatingBook=!0,this.bs.getSingle(e).subscribe(function(e){t.book=e,t.initBook()})),this.initBook()},t.prototype.initBook=function(){var t=this;this.buildAuthorsArray(),this.buildThumbnailsArray(),this.myForm=this.fb.group({title:[this.book.title,r.Validators.required],subtitle:this.book.subtitle,isbn:[this.book.isbn,[r.Validators.required,c.a.isbnFormat],this.isUpdatingBook?null:c.a.isbnExists(this.bs)],description:this.book.description,authors:this.authors,thumbnails:this.thumbnails,published:this.book.published}),this.myForm.valueChanges.subscribe(function(){return t.updateErrorMessages()})},t.prototype.buildAuthorsArray=function(){this.authors=this.fb.array(this.book.authors,c.a.atLeastOneAuthor)},t.prototype.buildThumbnailsArray=function(){var t=this;this.thumbnails=this.fb.array(this.book.thumbnails.map(function(e){return t.fb.group({url:t.fb.control(e.url),title:t.fb.control(e.title)})}))},t.prototype.addAuthorControl=function(){this.authors.push(this.fb.control(null))},t.prototype.addThumbnailControl=function(){this.thumbnails.push(this.fb.group({url:null,title:null}))},t.prototype.submitForm=function(){var t=this;this.myForm.value.authors=this.myForm.value.authors.filter(function(t){return t}),this.myForm.value.thumbnails=this.myForm.value.thumbnails.filter(function(t){return t.url});var e=a.a.fromObject(this.myForm.value);this.isUpdatingBook?this.bs.update(e).subscribe(function(n){t.router.navigate(["../../books",e.isbn],{relativeTo:t.route})}):this.bs.create(e).subscribe(function(e){t.myForm.reset()})},t.prototype.updateErrorMessages=function(){this.errors={};for(var t=0,e=u.a;t<e.length;t++){var n=e[t],i=this.myForm.get(n.forControl);i&&i.dirty&&i.invalid&&i.errors[n.forValidator]&&!this.errors[n.forControl]&&(this.errors[n.forControl]=n.text)}},t=l([n.i(i.Component)({selector:"bm-book-form",template:n(676)}),f("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.FormBuilder&&r.FormBuilder)&&e||Object,"function"==typeof(d="undefined"!=typeof s.a&&s.a)&&d||Object,"function"==typeof(p="undefined"!=typeof o.b&&o.b)&&p||Object,"function"==typeof(h="undefined"!=typeof o.a&&o.a)&&h||Object])],t);var e,d,p,h}()},334:function(t,e,n){"use strict";var i=n(0),o=n(150);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.bs=t}return t.prototype.ngOnInit=function(){this.booksOb=this.bs.getAll()},t=r([n.i(i.Component)({selector:"bm-book-list",template:n(678)}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},335:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(i.Component)({selector:"bm-home",template:'\n  <div class="ui container">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink="../books" class="ui red button">\n      Buchliste ansehen\n      <i class="right arrow icon"></i>\n    </a>\n  </div>\n  '}),r("design:paramtypes",[])],t)}()},336:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,i,o,r,a,s){this.isbn=t,this.title=e,this.authors=n,this.published=i,this.subtitle=o,this.rating=r,this.thumbnails=a,this.description=s}return t}()},392:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=392},393:function(t,e,n){"use strict";var i=n(519),o=(n.n(i),n(480)),r=n(0),a=n(518),s=n(513);a.a.production&&n.i(r.enableProdMode)(),n.i(o.a)().bootstrapModule(s.a)},509:function(t,e,n){"use strict";var i=n(0),o=n(212),r=n(335),a=n(334),s=n(332),u=n(333);n.d(e,"a",function(){return d});var c=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"books",component:a.a},{path:"books/:isbn",component:s.a},{path:"admin",component:u.a},{path:"admin/:isbn",component:u.a}],d=function(){function t(){}return t=c([n.i(i.NgModule)({imports:[o.c.forRoot(f)],exports:[o.c],providers:[]}),l("design:paramtypes",[])],t)}()},510:function(t,e,n){"use strict";var i=n(147),o=n(194),r=n(308),a=n(0),s=n(331),u=n(335),c=n(334),l=n(512),f=n(332),d=n(333),p=n(150),h=n(509),b=n(520),m=(n.n(b),n(516)),v=n(517),y=n(515);n.d(e,"a",function(){return k});var g=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},k=function(){function t(){}return t=g([n.i(a.NgModule)({declarations:[s.a,u.a,c.a,l.a,f.a,d.a,m.a,v.a,y.a],imports:[i.b,o.FormsModule,o.ReactiveFormsModule,r.c,h.a,b.DateValueAccessorModule],providers:[p.a],bootstrap:[s.a]}),R("design:paramtypes",[])],t)}()},511:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=function(){function t(t,e,n){this.forControl=t,this.forValidator=e,this.text=n}return t}(),o=[new i("title","required","Ein Buchtitel muss angegeben werden"),new i("isbn","required","Es muss eine ISBN angegeben werden"),new i("isbn","isbnFormat","Die ISBN muss aus 10 oder 13 Zeichen bestehen"),new i("isbn","isbnExists","Die ISBN existiert bereits"),new i("published","required","Es muss ein Erscheinungsdatum angegeben werden"),new i("authors","atLeastOneAuthor","Es muss ein Autor angegeben werden")]},512:function(t,e,n){"use strict";var i=n(0),o=n(336);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return r([n.i(i.Input)(),a("design:type","function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(i.Component)({selector:"a.bm-book-list-item",template:n(677)}),a("design:paramtypes",[])],t);var e}()},513:function(t,e,n){"use strict";var i=(n(331),n(510));n.d(e,"a",function(){return i.a})},514:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(){function t(){}return t.isbnFormat=function(t){if(!t.value)return null;var e=t.value.replace(/[-]/g,""),n=/(^\d{10}$)|(^\d{13}$)/g;return n.test(e)?null:{isbnFormat:{valid:!1}}},t.atLeastOneAuthor=function(t){var e=t.controls.some(function(t){return!!t.value});return e?null:{atLeastOneAuthor:{valid:!1}}},t.isbnExists=function(t){return function(e){return t.check(e.value).map(function(t){return t===!1?null:{isbnExists:{valid:!1}}})}},t}()},515:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t,e){this.templateRef=t,this.viewContainerRef=e}return t.prototype.ngOnInit=function(){var t=this;setTimeout(function(){t.viewContainerRef.createEmbeddedView(t.templateRef)},this.bmDelay)},o([n.i(i.Input)(),r("design:type",Object)],t.prototype,"bmDelay",void 0),t=o([n.i(i.Directive)({selector:"[bmDelay]"}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.TemplateRef&&i.TemplateRef)&&e||Object,"function"==typeof(a="undefined"!=typeof i.ViewContainerRef&&i.ViewContainerRef)&&a||Object])],t);var e,a}()},516:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.transform=function(t,e){if(!t||10!==t.length&&13!==t.length)return null;var n="";return e&&(n=10===t.length?"ISBN-10: ":"ISBN-13: "),10===t.length?n+t:""+n+t.substr(0,3)+"-"+t.substr(3)},t=o([n.i(i.Pipe)({name:"isbn"}),r("design:paramtypes",[])],t)}()},517:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.onMouseEnter=function(){this.isZoomed=!0},t.prototype.onMouseLeave=function(){this.isZoomed=!1},o([n.i(i.HostBinding)("class.small"),r("design:type",Boolean)],t.prototype,"isZoomed",void 0),o([n.i(i.HostListener)("mouseenter"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],t.prototype,"onMouseEnter",null),o([n.i(i.HostListener)("mouseleave"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],t.prototype,"onMouseLeave",null),t=o([n.i(i.Directive)({selector:"[bmZoom]"}),r("design:paramtypes",[])],t)}()},518:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},519:function(t,e,n){"use strict";var i=n(535),o=(n.n(i),n(528)),r=(n.n(o),n(524)),a=(n.n(r),n(530)),s=(n.n(a),n(529)),u=(n.n(s),n(527)),c=(n.n(u),n(526)),l=(n.n(c),n(534)),f=(n.n(l),n(523)),d=(n.n(f),n(522)),p=(n.n(d),n(532)),h=(n.n(p),n(525)),b=(n.n(h),n(533)),m=(n.n(b),n(531)),v=(n.n(m),n(536)),y=(n.n(v),n(701));n.n(y)},674:function(t,e){t.exports='<div class="ui three item tabs menu">\n  <a routerLink="home"  routerLinkActive="active" class="item">Home</a>\n  <a routerLink="books" routerLinkActive="active" class="item">Bücher</a>\n  <a routerLink="admin" routerLinkActive="active" class="item">Administration</a>\n</div>\n<router-outlet></router-outlet>\n'},675:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book?.thumbnails && book?.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book?.title }}</h1>\n    <h3 class="ui header">{{ book?.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book?.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book?.isbn | isbn:true }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <span *ngFor="let r of getRating(book?.rating); let i = index">\n          <i class="yellow star icon" *bmDelay="500 + i * 200"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book?.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button class="ui tiny red labeled icon button"\n        (click)="removeBook()">\n  <i class="remove icon"></i> Buch löschen\n</button>\n<a class="ui tiny yellow labeled icon button"\n        [routerLink]="[\'../../admin\', book?.isbn]">\n  <i class="write icon"></i> Buch bearbeiten\n</a>\n'},676:function(t,e){t.exports='<h1>Buchformular</h1>\n<form novalidate\n      class="ui large form"\n      [formGroup]="myForm"\n      (ngSubmit)="submitForm()">\n\n  <div class="field">\n    <label>Buchtitel</label>\n    <input formControlName="title">\n    <div *ngIf="errors.title" class="ui negative message">\n      {{ errors.title }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Untertitel</label>\n    <input formControlName="subtitle">\n  </div>\n  <div class="field" [class.disabled]="isUpdatingBook">\n    <label>ISBN-Nummer</label>\n    <input formControlName="isbn">\n    <div *ngIf="errors.isbn" class="ui negative message">\n      {{ errors.isbn }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Erscheinungsdatum</label>\n    <input type="date" \n           useValueAsDate \n           formControlName="published">\n    <div *ngIf="errors.published" class="ui negative message">\n      {{ errors.published }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Autoren</label>\n    <div class="fields" formArrayName="authors">\n      <div class="fifteen wide field" *ngFor="let control of authors.controls; let i = index">\n        <input [formControlName]="i" placeholder="Autor {{i+1}}">\n      </div>        \n      <div class="one wide field">\n        <button (click)="addAuthorControl()" class="ui large button" type="button"> + </button>\n      </div>\n    </div>\n    <div *ngIf="errors.authors" class="ui negative message">\n      {{ errors.authors }}\n    </div>\n  </div>\n  <div class="field">\n    <label>Beschreibung</label>\n    <textarea formControlName="description" rows="3"></textarea>\n  </div>\n  <div class="field">\n    <label>Bilder</label>\n    <div formArrayName="thumbnails">\n      <div class="fields"\n          *ngFor="let control of thumbnails.controls; let i = index; let l = last" \n          [formGroupName]="i">\n        <div class="nine wide field">\n          <input formControlName="url" placeholder="http://bild{{i+1}}_Url">\n        </div>\n        <div class="six wide field">\n          <input formControlName="title" placeholder="Bild {{i+1}} Titel">\n        </div>\n        <div class="one wide field" *ngIf="l">\n          <button (click)="addThumbnailControl()" class="ui large button" type="button"> + </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <button type="submit" class="ui button" [disabled]="myForm.invalid">Speichern</button>\n</form>'},677:function(t,e){t.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url"\n     bmZoom>\n<div class="content">\n  <div class="header">{{ book?.title }}</div>\n  <div class="description"> {{ book?.subtitle }} </div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">{{ book?.isbn | isbn:true }}</div>\n</div>\n'},678:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of booksOb | async"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n</div>\n'},702:function(t,e,n){t.exports=n(393)}},[702]);
//# sourceMappingURL=main.ff35788c7a6dc8b640d6.bundle.map