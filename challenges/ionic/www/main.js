(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _core_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth-guard/auth-guard.service */ 95775);





const routes = [
    {
        path: '',
        redirectTo: _app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.routes.tabs.root,
        pathMatch: 'full',
    },
    {
        path: _app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.routes.tabs.root,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then((m) => m.TabsPageModule),
        canActivate: [_core_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardAfterLoginService],
    },
    /* Auth routes */
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then((m) => m.AuthPageModule),
    },
    /* Other routes */
    //Whenever new screens or app flow added, and deeplink routes goes here.
    /* Redirect routes */
    {
        path: 'error',
        redirectTo: _app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.routes.redirectOnError,
    },
    {
        path: '**',
        redirectTo: _app_config__WEBPACK_IMPORTED_MODULE_0__.appConfig.routes.redirectOnNotFound,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
                useHash: true,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 35508);









let AppComponent = class AppComponent {
    constructor(store, platform, translateService) {
        this.store = store;
        this.platform = platform;
        this.translateService = translateService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.setupBackButtonListner();
        });
    }
    setupBackButtonListner() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.addListener('backButton', (data) => {
            if (!data.canGoBack) {
                _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.exitApp();
            }
        });
    }
    ngAfterViewInit() {
        this.platform.ready().finally(() => {
            setTimeout(() => _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__.SplashScreen.hide());
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appConfig": () => (/* binding */ appConfig)
/* harmony export */ });
const appConfig = {
    /* App languages */
    langs: {
        default: 'en',
        en: 'en',
    },
    /* App routes */
    routes: {
        tabs: {
            root: 'tabs',
            tab1: 'tab1',
        },
        auth: {
            login: 'auth/login',
            register: 'auth/register',
            forgot: 'auth/forgot',
            reset: 'auth/reset',
        },
        redirectOnError: 'tabs',
        redirectOnNotFound: 'tabs',
    },
};


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8697:
/*!*******************************************************!*\
  !*** ./src/app/core/auth-guard/auth-guard.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthAction": () => (/* binding */ AuthAction)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/no-namespace
var AuthAction;
(function (AuthAction) {
    class Login {
        constructor(userId, token, isAuth = true) {
            this.userId = userId;
            this.token = token;
            this.isAuth = isAuth;
        }
    }
    Login.type = '[Login] User login';
    AuthAction.Login = Login;
    class Logout {
        constructor(isAuth = false) {
            this.isAuth = isAuth;
        }
    }
    Logout.type = '[Logout] User logout';
    AuthAction.Logout = Logout;
})(AuthAction || (AuthAction = {}));


/***/ }),

/***/ 46337:
/*!*******************************************************!*\
  !*** ./src/app/core/auth-guard/auth-guard.handler.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHandler": () => (/* binding */ AuthHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ 49670);
/* harmony import */ var _auth_guard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.actions */ 8697);






let AuthHandler = class AuthHandler {
    constructor(actions$, navController) {
        this.actions$ = actions$;
        this.navController = navController;
        this.actions$.pipe((0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.ofActionDispatched)(_auth_guard_actions__WEBPACK_IMPORTED_MODULE_2__.AuthAction.Login, _auth_guard_actions__WEBPACK_IMPORTED_MODULE_2__.AuthAction.Logout)).subscribe((auth) => {
            if (auth.isAuth) {
                this.navController.navigateRoot(_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.routes.tabs.root);
                return;
            }
            this.navController.navigateRoot(_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.routes.auth.login);
        });
    }
};
AuthHandler.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Actions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
AuthHandler = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], AuthHandler);



/***/ }),

/***/ 21450:
/*!*********************************************************!*\
  !*** ./src/app/core/auth-guard/auth-guard.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectIsAuth": () => (/* binding */ selectIsAuth),
/* harmony export */   "selectAuthToken": () => (/* binding */ selectAuthToken)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _auth_guard_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.state */ 2111);


const selectIsAuth = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_auth_guard_state__WEBPACK_IMPORTED_MODULE_1__.AuthGuardState], (state) => state.isAuth);
const selectAuthToken = () => (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)([_auth_guard_state__WEBPACK_IMPORTED_MODULE_1__.AuthGuardState], (state) => state.token);


