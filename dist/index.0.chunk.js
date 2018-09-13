webpackJsonp(["index.0"],{

/***/ "../../../../../src/app/modules/social/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/social/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_voucher__ = __webpack_require__("../../../../../src/app/common/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_components_post__ = __webpack_require__("../../../../../src/app/common/components/post/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_module__ = __webpack_require__("../../../../../src/app/modules/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__social_routing_module__ = __webpack_require__("../../../../../src/app/modules/social/social-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SocialModule = (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_16__social_routing_module__["a" /* SocialRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__common_api__["b" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_7__common_voucher__["a" /* VoucherModule */],
                __WEBPACK_IMPORTED_MODULE_9__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_6__common_auth__["b" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_8__common_components_post__["a" /* PostModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__["DateTimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_11__slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_module__["ProfileModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile_component__["a" /* MyProfileComponent */]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/social/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea { border: none; }\r\n.show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.team-img-user {\r\n  width: 100%;\r\n  float: left;\r\n  border: 5px solid #eee;\r\n  border-radius: 50%;\r\n}\r\n.team-img-user img {\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tmargin-bottom:0px;\r\n  box-shadow: 0 0px 0px rgba(0,0,0,0.4) !important;\r\n  border-radius: 50%;\r\n}\r\n.user-name-data{\r\n  padding-left: 0px;\r\n}\r\n.drop-down-status{\r\n  padding-top: 17px;\r\n  float: right;\r\n}\r\n.drop-down-status a{\r\n  color: #b9b9b9;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-left: 50px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n}\r\n.head-user-photo{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 5px;\r\n}\r\n.head-user-photo h1{\r\n  font-size: 16px;\r\n  margin-bottom: 0px;\r\n}\r\n.head-user-photo p{\r\n  font-size: 13px;\r\n  margin-bottom: 0px;\r\n}\r\n.body-user{\r\n  margin-top: 20px;\r\n  float: right;\r\n}\r\n.body-user p{\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n.canvas-my-profile{\r\n  background-color: #f5f5f5;\r\n}\r\n.status-user{\r\n  padding-top: 3px;\r\n  padding-left: 0px;\r\n}\r\n.status-user a{\r\n  padding-left: 0px;\r\n  float: left;\r\n  margin-right: 15px;\r\n  color: #b9b9b9;\r\n  font-size: 14px;\r\n}\r\n.status-user-data{\r\n  padding-top: 3px;\r\n  padding-left: 0px;\r\n}\r\n.status-user-data a{\r\n  padding-left: 0px;\r\n  margin-right: 15px;\r\n  color: #348a41;\r\n  font-size: 14px;\r\n}\r\n.comments-data{\r\n  float: right;\r\n  color: black !important;\r\n}\r\n.contact_message{\r\n  max-width: 100%;\r\n}\r\n\r\n.post-icons{\r\n  vertical-align: middle; \r\n  color:gray; \r\n  font-weight: bold;\r\n   font-size: 15px\r\n}\r\n.post-icons i{\r\n  margin-left: 10px;\r\n}\r\n\r\n.comments-item{\r\n  margin: 25px;\r\n}\r\n@media only screen and (min-width: 1024px)\r\n{\r\n  .post-wrapper{\r\n    padding:15px\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/social/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<contentSlider [slides]=\"images\">\r\n</contentSlider>\r\n<img src=\"assets/images/{{bannerProfile}}\" alt=\"Image 1\" />\r\n<div class=\"container container-user\">\r\n  <div class=\"row container-user\">\r\n\r\n    <ngl-modal [header]=\"'Panda Universe - Share your Thoughts'\" [(open)]=\"opened\" [size]=\"size\">\r\n      <div body>\r\n        <p>Do you really want to publish it?</p>\r\n      </div>\r\n      <ng-template ngl-modal-footer *ngIf=\"!noFooter\">\r\n        <button class=\"slds-button slds-button--neutral\" style=\"color:#348a41\" (click)=\"cancel()\">Cancel</button>\r\n        <button type=\"submit\" [disabled]=\"sending\" (click)=\"submitStory()\" class=\"btn btn-primary\">Save</button>\r\n      </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n\r\n    <div class=\"col-lg-12 canvas-my-profile\" style=\"padding-top: 50px; padding-bottom:50px\">\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"100%\" fxFlex.gt-md=\"85%\" fxLayout=\"row\" fxLayoutWrap>\r\n          <div fxFlex=\"100\">\r\n            <app-card>\r\n              <app-card-header style=\"padding:5px; border-bottom:1px solid #eee\">\r\n                <a (click)=\"fileInput.click()\">\r\n                  <i style=\"cursor: pointer\" class=\"fa fa-picture-o\"></i> Upload Photo \r\n                </a>\r\n                <span style=\"font-weight:bold\" *ngIf=\"postFile && postFile.name\">({{postFile.name}})</span>\r\n              </app-card-header>\r\n              <app-card-body>\r\n                <form class=\"form-signin\" [formGroup]=\"profileForm\">\r\n                  <textarea fxPadding fxFlex=\"100\" formControlName=\"note\" placeholder=\"Whats on your mind? Share your story with the Panda Universe\" style=\"height:109px\"></textarea>\r\n                </form>\r\n                <input style=\"display:none\" [disabled]=\"sending\" type=\"file\" placeholder=\"Upload picture\" value=\"xxx\" #fileInput (change)=\"postImage($event)\">\r\n              </app-card-body>\r\n              <app-card-actions style=\"padding:5px; border-top:1px solid #eee\">\r\n                <div fxLayout=\"end end\" fxLayout=\"row\" fxFlex=\"100\" style=\"text-align: right\">\r\n                  <div class=\"post-icons\" fxFlex=\"85\">\r\n                    <!-- <i class=\"fa fa-smile-o\"></i>\r\n                <i class=\"fa fa-map-marker\"></i>\r\n                <i class=\"fa fa-file-pdf-o\"></i> -->\r\n\r\n                  </div>\r\n                  <div fxFlex>\r\n                    <i *ngIf=\"sending\" class=\"fa fa-spinner fa-pulse fa-fw\"></i>\r\n                    <button [disabled]=\"sending || !profileForm.value || !profileForm.value.note\" type=\"submit\" (click)=\"open()\" class=\"btn btn-primary\">Post</button>\r\n                  </div>\r\n                </div>\r\n              </app-card-actions>\r\n            </app-card>\r\n          </div>\r\n          <div class=\"search-results\" fromRoot=\"true\" infiniteScroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"300\" (scrolled)=\"onScroll()\"\r\n            fxLayout=\"column\" fxFlex=\"100\">\r\n            <div *ngFor=\"let post of posts; let i = index\" class=\"post-wrapper\">\r\n              <app-post [post]=\"post\"></app-post>\r\n            </div>\r\n            <div fxFlex=\"100\" style=\"text-align:center\">\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/social/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_profile_file_system_resource_service__ = __webpack_require__("../../../../../src/app/modules/profile/file-system-resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_profile_profile_service__ = __webpack_require__("../../../../../src/app/modules/profile/profile_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_profile_social_service__ = __webpack_require__("../../../../../src/app/modules/profile/social.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_user__ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_user_user_service__ = __webpack_require__("../../../../../src/app/common/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_common_modal_modal_service__ = __webpack_require__("../../../../../src/app/common/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyProfileComponent = (function () {
    function MyProfileComponent(profileService, userService, modalService, fb, userprofileService, fileSystemResourceService, socialService) {
        this.profileService = profileService;
        this.userService = userService;
        this.modalService = modalService;
        this.fb = fb;
        this.userprofileService = userprofileService;
        this.fileSystemResourceService = fileSystemResourceService;
        this.socialService = socialService;
        this.alive = true;
        this.loading = true;
        this.mobile = false;
        this.banner = [];
        this.logueado = false;
        this.sending = false;
        this.modalLogin = 'ModalLogin';
        this.opened = false;
        this.openedShare = false;
        this.currentPage = 0;
        this.totalPost = 0;
        this.bannerProfile = 'profile-banner.jpg';
        this.columns = [{}, {}];
        this.profileForm = fb.group({
            'note': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(500)])],
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 959) {
            this.mobile = true;
        }
        this.getTimeline();
        this.loadSlider();
        this.userService.getUser().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            if (user && user.token && !user.guest) {
                _this.logueado = true;
            }
        });
    };
    MyProfileComponent.prototype.loadSlider = function () {
        this.getUserProfile();
        // let profile = this.translate.instant("Profile");
        if (this.mobile) {
            this.bannerProfile = 'profile-banner-xs.jpg';
        }
        else {
            this.bannerProfile = 'profile-banner.jpg';
        }
        var bannerimg = this.banner[0];
        this.images = [
            {
                "sType": "div", "styles": { "width": "100%" }, "content": "\n        <div class=\"container-slide\" style=\"background-image: url('/assets/images/" + this.bannerProfile + "'); width:100%; background-repeat: no-repeat;background-attachment: initial;background-position: center; background-size:cover;\">\n        <div class=\"container-slide\">\n      <div  class=\"slide-middle-txt animated\">\n      <h1>Panda <span>Social</span></h1>\n  </div>\n  </div>\n      "
            }
        ];
    };
    MyProfileComponent.prototype.saveStory = function () {
        var _this = this;
        if (this.sending) {
            return;
        }
        console.log("this.profileForm.value", this.profileForm.value);
        this.sending = true;
        this.opened = false;
        var reloadInfo = function () {
            _this.profileForm.patchValue({ note: "" });
            _this.profileForm.markAsPristine();
            _this.getTimeline();
            delete _this.postFile;
            setTimeout(function () {
                _this.sending = false;
            }, 1000);
        };
        if (!this.logueado) {
            this.modalService.open(this.modalLogin);
            reloadInfo();
            return;
        }
        this.socialService.saveStory(this.profileForm.value.note).subscribe(function (res) {
            if (_this.postFile) {
                _this.fileSystemResourceService.postUpload(res.directoryCode, _this.postFile).subscribe(function () {
                    reloadInfo();
                }, function (_) {
                    reloadInfo();
                });
            }
            else {
                reloadInfo();
            }
        }, function (_) {
            reloadInfo();
        });
    };
    MyProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userprofileService.getUserProfile().takeWhile(function () { return _this.alive; }).subscribe(function (response) {
            try {
                _this.user = JSON.parse(response.userProfile);
            }
            catch (error) {
            }
        });
    };
    MyProfileComponent.prototype.onScroll = function () {
        var _this = this;
        if (this.posts && this.posts.length >= this.totalPost) {
            return;
        }
        this.loading = true;
        this.currentPage++;
        this.socialService.getTimeline({
            "page": this.currentPage,
            "sortTypeId": 1,
            "pageSize": 10
        }).takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            (_a = _this.posts).push.apply(_a, res);
            if (_this.posts && _this.posts[0]) {
                _this.totalPost = _this.posts[0].totalCount;
            }
            _this.loading = false;
            var _a;
        }, function (err) {
            _this.loading = false;
        });
    };
    MyProfileComponent.prototype.getTimeline = function () {
        var _this = this;
        var currentPage = 0;
        if (this.currentPage > 0) {
            currentPage = this.currentPage - 1;
        }
        this.loading = true;
        this.socialService.getTimeline({
            "page": currentPage,
            "sortTypeId": 1,
            "pageSize": 10
        }).takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.posts = res;
            if (_this.posts && _this.posts[0]) {
                _this.totalPost = _this.posts[0].totalCount;
            }
            console.log("total products", _this.totalPost);
            console.log("timeline>>> ", res);
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
        });
    };
    MyProfileComponent.prototype.postImage = function (fileInput) {
        this.postFile = fileInput.target.files[0];
        console.log("postFile", this.postFile);
    };
    MyProfileComponent.prototype.open = function (size) {
        this.size = size;
        this.opened = !this.opened;
    };
    MyProfileComponent.prototype.cancel = function () {
        this.opened = false;
    };
    MyProfileComponent.prototype.addPost = function (image) {
        this.opened = false;
    };
    MyProfileComponent.prototype.openShare = function (size) {
        this.size = size;
        this.openedShare = !this.openedShare;
    };
    MyProfileComponent.prototype.cancelShare = function () {
        this.openedShare = false;
    };
    MyProfileComponent.prototype.loadNotes = function () {
        var _this = this;
        this.profileService.loadNotes()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
        });
    };
    MyProfileComponent.prototype.submitStory = function () {
        this.saveStory();
    };
    MyProfileComponent.prototype.loadPosts = function () {
        var _this = this;
        this.profileService.loadPosts()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.posts = res;
        });
    };
    MyProfileComponent.prototype.loadComments = function (post) {
        var _this = this;
        this.profileService.loadComments(post.id)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            for (var _i = 0, post_1 = post; _i < post_1.length; _i++) {
                var pos = post_1[_i];
                if (pos.id == post.id) {
                    _this.posts["comments"] = res;
                }
            }
        });
    };
    MyProfileComponent.prototype.likePost = function () {
        var _this = this;
        this.profileService.likePost(this.profileForm.value.note)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
        });
    };
    MyProfileComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MyProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__("../../../../../src/app/modules/social/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/social/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_modules_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_6_app_common_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7_app_common_modal_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5_app_common_user__["d" /* UserprofileService */],
            __WEBPACK_IMPORTED_MODULE_2_app_modules_profile_file_system_resource_service__["a" /* FileSystemResourceService */],
            __WEBPACK_IMPORTED_MODULE_4_app_modules_profile_social_service__["a" /* SocialService */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/social/social-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/social/my-profile/my-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var profileRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile_component__["a" /* MyProfileComponent */],
    }
];
var SocialRoutingModule = (function () {
    function SocialRoutingModule() {
    }
    SocialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(profileRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SocialRoutingModule);
    return SocialRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=index.0.chunk.js.map