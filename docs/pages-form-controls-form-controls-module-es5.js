(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-controls-form-controls-module"], {
    /***/
    "+7Au":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/slide-toggle/slide-toggle.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Au(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slide-toggle configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <label>Color:</label>\r\n                    <mat-radio-group [(ngModel)]=\"color\">\r\n                        <mat-radio-button value=\"primary\" class=\"mx-1\">Primary</mat-radio-button>\r\n                        <mat-radio-button value=\"accent\" class=\"mx-1\">Accent</mat-radio-button>\r\n                        <mat-radio-button value=\"warn\" class=\"mx-1\">Warn</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n                </section>\r\n\r\n                <hr>\r\n\r\n                <h2 class=\"py-1\">Result</h2>\r\n\r\n                <mat-slide-toggle\r\n                    [color]=\"color\"\r\n                    [checked]=\"checked\"\r\n                    [disabled]=\"disabled\">\r\n                  Slide me!\r\n                </mat-slide-toggle>\r\n                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "1oro":
    /*!********************************************************************!*\
      !*** ./src/app/pages/form-controls/checkbox/checkbox.component.ts ***!
      \********************************************************************/

    /*! exports provided: CheckboxComponent */

    /***/
    function oro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
        return CheckboxComponent;
      });
      /* harmony import */


      var _raw_loader_checkbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./checkbox.component.html */
      "sphO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CheckboxComponent = function CheckboxComponent(appSettings) {
        _classCallCheck(this, CheckboxComponent);

        this.appSettings = appSettings;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.settings = this.appSettings.settings;
      };

      CheckboxComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
        }];
      };

      CheckboxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkbox',
        template: _raw_loader_checkbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], CheckboxComponent);
      /***/
    },

    /***/
    "1yv+":
    /*!****************************************************************!*\
      !*** ./src/app/pages/form-controls/slider/slider.component.ts ***!
      \****************************************************************/

    /*! exports provided: SliderComponent */

    /***/
    function yv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
        return SliderComponent;
      });
      /* harmony import */


      var _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./slider.component.html */
      "BDst");
      /* harmony import */


      var _slider_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./slider.component.scss */
      "r21Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SliderComponent = /*#__PURE__*/function () {
        function SliderComponent(appSettings) {
          _classCallCheck(this, SliderComponent);

          this.appSettings = appSettings;
          this.autoTicks = false;
          this.disabled = false;
          this.invert = false;
          this.max = 100;
          this.min = 0;
          this.showTicks = false;
          this.step = 1;
          this.thumbLabel = false;
          this.value = 0;
          this.vertical = false;
          this._tickInterval = 1;
          this.settings = this.appSettings.settings;
        }

        _createClass(SliderComponent, [{
          key: "tickInterval",
          get: function get() {
            return this.showTicks ? this.autoTicks ? 'auto' : this._tickInterval : 0;
          },
          set: function set(v) {
            this._tickInterval = Number(v);
          }
        }]);

        return SliderComponent;
      }();

      SliderComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      SliderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-slider',
        template: _raw_loader_slider_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], SliderComponent);
      /***/
    },

    /***/
    "BDst":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/slider/slider.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BDst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Slider configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n                    </mat-form-field>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"showTicks\" class=\"mx-1\">Show ticks</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\" class=\"mx-1\">Auto ticks</mat-checkbox>\r\n                    <mat-form-field *ngIf=\"showTicks && !autoTicks\" class=\"mx-1\">\r\n                        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n                    </mat-form-field>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"thumbLabel\" class=\"mx-1\">Show thumb label</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"vertical\" class=\"mx-1\">Vertical</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"invert\" class=\"mx-1\">Inverted</mat-checkbox>\r\n                </section>\r\n\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\" class=\"mx-1\">Disabled</mat-checkbox>\r\n                </section>\r\n\r\n                <hr>\r\n\r\n                <h2 class=\"py-1\">Result</h2>\r\n\r\n                <mat-slider class=\"custom-slider\"\r\n                    [disabled]=\"disabled\"\r\n                    [invert]=\"invert\"\r\n                    [max]=\"max\"\r\n                    [min]=\"min\"\r\n                    [step]=\"step\"\r\n                    [thumbLabel]=\"thumbLabel\"\r\n                    [tickInterval]=\"tickInterval\"\r\n                    [(ngModel)]=\"value\"\r\n                    [vertical]=\"vertical\">\r\n                </mat-slider>\r\n                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "CApx":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/form-controls/datepicker/datepicker.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function CApx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".events-list {\n  height: 97px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cy1saXN0e1xyXG4gICAgaGVpZ2h0OiA5N3B4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "CI2n":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/form-controls/slide-toggle/slide-toggle.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SlideToggleComponent */

    /***/
    function CI2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function () {
        return SlideToggleComponent;
      });
      /* harmony import */


      var _raw_loader_slide_toggle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./slide-toggle.component.html */
      "+7Au");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SlideToggleComponent = function SlideToggleComponent(appSettings) {
        _classCallCheck(this, SlideToggleComponent);

        this.appSettings = appSettings;
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.settings = this.appSettings.settings;
      };

      SlideToggleComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
        }];
      };

      SlideToggleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slide-toggle',
        template: _raw_loader_slide_toggle_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], SlideToggleComponent);
      /***/
    },

    /***/
    "Ii3m":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/form-controls/autocomplete/autocomplete.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AutocompleteComponent */

    /***/
    function Ii3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
        return AutocompleteComponent;
      });
      /* harmony import */


      var _raw_loader_autocomplete_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./autocomplete.component.html */
      "u0rM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AutocompleteComponent = /*#__PURE__*/function () {
        function AutocompleteComponent(appSettings) {
          _classCallCheck(this, AutocompleteComponent);

          this.appSettings = appSettings;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.options = ['One', 'Two', 'Three'];
          this.filteredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.settings = this.appSettings.settings;
        }

        _createClass(AutocompleteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.filteredOptions = this.filteredControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) {
              return _this.filter(val);
            }));
          }
        }, {
          key: "filter",
          value: function filter(val) {
            return this.options.filter(function (option) {
              return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
          }
        }]);

        return AutocompleteComponent;
      }();

      AutocompleteComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }];
      };

      AutocompleteComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autocomplete',
        template: _raw_loader_autocomplete_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])], AutocompleteComponent);
      /***/
    },

    /***/
    "OORA":
    /*!**************************************************************!*\
      !*** ./src/app/pages/form-controls/input/input.component.ts ***!
      \**************************************************************/

    /*! exports provided: InputComponent, MyErrorStateMatcher */

    /***/
    function OORA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony import */


      var _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./input.component.html */
      "WFb8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var InputComponent = function InputComponent(appSettings) {
        _classCallCheck(this, InputComponent);

        this.appSettings = appSettings; //Input with a custom ErrorStateMatcher

        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.matcher = new MyErrorStateMatcher(); //Input with a clear button

        this.value = 'Clear me';
        this.settings = this.appSettings.settings;
      };

      InputComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      InputComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: _raw_loader_input_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], InputComponent);
      /** Error when invalid control is dirty, touched, or submitted. */

      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();
      /***/

    },

    /***/
    "QCQZ":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/form-field/form-field.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QCQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple form field</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Input\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <textarea matInput placeholder=\"Textarea\"></textarea>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select\">\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>                               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with placeholder</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <form [formGroup]=\"options\">\r\n                    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\r\n                    <div class=\"py-1\">\r\n                        <label>Float label: </label>\r\n                        <mat-radio-group formControlName=\"floatLabel\">\r\n                            <mat-radio-button value=\"auto\" class=\"mx-1\">Auto</mat-radio-button>\r\n                            <mat-radio-button value=\"always\" class=\"mx-1\">Always</mat-radio-button>\r\n                            <mat-radio-button value=\"never\" class=\"mx-1\">Never</mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </div>\r\n                </form>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatLabel]=\"options.value.floatLabel\">\r\n                    <input matInput placeholder=\"Simple placeholder\" required>\r\n                </mat-form-field>\r\n                <mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\"\r\n                                [floatLabel]=\"options.value.floatLabel\">\r\n                    <mat-select required>\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>\r\n                </mat-form-field>               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with hints</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field hintLabel=\"Max 10 characters\">\r\n                    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\r\n                    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Select me\">\r\n                      <mat-option value=\"option\">Option</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n                </mat-form-field>                            \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with error messages</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n                    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n                </mat-form-field>                           \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field with prefix & suffix</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Amount\" type=\"number\" [style.text-align]=\"'right'\">\r\n                    <span matPrefix>$&nbsp;</span>\r\n                    <span matSuffix>.00</span>\r\n                </mat-form-field>                        \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Form field theming</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"themingForm\" [style.fontSize.px]=\"getFontSize()\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <mat-select placeholder=\"Color\" formControlName=\"color\">\r\n                            <mat-option value=\"primary\">Primary</mat-option>\r\n                            <mat-option value=\"accent\">Accent</mat-option>\r\n                            <mat-option value=\"warn\">Warn</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field [color]=\"themingForm.value.color\">\r\n                        <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n                        <mat-error *ngIf=\"themingForm.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n                    </mat-form-field>\r\n                </form>     \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n</div>";
      /***/
    },

    /***/
    "UPxk":
    /*!************************************************************************!*\
      !*** ./src/app/pages/form-controls/datepicker/datepicker.component.ts ***!
      \************************************************************************/

    /*! exports provided: DatepickerComponent */

    /***/
    function UPxk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () {
        return DatepickerComponent;
      });
      /* harmony import */


      var _raw_loader_datepicker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./datepicker.component.html */
      "yS8L");
      /* harmony import */


      var _datepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./datepicker.component.scss */
      "CApx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DatepickerComponent = /*#__PURE__*/function () {
        function DatepickerComponent(appSettings) {
          _classCallCheck(this, DatepickerComponent);

          this.appSettings = appSettings; //Datepicker start date

          this.startDate = new Date(1990, 0, 1); //Datepicker with min & max validation

          this.minDate = new Date(2010, 0, 1);
          this.maxDate = new Date(2020, 0, 1); //Datepicker with filter validation

          this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
          }; //Datepicker input and change events


          this.events = [];
          this.settings = this.appSettings.settings;
        }

        _createClass(DatepickerComponent, [{
          key: "addEvent",
          value: function addEvent(type, event) {
            this.events.push("".concat(type, ": ").concat(event.value));
          }
        }]);

        return DatepickerComponent;
      }();

      DatepickerComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      DatepickerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-datepicker',
        template: _raw_loader_datepicker_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_datepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], DatepickerComponent);
      /***/
    },

    /***/
    "WFb8":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/input/input.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WFb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic Inputs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a custom ErrorStateMatcher</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n                        <mat-hint>Errors appear instantly!</mat-hint>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n                    </mat-form-field>\r\n                </form>                              \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Auto-resizing textarea</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <textarea matInput \r\n                              placeholder=\"Autosize textarea\" \r\n                              matTextareaAutosize \r\n                              matAutosizeMinRows=\"2\"\r\n                              matAutosizeMaxRows=\"5\"></textarea>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Input with a clear button</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\r\n                    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </mat-form-field>                       \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Inputs in a form</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <form fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                  \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n                    </mat-form-field>\r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"First name\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    \r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"w-100\">\r\n                        <textarea matInput placeholder=\"Address 2\"></textarea>\r\n                    </mat-form-field>                   \r\n\r\n                    <table cellspacing=\"0\" class=\"w-100\">\r\n                        <tr>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"City\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput placeholder=\"State\">\r\n                                </mat-form-field>\r\n                            </td>\r\n                            <td>\r\n                                <mat-form-field class=\"w-100\">\r\n                                    <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n                                    <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                                </mat-form-field>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "dHev":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/select/select.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dHev(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic select</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n                        <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                            {{food.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <p class=\"py-1\"> Selected value: <b>{{selectedValue}}</b> </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with option groups</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\r\n                        <mat-option>-- None --</mat-option>\r\n                        <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n                            <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n                                {{ pokemon.viewValue }}\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with multiple selection</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n                        <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Select with custom trigger text</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content >\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Toppings\" [formControl]=\"toppings2\" multiple>\r\n                        <mat-select-trigger>\r\n                          {{toppings2.value ? toppings2.value[0] : ''}}\r\n                          <small *ngIf=\"toppings2.value?.length > 1\">\r\n                            (+{{toppings2.value.length - 1}} others)\r\n                          </small>\r\n                        </mat-select-trigger>\r\n                        <mat-option *ngFor=\"let topping of toppingList2\" [value]=\"topping\">{{topping}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "j6Lp":
    /*!*************************************************************!*\
      !*** ./src/app/pages/form-controls/form-controls.module.ts ***!
      \*************************************************************/

    /*! exports provided: routes, FormControlsModule */

    /***/
    function j6Lp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlsModule", function () {
        return FormControlsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./autocomplete/autocomplete.component */
      "Ii3m");
      /* harmony import */


      var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./checkbox/checkbox.component */
      "1oro");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "UPxk");
      /* harmony import */


      var _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./form-field/form-field.component */
      "v+1Q");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./input/input.component */
      "OORA");
      /* harmony import */


      var _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./radio-button/radio-button.component */
      "pGD7");
      /* harmony import */


      var _select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./select/select.component */
      "oB/9");
      /* harmony import */


      var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./slider/slider.component */
      "1yv+");
      /* harmony import */


      var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./slide-toggle/slide-toggle.component */
      "CI2n");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        redirectTo: 'autocomplete',
        pathMatch: 'full'
      }, {
        path: 'autocomplete',
        component: _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"],
        data: {
          breadcrumb: 'Autocomplete'
        }
      }, {
        path: 'checkbox',
        component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"],
        data: {
          breadcrumb: 'Checkbox'
        }
      }, {
        path: 'datepicker',
        component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"],
        data: {
          breadcrumb: 'Datepicker'
        }
      }, {
        path: 'form-field',
        component: _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldComponent"],
        data: {
          breadcrumb: 'Form Field'
        }
      }, {
        path: 'input',
        component: _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"],
        data: {
          breadcrumb: 'Input'
        }
      }, {
        path: 'radio-button',
        component: _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__["RadioButtonComponent"],
        data: {
          breadcrumb: 'Radio Button'
        }
      }, {
        path: 'select',
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"],
        data: {
          breadcrumb: 'Select'
        }
      }, {
        path: 'slider',
        component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
        data: {
          breadcrumb: 'Slider'
        }
      }, {
        path: 'slide-toggle',
        component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["SlideToggleComponent"],
        data: {
          breadcrumb: 'Slide Toggle'
        }
      }];

      var FormControlsModule = function FormControlsModule() {
        _classCallCheck(this, FormControlsModule);
      };

      FormControlsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        declarations: [_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AutocompleteComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"], _form_field_form_field_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_11__["RadioButtonComponent"], _select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"], _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_14__["SlideToggleComponent"]]
      })], FormControlsModule);
      /***/
    },

    /***/
    "oB/9":
    /*!****************************************************************!*\
      !*** ./src/app/pages/form-controls/select/select.component.ts ***!
      \****************************************************************/

    /*! exports provided: SelectComponent */

    /***/
    function oB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
        return SelectComponent;
      });
      /* harmony import */


      var _raw_loader_select_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./select.component.html */
      "dHev");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SelectComponent = function SelectComponent(appSettings) {
        _classCallCheck(this, SelectComponent);

        this.appSettings = appSettings;
        this.foods = [{
          value: 'steak-0',
          viewValue: 'Steak'
        }, {
          value: 'pizza-1',
          viewValue: 'Pizza'
        }, {
          value: 'tacos-2',
          viewValue: 'Tacos'
        }]; //Select with option groups

        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.pokemonGroups = [{
          name: 'Grass',
          pokemon: [{
            value: 'bulbasaur-0',
            viewValue: 'Bulbasaur'
          }, {
            value: 'oddish-1',
            viewValue: 'Oddish'
          }, {
            value: 'bellsprout-2',
            viewValue: 'Bellsprout'
          }]
        }, {
          name: 'Water',
          pokemon: [{
            value: 'squirtle-3',
            viewValue: 'Squirtle'
          }, {
            value: 'psyduck-4',
            viewValue: 'Psyduck'
          }, {
            value: 'horsea-5',
            viewValue: 'Horsea'
          }]
        }, {
          name: 'Fire',
          disabled: true,
          pokemon: [{
            value: 'charmander-6',
            viewValue: 'Charmander'
          }, {
            value: 'vulpix-7',
            viewValue: 'Vulpix'
          }, {
            value: 'flareon-8',
            viewValue: 'Flareon'
          }]
        }, {
          name: 'Psychic',
          pokemon: [{
            value: 'mew-9',
            viewValue: 'Mew'
          }, {
            value: 'mewtwo-10',
            viewValue: 'Mewtwo'
          }]
        }]; //Select with multiple selection

        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato']; //Select with custom trigger text

        this.toppings2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.settings = this.appSettings.settings;
      };

      SelectComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      SelectComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: _raw_loader_select_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], SelectComponent);
      /***/
    },

    /***/
    "pGD7":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/form-controls/radio-button/radio-button.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RadioButtonComponent */

    /***/
    function pGD7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function () {
        return RadioButtonComponent;
      });
      /* harmony import */


      var _raw_loader_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./radio-button.component.html */
      "vvjT");
      /* harmony import */


      var _radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./radio-button.component.scss */
      "rDiX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var RadioButtonComponent = function RadioButtonComponent(appSettings) {
        _classCallCheck(this, RadioButtonComponent);

        this.appSettings = appSettings;
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        this.settings = this.appSettings.settings;
      };

      RadioButtonComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      RadioButtonComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-radio-button',
        template: _raw_loader_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], RadioButtonComponent);
      /***/
    },

    /***/
    "r21Y":
    /*!******************************************************************!*\
      !*** ./src/app/pages/form-controls/slider/slider.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function r21Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-slider {\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tc2xpZGVye1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "rDiX":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/form-controls/radio-button/radio-button.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function rDiX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".season-item {\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJyYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vhc29uLWl0ZW17XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "sphO":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/checkbox/checkbox.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sphO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Checkbox configuration</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"checked\" class=\"mx-1\">Checked</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"indeterminate\" class=\"mx-1\">Indeterminate</mat-checkbox>\r\n                </section>\r\n                <section class=\"py-1\">\r\n                    <label>Label position:</label>\r\n                    <mat-radio-group [(ngModel)]=\"labelPosition\">\r\n                        <mat-radio-button value=\"after\" class=\"mx-1\">After</mat-radio-button>\r\n                        <mat-radio-button value=\"before\" class=\"mx-1\">Before</mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n                </section>\r\n                <hr>\r\n                <h2 class=\"py-1\">Result</h2>\r\n                <section class=\"py-1\">\r\n                    <mat-checkbox\r\n                        [(ngModel)]=\"checked\"\r\n                        [(indeterminate)]=\"indeterminate\"\r\n                        [labelPosition]=\"labelPosition\"\r\n                        [disabled]=\"disabled\">\r\n                      I'm a checkbox\r\n                    </mat-checkbox>\r\n                </section>               \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "u0rM":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/autocomplete/autocomplete.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u0rM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Simple autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                                {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Filter autocomplete</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"filteredControl\" [matAutocomplete]=\"auto\">\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                              {{ option }}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </form>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>";
      /***/
    },

    /***/
    "v+1Q":
    /*!************************************************************************!*\
      !*** ./src/app/pages/form-controls/form-field/form-field.component.ts ***!
      \************************************************************************/

    /*! exports provided: FormFieldComponent */

    /***/
    function v1Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function () {
        return FormFieldComponent;
      });
      /* harmony import */


      var _raw_loader_form_field_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./form-field.component.html */
      "QCQZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var FormFieldComponent = /*#__PURE__*/function () {
        function FormFieldComponent(appSettings, formBuilder) {
          _classCallCheck(this, FormFieldComponent);

          this.appSettings = appSettings;
          this.formBuilder = formBuilder;
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
          this.hide = true;
          this.settings = this.appSettings.settings;
        }

        _createClass(FormFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.options = this.formBuilder.group({
              hideRequired: false,
              floatLabel: 'auto'
            });
            this.themingForm = this.formBuilder.group({
              'color': 'primary',
              'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10)]
            });
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
          }
        }, {
          key: "getFontSize",
          value: function getFontSize() {
            return Math.max(10, this.themingForm.value.fontSize);
          }
        }]);

        return FormFieldComponent;
      }();

      FormFieldComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      };

      FormFieldComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-field',
        template: _raw_loader_form_field_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], FormFieldComponent);
      /***/
    },

    /***/
    "vvjT":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/radio-button/radio-button.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vvjT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic radios</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group>\r\n                    <mat-radio-button value=\"1\" class=\"mx-1\">Option 1</mat-radio-button>\r\n                    <mat-radio-button value=\"2\" class=\"mx-1\">Option 2</mat-radio-button>\r\n                </mat-radio-group>   \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Radios with ngModel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-radio-group [(ngModel)]=\"favoriteSeason\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                    <mat-radio-button *ngFor=\"let season of seasons\" [value]=\"season\" class=\"season-item\">\r\n                      {{season}}\r\n                    </mat-radio-button>\r\n                </mat-radio-group>\r\n                <div class=\"py-1\">Your favorite season is: <b> {{favoriteSeason}} </b></div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n</div>";
      /***/
    },

    /***/
    "yS8L":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/form-controls/datepicker/datepicker.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yS8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Basic datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker start date</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with min & max validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker3\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker with filter validation</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                    <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker4\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker4></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker input and change events</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker5\" placeholder=\"Input & change events\"\r\n                          (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker5></mat-datepicker>\r\n                </mat-form-field>                \r\n                <div class=\"w-100 mat-elevation-z4 p-1 events-list\" perfectScrollbar> \r\n                    <div *ngFor=\"let e of events\">{{e}}</div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Disabled datepicker</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">             \r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp1></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp2></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker touch UI</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                    <mat-datepicker touchUi=\"true\" #picker6></mat-datepicker>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Datepicker open method</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center center\">\r\n                <mat-form-field>\r\n                    <input matInput [matDatepicker]=\"picker7\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker #picker7></mat-datepicker>\r\n                </mat-form-field>\r\n                <button mat-raised-button (click)=\"picker7.open()\">Open</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>                                 \r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-form-controls-form-controls-module-es5.js.map