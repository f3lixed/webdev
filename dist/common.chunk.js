webpackJsonp(["common"],{

/***/ "../../../../../src/app/modules/profile/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.dobInput, .owl-inputtext{\r\n  padding: 9px !important;\r\n  box-shadow: none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:40px;background-color:#f5f5f5\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\r\n    <ngl-notification *ngIf=\"passwordSuccess || profileSuccess\" type=\"toast\" fxFlex=\"90\" severity=\"success\">\r\n      <div class=\"slds-grid\">\r\n        <div class=\"slds-col slds-align-middle\" *ngIf=\"passwordSuccess\">Password Changed.</div>\r\n        <div class=\"slds-col slds-align-middle\" *ngIf=\"profileSuccess\">Basic Information Saved.</div>\r\n      </div>\r\n    </ngl-notification>\r\n    <ngl-notification *ngIf=\"passwordError || profileError\" type=\"toast\" fxFlex=\"90\" severity=\"error\">\r\n      <div class=\"slds-grid\">\r\n        <div class=\"slds-col slds-align-middle\" *ngIf=\"passwordError\">Invalid Password, Try Again.</div>\r\n        <div class=\"slds-col slds-align-middle\" *ngIf=\"profileError\">Invalid Basic Information, Try Again</div>\r\n      </div>\r\n    </ngl-notification>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\" style=\"padding-bottom:40px;background-color:#f5f5f5;\" fxLayoutWrap style=\"margin-left:20px; margin-right:20px\">\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" style=\"padding:15px\">\r\n    <h1>Basic Information</h1>\r\n    <form class=\"form-signin\" [formGroup]=\"informationForm\" *ngIf=\"user\">\r\n      <ngl-form-element label=\"First Name\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n        <input nglFormControl type=\"text\" placeholder=\"First Name\" [required]=\"required\" formControlName=\"firstName\" [(ngModel)]=\"user.firstName\">\r\n      </ngl-form-element>\r\n      <ngl-form-element label=\"Last Name\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n        <input nglFormControl type=\"text\" placeholder=\"Last Name\" formControlName=\"lastName\" [required]=\"required\" [(ngModel)]=\"user.lastName\">\r\n      </ngl-form-element>\r\n      <ngl-form-element label=\"Phone\" [error]=\"hasError ? error : null\" class=\"slds-m-top--small\">\r\n        <input nglFormControl type=\"text\" placeholder=\"Phone\" [required]=\"required\" formControlName=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\">\r\n      </ngl-form-element>\r\n      <div>\r\n        <mat-form-field style=\"margin-top:15px\">\r\n          <input matInput [max]=\"max\" [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\" [value]=\"user.dateOfBirth\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker startView=\"year\" [startAt]=\"user.dateOfBirth\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayoutAlign=\"end end\" style=\"margin-top:10px;\">\r\n        <button type=\"submit\" [disabled]=\"!informationForm.valid\" (click)=\"saveUserInfo()\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div fxFlex=\"100\" fxLayout=\"column\" fxFlex.gt-sm=\"40\" style=\"padding:15px\">\r\n    <h1>Change Password</h1>\r\n    <form class=\"form-signin\" [formGroup]=\"passwordForm\" *ngIf=\"user\">\r\n      <ngl-form-element label=\"Current Password\" [error]=\"!passwordForm.get('oldPassword').valid && passwordForm.get('oldPassword').touched ? 'Please enter your current password' : null\"\r\n        class=\"slds-m-top--small\">\r\n        <input type=\"password\" nglFormControl placeholder=\"Current Password\" [required]=\"required\" formControlName=\"oldPassword\"\r\n          [(ngModel)]=\"user.oldPassword\">\r\n      </ngl-form-element>\r\n      <ngl-form-element label=\"New Password\" [error]=\"!passwordForm.get('newPassword').valid && passwordForm.get('newPassword').touched ? 'Please enter your new password. Must contain at least 7 characters (letters and numbers)' : null\"\r\n        class=\"slds-m-top--small\">\r\n        <input type=\"password\" nglFormControl placeholder=\"New Password\" [required]=\"required\" formControlName=\"newPassword\" [(ngModel)]=\"user.newPassword\">\r\n      </ngl-form-element>\r\n      <ngl-form-element label=\"Confirm Password\" [error]=\"!passwordForm.get('confirmPassword').valid && passwordForm.get('confirmPassword').touched ? 'Please confirm your new password' : null\"\r\n        class=\"slds-m-top--small\">\r\n        <input type=\"password\" nglFormControl placeholder=\"Confirm Password\" [required]=\"required\" formControlName=\"confirmPassword\"\r\n          [(ngModel)]=\"user.confirmPassword\">\r\n      </ngl-form-element>\r\n      <div fxLayoutAlign=\"end end\" style=\"margin-top:10px;\">\r\n        <button type=\"submit\" [disabled]=\"!passwordForm.valid\" (click)=\"changePassword()\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/profile/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/modules/profile/profile_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_service__ = __webpack_require__("../../../../../src/app/modules/profile/social.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_user___ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProfileComponent = (function () {
    function EditProfileComponent(profileService, userService, fb, socialService, userprofileService) {
        this.profileService = profileService;
        this.userService = userService;
        this.fb = fb;
        this.socialService = socialService;
        this.userprofileService = userprofileService;
        this.alive = true;
        this.autoClose = true;
        this.min = new Date(2017, 7, 9);
        this.max = Object(__WEBPACK_IMPORTED_MODULE_6_date_fns__["subYears"])(new Date(), 18);
        this.user = {};
        this.passwordError = false;
        this.profileError = false;
        this.passwordSuccess = false;
        this.passwordProfile = false;
        this.passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,})");
        this.informationForm = fb.group({
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(50)])],
            'dateOfBirth': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            'phoneNumber': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
        });
        this.passwordForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            'oldPassword': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            'newPassword': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, this.validatePassword.bind(this)]),
            'confirmPassword': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, this.matchingPasswords.bind(this)])
        });
    }
    EditProfileComponent.prototype.matchingPasswords = function (control) {
        if (control.value !== this.user.newPassword) {
            return { 'matchingPasswords': true };
        }
        return null;
    };
    EditProfileComponent.prototype.validatePassword = function (control) {
        if (!control.value || !this.passwordRegex.test(control.value)) {
            return { 'password': true };
        }
        return null;
    };
    EditProfileComponent.prototype.saveUserInfo = function () {
        var _this = this;
        console.log("informationForm", this.informationForm);
        this.userprofileService.setUserProfile([{ key: "userProfile", value: JSON.stringify(this.informationForm.value) }])
            .takeWhile(function () { return _this.alive; }).subscribe(function (response) {
            console.log("setUserProfile>>> ", response);
        });
    };
    EditProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.passwordForm.valid) {
            return;
        }
        var clearForm = function () {
            _this.user.newPassword = "";
            _this.user.oldPassword = "";
            _this.user.confirmPassword = "";
            _this.passwordForm.markAsPristine();
            _this.passwordForm.markAsUntouched();
        };
        this.userService.changePassword(this.user.oldPassword, this.user.newPassword, this.user.confirmPassword)
            .takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            _this.passwordSuccess = true;
            setTimeout(function (_) {
                _this.passwordSuccess = false;
            }, 3000);
            clearForm();
        }, function (error) {
            _this.passwordError = true;
            setTimeout(function (_) {
                _this.passwordError = false;
            }, 3000);
            clearForm();
        });
    };
    EditProfileComponent.prototype.getUserSession = function () {
        var _this = this;
        this.userService.getUser().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            console.log("USER SESSION", user);
            _this.user.firstName = user.firstName;
            _this.user.lastName = user.lastName;
            _this.user.dateOfBirth = user.dateOfBirth;
            _this.user.phoneNumber = user.phoneNumber;
        });
    };
    EditProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userprofileService.getUserProfile().takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            try {
                _this.user = JSON.parse(data.userProfile);
            }
            catch (error) {
            }
            _this.user.dateOfBirth = new Date(_this.user.dateOfBirth);
            _this.moment = new Date(_this.user.dateOfBirth);
            console.log("USER==> ", _this.moment);
            if (!_this.user.firstName) {
                _this.getUserSession();
            }
        });
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/modules/profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_3__common_user___["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__social_service__["a" /* SocialService */],
            __WEBPACK_IMPORTED_MODULE_4__common_user_userprofile_service__["a" /* UserprofileService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/file-system-resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSystemResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_model_context__ = __webpack_require__("../../../../../src/app/services/model/context.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileSystemResourceService = (function () {
    function FileSystemResourceService(apiBuilder, authService, http) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.http = http;
        this.requestContact = apiBuilder.defaultOptions()
            .path("fileSystemResource/")
            .build();
    }
    FileSystemResourceService.prototype.profilePictureUpload = function (file) {
        var progressObserver;
        var progress;
        progress = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            progressObserver = observer;
        }).share();
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("image", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.upload.onprogress = function (event) {
                progress = Math.round(event.loaded / event.total * 100);
                progressObserver.next(progress);
            };
            xhr.open('POST', __WEBPACK_IMPORTED_MODULE_5__services_model_context__["a" /* Context */].API_URL + "fileSystemResource/profilePictureUpload.a", true);
            xhr.send(formData);
        });
    };
    FileSystemResourceService.prototype.profilePictureUploadV2 = function (file) {
        var formData = new FormData();
        formData.append('image', file);
        return this.requestContact.postFile("profilePictureUpload.a", formData);
    };
    FileSystemResourceService.prototype.postUpload = function (directory, file) {
        var formData = new FormData();
        formData.append('directoryCode', directory);
        formData.append('image', file);
        return this.requestContact.postFile("upload.a", formData);
    };
    FileSystemResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__common_api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_1__common_auth___["c" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], FileSystemResourceService);
    return FileSystemResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/main-profile/main-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-panda {\r\n  padding-right: 60px;\r\n  height: 230px;\r\n  width: auto;\r\n}\r\n\r\n.img-profile-panda {\r\n  margin-left: 20%;\r\n}\r\n\r\n.arrow-box-page-hover {\r\n  background: #fff;\r\n}\r\n\r\n.arrow-box-page-hover p {\r\n  color: #282d33;\r\n}\r\n\r\n.arrow-box-page-hover:after {\r\n  border-right-color: #fff;\r\n}\r\n\r\n.container-user {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.profile-name {\r\n  font-size: 17px;\r\n  color: #000;\r\n  border-bottom: 1px solid #ccc;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.profile-rounded img {\r\n  width: 150px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-rounded {\r\n  padding-left: 60px;\r\n}\r\n\r\n.profile-info {\r\n  line-height: 30px;\r\n}\r\n\r\n.profile-info i {\r\n  color: #060;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/main-profile/main-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-slide\">\r\n  <div id=\"boxgallery\" class=\"boxgallery\" data-effect=\"effect-1\">\r\n    <div class=\"panel\">\r\n      <img src=\"assets/images/profile/profile.jpg\" style=\"width:100%; height:100%\" alt=\"Image 1\" />\r\n      <div class='slide-middle-txt animated'>\r\n        <h1>Panda Pr\r\n          <span class=\"color-txt\">o</span>file</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<contentSlider [slides]=\"images\">\r\n</contentSlider>\r\n<img src=\"assets/images/{{bannerProfile}}\" alt=\"Image 1\" />\r\n<div class=\"row\" style=\"background: #f5f5f5; padding-top: 30px\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <div class=\"profile-rounded\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\"img\" *ngIf=\"userProfile\">\r\n      <img *ngIf=\"!loading\" [src]=\"imageProfile\" alt=\"img\" (click)=\"fileInput.click()\" style=\"cursor: pointer\" />\r\n      <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n    </div>\r\n    <button *ngIf=\"!loading\" (click)=\"fileInput.click()\" class=\"btn btn-link\" style=\"margin-top: 7px\">\r\n      <i class=\"fa fa-cloud-upload\"></i> Upload</button>\r\n    <span style=\"visibility: hidden; position: absolute; overflow: hidden; width: 0px; height:0px;border:none;margin:0; padding:0\">\r\n      <input style=\"margin-top: 10px\" #fileInput accept=\"image/x-png,image/gif,image/jpeg\" type=\"file\" placeholder=\"Upload picture\" value=\"xxx\" (change)=\"profilePictureUpload($event)\">\r\n    </span>\r\n  </div>\r\n\r\n  <div fxFlex style=\"margin: 0 50px\">\r\n    <div *ngIf=\"user\">\r\n      <p class=\"profile-name\">{{user.firstName}} {{user.lastName}}</p>\r\n      <div class=\"profile-info\">\r\n        <p *ngIf=\"user.phoneNumber\">\r\n          <i class=\"fa fa-phone\"></i> {{user.phoneNumber}}\r\n        </p>\r\n        <!-- <p>\r\n            <i class=\"fa fa-envelope\"></i> {{user.userName}}\r\n          </p> -->\r\n        <!-- <p style=\"margin-top: 20px\">\r\n            <button class=\"btn btn-primary\" type=\"submit\">Send Friend Request</button>\r\n          </p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxHide.xs=\"true\">\r\n    <img class=\"image-panda\" src=\"/assets/images/profile/panda.png\" alt=\"img\" />\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container container-user\">\r\n  <div class=\"row container-user\">\r\n    <div class=\"services-tabs\">\r\n      <div role=\"tabpanel\" style=\"margin-left:20px\">\r\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n          <li role=\"presentation\" [routerLink]=\"[item.path]\" routerLinkActive=\"active\" *ngFor=\"let item of menuList\">\r\n            <a class=\"tabs-nm\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">\r\n              <i class=\"fa fa-user\"></i> {{ item.title }}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/profile/main-profile/main-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_system_resource_service__ = __webpack_require__("../../../../../src/app/modules/profile/file-system-resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_user___ = __webpack_require__("../../../../../src/app/common/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_user_userprofile_service__ = __webpack_require__("../../../../../src/app/common/user/userprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_media_media_service__ = __webpack_require__("../../../../../src/app/common/media/media.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainProfileComponent = (function () {
    function MainProfileComponent(fileSystemResourceService, userService, translate, router, userprofileService, mediaService, sanitizer) {
        this.fileSystemResourceService = fileSystemResourceService;
        this.userService = userService;
        this.translate = translate;
        this.router = router;
        this.userprofileService = userprofileService;
        this.mediaService = mediaService;
        this.sanitizer = sanitizer;
        this.alive = true;
        this.mobile = false;
        this.loading = false;
        this.banner = [];
        this.bannerProfile = 'profile-banner.jpg';
        this.menuList = [
            // { title: "My Profile", path: "my-profile" },
            { title: "Information", path: "edit-profile" },
        ];
    }
    MainProfileComponent.prototype.getImage = function () {
        var _this = this;
        if (!this.userProfile || !this.userProfile.profilePicture) {
            return;
        }
        this.mediaService.getMedia(this.userProfile.profilePicture).takeWhile(function () { return _this.alive; }).subscribe(function (result) {
            _this.imageProfile = _this.sanitizer.bypassSecurityTrustResourceUrl(result);
            _this.loading = false;
        });
    };
    MainProfileComponent.prototype.loadSlider = function () {
        // let profile = this.translate.instant("Profile");
        if (window.screen.width <= 959) {
            this.bannerProfile = 'profile-banner-xs.jpg';
        }
        else {
            this.bannerProfile = 'profile-banner.jpg';
        }
        var bannerimg = this.banner[0];
        this.images = [
            {
                "sType": "div", "styles": { "width": "100%" }, "content": "\n        <!--<div class=\"container-slide\" style=\"background-image: url('/assets/images/" + bannerimg + "'); width:100%; background-repeat: no-repeat;background-attachment: initial;background-position: center; background-size:cover;\">!-->\n        <div class=\"container-slide\">\n      <div  class=\"slide-middle-txt animated\">\n      <h1>Panda <span>Profile</span></h1>\n  </div>\n  </div>\n      "
            }
        ];
    };
    MainProfileComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.userprofileService.getUserProfile().takeWhile(function () { return _this.alive; }).subscribe(function (response) {
            try {
                _this.user = JSON.parse(response.userProfile);
            }
            catch (error) {
            }
        });
    };
    MainProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 959) {
            this.mobile = true;
        }
        this.userService.tokenChanged.takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            _this.router.navigate(['/']);
        });
        // this.userService.getUser().takeWhile(() => this.alive).subscribe((user) => {
        //   this.user = user;
        // });
        this.getUserProfile();
        this.getUserImage();
        this.loadSlider();
        this.userprofileService.changedProfile.takeWhile(function () { return _this.alive; }).subscribe(function (data) {
            _this.getUserProfile();
        });
    };
    MainProfileComponent.prototype.getUserImage = function () {
        var _this = this;
        this.userService.getUserProfileDetail().takeWhile(function () { return _this.alive; }).subscribe(function (user) {
            _this.userProfile = user;
            _this.getImage();
        }, function () {
            _this.loading = false;
        });
    };
    MainProfileComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MainProfileComponent.prototype.profilePictureUpload = function (fileInput) {
        var _this = this;
        this.loading = true;
        console.log("fileInput>>> ", fileInput);
        this.fileSystemResourceService.profilePictureUploadV2(fileInput.target.files[0]).subscribe(function (res) {
            _this.getUserImage();
            console.log("profilePictureUpload>>> ", res);
        }, function () {
            _this.loading = false;
        });
        // this.fileSystemResourceService.profilePictureUpload(fileInput.target.files[0]).subscribe(res => {
        //   console.log("profilePictureUpload>>> ", res);
        // });
    };
    MainProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-profile',
            template: __webpack_require__("../../../../../src/app/modules/profile/main-profile/main-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/main-profile/main-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__file_system_resource_service__["a" /* FileSystemResourceService */],
            __WEBPACK_IMPORTED_MODULE_2__common_user___["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_user_userprofile_service__["a" /* UserprofileService */],
            __WEBPACK_IMPORTED_MODULE_4__common_media_media_service__["a" /* MediaService */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MainProfileComponent);
    return MainProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-friends/my-friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.box-payment{\r\n  min-height: 220px;\r\n}\r\n.head-friends{\r\n  color: black;\r\n  font-size: 13px;\r\n\r\n}\r\n.head-friends h1{\r\n  color: black;\r\n  font-size: 18px;\r\n}\r\n.head-friends h2{\r\n  color: #348a41;\r\n  font-size: 13px;\r\n  border-bottom: 0px;\r\n}\r\n.head-friends span{\r\n  color: black;\r\n}\r\n.title-span{\r\n  color: #348a41 !important;\r\n}\r\n.canvas-friends{\r\n  background-color: #f5f5f5;\r\n  padding-top: 20px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n.list-friend-user li{\r\n  display: inline-block;\r\n  padding-bottom: 20px;\r\n  padding-top: 10px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  border-bottom: 1px solid #b9b9b9;\r\n  margin-right: 30px;\r\n}\r\n.border-bottom-whitout{\r\n  border-bottom: 0px !important;\r\n}\r\n.list-friend-user{\r\n  color: #b9b9b9;\r\n  font-size: 13px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.list-friend-user li button{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.list-friend-user li h1{\r\n  font-size: 16px;\r\n  color: black;\r\n}\r\n.list-friend-user li h2{\r\n  font-size: 14px;\r\n  color: black;\r\n  border-bottom: 0px;\r\n}\r\n.list-friend-user img{\r\n  border-radius: 50%;\r\n  border: 5px solid #eee;\r\n}\r\n.list-friend-user p i{\r\n  color: #348a41;\r\n} \r\n.status-title{\r\n  font-size: 13px;\r\n  padding-left: 0px;\r\n  color: #b9b9b9;\r\n}\r\n.status-title span{\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n.status-date{\r\n  padding-left: 50px;\r\n}\r\n.head-item-sale-user{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 10px;\r\n}\r\n.head-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 14px !important;\r\n}\r\n.head-item-sale-user h2{\r\n  color: #348a41;\r\n  font-size: 16px;\r\n  border-bottom: 0px;\r\n  padding-top: 40px;\r\n}\r\n.head-item-sale-user p{\r\n  color: #000;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n.banner-sales{\r\n  background-image: url(\"/assets/images/panda-lady.png\");\r\n     background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-color: #343434;\r\n    background-position: right 60px bottom;\r\n    height: 500px;\r\n    margin-top: 15px;\r\n}\r\n.banner-head{\r\n  background-color: #f5f5f5;\r\n}\r\n.save-friends{\r\n  background-color: #f5f5f5;\r\n  padding-bottom: 20px;\r\n}\r\n.canvas-my-friends{\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  background-color: #f5f5f5;\r\n  padding-bottom: 50px;\r\n}\r\n.canvas-my-friends a{\r\n  border: 1px solid #b9b9b9;\r\n  padding: 2px;\r\n}\r\n.user-name-data{\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.drop-friends-button a{\r\n  color: #b9b9b9 !important;\r\n}\r\n.drop-friends-button a i{\r\n  color: #348a41 !important;\r\n}\r\n.drop-friends-button-request a:nth-child(2) i{\r\n  color: red !important;\r\n}\r\n.drop-friends-button-request a:nth-child(3) i{\r\n  color: #b9b9b9 !important;\r\n}\r\n.icon-user-time:before{\r\n  content: \"\\F235\";\r\n}\r\n.padding-bottom-none li{\r\n  padding-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-friends/my-friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 canvas-my-friends\">\r\n\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 canvas-friends\">\r\n\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 comments-user\">\r\n\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-friends\">\r\n\t\t\t\t<h1>Friends</h1>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<ul class=\"list-friend-user\">\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user3.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user3.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/team/user1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 drop-friends-button\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-comments\"></i>Chat</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"icon-user-time\"></i>Unfriend</a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i>Block</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-circle\"></i>Online</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>                                      \r\n\t\t\t</div>                                      \r\n\t\t</div>                                      \r\n\t</div>                                      \r\n\t<div class=\"col-xl-3 col-lg-3 hidden-xs banner-head canvas-friends\">\r\n\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 comments-user\">\r\n\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-friends\">\r\n\t\t\t\t<h1>Panda pal request</h1>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<ul class=\"list-friend-user padding-bottom-none\">\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 user-name-data\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t\t<h1>Brad Does</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 user-name-data drop-friends-button-request\">\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-times\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a><i class=\"fa fa-ban\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9 user-name-data\">\r\n\t\t\t\t\t\t\t\t<p>15th Aug 2017  |  9.30am</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>                                      \r\n\t\t\t</div>                                      \r\n\t\t</div>\r\n\t\t<div class=\"col-xl-12 col-lg-12 hidden-xs-down banner-sales\"></div>\r\n\r\n\t</div> \r\n</div> "

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-friends/my-friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFriendsComponent; });
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

var MyFriendsComponent = (function () {
    function MyFriendsComponent() {
    }
    MyFriendsComponent.prototype.ngOnInit = function () {
    };
    MyFriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-friends',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-friends/my-friends.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-friends/my-friends.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyFriendsComponent);
    return MyFriendsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/my-media.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submenu {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 15px 35px;\r\n}\r\n\r\n.submenu-item {\r\n  color: black;\r\n  margin: 5px 10px;\r\n}\r\n\r\n.submenu-item-active {\r\n  color: #388E3C;\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n.embed-nav a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    position: relative;\r\n    color: #949494;\r\n    font-size: 15px;\r\n}\r\n.embed-nav a.active {\r\n    border-bottom: 1px solid #348a41;\r\n    color: #000;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/my-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"submenu embed-nav\">\r\n\t\t<a class=\"submenu-item\" [routerLink]=\"[item.path]\" routerLinkActive=\"active\" *ngFor=\"let item of menuList\">{{ item.title }}</a>\r\n\t</div>\r\n\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/my-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMediaComponent; });
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

var MyMediaComponent = (function () {
    function MyMediaComponent() {
        this.menuList = [
            { title: "Photos", path: "photos" },
            { title: "Videos", path: "videos" }
        ];
    }
    MyMediaComponent.prototype.ngOnInit = function () {
    };
    MyMediaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-media',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-media/my-media.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-media/my-media.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyMediaComponent);
    return MyMediaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/photo/photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  padding: 10px 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\n.content-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center\r\n}\r\n\r\n.title {\r\n  font-size: 2em;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.content-uploads {\r\n  background-color: #424242;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.content-favorites {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.card-photo {\r\n  max-width: 230px;\r\n  height: auto;\r\n}\r\n\r\n.detail-photo {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/photo/photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\t<div style=\"display: flex; flex-direction: column; justify-content: flex-start;\">\r\n\t\t<h1 class=\"title\">My Uploads</h1>\r\n\t\t<div class=\"content-uploads\">\r\n\t\t\t<app-card *ngFor=\"let item of uploads\">\r\n\t\t\t\t<app-card-body class=\"content-body\">\r\n\t\t\t\t\t<img class=\"card-photo\" src=\"{{ item.urlPhoto }}\" />\r\n\t\t\t\t\t<div class=\"detail-photo\">\r\n\t\t\t\t\t\t<h1>Title</h1>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\" style=\"color: #FFD600\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-heart\" style=\"color: #F44336\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p> Description </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-body>\r\n\t\t\t\t<app-card-actions>\r\n\t\t\t\t\t<div class=\"actions\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\">(20)</i>\r\n\t\t\t\t\t\t\t<span> Comments</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Edit</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Delete</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-actions>\r\n\t\t\t</app-card>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div style=\"display: flex; flex-direction: column; justify-content: flex-start; padding-top:30px\">\r\n\t\t<h1 class=\"title\">My Favorite Photos</h1>\r\n\t\t<div class=\"content-favorites\">\r\n\t\t\t<app-card *ngFor=\"let item of uploads\">\r\n\t\t\t\t<app-card-body class=\"content-body\">\r\n\t\t\t\t\t<img class=\"card-photo\" src=\"{{ item.urlPhoto }}\" />\r\n\t\t\t\t\t<div class=\"detail-photo\">\r\n\t\t\t\t\t\t<h1>Title</h1>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\" style=\"color: #FFD600\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-heart\" style=\"color: #F44336\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p> Description </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-body>\r\n\t\t\t\t<app-card-actions>\r\n\t\t\t\t\t<div class=\"actions\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\">(20)</i>\r\n\t\t\t\t\t\t\t<span> Comments</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Edit</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Delete</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-actions>\r\n\t\t\t</app-card>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/photo/photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
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

var PhotoComponent = (function () {
    function PhotoComponent() {
        this.uploads = [
            { urlPhoto: "http://imagenpng.com/wp-content/uploads/2017/01/atardecer-568470fbef6.jpg" },
            { urlPhoto: "http://www.paisajesbonitos.org/wp-content/uploads/2016/01/paisajes-bonitos-de-verano-playa-paradisiaca-exotica-imagen-foto-wallpaper-0.jpg" },
            { urlPhoto: "http://imagenpng.com/wp-content/uploads/2017/01/atardecer-568470fbef6.jpg" },
            { urlPhoto: "http://www.colombia.co/wp-content/uploads/2015/02/nevado-del-ruiz-1.png" },
            { urlPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Mxyf6Ek3BhGVg39Pid-Tha4oc2hGJHtwcaFKWlCtJaIiXnZo" },
            { urlPhoto: "http://imagenpng.com/wp-content/uploads/2017/01/atardecer-568470fbef6.jpg" },
        ];
    }
    PhotoComponent.prototype.ngOnInit = function () {
    };
    PhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-media/photo/photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-media/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n  padding: 10px 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\n.content-body {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center\r\n}\r\n\r\n.title {\r\n  font-size: 2em;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.content-uploads {\r\n  background-color: #424242;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.content-favorites {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.card-photo {\r\n  max-width: 230px;\r\n  height: auto;\r\n}\r\n\r\n.detail-photo {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\t<div style=\"display: flex; flex-direction: column; justify-content: flex-start;\">\r\n\t\t<h1 class=\"title\">My Uploads</h1>\r\n\t\t<div class=\"content-uploads\">\r\n\t\t\t<app-card *ngFor=\"let item of uploads\">\r\n\t\t\t\t<app-card-body class=\"content-body\">\r\n\t\t\t\t\t<img class=\"card-photo\" src=\"{{ item.urlPhoto }}\" />\r\n\t\t\t\t\t<div class=\"detail-photo\">\r\n\t\t\t\t\t\t<h1>Title</h1>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\" style=\"color: #FFD600\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-heart\" style=\"color: #F44336\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p> Description </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-body>\r\n\t\t\t\t<app-card-actions>\r\n\t\t\t\t\t<div class=\"actions\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\">(20)</i>\r\n\t\t\t\t\t\t\t<span> Comments</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Edit</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Delete</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-actions>\r\n\t\t\t</app-card>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div style=\"display: flex; flex-direction: column; justify-content: flex-start; padding-top:30px\">\r\n\t\t<h1 class=\"title\">My Favorite Videos</h1>\r\n\t\t<div class=\"content-favorites\">\r\n\t\t\t<app-card *ngFor=\"let item of uploads\">\r\n\t\t\t\t<app-card-body class=\"content-body\">\r\n\t\t\t\t\t<img class=\"card-photo\" src=\"{{ item.urlPhoto }}\" />\r\n\t\t\t\t\t<div class=\"detail-photo\">\r\n\t\t\t\t\t\t<h1>Title</h1>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\" style=\"color: #FFD600\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-heart\" style=\"color: #F44336\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p> Description </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-body>\r\n\t\t\t\t<app-card-actions>\r\n\t\t\t\t\t<div class=\"actions\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\">(20)</i>\r\n\t\t\t\t\t\t\t<span> Comments</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Edit</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-link\">Delete</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</app-card-actions>\r\n\t\t\t</app-card>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-media/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
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

var VideoComponent = (function () {
    function VideoComponent() {
        this.uploads = [
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
            { urlPhoto: "http://www.businessflex.com.ec/wp-content/uploads/2016/09/videos-startups-1.jpg" },
        ];
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-media/video/video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-media/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.box-payment{\r\n  min-height: 220px;\r\n}\r\n.payment-data{\r\n  color: #b9b9b9;\r\n  font-size: 13px;\r\n\r\n}\r\n.payment-data h1{\r\n  color: black;\r\n  font-size: 18px;\r\n}\r\n.payment-data h2{\r\n  color: #348a41;\r\n  font-size: 13px;\r\n  border-bottom: 0px;\r\n}\r\n.payment-data span{\r\n  color: black;\r\n}\r\n.title-span{\r\n  color: #348a41 !important;\r\n}\r\n.canvas-my-sales{\r\n  background-color: #f5f5f5;\r\n  padding-top: 20px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n.list-sales-user li{\r\n  display: inline-block;\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 20px;\r\n}\r\n.border-bottom-whitout{\r\n  border-bottom: 0px !important;\r\n}\r\n.list-sales-user{\r\n  color: #b9b9b9;\r\n  font-size: 13px;\r\n}\r\n.list-sales-user li button{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.list-sales-user li h1{\r\n  font-size: 16px;\r\n  color: #348a41;\r\n}\r\n.status-title{\r\n  font-size: 13px;\r\n  padding-left: 0px;\r\n  color: #b9b9b9;\r\n}\r\n.status-title span{\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n.status-date{\r\n  padding-left: 50px;\r\n}\r\n.head-item-sale-user{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 10px;\r\n}\r\n.head-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 14px !important;\r\n}\r\n.head-item-sale-user h2{\r\n  color: #348a41;\r\n  font-size: 16px;\r\n  border-bottom: 0px;\r\n  padding-top: 40px;\r\n}\r\n.head-item-sale-user p{\r\n  color: #000;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n.banner-sales{\r\n  background-image: url(\"/assets/images/panda-lady.png\");\r\n     background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-color: #343434;\r\n    background-position: right 60px bottom;\r\n    height: 500px;\r\n    margin-top: 10%;\r\n}\r\n.feedback-item-sale-user{\r\n  padding-bottom: 20px;\r\n}\r\n.feedback-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 16px;\r\n}\r\n.body-feedback-item-user{\r\n  border: 1px solid #b9b9b9;\r\n}\r\n.body-feedback-item-user h2{\r\n  border-bottom: 0;\r\n}\r\n.feedback-ec-start{\r\n  padding-top: 20px;\r\n}\r\n.ec-stars-wrapper {\r\n  /* Espacio entre los inline-block (los hijos, los `a`) \r\n     http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */\r\n  font-size: 0;\r\n  /* Podríamos quitarlo, \r\n    pero de esta manera (siempre que no le demos padding), \r\n    sólo aplicará la regla .ec-stars-wrapper:hover a cuando\r\n    también se esté haciendo hover a alguna estrella */\r\n  display: inline-block;\r\n}\r\n.ec-stars-wrapper a {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  /* Volver a dar tamaño al texto */\r\n  font-size: 32px;\r\n  font-size: 2rem;\r\n  \r\n  color: #888;\r\n  cursor: pointer;\r\n}\r\n\r\n.ec-stars-wrapper:hover a {\r\n  color: #348a41;\r\n}\r\n/*\r\n * El selector de hijo, es necesario para aumentar la especifidad\r\n */\r\n.ec-stars-wrapper > a:hover ~ a {\r\n  color: #888;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 canvas-my-sales\">\r\n\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 comments-user\">\r\n\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 payment-data\">\r\n\t\t\t\r\n\r\n\t\t\t<div class=\"col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12\">\r\n\t\t\t\t<h1>Billing Preferences</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box box-payment\">\r\n\t\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n\t\t\t\t\t\tPayment Method: <span class=\"title-span\">Credit Card</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n\t\t\t\t\t\t<a><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tName: <span>Jhon Doe</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tName on Card: <span>Jhon Doe</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tNumber on Card: <span>1234 - 5678 - 9012 - 3456</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tExpiration Date: <span>10 - 18</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br/><br/><br/>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tOR\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br/><br/><br/>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t<span class=\"title-span\">Paypal</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tPaypal Id: <span>jhon.doe@gmail.com</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12\">\r\n\t\t\t\t<h1>Shipping Preferences</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box box-payment\">\r\n\t\t\t\t\t<div class=\"col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11\">\r\n\t\t\t\t\t\tName: <span class=\"title-span\">Jhon Doe</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n\t\t\t\t\t\t<a><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tAddress: <span>1384 Lords Branch Rd SE</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tState/region/providence: <span>Winnabow, NC</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tCountry: <span>Usa</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\tZip: <span>28479</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">View Order</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Edit Order</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Track Order</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ul class=\"list-sales-user\">\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>                                      \r\n</div>                                      \r\n\t<div class=\"col-xl-3 col-lg-3 hidden-xs\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 hidden-xs-down banner-sales\"></div>\r\n\r\n\t</div>                                      "

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
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

var MyOrdersComponent = (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-orders/my-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea { border: none; }\r\n.show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.team-img-user {\r\n  width: 100%;\r\n  float: left;\r\n  border: 5px solid #eee;\r\n  border-radius: 50%;\r\n}\r\n.team-img-user img {\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tmargin-bottom:0px;\r\n  box-shadow: 0 0px 0px rgba(0,0,0,0.4) !important;\r\n  border-radius: 50%;\r\n}\r\n.user-name-data{\r\n  padding-left: 0px;\r\n}\r\n.drop-down-status{\r\n  padding-top: 17px;\r\n  float: right;\r\n}\r\n.drop-down-status a{\r\n  color: #b9b9b9;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-left: 50px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n}\r\n.head-user-photo{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 5px;\r\n}\r\n.head-user-photo h1{\r\n  font-size: 16px;\r\n  margin-bottom: 0px;\r\n}\r\n.head-user-photo p{\r\n  font-size: 13px;\r\n  margin-bottom: 0px;\r\n}\r\n.body-user{\r\n  margin-top: 20px;\r\n  float: right;\r\n}\r\n.body-user p{\r\n  color: black;\r\n  font-size: 14px;\r\n}\r\n.canvas-my-profile{\r\n  background-color: #f5f5f5;\r\n}\r\n.status-user{\r\n  padding-top: 3px;\r\n  padding-left: 0px;\r\n}\r\n.status-user a{\r\n  padding-left: 0px;\r\n  float: left;\r\n  margin-right: 15px;\r\n  color: #b9b9b9;\r\n  font-size: 14px;\r\n}\r\n.status-user-data{\r\n  padding-top: 3px;\r\n  padding-left: 0px;\r\n}\r\n.status-user-data a{\r\n  padding-left: 0px;\r\n  margin-right: 15px;\r\n  color: #348a41;\r\n  font-size: 14px;\r\n}\r\n.comments-data{\r\n  float: right;\r\n  color: black !important;\r\n}\r\n.contact_message{\r\n  max-width: 100%;\r\n}\r\n\r\n.post-icons{\r\n  vertical-align: middle; \r\n  color:gray; \r\n  font-weight: bold;\r\n   font-size: 15px\r\n}\r\n.post-icons i{\r\n  margin-left: 10px;\r\n}\r\n\r\n.comments-item{\r\n  margin: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<ngl-modal [header]=\"'Post'\" [(open)]=\"opened\" [size]=\"size\">\r\n  <div body>\r\n    <p>Do you really want to publish it?</p>\r\n  </div>\r\n  <ng-template ngl-modal-footer *ngIf=\"!noFooter\">\r\n    <button class=\"slds-button slds-button--neutral\" (click)=\"cancel()\">Cancel</button>\r\n    <button class=\"slds-button slds-button--brand\" (click)=\"submitStory()\">Save</button>\r\n  </ng-template>\r\n</ngl-modal>\r\n\r\n\r\n\r\n<div class=\"col-lg-12 canvas-my-profile\">\r\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" fxLayout.xs=\"column\">\r\n    <div *ngFor=\"let column of columns; let icol = index\" fxFlex=\"50%\" fxFlex.lt-md=\"95%\">\r\n      <div *ngIf=\"icol === 0 \">\r\n        <app-card>\r\n          <app-card-body>\r\n            <form class=\"form-signin\" [formGroup]=\"profileForm\">\r\n              <textarea fxPadding fxFlex=\"100\" formControlName=\"note\" placeholder=\"Whats on your mind?\" style=\"height:109px\"></textarea>\r\n            </form>\r\n            <input style=\"display:none\" type=\"file\" placeholder=\"Upload picture\" value=\"xxx\" #fileInput (change)=\"postImage($event)\">\r\n          </app-card-body>\r\n          <app-card-actions>\r\n            <div fxLayout=\"end end\" fxLayout=\"row\" fxFlex=\"100\" style=\"text-align: right\">\r\n              <div class=\"post-icons\" fxFlex=\"85\">\r\n                <!-- <i class=\"fa fa-smile-o\"></i>\r\n                <i class=\"fa fa-map-marker\"></i>\r\n                <i class=\"fa fa-file-pdf-o\"></i> -->\r\n                <i style=\"cursor: pointer\" class=\"fa fa-picture-o\" (click)=\"fileInput.click()\"></i>\r\n              </div>\r\n              <div fxFlex>\r\n                <button type=\"submit\" (click)=\"open()\" class=\"btn btn-primary\">Post</button>\r\n              </div>\r\n            </div>\r\n          </app-card-actions>\r\n        </app-card>\r\n      </div>\r\n      <div *ngFor=\"let post of posts; let i = index\">\r\n        <div *ngIf=\"icol % 2 !== 0 && i % 2 === 0  \">\r\n          <app-post [post]=\"post\"></app-post>\r\n        </div>\r\n        <div *ngIf=\"icol % 2 === 0 && i % 2 !== 0  \">\r\n          <app-post [post]=\"post\"></app-post>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/modules/profile/profile_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_service__ = __webpack_require__("../../../../../src/app/modules/profile/social.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_profile_file_system_resource_service__ = __webpack_require__("../../../../../src/app/modules/profile/file-system-resource.service.ts");
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
    function MyProfileComponent(profileService, fb, fileSystemResourceService, socialService) {
        this.profileService = profileService;
        this.fb = fb;
        this.fileSystemResourceService = fileSystemResourceService;
        this.socialService = socialService;
        this.alive = true;
        this.opened = false;
        this.openedShare = false;
        this.columns = [{}, {}];
        this.profileForm = fb.group({
            'note': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(500)])],
        });
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.getTimeline();
    };
    MyProfileComponent.prototype.saveStory = function () {
        var _this = this;
        console.log("this.profileForm.value", this.profileForm.value);
        var reloadInfo = function () {
            _this.profileForm.patchValue({ note: "" });
            _this.profileForm.markAsPristine();
            _this.getTimeline();
            delete _this.postFile;
            _this.opened = false;
        };
        this.socialService.saveStory(this.profileForm.value.note).subscribe(function (res) {
            if (_this.postFile) {
                _this.fileSystemResourceService.postUpload(res.directoryCode, _this.postFile).subscribe(function () {
                    reloadInfo();
                });
            }
            else {
                reloadInfo();
            }
        });
    };
    MyProfileComponent.prototype.getTimeline = function () {
        var _this = this;
        this.socialService.getTimeline({
            "page": 0,
            "sortTypeId": 1,
            "pageSize": 1
        }).takeWhile(function () { return _this.alive; })
            .subscribe(function (res) {
            _this.posts = res;
            console.log("timeline>>> ", res);
        }, function (err) {
        });
    };
    MyProfileComponent.prototype.postImage = function (fileInput) {
        this.postFile = fileInput.target.files[0];
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
            template: __webpack_require__("../../../../../src/app/modules/profile/my-profile/my-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4_app_modules_profile_file_system_resource_service__["a" /* FileSystemResourceService */],
            __WEBPACK_IMPORTED_MODULE_2__social_service__["a" /* SocialService */]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-sales/my-sales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.canvas-my-sales{\r\n  background-color: #f5f5f5;\r\n  padding-top: 20px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n.list-sales-user{\r\n  color: #b9b9b9;\r\n  font-size: 13px;\r\n}\r\n.list-sales-user li{\r\n  display: inline-block;\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 20px;\r\n}\r\n.border-bottom-whitout{\r\n  border-bottom: 0px !important;\r\n}\r\n.list-sales-user li button{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.list-sales-user li h1{\r\n  font-size: 16px;\r\n  color: #348a41;\r\n}\r\n.status-title{\r\n  font-size: 13px;\r\n  padding-left: 0px;\r\n  color: #b9b9b9;\r\n}\r\n.status-title span{\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n.status-date{\r\n  padding-left: 50px;\r\n}\r\n.head-item-sale-user{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 10px;\r\n}\r\n.head-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 14px !important;\r\n}\r\n.head-item-sale-user h2{\r\n  color: #348a41;\r\n  font-size: 16px;\r\n  border-bottom: 0px;\r\n  padding-top: 40px;\r\n}\r\n.head-item-sale-user p{\r\n  color: #000;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n.banner-sales{\r\n  background-image: url(\"/assets/images/panda-lady.png\");\r\n     background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-color: #343434;\r\n    background-position: right 60px bottom;\r\n    height: 500px;\r\n    margin-top: 10%;\r\n}\r\n.feedback-item-sale-user{\r\n  padding-bottom: 20px;\r\n}\r\n.feedback-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 16px;\r\n}\r\n.body-feedback-item-user{\r\n  border: 1px solid #b9b9b9;\r\n}\r\n.body-feedback-item-user h2{\r\n  border-bottom: 0;\r\n}\r\n.feedback-ec-start{\r\n  padding-top: 20px;\r\n}\r\n.ec-stars-wrapper {\r\n  /* Espacio entre los inline-block (los hijos, los `a`) \r\n     http://ksesocss.blogspot.com/2012/03/display-inline-block-y-sus-empeno-en.html */\r\n  font-size: 0;\r\n  /* Podríamos quitarlo, \r\n    pero de esta manera (siempre que no le demos padding), \r\n    sólo aplicará la regla .ec-stars-wrapper:hover a cuando\r\n    también se esté haciendo hover a alguna estrella */\r\n  display: inline-block;\r\n}\r\n.ec-stars-wrapper a {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  /* Volver a dar tamaño al texto */\r\n  font-size: 32px;\r\n  font-size: 2rem;\r\n  \r\n  color: #888;\r\n  cursor: pointer;\r\n}\r\n\r\n.ec-stars-wrapper:hover a {\r\n  color: #348a41;\r\n}\r\n/*\r\n * El selector de hijo, es necesario para aumentar la especifidad\r\n */\r\n.ec-stars-wrapper > a:hover ~ a {\r\n  color: #888;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-sales/my-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 canvas-my-sales\">\r\n\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 comments-user\">\r\n\t\t<ul class=\"list-sales-user\">\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-bottom-whitout\"><button type=\"submit\" class=\"btn btn-primary\">Go to your items for sale at the Panda store</button><br/></li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Edit</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 feedback-item-sale-user\">\r\n\t\t\t\t\t\t<h1>SELLER FEEDBACK</h1>\r\n\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 body-feedback-item-user\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<h2>Mark Luthar</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 feedback-ec-start\">\r\n\t\t\t\t\t\t\t\t<div class=\"ec-stars-wrapper\">\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"1\" title=\"Votar con 1 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"2\" title=\"Votar con 2 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"3\" title=\"Votar con 3 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"4\" title=\"Votar con 4 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"5\" title=\"Votar con 5 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Item No. 123456</h1>\r\n\t\t\t\t<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 status-title status-date\">Date:<span>09-05-2017</span>|Present</div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-item-sale-user\">\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/team/user2.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Item name</h1>\r\n\t\t\t\t\t\t\t<p>Tobaco free Hookah</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Price</h1>\r\n\t\t\t\t\t\t\t<p>12.50</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12\">\r\n\t\t\t\t\t\t\t<h1>Quality</h1>\r\n\t\t\t\t\t\t\t<p>2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<h2>in stock</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 feedback-item-sale-user\">\r\n\t\t\t\t\t\t<h1>SELLER FEEDBACK</h1>\r\n\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 body-feedback-item-user\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<h2>Mark Luthar</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 feedback-ec-start\">\r\n\t\t\t\t\t\t\t\t<div class=\"ec-stars-wrapper\">\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"1\" title=\"Votar con 1 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"2\" title=\"Votar con 2 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"3\" title=\"Votar con 3 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"4\" title=\"Votar con 4 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t\t<a data-value=\"5\" title=\"Votar con 5 estrellas\">&#9733;</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>                                      \r\n</div>                                      \r\n\t<div class=\"col-xl-3 col-lg-3 hidden-xs\">\r\n\t\t<div class=\"col-xl-12 col-lg-12 hidden-xs-down banner-sales\"></div>\r\n\r\n\t</div>                                      "

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-sales/my-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_voucher_voucher_service__ = __webpack_require__("../../../../../src/app/common/voucher/voucher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySalesComponent = (function () {
    function MySalesComponent(voucherService) {
        this.voucherService = voucherService;
        this.alive = true;
    }
    MySalesComponent.prototype.ngOnInit = function () {
    };
    MySalesComponent.prototype.getSales = function () {
        var _this = this;
        this.voucherService.getSales()
            .takeWhile(function () { return _this.alive; })
            .subscribe(function () {
        });
    };
    MySalesComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MySalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-sales',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-sales/my-sales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-sales/my-sales.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_voucher_voucher_service__["a" /* VoucherService */]])
    ], MySalesComponent);
    return MySalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-shadow-box{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.5);\r\n\tmargin-bottom:20px;\r\n  background-color: #fff;  /* Chrome 1-25, Safari 3.2+ */  /* Firefox 4-15 */  /* Opera 10.50�12.00 */\r\n    transition: all 0.5s ease-out;  /* Chrome 26, Firefox 16+, IE 10+, Opera 12.10+ */\r\n}\r\n.show-shadow-box:hover{\r\n\tbox-shadow: 0 20px 22px #888;\r\n}\r\n.box-payment{\r\n  min-height: 220px;\r\n}\r\n.head-subscription{\r\n  color: black;\r\n  font-size: 13px;\r\n\r\n}\r\n.head-subscription h1{\r\n  color: black;\r\n  font-size: 18px;\r\n}\r\n.head-subscription h2{\r\n  color: #348a41;\r\n  font-size: 13px;\r\n  border-bottom: 0px;\r\n}\r\n.head-subscription span{\r\n  color: black;\r\n}\r\n.title-span{\r\n  color: #348a41 !important;\r\n}\r\n.canvas-my-sales{\r\n  background-color: #f5f5f5;\r\n  padding-top: 20px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.comments-user{\r\n  min-height: 215px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n.list-news-user li{\r\n  display: inline-block;\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid #b9b9b9;\r\n}\r\n.border-bottom-whitout{\r\n  border-bottom: 0px !important;\r\n}\r\n.list-news-user{\r\n  color: #b9b9b9;\r\n  font-size: 13px;\r\n}\r\n.list-news-user li button{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.list-news-user li h1{\r\n  font-size: 16px;\r\n  color: #348a41;\r\n}\r\n.list-news-user li h2{\r\n  font-size: 14px;\r\n  color: black;\r\n  border-bottom: 0px;\r\n} \r\n.status-title{\r\n  font-size: 13px;\r\n  padding-left: 0px;\r\n  color: #b9b9b9;\r\n}\r\n.status-title span{\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n.status-date{\r\n  padding-left: 50px;\r\n}\r\n.head-item-sale-user{\r\n  border-bottom: 1px solid #b9b9b9;\r\n  padding-bottom: 10px;\r\n}\r\n.head-item-sale-user h1{\r\n  color: #b9b9b9 !important;\r\n  font-size: 14px !important;\r\n}\r\n.head-item-sale-user h2{\r\n  color: #348a41;\r\n  font-size: 16px;\r\n  border-bottom: 0px;\r\n  padding-top: 40px;\r\n}\r\n.head-item-sale-user p{\r\n  color: #000;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n.banner-sales{\r\n  background-image: url(\"/assets/images/panda-lady.png\");\r\n     background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    background-color: #343434;\r\n    background-position: right 60px bottom;\r\n    height: 500px;\r\n    margin-top: 10%;\r\n}\r\n.banner-head{\r\n  background-color: #f5f5f5;\r\n}\r\n.save-subscription{\r\n  background-color: #f5f5f5;\r\n  padding-bottom: 20px;\r\n}\r\n.canvas-my-subscription{\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  background-color: #f5f5f5;\r\n}\r\n.canvas-my-subscription a{\r\n  border: 1px solid #b9b9b9;\r\n  padding: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 canvas-my-subscription\">\r\n<div class=\"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 canvas-my-sales\">\r\n\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 comments-user\">\r\n\t\t<div id=\"cbp-vm\" class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 head-subscription\">\r\n\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>My Subscriptions</h1>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11\">\r\n\t\t\t\t\tSelect all subscriptions\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ul class=\"list-news-user\">\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Newsletter A</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<h2>Heading</h2>\r\n\t\t\t\t\t<p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Stop subsciption</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Newsletter B</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<h2>Heading</h2>\r\n\t\t\t\t\t<p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Stop subsciption</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Newsletter C</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 status-title\">STATUS: <span>Stopped</span></div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<h2>Heading</h2>\r\n\t\t\t\t\t<p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Stop subsciption</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Newsletter D</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 status-title\">STATUS: <span>Activo</span></div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<h2>Heading</h2>\r\n\t\t\t\t\t<p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Stop subsciption</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t<h1>Newsletter E</h1>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 status-title\">STATUS: <span>Stopped</span></div>\r\n\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 show-shadow-box\">\r\n\t\t\t\t\t<h2>Heading</h2>\r\n\t\t\t\t\t<p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<a><i class=\"fa fa-check\"></i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-6\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Stop subsciption</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>                                      \r\n</div>                                      \r\n<div class=\"col-xl-3 col-lg-3 hidden-xs banner-head\">\r\n\t<div class=\"col-xl-12 col-lg-12 hidden-xs-down banner-sales\"></div>\r\n\r\n</div> \r\n<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 save-subscription\" align=\"center\">\r\n\t<button class=\"btn btn-primary\">Save Subsciption</button>\r\n</div>                                     \r\n</div> "

/***/ }),

/***/ "../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySubscriptionsComponent; });
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

var MySubscriptionsComponent = (function () {
    function MySubscriptionsComponent() {
    }
    MySubscriptionsComponent.prototype.ngOnInit = function () {
    };
    MySubscriptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-subscriptions',
            template: __webpack_require__("../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MySubscriptionsComponent);
    return MySubscriptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_profile_main_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/main-profile/main-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_sales_my_sales_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-sales/my-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_media_my_media_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/my-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_subscriptions_my_subscriptions_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_friends_my_friends_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-friends/my-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_media_photo_photo_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_media_video_video_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var profileRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_profile_main_profile_component__["a" /* MainProfileComponent */], children: [
            {
                path: '', redirectTo: 'edit-profile', pathMatch: 'full',
            },
            {
                path: 'my-profile', component: __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile_component__["a" /* MyProfileComponent */]
            },
            {
                path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                data: { isAuth: true },
                canActivate: [__WEBPACK_IMPORTED_MODULE_12__common_auth__["a" /* AuthGuard */]]
            },
            {
                path: 'my-sales', component: __WEBPACK_IMPORTED_MODULE_5__my_sales_my_sales_component__["a" /* MySalesComponent */]
            },
            {
                path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__my_orders_my_orders_component__["a" /* MyOrdersComponent */]
            },
            {
                path: 'media', component: __WEBPACK_IMPORTED_MODULE_7__my_media_my_media_component__["a" /* MyMediaComponent */], children: [
                    {
                        path: '', redirectTo: 'photos', pathMatch: 'full'
                    },
                    {
                        path: 'photos', component: __WEBPACK_IMPORTED_MODULE_10__my_media_photo_photo_component__["a" /* PhotoComponent */]
                    },
                    {
                        path: 'videos', component: __WEBPACK_IMPORTED_MODULE_11__my_media_video_video_component__["a" /* VideoComponent */]
                    }
                ]
            },
            {
                path: 'subscriptions', component: __WEBPACK_IMPORTED_MODULE_8__my_subscriptions_my_subscriptions_component__["a" /* MySubscriptionsComponent */]
            },
            {
                path: 'friends', component: __WEBPACK_IMPORTED_MODULE_9__my_friends_my_friends_component__["a" /* MyFriendsComponent */]
            }
        ]
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(profileRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__ = __webpack_require__("../../../../../src/app/modules/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_profile_main_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/main-profile/main-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-profile/my-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_sales_my_sales_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-sales/my-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_media_my_media_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/my-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_subscriptions_my_subscriptions_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-subscriptions/my-subscriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_friends_my_friends_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-friends/my-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_media_photo_photo_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_media_video_video_component__ = __webpack_require__("../../../../../src/app/modules/profile/my-media/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_service__ = __webpack_require__("../../../../../src/app/modules/profile/profile_service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__social_service__ = __webpack_require__("../../../../../src/app/modules/profile/social.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__file_system_resource_service__ = __webpack_require__("../../../../../src/app/modules/profile/file-system-resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/modules/profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_auth__ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_voucher__ = __webpack_require__("../../../../../src/app/common/voucher/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_components_post__ = __webpack_require__("../../../../../src/app/common/components/post/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_components_card__ = __webpack_require__("../../../../../src/app/common/components/card/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__slider__ = __webpack_require__("../../../../../src/app/modules/slider/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_17__common_api__["b" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_19__common_voucher__["a" /* VoucherModule */],
                __WEBPACK_IMPORTED_MODULE_21__common_components_card__["a" /* CardModule */],
                __WEBPACK_IMPORTED_MODULE_18__common_auth__["b" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_24_ng_lightning_ng_lightning__["a" /* NglModule */],
                __WEBPACK_IMPORTED_MODULE_20__common_components_post__["a" /* PostModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["c" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["a" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_23__slider__["a" /* SliderModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_14__social_service__["a" /* SocialService */], __WEBPACK_IMPORTED_MODULE_15__file_system_resource_service__["a" /* FileSystemResourceService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__main_profile_main_profile_component__["a" /* MainProfileComponent */], __WEBPACK_IMPORTED_MODULE_16__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile_component__["a" /* MyProfileComponent */], __WEBPACK_IMPORTED_MODULE_6__my_sales_my_sales_component__["a" /* MySalesComponent */], __WEBPACK_IMPORTED_MODULE_7__my_orders_my_orders_component__["a" /* MyOrdersComponent */], __WEBPACK_IMPORTED_MODULE_8__my_media_my_media_component__["a" /* MyMediaComponent */], __WEBPACK_IMPORTED_MODULE_9__my_subscriptions_my_subscriptions_component__["a" /* MySubscriptionsComponent */], __WEBPACK_IMPORTED_MODULE_10__my_friends_my_friends_component__["a" /* MyFriendsComponent */], __WEBPACK_IMPORTED_MODULE_11__my_media_photo_photo_component__["a" /* PhotoComponent */], __WEBPACK_IMPORTED_MODULE_12__my_media_video_video_component__["a" /* VideoComponent */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/profile_service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
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



var ProfileService = (function () {
    function ProfileService(apiBuilder, authService) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.requestContact = apiBuilder.defaultOptions()
            .path("profile/")
            .build();
    }
    ProfileService.prototype.loadNotes = function () {
        return this.requestContact.post("notes");
    };
    ProfileService.prototype.submitNote = function (note) {
        return this.requestContact.post("notes", { note: note });
    };
    ProfileService.prototype.loadPosts = function () {
        return this.requestContact.post("posts");
    };
    ProfileService.prototype.loadComments = function (postId) {
        return this.requestContact.post("posts", { postId: postId });
    };
    ProfileService.prototype.likePost = function (post) {
        return this.requestContact.post("notes", { post: post });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__common_api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_1__common_auth___["c" /* AuthService */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/profile/social.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_api__ = __webpack_require__("../../../../../src/app/common/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_auth___ = __webpack_require__("../../../../../src/app/common/auth/index.ts");
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



var SocialService = (function () {
    function SocialService(apiBuilder, authService) {
        this.apiBuilder = apiBuilder;
        this.authService = authService;
        this.requestContact = apiBuilder.defaultOptions()
            .path("social/")
            .build();
    }
    SocialService.prototype.getTimeline = function (data) {
        return this.requestContact.post("timeline.s", data);
    };
    SocialService.prototype.saveStory = function (description) {
        return this.requestContact.post("story/save.s", {
            "storyTypeCode": "R",
            "name": "4",
            "externalLink": "4",
            "latitude": 2927391273,
            "longitude": "4333333",
            "description": description,
            "title": "untitled",
            "disabled": "false",
            "categoryCode": "4"
        });
    };
    SocialService.prototype.storyTypes = function () {
        return this.requestContact.post("story/types.s");
    };
    SocialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__common_api__["a" /* ApiBuilder */], __WEBPACK_IMPORTED_MODULE_1__common_auth___["c" /* AuthService */]])
    ], SocialService);
    return SocialService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/background-deals-slide.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-deals-slide.70ccad3c18d4fd9848ef.png";

/***/ }),

/***/ "../../../../../src/assets/images/fondo.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fondo.bcc2dedb88694cb940f5.jpg";

/***/ }),

/***/ "../../../../rxjs/_esm5/Rx.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export operators */
/* unused harmony export Scheduler */
/* unused harmony export Symbol */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* unused harmony reexport Subject */
/* unused harmony reexport AnonymousSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Observable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_observable_bindCallback__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_observable_bindNodeCallback__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/bindNodeCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_observable_defer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_observable_fromEventPattern__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEventPattern.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_observable_generate__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/generate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_observable_if__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/if.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_observable_race__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_observable_never__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/never.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_observable_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_observable_pairs__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/pairs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_observable_range__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_observable_using__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/using.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_observable_dom_ajax__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_observable_dom_webSocket__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__add_operator_buffer__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_operator_bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_operator_bufferTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__add_operator_bufferToggle__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__add_operator_bufferWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__add_operator_combineAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__add_operator_concat__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__add_operator_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__add_operator_concatMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__add_operator_count__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__add_operator_dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/dematerialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__add_operator_debounce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__add_operator_defaultIfEmpty__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/defaultIfEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__add_operator_delayWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delayWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__add_operator_distinct__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__add_operator_distinctUntilKeyChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilKeyChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__add_operator_exhaust__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/exhaust.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__add_operator_exhaustMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__add_operator_expand__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/expand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__add_operator_elementAt__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/elementAt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__add_operator_find__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__add_operator_findIndex__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__add_operator_groupBy__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__add_operator_ignoreElements__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__add_operator_isEmpty__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/isEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__add_operator_audit__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__add_operator_auditTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__add_operator_last__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__add_operator_let__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__add_operator_every__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__add_operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__add_operator_materialize__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__add_operator_max__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__add_operator_mergeAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__add_operator_mergeMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__add_operator_mergeScan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeScan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__add_operator_min__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__add_operator_multicast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/multicast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__add_operator_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__add_operator_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__add_operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__add_operator_partition__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__add_operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__add_operator_publish__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__add_operator_publishBehavior__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publishBehavior.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__add_operator_publishLast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publishLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__add_operator_race__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__add_operator_reduce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__add_operator_repeat__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__add_operator_repeatWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/repeatWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__add_operator_sample__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__add_operator_sampleTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/sampleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__add_operator_sequenceEqual__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/sequenceEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__add_operator_shareReplay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__add_operator_single__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__add_operator_skip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__add_operator_skipLast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__add_operator_skipUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__add_operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__add_operator_subscribeOn__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/subscribeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__add_operator_switch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__add_operator_switchMapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__add_operator_takeLast__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__add_operator_throttle__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__add_operator_throttleTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__add_operator_timeInterval__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/timeInterval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__add_operator_timeout__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__add_operator_timeoutWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__add_operator_timestamp__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/timestamp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__add_operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__add_operator_window__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__add_operator_windowCount__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__add_operator_windowTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__add_operator_windowToggle__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__add_operator_windowWhen__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/windowWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__add_operator_zip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__add_operator_zipAll__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/zipAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* unused harmony reexport Subscription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* unused harmony reexport Subscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/* unused harmony reexport AsyncSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* unused harmony reexport ReplaySubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* unused harmony reexport BehaviorSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__observable_ConnectableObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ConnectableObservable.js");
/* unused harmony reexport ConnectableObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__Notification__ = __webpack_require__("../../../../rxjs/_esm5/Notification.js");
/* unused harmony reexport Notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__util_EmptyError__ = __webpack_require__("../../../../rxjs/_esm5/util/EmptyError.js");
/* unused harmony reexport EmptyError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__util_ArgumentOutOfRangeError__ = __webpack_require__("../../../../rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* unused harmony reexport ArgumentOutOfRangeError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__util_ObjectUnsubscribedError__ = __webpack_require__("../../../../rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* unused harmony reexport ObjectUnsubscribedError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__util_TimeoutError__ = __webpack_require__("../../../../rxjs/_esm5/util/TimeoutError.js");
/* unused harmony reexport TimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__util_UnsubscriptionError__ = __webpack_require__("../../../../rxjs/_esm5/util/UnsubscriptionError.js");
/* unused harmony reexport UnsubscriptionError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__operator_timeInterval__ = __webpack_require__("../../../../rxjs/_esm5/operator/timeInterval.js");
/* unused harmony reexport TimeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__operators_timestamp__ = __webpack_require__("../../../../rxjs/_esm5/operators/timestamp.js");
/* unused harmony reexport Timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__testing_TestScheduler__ = __webpack_require__("../../../../rxjs/_esm5/testing/TestScheduler.js");
/* unused harmony reexport TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__scheduler_VirtualTimeScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/* unused harmony reexport VirtualTimeScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/AjaxObservable.js");
/* unused harmony reexport AjaxResponse */
/* unused harmony reexport AjaxError */
/* unused harmony reexport AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__util_pipe__ = __webpack_require__("../../../../rxjs/_esm5/util/pipe.js");
/* unused harmony reexport pipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/animationFrame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/symbol/rxSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__ = __webpack_require__("../../../../rxjs/_esm5/symbol/iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__symbol_observable__ = __webpack_require__("../../../../rxjs/_esm5/symbol/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
/** PURE_IMPORTS_START ._scheduler_asap,._scheduler_async,._scheduler_queue,._scheduler_animationFrame,._symbol_rxSubscriber,._symbol_iterator,._symbol_observable,._operators PURE_IMPORTS_END */

/* tslint:enable:no-unused-variable */


































































































































/* tslint:disable:no-unused-variable */


























var operators = __WEBPACK_IMPORTED_MODULE_156__operators__;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__["a" /* asap */],
    queue: __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__["a" /* queue */],
    animationFrame: __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__["a" /* animationFrame */],
    async: __WEBPACK_IMPORTED_MODULE_150__scheduler_async__["a" /* async */]
};
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__["a" /* rxSubscriber */],
    observable: __WEBPACK_IMPORTED_MODULE_155__symbol_observable__["a" /* observable */],
    iterator: __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__["a" /* iterator */]
};

//# sourceMappingURL=Rx.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__ = __webpack_require__("../../../../rxjs/_esm5/observable/bindCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__["a" /* bindCallback */];
//# sourceMappingURL=bindCallback.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__ = __webpack_require__("../../../../rxjs/_esm5/observable/bindNodeCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindNodeCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindNodeCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__["a" /* bindNodeCallback */];
//# sourceMappingURL=bindNodeCallback.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/observable/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].combineLatest = __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].concat = __WEBPACK_IMPORTED_MODULE_1__observable_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_defer__ = __webpack_require__("../../../../rxjs/_esm5/observable/defer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_defer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].defer = __WEBPACK_IMPORTED_MODULE_1__observable_defer__["a" /* defer */];
//# sourceMappingURL=defer.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/ajax.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_ajax PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].ajax = __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__["a" /* ajax */];
//# sourceMappingURL=ajax.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/webSocket.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_webSocket PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].webSocket = __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__["a" /* webSocket */];
//# sourceMappingURL=webSocket.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_empty__ = __webpack_require__("../../../../rxjs/_esm5/observable/empty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_empty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].empty = __WEBPACK_IMPORTED_MODULE_1__observable_empty__["a" /* empty */];
//# sourceMappingURL=empty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("../../../../rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromEventPattern.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEventPattern PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEventPattern = __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__["a" /* fromEventPattern */];
//# sourceMappingURL=fromEventPattern.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromPromise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromPromise = __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__["a" /* fromPromise */];
//# sourceMappingURL=fromPromise.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_generate__ = __webpack_require__("../../../../rxjs/_esm5/observable/generate.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_generate PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].generate = __WEBPACK_IMPORTED_MODULE_1__observable_generate__["a" /* generate */];
//# sourceMappingURL=generate.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_if__ = __webpack_require__("../../../../rxjs/_esm5/observable/if.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_if PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].if = __WEBPACK_IMPORTED_MODULE_1__observable_if__["a" /* _if */];
//# sourceMappingURL=if.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_interval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].interval = __WEBPACK_IMPORTED_MODULE_1__observable_interval__["a" /* interval */];
//# sourceMappingURL=interval.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_never__ = __webpack_require__("../../../../rxjs/_esm5/observable/never.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_never PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].never = __WEBPACK_IMPORTED_MODULE_1__observable_never__["a" /* never */];
//# sourceMappingURL=never.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/observable/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_pairs__ = __webpack_require__("../../../../rxjs/_esm5/observable/pairs.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_pairs PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].pairs = __WEBPACK_IMPORTED_MODULE_1__observable_pairs__["a" /* pairs */];
//# sourceMappingURL=pairs.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("../../../../rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].race = __WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */];
//# sourceMappingURL=race.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_range__ = __webpack_require__("../../../../rxjs/_esm5/observable/range.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_range PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].range = __WEBPACK_IMPORTED_MODULE_1__observable_range__["a" /* range */];
//# sourceMappingURL=range.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_timer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].timer = __WEBPACK_IMPORTED_MODULE_1__observable_timer__["a" /* timer */];
//# sourceMappingURL=timer.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_using__ = __webpack_require__("../../../../rxjs/_esm5/observable/using.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_using PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].using = __WEBPACK_IMPORTED_MODULE_1__observable_using__["a" /* using */];
//# sourceMappingURL=using.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_zip__ = __webpack_require__("../../../../rxjs/_esm5/observable/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].zip = __WEBPACK_IMPORTED_MODULE_1__observable_zip__["a" /* zip */];
//# sourceMappingURL=zip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_audit__ = __webpack_require__("../../../../rxjs/_esm5/operator/audit.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_audit PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.audit = __WEBPACK_IMPORTED_MODULE_1__operator_audit__["a" /* audit */];
//# sourceMappingURL=audit.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/auditTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_auditTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.auditTime = __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__["a" /* auditTime */];
//# sourceMappingURL=auditTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_buffer__ = __webpack_require__("../../../../rxjs/_esm5/operator/buffer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_buffer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.buffer = __WEBPACK_IMPORTED_MODULE_1__operator_buffer__["a" /* buffer */];
//# sourceMappingURL=buffer.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/operator/bufferCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferCount = __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__["a" /* bufferCount */];
//# sourceMappingURL=bufferCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/bufferTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferTime = __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__["a" /* bufferTime */];
//# sourceMappingURL=bufferTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__ = __webpack_require__("../../../../rxjs/_esm5/operator/bufferToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferToggle = __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__["a" /* bufferToggle */];
//# sourceMappingURL=bufferToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__ = __webpack_require__("../../../../rxjs/_esm5/operator/bufferWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferWhen = __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__["a" /* bufferWhen */];
//# sourceMappingURL=bufferWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/catch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/operator/catch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_catch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
//# sourceMappingURL=catch.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__ = __webpack_require__("../../../../rxjs/_esm5/operator/combineAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineAll = __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__["a" /* combineAll */];
//# sourceMappingURL=combineAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/operator/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineLatest = __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/concatAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__ = __webpack_require__("../../../../rxjs/_esm5/operator/concatAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatAll = __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__["a" /* concatAll */];
//# sourceMappingURL=concatAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/concatMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/concatMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMap = __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__["a" /* concatMap */];
//# sourceMappingURL=concatMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operator/concatMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__["a" /* concatMapTo */];
//# sourceMappingURL=concatMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_count__ = __webpack_require__("../../../../rxjs/_esm5/operator/count.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_count PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.count = __WEBPACK_IMPORTED_MODULE_1__operator_count__["a" /* count */];
//# sourceMappingURL=count.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounce__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounce = __WEBPACK_IMPORTED_MODULE_1__operator_debounce__["a" /* debounce */];
//# sourceMappingURL=debounce.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operator/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_defaultIfEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.defaultIfEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__["a" /* defaultIfEmpty */];
//# sourceMappingURL=defaultIfEmpty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/operator/delay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delay = __WEBPACK_IMPORTED_MODULE_1__operator_delay__["a" /* delay */];
//# sourceMappingURL=delay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__ = __webpack_require__("../../../../rxjs/_esm5/operator/delayWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delayWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delayWhen = __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__["a" /* delayWhen */];
//# sourceMappingURL=delayWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/operator/dematerialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_dematerialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.dematerialize = __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__["a" /* dematerialize */];
//# sourceMappingURL=dematerialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinct__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinct.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinct PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinct = __WEBPACK_IMPORTED_MODULE_1__operator_distinct__["a" /* distinct */];
//# sourceMappingURL=distinct.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilKeyChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilKeyChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */];
//# sourceMappingURL=distinctUntilKeyChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__ = __webpack_require__("../../../../rxjs/_esm5/operator/elementAt.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_elementAt PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.elementAt = __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__["a" /* elementAt */];
//# sourceMappingURL=elementAt.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/every.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_every__ = __webpack_require__("../../../../rxjs/_esm5/operator/every.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_every PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.every = __WEBPACK_IMPORTED_MODULE_1__operator_every__["a" /* every */];
//# sourceMappingURL=every.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__ = __webpack_require__("../../../../rxjs/_esm5/operator/exhaust.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaust PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaust = __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__["a" /* exhaust */];
//# sourceMappingURL=exhaust.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/exhaustMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaustMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaustMap = __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__["a" /* exhaustMap */];
//# sourceMappingURL=exhaustMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_expand__ = __webpack_require__("../../../../rxjs/_esm5/operator/expand.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_expand PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.expand = __WEBPACK_IMPORTED_MODULE_1__operator_expand__["a" /* expand */];
//# sourceMappingURL=expand.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/operator/finally.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_finally PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
//# sourceMappingURL=finally.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_find__ = __webpack_require__("../../../../rxjs/_esm5/operator/find.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_find PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.find = __WEBPACK_IMPORTED_MODULE_1__operator_find__["a" /* find */];
//# sourceMappingURL=find.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__ = __webpack_require__("../../../../rxjs/_esm5/operator/findIndex.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_findIndex PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.findIndex = __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__["a" /* findIndex */];
//# sourceMappingURL=findIndex.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_first__ = __webpack_require__("../../../../rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.first = __WEBPACK_IMPORTED_MODULE_1__operator_first__["a" /* first */];
//# sourceMappingURL=first.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__ = __webpack_require__("../../../../rxjs/_esm5/operator/groupBy.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_groupBy PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.groupBy = __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__["a" /* groupBy */];
//# sourceMappingURL=groupBy.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__ = __webpack_require__("../../../../rxjs/_esm5/operator/ignoreElements.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_ignoreElements PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.ignoreElements = __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__["a" /* ignoreElements */];
//# sourceMappingURL=ignoreElements.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operator/isEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_isEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.isEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__["a" /* isEmpty */];
//# sourceMappingURL=isEmpty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/last.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_last__ = __webpack_require__("../../../../rxjs/_esm5/operator/last.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_last PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.last = __WEBPACK_IMPORTED_MODULE_1__operator_last__["a" /* last */];
//# sourceMappingURL=last.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_let__ = __webpack_require__("../../../../rxjs/_esm5/operator/let.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_let PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.let = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.letBind = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
//# sourceMappingURL=let.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/operator/mapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__["a" /* mapTo */];
//# sourceMappingURL=mapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_materialize__ = __webpack_require__("../../../../rxjs/_esm5/operator/materialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_materialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.materialize = __WEBPACK_IMPORTED_MODULE_1__operator_materialize__["a" /* materialize */];
//# sourceMappingURL=materialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_max__ = __webpack_require__("../../../../rxjs/_esm5/operator/max.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_max PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.max = __WEBPACK_IMPORTED_MODULE_1__operator_max__["a" /* max */];
//# sourceMappingURL=max.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeAll = __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__["a" /* mergeAll */];
//# sourceMappingURL=mergeAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
//# sourceMappingURL=mergeMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__ = __webpack_require__("../../../../rxjs/_esm5/operator/mergeScan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeScan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeScan = __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__["a" /* mergeScan */];
//# sourceMappingURL=mergeScan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_min__ = __webpack_require__("../../../../rxjs/_esm5/operator/min.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_min PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.min = __WEBPACK_IMPORTED_MODULE_1__operator_min__["a" /* min */];
//# sourceMappingURL=min.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_multicast__ = __webpack_require__("../../../../rxjs/_esm5/operator/multicast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_multicast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.multicast = __WEBPACK_IMPORTED_MODULE_1__operator_multicast__["a" /* multicast */];
//# sourceMappingURL=multicast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operator/observeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_observeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.observeOn = __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__["a" /* observeOn */];
//# sourceMappingURL=observeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/operator/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/operator/pairwise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pairwise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pairwise = __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__["a" /* pairwise */];
//# sourceMappingURL=pairwise.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_partition__ = __webpack_require__("../../../../rxjs/_esm5/operator/partition.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_partition PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.partition = __WEBPACK_IMPORTED_MODULE_1__operator_partition__["a" /* partition */];
//# sourceMappingURL=partition.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/operator/pluck.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pluck PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pluck = __WEBPACK_IMPORTED_MODULE_1__operator_pluck__["a" /* pluck */];
//# sourceMappingURL=pluck.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__ = __webpack_require__("../../../../rxjs/_esm5/operator/publishBehavior.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishBehavior PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishBehavior = __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__["a" /* publishBehavior */];
//# sourceMappingURL=publishBehavior.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__ = __webpack_require__("../../../../rxjs/_esm5/operator/publishLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishLast = __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__["a" /* publishLast */];
//# sourceMappingURL=publishLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/operator/publishReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishReplay = __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__["a" /* publishReplay */];
//# sourceMappingURL=publishReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_race__ = __webpack_require__("../../../../rxjs/_esm5/operator/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.race = __WEBPACK_IMPORTED_MODULE_1__operator_race__["a" /* race */];
//# sourceMappingURL=race.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/reduce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_reduce__ = __webpack_require__("../../../../rxjs/_esm5/operator/reduce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_reduce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.reduce = __WEBPACK_IMPORTED_MODULE_1__operator_reduce__["a" /* reduce */];
//# sourceMappingURL=reduce.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeat__ = __webpack_require__("../../../../rxjs/_esm5/operator/repeat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeat = __WEBPACK_IMPORTED_MODULE_1__operator_repeat__["a" /* repeat */];
//# sourceMappingURL=repeat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__ = __webpack_require__("../../../../rxjs/_esm5/operator/repeatWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeatWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeatWhen = __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__["a" /* repeatWhen */];
//# sourceMappingURL=repeatWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/operator/retry.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retry PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retry = __WEBPACK_IMPORTED_MODULE_1__operator_retry__["a" /* retry */];
//# sourceMappingURL=retry.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__ = __webpack_require__("../../../../rxjs/_esm5/operator/retryWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retryWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retryWhen = __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__["a" /* retryWhen */];
//# sourceMappingURL=retryWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sample__ = __webpack_require__("../../../../rxjs/_esm5/operator/sample.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sample PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sample = __WEBPACK_IMPORTED_MODULE_1__operator_sample__["a" /* sample */];
//# sourceMappingURL=sample.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/operator/scan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_scan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.scan = __WEBPACK_IMPORTED_MODULE_1__operator_scan__["a" /* scan */];
//# sourceMappingURL=scan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__ = __webpack_require__("../../../../rxjs/_esm5/operator/sequenceEqual.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sequenceEqual PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sequenceEqual = __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__["a" /* sequenceEqual */];
//# sourceMappingURL=sequenceEqual.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__ = __webpack_require__("../../../../rxjs/_esm5/operator/shareReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_shareReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.shareReplay = __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__["a" /* shareReplay */];
//# sourceMappingURL=shareReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_single__ = __webpack_require__("../../../../rxjs/_esm5/operator/single.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_single PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.single = __WEBPACK_IMPORTED_MODULE_1__operator_single__["a" /* single */];
//# sourceMappingURL=single.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__ = __webpack_require__("../../../../rxjs/_esm5/operator/skipLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipLast = __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__["a" /* skipLast */];
//# sourceMappingURL=skipLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__ = __webpack_require__("../../../../rxjs/_esm5/operator/skipUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipUntil = __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__["a" /* skipUntil */];
//# sourceMappingURL=skipUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/operator/skipWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipWhile = __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__["a" /* skipWhile */];
//# sourceMappingURL=skipWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operator/startWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_startWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.startWith = __WEBPACK_IMPORTED_MODULE_1__operator_startWith__["a" /* startWith */];
//# sourceMappingURL=startWith.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__ = __webpack_require__("../../../../rxjs/_esm5/operator/subscribeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_subscribeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.subscribeOn = __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__["a" /* subscribeOn */];
//# sourceMappingURL=subscribeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switch__ = __webpack_require__("../../../../rxjs/_esm5/operator/switch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
//# sourceMappingURL=switch.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__["a" /* switchMapTo */];
//# sourceMappingURL=switchMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__ = __webpack_require__("../../../../rxjs/_esm5/operator/takeLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeLast = __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__["a" /* takeLast */];
//# sourceMappingURL=takeLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operator/takeUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeUntil = __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__["a" /* takeUntil */];
//# sourceMappingURL=takeUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttle__ = __webpack_require__("../../../../rxjs/_esm5/operator/throttle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttle = __WEBPACK_IMPORTED_MODULE_1__operator_throttle__["a" /* throttle */];
//# sourceMappingURL=throttle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/throttleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttleTime = __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__["a" /* throttleTime */];
//# sourceMappingURL=throttleTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__ = __webpack_require__("../../../../rxjs/_esm5/operator/timeInterval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeInterval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeInterval = __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__["a" /* timeInterval */];
//# sourceMappingURL=timeInterval.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeout__ = __webpack_require__("../../../../rxjs/_esm5/operator/timeout.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeout PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeout = __WEBPACK_IMPORTED_MODULE_1__operator_timeout__["a" /* timeout */];
//# sourceMappingURL=timeout.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__ = __webpack_require__("../../../../rxjs/_esm5/operator/timeoutWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeoutWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeoutWith = __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__["a" /* timeoutWith */];
//# sourceMappingURL=timeoutWith.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__ = __webpack_require__("../../../../rxjs/_esm5/operator/timestamp.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timestamp PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timestamp = __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__["a" /* timestamp */];
//# sourceMappingURL=timestamp.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_window__ = __webpack_require__("../../../../rxjs/_esm5/operator/window.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_window PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.window = __WEBPACK_IMPORTED_MODULE_1__operator_window__["a" /* window */];
//# sourceMappingURL=window.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__ = __webpack_require__("../../../../rxjs/_esm5/operator/windowCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowCount = __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__["a" /* windowCount */];
//# sourceMappingURL=windowCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/windowTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowTime = __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__["a" /* windowTime */];
//# sourceMappingURL=windowTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__ = __webpack_require__("../../../../rxjs/_esm5/operator/windowToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowToggle = __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__["a" /* windowToggle */];
//# sourceMappingURL=windowToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__ = __webpack_require__("../../../../rxjs/_esm5/operator/windowWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowWhen = __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__["a" /* windowWhen */];
//# sourceMappingURL=windowWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/operator/withLatestFrom.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_withLatestFrom PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.withLatestFrom = __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__["a" /* withLatestFrom */];
//# sourceMappingURL=withLatestFrom.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zip__ = __webpack_require__("../../../../rxjs/_esm5/operator/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zip = __WEBPACK_IMPORTED_MODULE_1__operator_zip__["a" /* zipProto */];
//# sourceMappingURL=zip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__ = __webpack_require__("../../../../rxjs/_esm5/operator/zipAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zipAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zipAll = __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__["a" /* zipAll */];
//# sourceMappingURL=zipAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/BoundCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments, it will return an Observable. If `func` function
     * calls its callback with one argument, the Observable will emit that value.
     * If on the other hand callback is called with multiple values, resulting
     * Observable will emit an array with these arguments.
     *
     * It is very important to remember, that input function `func` is not called
     * when output function is, but rather when Observable returned by output
     * function is subscribed. This means if `func` makes AJAX request, that request
     * will be made every time someone subscribes to resulting Observable, but not before.
     *
     * Optionally, selector function can be passed to `bindObservable`. That function
     * takes the same arguments as callback, and returns value
     * that will be emitted by Observable instead of callback parameters themselves.
     * Even though by default multiple arguments passed to callback appear in the stream as array,
     * selector function will be called with arguments directly, just as callback would.
     * This means you can imagine default selector (when one is not provided explicitly)
     * as function that aggregates all its arguments into array, or simply returns first argument,
     * if there is only one.
     *
     * Last optional parameter - {@link Scheduler} - can be used to control when call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default subscription to Observable calls `func`
     * synchronously, but using `Scheduler.async` as last parameter will defer call to input function,
     * just like wrapping that call in `setTimeout` with time `0` would. So if you use async Scheduler
     * and call `subscribe` on output Observable, all function calls that are currently executing,
     * will end before `func` is invoked.
     *
     * When it comes to emitting results passed to callback, by default they are emitted
     * immediately after `func` invokes callback. In particular, if callback is called synchronously,
     * then subscription to resulting Observable will call `next` function synchronously as well.
     * If you want to defer that call, using `Scheduler.async` will, again, do the job.
     * This means that by using `Scheduler.async` you can, in a sense, ensure that `func`
     * always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that Observable created by output function will always emit only one value
     * and then complete right after. Even if `func` calls callback multiple times, values from
     * second and following calls will never appear in the stream. If you need to
     * listen for multiple calls, you probably want to use {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property), that context will be set
     * to the same context that output function has at call time. In particular, if `func`
     * is called as method of some object, in order to preserve proper behaviour,
     * it is recommended to set context of output function to that object as well,
     * provided `func` is not already bound.
     *
     * If input function calls its callback in "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions without any difference and error parameter
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive array of arguments passed to callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                    if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundNodeCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
        if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/GenerateObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state
            });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=GenerateObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/IfObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var IfSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=IfObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/IntervalObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._util_isNumeric,.._Observable,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isNumeric__["a" /* isNumeric */])(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=IntervalObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/NeverObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeverObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("../../../../rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Observable,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return NeverObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=NeverObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/PairsObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=PairsObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/RangeObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) {
            start = 0;
        }
        if (count === void 0) {
            count = 0;
        }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=RangeObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/SubscribeOnObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeOnObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/** PURE_IMPORTS_START .._Observable,.._scheduler_asap,.._util_isNumeric PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__util_isNumeric__["a" /* isNumeric */])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=SubscribeOnObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/UsingObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var UsingSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=UsingObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/BoundCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundCallbackObservable PURE_IMPORTS_END */

var bindCallback = __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__["a" /* BoundCallbackObservable */].create;
//# sourceMappingURL=bindCallback.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindNodeCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/BoundNodeCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundNodeCallbackObservable PURE_IMPORTS_END */

var bindNodeCallback = __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__["a" /* BoundNodeCallbackObservable */].create;
//# sourceMappingURL=bindNodeCallback.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/dom/AjaxObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ajaxGet */
/* unused harmony export ajaxPost */
/* unused harmony export ajaxDelete */
/* unused harmony export ajaxPut */
/* unused harmony export ajaxPatch */
/* unused harmony export ajaxGetJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxObservable; });
/* unused harmony export AjaxSubscriber */
/* unused harmony export AjaxResponse */
/* unused harmony export AjaxError */
/* unused harmony export AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._.._util_root,.._.._util_tryCatch,.._.._util_errorObject,.._.._Observable,.._.._Subscriber,.._.._operators_map PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function getCORSRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else if (!!__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) {
        headers = null;
    }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
;
var mapResponse = /*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_5__operators_map__["a" /* map */])(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(__WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && request.body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(createXHR).call(request);
        if (xhr === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async);
            }
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr, body) : Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__Subscriber__["a" /* Subscriber */]));
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
//# sourceMappingURL=AjaxObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/dom/WebSocketSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_assign__ = __webpack_require__("../../../../rxjs/_esm5/util/assign.js");
/** PURE_IMPORTS_START .._.._Subject,.._.._Subscriber,.._.._Observable,.._.._Subscription,.._.._util_root,.._.._ReplaySubject,.._.._util_tryCatch,.._.._util_errorObject,.._.._util_assign PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = __WEBPACK_IMPORTED_MODULE_4__util_root__["a" /* root */].WebSocket;
            this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                Object(__WEBPACK_IMPORTED_MODULE_8__util_assign__["a" /* assign */])(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */](function (observer) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(subMsg)();
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(messageFilter)(x);
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(unsubMsg)();
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */](function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = __WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */].create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(_this.resultSelector)(e);
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */]();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    };
    return WebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* AnonymousSubject */]));
//# sourceMappingURL=WebSocketSubject.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/AjaxObservable.js");
/** PURE_IMPORTS_START ._AjaxObservable PURE_IMPORTS_END */

var ajax = __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__["a" /* AjaxObservable */].create;
//# sourceMappingURL=ajax.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/WebSocketSubject.js");
/** PURE_IMPORTS_START ._WebSocketSubject PURE_IMPORTS_END */

var webSocket = __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__["a" /* WebSocketSubject */].create;
//# sourceMappingURL=webSocket.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/GenerateObservable.js");
/** PURE_IMPORTS_START ._GenerateObservable PURE_IMPORTS_END */

var generate = __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__["a" /* GenerateObservable */].create;
//# sourceMappingURL=generate.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _if; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IfObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IfObservable.js");
/** PURE_IMPORTS_START ._IfObservable PURE_IMPORTS_END */

var _if = __WEBPACK_IMPORTED_MODULE_0__IfObservable__["a" /* IfObservable */].create;
//# sourceMappingURL=if.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/IntervalObservable.js");
/** PURE_IMPORTS_START ._IntervalObservable PURE_IMPORTS_END */

var interval = __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__["a" /* IntervalObservable */].create;
//# sourceMappingURL=interval.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return never; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NeverObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/NeverObservable.js");
/** PURE_IMPORTS_START ._NeverObservable PURE_IMPORTS_END */

var never = __WEBPACK_IMPORTED_MODULE_0__NeverObservable__["a" /* NeverObservable */].create;
//# sourceMappingURL=never.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onErrorResumeNext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

var onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["b" /* onErrorResumeNextStatic */];
//# sourceMappingURL=onErrorResumeNext.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PairsObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/PairsObservable.js");
/** PURE_IMPORTS_START ._PairsObservable PURE_IMPORTS_END */

var pairs = __WEBPACK_IMPORTED_MODULE_0__PairsObservable__["a" /* PairsObservable */].create;
//# sourceMappingURL=pairs.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RangeObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/RangeObservable.js");
/** PURE_IMPORTS_START ._RangeObservable PURE_IMPORTS_END */

var range = __WEBPACK_IMPORTED_MODULE_0__RangeObservable__["a" /* RangeObservable */].create;
//# sourceMappingURL=range.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return using; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsingObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/UsingObservable.js");
/** PURE_IMPORTS_START ._UsingObservable PURE_IMPORTS_END */

var using = __WEBPACK_IMPORTED_MODULE_0__UsingObservable__["a" /* UsingObservable */].create;
//# sourceMappingURL=using.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("../../../../rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

var zip = __WEBPACK_IMPORTED_MODULE_0__operators_zip__["c" /* zipStatic */];
//# sourceMappingURL=zip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = audit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_audit__ = __webpack_require__("../../../../rxjs/_esm5/operators/audit.js");
/** PURE_IMPORTS_START .._operators_audit PURE_IMPORTS_END */

/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_audit__["a" /* audit */])(durationSelector)(this);
}
//# sourceMappingURL=audit.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auditTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_auditTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/auditTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_auditTime PURE_IMPORTS_END */


/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_auditTime__["a" /* auditTime */])(duration, scheduler)(this);
}
//# sourceMappingURL=auditTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buffer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_buffer__ = __webpack_require__("../../../../rxjs/_esm5/operators/buffer.js");
/** PURE_IMPORTS_START .._operators_buffer PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_buffer__["a" /* buffer */])(closingNotifier)(this);
}
//# sourceMappingURL=buffer.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferCount.js");
/** PURE_IMPORTS_START .._operators_bufferCount PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__["a" /* bufferCount */])(bufferSize, startBufferEvery)(this);
}
//# sourceMappingURL=bufferCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isScheduler,.._operators_bufferTime PURE_IMPORTS_END */



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__["a" /* bufferTime */])(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
//# sourceMappingURL=bufferTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferToggle.js");
/** PURE_IMPORTS_START .._operators_bufferToggle PURE_IMPORTS_END */

/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__["a" /* bufferToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=bufferToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferWhen.js");
/** PURE_IMPORTS_START .._operators_bufferWhen PURE_IMPORTS_END */

/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__["a" /* bufferWhen */])(closingSelector)(this);
}
//# sourceMappingURL=bufferWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/combineAll.js");
/** PURE_IMPORTS_START .._operators_combineAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_combineAll__["a" /* combineAll */])(project)(this);
}
//# sourceMappingURL=combineAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["b" /* combineLatest */].apply(void 0, observables)(this);
}
//# sourceMappingURL=combineLatest.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatMapTo.js");
/** PURE_IMPORTS_START .._operators_concatMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__["a" /* concatMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=concatMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_count__ = __webpack_require__("../../../../rxjs/_esm5/operators/count.js");
/** PURE_IMPORTS_START .._operators_count PURE_IMPORTS_END */

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_count__["a" /* count */])(predicate)(this);
}
//# sourceMappingURL=count.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_debounce__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounce.js");
/** PURE_IMPORTS_START .._operators_debounce PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_debounce__["a" /* debounce */])(durationSelector)(this);
}
//# sourceMappingURL=debounce.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultIfEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operators/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._operators_defaultIfEmpty PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__["a" /* defaultIfEmpty */])(defaultValue)(this);
}
//# sourceMappingURL=defaultIfEmpty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_delay__ = __webpack_require__("../../../../rxjs/_esm5/operators/delay.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_delay PURE_IMPORTS_END */


