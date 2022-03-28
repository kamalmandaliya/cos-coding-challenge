"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 65221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 47412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
    },
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 79456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 47412);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ 65221);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 47412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 46579);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 61191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api/api.service */ 45146);
/* harmony import */ var _core_auth_guard_auth_guard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth-guard/auth-guard.actions */ 8697);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/alert/alert.service */ 25730);











let LoginPage = class LoginPage {
    constructor(showMessage, apiService, store, navController, platform) {
        this.showMessage = showMessage;
        this.apiService = apiService;
        this.store = store;
        this.navController = navController;
        this.platform = platform;
    }
    onLogin() {
        const email = this.login.value.email;
        const password = this.login.value.password;
        return this.apiService
            .put('https://api-core-dev.caronsale.de/api/v1/authentication/' + email, {
            password,
            meta: 'string',
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((results) => results), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { return this.showAlertMessage(error); })))
            .subscribe((data) => {
            if (data.authenticated === true &&
                data.privileges === '{SALESMAN_USER}') {
                this.store.dispatch(new _core_auth_guard_auth_guard_actions__WEBPACK_IMPORTED_MODULE_4__.AuthAction.Login(data.userId, data.token, data.authenticated));
            }
            else {
                this.showAlertMessage(data);
            }
        });
    }
    showAlertMessage(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            const alert = yield this.showMessage.presentAlert({
                header: 'Alert',
                subHeader: data.error.msgKey,
                message: data.error.message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('buyer-challenge@caronsale.de', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('Test123.', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(15),
            ]),
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 25730:
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert(opts) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.alertController.create(opts);
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], AlertService);



/***/ }),

/***/ 61191:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 46579:
/*!*************************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-title>login</ion-title>\n</ion-toolbar>\n\n<ion-content [fullscreen]=\"true\" class=\"auth-page\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <form [formGroup]=\"login\" (ngSubmit)=\"onLogin()\">\n          <div class=\"logo\">\n            <img src=\"./assets/logo/default-logo.png\" width=\"96px\" />\n          </div>\n\n          <span class=\"ion-margin\"></span>\n          <ion-card color=\"light\" class=\"auth-card ion-margin\">\n            <ion-item color=\"light\">\n              <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n          </ion-card>\n          <ion-card color=\"light\" class=\"auth-card ion-margin\">\n            <ion-item color=\"light\" class=\"ion-no-inner-padding-end\">\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n              <!-- <ion-button slot=\"end\" fill=\"clear\" class=\"ion-no-margin\" [routerLink]=\"[ '/auth', 'forgot' ]\"\n                routerDirection=\"forward\">\n                <ion-icon slot=\"icon-only\" color=\"medium\" name=\"help-circle-outline\"></ion-icon>\n              </ion-button> -->\n            </ion-item>\n          </ion-card>\n\n          <span class=\"ion-margin\"></span>\n          <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" type=\"submit\"\n            [disabled]=\"!login.valid\">\n            Log In\n          </ion-button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map