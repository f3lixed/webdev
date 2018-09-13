webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin-dispensaries/admin-dispensaries.module": [
		"../../../../../src/app/modules/dispensaries/admin-dispensaries/admin-dispensaries.module.ts",
		"admin-dispensaries.module"
	],
	"./cart/cart.module": [
		"../../../../../src/app/modules/store/cart/cart.module.ts",
		"cart.module"
	],
	"./modules/about/about.module": [
		"../../../../../src/app/modules/about/about.module.ts",
		"about.module"
	],
	"./modules/community/community.module": [
		"../../../../../src/app/modules/community/community.module.ts",
		"community.module"
	],
	"./modules/deals/deals.module": [
		"../../../../../src/app/modules/deals/deals.module.ts",
		"common",
		"deals.module"
	],
	"./modules/dispensaries/dispensaries.module": [
		"../../../../../src/app/modules/dispensaries/dispensaries.module.ts",
		"common",
		"dispensaries.module"
	],
	"./modules/home/index": [
		"../../../../../src/app/modules/home/index.ts"
	],
	"./modules/profile/profile.module": [
		"../../../../../src/app/modules/profile/profile.module.ts",
		"common"
	],
	"./modules/social/index": [
		"../../../../../src/app/modules/social/index.ts",
		"common",
		"index.0"
	],
	"./modules/store/store.module": [
		"../../../../../src/app/modules/store/store.module.ts",
		"store.module"
	],
	"./modules/voucher/index": [
		"../../../../../src/app/modules/voucher/index.ts",
		"index"
	],
	"./view-dispensaries/view-dispensaries.module": [
		"../../../../../src/app/modules/dispensaries/view-dispensaries/view-dispensaries.module.ts",
		"common",
		"view-dispensaries.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_app_app_component__ = __webpack_require__("../../../../../src/app/modules/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_app_footer_footer_component__ = __webpack_require__("../../../../../src/app/modules/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_login___ = __webpack_require__("../../../../../src/app/modules/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_signup__ = __webpack_require__("../../../../../src/app/modules/signup/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_signvendor__ = __webpack_require__("../../../../../src/app/modules/signvendor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_forgot__ = __webpack_require__("../../../../../src/app/modules/forgot/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_app_header_header_component__ = __webpack_require__("../../../../../src/app/modules/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_modal_modal_module__ = __webpack_require__("../../../../../src/app/common/modal/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_media__ = __webpack_require__("../../../../../src/app/common/media/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_trade__ = __webpack_require__("../../../../../src/app/common/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_metadata__ = __webpack_require__("../../../../../src/app/common/metadata/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_storage_storage_module__ = __webpack_require__("../../../../../src/app/common/storage/storage.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_components_post__ = __webpack_require__("../../../../../src/app/common/components/post/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_components_trade__ = __webpack_require__("../../../../../src/app/common/components/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_voucher__ = __webpack_require__("../../../../../src/app/common/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modules_home__ = __webpack_require__("../../../../../src/app/modules/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_home_home_component__ = __webpack_require__("../../../../../src/app/modules/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modules_slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ngx_progressbar_core__ = __webpack_require__("../../../../@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ngx_progressbar_http__ = __webpack_require__("../../../../@ngx-progressbar/http/esm5/ngx-progressbar-http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ngx_progressbar_router__ = __webpack_require__("../../../../@ngx-progressbar/router/esm5/ngx-progressbar-router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_25__modules_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', loadChildren: './modules/home/index#HomeModule' },
    { path: 'deals', loadChildren: './modules/deals/deals.module#DealsModule' },
    { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' },
    { path: 'social', loadChildren: './modules/social/index#SocialModule' },
    { path: 'dispensaries', loadChildren: './modules/dispensaries/dispensaries.module#DispensariesModule' },
    { path: 'voucher', loadChildren: './modules/voucher/index#VoucherModule' },
    { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
    { path: 'store', loadChildren: './modules/store/store.module#StoreModule' },
    { path: 'community', loadChildren: './modules/community/community.module#CommunityModule' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "/assets/i18n/", ".json");
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__modules_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__modules_app_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modules_app_header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_30_ng_pick_datetime__["DateTimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_33_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: "AIzaSyDgEOH_ZndVjzvjuNXHDQofj6RP5qb6nOU" }),
                __WEBPACK_IMPORTED_MODULE_24__modules_home__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_34__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35__ngx_progressbar_http__["a" /* NgProgressHttpModule */],
                __WEBPACK_IMPORTED_MODULE_36__ngx_progressbar_router__["a" /* NgProgressRouterModule */],
                __WEBPACK_IMPORTED_MODULE_20__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_19__common_components_post__["a" /* PostModule */],
                __WEBPACK_IMPORTED_MODULE_21__common_components_trade__["a" /* TradeCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26__modules_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_27_ng_lightning_ng_lightning__["a" /* NglModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__common_user__["b" /* UserModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__common_auth__["b" /* AuthModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__common_storage_storage_module__["a" /* StorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__common_media__["a" /* MediaModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__common_metadata__["a" /* MetadataModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__common_trade__["a" /* TradeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__common_api__["b" /* ApiModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12__common_modal_modal_module__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_login___["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_signup__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_9__modules_signvendor__["a" /* SignvendorModule */],
                __WEBPACK_IMPORTED_MODULE_10__modules_forgot__["a" /* ForgotModule */],
                __WEBPACK_IMPORTED_MODULE_23__common_voucher__["a" /* VoucherModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__modules_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/api/api.builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_request__ = __webpack_require__("../../../../../src/app/common/api/api.request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_model_context__ = __webpack_require__("../../../../../src/app/services/model/context.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiBuilder = (function () {
    function ApiBuilder(httpClient) {
        this.httpClient = httpClient;
    }
    ApiBuilder_1 = ApiBuilder;
    ApiBuilder.prototype.defaultOptions = function () {
        var api = new ApiBuilder_1(this.httpClient);
        var he = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */]();
        api.headers(he);
        api.url(__WEBPACK_IMPORTED_MODULE_3__services_model_context__["a" /* Context */].API_URL);
        return api;
    };
    ApiBuilder.prototype.path = function (path) {
        this._path = path;
        return this;
    };
    ApiBuilder.prototype.url = function (url) {
        this._url = url;
        return this;
    };
    ApiBuilder.prototype.headers = function (headers) {
        this._headers = headers;
        return this;
    };
    ApiBuilder.prototype.build = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__api_request__["a" /* ApiRequest */](this._url, this._path, this.httpClient, this._headers);
    };
    ApiBuilder = ApiBuilder_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ApiBuilder);
    return ApiBuilder;
    var ApiBuilder_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/api/api.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiInterceptor = (function () {
    function ApiInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.authService.getUser().mergeMap(function (user) {
            _this.authService.ResolveQuestionOld();
            var headers = {
                uuid: user.device,
                token: user.token,
                latitude: user.latitude,
                nonce: user.nonce,
                longitude: user.longitude,
                usertypecode: user.userTypeCode,
                useragent: 'Web:any-pandaweed:1.0-Web:any'
            };
            if (!req.reportProgress) {
                headers["content-type"] = "application/json";
            }
            req = req.clone({
                setHeaders: headers
            });
            return next.handle(req).do(function (event) { }, function (err) {
                if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                    if (err.status === 403 || err.status === 401) {
                    }
                    __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
                }
            });
        });
    };
    ApiInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/common/api/api.request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequest; });
var ApiRequest = (function () {
    function ApiRequest(url, path, httpClient, httpHeaders) {
        this.url = url;
        this.path = path;
        this.httpClient = httpClient;
        this.httpHeaders = httpHeaders;
    }
    ApiRequest.prototype.post = function (subpath, data) {
        return this.httpClient.post(this.url + this.path + subpath, data, { headers: this.httpHeaders });
    };
    ApiRequest.prototype.postFile = function (subpath, data) {
        return this.httpClient.post(this.url + this.path + subpath, data, { headers: this.httpHeaders, reportProgress: true });
    };
    ApiRequest.prototype.get = function (subpath) {
        return this.httpClient.get(this.url + this.path + (subpath ? subpath : ''), { headers: this.httpHeaders });
    };
    ApiRequest.prototype.put = function (subpath, data) {
        return this.httpClient.put(this.url + this.path + (subpath ? subpath : ''), data, { headers: this.httpHeaders });
    };
    return ApiRequest;
}());



/***/ }),

/***/ "../../../../../src/app/common/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_interceptor__ = __webpack_require__("../../../../../src/app/common/api/api.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_builder__ = __webpack_require__("../../../../../src/app/common/api/api.builder.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__api_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_request__ = __webpack_require__("../../../../../src/app/common/api/api.request.ts");
/* unused harmony reexport ApiRequest */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApiModule = (function () {
    function ApiModule() {
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function () {
        return {
            ngModule: ApiModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_3__api_builder__["a" /* ApiBuilder */], {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__api_interceptor__["a" /* ApiInterceptor */],
                    multi: true
                }]
        };
    };
    ApiModule = ApiModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */]
            ]
        })
    ], ApiModule);
    return ApiModule;
    var ApiModule_1;
}());





/***/ }),

/***/ "../../../../../src/app/common/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        console.log("data", next.data);
        if (!next || !next.data || !next.data.isAuth) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(true);
        }
        return this.authService.isLoggedInAsUser().map(function (e) {
            if (e) {
                return true;
            }
            _this.router.navigate(['/']);
            return false;
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(false);
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/common/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_storage_service__ = __webpack_require__("../../../../../src/app/common/storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var USER_STORAGE_KEY = 'USER_STORAGE';
var USEROLDYEAR_STORAGE_KEY = 'USEROLDYEAR_STORAGE';
var DEVICE_STORAGE_KEY = 'DEVICE_STORAGE';
var AuthService = (function () {
    function AuthService(storage) {
        this.storage = storage;
        this.tokenExpired = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.resolveQuestion = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.isvalidResolveQ = null;
    }
    AuthService.prototype.ResolveQuestionOld = function () {
        // var dataStorage = localStorage.getItem("pandaweed-app/pandaweeb/USEROLDYEAR_STORAGE") 
        this.isvalidResolveQ = JSON.parse(localStorage.getItem("pandaweed-app/pandaweeb/USEROLDYEAR_STORAGE"));
        if (!this.isvalidResolveQ) {
            this.resolveQuestion.next(true);
        }
    };
    AuthService.prototype.getToken = function () {
        return this.storage.get(USER_STORAGE_KEY).map(function (n) {
            return n ? n.token : n;
        });
    };
    AuthService.prototype.saveDevice = function (device) {
        var _this = this;
        return this.storage.get(USER_STORAGE_KEY).do(function (n) { n.device = device; _this.saveUser(n); });
    };
    AuthService.prototype.saveToken = function (token) {
        var _this = this;
        return this.storage.get(USER_STORAGE_KEY).do(function (n) { n.token = token; _this.saveUser(n); });
    };
    AuthService.prototype.saveLang = function (lang) {
        var _this = this;
        return this.storage.get(USER_STORAGE_KEY).do(function (n) { if (n) {
            n.lang = lang;
            _this.saveUser(n);
        } });
    };
    AuthService.prototype.saveLogin = function (firstName, lastName, roleCode, userName, token) {
        var _this = this;
        return this.storage.get(USER_STORAGE_KEY).do(function (n) {
            n.firstName = firstName;
            n.lastName = lastName;
            n.roleCode = roleCode;
            n.userName = userName;
            n.token = token;
            n.guest = false;
            console.log("UPDAGIN USER DO ", n);
        }).do(function (n) { console.log("SAVE USER LOGIN SAVE", n); _this.saveUser(n); });
    };
    AuthService.prototype.getUser = function () {
        return this.storage.get(USER_STORAGE_KEY);
    };
    AuthService.prototype.getUserOldYear = function () {
        return this.storage.get(USEROLDYEAR_STORAGE_KEY);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.storage.get(USER_STORAGE_KEY).map(function (n) {
            return n && n.token ? true : false;
        }, function () {
            return false;
        });
    };
    AuthService.prototype.isLoggedInAsUser = function () {
        return this.storage.get(USER_STORAGE_KEY).map(function (n) {
            return n && n.token && !n.guest ? true : false;
        }, function () {
            return false;
        });
    };
    AuthService.prototype.isLoggedInAsGuest = function () {
        return this.storage.get(USER_STORAGE_KEY).map(function (n) {
            return !!n;
        }, function () {
            return false;
        });
    };
    AuthService.prototype.login = function (auth) {
        return this.storage.set(USER_STORAGE_KEY, auth);
    };
    AuthService.prototype.saveUser = function (user) {
        console.log("USER SAVE ", user);
        return this.storage.set(USER_STORAGE_KEY, user);
    };
    AuthService.prototype.saveUserOldYear = function (userOldYear) {
        return this.storage.set(USEROLDYEAR_STORAGE_KEY, userOldYear);
    };
    AuthService.prototype.logout = function () {
        return this.storage.remove(USER_STORAGE_KEY);
    };
    AuthService.prototype.destroyUser = function () {
        return this.storage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__storage_storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/common/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("../../../../../src/app/common/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]]
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]]
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());





/***/ }),

/***/ "../../../../../src/app/common/components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1023px) {\n  .app-card {\n    background: #fff;\n    border-radius: 2px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    position: relative;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .app-card-body {\n    padding: 7px;\n    margin-top: 10px; }\n  .app-card-actions {\n    padding: 7px; } }\n\n@media only screen and (min-width: 1024px) {\n  .app-card {\n    background: #fff;\n    border-radius: 2px;\n    margin: 15px;\n    position: relative;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .app-card-body {\n    padding: 7px;\n    margin-top: 10px; }\n  .app-card-actions {\n    padding: 7px; } }\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CardHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CardTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CardSubtitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CardBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardActionsComponent; });
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

var CardComponent = (function () {
    function CardComponent() {
        this.align = "column";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "align", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card.component.html")
        })
    ], CardComponent);
    return CardComponent;
}());

var CardHeaderComponent = (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-header',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-header.component.html")
        })
    ], CardHeaderComponent);
    return CardHeaderComponent;
}());

var CardAvatarComponent = (function () {
    function CardAvatarComponent() {
    }
    CardAvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-avatar',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-avatar.component.html")
        })
    ], CardAvatarComponent);
    return CardAvatarComponent;
}());

var CardTitleComponent = (function () {
    function CardTitleComponent() {
    }
    CardTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-title',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-title.component.html")
        })
    ], CardTitleComponent);
    return CardTitleComponent;
}());

var CardSubtitleComponent = (function () {
    function CardSubtitleComponent() {
    }
    CardSubtitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-subtitle',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-subtitle.component.html")
        })
    ], CardSubtitleComponent);
    return CardSubtitleComponent;
}());

var CardBodyComponent = (function () {
    function CardBodyComponent() {
    }
    CardBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-body',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-body.component.html")
        })
    ], CardBodyComponent);
    return CardBodyComponent;
}());

var CardActionsComponent = (function () {
    function CardActionsComponent() {
    }
    CardActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-actions',
            styles: [__webpack_require__("../../../../../src/app/common/components/card/card.component.scss")],
            template: __webpack_require__("../../../../../src/app/common/components/card/template/card-actions.component.html")
        })
    ], CardActionsComponent);
    return CardActionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/card/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_component__ = __webpack_require__("../../../../../src/app/common/components/card/card.component.ts");
/* unused harmony reexport CardComponent */
/* unused harmony reexport CardActionsComponent */
/* unused harmony reexport CardAvatarComponent */
/* unused harmony reexport CardBodyComponent */
/* unused harmony reexport CardHeaderComponent */
/* unused harmony reexport CardSubtitleComponent */
/* unused harmony reexport CardTitleComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardModule = (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__card_component__["d" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["a" /* CardActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["b" /* CardAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["c" /* CardBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["e" /* CardHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["f" /* CardSubtitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["g" /* CardTitleComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__card_component__["d" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["a" /* CardActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["b" /* CardAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["c" /* CardBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["e" /* CardHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["f" /* CardSubtitleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__card_component__["g" /* CardTitleComponent */]
            ]
        })
    ], CardModule);
    return CardModule;
}());




