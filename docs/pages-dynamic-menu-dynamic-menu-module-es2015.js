(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dynamic-menu-dynamic-menu-module"],{

/***/ "68RZ":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-menu/dynamic-menu.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.sm=\"60\" class=\"flex-p\">\r\n        <mat-card class=\"list\">\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">      \r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Title\" formControlName=\"title\">\r\n                        <mat-error *ngIf=\"form.controls.title.errors?.required\">Menu title is required</mat-error>\r\n                        <mat-error *ngIf=\"form.controls.title.hasError('minlength')\">Menu title isn't long enough, minimum of 3 characters</mat-error>\r\n                    </mat-form-field> \r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Icon\" formControlName=\"icon\">\r\n                            <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                                <mat-icon>{{ icon }}</mat-icon>\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"RouterLink\" formControlName=\"routerLink\" matTooltip=\"e.g. /dashboard\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.routerLink.errors?.required\">Routerlink or href is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-checkbox formControlName=\"hasSubMenu\">Has sub menu</mat-checkbox>\r\n                    <mat-form-field class=\"w-100\" >\r\n                        <input matInput placeholder=\"Href\" formControlName=\"href\" matTooltip=\"e.g. http://themeseason.com\" matTooltipPosition=\"after\">\r\n                        <mat-error *ngIf=\"form.controls.href.errors?.required\">Href or routerlink is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-radio-group formControlName=\"target\">\r\n                        <mat-radio-button value=\"_blank\">_blank</mat-radio-button>\r\n                        <mat-radio-button value=\"_self\" class=\"mx-1\">_self</mat-radio-button>\r\n                    </mat-radio-group>\r\n                    <mat-form-field class=\"w-100\">\r\n                        <mat-select placeholder=\"Parent menu\" formControlName=\"parentId\">\r\n                            <mat-option value=\"0\">-- Select Parent Menu --</mat-option>\r\n                            <mat-option *ngFor=\"let menuItem of menuItems\" [value]=\"menuItem.id\">\r\n                                {{menuItem.title}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\">Add New Menu Item</button>\r\n                    </div>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n      </div> \r\n</div> ");

/***/ }),

/***/ "kXxA":
/*!**************************************************************!*\
  !*** ./src/app/pages/dynamic-menu/dynamic-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: DynamicMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMenuComponent", function() { return DynamicMenuComponent; });
/* harmony import */ var _raw_loader_dynamic_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dynamic-menu.component.html */ "68RZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/components/menu/menu.service */ "8fVf");
/* harmony import */ var _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-menu.service */ "wYKT");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/components/menu/vertical-menu/vertical-menu.component */ "XuPb");
/* harmony import */ var _theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/utils/app-animation */ "NObv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let DynamicMenuComponent = class DynamicMenuComponent {
    constructor(appSettings, formBuilder, snackBar, menuService, dynamicMenuService) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.menuService = menuService;
        this.dynamicMenuService = dynamicMenuService;
        this.icons = ['home', 'person', 'card_travel', 'delete', 'event', 'favorite', 'help'];
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'icon': null,
            'routerLink': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'href': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'target': null,
            'hasSubMenu': false,
            'parentId': 0
        });
    }
    ngAfterViewInit() {
        this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe((menu) => {
            if (menu.routerLink && menu.routerLink != '') {
                this.form.controls['href'].setValue(null);
                this.form.controls['href'].disable();
                this.form.controls['href'].clearValidators();
                this.form.controls['target'].setValue(null);
                this.form.controls['target'].disable();
            }
            else {
                this.form.controls['href'].enable();
                this.form.controls['href'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                this.form.controls['target'].enable();
            }
            this.form.controls['href'].updateValueAndValidity();
            if (menu.href && menu.href != '') {
                this.form.controls['routerLink'].setValue(null);
                this.form.controls['routerLink'].disable();
                this.form.controls['routerLink'].clearValidators();
                this.form.controls['hasSubMenu'].setValue(false);
                this.form.controls['hasSubMenu'].disable();
            }
            else {
                this.form.controls['routerLink'].enable();
                this.form.controls['routerLink'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                this.form.controls['hasSubMenu'].enable();
            }
            this.form.controls['routerLink'].updateValueAndValidity();
        });
    }
    onSubmit(menu) {
        if (this.form.valid) {
            this.dynamicMenuService.addNewMenuItem(_theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_8__["VerticalMenuComponent"], this.menuItems, menu);
            this.snackBar.open('New menu item added successfully!', null, {
                duration: 2000,
            });
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
        }
    }
};
DynamicMenuComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_6__["DynamicMenuService"] }
];
DynamicMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-menu',
        template: _raw_loader_dynamic_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_dynamic_menu_service__WEBPACK_IMPORTED_MODULE_6__["DynamicMenuService"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
        animations: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_9__["listTransition"]],
        host: {
            '[@listTransition]': ''
        }
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
        _dynamic_menu_service__WEBPACK_IMPORTED_MODULE_6__["DynamicMenuService"]])
], DynamicMenuComponent);



/***/ }),

/***/ "wYKT":
/*!************************************************************!*\
  !*** ./src/app/pages/dynamic-menu/dynamic-menu.service.ts ***!
  \************************************************************/
/*! exports provided: DynamicMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMenuService", function() { return DynamicMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _theme_components_menu_menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/components/menu/menu.model */ "ySTs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DynamicMenuService = class DynamicMenuService {
    constructor(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
    }
    addNewMenuItem(component, menuItems, menuItem) {
        const lastId = menuItems[menuItems.length - 1].id;
        const newMenuItem = new _theme_components_menu_menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](lastId + 1, menuItem['title'], menuItem['routerLink'], menuItem['href'], menuItem['icon'], menuItem['target'], menuItem['hasSubMenu'], parseInt(menuItem['parentId']));
        menuItems.push(newMenuItem);
        let item = menuItems.filter(item => item.id == newMenuItem.parentId)[0];
        if (item)
            item.hasSubMenu = true;
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        let instance = componentRef.instance;
        instance.menuItems = menuItems;
        instance.menuParentId = 0;
        const elem = componentRef.hostView.rootNodes[0];
        const verticalMenu = document.getElementById('vertical-menu');
        verticalMenu.replaceChild(elem, verticalMenu.children[0]);
    }
};
DynamicMenuService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
DynamicMenuService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
], DynamicMenuService);



/***/ }),

/***/ "yqEH":
/*!***********************************************************!*\
  !*** ./src/app/pages/dynamic-menu/dynamic-menu.module.ts ***!
  \***********************************************************/
/*! exports provided: routes, DynamicMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMenuModule", function() { return DynamicMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-menu.component */ "kXxA");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuComponent"], pathMatch: 'full' }
];
let DynamicMenuModule = class DynamicMenuModule {
};
DynamicMenuModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _dynamic_menu_component__WEBPACK_IMPORTED_MODULE_5__["DynamicMenuComponent"]
        ]
    })
], DynamicMenuModule);



/***/ })

}]);
//# sourceMappingURL=pages-dynamic-menu-dynamic-menu-module-es2015.js.map