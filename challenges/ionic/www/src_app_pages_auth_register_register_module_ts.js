"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

/***/ 917:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 19413);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage,
    },
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 76029:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 19413);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-routing.module */ 917);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_2__.RegisterPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage],
    })
], RegisterPageModule);



/***/ }),

/***/ 19413:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 85250);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 54390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);





let RegisterPage = class RegisterPage {
    constructor() {
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(150)]),
        }, { validators: this.passwordConfirmMatchValidator });
    }
    onRegister() {
        if (this.register.valid) {
            console.log(this.register.value);
        }
    }
    ngOnInit() { }
    passwordConfirmMatchValidator(g) {
        const password = g.get('password');
        const passwordConfirm = g.get('passwordConfirm');
        if (passwordConfirm.hasError('required') || passwordConfirm.hasError('minlength')) {
            return;
        }
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.setErrors({
                mismatch: true,
            });
        }
        else {
            passwordConfirm.setErrors(null);
        }
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 54390:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 85250:
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"'backButtonTitle' | translate\" defaultHref=\"/auth/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"auth-page\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <form [formGroup]=\"register\" (ngSubmit)=\"onRegister()\">\n          <div class=\"logo\">\n            <img src=\"./assets/logo/default-logo.png\" width=\"96px\" />\n          </div>\n\n          <ion-card color=\"light\" class=\"auth-card ion-margin\">\n            <ion-item color=\"light\">\n              <ion-input type=\"text\" placeholder=\"First name\" formControlName=\"firstName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-input type=\"text\" placeholder=\"Last name\" formControlName=\"lastName\"></ion-input>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <ion-item color=\"light\" class=\"ion-no-inner-padding-end\">\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <ion-item color=\"light\" class=\"ion-no-inner-padding-end\">\n              <ion-input type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\n              </ion-input>\n            </ion-item>\n          </ion-card>\n\n          <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" type=\"submit\"\n            [disabled]=\"!register.valid\">\n            Sign Up\n          </ion-button>\n          <span class=\"ion-margin\"></span>\n        </form>\n\n        <p class=\"ion-margin\">\n          <ion-text>\n            By pressing Sign Up, you agree to the service's\n            <a href=\"http://\">Terms of Service</a>\n            and\n            <a href=\"http://\">Privacy Policy</a>\n          </ion-text>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map