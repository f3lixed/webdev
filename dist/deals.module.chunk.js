webpackJsonp(["deals.module"],{

/***/ "../../../../../src/app/modules/deals/deals-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_deals_main_deals_component__ = __webpack_require__("../../../../../src/app/modules/deals/main-deals/main-deals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var dealsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_deals_main_deals_component__["a" /* MainDealsComponent */] }
];
var DealsRoutingModule = (function () {
    function DealsRoutingModule() {
    }
    DealsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(dealsRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DealsRoutingModule);
    return DealsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/deals/deals.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsModule", function() { return DealsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deals_routing_module__ = __webpack_require__("../../../../../src/app/modules/deals/deals-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_deals_main_deals_component__ = __webpack_require__("../../../../../src/app/modules/deals/main-deals/main-deals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_voucher__ = __webpack_require__("../../../../../src/app/common/components/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DealsModule = (function () {
    function DealsModule() {
    }
    DealsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__deals_routing_module__["a" /* DealsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_components_voucher__["a" /* VoucherCardModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__["a" /* NglModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__main_deals_main_deals_component__["a" /* MainDealsComponent */]]
        })
    ], DealsModule);
    return DealsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/deals/main-deals/main-deals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-slide-deals{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tbox-shadow: 0 10px 75px rgba(52, 138, 65, 0.8);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.indicators-deals{\r\n\tleft: 20%;\r\n}\r\n.indicators-deals li{\r\n\tbackground-color: #fff;\r\n}\r\n.indicators-deals .active{\r\n\tbackground-color: #348a41;\r\n\tborder:1px solid #348a41;\r\n}\r\n.title-deals-spotlight{\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 50px;\r\n}\r\n.title-deals-spotlight h1{\r\n\tfont-size: 50px;\r\n\tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n.carousel-caption{\r\n\ttext-shadow: 0 1px 2px rgba(0,0,0,.4);\r\n\ttop: 0%;\r\n\tleft: 0%;\r\n\tright: 59%;\r\n\tbackground-image: url(" + __webpack_require__("../../../../../src/assets/images/background-deals-slide.png") + ");\r\n\tbackground-size: contain;\r\n\tbackground-repeat: no-repeat;\r\n\tbottom: 0%;\r\n}\r\n.carousel-caption p{\r\n\tpadding: 20px 20px 20px 20px;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n\t.shop-slide-img-deals {\r\n\t    background-image: url(" + __webpack_require__("../../../../../src/assets/images/fondo-xs.jpg") + ");\r\n\t    background-repeat: no-repeat !important;\r\n\t    background-attachment: fixed;\r\n\t    background-size: cover;\r\n\t    height: 180px;\r\n\t    position: relative;\r\n\t}\r\n\t.shopping-top-title-deals {\r\n      text-align: center;\r\n      font-family: 'Ceviche One', Georgia, sans-serif;\r\n\r\n      font-size: 40px;\r\n\r\n      color: #fff;\r\n      margin-top: 60px;\r\n  }\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner-xs.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 10px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:131px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n\t.shop-slide-img-deals {\r\n\t    background-image: url(" + __webpack_require__("../../../../../src/assets/images/fondo.jpg") + ");\r\n\t    background-repeat: no-repeat !important;\r\n\t    background-attachment: fixed;\r\n\t    background-size: cover;\r\n\t    height: 316px;\r\n\t    position: relative;\r\n\t}\r\n\t.shopping-top-title-deals {\r\n      text-align: center;\r\n      font-family: 'Ceviche One', Georgia, sans-serif;\r\n\r\n      font-weight: 700;\r\n      font-size: 78px;\r\n\r\n      color: #fff;\r\n      margin-top: 130px;\r\n  }\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 50px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:261px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .box-search{\r\n\t\tmargin-top:50px;\r\n\t\tcolor: #000;\r\n\t}\r\n\t.box-current-city{\r\n\t\theight: 50px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1023px)\r\n{\r\n\t.box-home{\r\n\t  background-color:#444; \r\n\t  /*padding:120px;*/\r\n\t  background-image: url('/assets/images/fondo-banner-xs.png'); \r\n\t  width:100%; \r\n\t  \r\n\t  background-repeat: no-repeat;\r\n\t  background-attachment: inherit; \r\n\t  background-position: center;\r\n\t  box-shadow: 0px 5px 24px 5px #348a41;\r\n\t  margin-bottom: 10px;\r\n\t}\r\n\t.flex-container {\r\n\t   display: -webkit-box;\r\n\t   display: -ms-flexbox;\r\n\t   display: flex;\r\n\t  height:131px;\r\n\t  -webkit-box-pack: center;\r\n\t      -ms-flex-pack: center;\r\n\t          justify-content: center;\r\n\t  -webkit-box-align: center;\r\n\t      -ms-flex-align: center;\r\n\t          align-items: center;\r\n\t}\r\n\t.box-search{\r\n\t\tcolor: #000;\r\n\t}\r\n\t.box-current-city{\r\n\t\theight: 40px;\r\n\t}\r\n\t.voucher-buttom{\r\n\t\tmargin-bottom: 10px;\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\t.voucher-stock{\r\n\t\tmargin-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #348a41;\r\n\t}\r\n\t.recommends{\r\n\t\tmargin-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tmargin-left: 25px;\r\n\t\tfont-size: 30px;\r\n\t\t/*font-weight: bold;*/\r\n\t\ttext-align: left;\t\r\n\t}\r\n\t.voucher-name{\r\n\t\tmargin-right: 20px;\r\n\t\tfont-size: 25px;\r\n\t\tcolor: #222222;\r\n\t\tfont-weight: bold;\r\n\t\tpadding-bottom: 10px;\r\n\t\tborder-bottom: 1px solid #ccc;\r\n\t\tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n\t}\r\n\r\n  .findSearch{\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n\t.box-home{\r\n\t  background-color:#444; \r\n\t  /*padding:120px;*/\r\n\t  background-image: url('/assets/images/fondo-banner.png'); \r\n\t  width:100%; \r\n\t  \r\n\t  background-repeat: no-repeat;\r\n\t  background-attachment: inherit; \r\n\t  background-position: center;\r\n\t  box-shadow: 0px 5px 24px 5px #348a41;\r\n\t  margin-bottom: 50px;\r\n\t}\r\n\t.flex-container {\r\n\t   display: -webkit-box;\r\n\t   display: -ms-flexbox;\r\n\t   display: flex;\r\n\t  height:261px;\r\n\t  -webkit-box-pack: center;\r\n\t      -ms-flex-pack: center;\r\n\t          justify-content: center;\r\n\t  -webkit-box-align: center;\r\n\t      -ms-flex-align: center;\r\n\t          align-items: center;\r\n\t}\r\n\t.box-search{\r\n\t\tmargin-top:50px;\r\n\t\tcolor: #000;\r\n\t}\r\n\t.box-current-city{\r\n\t\theight: 50px;\r\n\t}\r\n\t.voucher-buttom{\r\n\t\tmargin-bottom: 50px;\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\t.voucher-stock{\r\n\t\tmargin-top: 35px;\r\n\t\tmargin-bottom: 35px;\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #348a41;\r\n\t}\r\n\t.recommends{\r\n\t\tmargin-top: 40px;\r\n\t\tmargin-bottom: 25px;\r\n\t\tmargin-left: 25px;\r\n\t\tfont-size: 30px;\r\n\t\t/*font-weight: bold;*/\r\n\t\ttext-align: left;\t\r\n\t}\r\n\t.voucher-name{\r\n\t\tmargin-top: 30px;\r\n\t\tmargin-right: 20px;\r\n\t\tfont-size: 25px;\r\n\t\tcolor: #222222;\r\n\t\tfont-weight: bold;\r\n\t\tpadding-bottom: 10px;\r\n\t\tborder-bottom: 1px solid #ccc;\r\n\t\tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n\t}\r\n}\r\n\r\n.carousel-caption span{\r\n  margin-top: 20px;\r\n  \r\n}\r\n.carousel-caption h3{\r\n      font-size: 20px;\r\n    margin-top: 20px;\r\n\r\n}\r\n.carousel-caption p{\r\n      margin-top: 15px;\r\n\r\n}\r\n.carousel-caption a{\r\n  position: absolute;\r\n    bottom: 50px;\r\n    left: 40%;\r\n\r\n}\r\n\r\n.box-current-position{\r\n\t/*width: 50px;*/\r\n\theight: 50px;\r\n}\r\n.box-current-position i{\r\n\tcolor: #348a41;\r\n\tfont-size: 30px;\r\n}\r\n.box-current-city-country{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/deals/main-deals/main-deals.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Slider -->\r\n<div>\r\n  <img src=\"assets/images/{{bannerDeals}}\" alt=\"Image 1\" />\r\n</div>\r\n\r\n<!-- <div class=\"shop-slide-img-deals\">\r\n  <div class=\"effect-over\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"col-lg-12\">\r\n      <h1 class=\"shopping-top-title-deals\">Toronto, Canada</h1>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<div class=\"box-home flex-container\">\r\n  <h1>Toronto, Ontario</h1>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"box-search\">\r\n  <div fxFlexOffset=\"10\" fxFlexOffset.xs=\"2\" fxFlex=\"80\" fxFlex.xs=\"100\">\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"20\" fxFlex.gt-xs=\"15 \">\r\n        <app-card>\r\n          <app-card-header>\r\n            <div class=\"box-current-city\" fxLayoutAlign=\"start center\">\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <div fxFlex=\"100\" style=\"text-align:center\" class=\"box-current-city-country\">\r\n                  <span nglDropdown [(open)]=\"open\">\r\n                    <a style=\"color:#000; text-decoration: none\" nglDropdownTrigger>\r\n                      <span *ngIf=\"!selectedCategory\" fxHide.lt-md=\"true\" style=\"padding-left:10px;\" class=\"slds-truncate\">Browse by Category</span>\r\n                      <span *ngIf=\"!selectedCategory\" style=\"font-size:10px\" fxHide.gt-sm=\"true\" class=\"slds-truncate\">Category</span>\r\n                      <span *ngIf=\"selectedCategory\" class=\"slds-truncate\" style=\"padding-left:10px;\" fxHide.lt-md=\"true\">{{selectedCategory.categoryName}}</span>\r\n                      <span *ngIf=\"selectedCategory\" class=\"slds-truncate\" style=\"font-size:11px\" fxHide.gt-sm=\"true\">{{selectedCategory.categoryName}}</span>\r\n                      <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <div class=\"slds-dropdown slds-dropdown--left\">\r\n                      <ul class=\"dropdown__list\" role=\"menu\">\r\n                        <li class=\"slds-dropdown__item\" *ngFor=\"let item of categories;\">\r\n                          <a role=\"menuitem\" nglDropdownItem (click)=\"changeCategory(item); open = false;\">\r\n                            <p style=\"color:#000\" class=\"slds-truncate\">{{item.categoryName}}</p>\r\n                          </a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </span>\r\n\r\n                </div>\r\n                <!-- <div fxFlex class=\"box-current-city-country\">\r\n                                    Canada\r\n                                  </div> -->\r\n              </div>\r\n\r\n            </div>\r\n          </app-card-header>\r\n        </app-card>\r\n      </div>\r\n      <div fxFlex=\"7\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n        <app-card>\r\n          <app-card-header>\r\n            <div class=\"box-current-position\" fxLayoutAlign=\"center center\">\r\n              <i class=\"fa fa-map-marker \"> </i>\r\n            </div>\r\n          </app-card-header>\r\n        </app-card>\r\n      </div>\r\n      <div fxFlex=\"15\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n        <app-card>\r\n          <app-card-header>\r\n            <div class=\"box-current-city\" fxLayoutAlign=\"start center\">\r\n              <div fxLayout=\"row\" fxFlex=\"100\">\r\n                <div fxFlex=\"80\" style=\"text-align:center\" class=\"box-current-city-country\">\r\n                  Toronto, Canada\r\n                </div>\r\n                <!-- <div fxFlex class=\"box-current-city-country\">\r\n                      Canada\r\n                    </div> -->\r\n              </div>\r\n\r\n            </div>\r\n          </app-card-header>\r\n        </app-card>\r\n      </div>\r\n      <div fxFlex=\"37\" fxFlex.xs=\"70\" fxFlex.sm=\"80\" class=\"findSearch\">\r\n        <app-card>\r\n          <app-card-header>\r\n            <div class=\"box-current-city\" fxLayoutAlign=\"space-around center\">\r\n              <ngl-lookup [(value)]=\"value\" placeholder=\"Search for brands / products\" fxFlex=\"95\" [lookup]=\"lookupAsync\" field=\"formatted_address\"\r\n                [(pick)]=\"pick\" (pickChange)=\"changed()\">\r\n                <div nglLookupHeader class=\"slds-text-body--small\">Products</div>\r\n                <ng-template nglLookupItem let-ctx>\r\n                  <div class=\"slds-media__body\">\r\n                    <div class=\"slds-lookup__result-text\">{{ctx.title}} - {{ctx.categoryName}}</div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngl-lookup>\r\n\r\n            </div>\r\n          </app-card-header>\r\n        </app-card>\r\n      </div>\r\n      <div fxFlex=\"9\" fxFlex.xs=\"20\" fxFlex.sm=\"10\">\r\n        <app-card>\r\n          <app-card-header>\r\n            <button type=\"button\" class=\"box-current-city\" nglButton=\"neutral\" (click)=\"searchDispiensaries()\">Search</button>\r\n          </app-card-header>\r\n        </app-card>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"container\" fxHide.xs=\"true\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 title-deals-spotlight\">\r\n    <h1>Spot light Deals</h1>\r\n  </div>\r\n</div>\r\n<div id=\"myCarousel\" class=\"carousel slide box-slide-deals\" data-ride=\"carousel\" fxHide.xs=\"true\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators indicators-deals\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n    <div class=\"item active\">\r\n      <img src=\"assets/images/marley-natural.jpg\" alt=\"Chania\">\r\n      <div class=\"carousel-caption\">\r\n        <span class=\"btn btn-join\">30%\r\n          <br/>off on first purchase</span>\r\n        <h3>Product title</h3>\r\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n        <a class=\"btn btn-login\">Learn more</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/images/marley-natural.jpg\" alt=\"Chania\">\r\n      <div class=\"carousel-caption\">\r\n        <span class=\"btn btn-join\">30%\r\n          <br/>off on first purchase</span>\r\n        <h3>Product title</h3>\r\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n        <a class=\"btn btn-login\">Learn more</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/images/marley-natural.jpg\" alt=\"Flower\">\r\n      <div class=\"carousel-caption\">\r\n        <span class=\"btn btn-join\">30%\r\n          <br/>off on first purchase</span>\r\n        <h3>Product title</h3>\r\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n        <a class=\"btn btn-login\">Learn more</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/images/marley-natural.jpg\" alt=\"Flower\">\r\n      <div class=\"carousel-caption\">\r\n        <span class=\"btn btn-join\">30%\r\n          <br/>off on first purchase</span>\r\n        <h3>Product title</h3>\r\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n        <a class=\"btn btn-login\">Learn more</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Left and right controls -->\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container\" [ngStyle.md]=\"{'width.%':100}\" [ngStyle.sm]=\"{'width.%':100}\">\r\n\r\n  <!-- Top Images Shop -->\r\n  <!--List Product-->\r\n  <div id=\"cbp-vm\" class=\"shop-prod activegrid\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n      <app-voucher fxFlex=\"100\" fxFlex.sm=\"49\" fxFlexOffset.sm=\"1\" fxFlex.gt-xs=\"25\" fxFlex.md=\"24\" fxFlexOffset.md=\"1\" *ngFor=\"let voucher of vouchers\"\r\n        [voucher]=\"voucher\"></app-voucher>\r\n    </div>\r\n\r\n    <!--Pagination-->\r\n    <div class=\"store-cart-content\">\r\n      <div class=\"store-cart-footer store-down-bottom\">\r\n        <ngl-pagination [(page)]=\"currentPage\" [total]=\"totalProducts\" (pageChange)=\"getVouchersHome()\"></ngl-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Our Customers -->\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/deals/main-deals/main-deals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDealsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainDealsComponent = (function () {
    function MainDealsComponent(userService, router, voucherService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.voucherService = voucherService;
        this.vouchers = [];
        this.categories = [];
        this.alive = true;
        this.currentPage = 0;
        this.category = null;
        this.selectedCategory = null;
        this.pick = null;
        this.totalProducts = 0;
        this.bannerDeals = 'deals-banner.jpg';
        this.lookupAsync = function (query) {
            if (!query) {
                return null;
            }
            return _this.userService.search(query).map(function (response) { return response.vouchers; });
        };
        this.eventwork = 1;
    }
    MainDealsComponent.prototype.ngOnInit = function () {
        if (window.screen.width <= 959) {
            this.bannerDeals = 'deals-banner-xs.jpg';
        }
        this.getCategories();
        this.getVouchers();
    };
    MainDealsComponent.prototype.changeCategory = function (category) {
        this.selectedCategory = category;
        this.category = category.categoryCode;
        this.getVouchers();
    };
    MainDealsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MainDealsComponent.prototype.gotoProduct = function (code) {
        this.router.navigate(["/voucher/details-voucher/", code]);
    };
    MainDealsComponent.prototype.changed = function () {
        this.gotoProduct(this.pick.id);
    };
    MainDealsComponent.prototype.getCategories = function () {
        var _this = this;
        this.voucherService.getCategories().subscribe(function (r) {
            _this.categories = r;
        });
    };
    MainDealsComponent.prototype.getVouchers = function () {
        var _this = this;
        this.vouchers = [];
        this.voucherService.getVouchers(this.category, '4', this.currentPage, 9, 1).subscribe(function (res) {
            for (var i in res) {
                _this.voucherService.getVoucherDetail(res[i].voucherVendorLocationCode).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
                    _this.vouchers.push(res);
                    if (_this.vouchers && _this.vouchers[0]) {
                        _this.totalProducts = _this.vouchers[0].totalCount;
                    }
                });
            }
        });
    };
    MainDealsComponent.prototype.onChangeEvent = function (event, selected) {
        var $container = $('.albumContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.albumFilter li').on('click', function () {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        this.eventwork = event;
    };
    MainDealsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-deals',
            template: __webpack_require__("../../../../../src/app/modules/deals/main-deals/main-deals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/deals/main-deals/main-deals.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__common_voucher_voucher_service__["a" /* VoucherService */]])
    ], MainDealsComponent);
    return MainDealsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/fondo-xs.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondo-xs.4d4250715951e650be75.jpg";

/***/ })

});
//# sourceMappingURL=deals.module.chunk.js.map