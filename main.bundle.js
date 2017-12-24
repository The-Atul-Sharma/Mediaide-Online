webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about.us/about.us.module": [
		"../../../../../src/app/about.us/about.us.module.ts",
		"about.us.module"
	],
	"./home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	],
	"./info.pages/info.page.module": [
		"../../../../../src/app/services/info.pages/info.page.module.ts",
		"info.page.module",
		"common"
	],
	"./quotation/quotation.module": [
		"../../../../../src/app/quotation/quotation.module.ts",
		"quotation.module"
	],
	"./services/services.module": [
		"../../../../../src/app/services/services.module.ts",
		"services.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/about.us/about.us.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/about.us/about.us.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUs = (function () {
    function AboutUs() {
    }
    AboutUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-us',
            template: __webpack_require__("../../../../../src/app/about.us/about.us.html"),
        })
    ], AboutUs);
    return AboutUs;
}());



/***/ }),

/***/ "../../../../../src/app/app.api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CookieService } from 'ngx-cookie';


var CommonAPIService = (function () {
    function CommonAPIService(http, _cmnSvc) {
        this.http = http;
        this._cmnSvc = _cmnSvc;
        this.ApiUrl = 'http://192.168.1.9:8000/';
        this.userDetail = new __WEBPACK_IMPORTED_MODULE_4__app_model__["c" /* UserDetail */]();
    }
    // get(endpoint: string): Observable<any> {
    //     return this.http.get(this.ApiUrl + endpoint).map(res => 
    //         res.json()
    //     );
    // }
    CommonAPIService.prototype.getCookie = function () {
        this._cmnSvc.getCookie();
    };
    CommonAPIService.prototype.get = function (endpoint) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(this.ApiUrl + endpoint);
    };
    // post(endpoint: string, data: any): Observable<any> {
    //     debugger;
    //     return this.http.post(this.ApiUrl + endpoint, data).map(res => {
    //         res.json()});
    // }
    CommonAPIService.prototype.post = function (endpoint, data) {
        // debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.ApiUrl + endpoint, data, options);
    };
    ;
    CommonAPIService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    CommonAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]])
    ], CommonAPIService);
    return CommonAPIService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContainer {\n    position: relative;\n    top: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *blockUI class=\"container-fluid\">\n    <header></header>\n    <simple-notifications [options]=\"options\"></simple-notifications>\n    <div class=\"mainContainer\">\n        <router-outlet></router-outlet>\n    </div>\n    <footer></footer>-->\n<div *blockUI class=\"container-fluid\" id=\"container\">\n    <header></header>\n    <simple-notifications [options]=\"options\"></simple-notifications>\n    <div id=\"body\" class=\"mainContainer\">\n        <router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\n    </div>\n    <div id=\"footer\">\n        <footer></footer>\n    </div>\n</div>\n<!--</div>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, commanService) {
        this.router = router;
        this.commanService = commanService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.commanService.startBlockUI('Loading');
        // this.router.navigate(['']);
        this.commanService.stopBlockUI();
    };
    AppComponent.prototype.onDeactivate = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TokenStruct; });
/* unused harmony export QuotationData */
/* unused harmony export dataList */
/* unused harmony export Password */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return contactUsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return forgotPasswordData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return enquiryFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return appointmentReason; });
/* unused harmony export isAuthorized */
var UserDetail = (function () {
    function UserDetail() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirm_password = '';
        this.phone = null;
        this.dob = new Date();
        this.country = '';
        this.gender = '';
        this.address = '';
        this.agree = false;
    }
    UserDetail.prototype.setUserDetail = function (obj) {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.dob = obj.dob;
        this.country = obj.name;
        this.gender = obj.gender;
        this.address = obj.address;
    };
    return UserDetail;
}());

;
var LogInData = (function () {
    function LogInData() {
        {
            this.email = '';
            this.password = '';
            this.keepLoggedIn = false;
        }
    }
    LogInData.prototype.setLoginDetails = function (obj) {
        this.email = obj.email;
        this.password = obj.password;
        this.keepLoggedIn = obj.keepLoggedIn;
    };
    return LogInData;
}());

;
var TokenStruct = (function () {
    function TokenStruct() {
        this.key = 'access_token';
        this.value = '';
        this.isRefresh = false;
    }
    TokenStruct.prototype.isValueSet = function () {
        if (this.value === 'undefined' || !this.value) {
            return false;
        }
        else {
            return true;
        }
    };
    return TokenStruct;
}());

;
var OtherCost = (function () {
    function OtherCost() {
        this.airline = false;
        this.food = false;
        this.visa = false;
        this.hotel = false;
        this.other = false;
    }
    return OtherCost;
}());
var QuotationData = (function () {
    function QuotationData() {
        this.country = '';
        this.treatmentType = '';
        this.patientNumber = '';
        this.other = new OtherCost();
    }
    return QuotationData;
}());

var dataList = {
    'countryList': [
        'India', 'Australia', 'Paris', 'London', 'UK'
    ],
    'treatementList': [
        'one', 'Two', 'Three', 'Four', 'Five'
    ],
    'noOfPateints': [
        '1', '2', '3', '4'
    ]
};
var Password = (function () {
    function Password() {
    }
    return Password;
}());

var contactUsData = (function () {
    function contactUsData() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
    }
    return contactUsData;
}());

