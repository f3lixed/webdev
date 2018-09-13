webpackJsonp(["dispensaries.module"],{

/***/ "../../../../../src/app/modules/dispensaries/dispensaries.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispensariesModule", function() { return DispensariesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_trade__ = __webpack_require__("../../../../../src/app/common/components/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dispensaries_routing__ = __webpack_require__("../../../../../src/app/modules/dispensaries/dispensaries.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_dispensaries_main_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_dispensaries_store_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_dispensaries_voucher_list_dispensaries_voucher_list_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_dispensaries_voucher_item_dispensaries_voucher_item_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DispensariesModule = (function () {
    function DispensariesModule() {
    }
    DispensariesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__dispensaries_routing__["a" /* DispensariesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_7__slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_components_trade__["a" /* TradeCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__common_components_card__["a" /* CardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__main_dispensaries_main_dispensaries_component__["a" /* MainDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__store_dispensaries_store_dispensaries_component__["a" /* StoreDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__store_dispensaries_voucher_list_dispensaries_voucher_list_dispensaries_component__["a" /* VoucherListDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__store_dispensaries_voucher_item_dispensaries_voucher_item_dispensaries_component__["a" /* VoucherItemDispensariesComponent */]
            ]
        })
    ], DispensariesModule);
    return DispensariesModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/dispensaries.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispensariesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_dispensaries_main_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DispensariesRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_dispensaries_main_dispensaries_component__["a" /* MainDispensariesComponent */] },
    { path: 'view-dispensaries', loadChildren: './view-dispensaries/view-dispensaries.module#ViewDispensariesModule' },
    { path: 'admin-dispensaries', loadChildren: './admin-dispensaries/admin-dispensaries.module#AdminDispensariesModule' }
];
var DispensariesRoutingModule = (function () {
    function DispensariesRoutingModule() {
    }
    DispensariesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(DispensariesRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], DispensariesRoutingModule);
    return DispensariesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 0px;\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n\theight: 520px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.box-content-dispensarie{\r\n\tmargin-top: 50px;\r\n}\r\n.button-dispensaries-search{\r\n\tborder-bottom-right-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-bottom-left-radius: 5px;\r\n}\r\n.position-image-location{\r\n\tposition: relative;\r\n    bottom: 10%;\r\n    right: 20%;\r\n}\r\n.button-dispensaries-search{\r\n\theight: 40px;\r\n\tfont-size: 14px;\r\n\tpadding-top: 10px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n.button-dispensaries-search span:nth-child(1){\r\n\tfloat: left;\r\n}\r\n.button-dispensaries-search span:nth-child(2){\r\n\tfloat: right;\r\n}\r\n.panda-recommend-title img{\r\n  float: left;\r\n}\r\n.panda-recommend-title h1{\r\n  float: left;\r\n  font-size: 30px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n  padding-top: 100px;\r\n}\r\n.panda-recommend-title-search img{\r\n  float: left;\r\n}\r\n.panda-recommend-title-search h1{\r\n  float: left;\r\n  font-size: 30px;\r\n  /*text-shadow: 4px 4px 4px #aaa;*/\r\n  padding-top: 0px;\r\n\tfont-family: 'Proxima Nova', Georgia, sans-serif;;\r\n\tfont-weight: bold;\r\n}\r\n.panda-recommend-title-search-xs h1{\r\n  float: left;\r\n  font-size: 25px;\r\n  /*text-shadow: 4px 4px 4px #aaa;*/\r\n  padding-top: 0px;\r\n\tfont-family: 'Proxima Nova', Georgia, sans-serif;;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n.box-dispensaries-recommend{\r\n\theight: 600px;\r\n\tfont-size: 14px;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(2) h1{\r\n\tfont-size: 16px;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(3) a{\r\n\tfloat: right;\r\n\tmargin-right: 7px;\r\n\tcolor: #e4b500;\r\n}\r\n.box-dispensaries-recommend .show-shadow-box > div:nth-child(5) i{\r\n\tcolor: #348a41;\r\n\tmargin-right: 40px;\r\n}\r\n.color-enabled{\r\n\tcolor: #348a41;\r\n}\r\n.color-disabled{\r\n\tcolor: #b9b9b9 !important;\r\n}\r\n.bottom-border{\r\n\tborder-bottom: 1px solid #b9b9b9;\r\n\tpadding-right: 0px;\r\n\tpadding-left: 0px;\r\n}\r\n.box-image-dispensarie{\r\n\theight: 240px !important;\r\n}\r\n.whitout-margin-padding{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n}\r\n.box-recommend{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tborder-bottom:1px solid #b9b9b9;\r\n\tpadding-top: 50px;\r\n\tpadding-bottom: 50px;\r\n}\r\n.shop-slide-img-deals {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/fondo.jpg") + ");\r\n    background-repeat: no-repeat !important;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    height: 316px;\r\n    position: relative;\r\n        box-shadow: 0 10px 75px rgba(52, 138, 65, 0.8);\r\n}\r\n.box-container-banner{\r\n\theight: 757px;\r\n}\r\n.icons_trade i{\r\n\tpadding-left: 25px;\r\n\tcolor: #348a41;\r\n\tfont-size: 16px;\r\n\t/* font-weight: bold; */\r\n}\r\n.icons_trade{\r\n\tmargin-bottom: 15px;\r\n\tmargin-top: 15px;\r\n}\r\n.title-recomendations{\r\n\tfont-weight: bold;\r\n\tfont-size: 22px;\r\n}\r\n.panda-recomendations{\r\n\tpadding-bottom: 30px;\r\n\tmargin-bottom: 30px;\r\n\tborder-bottom: solid 1px #ccc;\r\n}\r\n/*.panda-recomendations h1{\r\n\tfloat: left;\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  margin-bottom: 60px;\r\n  margin-left: 40px;\r\n  font-family: 'Proxima Nova', Georgia, sans-serif;\r\n}*/\r\n.title-dispensaries{\r\n\tcolor: #fff;\r\n\tfont-size: 30px;\r\n}\r\n.box-dispensaries{\r\n\tbackground-color:#444;\r\n\tpadding:50px;\r\n\tbox-shadow: 0px 5px 24px 5px #348a41;\r\n}\r\n.box-current-position{\r\n  /*width: 50px;*/\r\n  height: 50px;\r\n}\r\n.box-current-position i{\r\n  color: #348a41;\r\n  font-size: 30px;\r\n}\r\n.box-current-city-country{\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner-xs.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 10px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:131px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .box-current-city{\r\n    height: 40px;\r\n  }\r\n  .box-search{\r\n    margin-top:10px;\r\n    margin-bottom: 15px;\r\n    color: #000;\r\n  }\r\n  .findSearch{\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 50px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:261px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .box-current-city{\r\n    height: 50px;\r\n  }\r\n  .box-search{\r\n  \tmargin-top:50px;\r\n  \tcolor: #000;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Slider -->\r\n<div fxLayout=\"column\">\r\n    <img src=\"assets/images/{{bannerDispensaries}}\" alt=\"Image 1\" />\r\n    <div class=\"box-home flex-container\">\r\n        <h1>Toronto, Ontario</h1>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"box-search\">\r\n        <div fxFlexOffset=\"10\" fxFlexOffset.xs=\"2\" fxFlex=\"80\" fxFlex.xs=\"100\">\r\n            <div fxLayout=\"row\">\r\n                <div fxFlex=\"7\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-position\" fxLayoutAlign=\"center center\">\r\n                                <i class=\"fa fa-map-marker \"> </i>\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"38\" fxHide.xs=\"true\" fxHide.sm=\"true\">\r\n                  <app-card>\r\n                    <app-card-header>\r\n                      <div class=\"box-current-city\" fxLayoutAlign=\"start center\">\r\n                        <div fxLayout=\"row\" fxFlex=\"100\">\r\n                          <div fxFlex=\"80\" style=\"text-align:center\" class=\"box-current-city-country\">\r\n                            Toronto, Canada\r\n                          </div>\r\n                          <!-- <div fxFlex class=\"box-current-city-country\">\r\n                            Canada\r\n                          </div> -->\r\n                        </div>\r\n\r\n                      </div>\r\n                    </app-card-header>\r\n                  </app-card>\r\n                </div>\r\n                <div fxFlex=\"40\" fxFlex.xs=\"70\" fxFlex.sm=\"80\" class=\"findSearch\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <div class=\"box-current-city\" fxLayoutAlign=\"space-around center\">\r\n                                <ngl-lookup placeholder=\"Search for dispensaries\" [(value)]=\"value\" fxFlex=\"95\" [lookup]=\"lookupAsync\"\r\n                                    field=\"formatted_address\" [(pick)]=\"pick\" (pickChange)=\"changed()\">\r\n                                    <div nglLookupHeader class=\"slds-text-body--small\">Dispensaries</div>\r\n                                    <ng-template nglLookupItem let-ctx>\r\n                                        <div class=\"slds-media__body\">\r\n                                            <div class=\"slds-lookup__result-text\">{{ctx.title}}</div>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </ngl-lookup>\r\n\r\n                            </div>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n                <div fxFlex=\"9\" fxFlex.xs=\"20\" fxFlex.sm=\"15\">\r\n                    <app-card>\r\n                        <app-card-header>\r\n                            <button type=\"button\" class=\"box-current-city\" nglButton=\"neutral\" (click)=\"searchDispiensaries()\">Search</button>\r\n                        </app-card-header>\r\n                    </app-card>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <agm-map [latitude]=\"lat\" [styles]=\"styles\" [zoom]=\"zoom\" [zoomControl]=\"false\" [streetViewControl]=\"false\" [disableDefaultUI]=\"false\" [longitude]=\"lng\"\r\n        style=\"width:100%; height:500px\">\r\n\r\n        <agm-marker  *ngFor=\"let m of markers; let i = index\"  iconUrl=\"assets/images/logo_marker.png\"  (markerClick)=\"clickedMarker(m.label, i)\" [latitude]=\"m.lat\" [longitude]=\"m.lng\"\r\n            [markerDraggable]=\"m.draggable\" (dragEnd)=\"markerDragEnd(m, $event)\">\r\n\r\n            <agm-info-window [isOpen]=\"m.visible\">\r\n                <img style=\"width:300px;display:block\" [src]=\"m.image\" />\r\n                <strong>{{m.label}}</strong>\r\n            </agm-info-window>\r\n\r\n        </agm-marker>\r\n\r\n        <agm-circle [latitude]=\"lat + 0.09\" [longitude]=\"lng\" [radius]=\"1000\" [fillColor]=\"'black'\" [circleDraggable]=\"false\" [editable]=\"false\">\r\n        </agm-circle>\r\n\r\n    </agm-map>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"background-color:#f5f5f5\" [ngStyle.md]=\"{'width.%':100}\" [ngStyle.sm]=\"{'width.%':100}\">\r\n        <div fxFlexOffset=\"2\" fxFlex=\"95\">\r\n            <div fxLayout=\"column\">\r\n                <!-- inicio  contenedor -->\r\n                <div class=\"panda-recomendations\" style=\"margin-top:30px\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <div fxFlex=\"15\" fxFlex.xs=\"20\" fxHide.xs=\"true\">\r\n                            <img src=\"assets/images/{{flowerimg}}\" alt=\"Image 1\" />\r\n                        </div>\r\n                        <div fxFlex [ngClass.xs]=\"{'panda-recommend-title-search-xs': true}\" [ngClass]=\"{'panda-recommend-title-search': true}\">\r\n                            <h1>Panda Recommendations</h1>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutWrap>\r\n                        <div *ngFor=\"let dis of recomendations; let i = index\" fxFlex=\"33\" fxFlex.sm=\"100\" fxFlex.md=\"49\" fxFlexOffset.md=\"1\" fxFlex.lt-md=\"100\">\r\n                            <app-trade [trade]=\"dis\"></app-trade>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"search-results\">\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <div fxFlex=\"15\">\r\n                            <img src=\"assets/images/dispensaries/{{searchimg}}\" alt=\"Image 1\" />\r\n                        </div>\r\n                        <div fxFlex class=\" panda-recommend-title-search\">\r\n                            <h1 class=\"title-recomendations\">Search Results\r\n                                <small *ngIf=\"dispensaries \">({{totalSearch}} Results Found)</small>\r\n                            </h1>\r\n                        </div>\r\n                    </div>\r\n                    <div fxLayout=\"row\" fxLayoutWrap>\r\n                        <div style=\"margin-top:35px\" fxFlex.sm=\"100\" fxFlex.md=\"49\" fxFlexOffset.md=\"1\" *ngFor=\"let dis of dispensaries; let i = index\"\r\n                            fxFlex=\"33\" fxFlex.lt-md=\"100\">\r\n                            <app-trade [trade]=\"dis\"></app-trade>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div fxLayoutAlign=\"end end\" fxLayout=\"row\" style=\"margin-bottom:15px\" *ngIf=\"dispensaries\">\r\n                        <ngl-pagination [(page)]=\"currentPage\" [total]=\"totalSearch\" (pageChange)=\"pageChangeSearch()\"></ngl-pagination>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- fin  contenedor -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainDispensariesComponent = (function () {
    function MainDispensariesComponent(router, tradeService, userService, sanitizer, http) {
        var _this = this;
        this.router = router;
        this.tradeService = tradeService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.http = http;
        this.alive = true;
        this.currentPage = 1;
        this.previousPageSearch = 0;
        this.pageElements = 9;
        this.sortType = 1;
        this.bannerDispensaries = 'dispensaries-banner.jpg';
        this.flowerimg = 'flower.png';
        this.searchimg = 'search.png';
        this.styles = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
        this.markers = [];
        // google maps zoom level
        this.zoom = 11;
        this.lat = 43.661034;
        this.lng = -79.42991;
        this.lookupAsync = function (query) {
            if (!query) {
                return null;
            }
            return _this.userService.search(query).map(function (response) { return response.trades; });
        };
        this.images = [
            {
                "sType": "div", "styles": { "width": "100%", height: "780px" }, "content": "\n        <div style=\"background-image: url('/assets/images/deals-banner.jpg'); width:100%; height:780px;\">\n      <div  class=\"slide-middle-txt animated\">\n      <h1><span >Welcome</span> <span class=\"color-txt\">to</span> Panda Weed</h1>\n  </div>\n  </div>\n      "
            }
        ];
    }
    MainDispensariesComponent.prototype.ngOnInit = function () {
        if (window.screen.width <= 959) {
            this.bannerDispensaries = 'dispensaries-banner-xs.jpg';
            this.flowerimg = 'flower-xs.png';
            this.searchimg = 'search-xs.png';
        }
        this.searchDispiensaries();
        this.searchRecomendations();
    };
    MainDispensariesComponent.prototype.pageChangeSearch = function (a, b, c) {
        console.log("preview page", this.previousPageSearch, this.currentPage);
        this.searchDispiensaries();
        this.previousPageSearch = this.currentPage;
    };
    MainDispensariesComponent.prototype.searchDispiensaries = function () {
        var _this = this;
        this.dispensaries = [];
        this.tradeService.getTrades("4", "4", this.currentPage - 1, this.pageElements, this.sortType).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            _this.dispensaries = res;
            if (_this.dispensaries && _this.dispensaries[0]) {
                _this.totalSearch = _this.dispensaries[0].totalCount;
            }
            _this.reloadMarkers();
        });
    };
    MainDispensariesComponent.prototype.searchRecomendations = function () {
        var _this = this;
        this.tradeService.getTrades("4", "4", this.currentPage, this.pageElements, this.sortType).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            if (res) {
                _this.recomendations = res.slice(0, 3);
            }
        });
    };
    MainDispensariesComponent.prototype.searchWithDelivery = function () {
        var _this = this;
        this.tradeService.getTrades("4", "4", this.currentPage, this.pageElements, this.sortType).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            _this.delivery = res;
        });
    };
    MainDispensariesComponent.prototype.searchNonDelivery = function () {
        var _this = this;
        this.tradeService.getTrades("4", "4", this.currentPage, this.pageElements, this.sortType).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            _this.nonDelivery = res;
        });
    };
    MainDispensariesComponent.prototype.reloadMarkers = function () {
        this.markers = [];
        for (var _i = 0, _a = this.dispensaries; _i < _a.length; _i++) {
            var dispensarie = _a[_i];
            var imageURL = "";
            if (dispensarie.media && Array.isArray(dispensarie.media) && dispensarie.media.length > 0) {
                imageURL = dispensarie.media[0].mediaUrl;
            }
            this.markers.push({ lat: dispensarie.latitude, lng: dispensarie.longitude, visible: false, draggable: false, label: dispensarie.title, image: imageURL });
        }
    };
    MainDispensariesComponent.prototype.gotoDispensarie = function (dispensarie) {
        this.router.navigate(['/dispensaries/view-dispensaries', dispensarie]);
    };
    MainDispensariesComponent.prototype.splitText = function (text) {
        if (!text) {
            return text;
        }
        //TODO constant
        if (text.length > 150) {
            return text.substring(0, 150) + "...";
        }
        return text;
    };
    MainDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MainDispensariesComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
        for (var markeI in this.markers) {
            var marke = this.markers[markeI];
            marke.visible = false;
            if (parseInt(markeI) === index) {
                console.log(parseInt(markeI), "===", index);
                marke.visible = true;
            }
            console.log("MARKER", marke);
        }
    };
    MainDispensariesComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    };
    MainDispensariesComponent.prototype.changed = function () {
        this.gotoDispensarie(this.pick.id);
    };
    MainDispensariesComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MainDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/main-dispensaries/main-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_trade_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_4__common_user__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], MainDispensariesComponent);
    return MainDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  store-dispensaries works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDispensariesComponent; });
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

var StoreDispensariesComponent = (function () {
    function StoreDispensariesComponent() {
    }
    StoreDispensariesComponent.prototype.ngOnInit = function () {
    };
    StoreDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-store-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/store-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoreDispensariesComponent);
    return StoreDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  voucher-item-dispensaries works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherItemDispensariesComponent; });
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

var VoucherItemDispensariesComponent = (function () {
    function VoucherItemDispensariesComponent() {
    }
    VoucherItemDispensariesComponent.prototype.ngOnInit = function () {
    };
    VoucherItemDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-voucher-item-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-item-dispensaries/voucher-item-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherItemDispensariesComponent);
    return VoucherItemDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  voucher-list-dispensaries works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherListDispensariesComponent; });
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

var VoucherListDispensariesComponent = (function () {
    function VoucherListDispensariesComponent() {
    }
    VoucherListDispensariesComponent.prototype.ngOnInit = function () {
    };
    VoucherListDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-voucher-list-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/store-dispensaries/voucher-list-dispensaries/voucher-list-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherListDispensariesComponent);
    return VoucherListDispensariesComponent;
}());



/***/ })

});
//# sourceMappingURL=dispensaries.module.chunk.js.map