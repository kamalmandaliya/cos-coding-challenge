"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_services_services_module_ts"],{

/***/ 68141:
/*!**********************************************************!*\
  !*** ./src/app/tabs/services/services-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPageRoutingModule": () => (/* binding */ ServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.page */ 91689);




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage,
    },
];
let ServicesPageRoutingModule = class ServicesPageRoutingModule {
};
ServicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicesPageRoutingModule);



/***/ }),

/***/ 24810:
/*!**************************************************!*\
  !*** ./src/app/tabs/services/services.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPageModule": () => (/* binding */ ServicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.page */ 91689);
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-routing.module */ 68141);






let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _services_routing_module__WEBPACK_IMPORTED_MODULE_2__.ServicesPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_1__.ServicesPage],
    })
], ServicesPageModule);



/***/ }),

/***/ 91689:
/*!************************************************!*\
  !*** ./src/app/tabs/services/services.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPage": () => (/* binding */ ServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.page.html?ngResource */ 54476);
/* harmony import */ var _services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.page.scss?ngResource */ 81977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ServicesPage = class ServicesPage {
    constructor(navController) {
        this.navController = navController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewDidEnter() { }
    ionViewDidLeave() { }
};
ServicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ServicesPage.propDecorators = {
    ionContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent,] }]
};
ServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-services',
        template: _services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServicesPage);



/***/ }),

/***/ 81977:
/*!*************************************************************!*\
  !*** ./src/app/tabs/services/services.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 54476:
/*!*************************************************************!*\
  !*** ./src/app/tabs/services/services.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{'bottomTabs.services' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_services_services_module_ts.js.map