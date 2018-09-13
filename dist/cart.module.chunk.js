webpackJsonp(["cart.module"],{

/***/ "../../../../../src/app/common/pipes/sum.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// use: {{ array | sum:'attrToSum' }}
var SumPipe = (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (items, attr) {
        return items.reduce(function (a, b) { return a + b[attr]; }, 0);
    };
    SumPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sum'
        })
    ], SumPipe);
    return SumPipe;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".confirmation-title {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin: 30px 0 10px 0;\r\n  line-height: initial;\r\n}\r\n\r\n.confirmation-subtitle {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin: 10px 0 10px 0;\r\n}\r\n\r\n.confirmation-desc {\r\n  margin: 10px 0 10px 0;\r\n}\r\n\r\n.item-desc {\r\n  padding-right: 15px;\r\n}\r\n\r\n.item-desc-value {\r\n  font-weight: bold;\r\n}\r\n\r\n.item-img {\r\n  padding: 10px 10px 5px 10px;\r\n  width: 100px;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayoutWrap style=\"padding-bottom:50px\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n  <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <ngl-notification *ngIf=\"errorCheckout\" type=\"toast\" fxFlex=\"90\" severity=\"error\">\r\n      <div class=\"slds-grid\">\r\n        <div class=\"slds-col slds-align-middle\">Error in checkout, try again</div>\r\n      </div>\r\n    </ngl-notification>\r\n    <h1 class=\"confirmation-title\">Thank you for your order, E. Panda!</h1>\r\n    <!-- <span class=\"confirmation-subtitle\">Order #\r\n      <span style=\"color: #348a41;\">123-45678</span> -->\r\n    <!-- </span> -->\r\n    <p class=\"confirmation-desc\">Thank you for shopping with us. Panda Weed has received your order and is preparing it for shipment. A reciept will be\r\n      e-mailed to you for your records. Your estimated delivery date is below, if you would like to view the status of your\r\n      order or make changes, please visit\r\n      <a style=\"color: #348a41; font-weight: bold;\">Tobaco Free Hookah</a> on Pandaweed.com</p>\r\n  </div>\r\n\r\n  <app-card fxFlex=\"100\" style=\"margin:0px !important\">\r\n    <app-card-body>\r\n      <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start stretch\" style=\"min-height: 140px; margin:15px\">\r\n        <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\" style=\"border-right: 1px solid #b7b7b7\">\r\n          <span style=\"color: #348a41; font-weight: bold; font-size:1.1em; margin-bottom: 15px\">Estimated Delivery Date</span>\r\n          <span style=\"font-weight: bold;\">{{currentDate|date:'yyyy/MM/dd'}}</span>\r\n        </div>\r\n        <div fxFlex *ngIf=\"shipping\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" style=\"margin-left: 15px; border-right: 1px solid #b7b7b7\">\r\n          <span style=\"color: #348a41; font-weight: bold; font-size:1.1em; margin-bottom: 15px\">Your Order is Being Sent To</span>\r\n          <span style=\"font-weight: bold;\">{{shipping.fullName}}</span>\r\n          <span>{{shipping.address1}}</span>\r\n          <span>{{shipping.province}}, {{shipping.zipOrPostalCode}}</span>\r\n        </div>\r\n        <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\" style=\"margin-left: 15px;\">\r\n          <span style=\"color: #348a41; font-weight: bold; font-size:1.1em; margin-bottom: 15px\">Your Shipping Speed</span>\r\n          <span style=\"font-weight: bold;\">Express Shipping</span>\r\n        </div>\r\n      </div>\r\n    </app-card-body>\r\n  </app-card>\r\n\r\n  <app-card fxFlex=\"100\" fxFlex.gt-sm=\"70\">\r\n    <app-card-body>\r\n      <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\" style=\"margin:15px\">\r\n        <!-- <span class=\"confirmation-subtitle\">Order Details:</span> -->\r\n        <!-- <span style=\"font-weight: bold;\">Order Placed: -->\r\n        <!-- <span style=\"color: #348a41;\">January 1, 2018 | 9:30am</span> -->\r\n        <!-- </span> -->\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" style=\"padding-bottom: 15px\" *ngFor=\"let item of cartItems.vouchers; let i = index\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"padding-right: 10px\">\r\n              <img class=\"item-img\" src=\"/assets/images/store/product/2.jpg\">\r\n            </div>\r\n            <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n              <div fxFlex class=\"item-desc\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span>Name</span>\r\n                <span class=\"item-desc-value\">{{ item.shortDescription }}</span>\r\n              </div>\r\n              <div fxFlex class=\"item-desc\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span>Price</span>\r\n                <span class=\"item-desc-value\">{{ item.price | currency:'USD':'symbol-narrow' }}</span>\r\n              </div>\r\n              <div fxFlex class=\"item-desc\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span>Quantity</span>\r\n                <span class=\"item-desc-value\">{{ item.quantity }}</span>\r\n              </div>\r\n            </div>\r\n            <div fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <span>{{ item.status }}</span>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </app-card-body>\r\n  </app-card>\r\n  <app-card fxFlex=\"100\" fxFlex.gt-sm=\"70\">\r\n    <app-card-body>\r\n      <div fxFlex fxLayout=\"column\" fxLayout.gt-sm=\"row\"  style=\"margin:15px\" *ngIf=\"cartTotal > 0\">\r\n        <div  fxFlex=\"100\" fxFlex.gt-sm=\"60\" fxLayout=\"column\"  style=\"border-right: 1px solid #b7b7b7\">\r\n          <span class=\"confirmation-subtitle\">Order Summary</span>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of cartItems.vouchers\">\r\n            <span fxFlex>{{ item.name }} {{ item.quantity > 1 ? 'x'+item.quantity : '' }}</span>\r\n            <span fxFlex=\"20\">{{ (item.price * item.quantity) | currency:'USD':'symbol-narrow' }}</span>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span fxFlex>Shipping and Handling</span>\r\n            <span fxFlex=\"20\">$0.0</span>\r\n          </div>\r\n          <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span fxFlex>Gift Card</span>\r\n            <span fxFlex=\"20\">$0.0</span>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"border-bottom: 1px solid #b7b7b7\">\r\n            <span fxFlex>Promotion</span>\r\n            <span fxFlex=\"20\">$0.0</span>\r\n          </div> -->\r\n          <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span fxFlex></span>\r\n            <span style=\"font-weight: bold;\" fxFlex=\"20\">$0.0</span>\r\n          </div> -->\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span fxFlex>Total Before Tax</span>\r\n            <span fxFlex=\"20\">${{cartItems.grandSubtotal}}</span>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"border-bottom: 1px solid #b7b7b7\">\r\n            <span fxFlex>Taxes</span>\r\n            <span fxFlex=\"20\">$0.0</span>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <span style=\"font-weight: bold;\" fxFlex>Order Total</span>\r\n            <span style=\"font-weight: bold; color: #348a41;\" fxFlex=\"20\">${{cartItems.grandTotal}}</span>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\" style=\"margin-left:20px\">\r\n          <div fxLayout=\"row\" style=\"padding: 5px 0\">\r\n            <div fxFlex=\"100\" style=\"margin:15px\" *ngIf=\"checkoutDone && !errorCheckout \">\r\n              Thank you for your order, E. Panda!\r\n            </div>\r\n            <div fxFlex=\"100\" style=\"margin:15px\"  *ngIf=\"checkoutDone\">\r\n              <button class=\"btn btn-primary\" (click)=\"continue()\">Continue to Home</button>\r\n            </div>\r\n            <div fxFlex fxLayout=\"row\" *ngIf=\"!checkoutDone\">\r\n              <fieldset ngl-form-group label=\"Payment method\" [required]=\"required\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n                <ngl-form-group-element label=\"Credit Card\">\r\n                  <input nglFormControl value=\"true\" type=\"radio\" [(ngModel)]=\"isCreditCard\"  />\r\n                </ngl-form-group-element>\r\n              </fieldset>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" style=\"padding: 5px 0\">\r\n                  <div fxFlex=\"5\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <input type=\"radio\" />\r\n                  </div>\r\n                  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item-payment-method\">\r\n                    <div fxFlex=\"20\" style=\"font-weight:bold\">\r\n                      PAYPAL\r\n                    </div>\r\n                    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                      <span style=\"margin-right: 15px\">Selecting this option will take the user out of pandaweed.com store and to site.com to finish the transation</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" style=\"padding: 5px 0\">\r\n                  <div fxFlex=\"5\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <input type=\"radio\" />\r\n                  </div>\r\n                  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"item-payment-method\">\r\n                    <div fxFlex=\"20\" style=\"font-weight:bold\">\r\n                      BITCOIN\r\n                    </div>\r\n                    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                      <span style=\"margin-right: 15px\">Selecting this option will take the user out of pandaweed.com store and to site.com to finish the transation</span>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n          <button class=\"btn btn-primary\" style=\"margin-top:30px\" *ngIf=\"!checkoutDone\" [disabled]=\"!isCreditCard \" (click)=\"onClickBuy()\">Confirm</button>\r\n          <!-- <button class=\"btn btn-danger\" style=\"margin-top:10px\">Cancel Order</button> -->\r\n        </div>\r\n      </div>\r\n    </app-card-body>\r\n  </app-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_stripe_checkout__ = __webpack_require__("../../../../ng-stripe-checkout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartConfirmationComponent = (function () {
    function CartConfirmationComponent(stripeCheckoutLoader, userprofileService, userService, router, useractivityService) {
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.userprofileService = userprofileService;
        this.userService = userService;
        this.router = router;
        this.useractivityService = useractivityService;
        this.alive = true;
        this.currentDate = new Date();
        this.isCreditCard = false;
        this.errorCheckout = false;
        this.checkoutDone = false;
    }
    CartConfirmationComponent.prototype.getShippingAddresses = function () {
        var _this = this;
        // this.userprofileService.getShippingAddresses()
        //   .takeWhile(() => this.alive).subscribe((resp) => {
        //     this.addresses = resp;
        //     console.log("this.addresses>>> ", this.addresses);
        //   })
        this.userprofileService.getUserProfile()
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            console.log("getUserProfile>>> ", resp.shippingAddresses);
            _this.shipping = {
                fullName: resp.shippingFullName,
                address1: resp.shippingAddress1,
                address2: resp.shippingAddress2,
                city: resp.shippingCity,
                province: resp.shippingProvince,
                zipOrPostalCode: resp.shippingZipOrPostalCode,
                phoneNumber: resp.shippingPhoneNumber,
            };
            _this.billing = {
                fullName: resp.billingFullName,
                address1: resp.billingAddress1,
                address2: resp.billingAddress2,
                city: resp.billingCity,
                province: resp.billingProvince,
                zipOrPostalCode: resp.billingZipOrPostalCode,
                phoneNumber: resp.billingPhoneNumber,
            };
        });
    };
    CartConfirmationComponent.prototype.currentUser = function () {
        var _this = this;
        this.userService.getUser().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            _this.user = user;
        });
        this.useractivityService.getSources().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            console.log("SOURCES", user);
        });
    };
    CartConfirmationComponent.prototype.continue = function () {
        this.router.navigate(["/"]);
    };
    CartConfirmationComponent.prototype.checkout = function () {
        var _this = this;
        this.useractivityService.checkout("4", true).subscribe(function () {
            _this.useractivityService.cartChanged.next(true);
        }, function () {
            _this.errorCheckout = true;
        });
    };
    CartConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDate.setDate(this.currentDate.getDate() + 2);
        this.currentUser();
        this.getShippingAddresses();
        this.stripeCheckoutLoader.createHandler({
            key: 'pk_test_XkEqeYkXhH2GnE8M1qpPMoFJ',
            token: function (token) {
                _this.checkoutDone = true;
                _this.useractivityService.addSource(_this.shipping.fullName, _this.shipping.fullName, token.id, _this.shipping.phoneNumber).subscribe(function () {
                    _this.checkout();
                }, function () {
                    _this.checkout();
                });
                // Do something with the token...
                console.log('Payment successful!', token);
            },
        }).then(function (handler) {
            _this.stripeCheckoutHandler = handler;
        });
        this.getCartItems();
    };
    CartConfirmationComponent.prototype.getCartItems = function () {
        var _this = this;
        this.cartItems = {};
        this.useractivityService.getShoppingCart(false).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            console.log(res);
            _this.cartItems = res;
            _this.cartTotal = _this.cartItems.grandTotalVouchers;
        }, function (error) {
            console.log('Error occured' + error);
        });
    };
    CartConfirmationComponent.prototype.onClickBuy = function () {
        if (!this.cartItems || this.cartItems.grandTotalVouchers < 1) {
            alert("invalid items");
            return;
        }
        if (!this.cartItems || this.cartItems.grandTotal < 0) {
            alert("invalid Total");
            return;
        }
        var description = this.cartItems.vouchers.map(function (vo) { return vo.shortDescription; }).join(" - ");
        this.errorCheckout = false;
        this.stripeCheckoutHandler.open({
            amount: this.cartItems.grandTotal * 100,
            image: "/assets/images/logo_big.png",
            name: "Panda Weed",
            description: description,
            email: this.user.userName,
            currency: 'USD',
        });
    };
    CartConfirmationComponent.prototype.onClickCancel = function () {
        // If the window has been opened, this is how you can close it:
        this.stripeCheckoutHandler.close();
    };
    CartConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-confirmation',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_stripe_checkout__["a" /* StripeCheckoutLoader */],
            __WEBPACK_IMPORTED_MODULE_3__common_user_userprofile_service__["a" /* UserprofileService */],
            __WEBPACK_IMPORTED_MODULE_4__common_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_user_useractivity_service__["a" /* UserActivityService */]])
    ], CartConfirmationComponent);
    return CartConfirmationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-done/cart-done.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-done/cart-done.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-bottom:50px\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n  <h1 style=\"font-size: 35px\">done!</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-done/cart-done.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDoneComponent; });
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

