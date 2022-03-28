"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_main_main_module_ts"],{

/***/ 17296:
/*!*********************************************************************!*\
  !*** ./src/app/components/auction-cards/auction-cards.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPostsComponent": () => (/* binding */ UsersPostsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _auction_cards_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auction-cards.component.html?ngResource */ 80222);
/* harmony import */ var _auction_cards_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auction-cards.component.scss?ngResource */ 26556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let UsersPostsComponent = class UsersPostsComponent {
    constructor() {
        this.isLoading = true;
    }
    trackByPost(index) {
        return index;
    }
    ngOnInit() { }
};
UsersPostsComponent.ctorParameters = () => [];
UsersPostsComponent.propDecorators = {
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    auctions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UsersPostsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-auction-cards',
        template: _auction_cards_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auction_cards_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersPostsComponent);



/***/ }),

/***/ 49754:
/*!******************************************************************!*\
  !*** ./src/app/components/auction-cards/auction-cards.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionCardsComponentModule": () => (/* binding */ AuctionCardsComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _auction_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auction-cards.component */ 17296);






let AuctionCardsComponentModule = class AuctionCardsComponentModule {
};
AuctionCardsComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        declarations: [_auction_cards_component__WEBPACK_IMPORTED_MODULE_1__.UsersPostsComponent],
        exports: [_auction_cards_component__WEBPACK_IMPORTED_MODULE_1__.UsersPostsComponent],
    })
], AuctionCardsComponentModule);



/***/ }),

/***/ 51962:
/*!**************************************************!*\
  !*** ./src/app/tabs/main/main-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 25904);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage,
    },
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 62698:
/*!******************************************!*\
  !*** ./src/app/tabs/main/main.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _components_auction_cards_auction_cards_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/auction-cards/auction-cards.module */ 49754);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page */ 25904);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ 51962);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_3__.MainPageRoutingModule,
            _components_auction_cards_auction_cards_module__WEBPACK_IMPORTED_MODULE_1__.AuctionCardsComponentModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_2__.MainPage],
    })
], MainPageModule);



/***/ }),

/***/ 25904:
/*!****************************************!*\
  !*** ./src/app/tabs/main/main.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page.html?ngResource */ 43069);
/* harmony import */ var _main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss?ngResource */ 58187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 78611);
/* harmony import */ var _main_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.actions */ 1893);
/* harmony import */ var _main_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.selectors */ 30109);









let MainPage = class MainPage {
    constructor(store) {
        this.store = store;
    }
    trackBy(index) {
        return index;
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(this.store.dispatch(new _main_actions__WEBPACK_IMPORTED_MODULE_3__.FetchAuctionsActions.FetchAuctions(1, true)));
            yield this.ionRefresher.complete();
        });
    }
    loadDataAuctionsPagination(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const activePage = this.store.selectSnapshot((state) => state.main.auctions.activePage);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(this.store.dispatch(new _main_actions__WEBPACK_IMPORTED_MODULE_3__.FetchAuctionsActions.FetchAuctions(activePage + 1)));
            yield this.infiniteScroll.complete();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { });
    }
    ionViewDidEnter() {
        console.log(new _main_actions__WEBPACK_IMPORTED_MODULE_3__.FetchAuctionsActions.FetchAuctions(9));
        const activePage = this.store.selectSnapshot((state) => state.main.auctions.activePage);
        this.store.dispatch([new _main_actions__WEBPACK_IMPORTED_MODULE_3__.FetchAuctionsActions.FetchAuctions(activePage)]);
    }
    ionViewDidLeave() { }
};
MainPage.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store }
];
MainPage.propDecorators = {
    ionContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent,] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresher,] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll,] }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)((0,_main_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAuctions)())
], MainPage.prototype, "auctions$", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)((0,_main_selectors__WEBPACK_IMPORTED_MODULE_4__.selectAuctionsIsLoading)())
], MainPage.prototype, "auctionsIsLoading$", void 0);
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-main',
        template: _main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPage);



/***/ }),

/***/ 30109:
/*!*********************************************!*\
  !*** ./src/app/tabs/main/main.selectors.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAuctions": () => (/* binding */ selectAuctions),
/* harmony export */   "selectAuctionsIsLoading": () => (/* binding */ selectAuctionsIsLoading)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _main_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.state */ 58769);


const selectAuctions = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_main_state__WEBPACK_IMPORTED_MODULE_1__.MainPageState], (state) => state.auctions.pages
    .map((key) => state.auctions.listData[key])
    .reduce((a, b) => a.concat(b), []));
const selectAuctionsIsLoading = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_main_state__WEBPACK_IMPORTED_MODULE_1__.MainPageState], (state) => state.auctions.isLoading);


/***/ }),

/***/ 78611:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 14423);

function lastValueFrom(source, config) {
    const hasConfig = typeof config === 'object';
    return new Promise((resolve, reject) => {
        let _hasValue = false;
        let _value;
        source.subscribe({
            next: (value) => {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: () => {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
                }
            },
        });
    });
}


/***/ }),

