"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 20794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 66739);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login',
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 79456)).then((m) => m.LoginPageModule),
            },
            {
                path: 'register',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 76029)).then((m) => m.RegisterPageModule),
            },
            {
                path: 'forgot',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot_forgot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot/forgot.module */ 25849)).then((m) => m.ForgotPageModule),
            },
            {
                path: 'reset',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_reset_reset_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset/reset.module */ 23665)).then((m) => m.ResetPageModule),
            },
        ],
    },
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 20794);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.page */ 66739);






let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_2__.AuthPage],
    })
], AuthPageModule);



/***/ }),

/***/ 66739:
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 85531);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 56959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthPage = class AuthPage {
    constructor() { }
    ngOnInit() { }
};
AuthPage.ctorParameters = () => [];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 56959:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 85531:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/auth.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-router-outlet></ion-router-outlet>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts.js.map