var forgotPasswordData = {
    email: ''
};
var options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: true,
};
var enquiryFormData = {
    name: '',
    email: '',
    mobile: '',
    dob: '',
    appointmentData: '',
    gender: '',
    reason: '',
    message: ''
};
var appointmentReason = ['Dental Cleansing', 'Fluoride', 'X-ray'];
var isAuthorized = true;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__startup_service__ = __webpack_require__("../../../../../src/app/startup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_http_interceptor__ = __webpack_require__("../../../../ng-http-interceptor/bundles/ng-http-interceptor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_header_header__ = __webpack_require__("../../../../../src/app/shared/header/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer__ = __webpack_require__("../../../../../src/app/shared/footer/footer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forms_registration_registration_form__ = __webpack_require__("../../../../../src/app/forms/registration/registration.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_login_login__ = __webpack_require__("../../../../../src/app/forms/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forms_enquiry_enquiry__ = __webpack_require__("../../../../../src/app/forms/enquiry/enquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_contact__ = __webpack_require__("../../../../../src/app/contact/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__faq_faq__ = __webpack_require__("../../../../../src/app/faq/faq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile__ = __webpack_require__("../../../../../src/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_directives_expression_validation_expression_validation_module__ = __webpack_require__("../../../../../src/app/shared/directives/expression.validation/expression.validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__about_us_about_us__ = __webpack_require__("../../../../../src/app/about.us/about.us.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_services__ = __webpack_require__("../../../../../src/app/services/services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__forms_forgot_password_forgot_password__ = __webpack_require__("../../../../../src/app/forms/forgot.password/forgot.password.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUIModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng_http_interceptor__["a" /* HttpInterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_23__shared_directives_expression_validation_expression_validation_module__["a" /* ExpressionValidationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_header_header__["a" /* Header */],
                __WEBPACK_IMPORTED_MODULE_14__shared_footer_footer__["a" /* Footer */],
                __WEBPACK_IMPORTED_MODULE_24__about_us_about_us__["a" /* AboutUs */],
                __WEBPACK_IMPORTED_MODULE_25__services_services__["a" /* OurServices */],
                __WEBPACK_IMPORTED_MODULE_16__forms_registration_registration_form__["a" /* RegistrationForm */],
                __WEBPACK_IMPORTED_MODULE_18__forms_login_login__["a" /* LoginForm */],
                __WEBPACK_IMPORTED_MODULE_19__forms_enquiry_enquiry__["a" /* EnquiryForm */],
                __WEBPACK_IMPORTED_MODULE_20__contact_contact__["a" /* ContactUs */],
                __WEBPACK_IMPORTED_MODULE_21__faq_faq__["a" /* FAQ */],
                __WEBPACK_IMPORTED_MODULE_22__profile_profile__["a" /* UserProfile */],
                __WEBPACK_IMPORTED_MODULE_26__forms_forgot_password_forgot_password__["a" /* ForgotPassword */],
                __WEBPACK_IMPORTED_MODULE_19__forms_enquiry_enquiry__["a" /* EnquiryForm */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_6__startup_service__["a" /* StartupService */],
                __WEBPACK_IMPORTED_MODULE_7__common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_11__app_api_service__["a" /* CommonAPIService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_registration_registration_form__ = __webpack_require__("../../../../../src/app/forms/registration/registration.form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_login_login__ = __webpack_require__("../../../../../src/app/forms/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_enquiry_enquiry__ = __webpack_require__("../../../../../src/app/forms/enquiry/enquiry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__("../../../../../src/app/contact/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq__ = __webpack_require__("../../../../../src/app/faq/faq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__("../../../../../src/app/profile/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_forgot_password_forgot_password__ = __webpack_require__("../../../../../src/app/forms/forgot.password/forgot.password.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_2__forms_registration_registration_form__["a" /* RegistrationForm */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__forms_login_login__["a" /* LoginForm */] },
    { path: 'enquiry', component: __WEBPACK_IMPORTED_MODULE_4__forms_enquiry_enquiry__["a" /* EnquiryForm */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactUs */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_6__faq_faq__["a" /* FAQ */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* UserProfile */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_8__forms_forgot_password_forgot_password__["a" /* ForgotPassword */] },
    //this is for loading children as lazy loading
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'quotation', loadChildren: './quotation/quotation.module#QuotationModule' },
    { path: 'about', loadChildren: './about.us/about.us.module#AboutUsModule' },
    { path: 'services', loadChildren: './services/services.module#OurServicesModule' },
    { path: 'enquiry', component: __WEBPACK_IMPORTED_MODULE_4__forms_enquiry_enquiry__["a" /* EnquiryForm */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServiceEndPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__startup_service__ = __webpack_require__("../../../../../src/app/startup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CookieService } from 'ngx-cookie-service';

// import { HttpInterceptorService } from 'ng-http-interceptor';






var ServiceEndPoints = (function () {
    function ServiceEndPoints() {
    }
    //put your static part of the url here e.g
    ServiceEndPoints.MedicalPackage = 'api/mediacal-package/';
    ServiceEndPoints.VisaPage = 'api/country-visa/';
    ServiceEndPoints.GetUser = 'api/get-user/';
    ServiceEndPoints.RegisterUser = 'api/register/';
    ServiceEndPoints.LoginUser = 'api/login/';
    ServiceEndPoints.LogOut = 'api/logout/';
    ServiceEndPoints.ResendConfirmation = 'api/resend-confirmation-mail/';
    ServiceEndPoints.UserEnquiry = 'api/user-enquiry/';
    ServiceEndPoints.ContactUs = 'api/contact-us/';
    ServiceEndPoints.GetAQuote = 'api/get-estimate/';
    ServiceEndPoints.ForgotPassword = 'api/forgot-password/';
    return ServiceEndPoints;
}());

var CommonService = (function () {
    function CommonService(_startUpSvc, _CookieService, router, http, _nofticationService) {
        this._startUpSvc = _startUpSvc;
        this._CookieService = _CookieService;
        this.router = router;
        this.http = http;
        this._nofticationService = _nofticationService;
        this.blockUiCount = 0;
    }
    CommonService.prototype.getApiUrl = function () {
        return this._startUpSvc.getApiUrl();
    };
    //Block UI Management 
    CommonService.prototype.incrementBlockUICount = function () {
        this.blockUiCount = this.blockUiCount + 1;
    };
    CommonService.prototype.decrementBlockUICount = function () {
        if (this.blockUiCount !== 0 || this.blockUiCount > 0) {
            this.blockUiCount = this.blockUiCount - 1;
        }
    };
    CommonService.prototype.getBlockUICount = function () {
        return this.blockUiCount;
    };
    CommonService.prototype.stopBlockUI = function () {
        this.decrementBlockUICount();
        var count = this.getBlockUICount();
        if (count === 0) {
            this.blockUI.stop();
        }
    };
    CommonService.prototype.startBlockUI = function (message) {
        var _this = this;
        message = 'Loading ...';
        this.incrementBlockUICount();
        var countBeforeStart = this.getBlockUICount();
        this.blockUI.start(message);
        setTimeout(function () {
            var currentBlockUiCount = _this.getBlockUICount();
            if (currentBlockUiCount !== 0 && countBeforeStart === currentBlockUiCount) {
                _this.blockUI.update('Be patient ... Its taking a while');
                setTimeout(function () {
                    var currentBlockUiCountL = _this.getBlockUICount();
                    if (currentBlockUiCountL !== 0 && countBeforeStart === currentBlockUiCountL) {
                        _this.blockUI.update('Its taking longer than expected ...');
                    }
                }, 10000);
            }
        }, 10000);
    };
    // isLoggedIn(logInStatus){
    //     if(logInStatus)
    //     {
    //     }
    // }
    CommonService.prototype.getNotificationOption = function () {
        var options = {
            position: ['bottom', 'right'],
            timeOut: 0,
            lastOnBottom: true,
        };
        return options;
    };
    CommonService.prototype.notificationMessage = function (message, isSuccess) {
        if (isSuccess) {
            this._nofticationService.success('Success', message, {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 100,
                timeOut: 3000
            });
        }
        else {
            this._nofticationService.error('Error', message, {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 100,
                timeOut: 3000
            });
        }
    };
    CommonService.prototype.setCookie = function (tknObj) {
        console.log("TOKEN", tknObj);
        this._CookieService.set('access_token', tknObj);
        // this._CookieService.set('token_expires', tknObj.expires);
    };
    ;
    CommonService.prototype.getCookie = function () {
        if (this._CookieService.get('access_token')) {
            return this._CookieService.get('access_token');
        }
        else {
            return null;
        }
    };
    ;
    CommonService.prototype.getCookieExpires = function () {
        if (this._CookieService.get('token_expires')) {
            return this._CookieService.get('token_expires');
        }
        else {
            return null;
        }
    };
    ;
    CommonService.prototype.storeInLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    CommonService.prototype.clearFromLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    CommonService.prototype.getFromLocalStorage = function (key) {
        localStorage.getItem(key);
    };
    CommonService.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    // setDefaultURL(URL) {
    //     localStorage.setItem('homePage', URL);
    // };
    // getDefaultURL() {
    //     return localStorage.getItem('homePage');
    // };
    CommonService.prototype.alertCheck = function (e) {
        window.alert(e);
    };
    ;
    CommonService.prototype.getGreetings = function () {
        var greeting = 'Good Morning';
        var currTime = __WEBPACK_IMPORTED_MODULE_7_moment__().hour();
        if (currTime >= 0 && currTime <= 12) {
            greeting = 'Good Morning';
        }
        else if (currTime >= 12 && currTime <= 16) {
            greeting = 'Good Afternoon';
        }
        else {
            greeting = 'Good Evening';
        }
        return greeting;
    };
    ;
    CommonService.prototype.handleError = function (error) {
        var errorMsg = error.message || "There was a problem with our hyperdrive device and we couldn't retrieve your data!";
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errorMsg);
    };
    CommonService.prototype.get = function (endpoint, isBlockUI) {
        if (isBlockUI === void 0) { isBlockUI = true; }
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .get(endpoint, options)
            .catch(this.handleError);
    };
    CommonService.prototype.post = function (endpoint, data /*, isBlockUI: boolean = true*/) {
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Headers */]({ 'AccessToken': this.getCookie(), 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(endpoint, data, options)
            .catch(this.handleError);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], CommonService.prototype, "blockUI", void 0);
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__startup_service__["a" /* StartupService */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["NotificationsService"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Contact sectiom*/\n\n.content-header {\n    font-family: 'Oleo Script', cursive;\n    color: #fcc500;\n    font-size: 45px;\n}\n\n.section-content {\n    text-align: center;\n}\n\n#contact {\n    font-family: 'Teko', sans-serif;\n    padding-top: 60px;\n    width: 100%;\n    height: 550px;\n    background: #3a6186;\n    /* fallback for old browsers */\n    /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #3a6186, #89253e);\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    color: #fff;\n}\n\n.contact-section {\n    padding-top: 40px;\n}\n\n.contact-section .col-md-6 {\n    width: 50%;\n}\n\n.form-line {\n    border-right: 1px solid #B29999;\n}\n\n.form-group {\n    margin-top: 10px;\n}\n\nlabel {\n    font-size: 1.3em;\n    line-height: 1em;\n    font-weight: normal;\n}\n\n.form-control {\n    font-size: 1.3em;\n    color: #080808;\n}\n\ntextarea.form-control {\n    height: 135px;\n    /* margin-top: px;*/\n}\n\n.submit {\n    font-size: 1.1em;\n    float: right;\n    width: 150px;\n    background-color: transparent;\n    color: #fff;\n}\n\n.mapDiv {\n    margin-top: -30px;\n}\n\n#mapLocation {\n    width: 100%;\n    height: 500px;\n}\n\n@media only screen and (max-width: 767px) {\n    #mapLocation {\n        height: 300px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\n<div *blockUI class=\"jumbotron jumbotron-sm\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-lg-12\">\n                <h2 class=\"fontColor\">\n                    Get in touch with us\n                </h2>\n                <h4 style=\"color:rgb(48, 71, 112);;\">\n                    Mediaide Solutions enables the patient to take charge of their treatment\n                </h4>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"mapDiv\">\n    <iframe id=\"mapLocation\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.9803228208675!2d75.75594028579329!3d26.897344769568676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31cf147aa33a63d6!2sMediaide!5e0!3m2!1sen!2sin!4v1514098645068\"\n        frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n</div>\n\n<div class=\"container mb20\">\n    <form role=\"form\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"contactUs.name\" class=\"form-control input-lg br0\" placeholder=\"Enter your name\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" [(ngModel)]=\"contactUs.email\" class=\"form-control input-lg br0\" placeholder=\"Enter your email\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"number\" name=\"phone\" [(ngModel)]=\"contactUs.phone\" class=\"form-control input-lg br0\" placeholder=\"Enter your mobile number\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control br0\" name=\"message\" rows=\"3\" [(ngModel)]=\"contactUs.message\" placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                    <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" (click)=\"sendMessage()\" value=\"Send Message\">\n                </div>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsService = (function () {
    function ContactUsService(_commonService, _apiService, router) {
        this._commonService = _commonService;
        this._apiService = _apiService;
        this.router = router;
    }
    ContactUsService.prototype.ngOnInit = function () {
    };
    ContactUsService.prototype.Message = function (contactData) {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].ContactUs, contactData)
            .subscribe(function (res) {
            _this._commonService.notificationMessage(res._body, true);
            console.log("RRRRRRRRRRRRRRR", res);
        }, function (err) {
            var error = _this._apiService.handleError(err);
            _this._commonService.notificationMessage('error', false);
        });
    };
    ContactUsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* CommonAPIService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ContactUsService);
    return ContactUsService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("../../../../../src/app/contact/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactUs = (function () {
    function ContactUs(ContactUsService) {
        this.ContactUsService = ContactUsService;
        this.options = __WEBPACK_IMPORTED_MODULE_1__app_model__["h" /* options */];
        this.contactUs = new __WEBPACK_IMPORTED_MODULE_1__app_model__["e" /* contactUsData */]();
    }
    ContactUs.prototype.sendMessage = function () {
        this.ContactUsService.Message(this.contactUs);
        //call contact us API to send data with an email to their id
    };
    ContactUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-us',
            template: __webpack_require__("../../../../../src/app/contact/contact.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactUsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactUsService */]])
    ], ContactUs);
    return ContactUs;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faq-content #accordion .panel-title>a.accordion-toggle::before,\n.faq-content #accordion a[data-toggle=\"collapse\"]::before {\n    content: \"\\2212\";\n    float: left;\n    font-family: 'Glyphicons Halflings';\n    margin-right: 1em;\n    margin-left: 10px;\n    color: #fff;\n    font-size: 13px;\n    font-weight: 300;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    font-size: 10px;\n    background: #ff9900;\n}\n\n.faq-content #accordion .panel-title>a.accordion-toggle.collapsed::before,\n.faq-content #accordion a.collapsed[data-toggle=\"collapse\"]::before {\n    content: \"+\";\n    color: #fff;\n    font-size: 10px;\n    font-weight: 300;\n    background: #333;\n}\n\n.faq-content {\n    float: left;\n    width: 100%;\n}\n\n.faq-content .panel-heading {\n    padding-left: 0px;\n    border-radius: 0px !important;\n}\n\n.faq-content .panel-heading a {\n    text-decoration: none;\n}\n\n.faq-content .panel {\n    border-radius: 0px !important;\n}\n\n.faq-content .panel-heading {\n    background: #f3f3f3 !important;\n    color: rgb(48, 71, 112);\n}\n\n.panel-title {\n    font-size: 19px;\n    font-weight: bold;\n}\n\n.faq-content .panel-body {\n    font-size: 14px;\n    color: rgb(48, 71, 112);\n    font-size: 15px;\n}\n\n.faq-saelect {\n    background: #f3f3f3;\n    padding: 15px;\n    border-bottom: 2px solid #666666;\n    float: left;\n    width: 100%;\n    margin-bottom: 20px;\n    margin-top: -10px;\n}\n\n.faq-saelect span {\n    font-size: 16px;\n    color: #333;\n    margin-right: 20px;\n}\n\n.faq-saelect select {\n    border: 1px solid #dcdcdc;\n    color: #999999;\n    width: 300px;\n    height: 40px;\n}\n\n.faq-content .panel {\n    border-top: none !important;\n    border-right: none !important;\n    border-left: none !important;\n}\n\n.faq-content .panel-body {\n    border: 1px solid #f3f3f3;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container inner-container paddingTB60\">\n    <div class=\"col-md-12\">\n        <div class=\"about-page-content testimonial-page\">\n            <div class=\"faq-content\">\n                <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq1\">\n                                    <span>Is MediAide a hospital? Do you prescribe medicines?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq1\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                            <div class=\"panel-body\">\n                                No, we neither prescribe medicines, nor we are a hospital. We are medical tourism corporation who aim to assist the international patients and remove the friction points of healthcare for a hassle free experience for our patients.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq2\">\n                                    <span>Will language be a barrier?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq2\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Our staff is trained to communicate in different languages, and the concierge provided to you will be well versed in English so as to eradicate the language barrier between the patient and the doctor. WHAT ARE THE MODES OF PAYMENTS?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq3\">\n                                    <span>What are the modes of payments?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq3\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                You can pay us thru various different methods including VISA, MASTERCARD, MAESTRO, AMERICAN EXPRESS and PAYPAL. As well. All these payment methods are secure. WHY TO CHOOSE INDIA OVER OTHER COUNTRIES?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq4\">\n                                    <span>Why to choose india over other countries?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                <ul>\n                                    <li>Full patient support service – 24/7 services.</li>\n                                    <li>Specialist consultations – scans, clinical investigations & consultations at short notice.</li>\n                                    <li>Straight forward – simple booking procedure to seek top Medical Treatment in India.</li>\n                                    <li>Low cost – a fraction of the cost of UK/USA surgery.</li>\n                                    <li>Lowest infection rates – less than 0.5%.</li>\n                                    <li>Individual time to each patient</li>\n                                    <li>Fast efficient service -immediate treatment with no waiting lists.</li>\n                                    <li>No doctors’ referral necessary.</li>\n                                    <li>Patients without insurance are equally benefitted</li>\n                                    <li>Medical executives with fluent English</li>\n                                    <li>Provides the world’s highest standards of clinical care & surgery.</li>\n                                    <li>Low risk – world’s highest standards of clinical care & surgery.</li>\n                                    <li>Full assistance to get Medical Visa.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq6\">\n                                    <span>Can you help me get a visa?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq6\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Yes, We will assist you in obtaining a medical travel visa. The duration will depend on the treatment you opt for and the package you select. HOW DO I MANAGE ACCOMMODATION AND TRANSPORTATION?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq7\">\n                                    <span>How do I manage accommodation and transportation?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq7\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Our custom packages are designed in such a way that your accommodation and transportation will be handled by us and it will include airport transfer as well. The accommodation depends on a number of factors like, duration of stay, type of stay and the\n                                quality of stay. We provide you accommodation options ranging from 4 star hotels to privately rented apartments. WHAT ARE THE OTHER FACILITIES TO PROVIDE TO INTERNATIONAL PATIENTS?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq8\">\n                                    <span>What are the other facilities to provide to international patients?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq8\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                We have our packages specially designed for the international patients. We have our packages specially designed for the international patients.\n                                <ul>\n                                    <li>A SIM card, provided to you immediately after your arrival, so that you can talk to your relatives back home</li>\n                                    <li>Language interpreters</li>\n                                    <li>Foreign Exchange conversion at the hospital</li>\n                                    <li>Fax, photocopy, and courier services</li>\n                                    <li>Laundry services</li>\n                                    <li>Complimentary Wi-Fi</li>\n                                    <li>Special arrangements to meet specific religious or dietary needs</li>\n                                    <li>Daily updates for your referring doctors and family</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq9\">\n                                    <span>Will I need to fix all the doctor’s appointment and tests schedules?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq9\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                No, fixing a doctor’s appointment, scheduling test, report pickups and other services are all inclusive of the package you select with us. All you would have to do is upload all your medical records, dates and appointments on our medical record section\n                                and we will do the rest. WHY SHOULD I TAKE ASSISTANCE OF A MEDICAL TOURISM COMPANY?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq10\">\n                                    <span>Why should I take assistance of a medical tourism company?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq10\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                <p>\n                                    <span class=\"bold\">Providing price quotes:</span> Medical Tourism facilitators will listen to your needs and work with your budget to design packages that best suit your health and financial needs.\n\n                                </p>\n                                <p>\n                                    <span class=\"bold\">Arranging the transfer of medical records:</span> As relationships and systems are already in place, most medical tourism facilitators have the ability to quickly transfer a patient’s medical information\n                                    including large image files such as CT’s and MRI’s.\n                                </p>\n                                <p>\n                                    <span class=\"bold\">Coordinating communication between patient and surgeon:</span> Medical tourism facilitators have already done the groundwork to make sure a patient’s chosen hospital and doctor are duly accredited\n                                    and licensed. Once they go over the available healthcare providers options with you. Feeling comfortable with your doctor is an added value to your medical travel experience.\n                                </p>\n                                <p>\n                                    <span class=\"bold\">Arranging travel logistics:</span> Medical tourism facilitators can be a great help when arranging travel details ranging from booking your flights, helping with visa issues, and organizing lodging\n                                    and transportation.\n                                </p>\n                                <p>\n                                    <span class=\"bold\">Providing a main point of contact while the patient is at the hospital: </span> Receiving medical care can be stressful and worrisome. A facilitator can be your main point of contact while you are\n                                    receiving your care abroad.\n                                </p>\n                                <p>\n                                    <span class=\"bold\">Receiving medical care can be stressful and worrisome. A facilitator can be your main point of contact while you are receiving your care abroad.</span> Most facilitators strive to build a strong relationships\n                                    with patients they serve. You will find it heartwarming when the facilitator follows up with you after receiving your care abroad. Such level of care will provide you with trust in the agency you have chosen and enhances\n                                    your medical tourism experience.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq11\">\n                                    <span>How do I send my medical records?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq11\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                You will simply have to update all your medical records on your personal profile by signing up on the medical records page. The online portal holds all your conversations, medical bills, other bills, your personal medical detail so that you wont have\n                                to search for them anywhere else. WHAT HAPPENS IN HIGH RISK CASES OR COMPLICATED CASES?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq12\">\n                                    <span> What happens in high risk cases or complicated cases?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq12\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                As every medical treatment or surgery has its inherent risks, it is essential to know them before taking any decision. With this purpose, you will be able to get in contact with the doctor before planning/undergoing the treatment. If your treatment/surgery\n                                has any complications and should need treatment or correction, the doctor will ask you (if possible) or the person you had pre-defined as responsible, regarding which course he should follow. At every step, you will be\n                                in complete control of the situation. WHO WILL ANSWER MY QUERIES AND ADVISE ME? HOW WILL I CHOOSE THE MEDICAL CENTER SUITABLE FOR ME? WHY TO CHOOSE INDIA OVER OTHER COUNTRIES? WHO CAN AVAIL OF THE SERVICES OF THIS WEBSITE?\n                                CAN I VISIT THE CENTERS PRIOR TO MY UNDERGOING THE TREATMENT? WHAT WILL BE THE LIABILITY OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq13\">\n                                    <span>Who will answer my queries and advise me?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq13\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                We have an expert panel comprising senior doctors of all disciplines who will guide you. A brief introduction is put up on the website. To ensure thorough guidance to all our patients, we assign Personal Medical Assistants for all inquiries raised. HOW\n                                WILL I CHOOSE THE MEDICAL CENTER SUITABLE FOR ME? WHY TO CHOOSE INDIA OVER OTHER COUNTRIES? WHO CAN AVAIL OF THE SERVICES OF THIS WEBSITE? CAN I VISIT THE CENTERS PRIOR TO MY UNDERGOING THE TREATMENT? WHAT WILL BE THE LIABILITY\n                                OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq14\">\n                                    <span>How will I choose the medical center suitable for me?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq14\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Along with quotes for treatments from various hospitals, we also provide our patients the background of requested hospitals and doctors who will be leading the treatment. You can choose to undergo the treatment only if you are confident about the doctor\n                                and the hospital. WHY TO CHOOSE INDIA OVER OTHER COUNTRIES? WHO CAN AVAIL OF THE SERVICES OF THIS WEBSITE? CAN I VISIT THE CENTERS PRIOR TO MY UNDERGOING THE TREATMENT? WHAT WILL BE THE LIABILITY OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq15\">\n                                    <span>Why to choose india over other countries?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq15\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                India has a large number of well-equipped, multispecialty, Government and private hospitals with well-trained, dedicated personnel who render world-class health services at affordable costs as compared to other developed countries. The exchange rate of\n                                the Indian Rupee to the US Dollar, British Pound, or Euro is favorable for most overseas residents. Indian doctors have a warm, friendly, and positive attitude towards their patients; one feels comfortable immediately.\n                                India enjoys nearly ten months of very pleasant weather in a year and is well-connected to all major destinations in the world by several airlines. You don’t only save money, but also visit a very culturally rich and diverse\n                                country! Many Indians, settled or working overseas, visit India regularly as they can combine their visit with medical treatment of some non-emergency conditions like cataract, joint replacement, dental treatment, etc.,\n                                or can get a complete preventive health check up done. WHO CAN AVAIL OF THE SERVICES OF THIS WEBSITE? CAN I VISIT THE CENTERS PRIOR TO MY UNDERGOING THE TREATMENT? WHAT WILL BE THE LIABILITY OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq16\">\n                                    <span>Who can avail of the services of this website?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq16\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Any person, irrespective of the nationality, can avail of the services of MediAide Solutions. CAN I VISIT THE CENTERS PRIOR TO MY UNDERGOING THE TREATMENT? WHAT WILL BE THE LIABILITY OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq17\">\n                                    <span>Can I visit the centers prior to my undergoing the treatment?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq17\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                Yes, we can arrange for a visit to the hospital and an interview with the doctor. WHAT WILL BE THE LIABILITY OF THE WEBSITE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq18\">\n                                    <span>What will be the liability of the website?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq18\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                We at MediAide try to guide our patients with latest, updated information and we do it with utmost care and a high level of sincerity. We DO NOT own these institutions, nor do we have any control over its policies and the treating doctors. The final decision\n                                will be of the patient; from our side there is no compulsion. At any given point of time a person is at complete freedom to withdraw or take a second opinion. IS INDIA A SAFE COUNTRY? IS IT DANGEROUS TO TRAVEL THERE?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq19\">\n                                    <span>Is India a safe country? Is it dangerous to travel there?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq19\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                India is one of the largest democracies and has a very low crime rate. The people are very friendly and cordial. The infrastructure is improving and there is no law and order problem. Most regions are very safe for travel. Our personal assistant will\n                                guide you along your entire visit. WHAT HAPPENS IF I CHANGE MY MIND AT THE LAST MOMENT?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq20\">\n                                    <span>What happens if I change my mind at the last moment?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq20\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                MediAide has to hire and pay in advance several services offered (from the medical treatment to the hotel or other tourist services). In case you decide to cancel your trip at the last moment, the Cancellation Policy will apply. WHAT HAPPENS IF I AM NOT\n                                HAPPY WITH THE PERSONAL ASSISTANT I HAVE BEEN ASSIGNED?\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\">\n                            <h4 class=\"panel-title\">\n                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#faq21\">\n                                    <span>What happens if I am not happy with the personal assistant I have been assigned?</span>\n                                </a>\n                            </h4>\n                        </div>\n                        <div id=\"faq21\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"panel-body\">\n                                You will be able to contact MediAide Solutions to explain the reasons and ask for an exchange.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/faq/faq.modle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQData; });
var FAQData = [
    { 'title': "Is MediAide a hospital? Do you prescribe medicines?", "body": "No, we neither prescribe medicines, nor we are a hospital. We are medical tourism corporation who aim to assist the international patients and remove the friction points of healthcare for a hassle free experience for our patients." },
    { 'title': 'Is MediAide a hospital? Do you prescribe medicines?', 'body': 'Our staff is trained to communicate in different languages, and the concierge provided to you will be well versed in English so as to eradicate the language barrier between the patient and the doctor.' },
    { 'title': 'What are the modes of payments?', 'body': 'Great support' },
];


/***/ }),

/***/ "../../../../../src/app/faq/faq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq_modle__ = __webpack_require__("../../../../../src/app/faq/faq.modle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FAQ = (function () {
    function FAQ() {
        this.faqData = __WEBPACK_IMPORTED_MODULE_1__faq_modle__["a" /* FAQData */];
    }
    FAQ = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'frequenty-asked-questions',
            template: __webpack_require__("../../../../../src/app/faq/faq.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FAQ);
    return FAQ;
}());



/***/ }),

/***/ "../../../../../src/app/forms/enquiry/enquiry.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\n<div class=\"container\">\n    <div class=\"row mt20\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form #registrationForm role=\"form\" (submit)=\"makeEnquiry(enquiryData);\">\n                <fieldset>\n                    <h4 class=\"font19\">REQUEST AN APPOINTMENT</h4>\n                    <hr class=\"colorgraph\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"firstName\" name=\"name\" patternService=\"namechk\" placeholder=\"Full Name\"\n                            [(ngModel)]='enquiryData.name'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" patternService=\"emailchk\"\n                            [(ngModel)]='enquiryData.email'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"number\" id=\"mobile\" name=\"mobile\" placeholder=\"Mobile Number\" patternService=\"phonechk\"\n                            [(ngModel)]='enquiryData.mobile'>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                            <label class=\"control-label\">DOB</label>\n                            <input class=\"form-control input-lg br0\" type=\"date\" id=\"birthDate\" name=\"dob\" [(ngModel)]='enquiryData.dob'>\n                        </div>\n                        <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                            <label class=\"control-label\">APPOINTMENT DATE</label>\n                            <input class=\"form-control input-lg br0\" type=\"date\" id=\"appointmentdate\" name=\"appointmentdate\" [(ngModel)]='enquiryData.appointmentData'>\n                        </div>\n                    </div>\n                    <div class=\"form-group font15\">\n                        <label class=\"control-label\">Gender</label>\n                        <div class=\"row\">\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"femaleRadio\" name=\"gender\" [(ngModel)]=\"enquiryData.gender\" value=\"Female\">Female\n                                </label>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"maleRadio\" name=\"gender\" [(ngModel)]=\"enquiryData.gender\" value=\"Male\">Male\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group font15\">\n                        <label class=\"control-label\">Reason for visit</label>\n                        <select [(ngModel)]=\"enquiryData.reason\" class=\"form-control input-lg br0\" id=\"reason\" value=\"enquiryData.reason\" name=\"reason\">\n                            <option *ngFor=\"let reason of appointmentReason\" [value]=\"reason\">{{reason}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group font15\">\n                        <textarea style=\"width:100%\" placeholder=\"Meaasge\" name=\"meaasge\" id=\"meaasge\" [(ngModel)]=\"enquiryData.message\" rows=\"4\"></textarea>\n                    </div>\n                    <div class=\"row\" style=\"margin-bottom:10%\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                            <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" placement=\"top\" ngbTooltip=\"submit\">\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/enquiry/enquiry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnquiryForm = (function () {
    function EnquiryForm(_apiService, _commonService) {
        this._apiService = _apiService;
        this._commonService = _commonService;
        this.enquiryData = __WEBPACK_IMPORTED_MODULE_1__app_model__["f" /* enquiryFormData */];
        this.options = __WEBPACK_IMPORTED_MODULE_1__app_model__["h" /* options */];
        this.appointmentReason = __WEBPACK_IMPORTED_MODULE_1__app_model__["d" /* appointmentReason */];
    }
    EnquiryForm.prototype.makeEnquiry = function (enquireyData) {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_3__common_service__["b" /* ServiceEndPoints */].UserEnquiry, enquireyData)
            .subscribe(function (res) {
            _this._commonService.notificationMessage(res._body, true);
            _this.enquiryData = {
                name: '',
                email: '',
                mobile: '',
                dob: '',
                appointmentData: '',
                gender: '',
                reason: '',
                message: '',
            },
                function (err) {
                    var error = _this._apiService.handleError(err);
                    _this._commonService.notificationMessage(err, false);
                };
        });
    };
    EnquiryForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'enquiry',
            template: __webpack_require__("../../../../../src/app/forms/enquiry/enquiry.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* CommonAPIService */], __WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]])
    ], EnquiryForm);
    return EnquiryForm;
}());



/***/ }),

/***/ "../../../../../src/app/forms/forgot.password/forgot.password.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>    \n<div class=\"container\">\n    <div class=\"row mt20 mb20\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form role=\"form\" (submit)=\"GetPassword(forgotPassword)\" >\n                <fieldset>\n                    <h4 class=\"font19\">Please Log In</h4>\n                    <hr class=\"colorgraph\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg br0\" patternService=\"emailchk\" [(ngModel)]=\"forgotPassword.email\" id=\"email\" placeholder=\"Enter Email Id\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg br0\" patternService=\"passwordchk\" id=\"confirmPassword\" placeholder=\"Password\" [(ngModel)]=\"forgotPassword.confirmPassword\" placeholder=\"Password\" required=\"forgotPassword.password\">\n                    </div>\n                    <span class=\"invalid\" *ngIf=\"forgotPassword.password == forgotPassword.confirmPassword\">Input does not match</span>\n                    <hr class=\"colorgraph\"> -->\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                            <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" value=\"Get Password\">\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/forgot.password/forgot.password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordService = (function () {
    function ForgotPasswordService(_commonService, _apiService, router) {
        this._commonService = _commonService;
        this._apiService = _apiService;
        this.router = router;
        this.logInStatus = false;
    }
    ForgotPasswordService.prototype.ngOnInit = function () {
        this.logInStatus = false;
    };
    ForgotPasswordService.prototype.setForgotPasswordDetails = function (forgotPassword) {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].ForgotPassword, forgotPassword)
            .subscribe(function (res) {
            _this._commonService.notificationMessage(res._body, true);
        }, function (err) {
            _this._apiService.handleError(err);
            _this._commonService.notificationMessage(err._body, false);
        });
    };
    ForgotPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* CommonAPIService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/forms/forgot.password/forgot.password.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgot_password_service__ = __webpack_require__("../../../../../src/app/forms/forgot.password/forgot.password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPassword = (function () {
    function ForgotPassword(fgPassword) {
        this.fgPassword = fgPassword;
        this.options = __WEBPACK_IMPORTED_MODULE_2__app_model__["h" /* options */];
        this.forgotPassword = __WEBPACK_IMPORTED_MODULE_2__app_model__["g" /* forgotPasswordData */];
    }
    ForgotPassword.prototype.GetPassword = function (forgotPassword) {
        this.fgPassword.setForgotPasswordDetails(forgotPassword);
        this.forgotPassword = { 'email': '' };
    };
    ForgotPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'forgot-password',
            template: __webpack_require__("../../../../../src/app/forms/forgot.password/forgot.password.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__forgot_password_service__["a" /* ForgotPasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__forgot_password_service__["a" /* ForgotPasswordService */]])
    ], ForgotPassword);
    return ForgotPassword;
}());