var CartDoneComponent = (function () {
    function CartDoneComponent() {
    }
    CartDoneComponent.prototype.ngOnInit = function () {
    };
    CartDoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart-done',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-done/cart-done.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-done/cart-done.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartDoneComponent);
    return CartDoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-main/cart-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-item{\r\n  color: #848484;\r\n  font-size: 1em;\r\n  text-decoration: none;\r\n}\r\n.menu-item-active{\r\n  color: #348a41;\r\n}\r\na.disabled {\r\n  pointer-events: none;\r\n  cursor: default;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-main/cart-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ol class=\"breadcrumb\" style=\"margin: 0 0 25px 0\">\r\n    <li *ngFor=\"let item of menuList\">\r\n      <a class=\"menu-item\" *ngIf=\"numberVoucherCart > 0\" [class.disabled]=\"!stepEnabled(item) ? true : null\" [routerLink]=\"[item.path]\" routerLinkActive=\"menu-item-active\">{{ item.title }}</a>\r\n      <span class=\"menu-item\" *ngIf=\"numberVoucherCart < 1\">{{ item.title }}</span>\r\n\r\n    </li>\r\n  </ol>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-main/cart-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartMainComponent = (function () {
    function CartMainComponent(useractivityService, router) {
        var _this = this;
        this.useractivityService = useractivityService;
        this.router = router;
        this.alive = true;
        this.maxStep = 0;
        this.numberVoucherCart = 0;
        this.useractivityService.cartChanged.takeWhile(function () { return _this.alive; }).subscribe(function (changedCart) {
            if (changedCart) {
                _this.getProductsCart();
            }
        });
        this.menuList = [
            { title: "Summary", path: "summary" },
            { title: "Payment Method", path: "payment" },
            { title: "Shipping", path: "shipping" },
            { title: "Confirmation", path: "confirmation" },
        ];
    }
    CartMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductsCart();
        this.validateCurrentStep(this.router.url);
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.validateCurrentStep(event.url);
            }
        });
    };
    CartMainComponent.prototype.validateCurrentStep = function (url) {
        var firsStep = this.maxStep === 0;
        if (url.indexOf("payment") > -1 && this.maxStep <= 1) {
            this.maxStep = 1;
        }
        else if (url.indexOf("shipping") > -1 && this.maxStep <= 2) {
            this.maxStep = 2;
        }
        else if (url.indexOf("confirmation") > -1 && this.maxStep <= 3) {
            this.maxStep = 3;
        }
        if (firsStep && this.maxStep > 1) {
            this.maxStep = 0;
            this.router.navigate(["/store/cart"]);
        }
    };
    CartMainComponent.prototype.stepEnabled = function (item) {
        var iteIndex = 0;
        for (var iteI in this.menuList) {
            var ite = this.menuList[iteI];
            if (item.path === ite.path) {
                iteIndex = iteI;
                break;
            }
        }
        return iteIndex <= this.maxStep;
    };
    CartMainComponent.prototype.getProductsCart = function () {
        var _this = this;
        this.productsCart = {};
        this.useractivityService.getShoppingCart(false).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            _this.productsCart = res;
            _this.numberVoucherCart = _this.productsCart.grandTotalVouchers;
        }, function (error) {
            console.log('Error occured' + error);
        });
    };
    CartMainComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    CartMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart-main',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-main/cart-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-main/cart-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__["a" /* UserActivityService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], CartMainComponent);
    return CartMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cart-payment-method-credit works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPaymentMethodCreditComponent; });
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