/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_delay__["a" /* delay */])(delay, scheduler)(this);
}
//# sourceMappingURL=delay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/delayWhen.js");
/** PURE_IMPORTS_START .._operators_delayWhen PURE_IMPORTS_END */

/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__["a" /* delayWhen */])(delayDurationSelector, subscriptionDelay)(this);
}
//# sourceMappingURL=delayWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dematerialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/operators/dematerialize.js");
/** PURE_IMPORTS_START .._operators_dematerialize PURE_IMPORTS_END */

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__["a" /* dematerialize */])()(this);
}
//# sourceMappingURL=dematerialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinct;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinct__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinct.js");
/** PURE_IMPORTS_START .._operators_distinct PURE_IMPORTS_END */

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinct__["a" /* distinct */])(keySelector, flushes)(this);
}
//# sourceMappingURL=distinct.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilKeyChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilKeyChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */])(key, compare)(this);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = elementAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_elementAt__ = __webpack_require__("../../../../rxjs/_esm5/operators/elementAt.js");
/** PURE_IMPORTS_START .._operators_elementAt PURE_IMPORTS_END */

/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_elementAt__["a" /* elementAt */])(index, defaultValue)(this);
}
//# sourceMappingURL=elementAt.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaust;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaust__ = __webpack_require__("../../../../rxjs/_esm5/operators/exhaust.js");
/** PURE_IMPORTS_START .._operators_exhaust PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaust__["a" /* exhaust */])()(this);
}
//# sourceMappingURL=exhaust.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaustMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/exhaustMap.js");
/** PURE_IMPORTS_START .._operators_exhaustMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__["a" /* exhaustMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=exhaustMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_expand__ = __webpack_require__("../../../../rxjs/_esm5/operators/expand.js");
/** PURE_IMPORTS_START .._operators_expand PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_expand__["a" /* expand */])(project, concurrent, scheduler)(this);
}
//# sourceMappingURL=expand.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _finally;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_finalize__ = __webpack_require__("../../../../rxjs/_esm5/operators/finalize.js");
/** PURE_IMPORTS_START .._operators_finalize PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_finalize__["a" /* finalize */])(callback)(this);
}
//# sourceMappingURL=finally.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("../../../../rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_find__["b" /* find */])(predicate, thisArg)(this);
}
//# sourceMappingURL=find.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_findIndex__ = __webpack_require__("../../../../rxjs/_esm5/operators/findIndex.js");
/** PURE_IMPORTS_START .._operators_findIndex PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_findIndex__["a" /* findIndex */])(predicate, thisArg)(this);
}
//# sourceMappingURL=findIndex.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_groupBy__ = __webpack_require__("../../../../rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport GroupedObservable */
/** PURE_IMPORTS_START .._operators_groupBy PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_groupBy__["a" /* groupBy */])(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
//# sourceMappingURL=groupBy.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignoreElements;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__ = __webpack_require__("../../../../rxjs/_esm5/operators/ignoreElements.js");
/** PURE_IMPORTS_START .._operators_ignoreElements PURE_IMPORTS_END */

/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__["a" /* ignoreElements */])()(this);
}
;
//# sourceMappingURL=ignoreElements.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operators/isEmpty.js");
/** PURE_IMPORTS_START .._operators_isEmpty PURE_IMPORTS_END */

