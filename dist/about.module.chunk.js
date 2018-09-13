webpackJsonp(["about.module"],{

/***/ "../../../../../src/app/modules/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_routing__ = __webpack_require__("../../../../../src/app/modules/about/about.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_about_main_about_component__ = __webpack_require__("../../../../../src/app/modules/about/main-about/main-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__policy_about_policy_about_component__ = __webpack_require__("../../../../../src/app/modules/about/policy-about/policy-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_about_terms_about_component__ = __webpack_require__("../../../../../src/app/modules/about/terms-about/terms-about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__about_routing__["a" /* AboutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__["a" /* NglModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__main_about_main_about_component__["a" /* MainAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__policy_about_policy_about_component__["a" /* PolicyAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__terms_about_terms_about_component__["a" /* TermsAboutComponent */]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/about/about.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_about_main_about_component__ = __webpack_require__("../../../../../src/app/modules/about/main-about/main-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__policy_about_policy_about_component__ = __webpack_require__("../../../../../src/app/modules/about/policy-about/policy-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_about_terms_about_component__ = __webpack_require__("../../../../../src/app/modules/about/terms-about/terms-about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { StoreAboutComponent } from './store-about/store-about.component';
// import { VoucherListAboutComponent } from './store-about/voucher-list-about/voucher-list-about.component';
// import { VoucherItemAboutComponent } from './store-about/voucher-item-about/voucher-item-about.component';
var AboutRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_about_main_about_component__["a" /* MainAboutComponent */], children: [
            { path: '', redirectTo: 'policy', pathMatch: 'full' },
            {
                path: 'policy', component: __WEBPACK_IMPORTED_MODULE_3__policy_about_policy_about_component__["a" /* PolicyAboutComponent */]
            },
            {
                path: 'terms', component: __WEBPACK_IMPORTED_MODULE_4__terms_about_terms_about_component__["a" /* TermsAboutComponent */]
            }
        ]
    }
];
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(AboutRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/about/main-about/main-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content-photo {\r\n  background-color: #CFD8DC;\r\n  height: 300px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.main-content-actions {\r\n display: -webkit-box;\r\n display: -ms-flexbox;\r\n display: flex;\r\n -webkit-box-orient: horizontal;\r\n -webkit-box-direction: normal;\r\n     -ms-flex-direction: row;\r\n         flex-direction: row;\r\n -webkit-box-pack: end;\r\n     -ms-flex-pack: end;\r\n         justify-content: flex-end;\r\n}\r\n\r\n.container-menu {\r\n  background-color: #F5F5F5;\r\n  padding: 25px 10px;\r\n  border-bottom: 1px solid #E0E0E0;\r\n}\r\n\r\n.navbar-menu {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  color: #373737;\r\n  border-radius: 4px;\r\n  /*background-color: #fff;*/\r\n}\r\n\r\n.navbar-menu .menu {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-menu .menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  transition: background-color .5s ease;\r\n  text-align: center;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.navbar-menu .menu a {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: #373737;\r\n  font-weight: bold;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.navbar-menu .menu a>.fa {\r\n  font-weight: bold;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navbar-menu .menu a:hover {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-menu .menu li:hover {\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-menu .menu li:hover .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-menu a.active {\r\n  border: 1px solid #348a41;\r\n}\r\n\r\n.navbar-menu a.active:after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: -16px;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 8px solid transparent;\r\n  border-top-color: #348a41;\r\n}\r\n\r\n.navbar-menu li:hover a.active:after {\r\n  content: '';\r\n  border-top-color: #26502d;\r\n}\r\n\r\n.navbar-categories {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  color: #fff;\r\n  border-radius: 0px 0px 4px 4px;\r\n  background-color: #348a41;\r\n}\r\n\r\n.navbar-categories .menu {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-categories .menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  transition: background-color .5s ease;\r\n  text-align: center;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.navbar-categories .menu a {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 20px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.navbar-categories .menu a>.fa {\r\n  font-weight: bold;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navbar-categories .menu li:hover {\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-categories .menu li:hover .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.embed-nav a.active {\r\n    border: 1px solid #348a41;\r\n    color: #000;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n}\r\n\r\n.embed-nav a.active:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    border-top: 8px solid #ccc;\r\n    border-left: 8px solid transparent;\r\n    border-right: 8px solid transparent;\r\n    margin-left: -8px;\r\n}\r\n\r\n.embed-nav a.active:after {\r\n    border-top-color: #348a41;\r\n}\r\n\r\n.embed-nav a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    position: relative;\r\n    padding: 8px 16px 8px;\r\n    color: #949494;\r\n    font-size: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/about/main-about/main-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <iframe class=\"mapgoogle\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\r\n          src=\"http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed\"></iframe>\r\n\r\n  <div class=\"container-menu\">\r\n    <nav class=\"navbar-menu embed-nav\">\r\n      <ul class=\"menu\">\r\n        <li *ngFor=\"let item of menuList\">\r\n          <a [routerLink]=\"[item.path]\" routerLinkActive=\"active\">{{ item.title }}</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/about/main-about/main-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainAboutComponent = (function () {
    function MainAboutComponent(route, router) {
        this.route = route;
        this.router = router;
        this.menuList = [
            // { title: "Our Mission", path: "mission" },
            { title: "Privacy policy", path: "policy" },
            { title: "Terms of Use", path: "terms" }
            // { title: "Our Interns", path:"interns" },
            // { title: "Our Content Specialists", path:"specialists" },
            // { title: "Our Board", path:"board" }
        ];
    }
    MainAboutComponent.prototype.ngOnInit = function () {
    };
    MainAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-about',
            template: __webpack_require__("../../../../../src/app/modules/about/main-about/main-about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/about/main-about/main-about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], MainAboutComponent);
    return MainAboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/about/policy-about/policy-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/about/policy-about/policy-about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  policy works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/about/policy-about/policy-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyAboutComponent = (function () {
    function PolicyAboutComponent() {
    }
    PolicyAboutComponent.prototype.ngOnInit = function () {
    };
    PolicyAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-policy-about',
            template: __webpack_require__("../../../../../src/app/modules/about/policy-about/policy-about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/about/policy-about/policy-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyAboutComponent);
    return PolicyAboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/about/terms-about/terms-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/about/terms-about/terms-about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  terms works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/about/terms-about/terms-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsAboutComponent = (function () {
    function TermsAboutComponent() {
    }
    TermsAboutComponent.prototype.ngOnInit = function () {
    };
    TermsAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-about',
            template: __webpack_require__("../../../../../src/app/modules/about/terms-about/terms-about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/about/terms-about/terms-about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsAboutComponent);
    return TermsAboutComponent;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map