var CartPaymentMethodCreditComponent = (function () {
    function CartPaymentMethodCreditComponent() {
    }
    CartPaymentMethodCreditComponent.prototype.ngOnInit = function () {
    };
    CartPaymentMethodCreditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-payment-method-credit',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartPaymentMethodCreditComponent);
    return CartPaymentMethodCreditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".payment-title {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin: 30px 0 10px 0;\r\n}\r\n\r\n.item-payment-method {\r\n  border-radius: 5px 5px 5px 5px;\r\n  -moz-border-radius: 5px 5px 5px 5px;\r\n  -webkit-border-radius: 5px 5px 5px 5px;\r\n  border: 1px solid #d8d8d8;\r\n  padding: 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-bottom:50px\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <h1 class=\"payment-title\">Billing Address</h1>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <app-card fxFlex>\r\n        <app-card-body>\r\n          <form [formGroup]=\"addressForm\" style=\"margin:15px\">\r\n            <ngl-form-element label=\"Full Name\" [error]=\"!addressForm.get('fullName').valid && addressForm.get('fullName').touched ? 'Please enter your name' : null\" class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Full Name\" required=\"required\" formControlName=\"fullName\">\r\n            </ngl-form-element>\r\n            <ngl-form-element label=\"Address Line 1\" [error]=\"!addressForm.get('address1').valid && addressForm.get('address1').touched ? 'Please enter your address' : null\" class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Address Line 1\" required=\"required\" formControlName=\"address1\">\r\n            </ngl-form-element>\r\n            <ngl-form-element label=\"Address Line 2\"  class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Address Line 2\" formControlName=\"address2\">\r\n            </ngl-form-element>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n              <ngl-form-element fxFlex label=\"City\" [error]=\"!addressForm.get('city').valid && addressForm.get('city').touched ? 'Please enter your city' : null\" class=\"slds-m-top--small\" style=\"margin-right:10px\">\r\n                <input nglFormControl type=\"text\" placeholder=\"City\" required=\"required\"  formControlName=\"city\">\r\n              </ngl-form-element>\r\n              <ngl-form-element fxFlex label=\"State/Provence/Region\" [error]=\"!addressForm.get('province').valid && addressForm.get('province').touched ? 'Please enter your State/Provence/Region' : null\" class=\"slds-m-top--small\">\r\n                <input nglFormControl type=\"text\" placeholder=\"State/Provence/Region\" required=\"required\"  formControlName=\"province\">\r\n              </ngl-form-element>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n              <ngl-form-element fxFlex label=\"ZIP\" [error]=\"!addressForm.get('zipOrPostalCode').valid && addressForm.get('zipOrPostalCode').touched ? 'Please enter your Zip Code' : null\" class=\"slds-m-top--small\" style=\"margin-right:10px\">\r\n                <input nglFormControl type=\"text\" placeholder=\"ZIP\" required=\"required\"  formControlName=\"zipOrPostalCode\">\r\n              </ngl-form-element>\r\n              <ngl-form-element fxFlex label=\"Phone Number\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n                <input nglFormControl type=\"text\" placeholder=\"Phone Number\" required=\"required\"  formControlName=\"phoneNumber\">\r\n              </ngl-form-element>\r\n            </div>\r\n          </form>\r\n        </app-card-body>\r\n        <app-card-actions>\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"margin: 0 10px 10px 0\">\r\n            <!-- <button class=\"btn btn-danger\" style=\"margin-right: 10px\">Dismiss Changes</button> -->\r\n            <button class=\"btn btn-primary\" [disabled]=\"!addressForm.valid\" (click)=\"addBillingAddress()\">Proceed With Checkout</button>\r\n          </div>\r\n        </app-card-actions>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n<!-- \r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <h1 class=\"payment-title\" style=\"font-size:22px\">Choose a Previously Saved Billing Address</h1>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <app-card fxFlex=\"30\" *ngFor=\"let item of addresses\">\r\n        <app-card-body>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <div fxFlex=\"15\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <input type=\"radio\" />\r\n            </div>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n              <span style=\"font-size:1.1em; font-weight: bold\">{{ item.fullName }}</span>\r\n              <span>{{ item.address1 }}</span>\r\n              <span>{{ item.address2 }}</span>\r\n              <span>{{ item.province + \", \" + item.city }}</span>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <span style=\"font-weight:bold\">Phone: </span>\r\n                <span> {{ item.phoneNumber }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </app-card-body>\r\n        <app-card-actions>\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button class=\"btn btn-link\" style=\"margin-right: 10px\" (click)=\"deleteBillingAddress(i)\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n            <button class=\"btn btn-link\"><i class=\"fa fa-pencil\" (click)=\"editBillingAddress(i)\"></i> Edit</button>\r\n          </div>\r\n        </app-card-actions>\r\n      </app-card>\r\n    </div>\r\n  </div> -->\r\n\r\n<!-- \r\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:30px\">\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/store/cart/shipping']\">Proceed With Checkout</button>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPaymentMethodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
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




var CartPaymentMethodComponent = (function () {
    function CartPaymentMethodComponent(formBuilder, userprofileService, router) {
        this.formBuilder = formBuilder;
        this.userprofileService = userprofileService;
        this.router = router;
        this.alive = true;
        this.addresses = [];
        this.addressForm = formBuilder.group({
            'fullName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'address1': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'address2': [null],
            'city': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'province': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'zipOrPostalCode': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'phoneNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
        });
    }
    CartPaymentMethodComponent.prototype.ngOnInit = function () {
        this.getBillingAddresses();
    };
    CartPaymentMethodComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    CartPaymentMethodComponent.prototype.addBillingAddress = function () {
        this.addresses.push(this.addressForm.value);
        console.log(">>> ", JSON.stringify(this.addresses));
        this.saveBillingAddresses();
    };
    CartPaymentMethodComponent.prototype.getBillingAddresses = function () {
        var _this = this;
        this.userprofileService.getUserProfile()
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            console.log("resp", resp);
            _this.addressForm.patchValue({
                fullName: resp.billingFullName,
                address1: resp.billingAddress1,
                address2: resp.billingAddress2,
                city: resp.billingCity,
                province: resp.billingProvince,
                zipOrPostalCode: resp.billingZipOrPostalCode,
                phoneNumber: resp.billingPhoneNumber,
            });
        });
    };
    CartPaymentMethodComponent.prototype.saveBillingAddresses = function () {
        var _this = this;
        this.userprofileService.setUserProfile([
            { key: "billingFullName", value: this.addressForm.value.fullName },
            { key: "billingAddress1", value: this.addressForm.value.address1 },
            { key: "billingAddress2", value: this.addressForm.value.address2 },
            { key: "billingCity", value: this.addressForm.value.city },
            { key: "billingProvince", value: this.addressForm.value.province },
            { key: "billingZipOrPostalCode", value: this.addressForm.value.zipOrPostalCode },
            { key: "billingPhoneNumber", value: this.addressForm.value.phoneNumber },
        ])
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            _this.router.navigate(['/store/cart/shipping']);
        });
    };
    CartPaymentMethodComponent.prototype.deleteBillingAddress = function (index) {
        this.addresses.splice(index, 1);
        this.saveBillingAddresses();
    };
    CartPaymentMethodComponent.prototype.editBillingAddress = function (index) {
        this.addressForm.setValue(this.addresses[index]);
    };
    CartPaymentMethodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-payment-method',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__common_user_userprofile_service__["a" /* UserprofileService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], CartPaymentMethodComponent);
    return CartPaymentMethodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-review/cart-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-review/cart-review.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cart-review works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-review/cart-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartReviewComponent; });
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

