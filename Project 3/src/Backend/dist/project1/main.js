(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/XCx":
/*!********************************************!*\
  !*** ./src/app/services/mrecom.service.ts ***!
  \********************************************/
/*! exports provided: MrecomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrecomService", function() { return MrecomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MrecomService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMrecom(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/mrecom/" + id;
        return this.httpClient.get(URL);
    }
}
MrecomService.ɵfac = function MrecomService_Factory(t) { return new (t || MrecomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MrecomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MrecomService, factory: MrecomService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MrecomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fanlinqin/HW8/project1/src/main.ts */"zUnb");


/***/ }),

/***/ "1WC1":
/*!*******************************************!*\
  !*** ./src/app/services/poptv.service.ts ***!
  \*******************************************/
/*! exports provided: PoptvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoptvService", function() { return PoptvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PoptvService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPoptv() {
        let URL = "https://sample666.wn.r.appspot.com//apis/poptv";
        return this.httpClient.get(URL);
    }
}
PoptvService.ɵfac = function PoptvService_Factory(t) { return new (t || PoptvService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PoptvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PoptvService, factory: PoptvService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoptvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1jUB":
/*!******************************************!*\
  !*** ./src/app/services/popm.service.ts ***!
  \******************************************/
/*! exports provided: PopmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmService", function() { return PopmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PopmService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPop() {
        let URL = "https://sample666.wn.r.appspot.com//apis/popmovie";
        return this.httpClient.get(URL);
    }
}
PopmService.ɵfac = function PopmService_Factory(t) { return new (t || PopmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PopmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopmService, factory: PopmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1yWS":
/*!***************************************************!*\
  !*** ./src/app/components/popm/popm.component.ts ***!
  \***************************************************/
