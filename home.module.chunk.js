webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".doctorPicture {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/home/doctor_blue_left.jpg") + ");\n}\n\n.offerView {\n    background-color: rgb(48, 71, 112);\n}\n\n.homePageContainer {\n    position: relative;\n    top: -10px;\n}\n\n@media only screen and (min-width: 500px) {\n    .reviewDiv p {\n        margin: auto;\n        width: 50%;\n        padding: 10px;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .doctorPicture {\n        height: 250px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.html":
/***/ (function(module, exports) {

module.exports = "<carousel></carousel>\n<homepage-tabs></homepage-tabs>\n<div class=\"container homePageContainer\">\n    <div>\n        <h1 class=\"fontColor\">WELCOME TO MEDIAIDE SOLUTIONS</h1>\n        <p class=\"font21\">\n            Affordable Integrated State of the Art Healthcare\n        </p>\n    </div>\n    <div>\n        <p class=\"font15\">\n            MediAide Solutions is a company specializing in medical concierge. The company can plan your entire trip, get the visas for the purpose of seeking medical treatment, set up the appointments and coordinate with the hospitals, manage the medical records\n            online, customize a package to include flights and hotel accommodation, work with the government authorities or agencies to facilitate easy transit through immigration and other formalities, ensure there is easy transportation available when\n            you arrive and attend to your pre-treatment as well as post treatment care.\n        </p>\n        <h3 class=\"font21\">QUALITY HEALTH CARE</h3>\n        <p class=\"font15\">\n            India is second to none when it comes to state of the art fully integrated healthcare. The fact that there are so many doctors of Indian origin in the United States, the United Kingdom and Singapore among other regions in the world is a testimony to their\n            reliability and expertise. The only reason why medical treatments is more affordable in India compared to the US, the UK or Singapore is the currency. Bypass surgery costs $25,000 in the UK and $35,000 in the US. The same costs $6,000 in India.\n            From Lasik surgery to in-vitro fertilization, everything is exponentially more affordable.\n        </p>\n    </div>\n    <button style=\"background-color:rgb(48, 71, 112);\" type=\"button\" onclick=\"window.location.href='http://localhost:4200/contact'\" class=\"btn btn-primary customBtn btn-lg\"><i class=\"fa fa-hospital-o\"></i> Contact Us</button>\n</div>\n\n<div class=\"paddingTB60\">\n    <div class=\"container-fluid offerView\">\n        <div style=\"color:white;font-weight:bold;padding:30px;\" class=\"container\">\n            <h1 style=\"color:white;\" class=\"fontColor\">\n                OFFERING A PATIENT-FRIENDLY ENVIRONMENT!\n            </h1>\n            <h4>Caring for all your medical assistance needs.</h4>\n            <div class=\"row\">\n                <div class=\"col-md-3 center\">\n                    <a routerLink=\"/services/featuredservices\" title=\"\" target=\"\">\n                        <img src=\"http://www.mediaide.in/wp-content/uploads/2016/10/health-insurance.png\" alt=\"Featured Services\">\n                    </a>\n                    <p class=\"font16 mt20\">Featured Services</p>\n                </div>\n                <div class=\"col-md-3 center\">\n                    <a routerLink=\"/services/postcare\" title=\"\" target=\"\">\n                        <img src=\"http://www.mediaide.in/wp-content/uploads/2016/10/prescription-Copy.png\" alt=\"Post Operative Care\">\n                    </a>\n                    <p class=\"font16 mt20\">POST OPERATIVE CARE</p>\n                </div>\n                <div class=\"col-md-3 center\">\n                    <a routerLink=\"/services/medicaltreatment\" title=\"\" target=\"\">\n                        <img src=\"http://www.mediaide.in/wp-content/uploads/2016/10/appointment-request.png\" alt=\"Medical Treatment\">\n                    </a>\n                    <p class=\"font16 mt20\">Medical Treatment</p>\n                </div>\n                <div class=\"col-md-3 center\">\n                    <p style=\"color:white;\" class=\"font19\">Caring for all your medical assistance needs.</p>\n                    <p>\n                        We have designed our system for the betterment of both mind and body. We offer a full-spectrum of medical assistance, and travel services designed to meet your needs. Our team prioritizes care and communication, putting you at the center.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div style=\"padding-top:0;\" class=\"container paddingTB60\">\n    <h1 class=\"fontColor\">WE SPECIALIZE IN CONCIERGE HEALTHCARE</h1>\n    <p class=\"font15\">\n        MediAide will guide you to your journey for the best healthcare options across the globe. We also guide and facilitate you to the most logistics aspects for your medical visits to the best clinics and hospitals worldwide.\n        <br>MediAide is a provider of professional intensive care, that deals with the patient’s needs. We aim to offer highly personalized services to our patients and give them packages for their treatment in India. We also provide online medical records\n        up to their post-treatment, including various kinds of Ayurveda packages. Apart from providing various services, we also assist people with travel logistics, visa, transportation and medical treatment. We are also tied up with some of the best\n        hospitals and doctors in India so that you can have a world-class care and affordable charges.\n    </p>\n    <button routerLink=\"/contact\" class=\" btn btn-primary customBtn\">Request an evaluation Meeting</button>\n</div>\n\n<div class=\"container-fluid offerView\">\n    <div style=\"color:white;padding:30px;\" class=\"container center reviewDiv\">\n        <h1 style=\"color:white;\" class=\"fontColor\">\n            WE PROMISED TO TAKE CARE… AND DELIVERED\n        </h1>\n        <br>\n        <p class=\"font16\">\n            The hospitals and doctors in India are just as proficient as anywhere else in the world. MediAide helped me throughout my stay and they made sure that my treatment and my post treatment care went through smoothly. If not for Mediaide, I would have been\n            lost. They helped me save a lot of my money was well which was cherry on the top\n        </p>\n        <p style=\"color:white;\" class=\"font21 center\">TJane Gibson,USA</p>\n    </div>\n</div>\n\n<div class=\"parallax paddingTB60 doctorPicture\">\n    <div class=\"container center\">\n        <div class=\"row\">\n            <div class=\"col-md-12 parallax-heading-container\">\n                <h2 class=\"lg-text\">WAIT! THERE’S A LOT MORE TO SEE!</h2>\n                <button style=\"background-color:rgb(92, 184, 92);\"  routerLink=\"/about/ourcompany\" class=\" btn btn-primary customBtn\">\n                    CHECKOUT ALL THE AWESOME FEATURES\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_carousel_carousel__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__("../../../../../src/app/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_tabs_homepage_tabs__ = __webpack_require__("../../../../../src/app/home/homepage.tabs/homepage.tabs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__shared_carousel_carousel__["a" /* Carousel */],
                __WEBPACK_IMPORTED_MODULE_4__homepage_tabs_homepage_tabs__["a" /* HomePageTabs */],
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* Home */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* routing */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__("../../../../../src/app/home/home.ts");

// import { PageNotFoundComponent } from './not-found.component';

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home__["a" /* Home */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/home.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.css")]
        })
    ], Home);
    return Home;
}());