/***/ }),

/***/ "../../../../../src/app/forms/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div *blockUI class=\"container\">\n    <div class=\"row mt20 mb20\">\n            <simple-notifications [options]=\"options\"></simple-notifications>                \n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form role=\"form\">\n                <fieldset>\n                    <h4 class=\"font19\">Please Log In</h4>\n                    <hr class=\"colorgraph\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg br0\" patternService=\"emailchk\" [(ngModel)]=\"logInData.email\" id=\"exampleInputEmail1\" placeholder=\"Enter username or email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg br0\" patternService=\"passwordchk\" id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)]=\"logInData.password\" placeholder=\"Password\">\n                    </div>\n                    <span class=\"button-checkbox\">\n                        <div class=\"checkbox\">\n                                <label class=\"font15\">\n                                    <input type=\"checkbox\" name=\"siggnedIn\" [(ngModel)]=\"logInData.keepLoggedIn\"> Stay logged in\n                                </label>\n                                <a class=\"font15\" routerLink=\"forgotpassword\" class=\"btn btn-link pull-right\">Forgot Password?</a>\n                            </div>\n\t\t\t\t    </span>\n                    <hr class=\"colorgraph\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                            <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" value=\"LogIn\" (click)=\"logInUser()\">\n                        </div>\n                        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                            <a class=\"btn btn-lg btn-primary customBtn btn-block\" onclick=\"window.location.href='http://localhost:4200/registration'\" [ngbTooltip]=\"tipContent\">Register</a>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { read } from 'fs';
var UserLoginService = (function () {
    function UserLoginService(_commonService, _apiService, router) {
        this._commonService = _commonService;
        this._apiService = _apiService;
        this.router = router;
        this.options = __WEBPACK_IMPORTED_MODULE_2__app_model__["h" /* options */];
        this.loginConditionData = '';
        this.userSpecificProfileData = '';
    }
    UserLoginService.prototype.ngOnInit = function () {
        if (this.loginConditionData.keepLoggedIn) {
            this.keepLoggedIn();
        }
        else {
            this.isAuthorized = false;
            this.clearUserData('userProfileData');
        }
    };
    UserLoginService.prototype.logIn = function (loginData) {
        var _this = this;
        this._commonService.startBlockUI('Loading');
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].LoginUser, loginData)
            .subscribe(function (res) {
            _this._commonService.setCookie(res._body);
            _this.isAuthorized = true;
            if (_this.isAuthorized) {
                _this.router.navigate(['/profile']);
            }
            var tempData = {
                'username': res.name,
                'email': res.email,
                'dob': res.dob,
                'address': res.address,
                'gender': res.gender,
                'phone': res.phone,
                'country': res.country,
                'id': res.id
            };
            _this.storeUserData(tempData);
            _this._commonService.notificationMessage("success in login", true);
            _this._commonService.stopBlockUI();
        }, function (err) {
            console.log('ERR', err);
            _this._apiService.handleError(err);
            _this._commonService.stopBlockUI();
            _this._commonService.notificationMessage("sorry something went wrong", false);
        });
    };
    UserLoginService.prototype.keepLoggedIn = function () {
        this.isAuthorized = true;
    };
    UserLoginService.prototype.storeUserData = function (profileData) {
        this._commonService.storeInLocalStorage('userProfileData', profileData);
    };
    UserLoginService.prototype.clearUserData = function (key) {
        this._commonService.clearFromLocalStorage(key);
    };
    UserLoginService.prototype.logOut = function () {
        if (this.loginConditionData.keepLoggedIn) {
            this.loginConditionData.keepLoggedIn = false;
            localStorage.clear();
        }
        else {
            localStorage.clear();
        }
    };
    UserLoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* CommonAPIService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], UserLoginService);
    return UserLoginService;
}());



