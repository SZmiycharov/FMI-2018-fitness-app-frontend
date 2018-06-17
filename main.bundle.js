webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articles_life_style_component_new_article_life1_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article/life1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_life_style_component_new_article_1_life2_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article.1/life2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_life_style_component_new_article_2_life3_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article.2/life3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_food_component_new_article_2_food3_component__ = __webpack_require__("./src/app/articles/food-component/new-article.2/food3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_food_component_new_article_1_food2_component__ = __webpack_require__("./src/app/articles/food-component/new-article.1/food2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_food_component_new_article_food1_component__ = __webpack_require__("./src/app/articles/food-component/new-article/food1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_program_component_edit_program_component__ = __webpack_require__("./src/app/edit-program-component/edit-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__articles_workout_component_workout_component__ = __webpack_require__("./src/app/articles/workout-component/workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__articles_food_component_food_component__ = __webpack_require__("./src/app/articles/food-component/food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articles_life_style_component_lifestyle_component__ = __webpack_require__("./src/app/articles/life-style-component/lifestyle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_component_registration_component__ = __webpack_require__("./src/app/registration-component/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_component_login_component__ = __webpack_require__("./src/app/login-component/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clients_component_clients_component__ = __webpack_require__("./src/app/clients-component/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__personal_information_component_personal_information_component__ = __webpack_require__("./src/app/personal-information-component/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__work_component_work_component__ = __webpack_require__("./src/app/work-component/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__technologies_component_technologies_component__ = __webpack_require__("./src/app/technologies-component/technologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sleep_component_sleep_component__ = __webpack_require__("./src/app/sleep-component/sleep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__trainers_component_trainers_component__ = __webpack_require__("./src/app/trainers-component/trainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_component_settings_component__ = __webpack_require__("./src/app/settings-component/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/technologies', pathMatch: 'full' },
    { path: 'personal-information', component: __WEBPACK_IMPORTED_MODULE_15__personal_information_component_personal_information_component__["a" /* PersonalInformationComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_16__work_component_work_component__["a" /* WorkComponent */] },
    { path: 'technologies', component: __WEBPACK_IMPORTED_MODULE_17__technologies_component_technologies_component__["a" /* TechnologiesComponent */] },
    { path: 'sleep', component: __WEBPACK_IMPORTED_MODULE_18__sleep_component_sleep_component__["a" /* SleepComponent */] },
    { path: 'trainers', component: __WEBPACK_IMPORTED_MODULE_19__trainers_component_trainers_component__["a" /* TrainersComponent */] },
    { path: 'setings', component: __WEBPACK_IMPORTED_MODULE_20__settings_component_settings_component__["a" /* SettingsComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_12__clients_component_clients_component__["a" /* ClientsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_component_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_10__registration_component_registration_component__["a" /* RegistrationComponent */] },
    { path: 'lifestyle', component: __WEBPACK_IMPORTED_MODULE_9__articles_life_style_component_lifestyle_component__["a" /* LifeStyleComponent */] },
    { path: 'life1', component: __WEBPACK_IMPORTED_MODULE_0__articles_life_style_component_new_article_life1_component__["a" /* Life1Component */] },
    { path: 'life2', component: __WEBPACK_IMPORTED_MODULE_1__articles_life_style_component_new_article_1_life2_component__["a" /* Life2Component */] },
    { path: 'life3', component: __WEBPACK_IMPORTED_MODULE_2__articles_life_style_component_new_article_2_life3_component__["a" /* Life3Component */] },
    { path: 'food', component: __WEBPACK_IMPORTED_MODULE_8__articles_food_component_food_component__["a" /* FoodComponent */] },
    { path: 'food1', component: __WEBPACK_IMPORTED_MODULE_5__articles_food_component_new_article_food1_component__["a" /* Food1Component */] },
    { path: 'food2', component: __WEBPACK_IMPORTED_MODULE_4__articles_food_component_new_article_1_food2_component__["a" /* Food2Component */] },
    { path: 'food3', component: __WEBPACK_IMPORTED_MODULE_3__articles_food_component_new_article_2_food3_component__["a" /* Food3Component */] },
    { path: 'workout', component: __WEBPACK_IMPORTED_MODULE_7__articles_workout_component_workout_component__["a" /* WorkoutComponent */] },
    { path: 'edit-program', component: __WEBPACK_IMPORTED_MODULE_6__edit_program_component_edit_program_component__["a" /* EditProgramComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_14__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.sidenav {\r\n    height:500px;\r\n    width: 400px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    overflow-x: hidden;\r\n    border-radius:20% ;\r\n    margin-top:100px;\r\n}\r\n.sidenav p {\r\n    padding-left: 30px;\r\n  \r\n}\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: black;\r\n    display: block;\r\n}\r\n.sidenav a:hover {\r\n    color: black;\r\n}\r\n.main {\r\n    margin-left: 200px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n.content {\r\n    padding-top:30px;\r\n    overflow: auto;\r\n}\r\n.header {\r\n    background-color: #26282a;\r\n    text-align: center;\r\n    height: 80px;\r\n    color: #ffa100;\r\n}\r\n.page{\r\n    margin-bottom: 10%; \r\n    padding-bottom: 10%; \r\n}\r\n.admin-navbar {\r\n    z-index: 1;\r\n    background-color:  grey;\r\n    color:black;\r\n    top: 10%;\r\n    width: 100%;\r\n    height: 7%;\r\n    padding: 10px;\r\n}\r\n.navbar {\r\n    z-index: 1;\r\n    background-color:  #ffa100;\r\n    color:black;\r\n    top: 10%;\r\n    width: 100%;\r\n    height: 7%;\r\n    padding: 10px;\r\n}\r\na {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\na:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n.inline-bar {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n.menu-bar-active-item{\r\n  text-decoration: none!important; \r\n  color: #46ADC6!important;\r\n}\r\n.progress-bar {\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #ffa100;\r\n    -webkit-transition: width .6s ease;\r\n    transition: width .6s ease;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <h1>YOLO - The Real Personal Trainer\r\n    </h1>\r\n  </div>\r\n  <div>\r\n    <div class=\"navbar\" *ngIf=\"!isTrainer()\">\r\n      <div class=\"inline-bar\">\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/technologies\">My Day</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/work\">Training Mode</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/sleep\">Sleep analysis</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/setings\">Settings</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/trainers\">Trainers</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"!isLogged\" (click)=\"checkLogin()\" routerLink=\"/registration\">Registration</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"!isLogged\" (click)=\"checkLogin()\" routerLink=\"/login\">Login</a>\r\n        <a class=\"btn btn-link\" (click)=\"logout()\" *ngIf=\"isLogged\" href=\"#\">Logout</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"admin-navbar\" *ngIf=\"isTrainer()\">\r\n      <div class=\"inline-bar\">\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/technologies\">My Day</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/work\">Training Mode</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged\" (click)=\"checkLogin()\" routerLink=\"/setings\">Settings</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"isLogged \" (click)=\"checkLogin()\" routerLink=\"/clients\">Clients</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"!isLogged\" (click)=\"checkLogin()\" routerLink=\"/registration\">Registration</a>\r\n        <a class=\"btn btn-link\" *ngIf=\"!isLogged\" (click)=\"checkLogin()\" routerLink=\"/login\">Login</a>\r\n        <a class=\"btn btn-link\" (click)=\"logout()\" *ngIf=\"isLogged\" href=\"#\">Logout</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"sidenav col-md-2 \" *ngIf=\"isLogged\">\r\n        <div>\r\n       \r\n          <p>\r\n            <b>Progression level</b>\r\n          </p>\r\n     \r\n            <br>\r\n          <p>Adidas badka\r\n            <br>\r\n          </p>\r\n          <p>Hulk\r\n            <br>\r\n          </p>\r\n          <p>Monster\r\n            <br>\r\n          </p>\r\n          <p>One month\r\n            <br>\r\n          </p>\r\n          <a routerLink=\"/personal-information\">\r\n            <img src=\"assets/2.png\" class=\"img-rounded\" alt=\"img\" width=\"50px\" height=\"50px\"> </a>\r\n            <div class=\"container\">\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n                    style=\"width:60%\">\r\n                    60%\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n            <p>Amateur\r\n            <br>\r\n          </p>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"content col-md-9\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
    }
    AppComponent.prototype.logout = function () {
        this.isLoaded = false;
        this.isLogged = false;
        this._service.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isLoaded = false;
        this.checkLogin();
        this.isLoaded = true;
    };
    AppComponent.prototype.isTrainer = function () {
        if (localStorage.getItem("role") == "trainer") {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.checkLogin = function () {
        if (localStorage.getItem("user") == null) {
            this.isLogged = false;
        }
        else {
            this.isLogged = true;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__articles_life_style_component_new_article_life1_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article/life1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_life_style_component_new_article_1_life2_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article.1/life2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_life_style_component_new_article_2_life3_component__ = __webpack_require__("./src/app/articles/life-style-component/new-article.2/life3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_food_component_new_article_2_food3_component__ = __webpack_require__("./src/app/articles/food-component/new-article.2/food3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_food_component_new_article_1_food2_component__ = __webpack_require__("./src/app/articles/food-component/new-article.1/food2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_food_component_new_article_food1_component__ = __webpack_require__("./src/app/articles/food-component/new-article/food1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_program_component_edit_program_component__ = __webpack_require__("./src/app/edit-program-component/edit-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_workout_service__ = __webpack_require__("./src/app/services/workout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articles_workout_component_workout_component__ = __webpack_require__("./src/app/articles/workout-component/workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__articles_food_component_food_component__ = __webpack_require__("./src/app/articles/food-component/food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__articles_life_style_component_lifestyle_component__ = __webpack_require__("./src/app/articles/life-style-component/lifestyle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_component_login_component__ = __webpack_require__("./src/app/login-component/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__clients_component_clients_component__ = __webpack_require__("./src/app/clients-component/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__personal_information_component_personal_information_component__ = __webpack_require__("./src/app/personal-information-component/personal-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__work_component_work_component__ = __webpack_require__("./src/app/work-component/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__technologies_component_technologies_component__ = __webpack_require__("./src/app/technologies-component/technologies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__trainers_component_trainers_component__ = __webpack_require__("./src/app/trainers-component/trainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__settings_component_settings_component__ = __webpack_require__("./src/app/settings-component/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modals_edit_program_modal__ = __webpack_require__("./src/app/modals/edit-program-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modals_modal_service__ = __webpack_require__("./src/app/modals/modal-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__registration_component_registration_component__ = __webpack_require__("./src/app/registration-component/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sleep_component_sleep_component__ = __webpack_require__("./src/app/sleep-component/sleep.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__personal_information_component_personal_information_component__["a" /* PersonalInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__work_component_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_21__technologies_component_technologies_component__["a" /* TechnologiesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__sleep_component_sleep_component__["a" /* SleepComponent */],
                __WEBPACK_IMPORTED_MODULE_22__trainers_component_trainers_component__["a" /* TrainersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__settings_component_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__clients_component_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_component_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__registration_component_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__articles_life_style_component_lifestyle_component__["a" /* LifeStyleComponent */],
                __WEBPACK_IMPORTED_MODULE_0__articles_life_style_component_new_article_life1_component__["a" /* Life1Component */],
                __WEBPACK_IMPORTED_MODULE_1__articles_life_style_component_new_article_1_life2_component__["a" /* Life2Component */],
                __WEBPACK_IMPORTED_MODULE_2__articles_life_style_component_new_article_2_life3_component__["a" /* Life3Component */],
                __WEBPACK_IMPORTED_MODULE_9__articles_workout_component_workout_component__["a" /* WorkoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__articles_food_component_food_component__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_5__articles_food_component_new_article_food1_component__["a" /* Food1Component */],
                __WEBPACK_IMPORTED_MODULE_4__articles_food_component_new_article_1_food2_component__["a" /* Food2Component */],
                __WEBPACK_IMPORTED_MODULE_3__articles_food_component_new_article_2_food3_component__["a" /* Food3Component */],
                __WEBPACK_IMPORTED_MODULE_6__edit_program_component_edit_program_component__["a" /* EditProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_24__modals_edit_program_modal__["a" /* EditProgramModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__modals_edit_program_modal__["a" /* EditProgramModal */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_7__services_workout_service__["a" /* WorkoutService */], __WEBPACK_IMPORTED_MODULE_25__modals_modal_service__["a" /* ModalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/food-component/food.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/food-component/food.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n        a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n.from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.col-padding{\r\n    padding-left:50px;\r\n}\r\n.content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n\r\n</style>\r\n<div class=\"content from-top content\">\r\n\r\n        <h1>Food and Vitamins.</h1>\r\n        <h2>Our eating habits directly determine our health.</h2>\r\n        <br>\r\n        <br>\r\n        <ul class=\"list-group\">\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <a class=\"btn btn-link\" routerLink=\"/food1\" >Perfect food?</a>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <a class=\"btn btn-link\"  routerLink=\"/food2\">Vitamic C. Can we overdose?</a>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                        <a class=\"btn btn-link\"  routerLink=\"/food3\">Should we take supplements?</a>\r\n                </li>\r\n        </ul>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                       \r\n                                <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/food-component/food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodComponent = /** @class */ (function () {
    function FoodComponent(_service) {
        this._service = _service;
    }
    FoodComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    FoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'food',
            template: __webpack_require__("./src/app/articles/food-component/food.component.html"),
            styles: [__webpack_require__("./src/app/articles/food-component/food.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/articles/food-component/new-article.1/food2.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/food-component/new-article.1/food2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>Витамин С - знаем ли достатъчно за него</h1>\r\n        <h5>Какви са ползите от приема му?</h5>\r\n        <br>\r\n        <br>\r\n        <div>\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        Витамин С. Всички ние неведнъж сме чували за него. Но дали в действителност го познаваме? Дали сме наясно с ползата, която носи за всички нас?\r\n<br>\r\n                        Витамин С -  знаем ли достатъчно за него\r\n                        <br>\r\n                        Какво представлява витамин С?<br>\r\n                        Витамин С или аскорбинова киселина изпълнява множество важни функции в човешкия организъм.\r\n                        <br>\r\n                        Той увеличава значително усвояването на желязо (Fe), участва в образуването на костите, зъбите и тъканите.\r\n                        <br>\r\n                        Значителна роля има при заздравяването на рани, поддържа еластичността на кожата, необходим е за производството на стресовите хормони, подобрява устойчивостта към инфекции, помага при високо кръвно налягане, атеросклероза и рак.\r\n                        <br>\r\n                        Много важно е да се знае, че този витамин не може да се образува в човешкото тяло, поради което е нужно да бъде внасян чрез храната или на таблетки. \r\n                        <br>\r\n                        Храните, които са най-богати на витамин С, са шипките - 1250 мг на 100 гр, докато цитрусовите плодове съдържат едва 50 мг на 100 гр плод.\r\n                        <br>\r\n                        Други добри източници на този жизненоважен витамин са: пиперки, ягоди, картофи, карфиол, както и много други пресни плодове и зеленчуци.\r\n                        <br>\r\n                        Много важно е да се знае, че при набавяне на витамин С от плодове и зеленчуци е препоръчително те да се консумират в суров вид.\r\n                        <br>\r\n                        Голяма част от витамина се разрушава при термична обработка, при замразяване и дори при по-дълго съхранение.\r\n                        <br>\r\n                        Действие на витамин С\r\n                        На всички нас е известно основното влияние на витамина върху съпротивителните сили на организма.\r\n                        <br>\r\n                        На първо място той подобрява дейността на белите кръвни телца, които от своя страна имат функцията да откриват, разрушават и изяждат вирусите, бактериите и раковите клетки.\r\n                        <br>\r\n                        Белите кръвни телца на хора, които приемат витамин С в порядъка на 2 до 3 гр дневно се отличават със значително по-голяма активност.\r\n                        <br>\r\n                        Витамин С е изключително важен оксидант. От своя страна той усилва действието на други антиоксиданти като всеизвестните ни витамини А и Е.\r\n                        <br>\r\n                        Може да се твърди, че тези три витамина са жизненоважни един за друг (имат синергична връзка), понеже всеки от тях има свойството да усилва и подпомага значително действието на другите два.\r\n                        <br>\r\n                        Много важна роля има по отношение на мозъка. Той го поддържа, като го предпазва от кислородна недостатъчност.\r\n                        <br>\r\n                        След изследвания най-високи концентрации на витамин С в човешкото тяло са били откривани в нервната тъкан, което показва, че тази част на тялото има най-голяма нужда от него.\r\n                        <br>\r\n                        Преди години са били проведени опити, които са разкрили, че витамин С, А и селен са в състояние да предотвратят развитието на ракови клетки.\r\n                        <br>\r\n                        В частност сам по себе си витамин С пречи значително на преобразуването на някои вещества в ракообразуващи.\r\n                        <br>\r\n                        Като такива могат да се посочат нитритите, които се намират най-вече в плодовете и зеленчуците, вследствие на торенето им с азотни торове, които ние по лошо стечение на обстоятелствата няма как да избегнем и поглъщаме повече или по-малко.\r\n                        <br>\r\n                        При попадането си в човешкия организъм те се превръщат в нитрозамини, които са главна причина за развитието на рак на стомаха и червата.\r\n                        <br>\r\n                        Доказано е, че големи количества на витамин С блокират процеса на превръщане на нитратите и нитритите в нитрозамини.\r\n                        <br>\r\n                        Ползата от витамин С при спортуващи\r\n                        За занимаващите се с фитнес витамин С е от жизненоважно значение за поддържане на съединителната тъкан на костите в добро състояние.\r\n                        <br>\r\n                        Без витамин С е невъзможен синтезът на колаген, който е основен протеин за изграждането на съединителната тъкан. Приема на нужните дози от витамин С спомага за по-бързо заздравяване на рани по кожата и за поддържането й в добро състояние.\r\n                        <br>\r\n                        Освен това витамин С участва в усвояването на калция, от което става ясно, че спомага за формирането на костите, растеж и навременно и безпроблемно зарастване при счупване.\r\n                        <br>\r\n                        Всички ние сме чували и знаем за изключителната важност на сърдечно-съдовата система. Но е добре да знаем за благотворното влияние на витамина върху сърцето и кръвоносните съдове.\r\n                        <br>\r\n                        При проведени изследвания на хора, прекарали инфаркт е забелязано, че белите кръвни телца пренасят витамин С от други части на тялото към сърцето, като по този начин се подпомага възстановяването на увредените клетки на сърдечния мускул.\r\n                        <br>\r\n                        Съществува обратнопропорционална връзка между кръвното налягане и витамин С - т.е., колкото по-малко от жизненоважното вещество, толкова по-високо налягане.\r\n                        <br>\r\n                        Жизненоважен е за хора, които страдат от алергии. Също така при комбинация с витамин В1 и аминокиселината цистеин може да предотврати увреждащи действия от страна на формалин, формалдехид и ацеталдехид.\r\n                        <br>\r\n                        Витамин С противодейства на други токсични и ракообразуващи процеси в тялото.\r\n                        <br>\r\n                        Такива се предизвикват от цигарен дим, никотин, автомобилни газове, тежки метали... все неща, на които сме подложени в нашето ежедневие.\r\n                        <br>\r\n                        Научни изследвания показват, че кръвта на пушачи и алкохолици съдържа средно 20 до 40 % по-малко витамин С.\r\n                        <br>\r\n                        Причината за това е, че резервите от витамина постоянно се изтощават от посочените агресивни влияния.\r\n                        <br>\r\n                        Ако не се набавя ежедневно и в нужните количества, това може да доведе до множество трайни вреди.\r\n                        <br>\r\n                       <h2> Препоръчителни дози</h2><br>\r\n                        Препоръчваната доза за възрастен човек е 60 мг. Въпреки всичко посочената доза е предмет на редица спорове.\r\n                        <br>\r\n                        Има много фактори, които увеличават нуждите от витамин С. Като пример може да се посочи голямата горещина или голям студ.\r\n                        <br>\r\n                        Пушенето, приемът на противозачатъчни и други лекарствени средства, подлагането на големи физически натоварвания при работа или спорт.\r\n                        <br>\r\n                        Много медицински лица предписват големи дози при лечение на ракови или сърдечно-съдови заолявания.\r\n                        <br>\r\n                        Професионалните спортисти в своите съвети и диети препоръчват да се приемат около 2 до 3 грама дневно.\r\n                        <br>\r\n                        До момента не е известен случай на предозиране от витамин С, поради което споменатите дози от по 2 до 3 гр на ден не могат да се смятат за предозиране.\r\n                        <br>\r\n                        Но при приемане на много по-големи дози, възможно е да възникнат стомашни проблеми, особено за страдащи от гастрит и язва.\r\n                        <br>\r\n                        За такива случи се препоръчв да се приема витамина след храна или чрез разтворими варианти на същия.\r\n                        <br>\r\n                        За трениращи се препоръчва доза от около 3 гр, но е важно да се знае, че до тази доза е нужно да се стига последователно и внимателно.\r\n                        <br>\r\n                        Рязкото подаване на големи количества витамин С може да доведе до стомашни разстройства. Същото важи и при спирането му.\r\n                        <br>\r\n                        При приемането на високи дози е нужно последователно и внимателно намаляване на дозите, за да не се стига до сътресения и рязко подлагане на организма на глад за витамин С.\r\n                        <br>\r\n                        За начинаещите е достатъчно да се придържат към дозата от 1 гр.\r\n                        <br>\r\n                        Приемът на витамин С може и дори е препоръчително да се комбинира с биофлавоноиди, тъй като има основание да се смята, че подобряват усвояването му от организма.\r\n                        <br>\r\n                        В заключение\r\n                        Това, в общи линии, са основните положения около витамин С. За край на тази полезна информация считам за необходимо да обърна внимание на един малко известен факт.\r\n                        <br>\r\n                        Витамин С има свойството лесно да се окислява. Това окисляване го превръща в дехидроаскорбат.\r\n                        <br>\r\n                        Това е вещество с диаметрално противоположни свойства. Това означава, че за разлика от витамин С не пази клетката, а я уврежда.\r\n                        <br>\r\n                        Поради което обръщам внимание, че ако случайно сте забравили разтворен в чаша вода витамин С от сутринта е по-добре да не го пиете, а да го изхвърлите.\r\n                        <br>\r\n                        За около 2 до 3 часа половината от количеството от разтворения витамин във вода се окислява до дехидроаскорбат.\r\n                        <br>\r\n                        В статията са използвани източници - виж списъка.\r\n                        <br>\r\n                        Библия на витамините - автор - Ърл Миндъл.<br> Издание на Издателство \"Хемус\" - 1997 г. \r\n                        <br><br>  <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/food-component/new-article.1/food2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Food2Component = /** @class */ (function () {
    function Food2Component(_service) {
        this._service = _service;
    }
    Food2Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Food2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'food2',
            template: __webpack_require__("./src/app/articles/food-component/new-article.1/food2.component.html"),
            styles: [__webpack_require__("./src/app/articles/food-component/new-article.1/food2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Food2Component);
    return Food2Component;
}());



/***/ }),

/***/ "./src/app/articles/food-component/new-article.2/food3.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/food-component/new-article.2/food3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>Хранителните добавки</h1>\r\n        <br>\r\n        <br>\r\n        <div>\r\n                Витамин С. Всички ние неведнъж сме чували за него. Но дали в действителност го познаваме? Дали сме наясно с ползата, която носи за всички нас?\r\n<br>\r\n                        Витамин С -  знаем ли достатъчно за него\r\n                        <br>\r\n                        Какво представлява витамин С?<br>\r\n                        Витамин С или аскорбинова киселина изпълнява множество важни функции в човешкия организъм.\r\n                        <br>\r\n                        Той увеличава значително усвояването на желязо (Fe), участва в образуването на костите, зъбите и тъканите.\r\n                        <br>\r\n                        Значителна роля има при заздравяването на рани, поддържа еластичността на кожата, необходим е за производството на стресовите хормони, подобрява устойчивостта към инфекции, помага при високо кръвно налягане, атеросклероза и рак.\r\n                        <br>\r\n                        Много важно е да се знае, че този витамин не може да се образува в човешкото тяло, поради което е нужно да бъде внасян чрез храната или на таблетки. \r\n                        <br>\r\n                        Храните, които са най-богати на витамин С, са шипките - 1250 мг на 100 гр, докато цитрусовите плодове съдържат едва 50 мг на 100 гр плод.\r\n                        <br>\r\n                        Други добри източници на този жизненоважен витамин са: пиперки, ягоди, картофи, карфиол, както и много други пресни плодове и зеленчуци.\r\n                        <br>\r\n                        Много важно е да се знае, че при набавяне на витамин С от плодове и зеленчуци е препоръчително те да се консумират в суров вид.\r\n                        <br>\r\n                        Голяма част от витамина се разрушава при термична обработка, при замразяване и дори при по-дълго съхранение.\r\n                        <br>\r\n                        Действие на витамин С\r\n                        На всички нас е известно основното влияние на витамина върху съпротивителните сили на организма.\r\n                        <br>\r\n                        На първо място той подобрява дейността на белите кръвни телца, които от своя страна имат функцията да откриват, разрушават и изяждат вирусите, бактериите и раковите клетки.\r\n                        <br>\r\n                        Белите кръвни телца на хора, които приемат витамин С в порядъка на 2 до 3 гр дневно се отличават със значително по-голяма активност.\r\n                        <br>\r\n                        Витамин С е изключително важен оксидант. От своя страна той усилва действието на други антиоксиданти като всеизвестните ни витамини А и Е.\r\n                        <br>\r\n                        Може да се твърди, че тези три витамина са жизненоважни един за друг (имат синергична връзка), понеже всеки от тях има свойството да усилва и подпомага значително действието на другите два.\r\n                        <br>\r\n                        Много важна роля има по отношение на мозъка. Той го поддържа, като го предпазва от кислородна недостатъчност.\r\n                        <br>\r\n                        След изследвания най-високи концентрации на витамин С в човешкото тяло са били откривани в нервната тъкан, което показва, че тази част на тялото има най-голяма нужда от него.\r\n                        <br>\r\n                        Преди години са били проведени опити, които са разкрили, че витамин С, А и селен са в състояние да предотвратят развитието на ракови клетки.\r\n                        <br>\r\n                        В частност сам по себе си витамин С пречи значително на преобразуването на някои вещества в ракообразуващи.\r\n                        <br>\r\n                        Като такива могат да се посочат нитритите, които се намират най-вече в плодовете и зеленчуците, вследствие на торенето им с азотни торове, които ние по лошо стечение на обстоятелствата няма как да избегнем и поглъщаме повече или по-малко.\r\n                        <br>\r\n                        При попадането си в човешкия организъм те се превръщат в нитрозамини, които са главна причина за развитието на рак на стомаха и червата.\r\n                        <br>\r\n                        Доказано е, че големи количества на витамин С блокират процеса на превръщане на нитратите и нитритите в нитрозамини.\r\n                        <br>\r\n                        Ползата от витамин С при спортуващи\r\n                        За занимаващите се с фитнес витамин С е от жизненоважно значение за поддържане на съединителната тъкан на костите в добро състояние.\r\n                        <br>\r\n                        Без витамин С е невъзможен синтезът на колаген, който е основен протеин за изграждането на съединителната тъкан. Приема на нужните дози от витамин С спомага за по-бързо заздравяване на рани по кожата и за поддържането й в добро състояние.\r\n                        <br>\r\n                        Освен това витамин С участва в усвояването на калция, от което става ясно, че спомага за формирането на костите, растеж и навременно и безпроблемно зарастване при счупване.\r\n                        <br>\r\n                        Всички ние сме чували и знаем за изключителната важност на сърдечно-съдовата система. Но е добре да знаем за благотворното влияние на витамина върху сърцето и кръвоносните съдове.\r\n                        <br>\r\n                        При проведени изследвания на хора, прекарали инфаркт е забелязано, че белите кръвни телца пренасят витамин С от други части на тялото към сърцето, като по този начин се подпомага възстановяването на увредените клетки на сърдечния мускул.\r\n                        <br>\r\n                        Съществува обратнопропорционална връзка между кръвното налягане и витамин С - т.е., колкото по-малко от жизненоважното вещество, толкова по-високо налягане.\r\n                        <br>\r\n                        Жизненоважен е за хора, които страдат от алергии. Също така при комбинация с витамин В1 и аминокиселината цистеин може да предотврати увреждащи действия от страна на формалин, формалдехид и ацеталдехид.\r\n                        <br>\r\n                        Витамин С противодейства на други токсични и ракообразуващи процеси в тялото.\r\n                        <br>\r\n                        Такива се предизвикват от цигарен дим, никотин, автомобилни газове, тежки метали... все неща, на които сме подложени в нашето ежедневие.\r\n                        <br>\r\n                        Научни изследвания показват, че кръвта на пушачи и алкохолици съдържа средно 20 до 40 % по-малко витамин С.\r\n                        <br>\r\n                        Причината за това е, че резервите от витамина постоянно се изтощават от посочените агресивни влияния.\r\n                        <br>\r\n                        Ако не се набавя ежедневно и в нужните количества, това може да доведе до множество трайни вреди.\r\n                        <br>\r\n                       <h2> Препоръчителни дози</h2><br>\r\n                        Препоръчваната доза за възрастен човек е 60 мг. Въпреки всичко посочената доза е предмет на редица спорове.\r\n                        <br>\r\n                        Има много фактори, които увеличават нуждите от витамин С. Като пример може да се посочи голямата горещина или голям студ.\r\n                        <br>\r\n                        Пушенето, приемът на противозачатъчни и други лекарствени средства, подлагането на големи физически натоварвания при работа или спорт.\r\n                        <br>\r\n                        Много медицински лица предписват големи дози при лечение на ракови или сърдечно-съдови заолявания.\r\n                        <br>\r\n                        Професионалните спортисти в своите съвети и диети препоръчват да се приемат около 2 до 3 грама дневно.\r\n                        <br>\r\n                        До момента не е известен случай на предозиране от витамин С, поради което споменатите дози от по 2 до 3 гр на ден не могат да се смятат за предозиране.\r\n                        <br>\r\n                        Но при приемане на много по-големи дози, възможно е да възникнат стомашни проблеми, особено за страдащи от гастрит и язва.\r\n                        <br>\r\n                        За такива случи се препоръчв да се приема витамина след храна или чрез разтворими варианти на същия.\r\n                        <br>\r\n                        За трениращи се препоръчва доза от около 3 гр, но е важно да се знае, че до тази доза е нужно да се стига последователно и внимателно.\r\n                        <br>\r\n                        Рязкото подаване на големи количества витамин С може да доведе до стомашни разстройства. Същото важи и при спирането му.\r\n                        <br>\r\n                        При приемането на високи дози е нужно последователно и внимателно намаляване на дозите, за да не се стига до сътресения и рязко подлагане на организма на глад за витамин С.\r\n                        <br>\r\n                        За начинаещите е достатъчно да се придържат към дозата от 1 гр.\r\n                        <br>\r\n                        Приемът на витамин С може и дори е препоръчително да се комбинира с биофлавоноиди, тъй като има основание да се смята, че подобряват усвояването му от организма.\r\n                        <br>\r\n                        В заключение\r\n                        Това, в общи линии, са основните положения около витамин С. За край на тази полезна информация считам за необходимо да обърна внимание на един малко известен факт.\r\n                        <br>\r\n                        Витамин С има свойството лесно да се окислява. Това окисляване го превръща в дехидроаскорбат.\r\n                        <br>\r\n                        Това е вещество с диаметрално противоположни свойства. Това означава, че за разлика от витамин С не пази клетката, а я уврежда.\r\n                        <br>\r\n                        Поради което обръщам внимание, че ако случайно сте забравили разтворен в чаша вода витамин С от сутринта е по-добре да не го пиете, а да го изхвърлите.\r\n                        <br>\r\n                        За около 2 до 3 часа половината от количеството от разтворения витамин във вода се окислява до дехидроаскорбат.\r\n                        <br>\r\n                        В статията са използвани източници - виж списъка.\r\n                        <br>\r\n                        Библия на витамините - автор - Ърл Миндъл.<br> Издание на Издателство \"Хемус\" - 1997 г. \r\n                        <br><br>\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                       \r\n                                <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/food-component/new-article.2/food3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Food3Component = /** @class */ (function () {
    function Food3Component(_service) {
        this._service = _service;
    }
    Food3Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Food3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'food3',
            template: __webpack_require__("./src/app/articles/food-component/new-article.2/food3.component.html"),
            styles: [__webpack_require__("./src/app/articles/food-component/new-article.2/food3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Food3Component);
    return Food3Component;
}());



/***/ }),

/***/ "./src/app/articles/food-component/new-article/food1.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/food-component/new-article/food1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>Здравословно хранене – Кои храни са вредни и кои са полезни?</h1>\r\n        <h5>И на вас ли ви писна някой да ви казва какво трябва и не трябва да ядете?\r\n\r\n                Доста от вас сигурно вече обмислят фотосинтеза като оптимална диета… Въобще, има ли нещо което да е полезно? Кренвиршите не са от месо, зеленчуците са пълни с пестициди, месото с хормони, а хората все по-болни. Как тогава да се храним правилно?\r\n                \r\n                В тази статия ще изброим (почти) всички ДОКАЗАНО вредни храни и ще развенчаем някои от най-популярните митове в интернет.</h5>\r\n        <br>\r\n        <br>\r\n        <div>\r\n                “ВСИЧКО Е ХИМИЯ” – ИСТИНА ИЛИ ЛЪЖА?\r\n\r\n                <br><br><br>\r\nНека започнем с един доста известен мит… който може да се окаже истина.\r\n<br>\r\nЧест аргумент да не консумираме дадена храна е ,че е “блъскана с химия”- оцветители, изкуствени подсладители, консерванти и какво ли още не. Всичко което не разпознаваме на етикета със съставките или звучи прекалено сложно също спада в графата “химия”.\r\n<br><br>\r\nИстината е ,че всяка храна е изградена от различни на брой химични елементи. Доста от тях имат сложни имена, дори тези които са напълно “натурални”. Като пример погледнете снимката долу. Това са съставките на банана (забележете всичките “Е-та”)\r\n<br>\r\n<br>\r\n<br>\r\nКАК ДА ПОДХОДИМ ИНТЕЛИГЕНТНО КЪМ ПРОБЛЕМА С ВРЕДНИТЕ ХРАНИ?\r\nАргумента сам по себе си е труден да се обори, защото всичко наистина е химия. Част от проблема идва, че точно тези дълги думички и странно изглеждащи съкращения, са ни толкова непознати, че просто ги приемаме за опасни.\r\n<br>\r\nПочти всеки бозайник е недоверчив към това което не разбира. Това си е стратегия за оцеляване. Всички знаем, че “любопитството уби котката” – израза не е случаен. Това е и целта на статията, да внесе яснота върху това коя храна или диета е наистина опасна.\r\n<br>\r\nЗа наше голямо щастие хранителната индустрия е добре регулирана и съществуват редица правила и изисквания преди даден продукт да се озове на масата ни. Процеса далече не е перфектен, както ще разберем в следващите параграфи.\r\n<br>\r\nКАКВА Е РОЛЯТА НА ХРАНИТЕЛНИТЕ КОРПОРАЦИИ В КАЧЕСТВОТО НА ДИЕТАТА НИ?\r\n<br>\r\nНо ако оставим конспирацията на страна… доста корпорации са силно (финансово) заинтересовани да продават храна която не ни убива. Не можеш да продаваш на мъртъвци.\r\n<br>\r\nПовечето изкуствено създадени “химии”, които се добавят в храната са добре изследвани и тествани. Целта на тази статия е да изброи всички доказано вредни храни, затова няма да се спираме на неща като консерванти, оцеветители и подсладители. Дори при големи дози риска  за човешкото здраве е незначим [1].\r\n<br>\r\nНо все пак има субстанции, които са доказано вредни или имат поне някакъв негативен ефект върху здравето ни.\r\n<br>\r\nВажно е да споменем, че общия калориен прием има също толкова голям ефект колкото и качеството на храната която ядем. Ако основната ви цел е да свалите тегло, прегледайте нашата статия “Най-добрата диета за отслабване”.\r\n<br>\r\nИ така, ето кои са най-популярните митове за здравословното хранене и вредните храни , и до колко те са оправдани:\r\n<br>\r\n#1 ПЛОДОВЕ И ЗЕЛЕНЧУЦИ: НЯМА КАК ДА СА ВРЕДНИ… ИЛИ ПЪК ИМА?\r\n<br><br><br>\r\n\r\nМоже би единствената група  храни, която почти всеки може да се съгласи че спада в графа “здравословна диета”. Съществуват ли рискове  за хората консумиращи прекалено много зеленчуци?\r\n<br>\r\nОколо ⅓ от стомашните проблеми идват от диетата, по специфично консумацията на сурови растителни продукти. Доста хора например, имат проблеми с фруктозата или други захари в плодовете [2] [3].\r\n<br>\r\nТова не е толкова странно, като се има предвид:\r\n<br>\r\nПовечето растения не “печелят” от факта че ги ядем и нямат еволюционен интерес да бъдат по-ядливи.\r\nПриродата не се грижи за нас, по-скоро ние сме еволюирали да се справяме с нея… а адаптацията ни не е перфектна към всичко, което категоризираме като храна.\r\nСлучайни мутации и генетичното разнообразе като цяло правят някои хора по-пригодени, а други-зле адаптирани към определ тип храна.\r\n❌ РИСКОВЕ:<br><br>\r\nВсички растителни продукти съдържат вещества, които не могат да се усвоят пълноценно, могат да имат известен негативен ефект, или дори да навредят на определени хора. Така наречените “бавни въглехидрати” не винаги са толкова безвредни.\r\n<br>\r\n✔ ПОЛЗИ:<br><br>\r\nИстината е че всяка храна съдържа доза отрова. Ябълките примерно съдържат цианид, а броколите арсен. Два изключително отровни химични елемента.\r\n<br>\r\nПовечето плодове и зеленчуци съдържат поне един тип ‘отрова’ ,но количествата са толкова малки, че ефекта върху човешното здраве е реално… никакъв. Дозата прави отровата. Освен ако не ядете по 10кг плодове на ден, риск за вашето здраве няма!\r\n<br>\r\nПовечето плодове и зеленчуци са пълни с множество витамини, минерали, анти-оксиданти и хранителни влакнини (фибри). Общия им ефект върху човешкото здраве е безспорно положителен, дори при консумация на големи количества [4].\r\n<br>\r\nОсвен това са засищащи и са идеална добавка към един хранителен режим за изчистване на мазнини.\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА:<br><br>\r\nИндивидуалния компонент предполага, че има голяма разлика кой колко от какво може да понесе. Някои хора, могат да имат проблем с консумацията на определени растителни продукти.\r\n<br>\r\nКолкото и да е полезна една ябълка и 9 от 10 човека да нямат проблем да консумират по 5 на ден…. ако ти си този 10ти човек, който се превива от болка след 1 ябълка – добра идея е да не ги ядеш. \r\n<br>\r\nС времето всеки сам  може да прецени кое до каква степен и в какви количества му понася. Индивидуалният компонент идва на първо място, преди всякакви изследвания и “общи” препоръки.\r\n<br>\r\n#2 КАКВО ИМА В КОЛБАСИТЕ И КАК НИ УБИВА?\r\n<br><br><br>\r\n\r\nОбществена тайна е ,че салама по времето на соца беше най-хубав. Сега ядем пластмасови кренвирши, безвкусни колбаси, а “вкусотиите” от МакДоналдс не са въобще за предпочитане.\r\n<br>\r\nКакъв е проблема с преработеното месо?\r\n<br>\r\nЧесто в преработеното (но почти никога сурово) месо се добавят нитрати и нитрити. Те имат  за цел да удължат срока на годност и да го запазят по-прясно изглеждащо.\r\nПри консумация на така обработеното месо, риска от рак и сърдечносъдови болести нараства [5].\r\n<br>\r\nПри определена обработка (грил или пушено месо) химичните реакции, които протичат при тези процеси могат доведат до образуването на вредни субстанции.\r\nТова се случва когато мазнината от месoто изтича и се нагрява до високи температури. Oбразуват се субстанции (polycyclic aromatic hydrocarbons) сходни до тези при горенето на въглища или цигарен дим. Пушека, който е резултат от този процес, попада обратно върху месото [6].\r\n<br>\r\n❌ РИСКОВЕ:<br><br>\r\nЧестата консумация на преработени меса (грил, бургери, колбаси и тн) може да увеличи риска от рак и сърдечносъдови болести.  \r\n<br>\r\n✔ ПОЛЗИ:<br>\r\nАко сами си готвим месото не съществува почти никакъв риск за здравето ни. Месото е много добър източник не само на протеин, но и  на доста витамини и минерали.\r\n<br>\r\nДори и консумацията на преработени меса от време на време не е голям проблем. Малко са хората, които карат на кренвирши и принцеси (и не живеят в студентски град) с години.\r\n<br>\r\nСравнено с пушенето и честата консумация на алкохол, една хубава плескавица определено си заслужава 2те минути, с които ще ви скъси живота.\r\n<br>\r\n#3 НЕКА НЕ СЕ ЛЪЖЕМ: ИМА ЛИ ХОРМОНИ В ПИЛЕШКОТО?\r\n<br><br>\r\n\r\nНе е мит, не е лъжа! В пилето ви има хормони, в прасенцето също, в броколите също, в бананите пак, картофите направо бъкат от хормони. Дори не се бъзикам…\r\n<br>\r\nПърво, какво са хормоните? На кратко, това са химични съединения, произвеждани от различни жлези. Хормоните регулират основните жизнени процеси в един организъм.\r\n<br>\r\nРастенията и животните също произвеждат хормони. Което означава, че всеки пък когато се храним, поемаме (изненада!) хормони с храната. Като пример – картофите съдържат малки количества естроген.\r\n<br>\r\nЗАЩО ХОРМОНИТЕ В ХРАНАТА НЕ СА ОПАСНИ?\r\nХормони почти НЕ се използват при отглеждането на животни. Поне не в Европа (вижте частта за био храните за повече информация)\r\nПовечето животински и растителни хормони нямат действие върху човека. Примерно хормона на растежа при кравите (bGH) не е активен в човешкия организъм.\r\nПовечето хормони се разграждат още при готвене или от стомашните сокове\r\nКоличеството приети хормони от храната е в пъти по-малко от това, което тялото ни произвежда. Като пример, за да има видим ефект, един културист трябва да си инжектира (оралния прием е далеч по-неефективен) хормон на растежа доста над това, което тялото му има като капацитет да произведе.\r\nЕдна интересна статия, която говори за хормоните в млякото, но доста от нещата се отнасят и за месото:\r\n<br>\r\nThe Truth About Hormones in Milk\r\nНа кратко, дори и някой да инжектира пилетата на село с разни хормони, шанса това да се отрази на здравето ни е…. нищожен.\r\n<br>\r\nАко все още имате опасения, че хормоните в месото са отговорни за затлъстяването, препоръчваме ви да прочетете нашата статия: “Какво трябва да знаете за покачването и свалянето на личното тегло?”\r\n<br>\r\n#4 КАКВО Е ГМO И ТРЯБВА ЛИ ДА ГО ИЗБЯГВАМЕ?\r\n<br><br><br>\r\n\r\nБележка: ГМО темата е включена главно поради етически причини, не толкова здравословни.\r\n<br>\r\nКато начало, всичко е ГМО (генно-модифициран-организъм). Почти нищо от това, което ядем в днешно време не е във формата и вида… или въобще някога е съществувало (пр: ябълки или броколи) в природата. Дори кучето ви е ГМО (освен, ако не гледате див вълк)\r\n<br>\r\nБаба ви е яла ГМО, нейната баба е яла ГМО и когато България е била на 3 морета, пак са яли ГМО. Да не говорим, че дори картофите в мусаката идват от Америка и пра-пра баба ви няма шанс да е готвила това типично “нашенско” ястие.\r\n<br>\r\nПък първите картофи до колко са приличали на картофите, които са култивирали индианците и след това картофите, които са стигнали в Европа… това е друг въпрос.\r\n<br>\r\nРАЗЛИКАТА МЕЖДУ ГМО ДНЕС И СЕЛЕКТИВЕН ПОДБОР ПРЕЗ ГОДИНИТЕ\r\nДали чрез селективен подбор, кръстосване на организми и много години чакане или подбиране на гени в лаборатория – резултата е същия.\r\n<br>\r\nДори може да поспорим, че учени в лаборатория, които гонят слава и пари  и ги застрашават глоби и затвор, имат доста по-голяма успеваемост, сравнени с хората живели в пещери и техните първи ‘научи опити” преди 10,000 години.\r\n<br>\r\nГоляма част от анти-ГМО движението се основава на идеята, че природните продукти са полезни (или поне нямат вреда) за човека. Тези създадени в лаборатории са вредни. \r\n<br>\r\nНека не забравяме, че чумата и грипа са 100% натурални и освен това са избили по-голям процент от населението, отколкото всички войни през човешката история. А инсулина, от който имат нужда толкова много диабетици се синтезира от ГМО-бактерии.\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА:\r\n<br><br><br>\r\n\r\nГраницата между ГМО и “природни” продукти е доста размита. Сами по себе си продукти с ГМО надпис не са с нищо по-различно от останалите.\r\n<br>\r\nНо до колко е безопасно да се създават супер култури или дори животни и да се пускат в природата , без да се знае как ще се отразят на екологичния баланс и хранителната верига… това си е отделна тема.\r\n<br>\r\nОт друга страна, благодарение на ГМО културите много малко хора по света днес умират от глад. Повечето храни са на достъпни цени. Замърсяването също се минимализира, тъй като ГМО културите и животни са по-устойчиви и изискват по-малко грижи за да оцелеят.\r\n<br>\r\nИнтересно четиво, за тези които искат да научат повече по темата:\r\n<br>\r\nGenetically Modified Organisms by Brad Dieter\r\n#5 ОПРАВДАНАТА ЛИ Е ВИСОКАТА ЦЕНА НА БИО ПРОДУКТИТЕ?\r\n<br><br>\r\n\r\nПърво, какво е био (екологичен) продукт и има ли разлика с органични / натурални продукти?\r\n<br>\r\nСпоред “Българската Агенция по Безопасност на Храните” (БАБХ) био продуктите имат сертификати, удостоверяващи произхода и начина на обработка и отговарят на определени изисквания и стандарти. Пълният текст може да прочетете на страницата на агенцията.\r\n<br>\r\nЗа натурални продукти ясна дефициния и дори регулиране няма. С други думи “натурално” е просто маркетинг дума, без особена гаранция за каквато и да е разлика с конвенционален продукт.  \r\n<br>\r\nКАКВА Е РАЗЛИКАТА МЕЖДУ БИО И КОНВЕНЦИОНАЛНО ЗЕМЕДЕЛИЕ?\r\nСпоред БАБХ, основните разлики са , че при био земеделието се използват “естествени” торове, “природни” пестициди, капани за вредители, механично отстраняване на плевели, не се използват антибиотици или хормони, а животните се хранят с “био” фуражи.\r\n<br>\r\nПълен и подробен списък може да намерите на страницата на агенцията. Един съвет – не бих приел повечето изказвания в документа за 100% верни, особено при положение, че не са подкрепени с никакви проучвания. Това е официален орган все пак, а не вестник.\r\n<br>\r\nОписаното в сайта не е доста ясно, но ето основните изводи от текста:\r\n<br>\r\nбио продуктите са по-богати на витамини, минерали и анти-оксиданти\r\nпестициди и торове се използват и двата случая\r\nотглеждането на био култури изисква повече труд\r\nотглеждането на био култури и животни е доста рисково\r\nизвода от точки 3 и 4 е , че био продуктите са с доста по-висока цена\r\nхормони до колкото знам, не се използват в България, та не съм сигурен защо дори са споменати (виж #1 бележка)\r\nантибиотици не се използват при отглеждането на био животни, но до колко това има отражение върху човека преценете сами (виж #2 бележка)\r\n#1 Бележка: Иронично същия сайт има статия, която обеснява, че хормони в пилешкото никога не са били разрешени. Темата за хормоните е разгледана детайлно в друга част от статията.\r\n<br>\r\n#2 Бележка: Животните, както човека, боледуват често. Ако не се използват антибиотици, смъртността нараства значително. Когато се налага да се използват лекарства обикновено има период на изчакване.\r\n<br>\r\nТака организма на животното има време да се изчисти от остатъчния антибиотик преди да се заколи и месото пусне в хранителната верига. С други думи шанса болни или наскоро лекувани животни да се озоват в чинията ви е малка.\r\n<br>\r\nЗа тези от вас, които нямат вяра, че тази практика се прилага в България, имайте предвид ,че голяма част от месото в магазините не е произведено у нас. Телешкото бон филе най-вероятно идва от Германия или Холандия. Ако нямаме вяра на контрола в тези страни, едва ли има на кои друг да се доверим.\r\n<br>\r\n❌ РИСКОВЕ:(КОНВЕНЦИОНАЛНИ ПРОДУКТИ)\r\n<br><br><br>\r\n\r\nСравненени с био продуктите, конвенционалните продукти имат по-ниски съдържания на витамини, минерали и антиоксиданти.\r\n<br>\r\nТова се дължи на факта ,че био продуктите са подложени  на по-малко обработка и допълнително третиране със синтетични субстанции.\r\n<br>\r\n✔ ПОЛЗИ (КОНВЕНЦИОНАЛНИ ПРОДУКТИ)\r\n<br><br><br>За жалост, разликата между съдържанието на микроелементи и ефекта върху здравето на човек при диета от био и конвеционални продукти е…. доста малка. Можем спокойно да си хапваме домати от Фантастико, без да ни е страх, че губим много.\r\n<br>\r\nПовече инфо за (липсата на) забележим ефект върху здравето:\r\n<br>\r\nNutritional quality of organic foods: a systematic review\r\nAre Organic Foods Safer or Healthier Than Conventional Alternatives?: A Systematic Review\r\nТова се дължи на 2 основни причини:\r\n<br>\r\nИзползваните пестициди и антибиотици почти не достигат до нас или остатъчното количество е толкова малко, че няма ефект върху здравето.\r\nРазликата в количеството макронутриенти и антиоксиданти е минимално. Примерно, ако аз вземам 1000лв заплата, а Пешо 1100лв – Пешо е по-богат, но и двамата не можем да си позволим почивка на Малдивите. Същото толкова незначителна е разликата между обикновената и био ябълката.\r\nКОЕ ОПРЕДЕЛЯ КАЧЕСТВОТО НА ОРГАНИЧНИТЕ ПРОДУКТИ?\r\nВсъщност, разликите в почвата и това с какво се хранят животните има много по-голям ефект върху качеството на производството. Всички тези витамини и минерали идват от там. Ако почвата не е с добро качество, както и да ги гледаме тези растения няма как крайният продукт да е богат на хранителни елементи.\r\n<br>\r\nВкуса също се изтъква като плюс на био продуктите. Това е доста субективно. Но при тестове където хората НЕ знаят кое е био и кое не… био продуктите не се справят по-добре [7]. Разлика във вкуса няма.\r\n<br>\r\nВкуса до голяма степен зависи от това колко е свеж продукта. Затова доматите на баба са толкова яки… защото тъкмо ги е набрала от градината. Изчакайте ги 2-3 дена и едва ли ще са по-вкусни от тези в магазина (поне ако сравняваме същия сорт)\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА:\r\n<br><br><br>\r\n\r\nДори и с малко, био продуктите са по-хранителни. Така че ако бюджета ни го позволява, добре е да ги вкараме в диетата си. Но за жалост, разликата в цената не отговаря на разликата в качеството.\r\n<br>\r\nОсвен това производство на био продукти често генерира повече вредни емисии и замърсяване.\r\n<br>\r\nАко голям процент от продукцията и животните, които гледаш измират ,защото не използваш пестициди и антибиотици , за да ги предпазиш , трябва да заемеш повече земя и да гледаш повече продукция. Това е обвързано с повече замърсяване.\r\n<br>\r\nОт естична гледна точка, “био” не означава “хуманно” (макар и така да маркетират такъв тип продукти). Но все пак има (нищожен) шанс био кокошката да е живяла по-добър живот от квачката в “конвенционалната” ферма.\r\n<br>\r\n#6 ТРАНС МАЗНИНИ: ЗАЩО СА ВРЕДНИ И КЪДЕ СЕ СРЕЩАТ?\r\n\r\n<br>\r\nНека първо поясним, че в природата съществуват транс мазнини, които нямат негативен ефект върху човешкото здраве. Но консумацията на тези, създадени от хората, могат да увеличат риска от сърдечносъдови и други болести [8].\r\n<br>\r\nПродукти като маргарин, пържени храни (от ресторанти за бързо хранене), торти и сладки с глазура често съдържат доста изкуствено създадени транс мазнини.\r\n<br>\r\nПричината е че този тип мазнини увеличават трайността на продукта и подобряват вкусовите му качества, което се отразява положително на продажбите.\r\n<br>\r\nОбикновено транс мазнините са отбелязани в списъка със съставките под името “частично хидрогенирани” или “напълно хидрогенирани мазнини”. Използването им е доста разпространено в източна Европа [9].\r\n<br>\r\n❌ РИСКОВЕ (ТРАНС МАЗНИНИ)<br><br><br>\r\nЗа нещастие, този тип мазнини са едни от малкото субстанции в този списък, които е добре да избягваме, когато можем. Консумацията им в големи количества, може значително да увеличи риска ни от сърдечносъдови болести.\r\n<br>\r\nПочитателите на гъвкавата диета (IIFYM) е добре да обръщат повече внимание на качеството на храната, а не само общото калорийно съдържание.\r\n<br>\r\n✔ ПОЛЗИ (ТРАНС МАЗНИНИ)<br><br><br>\r\nПолзи е спорно дали въобще има, освен може би ефекта върху вкуса и трайността на продуктите. В малки количества и от време на време, консумацията на транс мазнини едва ли ще доведе до забележими последици върху здравословното ни състояние.\r\n<br>\r\nКакто стана вече дума, ефекта от тютонопушенето или прекалената консумация на алкохол е доста по-голям и осезаем.\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА НА МАЗНИНИТЕ В ДИЕТАТА НИ\r\n<br><br><br>\r\n\r\nДругите типове мазнини (наситени, моно и полиненаситени) са безопасни за човешка консумация, поне в рамките на една балансирана диета.\r\n<br>\r\nАко се чудите как да разпознавате коя мазнина каква е:\r\n<br>\r\nНаситени: обикновено в твърдо състояние при стайна температура. Съдържат се главно в продукти от животински произход.\r\nМононенаситени: обикновено в течно състояние. Съдържат се в олио, зехтин и други течни мазнини от растителен произход.\r\nПолиненаситени: най-известните такива са Омега-3 (има ги в рибата и лененото семе) и Омега-6 (има ги в житните култури)\r\nДоста храни, като ядки, яйца, семена и дори сурово месо, съдържат добра комбинация от трите типа мазнини.\r\n<br>\r\nБележка: ако искате научите повече за другите два основни макронутриента, хвърлете по един поглед на тези статии:\r\n<br>\r\nВъглехидрати: “Захар – сладки факти за горенето на мазнини!”\r\nПротеин: “Какво не знаете за най-важния макронутриент?”\r\nНАСИТЕНИТЕ МАЗНИНИ – ВРЕДНИ ИЛИ ПОЛЕЗНИ?\r\n\r\n<br>\r\nТвърди се че увеличават риска от сърдечносъдови болести. Тези “факти” са силно преувеличени и базарани главно на епидемиологични проучвания през средата на миналия век.  \r\n<br>\r\nПример за епидемиологични проучвания е когато се наблюдава как определена група от хора консумира все по-голямо количество наситени мазнини и честотата на смъртни случаи се увеличава. \r\n<br>\r\nТакъв тип изследвания, са полезни… но понякога крайно неточни. В горния пример, е трудно да се контролира за влиянието на неща като наднормено тегло, общо качество на диетата, тютюнопушене, консумация на алкохол, стрес и тн. Всяко едно от тях е рисков фактор само по себе си.\r\n<br>\r\nЦялата история с наситените мазнини се раздухва до такава степен, че резултата е да започнат да ги изписват отделно от общия брой мазнини на етика на всяка храна.\r\n<br>\r\nВече има достатъчно на брой изследвания доказващи, че наситените мазнини не са “злото”, за което ги представят [10]. Консумацията им в умерени количества не е свързана с повишеният риска за болести на сърцето.\r\n<br>\r\nМОНОНЕНАСИТЕНИ МАЗНИНИ: КАКВО ЗНАЕМ ЗА ТЯХ?\r\n\r\n<br>\r\nТе не са толкова добре изследвани. Но тяхната консумация, (все още) не е свързана с негативни последици за човешкото здраве. При домашни условия са доста безопасни.\r\n<br>\r\nДобре е да споменем, че при високи температури могат да протекат някои химични реакции, които да променят структурата на мазнините.\r\n<br>\r\nТакива температури е невъзможно да достигнем вкъщи на печката или котлона, а и риска е главно, ако ползваме полиненаситени мазнини, които могат да образуват транс мазнини.\r\n<br>\r\nВсе пак е добра идея, да избягваме да консумираме прекалено често пържени храни от ресторанти за бързо хранене. Там температурите са доста по-високи, а мазнината не се сменя толкова често (понякога с дни).\r\n<br>\r\nКачеството на мазнините деградира и дори могат да се образуват вредни субстанции (вижте частта за преработеното месо).\r\n<br>\r\nПОЛИНЕНАСИТЕНИ МАЗНИНИ И ПОЛЗИТЕ ОТ ОМЕГА-3\r\n<br>\r\n\r\nПолиненаситените мазнини и в частност Омега-3, са добре изследвани и техните полезни качества са познати от край време. Консумацията на Омега-3 помага да се намали възпалението, риска от сърдечносъдови болести и дори негативните ефекти от стареене.\r\n<br>\r\nИнтересна и кратка статия, за това какво представляват Омега-3 мастните киселини и тяхното действие върху човешкия организъм:\r\n<br>\r\nWhat Is Omega-3 & Why Do You Need It in Your Diet?\r\nОмега-3 и Омега-6 участват в различни жизнени процеси, но не могат да бъдат синтезирани от човешкия организъм. Съотношението между двата типа мастни киселини е добре да не отива в крайности.\r\n<br>\r\nОмега-3 и Омега-6 имат сравнително противоположно действие върху някой процеси (примерно възпалитени процеси).\r\n<br>\r\nНо при една здравословна диета, при която консумираме разнообрази и минимално преработени продукти (повече за това в частта за готвенето), няма нужда да балансираме съотношението на Омега-3 спрямо Омега-6.\r\n<br>\r\n#7 АКО БОБА Е ПОЛЕЗЕН ЗАЩО ПРЪЦКАМЕ ОТ НЕГО?\r\n\r\n<br><br>\r\nБобови култури, ядки и дори ще сложим овеса и пълнозърнестите храни под същия знаменател: всички те  съдържат известна доза “анти-нутриенти”.\r\n<br>\r\nАнти-нутриентите не могат да се усвоят от организма и дори могат да го раздразнят. За капак, пречат на усвояването на другите хранителни вещества като витамини, минерали [11] и дори протеин.\r\n<br>\r\n❌ РИСКОВЕ:<br><br><br>\r\nЗа разлика от плодовете и зеленчуците (които също съдържат анти-нутриенти), бобовите култури, ядките и овеса имат по-голям брой от тях и съответно ефекта е по-голям.\r\n<br>\r\nОсновния проблем е че ако в 100г сварена леща имаме ~35г магнезии, поради наличието на анти-нутриентите ще усвоим само (около) 20г. Освен това при по-големи количества някой хора могат да имат сериозни проблеми със стомаха и дори газове.\r\n<br>\r\nБележка: доста от тези храни имат високо съдържание на хранителни влакнини, които допринасят за подуването и газовете.\r\n<br>\r\nСамите газове се дължат на бактериите в организма (част от чревната флора), които се хранят с фибрите и произвеждат газ като краен продукт. \r\n<br>\r\nС други думи, вината не е във вас, бактериите пръцкат в стомаха ви, когато преядат с бобец. Доста по-сложно е от това, но нека не хвърляме цялата вина на анти-нутриентите.\r\n<br>\r\n✔ ПОЛЗИ:<br><br><br>\r\nЗа щастие чрез правилната подготовка, като накисване (бобови култури), ферментиране (овес и соеви продукти), или оставяне да покълнат зърната (пълнозърнести продукти) може почти напълно да се неутрализира негативния ефект на анти-нутриентите.\r\n<br>\r\nДори и без тази предварителна подготовка, голяма част от населението може да консумира съответните храни без проблем.\r\n<br>\r\nБобовите култури и ядките са толкова полезни, че дори и като отчетем действието на анти-нутриентите, сумарния ефект е убедително положителен [12].\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА:<br><br><br>\r\nКакто при плодовете и зеленчуците, при горе-споменатите храни също има доста голям индивидуален компонент на толеранс.\r\n<br>\r\nДори една купа леща е “по-тежко” ястие за повечето хора, сравнено със същото количество плод / зеленчук. Това предполага, че границата на поносимост и комфорт е по-ниска, поне на фона на други храни.\r\n<br>\r\nМожем да се съгласим, че боба и лещата са полезни, но това не означава и че трябва да се насилваме да ядем по една купа всеки ден… особенно ако изпитваме дискомфорт след това.\r\n<br>\r\n#8 КАКВО НЕ ЗНАЕМ ЗА ПЪЛНОЗЪРНЕСТИТЕ КУЛТУРИ И БЕЗГЛУТЕНОВАТА ДИЕТА?\r\n\r\n<br><br>\r\nКато допълнение към точка #7 за бобовите култури, нека вмъкнем и малко информация за пълнозърнестите храни. Те са по-богати на доста витамини и минерали, но също така и на (вредните) анти-нутриенти. Въпреки това, консумацията на пълнозърнести храни не крие големи опасности, освен тези изброени в точка #7.\r\n<br>\r\nБялото брашно е по-бедно на почти всичко (съответно и анти-нутриенти), заради допълнителната преработка.\r\n<br>\r\nКато имаме предвид негативния ефект на анти-нутриентие, което води до понижена абсорбация на полезните вещества, можем да заключим че черното брашно не е по-хранително от бялото.\r\n<br>\r\nРедица изследвания показват, че няма ефект върху телосложението или маркерите на възпаление между бял и пълнозърнест хляб [13]. На прост български: дали ядем бял или черен хляб най-вероятно няма да доведе до разлика в здравословното ни състояние\r\n<br>\r\nКАКВО Е ГЛУТЕН?<br><br>\r\nТова е група от протеини съдържащи се в житните култури. За него доста се тръби последните години, но много от фактите са преувеличени или изкарани извън контекст. Процента на хората с истинска глутенова непоносимост (целиакия) е под 1%.\r\n<br>\r\nВсе пак доста хора изпитват дискомфорт след консумацията на тестени продукти. Както при всички храни, това се дължи на неспособност или затруднение на организма да преработи или абсорбира даден хранителен елемент. В такива случаи, се налага да се ограничи консумацията на проблемните храни.\r\n<br>\r\nХората с непоносимост към тестени продукти, страдащи от целиакия (celiac disease) или обмислящи безглутенова диета диета могат да прочетат повече в тази статия:\r\n<br>\r\nThe Gluten Manifesto: Everything You Need to Know About Gluten\r\n#9 ГОТВЕНЕ И СУРОВОЯДСТВО: ПОЛЕЗНО ЛИ Е ДА ЯДЕМ СУРОВИ ЯЙЦА?\r\n<br><br>\r\n\r\nПочти всеки е чувал, че яйцата са по-полезни, ако ги пием сурови… вместо да ги мятаме на тигана. Истина или мит и до колко готвенето дава отражение върху хранителния състав на храната?\r\n<br>\r\nЗа разлика от доста диви животни, хората сме сравнително непригодени да се справяме със жилаво месо, твърди ядки и доста сурови растения. И все пак сме на върха на хранителната верига.\r\n<br>\r\nМоже да нямаме остри зъби или специално пригодени стомаси, но си имаме един орган, който се справя с почти всяко кулинарно предизвикателство: мозък.\r\n<br>\r\nНямаш нужда от голяма и здрава челюст, когато знаеш как да си изпечеш пържолата, че да ти се топи в устатa.\r\n<br>\r\nТова което постигаме с готвенето е доста сходно на това, което се случва в устата и стомаха на много диви животни: механична и химична обработка на храната.\r\nТова, което печелим е по-лесна (и често по-пълна) абсорбация на продуктите получени след цялата тази предварителна обработка.\r\nОсвен това термичната обработка елиминира голям процент от вредните бактерии и други организми опасни за човешкото здраве.\r\n❌ КАКВО ГУБИМ?\r\n<br><br><br>\r\n\r\nПечене – при по продължително печене и високи температури могат да се наблюдават загуби на витамин B-комплекс (~40%). Но като цяло, ефекта върху микронутриентите (витамини и минерали) е минимален сравнен с други методи на готвене.\r\nГотвене на пара: наблюдават се най-малки загуби на хранителни вещества (~10%), но има ограничено приложение (пържола на пара?)\r\nВарене – главно се губят водноразтворимите витамини (ватамини С и В-комплекс), но голяма част от тях остават във водата (~60-70%).  Така че ако си правите супа, доста от това което се “губи” ще го поемете обратно с бульона.\r\nСкара и грил – глано се наблюдава загуба на витамин В-комплекс и някой минерали, но до по-малка степен (~40%) отколкото при варенето. Но пък при варенето може да си “върнете” част от загубите с бульона.\r\nМикровълнови печки: загуби главно на витамин С (~20%). Загубите на Омега-3 също са минимални (въпреки, че печенето и варенето имат още по-малък ефект върху мастните киселини)\r\nПържене – ефекта върху различните микронутриенти не е голям, но за сметка на това е възможно да се измени структурата на някой мастни киселини и дори да се образуват транс мазнини. Пърженето има и доста негативен ефект върху съдържанието на Омега-3.\r\nЗамразени продукти: загубата на витамини и антиоксиданти е минимална. Дори замразените продукти са често по-пресни, тъй като са набрани точно когато са узрели.. За разлика от стоката в магазина, която може да е преседяла няколко дни.\r\nНо пък някои (обикновено) зеленчуци преминават топлинна обработка, преди да ги замразят, което може да доведе до (минимални) загуби на витамини.\r\n<br>\r\nКонсерви: загубите на нутриенти може да дойде от предварителна обработка и ще зависи доста от нея. Но като цяло, ако решите да приемете и соса от консервата, загубите ще са около 30%.\r\nКАК ДА ГОТВИМ, ЗА ДА ЗАПАЗИМ КАЧЕСТВОТО НА ХРАНАТА?\r\n\r\n<br>\r\nЕфекта от пърженето и грил / скари е обяснен в частта за преработените меса… но ето още няколко препоръки:\r\n<br>\r\nНай-добрия начин да си приготвяме зеленчуци е да ги ядем пресни и сурови. Ако се налага да ги готвим, на пара е най-добрият вариант. Замразени зеленчуци също са добър вариант. Mоже да ги оставим да се размразят сами или да ползваме микровълнова.\r\nМесо и гарнитурата към него е можем да направим на фурна (печене). За някой продукти (картофи или ориз) варенето също е добра опция. Микровълновата печка е друг добър вариант, който малко хора използват (идеален за месо, яйца, риба).\r\nПърженето не е добра идея ако си готвим мазна риба. Готвенето на много високи температури като цяло има негативен ефект върху хранителното съдържание на храната.\r\nИнтересна статия, ако искате да научите как да минимализирате загубите на хранителни вещества при готвене:\r\n<br>\r\nHow cooking affects nutrient content\r\n✔ ПОЛЗИ:<br><br>\r\nЗагубите от към макронутриенти (протеин, въглехидрати и мазнини) е нищожен. Може би “най-лесния” начин да имаме загуба на протеин… е да си прегорим пържолата (да стане на въглен).\r\n<br>\r\nЗагубата от към микронутриенти (витамини, минерали, антиоксиданти) е също малка, но оправдана. Доста от хранителните елементи не могат да се усвоят от организма, ако храната не премина термична обработка.\r\n<br>\r\nНякой храни са напълно негодни и дори токсични в сурово състояние (примерно кашу). Освен това готвенето подобрява вкусовите качества на храната. Доста голямо удоволствие, от което едва ли си заслужа да се лишаваме.\r\n<br>\r\n⚠ ОБЕКТИВНА ОЦЕНКА<br><br><br>\r\nНо понякога, ако се опитваме да сменим хранителните си навици с по-здравословни, или сме в период на сваляне на мазнини, трябва да обръщаме повече внимание какво се случва с храната ни.\r\n<br>\r\nСуровите плодове и зеленчуци са по-засищащи и по-полезни отколкото сготвените или тези под форма на пюре или сок. Но пък, консервите и замразените храни са голямо удобство и много добър заместител, когато нямаме време да си готвим.\r\n<br>\r\nКАК ДА СЕ ХРАНИМ ЗА ДЪЛЪГ И ЗДРАВОСЛОВЕН ЖИВОТ? \r\nЗа тези от вас, които стигнаха до края: честито! Изчетохте 5000+ думи, за да стигнете до извода “не се лишавай от малките удоволствия в живота, но консумирай с мярка”.\r\n<br>\r\nМалко са нещата, които сами по себе си са вредни и консумацията им не носи абсолютно никаква полза. Дори субстанции като алкохол, никотин и наркотици, колкото и да са вредни, в малки и редки дози едва ли ще ни скъсят живота с много.\r\n<br>\r\nДа не забравяме и огромния ефект на стреса, движението и щастието.\r\n<br>\r\nИронично, ако се тревожим прекалено много за качеството на диетата си е възможно допълнителния стрес да окаже по-голям (негативен) ефект, отколкото малкото подобрение в храната.\r\n<br>\r\nКАКВА Е ЦЕНАТА НА ДЪЛГОЛЕТИЕТО?\r\nЗаслужава ли си да доживеем до 90 с много лишения, без да се сме се насладили на малките удоволствия в живота? Или по-скоро бихме го докарали до 84-5 с малко повечко “компромиси”. Или пък 60 години, прекарани в пълен хедонизъм? \r\n<br>\r\nВсеки решава сам как да живее живота си. Надявяме се информацията тук да ви е била полезна, за да вземете най-доброто решение как да си изживеете и насладите на живота.\r\n<br>\r\nОставям ви с едно интересно четиво от Алан Арагон, за “чистото” хранене:\r\n<br>\r\nResearch Review: The Dirt On Clean Eating Written By Nutrition Expert Alan Aragon\r\nИзследвания използвани или цитирани в статията:\r\n<br>\r\n[1] Sugar substitutes: Health controversy over perceived benefits\r\n<br>\r\n[2] Clinical Ramifications of Malabsorption of Fructose and Other Short-chain Carbohydrates\r\n<br>\r\n[3] Dietary fructose intolerance, fructan intolerance and FODMAPs\r\n<br>\r\n[4] Fruit and vegetable intake and the risk of cardiovascular disease, total cancer and all-cause mortality—a systematic review and dose-response meta-analysis of prospective studies\r\n<br>\r\n[5] Red and Processed Meat Consumption and Risk of Incident Coronary Heart Disease, Stroke, and Diabetes Mellitus\r\n<br>\r\n[6] Effects of grilling procedures on levels of polycyclic aromatic hydrocarbons in grilled meats\r\n<br>\r\n[7] Consumer sensory analysis of organically and conventionally grown vegetables\r\n<br>\r\n[8] Cardiovascular disease and trans fatty acids: legal act necessary\r\n<br>\r\n[9] Limiting trans Fats in Foods: Use of Partially Hydrogenated Vegetable Oils in Prepacked Foods in Slovenia\r\n<br>\r\n[10] Meta-analysis of prospective cohort studies evaluating the association of saturated fat with cardiovascular disease.\r\n<br>\r\n[11] Phytic acid added to white-wheat bread inhibits fractional apparent magnesium absorption in humans.\r\n<br>\r\n[12] A review of the Hispanic paradox: time to spill the beans?\r\n<br>\r\n[13] Association between carbohydrate quality and inflammatory markers: systematic review of observational and interventional studies  \r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                       \r\n                                <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/food-component/new-article/food1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Food1Component = /** @class */ (function () {
    function Food1Component(_service) {
        this._service = _service;
    }
    Food1Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Food1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'food1',
            template: __webpack_require__("./src/app/articles/food-component/new-article/food1.component.html"),
            styles: [__webpack_require__("./src/app/articles/food-component/new-article/food1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Food1Component);
    return Food1Component;
}());



/***/ }),

/***/ "./src/app/articles/life-style-component/lifestyle.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}"

/***/ }),

/***/ "./src/app/articles/life-style-component/lifestyle.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content from-top content\">\r\n\r\n                <h1>Lifestyle.</h1>\r\n                <h2>“It is never too late to be what you might have been.”</h2><br><h6>George Eliot</h6>\r\n                <br>\r\n                <br>\r\n                <ul class=\"list-group\">\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life3\">More about meditation.</a>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life3\">The best day to start was yesterday!</a>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life3\">Personal style?</a>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                        <a class=\"btn btn-link\" routerLink=\"/life3\">Motivation for work.</a>\r\n                         </li>\r\n                         <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                        <a class=\"btn btn-link\" routerLink=\"/life3\">Fitness and work. Can we have good progress when we are on fulltime job?</a>\r\n                         </li>\r\n                </ul>\r\n                <br><br>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                               \r\n                                        <img class=\"rounded\" src=\"assets/Beachchairs.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n                   </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"from-top\">\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/life-style-component/lifestyle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeStyleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LifeStyleComponent = /** @class */ (function () {
    function LifeStyleComponent(_service) {
        this._service = _service;
    }
    LifeStyleComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    LifeStyleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'lifestyle',
            template: __webpack_require__("./src/app/articles/life-style-component/lifestyle.component.html"),
            styles: [__webpack_require__("./src/app/articles/life-style-component/lifestyle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], LifeStyleComponent);
    return LifeStyleComponent;
}());



/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.1/life2.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.1/life2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>Коя е перфектната програма</h1>\r\n    \r\n        <br>\r\n        <br>\r\n        <div>\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        <br><br><br>\r\n                        Малко преди нова година, започнах да пиша концептуален материал подобен на статията ми “най-добрата диета за отслабване”.\r\n        <br>\r\n                        Целта ми беше да напиша статия относно това коя е най-добрата тренировъчна програма. Е краткия материал бързичко набъбна до над 10 хиляди думи и в крайна сметка се превръща в електронна книга, която ще пуснем напълно безплатно за всички вас!\r\n                        Ако искаш да си 100% сигурен/а, че ще я получиш натисни бутона долу и се върни към четенето на статията!\r\n                        <br><br>    \r\n                        \r\n                        В нашата фейсбук група се заформи интересна дискусия относно тренировъчната честота и аз обещах да споделя своите мисли по темата.\r\n                        <br>\r\n                        За разлика от диетологията, спортните науки са много ново попълнение в научния свят. Все още липсват качествени и дългосрочни проучвания по много теми, а тези които са налични пораждат само повече въпроси.\r\n                        <br>\r\n                        Също така научния метод понякога е опак и може да ни подведе в заключенията ни.\r\n                        <br> \r\n                        Надявам се тази извадка да ви е интересна и да ви помогне да разберете, защо няма една най-добра тренировъчна програма!\r\n                        <br> \r\n                        Специални благодарности на Костадин Зашев от Strong by Science за коментарите по тази извадка от книгата, с които ми помогна да направя това една завършена и полезна мини-статия!\r\n                        <br> \r\n                        Съдържание \r\n                        <br><br>  \r\n                        Защо няма една най-добра програма?<br>\r\n                        Генетичен потенциал<br>\r\n                        Не съм създаден за този спорт!<br>\r\n                        Отвъд гени и спорт – какво правим извън залата, което влияе на резултатите?<br>\r\n                        Как да постигна резултати?<br>\r\n                        ЗАЩО НЯМА ЕДНА НАЙ-ДОБРА ПРОГРАМА?<br>\r\n                        Проучванията с които разполагаме на този етап се различават по дизайн, продължителност и изследвана популация. Това по което си приличат обаче е,\r\n                        <br>\r\n                        че независимо от вида на изследването резултатите се предоставят на средни стойности.\r\n                        <br>\r\n                        Това е стандарт в научния език. Но този стандарт може да се окаже пречка, когато искаме да приложим нещо на практика.\r\n                        <br>\r\n                        Ето какво имам предвид.\r\n                        \r\n                        <br><br><br>\r\n                        \r\n                        Нека разгледаме следната графа, която е взета от това проучване. На нея са изобразени резултатите на 53 участника, които тренират по една и съща програма в продължение на 9 седмици. Участниците изпълняват бедрени разгъвания 3 пъти на седмица, като в края на изследването се измерват един куп маркери, най-важния от който е напречното сечение на квадрицепсите.\r\n                        <br>\r\n                        Един поглед е достатъчен да заключим, че това е супер програма тъй като средно участниците повишават размера на квадрицепсите си с около 5.7%.\r\n                        <br>\r\n                        Но забележете и че 5 участника всъщност ГУБЯТ мускулна маса. В същото време един участник забелязва почти 20% увеличение в размера на квадрицепсите!\r\n                        <br>\r\n                        Защо тогава резултатите са позитивни?\r\n                        <br>\r\n                        Когато изследваме достатъчно голям брой хора (обикновено над 100, но зависи от популацията) получаваме нормално статистическо разпределение, което има формата на камбана.\r\n                        \r\n                        <br>\r\n                        \r\n                        При подобнo разпределение 68% от хората ще имат резултат, който се намира на 1 стандартно отклонение от средното за групата, а 95% от хората ще се намират на 2 стандартни отклонения.\r\n                        <br>\r\n                        При проучването от по-горе стандартното отклонение е около 17% от средното. Проблемът е, че всички искаме да сме със 17% НАД средния резултат за нашата извадка.\r\n                        <br>\r\n                        Въпросът за милион долара е как да изберем програма, която да ни предостави възможно най-добри резултати?\r\n                        <br>\r\n                        Това е и причината програмите от Интернет да работят супер за някои, не толкова добре за други и да са напълно трагични за трета група от хора.\r\n                        <br>\r\n                        В Интернет има страхотни програми като 5х5, 5-3-1 и стотици други, които може да използвате.\r\n                        <br>\r\n                        Но ако “нищо не работи за вас” и сте готови да се откажете от тренировките с тежести, дочетете тази книга преди да направите решението си окончателно.\r\n                        <br>\r\n                        Двамата със Стан сме изградили репутацията си до момента именно върху индивидуалния подход и в остатъка от тази книга ще ви споделя голяма част от знанията, които сме натрупали в последните години!\r\n                        <br>\r\n                        ГЕНЕТИЧЕН ПОТЕНЦИАЛ<br>\r\n                        Освен статистическите проблеми свързани с изследванията и научния метод има още няколко неща, които правят резултатите трудни за интерпретация.\r\n                        <br>\r\n                        Може би и най-пренебрегваният фактор, що се отнася до програмиране – от тук нататък ще ползваме този термин вместо ‘съставяне на тренировъчен режим’ – е генетичния потенциал.\r\n                        <br>\r\n                        Това проучване например разкрива, че размера и вида на пелвиса е от огромно значение за възстановяването на глутеус максимус след смяна на тазобедрена става.\r\n                        <br>\r\n                        Но интересната за нас находка е, че един мъж има 484% по-голям глутеус от друг мъж от групата. Представете си, ако вашия тренировъчен партньор, има буквално 5 пъти по-големи ръце!\r\n                        <br>\r\n                        Това прави задачата на изследователите както и на тези от нас, които търсят практическото приложение доста трудна. Освен това генетичния потенциал може да има много различни измерения.\r\n                        <br>\r\n                        Най-значими са може би размера на вашия скелет, размера на китките и глезените и други белези като например телесно окосмение (нито задължителен нито достатъчен фактор).\r\n                        <br>\r\n                        Когато говорим за бодибилдинг архитектурата (форма, залавни места и др.) на самия мускул също има огромно значение! Аз и Стан сме отличен пример за това.\r\n                        <br><br><br>\r\n                        \r\n                        \r\n                        На тези две снимки сме почти идентични откъм тегло, процент подкожни мазнини и височина. Залавните места, и формата, на някои от мускулите на Стан го карат да изглежда много по-голям от мен. Вижте разликата в квадрицепсите ни! За сметка на това аз имам доста по-развит трапец без да го тренирам директно почти никога. Гени!\r\n                        <br>\r\n                        Отвъд първичните белези всичко се случва на клетъчно ниво и зависи от експресията и транскрипцията на определени гени и способността да бъдат активирани сателитните клетки в мускулните влакна.\r\n                        <br>\r\n                        Гените имат такова значение, че могат да направят разликата между никакъв и уникален прогрес! Горещо препоръчвам статията на Брет Контрерас по темата както и тази на Менно Хенселманс, тъй като те обхващат голяма част от разликите в генетичния потенциал.\r\n                        <br>\r\n                        НЕ СЪМ СЪЗДАДЕН ЗА ТОЗИ СПОРТ!<br>\r\n                        В научната литература се забелязват и т.н. ‘non-responders’ – хора, при които тренировките с тежести не водят до никакви резултати. Може би сте чували и термина “hard-gainer” или човек, който трудно покачва ММ.\r\n                        <br><br>\r\n                        През последните години с напредъка на проучванията става все по-ясно, че няма нон-респондъри, но в действителност при някои хора резултатите идват АДСКИ трудно и зависят от количеството тренировъчен обем.\r\n                        <br>\r\n                        Едно проучване от особен интерес сравнява трениращи по генерална програма срещу индивидуализирана. Резултатите са доста интригуващи и показват, че 64% от хората трениращи по генерална програма имат прогрес,\r\n                        <br>\r\n                        за разлика от 100% при групата, която ползва индивидуализирана програма!\r\n                        <br>\r\n                        Друго проучване ползва панел от 15 гени, за да разпредели две групи от атлети спрямо техния фенотип. След това изследователите разделят хората спрямо това дали имат генетическо предразположение за тренировки с висок или нисък интензитет.\r\n                        <br>\r\n                        Изследователите провеждат две различни проучвания, като и в двете сравняват групи от хора трениращи по подходяща за тях програма, отговаряща на техния фенотип, или програма, която е противопоказна за тях. Сред нон-респондърите и тези с много слаби резултати 82% са от групите, които НЕ тренират спрямо своя фенотип.\r\n                        <br>\r\n                        ОТВЪД ГЕНИ И СПОРТ – КАКВО ПРАВИМ ИЗВЪН ЗАЛАТА, КОЕТО ВЛИЯЕ НА РЕЗУЛТАТИТЕ?\r\n                        Но не всичко се дължи на гените и тренировките. В крайна сметка изследователите от нито едно проучване не “светят” на участниците и не знаят подробности за техния начин на живот.\r\n                        <br>\r\n                        Качеството на диетата и съня, както и количеството стрес на което са подложени тези участници отвъд рамките на проучванията могат да имат огромен и внушителен ефект!\r\n                        <br>\r\n                        За жалост е изключително скъпо да се проведе дългосрочно проучване, в което тези фактори да се изолират и уеднаквят за всички участници.\r\n                        <br>\r\n                        Много често качеството и придържането към диетата, дори в проучвания, чиято цел е изследване на телесната композиция, се оценява на базата на дневници, които участниците трябва да поддържат самостоятелно.\r\n                        <br>\r\n                        Веднъж на седмица или две, участниците имат среща с диетолог, който разглежда хранителните им дневници.\r\n                        <br>\r\n                        \r\n                        <br><br>\r\n                        Много често чуваме и хора да се оправдават, че “метаболизма ми е повреден” и “не мога да качвам/свалям, защото имам бърз/бавен метаболизъм”.\r\n                        <br>\r\n                        Първо ви съветвам да прочетете статията ми за метаболизма, за да разберете как работи той.\r\n                        <br>\r\n                        Второ ще оставя един цитат от статията си за съня, който най-ясно демонстрира защо съня може да е в основата на липсващите резултати на голяма част от хората и как недоспиването наистина може да “забави” вашия метаболизъм:\r\n                        <br>\r\n                        Едно от най-добрите проучвания по темата сравнява 8.5 часа сън и 5.5 часа сън в продължение на 14 дневен калориен дефицит. Резултатите са повече от интригуващи – групата, която е лишена от сън, гори 55% по-малко мазнини и 60% повече мускулна маса за всеки загубен килограм!\r\n                        <br>\r\n                        Няма как да изолираме подобни фактори, а те имат страхотен ефект върху крайните резултати!\r\n                        <br>\r\n                        КАК ДА ПОСТИГНА РЕЗУЛТАТИ?\r\n                        <br><br>Основното нещо, което искам да предам на всеки един от вас е, че НЕ трябва да ползвате “липсата на гени”, за оправдание. Както споделих по-рано, дори при нон-респондърите се забелязва ефект, но той е много слаб.\r\n                        <br>\r\n                        Ако ви липсват резултати, обърнете внимание на съня и диетата си, след което се опитайте да овладеете стреса в ежедневието! Дори това да не доведе до по-добри резултати, със сигурност ще увеличи качеството на живота ви многократно!\r\n                        <br>\r\n                        Факторите които са от значение са прекалено много, за да създадем унифициран модел. Но за сметка на това количеството научно-потвърдена информация расте с всеки изминал ден!\r\n                        <br>\r\n                        Макар и тази наука да е нова, засега е произвела много различни подходи, които все пак имат някаква научна подкрепа, с които можете да експериментирате, докато не намерите правилния за вас подход!\r\n                        <br>\r\n                        За щастие този спорт е маратон, а не спринт. Дори резултатите да идват много, много бавно, тренировките с тежести имат редица предимства, които не са за изпускане.\r\n                        <br>\r\n                        Тази статия е увод към една книга, в която описах още по-подробно защо няма такова нещо като най-добра тренировъчна програма.\r\n                        <br><br>  <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.1/life2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Life2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Life2Component = /** @class */ (function () {
    function Life2Component(_service) {
        this._service = _service;
    }
    Life2Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Life2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'life2',
            template: __webpack_require__("./src/app/articles/life-style-component/new-article.1/life2.component.html"),
            styles: [__webpack_require__("./src/app/articles/life-style-component/new-article.1/life2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Life2Component);
    return Life2Component;
}());



/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.2/life3.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.2/life3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>По-големи бицепси?</h1>\r\n        <h5>Ключът към постигането на целите е постояснството.</h5>\r\n        <br>\r\n        <br>\r\n        <div>\r\n                <br><br><br>\r\n                Малко преди нова година, започнах да пиша концептуален материал подобен на статията ми “най-добрата диета за отслабване”.\r\n<br>\r\n                Целта ми беше да напиша статия относно това коя е най-добрата тренировъчна програма. Е краткия материал бързичко набъбна до над 10 хиляди думи и в крайна сметка се превръща в електронна книга, която ще пуснем напълно безплатно за всички вас!\r\n                Ако искаш да си 100% сигурен/а, че ще я получиш натисни бутона долу и се върни към четенето на статията!\r\n                <br><br>    \r\n                \r\n                В нашата фейсбук група се заформи интересна дискусия относно тренировъчната честота и аз обещах да споделя своите мисли по темата.\r\n                <br>\r\n                За разлика от диетологията, спортните науки са много ново попълнение в научния свят. Все още липсват качествени и дългосрочни проучвания по много теми, а тези които са налични пораждат само повече въпроси.\r\n                <br>\r\n                Също така научния метод понякога е опак и може да ни подведе в заключенията ни.\r\n                <br> \r\n                Надявам се тази извадка да ви е интересна и да ви помогне да разберете, защо няма една най-добра тренировъчна програма!\r\n                <br> \r\n                Специални благодарности на Костадин Зашев от Strong by Science за коментарите по тази извадка от книгата, с които ми помогна да направя това една завършена и полезна мини-статия!\r\n                <br> \r\n                Съдържание \r\n                <br><br>  \r\n                Защо няма една най-добра програма?<br>\r\n                Генетичен потенциал<br>\r\n                Не съм създаден за този спорт!<br>\r\n                Отвъд гени и спорт – какво правим извън залата, което влияе на резултатите?<br>\r\n                Как да постигна резултати?<br>\r\n                ЗАЩО НЯМА ЕДНА НАЙ-ДОБРА ПРОГРАМА?<br>\r\n                Проучванията с които разполагаме на този етап се различават по дизайн, продължителност и изследвана популация. Това по което си приличат обаче е,\r\n                <br>\r\n                че независимо от вида на изследването резултатите се предоставят на средни стойности.\r\n                <br>\r\n                Това е стандарт в научния език. Но този стандарт може да се окаже пречка, когато искаме да приложим нещо на практика.\r\n                <br>\r\n                Ето какво имам предвид.\r\n                \r\n                <br><br><br>\r\n                \r\n                Нека разгледаме следната графа, която е взета от това проучване. На нея са изобразени резултатите на 53 участника, които тренират по една и съща програма в продължение на 9 седмици. Участниците изпълняват бедрени разгъвания 3 пъти на седмица, като в края на изследването се измерват един куп маркери, най-важния от който е напречното сечение на квадрицепсите.\r\n                <br>\r\n                Един поглед е достатъчен да заключим, че това е супер програма тъй като средно участниците повишават размера на квадрицепсите си с около 5.7%.\r\n                <br>\r\n                Но забележете и че 5 участника всъщност ГУБЯТ мускулна маса. В същото време един участник забелязва почти 20% увеличение в размера на квадрицепсите!\r\n                <br>\r\n                Защо тогава резултатите са позитивни?\r\n                <br>\r\n                Когато изследваме достатъчно голям брой хора (обикновено над 100, но зависи от популацията) получаваме нормално статистическо разпределение, което има формата на камбана.\r\n                \r\n                <br>\r\n                \r\n                При подобнo разпределение 68% от хората ще имат резултат, който се намира на 1 стандартно отклонение от средното за групата, а 95% от хората ще се намират на 2 стандартни отклонения.\r\n                <br>\r\n                При проучването от по-горе стандартното отклонение е около 17% от средното. Проблемът е, че всички искаме да сме със 17% НАД средния резултат за нашата извадка.\r\n                <br>\r\n                Въпросът за милион долара е как да изберем програма, която да ни предостави възможно най-добри резултати?\r\n                <br>\r\n                Това е и причината програмите от Интернет да работят супер за някои, не толкова добре за други и да са напълно трагични за трета група от хора.\r\n                <br>\r\n                В Интернет има страхотни програми като 5х5, 5-3-1 и стотици други, които може да използвате.\r\n                <br>\r\n                Но ако “нищо не работи за вас” и сте готови да се откажете от тренировките с тежести, дочетете тази книга преди да направите решението си окончателно.\r\n                <br>\r\n                Двамата със Стан сме изградили репутацията си до момента именно върху индивидуалния подход и в остатъка от тази книга ще ви споделя голяма част от знанията, които сме натрупали в последните години!\r\n                <br>\r\n                ГЕНЕТИЧЕН ПОТЕНЦИАЛ<br>\r\n                Освен статистическите проблеми свързани с изследванията и научния метод има още няколко неща, които правят резултатите трудни за интерпретация.\r\n                <br>\r\n                Може би и най-пренебрегваният фактор, що се отнася до програмиране – от тук нататък ще ползваме този термин вместо ‘съставяне на тренировъчен режим’ – е генетичния потенциал.\r\n                <br>\r\n                Това проучване например разкрива, че размера и вида на пелвиса е от огромно значение за възстановяването на глутеус максимус след смяна на тазобедрена става.\r\n                <br>\r\n                Но интересната за нас находка е, че един мъж има 484% по-голям глутеус от друг мъж от групата. Представете си, ако вашия тренировъчен партньор, има буквално 5 пъти по-големи ръце!\r\n                <br>\r\n                Това прави задачата на изследователите както и на тези от нас, които търсят практическото приложение доста трудна. Освен това генетичния потенциал може да има много различни измерения.\r\n                <br>\r\n                Най-значими са може би размера на вашия скелет, размера на китките и глезените и други белези като например телесно окосмение (нито задължителен нито достатъчен фактор).\r\n                <br>\r\n                Когато говорим за бодибилдинг архитектурата (форма, залавни места и др.) на самия мускул също има огромно значение! Аз и Стан сме отличен пример за това.\r\n                <br><br><br>\r\n                \r\n                \r\n                На тези две снимки сме почти идентични откъм тегло, процент подкожни мазнини и височина. Залавните места, и формата, на някои от мускулите на Стан го карат да изглежда много по-голям от мен. Вижте разликата в квадрицепсите ни! За сметка на това аз имам доста по-развит трапец без да го тренирам директно почти никога. Гени!\r\n                <br>\r\n                Отвъд първичните белези всичко се случва на клетъчно ниво и зависи от експресията и транскрипцията на определени гени и способността да бъдат активирани сателитните клетки в мускулните влакна.\r\n                <br>\r\n                Гените имат такова значение, че могат да направят разликата между никакъв и уникален прогрес! Горещо препоръчвам статията на Брет Контрерас по темата както и тази на Менно Хенселманс, тъй като те обхващат голяма част от разликите в генетичния потенциал.\r\n                <br>\r\n                НЕ СЪМ СЪЗДАДЕН ЗА ТОЗИ СПОРТ!<br>\r\n                В научната литература се забелязват и т.н. ‘non-responders’ – хора, при които тренировките с тежести не водят до никакви резултати. Може би сте чували и термина “hard-gainer” или човек, който трудно покачва ММ.\r\n                <br><br>\r\n                През последните години с напредъка на проучванията става все по-ясно, че няма нон-респондъри, но в действителност при някои хора резултатите идват АДСКИ трудно и зависят от количеството тренировъчен обем.\r\n                <br>\r\n                Едно проучване от особен интерес сравнява трениращи по генерална програма срещу индивидуализирана. Резултатите са доста интригуващи и показват, че 64% от хората трениращи по генерална програма имат прогрес,\r\n                <br>\r\n                за разлика от 100% при групата, която ползва индивидуализирана програма!\r\n                <br>\r\n                Друго проучване ползва панел от 15 гени, за да разпредели две групи от атлети спрямо техния фенотип. След това изследователите разделят хората спрямо това дали имат генетическо предразположение за тренировки с висок или нисък интензитет.\r\n                <br>\r\n                Изследователите провеждат две различни проучвания, като и в двете сравняват групи от хора трениращи по подходяща за тях програма, отговаряща на техния фенотип, или програма, която е противопоказна за тях. Сред нон-респондърите и тези с много слаби резултати 82% са от групите, които НЕ тренират спрямо своя фенотип.\r\n                <br>\r\n                ОТВЪД ГЕНИ И СПОРТ – КАКВО ПРАВИМ ИЗВЪН ЗАЛАТА, КОЕТО ВЛИЯЕ НА РЕЗУЛТАТИТЕ?\r\n                Но не всичко се дължи на гените и тренировките. В крайна сметка изследователите от нито едно проучване не “светят” на участниците и не знаят подробности за техния начин на живот.\r\n                <br>\r\n                Качеството на диетата и съня, както и количеството стрес на което са подложени тези участници отвъд рамките на проучванията могат да имат огромен и внушителен ефект!\r\n                <br>\r\n                За жалост е изключително скъпо да се проведе дългосрочно проучване, в което тези фактори да се изолират и уеднаквят за всички участници.\r\n                <br>\r\n                Много често качеството и придържането към диетата, дори в проучвания, чиято цел е изследване на телесната композиция, се оценява на базата на дневници, които участниците трябва да поддържат самостоятелно.\r\n                <br>\r\n                Веднъж на седмица или две, участниците имат среща с диетолог, който разглежда хранителните им дневници.\r\n                <br>\r\n                \r\n                <br><br>\r\n                Много често чуваме и хора да се оправдават, че “метаболизма ми е повреден” и “не мога да качвам/свалям, защото имам бърз/бавен метаболизъм”.\r\n                <br>\r\n                Първо ви съветвам да прочетете статията ми за метаболизма, за да разберете как работи той.\r\n                <br>\r\n                Второ ще оставя един цитат от статията си за съня, който най-ясно демонстрира защо съня може да е в основата на липсващите резултати на голяма част от хората и как недоспиването наистина може да “забави” вашия метаболизъм:\r\n                <br>\r\n                Едно от най-добрите проучвания по темата сравнява 8.5 часа сън и 5.5 часа сън в продължение на 14 дневен калориен дефицит. Резултатите са повече от интригуващи – групата, която е лишена от сън, гори 55% по-малко мазнини и 60% повече мускулна маса за всеки загубен килограм!\r\n                <br>\r\n                Няма как да изолираме подобни фактори, а те имат страхотен ефект върху крайните резултати!\r\n                <br>\r\n                КАК ДА ПОСТИГНА РЕЗУЛТАТИ?\r\n                <br><br>Основното нещо, което искам да предам на всеки един от вас е, че НЕ трябва да ползвате “липсата на гени”, за оправдание. Както споделих по-рано, дори при нон-респондърите се забелязва ефект, но той е много слаб.\r\n                <br>\r\n                Ако ви липсват резултати, обърнете внимание на съня и диетата си, след което се опитайте да овладеете стреса в ежедневието! Дори това да не доведе до по-добри резултати, със сигурност ще увеличи качеството на живота ви многократно!\r\n                <br>\r\n                Факторите които са от значение са прекалено много, за да създадем унифициран модел. Но за сметка на това количеството научно-потвърдена информация расте с всеки изминал ден!\r\n                <br>\r\n                Макар и тази наука да е нова, засега е произвела много различни подходи, които все пак имат някаква научна подкрепа, с които можете да експериментирате, докато не намерите правилния за вас подход!\r\n                <br>\r\n                За щастие този спорт е маратон, а не спринт. Дори резултатите да идват много, много бавно, тренировките с тежести имат редица предимства, които не са за изпускане.\r\n                <br>\r\n                Тази статия е увод към една книга, в която описах още по-подробно защо няма такова нещо като най-добра тренировъчна програма.\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                       \r\n                                <img class=\"rounded\" src=\"assets/food2.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article.2/life3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Life3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Life3Component = /** @class */ (function () {
    function Life3Component(_service) {
        this._service = _service;
    }
    Life3Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Life3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'life3',
            template: __webpack_require__("./src/app/articles/life-style-component/new-article.2/life3.component.html"),
            styles: [__webpack_require__("./src/app/articles/life-style-component/new-article.2/life3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Life3Component);
    return Life3Component;
}());



/***/ }),

/***/ "./src/app/articles/life-style-component/new-article/life1.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article/life1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n        <h1>Трябва ли да си намерим треньор</h1>\r\n        <br>\r\n        <br>\r\n        <div>\r\n                “ВСИЧКО Е ХИМИЯ” – ИСТИНА ИЛИ ЛЪЖА?\r\n\r\n                <br><br><br>\r\n                Малко преди нова година, започнах да пиша концептуален материал подобен на статията ми “най-добрата диета за отслабване”.\r\n<br>\r\n                Целта ми беше да напиша статия относно това коя е най-добрата тренировъчна програма. Е краткия материал бързичко набъбна до над 10 хиляди думи и в крайна сметка се превръща в електронна книга, която ще пуснем напълно безплатно за всички вас!\r\n                Ако искаш да си 100% сигурен/а, че ще я получиш натисни бутона долу и се върни към четенето на статията!\r\n                <br><br>    \r\n                \r\n                В нашата фейсбук група се заформи интересна дискусия относно тренировъчната честота и аз обещах да споделя своите мисли по темата.\r\n                <br>\r\n                За разлика от диетологията, спортните науки са много ново попълнение в научния свят. Все още липсват качествени и дългосрочни проучвания по много теми, а тези които са налични пораждат само повече въпроси.\r\n                <br>\r\n                Също така научния метод понякога е опак и може да ни подведе в заключенията ни.\r\n                <br> \r\n                Надявам се тази извадка да ви е интересна и да ви помогне да разберете, защо няма една най-добра тренировъчна програма!\r\n                <br> \r\n                Специални благодарности на Костадин Зашев от Strong by Science за коментарите по тази извадка от книгата, с които ми помогна да направя това една завършена и полезна мини-статия!\r\n                <br> \r\n                Съдържание \r\n                <br><br>  \r\n                Защо няма една най-добра програма?<br>\r\n                Генетичен потенциал<br>\r\n                Не съм създаден за този спорт!<br>\r\n                Отвъд гени и спорт – какво правим извън залата, което влияе на резултатите?<br>\r\n                Как да постигна резултати?<br>\r\n                ЗАЩО НЯМА ЕДНА НАЙ-ДОБРА ПРОГРАМА?<br>\r\n                Проучванията с които разполагаме на този етап се различават по дизайн, продължителност и изследвана популация. Това по което си приличат обаче е,\r\n                <br>\r\n                че независимо от вида на изследването резултатите се предоставят на средни стойности.\r\n                <br>\r\n                Това е стандарт в научния език. Но този стандарт може да се окаже пречка, когато искаме да приложим нещо на практика.\r\n                <br>\r\n                Ето какво имам предвид.\r\n                \r\n                <br><br><br>\r\n                \r\n                Нека разгледаме следната графа, която е взета от това проучване. На нея са изобразени резултатите на 53 участника, които тренират по една и съща програма в продължение на 9 седмици. Участниците изпълняват бедрени разгъвания 3 пъти на седмица, като в края на изследването се измерват един куп маркери, най-важния от който е напречното сечение на квадрицепсите.\r\n                <br>\r\n                Един поглед е достатъчен да заключим, че това е супер програма тъй като средно участниците повишават размера на квадрицепсите си с около 5.7%.\r\n                <br>\r\n                Но забележете и че 5 участника всъщност ГУБЯТ мускулна маса. В същото време един участник забелязва почти 20% увеличение в размера на квадрицепсите!\r\n                <br>\r\n                Защо тогава резултатите са позитивни?\r\n                <br>\r\n                Когато изследваме достатъчно голям брой хора (обикновено над 100, но зависи от популацията) получаваме нормално статистическо разпределение, което има формата на камбана.\r\n                \r\n                <br>\r\n                \r\n                При подобнo разпределение 68% от хората ще имат резултат, който се намира на 1 стандартно отклонение от средното за групата, а 95% от хората ще се намират на 2 стандартни отклонения.\r\n                <br>\r\n                При проучването от по-горе стандартното отклонение е около 17% от средното. Проблемът е, че всички искаме да сме със 17% НАД средния резултат за нашата извадка.\r\n                <br>\r\n                Въпросът за милион долара е как да изберем програма, която да ни предостави възможно най-добри резултати?\r\n                <br>\r\n                Това е и причината програмите от Интернет да работят супер за някои, не толкова добре за други и да са напълно трагични за трета група от хора.\r\n                <br>\r\n                В Интернет има страхотни програми като 5х5, 5-3-1 и стотици други, които може да използвате.\r\n                <br>\r\n                Но ако “нищо не работи за вас” и сте готови да се откажете от тренировките с тежести, дочетете тази книга преди да направите решението си окончателно.\r\n                <br>\r\n                Двамата със Стан сме изградили репутацията си до момента именно върху индивидуалния подход и в остатъка от тази книга ще ви споделя голяма част от знанията, които сме натрупали в последните години!\r\n                <br>\r\n                ГЕНЕТИЧЕН ПОТЕНЦИАЛ<br>\r\n                Освен статистическите проблеми свързани с изследванията и научния метод има още няколко неща, които правят резултатите трудни за интерпретация.\r\n                <br>\r\n                Може би и най-пренебрегваният фактор, що се отнася до програмиране – от тук нататък ще ползваме този термин вместо ‘съставяне на тренировъчен режим’ – е генетичния потенциал.\r\n                <br>\r\n                Това проучване например разкрива, че размера и вида на пелвиса е от огромно значение за възстановяването на глутеус максимус след смяна на тазобедрена става.\r\n                <br>\r\n                Но интересната за нас находка е, че един мъж има 484% по-голям глутеус от друг мъж от групата. Представете си, ако вашия тренировъчен партньор, има буквално 5 пъти по-големи ръце!\r\n                <br>\r\n                Това прави задачата на изследователите както и на тези от нас, които търсят практическото приложение доста трудна. Освен това генетичния потенциал може да има много различни измерения.\r\n                <br>\r\n                Най-значими са може би размера на вашия скелет, размера на китките и глезените и други белези като например телесно окосмение (нито задължителен нито достатъчен фактор).\r\n                <br>\r\n                Когато говорим за бодибилдинг архитектурата (форма, залавни места и др.) на самия мускул също има огромно значение! Аз и Стан сме отличен пример за това.\r\n                <br><br><br>\r\n                \r\n                \r\n                На тези две снимки сме почти идентични откъм тегло, процент подкожни мазнини и височина. Залавните места, и формата, на някои от мускулите на Стан го карат да изглежда много по-голям от мен. Вижте разликата в квадрицепсите ни! За сметка на това аз имам доста по-развит трапец без да го тренирам директно почти никога. Гени!\r\n                <br>\r\n                Отвъд първичните белези всичко се случва на клетъчно ниво и зависи от експресията и транскрипцията на определени гени и способността да бъдат активирани сателитните клетки в мускулните влакна.\r\n                <br>\r\n                Гените имат такова значение, че могат да направят разликата между никакъв и уникален прогрес! Горещо препоръчвам статията на Брет Контрерас по темата както и тази на Менно Хенселманс, тъй като те обхващат голяма част от разликите в генетичния потенциал.\r\n                <br>\r\n                НЕ СЪМ СЪЗДАДЕН ЗА ТОЗИ СПОРТ!<br>\r\n                В научната литература се забелязват и т.н. ‘non-responders’ – хора, при които тренировките с тежести не водят до никакви резултати. Може би сте чували и термина “hard-gainer” или човек, който трудно покачва ММ.\r\n                <br><br>\r\n                През последните години с напредъка на проучванията става все по-ясно, че няма нон-респондъри, но в действителност при някои хора резултатите идват АДСКИ трудно и зависят от количеството тренировъчен обем.\r\n                <br>\r\n                Едно проучване от особен интерес сравнява трениращи по генерална програма срещу индивидуализирана. Резултатите са доста интригуващи и показват, че 64% от хората трениращи по генерална програма имат прогрес,\r\n                <br>\r\n                за разлика от 100% при групата, която ползва индивидуализирана програма!\r\n                <br>\r\n                Друго проучване ползва панел от 15 гени, за да разпредели две групи от атлети спрямо техния фенотип. След това изследователите разделят хората спрямо това дали имат генетическо предразположение за тренировки с висок или нисък интензитет.\r\n                <br>\r\n                Изследователите провеждат две различни проучвания, като и в двете сравняват групи от хора трениращи по подходяща за тях програма, отговаряща на техния фенотип, или програма, която е противопоказна за тях. Сред нон-респондърите и тези с много слаби резултати 82% са от групите, които НЕ тренират спрямо своя фенотип.\r\n                <br>\r\n                ОТВЪД ГЕНИ И СПОРТ – КАКВО ПРАВИМ ИЗВЪН ЗАЛАТА, КОЕТО ВЛИЯЕ НА РЕЗУЛТАТИТЕ?\r\n                Но не всичко се дължи на гените и тренировките. В крайна сметка изследователите от нито едно проучване не “светят” на участниците и не знаят подробности за техния начин на живот.\r\n                <br>\r\n                Качеството на диетата и съня, както и количеството стрес на което са подложени тези участници отвъд рамките на проучванията могат да имат огромен и внушителен ефект!\r\n                <br>\r\n                За жалост е изключително скъпо да се проведе дългосрочно проучване, в което тези фактори да се изолират и уеднаквят за всички участници.\r\n                <br>\r\n                Много често качеството и придържането към диетата, дори в проучвания, чиято цел е изследване на телесната композиция, се оценява на базата на дневници, които участниците трябва да поддържат самостоятелно.\r\n                <br>\r\n                Веднъж на седмица или две, участниците имат среща с диетолог, който разглежда хранителните им дневници.\r\n                <br>\r\n                \r\n                <br><br>\r\n                Много често чуваме и хора да се оправдават, че “метаболизма ми е повреден” и “не мога да качвам/свалям, защото имам бърз/бавен метаболизъм”.\r\n                <br>\r\n                Първо ви съветвам да прочетете статията ми за метаболизма, за да разберете как работи той.\r\n                <br>\r\n                Второ ще оставя един цитат от статията си за съня, който най-ясно демонстрира защо съня може да е в основата на липсващите резултати на голяма част от хората и как недоспиването наистина може да “забави” вашия метаболизъм:\r\n                <br>\r\n                Едно от най-добрите проучвания по темата сравнява 8.5 часа сън и 5.5 часа сън в продължение на 14 дневен калориен дефицит. Резултатите са повече от интригуващи – групата, която е лишена от сън, гори 55% по-малко мазнини и 60% повече мускулна маса за всеки загубен килограм!\r\n                <br>\r\n                Няма как да изолираме подобни фактори, а те имат страхотен ефект върху крайните резултати!\r\n                <br>\r\n                КАК ДА ПОСТИГНА РЕЗУЛТАТИ?\r\n                <br><br>Основното нещо, което искам да предам на всеки един от вас е, че НЕ трябва да ползвате “липсата на гени”, за оправдание. Както споделих по-рано, дори при нон-респондърите се забелязва ефект, но той е много слаб.\r\n                <br>\r\n                Ако ви липсват резултати, обърнете внимание на съня и диетата си, след което се опитайте да овладеете стреса в ежедневието! Дори това да не доведе до по-добри резултати, със сигурност ще увеличи качеството на живота ви многократно!\r\n                <br>\r\n                Факторите които са от значение са прекалено много, за да създадем унифициран модел. Но за сметка на това количеството научно-потвърдена информация расте с всеки изминал ден!\r\n                <br>\r\n                Макар и тази наука да е нова, засега е произвела много различни подходи, които все пак имат някаква научна подкрепа, с които можете да експериментирате, докато не намерите правилния за вас подход!\r\n                <br>\r\n                За щастие този спорт е маратон, а не спринт. Дори резултатите да идват много, много бавно, тренировките с тежести имат редица предимства, които не са за изпускане.\r\n                <br>\r\n                Тази статия е увод към една книга, в която описах още по-подробно защо няма такова нещо като най-добра тренировъчна програма.\r\n        </div>\r\n        <br><br>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                       \r\n                               \r\n           </div>\r\n        </div>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/life-style-component/new-article/life1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Life1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Life1Component = /** @class */ (function () {
    function Life1Component(_service) {
        this._service = _service;
    }
    Life1Component.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    Life1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'life1',
            template: __webpack_require__("./src/app/articles/life-style-component/new-article/life1.component.html"),
            styles: [__webpack_require__("./src/app/articles/life-style-component/new-article/life1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], Life1Component);
    return Life1Component;
}());



/***/ }),

/***/ "./src/app/articles/workout-component/workout.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\n  a:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }\r\n\r\n  .from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n  .col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n  .content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}"

/***/ }),

/***/ "./src/app/articles/workout-component/workout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content from-top content\">\r\n\r\n                <h1>Exercises. </h1>\r\n                <h2>We can give you many exercises. You should test them,<br> work hard and see what works best for you</h2>\r\n                <br>\r\n                <br>\r\n                <ul class=\"list-group\">\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life1\">Should we find PT?</a>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life2\">What is the perfect program?</a>\r\n                        </li>\r\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\" routerLink=\"/life3\">Bigger biceps?</a>\r\n                        </li>\r\n                </ul>\r\n                <br><br>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                               \r\n                                        <img class=\"rounded\" src=\"assets/workout1.jpg\" alt=\"New York\" width=100% height=\"300\">\r\n                   </div>\r\n                </div>\r\n        </div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/articles/workout-component/workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutComponent = /** @class */ (function () {
    function WorkoutComponent(_service) {
        this._service = _service;
    }
    WorkoutComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    WorkoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'workout',
            template: __webpack_require__("./src/app/articles/workout-component/workout.component.html"),
            styles: [__webpack_require__("./src/app/articles/workout-component/workout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], WorkoutComponent);
    return WorkoutComponent;
}());



/***/ }),

/***/ "./src/app/clients-component/clients.component.css":
/***/ (function(module, exports) {

module.exports = ".trainers {\r\n    padding:10px;\r\n    font-size: 30px;\r\n}\r\n\r\n.from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n.content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}"

/***/ }),

/***/ "./src/app/clients-component/clients.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"content from-top content\">\r\n        \r\n        <h1>Here are your clients. </h1>\r\n        <h2>Your job is to motivate them!</h2>\r\n</div>\r\n<div class=\"from-top\">\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/clients-component/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_trainer__ = __webpack_require__("./src/app/model/trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(_service) {
        this._service = _service;
        this.trainers = [new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Ivan", "08912912", 25, 3),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Gosho", "089324912", 28, 10),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Penka", "0885524912", 19, 1),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Petko", "089324912", 38, 15),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Ivan", "0875524912", 19, 2)];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'clients',
            template: __webpack_require__("./src/app/clients-component/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients-component/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/edit-program-component/edit-program.component.css":
/***/ (function(module, exports) {

module.exports = ".slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #ffa100;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #ffa100;\r\n    cursor: pointer;\r\n}\r\n\r\n.exCol {\r\n    margin: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit-program-component/edit-program.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Here you can set your new program</h1>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4 title\" *ngIf=\"stage == 1\">\r\n\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <h2>First tell us how many times per week you want to train.</h2>\r\n        <br>\r\n        <br>\r\n        <div class=\"slidecontainer\">\r\n            <input type=\"range\" min=\"1\" max=\"7\" value=\"50\" class=\"slider\" [(ngModel)]=\"timesPerWeek\" id=\"myRange\">\r\n\r\n            <br>\r\n            <h1>{{timesPerWeek}}</h1>\r\n            <button (click)=\"nextStage();\" class=\"btn btn-lg\">Next</button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    <div class=\"col-md-4 title\" *ngIf=\"stage == 2\">\r\n\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <button (click)=\"clickDay(0)\"  class=\"btn btn-lg\">Day 1</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[0]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 0);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(0)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n                   \r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n\r\n        <button (click)=\"clickDay(1)\" *ngIf=\"timesPerWeek > 1\"  class=\"btn btn-lg\">Day 2</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[1]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 1);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(1)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n        <button (click)=\"clickDay(2)\" *ngIf=\"timesPerWeek > 2\"  class=\"btn btn-lg\">Day 3</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[2]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 2);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(2)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n        <button (click)=\"clickDay(3)\" *ngIf=\"timesPerWeek > 3\"  class=\"btn btn-lg\">Day 4</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[3]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 3);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(3)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n                  \r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n        <button (click)=\"clickDay(4)\" *ngIf=\"timesPerWeek > 4\"  class=\"btn btn-lg\">Day 5</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[4]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 4);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(4)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n                   \r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n        <button (click)=\"clickDay(5)\" *ngIf=\"timesPerWeek > 5\"  class=\"btn btn-lg\">Day 6</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[5]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n            \r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 5);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(5)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n                   \r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n        <button (click)=\"clickDay(6)\" *ngIf=\"timesPerWeek > 6\"  class=\"btn btn-lg\">Day 7</button>\r\n        <br><br>\r\n        <div *ngIf=\"dayClicked[6]\">\r\n\r\n                <div *ngFor=\"let workout of workouts\">\r\n\r\n                        <div *ngFor=\"let exercise of workout.exercises\">\r\n                            <div class=\"row\">\r\n            \r\n                                <div class=\"col-m-3 exCol\">Name: {{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Sets: <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Reps: <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                    Weights: <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                                </div>\r\n                            </div>\r\n                            <button (click)=\"removeExercise(exercise.name, 6);\">Remove</button>\r\n                        <br><br>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                \r\n                    <button type=\"button\" class=\"btn  btn-lg\" (click)=\"addNewExercise(6)\" data-toggle=\"modal\" data-target=\"#myModal\">Add New Exercise</button>\r\n                    \r\n            <br><br>\r\n         \r\n        </div>\r\n        <br>\r\n       \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-program-component/edit-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modals_modal_service__ = __webpack_require__("./src/app/modals/modal-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_workout__ = __webpack_require__("./src/app/model/workout.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProgramComponent = /** @class */ (function () {
    function EditProgramComponent(modalService, _router, _service, profileService) {
        this.modalService = modalService;
        this._router = _router;
        this._service = _service;
        this.profileService = profileService;
        this.stage = 1;
        this.timesPerWeek = 4;
        this.workouts = [new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_5__model_workout__["a" /* Workout */]()];
        this.dayClicked = [false, false, false, false, false, false, false];
        this.exerciseToAddForDayClicked = [false, false, false, false, false, false, false];
        this.isActiveProfile = false;
    }
    EditProgramComponent.prototype.addNewExercise = function (index) {
        this.modalService.openModal(index, this.workouts);
    };
    EditProgramComponent.prototype.removeExercise = function (name, day) {
        this.workouts[day].exercises = this.workouts[day].exercises.filter(function (exercise) { return exercise.name != name; });
    };
    EditProgramComponent.prototype.clickDay = function (day) {
        this.exerciseName = "";
        this.exerciseReps = 0;
        this.exerciseSets = 0;
        this.exerciseWeights = 0;
        if (!this.dayClicked[day]) {
            for (var i = 0; i < 7; i++) {
                if (i == day) {
                    this.dayClicked[i] = true;
                }
                else {
                    this.dayClicked[i] = false;
                }
            }
        }
        else {
            this.dayClicked[day] = false;
        }
        this.exerciseToAddForDayClicked = [false, false, false, false, false, false, false];
    };
    EditProgramComponent.prototype.addExercise = function (day) {
        if (!this.exerciseToAddForDayClicked[day]) {
            this.exerciseToAddForDayClicked[day] = true;
        }
        else {
            this.exerciseToAddForDayClicked[day] = false;
        }
    };
    EditProgramComponent.prototype.nextStage = function () {
        this.stage++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EditProgramComponent.prototype, "isActiveProfile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], EditProgramComponent.prototype, "workouts", void 0);
    EditProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'edit-program',
            template: __webpack_require__("./src/app/edit-program-component/edit-program.component.html"),
            styles: [__webpack_require__("./src/app/edit-program-component/edit-program.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__modals_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_profile_service__["a" /* ProfileService */]])
    ], EditProgramComponent);
    return EditProgramComponent;
}());



/***/ }),

/***/ "./src/app/login-component/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n   \r\n    <div class=\"title\">\r\n       <h1>\r\n         Let me tell you something you already know. </h1><br>\r\n        \r\n         \"The world ain’t all sunshine and rainbows. \r\n        It’s a very mean and nasty place and I don’t care how tough you are it will beat you to your knees and keep you there permanently if you let it.     \r\n         You, me, or nobody is gonna hit as hard as life. \r\n         But it ain’t about how hard ya hit. It’s about how hard you can get hit and keep moving forward. \r\n        How much you can take and keep moving forward. That’s how winning is done! Now if you know what you’re worth then go out and get what you’re worth. But ya gotta be willing to take the hits, and not pointing fingers saying you ain’t where you wanna be because of him, or her, or anybody!\r\n         Cowards do that and that ain’t you! You’re better than that!\"  <br> <br>   <br>\r\n         <h6>Rocky Balboa’s Inspirational Speech To His Son. </h6>\r\n    </div>\r\n    <br>\r\n  <br> <br> <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"input-field col-sm-12\">\r\n                    <input [(ngModel)]=\"user.email\" id=\"email\" type=\"email\" class=\"validate\">\r\n                    <label for=\"email\">Email</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"input-field col-sm-12\">\r\n                    <input [(ngModel)]=\"user.password\" id=\"password\" type=\"password\" class=\"validate\">\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n            </div>\r\n            <span>{{errorMsg}}</span>\r\n        <button (click)=\"login()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Login</button>\r\n        </div>\r\n        <div class=\"loader\" *ngIf=\"!isLoaded\"></div>\r\n        <div class=\"col-md-4\">\r\n\r\n            <img class=\"rounded\" src=\"assets/chep.jpg\" alt=\"New York\" width=\"600\" height=\"500\">\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login-component/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */]('', '');
        this.errorMsg = '';
        this.isLoaded = false;
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
        else {
            location.reload();
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoaded = true;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("./src/app/login-component/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modals/edit-program-modal.css":
/***/ (function(module, exports) {

module.exports = ".exCol {\r\n    margin: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modals/edit-program-modal.html":
/***/ (function(module, exports) {

module.exports = "<div  id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <div class=\"modal-content\">\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-m-3 exCol\">\r\n                    Exercise: <br>\r\n                    <input placeHolder=\"Excercise\" [(ngModel)]=\"exercise.name\" type=\"text\">\r\n                </div>\r\n                <div class=\"col-m-3 exCol\">\r\n                    Sets: <br>\r\n                    <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.set\" type=\"number\">\r\n                </div>\r\n                <div class=\"col-m-3 exCol\">\r\n                    Reps: <br>\r\n                    <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.rep\" type=\"number\">\r\n                </div>\r\n                <div class=\"col-m-3 exCol\">\r\n                    Weights: <br>\r\n                    <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weight\" type=\"number\">\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button (click)=\"addNewExercise(index);\" data-dismiss=\"modal\" class=\"btn btn-lg\">Add</button>\r\n                <button type=\"button\" class=\"btn btn-lg\" (click)=\"close();\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n            <br>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modals/edit-program-modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProgramModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_workout__ = __webpack_require__("./src/app/model/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_exercise__ = __webpack_require__("./src/app/model/exercise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProgramModal = /** @class */ (function () {
    function EditProgramModal(activeModal) {
        this.activeModal = activeModal;
        this.workoutsChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* EventEmitter */]();
        this.workouts = [new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */]()];
    }
    EditProgramModal.prototype.ngOnInit = function () {
        this.exercise = new __WEBPACK_IMPORTED_MODULE_1__model_exercise__["a" /* Exercise */]("", 0, 0, 0);
    };
    EditProgramModal.prototype.addNewExercise = function (workoutNumber) {
        if (!this.workouts[workoutNumber].exercises) {
            this.workouts[workoutNumber].exercises = [];
        }
        this.workouts[workoutNumber].exercises.push(new __WEBPACK_IMPORTED_MODULE_1__model_exercise__["a" /* Exercise */](this.exercise.name, this.exercise.rep, this.exercise.set, this.exercise.weight));
        this.workoutsChange.emit(this.workouts);
        this.activeModal.dismiss(false);
    };
    EditProgramModal.prototype.close = function () {
        this.activeModal.dismiss(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], EditProgramModal.prototype, "workouts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], EditProgramModal.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* EventEmitter */])
    ], EditProgramModal.prototype, "workoutsChange", void 0);
    EditProgramModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'edit-program-modal',
            template: __webpack_require__("./src/app/modals/edit-program-modal.html"),
            styles: [__webpack_require__("./src/app/modals/edit-program-modal.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], EditProgramModal);
    return EditProgramModal;
}());



/***/ }),

/***/ "./src/app/modals/modal-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_program_modal__ = __webpack_require__("./src/app/modals/edit-program-modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(modalService) {
        this.modalService = modalService;
    }
    ModalService.prototype.openModal = function (index, workouts) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_1__edit_program_modal__["a" /* EditProgramModal */]);
        modalRef.componentInstance.workouts = workouts;
        modalRef.componentInstance.index = index;
        return modalRef.result;
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/model/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = /** @class */ (function () {
    function Exercise(name, rep, set, weight) {
        this.name = name;
        this.rep = rep;
        this.set = set;
        this.weight = weight;
    }
    return Exercise;
}());



/***/ }),

/***/ "./src/app/model/sleep.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sleep; });
var Sleep = /** @class */ (function () {
    function Sleep() {
    }
    return Sleep;
}());



/***/ }),

