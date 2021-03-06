(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mailbox-mailbox-module"], {
    /***/
    "5W6t":
    /*!*************************************************!*\
      !*** ./src/app/pages/mailbox/mailbox.module.ts ***!
      \*************************************************/

    /*! exports provided: routes, MailboxModule */

    /***/
    function W6t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxModule", function () {
        return MailboxModule;
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


      var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-quill */
      "CzEO");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../theme/pipes/pipes.module */
      "DXe4");
      /* harmony import */


      var _mailbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mailbox.component */
      "HJyK");

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
        component: _mailbox_component__WEBPACK_IMPORTED_MODULE_8__["MailboxComponent"],
        pathMatch: 'full'
      }];

      var MailboxModule = function MailboxModule() {
        _classCallCheck(this, MailboxModule);
      };

      MailboxModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_mailbox_component__WEBPACK_IMPORTED_MODULE_8__["MailboxComponent"]]
      })], MailboxModule);
      /***/
    },

    /***/
    "C2KF":
    /*!**************************************************!*\
      !*** ./src/app/pages/mailbox/mailbox.service.ts ***!
      \**************************************************/

    /*! exports provided: MailboxService */

    /***/
    function C2KF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxService", function () {
        return MailboxService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mail_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mail.model */
      "lmhS");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var Mails = [new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](1, 'Envato Market', 'assets/img/app/envato.jpg', 'do-not-reply@market.envato.com', 'Your updated item has been approved', '4:08 PM', '<p>Congratulations! Your update to Azimuth - Angular 2 Admin Template on ThemeForest has been approved. ' + 'You can view your item here: </p>' + '<p><a href="http://themeforest.net/item/azimuth-angular-2-admin-template/19182105" target="blank">http://themeforest.net/item/azimuth-angular-2-admin-template/19182105</a></p>' + '<p>Thanks for your submission!</p>' + '<p>Regards,<br> Envato Market Team</p>', false, [], true, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](2, 'Josiah Fromdahl', 'assets/img/profile/bruno.jpg', 'Reekie8647@gmail.com', 'Useful tool for those who are involved in SEO', '9:47 AM', '<p>Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. ' + 'This particular tool will provide you with quick website review and SEO audit of the websites you???ve created so ' + 'you will be able to determine if and where any changes should be made so you can make it as effective ' + 'as possible when it comes to getting visitors and keeping them interested. ' + 'Unlike many similar tools, website reviewer is completely free.</p>', true, ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'], true, false, true, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](3, 'Google Cloud Platform', 'assets/img/app/google-platform.png', 'CloudPlatform-noreply@google.com', 'Lessons from the field: surviving success with Customer Reliability Engineering', 'Jan 5', '<h4>TRENDING</h4>' + '<p>For those who missed the early adoption of Infrastructure as a Service circa 2007,' + 'this in-depth history stresses why businesses need to begin building around "serverless" architectures.</p>' + '<p>A stress test led by Pivotal???s Cloud Foundry team ran 250,000 real-life app containers on Google Compute Engine. ' + 'GCP made it possible to stand the environment up in hours, and scaled it without pre-planning.</p>' + '<p>Dig in to a new site packed with open-source tools and resources that aims to make it easy for anyone to explore, develop, and share AI creations. ' + 'Play an AI duet, or have your phone guess what you???re drawing.</p>', false, [], false, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](4, 'Microsoft Visual Studio', 'assets/img/app/vs.jpg', 'MVS@e-mail.microsoft.com', 'Welcome to Visual Studio Team Services', '24.12.2016', '<p>Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open,' + 'cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate ' + 'rapidly.</p> <p>Rogue security software scams. Rogue security software, also known as "scareware," is software that ' + 'appears to be beneficial from a security perspective but provides limited or no security, generates erroneous or ' + 'misleading alerts, or attempts to lure you into participating in fraudulent transactions. These scams can appear ' + 'in email, online advertisements, your social networking site, search engine results, or even in pop-up windows on ' + 'your computer that might appear to be part of your operating system, but are not.</p>', false, [], true, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](5, 'Draft', '', '', 'no subject', '4:46 PM', '', false, [], false, false, false, true, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](6, 'Draft', '', '', 'Please confirm your email', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu dui hendrerit, quis ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.', false, [], false, false, false, true, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](7, 'MailChimp', 'assets/img/app/mailchimp.jpg', 'hello@mailchimp.com', 'Our 2016 annual report', '22.12.2016', '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it???s our year in numbers.</p>' + '<p>We???re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we???re even more proud of you and the billions of emails you???ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' + '<p>Cheers to the new year,</p>' + '<p>MailChimp</p>', false, [], false, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](8, 'Bluehost', 'assets/img/app/bluehost.jpg', 'no-reply@e.bluehost.com', 'Your domain privacy may be at risk', '20.12.2016', '<h4>New ICANN Rules Require Accurate Contact Information</h4>' + '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' + '<p>Protect yourself with Domain Privacy.</p>' + '<p><small>Only $11.88 per year.**</small></p>' + '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>', false, [], false, false, true, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](9, 'Vimeo', 'assets/img/users/default-user.jpg', 'vimeo@email.vimeo.com', 'The year\'s best videos and milestones', '20.12.2016', '<h4>Now presenting: 2016\'s best videos</h4>' + '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' + '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>', false, [], false, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](10, 'Andy Dufresne', 'assets/img/profile/adam.jpg', 'andy.dufresne@gmail.com', 'The Shawshank Redemption', '18.11.2016', '<p>From Wikipedia, the free encyclopedia</p>' + '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, ' + 'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, ' + 'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>', false, [], false, true, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](11, 'The Envato Team', 'assets/img/app/envato.jpg', 'donotreply@envato.com', 'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean', '05.09.2016', '<h5>Hey Envato Community Members!</h5>' + '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' + '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' + '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' + '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' + '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we???ve made the change. </li></ul>' + '<p>You will also be able to ask any questions you might have.</p>' + '<p>We will send you another email to let you know when this feature goes live.</p>' + '<p>All the best,</p>' + '<p>The Envato Team</p>', false, [], false, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](12, 'Jonathan Cantu', 'assets/img/avatars/avatar-3.png', 'JCantu@billingsleyco.com', 'Ability to Customize', '02.09.2016', '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>', false, [], false, false, false, false, false, false), new _mail_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](13, 'Jennifer Adam', 'assets/img/profile/julia.jpg', 'jenniferadam2009@gmail.com', 'Guest Post Request - 2016 !!!', '09.05.2016', '<p><b>Hello,</b></p>' + '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles ' + 'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' + '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>', false, [], false, false, false, false, false, false)];

      var MailboxService = /*#__PURE__*/function () {
        function MailboxService() {
          _classCallCheck(this, MailboxService);
        }

        _createClass(MailboxService, [{
          key: "getAllMails",
          value: function getAllMails() {
            return Mails.filter(function (mail) {
              return mail.sent == false && mail.draft == false && mail.trash == false;
            });
          }
        }, {
          key: "getStarredMails",
          value: function getStarredMails() {
            return Mails.filter(function (mail) {
              return mail.starred == true;
            });
          }
        }, {
          key: "getSentMails",
          value: function getSentMails() {
            return Mails.filter(function (mail) {
              return mail.sent == true;
            });
          }
        }, {
          key: "getDraftMails",
          value: function getDraftMails() {
            return Mails.filter(function (mail) {
              return mail.draft == true;
            });
          }
        }, {
          key: "getTrashMails",
          value: function getTrashMails() {
            return Mails.filter(function (mail) {
              return mail.trash == true;
            });
          }
        }, {
          key: "getMail",
          value: function getMail(id) {
            return Mails.find(function (mail) {
              return mail.id === +id;
            });
          }
        }]);

        return MailboxService;
      }();

      MailboxService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MailboxService);
      /***/
    },

    /***/
    "CzEO":
    /*!*******************************************************************!*\
      !*** ./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js ***!
      \*******************************************************************/

    /*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */

    /***/
    function CzEO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function () {
        return QUILL_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function () {
        return QuillEditorBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function () {
        return QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModule", function () {
        return QuillModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillService", function () {
        return QuillService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function () {
        return QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function () {
        return QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultModules", function () {
        return defaultModules;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = [[["", "quill-editor-toolbar", ""]]];
      var _c1 = ["[quill-editor-toolbar]"];
      var defaultModules = {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          header: 1
        }, {
          header: 2
        }], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], [{
          script: 'sub'
        }, {
          script: 'super'
        }], [{
          indent: '-1'
        }, {
          indent: '+1'
        }], [{
          direction: 'rtl'
        }], [{
          size: ['small', false, 'large', 'huge']
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], [{
          color: []
        }, {
          background: []
        }], [{
          font: []
        }], [{
          align: []
        }], ['clean'], ['link', 'image', 'video'] // link and image, video
        ]
      };

      var getFormat = function getFormat(format, configFormat) {
        var passedFormat = format || configFormat;
        return passedFormat || 'html';
      };

      var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');

      var QuillService = /*#__PURE__*/function () {
        function QuillService(config) {
          _classCallCheck(this, QuillService);

          this.config = config;
          this.count = 0;

          if (!this.config) {
            this.config = {
              modules: defaultModules
            };
          }
        }

        _createClass(QuillService, [{
          key: "getQuill",
          value: function getQuill() {
            var _this = this;

            this.count++;

            if (!this.Quill && this.count === 1) {
              this.$importPromise = new Promise(function (resolve) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  var _a, _b, quillImport;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return __webpack_require__.e(
                          /*! import() | quill */
                          "quill").then(__webpack_require__.t.bind(null,
                          /*! quill */
                          "kzlf", 7));

                        case 2:
                          quillImport = _context.sent;
                          this.Quill = quillImport["default"] ? quillImport["default"] : quillImport; // Only register custom options and modules once

                          (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                            var newCustomOption = _this2.Quill["import"](customOption["import"]);

                            newCustomOption.whitelist = customOption.whitelist;

                            _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                          });
                          (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                            var implementation = _ref.implementation,
                                path = _ref.path;

                            _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                          });
                          resolve(this.Quill);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });
            }

            return this.$importPromise;
          }
        }]);

        return QuillService;
      }();

      QuillService.??fac = function QuillService_Factory(t) {
        return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](QUILL_CONFIG_TOKEN));
      };

      QuillService.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"])({
        factory: function QuillService_Factory() {
          return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(QUILL_CONFIG_TOKEN));
        },
        token: QuillService,
        providedIn: "root"
      });

      QuillService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QUILL_CONFIG_TOKEN]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [QUILL_CONFIG_TOKEN]
            }]
          }];
        }, null);
      })(); // tslint:disable-next-line:directive-class-suffix


      var QuillEditorBase = /*#__PURE__*/function () {
        function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
          var _this3 = this;

          _classCallCheck(this, QuillEditorBase);

          this.elementRef = elementRef;
          this.domSanitizer = domSanitizer;
          this.doc = doc;
          this.platformId = platformId;
          this.renderer = renderer;
          this.zone = zone;
          this.service = service;
          this.required = false;
          this.customToolbarPosition = 'top';
          this.sanitize = false;
          this.styles = null;
          this.strict = true;
          this.customOptions = [];
          this.customModules = [];
          this.preserveWhitespace = false;
          this.trimOnValidation = false;
          this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.disabled = false; // used to store initial value before ViewInit

          this.valueGetter = function (quillEditor, editorElement) {
            var html = editorElement.querySelector('.ql-editor').innerHTML;

            if (html === '<p><br></p>' || html === '<div><br></div>') {
              html = null;
            }

            var modelValue = html;
            var format = getFormat(_this3.format, _this3.service.config.format);

            if (format === 'text') {
              modelValue = quillEditor.getText();
            } else if (format === 'object') {
              modelValue = quillEditor.getContents();
            } else if (format === 'json') {
              try {
                modelValue = JSON.stringify(quillEditor.getContents());
              } catch (e) {
                modelValue = quillEditor.getText();
              }
            }

            return modelValue;
          };

          this.valueSetter = function (quillEditor, value) {
            var format = getFormat(_this3.format, _this3.service.config.format);

            if (format === 'html') {
              if (_this3.sanitize) {
                value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
              }

              return quillEditor.clipboard.convert(value);
            } else if (format === 'json') {
              try {
                return JSON.parse(value);
              } catch (e) {
                return [{
                  insert: value
                }];
              }
            }

            return value;
          };

          this.selectionChangeHandler = function (range, oldRange, source) {
            var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

            if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
              return;
            }

            _this3.zone.run(function () {
              if (range === null) {
                _this3.onBlur.emit({
                  editor: _this3.quillEditor,
                  source: source
                });
              } else if (oldRange === null) {
                _this3.onFocus.emit({
                  editor: _this3.quillEditor,
                  source: source
                });
              }

              _this3.onSelectionChanged.emit({
                editor: _this3.quillEditor,
                oldRange: oldRange,
                range: range,
                source: source
              });

              if (shouldTriggerOnModelTouched) {
                _this3.onModelTouched();
              }
            });
          };

          this.textChangeHandler = function (delta, oldDelta, source) {
            // only emit changes emitted by user interactions
            var text = _this3.quillEditor.getText();

            var content = _this3.quillEditor.getContents();

            var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

            if (html === '<p><br></p>' || html === '<div><br></div>') {
              html = null;
            }

            var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
            var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

            if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
              return;
            }

            _this3.zone.run(function () {
              if (shouldTriggerOnModelChange) {
                _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
              }

              _this3.onContentChanged.emit({
                content: content,
                delta: delta,
                editor: _this3.quillEditor,
                html: html,
                oldDelta: oldDelta,
                source: source,
                text: text
              });
            });
          }; // tslint:disable-next-line:max-line-length


          this.editorChangeHandler = function (event, current, old, source) {
            // only emit changes when there's any listener
            if (!_this3.onEditorChanged.observers.length) {
              return;
            } // only emit changes emitted by user interactions


            if (event === 'text-change') {
              var text = _this3.quillEditor.getText();

              var content = _this3.quillEditor.getContents();

              var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              _this3.zone.run(function () {
                _this3.onEditorChanged.emit({
                  content: content,
                  delta: current,
                  editor: _this3.quillEditor,
                  event: event,
                  html: html,
                  oldDelta: old,
                  source: source,
                  text: text
                });
              });
            } else {
              _this3.onEditorChanged.emit({
                editor: _this3.quillEditor,
                event: event,
                oldRange: old,
                range: current,
                source: source
              });
            }
          };
        }

        _createClass(QuillEditorBase, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, contents;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      _context2.next = 4;
                      return this.service.getQuill();

                    case 4:
                      Quill = _context2.sent;
                      this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                      toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                      modules = Object.assign({}, this.modules || this.service.config.modules);

                      if (toolbarElem) {
                        modules.toolbar = toolbarElem;
                      } else if (modules.toolbar === undefined) {
                        modules.toolbar = defaultModules.toolbar;
                      }

                      placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                      if (placeholder === undefined) {
                        placeholder = 'Insert text here ...';
                      }

                      if (this.styles) {
                        Object.keys(this.styles).forEach(function (key) {
                          _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                        });
                      }

                      if (this.classes) {
                        this.addClasses(this.classes);
                      }

                      this.customOptions.forEach(function (customOption) {
                        var newCustomOption = Quill["import"](customOption["import"]);
                        newCustomOption.whitelist = customOption.whitelist;
                        Quill.register(newCustomOption, true);
                      });
                      this.customModules.forEach(function (_ref2) {
                        var implementation = _ref2.implementation,
                            path = _ref2.path;
                        Quill.register(path, implementation);
                      });
                      bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                      if (!bounds) {
                        bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                      }

                      debug = this.debug;

                      if (!debug && debug !== false && this.service.config.debug) {
                        debug = this.service.config.debug;
                      }

                      readOnly = this.readOnly;

                      if (!readOnly && this.readOnly !== false) {
                        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                      }

                      scrollingContainer = this.scrollingContainer;

                      if (!scrollingContainer && this.scrollingContainer !== null) {
                        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                      }

                      formats = this.formats;

                      if (!formats && formats === undefined) {
                        formats = this.service.config.formats ? _toConsumableArray(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                      }

                      this.zone.runOutsideAngular(function () {
                        _this4.quillEditor = new Quill(_this4.editorElem, {
                          bounds: bounds,
                          debug: debug,
                          formats: formats,
                          modules: modules,
                          placeholder: placeholder,
                          readOnly: readOnly,
                          scrollingContainer: scrollingContainer,
                          strict: _this4.strict,
                          theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                        });
                      });

                      if (this.content) {
                        format = getFormat(this.format, this.service.config.format);

                        if (format === 'object') {
                          this.quillEditor.setContents(this.content, 'silent');
                        } else if (format === 'text') {
                          this.quillEditor.setText(this.content, 'silent');
                        } else if (format === 'json') {
                          try {
                            this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                          } catch (e) {
                            this.quillEditor.setText(this.content, 'silent');
                          }
                        } else {
                          if (this.sanitize) {
                            this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.content);
                          }

                          contents = this.quillEditor.clipboard.convert(this.content);
                          this.quillEditor.setContents(contents, 'silent');
                        }

                        this.quillEditor.getModule('history').clear();
                      } // initialize disabled status based on this.disabled as default value


                      this.setDisabledState(); // triggered if selection or text changed

                      this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                      this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                      this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                      // if you are using the editor api in created output to change the editor content

                      setTimeout(function () {
                        if (_this4.onValidatorChanged) {
                          _this4.onValidatorChanged();
                        }

                        _this4.onEditorCreated.emit(_this4.quillEditor);
                      });

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.quillEditor) {
              this.quillEditor.off('selection-change', this.selectionChangeHandler);
              this.quillEditor.off('text-change', this.textChangeHandler);
              this.quillEditor.off('editor-change', this.editorChangeHandler);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this5 = this;

            if (!this.quillEditor) {
              return;
            } // tslint:disable:no-string-literal


            if (changes['readOnly']) {
              this.quillEditor.enable(!changes['readOnly'].currentValue);
            }

            if (changes['placeholder']) {
              this.quillEditor.root.dataset.placeholder = changes['placeholder'].currentValue;
            }

            if (changes['styles']) {
              var currentStyling = changes['styles'].currentValue;
              var previousStyling = changes['styles'].previousValue;

              if (previousStyling) {
                Object.keys(previousStyling).forEach(function (key) {
                  _this5.renderer.removeStyle(_this5.editorElem, key);
                });
              }

              if (currentStyling) {
                Object.keys(currentStyling).forEach(function (key) {
                  _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
                });
              }
            }

            if (changes['classes']) {
              var currentClasses = changes['classes'].currentValue;
              var previousClasses = changes['classes'].previousValue;

              if (previousClasses) {
                this.removeClasses(previousClasses);
              }

              if (currentClasses) {
                this.addClasses(currentClasses);
              }
            } // tslint:enable:no-string-literal

          }
        }, {
          key: "addClasses",
          value: function addClasses(classList) {
            var _this6 = this;

            QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
              _this6.renderer.addClass(_this6.editorElem, c);
            });
          }
        }, {
          key: "removeClasses",
          value: function removeClasses(classList) {
            var _this7 = this;

            QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
              _this7.renderer.removeClass(_this7.editorElem, c);
            });
          }
        }, {
          key: "writeValue",
          value: function writeValue(currentValue) {
            this.content = currentValue;
            var format = getFormat(this.format, this.service.config.format);

            if (this.quillEditor) {
              if (currentValue) {
                if (format === 'text') {
                  this.quillEditor.setText(currentValue);
                } else {
                  this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
                }

                return;
              }

              this.quillEditor.setText('');
            }
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState() {
            var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
            // store initial value to set appropriate disabled status after ViewInit
            this.disabled = isDisabled;

            if (this.quillEditor) {
              if (isDisabled) {
                this.quillEditor.disable();
                this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
              } else {
                if (!this.readOnly) {
                  this.quillEditor.enable();
                }

                this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
              }
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onModelChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onModelTouched = fn;
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onValidatorChanged = fn;
          }
        }, {
          key: "validate",
          value: function validate() {
            if (!this.quillEditor) {
              return null;
            }

            var err = {};
            var valid = true;
            var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

            var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

            if (this.minLength && textLength && textLength < this.minLength) {
              err.minLengthError = {
                given: textLength,
                minLength: this.minLength
              };
              valid = false;
            }

            if (this.maxLength && textLength > this.maxLength) {
              err.maxLengthError = {
                given: textLength,
                maxLength: this.maxLength
              };
              valid = false;
            }

            if (this.required && !textLength) {
              err.requiredError = {
                empty: true
              };
              valid = false;
            }

            return valid ? null : err;
          }
        }], [{
          key: "normalizeClassNames",
          value: function normalizeClassNames(classes) {
            var classList = classes.trim().split(' ');
            return classList.reduce(function (prev, cur) {
              var trimmed = cur.trim();

              if (trimmed) {
                prev.push(trimmed);
              }

              return prev;
            }, []);
          }
        }]);

        return QuillEditorBase;
      }();

      QuillEditorBase.??fac = function QuillEditorBase_Factory(t) {
        return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
      };

      QuillEditorBase.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: QuillEditorBase,
        inputs: {
          required: "required",
          customToolbarPosition: "customToolbarPosition",
          sanitize: "sanitize",
          styles: "styles",
          strict: "strict",
          customOptions: "customOptions",
          customModules: "customModules",
          preserveWhitespace: "preserveWhitespace",
          trimOnValidation: "trimOnValidation",
          valueGetter: "valueGetter",
          valueSetter: "valueSetter",
          format: "format",
          theme: "theme",
          modules: "modules",
          debug: "debug",
          readOnly: "readOnly",
          placeholder: "placeholder",
          maxLength: "maxLength",
          minLength: "minLength",
          formats: "formats",
          scrollingContainer: "scrollingContainer",
          bounds: "bounds",
          trackChanges: "trackChanges",
          classes: "classes"
        },
        outputs: {
          onEditorCreated: "onEditorCreated",
          onEditorChanged: "onEditorChanged",
          onContentChanged: "onContentChanged",
          onSelectionChanged: "onSelectionChanged",
          onFocus: "onFocus",
          onBlur: "onBlur"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      QuillEditorBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }];
      };

      QuillEditorBase.propDecorators = {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customToolbarPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollingContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trackChanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        trimOnValidation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onEditorCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onEditorChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onContentChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSelectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueGetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        valueSetter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillEditorBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: QuillService
          }];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customToolbarPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          sanitize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strict: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customModules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preserveWhitespace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trimOnValidation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onEditorCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onEditorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onContentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onSelectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueGetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          valueSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          modules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          formats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollingContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          trackChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
        _inherits(QuillEditorComponent, _QuillEditorBase);

        var _super = _createSuper(QuillEditorComponent);

        function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
          _classCallCheck(this, QuillEditorComponent);

          return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
        }

        return QuillEditorComponent;
      }(QuillEditorBase);

      QuillEditorComponent.??fac = function QuillEditorComponent_Factory(t) {
        return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
      };

      QuillEditorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: QuillEditorComponent,
        selectors: [["quill-editor"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return QuillEditorComponent;
          })
        }, {
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return QuillEditorComponent;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function QuillEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](0);
          }
        },
        encapsulation: 2
      });

      QuillEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
          }]
        }, {
          type: QuillService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [QuillService]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [{
              multi: true,
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return QuillEditorComponent;
              })
            }, {
              multi: true,
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return QuillEditorComponent;
              })
            }],
            selector: 'quill-editor',
            template: "\n  <ng-content select=\"[quill-editor-toolbar]\"></ng-content>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
            }]
          }, {
            type: QuillService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [QuillService]
            }]
          }];
        }, null);
      })();

      var QuillViewHTMLComponent = /*#__PURE__*/function () {
        function QuillViewHTMLComponent(sanitizer, service) {
          _classCallCheck(this, QuillViewHTMLComponent);

          this.sanitizer = sanitizer;
          this.service = service;
          this.innerHTML = '';
          this.themeClass = 'ql-snow';
          this.content = '';
        }

        _createClass(QuillViewHTMLComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.theme) {
              var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
              this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
            } else if (!this.theme) {
              var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

              this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
            }

            if (changes.content) {
              this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
            }
          }
        }]);

        return QuillViewHTMLComponent;
      }();

      QuillViewHTMLComponent.??fac = function QuillViewHTMLComponent_Factory(t) {
        return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService));
      };

      QuillViewHTMLComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: QuillViewHTMLComponent,
        selectors: [["quill-view-html"]],
        inputs: {
          content: "content",
          theme: "theme"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
        template: function QuillViewHTMLComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.themeClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
        styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
        encapsulation: 2
      });

      QuillViewHTMLComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
          }]
        }, {
          type: QuillService
        }];
      };

      QuillViewHTMLComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillViewHTMLComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'quill-view-html',
            template: "\n  <div class=\"ql-container\" [ngClass]=\"themeClass\">\n    <div class=\"ql-editor\" [innerHTML]=\"innerHTML\">\n    </div>\n  </div>\n",
            styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
            }]
          }, {
            type: QuillService
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillViewComponent = /*#__PURE__*/function () {
        function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
          var _this8 = this;

          _classCallCheck(this, QuillViewComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.zone = zone;
          this.service = service;
          this.domSanitizer = domSanitizer;
          this.platformId = platformId;
          this.sanitize = false;
          this.strict = true;
          this.customModules = [];
          this.customOptions = [];
          this.preserveWhitespace = false;

          this.valueSetter = function (quillEditor, value) {
            var format = getFormat(_this8.format, _this8.service.config.format);
            var content = value;

            if (format === 'text') {
              quillEditor.setText(content);
            } else {
              if (format === 'html') {
                if (_this8.sanitize) {
                  value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                }

                content = quillEditor.clipboard.convert(value);
              } else if (format === 'json') {
                try {
                  content = JSON.parse(value);
                } catch (e) {
                  content = [{
                    insert: value
                  }];
                }
              }

              quillEditor.setContents(content);
            }
          };
        }

        _createClass(QuillViewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this.quillEditor) {
              return;
            }

            if (changes.content) {
              this.valueSetter(this.quillEditor, changes.content.currentValue);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var Quill, modules, debug, formats, theme;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      _context3.next = 4;
                      return this.service.getQuill();

                    case 4:
                      Quill = _context3.sent;
                      modules = Object.assign({}, this.modules || this.service.config.modules);
                      modules.toolbar = false;
                      this.customOptions.forEach(function (customOption) {
                        var newCustomOption = Quill["import"](customOption["import"]);
                        newCustomOption.whitelist = customOption.whitelist;
                        Quill.register(newCustomOption, true);
                      });
                      this.customModules.forEach(function (_ref3) {
                        var implementation = _ref3.implementation,
                            path = _ref3.path;
                        Quill.register(path, implementation);
                      });
                      debug = this.debug;

                      if (!debug && debug !== false && this.service.config.debug) {
                        debug = this.service.config.debug;
                      }

                      formats = this.formats;

                      if (!formats && formats === undefined) {
                        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                      }

                      theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                      this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                      this.zone.runOutsideAngular(function () {
                        _this9.quillEditor = new Quill(_this9.editorElem, {
                          debug: debug,
                          formats: formats,
                          modules: modules,
                          readOnly: true,
                          strict: _this9.strict,
                          theme: theme
                        });
                      });
                      this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                      if (this.content) {
                        this.valueSetter(this.quillEditor, this.content);
                      }

                    case 19:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return QuillViewComponent;
      }();

      QuillViewComponent.??fac = function QuillViewComponent_Factory(t) {
        return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };

      QuillViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: QuillViewComponent,
        selectors: [["quill-view"]],
        inputs: {
          sanitize: "sanitize",
          strict: "strict",
          customModules: "customModules",
          customOptions: "customOptions",
          preserveWhitespace: "preserveWhitespace",
          format: "format",
          theme: "theme",
          modules: "modules",
          debug: "debug",
          formats: "formats",
          content: "content"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
        decls: 0,
        vars: 0,
        template: function QuillViewComponent_Template(rf, ctx) {},
        styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
        encapsulation: 2
      });

      QuillViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: QuillService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }];
      };

      QuillViewComponent.propDecorators = {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        debug: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sanitize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customModules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        customOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        preserveWhitespace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'quill-view',
            template: "\n",
            styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: QuillService
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }];
        }, {
          sanitize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strict: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customModules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          customOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preserveWhitespace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          modules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          formats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var QuillModule = /*#__PURE__*/function () {
        function QuillModule() {
          _classCallCheck(this, QuillModule);
        }

        _createClass(QuillModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: QuillModule,
              providers: [{
                provide: QUILL_CONFIG_TOKEN,
                useValue: config
              }]
            };
          }
        }]);

        return QuillModule;
      }();

      QuillModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: QuillModule
      });
      QuillModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function QuillModule_Factory(t) {
          return new (t || QuillModule)();
        },
        providers: [QuillService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](QuillModule, {
          declarations: function declarations() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](QuillModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
            exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            providers: [QuillService]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ngx-quill
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-quill.js.map

      /***/

    },

    /***/
    "HJyK":
    /*!****************************************************!*\
      !*** ./src/app/pages/mailbox/mailbox.component.ts ***!
      \****************************************************/

    /*! exports provided: MailboxComponent */

    /***/
    function HJyK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailboxComponent", function () {
        return MailboxComponent;
      });
      /* harmony import */


      var _raw_loader_mailbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./mailbox.component.html */
      "Qy3y");
      /* harmony import */


      var _mailbox_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mailbox.component.scss */
      "fPJq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../app.settings */
      "/RaO");
      /* harmony import */


      var _mailbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mailbox.service */
      "C2KF");

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

      var MailboxComponent = /*#__PURE__*/function () {
        function MailboxComponent(appSettings, formBuilder, snackBar, mailboxService) {
          _classCallCheck(this, MailboxComponent);

          this.appSettings = appSettings;
          this.formBuilder = formBuilder;
          this.snackBar = snackBar;
          this.mailboxService = mailboxService;
          this.sidenavOpen = true;
          this.type = 'all';
          this.settings = this.appSettings.settings;
        }

        _createClass(MailboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMails();

            if (window.innerWidth <= 992) {
              this.sidenavOpen = false;
            }

            this.form = this.formBuilder.group({
              'to': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              'cc': null,
              'subject': null,
              'message': null
            });
          }
        }, {
          key: "onWindowResize",
          value: function onWindowResize() {
            window.innerWidth <= 992 ? this.sidenavOpen = false : this.sidenavOpen = true;
          }
        }, {
          key: "getMails",
          value: function getMails() {
            switch (this.type) {
              case 'all':
                this.mails = this.mailboxService.getAllMails();
                break;

              case 'starred':
                this.mails = this.mailboxService.getStarredMails();
                break;

              case 'sent':
                this.mails = this.mailboxService.getSentMails();
                break;

              case 'drafts':
                this.mails = this.mailboxService.getDraftMails();
                break;

              case 'trash':
                this.mails = this.mailboxService.getTrashMails();
                break;

              default:
                this.mails = this.mailboxService.getDraftMails();
            }
          }
        }, {
          key: "viewDetail",
          value: function viewDetail(mail) {
            this.mail = this.mailboxService.getMail(mail.id);
            this.mails.forEach(function (m) {
              return m.selected = false;
            });
            this.mail.selected = true;
            this.mail.unread = false;
            this.newMail = false;

            if (window.innerWidth <= 992) {
              this.sidenav.close();
            }
          }
        }, {
          key: "compose",
          value: function compose() {
            this.mail = null;
            this.newMail = true;
          }
        }, {
          key: "setAsRead",
          value: function setAsRead() {
            this.mail.unread = false;
          }
        }, {
          key: "setAsUnRead",
          value: function setAsUnRead() {
            this.mail.unread = true;
          }
        }, {
          key: "delete",
          value: function _delete() {
            this.mail.trash = true;
            this.mail.sent = false;
            this.mail.draft = false;
            this.mail.starred = false;
            this.getMails();
            this.mail = null;
          }
        }, {
          key: "changeStarStatus",
          value: function changeStarStatus() {
            this.mail.starred = !this.mail.starred;
            this.getMails();
          }
        }, {
          key: "restore",
          value: function restore() {
            this.mail.trash = false;
            this.type = 'all';
            this.getMails();
            this.mail = null;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(mail) {
            console.log(mail);

            if (this.form.valid) {
              this.snackBar.open('Mail sent to ' + mail.to + ' successfully!', null, {
                duration: 2000
              });
              this.form.reset();
            }
          }
        }]);

        return MailboxComponent;
      }();

      MailboxComponent.ctorParameters = function () {
        return [{
          type: _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _mailbox_service__WEBPACK_IMPORTED_MODULE_6__["MailboxService"]
        }];
      };

      MailboxComponent.propDecorators = {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['sidenav']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['window:resize']
        }]
      };
      MailboxComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mailbox',
        template: _raw_loader_mailbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_mailbox_service__WEBPACK_IMPORTED_MODULE_6__["MailboxService"]],
        styles: [_mailbox_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _mailbox_service__WEBPACK_IMPORTED_MODULE_6__["MailboxService"]])], MailboxComponent);
      /***/
    },

    /***/
    "Qy3y":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mailbox/mailbox.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qy3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 mailbox\">\r\n            <mat-sidenav-container>\r\n                <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"mailbox-sidenav mat-elevation-z1\">\r\n                    <mat-toolbar color=\"primary\" class=\"p-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <input [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search mail...\" class=\"search mat-elevation-z3\">\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"filterMenu\" #filterMenuTrigger=\"matMenuTrigger\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>                                     \r\n                    </mat-toolbar>\r\n                    <mat-menu #filterMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                        <span (mouseleave)=\"filterMenuTrigger.closeMenu()\">\r\n                            <button mat-menu-item (click)=\"type = 'all';getMails();\">All</button>\r\n                            <button mat-menu-item (click)=\"type = 'starred';getMails();\">Starred</button>\r\n                            <button mat-menu-item (click)=\"type = 'sent';getMails();\">Sent</button>\r\n                            <button mat-menu-item (click)=\"type = 'drafts';getMails();\">Drafts</button>\r\n                            <button mat-menu-item (click)=\"type = 'trash';getMails();\">Trash</button>\r\n                        </span>\r\n                    </mat-menu> \r\n                    <mat-nav-list class=\"p-0 mailbox-sidenav-list\" perfectScrollbar>\r\n                        <div *ngFor=\"let mail of mails | MailSearch : searchText\" (click)=\"viewDetail(mail)\">\r\n                            <mat-list-item [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\r\n                                <img *ngIf=\"mail.senderPhoto\" matListAvatar  [src]=\"mail.senderPhoto\">\r\n                                <img *ngIf=\"!mail.senderPhoto\" matListAvatar src=\"assets/img/users/default-user.jpg\">\r\n                                <div matLine fxLayout=\"row\" fxLayoutAlign=\"space-between space-between\">   \r\n                                    <h4 class=\"text-truncate sender\">{{mail.sender}}</h4> \r\n                                    <small>{{mail.date}}</small> \r\n                                </div>\r\n                                <p matLine class=\"text-truncate subject\">{{mail.subject}}</p>\r\n                            </mat-list-item>\r\n                            <mat-divider></mat-divider>\r\n                        </div>                        \r\n                    </mat-nav-list>\r\n                </mat-sidenav>              \r\n                <div>\r\n                    <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                                <mat-icon>list</mat-icon>\r\n                            </button>\r\n                            <button *ngIf=\"mail && type !='trash'\" mat-icon-button matTooltip=\"Reply\" matTooltipPosition=\"above\">\r\n                                <mat-icon>reply</mat-icon>\r\n                            </button>\r\n                            <button *ngIf=\"newMail\" mat-icon-button (click)=\"newMail = false;\" matTooltip=\"Back\" matTooltipPosition=\"above\">\r\n                                <mat-icon>arrow_back</mat-icon>\r\n                            </button>\r\n                            <button *ngIf=\"mail && type !='trash'\" mat-icon-button (click)=\"changeStarStatus()\" matTooltip=\"Mark as inportant\" matTooltipPosition=\"above\" fxShow=\"false\" fxShow.gt-xs>\r\n                                <mat-icon *ngIf=\"mail.starred\">star</mat-icon>\r\n                                <mat-icon *ngIf=\"!mail.starred\">star_border</mat-icon>\r\n                            </button> \r\n                            <button *ngIf=\"mail && type=='trash'\" mat-icon-button (click)=\"restore()\" matTooltip=\"Restore\" matTooltipPosition=\"above\">\r\n                                <mat-icon>undo</mat-icon>\r\n                            </button> \r\n                            <button *ngIf=\"mail\" mat-icon-button matTooltip=\"Report spam\" matTooltipPosition=\"above\" fxShow=\"false\" fxShow.gt-xs>\r\n                                <mat-icon>error</mat-icon>\r\n                            </button> \r\n                            <button *ngIf=\"mail && type !='trash'\" mat-icon-button (click)=\"delete()\" matTooltip=\"Move to trash\" matTooltipPosition=\"above\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" #moreMenuTrigger=\"matMenuTrigger\" [style.display]=\"(mail) ? 'block' : 'none'\">\r\n                                <mat-icon>more_vert</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                        <button mat-raised-button color=\"warn\" (click)=\"compose()\">Compose</button>\r\n                    </mat-toolbar>\r\n                    <mat-menu #moreMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                        <span (mouseleave)=\"moreMenuTrigger.closeMenu()\">\r\n                            <button mat-menu-item (click)=\"setAsRead()\">Mark as read</button>\r\n                            <button mat-menu-item (click)=\"setAsUnRead()\">Mark as unread</button>\r\n                            <button mat-menu-item (click)=\"delete()\">Delete</button>\r\n                        </span>\r\n                    </mat-menu> \r\n                    <div class=\"mailbox-content\" perfectScrollbar>\r\n                        <div *ngIf=\"mail\">\r\n                            <mat-list class=\"p-0\">\r\n                                <mat-list-item class=\"h-100 py-1\">\r\n                                    <div matLine  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <h2 class=\"subject\">{{mail.subject}}</h2>\r\n                                        <mat-icon class=\"muted-text\">print</mat-icon>\r\n                                    </div>                                    \r\n                                </mat-list-item>\r\n                                <mat-divider></mat-divider> \r\n                                <mat-list-item class=\"h-100 py-1\">\r\n                                    <img *ngIf=\"mail.senderPhoto\" matListAvatar  [src]=\"mail.senderPhoto\">\r\n                                    <img *ngIf=\"!mail.senderPhoto\" matListAvatar src=\"assets/img/users/default-user.jpg\">\r\n                                    <h6 matLine fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <span>\r\n                                            <strong class=\"text-truncate\">{{mail.sender}}</strong>\r\n                                            <span *ngIf=\"mail.senderMail\" class=\"email\">&lt;{{mail.senderMail}}&gt;</span>\r\n                                        </span>\r\n                                        <span>{{mail.date}}</span>\r\n                                    </h6>\r\n                                    <span matLine>to me</span>\r\n                                </mat-list-item>\r\n                                <mat-divider></mat-divider>\r\n                            </mat-list>\r\n                            <div class=\"mail-body\" [innerHTML]=\"mail.body\"></div>\r\n                            <div *ngIf=\"mail.attachments.length > 0\" class=\"mail-body\">\r\n                                <mat-divider></mat-divider>\r\n                                <p>\r\n                                    <strong>{{mail.attachments.length}} attachments</strong>\r\n                                    <button mat-icon-button matTooltip=\"Download all attachments\" matTooltipPosition=\"above\">\r\n                                        <mat-icon>file_download</mat-icon>\r\n                                    </button>\r\n                                    <button mat-icon-button matTooltip=\"View all Images\" matTooltipPosition=\"above\">\r\n                                        <mat-icon>pageview</mat-icon>\r\n                                    </button>\r\n                                </p>\r\n                                <div *ngFor=\"let attachment of mail.attachments; let i = index\">\r\n                                    <img [src]=\"attachment\" alt=\"attachment\">\r\n                                    <h3>image-{{i + 1}}.jpg</h3>\r\n                                    <p>\r\n                                        <span>457K</span>\r\n                                        <button mat-icon-button>\r\n                                            <mat-icon>file_download</mat-icon>\r\n                                        </button>\r\n                                        <button mat-icon-button>\r\n                                            <mat-icon>pageview</mat-icon>\r\n                                        </button>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!mail && !newMail\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                            <mat-icon>mail_outline</mat-icon>            \r\n                            <p>Select a mail to read</p>\r\n                        </div> \r\n                        <form *ngIf=\"newMail\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"mail-body\"> \r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"To\" formControlName=\"to\">\r\n                            </mat-form-field> \r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Cc/Bcc\" formControlName=\"cc\">\r\n                            </mat-form-field> \r\n                            <mat-form-field class=\"w-100\">\r\n                                <input matInput placeholder=\"Subject\" formControlName=\"subject\">\r\n                            </mat-form-field>                          \r\n                            <quill-editor formControlName=\"message\"></quill-editor>                            \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <button mat-raised-button (click)=\"newMail = false;\" type=\"button\">Cancel</button>\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\">Send</button>\r\n                            </div> \r\n                        </form> \r\n                    </div>\r\n                </div>            \r\n            </mat-sidenav-container>\r\n        </mat-card>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "fPJq":
    /*!******************************************************!*\
      !*** ./src/app/pages/mailbox/mailbox.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function fPJq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mailbox .search {\n  margin: 0 14px;\n  width: 100%;\n  border: none;\n  border-radius: 2px;\n  padding: 6px;\n  outline: none;\n}\n.mailbox .mail-body {\n  padding: 16px;\n}\n.mailbox .empty mat-icon {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4;\n}\n.mailbox .empty p {\n  font-size: 18px;\n  opacity: 0.8;\n}\n.mailbox-sidenav {\n  width: 350px;\n  border-right: 1px solid transparent;\n  overflow: hidden;\n}\n.mailbox-content {\n  height: calc(100vh - (56px + 8px*2 + 132px));\n}\n.mailbox-content .mat-line {\n  white-space: unset;\n}\n.mailbox-content .subject {\n  font-weight: 500;\n}\n.mailbox-sidenav-list {\n  height: calc(100vh - (56px + 8px*2 + 132px));\n}\n.mailbox-sidenav-list .sender {\n  font-weight: 400;\n}\n.mailbox-sidenav-list .subject {\n  font-size: 13px;\n}\n.mailbox-sidenav-list .unread .mat-line, .mailbox-sidenav-list .unread .sender {\n  font-weight: bold;\n}\n.mailbox-sidenav-list .selected {\n  background: rgba(0, 0, 0, 0.15);\n}\n@media (max-width: 575px) {\n  .mailbox-sidenav {\n    width: 280px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWlsYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZSO0FBSUk7RUFDSSxhQUFBO0FBRlI7QUFLUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSFo7QUFLUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSFo7QUFPQTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNQTtFQUNJLDRDQUFBO0FBSEo7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFLQTtFQUNJLDRDQUFBO0FBRko7QUFHSTtFQUNJLGdCQUFBO0FBRFI7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUdJO0VBQ0ksaUJBQUE7QUFEUjtBQUdJO0VBQ0ksK0JBQUE7QUFEUjtBQUtBO0VBQ0k7SUFDSSxZQUFBO0VBRk47QUFDRiIsImZpbGUiOiJtYWlsYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tYWlsYm94eyBcclxuICAgIC5zZWFyY2h7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYWlsLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH0gICBcclxuICAgIC5lbXB0eXtcclxuICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuLm1haWxib3gtc2lkZW5hdntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWFpbGJveC1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvb2xiYXItaGVpZ2h0fSArICN7JGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nfSoyICsgMTMycHgpKTtcclxuICAgIC5tYXQtbGluZXtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuc3ViamVjdHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG59XHJcbi5tYWlsYm94LXNpZGVuYXYtbGlzdHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZ30qMiArIDEzMnB4KSk7XHJcbiAgICAuc2VuZGVye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuc3ViamVjdHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICAudW5yZWFkIC5tYXQtbGluZSwgLnVucmVhZCAuc2VuZGVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkgeyBcclxuICAgIC5tYWlsYm94LXNpZGVuYXZ7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "lmhS":
    /*!*********************************************!*\
      !*** ./src/app/pages/mailbox/mail.model.ts ***!
      \*********************************************/

    /*! exports provided: Mail */

    /***/
    function lmhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mail", function () {
        return Mail;
      });

      var Mail = function Mail(id, sender, senderPhoto, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        _classCallCheck(this, Mail);

        this.id = id;
        this.sender = sender;
        this.senderPhoto = senderPhoto;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-mailbox-mailbox-module-es5.js.map