/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__["a" /* isEmpty */])()(this);
}
//# sourceMappingURL=isEmpty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = letProto;
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function letProto(func) {
    return func(this);
}
//# sourceMappingURL=let.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/mapTo.js");
/** PURE_IMPORTS_START .._operators_mapTo PURE_IMPORTS_END */

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mapTo__["a" /* mapTo */])(value)(this);
}
//# sourceMappingURL=mapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = materialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_materialize__ = __webpack_require__("../../../../rxjs/_esm5/operators/materialize.js");
/** PURE_IMPORTS_START .._operators_materialize PURE_IMPORTS_END */

/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_materialize__["a" /* materialize */])()(this);
}
//# sourceMappingURL=materialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_max__ = __webpack_require__("../../../../rxjs/_esm5/operators/max.js");
/** PURE_IMPORTS_START .._operators_max PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_max__["a" /* max */])(comparer)(this);
}
//# sourceMappingURL=max.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMapTo.js");
/** PURE_IMPORTS_START .._operators_mergeMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__["a" /* mergeMapTo */])(innerObservable, resultSelector, concurrent)(this);
}
//# sourceMappingURL=mergeMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeScan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeScan.js");
/** PURE_IMPORTS_START .._operators_mergeScan PURE_IMPORTS_END */

/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__["a" /* mergeScan */])(accumulator, seed, concurrent)(this);
}
//# sourceMappingURL=mergeScan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_min__ = __webpack_require__("../../../../rxjs/_esm5/operators/min.js");
/** PURE_IMPORTS_START .._operators_min PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_min__["a" /* min */])(comparer)(this);
}
//# sourceMappingURL=min.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = multicast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._operators_multicast PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_multicast__["a" /* multicast */])(subjectOrSubjectFactory, selector)(this);
}
//# sourceMappingURL=multicast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/observeOn.js");
/** PURE_IMPORTS_START .._operators_observeOn PURE_IMPORTS_END */

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_observeOn__["b" /* observeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=observeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onErrorResumeNext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["a" /* onErrorResumeNext */].apply(void 0, nextSources)(this);
}
//# sourceMappingURL=onErrorResumeNext.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pairwise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/operators/pairwise.js");
/** PURE_IMPORTS_START .._operators_pairwise PURE_IMPORTS_END */

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_pairwise__["a" /* pairwise */])()(this);
}
//# sourceMappingURL=pairwise.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_partition__ = __webpack_require__("../../../../rxjs/_esm5/operators/partition.js");
/** PURE_IMPORTS_START .._operators_partition PURE_IMPORTS_END */