/***/ "./src/app/model/trainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trainer; });
var Trainer = /** @class */ (function () {
    function Trainer(name, phone, age, experience) {
        this.name = name;
        this.phone = phone;
        this.age = age;
        this.experience = experience;
    }
    return Trainer;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
        this.role = "client";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/workout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workout; });
var Workout = /** @class */ (function () {
    function Workout() {
        this.exercises = this.exercises;
    }
    return Workout;
}());



/***/ }),

/***/ "./src/app/personal-information-component/personal-information.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.block-container span { \r\n    display: block;\r\n    font-size: 24px;\r\n    padding-bottom: 4px;\r\n    padding-top: 20px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    background-color: #f1f1f1;\r\n    min-width: 280px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 16px;\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n.personalInformationTitle{\r\n    text-align: center;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.program{\r\n    font-size: 10px;\r\n}\r\n\r\n.exCol {\r\n    margin: 50px;\r\n}\r\n\r\n.training-padding{\r\n    padding-left: 100px; \r\n}"

/***/ }),

/***/ "./src/app/personal-information-component/personal-information.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div *ngIf=\"isActiveProfile\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 personalInformationTitle block-container\">\r\n            <h1>{{user.firstName}}  {{user.lastName}}</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 block-container\">\r\n\r\n            <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n\r\n        </div>\r\n        <div class=\"col-md-4 block-container\">\r\n\r\n            <span>\r\n                <b>Age</b>: {{user.age}}</span>\r\n            <span>\r\n                <b>Gender</b>: {{user.gender}}</span>\r\n            <span>\r\n                <b>Height</b>: {{user.height}}</span>\r\n            <span>\r\n                <b>Weight</b>: {{user.weight}}</span>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 block-container\">\r\n            <span>\r\n                <b>Calories per Day</b>: 2600</span>\r\n            <span>\r\n                <b>Proteins per Day</b>: 160</span>\r\n            <span>\r\n                <b>Carbs per Day</b>: 200</span>\r\n            <span>\r\n                <b>Fats per Day</b>: 100</span>\r\n            <span>\r\n                <b>Vitamin C per Day</b>: 300 mg</span>\r\n            <span>\r\n                <b>Magnesium per Day</b>: 80 mg</span>\r\n            <span>\r\n                <b>Vitamin D per Day</b>: 4 ug</span>\r\n            <span>\r\n                <b>Vitamin B12 per Day</b>: 1 ug</span>\r\n            <span>\r\n                <b>Omega 3 per Day</b>: 6 ug</span>\r\n        </div>\r\n        <div class=\"col-md-6 block-container\">\r\n                <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\"> \r\n                <br>\r\n                <br>\r\n                <br>\r\n                <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\"> \r\n                <br>\r\n                <br>\r\n                <br>\r\n                <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\"> \r\n            </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br> <h3>Workouts </h3>\r\n    <button class=\"btn\" (click)=\"setIsActive()\">Change Program</button>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div class=\"row program\">\r\n       \r\n            <div *ngFor=\"let workout of workouts \" class=\"training-padding\">\r\n                <br>\r\n                <b>Training Day</b>\r\n                    <div *ngFor=\"let exercise of workout.exercises\">\r\n        \r\n                            <div class=\"row\">\r\n                                    <div class=\"col-m-3 exCol\">Exercise</div>\r\n                                    <div class=\"col-m-3 exCol\">\r\n                                          Reps  \r\n                                    </div>\r\n                                    <div class=\"col-m-3 exCol\">\r\n                                            Sets\r\n                                    </div>\r\n                                    <div class=\"col-m-3 exCol\">\r\n                                            Weight \r\n                                    </div>\r\n                            </div>\r\n                        <div class=\"row\">\r\n                                <div class=\"col-m-3 exCol\">{{exercise.name}}</div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                        {{exercise.rep}}  \r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                        {{exercise.set}} \r\n                                </div>\r\n                                <div class=\"col-m-3 exCol\">\r\n                                        {{exercise.weight}} \r\n                                </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <br>\r\n        <br>  <br>\r\n        <br>\r\n        <button class=\"btn\">Last Month</button>\r\n        <br>\r\n        <br>\r\n</div>\r\n<div *ngIf=\"!isActiveProfile\">\r\n<edit-program [(workouts)]=\"workouts\"  [(isActiveProfile)]=\"isActiveProfile\" ></edit-program>\r\n</div>\r\n<button *ngIf=\"!isActiveProfile\" type=\"button\" (click)=\"goToProfile();\" class=\"btn  btn-lg\" >Go back to profile</button>\r\n</div>"