/***/ 26556:
/*!**********************************************************************************!*\
  !*** ./src/app/components/auction-cards/auction-cards.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ":host:last-child {\n  margin-bottom: var(--ion-margin, 32px);\n}\n\n.post-list-card {\n  margin-top: var(--ion-margin, 16px);\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  border-radius: 0px;\n}\n\n.post-list-card ion-item {\n  --inner-padding-end: 0px;\n  --background: inherit;\n}\n\n.post-list-card .post-list-content {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.post-list-card .action-item .action-button {\n  margin-right: var(--ion-margin, 16px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1Y3Rpb24tY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQ0FBQTtBQUFKOztBQUtBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9JO0VBQ0UsZ0RBQUE7QUFMTiIsImZpbGUiOiJhdWN0aW9uLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDMycHgpO1xuICB9XG59XG5cbi8vIFBvc3QgY2FyZCBsaXN0XG4ucG9zdC1saXN0LWNhcmQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gIGlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgLnBvc3QtbGlzdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cblxuICAuYWN0aW9uLWl0ZW0ge1xuICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 58187:
/*!*****************************************************!*\
  !*** ./src/app/tabs/main/main.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 80222:
/*!**********************************************************************************!*\
  !*** ./src/app/components/auction-cards/auction-cards.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row>\n  <ng-container *ngIf=\"!isLoading\">\n    <ion-col size=\"12\" size-md=\"6\" offsetMd=\"3\" size-lg=\"4\" offsetLg=\"4\" class=\"ion-no-padding\"\n      *ngFor=\"let auction of auctions; trackBy: trackByPost\">\n      <ion-card class=\"auction-list-card\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"auction.avatar\" />\n          </ion-avatar>\n          <ion-label>\n            {{ auction.firstName }} {{ auction.lastName }}\n            <p>two minutes ago</p>\n          </ion-label>\n          <ion-buttons slot=\"end\">\n            <ion-button color=\"medium\">\n              <ion-icon slot=\"icon-only\" md=\"ellipsis-vertical-outline\" ios=\"ellipsis-horizontal-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n\n        <img [src]=\"auction.image\" />\n\n        <ion-card-content class=\"auction-list-content\">\n          {{ auction.content }}\n        </ion-card-content>\n\n        <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"margin-left: 10px\">\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"medium\">\n              <ion-icon slot=\"start\" name=\"heart-outline\"></ion-icon>\n              <small>{{ auction.likes }}</small>\n            </ion-button>\n            <ion-button color=\"medium\">\n              <ion-icon slot=\"start\" name=\"chatbox-outline\"></ion-icon>\n              <small>{{ auction.comments }}</small>\n            </ion-button>\n            <ion-button color=\"medium\">\n              <ion-icon slot=\"start\" name=\"return-up-forward-outline\"></ion-icon>\n              <small>{{ auction.shared }}</small>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-buttons slot=\"end\">\n            <ion-button color=\"medium\">\n              <ion-icon size=\"small\" slot=\"start\" name=\"eye-outline\"></ion-icon>\n              <small>{{ auction.views }}</small>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n  </ng-container>\n\n  <ng-container *ngIf=\"isLoading\">\n    <ion-col size=\"12\" size-md=\"6\" offsetMd=\"3\" size-lg=\"4\" offsetLg=\"4\" class=\"ion-no-padding\"\n      *ngFor=\"let item of [1, 2, 3, 4]\">\n      <ion-card class=\"auction-list-card\">\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <ion-skeleton-text style=\"width: 100%; height: 100%; border-radius: 50%\"></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text style=\"width: 50%\"></ion-skeleton-text>\n            <p>\n              <ion-skeleton-text style=\"width: 100%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n\n        <ion-skeleton-text style=\"width: 100%; height: 200px\"></ion-skeleton-text>\n\n        <ion-card-content class=\"auction-list-content\">\n          <ion-skeleton-text style=\"width: 100%; height: 50px\"></ion-skeleton-text>\n        </ion-card-content>\n\n        <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"margin-left: 10px\">\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"medium\">\n              <ion-skeleton-text style=\"width: 32px; height: 32px; border-radius: 50%\"></ion-skeleton-text>\n            </ion-button>\n            <ion-button color=\"medium\">\n              <ion-skeleton-text style=\"width: 32px; height: 32px; border-radius: 50%\"></ion-skeleton-text>\n            </ion-button>\n            <ion-button color=\"medium\">\n              <ion-skeleton-text style=\"width: 32px; height: 32px; border-radius: 50%\"></ion-skeleton-text>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-buttons slot=\"end\">\n            <ion-button color=\"medium\">\n              <ion-skeleton-text style=\"width: 32px; height: 32px; border-radius: 50%\"></ion-skeleton-text>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-card>\n    </ion-col>\n  </ng-container>\n</ion-row>";

/***/ }),

/***/ 43069:
/*!*****************************************************!*\
  !*** ./src/app/tabs/main/main.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{'bottomTabs.main' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"50\" pullMax=\"100\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-auction-cards [auctions]=\"(auctions$ | async)\" [isLoading]=\"auctionsIsLoading$ | async\"></app-auction-cards>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadDataAuctionsPagination($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"lines\"> </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_main_main_module_ts.js.map