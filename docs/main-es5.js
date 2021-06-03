(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/RaO":
    /*!*********************************!*\
      !*** ./src/app/app.settings.ts ***!
      \*********************************/

    /*! exports provided: AppSettings */

    /***/
    function RaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.settings.model */
      "wdBf");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);

        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Gradus', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false, // true = rtl, false = ltr
        true // true = has footer, false = no footer
        );
      };

      AppSettings = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AppSettings);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\gradus\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1yZR":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/components/messages/messages.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function yZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./messages.component.html */
      "h4o/");
      /* harmony import */


      var _messages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./messages.component.scss */
      "Iasc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./messages.service */
      "5KN4");

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

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messagesService) {
          _classCallCheck(this, MessagesComponent);

          this.messagesService = messagesService;
          this.selectedTab = 1;
          this.messages = messagesService.getMessages();
          this.files = messagesService.getFiles();
          this.meetings = messagesService.getMeetings();
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openMessagesMenu",
          value: function openMessagesMenu() {
            this.trigger.openMenu();
            this.selectedTab = 0;
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.trigger.closeMenu();
          }
        }, {
          key: "stopClickPropagate",
          value: function stopClickPropagate(event) {
            event.stopPropagation();
            event.preventDefault();
          }
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ctorParameters = function () {
        return [{
          type: _messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]
        }];
      };

      MessagesComponent.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]]
        }]
      };
      MessagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]],
        styles: [_messages_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])], MessagesComponent);
      /***/
    },

    /***/
    "4xRd":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\r\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "5KN4":
    /*!***************************************************************!*\
      !*** ./src/app/theme/components/messages/messages.service.ts ***!
      \***************************************************************/

    /*! exports provided: MessagesService */

    /***/
    function KN4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
        return MessagesService;
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

      var MessagesService = /*#__PURE__*/function () {
        function MessagesService() {
          _classCallCheck(this, MessagesService);

          this.messages = [{
            name: 'ashley',
            text: 'After you get up and running, you can place Font Awesome icons just about...',
            time: '1 min ago'
          }, {
            name: 'michael',
            text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
            time: '2 hrs ago'
          }, {
            name: 'julia',
            text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
            time: '10 hrs ago'
          }, {
            name: 'bruno',
            text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
            time: '1 day ago'
          }, {
            name: 'tereza',
            text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
            time: '1 day ago'
          }, {
            name: 'adam',
            text: 'Need some support to reach your goals? Apply for scholarships across...',
            time: '2 days ago'
          }, {
            name: 'michael',
            text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
            time: '1 week ago'
          }];
          this.files = [{
            text: 'gradus.zip',
            size: '~6.2 MB',
            value: '47',
            color: 'primary'
          }, {
            text: 'documentation.pdf',
            size: '~14.6 MB',
            value: '33',
            color: 'accent'
          }, {
            text: 'wallpaper.jpg',
            size: '~558 KB',
            value: '60',
            color: 'warn'
          }, {
            text: 'letter.doc',
            size: '~57 KB',
            value: '80',
            color: 'primary'
          }, {
            text: 'azimuth.zip',
            size: '~10.2 MB',
            value: '55',
            color: 'warn'
          }, {
            text: 'contacts.xlsx',
            size: '~96 KB',
            value: '75',
            color: 'accent'
          }];
          this.meetings = [{
            day: '09',
            month: 'May',
            title: 'Meeting with Bruno',
            text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
            color: 'danger'
          }, {
            day: '15',
            month: 'May',
            title: 'Training course',
            text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
            color: 'primary'
          }, {
            day: '12',
            month: 'June',
            title: 'Dinner with Ashley',
            text: 'Curabitur rhoncus facilisis augue sed fringilla.',
            color: 'info'
          }, {
            day: '14',
            month: 'June',
            title: 'Sport time',
            text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
            color: 'warning'
          }, {
            day: '29',
            month: 'July',
            title: 'Birthday of Julia',
            text: 'Nam porttitor justo nec elit efficitur vestibulum.',
            color: 'success'
          }];
        }

        _createClass(MessagesService, [{
          key: "getMessages",
          value: function getMessages() {
            return this.messages;
          }
        }, {
          key: "getFiles",
          value: function getFiles() {
            return this.files;
          }
        }, {
          key: "getMeetings",
          value: function getMeetings() {
            return this.meetings;
          }
        }]);

        return MessagesService;
      }();

      MessagesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MessagesService);
      /***/
    },

    /***/
    "8D7W":
    /*!******************************************!*\
      !*** ./src/app/pages/pages.component.ts ***!
      \******************************************/

    /*! exports provided: PagesComponent */

    /***/
    function D7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
        return PagesComponent;
      });
      /* harmony import */


      var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./pages.component.html */
      "EUOv");
      /* harmony import */


      var _pages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages.component.scss */
      "BedD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.settings */
      "/RaO");
      /* harmony import */


      var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../theme/components/menu/menu.service */
      "8fVf");

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

      var PagesComponent = /*#__PURE__*/function () {
        function PagesComponent(appSettings, router, menuService) {
          _classCallCheck(this, PagesComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.menuService = menuService;
          this.menus = ['vertical', 'horizontal'];
          this.menuTypes = ['default', 'compact', 'mini'];
          this.lastScrollTop = 0;
          this.showBackToTop = false;
          this.toggleSearchBar = false;
          this.settings = this.appSettings.settings;
        }

        _createClass(PagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (window.innerWidth <= 768) {
              this.settings.menu = 'vertical';
              this.settings.sidenavIsOpened = false;
              this.settings.sidenavIsPinned = false;
            }

            this.menuOption = this.settings.menu;
            this.menuTypeOption = this.settings.menuType;
            this.defaultMenu = this.settings.menu;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              _this.settings.loadingSpinner = false;
            }, 300);
            this.backToTop.nativeElement.style.display = 'none';
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (!_this.settings.sidenavIsPinned) {
                  _this.sidenav.close();
                }

                if (window.innerWidth <= 768) {
                  _this.sidenav.close();
                }
              }
            });
            if (this.settings.menu == "vertical") this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
          }
        }, {
          key: "chooseMenu",
          value: function chooseMenu() {
            this.settings.menu = this.menuOption;
            this.defaultMenu = this.menuOption;
            this.router.navigate(['/']);
          }
        }, {
          key: "chooseMenuType",
          value: function chooseMenuType() {
            this.settings.menuType = this.menuTypeOption;
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.settings.theme = theme;
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            this.sidenav.toggle();
          }
        }, {
          key: "onPsScrollY",
          value: function onPsScrollY(event) {
            event.target.scrollTop > 300 ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';

            if (this.settings.menu == 'horizontal') {
              if (this.settings.fixedHeader) {
                var currentScrollTop = event.target.scrollTop > 56 ? event.target.scrollTop : 0;

                if (currentScrollTop > this.lastScrollTop) {
                  document.querySelector('#horizontal-menu').classList.add('sticky');
                  event.target.classList.add('horizontal-menu-hidden');
                } else {
                  document.querySelector('#horizontal-menu').classList.remove('sticky');
                  event.target.classList.remove('horizontal-menu-hidden');
                }

                this.lastScrollTop = currentScrollTop;
              } else {
                if (event.target.scrollTop > 56) {
                  document.querySelector('#horizontal-menu').classList.add('sticky');
                  event.target.classList.add('horizontal-menu-hidden');
                } else {
                  document.querySelector('#horizontal-menu').classList.remove('sticky');
                  event.target.classList.remove('horizontal-menu-hidden');
                }
              }
            }
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.pss.forEach(function (ps) {
              if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
                ps.scrollToTop(0, 250);
              }
            });
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            if (window.innerWidth <= 768) {
              this.settings.sidenavIsOpened = false;
              this.settings.sidenavIsPinned = false;
              this.settings.menu = 'vertical';
            } else {
              this.defaultMenu == 'horizontal' ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
              this.settings.sidenavIsOpened = true;
              this.settings.sidenavIsPinned = true;
            }
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.querySelector(".sidenav-menu-outer");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return PagesComponent;
      }();

      PagesComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]
        }];
      };

      PagesComponent.propDecorators = {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['sidenav']
        }],
        backToTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['backToTop']
        }],
        pss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]]
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:resize']
        }]
      };
      PagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pages',
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]],
        styles: [_pages_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]])], PagesComponent);
      /***/
    },

    /***/
    "8fVf":
    /*!*******************************************************!*\
      !*** ./src/app/theme/components/menu/menu.service.ts ***!
      \*******************************************************/

    /*! exports provided: MenuService */

    /***/
    function fVf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu */
      "Ffe/");

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

      var MenuService = /*#__PURE__*/function () {
        function MenuService(location, router) {
          _classCallCheck(this, MenuService);

          this.location = location;
          this.router = router;
        }

        _createClass(MenuService, [{
          key: "getVerticalMenuItems",
          value: function getVerticalMenuItems() {
            return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
          }
        }, {
          key: "getHorizontalMenuItems",
          value: function getHorizontalMenuItems() {
            return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
          }
        }, {
          key: "expandActiveSubMenu",
          value: function expandActiveSubMenu(menu) {
            var _this2 = this;

            var url = this.location.path();
            var routerLink = url; // url.substring(1, url.length);

            var activeMenuItem = menu.filter(function (item) {
              return item.routerLink === routerLink;
            });

            if (activeMenuItem[0]) {
              (function () {
                var menuItem = activeMenuItem[0];

                while (menuItem.parentId != 0) {
                  var parentMenuItem = menu.filter(function (item) {
                    return item.id == menuItem.parentId;
                  })[0];
                  menuItem = parentMenuItem;

                  _this2.toggleMenuItem(menuItem.id);
                }
              })();
            }
          }
        }, {
          key: "toggleMenuItem",
          value: function toggleMenuItem(menuId) {
            var menuItem = document.getElementById('menu-item-' + menuId);
            var subMenu = document.getElementById('sub-menu-' + menuId);

            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              } else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
              }
            }
          }
        }, {
          key: "closeOtherSubMenus",
          value: function closeOtherSubMenus(menu, menuId) {
            var currentMenuItem = menu.filter(function (item) {
              return item.id == menuId;
            })[0];

            if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
              menu.forEach(function (item) {
                if (item.id != menuId) {
                  var subMenu = document.getElementById('sub-menu-' + item.id);
                  var menuItem = document.getElementById('menu-item-' + item.id);

                  if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                      subMenu.classList.remove('show');
                      menuItem.classList.remove('expanded');
                    }
                  }
                }
              });
            }
          }
        }]);

        return MenuService;
      }();

      MenuService.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      MenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], MenuService);
      /***/
    },

    /***/
    "9nG8":
    /*!*******************************************************!*\
      !*** ./src/app/pages/errors/error/error.component.ts ***!
      \*******************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function nG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./error.component.html */
      "ndHc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
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

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent(appSettings, router) {
          _classCallCheck(this, ErrorComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(ErrorComponent, [{
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.settings.loadingSpinner = false;
          }
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ErrorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: _raw_loader_error_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ErrorComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BedD":
    /*!********************************************!*\
      !*** ./src/app/pages/pages.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function BedD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidenav {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.inner-sidenav-content .has-footer {\n  min-height: calc(100% - (45px + 56px));\n}\n\n.inner-sidenav-content .footer {\n  height: 56px;\n  margin: 0 -8px -8px -8px;\n  padding: 0 16px;\n}\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options .control {\n  padding: 6px 14px;\n}\n\n.options .control div {\n  padding: 6px 0;\n}\n\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options .control .skin-primary {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options .control .skin-primary.indigo-light {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.teal-light {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options .control .skin-primary.teal-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.red-light {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options .control .skin-primary.red-light .skin-secondary {\n  border-bottom-color: #ececec;\n}\n\n.options .control .skin-primary.blue-dark {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.green-dark {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options .control .skin-primary.green-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .control .skin-primary.pink-dark {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n  border-bottom-color: #262626;\n}\n\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n\n.options .mat-slide-toggle {\n  height: auto;\n}\n\n.options .ps {\n  height: calc(100% - 48px);\n}\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon .mat-icon {\n  -webkit-animation: spin 8s linear infinite;\n  animation: spin 8s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top:hover {\n  opacity: 0.9;\n}\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlDRVk7RUREWixnQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUNJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUFRO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQ2pCSztFRGtCTCxpQkFBQTtBQUVaOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQ3pCZTtFRDBCZixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQ3RCYztFRHVCZCx1Q0FBQTtBQUFGOztBQUNFO0VBQ0Usc0NBQUE7QUFDSjs7QUFDRTtFQUNFLFlDcEJZO0VEcUJaLHdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFlDeENZO0VEeUNaLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUFRO0VBQ0ksY0FBQTtBQUVaOztBQUFRO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtBQUVaOztBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVo7O0FBRFk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0FBR2hCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQUNJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUFRO0VBQ0ksYUFBQTtBQUVaOztBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUNJO0VBQ0kseUJBQUE7QUFDUjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQURJO0VBQ0ksMENBQUE7RUFFQSxrQ0FBQTtBQUdSOztBQU1BO0VBQ0k7SUFDSSxpQ0FBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLHlCQUFBO0VBRU47QUFDRjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFLUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZaOztBQUdZO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFEZiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uaG9yaXpvbnRhbC1tZW51e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7ICAgIFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgJi5zdGlja3l7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLmZpeGVkLXRvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLXNpZGVuYXYtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDokdG9vbGJhci1oZWlnaHQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7ICBcclxuICBwYWRkaW5nOiAkaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gKCN7JHRvb2xiYXItaGVpZ2h0fSArICN7JGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nfSoyKSk7XHJcbiAgLmhhcy1mb290ZXJ7ICBcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICg0NXB4ICsgI3skZm9vdGVyLWhlaWdodH0pKTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7IFxyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRyb2x7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzJweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmluZGlnby1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50ZWFsLWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibHVlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW4tZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5waW5rLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgfVxyXG59XHJcbi5vcC1pbWFnZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm9wdGlvbnMtaWNvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvcm17XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiXX0= */";
      /***/
    },

    /***/
    "CJsP":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blank/blank.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function CJsP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "DPbX":
    /*!*********************************************************************!*\
      !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FlagsMenuComponent */

    /***/
    function DPbX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function () {
        return FlagsMenuComponent;
      });
      /* harmony import */


      var _raw_loader_flags_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./flags-menu.component.html */
      "JnnW");
      /* harmony import */


      var _flags_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./flags-menu.component.scss */
      "ozPV");
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

      var FlagsMenuComponent = /*#__PURE__*/function () {
        function FlagsMenuComponent(appSettings) {
          _classCallCheck(this, FlagsMenuComponent);

          this.appSettings = appSettings;
          this.settings = this.appSettings.settings;
        }

        _createClass(FlagsMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlagsMenuComponent;
      }();

      FlagsMenuComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      FlagsMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flags-menu',
        template: _raw_loader_flags_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_flags_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], FlagsMenuComponent);
      /***/
    },

    /***/
    "DXe4":
    /*!*********************************************!*\
      !*** ./src/app/theme/pipes/pipes.module.ts ***!
      \*********************************************/

    /*! exports provided: PipesModule */

    /***/
    function DXe4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagination/pagination.pipe */
      "lOhz");
      /* harmony import */


      var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profilePicture/profilePicture.pipe */
      "jESS");
      /* harmony import */


      var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./search/chat-person-search.pipe */
      "a/O7");
      /* harmony import */


      var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search/user-search.pipe */
      "RoQY");
      /* harmony import */


      var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./truncate/truncate.pipe */
      "dG2X");
      /* harmony import */


      var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search/mail-search.pipe */
      "z9SC");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]],
        exports: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"], _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"], _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"], _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"], _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "E+0p":
    /*!*******************************************************************!*\
      !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UserMenuComponent */

    /***/
    function E0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
        return UserMenuComponent;
      });
      /* harmony import */


      var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "KSy2");
      /* harmony import */


      var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-menu.component.scss */
      "W+v9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var UserMenuComponent = /*#__PURE__*/function () {
        function UserMenuComponent() {
          _classCallCheck(this, UserMenuComponent);

          this.userImage = '../assets/img/users/user.jpg';
        }

        _createClass(UserMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserMenuComponent;
      }();

      UserMenuComponent.ctorParameters = function () {
        return [];
      };

      UserMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-menu',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], UserMenuComponent);
      /***/
    },

    /***/
    "EUOv":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function EUOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content id=\"main\" perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"primary\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> \r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>                \r\n                    <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <app-applications fxShow=\"false\" fxShow.gt-sm></app-applications>\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar id=\"horizontal-menu\" color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\"  \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <div [class.has-footer]=\"settings.hasFooter\">\r\n                <router-outlet></router-outlet>\r\n            </div>           \r\n            <div *ngIf=\"settings.hasFooter\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"footer bg-primary\">\r\n                <div>\r\n                    <a mat-raised-button color=\"accent\" href=\"https://themeforest.net/item/gradus-angular-5-material-design-admin-template/21241729\" target=\"_blank\">\r\n                        <mat-icon class=\"mx-2\">shopping_cart</mat-icon>Purchase GRADUS\r\n                    </a>\r\n                </div>\r\n                <div>\r\n                    <small>Copyright © 2019 All Rights Reserved</small>\r\n                </div>\r\n            </div> \r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div #backToTop fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Has Footer</span>\r\n                    <mat-slide-toggle [checked]=\"settings.hasFooter\" (change)=\"settings.hasFooter = !settings.hasFooter\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "FMwR":
    /*!*********************************************************************!*\
      !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FullScreenComponent */

    /***/
    function FMwR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function () {
        return FullScreenComponent;
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

      var FullScreenComponent = /*#__PURE__*/function () {
        function FullScreenComponent() {
          _classCallCheck(this, FullScreenComponent);

          this.toggle = false;
        }

        _createClass(FullScreenComponent, [{
          key: "requestFullscreen",
          value: function requestFullscreen(elem) {
            if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
              elem.webkitRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
            } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
            } else {
              console.log('Fullscreen API is not supported.');
            }
          }
        }, {
          key: "exitFullscreen",
          value: function exitFullscreen() {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
            } else {
              console.log('Fullscreen API is not supported.');
            }
          }
        }, {
          key: "getFullscreen",
          value: function getFullscreen() {
            if (this.expand) {
              this.requestFullscreen(document.documentElement);
            }

            if (this.compress) {
              this.exitFullscreen();
            }
          }
        }, {
          key: "onFullScreenChange",
          value: function onFullScreenChange() {
            var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            if (fullscreenElement != null) {
              this.toggle = true;
            } else {
              this.toggle = false;
            }
          }
        }]);

        return FullScreenComponent;
      }();

      FullScreenComponent.propDecorators = {
        expand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['expand']
        }],
        compress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['compress']
        }],
        getFullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onFullScreenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      };
      FullScreenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fullscreen',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
      })], FullScreenComponent);
      /***/
    },

    /***/
    "Ffe/":
    /*!***********************************************!*\
      !*** ./src/app/theme/components/menu/menu.ts ***!
      \***********************************************/

    /*! exports provided: verticalMenuItems, horizontalMenuItems */

    /***/
    function Ffe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function () {
        return verticalMenuItems;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function () {
        return horizontalMenuItems;
      });
      /* harmony import */


      var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu.model */
      "ySTs");

      var verticalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Projects', '/profile/projects', null, 'note', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](55, 'Schedule', '/schedule', null, 'event', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'more_horiz', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder_open', null, true, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder_open', null, true, 141), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder_open', null, true, 142), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)];
      var horizontalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 70), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](49, 'Profile', null, null, 'person', null, true, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Projects', '/profile/projects', null, 'note', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](55, 'Schedule', '/schedule', null, 'event', null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)];
      /***/
    },

    /***/
    "Iasc":
    /*!*******************************************************************!*\
      !*** ./src/app/theme/components/messages/messages.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Iasc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFBUjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNaO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNaO0FBRUk7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFSIiwiZmlsZSI6Im1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Vze1xyXG4gICAgLm1hdC10YWItbGFiZWx7XHJcbiAgICAgICAgbWluLXdpZHRoOiA5My4zcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIHNwYW4ubmFtZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLmluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIHNwYW4udGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH0gIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LTF7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMTNweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "JnnW":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JnnW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>";
      /***/
    },

    /***/
    "KSy2":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KSy2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"/profile/projects\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/profile/user-info\"> \r\n            <mat-icon>edit</mat-icon>\r\n            <span>Edit Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>";
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
        exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"]],
        declarations: []
      })], SharedModule);
      /***/
    },

    /***/
    "QEQa":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QEQa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex class=\"flex-p\"> <h4>Search results...</h4></div>\r\n</div>";
      /***/
    },

    /***/
    "RoQY":
    /*!********************************************************!*\
      !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
      \********************************************************/

    /*! exports provided: UserSearchPipe */

    /***/
    function RoQY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function () {
        return UserSearchPipe;
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

      var UserSearchPipe = /*#__PURE__*/function () {
        function UserSearchPipe() {
          _classCallCheck(this, UserSearchPipe);
        }

        _createClass(UserSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (user) {
                if (user.profile.name) {
                  return user.profile.name.search(searchText) !== -1;
                } else {
                  return user.username.search(searchText) !== -1;
                }
              });
            }
          }
        }]);

        return UserSearchPipe;
      }();

      UserSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'UserSearchPipe',
        pure: false
      })], UserSearchPipe);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.settings */
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

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(appSettings) {
          _classCallCheck(this, AppComponent);

          this.appSettings = appSettings;
          this.settings = this.appSettings.settings;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], AppComponent);
      /***/
    },

    /***/
    "TSCT":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/components/sidenav/sidenav.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function TSCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 212px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7O0FBQVk7RUFDSSxlQUFBO0FBRWhCOztBQUFZO0VBQ0ksZUFBQTtBQUVoQjs7QUFFSTtFQUNJLGFDaENvQjtBRGdDNUI7O0FBS0k7RUFDSSx5QkFBQTtBQUZSOztBQUtRO0VBQ0ksMEJBQUE7QUFIWiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXYtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWJsb2Nre1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZvLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc2l0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBoZWlnaHQ6ICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0O1xyXG4gICAgfSAgICAgIFxyXG59IFxyXG5cclxuLnNpZGVuYXYtbWVudS1vdXRlcntcclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSk7IFxyXG4gICAgfSAgICAgICBcclxuICAgICYudXNlci1ibG9jay1zaG93e1xyXG4gICAgICAgIC5wc3sgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0ICsgJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHR9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4kdG9vbGJhci1oZWlnaHQ6IDU2cHg7IFxyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuJHNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7XHJcbiRtaW5pLXNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDcwcHg7XHJcblxyXG4kZmxleC1kaXN0YW5jZTogOHB4O1xyXG4kaW5uZXItc2lkZW5hdi1jb250ZW50LXBhZGRpbmc6ICRmbGV4LWRpc3RhbmNlO1xyXG5cclxuLy9Mb2dpbiwgUmVnaXN0ZXIsIEVycm9ycyBib3hcclxuJGJveC1oZWlnaHQ6IDE4NnB4O1xyXG4kYm94LXBvc2l0aW9uOiAzNHB4O1xyXG4kcmVnaXN0ZXItYm94LWhlaWdodDogMzAwcHg7XHJcblxyXG4kZm9vdGVyLWhlaWdodDogNTZweDsgIl19 */";
      /***/
    },

    /***/
    "Tqpr":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidenav/sidenav.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tqpr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n    <a mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n    <a *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a> \r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.sidenavUserBlock\"> \r\n    <div [fxLayout]=\"(settings.menuType != 'default') ? 'column' : 'row'\" \r\n         [fxLayoutAlign]=\"(settings.menuType != 'default') ? 'center center' : 'space-around center'\" class=\"user-info-wrapper\">\r\n        <img [src]=\"userImage\" alt=\"user-image\">\r\n        <div class=\"user-info\">\r\n            <p class=\"name\">Emilio Verdines</p>\r\n            <p *ngIf=\"settings.menuType == 'default'\" class=\"position\">Web developer <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"settings.menuType != 'mini'\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n        <button mat-icon-button><mat-icon>person_outline</mat-icon></button>\r\n        <a mat-icon-button routerLink=\"/mailbox\">\r\n            <mat-icon>mail_outline</mat-icon>\r\n        </a>\r\n        <a mat-icon-button routerLink=\"/login\">\r\n            <mat-icon>power_settings_new</mat-icon>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<perfect-scrollbar class=\"sidenav-menu-outer\" [class.user-block-show]=\"settings.sidenavUserBlock\">\r\n    <div id=\"vertical-menu\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n    </div>   \r\n</perfect-scrollbar>";
      /***/
    },

    /***/
    "ULHZ":
    /*!*********************************************************!*\
      !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
      \*********************************************************/

    /*! exports provided: CustomOverlayContainer */

    /***/
    function ULHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function () {
        return CustomOverlayContainer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CustomOverlayContainer = /*#__PURE__*/function (_angular_cdk_overlay_) {
        _inherits(CustomOverlayContainer, _angular_cdk_overlay_);

        var _super = _createSuper(CustomOverlayContainer);

        function CustomOverlayContainer() {
          _classCallCheck(this, CustomOverlayContainer);

          return _super.apply(this, arguments);
        }

        _createClass(CustomOverlayContainer, [{
          key: "_createContainer",
          value: function _createContainer() {
            var container = document.createElement('div');
            container.classList.add('cdk-overlay-container');
            document.getElementById('app').appendChild(container);
            this._containerElement = container;
          }
        }]);

        return CustomOverlayContainer;
      }(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]);

      CustomOverlayContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CustomOverlayContainer);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>loading...</h4>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "W+v9":
    /*!*********************************************************************!*\
      !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function WV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0JBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJ1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1tZW51e1xyXG4gICAgLm1hdC10b29sYmFyLCAubWF0LXRvb2xiYXItcm93e1xyXG4gICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51c2VyLWluZm97XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LW1lbnUtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Xdm6":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/components/applications/applications.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ApplicationsComponent */

    /***/
    function Xdm6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
        return ApplicationsComponent;
      });
      /* harmony import */


      var _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./applications.component.html */
      "d6sz");
      /* harmony import */


      var _applications_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./applications.component.scss */
      "jhT3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ApplicationsComponent = /*#__PURE__*/function () {
        function ApplicationsComponent() {
          _classCallCheck(this, ApplicationsComponent);
        }

        _createClass(ApplicationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApplicationsComponent;
      }();

      ApplicationsComponent.ctorParameters = function () {
        return [];
      };

      ApplicationsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-applications',
        template: _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [_applications_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ApplicationsComponent);
      /***/
    },

    /***/
    "XuPb":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
      \********************************************************************************/

    /*! exports provided: VerticalMenuComponent */

    /***/
    function XuPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function () {
        return VerticalMenuComponent;
      });
      /* harmony import */


      var _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./vertical-menu.component.html */
      "4xRd");
      /* harmony import */


      var _vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vertical-menu.component.scss */
      "Y1we");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app.settings */
      "/RaO");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../menu.service */
      "8fVf");

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

      var VerticalMenuComponent = /*#__PURE__*/function () {
        function VerticalMenuComponent(appSettings, menuService, router) {
          _classCallCheck(this, VerticalMenuComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.router = router;
          this.onClickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.settings = this.appSettings.settings;
        }

        _createClass(VerticalMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.parentMenu = this.menuItems.filter(function (item) {
              return item.parentId == _this3.menuParentId;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this4.settings.fixedHeader) {
                  var mainContent = document.getElementById('main-content');

                  if (mainContent) {
                    mainContent.scrollTop = 0;
                  }
                } else {
                  document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
              }
            });
          }
        }, {
          key: "onClick",
          value: function onClick(menuId) {
            this.menuService.toggleMenuItem(menuId);
            this.menuService.closeOtherSubMenus(this.menuItems, menuId);
            this.onClickMenuItem.emit(menuId);
          }
        }]);

        return VerticalMenuComponent;
      }();

      VerticalMenuComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      VerticalMenuComponent.propDecorators = {
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuItems']
        }],
        menuParentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuParentId']
        }],
        onClickMenuItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      VerticalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vertical-menu',
        template: _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
        styles: [_vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], VerticalMenuComponent);
      /***/
    },

    /***/
    "Y1we":
    /*!**********************************************************************************!*\
      !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function Y1we(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFHWTtFQUdJLHlCQUFBO0FBRGhCOztBQU1JO0VBQ0ksa0JBQUE7QUFKUjs7QUFRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FBTko7O0FDNUJRO0VBS1Esa0JBQUE7QUQwQmhCOztBQy9CUTtFQUtRLGtCQUFBO0FENkJoQjs7QUNsQ1E7RUFLUSxrQkFBQTtBRGdDaEI7O0FDckNRO0VBS1EsbUJBQUE7QURtQ2hCOztBQ3hDUTtFQUtRLG1CQUFBO0FEc0NoQjs7QUMzQ1E7RUFLUSxtQkFBQTtBRHlDaEI7O0FDOUNRO0VBS1EsbUJBQUE7QUQ0Q2hCOztBQ2pEUTtFQUtRLG1CQUFBO0FEK0NoQjs7QUNwRFE7RUFLUSxtQkFBQTtBRGtEaEI7O0FBcEJJO0VBQ0ksa0JBQUE7QUFzQlI7O0FBcEJJO0VBQ0ksaUJBQUE7RUFHQSxvQ0FBQTtBQXNCUiIsImZpbGUiOiJ2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDA7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAmLmV4cGFuZGVke1xyXG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIEBpZiAkZGlyZWN0aW9uID09IFwicnRsXCIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggKiAkaTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "YQc0":
    /*!**************************************************!*\
      !*** ./src/app/pages/search/search.component.ts ***!
      \**************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function YQc0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./search.component.html */
      "QEQa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent() {
          _classCallCheck(this, SearchComponent);
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchComponent;
      }();

      SearchComponent.ctorParameters = function () {
        return [];
      };

      SearchComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: _raw_loader_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [])], SearchComponent);
      /***/
    },

    /***/
    "Z0TS":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z0TS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./theme/utils/custom-overlay-container */
      "ULHZ");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      "L/mj");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./theme/pipes/pipes.module */
      "DXe4");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/pages.component */
      "8D7W");
      /* harmony import */


      var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/blank/blank.component */
      "uBIW");
      /* harmony import */


      var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/search/search.component */
      "YQc0");
      /* harmony import */


      var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/errors/not-found/not-found.component */
      "wWTd");
      /* harmony import */


      var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/errors/error/error.component */
      "9nG8");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.settings */
      "/RaO");
      /* harmony import */


      var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./theme/components/sidenav/sidenav.component */
      "ciF+");
      /* harmony import */


      var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./theme/components/menu/vertical-menu/vertical-menu.component */
      "XuPb");
      /* harmony import */


      var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */
      "r/Be");
      /* harmony import */


      var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./theme/components/breadcrumb/breadcrumb.component */
      "q+wT");
      /* harmony import */


      var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./theme/components/flags-menu/flags-menu.component */
      "DPbX");
      /* harmony import */


      var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./theme/components/fullscreen/fullscreen.component */
      "FMwR");
      /* harmony import */


      var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./theme/components/applications/applications.component */
      "Xdm6");
      /* harmony import */


      var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./theme/components/messages/messages.component */
      "1yZR");
      /* harmony import */


      var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./theme/components/user-menu/user-menu.component */
      "E+0p");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        wheelPropagation: true,
        suppressScrollX: true
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
        }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__["PagesComponent"], _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_15__["BlankComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"], _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"], _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__["SidenavComponent"], _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_21__["VerticalMenuComponent"], _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_22__["HorizontalMenuComponent"], _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__["BreadcrumbComponent"], _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__["FlagsMenuComponent"], _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__["FullScreenComponent"], _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationsComponent"], _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"], _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__["UserMenuComponent"]],
        providers: [_app_settings__WEBPACK_IMPORTED_MODULE_19__["AppSettings"], {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"],
          useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_5__["CustomOverlayContainer"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a/O7":
    /*!***************************************************************!*\
      !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
      \***************************************************************/

    /*! exports provided: ChatPersonSearchPipe */

    /***/
    function aO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function () {
        return ChatPersonSearchPipe;
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

      var ChatPersonSearchPipe = /*#__PURE__*/function () {
        function ChatPersonSearchPipe() {
          _classCallCheck(this, ChatPersonSearchPipe);
        }

        _createClass(ChatPersonSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (message) {
                if (message.author) {
                  return message.author.search(searchText) !== -1;
                }
              });
            }
          }
        }]);

        return ChatPersonSearchPipe;
      }();

      ChatPersonSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'ChatPersonSearchPipe'
      })], ChatPersonSearchPipe);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/pages.component */
      "8D7W");
      /* harmony import */


      var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/blank/blank.component */
      "uBIW");
      /* harmony import */


      var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/search/search.component */
      "YQc0");
      /* harmony import */


      var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/errors/not-found/not-found.component */
      "wWTd");
      /* harmony import */


      var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/errors/error/error.component */
      "9nG8");

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
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-dashboard-dashboard-module */
            [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module~pages-mailbox-mailbox-module~pag~a3ad02c4"), __webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/dashboard/dashboard.module */
            "/2RN")).then(function (m) {
              return m.DashboardModule;
            });
          },
          data: {
            breadcrumb: 'Dashboard'
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-users-users-module */
            "pages-users-users-module").then(__webpack_require__.bind(null,
            /*! ./pages/users/users.module */
            "+P1L")).then(function (m) {
              return m.UsersModule;
            });
          },
          data: {
            breadcrumb: 'Users'
          }
        }, {
          path: 'ui',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-ui-ui-module */
            "pages-ui-ui-module").then(__webpack_require__.bind(null,
            /*! ./pages/ui/ui.module */
            "BTGb")).then(function (m) {
              return m.UiModule;
            });
          },
          data: {
            breadcrumb: 'UI'
          }
        }, {
          path: 'form-controls',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-form-controls-form-controls-module */
            "pages-form-controls-form-controls-module").then(__webpack_require__.bind(null,
            /*! ./pages/form-controls/form-controls.module */
            "j6Lp")).then(function (m) {
              return m.FormControlsModule;
            });
          },
          data: {
            breadcrumb: 'Form Controls'
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-tables-tables-module */
            [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module~pages-mailbox-mailbox-module~pag~a3ad02c4"), __webpack_require__.e("pages-tables-tables-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/tables/tables.module */
            "w2km")).then(function (m) {
              return m.TablesModule;
            });
          },
          data: {
            breadcrumb: 'Tables'
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-icons-icons-module */
            "pages-icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./pages/icons/icons.module */
            "lvb/")).then(function (m) {
              return m.IconsModule;
            });
          },
          data: {
            breadcrumb: 'Material Icons'
          }
        }, {
          path: 'drag-drop',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-drag-drop-drag-drop-module */
            "pages-drag-drop-drag-drop-module").then(__webpack_require__.bind(null,
            /*! ./pages/drag-drop/drag-drop.module */
            "VeKa")).then(function (m) {
              return m.DragDropModule;
            });
          },
          data: {
            breadcrumb: 'Drag & Drop'
          }
        }, {
          path: 'schedule',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-schedule-schedule-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-schedule-schedule-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/schedule/schedule.module */
            "nLfy")).then(function (m) {
              return m.ScheduleModule;
            });
          },
          data: {
            breadcrumb: 'Schedule'
          }
        }, {
          path: 'mailbox',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-mailbox-mailbox-module */
            [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module~pages-mailbox-mailbox-module~pag~a3ad02c4"), __webpack_require__.e("pages-mailbox-mailbox-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/mailbox/mailbox.module */
            "5W6t")).then(function (m) {
              return m.MailboxModule;
            });
          },
          data: {
            breadcrumb: 'Mailbox'
          }
        }, {
          path: 'chat',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-chat-chat-module */
            "pages-chat-chat-module").then(__webpack_require__.bind(null,
            /*! ./pages/chat/chat.module */
            "EdD2")).then(function (m) {
              return m.ChatModule;
            });
          },
          data: {
            breadcrumb: 'Chat'
          }
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-maps-maps-module */
            "pages-maps-maps-module").then(__webpack_require__.bind(null,
            /*! ./pages/maps/maps.module */
            "MWin")).then(function (m) {
              return m.MapsModule;
            });
          },
          data: {
            breadcrumb: 'Maps'
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-charts-charts-module */
            [__webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module~pages-mailbox-mailbox-module~pag~a3ad02c4"), __webpack_require__.e("default~pages-charts-charts-module~pages-dashboard-dashboard-module"), __webpack_require__.e("pages-charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/charts/charts.module */
            "VkkC")).then(function (m) {
              return m.ChartsModule;
            });
          },
          data: {
            breadcrumb: 'Charts'
          }
        }, {
          path: 'dynamic-menu',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-dynamic-menu-dynamic-menu-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-dynamic-menu-dynamic-menu-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/dynamic-menu/dynamic-menu.module */
            "yqEH")).then(function (m) {
              return m.DynamicMenuModule;
            });
          },
          data: {
            breadcrumb: 'Dynamic Menu'
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-profile-profile-module */
            "pages-profile-profile-module").then(__webpack_require__.bind(null,
            /*! ./pages/profile/profile.module */
            "723k")).then(function (m) {
              return m.ProfileModule;
            });
          },
          data: {
            breadcrumb: 'Profile'
          }
        }, {
          path: 'blank',
          component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
          data: {
            breadcrumb: 'Blank page'
          }
        }, {
          path: 'search',
          component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
          data: {
            breadcrumb: 'Search'
          }
        }]
      }, {
        path: 'landing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-landing-landing-module */
          "pages-landing-landing-module").then(__webpack_require__.bind(null,
          /*! ./pages/landing/landing.module */
          "CXjK")).then(function (m) {
            return m.LandingModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "fhSy")).then(function (m) {
            return m.RegisterModule;
          });
        }
      }, {
        path: 'error',
        component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
        data: {
          breadcrumb: 'Error'
        }
      }, {
        path: '**',
        component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ciF+":
    /*!***************************************************************!*\
      !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
      \***************************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function ciF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _raw_loader_sidenav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "Tqpr");
      /* harmony import */


      var _sidenav_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidenav.component.scss */
      "TSCT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.settings */
      "/RaO");
      /* harmony import */


      var _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../menu/menu.service */
      "8fVf");

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

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent(appSettings, menuService) {
          _classCallCheck(this, SidenavComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.userImage = '../assets/img/users/user.jpg';
          this.settings = this.appSettings.settings;
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = this.menuService.getVerticalMenuItems();
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.getElementById("vertical-menu");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]
        }];
      };

      SidenavComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidenav',
        template: _raw_loader_sidenav_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
        styles: [_sidenav_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])], SidenavComponent);
      /***/
    },

    /***/
    "d6sz":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d6sz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>";
      /***/
    },

    /***/
    "dG2X":
    /*!*******************************************************!*\
      !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: TruncatePipe */

    /***/
    function dG2X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
        return TruncatePipe;
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

      var TruncatePipe = /*#__PURE__*/function () {
        function TruncatePipe() {
          _classCallCheck(this, TruncatePipe);
        }

        _createClass(TruncatePipe, [{
          key: "transform",
          value: function transform(value, args) {
            var limit = args > 0 ? parseInt(args) : 10;
            return value.length > limit ? value.substring(0, limit) + '...' : value;
          }
        }]);

        return TruncatePipe;
      }();

      TruncatePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'truncate'
      })], TruncatePipe);
      /***/
    },

    /***/
    "fetB":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function fetB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFFUiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "h4o/":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text muted-text\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>";
      /***/
    },

    /***/
    "jESS":
    /*!*******************************************************************!*\
      !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
      \*******************************************************************/

    /*! exports provided: ProfilePicturePipe */

    /***/
    function jESS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function () {
        return ProfilePicturePipe;
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

      var ProfilePicturePipe = /*#__PURE__*/function () {
        function ProfilePicturePipe() {
          _classCallCheck(this, ProfilePicturePipe);
        }

        _createClass(ProfilePicturePipe, [{
          key: "transform",
          value: function transform(input) {
            var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jpg';
            return '../assets/img/profile/' + input + '.' + ext;
          }
        }]);

        return ProfilePicturePipe;
      }();

      ProfilePicturePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'profilePicture'
      })], ProfilePicturePipe);
      /***/
    },

    /***/
    "jhT3":
    /*!***************************************************************************!*\
      !*** ./src/app/theme/components/applications/applications.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function jhT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxVQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7QUFDWjtBQUFZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFFaEIiLCJmaWxlIjoiYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9uc3tcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "lOhz":
    /*!***********************************************************!*\
      !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
      \***********************************************************/

    /*! exports provided: PaginationPipe */

    /***/
    function lOhz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationPipe", function () {
        return PaginationPipe;
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

      var PaginationPipe = /*#__PURE__*/function () {
        function PaginationPipe() {
          _classCallCheck(this, PaginationPipe);
        }

        _createClass(PaginationPipe, [{
          key: "transform",
          value: function transform(data, args) {
            if (!args) {
              args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
              };
            }

            return this.paginate(data, args.pageSize, args.pageIndex);
          }
        }, {
          key: "paginate",
          value: function paginate(array, page_size, page_number) {
            return array.slice(page_number * page_size, (page_number + 1) * page_size);
          }
        }]);

        return PaginationPipe;
      }();

      PaginationPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'pagination'
      })], PaginationPipe);
      /***/
    },

    /***/
    "ndHc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/error/error.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ndHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>warning</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">500</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Internal server error</span>  \r\n                        <p class=\"box-text\">Opps, something went wrong.</p> \r\n                        <p class=\"box-text\">You can go to home page.</p> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">GO HOME</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "o7Tx":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o7Tx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "ozPV":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function ozPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoiZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFnc3tcclxuICAgIGltZ3tcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "poKk":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function poKk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>error</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                        <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter search keyword...\">\r\n                        </mat-form-field>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"searchResult()\">SUBMIT</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>";
      /***/
    },

    /***/
    "q+wT":
    /*!*********************************************************************!*\
      !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function qWT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "o7Tx");
      /* harmony import */


      var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./breadcrumb.component.scss */
      "fetB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
          var _this5 = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.title = title;
          this.breadcrumbs = [];
          this.settings = this.appSettings.settings;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
              _this5.breadcrumbs = [];

              _this5.parseRoute(_this5.router.routerState.snapshot.root);

              _this5.pageTitle = "";

              _this5.breadcrumbs.forEach(function (breadcrumb) {
                _this5.pageTitle += ' > ' + breadcrumb.name;
              });

              _this5.title.setTitle(_this5.settings.name + _this5.pageTitle);
            }
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "parseRoute",
          value: function parseRoute(node) {
            if (node.data['breadcrumb']) {
              if (node.url.length) {
                var urlSegments = [];
                node.pathFromRoot.forEach(function (routerState) {
                  urlSegments = urlSegments.concat(routerState.url);
                });
                var url = urlSegments.map(function (urlSegment) {
                  return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                  name: node.data['breadcrumb'],
                  url: '/' + url
                });
              }
            }

            if (node.firstChild) {
              this.parseRoute(node.firstChild);
            }
          }
        }, {
          key: "closeSubMenus",
          value: function closeSubMenus() {
            var menu = document.querySelector(".sidenav-menu-outer");

            if (menu) {
              for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];

                if (child) {
                  if (child.children[0].classList.contains('expanded')) {
                    child.children[0].classList.remove('expanded');
                    child.children[1].classList.remove('show');
                  }
                }
              }
            }
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }];
      };

      BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])], BreadcrumbComponent);
      /***/
    },

    /***/
    "r/Be":
    /*!************************************************************************************!*\
      !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
      \************************************************************************************/

    /*! exports provided: HorizontalMenuComponent */

    /***/
    function rBe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function () {
        return HorizontalMenuComponent;
      });
      /* harmony import */


      var _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./horizontal-menu.component.html */
      "Z0TS");
      /* harmony import */


      var _horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horizontal-menu.component.scss */
      "svpH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app.settings */
      "/RaO");
      /* harmony import */


      var _menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../menu.service */
      "8fVf");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

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

      var HorizontalMenuComponent = /*#__PURE__*/function () {
        function HorizontalMenuComponent(appSettings, menuService, router) {
          _classCallCheck(this, HorizontalMenuComponent);

          this.appSettings = appSettings;
          this.menuService = menuService;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(HorizontalMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.menuItems = this.menuService.getHorizontalMenuItems();
            this.menuItems = this.menuItems.filter(function (item) {
              return item.parentId == _this6.menuParentId;
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this7 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (_this7.settings.fixedHeader) {
                  var mainContent = document.getElementById('main-content');

                  if (mainContent) {
                    mainContent.scrollTop = 0;
                  }
                } else {
                  document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
              }
            });
          }
        }]);

        return HorizontalMenuComponent;
      }();

      HorizontalMenuComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
        }, {
          type: _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HorizontalMenuComponent.propDecorators = {
        menuParentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['menuParentId']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"]]
        }]
      };
      HorizontalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-horizontal-menu',
        template: _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]],
        styles: [_horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HorizontalMenuComponent);
      /***/
    },

    /***/
    "svpH":
    /*!**************************************************************************************!*\
      !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function svpH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7QUFDSTtFQUNJLFlDRlM7RURHVCxnQkFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQUNSO0FBQVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVaO0FBRUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFVBQUE7RUFDQSxNQUFBO0FBRUoiLCJmaWxlIjoiaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuLmhvcml6b250YWwtbWVudS1pdGVte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAkaG9yaXpvbnRhbC1tZW51LWhlaWdodDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtbWVudS1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaG9yaXpvbnRhbC1tZW51LWl0ZW06aG92ZXIgPiAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLmhvcml6b250YWwtc3ViLW1lbnUgLmhvcml6b250YWwtc3ViLW1lbnV7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG59IiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiXX0= */";
      /***/
    },

    /***/
    "uBIW":
    /*!************************************************!*\
      !*** ./src/app/pages/blank/blank.component.ts ***!
      \************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function uBIW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _raw_loader_blank_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./blank.component.html */
      "CJsP");
      /* harmony import */


      var _blank_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blank.component.css */
      "vkzL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BlankComponent = /*#__PURE__*/function () {
        function BlankComponent() {
          _classCallCheck(this, BlankComponent);
        }

        _createClass(BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankComponent;
      }();

      BlankComponent.ctorParameters = function () {
        return [];
      };

      BlankComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-blank',
        template: _raw_loader_blank_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blank_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], BlankComponent);
      /***/
    },

    /***/
    "vkzL":
    /*!*************************************************!*\
      !*** ./src/app/pages/blank/blank.component.css ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function vkzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "wWTd":
    /*!***************************************************************!*\
      !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
      \***************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function wWTd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "poKk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
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

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent(appSettings, router) {
          _classCallCheck(this, NotFoundComponent);

          this.appSettings = appSettings;
          this.router = router;
          this.settings = this.appSettings.settings;
        }

        _createClass(NotFoundComponent, [{
          key: "searchResult",
          value: function searchResult() {
            this.router.navigate(['/search']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.settings.loadingSpinner = false;
          }
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NotFoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NotFoundComponent);
      /***/
    },

    /***/
    "wdBf":
    /*!***************************************!*\
      !*** ./src/app/app.settings.model.ts ***!
      \***************************************/

    /*! exports provided: Settings */

    /***/
    function wdBf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Settings", function () {
        return Settings;
      });

      var Settings = function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl, hasFooter) {
        _classCallCheck(this, Settings);

        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
        this.hasFooter = hasFooter;
      };
      /***/

    },

    /***/
    "ySTs":
    /*!*****************************************************!*\
      !*** ./src/app/theme/components/menu/menu.model.ts ***!
      \*****************************************************/

    /*! exports provided: Menu */

    /***/
    function ySTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Menu", function () {
        return Menu;
      });

      var Menu = function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        _classCallCheck(this, Menu);

        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
      };
      /***/

    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner h4 {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFLSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUdBLGdEQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFHQSxvRUFBQTtFQUNBLDREQUFBO0FBRVI7O0FBRUE7RUFDSTtJQUFLLFVBQUE7RUFFUDtFQURFO0lBQUssVUFBQTtFQUlQO0VBSEU7SUFBSyxVQUFBO0VBTVA7RUFMRTtJQUFLLFVBQUE7RUFRUDtBQUNGOztBQURBO0VBQ0k7SUFBSyxVQUFBO0VBa0JQO0VBakJFO0lBQUssVUFBQTtFQW9CUDtFQW5CRTtJQUFLLFVBQUE7RUFzQlA7RUFyQkU7SUFBSyxVQUFBO0VBd0JQO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuXHJcbiNhcHAtc3Bpbm5lcntcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgJi5oaWRle1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwOyBcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "z9SC":
    /*!********************************************************!*\
      !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
      \********************************************************/

    /*! exports provided: MailSearchPipe */

    /***/
    function z9SC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function () {
        return MailSearchPipe;
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

      var MailSearchPipe = /*#__PURE__*/function () {
        function MailSearchPipe() {
          _classCallCheck(this, MailSearchPipe);
        }

        _createClass(MailSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            var searchText = new RegExp(args, 'ig');

            if (value) {
              return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                  if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                    return true;
                  }
                }
              });
            }
          }
        }]);

        return MailSearchPipe;
      }();

      MailSearchPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
      })], MailSearchPipe);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map