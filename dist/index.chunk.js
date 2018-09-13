webpackJsonp(["index"],{

/***/ "../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 0px;\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n\theight: 490px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.box-content-dispensarie{\r\n\tmargin-top: 50px;\r\n}\r\n.box-slide-cart-summmary{\r\n\theight: 758px;\r\n\tbox-shadow: 0 10px 75px rgba(52, 138, 65, 0.8);  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.title-deals-spotlight{\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 50px;\r\n}\r\n.title-deals-spotlight h1{\r\n\tfont-size: 40px;\r\n}\r\n.button-dispensaries-search{\r\n\tborder-bottom-right-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-bottom-left-radius: 5px;\r\n\theight: 40px;\r\n\tfont-size: 14px;\r\n\tpadding-top: 10px;\r\n    padding-left: 11px;\r\n    padding-right: 15px;\r\n}\r\n.position-image-location{\r\n\tposition: relative;\r\n    bottom: 10%;\r\n    right: 20%;\r\n}\r\n\r\n.button-dispensaries-search span:nth-child(1){\r\n\tfloat: left;\r\n}\r\n.button-dispensaries-search span:nth-child(2){\r\n\tfloat: right;\r\n}\r\n.panda-recommend-title img{\r\n  float: left;\r\n}\r\n.panda-recommend-title h1{\r\n  float: left;\r\n  font-size: 30px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n  padding-top: 100px;\r\n}\r\n.panda-recommend-title-search img{\r\n  float: left;\r\n}\r\n.panda-recommend-title-search h1{\r\n  float: left;\r\n  font-size: 30px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n  padding-top: 50px;\r\n}\r\n.box-dispensaries-recommend{\r\n\theight: 490px;\r\n\tfont-size: 14px;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(2) h1{\r\n\tfont-size: 16px;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(3) a{\r\n\tfloat: right;\r\n\tmargin-right: 7px;\r\n\tcolor: #e4b500;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(5) i{\r\n\tcolor: #348a41;\r\n\tmargin-right: 40px;\r\n}\r\n.color-enabled{\r\n\tcolor: #348a41;\r\n}\r\n.color-disabled{\r\n\tcolor: #b9b9b9 !important;\r\n}\r\n.bottom-border{\r\n\tborder-bottom: 1px solid #b9b9b9;\r\n\tpadding-right: 0px;\r\n\tpadding-left: 0px;\r\n}\r\n.box-image-dispensarie{\r\n\theight: 240px !important;\r\n}\r\n.whitout-margin-padding{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n}\r\n.box-recommend{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tborder-bottom:1px solid #b9b9b9;\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 50px;\r\n}\r\n\r\n\r\n.box-current-position{\r\n\t/*width: 50px;*/\r\n\theight: 50px;\r\n}\r\n.box-current-position i{\r\n\tcolor: #348a41;\r\n\tfont-size: 30px;\r\n}\r\n\r\n.box-current-city-country{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n\t.box-home{\r\n\t  background-color:#444; \r\n\t  /*padding:120px;*/\r\n\t  background-image: url('/assets/images/fondo-banner-xs.png'); \r\n\t  width:100%; \r\n\t  \r\n\t  background-repeat: no-repeat;\r\n\t  background-attachment: inherit; \r\n\t  background-position: center;\r\n\t  box-shadow: 0px 5px 24px 5px #348a41;\r\n\t  margin-bottom: 10px;\r\n\t}\r\n\t.flex-container {\r\n\t   display: -webkit-box;\r\n\t   display: -ms-flexbox;\r\n\t   display: flex;\r\n\t  height:131px;\r\n\t  -webkit-box-pack: center;\r\n\t      -ms-flex-pack: center;\r\n\t          justify-content: center;\r\n\t  -webkit-box-align: center;\r\n\t      -ms-flex-align: center;\r\n\t          align-items: center;\r\n\t}\r\n\t.box-search{\r\n\t\tcolor: #000;\r\n\t}\r\n\t.box-current-city{\r\n\t\theight: 40px;\r\n\t}\r\n\t.voucher-buttom{\r\n\t\tmargin-bottom: 10px;\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\t.voucher-stock{\r\n\t\tmargin-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #348a41;\r\n\t}\r\n\t.recommends{\r\n\t\tmargin-top: 10px;\r\n\t\tmargin-bottom: 10px;\r\n\t\tmargin-left: 25px;\r\n\t\tfont-size: 30px;\r\n\t\t/*font-weight: bold;*/\r\n\t\ttext-align: left;\t\r\n\t}\r\n\t.voucher-name{\r\n\t\tmargin-right: 20px;\r\n\t\tfont-size: 25px;\r\n\t\tcolor: #222222;\r\n\t\tfont-weight: bold;\r\n\t\tpadding-bottom: 10px;\r\n\t\tborder-bottom: 1px solid #ccc;\r\n\t\tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n\t}\r\n\r\n  .findSearch{\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n\t.box-home{\r\n\t  background-color:#444; \r\n\t  /*padding:120px;*/\r\n\t  background-image: url('/assets/images/fondo-banner.png'); \r\n\t  width:100%; \r\n\t  \r\n\t  background-repeat: no-repeat;\r\n\t  background-attachment: inherit; \r\n\t  background-position: center;\r\n\t  box-shadow: 0px 5px 24px 5px #348a41;\r\n\t  margin-bottom: 50px;\r\n\t}\r\n\t.flex-container {\r\n\t   display: -webkit-box;\r\n\t   display: -ms-flexbox;\r\n\t   display: flex;\r\n\t  height:261px;\r\n\t  -webkit-box-pack: center;\r\n\t      -ms-flex-pack: center;\r\n\t          justify-content: center;\r\n\t  -webkit-box-align: center;\r\n\t      -ms-flex-align: center;\r\n\t          align-items: center;\r\n\t}\r\n\t.box-search{\r\n\t\tmargin-top:50px;\r\n\t\tcolor: #000;\r\n\t}\r\n\t.box-current-city{\r\n\t\theight: 50px;\r\n\t}\r\n\t.voucher-buttom{\r\n\t\tmargin-bottom: 50px;\r\n\t\tmargin-top: 20px;\r\n\t}\r\n\t.voucher-stock{\r\n\t\tmargin-top: 35px;\r\n\t\tmargin-bottom: 35px;\r\n\t\tfont-weight: bold;\r\n\t\tfont-size: 14px;\r\n\t\tcolor: #348a41;\r\n\t}\r\n\t.recommends{\r\n\t\tmargin-top: 40px;\r\n\t\tmargin-bottom: 25px;\r\n\t\tmargin-left: 25px;\r\n\t\tfont-size: 30px;\r\n\t\t/*font-weight: bold;*/\r\n\t\ttext-align: left;\t\r\n\t}\r\n\t.voucher-name{\r\n\t\tmargin-top: 30px;\r\n\t\tmargin-right: 20px;\r\n\t\tfont-size: 25px;\r\n\t\tcolor: #222222;\r\n\t\tfont-weight: bold;\r\n\t\tpadding-bottom: 10px;\r\n\t\tborder-bottom: 1px solid #ccc;\r\n\t\tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n\t}\r\n}\r\n.voucher-image{\r\n\tborder-right: 1px solid #ccc;\r\n\tpadding:10px\r\n}\r\n.voucher-image .main{\r\n\twidth: 100%;\r\n}\r\n.voucher-image .viewer{\r\n\tmargin-top: 20px;\r\n}\r\n.voucher-image .viewer img{\r\n\twidth: 80px;\r\n\theight: 60px;\r\n}\r\n.voucher-metadata{\r\n\tmargin-left: 20px;\r\n}\r\n\r\n.voucher-description{\r\n\tcolor: #888;\r\n\ttext-align: justify;\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 15px;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.voucher-price{\r\n\tcolor: #ccc; \r\n\tmargin-bottom: 30px\r\n}\r\n.voucher-price .description{\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n}\r\n.voucher-price .price{\r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\r\n\tcolor: #348a41;\r\n}\r\n.voucher-price .discount{\r\n\tcolor: #000;\r\n\tfont-size: 12px;\r\n}\r\n\r\n\r\n.recommends h1{\r\n  \tfont-family: 'Ceviche One', Georgia, sans-serif;\r\n  \ttext-transform: capitalize;\r\n  \tfont-size: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <img src=\"/assets/images/store-banner.jpg\" alt=\"Image 1\" />\r\n    <div class=\"box-home flex-container\">\r\n        <h1>Toronto, Canada</h1>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"box-search\">\r\n        <div fxFlexOffset=\"10\" fxFlexOffset.xs=\"2\" fxFlex=\"80\" fxFlex.xs=\"100\">\r\n            <div fxLayout=\"row\">\r\n                <div fxFlex=\"20\" fxFlex.gt-xs=\"15 \">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-city\" fxLayoutAlign=\"start center\">\r\n                                <div fxLayout=\"row\" fxFlex=\"100\">\r\n                                    <div fxFlex=\"100\" style=\"text-align:center\" class=\"box-current-city-country\">\r\n                                        <span nglDropdown [(open)]=\"open\">\r\n                                            <a style=\"color:#000; text-decoration: none\" nglDropdownTrigger>\r\n                                                <span *ngIf=\"!selectedCategory\" fxHide.lt-md=\"true\" style=\"padding-left:10px;\" class=\"slds-truncate\">Browse by Category</span>\r\n                                                <span *ngIf=\"!selectedCategory\" style=\"font-size:10px\" fxHide.gt-sm=\"true\" class=\"slds-truncate\">Category</span>\r\n                                                <span *ngIf=\"selectedCategory\" class=\"slds-truncate\" style=\"padding-left:10px;\" fxHide.lt-md=\"true\">{{selectedCategory.categoryName}}</span>\r\n                                                <span *ngIf=\"selectedCategory\" class=\"slds-truncate\" style=\"font-size:11px\" fxHide.gt-sm=\"true\">{{selectedCategory.categoryName}}</span>\r\n                                                <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\r\n                                            </a>\r\n                                            <div class=\"slds-dropdown slds-dropdown--left\">\r\n                                                <ul class=\"dropdown__list\" role=\"menu\">\r\n                                                    <li class=\"slds-dropdown__item\" *ngFor=\"let item of categories;\">\r\n                                                        <a role=\"menuitem\" nglDropdownItem (click)=\"changeCategory(item); open = false;\">\r\n                                                            <p style=\"color:#000\" class=\"slds-truncate\">{{item.categoryName}}</p>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </span>\r\n\r\n                                    </div>\r\n                                    <!-- <div fxFlex class=\"box-current-city-country\">\r\n                                          Canada\r\n                                        </div> -->\r\n                                </div>\r\n\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"7\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-position\" fxLayoutAlign=\"center center\">\r\n                                <i class=\"fa fa-map-marker \"> </i>\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"15\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-city\" fxLayoutAlign=\"start center\">\r\n                                <div fxLayout=\"row\" fxFlex=\"100\">\r\n                                    <div fxFlex=\"80\" style=\"text-align:center\" class=\"box-current-city-country\">\r\n                                        Toronto, Canada\r\n                                    </div>\r\n                                    <!-- <div fxFlex class=\"box-current-city-country\">\r\n                            Canada\r\n                          </div> -->\r\n                                </div>\r\n\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"37\" fxFlex.xs=\"70\" fxFlex.sm=\"80\" class=\"findSearch\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-city\" fxLayoutAlign=\"space-around center\">\r\n                                <ngl-lookup [(value)]=\"value\" placeholder=\"Search for brands / products\" fxFlex=\"95\" [lookup]=\"lookupAsync\" field=\"formatted_address\"\r\n                                    [(pick)]=\"pick\" (pickChange)=\"changed()\">\r\n                                    <div nglLookupHeader class=\"slds-text-body--small\">Products</div>\r\n                                    <ng-template nglLookupItem let-ctx>\r\n                                        <div class=\"slds-media__body\">\r\n                                            <div class=\"slds-lookup__result-text\">{{ctx.title}} - {{ctx.categoryName}}</div>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </ngl-lookup>\r\n\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"9\" fxFlex.xs=\"20\" fxFlex.sm=\"10\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <button type=\"button\" class=\"box-current-city\" nglButton=\"neutral\" (click)=\"searchDispiensaries()\">Search</button>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"container\" [ngStyle.md]=\"{'width.%':100}\" [ngStyle.sm]=\"{'width.%':100}\">\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\" class=\"box-search\" *ngIf=\"voucher\">\r\n            <div fxFlexOffset=\"0\" fxFlex=\"100\">\r\n                <app-card>\r\n                    <app-card-header style=\"padding:0px\">\r\n                        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"voucher-wrapper\">\r\n                            <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"voucher-image\">\r\n\r\n                                <img [src]=\"image\" class=\"main\" alt=\"voucher\" width=\"100%\" />\r\n                                <!-- <div *ngFor=\"let img of images\" fxLayout=\"row\" class=\"viewer\">\r\n                                <a (click)=\"changeImage(img)\">\r\n                                    <img [src]=\"img\" alt=\"voucher\" fxFlex=\"80px\" />\r\n                                </a>\r\n\r\n                            </div> -->\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"voucher-metadata\">\r\n                                <div class=\"voucher-name\">\r\n                                    {{voucher.title}}\r\n                                </div>\r\n                                <div class=\"voucher-stock\">\r\n                                    In Stock\r\n                                </div>\r\n                                <div class=\"voucher-description\">\r\n                                    {{voucher.description}}\r\n                                </div>\r\n                                <div class=\"voucher-quantity\">\r\n                                    <mat-form-field>\r\n                                        <mat-select placeholder=\"Quantity\" [(value)]=\"selected\">\r\n                                            <mat-option *ngFor=\"let q of quantity\" [value]=\"q.value\">\r\n                                                {{ q.value }}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"voucher-price\">\r\n                                    <span class=\"description\">PRICE:</span>\r\n                                    <span class=\"price\">${{voucher.price*selected}}</span>\r\n                                    <span class=\"discount\">(You save $40 with 20% discount )</span>\r\n                                </div>\r\n                                <div class=\"voucher-buttom\">\r\n                                    <a class=\"btn btn-primary\" (click)=\"setManageCart()\">Add to Cart</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </app-card-header>\r\n                </app-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"container\" [ngStyle.md]=\"{'width.%':100}\" [ngStyle.sm]=\"{'width.%':100}\">\r\n    <!-- Top Images Shop -->\r\n\r\n    <div class=\"meet-team\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"recommends\">\r\n                    <h1>Panda recommends</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--List Product-->\r\n    <div id=\"cbp-vm\" class=\"shop-prod activegrid\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n                <div *ngIf=\"!vouchers || vouchers.length  < 1\">No results found</div>\r\n            <app-voucher fxFlex.xs=\"100\" fxFlex.md=\"33\" fxFlex.sm=\"49\" fxFlexOffset.sm=\"1\" fxFlex.md=\"32\" fxFlexOffset.md=\"1\" *ngFor=\"let voucher of vouchers\"\r\n                [voucher]=\"voucher\"></app-voucher>\r\n        </div>\r\n\r\n        <!--Pagination-->\r\n        <div class=\"store-cart-content\">\r\n            <div class=\"store-cart-footer store-down-bottom\">\r\n                <ngl-pagination [(page)]=\"currentPage\" [total]=\"totalProducts\" (pageChange)=\"getVouchersHome()\"></ngl-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Our Customers -->\r\n\r\n\r\n</div>\r\n<!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsVoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var DetailsVoucherComponent = (function () {
    function DetailsVoucherComponent(userService, router, route, mediaService, sanitizer, voucherService, useractivityService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.mediaService = mediaService;
        this.sanitizer = sanitizer;
        this.voucherService = voucherService;
        this.useractivityService = useractivityService;
        this.selected = 1;
        this.quantity = [];
        this.vouchers = [];
        this.images = [];
        this.categories = [];
        this.category = null;
        this.alive = true;
        this.currentPage = 0;
        this.totalProducts = 0;
        this.lookupAsync = function (query) {
            if (!query) {
                return null;
            }
            return _this.userService.search(query).map(function (response) { return response.vouchers; });
        };
    }
    DetailsVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var i = 0; i < 5; i++) {
            this.quantity.push({ value: i + 1 });
        }
        this.route.params.subscribe(function (mapParams) {
            _this.voucherCode = mapParams["id"];
            _this.loadDetails();
        });
        this.getVouchersRecommends();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                _this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this.getCategories();
    };
    DetailsVoucherComponent.prototype.getCategories = function () {
        var _this = this;
        this.voucherService.getCategories().subscribe(function (r) {
            _this.categories = r;
        });
    };
    DetailsVoucherComponent.prototype.changeCategory = function (category) {
        this.selectedCategory = category;
        this.category = category.categoryCode;
        this.getVouchersRecommends();
    };
    DetailsVoucherComponent.prototype.setManageCart = function () {
        var _this = this;
        this.useractivityService.manageCart(this.voucherCode, this.selected).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            console.log(result);
        }, function (error) { console.log('Error occured', error); });
    };
    DetailsVoucherComponent.prototype.gotoDispensarie = function (dispensarie) {
        this.router.navigate(['/dispensaries/view-dispensaries', dispensarie]);
    };
    DetailsVoucherComponent.prototype.loadDetails = function () {
        var _this = this;
        this.voucherService.getVoucherDetail(this.voucherCode).takeWhile(function () { return _this.alive; }).subscribe(function (d) {
            _this.voucher = d;
            _this.getImages();
        });
    };
    DetailsVoucherComponent.prototype.getImages = function () {
        var _this = this;
        if (!this.voucher || !this.voucher.media) {
            return;
        }
        this.images = [];
        for (var _i = 0, _a = this.voucher.media; _i < _a.length; _i++) {
            var img = _a[_i];
            if (!img.mediaUrl) {
                continue;
            }
            this.mediaService.getMedia(img.mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
                var rsimg = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
                if (!_this.image) {
                    _this.image = rsimg;
                }
                _this.images.push(rsimg);
            });
        }
    };
    DetailsVoucherComponent.prototype.getVouchersRecommends = function () {
        var _this = this;
        this.vouchers = [];
        this.voucherService.getVouchers(this.category, '4', this.currentPage, 10, 1).subscribe(function (res) {
            for (var i in res) {
                _this.voucherService.getVoucherDetail(res[i].voucherVendorLocationCode).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
                    _this.vouchers.push(res);
                    if (_this.vouchers && _this.vouchers[0]) {
                        _this.totalProducts = _this.vouchers[0].totalCount;
                    }
                }, function (err) {
                    console.log('Error occured');
                });
            }
            console.log(_this.vouchers);
        }, function (err) {
            console.log('Error occured');
        });
    };
    DetailsVoucherComponent.prototype.changeImage = function (img) {
        this.image = img;
    };
    DetailsVoucherComponent.prototype.changed = function () {
        this.gotoProduct(this.pick.id);
    };
    DetailsVoucherComponent.prototype.gotoProduct = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigate(["/voucher/details-voucher/", code])];
                    case 1:
                        _a.sent();
                        setTimeout(function () { _this.pick = null; }, 20);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsVoucherComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DetailsVoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details-voucher',
            template: __webpack_require__("../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_user__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_app_common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3_app_common_voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_1_app_common_user__["a" /* UserActivityService */]])
    ], DetailsVoucherComponent);
    return DetailsVoucherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/voucher/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherModule", function() { return VoucherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_routing_module__ = __webpack_require__("../../../../../src/app/modules/voucher/voucher-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_voucher_details_voucher_component__ = __webpack_require__("../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_voucher__ = __webpack_require__("../../../../../src/app/common/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_components_voucher__ = __webpack_require__("../../../../../src/app/common/components/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var VoucherModule = (function () {
    function VoucherModule() {
    }
    VoucherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__voucher_routing_module__["a" /* VoucherRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_6__common_voucher__["a" /* VoucherModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__common_components_voucher__["a" /* VoucherCardModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_lightning_ng_lightning__["a" /* NglModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__details_voucher_details_voucher_component__["a" /* DetailsVoucherComponent */]]
        })
    ], VoucherModule);
    return VoucherModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/voucher/voucher-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_voucher_details_voucher_component__ = __webpack_require__("../../../../../src/app/modules/voucher/details-voucher/details-voucher.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var voucherRoutes = [
    { path: 'details-voucher/:id', component: __WEBPACK_IMPORTED_MODULE_2__details_voucher_details_voucher_component__["a" /* DetailsVoucherComponent */] }
];
var VoucherRoutingModule = (function () {
    function VoucherRoutingModule() {
    }
    VoucherRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(voucherRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], VoucherRoutingModule);
    return VoucherRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=index.chunk.js.map