/***/ }),

/***/ "./src/app/personal-information-component/personal-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_workout__ = __webpack_require__("./src/app/model/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalInformationComponent = /** @class */ (function () {
    function PersonalInformationComponent(_service, profileService) {
        this._service = _service;
        this.profileService = profileService;
        this.date = new Date();
        this.workouts = [new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */]()];
        this.isActiveProfile = true;
    }
    PersonalInformationComponent.prototype.ngOnInit = function () {
        this.user = this.profileService.getUserFromLocalStorage();
        this._service.checkCredentials();
    };
    PersonalInformationComponent.prototype.setIsActive = function () {
        this.isActiveProfile = false;
    };
    PersonalInformationComponent.prototype.goToProfile = function () {
        this.isActiveProfile = true;
        console.log(this.isActiveProfile);
    };
    PersonalInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'personal-information',
            template: __webpack_require__("./src/app/personal-information-component/personal-information.component.html"),
            styles: [__webpack_require__("./src/app/personal-information-component/personal-information.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_profile_service__["a" /* ProfileService */]])
    ], PersonalInformationComponent);
    return PersonalInformationComponent;
}());



/***/ }),

/***/ "./src/app/registration-component/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"title\">\r\n        <h1>Welcome buddy!</h1>\r\n        <br>\r\n        <h2>Today you will start a journey.</h2>\r\n        <br>\r\n        <h3>Your final destination is the best version of yourself.</h3>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.firstName\" name=\"namef\" id=\"namef\" type=\"text\" class=\"validate\">\r\n                        <label for=\"namef\">First Name</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.lastName\" id=\"namel\" name=\"namel\" type=\"text\" class=\"validate\">\r\n                        <label for=\"namel\">Last Name</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.age\" id=\"age\" name=\"age\" type=\"number\" class=\"validate\">\r\n                        <label for=\"age\">Age</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.weight\" id=\"weight\" name=\"weight\" type=\"number\" class=\"validate\">\r\n                        <label for=\"weight\">Weight</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.height\" id=\"height\" name=\"height\" type=\"number\" class=\"validate\">\r\n                        <label for=\"email\">Height</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.email\" id=\"email\" name=\"email\" type=\"email\" class=\"validate\">\r\n                        <label for=\"email\">Email</label>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required [(ngModel)]=\"user.password\" id=\"password\" name=\"password\" type=\"password\" class=\"validate\">\r\n                        <label for=\"password\">Password</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"input-field col-sm-12\">\r\n                        <input required id=\"passwordc\" [(ngModel)]=\"confirmedPassword\" name=\"passwordc\" type=\"password\" class=\"validate\">\r\n                        <label for=\"password\">Confirm Password</label>\r\n                    </div>\r\n                </div>\r\n                <span>{{errorMsg}}</span>\r\n                <input type=\"submit\" (click)=\"registrate()\" class=\"btn waves-effect waves-light\" name=\"submit\" [disabled]=\"!isValidData()\" value=\"Start\">\r\n            </form>\r\n\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n\r\n            <img class=\"rounded\" src=\"assets/reg.jpg\" alt=\"New York\" width=\"500\" height=\"500\">\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/registration-component/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_router, _service, profileService) {
        this._router = _router;
        this._service = _service;
        this.profileService = profileService;
        this.confirmedPassword = '';
        this.user = new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */]('', '');
        this.errorMsg = '';
    }
    RegistrationComponent.prototype.registrate = function () {
        this._service.addUser(this.user.email, this.user.password);
        this.profileService.setUser(this.user);
        this._router.navigate(['technologies']);
    };
    RegistrationComponent.prototype.isValidData = function () {
        console.log(this.user.age);
        if (this.user.firstName == '' || this.user.lastName == '' || this.user.email == ''
            || this.confirmedPassword == '' || !this.user.age
            || !this.user.weight || !this.user.height || this.user.password == '') {
            return false;
        }
        if (this.confirmedPassword != '' && this.user.password != '' && this.confirmedPassword != this.user.password) {
            return false;
        }
        return true;
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'registration',
            template: __webpack_require__("./src/app/registration-component/registration.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_profile_service__["a" /* ProfileService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_router) {
        this._router = _router;
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */]('admin@admin.com', 'adm9'),
            new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */]('user1@gmail.com', 'a23')
        ];
        this.usersCount = 2;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.addUser = function (username, password) {
        this.users[this.usersCount++] = new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */](username, password);
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = this.users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser.email);
            localStorage.setItem("role", authenticatedUser.role);
            this._router.navigate(['technologies']);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") == null) {
            this._router.navigate(['login']);
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(_router) {
        this._router = _router;
    }
    ProfileService.prototype.getUserFromLocalStorage = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_0__model_user__["a" /* User */]('', '');
        user.age = Number(localStorage.getItem("age"));
        user.weight = Number(localStorage.getItem("weight"));
        user.height = Number(localStorage.getItem("height"));
        user.firstName = localStorage.getItem("firstName");
        user.lastName = localStorage.getItem("lastName");
        user.email = localStorage.getItem("email");
        user.gender = localStorage.getItem("gender");
        return user;
    };
    ProfileService.prototype.setUser = function (user) {
        localStorage.setItem('age', String(user.age));
        localStorage.setItem('weight', String(user.weight));
        localStorage.setItem('height', String(user.height));
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('email', user.email);
        localStorage.setItem('gender', user.gender);
        localStorage.setItem('role', user.role);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/workout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_workout__ = __webpack_require__("./src/app/model/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_exercise__ = __webpack_require__("./src/app/model/exercise.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutService = /** @class */ (function () {
    function WorkoutService() {
    }
    WorkoutService.prototype.generateTraningDay = function () {
        var workout = new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */]();
        workout.exercises = [new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Squat", 12, 4, 90), new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Bench", 12, 4, 90),
            new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("RMD", 12, 4, 90)];
        return workout;
    };
    WorkoutService.prototype.generateWorkOutReport = function () {
        var workouts = [new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */](), new __WEBPACK_IMPORTED_MODULE_0__model_workout__["a" /* Workout */]()];
        workouts[0].exercises = [new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Squat", 12, 4, 90), new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Bench", 12, 4, 90),
            new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("RMD", 12, 4, 90)];
        workouts[1].exercises = [new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Squat", 12, 4, 92), new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Bench", 12, 4, 80),
            new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("RMD", 12, 4, 95)];
        workouts[2].exercises = [new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Squat", 12, 4, 92), new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Bench", 12, 4, 80),
            new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("RMD", 12, 4, 95)];
        workouts[3].exercises = [new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Squat", 12, 4, 92), new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("Bench", 12, 4, 80),
            new __WEBPACK_IMPORTED_MODULE_2__model_exercise__["a" /* Exercise */]("RMD", 12, 4, 95)];
        return workouts;
    };
    WorkoutService.prototype.getTrainingDay = function () {
        return this.generateTraningDay();
    };
    WorkoutService.prototype.getWorkoutReport = function () {
        return this.generateWorkOutReport();
    };
    WorkoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WorkoutService);
    return WorkoutService;
}());