/***/ }),

/***/ 95775:
/*!*******************************************************!*\
  !*** ./src/app/core/auth-guard/auth-guard.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardAfterLoginService": () => (/* binding */ AuthGuardAfterLoginService),
/* harmony export */   "AuthGuardBeforeLoginService": () => (/* binding */ AuthGuardBeforeLoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config */ 49670);
/* harmony import */ var _auth_guard_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.selectors */ 21450);







let AuthGuardAfterLoginService = class AuthGuardAfterLoginService {
    constructor(store, navController) {
        this.store = store;
        this.navController = navController;
    }
    canActivate() {
        return this.store.select((0,_auth_guard_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuth)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((isAuth) => {
            if (isAuth) {
                return true;
            }
            this.navController.navigateRoot(_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.routes.auth.login);
            return false;
        }));
    }
};
AuthGuardAfterLoginService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
AuthGuardAfterLoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthGuardAfterLoginService);

let AuthGuardBeforeLoginService = class AuthGuardBeforeLoginService {
    constructor(store, navController) {
        this.store = store;
        this.navController = navController;
    }
    canActivate() {
        return this.store.select((0,_auth_guard_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuth)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((isAuth) => {
            if (isAuth) {
                this.navController.navigateRoot(_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.routes.tabs.root);
                return false;
            }
            return true;
        }));
    }
};
AuthGuardBeforeLoginService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
AuthGuardBeforeLoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], AuthGuardBeforeLoginService);



/***/ }),

/***/ 2111:
/*!*****************************************************!*\
  !*** ./src/app/core/auth-guard/auth-guard.state.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "AuthGuardState": () => (/* binding */ AuthGuardState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _auth_guard_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.actions */ 8697);




const initialState = {
    isAuth: false,
    token: '',
    refreshToken: '',
};
let AuthGuardState = class AuthGuardState {
    login(context, action) {
        const state = context.getState();
        context.setState(Object.assign(Object.assign({}, state), action));
    }
    logout(context) {
        const state = context.getState();
        context.setState(Object.assign(Object.assign({}, state), { isAuth: false }));
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_guard_actions__WEBPACK_IMPORTED_MODULE_1__.AuthAction.Login)
], AuthGuardState.prototype, "login", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_guard_actions__WEBPACK_IMPORTED_MODULE_1__.AuthAction.Logout)
], AuthGuardState.prototype, "logout", null);
AuthGuardState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'auth',
        defaults: initialState,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AuthGuardState);



/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/router-plugin */ 4845);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var _auth_guard_auth_guard_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard/auth-guard.handler */ 46337);
/* harmony import */ var _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler/app-error-handler.service */ 83561);
/* harmony import */ var _router_custom_router_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/custom-router-serializer */ 73807);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ 78641);













let CoreModule = class CoreModule {
    constructor() { }
};
CoreModule.ctorParameters = () => [];
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            /* Angular */
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            /* NGXS */
            ..._store__WEBPACK_IMPORTED_MODULE_5__.ngxsImports,
            /* NGX TRANSLATE */
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
                defaultLanguage: _app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig.langs["default"],
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                    useFactory: (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, './assets/i18n/', '.json'),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
                },
            }),
        ],
        declarations: [],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ErrorHandler, useClass: _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.AppErrorHandler },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
                useFactory: () => () => { },
                deps: [_auth_guard_auth_guard_handler__WEBPACK_IMPORTED_MODULE_2__.AuthHandler],
                multi: true,
            },
            { provide: _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_0__.RouterStateSerializer, useClass: _router_custom_router_serializer__WEBPACK_IMPORTED_MODULE_4__.CustomRouterStateSerializer },
        ],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule],
    })
], CoreModule);



/***/ }),

/***/ 83561:
/*!*****************************************************************!*\
  !*** ./src/app/core/error-handler/app-error-handler.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppErrorHandler": () => (/* binding */ AppErrorHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toast/toast.service */ 60649);