/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_partition__["a" /* partition */])(predicate, thisArg)(this);
}
//# sourceMappingURL=partition.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pluck__ = __webpack_require__("../../../../rxjs/_esm5/operators/pluck.js");
/** PURE_IMPORTS_START .._operators_pluck PURE_IMPORTS_END */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_pluck__["a" /* pluck */].apply(void 0, properties)(this);
}
//# sourceMappingURL=pluck.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishBehavior;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishBehavior.js");
/** PURE_IMPORTS_START .._operators_publishBehavior PURE_IMPORTS_END */

/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__["a" /* publishBehavior */])(value)(this);
}
//# sourceMappingURL=publishBehavior.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishLast.js");
/** PURE_IMPORTS_START .._operators_publishLast PURE_IMPORTS_END */

/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishLast__["a" /* publishLast */])()(this);
}
//# sourceMappingURL=publishLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishReplay.js");
/** PURE_IMPORTS_START .._operators_publishReplay PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__["a" /* publishReplay */])(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
//# sourceMappingURL=publishReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_race__ = __webpack_require__("../../../../rxjs/_esm5/operators/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("../../../../rxjs/_esm5/observable/race.js");
/* unused harmony reexport raceStatic */
/** PURE_IMPORTS_START .._operators_race PURE_IMPORTS_END */

// NOTE: to support backwards compatability with 5.4.* and lower

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_race__["a" /* race */].apply(void 0, observables)(this);
}
//# sourceMappingURL=race.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeat__ = __webpack_require__("../../../../rxjs/_esm5/operators/repeat.js");
/** PURE_IMPORTS_START .._operators_repeat PURE_IMPORTS_END */