/***/ }),

/***/ "./src/app/settings-component/settings.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.block-container span { \r\n    display: block;\r\n    font-size: 24px;\r\n    padding-bottom: 4px;\r\n    padding-top: 20px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.textQuotes {\r\n    margin-left: 50px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    background-color: #f1f1f1;\r\n    min-width: 280px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 16px;\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n.personalInformationTitle{\r\n    text-align: center;\r\n    margin-bottom: 70px;\r\n}"

/***/ }),

/***/ "./src/app/settings-component/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 personalInformationTitle block-container\">\r\n            <h1>Profile Settings.</h1>\r\n            <h2> Here is where you can change your personal information</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n            <form action=\"/action_page.php\">\r\n                <input type=\"file\" name=\"pic\" accept=\"image/*\">\r\n\r\n              </form>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <form action=\"/action_page.php\">\r\n            <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n           \r\n                <input type=\"file\" name=\"pic\" accept=\"image/*\">\r\n              </form>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n            <form action=\"/action_page.php\">\r\n                <input type=\"file\" name=\"pic\" accept=\"image/*\">\r\n      \r\n              </form>\r\n        </div>\r\n        <div class=\"col-md-4\" class=\"block-container\">\r\n\r\n            <span>\r\n                <b>Age: </b>:<br>\r\n                <input [(ngModel)]=\"user.age\" type=\"number\">\r\n                <br>\r\n            </span>\r\n\r\n            <span>\r\n                <b>Gender</b>:<br>\r\n             <input [(ngModel)]=\"user.gender\"  type=\"text\">\r\n            </span>\r\n            <span>\r\n                <b>Height</b>:<br> <input [(ngModel)]=\"user.height\"  type=\"number\"></span>\r\n            <span>\r\n                <b>Weight</b>:<br>  <input [(ngModel)]=\"user.weight\" type=\"number\"></span>\r\n            <span>\r\n                <b>First Name</b>:<br>  <input [(ngModel)]=\"user.firstName\" type=\"text\"></span>\r\n            <span>\r\n                <b>Last Name</b>:<br>  <input [(ngModel)]=\"user.lastName\" type=\"text\"></span>\r\n            <span>\r\n                <b>Are you trainer?</b><br> <input type=\"checkbox\"\r\n                name=\"option\"\r\n                value=\"{{option.value}}\"\r\n                [(ngModel)]=\"option.checked\"/>No\r\n            </span>\r\n            \r\n            <br>\r\n            <br>\r\n            <input type=\"submit\" (click)=\"changeInformation()\"  class=\"btn waves-effect waves-light\" name=\"submit\"  value=\"Change\">\r\n        </div>\r\n\r\n    </div>\r\n    <br>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/settings-component/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_service, profileService) {
        this._service = _service;
        this.profileService = profileService;
        this.option = { name: 'Trainer', value: '1', checked: true };
        this.ageActivated = false;
    }
    SettingsComponent.prototype.changeInformation = function () {
        if (this.option.checked == false) {
            console.log("trainer");
            this.user.role = "trainer";
        }
        else {
            this.user.role = "client";
        }
        this.profileService.setUser(this.user);
        location.reload();
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.user = this.profileService.getUserFromLocalStorage();
        this._service.checkCredentials();
    };
    SettingsComponent.prototype.activateAge = function () {
        if (this.ageActivated == false) {
            this.ageActivated = true;
        }
        else {
            this.ageActivated = false;
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'settings',
            template: __webpack_require__("./src/app/settings-component/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings-component/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_profile_service__["a" /* ProfileService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/sleep-component/sleep.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"title\">\r\n                <h1>Sleep Analysis</h1>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                        <form>\r\n                                <div class=\"row\">\r\n                                        <div class=\"input-field col-sm-12\">\r\n                                                <input required [(ngModel)]=\"sleep.fallAsleep\" id=\"fallAsleep\" name=\"fallAsleep\" type=\"number\" class=\"validate\">\r\n                                                <label for=\"fallAsleep\">Time fell asleep</label>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                        <div class=\"input-field col-sm-12\">\r\n                                                <input required [(ngModel)]=\"sleep.wakeUp\" id=\"wakeUp\" name=\"wakeUp\" type=\"number\" class=\"validate\">\r\n                                                <label for=\"wakeUp\">Time wake up</label>\r\n                                        </div>\r\n                                </div>\r\n\r\n                                <input [disabled]=\"!isValidData()\" type=\"submit\" (click)=\"sleepAnalyze()\" class=\"btn waves-effect waves-light\" name=\"submit\"\r\n                                        value=\"Analyze My Sleep\">\r\n\r\n                                <h1>{{sleepAnalysisMessage}}</h1>\r\n                        </form>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n\r\n                        <img class=\"rounded\" src=\"assets/sleep.jpg\" alt=\"New York\" width=\"550\" height=\"400\">\r\n                </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/sleep-component/sleep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profile_service__ = __webpack_require__("./src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_sleep__ = __webpack_require__("./src/app/model/sleep.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SleepComponent = /** @class */ (function () {
    function SleepComponent(_router, _service, profileService) {
        this._router = _router;
        this._service = _service;
        this.profileService = profileService;
        this.sleep = new __WEBPACK_IMPORTED_MODULE_4__model_sleep__["a" /* Sleep */]();
        this.sleepAnalysisMessage = '';
    }
    SleepComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    SleepComponent.prototype.sleepAnalyze = function () {
        var differenceSleep = this.sleep.wakeUp - this.sleep.fallAsleep;
        if (differenceSleep < 0) {
            differenceSleep += 24;
        }
        if (differenceSleep < 6) {
            this.sleepAnalysisMessage = "Sleep more, definitely!";
        }
        else if (differenceSleep < 10) {
            this.sleepAnalysisMessage = "Perfect sleep time!";
        }
        else {
            this.sleepAnalysisMessage = "Stop sleeping, you lazy person!!";
        }
    };
    SleepComponent.prototype.isValidData = function () {
        if (!this.sleep.fallAsleep || !this.sleep.wakeUp) {
            return false;
        }
        return true;
    };
    SleepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'sleep',
            template: __webpack_require__("./src/app/sleep-component/sleep.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_profile_service__["a" /* ProfileService */]])
    ], SleepComponent);
    return SleepComponent;
}());



/***/ }),

