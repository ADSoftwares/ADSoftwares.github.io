(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
    /***/
    "+jO8":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/dashboard/info-cards/info-cards.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function jO8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-chip.info-chip {\n  padding: 4px 8px;\n  min-height: 26px;\n  font-size: 12px;\n  font-weight: 400;\n}\n.mat-chip.info-chip .mat-icon {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5mby1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUiIsImZpbGUiOiJpbmZvLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jaGlwLmluZm8tY2hpcHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: routes, DashboardModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard.component */
      "U5Cf");
      /* harmony import */


      var _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./info-cards/info-cards.component */
      "EJIn");
      /* harmony import */


      var _disk_space_disk_space_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./disk-space/disk-space.component */
      "Y/pm");
      /* harmony import */


      var _todo_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./todo/todo.component */
      "5fC7");
      /* harmony import */


      var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./analytics/analytics.component */
      "Cxbx");

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
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        pathMatch: 'full'
      }];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _info_cards_info_cards_component__WEBPACK_IMPORTED_MODULE_8__["InfoCardsComponent"], _disk_space_disk_space_component__WEBPACK_IMPORTED_MODULE_9__["DiskSpaceComponent"], _todo_todo_component__WEBPACK_IMPORTED_MODULE_10__["TodoComponent"], _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_11__["AnalyticsComponent"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "0jEv":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/disk-space/disk-space.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Disk Space</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">Explode Slices</mat-checkbox>\r\n            <mat-checkbox color=\"primary\" class=\"example-margin\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">Show Labels</mat-checkbox>\r\n        </div>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-pie-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [legend]=\"showLegend\"\r\n                [explodeSlices]=\"explodeSlices\"\r\n                [labels]=\"showLabels\"\r\n                [doughnut]=\"doughnut\"\r\n                [gradient]=\"gradient\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-chart>   \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    },

    /***/
    "103j":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/info-cards/info-cards.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" #resizedDiv>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Products profit</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>37%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"products\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                   \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Total orders</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>15%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"orders\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                  \r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Refunds</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"warn\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_down</mat-icon>-9%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-bar-vertical\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"refunds\"                      \r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-bar-vertical>                     \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0\">\r\n            <mat-card-header class=\"p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-subtitle class=\"m-0\">Customers</mat-card-subtitle>\r\n                <mat-chip-list>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"info-chip\">\r\n                        <mat-icon class=\"icon-sm\">trending_up</mat-icon>12%\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-header>         \r\n            <div class=\"w-100 h-100p\">\r\n                <ngx-charts-line-chart\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"customers\"                      \r\n                    [autoScale]=\"autoScale\"\r\n                    (select)=\"onSelect($event)\">\r\n                </ngx-charts-line-chart>                    \r\n            </div>\r\n        </mat-card>\r\n    </div>    \r\n</div>";
      /***/
    },

    /***/
    "5fC7":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/todo/todo.component.ts ***!
      \********************************************************/

    /*! exports provided: TodoComponent */

    /***/
    function fC7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
        return TodoComponent;
      });
      /* harmony import */


      var _raw_loader_todo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./todo.component.html */
      "e6Mx");
      /* harmony import */


      var _todo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./todo.component.scss */
      "lWhQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./todo.service */
      "daqC");

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

      var TodoComponent = /*#__PURE__*/function () {
        function TodoComponent(_todoService) {
          _classCallCheck(this, TodoComponent);

          this._todoService = _todoService;
          this.newTodoText = '';
          this.todoList = this._todoService.getTodoList();
        }

        _createClass(TodoComponent, [{
          key: "getNotDeleted",
          value: function getNotDeleted() {
            return this.todoList.filter(function (item) {
              return !item.deleted;
            });
          }
        }, {
          key: "addToDoItem",
          value: function addToDoItem($event) {
            if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
              this.todoList.unshift({
                text: this.newTodoText
              });
              this.newTodoText = '';
            }
          }
        }]);

        return TodoComponent;
      }();

      TodoComponent.ctorParameters = function () {
        return [{
          type: _todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]
        }];
      };

      TodoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-todo',
        template: _raw_loader_todo_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]],
        styles: [_todo_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])], TodoComponent);
      /***/
    },

    /***/
    "BIjw":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.data.ts ***!
      \***************************************************/

    /*! exports provided: orders, products, customers, refunds, disk_space, analytics */

    /***/
    function BIjw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "orders", function () {
        return orders;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "products", function () {
        return products;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customers", function () {
        return customers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "refunds", function () {
        return refunds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "disk_space", function () {
        return disk_space;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "analytics", function () {
        return analytics;
      });

      var orders = [{
        name: 'Orders',
        series: [{
          name: "1980",
          value: 21632
        }]
      }];
      var products = [{
        "name": "Product-1",
        "value": 69400
      }, {
        "name": "Product-2",
        "value": 59400
      }, {
        "name": "Product-3",
        "value": 82400
      }, {
        "name": "Product-4",
        "value": 73400
      }, {
        "name": "Product-5",
        "value": 25400
      }, {
        "name": "Product-6",
        "value": 23400
      }, {
        "name": "Product-7",
        "value": 49300
      }, {
        "name": "Product-8",
        "value": 55400
      }, {
        "name": "Product-9",
        "value": 37400
      }, {
        "name": "Product-10",
        "value": 65220
      }, {
        "name": "Product-11",
        "value": 79400
      }, {
        "name": "Product-12",
        "value": 58400
      }, {
        "name": "Product-13",
        "value": 41400
      }, {
        "name": "Product-14",
        "value": 37400
      }, {
        "name": "Product-15",
        "value": 33700
      }, {
        "name": "Product-16",
        "value": 42700
      }, {
        "name": "Product-17",
        "value": 52700
      }, {
        "name": "Product-18",
        "value": 62700
      }];
      var customers = [{
        name: 'Customers',
        series: [{
          name: "2000",
          value: 34502
        }]
      }];
      var refunds = [{
        "name": "Item-1",
        "value": 23701
      }, {
        "name": "Item-2",
        "value": 33701
      }, {
        "name": "Item-3",
        "value": 63701
      }, {
        "name": "Item-4",
        "value": 52701
      }, {
        "name": "Item-5",
        "value": 73701
      }, {
        "name": "Item-6",
        "value": 43701
      }, {
        "name": "Item-7",
        "value": 83701
      }, {
        "name": "Item-8",
        "value": 29701
      }, {
        "name": "Item-9",
        "value": 69701
      }, {
        "name": "Item-10",
        "value": 58701
      }, {
        "name": "Item-11",
        "value": 65701
      }, {
        "name": "Item-12",
        "value": 47701
      }, {
        "name": "Item-13",
        "value": 41701
      }, {
        "name": "Item-14",
        "value": 25701
      }, {
        "name": "Item-15",
        "value": 35701
      }];
      var disk_space = [{
        "name": "Disk C:",
        "value": 178
      }, {
        "name": "Disk D:",
        "value": 340
      }, {
        "name": "Disk E:",
        "value": 280
      }];
      var analytics = [{
        name: 'Company 1',
        series: [{
          name: '2010',
          value: 31632
        }, {
          name: '2011',
          value: 42589
        }, {
          name: '2012',
          value: 52458
        }, {
          name: '2013',
          value: 69632
        }, {
          name: '2014',
          value: 52305
        }, {
          name: '2015',
          value: 72412
        }, {
          name: '2016',
          value: 66285
        }, {
          name: '2017',
          value: 49855
        }]
      }, {
        name: 'Company 2',
        series: [{
          name: '2010',
          value: 61632
        }, {
          name: '2011',
          value: 68589
        }, {
          name: '2012',
          value: 55458
        }, {
          name: '2013',
          value: 62632
        }, {
          name: '2014',
          value: 38305
        }, {
          name: '2015',
          value: 41412
        }, {
          name: '2016',
          value: 32285
        }, {
          name: '2017',
          value: 31855
        }]
      }, {
        name: 'Company 3',
        series: [{
          name: '2010',
          value: 55632
        }, {
          name: '2011',
          value: 63589
        }, {
          name: '2012',
          value: 70458
        }, {
          name: '2013',
          value: 79632
        }, {
          name: '2014',
          value: 59305
        }, {
          name: '2015',
          value: 56412
        }, {
          name: '2016',
          value: 49285
        }, {
          name: '2017',
          value: 38855
        }]
      }];
      /***/
    },

    /***/
    "Cxbx":
    /*!******************************************************************!*\
      !*** ./src/app/pages/dashboard/analytics/analytics.component.ts ***!
      \******************************************************************/

    /*! exports provided: AnalyticsComponent */

    /***/
    function Cxbx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function () {
        return AnalyticsComponent;
      });
      /* harmony import */


      var _raw_loader_analytics_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./analytics.component.html */
      "mwEe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dashboard_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dashboard.data */
      "BIjw");

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

      var AnalyticsComponent = /*#__PURE__*/function () {
        function AnalyticsComponent() {
          _classCallCheck(this, AnalyticsComponent);

          this.showXAxis = true;
          this.showYAxis = true;
          this.gradient = false;
          this.showLegend = false;
          this.showXAxisLabel = false;
          this.xAxisLabel = 'Year';
          this.showYAxisLabel = false;
          this.yAxisLabel = 'Profit';
          this.colorScheme = {
            domain: ['#283593', '#039BE5', '#FF5252']
          };
          this.autoScale = true;
          this.roundDomains = true;
          this.previousWidthOfResizedDiv = 0;
        }

        _createClass(AnalyticsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.analytics = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["analytics"];
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            console.log(event);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
              this.analytics = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["analytics"]);
            }

            this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
          }
        }]);

        return AnalyticsComponent;
      }();

      AnalyticsComponent.ctorParameters = function () {
        return [];
      };

      AnalyticsComponent.propDecorators = {
        resizedDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['resizedDiv']
        }]
      };
      AnalyticsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: _raw_loader_analytics_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [])], AnalyticsComponent);
      /***/
    },

    /***/
    "Db45":
    /*!**********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Db45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fw-400 {\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdy00MDB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "EJIn":
    /*!********************************************************************!*\
      !*** ./src/app/pages/dashboard/info-cards/info-cards.component.ts ***!
      \********************************************************************/

    /*! exports provided: InfoCardsComponent */

    /***/
    function EJIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoCardsComponent", function () {
        return InfoCardsComponent;
      });
      /* harmony import */


      var _raw_loader_info_cards_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./info-cards.component.html */
      "103j");
      /* harmony import */


      var _info_cards_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./info-cards.component.scss */
      "+jO8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");
      /* harmony import */


      var _dashboard_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dashboard.data */
      "BIjw");

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

      var InfoCardsComponent = /*#__PURE__*/function () {
        function InfoCardsComponent(appSettings) {
          _classCallCheck(this, InfoCardsComponent);

          this.appSettings = appSettings;
          this.colorScheme = {
            domain: ['#999']
          };
          this.autoScale = true;
          this.previousWidthOfResizedDiv = 0;
          this.settings = this.appSettings.settings;
        }

        _createClass(InfoCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.orders = _dashboard_data__WEBPACK_IMPORTED_MODULE_4__["orders"];
            this.products = _dashboard_data__WEBPACK_IMPORTED_MODULE_4__["products"];
            this.customers = _dashboard_data__WEBPACK_IMPORTED_MODULE_4__["customers"];
            this.refunds = _dashboard_data__WEBPACK_IMPORTED_MODULE_4__["refunds"];
            this.orders = this.addRandomValue('orders');
            this.customers = this.addRandomValue('customers');
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            console.log(event);
          }
        }, {
          key: "addRandomValue",
          value: function addRandomValue(param) {
            switch (param) {
              case 'orders':
                for (var i = 1; i < 30; i++) {
                  this.orders[0].series.push({
                    "name": 1980 + i,
                    "value": Math.ceil(Math.random() * 1000000)
                  });
                }

                return this.orders;

              case 'customers':
                for (var _i = 1; _i < 15; _i++) {
                  this.customers[0].series.push({
                    "name": 2000 + _i,
                    "value": Math.ceil(Math.random() * 1000000)
                  });
                }

                return this.customers;

              default:
                return this.orders;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.orders[0].series.length = 0;
            this.customers[0].series.length = 0;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this = this;

            if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
              setTimeout(function () {
                return _this.orders = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_4__["orders"]);
              });
              setTimeout(function () {
                return _this.products = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_4__["products"]);
              });
              setTimeout(function () {
                return _this.customers = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_4__["customers"]);
              });
              setTimeout(function () {
                return _this.refunds = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_4__["refunds"]);
              });
            }

            this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
          }
        }]);

        return InfoCardsComponent;
      }();

      InfoCardsComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      InfoCardsComponent.propDecorators = {
        resizedDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['resizedDiv']
        }]
      };
      InfoCardsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-info-cards',
        template: _raw_loader_info_cards_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_info_cards_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], InfoCardsComponent);
      /***/
    },

    /***/
    "Ixm7":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ixm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-info-cards></app-info-cards>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"45\" class=\"flex-p\"> \r\n        <app-disk-space></app-disk-space>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"55\" class=\"flex-p\">\r\n        <app-todo></app-todo>\r\n    </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"70\" class=\"flex-p\"> \r\n        <app-analytics></app-analytics>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxLayout=\"column\">\r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">monetization_on</mat-icon>\r\n                    <div>\r\n                        <h1>$ 35700</h1>\r\n                        <h2 class=\"fw-400\">Profit</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">cloud_download</mat-icon>\r\n                    <div>\r\n                        <h1>187230</h1>\r\n                        <h2 class=\"fw-400\">Downloads</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>       \r\n        <div fxFlex=\"100\" class=\"flex-p\">\r\n            <mat-card>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"muted-text\">\r\n                    <mat-icon class=\"icon-lg\">shopping_cart</mat-icon>\r\n                    <div>\r\n                        <h1>78,25 %</h1>\r\n                        <h2 class=\"fw-400\">Sales</h2>\r\n                    </div>                \r\n                </div>            \r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "Ixm7");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "Db45");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.settings */
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

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(appSettings) {
          _classCallCheck(this, DashboardComponent);

          this.appSettings = appSettings;
          this.settings = this.appSettings.settings;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], DashboardComponent);
      /***/
    },

    /***/
    "Y/pm":
    /*!********************************************************************!*\
      !*** ./src/app/pages/dashboard/disk-space/disk-space.component.ts ***!
      \********************************************************************/

    /*! exports provided: DiskSpaceComponent */

    /***/
    function YPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiskSpaceComponent", function () {
        return DiskSpaceComponent;
      });
      /* harmony import */


      var _raw_loader_disk_space_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./disk-space.component.html */
      "0jEv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dashboard_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dashboard.data */
      "BIjw");

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

      var DiskSpaceComponent = /*#__PURE__*/function () {
        function DiskSpaceComponent() {
          _classCallCheck(this, DiskSpaceComponent);

          this.showLegend = false;
          this.gradient = true;
          this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
          };
          this.showLabels = true;
          this.explodeSlices = true;
          this.doughnut = false;
          this.previousWidthOfResizedDiv = 0;
        }

        _createClass(DiskSpaceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data = _dashboard_data__WEBPACK_IMPORTED_MODULE_2__["disk_space"];
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            console.log(event);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this2 = this;

            if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
              setTimeout(function () {
                return _this2.data = _toConsumableArray(_dashboard_data__WEBPACK_IMPORTED_MODULE_2__["disk_space"]);
              });
            }

            this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
          }
        }]);

        return DiskSpaceComponent;
      }();

      DiskSpaceComponent.ctorParameters = function () {
        return [];
      };

      DiskSpaceComponent.propDecorators = {
        resizedDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['resizedDiv']
        }]
      };
      DiskSpaceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disk-space',
        template: _raw_loader_disk_space_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [])], DiskSpaceComponent);
      /***/
    },

    /***/
    "daqC":
    /*!******************************************************!*\
      !*** ./src/app/pages/dashboard/todo/todo.service.ts ***!
      \******************************************************/

    /*! exports provided: TodoService */

    /***/
    function daqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoService", function () {
        return TodoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var TodoService = /*#__PURE__*/function () {
        function TodoService() {
          _classCallCheck(this, TodoService);

          this._todoList = [{
            text: 'Check me out'
          }, {
            text: 'Curabitur dignissim nunc a tellus euismod, quis pretium ipsum convallis'
          }, {
            text: 'Vivamus dapibus pulvinar ipsum, sit amet elementum sapien tincidunt non'
          }, {
            text: 'Praesent viverra nisl a pharetra viverra'
          }, {
            text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro'
          }, {
            text: 'Ex has semper alterum, expetenda dignissim'
          }, {
            text: 'Nulla nisl urna, lobortis in leo vel, porta faucibus nulla'
          }, {
            text: 'Simul erroribus ad usu'
          }];
        }

        _createClass(TodoService, [{
          key: "getTodoList",
          value: function getTodoList() {
            return this._todoList;
          }
        }]);

        return TodoService;
      }();

      TodoService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], TodoService);
      /***/
    },

    /***/
    "e6Mx":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/todo/todo.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e6Mx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>To Do List</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div fxLayoutAlign=\"space-between\">\r\n            <mat-form-field class=\"w-100\">\r\n                <input matInput placeholder=\"Task to do...\" (keyup)=\"addToDoItem($event)\" [(ngModel)]=\"newTodoText\">\r\n            </mat-form-field>\r\n            <button mat-mini-fab color=\"primary\" (click)=\"addToDoItem($event)\">\r\n               <mat-icon>add</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div perfectScrollbar class=\"todo-list\">\r\n            <mat-selection-list>\r\n                <mat-list-option *ngFor=\"let item of getNotDeleted()\" checkboxPosition=\"before\" (mouseenter)=\"item.isActive=true\" (mouseleave)=\"item.isActive=false\">\r\n                    <div fxLayoutAlign=\"space-between center\">\r\n                        <span class=\"text-truncate\">{{ item.text }}</span>\r\n                        <button mat-icon-button (click)=\"item.deleted = true\" color=\"warn\" *ngIf=\"item.isActive\">\r\n                            <mat-icon>delete_forever</mat-icon> \r\n                        </button>\r\n                    </div>               \r\n                </mat-list-option>\r\n            </mat-selection-list>\r\n        </div>          \r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    },

    /***/
    "lWhQ":
    /*!**********************************************************!*\
      !*** ./src/app/pages/dashboard/todo/todo.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function lWhQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".todo-list {\n  height: 267px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9kby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tbGlzdHtcclxuICAgIGhlaWdodDogMjY3cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "mwEe":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/analytics/analytics.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mwEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-header fxLayoutAlign=\"center\">                \r\n        <mat-card-subtitle><h2>Analytics</h2></mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <div class=\"w-100 h-300p\" #resizedDiv>\r\n            <ngx-charts-line-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"analytics\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [autoScale]=\"autoScale\"\r\n                [roundDomains]=\"roundDomains\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-line-chart>             \r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map