/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-card-actions\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-card-body\">\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-header.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<ng-content select=\"app-card-avatar\"></ng-content>\r\n<ng-content select=\"app-card-title\"></ng-content>\r\n<ng-content select=\"app-card-subtitle\"></ng-content>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-subtitle.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card-title.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/card/template/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-card\" fxLayout=\"{{ align }}\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayoutAlign=\"start stretch\">\r\n  <ng-content select=\"app-card-header\"></ng-content>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFlex=\"100\">\r\n    <!-- <ng-content></ng-content> -->\r\n    <ng-content select=\"app-card-body\"></ng-content>\r\n    <ng-content select=\"app-card-actions\"></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/components/post/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_component__ = __webpack_require__("../../../../../src/app/common/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__letter_avatar_directive__ = __webpack_require__("../../../../../src/app/common/components/post/letter-avatar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__["a" /* NglModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_3__letter_avatar_directive__["a" /* LetterAvatarDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__post_component__["a" /* PostComponent */]]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/post/letter-avatar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterAvatarDirective; });
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

var LetterAvatarDirective = (function () {
    function LetterAvatarDirective(el) {
        this.background = 'red';
        this.fontSize = 49;
        this.padding = 28;
        this.letter = "?";
        this.size = 100;
        this.fontColor = '#FFFFFF';
        this.props = null;
        this._el = el.nativeElement;
    }
    LetterAvatarDirective.prototype.test = function () {
        this.generateLetter();
    };
    LetterAvatarDirective.prototype.generateLetter = function () {
        if (!this.avatarData) {
            throw Error("LetterAvatarDirective configdata not provides");
        }
        if (!this.avatarData.text) {
            this.avatarData.text = '?';
        }
        var size = this.avatarData && this.avatarData.size ? this.avatarData.size : 100;
        this.fontColor = this.avatarData.fontColor ? this.avatarData.fontColor : "#FFFFFF";
        var isSquare = this.avatarData && this.avatarData.isSquare ? true : false;
        var border = this.avatarData && this.avatarData.border ? this.avatarData.border : "1px solid #d3d3d3";
        var background = this.avatarData && this.avatarData.background ? this.avatarData.background : null;
        var text = this.avatarData && this.avatarData.text ? this.avatarData.text : null;
        this.background = background;
        var textArray = text.split(' ');
        var letter = textArray[0].substr(0, 1) + '' + (textArray.length > 1 ? textArray[1].substr(0, 1) : '');
        letter = letter.toUpperCase();
        this.fontSize = (39 * size) / 100;
        this.padding = (28 * size) / 100;
        this.letter = letter;
        this.size = size;
        this.props = new Object();
        this.props['size'] = size + 'px';
        this.props['lineheight'] = this.size + 'px';
        this.props['letter'] = letter;
        this.props['fontSize'] = this.fontSize + 'px';
        if (isSquare) {
            this.props['borderradius'] = '0%';
        }
        else {
            this.props['borderradius'] = '50%';
        }
        this.props['textalign'] = 'center';
        this.props['border'] = border;
        this.props['background'] = background;
        if (this.avatarData.fixedColor && !background) {
            this.props['background'] = background || this.colorize(letter);
        }
        else {
            this.props['background'] = background || this.getRandomColor();
        }
        return true;
    };
    ;
    LetterAvatarDirective.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    LetterAvatarDirective.prototype.colorize = function (str) {
        for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash))
            ;
        var color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
        return '#' + Array(6 - color.length + 1).join('0') + color;
    };
    LetterAvatarDirective.prototype.ngOnInit = function () {
        this.generateLetter();
    };
    LetterAvatarDirective.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.generateLetter();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('avatardata'),
        __metadata("design:type", Object)
    ], LetterAvatarDirective.prototype, "avatarData", void 0);
    LetterAvatarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'avatar',
            template: "\n            <div *ngIf=\"props\" [style.background-color]=\"props.background\" [style.width] = \"props.size\" [style.line-height]='props.lineheight' [style.height] = 'props.size' [style.font-size] = 'props.fontSize' [style.border] = 'props.border' [style.border-radius] = 'props.borderradius' [style.text-align] =\"props.textalign\"> \n            <div [style.color]='fontColor'>{{props.letter}}</div>\n            </div>\n            ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], LetterAvatarDirective);
    return LetterAvatarDirective;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-content-wrapper{\r\n    background-color: #fff;\r\n    padding: 10px;\r\n}\r\n.post-image{\r\n    margin-right: 10px;\r\n}\r\n.post-image img{\r\n    border-radius: 50%;\r\n}\r\n.post-name{\r\n    color: #000;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n.post-date{\r\n    color: #555;\r\n    font-size: 10px;\r\n}\r\n.post-actions{\r\n    text-align: right;\r\n    padding-right: 15px;\r\n}\r\n.post-actions a{\r\n    padding-left: 15px;\r\n}\r\n\r\n.post-actions a, .post-actions a:link, .post-actions a:visited {\r\n    color: #555;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n.post-more-actions{\r\n    color: #555;\r\n    font-weight: bold;\r\n}\r\n \r\n.show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.post-comments{\r\n    padding: 5px;\r\n}\r\n.post-stats{\r\n    border-top: 1px solid #eee;\r\n    margin: 0 5px;\r\n}\r\n.post-stats-comments, .post-stats-shares{\r\n    text-align: center;\r\n}\r\n.post-stats a, .post-stats a:visited, .post-stats a:link{\r\n    color: #000;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n}\r\n.post-stats-likes{\r\n    margin-left: 15px;\r\n}\r\n.post-comments{\r\n    padding-left: 25px;  \r\n    margin-top: 15px; \r\n}\r\n.post-comment{\r\n    padding-bottom: 10px;\r\n}\r\n.post-comment-name{\r\n    color: #000;\r\n}\r\n.post-comment-image{\r\n    margin-right: 7px;\r\n}\r\n.post-comment-image img {\r\n    border-radius: 50%;\r\n}\r\n.post-comment-reply {\r\n    margin-top:15px; \r\n    padding-bottom: 10px;\r\n}\r\n.post-comment-reply {\r\n    border: none;\r\n    border-bottom: 1px solid #999;\r\n}\r\n.post-comments-stats-like{\r\n    color: #555;\r\n}\r\n.post-content-image{\r\n    padding: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<ngl-modal [header]=\"'Share'\" [(open)]=\"openedShare\">\r\n    <div body>\r\n        <p>Do you really want to share it?</p>\r\n    </div>\r\n    <ng-template ngl-modal-footer *ngIf=\"!noFooter\">\r\n        <button class=\"slds-button slds-button--neutral\" (click)=\"cancelShare()\">Cancel</button>\r\n        <button class=\"slds-button slds-button--brand\" (click)=\"cancelShare()\">Share</button>\r\n    </ng-template>\r\n</ngl-modal>\r\n<div class=\"post-wrapper show-shadow-box\">\r\n    <div class=\"post-content-wrapper\">\r\n        <div fxLayout=\"row\" fxAlign=\"space-between center\">\r\n            <!-- <div fxFlex=\"15\" class=\"post-image\">\r\n                <img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n            </div> -->\r\n            <div fxFlex fxLayout=\"column\">\r\n                <div>\r\n                    <div fxFlex=\"55px\">\r\n                        <avatar [avatardata]=\"avatarDataSquare\"></avatar>\r\n                    </div>\r\n                    <div fxFlex=\"20\" class=\"post-metadata\">\r\n                        <h1 class=\"post-name\">{{post.author}}</h1>\r\n                        <p class=\"post-date\">{{post.createdDatetime | date: 'yyyy-MM-dd HH:mm'}}</p>\r\n                    </div>\r\n                    <div fxFlex=\"60\" class=\"post-actions\">\r\n                        <!-- <a>\r\n                            <i class=\"fa fa-thumbs-up\"></i> Like</a>\r\n                        <a (click)=\"post.toggleComment = !post.toggleComment\">\r\n                            <i class=\"fa fa-comment\"></i> Comment</a>\r\n                        <a (click)=\"openShare()\">\r\n                            <i class=\"fa fa-share\"></i> Share</a> -->\r\n                    </div>\r\n                    <div fxFlex class=\"post-actions\">\r\n                        <!-- <span nglDropdown [(open)]=\"post.openDrop\">\r\n                            <a nglDropdownTrigger>\r\n                                <i class=\"fa fa-angle-down\"></i>\r\n                            </a>\r\n                            <div class=\"slds-dropdown slds-dropdown--left\">\r\n                                <ul class=\"dropdown__list\" role=\"menu\">\r\n                                    <li class=\"slds-dropdown__item\">\r\n                                        <a role=\"menuitem\" nglDropdownItem (click)=\"post.openDrop = false;\">\r\n                                            <p class=\"slds-truncate\">Shared via direct Mesage </p>\r\n                                        </a>\r\n                                        <a role=\"menuitem\" nglDropdownItem (click)=\"post.openDrop = false;\">\r\n                                            <p class=\"slds-truncate\">Get Shareable Link </p>\r\n                                        </a>\r\n                                        <a role=\"menuitem\" nglDropdownItem (click)=\"post.openDrop = false;\">\r\n                                            <p class=\"slds-truncate\">Copy link to Post</p>\r\n                                        </a>\r\n                                        <a role=\"menuitem\" nglDropdownItem (click)=\"post.openDrop = false;\">\r\n                                            <p class=\"slds-truncate\">Pin post to Profile</p>\r\n                                        </a>\r\n                                        <a role=\"menuitem\" nglDropdownItem (click)=\"post.openDrop = false;\">\r\n                                            <p class=\"slds-truncate\">Delete Post</p>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </span> -->\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!image\" style=\"padding:10px\">\r\n                    {{post.description}}\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"post-content-image\" *ngIf=\"image\">\r\n            <img alt=\"image\" [src]=\"image\">\r\n        </div>\r\n        <div *ngIf=\"image\" style=\"padding:10px\">\r\n            {{post.description}}\r\n        </div>\r\n    </div>\r\n    <div style=\"padding:5px 15px\">\r\n        <!-- {{post.favouriteCount||0}} Likes -->\r\n    </div>\r\n    <div fxLayout=\"row\" class=\"post-stats\">\r\n        <div fxFlex=\"60\" class=\"post-stats-likes\">\r\n            <a (click)=\"addLike()\"><i class=\"fa fa-thumbs-o-up\"></i> Like</a> ({{post.favouriteCount||0}})\r\n        </div>\r\n        <div fxFlex class=\"post-stats-comments\">\r\n            <!-- <a (click)=\"post.toggleComment = !post.toggleComment\">2 Comments</a> -->\r\n        </div>\r\n        <div fxFlex class=\"post-stats-shares\">\r\n            <!-- <a>1 Share</a> -->\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"post.toggleComment\" class=\"post-comments\" fxLayout=\"column\">\r\n        <div class=\"post-comment\" *ngFor=\"let comment of post.comments\">\r\n            <div fxLayout=\"row\">\r\n                <div fxFlex=\"10\" class=\"post-comment-image\">\r\n                    <img src=\"assets/images/team/user2.jpg\" alt=\"user\">\r\n                </div>\r\n                <div fxFlex fxLayout=\"column\" class=\"post-comment-content\">\r\n                    <p class=\"post-comment-name\">John Doe</p>\r\n                    <p class=\"post-comment-date\">Jan 1, 2016</p>\r\n                    <div class=\"comment-text\">\r\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"post-comment-stats\" fxLayout=\"row\">\r\n                <div fxFlex=\"20\" class=\"post-comments-stats-like\">\r\n                    <i class=\"fa fa-thumbs-up\"></i> Like\r\n                </div>\r\n                <div>\r\n                    <i class=\"fa fa-thumbs-up\"></i> 12\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"post-comment-reply\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n            <textarea name=\"contact_message\" placeholder=\"Reply\" fxFlex=\"90\"></textarea>\r\n            <a (click)=\"addComment()\" nglButton=\"success\" fxFlex fxFill style=\"padding-top:8px; padding-bottom: 8px\">\r\n                <i class=\"fa fa-send\"></i>\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = (function () {
    function PostComponent(mediaService, sanitizer, userActivityService) {
        this.mediaService = mediaService;
        this.sanitizer = sanitizer;
        this.userActivityService = userActivityService;
        this.alive = true;
        this.avatarDataSquare = {
            size: 48,
            //        background: '#F39C12', // by default it will produce dynamic colors
            fontColor: '#FFFFFF',
            border: "2px solid #d3d3d3",
            isSquare: false,
            fixedColor: true //if you enable true then letter will have same color for ever default value is false
        };
        this.openedShare = false;
    }
    PostComponent.prototype.getImage = function () {
        var _this = this;
        if (!this.post || !this.post.media[0] || !this.post.media[0].mediaUrl) {
            return;
        }
        this.mediaService.getMedia(this.post.media[0].mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.image = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
        });
    };
    PostComponent.prototype.addLike = function () {
        var _this = this;
        this.userActivityService.setFavouritedPost(this.post.storyCode, true).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.post.favouriteCount++;
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        this.avatarDataSquare.text = this.post.author;
        this.getImage();
    };
    PostComponent.prototype.openShare = function (size) {
        this.size = size;
        this.openedShare = !this.openedShare;
    };
    PostComponent.prototype.addComment = function () {
        if (!this.post.comments) {
            this.post.comments = [];
        }
        this.post.comments.push({});
    };
    PostComponent.prototype.cancelShare = function () {
        this.openedShare = false;
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            styles: [__webpack_require__("../../../../../src/app/common/components/post/post.component.css")],
            template: __webpack_require__("../../../../../src/app/common/components/post/post.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_media_media_service__["a" /* MediaService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__user__["a" /* UserActivityService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/trade/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trade_component__ = __webpack_require__("../../../../../src/app/common/components/trade/trade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TradeCardModule = (function () {
    function TradeCardModule() {
    }
    TradeCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5_ng_lightning_ng_lightning__["a" /* NglModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__card__["a" /* CardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__trade_component__["a" /* TradeCardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__trade_component__["a" /* TradeCardComponent */]]
        })
    ], TradeCardModule);
    return TradeCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/trade/trade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trade-admin {\r\n  position: absolute;\r\n  right: 15px;\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  top: 10px;\r\n}\r\n\r\n.trade-body {\r\n  padding: 0 15px;\r\n  font-size: 14px;\r\n}\r\n\r\n.trade-image img {\r\n  max-height: 240px;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 240px;\r\n}\r\n\r\n.trade-image-row {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.trade-image-row img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.trade-title {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.trade-icon {\r\n  margin-right: 10px;\r\n}\r\n\r\n.trade-options {\r\n  margin-top: 10px;\r\n}\r\n\r\n.trade-options .trade-icon {\r\n  color: #348a41;\r\n  font-weight: bold;\r\n}\r\n\r\n.trade-actions {\r\n  padding-left: 15px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n\r\n.trade-metadata .trade-open-now{ \r\n  margin-top:10px; \r\n  margin-bottom:10px; \r\n}\r\n.trade-location {\r\n  margin-bottom: 20px;\r\n}\r\n.trade-location .trade-location-distance{\r\n  font-weight: bold;\r\n  color: #f00;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n  .trade-description{\r\n    max-height: 120px;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .trade-description{\r\n    max-height: 120px;\r\n    min-height: 120px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/trade/trade.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [align]=\"align\">\r\n  <app-card-header>\r\n    <!-- <a class=\"trade-admin\" [routerLink]=\"['admin-dispensaries', trade.tradeLocationCode]\">\r\n      <i class=\"fa fa-cogs\"></i>\r\n    </a> -->\r\n    <div [ngClass]=\"{'trade-image': align==='column', 'trade-image-row': align==='row'}\">\r\n      <a [routerLink]=\"['/dispensaries','view-dispensaries', trade.tradeLocationCode]\">\r\n        <img *ngIf=\"image\" [src]=\"image\" class=\"box-image-dispensarie\">\r\n      </a>\r\n    </div>\r\n  </app-card-header>\r\n  <app-card-body>\r\n    <div class=\"trade-body\">\r\n      <div fxLayout=\"row\">\r\n        <div fxFlex=\"70\" fxFlex.xs=\"50\" fxFlex.md=\"50\" class=\"trade-title\">{{trade.title}}</div>\r\n        <div fxFlex>\r\n          <div style=\"text-align: right;\">\r\n            <a [routerLink]=\"['/dispensaries','view-dispensaries', trade.tradeLocationCode, 'reviews']\" style=\"color:#f39c12;  font-size:17px; text-decoration: none\">\r\n              <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n              <i class=\"fa fa-star\" style=\"color:#bdc3c7\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"trade-metadata\">\r\n        <div fxFlex=\"35\" class=\"trade-open-now\">\r\n          <i class=\"fa fa-circle trade-icon\" style=\"color:#080\"></i>Open Now\r\n        </div>\r\n      </div>\r\n      <div class=\"trade-location\">\r\n        <i class=\"fa fa-map-marker trade-icon\"></i> Hesperia, CA\r\n        <span class=\"trade-location-distance\">\r\n          < 50 KM </span>\r\n      </div>\r\n      <div class=\"trade-description\" >\r\n        <p>{{splitText(trade.description)}}</p>\r\n      </div>\r\n\r\n    </div>\r\n  </app-card-body>\r\n  <app-card-actions>\r\n    <div fxLayout=\"row\" class=\"trade-actions\">\r\n      <div fxFlex=\"60\">\r\n        <button [routerLink]=\"['/dispensaries','view-dispensaries', trade.tradeLocationCode]\" class=\"btn btn-primary\">Learn more</button>\r\n      </div>\r\n      <div fxFlex class=\"trade-options\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n        <i class=\"fa fa-credit-card-alt trade-icon\"></i>\r\n        <i class=\"fa fa-paypal trade-icon\"></i>\r\n        <i class=\"fa fa-money trade-icon\"></i>\r\n        <i class=\"fa fa-wheelchair trade-icon\"></i>\r\n        <i class=\"fa fa-truck trade-icon\"></i>\r\n      </div>\r\n\r\n    </div>\r\n  </app-card-actions>\r\n</app-card>"

/***/ }),

/***/ "../../../../../src/app/common/components/trade/trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TradeCardComponent = (function () {
    function TradeCardComponent(mediaService, tradeService, sanitizer) {
        this.mediaService = mediaService;
        this.tradeService = tradeService;
        this.sanitizer = sanitizer;
        this.align = 'column';
        this.alive = true;
    }
    TradeCardComponent.prototype.getImage = function () {
        var _this = this;
        if (!this.trade || !this.trade.media[0] || !this.trade.media[0].mediaUrl) {
            return;
        }
        this.mediaService.getMedia(this.trade.media[0].mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.image = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
        });
    };
    TradeCardComponent.prototype.loadDetail = function () {
        this.tradeService.getTrade(this.trade.tradeLocationCode).subscribe(function (dt) {
        });
    };
    TradeCardComponent.prototype.splitText = function (text) {
        if (!text) {
            return text;
        }
        //TODO constant
        if (text.length > 100) {
            return text.substring(0, 100) + "...";
        }
        return text;
    };
    TradeCardComponent.prototype.ngOnInit = function () {
        this.getImage();
    };
    TradeCardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TradeCardComponent.prototype, "trade", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TradeCardComponent.prototype, "align", void 0);
    TradeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trade',
            styles: [__webpack_require__("../../../../../src/app/common/components/trade/trade.component.css")],
            template: __webpack_require__("../../../../../src/app/common/components/trade/trade.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_2__common_trade_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TradeCardComponent);
    return TradeCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/voucher/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voucher_component__ = __webpack_require__("../../../../../src/app/common/components/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VoucherCardModule = (function () {
    function VoucherCardModule() {
    }
    VoucherCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5_ng_lightning_ng_lightning__["a" /* NglModule */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__card__["a" /* CardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__voucher_component__["a" /* VoucherCardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__voucher_component__["a" /* VoucherCardComponent */]]
        })
    ], VoucherCardModule);
    return VoucherCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/components/voucher/voucher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".voucher-img {\r\n  width: 100%;\r\n  height: auto;\r\n  padding-bottom: 5px;\r\n}\r\n.voucher-img-xs {\r\n  width: 100%;\r\n  height: auto;\r\n  padding-bottom: 10px;\r\n}\r\n.voucher-size-xs{\r\n\twidth: 100% !important;\r\n}\r\n.voucher-img-sm {\r\n  width: 100%;\r\n  height: auto;\r\n  padding-bottom: 10px;\r\n}\r\n.voucher-size-sm{\r\n\twidth: 100% !important;\r\n}\r\n.minHeight{\r\n\tmin-height: 50px;\r\n}\r\n.minHeight-xs{\r\n\tmin-height: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/components/voucher/voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card>\r\n  <app-card-body>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxFlex=\"100\" [ngClass.xs]=\"{'voucher-size-xs': true}\" [ngClass.sm]=\"{'voucher-size-sm': true}\">\r\n      <img *ngIf=\"image\" class=\"voucher-img\" [ngClass.xs]=\"{'voucher-img-xs': true}\" [ngClass.sm]=\"{'voucher-img-sm': true}\" [src]=\"image\">\r\n      <img *ngIf=\"!voucher.media || !voucher.media[0] || !voucher.media[0].mediaUrl\" class=\"voucher-img\" src=\"/assets/images/product/{{voucherimg}}\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n            <span style=\"font-weight:bold;\" [ngStyle.md]=\"{'min-height.px':50}\" [ngStyle.sm]=\"{'min-height.px':20}\">{{ voucher.title }}</span>\r\n            <span style=\"font-size: 0.8em\">{{ voucher.voucherProvider}}</span>\r\n          </div>\r\n          <span style=\"font-weight: bold; color: #348a41;\">{{ voucher.price | currency:'USD':'symbol-narrow' }}</span>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n          <i class=\"fa fa-star\" style=\"color: #E0B600\" *ngFor=\"let item of counter(4)\"></i>\r\n        </div>\r\n        <p [ngClass.xs]=\"{'minHeight-xs': true}\" class=\"minHeight\">\r\n          {{ splitText(voucher.description) }}\r\n        </p>\r\n      </div> \r\n    </div>\r\n  </app-card-body>\r\n  <app-card-actions>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n      <button class=\"btn btn-primary\" (click)=\"setManageCart(voucher.voucherVendorLocationCode)\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <i class=\"fa fa-shopping-cart\"></i>\r\n        <span style=\"margin-left:5px\">Add To Cart</span>\r\n      </button>\r\n      <button class=\"btn btn-primary\" (click)=\"detailProduct()\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <i class=\"fa fa-list\"></i>\r\n        <span style=\"margin-left:5px\">Details</span>\r\n      </button>\r\n    </div>\r\n  </app-card-actions>\r\n</app-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/components/voucher/voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VoucherCardComponent = (function () {
    function VoucherCardComponent(useractivityService, mediaService, modalService, sanitizer, router, userService) {
        var _this = this;
        this.useractivityService = useractivityService;
        this.mediaService = mediaService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userService = userService;
        this.alive = true;
        this.modalId = 'ModalLogin';
        this.voucherimg = 'default.jpg';
        this.logueado = false;
        this.userService.tokenChanged.takeWhile(function () { return _this.alive; }).subscribe(function () { return _this.getImage(); });
        this.userService.tokenValidated.takeWhile(function () { return _this.alive; }).subscribe(function () { _this.getImage(); });
    }
    VoucherCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 959) {
            this.voucherimg = 'default-xs.jpg';
        }
        this.getImage();
        this.userService.getUser().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            if (user && user.token && !user.guest) {
                _this.logueado = true;
            }
        });
        // console.log("VoucherCardComponent> ",this.voucher);
    };
    VoucherCardComponent.prototype.getImage = function () {
        var _this = this;
        if (!this.voucher || !this.voucher.media[0] || !this.voucher.media[0].mediaUrl) {
            return;
        }
        this.mediaService.getMedia(this.voucher.media[0].mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.image = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
        });
    };
    VoucherCardComponent.prototype.detailProduct = function () {
        this.router.navigate(['/voucher/details-voucher', this.voucher.voucherVendorLocationCode]);
    };
    VoucherCardComponent.prototype.setManageCart = function (voucherCode) {
        var _this = this;
        if (!this.logueado) {
            this.modalService.open(this.modalId);
            return;
        }
        this.useractivityService.manageCart(voucherCode, 1).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            console.log(result);
        }, function (error) { console.log('Error occured', error); });
    };
    VoucherCardComponent.prototype.splitText = function (text) {
        if (!text) {
            return text;
        }
        //TODO constant
        if (text.length > 100) {
            return text.substring(0, 100) + "...";
        }
        return text;
    };
    VoucherCardComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    VoucherCardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VoucherCardComponent.prototype, "voucher", void 0);
    VoucherCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-voucher',
            styles: [__webpack_require__("../../../../../src/app/common/components/voucher/voucher.component.css")],
            template: __webpack_require__("../../../../../src/app/common/components/voucher/voucher.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_user_useractivity_service__["a" /* UserActivityService */],
            __WEBPACK_IMPORTED_MODULE_3_app_common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_6__modal_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_common_user_user_service__["a" /* UserService */]])
    ], VoucherCardComponent);
    return VoucherCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/media/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MediaModule = (function () {
    function MediaModule() {
    }
    MediaModule_1 = MediaModule;
    MediaModule.forRoot = function () {
        return {
            ngModule: MediaModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__media_service__["a" /* MediaService */]]
        };
    };
    MediaModule = MediaModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
        })
    ], MediaModule);
    return MediaModule;
    var MediaModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/media/media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_model_context__ = __webpack_require__("../../../../../src/app/services/model/context.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MediaService = (function () {
    function MediaService(http) {
        this.http = http;
    }
    MediaService.prototype.getMedia = function (mediaUrl) {
        return this.http.get(mediaUrl, { responseType: 'arraybuffer' })
            .map(function (data) {
            return window.URL.createObjectURL(new Blob([data]));
        });
    };
    MediaService.prototype.uploadProfilePicture = function (pictureBlob) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__services_model_context__["a" /* Context */].USER_AGENT);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__services_model_context__["a" /* Context */].API_URL + "/fileSystemResource/profilePictureUpload.a", {
            pictureBlob: pictureBlob
        }, { headers: headers })
            .map(function (res) {
            console.log(res);
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    MediaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "../../../../../src/app/common/metadata/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_service__ = __webpack_require__("../../../../../src/app/common/metadata/metadata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MetadataModule = (function () {
    function MetadataModule() {
    }
    MetadataModule_1 = MetadataModule;
    MetadataModule.forRoot = function () {
        return {
            ngModule: MetadataModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__metadata_service__["a" /* MetadataService */]]
        };
    };
    MetadataModule = MetadataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
        })
    ], MetadataModule);
    return MetadataModule;
    var MetadataModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/metadata/metadata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_context__ = __webpack_require__("../../../../../src/app/common/model/context.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetadataService = (function () {
    function MetadataService(http) {
        this.http = http;
    }
    MetadataService.prototype.getVoucherReviews = function (voucherVendorLocationCode) {
        console.log('Calling getVoucherReviews');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].USER_AGENT);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].API_URL + "/metadata/reviews.s", {
            voucherVendorLocationCode: voucherVendorLocationCode
        }, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    MetadataService.prototype.getTradeReviews = function (tradeLocationCode) {
        console.log('Calling getVoucherReviews');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].USER_AGENT);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].API_URL + "/metadata/reviews.s", {
            tradeLocationCode: tradeLocationCode
        }, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    MetadataService.prototype.createVoucherReview = function (voucherVendorLocationCode, text, scoreGiven) {
        console.log('Calling createVoucherReviews');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].USER_AGENT);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].API_URL + "/metadata/create-review.s", {
            voucherVendorLocationCode: voucherVendorLocationCode,
            text: text,
            scoreGiven: scoreGiven
        }, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    MetadataService.prototype.createTradeReviews = function (tradeLocationCode, text, scoreGiven) {
        console.log('Calling createTradeReviews');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].USER_AGENT);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__model_context__["a" /* Context */].API_URL + "/metadata/create-review.s", {
            tradeLocationCode: tradeLocationCode,
            text: text,
            scoreGiven: scoreGiven
        }, { headers: headers })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    MetadataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], MetadataService);
    return MetadataService;
}());