/***/ "./src/app/technologies-component/technologies.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n\r\na {\r\n    color:black;\r\n    font-family: 'PT Sans', Arial, sans-serif;\r\n    padding:7px;\r\n  }\r\n\r\na:hover{\r\n    text-decoration: none!important; \r\n    color: #46ADC6 !important;\r\n    cursor: pointer!important;\r\n  }"

/***/ }),

/***/ "./src/app/technologies-component/technologies.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n        <div class=\"content\">\r\n\r\n                <h2>Some infinities are bigger than other infinities</h2>\r\n        </div>\r\n        <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n                <!-- Indicators -->\r\n                <ul class=\"carousel-indicators\">\r\n                        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n                </ul>\r\n\r\n                <!-- The slideshow -->\r\n                <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                                <img src=\"assets/fitness-goals-achieve_feature.png\" alt=\"Los Angeles\" width=\"100\" height=\"50\">\r\n                                <div class=\"carousel-caption\">\r\n                                        <h3>Sleep faster</h3>\r\n                                        <p>Do it now!\r\n                                        </p>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                                <img src=\"assets/fitness-listing-maniac-1400x700.png\" alt=\"Chicago\" width=\"100\" height=\"50\">\r\n                                <div class=\"carousel-caption\">\r\n                                        <h3>Start</h3>\r\n                                        <p>Working on youself</p>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                                <img src=\"assets/woman-running-on-treadmill.jpg\" alt=\"New York\" width=\"100\" height=\"50\">\r\n                                <div class=\"carousel-caption\">\r\n                                        <h3>Just do it</h3>\r\n                                        <p>Keep smiling!</p>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <!-- Left and right controls -->\r\n                <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n                        <span class=\"carousel-control-prev-icon\"></span>\r\n                </a>\r\n                <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n                        <span class=\"carousel-control-next-icon\"></span>\r\n                </a>\r\n        </div>\r\n        <br>\r\n        <div class=\"loader\" *ngIf=\"!isLoaded\"></div>\r\n        <ul class=\"list-group\" >\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\"   routerLink=\"/workout\">Exercises</a>\r\n                        <span class=\"badge badge-primary badge-pill\">14</span>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\"   routerLink=\"/food\"> Food and Vitamins</a>\r\n                        <span class=\"badge badge-primary badge-pill\">2</span>\r\n                </li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n                                <a class=\"btn btn-link\"  routerLink=\"/lifestyle\">Lifestyle</a>\r\n                        <span class=\"badge badge-primary badge-pill\">1</span>\r\n                </li>\r\n        </ul>\r\n        <br>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/technologies-component/technologies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechnologiesComponent = /** @class */ (function () {
    function TechnologiesComponent(_service) {
        this._service = _service;
        this.title = 'personal information';
        this.isLoaded = false;
    }
    TechnologiesComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.isLoaded = true;
    };
    TechnologiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'technologies',
            template: __webpack_require__("./src/app/technologies-component/technologies.component.html"),
            styles: [__webpack_require__("./src/app/technologies-component/technologies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], TechnologiesComponent);
    return TechnologiesComponent;
}());



