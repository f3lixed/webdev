webpackJsonp(["view-dispensaries.module"],{

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-title{\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div fxLayout=\"row\">\r\n        <div fxFlex.gt-sm=\"70\" fxFlex=\"100\" fxLayout=\"column\">\r\n            <div class=\"about\">\r\n                <h1 class=\"detail-title\">About Us</h1>\r\n                <app-card>\r\n                    <app-card-body *ngIf=\"dispensarie\">\r\n                       {{dispensarie.description}}\r\n                    </app-card-body>\r\n                </app-card>\r\n            </div>\r\n            <!-- <div class=\"mission\">\r\n                <h1 class=\"detail-title\">Mission Statement</h1>\r\n                <app-card>\r\n                    <app-card-body>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed metus eu rhoncus. In et risus nec lacus pellentesque\r\n                        mattis. Sed a maximus libero. Maecenas ut metus non erat auctor aliquam. Donec iaculis ligula non\r\n                        enim blandit, at convallis metus pretium. Morbi sit amet risus eu leo fringilla blandit. Nunc pellentesque\r\n                        venenatis sollicitudin. Proin ullamcorper, ligula sed pharetra porta, ipsum felis vulputate lectus,\r\n                        vel fermentum ante nisl non ex. Pellentesque id facilisis lectus, at sodales dolor. Suspendisse eget\r\n                        magna ac purus volutpat fringilla. Integer dapibus laoreet est, a lacinia est accumsan ut. Nam consequat\r\n                        semper augue rhoncus rhoncus. Maecenas commodo magna id elit tincidunt fringilla. Donec interdum\r\n                        tortor eu vestibulum tristique. Quisque posuere eros ac massa malesuada, ut lacinia urna congue.\r\n                        Suspendisse fringilla a velit ut egestas.\r\n                    </app-card-body>\r\n                </app-card>\r\n            </div>\r\n            <div class=\"history\">\r\n                <h1 class=\"detail-title\">History</h1>\r\n                <app-card>\r\n                    <app-card-body>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed metus eu rhoncus. In et risus nec lacus pellentesque\r\n                        mattis. Sed a maximus libero. Maecenas ut metus non erat auctor aliquam. Donec iaculis ligula non\r\n                        enim blandit, at convallis metus pretium. Morbi sit amet risus eu leo fringilla blandit. Nunc pellentesque\r\n                        venenatis sollicitudin. Proin ullamcorper, ligula sed pharetra porta, ipsum felis vulputate lectus,\r\n                        vel fermentum ante nisl non ex. Pellentesque id facilisis lectus, at sodales dolor. Suspendisse eget\r\n                        magna ac purus volutpat fringilla. Integer dapibus laoreet est, a lacinia est accumsan ut. Nam consequat\r\n                        semper augue rhoncus rhoncus. Maecenas commodo magna id elit tincidunt fringilla. Donec interdum\r\n                        tortor eu vestibulum tristique. Quisque posuere eros ac massa malesuada, ut lacinia urna congue.\r\n                        Suspendisse fringilla a velit ut egestas.\r\n                    </app-card-body>\r\n                </app-card>\r\n            </div>\r\n            <div class=\"staff\">\r\n                <h1 class=\"detail-title\">Staff</h1>\r\n                <app-card>\r\n                    <app-card-body>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed metus eu rhoncus. In et risus nec lacus pellentesque\r\n                        mattis. Sed a maximus libero. Maecenas ut metus non erat auctor aliquam. Donec iaculis ligula non\r\n                        enim blandit, at convallis metus pretium. Morbi sit amet risus eu leo fringilla blandit. Nunc pellentesque\r\n                        venenatis sollicitudin. Proin ullamcorper, ligula sed pharetra porta, ipsum felis vulputate lectus,\r\n                        vel fermentum ante nisl non ex. Pellentesque id facilisis lectus, at sodales dolor. Suspendisse eget\r\n                        magna ac purus volutpat fringilla. Integer dapibus laoreet est, a lacinia est accumsan ut. Nam consequat\r\n                        semper augue rhoncus rhoncus. Maecenas commodo magna id elit tincidunt fringilla. Donec interdum\r\n                        tortor eu vestibulum tristique. Quisque posuere eros ac massa malesuada, ut lacinia urna congue.\r\n                        Suspendisse fringilla a velit ut egestas.\r\n                    </app-card-body>\r\n                </app-card>\r\n            </div>\r\n            <div class=\"location\">\r\n                <h1 class=\"detail-title\">Location Information</h1>\r\n                <app-card>\r\n                    <app-card-body>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed metus eu rhoncus. In et risus nec lacus pellentesque\r\n                        mattis. Sed a maximus libero. Maecenas ut metus non erat auctor aliquam. Donec iaculis ligula non\r\n                        enim blandit, at convallis metus pretium. Morbi sit amet risus eu leo fringilla blandit. Nunc pellentesque\r\n                        venenatis sollicitudin. Proin ullamcorper, ligula sed pharetra porta, ipsum felis vulputate lectus,\r\n                        vel fermentum ante nisl non ex. Pellentesque id facilisis lectus, at sodales dolor. Suspendisse eget\r\n                        magna ac purus volutpat fringilla. Integer dapibus laoreet est, a lacinia est accumsan ut. Nam consequat\r\n                        semper augue rhoncus rhoncus. Maecenas commodo magna id elit tincidunt fringilla. Donec interdum\r\n                        tortor eu vestibulum tristique. Quisque posuere eros ac massa malesuada, ut lacinia urna congue.\r\n                        Suspendisse fringilla a velit ut egestas.\r\n                    </app-card-body>\r\n                </app-card>\r\n            </div>\r\n\r\n        </div>\r\n        <div fxFlex>\r\n            <app-card>\r\n                <app-card-title>\r\n                    Hour of operation\r\n                </app-card-title>\r\n                <app-card-body>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sed metus eu rhoncus. In et risus nec lacus pellentesque\r\n                    mattis. Sed a maximus libero. Maecenas ut metus non erat auctor aliquam. Donec iaculis ligula non enim\r\n                    blandit, at convallis metus pretium. Morbi sit amet risus eu leo fringilla blandit. Nunc pellentesque\r\n                    venenatis sollicitudin\r\n                </app-card-body>\r\n            </app-card>\r\n\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsDispensariesComponent = (function () {
    function DetailsDispensariesComponent(viewDispensariesService) {
        this.viewDispensariesService = viewDispensariesService;
        this.alive = true;
    }
    DetailsDispensariesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDispensariesService.getDispensarie()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.dispensarie = res;
        });
    };
    DetailsDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DetailsDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-details-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__["a" /* ViewDispensariesService */]])
    ], DetailsDispensariesComponent);
    return DetailsDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div style=\"margin:30px\" *ngIf=\"vouchers && vouchers.length > 0\">\r\n        <h1 style=\"font-size:25px; font-weight:bold\">Products</h1>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n        <app-voucher *ngFor=\"let voucher of vouchers\" [voucher]=\"voucher\"></app-voucher>\r\n        <div style=\"margin:20px\" *ngIf=\"!vouchers || vouchers.length < 1\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeDispensariesComponent = (function () {
    function HomeDispensariesComponent(viewDispensariesService, voucherService) {
        this.viewDispensariesService = viewDispensariesService;
        this.voucherService = voucherService;
        this.alive = true;
    }
    HomeDispensariesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDispensariesService.getDispensarie()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.dispensarie = res;
            _this.getVouchers();
        });
    };
    HomeDispensariesComponent.prototype.getVouchers = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", this.dispensarie.vendorLocationCode, 0, 10, 1)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            console.log("res>>> ", res);
            _this.vouchers = res;
        });
    };
    HomeDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    HomeDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__["a" /* ViewDispensariesService */],
            __WEBPACK_IMPORTED_MODULE_2__common_voucher_voucher_service__["a" /* VoucherService */]])
    ], HomeDispensariesComponent);
    return HomeDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-container-banner {\r\n  height: 757px;\r\n}\r\n\r\n.shop-slide-img-deals {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/fondo.jpg") + ");\r\n  background-repeat: no-repeat !important;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  height: 316px;\r\n  position: relative;\r\n  box-shadow: 0 10px 75px rgba(52, 138, 65, 0.8);\r\n}\r\n\r\n.box-content-dispensarie {\r\n  padding-top: 15px;\r\n  padding-right: 0px;\r\n  padding-left: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.box-content-menu {\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.detail-location {\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.detail-location>i {\r\n  margin-left: -3px;\r\n}\r\n\r\n.icons_trade i {\r\n  padding-left: 25px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.icons_trade i:first-child {\r\n  padding: 0px;\r\n}\r\n\r\n\r\n.navbar-menu {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  color: #373737;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n\r\n.navbar-menu .menu {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-menu .menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  transition: background-color .5s ease;\r\n  text-align: center;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.navbar-menu .menu a {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: #373737;\r\n  font-weight: bold;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.navbar-menu .menu a>.fa {\r\n  font-weight: bold;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navbar-menu .menu a:hover {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-menu .menu li:hover {\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-menu .menu li:hover .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.navbar-menu a.active {\r\n  border: 1px solid #348a41;\r\n}\r\n\r\n.navbar-menu a.active:after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: -16px;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 8px solid transparent;\r\n  border-top-color: #348a41;\r\n}\r\n\r\n.navbar-menu li:hover a.active:after {\r\n  content: '';\r\n  border-top-color: #26502d;\r\n}\r\n\r\n.indicators-deals .active {\r\n  background-color: #348a41;\r\n  border: 1px solid #348a41;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    background-image: url('/assets/images/fondo-banner-xs.png'); \r\n    width:100%; \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 10px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:131px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n  .box-head-dispensarie .panda_img {\r\n    width: 15%;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n  .icons_trade {\r\n    /*margin-bottom: 15px;*/\r\n    /*margin-top: 15px;*/\r\n  }\r\n  .box-head-dispensarie {\r\n    background-color: #373737;\r\n    color: #fff;\r\n    padding: 25px;\r\n    line-height: 35px;\r\n    min-height: 300px;\r\n    padding-bottom: 0px;\r\n  }\r\n\r\n  .detail-title {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    margin-top: 10px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner.png'); \r\n    width:100%; \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 50px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:261px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .icons_trade {\r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n  }\r\n  .box-head-dispensarie {\r\n    background-color: #373737;\r\n    color: #fff;\r\n    padding: 25px;\r\n    line-height: 45px;\r\n    min-height: 300px;\r\n  }\r\n  .detail-title {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n  }\r\n  .box-head-dispensarie .panda_img {\r\n    width: 200px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n}\r\n.detail-menu{\r\n  text-align: center;\r\n}\r\n.detail-menu a{\r\n  margin-left: 15px;\r\n}\r\n.detail-menu i{\r\n  display: block;\r\n  padding: 10px;\r\n  border: 1px solid #a0a0a0;\r\n  border-radius: 50%;\r\n}\r\n.detail-menu a, .detail-menu a:link, .detail-menu a:visited{\r\n  text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewDispensariesService.dispensarie\">\r\n<!--   <contentSlider [slides]=\"images\">\r\n</contentSlider> -->\r\n  <img src=\"assets/images/{{bannerDispensaries}}\" alt=\"Image 1\" />\r\n  <div class=\"box-home flex-container\">\r\n    <h1>Toronto, Ontario</h1>\r\n  </div>\r\n\r\n  <div class=\"container box-content-dispensarie\">\r\n    <div class=\"row\" style=\"margin-right:0px;\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 box-head-dispensarie\">\r\n        <div>\r\n          <div class=\"col-md-5\">\r\n            <img *ngIf=\"viewDispensariesService.dispensarie.media[0]\" [src]=\"viewDispensariesService.dispensarie.media[0].mediaUrl\" />\r\n          </div>\r\n          <div class=\"col-md-7\">\r\n            <h1 class=\"detail-title\">{{viewDispensariesService.dispensarie.title}}</h1>\r\n            <span class=\"detail-location\">\r\n              <i class=\"fa fa-map-marker fa-fw\"></i>{{viewDispensariesService.dispensarie.address}}\r\n            </span>\r\n            <div>\r\n              <i class=\"fa fa-circle fa-fw\" style=\"color:#080\"></i>Open Now\r\n            </div>\r\n            <div class=\"icons_trade\">\r\n              <i class=\"fa fa-money\"></i>\r\n              <i class=\"fa fa-credit-card-alt\"></i>\r\n              <i class=\"fa fa-paypal\"></i>\r\n              <i class=\"fa fa-truck\"></i>\r\n              <i class=\"fa fa-wheelchair\"></i>\r\n            </div>\r\n            <img fxHide.xs=\"true\" src=\"assets/images/dispensaries/panda.png\" class=\"panda_img\" alt=\"Chania\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"container box-content-menu\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n        <nav class=\"navbar-menu\">\r\n          <ul class=\"menu\">\r\n            <li *ngFor=\"let item of menuList\">\r\n              <a [routerLink]=\"[item.path]\" routerLinkActive=\"active\">{{ item.title }}</a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"container\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"end end\" class=\"detail-menu\">\r\n      <!-- <a>\r\n        <i class=\"fa fa-pencil\"></i>\r\n        Review\r\n      </a> -->\r\n      <!-- <a>\r\n        <i class=\"fa fa-plus\"></i>\r\n        Follow\r\n      </a>\r\n      <a>\r\n        <i class=\"fa fa-share\"></i>\r\n        Share\r\n      </a> -->\r\n    </div>\r\n    <app-details-dispensaries></app-details-dispensaries>\r\n    <div style=\"margin:30px\">\r\n      <h1 style=\"font-size:25px; font-weight:bold\">Reviews</h1>\r\n    </div>\r\n\r\n    <review-dispensaries></review-dispensaries>\r\n    <home-dispensaries></home-dispensaries>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewDispensariesComponent = (function () {
    function ViewDispensariesComponent(route, router, viewDispensariesService) {
        this.route = route;
        this.router = router;
        this.viewDispensariesService = viewDispensariesService;
        this.alive = true;
        this.mobile = false;
        this.banner = [];
        this.bannerDispensaries = 'dispensaries-banner.jpg';
        this.menuList = [
            { title: "Home", path: "home" },
            { title: "Overview", path: "details" },
            { title: "Reviews", path: "reviews" },
        ];
    }
    ViewDispensariesComponent.prototype.loadSlider = function () {
        // let profile = this.translate.instant("Profile");
        if (window.screen.width <= 959) {
            this.bannerDispensaries = 'dispensaries-banner-xs.jpg';
        }
        else {
            this.bannerDispensaries = 'dispensaries-banner.jpg';
        }
        var bannerimg = this.banner[0];
        this.images = [
            {
                "sType": "div", "styles": { "width": "100%" }, "content": "\n        <div class=\"container-slide\" style=\"background-image: url('/assets/images/" + bannerimg + "'); width:100%; background-repeat: no-repeat;background-attachment: initial;background-position: center; background-size:cover;\">\n      <div  class=\"slide-middle-txt animated\">\n  </div>\n  </div>\n      "
            }
        ];
    };
    ViewDispensariesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadSlider();
        this.route.params.takeWhile(function () { return _this.alive; })
            .subscribe(function (params) {
            _this.viewDispensariesService.setDispensarie(params['id']);
        });
    };
    ViewDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ViewDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__view_dispensaries_service__["a" /* ViewDispensariesService */]])
    ], ViewDispensariesComponent);
    return ViewDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 300px\">\r\n    <h1 style=\"font-size:40px\">products component</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsDispensariesComponent = (function () {
    function ProductsDispensariesComponent() {
        this.alive = true;
    }
    ProductsDispensariesComponent.prototype.ngOnInit = function () {
    };
    ProductsDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ProductsDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'products-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsDispensariesComponent);
    return ProductsDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".star {\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n}\r\n.star-selected{\r\n    color:#f39c12;\r\n}\r\n.star-empty{\r\n    color:#bdc3c7;\r\n}\r\n.form-review{\r\n    margin-bottom: 3    5px;\r\n}\r\n.review{\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px solid #999;\r\n    margin-bottom: 15px;\r\n}\r\n.review-name{\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n.review-image img{\r\nborder-radius:50%;\r\nwidth: 100px;\r\n}\r\n.review-score{\r\n    font-size: 16px;\r\n    cursor: default;\r\n}\r\n.review-body{\r\n    padding: 15px;\r\n    font-size: 14px;\r\n    color: #999;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-left:0px;padding-right:0px;\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex=\"100\">\r\n        <div fxFlex.gt-sm=\"70\" fxFlex=\"100\" *ngIf=\"reviewForm\">\r\n            <div>\r\n                <ngl-notification *ngIf=\"passwordSuccess || profileSuccess\" type=\"toast\" fxFlex=\"90\" severity=\"success\">\r\n                    <div class=\"slds-grid\">\r\n                        <div class=\"slds-col slds-align-middle\" *ngIf=\"passwordSuccess\">Password Changed.</div>\r\n                        <div class=\"slds-col slds-align-middle\" *ngIf=\"profileSuccess\">Basic Information Saved.</div>\r\n                    </div>\r\n                </ngl-notification>\r\n            </div>\r\n            <form class=\"form-review\" [formGroup]=\"reviewForm\">\r\n                <div>\r\n                    <ngl-notification *ngIf=\"reviewAdded\" type=\"toast\" fxFlex=\"90\" severity=\"success\">\r\n                        <div class=\"slds-grid\">\r\n                            <div class=\"slds-col slds-align-middle\">Review Created.</div>\r\n                        </div>\r\n                    </ngl-notification>\r\n                    <ngl-notification *ngIf=\"reviewError\" type=\"toast\" fxFlex=\"90\" severity=\"error\">\r\n                        <div class=\"slds-grid\">\r\n                            <div class=\"slds-col slds-align-middle\" >error creating review, try again.</div>\r\n                        </div>\r\n                    </ngl-notification>\r\n                </div>\r\n                <app-card>\r\n                    <app-card-body>\r\n                        <ngl-form-element [error]=\"!reviewForm.get('text').valid && reviewForm.get('text').touched ? 'Comment must have more than 10 characters' : null\"\r\n                            class=\"slds-m-top--small\">\r\n                            <ng-template nglFormLabel>\r\n                                <i>Review</i>\r\n                            </ng-template>\r\n                            <textarea formControlName=\"text\" nglFormControl fxFlex=\"100\" name=\"contact_message\" placeholder=\"Whats on your mind?\"></textarea>\r\n                        </ngl-form-element>\r\n                    </app-card-body>\r\n                    <app-card-actions>\r\n                        <div fxLayout=\"end end\" fxLayout=\"row\" fxFlex=\"100\" style=\"text-align: right\">\r\n                            <div class=\"post-icons\" fxFlex=\"85\">\r\n                                <div style=\"text-align: left\">\r\n                                    <i class=\"fa fa-star star\" (click)=\"changeScore(star)\" *ngFor=\"let star of stars\" [ngClass]=\"{'star-selected': score >= star, 'star-empty': score < star}\"\r\n                                        aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div fxFlex>\r\n                                <button type=\"submit\" [disabled]=\"!reviewForm.valid\" (click)=\"createReview()\" class=\"btn btn-primary\">Create</button>\r\n                            </div>\r\n                        </div>\r\n                    </app-card-actions>\r\n                </app-card>\r\n            </form>\r\n            <div class=\"review-wrapper\" style=\"margin-left:30px\">\r\n                <div class=\"review\" fxLayout=\"column\" *ngFor=\"let review of reviews\">\r\n                    <div class=\"review-header\" fxLayout=\"row\">\r\n                        <div fxFlex>\r\n                            <div class=\"review-name\">\r\n                                <h1> {{review.userName || 'Anonymous'}}\r\n                                    <!-- <small>1 day ago</small> -->\r\n                                </h1>\r\n                            </div>\r\n                            <div class=\"review-score\">\r\n                                <i class=\"fa fa-star star\" *ngFor=\"let star of stars\" [ngClass]=\"{'star-selected': review.scoreGiven >= star, 'star-empty': review.scoreGiven < star}\"\r\n                                    aria-hidden=\"true\"></i>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"review-body\">\r\n                        {{review.text}}\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_trade___ = __webpack_require__("../../../../../src/app/common/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewDispensariesComponent = (function () {
    function ReviewDispensariesComponent(tradeService, viewDispensariesService, fb, route) {
        this.tradeService = tradeService;
        this.viewDispensariesService = viewDispensariesService;
        this.fb = fb;
        this.route = route;
        this.alive = true;
        this.score = 5;
        this.stars = [1, 2, 3, 4, 5];
        this.reviewAdded = false;
        this.reviewError = false;
        this.reviewForm = fb.group({
            'text': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(500)])],
        });
    }
    ReviewDispensariesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDispensariesService.getDispensarie()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.dispensarie = res;
            _this.getReviews();
        });
    };
    ReviewDispensariesComponent.prototype.changeScore = function (score) {
        this.score = score;
    };
    ReviewDispensariesComponent.prototype.getReviews = function () {
        var _this = this;
        this.tradeService.getTradeReviews(this.dispensarie.tradeLocationCode).takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.reviews = res;
        });
    };
    ReviewDispensariesComponent.prototype.createReview = function () {
        var _this = this;
        this.tradeService.createTradeReview(this.dispensarie.tradeLocationCode, this.reviewForm.value.text, this.score).takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.reviewForm.patchValue({ "text": "" });
            _this.reviewForm.markAsPristine();
            _this.reviewForm.markAsUntouched();
            _this.score = 5;
            _this.getReviews();
            _this.reviewAdded = true;
            setTimeout(function () {
                _this.reviewAdded = false;
            }, 5000);
        }, function () {
            _this.reviewError = true;
            setTimeout(function () {
                _this.reviewError = false;
            }, 5000);
        });
    };
    ReviewDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ReviewDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'review-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_trade___["b" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_4__view_dispensaries_service__["a" /* ViewDispensariesService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ReviewDispensariesComponent);
    return ReviewDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 300px\">\r\n    <h1 style=\"font-size:40px\">edibles component</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdiblesStrainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EdiblesStrainsComponent = (function () {
    function EdiblesStrainsComponent() {
        this.alive = true;
    }
    EdiblesStrainsComponent.prototype.ngOnInit = function () {
    };
    EdiblesStrainsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    EdiblesStrainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edibles-strains',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EdiblesStrainsComponent);
    return EdiblesStrainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 300px\">\r\n    <h1 style=\"font-size:40px\">extracts component</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtractsStrainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtractsStrainsComponent = (function () {
    function ExtractsStrainsComponent(viewDispensariesService) {
        this.viewDispensariesService = viewDispensariesService;
        this.alive = true;
    }
    ExtractsStrainsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDispensariesService.getDispensarie()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            console.log("res>>> ", res);
        });
    };
    ExtractsStrainsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ExtractsStrainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extracts-strains',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__["a" /* ViewDispensariesService */]])
    ], ExtractsStrainsComponent);
    return ExtractsStrainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-container-banner {\r\n  height: 757px;\r\n}\r\n\r\n.box-content-dispensarie {\r\n  padding: 25px 0;\r\n}\r\n\r\n.box-content-menu {\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.box-head-dispensarie {\r\n  background-color: #373737;\r\n  color: #fff;\r\n  padding: 25px;\r\n  line-height: 45px;\r\n  min-height: 300px;\r\n}\r\n\r\n.box-head-dispensarie .panda_img {\r\n  width: 200px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.detail-title {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\n.detail-location {\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.detail-location>i {\r\n  margin-left: -3px;\r\n}\r\n\r\n.icons_trade i {\r\n  padding-left: 25px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.icons_trade i:first-child {\r\n  padding: 0px;\r\n}\r\n\r\n.icons_trade {\r\n  margin-bottom: 15px;\r\n  margin-top: 15px;\r\n}\r\n.navbar-menu {\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n  color: #373737;\r\n  border-radius: 4px;\r\n  background-color: #fff;\r\n}\r\n\r\n.navbar-menu .menu {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-menu .menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  transition: background-color .5s ease;\r\n  text-align: center;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.navbar-menu .menu a {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 10px;\r\n  text-decoration: none;\r\n  color: #373737;\r\n  font-weight: bold;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.navbar-menu .menu a>.fa {\r\n  font-weight: bold;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navbar-menu .menu a:hover {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-menu .menu li:hover {\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-menu .menu li:hover .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.navbar-menu a.active {\r\n  border: 1px solid #348a41;\r\n}\r\n\r\n.navbar-menu a.active:after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: -16px;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 8px solid transparent;\r\n  border-top-color: #348a41;\r\n}\r\n\r\n.navbar-menu li:hover a.active:after {\r\n  content: '';\r\n  border-top-color: #26502d;\r\n}\r\n\r\n.indicators-deals .active {\r\n  background-color: #348a41;\r\n  border: 1px solid #348a41;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"breadcrumb-color meet-team\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 panda-recommend-title\">\r\n          <img src=\"assets/images/flower-marijuana.png\" alt=\"Image 1\" />\r\n          <h1>Marijuana</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row box-recommend\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 delivery-title\">\r\n        <h1>Indica</h1>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <a [routerLink]=\"['/details-dispensaries', 1]\">\r\n                            <img src=\"assets/images/dispensaries/dispensaries2.jpg\" class=\"box-image-dispensarie\">\r\n                        </a>!\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>MMEC Medical Cannabis Delivery to the High Desert</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-enabled\"></i>Available Now</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <img src=\"assets/images/dispensaries/dispensaries1.jpg\" class=\"box-image-dispensarie\">\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>Flocal Collective Inc</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-enabled\"></i>Available Now</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <img src=\"assets/images/dispensaries/dispensaries3.jpg\" class=\"box-image-dispensarie\">\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>Herbal Outfitters</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-disabled\"></i>Not Available</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarijuanaStrainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarijuanaStrainsComponent = (function () {
    function MarijuanaStrainsComponent(voucherService, viewDispensariesService) {
        this.voucherService = voucherService;
        this.viewDispensariesService = viewDispensariesService;
        this.alive = true;
    }
    MarijuanaStrainsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewDispensariesService.getDispensarie()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.dispensarie = res;
            _this.getVouchers();
        });
    };
    MarijuanaStrainsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MarijuanaStrainsComponent.prototype.getVouchers = function () {
        var _this = this;
        // this.voucherService.getVouchersByTradeLocation("R", "4", this.dispensarie.vendorLocationCode, 0, 10, 1)
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 0, 10, 1)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            console.log("res>>> ", res);
            _this.vouchers = res;
        });
    };
    MarijuanaStrainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'marijuana-strains',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_1__view_dispensaries_service__["a" /* ViewDispensariesService */]])
    ], MarijuanaStrainsComponent);
    return MarijuanaStrainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 300px\">\r\n    <h1 style=\"font-size:40px\">oral component</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OralStrainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OralStrainsComponent = (function () {
    function OralStrainsComponent() {
        this.alive = true;
    }
    OralStrainsComponent.prototype.ngOnInit = function () {
    };
    OralStrainsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    OralStrainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'oral-strains',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OralStrainsComponent);
    return OralStrainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box {\r\n  padding-top: 0px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 10px;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\r\n  margin-bottom: 20px;\r\n  height: 490px;\r\n  background-color: #fff;\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n.show-shadow-box:hover {\r\n  box-shadow: 0 20px 22px #888;\r\n}\r\n\r\n.button-dispensaries-search {\r\n  border-bottom-right-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n.position-image-location {\r\n  position: relative;\r\n  bottom: 10%;\r\n  right: 20%;\r\n}\r\n\r\n.button-dispensaries-search {\r\n  height: 40px;\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.button-dispensaries-search span:nth-child(1) {\r\n  float: left;\r\n}\r\n\r\n.button-dispensaries-search span:nth-child(2) {\r\n  float: right;\r\n}\r\n\r\n.panda-recommend-title img {\r\n  float: left;\r\n}\r\n\r\n.panda-recommend-title h1 {\r\n  float: left;\r\n  font-size: 30px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n}\r\n\r\n.panda-recommend-title-search img {\r\n  float: left;\r\n}\r\n\r\n.panda-recommend-title-search h1 {\r\n  float: left;\r\n  font-size: 30px;\r\n  text-shadow: 4px 4px 4px #aaa;\r\n  padding-top: 50px;\r\n}\r\n\r\n.box-dispensaries-recommend {\r\n  height: 490px;\r\n  font-size: 14px;\r\n}\r\n\r\n.box-dispensaries-recommend .show-shadow-box>div:nth-child(2) h1 {\r\n  font-size: 16px;\r\n}\r\n\r\n.box-dispensaries-recommend .show-shadow-box>div:nth-child(3) a {\r\n  float: right;\r\n  margin-right: 7px;\r\n  color: #e4b500;\r\n}\r\n\r\n.box-dispensaries-recommend .show-shadow-box>div:nth-child(5) i {\r\n  color: #348a41;\r\n  margin-right: 40px;\r\n}\r\n\r\n.color-enabled {\r\n  color: #348a41;\r\n}\r\n\r\n.color-disabled {\r\n  color: #b9b9b9 !important;\r\n}\r\n\r\n.bottom-border {\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n}\r\n\r\n.box-image-dispensarie {\r\n  height: 240px !important;\r\n}\r\n\r\n.whitout-margin-padding {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.box-recommend {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.indicators-deals {\r\n  left: 20%;\r\n}\r\n\r\n.indicators-deals li {\r\n  background-color: #fff;\r\n}\r\n\r\n.title-deals-spotlight {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.title-deals-spotlight h1 {\r\n  font-size: 40px;\r\n}\r\n\r\n.carousel-caption {\r\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .4);\r\n  top: 0%;\r\n  left: 0%;\r\n  right: 59%;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background-deals-slide.png") + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  bottom: 0%;\r\n}\r\n\r\n.carousel-caption p {\r\n  padding: 20px 20px 50px 20px;\r\n}\r\n.carousel-caption span{\r\n  font-size: 16px;\r\n}\r\n.carousel-caption h3{\r\n  font-size: 20px;\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n.navbar-categories a.active {\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  border: 1px solid #26502d;\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-categories a.active:after {\r\n  content: '';\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: -16px;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 8px solid transparent;\r\n  border-top-color: #26502d;\r\n}\r\n\r\n.navbar-categories li:hover a.active:after {\r\n  content: '';\r\n  border-top-color: #26502d;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-categories {\r\n  max-width: 100%;\r\n  margin-bottom: 30px;\r\n  color: #fff;\r\n  border-radius: 0px 0px 4px 4px;\r\n  background-color: #348a41;\r\n}\r\n\r\n.navbar-categories .menu {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-categories .menu li {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  transition: background-color .5s ease;\r\n  text-align: center;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.navbar-categories .menu a {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  padding: 20px;\r\n  color: #fff;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.navbar-categories .menu a>.fa {\r\n  font-weight: bold;\r\n  margin-left: 8px;\r\n}\r\n\r\n.navbar-categories .menu li:hover {\r\n  background-color: #26502d;\r\n}\r\n\r\n.navbar-categories .menu li:hover .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar-categories a.hasDropdown:after {\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: -16px;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 8px solid transparent;\r\n  border-top-color: #348a41;\r\n}\r\n\r\n.navbar-categories li:hover a.hasDropdown:after {\r\n  content: '';\r\n  border-top-color: #26502d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container box-content-dispensarie\">\r\n    <div class=\"row\">\r\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n        <ol class=\"carousel-indicators indicators-deals\">\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n          <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n        </ol>\r\n\r\n        <div class=\"carousel-inner\" role=\"listbox\">\r\n          <div class=\"item active\">\r\n            <img src=\"assets/images/marley-natural.jpg\" alt=\"Chania\">\r\n            <div class=\"carousel-caption\">\r\n              <span class=\"btn btn-join\">\r\n                  30% <br/>off on first purchase\r\n              </span>\r\n              <h3>Product title</h3>\r\n              <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n              <a class=\"btn btn-login\">Learn more</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\">\r\n            <img src=\"assets/images/marley-natural.jpg\" alt=\"Chania\">\r\n            <div class=\"carousel-caption\">\r\n              <span class=\"btn btn-join\">\r\n                  30% <br/>off on first purchase\r\n              </span>\r\n              <h3>Product title</h3>\r\n              <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n              <a class=\"btn btn-login\">Learn more</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\">\r\n            <img src=\"assets/images/marley-natural.jpg\" alt=\"Flower\">\r\n            <div class=\"carousel-caption\">\r\n              <span class=\"btn btn-join\">\r\n                  30% <br/>off on first purchase\r\n              </span>\r\n              <h3>Product title</h3>\r\n              <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n              <a class=\"btn btn-login\">Learn more</a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\">\r\n            <img src=\"assets/images/marley-natural.jpg\" alt=\"Flower\">\r\n            <div class=\"carousel-caption\">\r\n              <span class=\"btn btn-join\">\r\n                  30% <br/>off on first purchase\r\n              </span>\r\n              <h3>Product title</h3>\r\n              <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n              <a class=\"btn btn-login\">Learn more</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <nav class=\"navbar-categories\">\r\n        <ul class=\"menu\">\r\n          <li *ngFor=\"let item of menuList\">\r\n            <a [routerLink]=\"[item.path]\" routerLinkActive=\"active\">{{ item.title }}</a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- <div class=\"breadcrumb-color meet-team\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 panda-recommend-title\">\r\n          <img src=\"assets/images/flower-marijuana.png\" alt=\"Image 1\" />\r\n          <h1>Marijuana</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row box-recommend\">\r\n      <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 delivery-title\">\r\n        <h1>Indica</h1>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <a [routerLink]=\"['/details-dispensaries', 1]\">\r\n                            <img src=\"assets/images/dispensaries/dispensaries2.jpg\" class=\"box-image-dispensarie\">\r\n                        </a>!\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>MMEC Medical Cannabis Delivery to the High Desert</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-enabled\"></i>Available Now</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <img src=\"assets/images/dispensaries/dispensaries1.jpg\" class=\"box-image-dispensarie\">\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>Flocal Collective Inc</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-enabled\"></i>Available Now</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-4 col-sd-4 col-xs-4 box-dispensaries-recommend\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 show-shadow-box\">\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 bottom-border\">\r\n            <img src=\"assets/images/dispensaries/dispensaries3.jpg\" class=\"box-image-dispensarie\">\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <h1>Herbal Outfitters</h1>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12 whitout-margin-padding\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <span>\r\n                                <i class=\"fa fa-circle color-disabled\"></i>Not Available</span>\r\n              <br/>\r\n              <span>\r\n                                <i class=\"fa fa-map-marker\"></i>Hesperia, CA</span>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sd-6 col-xs-6\">\r\n              <a class=\"color-disabled\">\r\n                                <i class=\"fa fa-thumbs-down\"></i>0</a>\r\n              <a>\r\n                                <i class=\"fa fa-thumbs-up\"></i>12</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 col-xs-12\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <i class=\"fa fa-money\"></i>\r\n            <i class=\"fa fa-credit-card-alt\"></i>\r\n            <i class=\"fa fa-paypal\"></i>\r\n            <i class=\"fa fa-truck\"></i>\r\n            <i class=\"fa fa-wheelchair\"></i>\r\n          </div>\r\n          <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <button class=\"btn btn-primary\">Learn more</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n <div class=\"container\">\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"row store-brand\">\r\n\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/barkley.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/guzzy.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/actived.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/codeca.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/bullos.jpg\" alt=\"\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n          <img class=\"img-responsive img-customer\" src=\"assets/images/clients/violago.jpg\" alt=\"\" />\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrainsDispensariesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StrainsDispensariesComponent = (function () {
    function StrainsDispensariesComponent(route, tradeService, voucherService, router) {
        this.route = route;
        this.tradeService = tradeService;
        this.voucherService = voucherService;
        this.router = router;
        this.alive = true;
        this.menuList = [
            { title: "Marijuana", path: "marijuana" },
            { title: "Extracts", path: "extracts" },
            { title: "Edibles", path: "edibles" },
            { title: "Oral", path: "oral" },
            { title: "Topicals", path: "topicals" }
        ];
    }
    StrainsDispensariesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 1, 10, 1).subscribe(function (v) {
            _this.vouchers = v;
        });
    };
    StrainsDispensariesComponent.prototype.searchIndica = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 1, 10, 1).subscribe(function (v) {
            _this.indica = v;
        });
    };
    StrainsDispensariesComponent.prototype.searchSativa = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 1, 10, 1).subscribe(function (v) {
            _this.sativa = v;
        });
    };
    StrainsDispensariesComponent.prototype.searchExtracts = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 1, 10, 1).subscribe(function (v) {
            _this.extracts = v;
        });
    };
    StrainsDispensariesComponent.prototype.searchEdibles = function () {
        var _this = this;
        this.voucherService.getVouchersByTradeLocation("4", "4", "4", 1, 10, 1).subscribe(function (v) {
            _this.edibles = v;
        });
    };
    StrainsDispensariesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StrainsDispensariesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'strains-dispensaries',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_3__common_voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], StrainsDispensariesComponent);
    return StrainsDispensariesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height: 300px\">\r\n    <h1 style=\"font-size:40px\">topicals component</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicalsStrainsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicalsStrainsComponent = (function () {
    function TopicalsStrainsComponent() {
        this.alive = true;
    }
    TopicalsStrainsComponent.prototype.ngOnInit = function () {
    };
    TopicalsStrainsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TopicalsStrainsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topicals-strains',
            template: __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicalsStrainsComponent);
    return TopicalsStrainsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDispensariesModule", function() { return ViewDispensariesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_dispensaries_routing__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_dispensaries_service__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_view_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__review_review_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_products_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__strains_strains_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__strains_marijuana_marijuana_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__strains_extracts_extracts_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__strains_edibles_edibles_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__strains_oral_oral_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__strains_topicals_topicals_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_components_voucher__ = __webpack_require__("../../../../../src/app/common/components/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_trade__ = __webpack_require__("../../../../../src/app/common/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ViewDispensariesModule = (function () {
    function ViewDispensariesModule() {
    }
    ViewDispensariesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__view_dispensaries_routing__["a" /* ViewDispensariesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_17__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_18__common_components_voucher__["a" /* VoucherCardModule */],
                __WEBPACK_IMPORTED_MODULE_20__common_trade__["a" /* TradeModule */],
                __WEBPACK_IMPORTED_MODULE_19__slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__main_view_dispensaries_component__["a" /* ViewDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__details_details_dispensaries_component__["a" /* DetailsDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_dispensaries_component__["a" /* HomeDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__products_products_dispensaries_component__["a" /* ProductsDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__strains_strains_dispensaries_component__["a" /* StrainsDispensariesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__strains_marijuana_marijuana_strains_component__["a" /* MarijuanaStrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__strains_extracts_extracts_strains_component__["a" /* ExtractsStrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__strains_edibles_edibles_strains_component__["a" /* EdiblesStrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__strains_oral_oral_strains_component__["a" /* OralStrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__strains_topicals_topicals_strains_component__["a" /* TopicalsStrainsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__review_review_dispensaries_component__["a" /* ReviewDispensariesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__view_dispensaries_service__["a" /* ViewDispensariesService */]
            ]
        })
    ], ViewDispensariesModule);
    return ViewDispensariesModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDispensariesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_view_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/main/view-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/details/details-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/home/home-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_review_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/review/review-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_products_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/products/products-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__strains_strains_dispensaries_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/strains-dispensaries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__strains_marijuana_marijuana_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/marijuana/marijuana-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__strains_extracts_extracts_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/extracts/extracts-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__strains_edibles_edibles_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/edibles/edibles-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__strains_oral_oral_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/oral/oral-strains.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__strains_topicals_topicals_strains_component__ = __webpack_require__("../../../../../src/app/modules/dispensaries/view-dispensaries/strains/topicals/topicals-strains.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ViewDispensariesRoutes = [
    {
        path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__main_view_dispensaries_component__["a" /* ViewDispensariesComponent */], children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_dispensaries_component__["a" /* HomeDispensariesComponent */]
            },
            {
                path: 'details', component: __WEBPACK_IMPORTED_MODULE_3__details_details_dispensaries_component__["a" /* DetailsDispensariesComponent */]
            },
            {
                path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_5__review_review_dispensaries_component__["a" /* ReviewDispensariesComponent */]
            },
            {
                path: 'strains', component: __WEBPACK_IMPORTED_MODULE_7__strains_strains_dispensaries_component__["a" /* StrainsDispensariesComponent */], children: [
                    {
                        path: '', redirectTo: 'marijuana', pathMatch: 'full'
                    },
                    {
                        path: 'marijuana', component: __WEBPACK_IMPORTED_MODULE_8__strains_marijuana_marijuana_strains_component__["a" /* MarijuanaStrainsComponent */]
                    },
                    {
                        path: 'extracts', component: __WEBPACK_IMPORTED_MODULE_9__strains_extracts_extracts_strains_component__["a" /* ExtractsStrainsComponent */]
                    },
                    {
                        path: 'edibles', component: __WEBPACK_IMPORTED_MODULE_10__strains_edibles_edibles_strains_component__["a" /* EdiblesStrainsComponent */]
                    },
                    {
                        path: 'oral', component: __WEBPACK_IMPORTED_MODULE_11__strains_oral_oral_strains_component__["a" /* OralStrainsComponent */]
                    },
                    {
                        path: 'topicals', component: __WEBPACK_IMPORTED_MODULE_12__strains_topicals_topicals_strains_component__["a" /* TopicalsStrainsComponent */]
                    },
                ]
            },
            {
                path: 'products', component: __WEBPACK_IMPORTED_MODULE_6__products_products_dispensaries_component__["a" /* ProductsDispensariesComponent */]
            },
        ]
    },
];
var ViewDispensariesRoutingModule = (function () {
    function ViewDispensariesRoutingModule() {
    }
    ViewDispensariesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(ViewDispensariesRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ViewDispensariesRoutingModule);
    return ViewDispensariesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDispensariesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewDispensariesService = (function () {
    function ViewDispensariesService(tradeService) {
        this.tradeService = tradeService;
        this.alive = true;
    }
    ViewDispensariesService.prototype.setDispensarie = function (tradeLocationCode) {
        var _this = this;
        this.observable = this.tradeService.getTrade(tradeLocationCode).takeWhile(function () { return _this.alive; });
        this.observable.subscribe(function (dispensarie) {
            _this.dispensarie = dispensarie;
            console.log("setDispensarie>>> ", _this.dispensarie);
        });
    };
    ViewDispensariesService.prototype.getDispensarie = function () {
        return this.observable;
    };
    ViewDispensariesService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ViewDispensariesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_trade_trade_service__["a" /* TradeService */]])
    ], ViewDispensariesService);
    return ViewDispensariesService;
}());



/***/ })

});
//# sourceMappingURL=view-dispensaries.module.chunk.js.map