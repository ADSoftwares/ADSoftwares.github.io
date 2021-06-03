(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-ui-module"],{

/***/ "/N7O":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/dialog/dialog.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Dialog Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                    <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n                </mat-form-field>\r\n                <p>\r\n                    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n                </p>\r\n                <p *ngIf=\"animal\" class=\"py-1\">You chose: <i>{{animal}}</i></p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "/WNp":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/buttons/buttons.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-button>Basic</button>\r\n                <button mat-button color=\"primary\">Primary</button>\r\n                <button mat-button color=\"accent\">Accent</button>\r\n                <button mat-button color=\"warn\">Warn</button>\r\n                <button mat-button disabled>Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Raised Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-raised-button class=\"m-1\">Basic</button>\r\n                <button mat-raised-button color=\"primary\" class=\"m-1\">Primary</button>\r\n                <button mat-raised-button color=\"accent\" class=\"m-1\">Accent</button>\r\n                <button mat-raised-button color=\"warn\" class=\"m-1\">Warn</button>\r\n                <button mat-raised-button disabled class=\"m-1\">Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Stroked Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-stroked-button class=\"m-1\">Basic</button>\r\n                <button mat-stroked-button color=\"primary\" class=\"m-1\">Primary</button>\r\n                <button mat-stroked-button color=\"accent\" class=\"m-1\">Accent</button>\r\n                <button mat-stroked-button color=\"warn\" class=\"m-1\">Warn</button>\r\n                <button mat-stroked-button disabled class=\"m-1\">Disabled</button> \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Flat Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-flat-button class=\"m-1\">Basic</button>\r\n                <button mat-flat-button color=\"primary\" class=\"m-1\">Primary</button>\r\n                <button mat-flat-button color=\"accent\" class=\"m-1\">Accent</button>\r\n                <button mat-flat-button color=\"warn\" class=\"m-1\">Warn</button>\r\n                <button mat-flat-button disabled class=\"m-1\">Disabled</button> \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-fab class=\"m-1\">Basic</button>\r\n                <button mat-fab color=\"primary\" class=\"m-1\">Primary</button>\r\n                <button mat-fab color=\"accent\" class=\"m-1\">Accent</button>\r\n                <button mat-fab color=\"warn\" class=\"m-1\">Warn</button>\r\n                <button mat-fab disabled class=\"m-1\">Disabled</button>\r\n                <button mat-fab class=\"m-1\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-fab routerLink=\".\" class=\"m-1\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Mini Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-mini-fab class=\"m-1\">Basic</button>\r\n                <button mat-mini-fab color=\"primary\" class=\"m-1\">Primary</button>\r\n                <button mat-mini-fab color=\"accent\" class=\"m-1\">Accent</button>\r\n                <button mat-mini-fab color=\"warn\" class=\"m-1\">Warn</button>\r\n                <button mat-mini-fab disabled class=\"m-1\">Disabled</button>\r\n                <button mat-mini-fab class=\"m-1\">\r\n                  <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-mini-fab routerLink=\".\" class=\"m-1\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Icon Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-icon-button>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"primary\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"accent\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"warn\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button disabled>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Toggle Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>\r\n                    Default appearance:\r\n                    <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n                        <mat-button-toggle value=\"left\">\r\n                                <mat-icon>format_align_left</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"center\">\r\n                            <mat-icon>format_align_center</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"right\">\r\n                            <mat-icon>format_align_right</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"justify\" disabled>\r\n                            <mat-icon>format_align_justify</mat-icon>\r\n                        </mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </p>\r\n                \r\n                <p class=\"mt-1\">\r\n                    Legacy appearance:\r\n                    <mat-button-toggle-group appearance=\"legacy\" #group=\"matButtonToggleGroup\">\r\n                        <mat-button-toggle value=\"left\">\r\n                                <mat-icon>format_align_left</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"center\">\r\n                            <mat-icon>format_align_center</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"right\">\r\n                            <mat-icon>format_align_right</mat-icon>\r\n                        </mat-button-toggle>\r\n                        <mat-button-toggle value=\"justify\" disabled>\r\n                            <mat-icon>format_align_justify</mat-icon>\r\n                        </mat-button-toggle>\r\n                    </mat-button-toggle-group>\r\n                </p>\r\n\r\n\r\n\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>");

/***/ }),