/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeat__["a" /* repeat */])(count)(this);
}
//# sourceMappingURL=repeat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeatWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/repeatWhen.js");
/** PURE_IMPORTS_START .._operators_repeatWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__["a" /* repeatWhen */])(notifier)(this);
}
//# sourceMappingURL=repeatWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retry__ = __webpack_require__("../../../../rxjs/_esm5/operators/retry.js");
/** PURE_IMPORTS_START .._operators_retry PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retry__["a" /* retry */])(count)(this);
}
//# sourceMappingURL=retry.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retryWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/retryWhen.js");
/** PURE_IMPORTS_START .._operators_retryWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__["a" /* retryWhen */])(notifier)(this);
}
//# sourceMappingURL=retryWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sample;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sample__ = __webpack_require__("../../../../rxjs/_esm5/operators/sample.js");
/** PURE_IMPORTS_START .._operators_sample PURE_IMPORTS_END */

/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sample__["a" /* sample */])(notifier)(this);
}
//# sourceMappingURL=sample.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_scan__ = __webpack_require__("../../../../rxjs/_esm5/operators/scan.js");
/** PURE_IMPORTS_START .._operators_scan PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator, seed)(this);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator)(this);
}
//# sourceMappingURL=scan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequenceEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__ = __webpack_require__("../../../../rxjs/_esm5/operators/sequenceEqual.js");
/** PURE_IMPORTS_START .._operators_sequenceEqual PURE_IMPORTS_END */

