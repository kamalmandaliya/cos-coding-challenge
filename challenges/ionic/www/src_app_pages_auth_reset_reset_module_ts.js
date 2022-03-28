"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_reset_reset_module_ts"],{

/***/ 83957:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/reset/reset-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageRoutingModule": () => (/* binding */ ResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page */ 1725);




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_0__.ResetPage,
    },
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ 23665:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/reset/reset.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageModule": () => (/* binding */ ResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page */ 1725);
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-routing.module */ 83957);







let ResetPageModule = class ResetPageModule {
};
ResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reset_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResetPageRoutingModule],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_0__.ResetPage],
    })
], ResetPageModule);



/***/ }),

/***/ 1725:
/*!************************************************!*\
  !*** ./src/app/pages/auth/reset/reset.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPage": () => (/* binding */ ResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page.html?ngResource */ 61722);
/* harmony import */ var _reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page.scss?ngResource */ 347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ResetPage = class ResetPage {
    constructor() { }
    ngOnInit() { }
};
ResetPage.ctorParameters = () => [];
ResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reset',
        template: _reset_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPage);



/***/ }),

/***/ 347:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/reset/reset.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 61722:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/reset/reset.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>reset</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_reset_reset_module_ts.js.map