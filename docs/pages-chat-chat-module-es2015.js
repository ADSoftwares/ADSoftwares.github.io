(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-chat-module"],{

/***/ "3wAj":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card class=\"p-0 chat\">\r\n            <mat-sidenav-container>\r\n              <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"chat-sidenav mat-elevation-z1\">\r\n                  <mat-toolbar color=\"primary\" class=\"p-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <mat-list class=\"p-0\">\r\n                          <mat-list-item>\r\n                              <img matListAvatar [src]=\"userImage\">\r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button>                                     \r\n                  </mat-toolbar>\r\n                  <mat-menu #userMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                      <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Profile</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>settings</mat-icon>\r\n                              <span>Settings</span>\r\n                          </button>\r\n                          <a mat-menu-item routerLink=\"/\"> \r\n                              <mat-icon>power_settings_new</mat-icon>\r\n                              <span>Exit chat</span>\r\n                          </a>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <mat-nav-list class=\"p-0 chat-sidenav-list\" perfectScrollbar>\r\n                      <mat-list-item *ngFor=\"let chat of chats\" (click)=\"getChat(chat)\">\r\n                          <img matListAvatar [src]=\"chat.image\">\r\n                          <h6 matLine> {{chat.author}} </h6>\r\n                          <p matLine fxLayout=\"row\" fxLayoutAlign=\"none center\" class=\"muted-text\">\r\n                              <span [ngSwitch]=\"chat.authorStatus\">\r\n                                  <mat-icon *ngSwitchCase=\"'Online'\" class=\"chat-status-icon\">check_circle</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Offline'\" class=\"chat-status-icon\">highlight_off</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Away'\" class=\"chat-status-icon\">schedule</mat-icon>\r\n                                  <mat-icon *ngSwitchCase=\"'Do not disturb'\" class=\"chat-status-icon\">not_interested</mat-icon>\r\n                              </span>\r\n                              <span class=\"author-status\">{{chat.authorStatus}}</span>\r\n                          </p>\r\n                      </mat-list-item>\r\n                  </mat-nav-list>\r\n              </mat-sidenav>\r\n            \r\n              <div>\r\n                  <mat-toolbar color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                          <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                              <mat-icon>list</mat-icon>\r\n                          </button>\r\n                          <mat-list *ngIf=\"currentChat\" class=\"p-0\">\r\n                              <mat-list-item>\r\n                                  <img matListAvatar [src]=\"currentChat.image\">\r\n                              </mat-list-item>\r\n                          </mat-list>\r\n                          <span *ngIf=\"currentChat\" class=\"author-name\">{{currentChat.author}}</span>\r\n                      </div>\r\n                      <button mat-icon-button [matMenuTriggerFor]=\"personMenu\" #personMenuTrigger=\"matMenuTrigger\">\r\n                          <mat-icon>more_vert</mat-icon>\r\n                      </button> \r\n                  </mat-toolbar>\r\n                  <mat-menu #personMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                      <span (mouseleave)=\"personMenuTrigger.closeMenu()\">\r\n                          <button mat-menu-item>\r\n                              <mat-icon>account_circle</mat-icon>\r\n                              <span>Contact info</span>\r\n                          </button>\r\n                          <button mat-menu-item>\r\n                              <mat-icon>volume_mute</mat-icon>\r\n                              <span>Mute</span>\r\n                          </button>\r\n                          <button mat-menu-item> \r\n                              <mat-icon>delete_forever</mat-icon>\r\n                              <span>Clear chat</span>\r\n                          </button>\r\n                      </span>\r\n                  </mat-menu> \r\n                  <div class=\"chat-content\" perfectScrollbar>\r\n                      <mat-list *ngIf=\"talks\" class=\"p-0\" >\r\n                          <mat-list-item *ngFor=\"let talk of talks\" class=\"talk-item\">\r\n                              <img matListAvatar [src]=\"talk.image\">\r\n                              <p matLine class=\"message\">\r\n                                  <span [ngClass]=\"(talk.my) ? 'bg-primary' : 'bg-accent'\">{{talk.text}}</span>\r\n                              </p>                             \r\n                              <p matLine class=\"message-date\">\r\n                                  <small>{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>\r\n                              </p> \r\n                          </mat-list-item>\r\n                      </mat-list>\r\n                      <div *ngIf=\"!talks\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"h-100 empty\">\r\n                          <mat-icon>chat</mat-icon>            \r\n                          <p>Select a interlocutor for talk</p>\r\n                      </div> \r\n                  </div>\r\n                  <mat-divider></mat-divider>\r\n                  <mat-card class=\"chat-actions\"> \r\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter your text...\" (keyup)=\"sendMessage($event)\" [(ngModel)]=\"newMessage\">\r\n                          </mat-form-field>\r\n                          <div fxLayout=\"row\" fxLayoutAlign=\"scenter center\">\r\n                              <button mat-icon-button type=\"button\">\r\n                                  <mat-icon>attach_file</mat-icon>\r\n                              </button>\r\n                              <button mat-mini-fab color=\"primary\" type=\"button\" (click)=\"sendMessage($event)\">\r\n                                  <mat-icon>send</mat-icon>\r\n                              </button>\r\n                          </div>\r\n                        </div>\r\n                  </mat-card>\r\n              </div>\r\n            \r\n            </mat-sidenav-container>\r\n        </mat-card>\r\n      </div>\r\n</div>\r\n");

/***/ }),

/***/ "6PM2":
/*!********************************************!*\
  !*** ./src/app/pages/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.model */ "OiRC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