/***/ }),

/***/ "../../../../../src/app/common/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
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



var ModalComponent = (function () {
    function ModalComponent(modalService, router) {
        this.modalService = modalService;
        this.router = router;
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.onMouseEnter = function (event) {
        this.keyup(event);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        if (this.modalTitle != 'Question') {
            if (this.modalId == 'ModalForgot') {
                this.router.navigate(["/"]);
                window.location.reload();
            }
            else {
                this.modalService.close(this.modalId, checkBlocking);
            }
        }
    };
    ModalComponent.prototype.keyup = function (event) {
        if (event && event.keyCode === 27) {
            //this.modalService.close(this.modalId, true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "modalTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "blocking", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onMouseEnter", null);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            styles: [__webpack_require__("../../../../../src/app/common/modal/modal.scss")],
            template: "\n      <div [ngClass]=\"{'closed': !isOpen}\" fxLayoutAlign=\"center center\">\n        <div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\n        <div class=\"modal\" fxLayout=\"column\" fxFlex='40' fxFlex.sm='60' fxFlex.xs='100' [ngClass.xs]=\"{'left-side-modal': true}\" [ngClass.sm]=\"{'left-side-modal-sm': true}\">\n          <div class=\"title\" *ngIf=\"modalTitle\">\n            <span class=\"right-align\" (click)=\"close(true)\"><img src=\"assets/images/icon/cancel-20.png\"></span>\n            <img src=\"assets/images/fondo-popup.jpg\">\n            <span *ngIf=\"modalTitle=='Login'\"><h1 class=\"text-title\" [ngClass.xs]=\"{'text-title-xs': true}\" [ngClass.sm]=\"{'text-title-sm': true}\">{{modalTitle}}</h1></span>\n            <span *ngIf=\"modalTitle=='Forgot password'\"><h1 class=\"text-title-forgot\" [ngClass.xs]=\"{'text-title-forgot-xs': true}\" [ngClass.sm]=\"{'text-title-forgot-sm': true}\">{{modalTitle}}</h1></span>\n            <span *ngIf=\"modalTitle=='Registration'\"><h1 class=\"text-title-regis\" [ngClass.xs]=\"{'text-title-regis-xs': true}\" [ngClass.sm]=\"{'text-title-regis-sm': true}\">{{modalTitle}}</h1></span>\n            <span *ngIf=\"modalTitle=='Question'\"><h1 class=\"text-title-regis\" [ngClass.xs]=\"{'text-title-regis-xs': true}\" [ngClass.sm]=\"{'text-title-regis-sm': true}\">{{modalTitle}}</h1></span>\n          </div>\n\n          <div class=\"body\" fxLayout=\"column\">\n            <ng-content></ng-content>\n          </div>\n        </div>\n      </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("../../../../../src/app/common/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4_ng_lightning_ng_lightning__["a" /* NglModule */], __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/modal/modal.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-overlay {\n  background-color: rgba(0, 0, 0, 0.4);\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 100; }\n\n.closed .modal {\n  top: -100%; }\n\n.closed .modal-overlay {\n  display: none; }\n\n.left-side-modal {\n  left: calc(0%) !important; }\n\n.left-side-modal-sm {\n  left: calc(20%) !important; }\n\n.modal {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12);\n  background-color: white;\n  left: calc(30%);\n  max-height: calc(100% - 10em);\n  overflow-y: auto;\n  top: 7em;\n  width: 100%;\n  z-index: 100;\n  transition: all .5s ease-in; }\n  .modal .title {\n    text-align: center;\n    color: white;\n    line-height: 40px; }\n    .modal .title .right-align {\n      position: absolute;\n      float: right;\n      margin-top: 5px;\n      right: 5px; }\n      .modal .title .right-align, .modal .title .right-align i {\n        line-height: 40px; }\n      .modal .title .right-align:hover {\n        cursor: pointer;\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n  .modal .text-title {\n    text-align: center;\n    position: absolute;\n    top: 14%;\n    left: 37%;\n    font-size: 4em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-xs {\n    text-align: center;\n    position: absolute;\n    top: 9%;\n    left: 38%;\n    font-size: 3.5em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-sm {\n    text-align: center;\n    position: absolute;\n    top: 20%;\n    left: 35%;\n    font-size: 4em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-forgot {\n    text-align: center;\n    position: absolute;\n    top: 14%;\n    left: 25%;\n    font-size: 4em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-forgot-xs {\n    text-align: center;\n    position: absolute;\n    top: 8%;\n    left: 18%;\n    font-size: 3em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-forgot-sm {\n    text-align: center;\n    position: absolute;\n    top: 20%;\n    left: 18%;\n    font-size: 3em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-regis {\n    text-align: center;\n    position: absolute;\n    top: 14%;\n    left: 28%;\n    font-size: 4em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-regis-xs {\n    text-align: center;\n    position: absolute;\n    top: 8%;\n    left: 24%;\n    font-size: 3em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .text-title-regis-sm {\n    text-align: center;\n    position: absolute;\n    top: 20%;\n    left: 24%;\n    font-size: 3em;\n    font-family: 'Ceviche One', Georgia, sans-serif; }\n  .modal .title img {\n    float: left; }\n  .modal .body {\n    padding: 1.2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = (function () {
    function ModalService() {
        this.onCloseModal = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.modals = [];
    }
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal));
        }
        this.modals.push(newModal);
    };
    ModalService.prototype.open = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal_1 = _a[_i];
            this.close(modal_1.modalId);
        }
        var modal = this.findModal(modalId);
        if (modal) {
            modal.isOpen = true;
            $('#' + modal.modalId + ' .modal').show();
        }
    };
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            this.onCloseModal.next({ "id": modalId });
            modal.isOpen = false;
        }
    };
    ModalService.prototype.findModal = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal = _a[_i];
            if (modal.modalId === modalId) {
                return modal;
            }
        }
        return null;
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/common/model/context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * New typescript file
 */

var Context = (function () {
    function Context() {
    }
    Context.API_URL = 'https://pandaweed.com/aa/rs';
    Context.USER_AGENT = 'Web:any-pandaweed:1.0-Web:any';
    Context = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Context);
    return Context;
}());



/***/ }),

/***/ "../../../../../src/app/common/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_util_uuid__ = __webpack_require__("../../../../../src/app/common/util/uuid/index.ts");
/**
 * New typescript file
 */

var User = (function () {
    function User() {
        this.firstName = 'guest';
        this.lastName = 'guest';
        this.roleCode = '4';
        this.userName = 'guest';
        this.token = '';
        this.userTypeCode = '4';
        this.device = __WEBPACK_IMPORTED_MODULE_0__common_util_uuid__["a" /* UUID */].generateUUID();
        this.latitude = '43.694570';
        this.longitude = '-79.468727';
        this.nonce = "nonce";
        this.lang = "en";
        this.guest = true;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/common/storage/storage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__("../../../../../src/app/common/storage/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StorageModule = (function () {
    function StorageModule() {
    }
    StorageModule_1 = StorageModule;
    StorageModule.forRoot = function () {
        return {
            ngModule: StorageModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]]
        };
    };
    StorageModule = StorageModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
        })
    ], StorageModule);
    return StorageModule;
    var StorageModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/storage/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_localforage__ = __webpack_require__("../../../../localforage/dist/localforage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = (function () {
    function StorageService() {
        this.storage = __WEBPACK_IMPORTED_MODULE_1_localforage__["createInstance"]({
            driver: __WEBPACK_IMPORTED_MODULE_1_localforage__["LOCALSTORAGE"],
            name: 'pandaweed-app',
            version: 1.0,
            storeName: 'pandaweeb',
            description: 'Panda Weed App'
        });
    }
    StorageService.prototype.get = function (key) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.getItem(key));
    };
    StorageService.prototype.set = function (key, value) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.setItem(key, value));
    };
    StorageService.prototype.remove = function (key) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.removeItem(key));
    };
    StorageService.prototype.clear = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.clear());
    };
    StorageService.prototype.length = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.length());
    };
    StorageService.prototype.key = function (index) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.key(index));
    };
    StorageService.prototype.keys = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(this.storage.keys());
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/common/trade/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__trade_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TradeModule = (function () {
    function TradeModule() {
    }
    TradeModule_1 = TradeModule;
    TradeModule.forRoot = function () {
        return {
            ngModule: TradeModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__trade_service__["a" /* TradeService */]]
        };
    };
    TradeModule = TradeModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__api__["b" /* ApiModule */]]
        })
    ], TradeModule);
    return TradeModule;
    var TradeModule_1;
}());




/***/ }),

/***/ "../../../../../src/app/common/trade/trade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradeService = (function () {
    function TradeService(apiBuilder) {
        this.apiBuilder = apiBuilder;
        this.request = apiBuilder.defaultOptions()
            .path("trade/")
            .build();
        this.requestMetadata = apiBuilder.defaultOptions()
            .path("metadata/")
            .build();
    }
    TradeService.prototype.getTrades = function (categoryCode, categoryTypeCode, page, pageSize, sortType, filters) {
        var filtersCode = [];
        if (filters && filters.length > 0) {
            for (var filter in filters) {
                filtersCode.push({ filterCode: filters[filter] });
            }
        }
        var opts = {
            categoryCode: categoryCode,
            categoryTypeCode: categoryTypeCode,
            page: page,
            pageSize: pageSize,
            sortType: sortType
        };
        if (filtersCode && filtersCode.length > 0) {
            opts.filters = filtersCode;
        }
        return this.request.post("all.s", opts);
    };
    TradeService.prototype.getTrade = function (tradeLocationCode) {
        return this.request.post("detail.s", {
            tradeLocationCode: tradeLocationCode
        });
    };
    TradeService.prototype.getTradeReviews = function (tradeLocationCode) {
        return this.requestMetadata.post("reviews.s", {
            tradeLocationCode: tradeLocationCode
        });
    };
    TradeService.prototype.createTradeReview = function (tradeLocationCode, text, scoreGiven) {
        return this.requestMetadata.post("create-review.s", {
            tradeLocationCode: tradeLocationCode,
            text: text,
            scoreGiven: scoreGiven
        });
    };
    TradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiBuilder */]])
    ], TradeService);
    return TradeService;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__useractivity_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__userprofile_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    UserModule_1 = UserModule;
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__useractivity_service__["a" /* UserActivityService */], __WEBPACK_IMPORTED_MODULE_3__userprofile_service__["a" /* UserprofileService */]]
        };
    };
    UserModule = UserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__api__["b" /* ApiModule */], __WEBPACK_IMPORTED_MODULE_5__auth__["b" /* AuthModule */]]
        })
    ], UserModule);
    return UserModule;
    var UserModule_1;
}());






/***/ }),