/***/ }),

/***/ "../../../../../src/app/home/homepage.tabs/homepage.tabs.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homepageDiv {\n    position: relative;\n    top: -110px;\n}\n\n.homepageDiv div div {\n    padding: 20px;\n}\n\n.homepageDiv div div p {\n    color: white;\n    margin-top: 10px;\n}\n\n.homepageDiv div div img {\n    height: 100px;\n}\n\n.homepageDivOdd {\n    background-color: rgb(73, 154, 162);\n}\n\n.homepageDivEven {\n    background-color: rgb(89, 171, 179);\n}\n\n@media only screen and (max-width: 500px) {\n    .homepageDiv {\n        top: -20px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/homepage.tabs/homepage.tabs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container homepageDiv\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-xs-6 homepageDivOdd center\">\n            <img src=\"../../assets/logo/icon_1.png\">\n            <p class=\"font19\">MEDICAL SERVICES</p>\n            <button routerLink=\"/services/medicaltreatment\" style=\"background-color:rgb(48, 71, 112);\" type=\"button\" class=\"btn btn-primary customBtn\">More</button>\n        </div>\n        <div class=\"col-md-3 col-xs-6 homepageDivEven center\">\n            <img src=\"../../assets/logo/icon_2.png\">\n            <p class=\"font19\">BOOK A CONCIERGE</p>\n            <button routerLink=\"/contact\" style=\"background-color:rgb(48, 71, 112);\" type=\"button\" class=\"btn btn-primary customBtn\">More</button>\n        </div>\n        <div class=\"col-md-3 col-xs-6 homepageDivOdd center\">\n            <img src=\"../../assets/logo/icon_3.png\">\n            <p class=\"font19\">MEDICAL RECORD</p>\n            <button routerLink=\"/services/medicaltreatment\" style=\"background-color:rgb(48, 71, 112);\" type=\"button\" class=\"btn btn-primary customBtn\">More</button>\n        </div>\n        <div class=\"col-md-3 col-xs-6 homepageDivEven center\">\n            <img src=\"../../assets/logo/icon_4.png\">\n            <p class=\"font19\">WHY US?</p>\n            <button routerLink=\"/about/whyus\" style=\"background-color:rgb(48, 71, 112);\" type=\"button\" class=\"btn btn-primary customBtn\">More</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/homepage.tabs/homepage.tabs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePageTabs = (function () {
    function HomePageTabs() {
    }
    HomePageTabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'homepage-tabs',
            template: __webpack_require__("../../../../../src/app/home/homepage.tabs/homepage.tabs.html"),
            styles: [__webpack_require__("../../../../../src/app/home/homepage.tabs/homepage.tabs.css")]
        })
    ], HomePageTabs);
    return HomePageTabs;
}());



