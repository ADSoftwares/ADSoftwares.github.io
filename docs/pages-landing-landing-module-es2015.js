(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "CXjK":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "fsYz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' }
];
let LandingModule = class LandingModule {
};
LandingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        declarations: [
            _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
        ]
    })
], LandingModule);



/***/ }),

/***/ "HLb/":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing-header {\n  position: relative;\n  color: #fff;\n  height: 520px;\n  text-align: center;\n}\n.landing-header:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 520px;\n  background-color: #242424;\n  background-image: url('header.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: center;\n  z-index: -1;\n}\n.landing-header p {\n  margin-bottom: 1rem;\n}\n.landing-header .logo {\n  font-size: 48px;\n}\n.landing-header .intro-text {\n  font-size: 36px;\n}\n.landing-header .desc {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: 0.03rem;\n}\n.landing-header .mat-raised-button {\n  margin: 0 14px;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 32px;\n  text-align: center;\n}\n.container h2 {\n  font-size: 2rem;\n}\n.container .desc {\n  font-size: 1.25rem;\n}\n.container .demo {\n  padding: 16px;\n}\n.container .demo .text {\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.container .demo .link {\n  display: block;\n}\n.container .demo .link img {\n  width: 100%;\n  box-shadow: 0px 1px 5px 1px #999;\n  transition: 0.2s;\n}\n.container .demo .link img:hover {\n  box-shadow: 0px 1px 5px 5px #999;\n}\n.landing-footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px;\n}\n@media (max-width: 767px) {\n  .landing-header .logo {\n    font-size: 36px;\n  }\n  .landing-header .intro-text {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHWjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBRlk7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUloQjtBQUhnQjtFQUNJLGdDQUFBO0FBS3BCO0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUVPO0lBQ0ssZUFBQTtFQUFWO0VBRU07SUFDSSxlQUFBO0VBQVY7QUFDRiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbGFuZGluZy9oZWFkZXIuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ297IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmludHJvLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XHJcbiAgICB9XHJcbiAgICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAwIDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5kZXNje1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICAgIC5kZW1ve1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDFweCAjOTk5O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCA1cHggIzk5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxhbmRpbmctZm9vdGVye1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgLmxhbmRpbmctaGVhZGVye1xyXG4gICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmludHJvLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "JqLZ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"landing-header\"> \r\n  <p class=\"logo\">GRADUS</p>\r\n  <p class=\"intro-text\">Angular 11 Material Design Admin Template</p>            \r\n  <p class=\"desc m-0\">Start creating your app with GRADUS template</p>\r\n  <p class=\"desc\"> 8 layouts, 6 color styles, 35+ pages</p>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n     <button mat-raised-button color=\"primary\" (click)=\"scrollToDemos()\">View demos</button>\r\n     <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729\" target=\"blank\">Purchase now</a>\r\n  </div> \r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"muted-text\">Check out our demo styles</h2>\r\n  <p class=\"muted-text desc\">Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-default.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-compact.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-compact.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-mini.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-mini.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-rtl.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-rtl.jpg\">        \r\n        </a>\r\n    </div>\r\n  </div> \r\n  <h2 class=\"muted-text\">Skins</h2> \r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('indigo-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('teal-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/teal-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('red-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/red-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('blue-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/blue-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('green-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/green-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('pink-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/pink-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n  </div>     \r\n</div>\r\n\r\n<div class=\"bg-primary w-100\">\r\n  <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"landing-footer\">\r\n    <span>Copyright ©2018 All Rights Reserved</span>\r\n    <span>made by <a mat-button href=\"https://themeforest.net/user/theme_season/portfolio\" target=\"blank\">ThemeSeason</a></span>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "fsYz":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "JqLZ");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "HLb/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LandingComponent = class LandingComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.settings.rtl = false;
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
    scrollToDemos() {
        setTimeout(() => { window.scrollTo(0, 520); });
    }
    changeLayout(menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
};
LandingComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] }
];
LandingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])
], LandingComponent);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map