// let chats = [
//     new Chat(
//         'assets/img/profile/ashley.jpg',
//         'Ashley Ahlberg', 
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/bruno.jpg',
//         'Bruno Vespa',
//         'Do not disturb',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/julia.jpg',
//         'Julia Aniston',
//         'Away',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/adam.jpg',
//         'Adam Sandler',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),
//     new Chat(
//         'assets/img/profile/tereza.jpg',
//         'Tereza Stiles',
//         'Offline',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     ),  
//     new Chat(
//         'assets/img/profile/michael.jpg',
//         'Michael Blair',
//         'Online',
//         'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?',
//         new Date(year, month, day-2, hour, minute),
//         false
//     )
// ]
let chats = [
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute), false)
];
let talks = [
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with angular material 2 design.  What do you think about Gradus Admin Template?', new Date(year, month, day - 2, hour, minute + 3), false),
    new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, Gradus is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), true)
];
let ChatService = class ChatService {
    getChats() {
        return chats;
    }
    getTalk() {
        return talks;
    }
};
ChatService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], ChatService);



/***/ }),

/***/ "EdD2":
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: routes, ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.component */ "WSoB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], pathMatch: 'full' }
];
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
        ]
    })
], ChatModule);



/***/ }),

/***/ "OiRC":
/*!******************************************!*\
  !*** ./src/app/pages/chat/chat.model.ts ***!
  \******************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
class Chat {
    constructor(image, author, authorStatus, text, date, my) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.my = my;
    }
}


/***/ }),

/***/ "WSoB":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "3wAj");
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss */ "i5kj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "/RaO");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.model */ "OiRC");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.service */ "6PM2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ChatComponent = class ChatComponent {
    constructor(appSettings, chatService) {
        this.appSettings = appSettings;
        this.chatService = chatService;
        this.userImage = 'assets/img/users/user.jpg';
        this.sidenavOpen = true;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.chats = this.chatService.getChats();
        if (window.innerWidth <= 768) {
            this.sidenavOpen = false;
        }
    }
    onWindowResize() {
        (window.innerWidth <= 768) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getChat(obj) {
        if (this.talks) {
            this.talks.length = 2;
        }
        this.talks = this.chatService.getTalk();
        this.talks.push(obj);
        this.currentChat = obj;
        this.talks.forEach(talk => {
            if (!talk.my) {
                talk.image = obj.image;
            }
        });
        if (window.innerWidth <= 768) {
            this.sidenav.close();
        }
    }
    sendMessage($event) {
        if (($event.which === 1 || $event.which === 13) && this.newMessage.trim() != '') {
            if (this.talks) {
                this.talks.push(new _chat_model__WEBPACK_IMPORTED_MODULE_4__["Chat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newMessage, new Date(), true));
                this.newMessage = '';
                let chatContainer = document.querySelector('.chat-content');
                if (chatContainer) {
                    setTimeout(() => {
                        var nodes = chatContainer.querySelectorAll('.mat-list-item');
                        let newChatTextHeight = nodes[nodes.length - 1];
                        chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
                    });
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.talks)
            this.talks.length = 2;
    }
};
ChatComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] }
];
ChatComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['sidenav',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:resize',] }]
};
ChatComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
], ChatComponent);



/***/ }),

/***/ "i5kj":
/*!************************************************!*\
  !*** ./src/app/pages/chat/chat.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat .chat-actions {\n  padding: 12px;\n}\n.chat .author-name {\n  font-size: 16px;\n  font-weight: 400;\n}\n.chat .talk-item {\n  padding: 6px 0;\n  height: 100%;\n}\n.chat .message {\n  white-space: unset;\n  text-overflow: unset;\n}\n.chat .message span {\n  padding: 6px 10px;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 14px;\n}\n.chat .message-date {\n  opacity: 0.8;\n}\n.chat .empty mat-icon {\n  font-size: 220px;\n  height: 220px;\n  width: 220px;\n  opacity: 0.4;\n}\n.chat .empty p {\n  font-size: 18px;\n  opacity: 0.8;\n}\n.chat-status-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  line-height: 22px;\n  margin-right: 6px;\n}\n.author-status {\n  font-size: 13px;\n}\n.chat-sidenav {\n  border-right: 1px solid transparent;\n  overflow: hidden;\n  width: 200px;\n}\n.chat-content {\n  padding: 12px;\n  height: calc(100vh - (56px + 8px*2 + 238px));\n}\n.chat-sidenav-list {\n  height: calc(100vh - (56px + 8px*2 + 134px));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtBQUZSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUZSO0FBR1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRFo7QUFJSTtFQUNJLFlBQUE7QUFGUjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFIWjtBQU9BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUE7RUFDSSxlQUFBO0FBSEo7QUFLQTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRko7QUFJQTtFQUNJLGFBQUE7RUFDQSw0Q0FBQTtBQURKO0FBR0E7RUFDSSw0Q0FBQTtBQUFKIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNoYXR7XHJcbiAgICAuY2hhdC1hY3Rpb25ze1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aG9yLW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAudGFsay1pdGVte1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdle1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDsgICAgICAgXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2UtZGF0ZXtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgICAuZW1wdHl7XHJcbiAgICAgICAgbWF0LWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNoYXQtc3RhdHVzLWljb257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuLmF1dGhvci1zdGF0dXN7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmNoYXQtc2lkZW5hdntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAyMDBweDsgICBcclxufVxyXG4uY2hhdC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZ30qMiArIDIzOHB4KSk7XHJcbn1cclxuLmNoYXQtc2lkZW5hdi1saXN0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZ30qMiArIDEzNHB4KSk7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-chat-chat-module-es2015.js.map