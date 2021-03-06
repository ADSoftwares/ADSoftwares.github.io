(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "VAss");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let LoginComponent = class LoginComponent {
    constructor(appSettings, fb, router) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
        });
    }
    onSubmit(values) {
        if (this.form.valid) {
            this.router.navigate(['/']);
        }
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: routes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "D8EZ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' }
];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n       <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\" (click)=\"onSubmit(form.value);\">\r\n                        <mat-icon>exit_to_app</mat-icon>\r\n                    </button>\r\n                    <a mat-button routerLink=\"/register\">Don't have an account? Sign up now!</a>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header\">member login</span>  \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                            <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n                            <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                        </mat-form-field> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\">SIGN IN</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n        </form>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>");

/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map