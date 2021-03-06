(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-schedule-module"],{

/***/ "Fp+e":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule-dialog/schedule-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title><span *ngIf=\"!form.controls.isEdit.value\">Add</span><span *ngIf=\"form.controls.isEdit.value\">Edit</span> event</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"form\">\r\n        <mat-form-field class=\"w-100\">\r\n          <input matInput placeholder=\"Title\" formControlName=\"title\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"w-100\">\r\n          <input matInput [matDatepicker]=\"start\" placeholder=\"Start Date\" formControlName=\"start\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"start\"></mat-datepicker-toggle>\r\n          <mat-datepicker #start></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"w-100\">\r\n          <input matInput [matDatepicker]=\"end\" placeholder=\"End Date\" formControlName=\"end\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"end\"></mat-datepicker-toggle>\r\n          <mat-datepicker #end></mat-datepicker>\r\n        </mat-form-field>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"form.value\" [disabled]=\"!form.valid\"><span *ngIf=\"!form.controls.isEdit.value\">Save</span><span *ngIf=\"form.controls.isEdit.value\">Update</span></button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"close()\">Cancel</button>\r\n</div>");

/***/ }),

/***/ "bmpJ":
/*!******************************************************!*\
  !*** ./src/app/pages/schedule/schedule.component.ts ***!
  \******************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./schedule.component.html */ "c+A3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _schedule_dialog_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-dialog/schedule-dialog.component */ "gu5I");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../theme/utils/app-animation */ "NObv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let ScheduleComponent = class ScheduleComponent {
    constructor(appSettings, dialog, snackBar) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.actions = [{
                label: '<i class="material-icons icon-sm white">edit</i>',
                onClick: ({ event }) => {
                    this.openScheduleDialog(event);
                }
            }, {
                label: '<i class="material-icons icon-sm white">close</i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.snackBar.open('Event deleted successfully!', null, {
                        duration: 1500
                    });
                }
            }];
        this.events = [{
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            }, {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            }, {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }
    openScheduleDialog(event) {
        let dialogRef = this.dialog.open(_schedule_dialog_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleDialogComponent"], {
            data: event
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (!result.isEdit) {
                    result.color = colors.blue;
                    result.actions = this.actions;
                    this.events.push(result);
                    this.refresh.next();
                }
                else {
                    //implement edit here
                }
            }
        });
    }
};
ScheduleComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ScheduleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: _raw_loader_schedule_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [_theme_utils_app_animation__WEBPACK_IMPORTED_MODULE_8__["blockTransition"]],
        host: {
            '[@blockTransition]': ''
        }
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ScheduleComponent);



/***/ }),

/***/ "c+A3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"block p-0\">\r\n            \r\n            <div class=\"bg-primary\">\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"  class=\"w-100\">            \r\n                    <div class=\"\">                \r\n                        <button mat-icon-button mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n                            <mat-icon *ngIf=\"!settings.rtl\">chevron_left</mat-icon>\r\n                            <mat-icon *ngIf=\"settings.rtl\">chevron_right</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n                            <mat-icon>today</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n                            <mat-icon *ngIf=\"settings.rtl\">chevron_left</mat-icon>\r\n                            <mat-icon *ngIf=\"!settings.rtl\">chevron_right</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                    <h2>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h2>\r\n                    <div class=\"\">\r\n                        <button mat-icon-button (click)=\"view = 'month'\">\r\n                            <mat-icon>view_comfy</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"view = 'week'\">\r\n                            <mat-icon>view_week</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"view = 'day'\">\r\n                            <mat-icon>view_day</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"openScheduleDialog(null)\">\r\n                            <mat-icon>add</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>            \r\n            </div>\r\n\r\n            <div [ngSwitch]=\"view\">\r\n                <mwl-calendar-month-view\r\n                    *ngSwitchCase=\"'month'\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\"\r\n                    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                    (dayClicked)=\"dayClicked($event.day)\">\r\n                </mwl-calendar-month-view>\r\n                <mwl-calendar-week-view\r\n                    *ngSwitchCase=\"'week'\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\">\r\n                </mwl-calendar-week-view>\r\n                <mwl-calendar-day-view\r\n                    *ngSwitchCase=\"'day'\"\r\n                    [viewDate]=\"viewDate\"\r\n                    [events]=\"events\"\r\n                    [refresh]=\"refresh\">\r\n                </mwl-calendar-day-view>\r\n            </div>\r\n\r\n       </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "gu5I":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/schedule/schedule-dialog/schedule-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ScheduleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDialogComponent", function() { return ScheduleDialogComponent; });
/* harmony import */ var _raw_loader_schedule_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./schedule-dialog.component.html */ "Fp+e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ScheduleDialogComponent = class ScheduleDialogComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'start': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'end': '',
            'isEdit': false
        });
    }
    ngOnInit() {
        if (this.data) {
            this.form.patchValue({
                'title': this.data.title,
                'start': this.data.start,
                'end': this.data.end,
                'isEdit': true
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
};
ScheduleDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ScheduleDialogComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule-dialog',
        template: _raw_loader_schedule_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ScheduleDialogComponent);



/***/ }),

/***/ "nLfy":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: routes, ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "kRoH");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.component */ "bmpJ");
/* harmony import */ var _schedule_dialog_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule-dialog/schedule-dialog.component */ "gu5I");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const routes = [
    { path: '', component: _schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"], pathMatch: 'full' }
];
let ScheduleModule = class ScheduleModule {
};
ScheduleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [
            _schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"],
            _schedule_dialog_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleDialogComponent"]
        ]
    })
], ScheduleModule);



/***/ })

}]);
//# sourceMappingURL=pages-schedule-schedule-module-es2015.js.map