/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__["a" /* sequenceEqual */])(compareTo, comparor)(this);
}
//# sourceMappingURL=sequenceEqual.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shareReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__ = __webpack_require__("../../../../rxjs/_esm5/operators/shareReplay.js");
/** PURE_IMPORTS_START .._operators_shareReplay PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__["a" /* shareReplay */])(bufferSize, windowTime, scheduler)(this);
}
;
//# sourceMappingURL=shareReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = single;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_single__ = __webpack_require__("../../../../rxjs/_esm5/operators/single.js");
/** PURE_IMPORTS_START .._operators_single PURE_IMPORTS_END */

/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_single__["a" /* single */])(predicate)(this);
}
//# sourceMappingURL=single.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipLast.js");
/** PURE_IMPORTS_START .._operators_skipLast PURE_IMPORTS_END */

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipLast__["a" /* skipLast */])(count)(this);
}
//# sourceMappingURL=skipLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipUntil.js");
/** PURE_IMPORTS_START .._operators_skipUntil PURE_IMPORTS_END */

/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__["a" /* skipUntil */])(notifier)(this);
}
//# sourceMappingURL=skipUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipWhile.js");
/** PURE_IMPORTS_START .._operators_skipWhile PURE_IMPORTS_END */

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__["a" /* skipWhile */])(predicate)(this);
}
//# sourceMappingURL=skipWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/** PURE_IMPORTS_START .._operators_startWith PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_startWith__["a" /* startWith */].apply(void 0, array)(this);
}
//# sourceMappingURL=startWith.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/subscribeOn.js");
/** PURE_IMPORTS_START .._operators_subscribeOn PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__["a" /* subscribeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=subscribeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _switch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchAll.js");
/** PURE_IMPORTS_START .._operators_switchAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchAll__["a" /* switchAll */])()(this);
}
//# sourceMappingURL=switch.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMapTo.js");
/** PURE_IMPORTS_START .._operators_switchMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__["a" /* switchMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=switchMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeLast.js");
/** PURE_IMPORTS_START .._operators_takeLast PURE_IMPORTS_END */

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeLast__["a" /* takeLast */])(count)(this);
}
//# sourceMappingURL=takeLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/** PURE_IMPORTS_START .._operators_takeUntil PURE_IMPORTS_END */

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__["a" /* takeUntil */])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_throttle__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._operators_throttle PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_0__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_throttle__["b" /* throttle */])(durationSelector, config)(this);
}
//# sourceMappingURL=throttle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_throttle__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_throttle,.._operators_throttleTime PURE_IMPORTS_END */



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_1__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__["a" /* throttleTime */])(duration, scheduler, config)(this);
}
//# sourceMappingURL=throttleTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeInterval.js");
/* unused harmony reexport TimeInterval */
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeInterval PURE_IMPORTS_END */



/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__["a" /* timeInterval */])(scheduler)(this);
}
//# sourceMappingURL=timeInterval.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeout__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeout.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeout PURE_IMPORTS_END */


/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeout__["a" /* timeout */])(due, scheduler)(this);
}
//# sourceMappingURL=timeout.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeoutWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeoutWith.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeoutWith PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__["a" /* timeoutWith */])(due, withObservable, scheduler)(this);
}
//# sourceMappingURL=timeoutWith.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timestamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timestamp__ = __webpack_require__("../../../../rxjs/_esm5/operators/timestamp.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timestamp PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timestamp__["a" /* timestamp */])(scheduler)(this);
}
//# sourceMappingURL=timestamp.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = window;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_window__ = __webpack_require__("../../../../rxjs/_esm5/operators/window.js");
/** PURE_IMPORTS_START .._operators_window PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_window__["a" /* window */])(windowBoundaries)(this);
}
//# sourceMappingURL=window.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowCount__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowCount.js");
/** PURE_IMPORTS_START .._operators_windowCount PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowCount__["a" /* windowCount */])(windowSize, startWindowEvery)(this);
}
//# sourceMappingURL=windowCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_windowTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isNumeric,.._util_isScheduler,.._operators_windowTime PURE_IMPORTS_END */




function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__operators_windowTime__["a" /* windowTime */])(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
//# sourceMappingURL=windowTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowToggle.js");
/** PURE_IMPORTS_START .._operators_windowToggle PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__["a" /* windowToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=windowToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowWhen.js");
/** PURE_IMPORTS_START .._operators_windowWhen PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__["a" /* windowWhen */])(closingSelector)(this);
}
//# sourceMappingURL=windowWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withLatestFrom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/operators/withLatestFrom.js");
/** PURE_IMPORTS_START .._operators_withLatestFrom PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__["a" /* withLatestFrom */].apply(void 0, args)(this);
}
//# sourceMappingURL=withLatestFrom.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipProto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("../../../../rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_zip__["b" /* zip */].apply(void 0, observables)(this);
}
//# sourceMappingURL=zip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zipAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/zipAll.js");
/** PURE_IMPORTS_START .._operators_zipAll PURE_IMPORTS_END */