let AppErrorHandler = class AppErrorHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_2__.ErrorHandler {
    constructor(toastService) {
        super();
        this.toastService = toastService;
    }
    handleError(error) {
        let displayMessage = 'An error occurred.';
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            displayMessage += ' See console for details.';
            this.toastService.error(displayMessage);
        }
        super.handleError(error);
    }
};
AppErrorHandler.ctorParameters = () => [
    { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService }
];
AppErrorHandler = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AppErrorHandler);



/***/ }),

/***/ 73807:
/*!*********************************************************!*\
  !*** ./src/app/core/router/custom-router-serializer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRouterStateSerializer": () => (/* binding */ CustomRouterStateSerializer)
/* harmony export */ });
class CustomRouterStateSerializer {
    serialize(routerState) {
        const { url, root: { queryParams }, } = routerState;
        let { root: route } = routerState;
        while (route.firstChild) {
            route = route.firstChild;
        }
        const { params, data } = route;
        return { root: { url, params, queryParams, data } };
    }
}


/***/ }),

/***/ 78641:
/*!*************************************!*\
  !*** ./src/app/core/store/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ngxsImports": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.ngxsImports)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 34309);



/***/ }),

/***/ 34309:
/*!*************************************!*\
  !*** ./src/app/core/store/store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ngxsImports": () => (/* binding */ ngxsImports)
/* harmony export */ });
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 62015);
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/form-plugin */ 60365);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/logger-plugin */ 45011);
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/router-plugin */ 4845);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/storage-plugin */ 41322);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _tabs_main_main_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tabs/main/main.state */ 58769);
/* harmony import */ var _tabs_profile_profile_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tabs/profile/profile.state */ 99780);
/* harmony import */ var _tabs_tabs_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tabs/tabs.state */ 24968);
/* harmony import */ var _auth_guard_auth_guard_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth-guard/auth-guard.state */ 2111);











const ngxsMainStates = [
    _auth_guard_auth_guard_state__WEBPACK_IMPORTED_MODULE_10__.AuthGuardState,
    _tabs_tabs_state__WEBPACK_IMPORTED_MODULE_9__.TabsState,
    _tabs_main_main_state__WEBPACK_IMPORTED_MODULE_7__.MainPageState,
    _tabs_profile_profile_state__WEBPACK_IMPORTED_MODULE_8__.ProfilePageState,
];
const ngxsStorageStates = [_auth_guard_auth_guard_state__WEBPACK_IMPORTED_MODULE_10__.AuthGuardState, _tabs_tabs_state__WEBPACK_IMPORTED_MODULE_9__.TabsState];
const ngxsConfig = {
    developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production,
    selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
    },
    compatibility: {
        strictContentSecurityPolicy: true,
    },
};
const ngxsImports = [
    _ngxs_store__WEBPACK_IMPORTED_MODULE_5__.NgxsModule.forRoot(ngxsMainStates, ngxsConfig),
    _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsStoragePluginModule.forRoot({
        key: ngxsStorageStates,
    }),
    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_2__.NgxsLoggerPluginModule.forRoot({
        logger: console,
        collapsed: true,
        disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production,
    }),
    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_0__.NgxsReduxDevtoolsPluginModule.forRoot({ disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production }),
    _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_1__.NgxsFormPluginModule.forRoot(),
    _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsRouterPluginModule.forRoot(),
];


/***/ }),

/***/ 45146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);





let ApiService = class ApiService {
    constructor(store, http) {
        this.store = store;
        this.http = http;
    }
    httpHeaderOptions(optionalHeaders) {
        // const accessToken = this.store.selectSnapshot<string>(AuthGuardSelectors.authToken(AuthGuardState));
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(Object.assign({}, optionalHeaders));
    }
    get(url, optionalHeaders = {}) {
        return this.http.get(url, {
            headers: this.httpHeaderOptions(optionalHeaders),
        });
    }
    post(url, body, optionalHeaders = {}) {
        return this.http.post(url, body, {
            headers: this.httpHeaderOptions(optionalHeaders),
        });
    }
    put(url, body, optionalHeaders = {}) {
        return this.http.put(url, body, {
            headers: this.httpHeaderOptions(optionalHeaders),
        });
    }
    handleError(operation = 'operation') {
        return (error) => {
            console.log('status: ', error.status, ' operation: ', operation);
            // Let the app keep running by returning a safe result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
        };
    }
};
ApiService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 60649:
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    default(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                cssClass: 'default',
            });
            yield toast.present();
        });
    }
    info(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                cssClass: 'info',
            });
            yield toast.present();
        });
    }
    success(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                cssClass: 'success',
            });
            yield toast.present();
        });
    }
    warn(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                cssClass: 'warn',
            });
            yield toast.present();
        });
    }
    error(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                cssClass: 'error',
            });
            yield toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ToastService);