var CartReviewComponent = (function () {
    function CartReviewComponent() {
    }
    CartReviewComponent.prototype.ngOnInit = function () {
    };
    CartReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-review',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-review/cart-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-review/cart-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartReviewComponent);
    return CartReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".payment-title {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  margin: 30px 0 10px 0;\r\n}\r\n\r\n.item-payment-method {\r\n  border-radius: 5px 5px 5px 5px;\r\n  -moz-border-radius: 5px 5px 5px 5px;\r\n  -webkit-border-radius: 5px 5px 5px 5px;\r\n  border: 1px solid #d8d8d8;\r\n  padding: 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-bottom:50px\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <h1 class=\"payment-title\">Shipping Address</h1>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <app-card fxFlex>\r\n        <app-card-body>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\r\n            <button class=\"btn btn-primary\" (click)=\"useBillingAddress()\">Use Billing address</button>\r\n          </div>\r\n          <form [formGroup]=\"addressForm\" style=\"margin:15px\">\r\n            <ngl-form-element label=\"Full Name\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Full Name\" [required]=\"required\" formControlName=\"fullName\">\r\n            </ngl-form-element>\r\n            <ngl-form-element label=\"Address Line 1\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Address Line 1\" [required]=\"required\" formControlName=\"address1\">\r\n            </ngl-form-element>\r\n            <ngl-form-element label=\"Address Line 2\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n              <input nglFormControl type=\"text\" placeholder=\"Address Line 2\" [required]=\"required\" formControlName=\"address2\">\r\n            </ngl-form-element>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n              <ngl-form-element fxFlex label=\"City\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\" style=\"margin-right:10px\">\r\n                <input nglFormControl type=\"text\" placeholder=\"City\" [required]=\"required\" formControlName=\"city\">\r\n              </ngl-form-element>\r\n              <ngl-form-element fxFlex label=\"State/Provence/Region\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n                <input nglFormControl type=\"text\" placeholder=\"State/Provence/Region\" [required]=\"required\" formControlName=\"province\">\r\n              </ngl-form-element>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n              <ngl-form-element fxFlex label=\"ZIP\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\" style=\"margin-right:10px\">\r\n                <input nglFormControl type=\"text\" placeholder=\"ZIP\" [required]=\"required\" formControlName=\"zipOrPostalCode\">\r\n              </ngl-form-element>\r\n              <ngl-form-element fxFlex label=\"Phone Number\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n                <input nglFormControl type=\"text\" placeholder=\"Phone Number\" [required]=\"required\" formControlName=\"phoneNumber\">\r\n              </ngl-form-element>\r\n            </div>\r\n          </form>\r\n        </app-card-body>\r\n        <app-card-actions>\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"margin: 0 10px 10px 0\">\r\n            <button class=\"btn btn-primary\" (click)=\"addShippingAddress()\">Continue</button>\r\n          </div>\r\n        </app-card-actions>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <h1 class=\"payment-title\" style=\"font-size:22px\">Choose a Previously Saved Shipping Address</h1>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <app-card fxFlex=\"30\" *ngFor=\"let item of addresses; let i = index\">\r\n        <app-card-body>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <div fxFlex=\"15\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <input type=\"radio\" />\r\n            </div>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n              <span style=\"font-size:1.1em; font-weight: bold\">{{ item.fullName }}</span>\r\n              <span>{{ item.address1 }}</span>\r\n              <span>{{ item.address2 }}</span>\r\n              <span>{{ item.province + \", \" + item.city }}</span>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <span style=\"font-weight:bold\">Phone: </span>\r\n                <span> {{ item.phoneNumber }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </app-card-body>\r\n        <app-card-actions>\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button class=\"btn btn-link\" style=\"margin-right: 10px\" (click)=\"deleteShippingAddress(i)\"><i class=\"fa fa-remove\"></i> Delete</button>\r\n            <button class=\"btn btn-link\"><i class=\"fa fa-pencil\" (click)=\"editShippingAddress(i)\"></i> Edit</button>\r\n          </div>\r\n        </app-card-actions>\r\n      </app-card>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:30px\">\r\n    <button class=\"btn btn-primary\"  [routerLink]=\"['/store/cart/confirmation']\" >Continue</button>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartShippingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
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




var CartShippingComponent = (function () {
    function CartShippingComponent(formBuilder, userprofileService, router) {
        this.formBuilder = formBuilder;
        this.userprofileService = userprofileService;
        this.router = router;
        this.alive = true;
        this.addresses = [];
        this.addressForm = formBuilder.group({
            'fullName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'address1': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'address2': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'city': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'province': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'zipOrPostalCode': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
            'phoneNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)])],
        });
    }
    CartShippingComponent.prototype.ngOnInit = function () {
        this.getShippingAddresses();
    };
    CartShippingComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    CartShippingComponent.prototype.addShippingAddress = function () {
        // this.userprofileService.addShippingAddress(this.addressForm.value)
        //   .takeWhile(() => this.alive).subscribe((resp) => {
        //     console.log("addShippingAddress>>> ", resp);
        //     this.getShippingAddresses();
        //   })
        this.addresses.push(this.addressForm.value);
        console.log(">>> ", JSON.stringify(this.addresses));
        this.saveShippingAddresses();
    };
    CartShippingComponent.prototype.getShippingAddresses = function () {
        var _this = this;
        // this.userprofileService.getShippingAddresses()
        //   .takeWhile(() => this.alive).subscribe((resp) => {
        //     this.addresses = resp;
        //     console.log("this.addresses>>> ", this.addresses);
        //   })
        this.userprofileService.getUserProfile()
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            console.log("getUserProfile>>> ", resp.shippingAddresses);
            _this.addressForm.patchValue({
                fullName: resp.shippingFullName,
                address1: resp.shippingAddress1,
                address2: resp.shippingAddress2,
                city: resp.shippingCity,
                province: resp.shippingProvince,
                zipOrPostalCode: resp.shippingZipOrPostalCode,
                phoneNumber: resp.shippingPhoneNumber,
            });
        });
    };
    CartShippingComponent.prototype.useBillingAddress = function () {
        var _this = this;
        this.userprofileService.getUserProfile()
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            _this.addressForm.patchValue({
                fullName: resp.billingFullName,
                address1: resp.billingAddress1,
                address2: resp.billingAddress2,
                city: resp.billingCity,
                province: resp.billingProvince,
                zipOrPostalCode: resp.billingZipOrPostalCode,
                phoneNumber: resp.billingPhoneNumber,
            });
        });
    };
    CartShippingComponent.prototype.saveShippingAddresses = function () {
        var _this = this;
        this.userprofileService.setUserProfile([
            { key: "shippingFullName", value: this.addressForm.value.fullName },
            { key: "shippingAddress1", value: this.addressForm.value.address1 },
            { key: "shippingAddress2", value: this.addressForm.value.address2 },
            { key: "shippingCity", value: this.addressForm.value.city },
            { key: "shippingProvince", value: this.addressForm.value.province },
            { key: "shippingZipOrPostalCode", value: this.addressForm.value.zipOrPostalCode },
            { key: "shippingPhoneNumber", value: this.addressForm.value.phoneNumber },
        ])
            .takeWhile(function () { return _this.alive; }).subscribe(function (resp) {
            _this.router.navigate(['/store/cart/confirmation']);
        });
    };
    CartShippingComponent.prototype.deleteShippingAddress = function (index) {
        this.addresses.splice(index, 1);
        this.saveShippingAddresses();
    };
    CartShippingComponent.prototype.editShippingAddress = function (index) {
        this.addressForm.setValue(this.addresses[index]);
    };
    CartShippingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart-shipping',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__common_user_userprofile_service__["a" /* UserprofileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], CartShippingComponent);
    return CartShippingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-desc-value {\r\n  font-weight: bold;\r\n}\r\n\r\n.item-img {\r\n  padding: 10px 10px 5px 10px;\r\n  width: 100px;\r\n  height: auto;\r\n}\r\n\r\n.recommendation-item-img {\r\n  width: 180px;\r\n  height: auto;\r\n}\r\n\r\n.card-item{\r\n  width: 150px;\r\n  max-width: 150px;\r\n}\r\n\r\n@media only screen and (max-width: 1023px)\r\n{\r\n  .cart-title {\r\n    font-size: 26px;\r\n    font-weight: bold;\r\n    margin: 30px 0 10px 0px;\r\n    font-family: 'Ceviche One', Georgia, sans-serif;\r\n  }\r\n  .item-desc {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    padding-bottom: 10px;\r\n  }\r\n  .item-desc span{\r\n    padding-right: 10px;\r\n  }\r\n  .item-button{\r\n    margin-left: 15px;\r\n  }\r\n  .item-subtotal{\r\n    margin-right: 10px;\r\n  }\r\n\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .cart-title {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin: 30px 0 10px 0;\r\n    font-family: 'Ceviche One', Georgia, sans-serif;\r\n  }\r\n  .item-desc {\r\n    padding-right: 15px;\r\n  }\r\n  .item-button{\r\n    margin-right: 10px;\r\n  }\r\n  .item-subtotal{\r\n    margin: 10px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle.sm]=\"{'width.%':100}\" [ngStyle.md]=\"{'width.%':100}\" style=\"padding-bottom:50px\" fxLayout=\"column\"\r\n  fxLayoutAlign=\"start stretch\">\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n    <h1 class=\"cart-title\">Summary of Cart</h1>\r\n    <div *ngIf=\"!cartItems || !cartItems.vouchers\">\r\n      Cart Is empty\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngIf=\"cartItems && cartItems.vouchers\" fxLayoutWrap>\r\n      <app-card fxFlex=\"100\" fxFlex.gt-sm=\"70\">\r\n        <app-card-body>\r\n          <div *ngFor=\"let item of cartItems.vouchers; let i = index\">\r\n\r\n            <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutWrap>\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"30\">\r\n                <img *ngIf=\"!item.image\" style=\"width:100%\" class=\"item-img\" src=\"/assets/images/product/default.jpg\">\r\n                <img *ngIf=\"item.image\" style=\"width:100%\" class=\"item-img\" [src]=\"item.image\">\r\n              </div>\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"70\">\r\n                <div fxFlex fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.xs=\"start start\"\r\n                  fxLayoutAlign.sm=\"start start\" fxLayoutAlign.md=\"start start\">\r\n                  <div fxFlex class=\"item-desc\" fxLayout=\"column\" fxFlex=\"100\" fxLayout.xs=\"row\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutAlign=\"start start\">\r\n                    <span>Name</span>\r\n                    <span class=\"item-desc-value\">\r\n                      <a style=\"color:black\" (click)=\"goToProduct(item)\">{{ item.shortDescription }}</a>\r\n                    </span>\r\n                  </div>\r\n                  <div  class=\"item-desc\" fxLayout=\"column\" fxFlex=\"15\" fxLayout.xs=\"row\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutAlign=\"start start\">\r\n                    <span>Price</span>\r\n                    <span class=\"item-desc-value\">{{ item.price | currency:'USD':'symbol-narrow' }}</span>\r\n                  </div>\r\n                  <div  class=\"item-desc\" fxLayout=\"column\" fxFlex=\"15\" fxLayout.xs=\"row\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutAlign=\"start start\">\r\n                    <span>Tax</span>\r\n                    <span class=\"item-desc-value\">{{ item.tax | currency:'USD':'symbol-narrow' }}</span>\r\n                  </div>\r\n                  <div fxFlex class=\"item-desc\" fxLayout=\"column\" fxFlex=\"100\" fxLayout.xs=\"row\" fxLayout.sm=\"row\" fxLayout.md=\"row\" fxLayoutAlign=\"start start\">\r\n                    <span>Quantity</span>\r\n                    <i class=\"fa fa-chevron-circle-up\" (click)=\"addQuantity(item)\" aria-hidden=\"true\"></i>\r\n                    <span style=\"padding:0px 5px\">{{item.quantity}}</span>\r\n                    <i class=\"fa fa-chevron-circle-down\" (click)=\"remQuantity(item)\" *ngIf=\"item.quantity > 1\" aria-hidden=\"true\"></i>\r\n                    <button class=\"btn btn-default item-button\" (click)=\"deleteItem(item)\">Delete</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"10\">\r\n              </div> -->\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </app-card-body>\r\n        <app-card-actions>\r\n          <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <div class=\"item-subtotal\" *ngIf=\"cartItems && cartItems.vouchers\" fxLayout=\"column\">\r\n              <span>Subtotal:\r\n                <span style=\"color: #348a41; font-weight: bold;\">{{ cartItems.grandSubtotal }}</span>\r\n              </span>\r\n              <span>Tax:\r\n                <span style=\"color: #348a41; font-weight: bold;\">{{ cartItems.grandTaxTotal }}</span>\r\n              </span>\r\n              <span>Total:\r\n                <span style=\"color: #348a41; font-weight: bold;\">{{ cartItems.grandTotal }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </app-card-actions>\r\n      </app-card>\r\n\r\n      <app-card fxFlex=\"100\" fxFlex.gt-sm=\"30\">\r\n        <app-card-body>\r\n          <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center stretch\" style=\"margin:15px\">\r\n            <div *ngIf=\"cartItems && cartItems.vouchers\">\r\n              <span style=\"font-weight: bold; color: #348a41; text-align: center;\">Congratulations!</span>\r\n              <span style=\"color: #348a41; text-align: center;\">Your order qualifies for\r\n                <span style=\"font-weight: bold\">Free Shipping!</span>\r\n              </span>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\" style=\"padding-top:20px;\">\r\n                <span style=\"font-weight: bold;\">Subtotal</span>\r\n                <span style=\"font-weight: bold;\">{{ cartItems.grandSubtotal | currency:'USD':'symbol-narrow' }}</span>\r\n              </div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                <span style=\"font-weight: bold;\">Tax </span>\r\n                <span style=\"font-weight: bold;\">{{ cartItems.grandTaxTotal | currency:'USD':'symbol-narrow' }}</span>\r\n              </div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                <span style=\"font-weight: bold;\">Total </span>\r\n                <span style=\"font-weight: bold;\">{{ cartItems.grandTotal | currency:'USD':'symbol-narrow' }}</span>\r\n              </div>\r\n              <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\" style=\"padding-top: 10px\">\r\n                <input type=\"checkbox\" />\r\n                <span> This order contains a Gift</span>\r\n              </div> -->\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutWrap style=\"padding-top: 30px\">\r\n                <button fxFlex=\"70\" class=\"btn btn-primary\" style=\"margin-bottom: 10px\" [routerLink]=\"['/store']\">Continue Shopping</button>\r\n                <button fxFlex=\"70\" class=\"btn btn-primary\" [routerLink]=\"['/store/cart/payment']\">Proceed To Checkout</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </app-card-body>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <h1 class=\"cart-title\">Panda Recommendations</h1>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n        <app-voucher fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.sm=\"49\" fxFlexOffset.sm=\"1\" fxFlex.gt-sm=\"33\" fxFlex.md=\"32\" fxFlexOffset.md=\"1\"\r\n          *ngFor=\"let dis of recomendations; let i = index\" [voucher]=\"dis\"></app-voucher>\r\n      </div>\r\n    </div>\r\n    <div class=\"store-cart-content\">\r\n      <div class=\"store-cart-footer store-down-bottom\">\r\n        <ngl-pagination [(page)]=\"currentPage\" [total]=\"totalProducts\" (pageChange)=\"getRecommendations()\"></ngl-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <h1 class=\"cart-title\">Previous Purchases</h1>\r\n\r\n    <div fxLayoutWrap fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n        <app-voucher fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.sm=\"49\" fxFlexOffset.sm=\"1\" fxFlex.gt-sm=\"33\" fxFlex.md=\"32\" fxFlexOffset.md=\"1\"\r\n          *ngFor=\"let dis of recomendations; let i = index\" [voucher]=\"dis\"></app-voucher>\r\n      </div>\r\n    </div>\r\n    <div class=\"store-cart-content\">\r\n      <div class=\"store-cart-footer store-down-bottom\">\r\n        <ngl-pagination [(page)]=\"currentPageP\" [total]=\"totalProductsP\" (pageChange)=\"getPreviousPurchases()\"></ngl-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartSummaryComponent = (function () {
    function CartSummaryComponent(useractivityService, tradeService, voucherService, mediaService, router, sanitizer) {
        this.useractivityService = useractivityService;
        this.tradeService = tradeService;
        this.voucherService = voucherService;
        this.mediaService = mediaService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.recomendations = [];
        this.alive = true;
        this.currentPage = 0;
        this.pageElements = 9;
        this.totalProducts = 0;
        this.currentPageP = 0;
        this.pageElementsP = 9;
        this.totalProductsP = 0;
        this.sortType = 1;
    }
    CartSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartItems();
        this.getRecommendations();
        this.getPreviousPurchases();
        this.useractivityService.cartChanged.takeWhile(function () { return _this.alive; }).subscribe(function (changedCart) {
            _this.getCartItems();
        });
    };
    CartSummaryComponent.prototype.searchRecomendations = function () {
    };
    CartSummaryComponent.prototype.changeQuantity = function (voucher) {
        var _this = this;
        this.useractivityService.manageCart(voucher.voucherVendorLocationCode, voucher.quantity).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.getCartItems();
        }, function (error) { console.log('Error occured', error); });
    };
    CartSummaryComponent.prototype.addQuantity = function (voucher) {
        var _this = this;
        voucher.quantity++;
        this.useractivityService.manageCart(voucher.voucherVendorLocationCode, 1).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.getCartItems();
        }, function (error) { console.log('Error occured', error); });
    };
    CartSummaryComponent.prototype.remQuantity = function (voucher) {
        var _this = this;
        voucher.quantity--;
        if (voucher.quantity < 1) {
            return;
        }
        this.useractivityService.manageCart(voucher.voucherVendorLocationCode, -1).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.getCartItems();
        }, function (error) { console.log('Error occured', error); });
    };
    CartSummaryComponent.prototype.getCartItems = function () {
        var _this = this;
        this.useractivityService.getShoppingCart(false).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            console.log(res);
            _this.cartItems = res;
            _this.cartTotal = _this.cartItems.grandTotalVouchers;
            var _loop_1 = function (voucher) {
                if (!voucher || !voucher.media[0] || !voucher.media[0].mediaUrl) {
                    return { value: void 0 };
                }
                _this.mediaService.getMedia(voucher.media[0].mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
                    voucher.image = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
                });
            };
            for (var _i = 0, _a = _this.cartItems.vouchers; _i < _a.length; _i++) {
                var voucher = _a[_i];
                var state_1 = _loop_1(voucher);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }, function (error) {
            _this.cartItems = {};
            console.log('Error occured' + error);
        });
    };
    CartSummaryComponent.prototype.goToProduct = function (product) {
        window.scrollTo(0, 0);
        this.router.navigate(["/voucher/details-voucher/", product.voucherCode]);
    };
    CartSummaryComponent.prototype.deleteItem = function (voucher) {
        //if(Context.token){
        var _this = this;
        this.useractivityService.manageCart(voucher.voucherVendorLocationCode, (voucher.quantity * -1) - 1).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.getCartItems();
        }, function (error) { console.log('Error occured', error); });
    };
    CartSummaryComponent.prototype.saveItemForLater = function (index) {
        // change to service
        this.cartItems.splice(index, 1);
    };
    CartSummaryComponent.prototype.getRecommendations = function () {
        var _this = this;
        // this.tradeService.getTrades("4", "4", 1, 5, this.sortType).takeWhile(() => this.alive).subscribe((res) => {
        //   this.recomendations = res;
        //
        // })
        this.voucherService.getVouchers(null, '4', this.currentPage, this.pageElements, 1).subscribe(function (res) {
            // if (res && res[0] && res[0].totalCount) {
            //   this.totalProducts = res[0].totalCount;
            // }
            for (var i in res) {
                _this.voucherService.getVoucherDetail(res[i].voucherVendorLocationCode).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
                    _this.recomendations.push(res);
                });
            }
        });
    };
    CartSummaryComponent.prototype.getPreviousPurchases = function () {
        var _this = this;
        // change to service
        this.tradeService.getTrades("4", "4", this.currentPageP, this.pageElementsP, this.sortType).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            console.log("prev>>> ", res);
            _this.previousPurchases = res;
        });
    };
    CartSummaryComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    CartSummaryComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    CartSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart-summary',
            template: __webpack_require__("../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__["a" /* UserActivityService */], __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__["a" /* TradeService */], __WEBPACK_IMPORTED_MODULE_3__common_voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_4_app_common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pipes_sum_pipe__ = __webpack_require__("../../../../../src/app/common/pipes/sum.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_components_voucher__ = __webpack_require__("../../../../../src/app/common/components/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_routing__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_main_cart_main_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-main/cart-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_summary_cart_summary_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cart_confirmation_cart_confirmation_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cart_payment_method_cart_payment_method_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cart_payment_method_credit_cart_payment_method_credit_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method-credit/cart-payment-method-credit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_review_cart_review_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-review/cart-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_shipping_cart_shipping_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cart_done_cart_done_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-done/cart-done.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_stripe_checkout__ = __webpack_require__("../../../../ng-stripe-checkout/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__cart_routing__["a" /* CartRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_7__common_components_voucher__["a" /* VoucherCardModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng_stripe_checkout__["b" /* StripeCheckoutModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__common_pipes_sum_pipe__["a" /* SumPipe */],
                __WEBPACK_IMPORTED_MODULE_9__cart_main_cart_main_component__["a" /* CartMainComponent */],
                __WEBPACK_IMPORTED_MODULE_13__cart_payment_method_credit_cart_payment_method_credit_component__["a" /* CartPaymentMethodCreditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cart_summary_cart_summary_component__["a" /* CartSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__cart_confirmation_cart_confirmation_component__["a" /* CartConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__cart_payment_method_cart_payment_method_component__["a" /* CartPaymentMethodComponent */],
                __WEBPACK_IMPORTED_MODULE_14__cart_review_cart_review_component__["a" /* CartReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__cart_shipping_cart_shipping_component__["a" /* CartShippingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__cart_done_cart_done_component__["a" /* CartDoneComponent */]
            ]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/store/cart/cart.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_main_cart_main_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-main/cart-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_summary_cart_summary_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-summary/cart-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_confirmation_cart_confirmation_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-confirmation/cart-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_payment_method_cart_payment_method_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-payment-method/cart-payment-method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_review_cart_review_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-review/cart-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_shipping_cart_shipping_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-shipping/cart-shipping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_done_cart_done_component__ = __webpack_require__("../../../../../src/app/modules/store/cart/cart-done/cart-done.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var storeRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__cart_main_cart_main_component__["a" /* CartMainComponent */], children: [
            { path: '', redirectTo: 'summary', pathMatch: 'full' },
            { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_3__cart_summary_cart_summary_component__["a" /* CartSummaryComponent */] },
            { path: 'shipping', component: __WEBPACK_IMPORTED_MODULE_7__cart_shipping_cart_shipping_component__["a" /* CartShippingComponent */] },
            { path: 'confirmation', component: __WEBPACK_IMPORTED_MODULE_4__cart_confirmation_cart_confirmation_component__["a" /* CartConfirmationComponent */] },
            { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_5__cart_payment_method_cart_payment_method_component__["a" /* CartPaymentMethodComponent */] },
            { path: 'review', component: __WEBPACK_IMPORTED_MODULE_6__cart_review_cart_review_component__["a" /* CartReviewComponent */] },
            { path: 'done', component: __WEBPACK_IMPORTED_MODULE_8__cart_done_cart_done_component__["a" /* CartDoneComponent */] },
        ]
    }
];
var CartRoutingModule = (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(storeRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "../../../../ng-stripe-checkout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_stripe_checkout_module__ = __webpack_require__("../../../../ng-stripe-checkout/src/stripe-checkout.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_stripe_checkout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_loader__ = __webpack_require__("../../../../ng-stripe-checkout/src/loader.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_handler__ = __webpack_require__("../../../../ng-stripe-checkout/src/handler.js");
/* unused harmony reexport StripeCheckoutHandler */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng-stripe-checkout/src/handler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeCheckoutHandler; });
var StripeCheckoutHandler = /** @class */ (function () {
    /**
     * Constructor configures the Stripe Checkout handler with given config options.
     * @param {IStripeCheckoutConfig} config
     */
    function StripeCheckoutHandler(config) {
        this.stripeCheckout = StripeCheckout.configure(config);
    }
    /**
     * Open the Stripe Checkout window for this handler.
     * @param {IStripeCheckoutOptions} options Options override initial config.
     */
    StripeCheckoutHandler.prototype.open = function (options) {
        this.stripeCheckout.open(options);
    };
    /**
     * Close the currently open Stripe Checkout window if any.
     */
    StripeCheckoutHandler.prototype.close = function () {
        this.stripeCheckout.close();
    };
    return StripeCheckoutHandler;
}());

//# sourceMappingURL=handler.js.map

/***/ }),