/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_zipAll__["a" /* zipAll */])(project)(this);
}
//# sourceMappingURL=zipAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/SubscribeOnObservable.js");
/** PURE_IMPORTS_START .._observable_SubscribeOnObservable PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__["a" /* SubscribeOnObservable */](source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AnimationFrameAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__ = __webpack_require__("../../../../rxjs/_esm5/util/AnimationFrame.js");
/** PURE_IMPORTS_START ._AsyncAction,.._util_AnimationFrame PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AnimationFrameAction.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AnimationFrameScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AnimationFrameScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AsapAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Immediate__ = __webpack_require__("../../../../rxjs/_esm5/util/Immediate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START .._util_Immediate,._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AsapAction.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/AsapScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsapScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AsapScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var VirtualTimeScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=VirtualTimeScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/animationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AnimationFrameAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START ._AnimationFrameAction,._AnimationFrameScheduler PURE_IMPORTS_END */


/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
var animationFrame = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__["a" /* AnimationFrameScheduler */](__WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__["a" /* AnimationFrameAction */]);
//# sourceMappingURL=animationFrame.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/asap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsapAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsapAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START ._AsapAction,._AsapScheduler PURE_IMPORTS_END */


/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
var asap = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__["a" /* AsapScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsapAction__["a" /* AsapAction */]);
//# sourceMappingURL=asap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/testing/ColdObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColdObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("../../../../rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("../../../../rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Observable,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(ColdObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=ColdObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/testing/HotObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("../../../../rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("../../../../rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(HotObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=HotObservable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/testing/SubscriptionLog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLog; });
var SubscriptionLog = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
            unsubscribedFrame = Number.POSITIVE_INFINITY;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
//# sourceMappingURL=SubscriptionLog.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/testing/SubscriptionLoggable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLoggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__ = __webpack_require__("../../../../rxjs/_esm5/testing/SubscriptionLog.js");
/** PURE_IMPORTS_START ._SubscriptionLog PURE_IMPORTS_END */

var SubscriptionLoggable = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
//# sourceMappingURL=SubscriptionLoggable.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/testing/TestScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("../../../../rxjs/_esm5/Notification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColdObservable__ = __webpack_require__("../../../../rxjs/_esm5/testing/ColdObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HotObservable__ = __webpack_require__("../../../../rxjs/_esm5/testing/HotObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__ = __webpack_require__("../../../../rxjs/_esm5/testing/SubscriptionLog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._Notification,._ColdObservable,._HotObservable,._SubscriptionLog,.._scheduler_VirtualTimeScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var defaultMaxFrame = 750;
var TestScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["a" /* VirtualAction */], defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */](messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new __WEBPACK_IMPORTED_MODULE_3__HotObservable__["a" /* HotObservable */](messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) {
            unsubscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof __WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) {
            materializeInnerObservables = false;
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */]) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(errorValue || 'error');
                    break;
                default:
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(__WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["b" /* VirtualTimeScheduler */]));
//# sourceMappingURL=TestScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/AnimationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestAnimationFrameDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var RequestAnimationFrameDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
var AnimationFrame = /*@__PURE__*/ new RequestAnimationFrameDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=AnimationFrame.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/Immediate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImmediateDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immediate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var ImmediateDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
var Immediate = /*@__PURE__*/ new ImmediateDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=Immediate.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/applyMixins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMixins;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/assign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export assignImpl */
/* unused harmony export getAssign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
var assign = /*@__PURE__*/ getAssign(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=assign.js.map 


/***/ }),

/***/ "../../../http/esm5/http.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserXhr */
/* unused harmony export JSONPBackend */
/* unused harmony export JSONPConnection */
/* unused harmony export CookieXSRFStrategy */
/* unused harmony export XHRBackend */
/* unused harmony export XHRConnection */
/* unused harmony export BaseRequestOptions */
/* unused harmony export RequestOptions */
/* unused harmony export BaseResponseOptions */
/* unused harmony export ResponseOptions */
/* unused harmony export ReadyState */
/* unused harmony export RequestMethod */
/* unused harmony export ResponseContentType */
/* unused harmony export ResponseType */
/* unused harmony export Headers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* unused harmony export Jsonp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpModule; });
/* unused harmony export JsonpModule */
/* unused harmony export Connection */
/* unused harmony export ConnectionBackend */
/* unused harmony export XSRFStrategy */
/* unused harmony export Request */
/* unused harmony export Response */
/* unused harmony export QueryEncoder */
/* unused harmony export URLSearchParams */
/* unused harmony export VERSION */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/**
 * @license Angular v5.0.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated use \@angular/common/http instead
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var RequestMethod = {
    Get: 0,
    Post: 1,
    Put: 2,
    Delete: 3,
    Options: 4,
    Head: 5,
    Patch: 6,
};
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
/** @enum {number} */
var ReadyState = {
    Unsent: 0,
    Open: 1,
    HeadersReceived: 2,
    Loading: 3,
    Done: 4,
    Cancelled: 5,
};
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
/** @enum {number} */
var ResponseType = {
    Basic: 0,
    Cors: 1,
    Default: 2,
    Error: 3,
    Opaque: 4,
};
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
/** @enum {number} */
var ContentType = {
    NONE: 0,
    JSON: 1,
    FORM: 2,
    FORM_DATA: 3,
    TEXT: 4,
    BLOB: 5,
    ARRAY_BUFFER: 6,
};
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
/** @enum {number} */
var ResponseContentType = {
    Text: 0,
    Json: 1,
    ArrayBuffer: 2,
    Blob: 3,
};
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Headers = (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var /** @type {?} */ values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = /**
     * Returns values of all headers.
     * @return {?}
     */
    function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    /**
     * Returns string of all headers.
     * @return {?}
     */
    Headers.prototype.toJSON = /**
     * Returns string of all headers.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[/** @type {?} */ ((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = /**
     * This method is not implemented.
     * @return {?}
     */
    function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var ResponseOptions = (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseResponseOptions = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * Required structure when constructing new Request();
 * @record
 */

/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated use \@angular/common/http instead
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated use \@angular/common/http instead
 */
var URLSearchParams = (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) {
                return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
            });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    function () {
        if (this._body instanceof ArrayBuffer) {
            return /** @type {?} */ (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    function () {
        if (this._body instanceof Blob) {
            return /** @type {?} */ (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated use \@angular/common/http instead
 */
var Response = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = /** @type {?} */ ((responseOptions.status));
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = /** @type {?} */ ((responseOptions.type));
        _this.url = /** @type {?} */ ((responseOptions.url));
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = /**
     * @return {?}
     */
    function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = /**
     * @param {?} id
     * @return {?}
     */
    function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    // Remove <script> element from the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPConnection = (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var /** @type {?} */ id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var /** @type {?} */ callback = _dom.requestCallback(_this._id);
            var /** @type {?} */ url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var /** @type {?} */ script = _this._script = _dom.build(url);
            var /** @type {?} */ onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var /** @type {?} */ responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var /** @type {?} */ onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPBackend = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp, },
        { type: ResponseOptions, },
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * @deprecated use \@angular/common/http instead
 */
var XHRConnection = (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (responseObserver) {
            var /** @type {?} */ _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var /** @type {?} */ onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var /** @type {?} */ status = _xhr.status === 1223 ? 204 : _xhr.status;
                var /** @type {?} */ body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var /** @type {?} */ headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var /** @type {?} */ url = getResponseURL(_xhr) || req.url;
                var /** @type {?} */ statusText = _xhr.statusText || 'OK';
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var /** @type {?} */ response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var /** @type {?} */ onError = function (err) {
                var /** @type {?} */ responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(/** @type {?} */ ((name)), values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated use \@angular/common/http instead
 */
var CookieXSRFStrategy = (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var /** @type {?} */ xsrfToken = Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["h" /* ɵgetDOM */])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated use \@angular/common/http instead
 */
var XHRBackend = (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr, },
        { type: ResponseOptions, },
        { type: XSRFStrategy, },
    ]; };
    return XHRBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var RequestOptions = (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = /**
     * @param {?=} objParams
     * @return {?}
     */
    function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseRequestOptions = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Request = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var /** @type {?} */ url = requestOptions.url;
        _this.url = /** @type {?} */ ((requestOptions.url));
        var /** @type {?} */ paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var /** @type {?} */ params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var /** @type {?} */ prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(/** @type {?} */ ((requestOptions.method)));
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = /** @type {?} */ ((requestOptions.withCredentials));
        _this.responseType = /** @type {?} */ ((requestOptions.responseType));
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['ArrayBuffer'] || noop;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return /** @type {?} */ (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return /** @type {?} */ (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Http = (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Http;
}());
/**
 * @deprecated use \@angular/common/http instead
 */
var Jsonp = (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Jsonp;
}(Http));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * @deprecated use \@angular/common/http instead
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('5.0.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ })

});
//# sourceMappingURL=common.chunk.js.map