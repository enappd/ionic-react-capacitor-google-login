(self["webpackChunkIonNgCapGoogleLogin"] = self["webpackChunkIonNgCapGoogleLogin"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 4047:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor-community/http/dist/esm/definitions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 3975:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor-community/http/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Http": () => (/* binding */ Http)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4047);

const Http = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Http', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7142)).then(m => new m.HttpWeb()),
    electron: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_http_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7142)).then(m => new m.HttpWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6990:
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 5970);




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 8721:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 6990);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 5970);







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 5970:
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.page.html */ 8258);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss */ 6919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1543);
/* harmony import */ var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/http */ 3975);







let LandingPage = class LandingPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            let data = this.router.getCurrentNavigation().extras.state;
            if (data) {
                if (data.user.type === 'existing') {
                    let token = data.user.accessToken;
                    this.getUserProfileData(token);
                }
                else {
                    this.user = data.user;
                    console.log(this.user);
                }
            }
        });
    }
    signOut() {
        _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuth.signOut().then(() => {
            console.log('Logged out');
            this.router.navigate(['home']);
        });
    }
    getUserProfileData(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                url: `https://www.googleapis.com/oauth2/v2/userinfo?key=AIzaSyBVD7iI39rH0-GCuVknv80cscV8CLPZzUk&oauth_token=${token}`,
                headers: { 'Content-Type': 'application/json' }
            };
            const response = yield _capacitor_community_http__WEBPACK_IMPORTED_MODULE_3__.Http.request(Object.assign(Object.assign({}, options), { method: 'GET' }));
            this.user = response.data;
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingPage);



/***/ }),

/***/ 6919:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8258:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list-header class=\"ion-margin-bottom\">\n    <ion-label>You are logged in!</ion-label>\n  </ion-list-header>\n  <ion-item *ngIf=\"user\" class=\"ion-padding-bottom\">\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"user.imageUrl || user.picture\" />\n    </ion-thumbnail>\n    <ion-label>\n      <ion-text>\n        <h3 class=\"ion-text-big\" *ngIf=\"user.name\">{{user.name}}</h3>\n        <h3 class=\"ion-text-big\" *ngIf=\"!user.name\">{{user.givenName}} {{user.familyName}}</h3>\n      </ion-text>\n        <p>{{user.email}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-button class=\"ion-margin-top\" color=\"danger\" expand=\"full\" (click)=\"signOut()\">Logout</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map