/***/ }),

/***/ "../../../../../src/app/forms/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/forms/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginForm = (function () {
    function LoginForm(loginService) {
        this.loginService = loginService;
        this.options = __WEBPACK_IMPORTED_MODULE_1__app_model__["h" /* options */];
        this.logInData = new __WEBPACK_IMPORTED_MODULE_1__app_model__["a" /* LogInData */]();
        this.tokenStruct = new __WEBPACK_IMPORTED_MODULE_1__app_model__["b" /* TokenStruct */]();
        this.logInResponse = '';
    }
    LoginForm.prototype.ngOnInit = function () {
        if (this.logInData.keepLoggedIn)
            this.logeedIn = false;
    };
    LoginForm.prototype.logInUser = function () {
        this.logInResponse = this.loginService.logIn(this.logInData);
        this.logInData = new __WEBPACK_IMPORTED_MODULE_1__app_model__["a" /* LogInData */]();
    };
    LoginForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/forms/login/login.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* UserLoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* UserLoginService */]])
    ], LoginForm);
    return LoginForm;
}());



/***/ }),

/***/ "../../../../../src/app/forms/registration/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserRegisterService = (function () {
    function UserRegisterService(_commanService, http, _apiService) {
        this._commanService = _commanService;
        this.http = http;
        this._apiService = _apiService;
    }
    // getUserProfileDetails(data: any): Observable<any> {
    //   const url = this._commSvc.getApiUrl() + ServiceEndPoints.userRegister;
    //   const response$ = this._apiSvc.post(url, data).subscribe(r => {console.log("RES",r)},
    //   e => { console.log("ERR",e)});
    //   return ;
    // };
    UserRegisterService.prototype.fetch = function () {
        var _this = this;
        return this._apiService.get(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].GetUser)
            .subscribe(function (r) {
            debugger;
            console.log("RES", r);
            _this.userData = r;
        }, function (e) {
            console.log('ERR', e);
        });
    };
    UserRegisterService.prototype.post = function () {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].RegisterUser, this.userData)
            .subscribe(function (res) {
            debugger;
            console.log("RES", res);
        }, function (err) {
            console.log('ERR', err);
            _this._apiService.handleError(err);
        });
    };
    UserRegisterService.prototype.setRegistrationDetails = function (userData) {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].RegisterUser, userData)
            .subscribe(function (res) {
            // debugger;
            console.log("RES", res);
        }, function (err) {
            console.log('ERR', err);
            _this._apiService.handleError(err);
        });
    };
    UserRegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* CommonAPIService */]])
    ], UserRegisterService);
    return UserRegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/forms/registration/registration.form.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row mt20\">\n        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n            <form #registrationForm role=\"form\" (submit)=\"signIn()\">\n                <fieldset>\n                    <h4 class=\"font19\">Registration Form</h4>\n                    <hr class=\"colorgraph\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"firstName\" name=\"name\" patternService=\"namechk\" placeholder=\"Full Name\" [(ngModel)]='userData.name'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\" patternService=\"emailchk\" [(ngModel)]='userData.email'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" patternService=\"passwordchk\" [(ngModel)]='userData.password'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"cnfPassword\" id=\"cnfPassword\" name=\"cnfPassword\" placeholder=\"Re-enter Password\" patternService=\"passwordchk\" [(ngModel)]='userData.confirm_password'>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"number\" id=\"mobile\" name=\"mobile\" placeholder=\"Mobile Number\" patternService=\"phonechk\" [(ngModel)]='userData.phone'>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                            <label class=\"control-label\">DOB</label>\n                            <input class=\"form-control input-lg br0\" type=\"date\" id=\"birthDate\" name=\"dob\" [(ngModel)]='userData.dob'>\n                        </div>\n                        <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                            <label class=\"control-label\">Country</label>\n                            <select class=\"form-control input-lg br0\" id=\"country\" [(ngModel)]=\"userData.country\" patternService=\"namechk\" name=\"country\" [value]=\"county\">\n                                <option>Afghanistan</option>\n                                <option>Bahamas</option>\n                                <option>Cambodia</option>\n                                <option>Denmark</option>\n                                <option>Ecuador</option>\n                                <option>Fiji</option>\n                                <option>Gabon</option>\n                                <option>Haiti</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group font15\">\n                        <label class=\"control-label\">Gender</label>\n                        <div class=\"row\">\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"femaleRadio\" name=\"gender\" [(ngModel)]=\"userData.gender\" value=\"Female\">Female\n                                </label>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"maleRadio\" name=\"gender\" [(ngModel)]=\"userData.gender\" value=\"Male\">Male\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"address\" name=\"address\" placeholder=\"Address\" [(ngModel)]='userData.address'>\n                    </div>\n                    <span class=\"button-checkbox\">\n                        <div class=\"checkbox\">\n                            <label class=\"font15\">\n                                <input type=\"checkbox\" name=\"agree\" patternService=\"alphanumericchk\" [(ngModel)]=\"userData.agree\"> I accept all the terms and condition.\n                            </label>\n                        </div>\n                    </span>\n                    <hr>\n                    <div class=\"row\" style=\"margin-bottom:10%\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                            <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" placement=\"top\" ngbTooltip=\"submit\">\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forms/registration/registration.form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model__ = __webpack_require__("../../../../../src/app/app.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_service__ = __webpack_require__("../../../../../src/app/forms/registration/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationForm = (function () {
    function RegistrationForm(apiService) {
        this.apiService = apiService;
        this.userData = new __WEBPACK_IMPORTED_MODULE_1__app_model__["c" /* UserDetail */]();
    }
    RegistrationForm.prototype.ngOnInit = function () {
        this.apiService.fetch();
        // this.apiService.post();
    };
    RegistrationForm.prototype.signIn = function () {
        // debugger;
        // this.apiService.post();
        this.apiService.setRegistrationDetails(this.userData);
    };
    RegistrationForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'registration',
            template: __webpack_require__("../../../../../src/app/forms/registration/registration.form.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* UserRegisterService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* UserRegisterService */]])
    ], RegistrationForm);
    return RegistrationForm;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt20 mb20\">\n    <div class=\"center\">\n        <a href=\"#aboutModal\" data-toggle=\"modal\" data-target=\"#myModal\"><img src=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R\" name=\"aboutme\" width=\"140\" height=\"140\" class=\"img-circle\"></a>\n        <h3 class=\"font19\">Joe Sixpack</h3>\n        <h5 class=\"font15\">mediaide@gmail.com</h5>\n        <h5 class=\"font15\">2 April 1996</h5>\n        <h5 class=\"font15\">India</h5>\n        <h5 class=\"font15\">B-41 Jawahar Nagar Jaipur</h5>\n    </div>\n\n    <ngb-tabset class=\"font15\">\n        <ngb-tab title=\"Upload File\">\n            <ng-template ngbTabContent>\n                <form class=\"form-group mt20\">\n                    <div class=\"col col-md-8\">\n                        <label class=\"custom-file\">\n                        <input type=\"file\" name=\"checkup\" class=\"form-control\" id=\"file2\" [(ngModel)]=\"checkupDoc\" class=\"custom-file-input\" value=\"checkupDoc\">\n                        <span class=\"custom-file-control\"></span>\n                    </label>\n                        <button class=\"btn btn-primary customBtn btn-md\" (click)=\"checkUp()\">Submit</button>\n                    </div>\n                </form>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Download File\">\n            <ng-template ngbTabContent>\n                <div class=\"mb20\">\n\n                </div>\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Edit Information\">\n            <ng-template ngbTabContent>\n                <form class=\"mt20\">\n                    <div class=\"form-group col-sm-6 col-xs-12 col-md-6\">\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"firstName\" name=\"name\" placeholder=\"Full Name\">\n                    </div>\n                    <div class=\"form-group col-sm-6 col-xs-12 col-md-6\">\n                        <input class=\"form-control input-lg br0\" type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"form-group col-sm-6 col-xs-12 col-md-6\">\n                        <input class=\"form-control input-lg br0\" type=\"number\" id=\"mobile\" name=\"mobile\" placeholder=\"Mobile Number\">\n                    </div>\n                    <div class=\"form-group col-sm-6 col-xs-12 col-md-6\">\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"address\" name=\"address\" placeholder=\"Address\">\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                        <label class=\"control-label\">DOB</label>\n                        <input class=\"form-control input-lg br0\" type=\"date\" id=\"birthDate\" name=\"dob\">\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-6 col-md-6\">\n                        <label class=\"control-label\">Country</label>\n                        <select class=\"form-control input-lg br0\" id=\"country\" name=\"country\">\n                            <option>Afghanistan</option>\n                            <option>Bahamas</option>\n                            <option>Cambodia</option>\n                            <option>Denmark</option>\n                            <option>Ecuador</option>\n                            <option>Fiji</option>\n                            <option>Gabon</option>\n                            <option>Haiti</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group font15 col-md-12\">\n                        <label class=\"control-label\">Gender</label>\n                        <div class=\"row\">\n                            <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"femaleRadio\" name=\"gender\" value=\"Female\">Female\n                                </label>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"maleRadio\" name=\"gender\" value=\"Male\">Male\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-6\">\n                        <label class=\"control-label\">Services Needed</label>\n                        <select class=\"form-control input-lg br0\" id=\"service\" name=\"service\">\n                            <option>Checkup</option>\n                            <option>Consultation</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-6\">\n                        <label class=\"control-label\">Doctor Name</label>\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"doctor_name\" name=\"doctor_name\" placeholder=\"Doctor Name\">\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-6\">\n                        <label class=\"control-label\">Hospital Name</label>\n                        <input class=\"form-control input-lg br0\" type=\"text\" id=\"hospital_name\" name=\"hospital_name\" placeholder=\"Hospital Name\">\n                    </div>\n                    <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-6\">\n                        <label class=\"control-label\">Treatment</label>\n                        <select class=\"form-control input-lg br0\" id=\"treatment\" name=\"treatment\">\n                            <option>Checkup</option>\n                            <option>Consultation</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control br0\" name=\"message\" rows=\"3\" placeholder=\"Message\"></textarea>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"col-xs-4 col-sm-4 col-md-4\">\n                            <input type=\"submit\" class=\"btn btn-lg btn-primary customBtn btn-block\" placement=\"top\" value=\"Update\" ngbTooltip=\"submit\">\n                        </div>\n                    </div>\n                </form>\n            </ng-template>\n        </ngb-tab>\n    </ngb-tabset>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfile = (function () {
    function UserProfile() {
        this.checkupDoc = '';
    }
    UserProfile.prototype.checkUp = function () {
        debugger;
        console.log("EEEEEEEEEE", this.checkupDoc);
    };
    UserProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UserProfile);
    return UserProfile;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/services/services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OurServices = (function () {
    function OurServices() {
    }
    OurServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'services',
            template: __webpack_require__("../../../../../src/app/services/services.html"),
        })
    ], OurServices);
    return OurServices;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/expression.validation/expression.validation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionValidationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpressionValidationDirective = (function () {
    function ExpressionValidationDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.regexDict = {
            'phonechk': /^\(?(([+,9,1]|[0]){0,3})\)?[- ]?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
            'pincodechk': /(^\d{6}$)/,
            'integerchk': /^\d*$/,
            // 'emailchk': /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,        
            'citychk': /([a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$)/,
            'alphanumericchk': /^[a-zA-Z0-9\s,@!'/.{"}#-)~(]*$/,
            'numericchk': /^[a-zA-Z0-9\s]*$/,
            'passwordchk': /^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[!#$'()*-,.\/<=>?@\[\]^`{|}~])[a-zA-Z\d!#$'()*-,.\/<=>?@\[\]^`{|}~]+){8,20}$/,
            'fullnamechk': /^[a-zA-Z\s\'\-,]*$/,
            'namechk': /^[a-zA-Z\s\'\-]*$/,
            'emailchk': /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        };
        this.regex = null;
        this.current = null;
    }
    ExpressionValidationDirective.prototype.onKeyDown = function (event) {
        this.current = this.el.nativeElement.value;
        this.regex = this.regexDict[this.typeValidation];
        if (this.regex && this.regex.test(this.current)) {
            if (this.el.nativeElement.className.indexOf('invalid') >= 0) {
                this.renderer.removeClass(this.el.nativeElement, 'invalid');
            }
            this.renderer.addClass(this.el.nativeElement, 'valid');
        }
        else {
            if (this.el.nativeElement.className.indexOf('valid') >= 0) {
                this.renderer.removeClass(this.el.nativeElement, 'valid');
            }
            this.renderer.addClass(this.el.nativeElement, 'invalid');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('patternService'),
        __metadata("design:type", Object)
    ], ExpressionValidationDirective.prototype, "typeValidation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ExpressionValidationDirective.prototype, "onKeyDown", null);
    ExpressionValidationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[patternService]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], ExpressionValidationDirective);
    return ExpressionValidationDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/expression.validation/expression.validation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressionValidationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expression_validation_directive__ = __webpack_require__("../../../../../src/app/shared/directives/expression.validation/expression.validation.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExpressionValidationModule = (function () {
    function ExpressionValidationModule() {
    }
    ExpressionValidationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__expression_validation_directive__["a" /* ExpressionValidationDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__expression_validation_directive__["a" /* ExpressionValidationDirective */]]
        })
    ], ExpressionValidationModule);
    return ExpressionValidationModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-bs {\n    background-color: rgb(48, 71, 112);\n    padding: 10px 20px;\n    color: rgba(255, 255, 255, 1.00);\n    margin-top: 30px;\n}\n\n#footerLogo {\n    width: 70%;\n}\n\n.footer-bs .footer-brand,\n.footer-bs .footer-nav,\n.footer-bs .footer-social,\n.footer-bs .footer-ns {\n    padding: 10px 25px;\n}\n\n.footer-bs .footer-nav,\n.footer-bs .footer-social,\n.footer-bs .footer-ns {\n    border-color: transparent;\n}\n\n.footer-bs .footer-brand h2 {\n    margin: 0px 0px 10px;\n}\n\n.footer-bs .footer-brand p {\n    font-size: 12px;\n    color: rgba(255, 255, 255, 0.70);\n}\n\n.footer-bs .footer-nav ul.pages {\n    list-style: none;\n    padding: 0px;\n}\n\n.footer-bs .footer-nav ul.pages li {\n    padding: 5px 0px;\n}\n\n.footer-bs .footer-nav ul.pages a {\n    color: rgba(255, 255, 255, 1.00);\n    font-weight: bold;\n    text-transform: uppercase;\n}\n\n.footer-bs .footer-nav ul.pages a:hover {\n    color: rgba(255, 255, 255, 0.80);\n    text-decoration: none;\n}\n\n.footer-bs .footer-nav h4 {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    margin-bottom: 10px;\n}\n\n.footer-bs .footer-nav ul.list {\n    list-style: none;\n    padding: 0px;\n}\n\n.footer-bs .footer-nav ul.list li {\n    padding: 5px 0px;\n}\n\n.footer-bs .footer-nav ul.list a {\n    color: rgba(255, 255, 255, 0.80);\n}\n\n.footer-bs .footer-nav ul.list a:hover {\n    color: rgba(255, 255, 255, 0.60);\n    text-decoration: none;\n}\n\n.footer-bs .footer-social ul {\n    list-style: none;\n    padding: 0px;\n}\n\n.footer-bs .footer-social h4 {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n}\n\n.footer-bs .footer-social li {\n    padding: 5px 4px;\n}\n\n.footer-bs .footer-social a {\n    color: rgba(255, 255, 255, 1.00);\n}\n\n.footer-bs .footer-social a:hover {\n    color: rgba(255, 255, 255, 0.80);\n    text-decoration: none;\n}\n\n.footer-bs .footer-ns h4 {\n    font-size: 11px;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    margin-bottom: 10px;\n}\n\n.footer-bs .footer-ns p {\n    font-size: 12px;\n    color: rgba(255, 255, 255, 0.70);\n}\n\n@media (min-width: 768px) {\n    .footer-bs .footer-nav,\n    .footer-bs .footer-social,\n    .footer-bs .footer-ns {\n        border-left: solid 1px rgba(255, 255, 255, 0.10);\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bs\">\n    <div class=\"row\">\n        <div class=\"col-md-3 footer-brand animated fadeInLeft\">\n            <h2>\n                <img src=\"../../../../assets/logox.png\" id=\"footerLogo\" />\n            </h2>\n            <p>Medical Concierge and Assistance Services</p>\n            <p>Copyright ©2017 all rights reserved</p>\n            <p><a><i class=\"fa fa-phone-square\"></i> (+91) 861 9835393</a></p>\n            <p><a><i class=\"fa fa-envelope\"></i> info@mediaide.in</a></p>\n            <p><a><i class=\"fa fa-link\"></i> www.mediaide.in</a></p>\n            <p><a><i class=\"fa fa-map-marker\"></i> www.mediaide.in</a></p>\n        </div>\n        <div class=\"col-md-4 footer-nav animated fadeInUp\">\n            <h4>Menu —</h4>\n            <div class=\"col-md-6\">\n                <ul class=\"pages\">\n                    <li><a routerLink=\"home\">Home</a></li>\n                    <li><a routerLink=\"services/featuredservices\">Services</a></li>\n                    <li><a routerLink=\"quotation/quote\">Get A Quote</a></li>\n                    <li><a routerLink=\"/about/ourcompany\">How We Work</a></li>\n                    <li><a routerLink=\"faq\">FAQ</a></li>\n                </ul>\n            </div>\n            <div class=\"col-md-6\">\n                <ul class=\"list\">\n                    <li><a routerLink=\"about/ourcompany\">About Us </a></li>\n                    <li><a routerLink=\"contact\">Contact Us</a></li>\n                    <li><a routerLink=\"conditions\">Terms & Condition</a></li>\n                    <li><a routerLink=\"policy\">Privacy Policy</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-md-2 footer-social animated fadeInDown\">\n            <h4>Follow Us -</h4>\n            <ul>\n                <li><a href=\"#\">Facebook <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"https://twitter.com/mediaidesolutio/\">Twitter <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\">Instagram <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\">RSS <i class=\"fa fa-rss\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"https://plus.google.com/b/113824073089390771818/113824073089390771818\">Google <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"https://www.linkedin.com/company/13440235/\">LinkedIn <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n            </ul>\n        </div>\n        <div class=\"col-md-3 footer-ns animated fadeInRight\">\n            <h4>Newsletter</h4>\n            <p>subscribe to our awesome mailchimp.com list</p>\n\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\"><span class=\"fa fa-envelope\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.css")]
        })
    ], Footer);
    return Footer;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainLogo {\n    height: 30px;\n    margin-top: -4px;\n}\n\n.mainNavbar {\n    position: fixed;\n    width: 100%;\n    z-index: 10;\n    background-color: #e5e5e5;\n    color: #59abb3 !important;\n    border-radius: 0;\n}\n\n.dropdown-menu {\n    background-color: #002449;\n}\n\n.dropdown-menu li a:hover {\n    background-color: #ffa516;\n}\n\n.upperNavBar div span {\n    margin-left: 30%;\n}\n\n.navbar-nav li a {\n    color: #59abb3;\n    font-weight: 600;\n}\n\n.navbar-nav li a:hover {\n    color: #002449;\n}\n\n@media only screen and (min-width: 1069px) {\n    #mainLogo {\n        position: absolute;\n        left: 8vw;\n    }\n    .navbar-right {\n        position: absolute;\n        right: 8vw;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"top\">\n    <nav class=\"navbar navbar-default mainNavbar container-fluid\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/home\">\n                    <img id=\"mainLogo\" src=\"./assets/logo/logox.png\" alt=\"MediAide\">\n                </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"active\">\n                        <a routerLink=\"/home\">Home\n                            <span class=\"sr-only\">(current)</span>\n                        </a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            About Us \n                            <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/about/ourcompany\">Our Company</a></li>\n                            <li><a routerLink=\"/about/whyus\">Why Us</a></li>\n                            <li><a routerLink=\"/about/aboutindia\">About India</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                Services\n                                <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a routerLink=\"/services/featuredservices\">Featured Services</a></li>\n                            <li><a routerLink=\"/services/medicaltreatment\">Medical Treatments</a></li>\n                            <li><a href=\"/services/postcare\">Post Operative Care</a></li>\n                        </ul>\n                    </li>\n                    <li><a routerLink=\"/quotation/quote\">Get A Quote</a></li>\n                    <li><a routerLink=\"/faq\">FAQ</a></li>\n                    <li><a routerLink=\"/contact\">Contact</a></li>\n                    <li><a routerLink=\"/registration\">Register</a></li>\n                    <!-- <li><a routerLink=\"/login\" (click)=\"changeLogInCondition();\">{{ logInStatus }} ? LogIn : LogOut</a></li> -->\n                    <li><a routerLink=\"/login\" *ngIf=\"logInStatus == true\" (click)=\"changeLogInCondition()\">Login</a></li>\n                    <li><a routerLink=\"/home\" *ngIf=\"logInStatus == false\" (click)=\"changeLogInCondition()\">Logout</a></li>\n                    <li><a routerLink=\"/profile\"><i class=\"fa fa-user\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header = (function () {
    function Header() {
        // this.logInStatus = LoginForm.logInStatus();
        this.logInStatus = true;
    }
    Header.prototype.changeLogInCondition = function () {
        if (this.logInStatus) {
            this.logInStatus = false;
        }
        else {
            this.logInStatus = true;
        }
        return this.logInStatus;
    };
    Header = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Header);
    return Header;
}());



/***/ }),

/***/ "../../../../../src/app/startup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as moment from 'moment';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';
var StartupService = (function () {
    function StartupService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.apiUrl = 'http://192.168.1.8:8000/';
        this.signInUrl = 'http://localhost:4200/registration';
    }
    StartupService.prototype.getApiUrl = function () {
        return this.apiUrl;
    };
    StartupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map