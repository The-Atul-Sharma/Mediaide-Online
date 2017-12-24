webpackJsonp(["quotation.module"],{

/***/ "../../../../../src/app/quotation/quotation.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"position:relative\">\n    <div class=\"row mt20 mb20\">\n        <div class=\"col-xs-12 col-sm-8 col-md-10\">\n            <form #quotationForm role=\"form\">\n                <fieldset>\n                    <div class=\"row\">\n                        <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-4\">\n                            <label class=\"control-label\">Country</label>\n                            <select class=\"form-control input-lg br0\" id=\"country\" [(ngModel)]=\"quotationData.country\" patternService=\"namechk\" name=\"country\">\n                                <option *ngFor=\"let country of countryList\" value=\"country\">{{ country }}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-4\">\n                            <label class=\"control-label\">Treatment Type</label>\n                            <select class=\"form-control input-lg br0\" id=\"treatment\" [(ngModel)]=\"quotationData.treatmentType\" patternService=\"namechk\" name=\"country\" [value]=\"treatment.id\">\n                                <option *ngFor=\"let treatment of treatmentType\" value=\"treatment.id\">{{treatment.name}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group font15 col-sm-6 col-xs-12 col-md-4\">\n                            <label class=\"control-label\">Number Of Patient</label>\n                            <select class=\"form-control input-lg br0\" id=\"number\" [(ngModel)]=\"quotationData.patientNumber\" patternService=\"namechk\" name=\"country\" [value]=\"county\">\n                                <option *ngFor=\"let number of noOfPeople\" [value]=\"number\">{{number}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group font15 col-md-12\">\n                            <label class=\"control-label\">Other Expenses</label>\n                            <div class=\"row\" *ngFor=\"let facility of facilitiesList\">\n                                <div class=\"col-md-2\">\n                                    <label class=\"radio-inline\">\n                                        <input type=\"radio\" id=\"airlineRadio\" name=\"facility\" [(ngModel)]=\"quotationData.other.airline\" value=\"facility\">\n                                        {{ facility }}\n                                    </label>\n                                </div>\n                                <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                    <label class=\"radio-inline\">\n                                        <input type=\"radio\" id=\"foodRadio\" name=\"food\" [(ngModel)]=\"quotationData.other.food\" value=\"true\">Food\n                                    </label>\n                                </div>\n                                <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                    <label class=\"radio-inline\">\n                                        <input type=\"radio\" id=\"visaRadio\" name=\"visa\" [(ngModel)]=\"quotationData.other.visa\" value=\"true\">Visa\n                                    </label>\n                                </div>\n                                <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                    <label class=\"radio-inline\">\n                                        <input type=\"radio\" id=\"hotelRadio\" name=\"hotel\" [(ngModel)]=\"quotationData.other.hotel\" value=\"true\">Hotel\n                                    </label>\n                                </div>\n                                <div class=\"col-md-2 col-sm-4 col-xs-4\">\n                                    <label class=\"radio-inline\">\n                                        <input type=\"radio\" id=\"otherRadio\" name=\"other\" [(ngModel)]=\"quotationData.other.other\" value=\"true\">Other\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </fieldset>\n            </form>\n            <button class=\"btn btn-primary customBtn\" routerLink=\"/quotation/estimate\" (click)=\"setEstimate()\">Get Estimate</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationModule", function() { return QuotationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation_routing__ = __webpack_require__("../../../../../src/app/quotation/quotation.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation__ = __webpack_require__("../../../../../src/app/quotation/quotation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_estimation_estimation__ = __webpack_require__("../../../../../src/app/shared/estimation/estimation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuotationModule = (function () {
    function QuotationModule() {
    }
    QuotationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quotation__["a" /* GetAQuote */],
                __WEBPACK_IMPORTED_MODULE_3__shared_estimation_estimation__["a" /* GetEstimation */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__quotation_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"]
            ],
        })
    ], QuotationModule);
    return QuotationModule;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation__ = __webpack_require__("../../../../../src/app/quotation/quotation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_estimation_estimation__ = __webpack_require__("../../../../../src/app/shared/estimation/estimation.ts");



var routes = [
    { path: 'quote', component: __WEBPACK_IMPORTED_MODULE_1__quotation__["a" /* GetAQuote */] },
    { path: 'estimate', component: __WEBPACK_IMPORTED_MODULE_2__shared_estimation_estimation__["a" /* GetEstimation */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/quotation/quotation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAQuote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/app.api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetAQuote = (function () {
    function GetAQuote(_commonService, _apiService) {
        this._commonService = _commonService;
        this._apiService = _apiService;
        this.noOfPeople = ['1', '2', '3', '4'];
    }
    GetAQuote.prototype.ngOnInit = function () {
        this.getEstimateDetails();
        // this.postEstimateDetails('abc');
    };
    GetAQuote.prototype.postEstimateDetails = function (selectedData) {
        var _this = this;
        return this._apiService.post(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].GetAQuote, selectedData)
            .subscribe(function (res) {
        }, function (err) {
            console.log('ERR', err);
            _this._apiService.handleError(err);
        });
    };
    GetAQuote.prototype.getEstimateDetails = function () {
        var _this = this;
        return this._apiService.get(__WEBPACK_IMPORTED_MODULE_1__common_service__["b" /* ServiceEndPoints */].GetAQuote)
            .subscribe(function (res) {
            console.log("response", res._body);
            _this.countryList = res._body.country;
            console.log("countryList", _this.countryList);
            _this.treatmentType = res._body['treatment'];
            console.log("treatmentType", _this.treatmentType);
            _this.facilitiesList = res._body.facilities;
            console.log("facilities", _this.facilitiesList);
        }, function (e) {
            console.log('ERR', e);
        });
    };
    GetAQuote = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quotation',
            template: __webpack_require__("../../../../../src/app/quotation/quotation.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* CommonAPIService */]])
    ], GetAQuote);
    return GetAQuote;
}());



/***/ }),

/***/ "../../../../../src/app/shared/estimation/estimation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".estimate {\n    font-size: 20px;\n    color: rgb(48, 71, 112);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/estimation/estimation.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container paddingTB60 estimate\">\n    <div class=\"row\">\n        <table class=\"table table-striped table-condensed\">\n            <thead>\n                <tr>\n                    <th>Total Days</th>\n                    <th>Days in Hospital</th>\n                    <th>Days Outside Hospital</th>\n                    <th>Total Cost</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>80</td>\n                    <td>19</td>\n                    <td>61</td>\n                    <td>$ 2100 </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/estimation/estimation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetEstimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetEstimation = (function () {
    function GetEstimation() {
    }
    GetEstimation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'estimation',
            template: __webpack_require__("../../../../../src/app/shared/estimation/estimation.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/estimation/estimation.css")]
        })
    ], GetEstimation);
    return GetEstimation;
}());



/***/ })

});
//# sourceMappingURL=quotation.module.chunk.js.map