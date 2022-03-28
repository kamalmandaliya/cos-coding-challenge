"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_messages_messages_module_ts"],{

/***/ 62443:
/*!**********************************************************!*\
  !*** ./src/app/tabs/messages/messages-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 22501);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage,
    },
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 24404:
/*!**************************************************!*\
  !*** ./src/app/tabs/messages/messages.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 22501);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-routing.module */ 62443);






let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__.MessagesPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage],
    })
], MessagesPageModule);



/***/ }),

/***/ 22501:
/*!************************************************!*\
  !*** ./src/app/tabs/messages/messages.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page.html?ngResource */ 21464);
/* harmony import */ var _messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss?ngResource */ 21117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MessagesPage = class MessagesPage {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewDidLeave() { }
};
MessagesPage.ctorParameters = () => [];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-messages',
        template: _messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 21117:
/*!*************************************************************!*\
  !*** ./src/app/tabs/messages/messages.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".message-icon-middle {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoibWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtaWNvbi1taWRkbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */";

/***/ }),

/***/ 21464:
/*!*************************************************************!*\
  !*** ./src/app/tabs/messages/messages.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"!showSearchbar\">\n      {{'bottomTabs.messages' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_messages_messages_module_ts.js.map