/***/ "../../../../ng-stripe-checkout/src/loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeCheckoutLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handler__ = __webpack_require__("../../../../ng-stripe-checkout/src/handler.js");


var StripeCheckoutLoader = /** @class */ (function () {
    function StripeCheckoutLoader() {
    }
    /**
     * Create a Stripe Checkout instance as soon as Stripe has loaded.
     * @param {IStripeCheckoutConfig} config
     * @returns {Promise<StripeCheckoutHandler>}
     */
    StripeCheckoutLoader.prototype.createHandler = function (config) {
        return this.load().then(function () {
            return new __WEBPACK_IMPORTED_MODULE_1__handler__["a" /* StripeCheckoutHandler */](config);
        });
    };
    /**
     * Load or wait for the Stripe checkout library to load.
     * @returns {Promise<void>}
     */
    StripeCheckoutLoader.prototype.load = function () {
        if (!this.loaded) {
            // No cached Promise exist, so we have to load checkout.js.
            this.loaded = new Promise(function (resolve, reject) {
                // Create script element.
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://checkout.stripe.com/checkout.js';
                script.onerror = function (e) { return reject(e); };
                if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            resolve();
                        }
                    };
                }
                else {
                    script.onload = function () {
                        resolve();
                    };
                }
                document.getElementsByTagName('body')[0].appendChild(script);
            });
        }
        // Return cached Promise.
        return this.loaded;
    };
    StripeCheckoutLoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    StripeCheckoutLoader.ctorParameters = function () { return []; };
    return StripeCheckoutLoader;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "../../../../ng-stripe-checkout/src/stripe-checkout.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeCheckoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__("../../../../ng-stripe-checkout/src/loader.js");


var StripeCheckoutModule = /** @class */ (function () {
    function StripeCheckoutModule() {
    }
    StripeCheckoutModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* StripeCheckoutLoader */],
                    ],
                },] },
    ];
    /** @nocollapse */
    StripeCheckoutModule.ctorParameters = function () { return []; };
    return StripeCheckoutModule;
}());

//# sourceMappingURL=stripe-checkout.module.js.map

/***/ })

});
//# sourceMappingURL=cart.module.chunk.js.map