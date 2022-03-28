"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_profile_profile_module_ts"],{

/***/ 97311:
/*!********************************************************!*\
  !*** ./src/app/tabs/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 65813);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 67276:
/*!************************************************!*\
  !*** ./src/app/tabs/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 65813);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 97311);






let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfilePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    })
], ProfilePageModule);



/***/ }),

/***/ 65813:
/*!**********************************************!*\
  !*** ./src/app/tabs/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 82416);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 10049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.actions */ 7696);
/* harmony import */ var _profile_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.selectors */ 72224);








let ProfilePage = class ProfilePage {
    constructor(store, menuController) {
        this.store = store;
        this.menuController = menuController;
    }
    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    toggleMenu() {
        this.menuController.toggle('profile');
    }
    ngOnInit() {
        this.store.dispatch(new _profile_actions__WEBPACK_IMPORTED_MODULE_3__.ProfileActions.FetchUser('1'));
    }
    ionViewDidEnter() {
        this.menuController.enable(true, 'profile');
    }
    ionViewDidLeave() {
        this.menuController.enable(false, 'profile');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)((0,_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUser)())
], ProfilePage.prototype, "user$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)((0,_profile_selectors__WEBPACK_IMPORTED_MODULE_4__.selectUserLoadingStates)())
], ProfilePage.prototype, "userLoadingStates$", void 0);
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 72224:
/*!***************************************************!*\
  !*** ./src/app/tabs/profile/profile.selectors.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectUser": () => (/* binding */ selectUser),
/* harmony export */   "selectUserLoadingStates": () => (/* binding */ selectUserLoadingStates)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _profile_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.state */ 99780);


const selectUser = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_profile_state__WEBPACK_IMPORTED_MODULE_1__.ProfilePageState], (state) => state.profile.listData);
const selectUserLoadingStates = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_profile_state__WEBPACK_IMPORTED_MODULE_1__.ProfilePageState], (state) => ({
    isLoading: state.profile.isLoading,
    isSuccess: state.profile.isSuccess,
    isFailed: state.profile.isFailed,
}));


/***/ }),

/***/ 10049:
/*!***********************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 82416:
/*!***********************************************************!*\
  !*** ./src/app/tabs/profile/profile.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\" *ngIf=\"!(userLoadingStates$ | async).isLoading\">\n      @{{(user$ | async).username}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"[ '/auth', 'login' ]\" routerDirection=\"root\">\n        <ion-icon color=\"danger\" slot=\"icon-only\" name=\"power-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"100\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list lines=\"none\" *ngIf=\"!(userLoadingStates$ | async).isLoading\">\n    <ion-item lines=\"none\" *ngIf=\"user$ | async as user\">\n      <ion-avatar slot=\"start\" style=\"width: 72px; height: 72px\">\n        <img [src]=\"user.avatar\" />\n      </ion-avatar>\n      <ion-label>\n        <h1 style=\"font-weight: bold\">{{user.firstName}} {{user.lastName}}</h1>\n        <h3>{{user.status}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_profile_profile_module_ts.js.map