/*! exports provided: PopmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmComponent", function() { return PopmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_popm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popm.service */ "1jUB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function PopmComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopmComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.title);
} }
function PopmComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function PopmComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopmComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.popmdata);
} }
function PopmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.title);
} }
function PopmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function PopmComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function PopmComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopmComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function PopmComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopmComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopmComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class PopmComponent {
    constructor(popmService, config) {
        this.popmService = popmService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.popmService.getAllPop().subscribe(res => {
            this.popmdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.popmdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.popmdata[i]);
                }
                else {
                    this.formatted[j].push(this.popmdata[i]);
                }
            }
        });
    }
}
PopmComponent.ɵfac = function PopmComponent_Factory(t) { return new (t || PopmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_popm_service__WEBPACK_IMPORTED_MODULE_2__["PopmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
PopmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopmComponent, selectors: [["app-popm"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px"], ["id", "mobile", 3, "interval", 4, "ngIf"], ["id", "desktop", 3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "15px"], ["id", "desktop", 3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"]], template: function PopmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopmComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopmComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopmComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popmdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n   margin-left: 150px;\n   margin-top:40px;\n   color: white;\n}\n\n#desktop[_ngcontent-%COMP%]{\n    width: 1130px;\n    margin-left: 30px;\n    height:280px;\n    margin-top:30px;\n    outline:none;\n}\n\n.bb1[_ngcontent-%COMP%]{\n    margin-left: 110px;\n}\n\nimg[_ngcontent-%COMP%]{\n    padding:8px;\n    width: 150px;\n    height:230px;    \n}\n\n.titlename[_ngcontent-%COMP%]{\n    margin-left:9px;\n    background-color: black;\n    width: 133px;\n    height:35px; \n    margin-top: -30px;\n    position: relative;\n    box-shadow: 0 0 3px 4px black;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    opacity: 0;\n    \n}\n\n.cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n\n.cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n#mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n\n#mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n\n.mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n\n.mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n\n.mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtL3BvcG0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsWUFBWTtBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixVQUFVOztBQUVkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsNEJBQTRCO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BtL3BvcG0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgbWFyZ2luLXRvcDo0MHB4O1xuICAgY29sb3I6IHdoaXRlO1xufVxuXG4jZGVza3RvcHtcbiAgICB3aWR0aDogMTEzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGhlaWdodDoyODBweDtcbiAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgb3V0bGluZTpub25lO1xufVxuLmJiMXtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG59XG5cbmltZ3tcbiAgICBwYWRkaW5nOjhweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OjIzMHB4OyAgICBcbn1cblxuXG4udGl0bGVuYW1le1xuICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTMzcHg7XG4gICAgaGVpZ2h0OjM1cHg7IFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3BhY2l0eTogMDtcbiAgICBcbn1cblxuLmNjOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG59XG5cbi5jYzpob3ZlciAudGl0bGVuYW1le1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNtb2JpbGV7XG4gICAgd2lkdGg6MzUwcHg7XG4gICAgaGVpZ2h0OjMxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cbiNtb2JpbGVpbWd7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDozMDBweDtcbn1cblxuLm1vYmlsZW5hbWV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgaGVpZ2h0OjM1cHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm1tMXtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5tbTE6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbn1cblxuXG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popm',
                templateUrl: './popm.component.html',
                styleUrls: ['./popm.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
            }]
    }], function () { return [{ type: _services_popm_service__WEBPACK_IMPORTED_MODULE_2__["PopmService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "2Gn4":
/*!*****************************************************!*\
  !*** ./src/app/components/minfo/minfo.component.ts ***!
  \*****************************************************/
/*! exports provided: MinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinfoComponent", function() { return MinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _services_mvedio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mvedio.service */ "OTHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_mdetail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mdetail.service */ "x/oX");
/* harmony import */ var _services_mcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mcast.service */ "wFeJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/castdetail.service */ "GgO8");
/* harmony import */ var _services_castex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/castex.service */ "mbFq");
/* harmony import */ var _services_mreview_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/mreview.service */ "tWl2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_mrecom_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/mrecom.service */ "/XCx");
/* harmony import */ var _services_msimilar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/msimilar.service */ "H2pd");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




















function MinfoComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", v_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 400)("width", 600);
} }
function MinfoComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_2_div_1_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.mvediodata);
} }
function MinfoComponent_div_2_div_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r26);
} }
function MinfoComponent_div_2_div_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const la_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](la_r27);
} }
function MinfoComponent_div_2_div_2_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_2_div_2_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const de_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r28.storage(de_r19); return ctx_r28.opalert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_2_div_2_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_2_div_2_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r31.remove(); return ctx_r31.realert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_2_div_2_div_1_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_2_div_2_div_1_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genres :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinfoComponent_div_2_div_2_div_1_div_10_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Spoken Languages :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MinfoComponent_div_2_div_2_div_1_div_14_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MinfoComponent_div_2_div_2_div_1_button_15_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MinfoComponent_div_2_div_2_div_1_button_16_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MinfoComponent_div_2_div_2_div_1_ngb_alert_17_Template, 2, 0, "ngb-alert", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MinfoComponent_div_2_div_2_div_1_ngb_alert_18_Template, 2, 0, "ngb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r19.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r18.year, " \u00A0 | \u00A0 \u2605\u00A0\u00A0", de_r19.vote_average, " | ", ctx_r18.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.addbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.removebutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.alert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.alert2);
} }
function MinfoComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_2_div_2_div_1_Template, 19, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.mdetail);
} }
function MinfoComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r33.overview);
} }
function MinfoComponent_div_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r36 = ctx.$implicit;
    const de_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", de_r34.title, "&url=https://www.youtube.com/watch?v=", v_r36.key, "    &hashtags=USC&hashtags=CSCI571&hashtags=FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", v_r36.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", v_r36.key, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_2_div_10_div_1_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.mvediodata);
} }
function MinfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_2_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_div_2_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinfoComponent_div_2_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mvediodata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mdetail);
} }
function MinfoComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", v_r43.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 280)("width", 350);
} }
function MinfoComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_3_div_1_div_1_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.mvediodata);
} }
function MinfoComponent_div_3_div_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r52);
} }
function MinfoComponent_div_3_div_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const la_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](la_r53);
} }
function MinfoComponent_div_3_div_2_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_3_div_2_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const de_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r54.storage(de_r45); return ctx_r54.opalert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_3_div_2_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_3_div_2_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r57.remove(); return ctx_r57.realert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_3_div_2_div_1_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_3_div_2_div_1_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genres :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinfoComponent_div_3_div_2_div_1_div_10_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Spoken Languages :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MinfoComponent_div_3_div_2_div_1_div_14_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MinfoComponent_div_3_div_2_div_1_button_15_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MinfoComponent_div_3_div_2_div_1_button_16_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MinfoComponent_div_3_div_2_div_1_ngb_alert_17_Template, 2, 0, "ngb-alert", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MinfoComponent_div_3_div_2_div_1_ngb_alert_18_Template, 2, 0, "ngb-alert", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r45 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r45.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r45.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r44.year, " \u00A0 | \u00A0 \u2605\u00A0\u00A0", de_r45.vote_average, " | ", ctx_r44.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.addbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.removebutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.alert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.alert2);
} }
function MinfoComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_3_div_2_div_1_Template, 19, 11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.mdetail);
} }
function MinfoComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r59.overview);
} }
function MinfoComponent_div_3_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r62 = ctx.$implicit;
    const de_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", de_r60.title, "&url=https://www.youtube.com/watch?v=", v_r62.key, "    &hashtags=USC&hashtags=CSCI571&hashtags=FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", v_r62.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", v_r62.key, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_3_div_10_div_1_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.mvediodata);
} }
function MinfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_3_div_1_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_3_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_div_3_div_6_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinfoComponent_div_3_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mvediodata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mdetail);
} }
function MinfoComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_4_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ca_r65 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); ctx_r66.open(_r4); return ctx_r66.passdata(ca_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ca_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ca_r65.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r65.chararcter);
} }
function MinfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_div_4_div_4_Template, 9, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.mcast);
} }
function MinfoComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_div_5_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ca_r69 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); ctx_r70.open(_r4); return ctx_r70.passdata(ca_r69); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ca_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ca_r69.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r69.chararcter);
} }
function MinfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_div_5_div_4_Template, 9, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.mcast);
} }
function MinfoComponent_ng_template_6_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 80);
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ctx_r76.castpro, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_ng_template_6_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 81);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ctx_r77.castpro, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", cade_r75.birthday, "");
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", cade_r75.birth_palce, "");
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", cade_r75.gender, "");
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cade_r75.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.homepage);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", cade_r75.known_for_department, "");
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", cade_r75.also_know_as, "");
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ex_r95.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r96.Imdb);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ex_r95.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r97.Ins);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ex_r95.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r98.Face);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_7_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ex_r95.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r99.Twitter);
} }
function MinfoComponent_ng_template_6_div_6_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_3_div_7_a_1_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_3_div_7_a_2_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_ng_template_6_div_6_div_3_div_7_a_3_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_ng_template_6_div_6_div_3_div_7_a_4_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.twitter_id);
} }
function MinfoComponent_ng_template_6_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_3_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_3_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_ng_template_6_div_6_div_3_div_3_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_ng_template_6_div_6_div_3_div_4_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MinfoComponent_ng_template_6_div_6_div_3_div_5_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_ng_template_6_div_6_div_3_div_6_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MinfoComponent_ng_template_6_div_6_div_3_div_7_Template, 5, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birth_palce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.also_know_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r78.castexdata);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", cade_r75.birthday, "");
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", cade_r75.birth_palce, "");
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", cade_r75.gender, "");
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cade_r75.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.homepage);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", cade_r75.known_for_department, "");
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", cade_r75.also_know_as, "");
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ex_r118.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r119.Imdb);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ex_r118.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r120.Ins);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ex_r118.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r121.Face);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_7_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ex_r118.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r122.Twitter);
} }
function MinfoComponent_ng_template_6_div_6_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_4_div_7_a_1_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_4_div_7_a_2_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_ng_template_6_div_6_div_4_div_7_a_3_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_ng_template_6_div_6_div_4_div_7_a_4_Template, 2, 2, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.twitter_id);
} }
function MinfoComponent_ng_template_6_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_4_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_4_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_ng_template_6_div_6_div_4_div_3_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_ng_template_6_div_6_div_4_div_4_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MinfoComponent_ng_template_6_div_6_div_4_div_5_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_ng_template_6_div_6_div_4_div_6_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MinfoComponent_ng_template_6_div_6_div_4_div_7_Template, 5, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birth_palce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.also_know_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.castexdata);
} }
function MinfoComponent_ng_template_6_div_6_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_ng_template_6_div_6_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.biography);
} }
function MinfoComponent_ng_template_6_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_5_div_1_Template, 2, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_5_div_2_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
} }
function MinfoComponent_ng_template_6_div_6_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_ng_template_6_div_6_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.biography);
} }
function MinfoComponent_ng_template_6_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_div_6_div_1_Template, 2, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_div_6_div_2_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
} }
function MinfoComponent_ng_template_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_ng_template_6_div_6_img_1_Template, 1, 1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_ng_template_6_div_6_img_2_Template, 1, 1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_ng_template_6_div_6_div_3_Template, 8, 7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_ng_template_6_div_6_div_4_Template, 8, 7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MinfoComponent_ng_template_6_div_6_div_5_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_ng_template_6_div_6_div_6_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
} }
function MinfoComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinfoComponent_ng_template_6_Template_button_click_3_listener() { const d_r73 = ctx.dismiss; return d_r73("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_ng_template_6_div_6_Template, 7, 6, "div", 74);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.castname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.castdedata);
} }
function MinfoComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reviews \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r137.relength);
} }
function MinfoComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", re_r139.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A review created by ", re_r139.authoe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r139.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r139.authoe, " on ", re_r139.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r139.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", re_r139.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_8_div_1_Template, 4, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_8_div_2_Template, 14, 7, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.relength !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.mreview);
} }
function MinfoComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reviews \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r140.relength);
} }
function MinfoComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", re_r142.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A review created by ", re_r142.authoe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r142.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r142.authoe, " on ", re_r142.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r142.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", re_r142.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MinfoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_9_div_1_Template, 4, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_9_div_2_Template, 14, 7, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.relength !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.mreview);
} }
function MinfoComponent_div_10_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_10_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_10_p_2_Template, 2, 0, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.mobile);
} }
function MinfoComponent_div_11_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", imga_r148.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r148.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r148.title);
} }
function MinfoComponent_div_11_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MinfoComponent_div_11_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 130);
} }
function MinfoComponent_div_11_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_11_ngb_carousel_1_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r145.mrecomdata);
} }
function MinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", img_r155.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r155.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r155.title);
} }
function MinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r152);
} }
function MinfoComponent_div_11_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 130);
} }
function MinfoComponent_div_11_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_11_ngb_carousel_2_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.mrecomformatted);
} }
function MinfoComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_11_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_11_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.mobile);
} }
function MinfoComponent_div_12_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinfoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_12_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_12_p_2_Template, 2, 0, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.mobile);
} }
function MinfoComponent_div_13_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", imga_r162.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r162.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r162.title);
} }
function MinfoComponent_div_13_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MinfoComponent_div_13_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 130);
} }
function MinfoComponent_div_13_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_13_ngb_carousel_1_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r159.msidata);
} }
function MinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", img_r169.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r169.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r169.title);
} }
function MinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r166);
} }
function MinfoComponent_div_13_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 130);
} }
function MinfoComponent_div_13_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_13_ngb_carousel_2_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r160.msiformatted);
} }
function MinfoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinfoComponent_div_13_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_13_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.mobile);
} }
class MinfoComponent {
    constructor(mvedioService, route, mdetailService, mcastService, modalService, castdetail, castex, mreviewService, cDate, mrecomService, msimilarService, router, config) {
        this.mvedioService = mvedioService;
        this.route = route;
        this.mdetailService = mdetailService;
        this.mcastService = mcastService;
        this.modalService = modalService;
        this.castdetail = castdetail;
        this.castex = castex;
        this.mreviewService = mreviewService;
        this.cDate = cDate;
        this.mrecomService = mrecomService;
        this.msimilarService = msimilarService;
        this.router = router;
        this.config = config;
        this.Imdb = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faImdb"];
        this.Ins = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.Face = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookSquare"];
        this.Twitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.alert = false;
        this.alert2 = false;
        this.addbutton = true;
        this.removebutton = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.fetchmvData();
        this.fetchmdData();
        this.fetchmcData();
        this.fetchmreData();
        this.fetchmrecomData();
        this.fetchmsiData();
        this.updatebutton();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchmvData() {
        this.mvedioService.getAllMvedio(this.id).subscribe(res => {
            this.mvediodata = res;
            console.log(this.mvediodata);
        });
    }
    fetchmdData() {
        this.mdetailService.getAllMdetail(this.id).subscribe(res => {
            this.mdetail = res;
            var timeArr = res[0].release_date.split("-");
            this.year = timeArr[0];
            this.duration = Math.floor(res[0].runtime / 60) + "hrs " + (res[0].runtime % 60) + "mins";
            this.genres = res[0].genres;
            this.language = res[0].spoken_languages;
            this.upcontinue(res[0]);
            this.upmylist(res[0]);
        });
    }
    fetchmcData() {
        this.mcastService.getAllMcast(this.id).subscribe(res => {
            this.mcast = res;
        });
    }
    fetchmreData() {
        this.mreviewService.getAllMreview(this.id).subscribe(res => {
            this.mreview = res;
            this.relength = this.mreview.length;
            for (var i = 0; i < this.relength; i++) {
                this.mreview[i].created_at = this.cDate.transform(this.mreview[i].created_at, 'medium');
            }
        });
    }
    fetchmrecomData() {
        this.mrecomService.getAllMrecom(this.id).subscribe(res => {
            this.mrecomdata = res;
            this.mrecomformatted = [];
            var j = -1;
            for (var i = 0; i < this.mrecomdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.mrecomformatted[j] = [];
                    this.mrecomformatted[j].push(this.mrecomdata[i]);
                }
                else {
                    this.mrecomformatted[j].push(this.mrecomdata[i]);
                }
            }
        });
    }
    fetchmsiData() {
        this.msimilarService.getAllMsimilar(this.id).subscribe(res => {
            this.msidata = res;
            this.msiformatted = [];
            var j = -1;
            for (var i = 0; i < this.msidata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.msiformatted[j] = [];
                    this.msiformatted[j].push(this.msidata[i]);
                }
                else {
                    this.msiformatted[j].push(this.msidata[i]);
                }
            }
        });
    }
    passdata(id) {
        this.castid = id.id;
        this.fetchcdetail(this.castid);
        this.castname = id.name;
        this.castpro = id.profile_path;
        this.fetchcastex(this.castid);
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fetchcdetail(cid) {
        this.castdetail.getAllCastde(cid).subscribe(res => {
            this.castdedata = res;
        });
    }
    fetchcastex(cid) {
        this.castex.getAllCastex(cid).subscribe(res => {
            this.castexdata = res;
        });
    }
    updatebutton() {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id === this.id) {
                    this.addbutton = false;
                    this.removebutton = true;
                }
            }
        }
    }
    storage(data) {
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "movie" };
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var cur = [];
        cur.push(d);
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                cur.push(da[i]);
            }
        }
        localStorage.setItem('watchlist', JSON.stringify(cur));
    }
    remove() {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var index = -1;
        for (var i = 0; i < da.length; i++) {
            if (da[i].id == this.id) {
                index = i;
            }
        }
        if (index !== -1) {
            da.splice(index, 1);
        }
        localStorage.removeItem('watchlist');
        localStorage.setItem('watchlist', JSON.stringify(da));
    }
    opalert() {
        this.alert = true;
        this.addbutton = false;
        this.removebutton = true;
        setTimeout(() => this.alert = false, 5000);
    }
    realert() {
        this.alert2 = true;
        this.addbutton = true;
        this.removebutton = false;
        setTimeout(() => this.alert2 = false, 5000);
    }
    upcontinue(data) {
        var da = JSON.parse(localStorage.getItem('continue'));
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "movie" };
        var cur = [];
        cur.push(d);
        var index = -1;
        if (da === null) {
            localStorage.setItem('continue', JSON.stringify(cur));
        }
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id == this.id) {
                    index = i;
                }
            }
            if (index !== -1) {
                da.splice(index, 1);
                var newA = cur.concat(da);
                localStorage.removeItem('continue');
                localStorage.setItem('continue', JSON.stringify(newA));
            }
            if (index === -1) {
                var newB = cur.concat(da);
                localStorage.removeItem('continue');
                localStorage.setItem('continue', JSON.stringify(newB));
            }
        }
    }
    upmylist(data) {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "movie" };
        var cur = [];
        cur.push(d);
        var index = -1;
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id == this.id) {
                    index = i;
                }
            }
            if (index !== -1) {
                da.splice(index, 1);
                var newA = cur.concat(da);
                localStorage.removeItem('watchlist');
                localStorage.setItem('watchlist', JSON.stringify(newA));
            }
        }
    }
}
MinfoComponent.ɵfac = function MinfoComponent_Factory(t) { return new (t || MinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mvedio_service__WEBPACK_IMPORTED_MODULE_2__["MvedioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mdetail_service__WEBPACK_IMPORTED_MODULE_4__["MdetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mcast_service__WEBPACK_IMPORTED_MODULE_5__["McastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__["CastdetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_castex_service__WEBPACK_IMPORTED_MODULE_8__["CastexService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mreview_service__WEBPACK_IMPORTED_MODULE_9__["MreviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mrecom_service__WEBPACK_IMPORTED_MODULE_11__["MrecomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_msimilar_service__WEBPACK_IMPORTED_MODULE_12__["MsimilarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"])); };
MinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MinfoComponent, selectors: [["app-minfo"]], decls: 15, vars: 10, consts: [[2, "height", "40px", "color", "#050a30"], [4, "ngIf"], ["style", "overflow-y: initial"], ["content", ""], ["id", "vdiv", 4, "ngIf"], ["id", "dediv", 4, "ngIf"], ["id", "description"], [2, "font-size", "20px", "margin-top", "13px"], ["style", "font-size: 17px;color:#d4d4d4;margin-top: 3px;font-weight: 200;", 4, "ngFor", "ngForOf"], ["id", "share"], [2, "font-size", "20px", "margin-top", "20px"], [4, "ngFor", "ngForOf"], ["id", "vdiv"], ["class", "vedio", 4, "ngFor", "ngForOf"], [1, "vedio"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"], ["id", "dediv"], ["class", "detail", 4, "ngFor", "ngForOf"], [1, "detail"], ["id", "name"], ["id", "tagline"], ["id", "year"], ["id", "genres"], [2, "display", "inline-block"], ["style", "display: inline-block;font-weight:lighter; color:#d4d4d4", 4, "ngFor", "ngForOf"], ["id", "language"], ["id", "addb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "removeb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "adda", "type", "success", 4, "ngIf"], ["id", "removea", "type", "danger", 4, "ngIf"], [2, "display", "inline-block", "font-weight", "lighter", "color", "#d4d4d4"], ["id", "addb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "removeb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "adda", "type", "success"], ["id", "removea", "type", "danger"], [2, "font-size", "17px", "color", "#d4d4d4", "margin-top", "3px", "font-weight", "200"], ["id", "twitter", "target", "_blank", 1, "fa", "fa-twitter", "fa_custom", "fa-2x", 3, "href"], ["id", "facebook", "target", "_blank", 1, "fa", "fa-facebook-square", "fa_custom", "fa-2x", 3, "href"], ["id", "movedio", 4, "ngIf"], ["id", "mdescription"], ["style", "font-size: 17px;color:#d4d4d4;margin-top: 3px;", 4, "ngFor", "ngForOf"], ["id", "mshare"], ["id", "movedio"], ["class", "mdetail", 4, "ngFor", "ngForOf"], [1, "mdetail"], ["id", "mname"], ["id", "mtagline"], ["id", "myear"], ["id", "mgenres"], ["id", "mlanguage"], ["id", "maddb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "mremoveb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "madda", "type", "success", 4, "ngIf"], ["id", "mremovea", "type", "danger", 4, "ngIf"], ["id", "maddb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "mremoveb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "madda", "type", "success"], ["id", "mremovea", "type", "danger"], [2, "font-size", "17px", "color", "#d4d4d4", "margin-top", "3px"], ["id", "Cast"], ["id", "ccard"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], ["id", "as"], ["id", "cc"], ["id", "mCast"], ["id", "mccard"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", "style", "overflow-y: auto;height: 80vh;", 4, "ngFor", "ngForOf"], [1, "modal-body", 2, "overflow-y", "auto", "height", "80vh"], ["id", "modalimg", 3, "src", 4, "ngIf"], ["id", "mmodalimg", 3, "src", 4, "ngIf"], ["id", "modalinfo", 4, "ngIf"], ["id", "mmodalinfo", 4, "ngIf"], ["id", "modalimg", 3, "src"], ["id", "mmodalimg", 3, "src"], ["id", "modalinfo"], ["style", "width: 500px;", 4, "ngIf"], ["style", "margin-top: 8px;", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [2, "width", "500px"], [2, "margin-top", "8px"], ["target", "_blank", 3, "href", 4, "ngIf"], ["size", "2x", "id", "imdb", "ngbTooltip", "Visit IMDB", 3, "icon"], ["size", "2x", "id", "ins", "ngbTooltip", "Visit Instagram", 3, "icon"], ["size", "2x", "id", "face2", "ngbTooltip", "Visit Facebook", 3, "icon"], ["size", "2x", "id", "twitter2", "ngbTooltip", "Visit Twitter", 3, "icon"], ["id", "mmodalinfo"], ["style", "width: 350px;", 4, "ngIf"], [2, "width", "350px"], ["id", "bio", 4, "ngIf"], ["style", "width: 750px;", 4, "ngIf"], ["id", "bio"], [2, "width", "750px"], ["id", "mbio", 4, "ngIf"], ["id", "mbio"], ["id", "review", 4, "ngIf"], ["id", "reblock", 4, "ngFor", "ngForOf"], ["id", "review"], [2, "color", "gray"], ["id", "reblock"], ["id", "reimg", 3, "src"], ["id", "reinfo"], [2, "font-size", "22px", "font-weight", "600", "display", "inline-block"], ["id", "rerate"], [2, "color", "gray", "font-size", "15px", "margin-top", "30px"], ["id", "recontent"], [2, "margin-top", "17px"], ["target", "_blank", 2, "color", "purple", "text-decoration", "underline", 3, "href"], ["id", "mreview", 4, "ngIf"], ["id", "mreblock", 4, "ngFor", "ngForOf"], ["id", "mreview"], ["id", "mreblock"], ["id", "mreimg", 3, "src"], ["id", "mreinfo"], [2, "font-size", "25px", "font-weight", "600", "margin-left", "15px"], ["id", "mrerate"], [2, "color", "gray", "font-size", "17px", "margin-top", "30px"], ["id", "mrecontent"], ["style", "font-size: 40px;color: white;margin-left: 45px;margin-top: 35px;", 4, "ngIf"], [2, "font-size", "40px", "color", "white", "margin-left", "45px", "margin-top", "35px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "18px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"], ["style", "font-size: 40px;color: white;margin-left: 45px; margin-top: 35px;", 4, "ngIf"]], template: function MinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MinfoComponent_div_2_Template, 11, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinfoComponent_div_3_Template, 11, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinfoComponent_div_4_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MinfoComponent_div_5_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MinfoComponent_ng_template_6_Template, 7, 2, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MinfoComponent_div_8_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MinfoComponent_div_9_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinfoComponent_div_10_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MinfoComponent_div_11_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MinfoComponent_div_12_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MinfoComponent_div_13_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mrecomdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mrecomdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msidata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msidata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".vedio[_ngcontent-%COMP%]{\n    margin-left: 120px;\n    margin-top:60px;\n}\n\n.detail[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 50px;\n}\n\n#vdiv[_ngcontent-%COMP%]{\n    display: inline-block;   \n}\n\n#dediv[_ngcontent-%COMP%]{\n   display: inline-block; \n   vertical-align: top;     \n}\n\n#name[_ngcontent-%COMP%]{\n    font-size: 46px;\n    width: 290px;\n    font-weight: 300; \n    margin-top:65px;  \n}\n\n#tagline[_ngcontent-%COMP%]{\n    font-size: 20px;\n    width: 290px;\n    font-style: italic;\n    font-weight: 200;\n}\n\n#year[_ngcontent-%COMP%]{\n    font-size: 19px;\n    width: 290px;\n    font-weight: 200;\n    margin-top:12px;\n}\n\n#genres[_ngcontent-%COMP%]{\n    font-size: 17px;\n    width: 300px;\n    margin-top:7px;\n}\n\n#language[_ngcontent-%COMP%]{\n    font-size: 17px;\n    width: 300px;\n}\n\n#addb[_ngcontent-%COMP%]{\n    width:150px;\n    height:30px;\n    margin-top:15px;\n    text-align: center;\n    line-height: 15px;;\n}\n\n#removeb[_ngcontent-%COMP%]{\n    width:200px;\n    height:30px;\n    margin-top:15px;\n    text-align: center;\n    line-height: 15px;;\n}\n\n#adda[_ngcontent-%COMP%]{\n    width:270px;\n    height:40px;\n    margin-top:10px;\n    line-height:20px;\n}\n\n#removea[_ngcontent-%COMP%]{\n    width:270px;\n    height:40px;\n    margin-top:10px;\n    line-height:20px;\n}\n\n#description[_ngcontent-%COMP%]{\n    margin-left: 130px;\n    color: white;\n    width: 950px;\n}\n\n#share[_ngcontent-%COMP%]{\n    margin-left: 130px;\n    color: white;\n}\n\n#twitter[_ngcontent-%COMP%]{\n    color:  #0099CC;\n    text-decoration: none;\n}\n\n#facebook[_ngcontent-%COMP%]{\n    color: #0000fc;\n    padding: 5px;\n    text-decoration: none;\n}\n\n#Cast[_ngcontent-%COMP%]{\n    font-size: 28px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 120px;;\n}\n\n#ccard[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin-left: 120px;\n    margin-top: 8px; \n    width: 910px;\n    height: auto;\n    white-space: nowrap; \n}\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 6px;\n    \n}\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    border: 7px solid slategrey;\n    \n  }\n\n.card[_ngcontent-%COMP%]{\n    width: 135px;\n    height: auto;  \n    display: inline-block;\n    margin-left: 15px;\n    vertical-align: top;\n    border-radius:20px;\n}\n\n.card-img-top[_ngcontent-%COMP%]{\n    width: 135px;\n    height: 180px; \n}\n\n.card-text[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    font-weight:bold;\n    width: 100px;\n    word-wrap:break-word;\n    word-break: normal;\n    white-space:pre-wrap;\n}\n\n#as[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    width: 100px;\n}\n\n#cc[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    word-wrap:break-word;\n    word-break: normal;\n    white-space:pre-wrap;\n    width: 100px;\n}\n\n#modalimg[_ngcontent-%COMP%]{\n    width:150px;\n    height:auto;\n    display: inline-block;\n}\n\n#modalinfo[_ngcontent-%COMP%]{\n    display: inline-block;\n    font-size: 14px;\n    margin-left: 25px;\n    vertical-align: top;\n}\n\n#bio[_ngcontent-%COMP%]{\n    margin-top:20px;\n    font-size:26px;\n    font-weight: 600;\n}\n\n#imdb[_ngcontent-%COMP%]{\n    background-color: white;\n    color:orange;\n}\n\n#ins[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: purple;\n}\n\n#face2[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: #0000fc;\n}\n\n#twitter2[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: #0099CC;\n}\n\n  .tooltip-inner{\n    background-color:  #FFFFFF;\n    color: black;\n    border: 1px solid gray;\n}\n\n#review[_ngcontent-%COMP%]{\n    font-size: 28px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 120px;;\n}\n\n#reblock[_ngcontent-%COMP%]{\n    width: 950px;\n    height:250px;\n    background-color:#FFFFFF;\n    margin-top:20px;\n    margin-left:120px;\n    border-radius:10px;\n}\n\n#reimg[_ngcontent-%COMP%]{\n    width: 70px;\n    height:70px;\n    margin-left:30px;\n    border-radius:40px;\n    margin-top:20px;\n    display: inline-block;\n    \n}\n\n#reinfo[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-left: 30px;\n    vertical-align: top;\n    margin-top:20px;\n}\n\n#rerate[_ngcontent-%COMP%]{\n    width: 50px;\n    background-color:black;\n    color:white;\n    text-align: center;\n    border-radius:30px;\n    display: inline-block;\n    margin-left:15px;\n\n}\n\n#recontent[_ngcontent-%COMP%]{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    width:760px;\n    margin-top:15px;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    width: 1130px;\n    margin-left: 30px;\n    height:280px;\n    margin-top:30px;\n    outline:none;\n}\n\n.bb1[_ngcontent-%COMP%]{\n    margin-left: 110px;\n}\n\nimg[_ngcontent-%COMP%]{\n    padding:8px;\n    width: 150px;\n    height:230px;    \n}\n\n.titlename[_ngcontent-%COMP%]{\n    margin-left:9px;\n    background-color: black;\n    width: 133px;\n    height:35px; \n    margin-top: -30px;\n    position: relative;\n    box-shadow: 0 0 3px 4px black;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    opacity: 0;\n    \n}\n\n.cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n\n.cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n\n#movedio[_ngcontent-%COMP%]{\n     margin-left:20px;\n     margin-top:10px;\n }\n\n.mdetail[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 20px;\n}\n\n#mname[_ngcontent-%COMP%]{\n    font-size:40px;\n    margin-top:10px;\n    width: 300px;\n }\n\n#mtagline[_ngcontent-%COMP%]{\n    font-size: 23px;\n    width: 290px;\n    font-style: italic;\n    font-weight: 200;\n }\n\n#myear[_ngcontent-%COMP%]{\n    font-size: 23px;\n    width: 290px;\n    font-weight: 200;\n    margin-top:12px;\n }\n\n#mgenres[_ngcontent-%COMP%]{\n    font-size: 21px;\n    width: 300px;\n    margin-top:7px;\n }\n\n#mlanguage[_ngcontent-%COMP%]{\n    font-size: 21px;\n    width: 300px;\n    margin-top:7px;\n }\n\n#maddb[_ngcontent-%COMP%]{\n    margin-top:15px;\n }\n\n#mremoveb[_ngcontent-%COMP%]{\n    margin-top:15px;\n }\n\n#madda[_ngcontent-%COMP%]{\n    margin-top:7px;\n    width: 330px;\n }\n\n#mremovea[_ngcontent-%COMP%]{\n     margin-top:7px;\n     width: 330px;\n }\n\n#mdescription[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    margin-top:14px;\n    color: white;\n    width: 350px;\n}\n\n#mshare[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    color: white; \n}\n\n#mCast[_ngcontent-%COMP%]{\n    font-size: 38px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 20px;;\n}\n\n#mccard[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin-left: 20px;\n    margin-top: 8px; \n    width: 350px;\n    height: auto;\n    white-space: nowrap; \n}\n\n#mmodalimg[_ngcontent-%COMP%]{\n    width:350px;\n    height:500px;\n}\n\n#mmodalinfo[_ngcontent-%COMP%]{\n    font-size: 23px;\n    margin-left:3px;\n}\n\n#mbio[_ngcontent-%COMP%]{\n    margin-top:20px;\n    font-size:30px;\n    font-weight: 600;\n}\n\n#mreview[_ngcontent-%COMP%]{\n    font-size: 38px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 20px;;\n}\n\n#mreblock[_ngcontent-%COMP%]{\n    width: 350px;\n    height:450px;\n    background-color:#FFFFFF;\n    margin-top:20px;\n    margin-left:20px;\n    border-radius:10px;\n}\n\n#mreimg[_ngcontent-%COMP%]{\n    width: 80px;\n    height:80px;\n    margin-left:50px;\n    border-radius:40px;\n    margin-top:10px;\n}\n\n#mreinfo[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n#mrerate[_ngcontent-%COMP%]{\n    width: 55px;\n    font-size: 20px;\n    background-color:black;\n    color:white;\n    text-align: center;\n    border-radius:30px;\n    margin-left:15px;\n    margin-top: 7px;;\n}\n\n#mrecontent[_ngcontent-%COMP%]{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    width:327px;\n    margin-top:15px;\n    font-size:17px;\n}\n\n#mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n\n#mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n\n.mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n\n.mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n\n.mm1[_ngcontent-%COMP%]:hover   #mobileimg[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taW5mby9taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0dBQ0cscUJBQXFCO0dBQ3JCLG1CQUFtQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSw2Q0FBNkM7RUFDL0M7O0FBR0Y7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCOztFQUU3Qjs7QUFLRjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtDQUNmOztBQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLGVBQWU7Q0FDbkI7O0FBQ0E7SUFDRyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVDO0lBQ0csY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUE7SUFDRyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7O0FBRUE7SUFDRyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztBQUVBO0lBQ0csZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0NBQ2pCOztBQUVBO0lBQ0csZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0NBQ2pCOztBQUVBO0lBQ0csZUFBZTtDQUNsQjs7QUFFQTtJQUNHLGVBQWU7Q0FDbEI7O0FBRUE7SUFDRyxjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUVBO0tBQ0ksY0FBYztLQUNkLFlBQVk7Q0FDaEI7O0FBRUE7SUFDRyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO1FBQ1EsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQiw0QkFBNEI7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21pbmZvL21pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVkaW97XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6NjBweDtcbn1cblxuLmRldGFpbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbiN2ZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICBcbn1cblxuI2RlZGl2e1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7ICAgICBcbn1cblxuI25hbWV7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXdlaWdodDogMzAwOyBcbiAgICBtYXJnaW4tdG9wOjY1cHg7ICBcbn1cblxuI3RhZ2xpbmV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuI3llYXJ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbi10b3A6MTJweDtcbn1cblxuI2dlbnJlc3tcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6N3B4O1xufVxuXG4jbGFuZ3VhZ2V7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuI2FkZGJ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTVweDs7XG59XG4jcmVtb3ZlYntcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4Oztcbn1cblxuI2FkZGF7XG4gICAgd2lkdGg6MjcwcHg7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XG59XG4jcmVtb3ZlYXtcbiAgICB3aWR0aDoyNzBweDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgbGluZS1oZWlnaHQ6MjBweDtcbn1cblxuI2Rlc2NyaXB0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDk1MHB4O1xufVxuXG4jc2hhcmV7XG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3R3aXR0ZXJ7XG4gICAgY29sb3I6ICAjMDA5OUNDO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2ZhY2Vib29re1xuICAgIGNvbG9yOiAjMDAwMGZjO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNDYXN0e1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4Oztcbn1cblxuI2NjYXJke1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDsgXG4gICAgd2lkdGg6IDkxMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbn1cbiNjY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogNnB4O1xuICAgIFxufVxuXG4jY2NhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAgXG4jY2NhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCBzbGF0ZWdyZXk7XG4gICAgXG4gIH1cbiAgIFxuXG5cblxuLmNhcmR7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogYXV0bzsgIFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbn1cblxuLmNhcmQtaW1nLXRvcHtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgaGVpZ2h0OiAxODBweDsgXG59XG5cbi5jYXJkLXRleHR7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcbn1cbiNhc3tcbiAgICBmb250LXNpemU6MTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jY2N7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cblxuI21vZGFsaW1ne1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDphdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI21vZGFsaW5mb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNiaW97XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZToyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNpbWRie1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOm9yYW5nZTtcbn1cblxuI2luc3tcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBwdXJwbGU7XG59XG5cbiNmYWNlMntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiAjMDAwMGZjO1xufVxuXG4jdHdpdHRlcjJ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogIzAwOTlDQztcbn1cbjo6bmctZGVlcCAudG9vbHRpcC1pbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0ZGRkZGRjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuI3Jldmlld3tcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDs7XG59XG5cbiNyZWJsb2Nre1xuICAgIHdpZHRoOiA5NTBweDtcbiAgICBoZWlnaHQ6MjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBtYXJnaW4tbGVmdDoxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbiNyZWltZ3tcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6NzBweDtcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxufVxuXG4jcmVpbmZve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbn1cblxuI3JlcmF0ZXtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG5cbn1cblxuI3JlY29udGVudHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgd2lkdGg6NzYwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xufVxuXG5uZ2ItY2Fyb3VzZWx7XG4gICAgd2lkdGg6IDExMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBoZWlnaHQ6MjgwcHg7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbn1cbi5iYjF7XG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xufVxuXG5pbWd7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDoyMzBweDsgICAgXG59XG5cblxuLnRpdGxlbmFtZXtcbiAgICBtYXJnaW4tbGVmdDo5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGhlaWdodDozNXB4OyBcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgXG59XG5cbi5jYzpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xufVxuXG4uY2M6aG92ZXIgLnRpdGxlbmFtZXtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5oM3tcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDo0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG5cbiAjbW92ZWRpb3tcbiAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICAgbWFyZ2luLXRvcDoxMHB4O1xuIH1cbiAubWRldGFpbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiAjbW5hbWV7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiB9XG5cbiAjbXRhZ2xpbmV7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiB9XG5cbiAjbXllYXJ7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIG1hcmdpbi10b3A6MTJweDtcbiB9XG5cbiAjbWdlbnJlc3tcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6N3B4O1xuIH1cblxuICNtbGFuZ3VhZ2V7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOjdweDtcbiB9XG5cbiAjbWFkZGJ7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuIH1cblxuICNtcmVtb3ZlYntcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gfVxuXG4gI21hZGRhe1xuICAgIG1hcmdpbi10b3A6N3B4O1xuICAgIHdpZHRoOiAzMzBweDtcbiB9XG5cbiAjbXJlbW92ZWF7XG4gICAgIG1hcmdpbi10b3A6N3B4O1xuICAgICB3aWR0aDogMzMwcHg7XG4gfVxuXG4gI21kZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOjE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzNTBweDtcbn1cblxuI21zaGFyZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuXG4jbUNhc3R7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDs7XG59XG5cbiNtY2NhcmR7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7IFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG4jbW1vZGFsaW1ne1xuICAgIHdpZHRoOjM1MHB4O1xuICAgIGhlaWdodDo1MDBweDtcbn1cblxuI21tb2RhbGluZm97XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi1sZWZ0OjNweDtcbn1cblxuI21iaW97XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtcmV2aWV3e1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7O1xufVxuXG4jbXJlYmxvY2t7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDo0NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4jbXJlaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDo4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo0MHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuI21yZWluZm97XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4jbXJlcmF0ZXtcbiAgICB3aWR0aDogNTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4Oztcbn1cblxuI21yZWNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIHdpZHRoOjMyN3B4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBmb250LXNpemU6MTdweDtcbn1cblxuI21vYmlsZXtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MzEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuI21vYmlsZWltZ3tcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OjMwMHB4O1xufVxuXG4ubW9iaWxlbmFtZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBoZWlnaHQ6MzVweDsgXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ubW0xe1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuLm1tMTpob3ZlciAjbW9iaWxlaW1ne1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbn1cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-minfo',
                templateUrl: './minfo.component.html',
                styleUrls: ['./minfo.component.css']
            }]
    }], function () { return [{ type: _services_mvedio_service__WEBPACK_IMPORTED_MODULE_2__["MvedioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_mdetail_service__WEBPACK_IMPORTED_MODULE_4__["MdetailService"] }, { type: _services_mcast_service__WEBPACK_IMPORTED_MODULE_5__["McastService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__["CastdetailService"] }, { type: _services_castex_service__WEBPACK_IMPORTED_MODULE_8__["CastexService"] }, { type: _services_mreview_service__WEBPACK_IMPORTED_MODULE_9__["MreviewService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }, { type: _services_mrecom_service__WEBPACK_IMPORTED_MODULE_11__["MrecomService"] }, { type: _services_msimilar_service__WEBPACK_IMPORTED_MODULE_12__["MsimilarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "68Wm":
/*!*********************************************************************!*\
  !*** ./src/app/components/continuewatch/continuewatch.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContinuewatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinuewatchComponent", function() { return ContinuewatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ContinuewatchComponent_div_0_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContinuewatchComponent_div_0_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContinuewatchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_0_h3_1_Template, 2, 0, "h3", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContinuewatchComponent_div_0_p_2_Template, 2, 0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mobile);
} }
function ContinuewatchComponent_div_1_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", imga_r7.type, "/", imga_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r7.title);
} }
function ContinuewatchComponent_div_1_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContinuewatchComponent_div_1_ngb_carousel_1_1_ng_template_0_Template, 6, 4, "ng-template", 7);
} }
function ContinuewatchComponent_div_1_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_1_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.continuedata);
} }
function ContinuewatchComponent_div_1_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r14.type, "/", img_r14.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r14.title);
} }
function ContinuewatchComponent_div_1_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_1_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r11);
} }
function ContinuewatchComponent_div_1_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContinuewatchComponent_div_1_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function ContinuewatchComponent_div_1_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_1_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.formatted);
} }
function ContinuewatchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_1_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContinuewatchComponent_div_1_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.mobile);
} }
class ContinuewatchComponent {
    constructor(config) {
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.continuedata = JSON.parse(localStorage.getItem('continue'));
        this.formatted = [];
        var j = -1;
        if (this.continuedata !== null) {
            if (this.continuedata.length < 25) {
                for (var i = 0; i < this.continuedata.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.formatted[j] = [];
                        this.formatted[j].push(this.continuedata[i]);
                    }
                    else {
                        this.formatted[j].push(this.continuedata[i]);
                    }
                }
            }
            if (this.continuedata.length > 24) {
                for (var i = 0; i < 24; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.formatted[j] = [];
                        this.formatted[j].push(this.continuedata[i]);
                    }
                    else {
                        this.formatted[j].push(this.continuedata[i]);
                    }
                }
            }
        }
    }
}
ContinuewatchComponent.ɵfac = function ContinuewatchComponent_Factory(t) { return new (t || ContinuewatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
ContinuewatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContinuewatchComponent, selectors: [["app-continuewatch"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["style", "font-size: 40px;color: white;margin-left: 53px;width:100px", 4, "ngIf"], [2, "font-size", "40px", "color", "white", "margin-left", "53px", "width", "100px"], ["id", "mobile", 3, "interval", 4, "ngIf"], ["id", "desktop", 3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "15px"], ["id", "desktop", 3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "deskimg", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"]], template: function ContinuewatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContinuewatchComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContinuewatchComponent_div_1_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.continuedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.continuedata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n #desktop[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left:30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:6.5px;\n     background-color: black;\n     width: 137px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        opacity: 1;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250aW51ZXdhdGNoL2NvbnRpbnVld2F0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtDQUNmOztDQUVBO0tBQ0ksYUFBYTtLQUNiLGdCQUFnQjtLQUNoQixZQUFZO0tBQ1osZUFBZTtLQUNmLFlBQVk7Q0FDaEI7O0NBQ0E7S0FDSSxrQkFBa0I7Q0FDdEI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsWUFBWTtLQUNaLFlBQVk7Q0FDaEI7O0NBR0E7S0FDSSxpQkFBaUI7S0FDakIsdUJBQXVCO0tBQ3ZCLFlBQVk7S0FDWixXQUFXO0tBQ1gsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQiw2QkFBNkI7S0FDN0IsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtLQUN2QixtQkFBbUI7S0FDbkIscUJBQXFCO0tBQ3JCLDRCQUE0QjtLQUM1QixVQUFVOztDQUVkOztDQUVBO0tBQ0kscUJBQXFCO0NBQ3pCOztDQUVBO0tBQ0ksVUFBVTtDQUNkOztDQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0NBSUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7Q0FFQTtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsNEJBQTRCO1FBQzVCLFVBQVU7QUFDbEI7O0NBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0NBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRpbnVld2F0Y2gvY29udGludWV3YXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuIFxuICNkZXNrdG9we1xuICAgICB3aWR0aDogMTEzMHB4O1xuICAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgICBoZWlnaHQ6MjgwcHg7XG4gICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICAgb3V0bGluZTpub25lO1xuIH1cbiAuYmIxe1xuICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gfVxuIFxuIGltZ3tcbiAgICAgcGFkZGluZzo4cHg7XG4gICAgIHdpZHRoOiAxNTBweDtcbiAgICAgaGVpZ2h0OjIzMHB4OyAgICBcbiB9XG4gXG4gXG4gLnRpdGxlbmFtZXtcbiAgICAgbWFyZ2luLWxlZnQ6Ni41cHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICB3aWR0aDogMTM3cHg7XG4gICAgIGhlaWdodDozNXB4OyBcbiAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgIG9wYWNpdHk6IDA7XG4gICAgIFxuIH1cbiBcbiAuY2M6aG92ZXIgaW1ne1xuICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG4gfVxuIFxuIC5jYzpob3ZlciAudGl0bGVuYW1le1xuICAgICBvcGFjaXR5OiAxO1xuIH1cblxuICNtb2JpbGV7XG4gICAgd2lkdGg6MzUwcHg7XG4gICAgaGVpZ2h0OjMxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cblxuXG4jbW9iaWxlaW1ne1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6MzAwcHg7XG59XG5cbi5tb2JpbGVuYW1le1xuICAgICAgICBtYXJnaW4tbGVmdDo5cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIGhlaWdodDozNXB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIG9wYWNpdHk6IDE7XG59XG5cbi5tbTF7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubW0xOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinuewatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-continuewatch',
                templateUrl: './continuewatch.component.html',
                styleUrls: ['./continuewatch.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MylistComponent_div_2_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r7.type, "/", img_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r7.title);
} }
function MylistComponent_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_2_div_1_div_4_div_1_Template, 6, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r5);
} }
function MylistComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_2_div_1_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.formatted);
} }
function MylistComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in WatchList.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_2_div_1_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "aaa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_2_div_4_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Powered by TMDB. Developed by Fanlin Qin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.check2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.check);
} }
function MylistComponent_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", imga_r11.type, "/", imga_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r11.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r11.title);
} }
function MylistComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_3_div_1_div_4_Template, 6, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "aaa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Powered by TMDB. Developed by Fanlin Qin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.data);
} }
function MylistComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in WatchList.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Powered by TMDB. Developed by Fanlin Qin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_3_div_1_Template, 10, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_3_div_2_Template, 6, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.check2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.check);
} }
class MylistComponent {
    constructor() {
        this.check = false;
        this.check2 = false;
    }
    ngOnInit() {
        this.getdata();
        console.log(this.data);
        this.checkfunction();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
        }
    }
    getdata() {
        this.data = JSON.parse(localStorage.getItem('watchlist'));
        this.formatted = [];
        var j = -1;
        if (this.data !== null) {
            for (var i = 0; i < this.data.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.data[i]);
                }
                else {
                    this.formatted[j].push(this.data[i]);
                }
            }
        }
    }
    checkfunction() {
        if (this.data == null) {
            this.check = true;
        }
        if (this.data != null) {
            if (this.data.length === 0) {
                this.check = true;
            }
            if (this.data.length !== 0) {
                this.check2 = true;
            }
        }
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 4, vars: 2, consts: [[2, "height", "30px", "color", "#050a30"], [4, "ngIf"], [1, "footer"], [2, "color", "white", "text-align", "center"], ["id", "desklist"], ["id", "whole"], ["class", "bb1", 4, "ngFor", "ngForOf"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [3, "routerLink"], [1, "desk", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"], ["id", "deskno"], ["id", "mobilelist"], ["id", "mwhole"], ["class", "mcc", 4, "ngFor", "ngForOf"], [2, "height", "140px", "color", "#050a30"], ["id", "mfoot"], [1, "mcc"], [1, "mobileimg", 3, "src"], [1, "mtitlename"], [2, "color", "white", "font-size", "20px"], ["id", "mobileno"], ["id", "mfooter-no"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 8, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_3_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#desklist[_ngcontent-%COMP%]{\n    margin-left: 120px;\n    margin-top:40px;\n    color: white;\n}\n\n#deskno[_ngcontent-%COMP%]{\n    margin-left: 350px;\n    margin-top:40px;\n    color: white;\n}\n\n#whole[_ngcontent-%COMP%]{\n    margin-left: 125px;\n    margin-top:30px;\n }\n\n.bb1[_ngcontent-%COMP%]{\n    margin-top: 25px;\n}\n\n.cc[_ngcontent-%COMP%]{\n    margin-left: 10px;\n}\n\n.desk[_ngcontent-%COMP%]{\n    padding:8px;\n    width: 150px;\n    height:200px;    \n}\n\n.titlename[_ngcontent-%COMP%]{\n    margin-left:9px;\n    background-color: black;\n    width: 133px;\n    height:35px; \n    margin-top: -30px;\n    position: relative;\n    box-shadow: 0 0 3px 4px black;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    opacity: 0;\n    \n}\n\n.cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n\n.cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n.footer[_ngcontent-%COMP%]{\n    background-color: #010b1e;\n    width: 100%;\n    height:35px;\n    position:absolute;\n    bottom:0;\n}\n\n#mobileno[_ngcontent-%COMP%]{\n    margin-top:60px;\n    color: white;\n    text-align: center;\n}\n\n#mobilelist[_ngcontent-%COMP%]{\n    margin-left: 60px;\n    margin-top:40px;\n    color: white;\n    font-size:45px;\n}\n\n#mwhole[_ngcontent-%COMP%]{\n    margin-left: 50px;\n    margin-top:50px;\n}\n\n.mcc[_ngcontent-%COMP%]{\n    margin-left: 4px;\n    margin-top:70px;\n}\n\n.mobileimg[_ngcontent-%COMP%]{\n    width: 300px;\n    height:400px;    \n}\n\n.mtitlename[_ngcontent-%COMP%]{\n    margin-left:4px;\n    background-color: black;\n    width: 300px;\n    height:35px; \n    margin-top: -30px;\n    position: relative;\n    box-shadow: 0 0 3px 4px black;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    \n}\n\n#mfooter-no[_ngcontent-%COMP%]{\n    background-color: #010b1e;\n    width: 100%;\n    height:35px;\n    position: absolute;\n    bottom: 0;\n}\n\n#mfooter[_ngcontent-%COMP%]{\n    background-color: #010b1e;\n    width: 100%;\n    height:35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teWxpc3QvbXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teWxpc3QvbXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVza2xpc3R7XG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNkZXNrbm97XG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xuICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN3aG9sZXtcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuIH1cblxuLmJiMXtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmNje1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVza3tcbiAgICBwYWRkaW5nOjhweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OjIwMHB4OyAgICBcbn1cblxuXG4udGl0bGVuYW1le1xuICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTMzcHg7XG4gICAgaGVpZ2h0OjM1cHg7IFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3BhY2l0eTogMDtcbiAgICBcbn1cblxuLmNjOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG59XG5cbi5jYzpob3ZlciAudGl0bGVuYW1le1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMGIxZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbn1cblxuI21vYmlsZW5ve1xuICAgIG1hcmdpbi10b3A6NjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbW9iaWxlbGlzdHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTo0NXB4O1xufVxuXG4jbXdob2xle1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cblxuLm1jY3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi10b3A6NzBweDtcbn1cblxuLm1vYmlsZWltZ3tcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OjQwMHB4OyAgICBcbn1cblxuLm10aXRsZW5hbWV7XG4gICAgbWFyZ2luLWxlZnQ6NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6MzVweDsgXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBcbn1cblxuI21mb290ZXItbm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMGIxZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xufVxuXG4jbWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwYjFlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDozNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mylist',
                templateUrl: './mylist.component.html',
                styleUrls: ['./mylist.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "C+F4":
/*!***********************************************!*\
  !*** ./src/app/services/tvsimilar.service.ts ***!
  \***********************************************/
/*! exports provided: TvsimilarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvsimilarService", function() { return TvsimilarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvsimilarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvsimilar(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvsimilar/" + id;
        return this.httpClient.get(URL);
    }
}
TvsimilarService.ɵfac = function TvsimilarService_Factory(t) { return new (t || TvsimilarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvsimilarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvsimilarService, factory: TvsimilarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvsimilarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "GgO8":
/*!************************************************!*\
  !*** ./src/app/services/castdetail.service.ts ***!
  \************************************************/
/*! exports provided: CastdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastdetailService", function() { return CastdetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CastdetailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCastde(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/castdetail/" + id;
        return this.httpClient.get(URL);
    }
}
CastdetailService.ɵfac = function CastdetailService_Factory(t) { return new (t || CastdetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CastdetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CastdetailService, factory: CastdetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastdetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "H2pd":
/*!**********************************************!*\
  !*** ./src/app/services/msimilar.service.ts ***!
  \**********************************************/
/*! exports provided: MsimilarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsimilarService", function() { return MsimilarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MsimilarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMsimilar(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/msimilar/" + id;
        return this.httpClient.get(URL);
    }
}
MsimilarService.ɵfac = function MsimilarService_Factory(t) { return new (t || MsimilarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MsimilarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MsimilarService, factory: MsimilarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsimilarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "KDhO":
/*!*********************************************************!*\
  !*** ./src/app/components/trendtv/trendtv.component.ts ***!
  \*********************************************************/
/*! exports provided: TrendtvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendtvComponent", function() { return TrendtvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trendtv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trendtv.service */ "pDTn");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function TrendtvComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendtvComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendtvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.name);
} }
function TrendtvComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendtvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function TrendtvComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendtvComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.trendtvdata);
} }
function TrendtvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.name);
} }
function TrendtvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendtvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function TrendtvComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendtvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function TrendtvComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendtvComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function TrendtvComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendtvComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendtvComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class TrendtvComponent {
    constructor(trendtvService, config) {
        this.trendtvService = trendtvService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.trendtvService.getAllTrendtv().subscribe(res => {
            this.trendtvdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.trendtvdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.trendtvdata[i]);
                }
                else {
                    this.formatted[j].push(this.trendtvdata[i]);
                }
            }
        });
    }
}
TrendtvComponent.ɵfac = function TrendtvComponent_Factory(t) { return new (t || TrendtvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trendtv_service__WEBPACK_IMPORTED_MODULE_1__["TrendtvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
TrendtvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendtvComponent, selectors: [["app-trendtv"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px; width: 250px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px", "width", "250px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "12px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"]], template: function TrendtvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendtvComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendtvComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendtvComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendtvdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n ngb-carousel[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left: 30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:9px;\n     background-color: black;\n     width: 133px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVuZHR2L3RyZW5kdHYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtDQUNmOztDQUVBO0tBQ0ksYUFBYTtLQUNiLGlCQUFpQjtLQUNqQixZQUFZO0tBQ1osZUFBZTtLQUNmLFlBQVk7Q0FDaEI7O0NBQ0E7S0FDSSxrQkFBa0I7Q0FDdEI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsWUFBWTtLQUNaLFlBQVk7Q0FDaEI7O0NBR0E7S0FDSSxlQUFlO0tBQ2YsdUJBQXVCO0tBQ3ZCLFlBQVk7S0FDWixXQUFXO0tBQ1gsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQiw2QkFBNkI7S0FDN0IsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtLQUN2QixtQkFBbUI7S0FDbkIscUJBQXFCO0tBQ3JCLDRCQUE0QjtLQUM1QixVQUFVOztDQUVkOztDQUVBO0tBQ0kscUJBQXFCO0NBQ3pCOztDQUVBO0tBQ0ksVUFBVTtDQUNkOztDQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0NBRUM7SUFDRyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7Q0FFQTtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsNEJBQTRCO0FBQ3BDOztDQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztDQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmVuZHR2L3RyZW5kdHYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBuZ2ItY2Fyb3VzZWx7XG4gICAgIHdpZHRoOiAxMTMwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICBoZWlnaHQ6MjgwcHg7XG4gICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICAgb3V0bGluZTpub25lO1xuIH1cbiAuYmIxe1xuICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gfVxuIFxuIGltZ3tcbiAgICAgcGFkZGluZzo4cHg7XG4gICAgIHdpZHRoOiAxNTBweDtcbiAgICAgaGVpZ2h0OjIzMHB4OyAgICBcbiB9XG4gXG4gXG4gLnRpdGxlbmFtZXtcbiAgICAgbWFyZ2luLWxlZnQ6OXB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgd2lkdGg6IDEzM3B4O1xuICAgICBoZWlnaHQ6MzVweDsgXG4gICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICBvcGFjaXR5OiAwO1xuICAgICBcbiB9XG4gXG4gLmNjOmhvdmVyIGltZ3tcbiAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xuIH1cbiBcbiAuY2M6aG92ZXIgLnRpdGxlbmFtZXtcbiAgICAgb3BhY2l0eTogMTtcbiB9XG5cbiAjbW9iaWxle1xuICAgIHdpZHRoOjM1MHB4O1xuICAgIGhlaWdodDozMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4gI21vYmlsZWltZ3tcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OjMwMHB4O1xufVxuXG4ubW9iaWxlbmFtZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBoZWlnaHQ6MzVweDsgXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ubW0xe1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuLm1tMTpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendtvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trendtv',
                templateUrl: './trendtv.component.html',
                styleUrls: ['./trendtv.component.css']
            }]
    }], function () { return [{ type: _services_trendtv_service__WEBPACK_IMPORTED_MODULE_1__["TrendtvService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by TMDB. Developed by Fanlin Qin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by TMDB. Developed by Fanlin Qin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor() { }
    ngOnInit() {
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["class", "footer", 4, "ngIf"], ["class", "footer2", 4, "ngIf"], [1, "footer"], [2, "color", "white", "text-align", "center"], [1, "footer2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".footer[_ngcontent-%COMP%]{\n    background-color: #010b1e;\n    width: 100%;\n    height:35px;\n}\n\n.footer2[_ngcontent-%COMP%]{\n    background-color: #010b1e;\n    width: 410px;\n    height:42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTBiMWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjM1cHg7XG59XG5cbi5mb290ZXIye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTBiMWU7XG4gICAgd2lkdGg6IDQxMHB4O1xuICAgIGhlaWdodDo0MnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MWB9":
/*!*******************************************************!*\
  !*** ./src/app/components/tvinfo/tvinfo.component.ts ***!
  \*******************************************************/
/*! exports provided: TvinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvinfoComponent", function() { return TvinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _services_tvvedio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tvvedio.service */ "s+FS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tvdetail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tvdetail.service */ "c6aR");
/* harmony import */ var _services_tvcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tvcast.service */ "gIH0");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/castdetail.service */ "GgO8");
/* harmony import */ var _services_castex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/castex.service */ "mbFq");
/* harmony import */ var _services_tvreview_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tvreview.service */ "XR7/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_tvrecom_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/tvrecom.service */ "PX0+");
/* harmony import */ var _services_tvsimilar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/tvsimilar.service */ "C+F4");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




















function TvinfoComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", v_r17.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 400)("width", 600);
} }
function TvinfoComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_2_div_1_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.mvediodata);
} }
function TvinfoComponent_div_2_div_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r26);
} }
function TvinfoComponent_div_2_div_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const la_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](la_r27);
} }
function TvinfoComponent_div_2_div_2_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_2_div_2_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const de_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r28.storage(de_r19); return ctx_r28.opalert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_2_div_2_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_2_div_2_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r31.remove(); return ctx_r31.realert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_2_div_2_div_1_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_2_div_2_div_1_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genres :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvinfoComponent_div_2_div_2_div_1_div_10_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Spoken Languages :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TvinfoComponent_div_2_div_2_div_1_div_14_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TvinfoComponent_div_2_div_2_div_1_button_15_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TvinfoComponent_div_2_div_2_div_1_button_16_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TvinfoComponent_div_2_div_2_div_1_ngb_alert_17_Template, 2, 0, "ngb-alert", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TvinfoComponent_div_2_div_2_div_1_ngb_alert_18_Template, 2, 0, "ngb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r19.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r18.year, " \u00A0 | \u00A0 \u2605\u00A0\u00A0", de_r19.vote_average, " | ", ctx_r18.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.addbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.removebutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.alert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.alert2);
} }
function TvinfoComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_2_div_2_div_1_Template, 19, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.mdetail);
} }
function TvinfoComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r33.overview);
} }
function TvinfoComponent_div_2_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r36 = ctx.$implicit;
    const de_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", de_r34.title, "&url=https://www.youtube.com/watch?v=", v_r36.key, "    &hashtags=USC&hashtags=CSCI571&hashtags=FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", v_r36.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", v_r36.key, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_2_div_10_div_1_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.mvediodata);
} }
function TvinfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_2_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_2_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_div_2_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvinfoComponent_div_2_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mvediodata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mdetail);
} }
function TvinfoComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", v_r43.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 280)("width", 350);
} }
function TvinfoComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_3_div_1_div_1_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.mvediodata);
} }
function TvinfoComponent_div_3_div_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r52);
} }
function TvinfoComponent_div_3_div_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const la_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](la_r53);
} }
function TvinfoComponent_div_3_div_2_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_3_div_2_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const de_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); ctx_r54.storage(de_r45); return ctx_r54.opalert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_3_div_2_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_3_div_2_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); ctx_r57.remove(); return ctx_r57.realert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_3_div_2_div_1_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_3_div_2_div_1_ngb_alert_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genres :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvinfoComponent_div_3_div_2_div_1_div_10_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Spoken Languages :\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TvinfoComponent_div_3_div_2_div_1_div_14_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TvinfoComponent_div_3_div_2_div_1_button_15_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TvinfoComponent_div_3_div_2_div_1_button_16_Template, 2, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TvinfoComponent_div_3_div_2_div_1_ngb_alert_17_Template, 2, 0, "ngb-alert", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TvinfoComponent_div_3_div_2_div_1_ngb_alert_18_Template, 2, 0, "ngb-alert", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r45 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r45.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r45.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r44.year, " \u00A0 | \u00A0 \u2605\u00A0\u00A0", de_r45.vote_average, " | ", ctx_r44.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.addbutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.removebutton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.alert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.alert2);
} }
function TvinfoComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_3_div_2_div_1_Template, 19, 11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.mdetail);
} }
function TvinfoComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const de_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](de_r59.overview);
} }
function TvinfoComponent_div_3_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r62 = ctx.$implicit;
    const de_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch ", de_r60.title, "&url=https://www.youtube.com/watch?v=", v_r62.key, "    &hashtags=USC&hashtags=CSCI571&hashtags=FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.youtube.com/watch?v=", v_r62.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", v_r62.key, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_3_div_10_div_1_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.mvediodata);
} }
function TvinfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_3_div_1_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_3_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_div_3_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvinfoComponent_div_3_div_10_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mvediodata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mdetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mdetail);
} }
function TvinfoComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_4_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ca_r65 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); ctx_r66.open(_r4); return ctx_r66.passdata(ca_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ca_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ca_r65.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r65.chararcter);
} }
function TvinfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_div_4_div_4_Template, 9, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.mcast);
} }
function TvinfoComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_div_5_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ca_r69 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); ctx_r70.open(_r4); return ctx_r70.passdata(ca_r69); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ca_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ca_r69.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ca_r69.chararcter);
} }
function TvinfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_div_5_div_4_Template, 9, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.mcast);
} }
function TvinfoComponent_ng_template_6_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 78);
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ctx_r76.castpro, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_ng_template_6_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 79);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ctx_r77.castpro, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", cade_r75.birthday, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", cade_r75.birth_palce, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", cade_r75.gender, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cade_r75.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.homepage);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", cade_r75.known_for_department, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", cade_r75.also_know_as, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ex_r95.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r96.Imdb);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ex_r95.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r97.Ins);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ex_r95.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r98.Face);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ex_r95.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r99.Twitter);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_1_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_2_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_3_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_ng_template_6_div_6_div_3_div_7_a_4_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r95.twitter_id);
} }
function TvinfoComponent_ng_template_6_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_3_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_3_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_ng_template_6_div_6_div_3_div_3_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_ng_template_6_div_6_div_3_div_4_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvinfoComponent_ng_template_6_div_6_div_3_div_5_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_ng_template_6_div_6_div_3_div_6_Template, 2, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvinfoComponent_ng_template_6_div_6_div_3_div_7_Template, 5, 4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birth_palce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.also_know_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r78.castexdata);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", cade_r75.birthday, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", cade_r75.birth_palce, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", cade_r75.gender, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cade_r75.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.homepage);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", cade_r75.known_for_department, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", cade_r75.also_know_as, "");
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ex_r118.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r119.Imdb);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ex_r118.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r120.Ins);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ex_r118.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r121.Face);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ex_r118.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r122.Twitter);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_1_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_2_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_3_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_ng_template_6_div_6_div_4_div_7_a_4_Template, 2, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ex_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ex_r118.twitter_id);
} }
function TvinfoComponent_ng_template_6_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_4_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_4_div_2_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_ng_template_6_div_6_div_4_div_3_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_ng_template_6_div_6_div_4_div_4_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvinfoComponent_ng_template_6_div_6_div_4_div_5_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_ng_template_6_div_6_div_4_div_6_Template, 2, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvinfoComponent_ng_template_6_div_6_div_4_div_7_Template, 5, 4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.birth_palce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.homepage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.also_know_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.castexdata);
} }
function TvinfoComponent_ng_template_6_div_6_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_ng_template_6_div_6_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.biography);
} }
function TvinfoComponent_ng_template_6_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_5_div_1_Template, 2, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_5_div_2_Template, 2, 1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
} }
function TvinfoComponent_ng_template_6_div_6_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_ng_template_6_div_6_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cade_r75.biography);
} }
function TvinfoComponent_ng_template_6_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_div_6_div_1_Template, 2, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_div_6_div_2_Template, 2, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cade_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cade_r75.biography);
} }
function TvinfoComponent_ng_template_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_ng_template_6_div_6_img_1_Template, 1, 1, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_ng_template_6_div_6_img_2_Template, 1, 1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_ng_template_6_div_6_div_3_Template, 8, 7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_ng_template_6_div_6_div_4_Template, 8, 7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvinfoComponent_ng_template_6_div_6_div_5_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_ng_template_6_div_6_div_6_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r74.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.mobile);
} }
function TvinfoComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvinfoComponent_ng_template_6_Template_button_click_3_listener() { const d_r73 = ctx.dismiss; return d_r73("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_ng_template_6_div_6_Template, 7, 6, "div", 72);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.castname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.castdedata);
} }
function TvinfoComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reviews \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r137.relength);
} }
function TvinfoComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", re_r139.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A review created by ", re_r139.authoe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r139.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r139.authoe, " on ", re_r139.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r139.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", re_r139.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_8_div_1_Template, 4, 1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_8_div_2_Template, 14, 7, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.relength !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.mreview);
} }
function TvinfoComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reviews \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r140.relength);
} }
function TvinfoComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const re_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", re_r142.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" A review created by ", re_r142.authoe, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605 ", re_r142.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", re_r142.authoe, " on ", re_r142.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](re_r142.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", re_r142.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvinfoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_9_div_1_Template, 4, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_9_div_2_Template, 14, 7, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.relength !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.mreview);
} }
function TvinfoComponent_div_10_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_10_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_10_p_2_Template, 2, 0, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.mobile);
} }
function TvinfoComponent_div_11_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", imga_r148.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r148.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r148.title);
} }
function TvinfoComponent_div_11_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvinfoComponent_div_11_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 128);
} }
function TvinfoComponent_div_11_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_11_ngb_carousel_1_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r145.mrecomdata);
} }
function TvinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", img_r155.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r155.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r155.title);
} }
function TvinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r152);
} }
function TvinfoComponent_div_11_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvinfoComponent_div_11_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 128);
} }
function TvinfoComponent_div_11_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_11_ngb_carousel_2_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.mrecomformatted);
} }
function TvinfoComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_11_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_11_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.mobile);
} }
function TvinfoComponent_div_12_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TvinfoComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_12_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_12_p_2_Template, 2, 0, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.mobile);
} }
function TvinfoComponent_div_13_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", imga_r162.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r162.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r162.title);
} }
function TvinfoComponent_div_13_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvinfoComponent_div_13_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 128);
} }
function TvinfoComponent_div_13_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_13_ngb_carousel_1_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r159.msidata);
} }
function TvinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", img_r169.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r169.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r169.title);
} }
function TvinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r166);
} }
function TvinfoComponent_div_13_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvinfoComponent_div_13_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 128);
} }
function TvinfoComponent_div_13_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_13_ngb_carousel_2_1_Template, 1, 0, undefined, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r160.msiformatted);
} }
function TvinfoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvinfoComponent_div_13_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_13_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.mobile);
} }
class TvinfoComponent {
    constructor(tvvedioService, route, tvdetailService, tvcastService, modalService, castdetail, castex, tvreviewService, cDate, tvrecomService, tvsimilarService, router, config) {
        this.tvvedioService = tvvedioService;
        this.route = route;
        this.tvdetailService = tvdetailService;
        this.tvcastService = tvcastService;
        this.modalService = modalService;
        this.castdetail = castdetail;
        this.castex = castex;
        this.tvreviewService = tvreviewService;
        this.cDate = cDate;
        this.tvrecomService = tvrecomService;
        this.tvsimilarService = tvsimilarService;
        this.router = router;
        this.config = config;
        this.Imdb = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faImdb"];
        this.Ins = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.Face = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookSquare"];
        this.Twitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.alert = false;
        this.alert2 = false;
        this.addbutton = true;
        this.removebutton = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.fetchtvvData();
        this.fetchtvdData();
        this.fetchtvcData();
        this.fetchtvreData();
        this.fetchtvrecomData();
        this.fetchtvsiData();
        this.updatebutton();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchtvvData() {
        this.tvvedioService.getAllTvvedio(this.id).subscribe(res => {
            this.mvediodata = res;
        });
    }
    fetchtvdData() {
        this.tvdetailService.getAllTvdetail(this.id).subscribe(res => {
            this.mdetail = res;
            var timeArr = res[0].first_air_date.split("-");
            this.year = timeArr[0];
            if (res[0].runtime = 60) {
                this.duration = "1hrs";
            }
            if (res[0].runtime < 60) {
                this.duration = (res[0].runtime % 60) + "mins";
            }
            if (res[0].runtime > 60) {
                this.duration = Math.floor(res[0].runtime / 60) + "hrs " + (res[0].runtime % 60) + "mins";
            }
            this.genres = res[0].genres;
            this.language = res[0].spoken_languages;
            this.upcontinue(res[0]);
            this.upmylist(res[0]);
        });
    }
    fetchtvcData() {
        this.tvcastService.getAllTvcast(this.id).subscribe(res => {
            this.mcast = res;
        });
    }
    fetchtvreData() {
        this.tvreviewService.getAllTvreview(this.id).subscribe(res => {
            this.mreview = res;
            this.relength = this.mreview.length;
            for (var i = 0; i < this.relength; i++) {
                this.mreview[i].created_at = this.cDate.transform(this.mreview[i].created_at, 'medium');
            }
        });
    }
    fetchtvrecomData() {
        this.tvrecomService.getAllTvrecom(this.id).subscribe(res => {
            this.mrecomdata = res;
            this.mrecomformatted = [];
            var j = -1;
            for (var i = 0; i < this.mrecomdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.mrecomformatted[j] = [];
                    this.mrecomformatted[j].push(this.mrecomdata[i]);
                }
                else {
                    this.mrecomformatted[j].push(this.mrecomdata[i]);
                }
            }
        });
    }
    fetchtvsiData() {
        this.tvsimilarService.getAllTvsimilar(this.id).subscribe(res => {
            this.msidata = res;
            this.msiformatted = [];
            var j = -1;
            for (var i = 0; i < this.msidata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.msiformatted[j] = [];
                    this.msiformatted[j].push(this.msidata[i]);
                }
                else {
                    this.msiformatted[j].push(this.msidata[i]);
                }
            }
        });
    }
    passdata(id) {
        this.castid = id.id;
        this.fetchcdetail(this.castid);
        this.castname = id.name;
        this.castpro = id.profile_path;
        this.fetchcastex(this.castid);
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    fetchcdetail(cid) {
        this.castdetail.getAllCastde(cid).subscribe(res => {
            this.castdedata = res;
        });
    }
    fetchcastex(cid) {
        this.castex.getAllCastex(cid).subscribe(res => {
            this.castexdata = res;
        });
    }
    updatebutton() {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id === this.id) {
                    this.addbutton = false;
                    this.removebutton = true;
                }
            }
        }
    }
    storage(data) {
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "tv" };
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var cur = [];
        cur.push(d);
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                cur.push(da[i]);
            }
        }
        localStorage.setItem('watchlist', JSON.stringify(cur));
    }
    remove() {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var index = -1;
        for (var i = 0; i < da.length; i++) {
            if (da[i].id == this.id) {
                index = i;
            }
        }
        if (index !== -1) {
            da.splice(index, 1);
        }
        localStorage.removeItem('watchlist');
        localStorage.setItem('watchlist', JSON.stringify(da));
    }
    opalert() {
        this.alert = true;
        this.addbutton = false;
        this.removebutton = true;
        setTimeout(() => this.alert = false, 5000);
    }
    realert() {
        this.alert2 = true;
        this.addbutton = true;
        this.removebutton = false;
        setTimeout(() => this.alert2 = false, 5000);
    }
    upcontinue(data) {
        var da = JSON.parse(localStorage.getItem('continue'));
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "tv" };
        var cur = [];
        cur.push(d);
        var index = -1;
        if (da === null) {
            localStorage.setItem('continue', JSON.stringify(cur));
        }
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id == this.id) {
                    index = i;
                }
            }
            if (index !== -1) {
                da.splice(index, 1);
                var newA = cur.concat(da);
                localStorage.removeItem('continue');
                localStorage.setItem('continue', JSON.stringify(newA));
            }
            if (index === -1) {
                var newB = cur.concat(da);
                localStorage.removeItem('continue');
                localStorage.setItem('continue', JSON.stringify(newB));
            }
        }
    }
    upmylist(data) {
        var da = JSON.parse(localStorage.getItem('watchlist'));
        var d = { "id": this.id, "title": data.title, "poster_path": data.poster_path, "type": "tv" };
        var cur = [];
        cur.push(d);
        var index = -1;
        if (da !== null) {
            for (var i = 0; i < da.length; i++) {
                if (da[i].id == this.id) {
                    index = i;
                }
            }
            if (index !== -1) {
                da.splice(index, 1);
                var newA = cur.concat(da);
                localStorage.removeItem('watchlist');
                localStorage.setItem('watchlist', JSON.stringify(newA));
            }
        }
    }
}
TvinfoComponent.ɵfac = function TvinfoComponent_Factory(t) { return new (t || TvinfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvvedio_service__WEBPACK_IMPORTED_MODULE_2__["TvvedioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvdetail_service__WEBPACK_IMPORTED_MODULE_4__["TvdetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvcast_service__WEBPACK_IMPORTED_MODULE_5__["TvcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__["CastdetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_castex_service__WEBPACK_IMPORTED_MODULE_8__["CastexService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvreview_service__WEBPACK_IMPORTED_MODULE_9__["TvreviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvrecom_service__WEBPACK_IMPORTED_MODULE_11__["TvrecomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tvsimilar_service__WEBPACK_IMPORTED_MODULE_12__["TvsimilarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"])); };
TvinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvinfoComponent, selectors: [["app-tvinfo"]], decls: 15, vars: 10, consts: [[2, "height", "40px", "color", "#050a30"], [4, "ngIf"], ["style", "overflow-y: initial"], ["content", ""], ["id", "vdiv", 4, "ngIf"], ["id", "dediv", 4, "ngIf"], ["id", "description"], [2, "font-size", "20px", "margin-top", "13px"], ["style", "font-size: 17px;color:#d4d4d4;margin-top: 3px;", 4, "ngFor", "ngForOf"], ["id", "share"], [2, "font-size", "20px", "margin-top", "20px"], [4, "ngFor", "ngForOf"], ["id", "vdiv"], ["class", "vedio", 4, "ngFor", "ngForOf"], [1, "vedio"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"], ["id", "dediv"], ["class", "detail", 4, "ngFor", "ngForOf"], [1, "detail"], ["id", "name"], ["id", "tagline"], ["id", "year"], ["id", "genres"], [2, "display", "inline-block"], ["style", "display: inline-block;font-weight:lighter; color:#d4d4d4", 4, "ngFor", "ngForOf"], ["id", "language"], ["id", "addb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "removeb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "adda", "type", "success", 4, "ngIf"], ["id", "removea", "type", "danger", 4, "ngIf"], [2, "display", "inline-block", "font-weight", "lighter", "color", "#d4d4d4"], ["id", "addb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "removeb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "adda", "type", "success"], ["id", "removea", "type", "danger"], [2, "font-size", "17px", "color", "#d4d4d4", "margin-top", "3px"], ["id", "twitter", "target", "_blank", 1, "fa", "fa-twitter", "fa_custom", "fa-2x", 3, "href"], ["id", "facebook", "target", "_blank", 1, "fa", "fa-facebook-square", "fa_custom", "fa-2x", 3, "href"], ["id", "movedio", 4, "ngIf"], ["id", "mdescription"], ["id", "mshare"], ["id", "movedio"], ["class", "mdetail", 4, "ngFor", "ngForOf"], [1, "mdetail"], ["id", "mname"], ["id", "mtagline"], ["id", "myear"], ["id", "mgenres"], ["id", "mlanguage"], ["id", "maddb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "mremoveb", "type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "madda", "type", "success", 4, "ngIf"], ["id", "mremovea", "type", "danger", 4, "ngIf"], ["id", "maddb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "mremoveb", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "madda", "type", "success"], ["id", "mremovea", "type", "danger"], ["id", "Cast"], ["id", "ccard"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], ["id", "as"], ["id", "cc"], ["id", "mCast"], ["id", "mccard"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", "style", "overflow-y: auto;height: 80vh;", 4, "ngFor", "ngForOf"], [1, "modal-body", 2, "overflow-y", "auto", "height", "80vh"], ["id", "modalimg", 3, "src", 4, "ngIf"], ["id", "mmodalimg", 3, "src", 4, "ngIf"], ["id", "modalinfo", 4, "ngIf"], ["id", "mmodalinfo", 4, "ngIf"], ["id", "modalimg", 3, "src"], ["id", "mmodalimg", 3, "src"], ["id", "modalinfo"], ["style", "width: 500px;", 4, "ngIf"], ["style", "margin-top: 8px;", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [2, "width", "500px"], [2, "margin-top", "8px"], ["target", "_blank", 3, "href", 4, "ngIf"], ["size", "2x", "id", "imdb", "ngbTooltip", "Visit IMDB", 3, "icon"], ["size", "2x", "id", "ins", "ngbTooltip", "Visit Instagram", 3, "icon"], ["size", "2x", "id", "face2", "ngbTooltip", "Visit Facebook", 3, "icon"], ["size", "2x", "id", "twitter2", "ngbTooltip", "Visit Twitter", 3, "icon"], ["id", "mmodalinfo"], ["style", "width: 350px;", 4, "ngIf"], [2, "width", "350px"], ["id", "bio", 4, "ngIf"], ["style", "width: 750px;", 4, "ngIf"], ["id", "bio"], [2, "width", "750px"], ["id", "mbio", 4, "ngIf"], ["id", "mbio"], ["id", "review", 4, "ngIf"], ["id", "reblock", 4, "ngFor", "ngForOf"], ["id", "review"], [2, "color", "gray"], ["id", "reblock"], ["id", "reimg", 3, "src"], ["id", "reinfo"], [2, "font-size", "22px", "font-weight", "600", "display", "inline-block"], ["id", "rerate"], [2, "color", "gray", "font-size", "15px", "margin-top", "30px"], ["id", "recontent"], [2, "margin-top", "17px"], ["target", "_blank", 2, "color", "purple", "text-decoration", "underline", 3, "href"], ["id", "mreview", 4, "ngIf"], ["id", "mreblock", 4, "ngFor", "ngForOf"], ["id", "mreview"], ["id", "mreblock"], ["id", "mreimg", 3, "src"], ["id", "mreinfo"], [2, "font-size", "29px", "font-weight", "600", "margin-left", "15px"], ["id", "mrerate"], [2, "color", "gray", "font-size", "20px", "margin-top", "30px"], ["id", "mrecontent"], ["style", "font-size: 45px;color: white;margin-left: 45px;margin-top: 35px; width: 350px;", 4, "ngIf"], [2, "font-size", "45px", "color", "white", "margin-left", "45px", "margin-top", "35px", "width", "350px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "20px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"], ["style", "font-size: 45px;color: white;margin-left: 45px; margin-top: 35px;width: 300px;", 4, "ngIf"], [2, "font-size", "45px", "color", "white", "margin-left", "45px", "margin-top", "35px", "width", "300px"]], template: function TvinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvinfoComponent_div_2_Template, 11, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvinfoComponent_div_3_Template, 11, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TvinfoComponent_div_4_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvinfoComponent_div_5_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvinfoComponent_ng_template_6_Template, 7, 2, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TvinfoComponent_div_8_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TvinfoComponent_div_9_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvinfoComponent_div_10_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TvinfoComponent_div_11_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TvinfoComponent_div_12_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TvinfoComponent_div_13_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mrecomdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mrecomdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msidata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msidata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".vedio[_ngcontent-%COMP%]{\n    margin-left: 120px;\n    margin-top:60px;\n}\n\n.detail[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 50px;\n}\n\n#vdiv[_ngcontent-%COMP%]{\n    display: inline-block;   \n}\n\n#dediv[_ngcontent-%COMP%]{\n   display: inline-block; \n   vertical-align: top;     \n}\n\n#name[_ngcontent-%COMP%]{\n    font-size: 46px;\n    width: 290px;\n    font-weight: 300; \n    margin-top:65px;  \n}\n\n#tagline[_ngcontent-%COMP%]{\n    font-size: 20px;\n    width: 290px;\n    font-style: italic;\n    font-weight: 200;\n}\n\n#year[_ngcontent-%COMP%]{\n    font-size: 19px;\n    width: 290px;\n    font-weight: 200;\n    margin-top:12px;\n}\n\n#genres[_ngcontent-%COMP%]{\n    font-size: 17px;\n    width: 300px;\n    margin-top:7px;\n}\n\n#language[_ngcontent-%COMP%]{\n    font-size: 17px;\n    width: 300px;\n}\n\n#addb[_ngcontent-%COMP%]{\n    width:150px;\n    height:30px;\n    margin-top:15px;\n    text-align: center;\n    line-height: 15px;;\n}\n\n#removeb[_ngcontent-%COMP%]{\n    width:200px;\n    height:30px;\n    margin-top:15px;\n    text-align: center;\n    line-height: 15px;;\n}\n\n#adda[_ngcontent-%COMP%]{\n    width:270px;\n    height:40px;\n    margin-top:10px;\n    line-height:20px;\n}\n\n#removea[_ngcontent-%COMP%]{\n    width:270px;\n    height:40px;\n    margin-top:10px;\n    line-height:20px;\n}\n\n#description[_ngcontent-%COMP%]{\n    margin-left: 130px;\n    color: white;\n    width: 950px;\n}\n\n#share[_ngcontent-%COMP%]{\n    margin-left: 130px;\n    color: white;\n}\n\n#twitter[_ngcontent-%COMP%]{\n    color:  #0099CC;\n    text-decoration: none;\n}\n\n#facebook[_ngcontent-%COMP%]{\n    color: #0000fc;\n    padding: 5px;\n    text-decoration: none;\n}\n\n#Cast[_ngcontent-%COMP%]{\n    font-size: 28px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 120px;;\n}\n\n#ccard[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin-left: 120px;\n    margin-top: 8px; \n    width: 910px;\n    height: auto;\n    white-space: nowrap; \n}\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 6px;\n    \n}\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    -box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  }\n\n#ccard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    border: 7px solid slategrey;\n    \n  }\n\n.card[_ngcontent-%COMP%]{\n    width: 135px;\n    height: auto;  \n    display: inline-block;\n    margin-left: 15px;\n    vertical-align: top;\n}\n\n.card-img-top[_ngcontent-%COMP%]{\n    width: 135px;\n    height: 180px; \n}\n\n.card-text[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    font-weight:bold;\n    width: 100px;\n    word-wrap:break-word;\n    word-break: normal;\n    white-space:pre-wrap;\n}\n\n#as[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    width: 100px;\n}\n\n#cc[_ngcontent-%COMP%]{\n    font-size:13px;\n    text-align: center;\n    word-wrap:break-word;\n    word-break: normal;\n    white-space:pre-wrap;\n    width: 100px;\n}\n\n#modalimg[_ngcontent-%COMP%]{\n    width:150px;\n    height:auto;\n    display: inline-block;\n}\n\n#modalinfo[_ngcontent-%COMP%]{\n    display: inline-block;\n    font-size: 14px;\n    margin-left: 25px;\n    vertical-align: top;\n}\n\n#bio[_ngcontent-%COMP%]{\n    margin-top:20px;\n    font-size:26px;\n    font-weight: 600;\n}\n\n#imdb[_ngcontent-%COMP%]{\n    background-color: white;\n    color:orange;\n}\n\n#ins[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: purple;\n}\n\n#face2[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: #0000fc;\n}\n\n#twitter2[_ngcontent-%COMP%]{\n    margin-left: 5px;\n    color: #0099CC;\n}\n\n  .tooltip-inner{\n    background-color:  #FFFFFF;\n    color: black;\n    border: 1px solid gray;\n}\n\n#review[_ngcontent-%COMP%]{\n    font-size: 28px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 120px;;\n}\n\n#reblock[_ngcontent-%COMP%]{\n    width: 950px;\n    height:250px;\n    background-color:#FFFFFF;\n    margin-top:20px;\n    margin-left:120px;\n    border-radius:10px;\n}\n\n#reimg[_ngcontent-%COMP%]{\n    width: 70px;\n    height:70px;\n    margin-left:30px;\n    border-radius:40px;\n    margin-top:20px;\n    display: inline-block;\n    \n}\n\n#reinfo[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-left: 30px;\n    vertical-align: top;\n    margin-top:20px;\n}\n\n#rerate[_ngcontent-%COMP%]{\n    width: 50px;\n    background-color:black;\n    color:white;\n    text-align: center;\n    border-radius:30px;\n    display: inline-block;\n    margin-left:15px;\n\n}\n\n#recontent[_ngcontent-%COMP%]{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    width:760px;\n    margin-top:15px;\n}\n\nngb-carousel[_ngcontent-%COMP%]{\n    width: 1130px;\n    margin-left: 30px;\n    height:280px;\n    margin-top:30px;\n    outline:none;\n}\n\n.bb1[_ngcontent-%COMP%]{\n    margin-left: 110px;\n}\n\nimg[_ngcontent-%COMP%]{\n    padding:8px;\n    width: 150px;\n    height:230px;    \n}\n\n.titlename[_ngcontent-%COMP%]{\n    margin-left:9px;\n    background-color: black;\n    width: 133px;\n    height:35px; \n    margin-top: -30px;\n    position: relative;\n    box-shadow: 0 0 3px 4px black;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    opacity: 0;\n    \n}\n\n.cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n\n.cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\nh3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n\n#movedio[_ngcontent-%COMP%]{\n    margin-left:20px;\n    margin-top:10px;\n}\n\n.mdetail[_ngcontent-%COMP%]{\n   color: white;\n   margin-left: 20px;\n}\n\n#mname[_ngcontent-%COMP%]{\n   font-size:40px;\n   margin-top:10px;\n   width: 300px;\n}\n\n#mtagline[_ngcontent-%COMP%]{\n   font-size: 23px;\n   width: 290px;\n   font-style: italic;\n   font-weight: 200;\n}\n\n#myear[_ngcontent-%COMP%]{\n   font-size: 23px;\n   width: 290px;\n   font-weight: 200;\n   margin-top:12px;\n}\n\n#mgenres[_ngcontent-%COMP%]{\n   font-size: 21px;\n   width: 300px;\n   margin-top:7px;\n}\n\n#mlanguage[_ngcontent-%COMP%]{\n   font-size: 21px;\n   width: 300px;\n   margin-top:7px;\n}\n\n#maddb[_ngcontent-%COMP%]{\n   margin-top:15px;\n}\n\n#mremoveb[_ngcontent-%COMP%]{\n   margin-top:15px;\n}\n\n#madda[_ngcontent-%COMP%]{\n   margin-top:7px;\n   width: 330px;\n}\n\n#mremovea[_ngcontent-%COMP%]{\n    margin-top:7px;\n    width: 330px;\n}\n\n#mdescription[_ngcontent-%COMP%]{\n   margin-left: 20px;\n   margin-top:14px;\n   color: white;\n   width: 350px;\n}\n\n#mshare[_ngcontent-%COMP%]{\n   margin-left: 20px;\n   color: white; \n}\n\n#mCast[_ngcontent-%COMP%]{\n    font-size: 38px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 20px;;\n}\n\n#mccard[_ngcontent-%COMP%]{\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin-left: 20px;\n    margin-top: 8px; \n    width: 350px;\n    height: auto;\n    white-space: nowrap; \n}\n\n#mmodalimg[_ngcontent-%COMP%]{\n    width:350px;\n    height:500px;\n}\n\n#mmodalinfo[_ngcontent-%COMP%]{\n    font-size: 23px;\n    margin-left:3px;\n}\n\n#mbio[_ngcontent-%COMP%]{\n    margin-top:20px;\n    font-size:30px;\n    font-weight: 600;\n}\n\n#mreview[_ngcontent-%COMP%]{\n    font-size: 38px;\n    font-weight: 400;\n    margin-top: 25px;\n    color:white;\n    margin-left: 20px;;\n}\n\n#mreblock[_ngcontent-%COMP%]{\n    width: 350px;\n    height:460px;\n    background-color:#FFFFFF;\n    margin-top:20px;\n    margin-left:20px;\n    border-radius:10px;\n}\n\n#mreimg[_ngcontent-%COMP%]{\n    width: 80px;\n    height:80px;\n    margin-left:50px;\n    border-radius:40px;\n    margin-top:10px;\n}\n\n#mreinfo[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    margin-top:10px;\n}\n\n#mrerate[_ngcontent-%COMP%]{\n    width: 55px;\n    font-size: 20px;\n    background-color:black;\n    color:white;\n    text-align: center;\n    border-radius:30px;\n    margin-left:15px;\n    margin-top: 7px;;\n}\n\n#mrecontent[_ngcontent-%COMP%]{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display:-webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    width:327px;\n    margin-top:15px;\n    font-size:17px;\n}\n\n#mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 5px;\n    outline:none;\n    margin-top:10px;\n}\n\n#mobileimg[_ngcontent-%COMP%]{\n    width: 250px;\n    height:300px;\n}\n\n.mobilename[_ngcontent-%COMP%]{\n        margin-left:5px;\n        background-color: black;\n        width: 232px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n\n.mm1[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n\n.mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dmluZm8vdHZpbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7R0FDRyxxQkFBcUI7R0FDckIsbUJBQW1CO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLDZDQUE2QztFQUMvQzs7QUFHRjtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7O0VBRTdCOztBQUtGO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7Q0FDZjs7QUFFQTtJQUNHLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0dBQ0csWUFBWTtHQUNaLGlCQUFpQjtBQUNwQjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxlQUFlO0dBQ2YsWUFBWTtBQUNmOztBQUVBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsZ0JBQWdCO0FBQ25COztBQUVBO0dBQ0csZUFBZTtHQUNmLFlBQVk7R0FDWixnQkFBZ0I7R0FDaEIsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixZQUFZO0dBQ1osY0FBYztBQUNqQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixZQUFZO0dBQ1osY0FBYztBQUNqQjs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBO0dBQ0csY0FBYztHQUNkLFlBQVk7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixZQUFZO0dBQ1osWUFBWTtBQUNmOztBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLFlBQVk7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7UUFDUSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLDRCQUE0QjtBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHZpbmZvL3R2aW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlZGlve1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOjYwcHg7XG59XG5cbi5kZXRhaWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4jdmRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgXG59XG5cbiNkZWRpdntcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAgICAgXG59XG5cbiNuYW1le1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgXG4gICAgbWFyZ2luLXRvcDo2NXB4OyAgXG59XG5cbiN0YWdsaW5le1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbiN5ZWFye1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tdG9wOjEycHg7XG59XG5cbiNnZW5yZXN7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOjdweDtcbn1cblxuI2xhbmd1YWdle1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbiNhZGRie1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7O1xufVxuI3JlbW92ZWJ7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTVweDs7XG59XG5cbiNhZGRhe1xuICAgIHdpZHRoOjI3MHB4O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICBsaW5lLWhlaWdodDoyMHB4O1xufVxuI3JlbW92ZWF7XG4gICAgd2lkdGg6MjcwcHg7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XG59XG5cbiNkZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA5NTBweDtcbn1cblxuI3NoYXJle1xuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiN0d2l0dGVye1xuICAgIGNvbG9yOiAgIzAwOTlDQztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNmYWNlYm9va3tcbiAgICBjb2xvcjogIzAwMDBmYztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jQ2FzdHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDs7XG59XG5cbiNjY2FyZHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7IFxuICAgIHdpZHRoOiA5MTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG4jY2NhcmQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBcbn1cblxuI2NjYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG5cbiAgIFxuI2NjYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gICAgYm9yZGVyOiA3cHggc29saWQgc2xhdGVncmV5O1xuICAgIFxuICB9XG4gICBcblxuXG5cbi5jYXJke1xuICAgIHdpZHRoOiAxMzVweDtcbiAgICBoZWlnaHQ6IGF1dG87ICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNhcmQtaW1nLXRvcHtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgaGVpZ2h0OiAxODBweDsgXG59XG5cbi5jYXJkLXRleHR7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcbn1cbiNhc3tcbiAgICBmb250LXNpemU6MTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jY2N7XG4gICAgZm9udC1zaXplOjEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3aGl0ZS1zcGFjZTpwcmUtd3JhcDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cblxuI21vZGFsaW1ne1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDphdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI21vZGFsaW5mb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNiaW97XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZToyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNpbWRie1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOm9yYW5nZTtcbn1cblxuI2luc3tcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiBwdXJwbGU7XG59XG5cbiNmYWNlMntcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGNvbG9yOiAjMDAwMGZjO1xufVxuXG4jdHdpdHRlcjJ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogIzAwOTlDQztcbn1cbjo6bmctZGVlcCAudG9vbHRpcC1pbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0ZGRkZGRjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuI3Jldmlld3tcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDs7XG59XG5cbiNyZWJsb2Nre1xuICAgIHdpZHRoOiA5NTBweDtcbiAgICBoZWlnaHQ6MjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBtYXJnaW4tbGVmdDoxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbiNyZWltZ3tcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6NzBweDtcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxufVxuXG4jcmVpbmZve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbn1cblxuI3JlcmF0ZXtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG5cbn1cblxuI3JlY29udGVudHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgd2lkdGg6NzYwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xufVxuXG5uZ2ItY2Fyb3VzZWx7XG4gICAgd2lkdGg6IDExMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBoZWlnaHQ6MjgwcHg7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbn1cbi5iYjF7XG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xufVxuXG5pbWd7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDoyMzBweDsgICAgXG59XG5cblxuLnRpdGxlbmFtZXtcbiAgICBtYXJnaW4tbGVmdDo5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEzM3B4O1xuICAgIGhlaWdodDozNXB4OyBcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgXG59XG5cbi5jYzpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xufVxuXG4uY2M6aG92ZXIgLnRpdGxlbmFtZXtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5oM3tcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDo0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG5cbiAjbW92ZWRpb3tcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cbi5tZGV0YWlse1xuICAgY29sb3I6IHdoaXRlO1xuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbiNtbmFtZXtcbiAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgd2lkdGg6IDMwMHB4O1xufVxuXG4jbXRhZ2xpbmV7XG4gICBmb250LXNpemU6IDIzcHg7XG4gICB3aWR0aDogMjkwcHg7XG4gICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICBmb250LXdlaWdodDogMjAwO1xufVxuXG4jbXllYXJ7XG4gICBmb250LXNpemU6IDIzcHg7XG4gICB3aWR0aDogMjkwcHg7XG4gICBmb250LXdlaWdodDogMjAwO1xuICAgbWFyZ2luLXRvcDoxMnB4O1xufVxuXG4jbWdlbnJlc3tcbiAgIGZvbnQtc2l6ZTogMjFweDtcbiAgIHdpZHRoOiAzMDBweDtcbiAgIG1hcmdpbi10b3A6N3B4O1xufVxuXG4jbWxhbmd1YWdle1xuICAgZm9udC1zaXplOiAyMXB4O1xuICAgd2lkdGg6IDMwMHB4O1xuICAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbiNtYWRkYntcbiAgIG1hcmdpbi10b3A6MTVweDtcbn1cblxuI21yZW1vdmVie1xuICAgbWFyZ2luLXRvcDoxNXB4O1xufVxuXG4jbWFkZGF7XG4gICBtYXJnaW4tdG9wOjdweDtcbiAgIHdpZHRoOiAzMzBweDtcbn1cblxuI21yZW1vdmVhe1xuICAgIG1hcmdpbi10b3A6N3B4O1xuICAgIHdpZHRoOiAzMzBweDtcbn1cblxuI21kZXNjcmlwdGlvbntcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgbWFyZ2luLXRvcDoxNHB4O1xuICAgY29sb3I6IHdoaXRlO1xuICAgd2lkdGg6IDM1MHB4O1xufVxuXG4jbXNoYXJle1xuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICBjb2xvcjogd2hpdGU7IFxufVxuXG4jbUNhc3R7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDs7XG59XG5cbiNtY2NhcmR7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7IFxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG4jbW1vZGFsaW1ne1xuICAgIHdpZHRoOjM1MHB4O1xuICAgIGhlaWdodDo1MDBweDtcbn1cblxuI21tb2RhbGluZm97XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIG1hcmdpbi1sZWZ0OjNweDtcbn1cblxuI21iaW97XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNtcmV2aWV3e1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7O1xufVxuXG4jbXJlYmxvY2t7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDo0NjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4jbXJlaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDo4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo0MHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuI21yZWluZm97XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4jbXJlcmF0ZXtcbiAgICB3aWR0aDogNTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4Oztcbn1cblxuI21yZWNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIHdpZHRoOjMyN3B4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBmb250LXNpemU6MTdweDtcbn1cblxuI21vYmlsZXtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MzEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4jbW9iaWxlaW1ne1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6MzAwcHg7XG59XG5cbi5tb2JpbGVuYW1le1xuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMjMycHg7XG4gICAgICAgIGhlaWdodDozNXB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5tbTF7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4ubW0xOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tvinfo',
                templateUrl: './tvinfo.component.html',
                styleUrls: ['./tvinfo.component.css']
            }]
    }], function () { return [{ type: _services_tvvedio_service__WEBPACK_IMPORTED_MODULE_2__["TvvedioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_tvdetail_service__WEBPACK_IMPORTED_MODULE_4__["TvdetailService"] }, { type: _services_tvcast_service__WEBPACK_IMPORTED_MODULE_5__["TvcastService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _services_castdetail_service__WEBPACK_IMPORTED_MODULE_7__["CastdetailService"] }, { type: _services_castex_service__WEBPACK_IMPORTED_MODULE_8__["CastexService"] }, { type: _services_tvreview_service__WEBPACK_IMPORTED_MODULE_9__["TvreviewService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }, { type: _services_tvrecom_service__WEBPACK_IMPORTED_MODULE_11__["TvrecomService"] }, { type: _services_tvsimilar_service__WEBPACK_IMPORTED_MODULE_12__["TvsimilarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "NDx4":
/*!******************************************!*\
  !*** ./src/app/services/tprm.service.ts ***!
  \******************************************/
/*! exports provided: TprmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TprmService", function() { return TprmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TprmService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTpr() {
        let URL = "https://sample666.wn.r.appspot.com//apis/tprmovie";
        return this.httpClient.get(URL);
    }
}
TprmService.ɵfac = function TprmService_Factory(t) { return new (t || TprmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TprmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TprmService, factory: TprmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TprmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OTHw":
/*!********************************************!*\
  !*** ./src/app/services/mvedio.service.ts ***!
  \********************************************/
/*! exports provided: MvedioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvedioService", function() { return MvedioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MvedioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMvedio(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/mvedio/" + id;
        return this.httpClient.get(URL);
    }
}
MvedioService.ɵfac = function MvedioService_Factory(t) { return new (t || MvedioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MvedioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MvedioService, factory: MvedioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MvedioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PX0+":
/*!*********************************************!*\
  !*** ./src/app/services/tvrecom.service.ts ***!
  \*********************************************/
/*! exports provided: TvrecomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvrecomService", function() { return TvrecomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvrecomService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvrecom(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvrecom/" + id;
        return this.httpClient.get(URL);
    }
}
TvrecomService.ɵfac = function TvrecomService_Factory(t) { return new (t || TvrecomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvrecomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvrecomService, factory: TvrecomService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvrecomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "R95a":
/*!******************************************!*\
  !*** ./src/app/services/curm.service.ts ***!
  \******************************************/
/*! exports provided: CurmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurmService", function() { return CurmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CurmService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPost() {
        let URL = "https://sample666.wn.r.appspot.com//apis/curmovie";
        return this.httpClient.get(URL);
    }
}
CurmService.ɵfac = function CurmService_Factory(t) { return new (t || CurmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CurmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurmService, factory: CurmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Project1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "XR7/":
/*!**********************************************!*\
  !*** ./src/app/services/tvreview.service.ts ***!
  \**********************************************/
/*! exports provided: TvreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvreviewService", function() { return TvreviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvreviewService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvreview(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvreview/" + id;
        return this.httpClient.get(URL);
    }
}
TvreviewService.ɵfac = function TvreviewService_Factory(t) { return new (t || TvreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvreviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvreviewService, factory: TvreviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvreviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_currently_m_currently_m_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/currently-m/currently-m.component */ "jDW2");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_popm_popm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/popm/popm.component */ "1yWS");
/* harmony import */ var _components_tprm_tprm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tprm/tprm.component */ "hMn5");
/* harmony import */ var _components_trendm_trendm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/trendm/trendm.component */ "l6lJ");
/* harmony import */ var _components_poptv_poptv_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/poptv/poptv.component */ "ail+");
/* harmony import */ var _components_tprtv_tprtv_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tprtv/tprtv.component */ "iiFI");
/* harmony import */ var _components_trendtv_trendtv_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/trendtv/trendtv.component */ "KDhO");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_minfo_minfo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/minfo/minfo.component */ "2Gn4");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_continuewatch_continuewatch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/continuewatch/continuewatch.component */ "68Wm");
/* harmony import */ var _components_tvinfo_tvinfo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tvinfo/tvinfo.component */ "MWB9");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _components_currently_m_currently_m_component__WEBPACK_IMPORTED_MODULE_9__["CurrentlyMComponent"],
        _components_popm_popm_component__WEBPACK_IMPORTED_MODULE_11__["PopmComponent"],
        _components_tprm_tprm_component__WEBPACK_IMPORTED_MODULE_12__["TprmComponent"],
        _components_trendm_trendm_component__WEBPACK_IMPORTED_MODULE_13__["TrendmComponent"],
        _components_poptv_poptv_component__WEBPACK_IMPORTED_MODULE_14__["PoptvComponent"],
        _components_tprtv_tprtv_component__WEBPACK_IMPORTED_MODULE_15__["TprtvComponent"],
        _components_trendtv_trendtv_component__WEBPACK_IMPORTED_MODULE_16__["TrendtvComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _components_minfo_minfo_component__WEBPACK_IMPORTED_MODULE_18__["MinfoComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_20__["MylistComponent"],
        _components_continuewatch_continuewatch_component__WEBPACK_IMPORTED_MODULE_21__["ContinuewatchComponent"],
        _components_tvinfo_tvinfo_component__WEBPACK_IMPORTED_MODULE_22__["TvinfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                    _components_currently_m_currently_m_component__WEBPACK_IMPORTED_MODULE_9__["CurrentlyMComponent"],
                    _components_popm_popm_component__WEBPACK_IMPORTED_MODULE_11__["PopmComponent"],
                    _components_tprm_tprm_component__WEBPACK_IMPORTED_MODULE_12__["TprmComponent"],
                    _components_trendm_trendm_component__WEBPACK_IMPORTED_MODULE_13__["TrendmComponent"],
                    _components_poptv_poptv_component__WEBPACK_IMPORTED_MODULE_14__["PoptvComponent"],
                    _components_tprtv_tprtv_component__WEBPACK_IMPORTED_MODULE_15__["TprtvComponent"],
                    _components_trendtv_trendtv_component__WEBPACK_IMPORTED_MODULE_16__["TrendtvComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _components_minfo_minfo_component__WEBPACK_IMPORTED_MODULE_18__["MinfoComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_19__["HomepageComponent"],
                    _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_20__["MylistComponent"],
                    _components_continuewatch_continuewatch_component__WEBPACK_IMPORTED_MODULE_21__["ContinuewatchComponent"],
                    _components_tvinfo_tvinfo_component__WEBPACK_IMPORTED_MODULE_22__["TvinfoComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ail+":
/*!*****************************************************!*\
  !*** ./src/app/components/poptv/poptv.component.ts ***!
  \*****************************************************/
/*! exports provided: PoptvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoptvComponent", function() { return PoptvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_poptv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/poptv.service */ "1WC1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function PoptvComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PoptvComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PoptvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.name);
} }
function PoptvComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PoptvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function PoptvComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoptvComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.poptvdata);
} }
function PoptvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.name);
} }
function PoptvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoptvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function PoptvComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PoptvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function PoptvComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoptvComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function PoptvComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoptvComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PoptvComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class PoptvComponent {
    constructor(poptvService, config) {
        this.poptvService = poptvService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.poptvService.getAllPoptv().subscribe(res => {
            this.poptvdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.poptvdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.poptvdata[i]);
                }
                else {
                    this.formatted[j].push(this.poptvdata[i]);
                }
            }
        });
    }
}
PoptvComponent.ɵfac = function PoptvComponent_Factory(t) { return new (t || PoptvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poptv_service__WEBPACK_IMPORTED_MODULE_1__["PoptvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
PoptvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoptvComponent, selectors: [["app-poptv"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px; width: 250px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px", "width", "250px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "12px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"]], template: function PoptvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PoptvComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PoptvComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PoptvComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poptvdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n ngb-carousel[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left: 30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:9px;\n     background-color: black;\n     width: 133px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B0di9wb3B0di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0NBRUE7S0FDSSxhQUFhO0tBQ2IsaUJBQWlCO0tBQ2pCLFlBQVk7S0FDWixlQUFlO0tBQ2YsWUFBWTtDQUNoQjs7Q0FDQTtLQUNJLGtCQUFrQjtDQUN0Qjs7Q0FFQTtLQUNJLFdBQVc7S0FDWCxZQUFZO0tBQ1osWUFBWTtDQUNoQjs7Q0FHQTtLQUNJLGVBQWU7S0FDZix1QkFBdUI7S0FDdkIsWUFBWTtLQUNaLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsa0JBQWtCO0tBQ2xCLDZCQUE2QjtLQUM3QixnQkFBZ0I7S0FDaEIsdUJBQXVCO0tBQ3ZCLG1CQUFtQjtLQUNuQixxQkFBcUI7S0FDckIsNEJBQTRCO0tBQzVCLFVBQVU7O0NBRWQ7O0NBRUE7S0FDSSxxQkFBcUI7Q0FDekI7O0NBRUE7S0FDSSxVQUFVO0NBQ2Q7O0NBRUE7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7Q0FFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztDQUVBO1FBQ1EsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQiw0QkFBNEI7QUFDcEM7O0NBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0NBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHR2L3BvcHR2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDo0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG4gXG4gbmdiLWNhcm91c2Vse1xuICAgICB3aWR0aDogMTEzMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgaGVpZ2h0OjI4MHB4O1xuICAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgIG91dGxpbmU6bm9uZTtcbiB9XG4gLmJiMXtcbiAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuIH1cbiBcbiBpbWd7XG4gICAgIHBhZGRpbmc6OHB4O1xuICAgICB3aWR0aDogMTUwcHg7XG4gICAgIGhlaWdodDoyMzBweDsgICAgXG4gfVxuIFxuIFxuIC50aXRsZW5hbWV7XG4gICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgIHdpZHRoOiAxMzNweDtcbiAgICAgaGVpZ2h0OjM1cHg7IFxuICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgXG4gfVxuIFxuIC5jYzpob3ZlciBpbWd7XG4gICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbiB9XG4gXG4gLmNjOmhvdmVyIC50aXRsZW5hbWV7XG4gICAgIG9wYWNpdHk6IDE7XG4gfVxuXG4gI21vYmlsZXtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MzEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuI21vYmlsZWltZ3tcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OjMwMHB4O1xufVxuXG4ubW9iaWxlbmFtZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBoZWlnaHQ6MzVweDsgXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ubW0xe1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuLm1tMTpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoptvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poptv',
                templateUrl: './poptv.component.html',
                styleUrls: ['./poptv.component.css']
            }]
    }], function () { return [{ type: _services_poptv_service__WEBPACK_IMPORTED_MODULE_1__["PoptvService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "c6aR":
/*!**********************************************!*\
  !*** ./src/app/services/tvdetail.service.ts ***!
  \**********************************************/
/*! exports provided: TvdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvdetailService", function() { return TvdetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvdetailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvdetail(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvdetail/" + id;
        return this.httpClient.get(URL);
    }
}
TvdetailService.ɵfac = function TvdetailService_Factory(t) { return new (t || TvdetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvdetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvdetailService, factory: TvdetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvdetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "erjn":
/*!********************************************!*\
  !*** ./src/app/services/trendm.service.ts ***!
  \********************************************/
/*! exports provided: TrendmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendmService", function() { return TrendmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TrendmService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTrend() {
        let URL = "https://sample666.wn.r.appspot.com//apis/trendmovie";
        return this.httpClient.get(URL);
    }
}
TrendmService.ɵfac = function TrendmService_Factory(t) { return new (t || TrendmService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TrendmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrendmService, factory: TrendmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "l3hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function NavBarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MyList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx_r0.search)("resultTemplate", _r1)("inputFormatter", ctx_r0.formatter);
} }
function NavBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.result;
    const t_r5 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r4.media_type, "/", r_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", r_r4["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r4.title)("term", t_r5);
} }
function NavBarComponent_nav_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_nav_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.isNavbarCollapsed = !ctx_r6.isNavbarCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r3.isNavbarCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx_r3.search)("resultTemplate", _r1)("inputFormatter", ctx_r3.formatter);
} }
class NavBarComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.isNavbarCollapsed = true;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => term === '' ? []
            : this.searchService.getMulsearch(term).pipe()));
        this.formatter = (x) => x.name;
    }
    ngOnInit() {
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
        }
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 4, vars: 2, consts: [["class", "navbar  navbar-expand-lg navbar-dark fixed-top", "style", "background-color: #010b1e;", 4, "ngIf"], ["rt", ""], ["class", "navbar navbar-expand-md navbar-dark fixed-top", "style", "width:410px;background-color:#010b1e;", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", 2, "background-color", "#010b1e"], ["routerLink", "", 1, "navbar-brand", 2, "margin-left", "40px"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 2, "margin-left", "10px"], [1, "navbar-nav"], ["routerLink", "", 1, "nav-item", "nav-link", "active"], [1, "sr-only"], ["routerLink", "/mylist", 1, "nav-item", "nav-link", 2, "margin-left", "10px"], ["id", "typeahead-template", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngbTypeahead", "resultTemplate", "inputFormatter"], [3, "routerLink"], [1, "mr-1", 2, "width", "70px", "height", "40px", 3, "src"], [2, "color", "white", "margin-left", "8px", 3, "result", "term"], [1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", 2, "width", "410px", "background-color", "#010b1e"], ["routerLink", "", 1, "navbar-brand"], ["type", "button", "data-target", "#navbarsDefault", "aria-controls", "navbarsDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "hidden-sm-up", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarsDefault", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], ["routerLink", "", 1, "nav-item", "nav-link", "active", "text-white"], ["routerLink", "/mylist", 1, "nav-item", "nav-link", "text-white"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_nav_0_Template, 12, 3, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 3, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarComponent_nav_3_Template, 11, 4, "nav", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"]], styles: ["input[_ngcontent-%COMP%]{\n    margin-right:70px;\n    width:180px;\n    border-bottom: 2px solid white;\n    border-top:0px;\n    border-left:0px;\n    border-right:0px;\n    border-radius: 0px; \n    background-color: #010b1e;\n}\ninput.form-control[_ngcontent-%COMP%]:focus{\n    outline: none;\n    margin-right:70px;\n    width:180px;\n    border-bottom: 2px solid white;\n    border-top:0px;\n    border-left:0px;\n    border-right:0px; \n    border-radius: 0px; \n    background-color: #010b1e;\n    box-shadow:none;\n}\n  .dropdown-menu.show {\n    background:#050a30;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgICBtYXJnaW4tcmlnaHQ6NzBweDtcbiAgICB3aWR0aDoxODBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXRvcDowcHg7XG4gICAgYm9yZGVyLWxlZnQ6MHB4O1xuICAgIGJvcmRlci1yaWdodDowcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwYjFlO1xufVxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OjcwcHg7XG4gICAgd2lkdGg6MTgwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci10b3A6MHB4O1xuICAgIGJvcmRlci1sZWZ0OjBweDtcbiAgICBib3JkZXItcmlnaHQ6MHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTBiMWU7XG4gICAgYm94LXNoYWRvdzpub25lO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgYmFja2dyb3VuZDojMDUwYTMwO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "gIH0":
/*!********************************************!*\
  !*** ./src/app/services/tvcast.service.ts ***!
  \********************************************/
/*! exports provided: TvcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvcastService", function() { return TvcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvcastService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvcast(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvcast/" + id;
        return this.httpClient.get(URL);
    }
}
TvcastService.ɵfac = function TvcastService_Factory(t) { return new (t || TvcastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvcastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvcastService, factory: TvcastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvcastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hMn5":
/*!***************************************************!*\
  !*** ./src/app/components/tprm/tprm.component.ts ***!
  \***************************************************/
/*! exports provided: TprmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TprmComponent", function() { return TprmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tprm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tprm.service */ "NDx4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function TprmComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TprmComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TprmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.title);
} }
function TprmComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function TprmComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprmComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tprmdata);
} }
function TprmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.title);
} }
function TprmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function TprmComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function TprmComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprmComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function TprmComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprmComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TprmComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class TprmComponent {
    constructor(tprmService, config) {
        this.tprmService = tprmService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.tprmService.getAllTpr().subscribe(res => {
            this.tprmdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.tprmdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.tprmdata[i]);
                }
                else {
                    this.formatted[j].push(this.tprmdata[i]);
                }
            }
        });
    }
}
TprmComponent.ɵfac = function TprmComponent_Factory(t) { return new (t || TprmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tprm_service__WEBPACK_IMPORTED_MODULE_1__["TprmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
TprmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TprmComponent, selectors: [["app-tprm"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "15px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"]], template: function TprmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprmComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprmComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TprmComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tprmdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n ngb-carousel[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left: 30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:9px;\n     background-color: black;\n     width: 133px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cHJtL3Rwcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtDQUNmOztDQUVBO0tBQ0ksYUFBYTtLQUNiLGlCQUFpQjtLQUNqQixZQUFZO0tBQ1osZUFBZTtLQUNmLFlBQVk7Q0FDaEI7O0NBQ0E7S0FDSSxrQkFBa0I7Q0FDdEI7O0NBRUE7S0FDSSxXQUFXO0tBQ1gsWUFBWTtLQUNaLFlBQVk7Q0FDaEI7O0NBR0E7S0FDSSxlQUFlO0tBQ2YsdUJBQXVCO0tBQ3ZCLFlBQVk7S0FDWixXQUFXO0tBQ1gsaUJBQWlCO0tBQ2pCLGtCQUFrQjtLQUNsQiw2QkFBNkI7S0FDN0IsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtLQUN2QixtQkFBbUI7S0FDbkIscUJBQXFCO0tBQ3JCLDRCQUE0QjtLQUM1QixVQUFVOztDQUVkOztDQUVBO0tBQ0kscUJBQXFCO0NBQ3pCOztDQUVBO0tBQ0ksVUFBVTtDQUNkOztDQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0NBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7Q0FFQTtRQUNRLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsNEJBQTRCO0FBQ3BDOztDQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztDQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cHJtL3Rwcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBuZ2ItY2Fyb3VzZWx7XG4gICAgIHdpZHRoOiAxMTMwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICBoZWlnaHQ6MjgwcHg7XG4gICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICAgb3V0bGluZTpub25lO1xuIH1cbiAuYmIxe1xuICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gfVxuIFxuIGltZ3tcbiAgICAgcGFkZGluZzo4cHg7XG4gICAgIHdpZHRoOiAxNTBweDtcbiAgICAgaGVpZ2h0OjIzMHB4OyAgICBcbiB9XG4gXG4gXG4gLnRpdGxlbmFtZXtcbiAgICAgbWFyZ2luLWxlZnQ6OXB4O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgd2lkdGg6IDEzM3B4O1xuICAgICBoZWlnaHQ6MzVweDsgXG4gICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIGJveC1zaGFkb3c6IDAgMCAzcHggNHB4IGJsYWNrO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICBvcGFjaXR5OiAwO1xuICAgICBcbiB9XG4gXG4gLmNjOmhvdmVyIGltZ3tcbiAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xuIH1cbiBcbiAuY2M6aG92ZXIgLnRpdGxlbmFtZXtcbiAgICAgb3BhY2l0eTogMTtcbiB9XG5cbiAjbW9iaWxle1xuICAgIHdpZHRoOjM1MHB4O1xuICAgIGhlaWdodDozMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4jbW9iaWxlaW1ne1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6MzAwcHg7XG59XG5cbi5tb2JpbGVuYW1le1xuICAgICAgICBtYXJnaW4tbGVmdDo5cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIGhlaWdodDozNXB4OyBcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5tbTF7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4ubW0xOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TprmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tprm',
                templateUrl: './tprm.component.html',
                styleUrls: ['./tprm.component.css']
            }]
    }], function () { return [{ type: _services_tprm_service__WEBPACK_IMPORTED_MODULE_1__["TprmService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "iiFI":
/*!*****************************************************!*\
  !*** ./src/app/components/tprtv/tprtv.component.ts ***!
  \*****************************************************/
/*! exports provided: TprtvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TprtvComponent", function() { return TprtvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tprtv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tprtv.service */ "k0F4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function TprtvComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TprtvComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Rated TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TprtvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.name);
} }
function TprtvComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprtvComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function TprtvComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprtvComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.tprtvdata);
} }
function TprtvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/tv/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.name);
} }
function TprtvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprtvComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function TprtvComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprtvComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function TprtvComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprtvComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function TprtvComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprtvComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TprtvComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class TprtvComponent {
    constructor(tprtvService, config) {
        this.tprtvService = tprtvService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.tprtvService.getAllTprtv().subscribe(res => {
            this.tprtvdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.tprtvdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.tprtvdata[i]);
                }
                else {
                    this.formatted[j].push(this.tprtvdata[i]);
                }
            }
        });
    }
}
TprtvComponent.ɵfac = function TprtvComponent_Factory(t) { return new (t || TprtvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tprtv_service__WEBPACK_IMPORTED_MODULE_1__["TprtvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
TprtvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TprtvComponent, selectors: [["app-tprtv"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px; width: 250px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px", "width", "250px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "12px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"]], template: function TprtvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TprtvComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TprtvComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TprtvComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tprtvdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n ngb-carousel[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left: 30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:9px;\n     background-color: black;\n     width: 133px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cHJ0di90cHJ0di5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0NBRUE7S0FDSSxhQUFhO0tBQ2IsaUJBQWlCO0tBQ2pCLFlBQVk7S0FDWixlQUFlO0tBQ2YsWUFBWTtDQUNoQjs7Q0FDQTtLQUNJLGtCQUFrQjtDQUN0Qjs7Q0FFQTtLQUNJLFdBQVc7S0FDWCxZQUFZO0tBQ1osWUFBWTtDQUNoQjs7Q0FHQTtLQUNJLGVBQWU7S0FDZix1QkFBdUI7S0FDdkIsWUFBWTtLQUNaLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsa0JBQWtCO0tBQ2xCLDZCQUE2QjtLQUM3QixnQkFBZ0I7S0FDaEIsdUJBQXVCO0tBQ3ZCLG1CQUFtQjtLQUNuQixxQkFBcUI7S0FDckIsNEJBQTRCO0tBQzVCLFVBQVU7O0NBRWQ7O0NBRUE7S0FDSSxxQkFBcUI7Q0FDekI7O0NBRUE7S0FDSSxVQUFVO0NBQ2Q7O0NBRUE7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7Q0FFQztJQUNHLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztDQUVBO1FBQ1EsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQiw0QkFBNEI7QUFDcEM7O0NBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0NBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RwcnR2L3RwcnR2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDo0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiB9XG4gXG4gbmdiLWNhcm91c2Vse1xuICAgICB3aWR0aDogMTEzMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgaGVpZ2h0OjI4MHB4O1xuICAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgIG91dGxpbmU6bm9uZTtcbiB9XG4gLmJiMXtcbiAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuIH1cbiBcbiBpbWd7XG4gICAgIHBhZGRpbmc6OHB4O1xuICAgICB3aWR0aDogMTUwcHg7XG4gICAgIGhlaWdodDoyMzBweDsgICAgXG4gfVxuIFxuIFxuIC50aXRsZW5hbWV7XG4gICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgIHdpZHRoOiAxMzNweDtcbiAgICAgaGVpZ2h0OjM1cHg7IFxuICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgb3BhY2l0eTogMDtcbiAgICAgXG4gfVxuIFxuIC5jYzpob3ZlciBpbWd7XG4gICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbiB9XG4gXG4gLmNjOmhvdmVyIC50aXRsZW5hbWV7XG4gICAgIG9wYWNpdHk6IDE7XG4gfVxuXG4gI21vYmlsZXtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MzEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuICNtb2JpbGVpbWd7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDozMDBweDtcbn1cblxuLm1vYmlsZW5hbWV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgaGVpZ2h0OjM1cHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm1tMXtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5tbTE6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TprtvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tprtv',
                templateUrl: './tprtv.component.html',
                styleUrls: ['./tprtv.component.css']
            }]
    }], function () { return [{ type: _services_tprtv_service__WEBPACK_IMPORTED_MODULE_1__["TprtvService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "jDW2":
/*!*****************************************************************!*\
  !*** ./src/app/components/currently-m/currently-m.component.ts ***!
  \*****************************************************************/
/*! exports provided: CurrentlyMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentlyMComponent", function() { return CurrentlyMComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_curm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/curm.service */ "R95a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
//import { Component, OnInit } from '@angular/core';







const _c0 = ["carousel"];
function CurrentlyMComponent_ngb_carousel_0_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const d_r4 = ctx_r7.$implicit;
    const i_r5 = ctx_r7.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", d_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", d_r4.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r5 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.title);
} }
function CurrentlyMComponent_ngb_carousel_0_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrentlyMComponent_ngb_carousel_0_2_ng_template_0_Template, 6, 4, "ng-template", 5);
} }
function CurrentlyMComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function CurrentlyMComponent_ngb_carousel_0_Template_ngb_carousel_slide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentlyMComponent_ngb_carousel_0_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
function CurrentlyMComponent_ngb_carousel_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const d_r12 = ctx_r15.$implicit;
    const i_r13 = ctx_r15.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", d_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", d_r12.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r13 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r12.title);
} }
function CurrentlyMComponent_ngb_carousel_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrentlyMComponent_ngb_carousel_1_2_ng_template_0_Template, 6, 4, "ng-template", 5);
} }
function CurrentlyMComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slide", function CurrentlyMComponent_ngb_carousel_1_Template_ngb_carousel_slide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentlyMComponent_ngb_carousel_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
class CurrentlyMComponent {
    constructor(curmService, config) {
        this.curmService = curmService;
        this.config = config;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.curmService.getAllPost().subscribe(res => {
            this.data = res;
        });
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
}
CurrentlyMComponent.ɵfac = function CurrentlyMComponent_Factory(t) { return new (t || CurrentlyMComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_curm_service__WEBPACK_IMPORTED_MODULE_2__["CurmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"])); };
CurrentlyMComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentlyMComponent, selectors: [["app-currently-m"]], viewQuery: function CurrentlyMComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 2, vars: 2, consts: [["id", "mobile", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide", 4, "ngIf"], ["id", "desktop", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide", 4, "ngIf"], ["id", "mobile", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], ["id", "mobileimg"], ["id", "mimg", 3, "src", "alt"], ["id", "mobiletitle", 1, "carousel-caption", 2, "background", "black", "width", "944px", "height", "60px", "text-align", "left", "left", "1px", "bottom", "0px", "box-shadow", "0 0 5px 2px black"], [2, "margin-left", "3px", "color", "white"], ["id", "desktop", 3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], [1, "picsum-img-wrapper"], ["id", "dimg", 3, "src", "alt"], ["id", "title", 1, "carousel-caption", 2, "background", "black", "width", "944px", "height", "60px", "text-align", "left", "left", "28px", "bottom", "0px", "box-shadow", "0 0 15px 10px black"], [2, "margin-left", "70px", "color", "white"]], template: function CurrentlyMComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CurrentlyMComponent_ngb_carousel_0_Template, 3, 4, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentlyMComponent_ngb_carousel_1_Template, 3, 4, "ngb-carousel", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#desktop[_ngcontent-%COMP%]{\n    width: 1000px;\n    margin-left: 100px;\n    height:350px;\n    margin-top:50px;\n    outline:none;\n}\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n    width: 900px;\n    height:350px;\n }\n#dimg[_ngcontent-%COMP%]{\n    width: 900px;\n    height:350px; \n    margin-left: 50px;\n }\n#title[_ngcontent-%COMP%]{\n     opacity: 0;\n }\n#desktop[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05)\n }\n#desktop[_ngcontent-%COMP%]:hover   #title[_ngcontent-%COMP%]{\n    opacity: 1;\n }\n#mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:200px;\n    margin-left: 27px;\n    outline:none;\n    margin-top:20px;\n }\n#mobileimg[_ngcontent-%COMP%]{\n    width: 350px;\n    height:200px; \n }\n#mimg[_ngcontent-%COMP%]{\n    width: 350px;\n    height:200px; \n    \n }\n#mobile[_ngcontent-%COMP%]:hover   #mimg[_ngcontent-%COMP%]{\n    transform:scale(1.05)\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50bHktbS9jdXJyZW50bHktbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0E7S0FDSSxVQUFVO0NBQ2Q7QUFDQTtJQUNHO0NBQ0g7QUFFQTtJQUNHLFVBQVU7Q0FDYjtBQUVBO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7QUFFQTtJQUNHLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFFQTtJQUNHLFlBQVk7SUFDWixZQUFZOztDQUVmO0FBRUE7SUFDRztDQUNIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW50bHktbS9jdXJyZW50bHktbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rlc2t0b3B7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG4ucGljc3VtLWltZy13cmFwcGVye1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBoZWlnaHQ6MzUwcHg7XG4gfVxuXG4jZGltZ3tcbiAgICB3aWR0aDogOTAwcHg7XG4gICAgaGVpZ2h0OjM1MHB4OyBcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiB9XG4gI3RpdGxle1xuICAgICBvcGFjaXR5OiAwO1xuIH1cbiAjZGVza3RvcDpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpXG4gfVxuXG4gI2Rlc2t0b3A6aG92ZXIgI3RpdGxle1xuICAgIG9wYWNpdHk6IDE7XG4gfVxuIFxuICNtb2JpbGV7XG4gICAgd2lkdGg6MzUwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gfVxuXG4gI21vYmlsZWltZ3tcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OjIwMHB4OyBcbiB9XG5cbiAjbWltZ3tcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OjIwMHB4OyBcbiAgICBcbiB9XG5cbiAjbW9iaWxlOmhvdmVyICNtaW1ne1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KVxuIH1cblxuXG4gXG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentlyMComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currently-m',
                templateUrl: './currently-m.component.html',
                styleUrls: ['./currently-m.component.css']
            }]
    }], function () { return [{ type: _services_curm_service__WEBPACK_IMPORTED_MODULE_2__["CurmService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', { static: true }]
        }] }); })();