/***/ }),

/***/ "./src/app/trainers-component/trainers.component.css":
/***/ (function(module, exports) {

module.exports = ".trainers {\r\n    font-size: 30px;\r\n}\r\n\r\n.from-top{\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n}\r\n\r\n.col-padding{\r\n    padding-left:50px;\r\n}\r\n\r\n.content {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 50px\r\n}\r\n\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    -webkit-transition: .2s;\r\n    -webkit-transition: opacity .2s;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #ffa100;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #ffa100;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/trainers-component/trainers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content from-top content\">\r\n\r\n    <h1>We have some of the greatest trainers. </h1>\r\n    <h2>Choose the best option for you!</h2>\r\n</div>\r\n<div class=\"from-top\">\r\n    <div *ngFor=\"let trainer of trainers \">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 \">\r\n                <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n            </div>\r\n            <div class=\"col-md-4 trainers\">\r\n                <div class=\"row \">\r\n                    <div class=\"col-m-12 \">Name: {{trainer.name}}</div>\r\n                </div>\r\n                <div class=\"row \">\r\n                    <div class=\"col-m-12 \">\r\n                        Phone: {{trainer.phone}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"row \">\r\n                    <div class=\"col-m-12 \">\r\n                        Age: {{trainer.age}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"row \">\r\n                    <div class=\"col-m-12 \">\r\n                        Experience: {{trainer.experience}}\r\n                    </div>\r\n                </div>\r\n               \r\n                <div class=\"row\">\r\n                    <div class=\"col-m-12\">\r\n                        <button type=\"button\" class=\"btn  btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Contact {{trainer.name}}</button>\r\n                        <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n                          <div class=\"modal-dialog\">\r\n                       \r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\"> \r\n                                 <h4 class=\"modal-title\">Send message</h4>\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                              </div>\r\n                              <div class=\"modal-body\">\r\n                                   <input placeholder=\"Type here...\" [ngModel]=\"message\">\r\n                              </div>\r\n                              <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-default\" (click)=\" contactTrainer()\" data-dismiss=\"modal\">Send</button>\r\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                              </div>\r\n                              Rate Trainer:\r\n                              <input type=\"range\" min=\"1\" max=\"7\" value=\"50\" class=\"slider\" [(ngModel)]=\"timesPerWeek\" id=\"myRange\">\r\n                            <br>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n            </div>\r\n            <div class=\"col-md-4 \">\r\n                    <img src=\"assets/1.jpg\" class=\"img-rounded\" alt=\"img\" width=\"304\" height=\"236\">\r\n                </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/trainers-component/trainers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_trainer__ = __webpack_require__("./src/app/model/trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainersComponent = /** @class */ (function () {
    function TrainersComponent(_service) {
        this._service = _service;
        this.trainers = [new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Ivan", "08912912", 25, 3),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Gosho", "089324912", 28, 10),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Penka", "0885524912", 19, 1),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Petko", "089324912", 38, 15),
            new __WEBPACK_IMPORTED_MODULE_2__model_trainer__["a" /* Trainer */]("Ivan", "0875524912", 19, 2)];
    }
    TrainersComponent.prototype.contactTrainer = function () {
        alert("This trainer is offline! \n You will get answer as soon as possible.");
        this.message = "";
    };
    TrainersComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    TrainersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'trainers',
            template: __webpack_require__("./src/app/trainers-component/trainers.component.html"),
            styles: [__webpack_require__("./src/app/trainers-component/trainers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_login_service__["a" /* AuthenticationService */]])
    ], TrainersComponent);
    return TrainersComponent;
}());