/***/ "4myI":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/tabs/tabs.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic tabs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\"><p class=\"py-1\">Vestibulum dapibus ut libero at vestibulum. Donec cursus vitae leo ut bibendum. Pellentesque ac sagittis elit. In hac habitasse platea dictumst. In sed sapien convallis, laoreet dolor at, ullamcorper eros. Vestibulum et urna vel ligula dignissim feugiat. Cras posuere eleifend nisi quis pharetra. Cras nec varius nulla. Morbi quis lacus eget tellus eleifend varius. Sed ornare imperdiet nibh, sed accumsan nisi feugiat facilisis.</p></mat-tab>\r\n                    <mat-tab label=\"Tab 2\"><p class=\"py-1\">Phasellus ac libero malesuada, hendrerit nibh sit amet, porttitor ex. Quisque nec commodo ipsum. Nam id interdum lacus, ac vulputate metus. Mauris congue, nunc in faucibus porta, leo sapien dignissim elit, ac dignissim nunc neque et arcu. Fusce facilisis finibus risus, ac pulvinar sem mattis at. Sed eu tempor justo. Duis pellentesque, leo ut euismod convallis, mi elit vulputate orci, a vestibulum orci erat at nunc. Fusce rutrum eget lacus eget malesuada.</p></mat-tab>\r\n                </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Complex Example</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <ng-template mat-tab-label>\r\n                          ⭐\r\n                        </ng-template>\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>  \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Disabled Tab\" disabled>\r\n                        <p class=\"py-1\"> No content </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <p class=\"py-1\">No content in Tab 4</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <p class=\"py-1\">No content in Tab 5</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>      \r\n</div>\r\n");

/***/ }),

/***/ "5VK+":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.ts ***!
  \***************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _raw_loader_cards_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cards.component.html */ "6qOq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CardsComponent = class CardsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
};
CardsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
CardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: _raw_loader_cards_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], CardsComponent);



/***/ }),

/***/ "6qOq":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/cards/cards.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-primary p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Primary Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/5.jpg\" alt=\"5\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" class=\"flex-p\">\r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-accent p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Accent Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/7.jpg\" alt=\"7\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-warn p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Warn Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/2.jpg\" alt=\"2\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <img mat-card-image src=\"assets/img/app/1.jpg\" alt=\"Photo 1\">\r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis optio nihil eos perferendis a ut,\r\n                   iste quae eaque distinctio voluptate officia doloremque, ab, fugiat nemo. Maiores, quasi laboriosam amet?\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Basic Card Title</mat-card-title>\r\n                <mat-card-subtitle>Subtitle</mat-card-subtitle>\r\n            </mat-card-header> \r\n            <img mat-card-image src=\"assets/img/app/6.jpg\" alt=\"Photo 6\">        \r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>                \r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n            \r\n</div>");

/***/ }),

/***/ "8cax":
/*!***********************************************************!*\
  !*** ./src/app/pages/ui/snack-bar/snack-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _raw_loader_snack_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./snack-bar.component.html */ "aqPb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SnackBarComponent = class SnackBarComponent {
    constructor(appSettings, snackBar) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.settings = this.appSettings.settings;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
SnackBarComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackBarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar',
        template: _raw_loader_snack_bar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], SnackBarComponent);



/***/ }),

/***/ "BPNP":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/tooltip/tooltip.component.ts ***!
  \*******************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _raw_loader_tooltip_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tooltip.component.html */ "MUUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TooltipComponent = class TooltipComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.position = 'before';
        this.settings = this.appSettings.settings;
    }
};
TooltipComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
TooltipComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], TooltipComponent);



/***/ }),

/***/ "BTGb":
/*!***************************************!*\
  !*** ./src/app/pages/ui/ui.module.ts ***!
  \***************************************/
/*! exports provided: routes, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/buttons.component */ "LLL5");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards/cards.component */ "5VK+");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lists/lists.component */ "J6GK");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grids/grids.component */ "TCS9");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ "aeQ2");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "gI8v");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chips/chips.component */ "hS4k");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress/progress.component */ "uDH+");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "BPNP");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/dialog.component */ "c0jm");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "8cax");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















const routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"], data: { breadcrumb: 'Cards' } },
    { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__["ListsComponent"], data: { breadcrumb: 'Lists' } },
    { path: 'grids', component: _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__["GridsComponent"], data: { breadcrumb: 'Grids' } },
    { path: 'tabs', component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"], data: { breadcrumb: 'Tabs' } },
    { path: 'expansion-panel', component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__["ExpansionPanelComponent"], data: { breadcrumb: 'Expansion Panel' } },
    { path: 'chips', component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__["ChipsComponent"], data: { breadcrumb: 'Chips' } },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"], data: { breadcrumb: 'Progress' } },
    { path: 'dialog', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"], data: { breadcrumb: 'Dialog' } },
    { path: 'tooltip', component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"], data: { breadcrumb: 'Tooltip' } },
    { path: 'snack-bar', component: _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarComponent"], data: { breadcrumb: 'Snackbar' } }
];
let UiModule = class UiModule {
};
UiModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
            _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"],
            _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__["ListsComponent"],
            _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__["GridsComponent"],
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"],
            _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__["ExpansionPanelComponent"],
            _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__["ChipsComponent"],
            _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"],
            _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewExampleDialog"],
            _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarComponent"]
        ]
    })
], UiModule);



/***/ }),

/***/ "J6GK":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/lists/lists.component.ts ***!
  \***************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lists.component.html */ "rTpH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ListsComponent = class ListsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
};
ListsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
ListsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lists',
        template: _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], ListsComponent);



/***/ }),

/***/ "LLL5":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./buttons.component.html */ "/WNp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ButtonsComponent = class ButtonsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
};
ButtonsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
ButtonsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buttons',
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], ButtonsComponent);



/***/ }),

/***/ "MUUT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/tooltip/tooltip.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Tooltip Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <div matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n                    <span class=\"m-1\">Show tooltip</span>\r\n                    <mat-form-field>\r\n                        <mat-select [(ngModel)]=\"position\">\r\n                            <mat-option value=\"before\">Before</mat-option>\r\n                            <mat-option value=\"after\">After</mat-option>\r\n                            <mat-option value=\"above\">Above</mat-option>\r\n                            <mat-option value=\"below\">Below</mat-option>\r\n                            <mat-option value=\"left\">Left</mat-option>\r\n                            <mat-option value=\"right\">Right</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "TCS9":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/grids/grids.component.ts ***!
  \***************************************************/
/*! exports provided: GridsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsComponent", function() { return GridsComponent; });
/* harmony import */ var _raw_loader_grids_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./grids.component.html */ "iUnP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let GridsComponent = class GridsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
        this.settings = this.appSettings.settings;
    }
};
GridsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
GridsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grids',
        template: _raw_loader_grids_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], GridsComponent);



/***/ }),

/***/ "XuUu":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/progress/progress.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Determinate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-progress-spinner mode=\"determinate\" value=\"65\"></mat-progress-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Indeterminate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-spinner></mat-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>     \r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress bar</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p class=\"py-1\">Determinate</p>\r\n                <mat-progress-bar value=\"65\" color=\"accent\"></mat-progress-bar>\r\n                <p class=\"py-1\">Indeterminate</p>\r\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n                <p class=\"py-1\">Buffer</p>\r\n                <mat-progress-bar mode=\"buffer\" value=\"40\" bufferValue=\"60\" color=\"warn\"></mat-progress-bar>\r\n                <p class=\"py-1\">Query</p>\r\n                <mat-progress-bar mode=\"query\" color=\"accent\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>");

/***/ }),

/***/ "aeQ2":
/*!*************************************************!*\
  !*** ./src/app/pages/ui/tabs/tabs.component.ts ***!
  \*************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./tabs.component.html */ "4myI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TabsComponent = class TabsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
};
TabsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
TabsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], TabsComponent);



/***/ }),

/***/ "aqPb":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/snack-bar/snack-bar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Snackbar Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n                </mat-form-field>\r\n                <button mat-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "c0jm":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/dialog/dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: DialogComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog.component.html */ "/N7O");
/* harmony import */ var _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "u4qd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DialogComponent = class DialogComponent {
    constructor(appSettings, dialog) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.settings = this.appSettings.settings;
    }
    openDialog() {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
DialogComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
DialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dialog',
        template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], DialogComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: _raw_loader_dialog_overview_example_dialog_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
], DialogOverviewExampleDialog);



/***/ }),

/***/ "gI8v":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/expansion-panel/expansion-panel.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _raw_loader_expansion_panel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./expansion-panel.component.html */ "moHo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ExpansionPanelComponent = class ExpansionPanelComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.step = 0;
        this.settings = this.appSettings.settings;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
ExpansionPanelComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
ExpansionPanelComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expansion-panel',
        template: _raw_loader_expansion_panel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], ExpansionPanelComponent);



/***/ }),

/***/ "hS4k":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/chips/chips.component.ts ***!
  \***************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _raw_loader_chips_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chips.component.html */ "smVb");
/* harmony import */ var _chips_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chips.component.scss */ "lCGS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const COMMA = 188;
let ChipsComponent = class ChipsComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' }
        ];
        this.settings = this.appSettings.settings;
    }
    add(event) {
        let input = event.input;
        let value = event.value;
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    }
    remove(fruit) {
        let index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
};
ChipsComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] }
];
ChipsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chips',
        template: _raw_loader_chips_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chips_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])
], ChipsComponent);



/***/ }),

/***/ "iUnP":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/grids/grids.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 1</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 2</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 3</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 4</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 5</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 6</mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Dynamic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n                        {{tile.text}}\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>");

/***/ }),

/***/ "lCGS":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/chips/chips.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-chip {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hpcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jaGlwe1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "moHo":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/expansion-panel/expansion-panel.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic expansion panel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>Personal data</mat-panel-title>\r\n                        <mat-panel-description>Type your name and age</mat-panel-description>\r\n                    </mat-expansion-panel-header>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"First name\">\r\n                    </mat-form-field>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Age\">\r\n                    </mat-form-field>\r\n                </mat-expansion-panel>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Expansion panel as accordion</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-accordion class=\"example-headers-align\">\r\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Personal data</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"First name\">\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Destination</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type the country name<mat-icon>map</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Country\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Day of the trip</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n                        </mat-form-field>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "rTpH":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/lists/lists.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item>Item 1</mat-list-item>\r\n                    <mat-list-item>Item 2</mat-list-item>\r\n                    <mat-list-item>Item 3</mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Navigation lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-nav-list>\r\n                    <mat-list-item *ngFor=\"let link of [1,2,3]\">\r\n                        <a matLine href=\"javascript:void(0)\">Link {{ link }}</a>\r\n                        <button mat-icon-button>\r\n                            <mat-icon>info</mat-icon>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Selection lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-selection-list #shoes>\r\n                    <mat-list-option *ngFor=\"let option of [1,2,3,4]\">\r\n                      option {{option}}\r\n                    </mat-list-option>\r\n                </mat-selection-list>\r\n                <p>Options selected: {{shoes.selectedOptions.selected.length}}</p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Multi-line lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <h4>Two line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine>\r\n                          <span> Line 2 </span>\r\n                          <small> -- content </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>                \r\n                <h4>Three line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine> Line 2 </p>\r\n                        <p matLine> Line 3 </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with icons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <mat-icon matListIcon>folder</mat-icon>\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with avatars</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <img matListAvatar [src]=\"'assets/img/avatars/avatar-'+number+'.png'\" alt=\"image\">\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>               \r\n</div>");

/***/ }),

/***/ "smVb":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/chips/chips.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list>\r\n                    <mat-chip>One fish</mat-chip>\r\n                    <mat-chip>Two fish</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\">Warn fish</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Chips with input</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"w-100\">\r\n                    <mat-chip-list #chipList>\r\n                      <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\r\n                              [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n                        {{fruit.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                      </mat-chip>\r\n                      <input placeholder=\"New fruit...\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                            (matChipInputTokenEnd)=\"add($event)\" />\r\n                    </mat-chip-list>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Vertical chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list class=\"mat-chip-list-stacked\" aria-orientation=\"vertical\">\r\n                    <mat-chip class=\"custom-chip\">Default chip</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"custom-chip\">Primary chip</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"custom-chip\">Accent chip</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\" class=\"custom-chip\">Warn chip</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>");

/***/ }),

/***/ "u4qd":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ui/dialog/dialog-overview-example-dialog.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\r\n</div>");

/***/ }),

/***/ "uDH+":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui/progress/progress.component.ts ***!
  \*********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./progress.component.html */ "XuUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "/RaO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProgressComponent = class ProgressComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
};
ProgressComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
ProgressComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress',
        template: _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], ProgressComponent);



/***/ })

}]);
//# sourceMappingURL=pages-ui-ui-module-es2015.js.map