/***/ "../../../../../src/app/common/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_model_context__ = __webpack_require__("../../../../../src/app/services/model/context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(apiBuilder, authService) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.toggleLoginSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.toggleLogin = this.toggleLoginSource.asObservable();
        this.logueadoChanged = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.tokenChanged = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.tokenValidated = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.signupSuccess = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.signvendorSuccess = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.requestUser = apiBuilder.defaultOptions()
            .path("user/")
            .build();
        this.requestDevice = apiBuilder.defaultOptions()
            .path("device/")
            .build();
        this.requestVendor = apiBuilder.defaultOptions()
            .path("vendor/")
            .build();
        this.requestUserProfile = apiBuilder.defaultOptions()
            .path("user-profile/")
            .build();
    }
    UserService.prototype.registerDevice = function () {
        return this.requestDevice.post("register", {});
    };
    UserService.prototype.loginAsGuest = function () {
        return this.requestUser.post("guest.n", {});
    };
    UserService.prototype.loginAsUser = function (userTypeCode, userIdentifier, token) {
        var _this = this;
        return this.requestUser.post("loginUser.n", {
            userTypeCode: userTypeCode,
            userIdentifier: userIdentifier,
            token: token
        })
            .do(function (res) {
            return _this.authService.saveLogin(res.firstName, res.lastName, res.roleCode, res.userName, res.token).subscribe(function () {
                _this.logueadoChanged.next(true);
                _this.tokenChanged.next();
                _this.toggleLoginSource.next();
            });
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserService.prototype.getUser = function () {
        return this.authService.getUser();
    };
    UserService.prototype.setLangUser = function (lang) {
        return this.authService.saveLang(lang);
    };
    UserService.prototype.getUserOldYear = function () {
        return this.authService.getUserOldYear();
    };
    UserService.prototype.setUserYearOld = function (dataUser) {
        return this.authService.saveUserOldYear(dataUser);
    };
    UserService.prototype.isLogin = function () {
        return this.authService.isLoggedIn();
    };
    UserService.prototype.signUp = function (userTypeCode, userEmail, firstName, lastName, userName, phoneNumber, token, dateOfBirth) {
        console.log('Calling SignUp', userTypeCode);
        return this.requestUser.post("signUp.s", {
            userTypeCode: userTypeCode,
            userEmail: userEmail,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phoneNumber: phoneNumber,
            token: token,
            dateOfBirth: dateOfBirth
        });
    };
    UserService.prototype.signVendor = function (userTypeCode, userEmail, firstName, lastName, userName, phoneNumber, token, dateOfBirth) {
        console.log('Calling SignUp', userTypeCode);
        return this.requestVendor.post("signUp.s", {
            userTypeCode: userTypeCode,
            userEmail: userEmail,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phoneNumber: phoneNumber,
            token: token,
            dateOfBirth: dateOfBirth
        });
    };
    UserService.prototype.saveUserProfile = function (firstName, lastName, phoneNumber, dateOfBirth) {
        return this.requestUserProfile.post("setUserProfile.s", [{
                key: 'user.billing.firstName',
                value: firstName,
            },
            {
                key: 'user.billing.lastName',
                value: lastName,
            },
            {
                key: 'user.billing.phoneNumber',
                value: phoneNumber,
            },
            {
                key: 'user.billing.dateOfBirth',
                value: dateOfBirth,
            }
        ]);
        // return this.requestUserProfile.post("setUserProfile.s",
        //   {
        //     "key": "user_profile",
        //     "value": JSON.stringify([{
        //       key: 'user.profile.firstName',
        //       value: firstName,
        //     },
        //     {
        //       key: 'user.profile.lastName',
        //       value: lastName,
        //     },
        //     {
        //       key: 'user.profile.phoneNumber',
        //       value: phoneNumber,
        //     },
        //     {
        //       key: 'user.profile.dateOfBirth',
        //       value: dateOfBirth,
        //     }
        //     ])
        //   });
    };
    UserService.prototype.changePassword = function (oldPassword, newPassword, confirmPassword) {
        return this.requestUserProfile.post("changePassword.s", {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        });
    };
    UserService.prototype.forgotPassword = function (userEmail) {
        return this.requestUserProfile.post("forgotpassword.s", {
            emailAddress: userEmail,
        });
    };
    UserService.prototype.getUserProfile = function () {
        return this.requestUserProfile.post("getUserProfile.s");
    };
    UserService.prototype.getUserProfileDetail = function () {
        return this.requestUserProfile.post("detail.s");
    };
    UserService.prototype.logout = function () {
        var _this = this;
        console.log('Calling logout', this.requestUser);
        return this.requestUser.post("logout.s")
            .do(function () { return _this.authService.logout(); }, function () { return _this.authService.logout(); })
            .do(function () { return _this.logueadoChanged.next(false); }, function () { return _this.logueadoChanged.next(false); })
            .do(function () { return true; }, function () { return _this.toggleLoginSource.next(); });
    };
    UserService.prototype.search = function (querySearchParam) {
        console.log('Search Query');
        return this.requestUser.post("search.s", { querySearchParam: querySearchParam });
    };
    UserService.prototype.checkEmail = function (emailAddress) {
        console.log('Search Query');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__services_model_context__["a" /* Context */].USER_AGENT);
        return this.requestUser.post("checkemail.n", { emailAddress: emailAddress });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_4__auth___["c" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/useractivity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserActivityService = (function () {
    function UserActivityService(apiBuilder, authService) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.cartChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.requestUser = apiBuilder.defaultOptions()
            .path("user-activity/")
            .build();
        this.requestSource = apiBuilder.defaultOptions()
            .path("purchase/source/")
            .build();
    }
    UserActivityService.prototype.manageCart = function (voucherCode, amount) {
        var _this = this;
        console.log('Calling manageCart');
        return this.requestUser.post("manageCart.s", {
            voucherCode: voucherCode,
            amount: amount
        })
            .map(function (res) {
            _this.cartChanged.next(true);
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserActivityService.prototype.getShoppingCart = function (creditUsed) {
        console.log('Calling getShoppingCart');
        return this.requestUser.post("cart.s", {
            creditUsed: creditUsed
        });
    };
    UserActivityService.prototype.checkout = function (sourceCode, creditUsed) {
        console.log('Calling checkout');
        return this.requestUser.post("checkout.s", {
            sourceCode: sourceCode,
            creditUsed: creditUsed
        });
    };
    UserActivityService.prototype.setFavouritedTrade = function (tradeLocationCode, favourited) {
        return this.requestUser.post("favourited.s", {
            tradeLocationCode: tradeLocationCode,
            favourited: favourited
        });
    };
    UserActivityService.prototype.setFavouritedPost = function (storyCode, favourited) {
        return this.requestUser.post("favourited.s", {
            storyCode: storyCode,
            favourited: favourited
        });
    };
    UserActivityService.prototype.setFavouritedVoucher = function (tradeLocationCode, favourited) {
        console.log('Calling setFavouritedVoucher');
        return this.requestUser.post("favourited.s", {
            tradeLocationCode: tradeLocationCode,
            favourited: favourited
        });
    };
    UserActivityService.prototype.addSource = function (sourceHolderName, nickname, processorToken, phoneNumber) {
        return this.requestSource.post("add.s", {
            "sourceHolderName": sourceHolderName,
            "nickname": nickname,
            "processorToken": processorToken,
            "phoneNumber": phoneNumber
        });
    };
    UserActivityService.prototype.getSources = function () {
        return this.requestSource.get("all.s");
    };
    UserActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_3__auth___["c" /* AuthService */]])
    ], UserActivityService);
    return UserActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/common/user/userprofile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_model_context__ = __webpack_require__("../../../../../src/app/services/model/context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserprofileService = (function () {
    function UserprofileService(apiBuilder, authService) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.changedProfileSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["b" /* Subject */]();
        this.changedProfile = this.changedProfileSource.asObservable();
        this.requestUser = apiBuilder.defaultOptions()
            .path("user-profile/")
            .build();
    }
    UserprofileService.prototype.getUserProfile = function () {
        return this.requestUser.post("getUserProfile.s", {})
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.setUserProfile = function (dataList) {
        var _this = this;
        return this.requestUser.post("setUserProfile.s", dataList)
            .map(function (res) {
            _this.changedProfileSource.next();
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.requestUser.post("changePassword.s", {
            oldPassword: oldPassword,
            newPassword: newPassword
        })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.getUserInfo = function () {
        return this.requestUser.post("detail.s", {})
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.setUserName = function (newUsername) {
        return this.requestUser.post("setusername.s", {
            newUsername: newUsername
        })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.setemail = function (newEmail) {
        return this.requestUser.post("setemail.s", {
            newEmail: newEmail
        })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.getTermsOfUrl = function () {
        return this.requestUser.post("termsofuseurl.s", {})
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.forgotPassword = function (emailAddress) {
        return this.requestUser.post("forgotpassword.s", {
            emailAddress: emailAddress
        })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.passwordReset = function (resetCode) {
        return this.requestUser.post("password-reset.n", {
            resetCode: resetCode
        })
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.deactivate = function () {
        return this.requestUser.post("deactivate.s", {})
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService.prototype.addShippingAddress = function (address) {
        console.log('Calling addShippingAddress');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('userAgent', __WEBPACK_IMPORTED_MODULE_3__services_model_context__["a" /* Context */].USER_AGENT);
        return this.requestUser.post("shipping-address/add.s", {
            fullName: address.fullName,
            country: address.country,
            phoneNumber: address.phoneNumber,
            province: address.province,
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            zipOrPostalCode: address.zipOrPostalCode
        })
            .map(function (res) {
            return res;
        });
    };
    UserprofileService.prototype.getShippingAddresses = function () {
        return this.requestUser.post("shipping-address/all.s", {})
            .map(function (res) {
            return res;
        }, function (err) {
            console.log('Error occured');
        });
    };
    UserprofileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_5__auth___["c" /* AuthService */]])
    ], UserprofileService);
    return UserprofileService;
}());



/***/ }),

/***/ "../../../../../src/app/common/util/uuid/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UUID; });
var UUID = (function () {
    function UUID() {
    }
    UUID.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    return UUID;
}());



/***/ }),

/***/ "../../../../../src/app/common/voucher/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoucherModule = (function () {
    function VoucherModule() {
    }
    VoucherModule_1 = VoucherModule;
    VoucherModule.forRoot = function () {
        return {
            ngModule: VoucherModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__voucher_service__["a" /* VoucherService */]]
        };
    };
    VoucherModule = VoucherModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
        })
    ], VoucherModule);
    return VoucherModule;
    var VoucherModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/voucher/voucher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoucherService = (function () {
    function VoucherService(apiBuilder) {
        this.apiBuilder = apiBuilder;
        this.request = apiBuilder.defaultOptions()
            .path("voucher/")
            .build();
        this.requestMetadata = apiBuilder.defaultOptions()
            .path("metadata/")
            .build();
    }
    VoucherService.prototype.getVouchers = function (categoryCode, voucherTypeCode, page, pageSize, sortType) {
        console.log('Calling getVouchers');
        return this.request.post("all.s", {
            categoryCode: categoryCode,
            voucherTypeCode: voucherTypeCode,
            page: page,
            pageSize: pageSize,
            sortType: sortType
        });
    };
    VoucherService.prototype.getCategories = function () {
        console.log('Calling getVouchers');
        return this.requestMetadata.post("categories.s", {
            categoryTypeCode: "R",
        });
    };
    VoucherService.prototype.getVouchersByTradeLocation = function (categoryCode, voucherTypeCode, vendorLocationCode, page, pageSize, sortType) {
        console.log('Calling getVouchersByTradeLocation');
        return this.request.post("all/byLocation.s", {
            categoryCode: categoryCode,
            voucherTypeCode: voucherTypeCode,
            vendorLocationCode: vendorLocationCode,
            page: page,
            pageSize: pageSize,
            sortType: sortType
        });
    };
    VoucherService.prototype.getVoucherDetail = function (voucherVendorLocationCode) {
        console.log('Calling getVoucherDetail');
        return this.request.post("detail.s", {
            voucherVendorLocationCode: voucherVendorLocationCode
        });
    };
    VoucherService.prototype.getSales = function () {
        console.log('Calling getSales');
        return this.request.post("detail.s");
    };
    VoucherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api__["a" /* ApiBuilder */]])
    ], VoucherService);
    return VoucherService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\r\n<div id=\"loader-wrapper\">\r\n    <div id=\"loader\"></div>\r\n</div>\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_user__ = __webpack_require__("../../../../../src/app/common/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(userService, mediaService, tradeService, sanitizer, authService) {
        this.userService = userService;
        this.mediaService = mediaService;
        this.tradeService = tradeService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.title = 'app';
        this.location = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.authService.tokenExpired.subscribe(function () {
            _this.init();
        });
        this.userService.logueadoChanged.subscribe(function (loggged) {
            if (!loggged) {
                _this.init();
            }
        });
        //    if (navigator.geolocation) {
        //      navigator.geolocation.getCurrentPosition(position => {
        //        this.location = position.coords;
        //        Context.latitude  = position.coords.latitude;
        //        Context.longitude = position.coords.longitude;
        //        console.log('COORDINATES LATITUDE->' + position.coords.latitude);
        //        console.log('COORDINATES LONGITUDE->' + position.coords.longitude);
        //        this.init();
        //      });
        //    }
    };
    AppComponent.prototype.init = function () {
        var _this = this;
        var logoutRefrest = function () {
            _this.authService.logout().subscribe(function () {
                window.location.reload();
            });
        };
        this.authService.isLoggedIn().subscribe(function (logged) {
            console.log("is validated", logged);
            if (logged) {
                _this.userService.tokenValidated.next();
                console.log("TOKEN VALIDATEd");
            }
            __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].of(logged).filter(function (l) { return !l; }).subscribe(function () {
                var user = new __WEBPACK_IMPORTED_MODULE_3__common_model_user__["a" /* User */]();
                _this.authService.saveUser(user).subscribe(function () {
                    _this.userService.registerDevice().subscribe(function (d) {
                        if (!d || !d.deviceId) {
                            logoutRefrest();
                            return;
                        }
                        _this.authService.saveDevice(d.deviceId).subscribe(function (usr) {
                            _this.userService.loginAsGuest().subscribe(function (guest) {
                                if (!guest || !guest.token) {
                                    logoutRefrest();
                                    return;
                                }
                                var user = new __WEBPACK_IMPORTED_MODULE_3__common_model_user__["a" /* User */]();
                                _this.authService.saveToken(guest.token).subscribe(function () {
                                    _this.userService.tokenChanged.next();
                                }, function () {
                                    logoutRefrest();
                                });
                            }, function () {
                                logoutRefrest();
                            });
                        }, function () {
                            logoutRefrest();
                        });
                    }, function () {
                        logoutRefrest();
                    });
                }, function () {
                    logoutRefrest();
                });
            }, function () {
                logoutRefrest();
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        //    if (this.subscriptionRegisterDevice) {
        //      this.subscriptionRegisterDevice.unsubscribe();
        //    }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/modules/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_6__common_trade_trade_service__["a" /* TradeService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__common_auth___["c" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n\r\n    <div class=\"container top-footer-in twocolor4 footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <div style=\"width:100%\">\r\n                    <a class=\"logofooter4\" href=\"/\">\r\n                        <h4>SHARE VIA</h4>\r\n                        <div class=\"col-md-8\">\r\n                            <ul class=\"list-unstyled list-inline list-social-icons-footer\">\r\n                                <li class=\"tooltip-social-footer facebook-link\">\r\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Facebook\">\r\n                                        <i class=\"fa fa-facebook\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"tooltip-social-footer twitter-link\">\r\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Twitter\">\r\n                                        <i class=\"fa fa-twitter\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <!-- <li class=\"tooltip-social-footer youtube-play-link\">\r\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Youtube\">\r\n                                        <i class=\"fa fa-youtube-play\"></i>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"tooltip-social-footer linkedin-link\">\r\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"LinkedIn\">\r\n                                        <i class=\"fa fa-linkedin\"></i>\r\n                                    </a>\r\n                                </li> -->\r\n                            </ul>\r\n                        </div>\r\n                        <img src=\"assets/images/logo-footer3.png\" alt=\"logo\" />\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n                <h4>About</h4>\r\n                <ul class=\"footer-menu\">\r\n                    <!-- <li>\r\n                        <a>Contact US: info@pandweed.com</a>\r\n                    </li> -->\r\n                    <li>\r\n                        <a href=\"mailto:support@pandaweed.com?subject=Email%20Subject&body=Email%20Body%20Text\">Ask us a Support Question</a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/about/policy\">Privacy Policy and Terms of Use</a>\r\n                    </li>\r\n                    <!-- <li>\r\n                        <a routerLink=\"/about/terms\">Terms of Use</a>\r\n                    </li> -->\r\n                    <li>\r\n                        <a href=\"mailto:info@pandaweed.com?subject=Email%20Subject&body=Email%20Body%20Text\">Submit an Idea to PandaWeed!</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2 col-sm-12\">\r\n                <h4>Community</h4>\r\n                <ul class=\"footer-menu\">\r\n                    <li>\r\n                        <!-- <a routerLink=\"/community/highthere\">High There</a> -->\r\n                        <a>High There</a>\r\n                    </li>\r\n                    <li>\r\n                        <!-- <a routerLink=\"/community/weedlife\">WeedLife</a> -->\r\n                        <a>WeedLife</a>\r\n                    </li>\r\n                    <li>\r\n                        <!-- <a routerLink=\"/community/duby\">Duby</a> -->\r\n                        <a>Duby</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 map-back\">\r\n                <h4>Location</h4>\r\n                <ul class=\"footer-menu\">\r\n                    <li>\r\n                        <a href=\"#\">Canada</a>\r\n                    </li>\r\n                    <!-- <li><a href=\"#\">United States</a></li> -->\r\n                </ul>\r\n                <p>\r\n                    <i class=\"fa fa-phone\"></i>Phone : 16479804289</p>\r\n                <p>\r\n                    <i class=\"fa fa-envelope-o\"></i>Email: info@pandaweed.com</p>\r\n                    <ul>\r\n                        <li>\r\n                            <a class=\"btn btn-sd btn-login\" (click)='modalService.open(modalId)' *ngIf=\"!logueado\">{{'LOGIN'|translate}}</a>\r\n                        </li>\r\n                    </ul>\r\n               <!--  <p>\r\n                    <i class=\"fa fa-location-arrow\"></i>65 Bremner Blvd , suite 4208 north tower</p> -->\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"info-footer\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                    <div class=\"col-md-5 f-spons\">\r\n                        <span class=\"copyright\"> Copyright &#169; 2018 l pandaweed.com. All rights reserved.</span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/modules/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/modules/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav>li {list-style-type: circle;}\r\n\r\n.card {\r\n    will-change: transform;\r\n    margin: 8px;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    background-color: #fafafa;\r\n    width: 344px;\r\n    transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n  }\r\n  .card:hover {\r\n    cursor: pointer;\r\n  }\r\n  .card__image {\r\n    position: absolute;\r\n    background-size: cover;\r\n    background-position: center bottom;\r\n    background-repeat: no-repat;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    display: block;\r\n    opacity: 0;\r\n    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n  }\r\n  .card__image:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    transition: all 500ms;\r\n    bottom: 0;\r\n  }\r\n  .card__title {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-size: 24px;\r\n    color: #FFF;\r\n    margin: 0;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 0 16px;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n  }\r\n  .card__subtitle {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-size: 14px;\r\n    display: block;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    color: #000;\r\n    left: 88px;\r\n    right: 0;\r\n    top: 45px;\r\n    position: absolute;\r\n    padding: 0 16px;\r\n    opacity: 0;\r\n    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n  }\r\n  .card__text {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-size: 14px;\r\n    display: block;\r\n    left: 0;\r\n    right: 0;\r\n    top: 100px;\r\n    padding: 16px;\r\n    margin: 0;\r\n    line-height: 1.6;\r\n    position: absolute;\r\n    color: #000;\r\n    overflow: hidden;\r\n    transition: width 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transition: delay 0.1s;\r\n  }\r\n  .card__action-bar {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: auto;\r\n    left: 0;\r\n    right: 0;\r\n    padding: 0 8px;\r\n    border-top: 1px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    height: 52px;\r\n    transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\r\n  }\r\n  .card__button {\r\n    outline: none;\r\n    position: relative;\r\n    display: inline-block;\r\n    line-height: 52px;\r\n    padding: 0 16px;\r\n    color: #FF1744;\r\n  }\r\n  .card--big {\r\n    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);\r\n    height: 440px;\r\n    min-height: 360px;\r\n    max-width: 320px;\r\n  }\r\n  .card--big .card__image {\r\n    border-radius: 1px 1px 0 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    opacity: 1;\r\n    max-height: 176px;\r\n  }\r\n  .card--big .card__title {\r\n    top: 135px;\r\n  }\r\n  .card--big .card__text {\r\n    top: 176px;\r\n  }\r\n  .card--big .card__action-bar {\r\n    left: 0;\r\n  }\r\n  .card--medium {\r\n    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);\r\n    height: 208px;\r\n    min-height: 208px;\r\n  }\r\n  .card--medium .card__image {\r\n    border-radius: 1px 1px 0 0;\r\n    left: -100%;\r\n    right: 0;\r\n    top: 0;\r\n    max-height: 0;\r\n    opacity: 0;\r\n  }\r\n  .card--medium .card__title {\r\n    color: #FF1744;\r\n    top: 16px;\r\n  }\r\n  .card--medium .card__text {\r\n    font-size: 16px;\r\n    top: 50px;\r\n  }\r\n  .card--medium .card__action-bar {\r\n    left: 0;\r\n  }\r\n  .card--small {\r\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\r\n    height: 136px;\r\n    min-height: 136px;\r\n  }\r\n  .card--small .card__image {\r\n    border-radius: 1px 0 0 1px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 88px;\r\n    opacity: 1;\r\n    max-height: 136px;\r\n  }\r\n  .card--small .card__image:after {\r\n    opacity: 0;\r\n  }\r\n  .card--small .card__title {\r\n    color: #000;\r\n    left: 88px;\r\n    top: 8px;\r\n  }\r\n  .card--small .card__subtitle {\r\n    opacity: 1;\r\n    left: 88px;\r\n  }\r\n  .card--small .card__text {\r\n    top: 30px;\r\n    opacity: 0;\r\n  }\r\n  .card--small .card__action-bar {\r\n    left: 88px;\r\n  }\r\n\r\n\r\n.menu-mobile{\r\n  position: fixed;\r\n  z-index: 9999;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-top: 20px;\r\n}\r\n.list-menu-mobile{\r\n  font-size: 18px;\r\n  line-height: 3;\r\n  font-weight: 400;\r\n  padding-top: 50px;\r\n  padding-left: 50px;\r\n  list-style: none;\r\n}\r\n.list-menu-mobile li > a{\r\n  color: #fff;\r\n}\r\n.welcome-logged{\r\n    font-size: 18px;\r\n    color: #fff;\r\n    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);\r\n    margin-left: 20px;\r\n}\r\n\r\n.box-form-login{\r\n  color: #5d5d5d;\r\n  padding-bottom: 30px;\r\n}\r\n.box-form-login h1{\r\n  text-align: center;\r\n  color: #000;\r\n}\r\n.box-form-login h2{\r\n  text-align: center;\r\n  color: #000;\r\n  font-size: 16px;\r\n    font-weight: bold;\r\n    border: 0px;\r\n}\r\n.box-form-login button{\r\n  width: 90px;\r\n    box-shadow: 0 1px 7px #348a41;\r\n}\r\n.btn-default{\r\n  background-color: #000;\r\n  background-image: none;\r\n  color: #fff !important;\r\n    box-shadow: 0 1px 7px #000 !important;\r\n}\r\n\r\n.tooltipCopy {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.tooltipCopy .tooltiptext {\r\n    visibility: hidden;\r\n    width: 140px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 150%;\r\n    left: 50%;\r\n    margin-left: -75px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n.tooltipCopy .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltipCopy:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.btn-copy {\r\n  background: #348a41;\r\n    border: 1px solid #56de6b;\r\n    color: #fff!important;\r\n    box-shadow: inset 0 1px 0 #56de6b;\r\n    text-shadow: 0 1px 0 rgba(0,0,0,.1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" *ngIf=\"viewMenu\">\r\n    <div class=\"row\">\r\n        <div class=\"navbar-header col-xl-3 col-lg-3 col-md-3 col-sd-3\">\r\n            <button type=\"button\" (click)=\"toggleMenu()\" class=\"navbar-toggle\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!--Shopping Cart-->\r\n            <!--End Cart-->\r\n            <div fxLayout=\"row\">\r\n\r\n                <div fxFlex fxFlex.xs=\"20\">\r\n                    <div nglDropdown class=\"content-count-cart-header\" [(open)]=\"open\">\r\n                        <a title=\"go to shopping cart\" nglDropdownTrigger>\r\n                            <i class=\"fa fa-shopping-cart\"></i>\r\n                            <p class=\"number-prod-cart\" *ngIf=\"productsCart && productsCart.vouchers\">{{productsCart.grandTotalVouchers}}</p>\r\n                            <p class=\"number-prod-cart\" *ngIf=\"!productsCart || !productsCart.vouchers\">0</p>\r\n                        </a>\r\n                        <div class=\"slds-dropdown slds-dropdown--left \" style=\"padding:0; margin:0; border:0\">\r\n                            <div class=\"card card--big\" style=\"margin:0px\">\r\n                                <div class=\"card__image\" *ngIf=\"!mobile\" style=\"background-image: url(/assets/images/store-banner.jpg)\"></div>\r\n                                <div class=\"card__image\" *ngIf=\"mobile\" style=\"background-image: url(/assets/images/store-banner-xs.jpg)\"></div>\r\n                                <!-- <span class=\"card__subtitle\">By Mattia Astorino</span> -->\r\n\r\n                                <div class=\"card__text\" *ngIf=\"productsCart && productsCart.vouchers && productsCart.vouchers.length > 0 \">\r\n                                    <div style=\"max-height: 165px; overflow-y: scroll; overflow-x: hidden;\">\r\n\r\n\r\n                                        <div class=\"row\" *ngFor=\"let productcart of productsCart.vouchers\">\r\n                                            <div class=\"col-md-4 minicart-img\" style=\"padding-left:10px;\">\r\n                                                <img *ngIf=\"!productcart.image && !mobile\" style=\"width:100%\" class=\"product-img\" src=\"/assets/images/product/default.jpg\">\r\n                                                <img *ngIf=\"!productcart.image && mobile\" style=\"width:100%\" class=\"product-img\" src=\"/assets/images/product/default-xs.jpg\">\r\n                                                <img *ngIf=\"productcart.image\" style=\"width:100%\" class=\"product-img\" [src]=\"productcart.image\">\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-8 minicart-data\">\r\n                                                <p class=\"mc-name\">\r\n                                                    <a style=\"color:black\" (click)=\"goToProduct(productcart)\">{{productcart.shortDescription}} </a>\r\n                                                </p>\r\n                                                <p>{{productcart.quantity}} X ${{productcart.price}}</p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div id=\"cartInfo\" *ngIf=\"\">\r\n                                        <p class=\"minucart-price\">Subtotal ${{productsCart.grandSubtotal}}</p>\r\n                                    </div>\r\n                                    <a (click)=\"goToCheckout()\" id=\"goToCheckOut\">Proceed to purchase</a>\r\n                                </div>\r\n                                <div class=\"card__text\" *ngIf=\"!productsCart || !productsCart.vouchers || productsCart.vouchers.length < 1 \">\r\n                                    <strong>Cart is empty</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div fxFlex=\"80px\" fxHide.gt-xs=\"true\">\r\n                    <div >\r\n                        <a href=\"/\">\r\n                            <img src=\"../assets/images/{{logobigimg}}\" alt=\"logo\" width=\"80\" />\r\n                        </a>\r\n                    </div>\r\n                </div> -->\r\n                <!-- <input #someVar class=\"newpass\" value=\"\" type=\"hidden\"> -->\r\n                <div fxFlex>\r\n                    <div class=\"hidden-xl hidden-lg hidden-md hidden-sm welcome-logged\" *ngIf=\"logueado\">\r\n                        <h1>Hello,\r\n                            <br/> {{ (user && user.firstName) ? user.firstName : nameUser}}</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-xl-7 col-lg-7 col-md-7 col-sd-7\">\r\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse dropdown-prod-cart-scroll scroll-menu \">\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12 hidden-xs\">\r\n                    <ul class=\"list-unstyled list-inline menu-main\">\r\n                        <li *ngIf=\"logueado\">Hello, {{ (user && user.firstName) ? user.firstName : nameUser}}</li>\r\n                        <!-- <li class=\"tooltip-social-footer facebook-link\">\r\n                            <a (click)=\"setLang('en')\" title=\"English\">\r\n                                EN\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"tooltip-social-footer facebook-link\">\r\n                            <a (click)=\"setLang('fr')\" title=\"Français\">\r\n                                FR\r\n                            </a>\r\n                        </li> -->\r\n                        <li class=\"tooltip-social-footer facebook-link\">\r\n                            <a href=\"https://www.facebook.com/Pandaweed-1907557436150219/\" target=\"_blank\" title=\"Facebook\">\r\n                                <i class=\"fa fa-facebook\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"tooltip-social-footer twitter-link\">\r\n                            <a href=\"https://twitter.com/getpandaweed\" target=\"_blank\" title=\"Twitter\">\r\n                                <i class=\"fa fa-twitter\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"tooltip-social-footer instagram-link\">\r\n                            <a href=\"#\" title=\"instagram\">\r\n                                <i class=\"fa fa-instagram\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"btn btn-sd btn-login\" (click)='modalService.open(modalId)' *ngIf=\"!logueado\">{{'LOGIN'|translate}}</a>\r\n                            <li>\r\n                                <a class=\"btn btn-sd btn-login\" (click)='onLogout()' *ngIf=\"logueado\">{{'LOGOUT'|translate}}</a>\r\n                            </li>\r\n                            <li>\r\n                                <a class=\"btn btn-sd btn-join\" (click)='modalService.open(modalIdjoin)' *ngIf=\"!logueado\">{{'JOIN'|translate}} Panda!</a>\r\n                            </li>\r\n                            <li>\r\n                                <a class=\"btn btn-sd btn-vendor\" (click)='modalService.open(modalIdvendor)' *ngIf=\"!logueado\">Vendor Register</a>\r\n                            </li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sd-12\">\r\n\r\n                    <ul class=\"nav navbar-nav navbar-right menu-main\">\r\n                        <li>\r\n                            <a routerLink=\"/\">{{'HOME'|translate}}</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/store\">Panda Store</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/dispensaries\">{{'DISPENSARIES'|translate}}</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/deals\">Deals</a>\r\n                        </li>\r\n                        <li *ngIf=\"logueado\">\r\n                            <a routerLink=\"/profile\">Profile</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/social\">Social</a>\r\n                        </li>\r\n                        <!-- <li><a routerLink=\"/news\">Panda News</a></li> -->\r\n                        <!-- <li><a routerLink=\"/store\">Panda Store</a></li> -->\r\n                        <!-- <li>\r\n                            <a routerLink=\"/contact\">Contact</a>\r\n                        </li> -->\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 col-lg-2 col-md-2 col-sd-2 hidden-xs\">\r\n            <a routerLink=\"/\">\r\n                <img src=\"../assets/images/{{logobigimg}}\" alt=\"logo\" style=\"height:100%;position: fixed\" />\r\n            </a>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<app-modal [modalTitle]=\"'Login'\" [blocking]='false' [modalId]='modalId'>\r\n    <app-login></app-login>\r\n</app-modal>\r\n<app-modal [modalTitle]=\"'Registration'\" [blocking]='false' [modalId]='modalIdjoin'>\r\n    <app-signup></app-signup>\r\n</app-modal>\r\n<app-modal [modalTitle]=\"'Registration'\" [blocking]='false' [modalId]='modalIdvendor'>\r\n    <app-signup></app-signup>\r\n</app-modal>\r\n<app-modal [modalTitle]=\"'Forgot password'\" [blocking]='false' [modalId]='modalIdforgot'>\r\n    <!-- <h2 style=\"color:#080\" *ngIf=\"dataPass\">This is your new password: {{dataPassValue}}</h2> -->\r\n    <div *ngIf=\"dataPass\" class=\"col-xl-12 col-lg-12 col-md-12 col-xs-12 box-form-login\">\r\n        <h2>\r\n            This is your new password\r\n        </h2>\r\n        <div class=\"first-form\">\r\n            <div fxLayout=\"column\">\r\n                <label>Copy to password</label>\r\n                <div fxLayout=\"row\">\r\n                    <input fxFlexOffset=\"1\" #someVar class=\"form-control newpass\" value=\"{{dataPassValue}}\" type=\"text\">\r\n                    <div class=\"tooltipCopy\" fxFlexOffset=\"1\">\r\n                        <button class=\"btn btn-copy\" (click)=\"copyToClipboard(someVar.value)\" (mouseleave)=\"LeaveMouse()\">\r\n                            Copy\r\n                            <span class=\"tooltiptext\" #myTooltip>Copy to clipboard</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:20px\">\r\n                    <button class=\"btn btn-default\" (click)=\"closeReset()\">Close</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-forgot *ngIf=\"!dataPass\"></app-forgot>\r\n</app-modal>\r\n<app-modal [modalTitle]=\"'Question'\" [blocking]='false' [modalId]='modalIdOld'>\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-xs-12 box-form-login\">\r\n        <h2>\r\n            Are you over 18?\r\n        </h2>\r\n        <form class=\"form-signin\">\r\n            <div class=\"first-form\">\r\n                <div fxLayout=\"column\">\r\n                    <div fxFlexAlign=\"center\">\r\n                        <label>Yes</label>\r\n                        <input name=\"question\" style=\"width:30px;\" class=\"form-control\" (click)=\"resolveQ(true)\" type=\"radio\">\r\n                    </div>\r\n                    <div fxFlexAlign=\"center\">\r\n                        <label>No</label>\r\n                        <input name=\"question\" style=\"width:30px;\" class=\"form-control\" (click)=\"resolveQ(false)\" type=\"radio\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</app-modal>\r\n<div class=\"menu-mobile hidden-xl hidden-lg hidden-md\" [@slideInOut]=\"menuState\">\r\n    <div class=\"col-sm-12 col-xs-12\">\r\n        <ul class=\"list-unstyled list-inline menu-main-xs\">\r\n\r\n            <li class=\"tooltip-social-footer facebook-link\">\r\n                <a href=\"https://www.facebook.com/Pandaweed-1907557436150219/\" target=\"_blank\" title=\"Facebook\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"tooltip-social-footer twitter-link\">\r\n                <a href=\"https://twitter.com/getpandaweed\" target=\"_blank\" title=\"Twitter\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"tooltip-social-footer instagram-link\">\r\n                <a href=\"#\" title=\"instagram\">\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"btn btn-sd btn-login\" (click)='openLogin()' *ngIf=\"!logueado\">Login</a>\r\n                <li>\r\n                    <a class=\"btn btn-sd btn-login\" (click)='onLogout()' *ngIf=\"logueado\">Logout</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"btn btn-sd btn-join\" (click)='openSignup()' *ngIf=\"!logueado\">Join Panda!</a>\r\n                </li>\r\n\r\n        </ul>\r\n    </div>\r\n    <ul class=\"list-menu-mobile\">\r\n        <li>\r\n            <a routerLink=\"/\" (click)=\"toggleMenu()\">{{'HOME'|translate}}</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/store\" (click)=\"toggleMenu()\">Panda Store</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/dispensaries\" (click)=\"toggleMenu()\">{{'DISPENSARIES'|translate}}</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/deals\" (click)=\"toggleMenu()\">Deals</a>\r\n        </li>\r\n        <li *ngIf=\"logueado\">\r\n            <a routerLink=\"/profile\" (click)=\"toggleMenu()\">Profile</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/social\" (click)=\"toggleMenu()\">Social</a>\r\n        </li>\r\n        <!-- <li><a routerLink=\"/news\">Panda News</a></li> -->\r\n        <!-- <li><a routerLink=\"/store\">Panda Store</a></li> -->\r\n        <!-- <li>\r\n            <a routerLink=\"/contact\" (click)=\"toggleMenu()\">Contact</a>\r\n        </li> -->\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_auth_service__ = __webpack_require__("../../../../../src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var HeaderComponent = (function () {
    function HeaderComponent(modalService, userService, authService, translate, router, useractivityService, userprofileService, mediaService, sanitizer, dom) {
        this.modalService = modalService;
        this.userService = userService;
        this.authService = authService;
        this.translate = translate;
        this.router = router;
        this.useractivityService = useractivityService;
        this.userprofileService = userprofileService;
        this.mediaService = mediaService;
        this.sanitizer = sanitizer;
        this.modalId = 'ModalLogin';
        this.modalIdjoin = 'ModalJoin';
        this.modalIdvendor = 'ModalVendor';
        this.modalIdforgot = 'ModalForgot';
        this.modalIdOld = 'ModalOld';
        this.alive = true;
        this.open = false;
        this.mobile = false;
        this.viewMenu = true;
        this.logobigimg = 'logo_big.png';
        this.logueado = false;
        this.emptyCarts = false;
        this.numberVoucherCart = 0;
        this.dataPass = false;
        this.dataPassValue = "";
        this.nameUser = '';
        this.menuState = 'out';
        this.dom = dom;
    }
    HeaderComponent.prototype.setLang = function (lang) {
        var _this = this;
        this.userService.setLangUser(lang).takeWhile(function () { return _this.alive; }).subscribe(function () {
            _this.translate.use(lang);
        });
    };
    HeaderComponent.prototype.setUserOldYear = function (data) {
        var _this = this;
        this.userService.setUserYearOld(data).takeWhile(function () { return _this.alive; }).subscribe(function (userData) {
            console.log(userData);
        });
    };
    HeaderComponent.prototype.getUser = function () {
        var _this = this;
        this.logueado = false;
        this.userprofileService.getUserProfile().takeWhile(function () { return _this.alive; }).subscribe(function (response) {
            try {
                _this.user = JSON.parse(response.userProfile);
            }
            catch (error) {
            }
        });
        this.nameUser = "";
        this.userService.getUser().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            if (user) {
                _this.setLang(user.lang || 'en');
                _this.nameUser = user.firstName;
            }
            else {
                _this.setLang('en');
            }
            if (user && user.token && !user.guest) {
                _this.logueado = true;
            }
            if (_this.dataPass) {
                _this.modalService.open(_this.modalIdforgot);
            }
            // this.userService.getUserOldYear().takeWhile(() => this.alive).subscribe((userData) => {
            //   if (userData) {
            //     console.log('Datos Year OLD '+userData);
            //     //this.setUserYearOld(true);
            //   }else{
            //     console.log('Datos Year OLD '+userData);
            //     this.modalService.open(this.modalIdOld);
            //   }
            // });
        });
    };
    HeaderComponent.prototype.goToProduct = function (product) {
        this.open = false;
        window.scrollTo(0, 0);
        this.router.navigate(["/voucher/details-voucher/", product.voucherCode]);
    };
    HeaderComponent.prototype.getProductsCart = function () {
        var _this = this;
        this.useractivityService.getShoppingCart(false).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            _this.productsCart = res;
            _this.numberVoucherCart = _this.productsCart.grandTotalVouchers;
            var _loop_1 = function (voucher) {
                if (!voucher || !voucher.media[0] || !voucher.media[0].mediaUrl) {
                    return { value: void 0 };
                }
                _this.mediaService.getMedia(voucher.media[0].mediaUrl).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
                    voucher.image = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
                });
            };
            for (var _i = 0, _a = _this.productsCart.vouchers; _i < _a.length; _i++) {
                var voucher = _a[_i];
                var state_1 = _loop_1(voucher);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }, function (error) {
            _this.productsCart = {};
            console.log('Error occured' + error);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var passNewUrl = window.location.href;
        if (passNewUrl.indexOf('?') > 0) {
            var passNew = passNewUrl.split("?");
            var passNewDat = passNew[1].split("=");
            console.log(passNewDat[1]);
            this.dataPassValue = passNewDat[1];
            this.dataPass = true;
            // this.onLogout();
            this.authService.logout();
        }
        if (window.screen.width <= 959) {
            this.mobile = true;
            this.logobigimg = 'logo_big-xs.png';
        }
        this.initData();
        this.userService.toggleLogin.takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.initData();
        });
        this.userprofileService.changedProfile.takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.getUser();
        });
    };
    HeaderComponent.prototype.initData = function () {
        var _this = this;
        this.getUser();
        this.getProductsCart();
        this.userService.logueadoChanged.takeWhile(function () { return _this.alive; }).subscribe(function (logueado) {
            _this.getUser();
        });
        this.authService.resolveQuestion.takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            console.log('respuesta: ' + res);
            if (res) {
                //this.setUserYearOld(true);
                _this.modalService.open(_this.modalIdOld);
                _this.router.navigate(["/"]);
            }
        });
        this.useractivityService.cartChanged.takeWhile(function () { return _this.alive; }).subscribe(function (changedCart) {
            _this.emptyCarts = changedCart;
            if (changedCart) {
                _this.getProductsCart();
            }
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (res) {
            _this.router.navigate(["/"]);
            window.location.reload();
        });
    };
    HeaderComponent.prototype.goToCheckout = function () {
        this.open = false;
        window.scrollTo(0, 0);
        this.router.navigate(["/store/cart"]);
    };
    HeaderComponent.prototype.openLogin = function () {
        if (this.menuState) {
            this.toggleMenu();
        }
        this.modalService.open(this.modalId);
    };
    HeaderComponent.prototype.openSignup = function () {
        if (this.menuState) {
            this.toggleMenu();
        }
        this.modalService.open(this.modalIdjoin);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        window.scrollTo(0, 0);
    };
    HeaderComponent.prototype.resolveQ = function (resolved) {
        if (resolved) {
            this.setUserOldYear(true);
            this.modalService.close(this.modalIdOld);
            this.viewMenu = true;
            this.router.navigate(["/"]);
            // this.userService.getUserOldYear().takeWhile(() => this.alive).subscribe((userData) => {
            //       if (userData) {
            //         this.modalService.open(this.modalIdOld);
            //       }else{
            //         this.setUserOldYear(true);
            //         this.modalService.close(this.modalIdOld);
            //       }
            //     });
        }
        else {
            this.viewMenu = false;
            this.modalService.close(this.modalIdOld);
            this.router.navigate(["/contact"]);
        }
    };
    HeaderComponent.prototype.closeReset = function () {
        this.modalService.close(this.modalIdforgot);
        this.router.navigate(["/"]);
        window.location.reload();
    };
    HeaderComponent.prototype.copyToClipboard = function (dat) {
        this.taskNoteRef.nativeElement.select();
        this.dom.execCommand("Copy");
        this.taskNoteRefTooltip.nativeElement.innerHTML = "Copied: " + dat;
    };
    HeaderComponent.prototype.LeaveMouse = function () {
        this.taskNoteRefTooltip.nativeElement.innerHTML = "Copy to clipboard";
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    HeaderComponent.prototype.onClick = function (e) {
        console.log(e.target.localName);
        if (e.target.localName === 'div' || e.target.localName === 'li' || e.target.localName === 'ul') {
            this.toggleMenu();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('someVar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HeaderComponent.prototype, "taskNoteRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTooltip'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HeaderComponent.prototype, "taskNoteRefTooltip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onClick", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/modules/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/app/header/header.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translate3d(0%, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_modal_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__common_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_user_useractivity_service__["a" /* UserActivityService */],
            __WEBPACK_IMPORTED_MODULE_8__common_user_userprofile_service__["a" /* UserprofileService */],
            __WEBPACK_IMPORTED_MODULE_10_app_common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            Document])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/forgot/forgot-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_component__ = __webpack_require__("../../../../../src/app/modules/forgot/forgot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var authForgotRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__forgot_component__["a" /* ForgotComponent */] },
];
var ForgotRoutingModule = (function () {
    function ForgotRoutingModule() {
    }
    ForgotRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(authForgotRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ForgotRoutingModule);
    return ForgotRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-block{\r\n\tdisplay: block;\r\n}\r\n.display-none{\r\n\tdisplay: none;\r\n}\r\n\r\n.icon-user{\r\n  background-image: url('/assets/images/icon/userFM.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n.icon-user-size{\r\n  width: 26px;\r\n  height: 24px;\r\n}\r\n.icon-login{\r\n\ttop: 32px;\r\n    font-size: 22px;\r\n    color: #000;\r\n}\r\n.box-form-login{\r\n\tcolor: #5d5d5d;\r\n\tpadding-bottom: 30px;\r\n}\r\n.box-form-login h1{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n}\r\n.box-form-login h2{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tfont-size: 16px;\r\n    font-weight: bold;\r\n    border: 0px;\r\n}\r\n.box-form-login button{\r\n\twidth: 90px;\r\n    box-shadow: 0 1px 7px #348a41;\r\n}\r\n.btn-default{\r\n\tbackground-color: #000;\r\n\tbackground-image: none;\r\n\tcolor: #fff !important;\r\n    box-shadow: 0 1px 7px #000 !important;\r\n}\r\n.box-form{\r\n\tpadding-bottom: 20px;\r\n}\r\n.error_message{\r\n\tpadding-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-lg-12 col-md-12 col-xs-12 box-form-login\">\r\n  <h2>\r\n    Please enter your email\r\n  </h2>\r\n  <h2 style=\"color:#080\" *ngIf=\"emailSend\">Email has been sent</h2>\r\n  <form class=\"form-signin\" [formGroup]=\"forgotForm\">\r\n    <div class=\"first-form\">\r\n      <div fxLayout=\"column\">\r\n        <div>\r\n          <label>E-mail</label>\r\n          <input name=\"email\" class=\"form-control\" placeholder=\"\" type=\"email\" formControlName=\"email\" [(ngModel)]=\"user.email\" required\r\n            email email>\r\n          <div class=\"ui grid\" *ngIf=\"!forgotForm.get('email').valid && forgotForm.get('email').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"forgotForm.hasError('required', 'email')\" class=\"error_message\">Please enter your E-mail.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end end\" style=\"margin-top:20px\">\r\n          <button class=\"btn btn-default\" (click)=\"onSubmit()\" [disabled]=\"!forgotForm.valid\">Send</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = (function () {
    function ForgotComponent(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.emailSend = false;
        this.alive = true;
    }
    ForgotComponent.prototype.initData = function () {
        this.emailSend = false;
        this.user = {
            email: '',
        };
        this.forgotForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
        });
    };
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initData();
        this.modalService.onCloseModal.takeWhile(function () { return _this.alive; }).subscribe(function (modal) {
            if (modal.id === "ModalForgot") {
                _this.initData();
            }
        });
    };
    ForgotComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.forgotPassword(this.user.email).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.emailSend = true;
            setTimeout(function (_) {
                _this.modalService.close("ModalForgot");
            }, 3000);
        }, function (error) {
            _this.emailSend = true;
            setTimeout(function (_) {
                _this.modalService.close("ModalForgot");
            }, 3000);
        });
    };
    ForgotComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/modules/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__["a" /* ModalService */]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/forgot/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_component__ = __webpack_require__("../../../../../src/app/modules/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_routing_module__ = __webpack_require__("../../../../../src/app/modules/forgot/forgot-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { subDYears } from 'date-fns';
// Components


// Routers




var ForgotModule = (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__forgot_component__["a" /* ForgotComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__common_user__["b" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__forgot_routing_module__["a" /* ForgotRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_pick_datetime__["DateTimePickerModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__forgot_component__["a" /* ForgotComponent */],
            ]
        })
    ], ForgotModule);
    return ForgotModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/modules/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var newsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(newsRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".our-dispensaries-title h2{\r\n  float: left;\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n  margin-left: 40px;\r\n  font-family: 'Proxima Nova', Georgia, sans-serif;\r\n  border:0px;\r\n}\r\n.show-shadow-box{\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n  margin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.image-dispensarie{\r\n  padding-right: 15px;\r\n}\r\n.image-dispensarie img{\r\n      width: 100%;\r\n    height: 350px;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n}\r\n.text-dispensarie{\r\n  padding-right: 30px;\r\n  padding-top: 10px;\r\n  padding-left: 20px;\r\n}\r\n.icon-style{\r\n  color: #348a41;\r\n  float: right;\r\n}\r\n.icon-style i{\r\n  font-size: 22px;\r\n  margin-right: 20px;\r\n  padding-top: 25px;\r\n}\r\n.show-shadow-box h2{\r\n  color: #343434;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  border:0px;\r\n}\r\n.show-shadow-box:hover{\r\n  box-shadow: 0 20px 22px #888;\r\n}\r\n.box-home h1{\r\n  color: #fff;\r\n  font-size: 60px;\r\n  line-height: 60px;\r\n  text-align: center;\r\n  font-family: 'Ceviche One', Georgia, sans-serif;\r\n}\r\n@media only screen and (max-width: 1023px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner-xs.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 10px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:131px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .our-dispensaries-title h1{\r\n    font-size: 30px;\r\n    margin-top: 10px;\r\n    margin-left: 0px;\r\n    font-family: 'Ceviche One', Georgia, sans-serif;\r\n    line-height: initial;\r\n  }\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .box-home{\r\n    background-color:#444; \r\n    /*padding:120px;*/\r\n    background-image: url('/assets/images/fondo-banner.png'); \r\n    width:100%; \r\n    \r\n    background-repeat: no-repeat;\r\n    background-attachment: inherit; \r\n    background-position: center;\r\n    box-shadow: 0px 5px 24px 5px #348a41;\r\n    margin-bottom: 50px;\r\n  }\r\n  .flex-container {\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n    height:261px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .our-dispensaries-title img{\r\n    float: left;\r\n  }\r\n  .our-dispensaries-title h1{\r\n    font-size: 35px;\r\n    font-weight: 600;\r\n    margin-top: 25px;\r\n    margin-left: 0px;\r\n    font-family: 'Proxima Nova', Georgia, sans-serif;\r\n    line-height: initial;\r\n  }\r\n}\r\n.dispenrarie-title h2{\r\n  font-size: 21px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<contentSlider [slides]=\"images\">\r\n</contentSlider>\r\n<img src=\"assets/images/{{bannerHome}}\" alt=\"Image 1\" />\r\n<div class=\"box-home flex-container\">\r\n  <h1>Toronto, Ontario</h1>\r\n</div>\r\n<div class=\"breadcrumb-color meet-team\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-xs-12 our-dispensaries-title\">\r\n        <img src=\"assets/images/our-dispensaries.png\" alt=\"Image 1\" />\r\n      </div>\r\n      <div class=\"col-lg-6 col-xs-12 our-dispensaries-title\">\r\n        <h1>Our Favourite Dispensaries</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" [ngStyle.md]=\"{'width.%':100}\" [ngStyle.sm]=\"{'width.%':100}\">\r\n  <!-- Top Images Shop -->\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n      <app-trade *ngFor=\"let dispensarie of dispensaries; let i = index\" [trade]=\"dispensarie\" [align]=\"'row'\"></app-trade>\r\n    </div>\r\n\r\n    <div class=\"meet-team\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"our-dispensaries-title\">\r\n            <img *ngIf=\"!mobile\" src=\"assets/images/flower.png\" style=\"height: 70px\" alt=\"Image 1\" />\r\n            <img *ngIf=\"mobile\" src=\"assets/images/flower-xs.png\" style=\"height: 70px\" alt=\"Image 1\" />\r\n            <h2>Nearby Deals</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--List Product-->\r\n    <div id=\"cbp-vm\" class=\"shop-prod activegrid\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutWrap>\r\n        <app-voucher  fxFlex.xs=\"100\" fxFlex.md=\"33\" fxFlex.sm=\"49\" fxFlexOffset.sm=\"1\" fxFlex.gt-md=\"25\" *ngFor=\"let voucher of vouchers\" [voucher]=\"voucher\"></app-voucher>\r\n      </div>\r\n\r\n      <!--Pagination-->\r\n      <div class=\"store-cart-content\">\r\n        <div class=\"store-cart-footer store-down-bottom\">\r\n          <ngl-pagination [(page)]=\"currentPage\" [total]=\"totalProducts\" (pageChange)=\"getVouchersHome()\"></ngl-pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  <!-- Our Customers -->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_trade_trade_service__ = __webpack_require__("../../../../../src/app/common/trade/trade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_user_useractivity_service__ = __webpack_require__("../../../../../src/app/common/user/useractivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
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
    function HomeComponent(userService, tradeService, mediaService, translate, voucherService, useractivityService, sanitizer) {
        this.userService = userService;
        this.tradeService = tradeService;
        this.mediaService = mediaService;
        this.translate = translate;
        this.voucherService = voucherService;
        this.useractivityService = useractivityService;
        this.sanitizer = sanitizer;
        this.vouchers = [];
        this.dispensaries = [];
        this.mediaDispensaries = [];
        this.alive = true;
        this.mobile = false;
        this.banner = [];
        this.currentPage = 0;
        this.totalProducts = 0;
        this.bannerHome = 'banner-index.jpg';
        this.eventwork = 1;
    }
    HomeComponent.prototype.loadSlider = function () {
        var welcome = this.translate.instant("WELCOME");
        ;
        var to = this.translate.instant("TO");
        ;
        if (this.mobile) {
            this.banner[0] = 'banner-index-xs.jpg';
        }
        else {
            this.banner[0] = 'banner-index.jpg';
        }
        var bannerimg = this.banner[0];
        this.images = [
            {
                "sType": "div", "styles": { "width": "100%" }, "content": "\n        <!--<div class=\"container-slide\" style=\"background-image: url('/assets/images/" + bannerimg + "'); width:100%; background-repeat: no-repeat;background-attachment: initial; background-position: center; background-size:cover;\">!-->\n        <div class=\"container-slide\">\n      <div  class=\"slide-middle-txt animated\">\n      <h1><span>" + welcome + " </span><span class=\"color-txt\">" + to + "</span> </h1><h1> Panda Weed</h1>\n  </div>\n  </div>\n      "
            }
        ];
    };
    HomeComponent.prototype.init = function () {
        this.getTradesHome();
        this.getVouchersHome();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 959) {
            this.mobile = true;
            this.bannerHome = 'banner-index-xs.jpg';
        }
        this.init();
        this.translate.onLangChange.takeWhile(function () { return _this.alive; }).subscribe(function () {
            _this.loadSlider();
        });
        this.userService.tokenChanged.takeWhile(function () { return _this.alive; }).subscribe(function () { return _this.init(); });
        this.userService.tokenValidated.takeWhile(function () { return _this.alive; }).subscribe(function () { _this.init(); });
        this.loadSlider();
    };
    HomeComponent.prototype.onChangeEvent = function (event, selected) {
        //JQUERY? FUCK!!
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
    HomeComponent.prototype.getTradesHome = function () {
        var _this = this;
        this.tradeService.getTrades('4', '4', 1, 10, 1).takeWhile(function () { return _this.alive; }).subscribe(function (res) {
            for (var i in res) {
                _this.dispensaries.push(res[i]);
                if (!res[i] || !res[i].media[0] || !res[i].media[0].mediaUrl) {
                    continue;
                }
                _this.mediaService.getMedia(res[i].media[0].mediaUrl)
                    .takeWhile(function () { return _this.alive; }).subscribe(function (result) { return _this.mediaDispensaries.push(_this.sanitizer.bypassSecurityTrustResourceUrl(result)); });
            }
        });
    };
    HomeComponent.prototype.splitText = function (text) {
        if (!text) {
            return text;
        }
        //TODO constant
        if (text.length > 400) {
            return text.substring(0, 500) + "...";
        }
        return text;
    };
    HomeComponent.prototype.getVouchersHome = function () {
        var _this = this;
        this.voucherService.getVouchers(null, '4', this.currentPage, 10, 1).subscribe(function (res) {
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
    HomeComponent.prototype.setManageCart = function (voucherCode) {
        var _this = this;
        console.log(voucherCode);
        //if(Context.token){
        this.useractivityService.manageCart(voucherCode, 1).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            console.log(result);
            /*this.useractivityService.getShoppingCart(false).subscribe(
                res => {
                  console.log(res);
                },
                error => {
                  console.log('Error occured');
                }
              );*/
        }, function (error) { console.log('Error occured', error); });
        //}
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/modules/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__common_trade_trade_service__["a" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_4__common_media_media_service__["a" /* MediaService */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__common_voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_6__common_user_useractivity_service__["a" /* UserActivityService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/modules/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/modules/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_media__ = __webpack_require__("../../../../../src/app/common/media/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_trade__ = __webpack_require__("../../../../../src/app/common/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_voucher__ = __webpack_require__("../../../../../src/app/common/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components_voucher__ = __webpack_require__("../../../../../src/app/common/components/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_trade__ = __webpack_require__("../../../../../src/app/common/components/trade/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_media__["a" /* MediaModule */],
                __WEBPACK_IMPORTED_MODULE_5__common_auth__["b" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__common_voucher__["a" /* VoucherModule */],
                __WEBPACK_IMPORTED_MODULE_6__common_trade__["a" /* TradeModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_8__slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_14__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_11__common_components_voucher__["a" /* VoucherCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__common_components_trade__["a" /* TradeCardModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/modules/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_routing_module__ = __webpack_require__("../../../../../src/app/modules/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { subDYears } from 'date-fns';
// Components


// Routers



var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__common_user__["b" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/modules/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var authRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon-login i{\r\n\ttop: 42px;\r\n\tleft: 20px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: relative;\r\n    width: 30px;\r\n    text-align: center;\r\n}\r\n.btn-default{\r\n\tbackground-color: #000;\r\n\tbackground-image: none;\r\n\tcolor: #fff !important;\r\n}\r\n.content-center{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n  \t-webkit-box-pack: center;\r\n  \t    -ms-flex-pack: center;\r\n  \t        justify-content: center;\r\n}\r\n.content-center h1{\r\n  \tcolor: #000;\r\n\tfont-weight: bold;\r\n\tfont-size: 22px;\r\n}\r\n.content-center button{\r\n\twidth: 100px;\r\n\tbox-shadow: 0 1px 7px #000;\r\n}\r\n.content-center h2{\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tborder:0px;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n.content-form-login{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n\tcolor: #5d5d5d;\r\n\tmargin-top: 5px;\r\n}\r\n.content-form-login div{\r\n\tmargin: 10px;\r\n}\r\n.content-forgot{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n.content-forgot div{\r\n\tmargin: 10px;\r\n}\r\n.content-forgot a{\r\n\tcolor: #5d5d5d;\r\n}\r\n.content-keepme i{\r\n\tbox-shadow: 0 1px 12px #5a5a5a;\r\n\tmargin-right: 7px;\r\n    color: #348a41;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\r\n  <h1>\r\n    Join the Panda Revolution!\r\n  </h1>\r\n</div>\r\n<div class=\"content-center\">\r\n  <ngl-notification *ngIf=\"loginError\" type=\"toast\" severity=\"error\">\r\n    <div class=\"slds-col slds-align-middle\">Incorrect Email or password </div>\r\n  </ngl-notification>\r\n</div>\r\n<form class=\"form-signin\" (ngSubmit)=\"onLogin()\" [formGroup]=\"signloginForm\">\r\n      <div class=\"content-form-login\">\r\n        <div class=\"icon-login\" style=\"flex-grow: 1; margin-right:3px;\">\r\n          <i class=\"fa fa-envelope\"></i>\r\n        </div>\r\n        <div style=\"flex-grow: 11\">\r\n          <div [ngClass]=\"!signloginForm.get('username').valid && signloginForm.get('username').touched ? 'field error':'field'\">\r\n            <label>E-mail</label>\r\n            <input name=\"username\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"username\" [(ngModel)]=\"user.username\"\r\n              email>\r\n            <div class=\"ui grid\" *ngIf=\"!signloginForm.get('username').valid && signloginForm.get('username').touched\">\r\n              <div class=\"left aligned middle aligned column\">\r\n                <h5 *ngIf=\"signloginForm.hasError('required', 'username')\" class=\"error_message\">Please enter your E-mail.</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"content-form-login\">\r\n        <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n          <i class=\"fa fa-lock\"></i>\r\n        </div>\r\n        <div style=\"flex-grow: 11\">\r\n          <div [ngClass]=\"!signloginForm.get('password').valid && signloginForm.get('password').touched ? 'field error':'field'\" class=\"form-group has-feedback\">\r\n            <label>Password</label>\r\n            <input name=\"password\" class=\"form-control\" placeholder=\"\" [type]=\"showPassword ? 'password' : 'text'\" formControlName=\"password\"\r\n              [(ngModel)]=\"user.password\">\r\n            <span (click)=\"toggleShowPassword()\" [ngClass]=\"showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'\" class=\"form-control-feedback\"\r\n              style=\"cursor: pointer; pointer-events: all;\">\r\n            </span>\r\n            <div class=\"ui grid\" *ngIf=\"!signloginForm.get('password').valid && signloginForm.get('password').touched\">\r\n              <div class=\"left aligned middle aligned column\">\r\n                <h5 *ngIf=\"signloginForm.hasError('required', 'password')\" class=\"error_message\">Please enter your password.</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content-forgot\">\r\n            <!-- <div class=\"content-keepme\">\r\n              <i class=\"fa fa-check\"></i>Keep me logged in\r\n            </div> -->\r\n            <div>\r\n              <a (click)='modalService.open(\"ModalForgot\")'>Forgot your password?</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"content-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signloginForm.valid\">Login</button>\r\n      </div>\r\n      <div class=\"content-center\">\r\n        <h2>Are you new to PandaWeed?</h2>\r\n      </div>\r\n      <div class=\"content-center\">\r\n        <button class=\"btn btn-default\" type=\"submit\" (click)='modalService.open(\"ModalJoin\")'>Register</button>\r\n      </div>\r\n\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_model_user__ = __webpack_require__("../../../../../src/app/services/model/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.modalIdjoinLogin = 'ModalLogin';
        this.showPassword = true;
        this.alive = true;
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.initData = function () {
        this.loginError = false;
        this.showPassword = true;
        this.signloginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initData();
        this.userService.signupSuccess.takeWhile(function () { return _this.alive; }).subscribe(function (n) {
            _this.login(n.email, n.password);
        });
        this.modalService.onCloseModal.takeWhile(function () { return _this.alive; }).subscribe(function (modal) {
            if (modal.id === "ModalLogin") {
                _this.initData();
            }
        });
    };
    LoginComponent.prototype.toggleShowPassword = function () {
        this.showPassword = !this.showPassword;
        var that = this;
        setTimeout(function () {
            that.showPassword = true;
        }, 700);
    };
    LoginComponent.prototype.onLogin = function () {
        this.login(this.user.username, this.user.password);
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.loginAsUser(__WEBPACK_IMPORTED_MODULE_4__services_model_user__["a" /* User */].USERTYPECODE, username, password).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.user = {
                username: '',
                password: ''
            };
            window.location.reload();
            _this.modalService.close('ModalLogin');
        }, function (error) {
            _this.loginError = true;
            if (_this.user) {
                _this.user.password = '';
            }
            setTimeout(function () {
                _this.loginError = false;
                console.log("ocultando errror", _this.loginError);
            }, 3000);
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/modules/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__["a" /* ModalService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signup/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__("../../../../../src/app/modules/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_routing_module__ = __webpack_require__("../../../../../src/app/modules/signup/signup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { subDYears } from 'date-fns';
// Components


// Routers





var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__common_user__["b" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__signup_routing_module__["a" /* SignupRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatFormFieldModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */],
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signup/signup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/modules/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var authRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */] },
];
var SignupRoutingModule = (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-block{\r\n\tdisplay: block;\r\n}\r\n.display-none{\r\n\tdisplay: none;\r\n}\r\n.content-center{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n  \t-webkit-box-pack: center;\r\n  \t    -ms-flex-pack: center;\r\n  \t        justify-content: center;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.content-center h1{\r\n  \tcolor: #000;\r\n\tfont-weight: bold;\r\n\tfont-size: 22px;\r\n}\r\n.content-center button{\r\n\twidth: 100px;\r\n\tbox-shadow: 0 1px 7px #000;\r\n}\r\n.content-center h2{\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tborder:0px;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n.content-form-login{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n\tcolor: #5d5d5d;\r\n\tmargin-top: 5px;\r\n}\r\n.content-form-login div{\r\n\tmargin: 10px;\r\n}\r\n.icon-login i{\r\n\ttop: 42px;\r\n\tleft: 20px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: relative;\r\n    width: 30px;\r\n}\r\n.icon-user{\r\n  background-image: url('/assets/images/icon/userFM.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n.icon-user-size{\r\n  width: 26px;\r\n  height: 24px;\r\n  top: 32px;\r\n\tleft: 9px;\r\n    position: relative;\r\n}/*\r\n.icon-login{\r\n\ttop: 32px;\r\n    font-size: 22px;\r\n    color: #000;\r\n}*/\r\n.box-form-login{\r\n\tcolor: #5d5d5d;\r\n\tpadding-bottom: 30px;\r\n}\r\n.box-form-login h1{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n}\r\n.box-form-login h2{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tfont-size: 16px;\r\n    font-weight: bold;\r\n    border: 0px;\r\n}\r\n.box-form-login button{\r\n\twidth: 90px;\r\n    box-shadow: 0 1px 7px #348a41;\r\n}\r\n.btn-default{\r\n\tbackground-color: #000;\r\n\tbackground-image: none;\r\n\tcolor: #fff !important;\r\n    box-shadow: 0 1px 7px #000 !important;\r\n}\r\n.box-form{\r\n\tpadding-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\r\n  <h1>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==1\" [class.display-none]=\"viewForm==0 || viewForm==2\">\r\n      Tells us about you!\r\n    </div>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==0\" [class.display-none]=\"viewForm==1 || viewForm==2\">\r\n      Continue login details\r\n    </div>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==2\" [class.display-none]=\"viewForm==0 || viewForm==1\">\r\n      Congratulations your account was successfully created!\r\n    </div>\r\n  </h1>\r\n  <h2 [class.display-block]=\"viewForm==2\" [class.display-none]=\"viewForm==0 || viewForm==1\">\r\n    Please enter your email and confirm your account.\r\n  </h2>\r\n</div>\r\n<form class=\"form-signin\" [formGroup]=\"signupForm\">\r\n  <div class=\"first-form\" [class.display-block]=\"viewForm==1\" [class.display-none]=\"viewForm==0 || viewForm==2\">\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1; margin-right:-6px;\">\r\n        <div class=\"icon-user-size icon-user\"></div>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupForm.get('firstname').valid && signupForm.get('firstname').touched ? 'field error':'field'\">\r\n          <label>First Name</label>\r\n          <input name=\"firstname\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"firstname\" [(ngModel)]=\"user.firstname\">\r\n          <div class=\"ui grid\" *ngIf=\"!signupForm.get('firstname').valid && signupForm.get('firstname').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupForm.hasError('required', 'firstname')\" class=\"error_message\">Please enter your first name.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-user-o\" style=\"color:#fff\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupForm.get('lastname').valid && signupForm.get('lastname').touched ? 'field error':'field'\">\r\n          <label>Last Name</label>\r\n          <input name=\"lastname\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"lastname\" [(ngModel)]=\"user.lastname\">\r\n          <div class=\"ui grid\" *ngIf=\"!signupForm.get('lastname').valid && signupForm.get('lastname').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupForm.hasError('required', 'lastname')\" class=\"error_message\">Please enter your last name.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupForm.get('email').valid && signupForm.get('email').touched ? 'field error':'field'\">\r\n          <label>E-mail</label>\r\n          <input name=\"email\" class=\"form-control\" placeholder=\"\" type=\"email\" formControlName=\"email\" [(ngModel)]=\"user.email\" required\r\n            email email>\r\n          <div class=\"ui grid\" *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupForm.hasError('required', 'email')\" class=\"error_message\">Please enter your E-mail.</h5>\r\n              <h5 *ngIf=\"!signupForm.hasError('required', 'email') && signupForm.hasError('email', 'email')\" class=\"error_message\">Please provide a valid email.</h5>\r\n              <h5 *ngIf=\"signupForm.hasError('mailIsRegistered', 'email')\" class=\"error_message\">Email is taken.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-birthday-cake\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupForm.get('dateOfBirth').valid && signupForm.get('dateOfBirth').touched ? 'field error':'field'\">\r\n          <mat-form-field style=\"margin-top:15px\">\r\n            <input matInput [max]=\"max\" [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker [startAt]=\"moment\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"ui grid\" *ngIf=\"!signupForm.get('dateOfBirth').valid && signupForm.get('dateOfBirth').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupForm.hasError('required', 'dateOfBirth')\" class=\"error_message\">Please enter your birth day.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-center\">\r\n      <button class=\"btn btn-default\" (click)=\"onViewNextForm(0)\" [disabled]=\"!signupForm.valid\">Continue</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<form class=\"form-signin\" [formGroup]=\"signupFormTwo\">\r\n  <div class=\"second-form\" [class.display-block]=\"viewForm==0\" [class.display-none]=\"viewForm==1 || viewForm==2\">\r\n    <ngl-notification *ngIf=\"errorPassword\" type=\"toast\" severity=\"error\">\r\n      <div class=\"slds-col slds-align-middle\">Incorrect password </div>\r\n    </ngl-notification>\r\n    <ngl-notification *ngIf=\"errorSignup\" type=\"toast\" severity=\"error\">\r\n      <div class=\"slds-col slds-align-middle\">An error has occurred</div>\r\n    </ngl-notification>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-phone\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupFormTwo.get('phoneNumber').valid && signupFormTwo.get('phoneNumber').touched ? 'field error':'field'\">\r\n          <label>Phone number (Optional)</label>\r\n          <input name=\"phoneNumber\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\">\r\n          <div class=\"ui grid\" *ngIf=\"!signupFormTwo.get('phoneNumber').valid && signupFormTwo.get('phoneNumber').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupFormTwo.hasError('required', 'phoneNumber')\" class=\"error_message\">Please enter your phone number.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-lock\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupFormTwo.get('password').valid && signupFormTwo.get('password').touched ? 'field error':'field'\">\r\n          <label>Password</label>\r\n          <input name=\"password\" class=\"form-control\" placeholder=\"\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"user.password\"\r\n            required minlength=\"6\">\r\n          <div class=\"ui grid\" *ngIf=\"!signupFormTwo.get('password').valid && signupFormTwo.get('password').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupFormTwo.get('password').errors['required']\" class=\"error_message\">Please enter your password.</h5>\r\n              <h5 *ngIf=\"signupFormTwo.get('password').errors['password']\" class=\"error_message\">Password must contain at least 7 characters (letters and numbers)</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-lock\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signupFormTwo.get('confirmPassword').valid && signupFormTwo.get('confirmPassword').touched ? 'field error':'field'\">\r\n          <label>Confirm Password</label>\r\n          <input name=\"confirmPassword\" class=\"form-control\" placeholder=\"\" type=\"password\" formControlName=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\"\r\n            required minlength=\"6\">\r\n          <div class=\"ui grid\" *ngIf=\"!signupFormTwo.get('confirmPassword').valid && signupFormTwo.get('confirmPassword').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signupFormTwo.get('confirmPassword').errors['matchingPasswords']\" class=\"error_message\">Passwords do not match.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-center\">\r\n      <button class=\"btn btn-default\" (click)=\"onViewNextForm(1)\">Back</button>\r\n      <button class=\"btn btn-primary\" [disabled]=\"!signupFormTwo.valid\" (click)=\"onSignup()\">Register</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/modules/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.moment = new Date();
        this.autoClose = true;
        this.min = new Date(2017, 7, 9);
        this.max = Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subYears"])(new Date(), 18);
        this.errorPassword = false;
        this.errorSignup = false;
        this.pickerColor = '#0070ba';
        this.alive = true;
        this.passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,})");
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
        this.viewForm = 1;
        this.user = {
            firstname: '',
            lastname: '',
            email: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        };
    }
    SignupComponent.prototype.initData = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'firstname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'lastname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required], this.registeredMailValidation.bind(this)),
            'dateOfBirth': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
        this.signupFormTwo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.validatePassword.bind(this)]),
            'confirmPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.matchingPasswords.bind(this)])
        });
        this.viewForm = 1;
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initData();
        this.modalService.onCloseModal.takeWhile(function () { return _this.alive; }).subscribe(function (modal) {
            if (modal.id === "ModalJoin") {
                _this.initData();
            }
        });
    };
    SignupComponent.prototype.matchingPasswords = function (control) {
        if (control.value !== this.user.password) {
            return { 'matchingPasswords': true };
        }
        return null;
    };
    SignupComponent.prototype.validatePassword = function (control) {
        if (!control.value || !this.passwordRegex.test(control.value)) {
            return { 'password': true };
        }
        return null;
    };
    SignupComponent.prototype.registeredMailValidation = function (control) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkEmail(control.value).takeWhile(function () { return _this.alive; })
                .subscribe(function (result) {
                console.log(result);
                if (!result.valid) {
                    resolve({ 'mailIsRegistered': true });
                }
                else {
                    resolve(null);
                }
            }, function (error) { return console.error("Error: " + error); });
        });
    };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        this.userService.signUp('4', this.user.email, this.user.firstname, this.user.lastname, this.user.email, this.user.phoneNumber, this.user.password, this.user.dateOfBirth).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.userService.signupSuccess.next(_this.user);
            _this.modalService.close('ModalJoin');
            _this.viewForm = 1;
        }, function (error) {
            var erro = JSON.parse(error.error);
            if (erro.reasonCode === 456) {
                _this.errorPassword = true;
            }
            else {
                _this.errorSignup = true;
            }
            setTimeout(function () {
                _this.errorSignup = false;
                _this.errorPassword = false;
            }, 3000);
        });
    };
    SignupComponent.prototype.onViewNextForm = function (event) {
        if (this.moment) {
            this.user.dateOfBirth = this.moment;
        }
        this.viewForm = event;
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/modules/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__["a" /* ModalService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signvendor/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignvendorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signvendor_component__ = __webpack_require__("../../../../../src/app/modules/signvendor/signvendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signvendor_routing_module__ = __webpack_require__("../../../../../src/app/modules/signvendor/signvendor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { subDYears } from 'date-fns';
// Components


// Routers





var SignvendorModule = (function () {
    function SignvendorModule() {
    }
    SignvendorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signvendor_component__["a" /* SignvendorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__common_user__["b" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__signvendor_routing_module__["a" /* SignvendorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatFormFieldModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signvendor_component__["a" /* SignvendorComponent */],
            ]
        })
    ], SignvendorModule);
    return SignvendorModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signvendor/signvendor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignvendorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signvendor_component__ = __webpack_require__("../../../../../src/app/modules/signvendor/signvendor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var authRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__signvendor_component__["a" /* SignvendorComponent */] },
];
var SignvendorRoutingModule = (function () {
    function SignvendorRoutingModule() {
    }
    SignvendorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SignvendorRoutingModule);
    return SignvendorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/signvendor/signvendor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-block{\r\n\tdisplay: block;\r\n}\r\n.display-none{\r\n\tdisplay: none;\r\n}\r\n.content-center{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n  \t-webkit-box-pack: center;\r\n  \t    -ms-flex-pack: center;\r\n  \t        justify-content: center;\r\n\tpadding-bottom: 20px;\r\n}\r\n\r\n.content-center h1{\r\n  \tcolor: #000;\r\n\tfont-weight: bold;\r\n\tfont-size: 22px;\r\n}\r\n.content-center button{\r\n\twidth: 100px;\r\n\tbox-shadow: 0 1px 7px #000;\r\n}\r\n.content-center h2{\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n\tborder:0px;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n}\r\n.content-form-login{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: stretch;\r\n\t    -ms-flex-align: stretch;\r\n\t        align-items: stretch;\r\n\tcolor: #5d5d5d;\r\n\tmargin-top: 5px;\r\n}\r\n.content-form-login div{\r\n\tmargin: 10px;\r\n}\r\n.icon-login i{\r\n\ttop: 42px;\r\n\tleft: 20px;\r\n    font-size: 22px;\r\n    color: #000;\r\n    position: relative;\r\n    width: 30px;\r\n}\r\n.icon-user{\r\n  background-image: url('/assets/images/icon/userFM.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n.icon-user-size{\r\n  width: 26px;\r\n  height: 24px;\r\n  top: 32px;\r\n\tleft: 9px;\r\n    position: relative;\r\n}/*\r\n.icon-login{\r\n\ttop: 32px;\r\n    font-size: 22px;\r\n    color: #000;\r\n}*/\r\n.box-form-login{\r\n\tcolor: #5d5d5d;\r\n\tpadding-bottom: 30px;\r\n}\r\n.box-form-login h1{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n}\r\n.box-form-login h2{\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tfont-size: 16px;\r\n    font-weight: bold;\r\n    border: 0px;\r\n}\r\n.box-form-login button{\r\n\twidth: 90px;\r\n    box-shadow: 0 1px 7px #348a41;\r\n}\r\n.btn-default{\r\n\tbackground-color: #000;\r\n\tbackground-image: none;\r\n\tcolor: #fff !important;\r\n    box-shadow: 0 1px 7px #000 !important;\r\n}\r\n.box-form{\r\n\tpadding-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/signvendor/signvendor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-center\">\r\n  <h1>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==1\" [class.display-none]=\"viewForm==0 || viewForm==2\">\r\n      Tells us about you!\r\n    </div>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==0\" [class.display-none]=\"viewForm==1 || viewForm==2\">\r\n      Vendor User Information\r\n    </div>\r\n    <div class=\"content\" [class.display-block]=\"viewForm==2\" [class.display-none]=\"viewForm==0 || viewForm==1\">\r\n      Congratulations your account was successfully created!\r\n    </div>\r\n  </h1>\r\n  <h2 [class.display-block]=\"viewForm==2\" [class.display-none]=\"viewForm==0 || viewForm==1\">\r\n    Please enter your email and confirm your account.\r\n  </h2>\r\n</div>\r\n<form class=\"form-signin\" [formGroup]=\"signvendorForm\">\r\n  <div class=\"first-form\" [class.display-block]=\"viewForm==1\" [class.display-none]=\"viewForm==0 || viewForm==2\">\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1; margin-right:-6px;\">\r\n        <div class=\"icon-user-size icon-user\"></div>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorForm.get('firstname').valid && signvendorForm.get('firstname').touched ? 'field error':'field'\">\r\n          <label>First Name</label>\r\n          <input name=\"firstname\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"firstname\" [(ngModel)]=\"user.firstname\">\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorForm.get('firstname').valid && signvendorForm.get('firstname').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorForm.hasError('required', 'firstname')\" class=\"error_message\">Please enter your first name.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-user-o\" style=\"color:#fff\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorForm.get('lastname').valid && signvendorForm.get('lastname').touched ? 'field error':'field'\">\r\n          <label>Last Name</label>\r\n          <input name=\"lastname\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"lastname\" [(ngModel)]=\"user.lastname\">\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorForm.get('lastname').valid && signvendorForm.get('lastname').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorForm.hasError('required', 'lastname')\" class=\"error_message\">Please enter your last name.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorForm.get('email').valid && signvendorForm.get('email').touched ? 'field error':'field'\">\r\n          <label>E-mail</label>\r\n          <input name=\"email\" class=\"form-control\" placeholder=\"\" type=\"email\" formControlName=\"email\" [(ngModel)]=\"user.email\" required\r\n            email email>\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorForm.get('email').valid && signvendorForm.get('email').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorForm.hasError('required', 'email')\" class=\"error_message\">Please enter your E-mail.</h5>\r\n              <h5 *ngIf=\"!signvendorForm.hasError('required', 'email') && signvendorForm.hasError('email', 'email')\" class=\"error_message\">Please provide a valid email.</h5>\r\n              <h5 *ngIf=\"signvendorForm.hasError('mailIsRegistered', 'email')\" class=\"error_message\">Email is taken.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-birthday-cake\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorForm.get('dateOfBirth').valid && signvendorForm.get('dateOfBirth').touched ? 'field error':'field'\">\r\n          <mat-form-field style=\"margin-top:15px\">\r\n            <input matInput [max]=\"max\" [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker [startAt]=\"moment\"></mat-datepicker>\r\n          </mat-form-field>\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorForm.get('dateOfBirth').valid && signvendorForm.get('dateOfBirth').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorForm.hasError('required', 'dateOfBirth')\" class=\"error_message\">Please enter your birth day.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-center\">\r\n      <button class=\"btn btn-default\" (click)=\"onViewNextForm(0)\" [disabled]=\"!signvendorForm.valid\">Continue</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n<form class=\"form-signin\" [formGroup]=\"signvendorFormTwo\">\r\n  <div class=\"second-form\" [class.display-block]=\"viewForm==0\" [class.display-none]=\"viewForm==1 || viewForm==2\">\r\n    <ngl-notification *ngIf=\"errorPassword\" type=\"toast\" severity=\"error\">\r\n      <div class=\"slds-col slds-align-middle\">Incorrect password </div>\r\n    </ngl-notification>\r\n    <ngl-notification *ngIf=\"errorSignvendor\" type=\"toast\" severity=\"error\">\r\n      <div class=\"slds-col slds-align-middle\">An error has occurred</div>\r\n    </ngl-notification>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-phone\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorFormTwo.get('phoneNumber').valid && signvendorFormTwo.get('phoneNumber').touched ? 'field error':'field'\">\r\n          <label>Phone number (Optional)</label>\r\n          <input name=\"phoneNumber\" class=\"form-control\" placeholder=\"\" type=\"text\" formControlName=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\">\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorFormTwo.get('phoneNumber').valid && signvendorFormTwo.get('phoneNumber').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorFormTwo.hasError('required', 'phoneNumber')\" class=\"error_message\">Please enter your phone number.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-lock\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorFormTwo.get('password').valid && signvendorFormTwo.get('password').touched ? 'field error':'field'\">\r\n          <label>Password</label>\r\n          <input name=\"password\" class=\"form-control\" placeholder=\"\" type=\"password\" formControlName=\"password\" [(ngModel)]=\"user.password\"\r\n            required minlength=\"6\">\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorFormTwo.get('password').valid && signvendorFormTwo.get('password').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorFormTwo.get('password').errors['required']\" class=\"error_message\">Please enter your password.</h5>\r\n              <h5 *ngIf=\"signvendorFormTwo.get('password').errors['password']\" class=\"error_message\">Password must contain at least 7 characters (letters and numbers)</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-form-login\">\r\n      <div class=\"icon-login\" style=\"flex-grow: 1\">\r\n        <i class=\"fa fa-lock\"></i>\r\n      </div>\r\n      <div style=\"flex-grow: 11\">\r\n        <div [ngClass]=\"!signvendorFormTwo.get('confirmPassword').valid && signvendorFormTwo.get('confirmPassword').touched ? 'field error':'field'\">\r\n          <label>Confirm Password</label>\r\n          <input name=\"confirmPassword\" class=\"form-control\" placeholder=\"\" type=\"password\" formControlName=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\"\r\n            required minlength=\"6\">\r\n          <div class=\"ui grid\" *ngIf=\"!signvendorFormTwo.get('confirmPassword').valid && signvendorFormTwo.get('confirmPassword').touched\">\r\n            <div class=\"left aligned middle aligned column\">\r\n              <h5 *ngIf=\"signvendorFormTwo.get('confirmPassword').errors['matchingPasswords']\" class=\"error_message\">Passwords do not match.</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-center\">\r\n      <button class=\"btn btn-default\" (click)=\"onViewNextForm(1)\">Back</button>\r\n      <button class=\"btn btn-primary\" [disabled]=\"!signvendorFormTwo.valid\" (click)=\"onSignvendor()\">Register</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/modules/signvendor/signvendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignvendorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignvendorComponent = (function () {
    function SignvendorComponent(userService, modalService) {
        this.userService = userService;
        this.modalService = modalService;
        this.moment = new Date();
        this.autoClose = true;
        this.min = new Date(2017, 7, 9);
        this.max = Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["subYears"])(new Date(), 18);
        this.errorPassword = false;
        this.errorSignvendor = false;
        this.pickerColor = '#0070ba';
        this.alive = true;
        this.passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,})");
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
        this.viewForm = 1;
        this.user = {
            firstname: '',
            lastname: '',
            email: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        };
    }
    SignvendorComponent.prototype.initData = function () {
        this.signvendorForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'firstname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'lastname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required], this.registeredMailValidation.bind(this)),
            'dateOfBirth': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
        this.signvendorFormTwo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'phoneNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.validatePassword.bind(this)]),
            'confirmPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.matchingPasswords.bind(this)])
        });
        this.viewForm = 1;
    };
    SignvendorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initData();
        this.modalService.onCloseModal.takeWhile(function () { return _this.alive; }).subscribe(function (modal) {
            if (modal.id === "ModalVendor") {
                _this.initData();
            }
        });
    };
    SignvendorComponent.prototype.matchingPasswords = function (control) {
        if (control.value !== this.user.password) {
            return { 'matchingPasswords': true };
        }
        return null;
    };
    SignvendorComponent.prototype.validatePassword = function (control) {
        if (!control.value || !this.passwordRegex.test(control.value)) {
            return { 'password': true };
        }
        return null;
    };
    SignvendorComponent.prototype.registeredMailValidation = function (control) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkEmail(control.value).takeWhile(function () { return _this.alive; })
                .subscribe(function (result) {
                console.log(result);
                if (!result.valid) {
                    resolve({ 'mailIsRegistered': true });
                }
                else {
                    resolve(null);
                }
            }, function (error) { return console.error("Error: " + error); });
        });
    };
    SignvendorComponent.prototype.onSignvendor = function () {
        var _this = this;
        this.userService.signVendor('4', this.user.email, this.user.firstname, this.user.lastname, this.user.email, this.user.phoneNumber, this.user.password, this.user.dateOfBirth).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.userService.signvendorSuccess.next(_this.user);
            _this.modalService.close('ModalVendor');
            _this.viewForm = 1;
        }, function (error) {
            var erro = JSON.parse(error.error);
            if (erro.reasonCode === 456) {
                _this.errorPassword = true;
            }
            else {
                _this.errorSignvendor = true;
            }
            setTimeout(function () {
                _this.errorSignvendor = false;
                _this.errorPassword = false;
            }, 3000);
        });
    };
    SignvendorComponent.prototype.onViewNextForm = function (event) {
        if (this.moment) {
            this.user.dateOfBirth = this.moment;
        }
        this.viewForm = event;
    };
    SignvendorComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SignvendorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signvendor',
            template: __webpack_require__("../../../../../src/app/modules/signvendor/signvendor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/signvendor/signvendor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__common_modal_modal_service__["a" /* ModalService */]])
    ], SignvendorComponent);
    return SignvendorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/slider/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_component__ = __webpack_require__("../../../../../src/app/modules/slider/slider.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderModule = (function () {
    function SliderModule() {
    }
    SliderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__slider_component__["a" /* ContentSlider */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["c" /* printSlide */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["b" /* SafeHtmlPipe */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["d" /* slideAjaxDiv */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__slider_component__["a" /* ContentSlider */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["c" /* printSlide */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["b" /* SafeHtmlPipe */], __WEBPACK_IMPORTED_MODULE_2__slider_component__["d" /* slideAjaxDiv */]]
        })
    ], SliderModule);
    return SliderModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return printSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return slideAjaxDiv; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

var ContentSlider = (function () {
    function ContentSlider() {
        //this.slideShow=document.getElementById("slideShow");
        /**
         * Play Interval
         */
        this.interval = 2000;
        this.currentElement = 0;
        this.autoPlay = false;
        this.number = 0;
        //lis:number = 0;
        this.intervalTime = 1000; //in ms(mili seconds)
        //this.lis = this.slides.length;
        //this.number=this.lis.length;
    }
    Object.defineProperty(ContentSlider.prototype, "_slides", {
        set: function (s) {
            this.slides = s;
            console.log(this.slides);
            this.number = this.slides.length;
            if (this.slides.length)
                this.slides[0]["classes"] = ["active"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentSlider.prototype, "_autoPlay", {
        set: function (b) {
            this.autoPlay = b;
            if (b) {
                this.auto(this.interval);
            }
        },
        enumerable: true,
        configurable: true
    });
    ContentSlider.prototype.backWard = function () {
        if (this.autoPlay)
            clearInterval(this.interval);
        this.currentElement = this.currentElement - 1;
        if (this.currentElement < 0) {
            this.currentElement = this.number - 1;
        }
        this.removeClasses();
        var prev = this.currentElement == this.number - 1 ? 0 : this.currentElement + 1;
        this.slides[prev].classes = ["animateForward"];
        this.hide(this.slides[prev]);
        this.show(this.slides[this.currentElement]);
        this.slides[this.currentElement].classes = ["active", "backward"];
        if (this.autoPlay)
            this.auto(this.intervalTime);
    };
    ContentSlider.prototype.removeClasses = function () {
        for (var i = 0; i < this.number; i++) {
            this.slides[i].classes = {};
        }
    };
    ContentSlider.prototype.forWard = function () {
        if (this.autoPlay)
            clearInterval(this.interval);
        this._forWard();
        if (this.autoPlay)
            this.auto(this.intervalTime);
    };
    ContentSlider.prototype._forWard = function () {
        this.currentElement = 1 + this.currentElement;
        if (this.currentElement >= this.number) {
            this.currentElement = 0;
        }
        this.removeClasses();
        var prev = this.currentElement == 0 ? this.number - 1 : this.currentElement - 1;
        this.slides[prev]["classes"] = ["animateBack"];
        this.hide(this.slides[prev]);
        this.show(this.slides[this.currentElement]);
        this.slides[this.currentElement].classes = ["active", "forward"];
    };
    ContentSlider.prototype.auto = function (ms) {
        this.autoPlay = true;
        this.intervalTime = ms;
        this.interval = setInterval(this._forWard.bind(this), ms);
    };
    ContentSlider.prototype.delayHide = function (el, ms) {
        return setTimeout(function () { return el.hidden = true; }, ms);
    };
    ContentSlider.prototype.show = function (el) {
        el.hidden = false;
    };
    ContentSlider.prototype.hide = function (el) {
        el.hidden = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('playInterval'),
        __metadata("design:type", Object)
    ], ContentSlider.prototype, "interval", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("slides"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ContentSlider.prototype, "_slides", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('autoPlay'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ContentSlider.prototype, "_autoPlay", null);
    ContentSlider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contentSlider',
            template: "\n<div class=\"slider\">\n<nav><span class=\"prev\" (click)=\"backWard()\"><i></i></span><span (click)=\"forWard()\" class=\"next\"><i></i></span></nav>\n<ul class=\"slideShow\">\n        <li *ngFor=\"let li of slides\" [ngStyle]=\"{'display':li?.hidden?'none':''}\" [ngClass]=\"li?.classes\">\n            <printSlide [meta]=\"li\"></printSlide>\n        </li>\n</ul>\n</div>\n    ",
            styles: [__webpack_require__("../../../../../src/app/modules/slider/style.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ContentSlider);
    return ContentSlider;
}());

var printSlide = (function () {
    function printSlide() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("meta"),
        __metadata("design:type", Object)
    ], printSlide.prototype, "meta", void 0);
    printSlide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "printSlide",
            template: "\n        <div [ngStyle]=\"meta.styles\"  *ngIf=\"meta.sType=='div'\" [innerHtml]=\"meta.content | safeHtml\">\n\n        </div>\n        <div *ngIf=\"meta.sType=='ajaxDiv'\">\n            <slideAjaxDiv [url]=\"meta.contentUrl\"></slideAjaxDiv>\n        </div>\n        <img [ngStyle]=\"meta.styles\" [src]=\"meta.imgSrc\" *ngIf=\"meta.sType=='img'\" />\n    "
        }),
        __metadata("design:paramtypes", [])
    ], printSlide);
    return printSlide;
}());

var slideAjaxDiv = (function () {
    function slideAjaxDiv() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("url"),
        __metadata("design:type", Object)
    ], slideAjaxDiv.prototype, "meta", void 0);
    slideAjaxDiv = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "slideAjaxDiv",
            template: "\n    Hello Loading something delecious\n    "
        }),
        __metadata("design:paramtypes", [])
    ], slideAjaxDiv);
    return slideAjaxDiv;
}());