/***/ }),

/***/ 1893:
/*!*******************************************!*\
  !*** ./src/app/tabs/main/main.actions.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchAuctionsActions": () => (/* binding */ FetchAuctionsActions)
/* harmony export */ });
/* harmony import */ var _main_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.constant */ 31775);
/* eslint-disable @typescript-eslint/no-namespace */

/* Auctions Actions */
var FetchAuctionsActions;
(function (FetchAuctionsActions) {
    class FetchAuctions {
        constructor(page, isRefresh = false, api = (0,_main_constant__WEBPACK_IMPORTED_MODULE_0__.apiGetAllAuctions)()) {
            this.page = page;
            this.isRefresh = isRefresh;
            this.api = api;
            this.api = (0,_main_constant__WEBPACK_IMPORTED_MODULE_0__.apiGetAllAuctions)(this.page);
        }
    }
    FetchAuctions.type = '[Main Tab] Fetch auctions';
    FetchAuctionsActions.FetchAuctions = FetchAuctions;
    class FetchAuctionsSuccess {
        constructor(listData, page) {
            this.listData = listData;
            this.page = page;
        }
    }
    FetchAuctionsSuccess.type = '[Main Tab] Fetch auctions success';
    FetchAuctionsActions.FetchAuctionsSuccess = FetchAuctionsSuccess;
    class FetchAuctionsFail {
        constructor(error) {
            this.error = error;
        }
    }
    FetchAuctionsFail.type = '[Main Tab] Fetch auctions fail';
    FetchAuctionsActions.FetchAuctionsFail = FetchAuctionsFail;
})(FetchAuctionsActions || (FetchAuctionsActions = {}));


/***/ }),

/***/ 31775:
/*!********************************************!*\
  !*** ./src/app/tabs/main/main.constant.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiGetAllAuctions": () => (/* binding */ apiGetAllAuctions)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);

const apiGetAllAuctions = (page = 1) => 
//`${environment.api}v2/auction/buyer/?filter={isLive:true}&count=true`;
`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion}/auction/salesman/buyer-challenge%40caronsale.de/purchases?filter=%7BisLive%3Afalse%7D`;


/***/ }),

/***/ 58769:
/*!*****************************************!*\
  !*** ./src/app/tabs/main/main.state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "AUCTIONS_STATE_TOKEN": () => (/* binding */ AUCTIONS_STATE_TOKEN),
/* harmony export */   "MainPageState": () => (/* binding */ MainPageState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/api.service */ 45146);
/* harmony import */ var _main_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.actions */ 1893);