/***/ }),

/***/ "k0F4":
/*!*******************************************!*\
  !*** ./src/app/services/tprtv.service.ts ***!
  \*******************************************/
/*! exports provided: TprtvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TprtvService", function() { return TprtvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TprtvService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTprtv() {
        let URL = "https://sample666.wn.r.appspot.com//apis/tprtv";
        return this.httpClient.get(URL);
    }
}
TprtvService.ɵfac = function TprtvService_Factory(t) { return new (t || TprtvService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TprtvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TprtvService, factory: TprtvService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TprtvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _currently_m_currently_m_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../currently-m/currently-m.component */ "jDW2");
/* harmony import */ var _continuewatch_continuewatch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../continuewatch/continuewatch.component */ "68Wm");
/* harmony import */ var _popm_popm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popm/popm.component */ "1yWS");
/* harmony import */ var _tprm_tprm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tprm/tprm.component */ "hMn5");
/* harmony import */ var _trendm_trendm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trendm/trendm.component */ "l6lJ");
/* harmony import */ var _poptv_poptv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../poptv/poptv.component */ "ail+");
/* harmony import */ var _tprtv_tprtv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tprtv/tprtv.component */ "iiFI");
/* harmony import */ var _trendtv_trendtv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trendtv/trendtv.component */ "KDhO");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");