/***/ }),

/***/ "../../../../../src/app/modules/slider/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*---------------------------Image Slider--------------------------*/\r\n.slider{\r\n    /*height:770px;*/\r\n    width:100%;\r\n    font-size: 500%;\r\n    color:#000;\r\n    z-index: 0;\r\n    background: #fff;\r\n    position: relative;\r\n}\r\n\r\n.slider ul{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 0;\r\n    max-width:100%;\r\n    width:100%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n}\r\n.slider ul li {\r\n    list-style: none;\r\n    width: 100%;\r\n    max-width:100%;\r\n    width:100%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    display: none;\r\n}\r\n.slider ul li printslide,.slider ul li printslide img{\r\n    max-width:100%;\r\n    width:100%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    display: block;\r\n}\r\n\r\n.slider ul li.active{\r\n    display: inline-block;\r\n}\r\n.slider ul li.backward{\r\n}\r\n.slider ul li.forward{\r\n}\r\n.slider ul li.animateBack{\r\n    display: inline-block;\r\n    /*animation-delay: 0.1s;*/\r\n}\r\n.slider ul li.animateForward{\r\n    display: inline-block;\r\n    /*animation-delay: 0.1s;*/\r\n}\r\n\r\n\r\n\r\n/* Navigation Arrow */\r\n.slider > nav span {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 1000;\r\n\tdisplay: none;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\toutline: none;\r\n\ttext-align: left;\r\n\tcursor: pointer;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n.slider > nav span.prev {\r\n\tleft: 0;\r\n}\r\n\r\n.slider > nav span.next {\r\n\tright: 0;\r\n}\r\n\r\n.slider > nav i {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.slider > nav span::before,\r\n.slider > nav span::after,\r\n.slider > nav i::before,\r\n.slider > nav i::after {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\twidth: 3px;\r\n\theight: 50%;\r\n\toutline: 1px solid transparent;\r\n\tbackground: #dbccd0;\r\n\tcontent: '';\r\n\ttransition: -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s;\r\n\ttransition: transform 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n\r\n.slider > nav i::before,\r\n.slider > nav i::after {\r\n\tz-index: 100;\r\n\theight: 0;\r\n\tbackground: #fff;\r\n\ttransition: height 0.3s, -webkit-transform 0.3s;\r\n\ttransition: height 0.3s, transform 0.3s;\r\n\ttransition: height 0.3s, transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n\r\n.slider > nav span::before,\r\n.slider > nav i::before {\r\n\ttop: 50%;\r\n\t-webkit-transform: translateX(-50%) rotate(-135deg);\r\n\ttransform: translateX(-50%) rotate(-135deg);\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n}\r\n\r\n.slider > nav span.next::before,\r\n.slider > nav span.next i::before {\r\n\t-webkit-transform: translateX(-50%) rotate(135deg);\r\n\ttransform: translateX(-50%) rotate(135deg);\r\n\t-webkit-transform-origin: 50% 0%;\r\n\ttransform-origin: 50% 0%;\r\n}\r\n\r\n.slider > nav span::after,\r\n.slider > nav i::after {\r\n\ttop: 50%;\r\n\t-webkit-transform: translateX(-50%) rotate(-45deg);\r\n\ttransform: translateX(-50%) rotate(-45deg);\r\n\t-webkit-transform-origin: 0 0;\r\n\ttransform-origin: 0 0;\r\n}\r\n\r\n.slider > nav span.next::after,\r\n.slider > nav span.next i::after {\r\n\t-webkit-transform: translateX(-50%) rotate(45deg);\r\n\ttransform: translateX(-50%) rotate(45deg);\r\n\t-webkit-transform-origin: 100% 0%;\r\n\ttransform-origin: 100% 0%;\r\n}\r\n\r\n\r\n\r\n.hidden{\r\n    display:none;\r\n}\r\n/*---------------------------Image Slider Ends----------------------------*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/model/context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * New typescript file
 */

var Context = (function () {
    function Context() {
    }
    Context.API_URL = 'https://pandaweed.com/aa/rs/';
    Context.USER_AGENT = 'Web:any-pandaweed:1.0-Web:any';
    Context = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Context);
    return Context;
}());



/***/ }),

/***/ "../../../../../src/app/services/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * New typescript file
 */
var User = (function () {
    function User() {
        this.firstName = 'guest';
        this.lastName = 'guest';
        this.roleCode = '4';
        this.userName = 'guest';
        this.token = '731d7b74e27b9458e55f7d759f1c3254244696083047366';
        this.userTypeCode = '4';
        this.device = 'aaad9991-2117-498b-9a6c-3e1c4329d991';
        this.latitude = '43.6199967132464';
        this.longitude = '-79.5723298501169';
        this.nonce = "nonce";
        this.lang = "en";
        this.guest = true;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map