const initialState = {
    auctions: {
        isLoading: true,
        isFailed: false,
        isSuccess: false,
        error: null,
        activePage: 1,
        pages: [],
        listData: null,
    },
};
const AUCTIONS_STATE_TOKEN = new _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.StateToken('main');
let MainPageState = class MainPageState {
    constructor(apiService) {
        this.apiService = apiService;
    }
    /* Auctions Actions */
    fetchAuctions(ctx, action) {
        const state = ctx.getState();
        if (!state.auctions.listData || action.isRefresh) {
            ctx.patchState({
                auctions: Object.assign(Object.assign({}, state.auctions), { activePage: 1, pages: [], isLoading: true, isFailed: false, isSuccess: false }),
            });
        }
        return this.apiService
            .get(action.api)
            .pipe(
        // tap((auctions: AuctionsModel[]) => {
        //   console.log(auctions);
        //   ctx.dispatch(new FetchAuctionsActions.FetchAuctionsSuccess(auctions, action.page));
        // }),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((results) => results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { return console.log(error); })))
            .subscribe((data) => {
            console.log(data);
        }
        // catchError(() => {
        //   ctx.dispatch(
        //     new FetchAuctionsActions.FetchAuctionsFail('Error! Please try again.')
        //   );
        // })
        );
    }
    fetchAuctionsSuccess(ctx, action) {
        const state = ctx.getState();
        const isPageAlreadyExist = state.auctions.pages.find((page) => page === action.page);
        if (action.listData.length) {
            ctx.patchState({
                auctions: Object.assign(Object.assign({}, state.auctions), { activePage: action.page, pages: isPageAlreadyExist
                        ? [...state.auctions.pages]
                        : [...state.auctions.pages, action.page], listData: Object.assign(Object.assign({}, state.auctions.listData), { [action.page]: action.listData }), isLoading: false, isSuccess: true, isFailed: false, error: null }),
            });
        }
    }
    fetchAuctionsFail(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            auctions: Object.assign(Object.assign({}, state.auctions), { isLoading: false, isSuccess: false, isFailed: true, error: action.error }),
        });
    }
};
MainPageState.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_main_actions__WEBPACK_IMPORTED_MODULE_2__.FetchAuctionsActions.FetchAuctions)
], MainPageState.prototype, "fetchAuctions", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_main_actions__WEBPACK_IMPORTED_MODULE_2__.FetchAuctionsActions.FetchAuctionsSuccess)
], MainPageState.prototype, "fetchAuctionsSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_main_actions__WEBPACK_IMPORTED_MODULE_2__.FetchAuctionsActions.FetchAuctionsFail)
], MainPageState.prototype, "fetchAuctionsFail", null);
MainPageState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: AUCTIONS_STATE_TOKEN,
        defaults: initialState,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], MainPageState);



/***/ }),

/***/ 7696:
/*!*************************************************!*\
  !*** ./src/app/tabs/profile/profile.actions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileActions": () => (/* binding */ ProfileActions)
/* harmony export */ });
/* harmony import */ var _profile_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.constant */ 13706);
/* eslint-disable @typescript-eslint/no-namespace */

var ProfileActions;
(function (ProfileActions) {
    class FetchUser {
        constructor(userId, api = '') {
            this.userId = userId;
            this.api = api;
            this.api = (0,_profile_constant__WEBPACK_IMPORTED_MODULE_0__.apiGetUser)(this.userId);
        }
    }
    FetchUser.type = '[Profile Tab] Fetch user';
    ProfileActions.FetchUser = FetchUser;
    class FetchUserSuccess {
        constructor(listData) {
            this.listData = listData;
        }
    }
    FetchUserSuccess.type = '[Profile Tab] Fetch user success';
    ProfileActions.FetchUserSuccess = FetchUserSuccess;
    class FetchUserFail {
        constructor(error) {
            this.error = error;
        }
    }
    FetchUserFail.type = '[Profile Tab] Fetch user fail';
    ProfileActions.FetchUserFail = FetchUserFail;
})(ProfileActions || (ProfileActions = {}));


/***/ }),

/***/ 13706:
/*!**************************************************!*\
  !*** ./src/app/tabs/profile/profile.constant.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiGetUser": () => (/* binding */ apiGetUser)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);

const apiGetUser = (userId) => `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion}/users/${userId}`;


/***/ }),

/***/ 99780:
/*!***********************************************!*\
  !*** ./src/app/tabs/profile/profile.state.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "STATE_TOKEN": () => (/* binding */ STATE_TOKEN),
/* harmony export */   "ProfilePageState": () => (/* binding */ ProfilePageState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/api.service */ 45146);
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.actions */ 7696);






