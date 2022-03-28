"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot_forgot_module_ts"],{

/***/ 33801:
/*!************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 21050);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage,
    },
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 25849:
/*!****************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 21050);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-routing.module */ 33801);








let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _forgot_routing_module__WEBPACK_IMPORTED_MODULE_2__.ForgotPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage],
    })
], ForgotPageModule);



/***/ }),

/***/ 21050:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page.html?ngResource */ 7382);
/* harmony import */ var _forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss?ngResource */ 96614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let ForgotPage = class ForgotPage {
    constructor() { }
    done() {
        if (this.forgot.valid) {
            console.log(this.forgot.value);
        }
    }
    ngOnInit() {
        this.forgot = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]);
    }
};
ForgotPage.ctorParameters = () => [];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forgot',
        template: _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



/***/ }),

/***/ 96614:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7382:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth/forgot/forgot.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'backButtonTitle' | translate\" defaultHref=\"/auth/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>forgot</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!forgot.valid\" (click)=\"done()\"> Done </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <p class=\"ion-margin-start ion-margin-end\">Please enter the email that you used to sign in</p>\n  <ion-card color=\"light\" class=\"auth-card ion-margin\">\n    <ion-item color=\"light\">\n      <ion-input type=\"email\" placeholder=\"Email\" [formControl]=\"forgot\"></ion-input>\n    </ion-item>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot_forgot_module_ts.js.map