/***/ }),

/***/ "./src/app/work-component/work.component.css":
/***/ (function(module, exports) {

module.exports = ".exCol {\r\n    margin: 50px;\r\n}\r\n\r\n.workoutTitle{\r\n    text-align: center;\r\n}\r\n\r\n.page{\r\n    margin-bottom: 10%; \r\n    padding-bottom: 10%; \r\n}\r\n\r\n.timer{\r\n\r\n  padding-top:200px;\r\n  padding-left:100px;\r\n}\r\n\r\n.timer p{\r\n    font-size: 30px;\r\n    padding-top:160px;\r\n    padding-left:100px;\r\n  }"

/***/ }),

/***/ "./src/app/work-component/work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n    <div class=\"title workoutTitle\">\r\n        <h1>Training</h1>\r\n    </div>\r\n    <div class=\"timer row\" *ngIf=\"!isStarted\">\r\n\r\n        <div class=\"col-md-4\">\r\n            <p>Ok, now press the timer and your training will begin.\r\n                Hustle hard!\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md4\">\r\n\r\n\r\n            <img src=\"assets/5_timer_time_count_game_design_flat_icon-512.png\" (click)=\"start();\" class=\"img-rounded\" alt=\"img\" width=\"300px\"\r\n                height=\"300px\">\r\n        </div>\r\n    </div>\r\n    <div class=\"content\" *ngIf=\"isStarted\">\r\n        <h2>Day A</h2>\r\n        <p>{{date | date:'yyyy-MM-dd'}}</p>\r\n\r\n        <div *ngFor=\"let workout of workouts\">\r\n\r\n            <div *ngFor=\"let exercise of workout.exercises\">\r\n\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-m-3 exCol\">{{exercise.name}}</div>\r\n                    <div class=\"col-m-3 exCol\">\r\n                        <input placeHolder=\"Sets\" [(ngModel)]=\"exercise.sets\" type=\"number\">\r\n                    </div>\r\n                    <div class=\"col-m-3 exCol\">\r\n                        <input placeHolder=\"Reps\" [(ngModel)]=\"exercise.reps\" type=\"number\">\r\n                    </div>\r\n                    <div class=\"col-m-3 exCol\">\r\n                        <input placeHolder=\"Weights\" [(ngModel)]=\"exercise.weights\" type=\"number\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <img src=\"assets/5_timer_time_count_game_design_flat_icon-512.png\"  (click)=stop(); class=\"img-rounded\" alt=\"img\" width=\"100px\" height=\"100px\"> \r\n        <p>Finish session</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/work-component/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_workout_service__ = __webpack_require__("./src/app/services/workout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_workout__ = __webpack_require__("./src/app/model/workout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkComponent = /** @class */ (function () {
    function WorkComponent(_service, workoutService) {
        this._service = _service;
        this.workoutService = workoutService;
        this.date = new Date();
        this.isStarted = false;
        this.workouts = [this.workoutService.getTrainingDay(), new __WEBPACK_IMPORTED_MODULE_2__model_workout__["a" /* Workout */]()];
    }
    WorkComponent.prototype.start = function () {
        this.isStarted = true;
    };
    WorkComponent.prototype.stop = function () {
        this.isStarted = false;
    };
    WorkComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'work',
            template: __webpack_require__("./src/app/work-component/work.component.html"),
            styles: [__webpack_require__("./src/app/work-component/work.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__services_workout_service__["a" /* WorkoutService */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map