const initialState = {
    profile: {
        isLoading: true,
        isFailed: false,
        isSuccess: false,
        error: null,
        listData: null,
    },
};
const STATE_TOKEN = new _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.StateToken('profile');
let ProfilePageState = class ProfilePageState {
    constructor(apiService) {
        this.apiService = apiService;
    }
    fetchUser(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            profile: Object.assign(Object.assign({}, state.profile), { isLoading: true, isFailed: false, isSuccess: false }),
        });
        return this.apiService.get(action.api).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((profile) => ctx.dispatch(new _profile_actions__WEBPACK_IMPORTED_MODULE_2__.ProfileActions.FetchUserSuccess(profile))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => ctx.dispatch(new _profile_actions__WEBPACK_IMPORTED_MODULE_2__.ProfileActions.FetchUserFail('Error! Please try again.'))));
    }
    fetchUserSuccess(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            profile: Object.assign(Object.assign({}, state.profile), { listData: action.listData, isLoading: false, isSuccess: true, isFailed: false, error: null }),
        });
    }
    fetchUserFail(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            profile: Object.assign(Object.assign({}, state.profile), { isLoading: false, isSuccess: false, isFailed: true, error: action.error }),
        });
    }
};
ProfilePageState.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_profile_actions__WEBPACK_IMPORTED_MODULE_2__.ProfileActions.FetchUser)
], ProfilePageState.prototype, "fetchUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_profile_actions__WEBPACK_IMPORTED_MODULE_2__.ProfileActions.FetchUserSuccess)
], ProfilePageState.prototype, "fetchUserSuccess", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_profile_actions__WEBPACK_IMPORTED_MODULE_2__.ProfileActions.FetchUserFail)
], ProfilePageState.prototype, "fetchUserFail", null);
ProfilePageState = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: STATE_TOKEN,
        defaults: initialState,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ProfilePageState);



/***/ }),

/***/ 24968:
/*!************************************!*\
  !*** ./src/app/tabs/tabs.state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBadgeAction": () => (/* binding */ AddBadgeAction),
/* harmony export */   "RemoveBadgeAction": () => (/* binding */ RemoveBadgeAction),
/* harmony export */   "ClearBadgeAction": () => (/* binding */ ClearBadgeAction),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "TabsState": () => (/* binding */ TabsState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 35508);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




class AddBadgeAction {
    constructor(tab) {
        this.tab = tab;
    }
}
AddBadgeAction.type = '[Tabs] Add badge to tab';
class RemoveBadgeAction {
    constructor(tab) {
        this.tab = tab;
    }
}
RemoveBadgeAction.type = '[Tabs] Remove badge from tab';
class ClearBadgeAction {
    constructor(tab) {
        this.tab = tab;
    }
}
ClearBadgeAction.type = '[Tabs] Clear badge from tab';
const initialState = {
    active: 'main',
    listData: [
        { id: 'main', badge: 0, icon: 'car-sport-outline', disabled: false },
        { id: 'services', badge: 0, icon: 'construct-outline', disabled: false },
        {
            id: 'messages',
            badge: 0,
            icon: 'notifications-outline',
            disabled: false,
        },
        { id: 'profile', badge: 0, icon: 'person-circle-outline', disabled: false },
    ],
    isLoading: false,
    isFailed: false,
    isSuccess: false,
    error: null,
};
let TabsState = class TabsState {
    constructor() { }
    addBadgeAction(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            listData: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(state.listData, (tab) => {
                if (tab.id === action.tab) {
                    return Object.assign(Object.assign({}, tab), { badge: tab.badge + 1 });
                }
                return tab;
            }),
        });
    }
    removeBadgeAction(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            listData: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(state.listData, (tab) => {
                if (tab.id === action.tab) {
                    return Object.assign(Object.assign({}, tab), { badge: tab.badge ? tab.badge - 1 : tab.badge });
                }
                return tab;
            }),
        });
    }
    clearBadgeAction(ctx, action) {
        const state = ctx.getState();
        ctx.patchState({
            listData: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(state.listData, (tab) => {
                if (tab.id === action.tab) {
                    return Object.assign(Object.assign({}, tab), { badge: 0 });
                }
                return tab;
            }),
        });
    }
};
TabsState.ctorParameters = () => [];
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(AddBadgeAction)
], TabsState.prototype, "addBadgeAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(RemoveBadgeAction)
], TabsState.prototype, "removeBadgeAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(ClearBadgeAction)
], TabsState.prototype, "clearBadgeAction", null);
TabsState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'tabs',
        defaults: initialState,
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], TabsState);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appName: 'CarOnSale',
    envName: 'DEV',
    production: false,
    test: false,
    api: 'https://api-core-dev.caronsale.de/api/',
    apiVersion: 'v1',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map