class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 12, vars: 0, consts: [[2, "height", "50px", "color", "#050a30"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "aaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-currently-m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-continuewatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-popm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tprm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-trendm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-poptv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-tprtv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-trendtv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_currently_m_currently_m_component__WEBPACK_IMPORTED_MODULE_1__["CurrentlyMComponent"], _continuewatch_continuewatch_component__WEBPACK_IMPORTED_MODULE_2__["ContinuewatchComponent"], _popm_popm_component__WEBPACK_IMPORTED_MODULE_3__["PopmComponent"], _tprm_tprm_component__WEBPACK_IMPORTED_MODULE_4__["TprmComponent"], _trendm_trendm_component__WEBPACK_IMPORTED_MODULE_5__["TrendmComponent"], _poptv_poptv_component__WEBPACK_IMPORTED_MODULE_6__["PoptvComponent"], _tprtv_tprtv_component__WEBPACK_IMPORTED_MODULE_7__["TprtvComponent"], _trendtv_trendtv_component__WEBPACK_IMPORTED_MODULE_8__["TrendtvComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SearchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMulsearch(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/search/" + id;
        return this.httpClient.get(URL);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "l6lJ":
/*!*******************************************************!*\
  !*** ./src/app/components/trendm/trendm.component.ts ***!
  \*******************************************************/
/*! exports provided: TrendmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendmComponent", function() { return TrendmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_trendm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trendm.service */ "erjn");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function TrendmComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendmComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trending Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imga_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", imga_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", imga_r6.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imga_r6.title);
} }
function TrendmComponent_div_2_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendmComponent_div_2_ngb_carousel_1_1_ng_template_0_Template, 6, 3, "ng-template", 7);
} }
function TrendmComponent_div_2_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendmComponent_div_2_ngb_carousel_1_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.trendmdata);
} }
function TrendmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", img_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r13.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r13.title);
} }
function TrendmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendmComponent_div_2_ngb_carousel_2_1_ng_template_0_div_1_Template, 6, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r10);
} }
function TrendmComponent_div_2_ngb_carousel_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendmComponent_div_2_ngb_carousel_2_1_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function TrendmComponent_div_2_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendmComponent_div_2_ngb_carousel_2_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.formatted);
} }
function TrendmComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendmComponent_div_2_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendmComponent_div_2_ngb_carousel_2_Template, 2, 2, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class TrendmComponent {
    constructor(trendmService, config) {
        this.trendmService = trendmService;
        this.config = config;
    }
    ngOnInit() {
        this.fetchData();
        if (window.screen.width === 414) { // 768px portrait
            this.mobile = true;
            this.config.showNavigationIndicators = false;
        }
    }
    fetchData() {
        this.trendmService.getAllTrend().subscribe(res => {
            this.trendmdata = res;
            this.formatted = [];
            var j = -1;
            for (var i = 0; i < this.trendmdata.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    this.formatted[j] = [];
                    this.formatted[j].push(this.trendmdata[i]);
                }
                else {
                    this.formatted[j].push(this.trendmdata[i]);
                }
            }
        });
    }
}
TrendmComponent.ɵfac = function TrendmComponent_Factory(t) { return new (t || TrendmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trendm_service__WEBPACK_IMPORTED_MODULE_1__["TrendmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
TrendmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendmComponent, selectors: [["app-trendm"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "font-size: 35px;color: white;margin-left: 45px;", 4, "ngIf"], [2, "font-size", "35px", "color", "white", "margin-left", "45px"], ["id", "mobile", 3, "interval", 4, "ngIf"], [3, "interval", 4, "ngIf"], ["id", "mobile", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mm1"], [3, "routerLink"], ["id", "mobileimg", 3, "src"], [1, "mobilename"], [2, "color", "white", "font-size", "15px"], [3, "interval"], [1, "bb1"], ["class", "cc", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "cc", 2, "display", "inline-block"], [1, "", 3, "src"], [1, "titlename"], [2, "color", "white", "font-size", "12px"]], template: function TrendmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendmComponent_h3_0_Template, 2, 0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendmComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendmComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendmdata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h3[_ngcontent-%COMP%]{\n    margin-left: 150px;\n    margin-top:40px;\n    color: white;\n }\n \n ngb-carousel[_ngcontent-%COMP%]{\n     width: 1130px;\n     margin-left: 30px;\n     height:280px;\n     margin-top:30px;\n     outline:none;\n }\n \n .bb1[_ngcontent-%COMP%]{\n     margin-left: 110px;\n }\n \n img[_ngcontent-%COMP%]{\n     padding:8px;\n     width: 150px;\n     height:230px;    \n }\n \n .titlename[_ngcontent-%COMP%]{\n     margin-left:9px;\n     background-color: black;\n     width: 133px;\n     height:35px; \n     margin-top: -30px;\n     position: relative;\n     box-shadow: 0 0 3px 4px black;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     display:-webkit-box;\n     -webkit-line-clamp: 2;\n     -webkit-box-orient: vertical;\n     opacity: 0;\n     \n }\n \n .cc[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n     transform:scale(1.05);\n }\n \n .cc[_ngcontent-%COMP%]:hover   .titlename[_ngcontent-%COMP%]{\n     opacity: 1;\n }\n \n #mobile[_ngcontent-%COMP%]{\n    width:350px;\n    height:310px;\n    margin-left: 30px;\n    outline:none;\n    margin-top:10px;\n}\n \n #mobileimg[_ngcontent-%COMP%]{\n    width: 230px;\n    height:300px;\n}\n \n .mobilename[_ngcontent-%COMP%]{\n        margin-left:9px;\n        background-color: black;\n        width: 210px;\n        height:35px; \n        margin-top: -30px;\n        position: relative;\n        box-shadow: 0 0 3px 4px black;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display:-webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n}\n \n .mm1[_ngcontent-%COMP%]{\n    margin-left: 60px;\n}\n \n .mm1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform:scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVuZG0vdHJlbmRtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7Q0FDZjs7Q0FFQTtLQUNJLGFBQWE7S0FDYixpQkFBaUI7S0FDakIsWUFBWTtLQUNaLGVBQWU7S0FDZixZQUFZO0NBQ2hCOztDQUNBO0tBQ0ksa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksV0FBVztLQUNYLFlBQVk7S0FDWixZQUFZO0NBQ2hCOztDQUdBO0tBQ0ksZUFBZTtLQUNmLHVCQUF1QjtLQUN2QixZQUFZO0tBQ1osV0FBVztLQUNYLGlCQUFpQjtLQUNqQixrQkFBa0I7S0FDbEIsNkJBQTZCO0tBQzdCLGdCQUFnQjtLQUNoQix1QkFBdUI7S0FDdkIsbUJBQW1CO0tBQ25CLHFCQUFxQjtLQUNyQiw0QkFBNEI7S0FDNUIsVUFBVTs7Q0FFZDs7Q0FFQTtLQUNJLHFCQUFxQjtDQUN6Qjs7Q0FFQTtLQUNJLFVBQVU7Q0FDZDs7Q0FFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0FBQ25COztDQUVDO0lBQ0csWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0NBRUE7UUFDUSxlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLDRCQUE0QjtBQUNwQzs7Q0FFQTtJQUNJLGlCQUFpQjtBQUNyQjs7Q0FDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlbmRtL3RyZW5kbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6NDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gfVxuIFxuIG5nYi1jYXJvdXNlbHtcbiAgICAgd2lkdGg6IDExMzBweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgIGhlaWdodDoyODBweDtcbiAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICBvdXRsaW5lOm5vbmU7XG4gfVxuIC5iYjF7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiB9XG4gXG4gaW1ne1xuICAgICBwYWRkaW5nOjhweDtcbiAgICAgd2lkdGg6IDE1MHB4O1xuICAgICBoZWlnaHQ6MjMwcHg7ICAgIFxuIH1cbiBcbiBcbiAudGl0bGVuYW1le1xuICAgICBtYXJnaW4tbGVmdDo5cHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICB3aWR0aDogMTMzcHg7XG4gICAgIGhlaWdodDozNXB4OyBcbiAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgYm94LXNoYWRvdzogMCAwIDNweCA0cHggYmxhY2s7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgIG9wYWNpdHk6IDA7XG4gICAgIFxuIH1cbiBcbiAuY2M6aG92ZXIgaW1ne1xuICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG4gfVxuIFxuIC5jYzpob3ZlciAudGl0bGVuYW1le1xuICAgICBvcGFjaXR5OiAxO1xuIH1cblxuI21vYmlsZXtcbiAgICB3aWR0aDozNTBweDtcbiAgICBoZWlnaHQ6MzEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuICNtb2JpbGVpbWd7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDozMDBweDtcbn1cblxuLm1vYmlsZW5hbWV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgaGVpZ2h0OjM1cHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDRweCBibGFjaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLm1tMXtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5tbTE6aG92ZXIgaW1ne1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trendm',
                templateUrl: './trendm.component.html',
                styleUrls: ['./trendm.component.css']
            }]
    }], function () { return [{ type: _services_trendm_service__WEBPACK_IMPORTED_MODULE_1__["TrendmService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "mbFq":
/*!********************************************!*\
  !*** ./src/app/services/castex.service.ts ***!
  \********************************************/
/*! exports provided: CastexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastexService", function() { return CastexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CastexService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCastex(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/castex/" + id;
        return this.httpClient.get(URL);
    }
}
CastexService.ɵfac = function CastexService_Factory(t) { return new (t || CastexService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CastexService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CastexService, factory: CastexService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastexService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pDTn":
/*!*********************************************!*\
  !*** ./src/app/services/trendtv.service.ts ***!
  \*********************************************/
/*! exports provided: TrendtvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendtvService", function() { return TrendtvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TrendtvService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTrendtv() {
        let URL = "https://sample666.wn.r.appspot.com//apis/trendtv";
        return this.httpClient.get(URL);
    }
}
TrendtvService.ɵfac = function TrendtvService_Factory(t) { return new (t || TrendtvService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TrendtvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrendtvService, factory: TrendtvService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendtvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "s+FS":
/*!*********************************************!*\
  !*** ./src/app/services/tvvedio.service.ts ***!
  \*********************************************/
/*! exports provided: TvvedioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvvedioService", function() { return TvvedioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TvvedioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllTvvedio(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/tvvedio/" + id;
        return this.httpClient.get(URL);
    }
}
TvvedioService.ɵfac = function TvvedioService_Factory(t) { return new (t || TvvedioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TvvedioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TvvedioService, factory: TvvedioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TvvedioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tWl2":
/*!*********************************************!*\
  !*** ./src/app/services/mreview.service.ts ***!
  \*********************************************/
/*! exports provided: MreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MreviewService", function() { return MreviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MreviewService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMreview(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/mreview/" + id;
        return this.httpClient.get(URL);
    }
}
MreviewService.ɵfac = function MreviewService_Factory(t) { return new (t || MreviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MreviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MreviewService, factory: MreviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MreviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_minfo_minfo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/minfo/minfo.component */ "2Gn4");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_tvinfo_tvinfo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tvinfo/tvinfo.component */ "MWB9");








const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_4__["MylistComponent"] },
    { path: 'watch/movie',
        children: [
            { path: ':id', component: _components_minfo_minfo_component__WEBPACK_IMPORTED_MODULE_2__["MinfoComponent"] }
        ]
    },
    { path: 'watch/tv',
        children: [
            { path: ':id', component: _components_tvinfo_tvinfo_component__WEBPACK_IMPORTED_MODULE_5__["TvinfoComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wFeJ":
/*!*******************************************!*\
  !*** ./src/app/services/mcast.service.ts ***!
  \*******************************************/
/*! exports provided: McastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McastService", function() { return McastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class McastService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMcast(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/mcast/" + id;
        return this.httpClient.get(URL);
    }
}
McastService.ɵfac = function McastService_Factory(t) { return new (t || McastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
McastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: McastService, factory: McastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "x/oX":
/*!*********************************************!*\
  !*** ./src/app/services/mdetail.service.ts ***!
  \*********************************************/
/*! exports provided: MdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdetailService", function() { return MdetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MdetailService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMdetail(id) {
        let URL = "https://sample666.wn.r.appspot.com//apis/mdetail/" + id;
        return this.httpClient.get(URL);
    }
}
MdetailService.ɵfac = function MdetailService_Factory(t) { return new (t || MdetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MdetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MdetailService, factory: MdetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MdetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map