/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#carouselwidth {\n    width: 100%;\n    height: 750px;\n}\n\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .icon-prev {\n    position: absolute;\n    left: 20px;\n}\n\n.carousel-control .glyphicon-chevron-right,\n.carousel-control .icon-right {\n    position: absolute;\n    right: 20px;\n}\n\n@media only screen and (max-width: 500px) {\n    #carouselwidth {\n        height: 350px;\n    }\n}\n\n@media only screen and (min-width: 500px) {\n    .carousel-caption {\n        position: absolute;\n        top: 300px;\n        right: -400px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n            <img id=\"carouselwidth\" src=\"../../../../assets/home/slider3.jpg\">\n            <div class=\"carousel-caption\">\n                <h1 class=\"fontColor\">QUALITY CARE</h1>\n                <p class=\"font19\">Your Health is our Priority</p>\n                <button onclick=\"window.location.href='http://localhost:4200/contact'\" style=\"background-color:rgb(48, 71, 112);\" class=\"btn btn-primary customBtn center-block\">MAKE AN APPOINTMENT</button>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img id=\"carouselwidth\" src=\"../../../../assets//home/slider2.jpg\">\n            <div class=\"carousel-caption\">\n                <h1 class=\"fontColor\">AFFORDABLE PLANS</h1>\n                <p class=\"font19\">Tailored packages for your Health</p>\n                <button routerLink=\"/quotation/quote\" style=\"background-color:rgb(48, 71, 112);\" class=\"btn btn-primary customBtn center-block\">GET A QUOTE</button>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img id=\"carouselwidth\" src=\"../../../../assets/home/slider1.jpg\">\n            <div class=\"carousel-caption\">\n                <h1 class=\"fontColor\">FREE ASSESSMENT</h1>\n                <p class=\"font19\">Request a callback</p>\n                <button routerLink=\"/enquiry\" onclick=\"window.location.href='http://localhost:4200/enquiry'\" style=\"background-color:rgb(48, 71, 112);\" class=\"btn btn-primary customBtn center-block\">ENQUIRY FORM</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Controls -->\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Carousel = (function () {
    function Carousel() {
    }
    Carousel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'carousel',
            template: __webpack_require__("../../../../../src/app/shared/carousel/carousel.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/carousel/carousel.css")]
        })
    ], Carousel);
    return Carousel;
}());



/***/ }),

/***/ "../../../../../src/assets/home/doctor_blue_left.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "doctor_blue_left.5558794ff503c3e48d69.jpg";

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map