"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 62698)).then((m) => m.MainPageModule),
                    },
                ],
            },
            {
                path: 'services',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_services_services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./services/services.module */ 24810)).then((m) => m.ServicesPageModule),
                    },
                ],
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_messages_messages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messages.module */ 24404)).then((m) => m.MessagesPageModule),
                    },
                ],
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 67276)).then((m) => m.ProfilePageModule),
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/tabs/main',
                pathMatch: 'full',
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);






let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _tabs_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.selectors */ 7159);






let TabsPage = class TabsPage {
    constructor() {
        this.activeTab = 'main';
    }
    trackByTab(index) {
        return index;
    }
    tabChanged(event) {
        this.activeTab = event.tab;
    }
    tabClicked(tab) {
        console.log('previous tab', this.activeTab);
        console.log('next tab', tab.id);
    }
};
TabsPage.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)((0,_tabs_selectors__WEBPACK_IMPORTED_MODULE_3__.selectTabsList)())
], TabsPage.prototype, "tabs$", void 0);
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 7159:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.selectors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectTabsList": () => (/* binding */ selectTabsList)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.state */ 24968);



const selectTabsList = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_tabs_state__WEBPACK_IMPORTED_MODULE_2__.TabsState], (tabState) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(tabState.listData, (tab) => tab));


/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs (ionTabsDidChange)=\"tabChanged($event)\">\n  <ion-tab-bar slot=\"bottom\" [translucent]=\"true\">\n    <ion-tab-button\n      *ngFor=\"let tab of tabs$ | async; trackBy: trackByTab\"\n      [tab]=\"tab.id\"\n      [disabled]=\"tab.disabled\"\n      (click)=\"tabClicked(tab)\"\n    >\n      <ion-icon [name]=\"tab.icon\"></ion-icon>\n      <ion-label>{{'bottomTabs.' + tab.id | translate}}</ion-label>\n      <ion-badge *ngIf=\"tab.badge\">{{tab.badge}}</ion-badge>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map