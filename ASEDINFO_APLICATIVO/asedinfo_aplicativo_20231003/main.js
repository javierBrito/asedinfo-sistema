"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["main"],{

/***/ 76911:
/*!************************************************!*\
  !*** ./src/@core/animations/core.animation.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInLeft": function() { return /* binding */ fadeInLeft; },
/* harmony export */   "zoomIn": function() { return /* binding */ zoomIn; },
/* harmony export */   "fadeIn": function() { return /* binding */ fadeIn; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 46755);
 // Animation: FadeInLeft

var fadeInLeft = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)',
  opacity: 0
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(0%)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(100%)'
}))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('800ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'translateX(0%)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()], {
  optional: true
})])])]); // Animation: ZoomIn

var zoomIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('zoomIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0,
  transform: 'scale(0.5) translateY(-20%)'
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem',
  transform: 'scale(1) translateY(0)'
}))], {
  optional: true
})])]); // Animation: FadeIn

var fadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  opacity: 0
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  paddingRight: '2rem',
  paddingLeft: '2rem'
}))], {
  optional: true
})])]);

/***/ }),

/***/ 41705:
/*!************************************!*\
  !*** ./src/@core/common.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreCommonModule": function() { return /* binding */ CoreCommonModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/directives */ 55448);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/pipes.module */ 80324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);







var CoreCommonModule = function CoreCommonModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreCommonModule);
};

CoreCommonModule.ɵfac = function CoreCommonModule_Factory(t) {
  return new (t || CoreCommonModule)();
};

CoreCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreCommonModule
});
CoreCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.CorePipesModule], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.CorePipesModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreCommonModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.CorePipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.CorePipesModule]
  });
})();

/***/ }),

/***/ 457:
/*!*********************************************************************!*\
  !*** ./src/@core/components/card-snippet/card-snippet.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreCardSnippetComponent": function() { return /* binding */ CoreCardSnippetComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ 46300);







function CoreCardSnippetComponent_li_10_ng_template_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoreCardSnippetComponent_li_10_ng_template_3_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r8.copyCode(ctx_r8.snippetCode.html);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CoreCardSnippetComponent_li_10_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "copied !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0() {
  return ["html"];
};

function CoreCardSnippetComponent_li_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_10_ng_template_3_i_3_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CoreCardSnippetComponent_li_10_ng_template_3_span_5_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx_r5.snippetCode.html)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
  }
}

function CoreCardSnippetComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_10_ng_template_3_Template, 10, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", "html");
  }
}

function CoreCardSnippetComponent_li_11_ng_template_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoreCardSnippetComponent_li_11_ng_template_3_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r13.copyCode(ctx_r13.snippetCode.ts);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CoreCardSnippetComponent_li_11_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "copied !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c1 = function _c1() {
  return ["typescript"];
};

function CoreCardSnippetComponent_li_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_11_ng_template_3_i_3_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CoreCardSnippetComponent_li_11_ng_template_3_span_5_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx_r10.snippetCode.ts)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
  }
}

function CoreCardSnippetComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_11_ng_template_3_Template, 10, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", "ts");
  }
}

function CoreCardSnippetComponent_li_12_ng_template_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoreCardSnippetComponent_li_12_ng_template_3_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r18.copyCode(ctx_r18.snippetCode.scss);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CoreCardSnippetComponent_li_12_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "copied !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c2 = function _c2() {
  return ["scss"];
};

function CoreCardSnippetComponent_li_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_12_ng_template_3_i_3_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CoreCardSnippetComponent_li_12_ng_template_3_span_5_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx_r15.snippetCode.scss)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c2));
  }
}

function CoreCardSnippetComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SCSS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_12_ng_template_3_Template, 10, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", "scss");
  }
}

function CoreCardSnippetComponent_li_13_ng_template_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoreCardSnippetComponent_li_13_ng_template_3_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r23.copyCode(ctx_r23.snippetCode.json);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CoreCardSnippetComponent_li_13_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "copied !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c3 = function _c3() {
  return ["json"];
};

function CoreCardSnippetComponent_li_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CoreCardSnippetComponent_li_13_ng_template_3_i_4_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CoreCardSnippetComponent_li_13_ng_template_3_span_6_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r20.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.copyCodeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("highlight", ctx_r20.snippetCode.json)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
  }
}

function CoreCardSnippetComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreCardSnippetComponent_li_13_ng_template_3_Template, 11, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", "json");
  }
}

var _c4 = [[["", 8, "card-title"]], [["", 8, "card-body"]], "*"];
var _c5 = [".card-title", ".card-body", "*"];
var CoreCardSnippetComponent = /*#__PURE__*/function () {
  function CoreCardSnippetComponent() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreCardSnippetComponent);

    // public
    this.copyCodeStatus = false; // private

    this._defaultSnippetCode = {
      isCollapsed: true // default collapsed is true

    };
  } // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * copyCode
   *
   * @param code
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreCardSnippetComponent, [{
    key: "copyCode",
    value: function copyCode(code) {
      var _this = this;

      var selectBox = document.createElement('textarea');
      selectBox.style.position = 'fixed';
      selectBox.value = code;
      document.body.appendChild(selectBox);
      selectBox.focus();
      selectBox.select();
      document.execCommand('copy');
      document.body.removeChild(selectBox);
      setTimeout(function () {
        _this.copyCodeStatus = false;
      }, 500);
      this.copyCodeStatus = true;
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      // concatenate default properties with passed properties
      this.snippetCode = Object.assign(Object.assign({}, this._defaultSnippetCode), this.snippetCode);
    }
  }]);

  return CoreCardSnippetComponent;
}();

CoreCardSnippetComponent.ɵfac = function CoreCardSnippetComponent_Factory(t) {
  return new (t || CoreCardSnippetComponent)();
};

CoreCardSnippetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CoreCardSnippetComponent,
  selectors: [["core-card-snippet"]],
  inputs: {
    snippetCode: "snippetCode"
  },
  ngContentSelectors: _c5,
  decls: 15,
  vars: 8,
  consts: [[1, "card"], [1, "card-header"], [1, "code-icon", 3, "click"], [3, "ngbCollapse"], [1, "card-body", "pt-0"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem", 4, "ngIf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "code-toggle"], ["class", "feather icon-copy font-medium-2 cursor-pointer text-white p-1", 3, "click", 4, "ngIf"], ["class", "text-white text-copied mr-1 badge badge-secondary", 4, "ngIf"], [3, "highlight", "languages"], [1, "feather", "icon-copy", "font-medium-2", "cursor-pointer", "text-white", "p-1", 3, "click"], [1, "text-white", "text-copied", "mr-1", "badge", "badge-secondary"], ["class", "feather icon-copy font-medium-2 cursor-pointer text-white float-right p-1", 3, "click", 4, "ngIf"], ["class", "text-white float-right mr-1 badge badge-secondary", 4, "ngIf"], [1, "feather", "icon-copy", "font-medium-2", "cursor-pointer", "text-white", "float-right", "p-1", 3, "click"], [1, "text-white", "float-right", "mr-1", "badge", "badge-secondary"], [1, "mb-1", "ml-50"]],
  template: function CoreCardSnippetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CoreCardSnippetComponent_Template_i_click_3_listener() {
        return ctx.snippetCode.isCollapsed = !ctx.snippetCode.isCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function CoreCardSnippetComponent_Template_ul_activeIdChange_8_listener($event) {
        return ctx.snippetCode.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CoreCardSnippetComponent_li_10_Template, 4, 1, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CoreCardSnippetComponent_li_11_Template, 4, 1, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CoreCardSnippetComponent_li_12_Template, 4, 1, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CoreCardSnippetComponent_li_13_Template, 4, 1, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.snippetCode.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.snippetCode.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.snippetCode.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.snippetCode.html);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.snippetCode.ts);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.snippetCode.scss);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.snippetCode.json);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__.Highlight],
  styles: [".code-icon[_ngcontent-%COMP%] {\n  font: normal normal normal 14px/1 FontAwesome;\n  display: inline-block;\n  font-weight: 700 !important;\n  cursor: pointer;\n}\n.code-icon[_ngcontent-%COMP%]:before {\n  content: \"\\f121\";\n}\n.code-toggle[_ngcontent-%COMP%] {\n  transition: transform 0.35s, opacity 0.35s, max-height 0.4s ease-out;\n  position: relative;\n}\n.code-toggle.collapse[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  transform: translateY(100%);\n}\n.code-toggle.collapse.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  max-height: 600px;\n  transform: translateY(0);\n}\n.code-toggle.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: block;\n}\n.code-toggle[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow: auto;\n  white-space: nowrap;\n  margin: 0;\n}\n.code-toggle[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  white-space: pre;\n  overflow: visible;\n  padding: 2rem 0.5em;\n}\n.code-toggle[_ngcontent-%COMP%]   .icon-copy[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n}\n.code-toggle[_ngcontent-%COMP%]   .text-copied[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtc25pcHBldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUtBO0VBQ0Usb0VBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBRko7QUFJSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBRk47QUFLSTtFQUNFLGNBQUE7QUFITjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBTEo7QUFNSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpOO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFMSjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUxKIiwiZmlsZSI6ImNhcmQtc25pcHBldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvZGUgaWNvblxyXG4uY29kZS1pY29uIHtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXGYxMjEnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gY29kZSB0b2dnbGUgYW5pbWF0aW9uXHJcbi5jb2RlLXRvZ2dsZSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzLCBvcGFjaXR5IDAuMzVzLCBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmLmNvbGxhcHNlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG5cclxuICAgICYuc2hvdyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnNob3cpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmUge1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2RlIHtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMC41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uLWNvcHkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICB9XHJcbiAgLnRleHQtY29waWVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICB0b3A6IDVweDtcclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 62351:
/*!******************************************************************!*\
  !*** ./src/@core/components/card-snippet/card-snippet.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardSnippetModule": function() { return /* binding */ CardSnippetModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ 46300);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);







var CardSnippetModule = function CardSnippetModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CardSnippetModule);
};

CardSnippetModule.ɵfac = function CardSnippetModule_Factory(t) {
  return new (t || CardSnippetModule)();
};

CardSnippetModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CardSnippetModule
});
CardSnippetModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: function fullLibraryLoader() {
        return __webpack_require__.e(/*! import() */ "node_modules_highlight_js_lib_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highlight.js */ 27282, 23));
      }
    }
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.HighlightModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CardSnippetModule, {
    declarations: [_core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_2__.CoreCardSnippetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__.HighlightModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule],
    exports: [_core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_2__.CoreCardSnippetComponent]
  });
})();

/***/ }),

/***/ 14557:
/*!***************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuComponent": function() { return /* binding */ CoreMenuComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 28428);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 18425);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 16922);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 18210);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 50769);














var _c0 = ["core-menu", ""];

function CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 5);
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r10);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_1_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_li_2_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "item" && (item_r10.role ? item_r10.role.includes(ctx_r9.currentUser.role) :  false || item_r10.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible" && (item_r10.role ? item_r10.role.includes(ctx_r9.currentUser.role) :  false || item_r10.role == undefined));
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r3.children);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r3.disabled === true))("routerLinkActive", !item_r3.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r3.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r3.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r3.url));
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 8);
  }

  if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r3);
  }
}

function CoreMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_li_1_Template, 1, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_0_ng_container_1_li_3_Template, 2, 12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CoreMenuComponent_ng_container_0_ng_container_1_li_4_Template, 1, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section" && (item_r3.role ? item_r3.role.includes(ctx_r2.currentUser.role) :  false || item_r3.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "item" && (item_r3.role ? item_r3.role.includes(ctx_r2.currentUser.role) :  false || item_r3.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.type == "collapsible" && (item_r3.role ? item_r3.role.includes(ctx_r2.currentUser.role) :  false || item_r3.role == undefined));
  }
}

function CoreMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_0_ng_container_1_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 12);
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, item_r19.disabled === true))("routerLinkActive", !item_r19.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c2, item_r19.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", item_r19.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](10, _c4, item_r19.url));
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 14);
  }

  if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", item_r19);
  }
}

function CoreMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_li_1_Template, 1, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CoreMenuComponent_ng_container_1_ng_container_1_li_2_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CoreMenuComponent_ng_container_1_ng_container_1_li_3_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r19 = ctx.$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "section" && (item_r19.role ? item_r19.role.includes(ctx_r18.currentUser.role) :  false || item_r19.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "item" && (item_r19.role ? item_r19.role.includes(ctx_r18.currentUser.role) :  false || item_r19.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r19.type == "collapsible" && (item_r19.role ? item_r19.role.includes(ctx_r18.currentUser.role) :  false || item_r19.role == undefined));
  }
}

function CoreMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.menu);
  }
}

var CoreMenuComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuComponent(_changeDetectorRef, _coreMenuService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuComponent);

    this._changeDetectorRef = _changeDetectorRef;
    this._coreMenuService = _coreMenuService;
    this.layout = 'vertical'; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Set the menu either from the input or from the service
      this.menu = this.menu || this._coreMenuService.getCurrentMenu(); // Subscribe to the current menu changes

      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser; // Load menu

        _this.menu = _this._coreMenuService.getCurrentMenu();

        _this._changeDetectorRef.markForCheck();
      });
    }
  }]);

  return CoreMenuComponent;
}();

CoreMenuComponent.ɵfac = function CoreMenuComponent_Factory(t) {
  return new (t || CoreMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_2__.CoreMenuService));
};

CoreMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CoreMenuComponent,
  selectors: [["", "core-menu", ""]],
  inputs: {
    layout: "layout",
    menu: "menu"
  },
  attrs: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["core-menu-vertical-section", "", "class", "navigation-header", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-section", "", 1, "navigation-header", 3, "item"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"], ["core-menu-horizontal-collapsible", "", "class", "dropdown nav-item", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "nav-item", 3, "item"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CoreMenuComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CoreMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "vertical" && ctx.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal" && ctx.currentUser);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalItemComponent],
  styles: [".vertical-layout:not(.vertical-overlay-menu) .main-menu:not(.expanded) .nav-item.has-sub.open .menu-content {\n  display: none;\n}\n\n.nav-item.disabled {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTTtFQUNFLGFBQUE7QUFIUjs7QUFTRTtFQUNFLGFBQUE7QUFOSiIsImZpbGUiOiJjb3JlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgSGlkZSBjb2xsYXBzaWJsZSBtZW51IHdoaWxlIG1lbnUgaXMgY29sbGFwc2VkXHJcbi52ZXJ0aWNhbC1sYXlvdXQ6bm90KC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUpIHtcclxuICAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIHtcclxuICAgIC5uYXYtaXRlbS5oYXMtc3ViLm9wZW4ge1xyXG4gICAgICAubWVudS1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 87702:
/*!************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* binding */ CoreMenuModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 14557);
/* harmony import */ var _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/vertical/section/section.component */ 28428);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 18425);
/* harmony import */ var _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/collapsible/collapsible.component */ 16922);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 50769);
/* harmony import */ var _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/components/core-menu/horizontal/collapsible/collapsible.component */ 18210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);













_core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalSectionComponent;
_core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalItemComponent;
_core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalCollapsibleComponent;
var CoreMenuModule = function CoreMenuModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuModule);
};

CoreMenuModule.ɵfac = function CoreMenuModule_Factory(t) {
  return new (t || CoreMenuModule)();
};

CoreMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: CoreMenuModule
});
CoreMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild(), _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreMenuModule, {
    declarations: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuComponent, _core_components_core_menu_vertical_section_section_component__WEBPACK_IMPORTED_MODULE_3__.CoreMenuVerticalSectionComponent, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_4__.CoreMenuVerticalItemComponent, _core_components_core_menu_vertical_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalCollapsibleComponent, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalItemComponent, _core_components_core_menu_horizontal_collapsible_collapsible_component__WEBPACK_IMPORTED_MODULE_7__.CoreMenuHorizontalCollapsibleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule],
    exports: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_2__.CoreMenuComponent]
  });
})();

/***/ }),

/***/ 68029:
/*!*************************************************************!*\
  !*** ./src/@core/components/core-menu/core-menu.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuService": function() { return /* binding */ CoreMenuService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/service */ 33650);






var CoreMenuService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  function CoreMenuService(_router, _authenticationService) {
    var _this = this;

    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuService);

    this._router = _router;
    this._authenticationService = _authenticationService;
    this._registry = {};

    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    }); // Set defaults


    this.onItemCollapsed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.onItemCollapseToggled = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // Set private defaults

    this._currentMenuKey = null;
    this._onMenuRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuUnregistered = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this._onMenuChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
  } // Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * onMenuRegistered
   *
   * @returns {Observable<any>}
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMenuService, [{
    key: "onMenuRegistered",
    get: function get() {
      return this._onMenuRegistered.asObservable();
    }
    /**
     * onMenuUnregistered
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "onMenuUnregistered",
    get: function get() {
      return this._onMenuUnregistered.asObservable();
    }
    /**
     * onMenuChanged
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "onMenuChanged",
    get: function get() {
      return this._onMenuChanged.asObservable();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register the provided menu with the provided key
     *
     * @param key
     * @param menu
     */

  }, {
    key: "register",
    value: function register(key, menu) {
      // Confirm if the key already used
      if (this._registry[key]) {
        console.error("Menu with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      } // Add to registry


      this._registry[key] = menu; // Notify subject

      this._onMenuRegistered.next([key, menu]);
    }
    /**
     * Unregister the menu from the registry
     *
     * @param key
     */

  }, {
    key: "unregister",
    value: function unregister(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
      } // Unregister sidebar


      delete this._registry[key]; // Notify subject

      this._onMenuUnregistered.next(key);
    }
    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */

  }, {
    key: "getMenu",
    value: function getMenu(key) {
      // Confirm if the menu exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Return sidebar


      return this._registry[key];
    }
    /**
     * Get current menu
     *
     * @returns {any}
     */

  }, {
    key: "getCurrentMenu",
    value: function getCurrentMenu() {
      if (!this._currentMenuKey) {
        console.warn("The current menu is not set.");
        return;
      }

      return this.getMenu(this._currentMenuKey);
    }
    /**
     * Set menu with the key as the current menu
     *
     * @param key
     */

  }, {
    key: "setCurrentMenu",
    value: function setCurrentMenu(key) {
      // Confirm if the sidebar exists
      if (!this._registry[key]) {
        console.warn("Menu with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Set current menu key


      this._currentMenuKey = key; // Notify subject

      this._onMenuChanged.next(key);
    }
  }]);

  return CoreMenuService;
}();

CoreMenuService.ɵfac = function CoreMenuService_Factory(t) {
  return new (t || CoreMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};

CoreMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMenuService,
  factory: CoreMenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 18210:
/*!****************************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/collapsible/collapsible.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalCollapsibleComponent": function() { return /* binding */ CoreMenuHorizontalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 95724);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/horizontal/item/item.component */ 50769);















var _c0 = ["core-menu-horizontal-collapsible", ""];

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("ngClass", ctx_r1.item.type == "section" ? "dropdown-toggle nav-link" : "dropdown-item dropdown-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 9);
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data-feather", ctx_r6.item.icon);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.item.title);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, item_r7.disabled === true))("routerLinkActive", !item_r7.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c2, item_r7.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", item_r7.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c4, item_r7.url));
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 14);
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r7);
  }
}

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "item" && (item_r7.role ? item_r7.role.includes(ctx_r4.currentUser.role) :  false || item_r7.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.type == "collapsible" && (item_r7.role ? item_r7.role.includes(ctx_r4.currentUser.role) :  false || item_r7.role == undefined));
  }
}

var _c5 = function _c5(a0) {
  return {
    show: a0
  };
};

function CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CoreMenuHorizontalCollapsibleComponent_ng_container_0_a_1_Template, 2, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CoreMenuHorizontalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c5, ctx_r0.isShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}

var CoreMenuHorizontalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   */
  function CoreMenuHorizontalCollapsibleComponent(el, _router, _coreConfigService, _coreMenuService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuHorizontalCollapsibleComponent);

    this.el = el;
    this._router = _router;
    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this.isShow = false; // Conditionally add the active classes if UrlInChildren

    this.isActive = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuHorizontalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      }); // Subscribe to the current menu changes


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      }); // Listen for router events and expand


      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.isActive = true;
        } else {
          _this.isActive = false;
        }
      }); // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)


      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open
     */

  }, {
    key: "show",
    value: function show() {
      this.isShow = true;
      this.setSubMenuProp();
    }
    /**
     * Close
     */

  }, {
    key: "hide",
    value: function hide() {
      this.isShow = false;
    }
    /**
     * Set sub-menu properties based on screen size
     *
     */

  }, {
    key: "setSubMenuProp",
    value: function setSubMenuProp() {
      var _this2 = this;

      setTimeout(function () {
        var nativeElement = _this2.el.nativeElement,
            nativeElementChildren = _this2.el.nativeElement.children[1]; // If element has sub menu

        if (nativeElement.classList.contains('dropdown-submenu')) {
          var innerHeight = window.innerHeight,
              dropdownTop = nativeElementChildren.getBoundingClientRect().top,
              dropdownLeft = nativeElementChildren.getBoundingClientRect().left,
              dropdownHeight = nativeElementChildren.scrollHeight,
              dropdownWidth = nativeElementChildren.scrollWidth; //Set sub-menu height

          if (innerHeight - dropdownTop - dropdownHeight - 28 < 1) {
            var maxHeight = innerHeight - dropdownTop - 25;
            nativeElementChildren.setAttribute('style', 'overflow-y: auto; overflow-x: hidden; max-height : ' + maxHeight + 'px');
          } // Open sub-menu on left based on screen size (To avoid opn sub-menu outside of the screen)


          if (dropdownLeft + dropdownWidth - (window.innerWidth - 16) >= 0) {
            nativeElementChildren.parentElement.classList.add('openLeft');
          }
        }
      });
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */

  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Loop all the children


      var _iterator = (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          } // If child.url is same as provided url


          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }]);

  return CoreMenuHorizontalCollapsibleComponent;
}();

CoreMenuHorizontalCollapsibleComponent.ɵfac = function CoreMenuHorizontalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuHorizontalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_4__.CoreMenuService));
};

CoreMenuHorizontalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalCollapsibleComponent,
  selectors: [["", "core-menu-horizontal-collapsible", ""]],
  hostVars: 6,
  hostBindings: function CoreMenuHorizontalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function CoreMenuHorizontalCollapsibleComponent_mouseenter_HostBindingHandler() {
        return ctx.show();
      })("mouseleave", function CoreMenuHorizontalCollapsibleComponent_mouseleave_HostBindingHandler() {
        return ctx.hide();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.isActive)("open", ctx.isActive)("sidebar-group-active", ctx.isActive);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-horizontal-collapsible", "", "class", "dropdown dropdown-submenu", 3, "item", 4, "ngIf"], ["core-menu-horizontal-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-horizontal-collapsible", "", 1, "dropdown", "dropdown-submenu", 3, "item"]],
  template: function CoreMenuHorizontalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CoreMenuHorizontalCollapsibleComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective, _core_components_core_menu_horizontal_item_item_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuHorizontalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, CoreMenuHorizontalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 50769:
/*!**************************************************************************!*\
  !*** ./src/@core/components/core-menu/horizontal/item/item.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuHorizontalItemComponent": function() { return /* binding */ CoreMenuHorizontalItemComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);







var _c0 = ["core-menu-horizontal-item", ""];

function CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 9);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.item.title);
  }
}

function CoreMenuHorizontalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuHorizontalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CoreMenuHorizontalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreMenuHorizontalItemComponent_ng_container_0_ng_template_3_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}

var CoreMenuHorizontalItemComponent = function CoreMenuHorizontalItemComponent() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuHorizontalItemComponent);
};

CoreMenuHorizontalItemComponent.ɵfac = function CoreMenuHorizontalItemComponent_Factory(t) {
  return new (t || CoreMenuHorizontalItemComponent)();
};

CoreMenuHorizontalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CoreMenuHorizontalItemComponent,
  selectors: [["", "core-menu-horizontal-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "dropdown-item d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [3, "translate"], [3, "data-feather"]],
  template: function CoreMenuHorizontalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CoreMenuHorizontalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 16922:
/*!**************************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/collapsible/collapsible.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalCollapsibleComponent": function() { return /* binding */ CoreMenuVerticalCollapsibleComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 95724);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/vertical/item/item.component */ 18425);














var _c0 = ["core-menu-vertical-collapsible", ""];

function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r6.toggleOpen($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 10);
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data-feather", ctx_r8.item.icon);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r9.item.badge.translate)("ngClass", ctx_r9.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.item.badge.title, " ");
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_span_3_Template, 2, 3, "span", 9);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translate", ctx_r3.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.item.badge);
  }
}

var _c1 = function _c1(a0) {
  return {
    disabled: a0
  };
};

var _c2 = function _c2(a0) {
  return {
    exact: a0
  };
};

var _c3 = function _c3() {
  return [];
};

var _c4 = function _c4(a0) {
  return [a0];
};

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, item_r10.disabled === true))("routerLinkActive", !item_r10.openInNewTab ? "active" : "")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, item_r10.exactMatch || false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r10.openInNewTab ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c4, item_r10.url));
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 16);
  }

  if (rf & 2) {
    var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r10);
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_1_Template, 2, 12, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_li_2_Template, 1, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var item_r10 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "item" && (item_r10.role ? item_r10.role.includes(ctx_r4.currentUser.role) :  false || item_r10.role == undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r10.type == "collapsible" && (item_r10.role ? item_r10.role.includes(ctx_r4.currentUser.role) :  false || item_r10.role == undefined));
  }
}

function CoreMenuVerticalCollapsibleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CoreMenuVerticalCollapsibleComponent_ng_container_0_a_1_Template, 2, 2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_template_2_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, CoreMenuVerticalCollapsibleComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.item.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
  }
}

var CoreMenuVerticalCollapsibleComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {CoreMenuService} _coreMenuService
   * @param {ChangeDetectorRef} _changeDetectorRef
   */
  function CoreMenuVerticalCollapsibleComponent(_router, _coreMenuService, _changeDetectorRef) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoreMenuVerticalCollapsibleComponent);

    this._router = _router;
    this._coreMenuService = _coreMenuService;
    this._changeDetectorRef = _changeDetectorRef;
    this.isOpen = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CoreMenuVerticalCollapsibleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Listen for router events and expand
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (event) {
        // Confirm if the urlAfterRedirects can be found in one of the children of this item
        if (_this.confirmUrlInChildren(_this.item, event.urlAfterRedirects)) {
          _this.expand();
        } else {
          _this.collapse();
        }
      }); // Subscribe to the current menu changes


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.currentUser = _this._coreMenuService.currentUser;
      }); // Listen for collapsing of any menu item


      this._coreMenuService.onItemCollapsed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (clickedItem) {
        if (clickedItem && clickedItem.children) {
          // Check if the clicked item is one of the children of this item
          if (_this.confirmItemInChildren(_this.item, clickedItem)) {
            return;
          } // Check if the url can be found in one of the children of this item


          if (_this.confirmUrlInChildren(_this.item, _this._router.url)) {
            return;
          } // If the clicked item is not this item, collapse...


          if (_this.item !== clickedItem) {
            _this.collapse();
          }
        }
      }); // Check if the url can be found in one of the children of this item
      // Required for onInit case (i.e switching theme customizer menu layout)


      if (this.confirmUrlInChildren(this.item, this._router.url)) {
        this.expand();
      } else {
        this.collapse();
      }
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle collapse
     *
     * @param e
     */

  }, {
    key: "toggleOpen",
    value: function toggleOpen(e) {
      e.preventDefault();
      this.isOpen = !this.isOpen; // Menu collapse toggled...

      this._coreMenuService.onItemCollapsed.next(this.item);

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Expand the collapsible menu
     */

  }, {
    key: "expand",
    value: function expand() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true; // Mark for check

      this._changeDetectorRef.markForCheck();

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Collapse the collapsible menu
     */

  }, {
    key: "collapse",
    value: function collapse() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false; // Mark for check

      this._changeDetectorRef.markForCheck();

      this._coreMenuService.onItemCollapseToggled.next();
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */

  }, {
    key: "confirmUrlInChildren",
    value: function confirmUrlInChildren(parent, url) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Loop all the children


      var _iterator = (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          // If children has child (Sub to sub item url)
          if (child.children) {
            // Call function again with child
            if (this.confirmUrlInChildren(child, url)) {
              return true;
            }
          } // If child.url is same as provided url


          if (child.url === url || url.includes(child.url)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
    /**
     * Check if the provided parent has the provided item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */

  }, {
    key: "confirmItemInChildren",
    value: function confirmItemInChildren(parent, item) {
      var children = parent.children; // Return false if parent don't have any children

      if (!children) {
        return false;
      } // Return true parent has the provided item in one of its children


      if (children.indexOf(item) > -1) {
        return true;
      }

      var _iterator2 = (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (child.children) {
            // Call function again with child (for sub to sub item)
            if (this.confirmItemInChildren(child, item)) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  }]);

  return CoreMenuVerticalCollapsibleComponent;
}();

CoreMenuVerticalCollapsibleComponent.ɵfac = function CoreMenuVerticalCollapsibleComponent_Factory(t) {
  return new (t || CoreMenuVerticalCollapsibleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

CoreMenuVerticalCollapsibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalCollapsibleComponent,
  selectors: [["", "core-menu-vertical-collapsible", ""]],
  hostVars: 2,
  hostBindings: function CoreMenuVerticalCollapsibleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx.isOpen);
    }
  },
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "click", 4, "ngIf"], ["itemContent", ""], [1, "menu-content"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "ngClass", "click"], [4, "ngTemplateOutlet"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["core-menu-vertical-collapsible", "", "class", "nav-item has-sub", 3, "item", 4, "ngIf"], ["core-menu-vertical-item", "", 3, "item", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], [1, "d-none", 3, "routerLink"], ["core-menu-vertical-collapsible", "", 1, "nav-item", "has-sub", 3, "item"]],
  template: function CoreMenuVerticalCollapsibleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CoreMenuVerticalCollapsibleComponent_ng_container_0_Template, 6, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _core_components_core_menu_vertical_item_item_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuVerticalItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, CoreMenuVerticalCollapsibleComponent],
  encapsulation: 2
});

/***/ }),

/***/ 18425:
/*!************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/item/item.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalItemComponent": function() { return /* binding */ CoreMenuVerticalItemComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);







var _c0 = ["core-menu-vertical-item", ""];

function CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function CoreMenuVerticalItemComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r1.item.url))("target", ctx_r1.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.item.classes)("href", ctx_r2.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r2.item.openInNewTab ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 10);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data-feather", ctx_r7.item.icon);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", ctx_r8.item.badge.translate)("ngClass", ctx_r8.item.badge.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.item.badge.title, " ");
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_0_Template, 1, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_span_3_Template, 2, 3, "span", 9);
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", ctx_r4.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.item.badge);
  }
}

function CoreMenuVerticalItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CoreMenuVerticalItemComponent_ng_container_0_a_1_Template, 2, 6, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CoreMenuVerticalItemComponent_ng_container_0_a_2_Template, 2, 4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CoreMenuVerticalItemComponent_ng_container_0_ng_template_3_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.url && !ctx_r0.item.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.url && ctx_r0.item.externalUrl);
  }
}

var CoreMenuVerticalItemComponent = function CoreMenuVerticalItemComponent() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuVerticalItemComponent);
};

CoreMenuVerticalItemComponent.ɵfac = function CoreMenuVerticalItemComponent_Factory(t) {
  return new (t || CoreMenuVerticalItemComponent)();
};

CoreMenuVerticalItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalItemComponent,
  selectors: [["", "core-menu-vertical-item", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "routerLink", "target", 4, "ngIf"], ["class", "d-flex align-items-center", 3, "ngClass", "href", "target", 4, "ngIf"], ["itemContent", ""], [1, "d-flex", "align-items-center", 3, "ngClass", "routerLink", "target"], [4, "ngTemplateOutlet"], [1, "d-flex", "align-items-center", 3, "ngClass", "href", "target"], [3, "data-feather", 4, "ngIf"], [1, "menu-title", "text-truncate", 3, "translate"], ["class", "badge ml-auto mr-1", 3, "translate", "ngClass", 4, "ngIf"], [3, "data-feather"], [1, "badge", "ml-auto", "mr-1", 3, "translate", "ngClass"]],
  template: function CoreMenuVerticalItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CoreMenuVerticalItemComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 28428:
/*!******************************************************************************!*\
  !*** ./src/@core/components/core-menu/vertical/section/section.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuVerticalSectionComponent": function() { return /* binding */ CoreMenuVerticalSectionComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);





var _c0 = ["core-menu-vertical-section", ""];

function CoreMenuVerticalSectionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", ctx_r0.item.translate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data-feather", "more-horizontal");
  }
}

var CoreMenuVerticalSectionComponent = function CoreMenuVerticalSectionComponent() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMenuVerticalSectionComponent);
};

CoreMenuVerticalSectionComponent.ɵfac = function CoreMenuVerticalSectionComponent_Factory(t) {
  return new (t || CoreMenuVerticalSectionComponent)();
};

CoreMenuVerticalSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CoreMenuVerticalSectionComponent,
  selectors: [["", "core-menu-vertical-section", ""]],
  inputs: {
    item: "item"
  },
  attrs: _c0,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "navigation-section-text", 3, "translate"], [3, "data-feather"]],
  template: function CoreMenuVerticalSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CoreMenuVerticalSectionComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.item.hidden);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective],
  encapsulation: 2
});

/***/ }),

/***/ 29039:
/*!*********************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarComponent": function() { return /* binding */ CoreSidebarComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 46755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/media.service */ 50216);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 55224);













var _c0 = ["*"];
var CoreSidebarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {CoreMediaService} _coreMediaService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {AnimationBuilder} _animationBuilder
   * @param {MediaObserver} _mediaObserver
   */
  function CoreSidebarComponent(document, _renderer, _elementRef, _coreConfigService, _changeDetectorRef, _coreMediaService, _coreSidebarService, _animationBuilder, _mediaObserver) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarComponent);

    this.document = document;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._changeDetectorRef = _changeDetectorRef;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._animationBuilder = _animationBuilder;
    this._mediaObserver = _mediaObserver;
    this._overlay = null; // Set Defaults

    this.isOpened = false;
    this.overlayVisibility = true;
    this.hideOnEsc = false; // Layout root element

    this.rootElement = this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];
    this.collapsedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.openedChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); // Set Private Defaults

    this._collapsed = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarComponent, [{
    key: "onKeydownHandler",
    value: function onKeydownHandler(event) {
      if (this.hideOnEsc) {
        this.close();
      }
    } // Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Collapsed
     *
     * @param {boolean} value
     */

  }, {
    key: "collapsed",
    get: function get() {
      return this._collapsed;
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ,
    set: function set(value) {
      // Set the collapsed value
      this._collapsed = value; // If the sidebar is closed, return

      if (!this.isOpened) {
        this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default

        return;
      } // If Collapsed


      if (value) {
        // Collapse the sidebar
        this.collapse(); // Add menu-collapsed in body and remove menu-expanded

        this.rootElement.classList.add('menu-collapsed');
        this.rootElement.classList.remove('menu-expanded');
      } // If Expanded
      else {
        // Expanded the sidebar
        this.expand(); // Add menu-expanded in body and remove menu-collapsed

        this.rootElement.classList.add('menu-expanded');
        this.rootElement.classList.remove('menu-collapsed');
      } // Emit the 'collapsedChangedEvent' event


      this.collapsedChangedEvent.emit(this.collapsed);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to app-config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfig = config;

        if (config.layout.type == 'vertical') {
          _this.menuClass = 'vertical-menu-modern';
        } else {
          _this.menuClass = 'horizontal-menu';
        }
      }); // Register the sidebar


      this._coreSidebarService.setSidebarRegistry(this.name, this); // Setup collapsibleSidebar


      this._setupCollapsibleSidebar(); // Default collapsed


      this._defaultCollapsed();
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // If the sidebar is collapsed, expand it to reset changes
      if (this.collapsed) {
        this.expand();
      } // Remove sidebar registry


      this._coreSidebarService.removeSidebarRegistry(this.name); // Unsubscribe from all subscriptions


      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Private Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setup the collapsible sidebar handler
     *
     * @private
     */

  }, {
    key: "_setupCollapsibleSidebar",
    value: function _setupCollapsibleSidebar() {
      var _this2 = this;

      // Return if the collapsible sidebar breakpoint was not set from the layout
      if (!this.collapsibleSidebar) {
        return;
      } // Set the _wasCollapsible false for the first time


      this._wasCollapsible = false; // Set the wasCollapsed from the layout

      this._wasCollapsed = this.collapsed; // On every media(screen) change

      this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        // Get the collapsible status
        var isCollapsible = _this2._mediaObserver.isActive(_this2.collapsibleSidebar); //! On screen resize set the config collapsed state if we have else this.collapsed


        _this2._wasCollapsed = _this2._coreConfig.layout.menu.collapsed || _this2.collapsed; // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)
        // ? Improve this menu condition

        if (!isCollapsible && _this2.name === 'menu') {
          _this2.rootElement.classList.remove(_this2.menuClass);

          _this2.rootElement.classList.add('vertical-overlay-menu');
        } // If the both status are the same, then return


        if (_this2._wasCollapsible === isCollapsible) {
          return;
        } // If isCollapsible is true, use collapsible sidebar


        if (isCollapsible) {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = true; // Set the the opened status to true

          _this2.isOpened = true;
          _this2.expanded = true; // Adde expanded class init
          // Emit the 'openedChangedEvent' event

          _this2.openedChangedEvent.emit(_this2.isOpened); // If the sidebar was collapsed, forcefully collapse it again


          if (_this2._wasCollapsed) {
            // Collapse
            _this2.collapsed = true;
            _this2.expanded = false; // Remove expanded class
            // Change detector

            _this2._changeDetectorRef.markForCheck();
          } // If sidebar is collapsible, switch to collapsible menu (modern-menu)


          if (_this2.name === 'menu') {
            _this2.rootElement.classList.add(_this2.menuClass);

            _this2.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');
          } // Hide the overlay if any exists


          _this2._hideOverlay();
        } // Else use overlay sidebar
        else {
          // Set the collapsibleSidebar status
          _this2.iscollapsibleSidebar = false; // Expanded the sidebar in case if it was collapsed

          _this2.expand(); // Force the the opened status to close


          _this2.isOpened = false; // Emit the 'openedChangedEvent' event

          _this2.openedChangedEvent.emit(_this2.isOpened); // If sidebar is not collapsible, switch to overlay menu (On window resize)


          _this2.rootElement.classList.remove(_this2.menuClass);

          _this2.rootElement.classList.add('vertical-overlay-menu'); // Hide the sidebar


          _this2._hideSidebar();
        } // Set the new active status


        _this2._wasCollapsible = isCollapsible;
      });
    }
    /**
     * Setup the initial collapsed status
     *
     * @private
     */

  }, {
    key: "_defaultCollapsed",
    value: function _defaultCollapsed() {
      // Return, if sidebar is not collapsed
      if (!this.collapsed) {
        return;
      } // Return if the sidebar is closed


      if (!this.isOpened) {
        return;
      } // Collapse the sidebar


      this.collapse();
    }
    /**
     * Show the overlay
     *
     * @private
     */

  }, {
    key: "_showOverlay",
    value: function _showOverlay() {
      var _this3 = this;

      // Create the overlay element
      this._overlay = this._renderer.createElement('div'); // Add a class to the overlay element and make it visible

      this._overlay.classList.add(this.overlayClass);

      this._overlay.classList.add('show'); // If overlayVisibility is false, set the bg transparent


      if (!this.overlayVisibility) {
        this._overlay.classList.add('bg-transparent');
      } // Append the overlay element to the parent element of the sidebar


      this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay); // Overlay enter animation and attach it to the animationPlayer


      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 1
      }))]).create(this._overlay); // Play the overlay animation

      this._animationPlayer.play(); // Add an event listener to the overlay, on click of it close the sidebar


      this._overlay.addEventListener('click', function () {
        _this3.close();
      }); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Hide the overlay
     *
     * @private
     */

  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      var _this4 = this;

      // If overlay is already hidden, return
      if (!this._overlay) {
        return;
      } // Overlay leave animation and attach it to the animationPlayer


      this._animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('300ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        opacity: 0
      }))]).create(this._overlay); // Play the overlay leave animation

      this._animationPlayer.play(); // Once the animation is done...


      this._animationPlayer.onDone(function () {
        // If the overlay still exists...
        if (_this4._overlay) {
          // Remove the overlay
          _this4._overlay.parentNode.removeChild(_this4._overlay);

          _this4._overlay = null;
        }
      }); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it visible
     *
     * @private
     */

  }, {
    key: "_showSidebar",
    value: function _showSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Open overlay menu
        this.rootElement.classList.add('menu-open');
        this.rootElement.classList.remove('menu-hide');
      } // For default sidebar add show class to make it visible
      else {
        this._renderer.addClass(this._elementRef.nativeElement, 'show'); // Add .modal-open from body to remove browser scroll


        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.add('modal-open');
        }
      } // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it invisible
     *
     * @private
     */

  }, {
    key: "_hideSidebar",
    value: function _hideSidebar() {
      // If menu as sidebar, add relevant classes to body to show menu
      if (this.name == 'menu') {
        // Hide overlay menu
        this.rootElement.classList.remove('menu-open');
        this.rootElement.classList.add('menu-hide');
      } // For default sidebar remove show class to make it visible
      else {
        this._renderer.removeClass(this._elementRef.nativeElement, 'show'); // Remove .modal-open from body


        if (this.overlayClass === 'modal-backdrop') {
          this.rootElement.classList.remove('modal-open');
        }
      } // Change detector


      this._changeDetectorRef.markForCheck();
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // For Collapsible Sidebar

    /**
     * Collapse the temporarily expanded sidebar
     */

  }, {
    key: "collapseTemporarily",
    value: function collapseTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Collapse the sidebar back


      this.expanded = false;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar temporarily
     */

  }, {
    key: "expandTemporarily",
    value: function expandTemporarily() {
      // Only work if the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Expanded the sidebar temporarily


      this.expanded = true;
      this.collapsed = true; // Set the menu collapsed while collapsed temp.
      // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * On Sidebar's Mouseenter Event
     */

  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      // Expand the sidebar temporarily
      this.expandTemporarily();
    }
    /**
     * On Sidebar's Mouseleave Event
     */

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      // Collapse the sidebar temporarily
      this.collapseTemporarily();
    }
    /**
     * Collapse the sidebar permanently
     */

  }, {
    key: "collapse",
    value: function collapse() {
      // If the sidebar is not collapsed
      if (this.collapsed) {
        return;
      } // Set collapse true


      this.collapsed = true; // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar permanently
     */

  }, {
    key: "expand",
    value: function expand() {
      // If the sidebar is collapsed
      if (!this.collapsed) {
        return;
      } // Set collapse false (expanded)


      this.collapsed = false; // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle the sidebar expand/collapse permanently
     */

  }, {
    key: "toggleCollapsible",
    value: function toggleCollapsible() {
      if (this.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    } // For Overlay Sidebar

    /**
     * Open the sidebar
     */

  }, {
    key: "open",
    value: function open() {
      // If sidebar already open or collapsible, then return
      if (this.isOpened || this.iscollapsibleSidebar) {
        return;
      } // Show the sidebar


      this._showSidebar(); // Show the overlay


      this._showOverlay(); // Set the sidebar opened status


      this.isOpened = true; // Emit the 'openedChangedEvent' event

      this.openedChangedEvent.emit(this.isOpened); // Change detector

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Close the sidebar
     */

  }, {
    key: "close",
    value: function close() {
      // If sidebar is not open or collapsible, then return
      if (!this.isOpened || this.iscollapsibleSidebar) {
        return;
      } // Hide the overlay


      this._hideOverlay(); // Set the opened status


      this.isOpened = false; // Emit the 'openedChangedEvent' event

      this.openedChangedEvent.emit(this.isOpened); // Hide overlay menu

      this._hideSidebar(); // Change detector


      this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle open/close the sidebar
     */

  }, {
    key: "toggleOpen",
    value: function toggleOpen() {
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
  }]);

  return CoreSidebarComponent;
}();

CoreSidebarComponent.ɵfac = function CoreSidebarComponent_Factory(t) {
  return new (t || CoreSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_3__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_8__.AnimationBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.MediaObserver));
};

CoreSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreSidebarComponent,
  selectors: [["core-sidebar"]],
  hostVars: 2,
  hostBindings: function CoreSidebarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function CoreSidebarComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mouseenter", function CoreSidebarComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function CoreSidebarComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded", ctx.expanded);
    }
  },
  inputs: {
    name: "name",
    overlayClass: "overlayClass",
    collapsibleSidebar: "collapsibleSidebar",
    overlayVisibility: "overlayVisibility",
    hideOnEsc: "hideOnEsc",
    collapsed: "collapsed"
  },
  outputs: {
    collapsedChangedEvent: "collapsedChangedEvent",
    openedChangedEvent: "openedChangedEvent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CoreSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 13207:
/*!******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarModule": function() { return /* binding */ CoreSidebarModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 29039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



var CoreSidebarModule = function CoreSidebarModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarModule);
};

CoreSidebarModule.ɵfac = function CoreSidebarModule_Factory(t) {
  return new (t || CoreSidebarModule)();
};

CoreSidebarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CoreSidebarModule
});
CoreSidebarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreSidebarModule, {
    declarations: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarComponent],
    exports: [_core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarComponent]
  });
})();

/***/ }),

/***/ 86528:
/*!*******************************************************************!*\
  !*** ./src/@core/components/core-sidebar/core-sidebar.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreSidebarService": function() { return /* binding */ CoreSidebarService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



var CoreSidebarService = /*#__PURE__*/function () {
  function CoreSidebarService() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreSidebarService);

    // Private
    this._registry = {};
  }
  /**
   * Get the sidebar with the given key
   *
   * @param key
   * @returns {CoreSidebarComponent}
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreSidebarService, [{
    key: "getSidebarRegistry",
    value: function getSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
        return;
      } // Return the sidebar


      return this._registry[key];
    }
    /**
     * Set the sidebar to the registry
     *
     * @param key
     * @param sidebar
     */

  }, {
    key: "setSidebarRegistry",
    value: function setSidebarRegistry(key, sidebar) {
      // Check if the key already being used
      if (this._registry[key]) {
        console.error("The sidebar with the key '".concat(key, "' already exists. Either unregister it first or use a unique key."));
        return;
      } // Set to the registry


      this._registry[key] = sidebar;
    }
    /**
     * Remove the sidebar from the registry
     *
     * @param key
     */

  }, {
    key: "removeSidebarRegistry",
    value: function removeSidebarRegistry(key) {
      // Check if the sidebar registered
      if (!this._registry[key]) {
        console.warn("The sidebar with the key '".concat(key, "' doesn't exist in the registry."));
      } // Unregister the sidebar


      delete this._registry[key];
    }
  }]);

  return CoreSidebarService;
}();

CoreSidebarService.ɵfac = function CoreSidebarService_Factory(t) {
  return new (t || CoreSidebarService)();
};

CoreSidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreSidebarService,
  factory: CoreSidebarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 86533:
/*!*************************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinComponent": function() { return /* binding */ CoreTouchspinComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);









function CoreTouchspinComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 8);
  }
}

function CoreTouchspinComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
}

function CoreTouchspinComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
}

function CoreTouchspinComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 11);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "touchspin-sm": a0,
    "touchspin-lg": a1
  };
};

var _c1 = function _c1(a0, a1, a2, a3) {
  return {
    "btn-info": a0,
    "btn-warning": a1,
    "btn-success": a2,
    "btn-danger": a3
  };
};

var CoreTouchspinComponent = /*#__PURE__*/function () {
  function CoreTouchspinComponent() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTouchspinComponent);

    this.numberValue = 0;
    this.iconChevron = false;
    this.disabledValue = false;
    this.size = '';
    this.color = '';
    this.maxValue = 9999;
    this.minValue = 0;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.disabledValueIncrement = false;
    this.disabledValueDecrement = false;
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTouchspinComponent, [{
    key: "inputChange",
    value: function inputChange(inputValue) {
      if (inputValue == this.maxValue || inputValue > this.maxValue) {
        this.disabledValueIncrement = true;
      } else {
        this.disabledValueIncrement = false;
      }

      if (inputValue == this.minValue || inputValue < this.minValue) {
        this.disabledValueDecrement = true;
      } else {
        this.disabledValueDecrement = false;
      }

      this.emitChange(inputValue);
    }
  }, {
    key: "increment",
    value: function increment() {
      if (this.stepValue == undefined) {
        this.numberValue += 1;
      } else {
        this.numberValue += this.stepValue;
      }

      this.emitChange(this.numberValue);

      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.maxValue || this.numberValue > this.maxValue) {
          this.disabledValueIncrement = true;
        } else {
          this.disabledValueIncrement = false;
        }

        if (this.numberValue > this.minValue) {
          this.disabledValueDecrement = false;
        } else {
          this.disabledValueDecrement = true;
        }
      }
    }
  }, {
    key: "decrement",
    value: function decrement() {
      if (this.stepValue == undefined) {
        this.numberValue -= 1;
      } else {
        this.numberValue -= this.stepValue;
      }

      this.emitChange(this.numberValue);

      if (!(this.minValue == undefined || this.maxValue == undefined)) {
        if (this.numberValue == this.minValue || this.numberValue < this.minValue) {
          this.disabledValueDecrement = true;
        } else {
          this.disabledValueDecrement = false;
        }

        if (this.numberValue < this.maxValue) {
          this.disabledValueIncrement = false;
        } else {
          this.disabledValueIncrement = true;
        }
      }
    }
    /**
     * Emit changed value
     * @param value
     */

  }, {
    key: "emitChange",
    value: function emitChange(value) {
      this.onChange.emit(value);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.disabledValueIncrement = this.disabledValue;
      this.disabledValueDecrement = this.disabledValue; // Check if current value is equal to min / max value then disable button respectively

      if (this.numberValue === this.minValue) {
        this.disabledValueDecrement = true;
      } else if (this.numberValue === this.maxValue) {
        this.disabledValueIncrement = true;
      }
    }
  }]);

  return CoreTouchspinComponent;
}();

CoreTouchspinComponent.ɵfac = function CoreTouchspinComponent_Factory(t) {
  return new (t || CoreTouchspinComponent)();
};

CoreTouchspinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CoreTouchspinComponent,
  selectors: [["core-touchspin"]],
  inputs: {
    numberValue: "numberValue",
    iconChevron: "iconChevron",
    disabledValue: ["disable", "disabledValue"],
    size: "size",
    color: "color",
    stepValue: "stepValue",
    maxValue: "maxValue",
    minValue: "minValue"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 8,
  vars: 28,
  consts: [[1, "btn-group", "touchspin-wrapper", 3, "ngClass"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-down", 3, "disabled", "ngClass", "click"], ["data-feather", "minus", 4, "ngIf"], ["data-feather", "chevron-down", 4, "ngIf"], ["type", "number", "pattern", "\\d*", "maxlength", "4", 1, "form-control", 3, "ngModel", "value", "disabled", "step", "min", "max", "ngModelChange", "input"], [1, "btn", "btn-sm", "btn-primary", "btn-touchspin", "btn-touchspin-up", 3, "disabled", "ngClass", "click"], ["data-feather", "plus", 4, "ngIf"], ["data-feather", "chevron-up", 4, "ngIf"], ["data-feather", "minus"], ["data-feather", "chevron-down"], ["data-feather", "plus"], ["data-feather", "chevron-up"]],
  template: function CoreTouchspinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_1_listener() {
        return ctx.decrement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CoreTouchspinComponent_span_2_Template, 1, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CoreTouchspinComponent_span_3_Template, 1, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CoreTouchspinComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.numberValue = $event;
      })("input", function CoreTouchspinComponent_Template_input_input_4_listener($event) {
        return ctx.inputChange($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CoreTouchspinComponent_Template_button_click_5_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CoreTouchspinComponent_span_6_Template, 1, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CoreTouchspinComponent_span_7_Template, 1, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c0, ctx.size == "sm", ctx.size == "lg"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueDecrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](18, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.numberValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.numberValue)("disabled", ctx.disabledValue)("step", ctx.stepValue)("min", ctx.minValue)("max", ctx.maxValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabledValueIncrement)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](23, _c1, ctx.color == "info", ctx.color == "warning", ctx.color == "success", ctx.color == "danger"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.iconChevron);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.iconChevron);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_2__.FeatherIconDirective],
  styles: [".touchspin-wrapper {\n  width: 8.4rem;\n}\n.touchspin-wrapper .btn-touchspin {\n  z-index: 1;\n  padding: 0;\n  min-width: 20px;\n  height: 20px;\n  border-radius: 5px !important;\n  position: relative;\n  top: 4px;\n}\n.touchspin-wrapper .btn-touchspin span {\n  position: relative;\n  top: 1px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-down {\n  left: 10px;\n}\n.touchspin-wrapper .btn-touchspin.btn-touchspin-up {\n  right: 10px;\n}\n.touchspin-wrapper .form-control {\n  padding: 5px;\n  height: auto;\n  border-radius: 5px !important;\n  border: 0 !important;\n  background-color: #f8f8f8;\n  text-align: center;\n  font-weight: 500;\n}\n.touchspin-wrapper .form-control:focus {\n  box-shadow: none;\n}\n.touchspin-wrapper.touchspin-lg {\n  width: 9.375rem;\n}\n.touchspin-wrapper.touchspin-lg .btn-touchspin {\n  min-width: 24px;\n  height: 24px;\n  top: 5px;\n}\n.touchspin-wrapper.touchspin-lg .form-control {\n  padding: 9px;\n  height: auto;\n}\n.touchspin-wrapper.touchspin-sm {\n  width: 6.25rem;\n}\n.touchspin-wrapper.touchspin-sm .btn-touchspin {\n  min-width: 16px;\n  height: 16px;\n  top: 4px;\n}\n.touchspin-wrapper.touchspin-sm .form-control {\n  padding: 2px;\n  height: auto;\n}\n.dark-layout .touchspin-wrapper .form-control {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUtdG91Y2hzcGluLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UsYUFaMEI7QUFMNUI7QUFtQkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBYjRCO0VBYzVCLFlBYjZCO0VBYzdCLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBakJKO0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBakJOO0FBbUJJO0VBQ0UsVUFBQTtBQWpCTjtBQW1CSTtFQUNFLFdBQUE7QUFqQk47QUFxQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkN1RE07RUR0RE4sa0JBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGdCQUFBO0FBbkJOO0FBdUJFO0VBQ0UsZUFqRDJCO0FBNEIvQjtBQXVCSTtFQUNFLGVBL0M2QjtFQWdEN0IsWUEvQzhCO0VBZ0Q5QixRQUFBO0FBckJOO0FBd0JJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF0Qk47QUEwQkU7RUFDRSxjQS9EMkI7QUF1Qy9CO0FBMEJJO0VBQ0UsZUE1RDZCO0VBNkQ3QixZQTVEOEI7RUE2RDlCLFFBQUE7QUF4Qk47QUEyQkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQXpCTjtBQWtDSTtFQUNFLHlCRTNFZTtBRjRDckIiLCJmaWxlIjoiY29yZS10b3VjaHNwaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zY3NzL2Jhc2UvYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcbkBpbXBvcnQgJy4uLy4uL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyB2YXJpYWJsZSBkZWNsYXJhdGlvblxyXG4kdG91Y2hzcGluLWJnLWNvbG9yOiAkYm9keS1iZztcclxuJHRvdWNoc3Bpbi1kYXJrLWJnLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG5cclxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGg6IDguNHJlbTtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4td2lkdGgtbGc6IDkuMzc1cmVtO1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aC1zbTogNi4yNXJlbTtcclxuXHJcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aDogMjBweDtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDogMjBweDtcclxuJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLXdpZHRoLWxnOiAyNHB4O1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4taGVpZ2h0LWxnOiAyNHB4O1xyXG4kYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtc206IDE2cHg7XHJcbiRib290c3RyYXAtdG91Y2hzcGluLWJ0bi1oZWlnaHQtc206IDE2cHg7XHJcblxyXG4udG91Y2hzcGluLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi13aWR0aDtcclxuXHJcbiAgLmJ0bi10b3VjaHNwaW4ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLWJ0bi13aWR0aDtcclxuICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgICAmLmJ0bi10b3VjaHNwaW4tZG93biB7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAmLmJ0bi10b3VjaHNwaW4tdXAge1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3VjaHNwaW4tYmctY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50b3VjaHNwaW4tbGcge1xyXG4gICAgd2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLWxnO1xyXG5cclxuICAgIC5idG4tdG91Y2hzcGluIHtcclxuICAgICAgbWluLXdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtbGc7XHJcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1sZztcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50b3VjaHNwaW4tc20ge1xyXG4gICAgd2lkdGg6ICRib290c3RyYXAtdG91Y2hzcGluLXdpZHRoLXNtO1xyXG5cclxuICAgIC5idG4tdG91Y2hzcGluIHtcclxuICAgICAgbWluLXdpZHRoOiAkYm9vdHN0cmFwLXRvdWNoc3Bpbi1idG4td2lkdGgtc207XHJcbiAgICAgIGhlaWdodDogJGJvb3RzdHJhcC10b3VjaHNwaW4tYnRuLWhlaWdodC1zbTtcclxuICAgICAgdG9wOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZGFyayBsYXlvdXQgc3R5bGVcclxuXHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLnRvdWNoc3Bpbi13cmFwcGVyIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG91Y2hzcGluLWRhcmstYmctY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gb3ZlcnJpZGVzIG9mIEJvb3RzdHJhcCB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIENvbG9yIHN5c3RlbVxyXG5cclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS01MDogI2Y2ZjZmNiAhZGVmYXVsdDtcclxuJGdyYXktMTAwOiAjYmFiZmM3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVzdFxyXG4kZ3JheS0yMDA6ICNlZGVkZWQgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXJcclxuJGdyYXktMzAwOiAjZGFlMWU3ICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodFxyXG4kZ3JheS00MDA6ICM2MzYzNjMgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjYjhjMmNjICFkZWZhdWx0OyAvLyAkZ3JheVxyXG4kZ3JheS03MDA6ICM0ZTUxNTQgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzFlMWUxZSAhZGVmYXVsdDsgLy8gJGdyYXktZGFya1xyXG4kZ3JheS05MDA6ICMyYTJlMzAgIWRlZmF1bHQ7XHJcbiRibGFjazogIzIyMjkyZiAhZGVmYXVsdDsgLy8gMjMxZjQ4IDIyMjkyZlxyXG5cclxuJHB1cnBsZTogIzczNjdmMCAhZGVmYXVsdDsgLy8kcHJpbWFyeSBcclxuJE1pbmVkdWM6ICMxMzA1OTEgIWRlZmF1bHQ7Ly9udWV2byBjb2xvciBwYXJhIGxhIHBsYW50aWxsYSBNaW5lZHVjIFxyXG4kZ3JlZW46ICMyOGM3NmYgIWRlZmF1bHQ7IC8vJHN1Y2Nlc3NcclxuJGJsdWU6ICMwMGNmZTggIWRlZmF1bHQ7IC8vJGluZm9cclxuJG9yYW5nZTogI2ZmOWY0MyAhZGVmYXVsdDsgLy8kd2FybmluZ1xyXG4kcmVkOiAjZWE1NDU1ICFkZWZhdWx0OyAvLyRkYW5nZXJcclxuXHJcbiRwcmltYXJ5OiAkTWluZWR1YyAhZGVmYXVsdDsgLy8kcHJpbWFyeTogJHB1cnBsZSAhZGVmYXVsdDsgdmFsb3IgcG9yIGRlZmVjdG8gZGUgbGEgcGxhbnRpbGxhXHJcbiRzZWNvbmRhcnk6ICM4Mjg2OGIgIWRlZmF1bHQ7XHJcbiRpbmZvOiAkYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XHJcbiRsaWdodDogJGdyYXktNTAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAjNGI0YjRiICFkZWZhdWx0O1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIDI1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgICApLFxyXG4gICAgNTA6IChcclxuICAgICAgJHNwYWNlciAqIDAuNVxyXG4gICAgKSxcclxuICAgIDc1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjc1XHJcbiAgICApLFxyXG4gICAgMTogKFxyXG4gICAgICAkc3BhY2VyXHJcbiAgICApLFxyXG4gICAgMjogKFxyXG4gICAgICAkc3BhY2VyICogMS41XHJcbiAgICApLFxyXG4gICAgMzogKFxyXG4gICAgICAkc3BhY2VyICogM1xyXG4gICAgKSxcclxuICAgIDQ6IChcclxuICAgICAgJHNwYWNlciAqIDMuNVxyXG4gICAgKSxcclxuICAgIDU6IChcclxuICAgICAgJHNwYWNlciAqIDRcclxuICAgIClcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS4yNSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gc2hhZG93XHJcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcbi8vIFR5cG9ncmFwaHlcclxuXHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcclxuXHJcbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjE0ICFkZWZhdWx0O1xyXG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XHJcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICNmNmY2ZjkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XHJcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjQ4NnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybXNcclxuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1zbTogMC4xODhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogMi43MTRyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXItY29sb3IgMHMgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNFJTNDbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xyXG5cclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xyXG5cclxuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtZHJvcGRvd246IDEwICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2FyZHNcclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL0FsZXJ0c1xyXG5cclxuJGFsZXJ0LXBhZGRpbmcteTogMC43MXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtbGluay1mb250LXdlaWdodDogNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXYgdGFic1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmcteTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gbmF2YmFyXHJcblxyXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xyXG5cclxuLy8gVG9vbHRpcHNcclxuXHJcbiR0b29sdGlwLWJnOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1heC13aWR0aDogMjIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIFRvYXN0c1xyXG5cclxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXg6IDEuMTRyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xyXG5cclxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gUHJvZ3Jlc3NcclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMC44NTcgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuXHJcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjE1IDE4IDkgMTIgMTUgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcblxyXG4vLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoOiAyOHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2xvc2VcclxuXHJcbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRjbG9zZS1mb250LXdlaWdodDogNDAwICFkZWZhdWx0O1xyXG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4ka2JkLWJnOiAjZWVlICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAzcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL3N2ZyBjb2xvclxyXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xyXG5cclxuLy8gU1ZHIGljb25zXHJcbi8vIEZvciBCcmVhZGNydW1iXHJcbiRkb3VibGUtY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbnMtcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxMyAxNyAxOCAxMiAxMyA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiAxNyAxMSAxMiA2IDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4vLyBDaGV2cm9uIEljb25zXHJcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZWNrOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kd2FybmluZ0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGUnJTNFJTNDcGF0aCBkPSdNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6JyUzRSUzQy9wYXRoJTNFJTNDbGluZSB4MT0nMTInIHkxPSc5JyB4Mj0nMTInIHkyPScxMyclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTcnIHgyPScxMi4wMScgeTI9JzE3JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRjaGF0LWJnLWxpZ2h0OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl6TGpBdU1Td2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3NkkwVXhSVEJGT1R0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy1kYXJrLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gZGFyayB0aGVtZSB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy9Cb2R5XHJcbiR0aGVtZS1kYXJrLWJvZHktYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjogIzNiNDI1MyAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjNDQ0MDVlICFkZWZhdWx0O1xyXG5cclxuLy9UeXBvZ3JhcGh5XHJcbiR0aGVtZS1kYXJrLWhlYWRpbmdzLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuXHJcbi8vQ2FyZFxyXG4kdGhlbWUtZGFyay1jYXJkLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xyXG5cclxuLy9JbnB1dFxyXG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcclxuXHJcbi8vVGFibGVcclxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 14677:
/*!**********************************************************************!*\
  !*** ./src/@core/components/core-touchspin/core-touchspin.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTouchspinModule": function() { return /* binding */ CoreTouchspinModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.component */ 86533);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






var CoreTouchspinModule = function CoreTouchspinModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTouchspinModule);
};

CoreTouchspinModule.ɵfac = function CoreTouchspinModule_Factory(t) {
  return new (t || CoreTouchspinModule)();
};

CoreTouchspinModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreTouchspinModule
});
CoreTouchspinModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreTouchspinModule, {
    declarations: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_1__.CoreTouchspinComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [_core_components_core_touchspin_core_touchspin_component__WEBPACK_IMPORTED_MODULE_1__.CoreTouchspinComponent]
  });
})();

/***/ }),

/***/ 76200:
/*!***************************************!*\
  !*** ./src/@core/components/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMenuModule": function() { return /* reexport safe */ _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__.CoreMenuModule; },
/* harmony export */   "CoreSidebarModule": function() { return /* reexport safe */ _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule; },
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* reexport safe */ _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var _core_menu_core_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-menu/core-menu.module */ 87702);
/* harmony import */ var _core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-sidebar/core-sidebar.module */ 13207);
/* harmony import */ var _theme_customizer_theme_customizer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-customizer/theme-customizer.module */ 81100);
// common components




/***/ }),

/***/ 67976:
/*!*****************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerComponent": function() { return /* binding */ CoreThemeCustomizerComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);














function CoreThemeCustomizerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Semi Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CoreThemeCustomizerComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Menu Collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0(a0) {
  return {
    selected: a0
  };
};

function CoreThemeCustomizerComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Navbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.navbarColor("");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.navbarColor("bg-primary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.navbarColor("bg-secondary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.navbarColor("bg-success");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r12.navbarColor("bg-danger");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.navbarColor("bg-info");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r14.navbarColor("bg-warning");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_div_64_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r15.navbarColor("bg-dark");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, ctx_r2.navbarColorValue === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r2.navbarColorValue === "bg-primary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx_r2.navbarColorValue === "bg-secondary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, ctx_r2.navbarColorValue === "bg-success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c0, ctx_r2.navbarColorValue === "bg-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx_r2.navbarColorValue === "bg-info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx_r2.navbarColorValue === "bg-warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx_r2.navbarColorValue === "bg-dark"));
  }
}

function CoreThemeCustomizerComponent_p_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Navbar Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CoreThemeCustomizerComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Menu Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CoreThemeCustomizerComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var CoreThemeCustomizerComponent = /*#__PURE__*/function () {
  /**
   * Constructor
       * @param {FormBuilder} _formBuilder
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * */
  function CoreThemeCustomizerComponent(_formBuilder, _coreConfigService, _coreSidebarService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreThemeCustomizerComponent);

    this._formBuilder = _formBuilder;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  } //  Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreThemeCustomizerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Build theme config form
      this.form = this._formBuilder.group({
        app: this._formBuilder.group({
          appName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLogoImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          appLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        }),
        layout: this._formBuilder.group({
          skin: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          menu: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            collapsed: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          navbar: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          footer: this._formBuilder.group({
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            background: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            customBackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            backgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
          }),
          enableLocalStorage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          customizer: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          scrollTop: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
          buyNow: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        })
      }); // Subscribe to the config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        // Update config
        _this.coreConfig = config; // Set the config form values

        _this.form.setValue(config, {
          emitEvent: false
        });
      }); // Subscribe to the form layout.type value changes


      this.form.get('layout.type').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (value) {
        _this._resetFormValues(value);
      }); // Subscribe to the form value changes

      this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this._coreConfigService.config = config;
      }); // Set navbar color

      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } //  Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset form values based on the selected menu layout
     *
     * @param value
     * @private
     */

  }, {
    key: "_resetFormValues",
    value: function _resetFormValues(value) {
      switch (value) {
        case 'vertical':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }

        case 'horizontal':
          {
            this.form.patchValue({
              layout: {
                // skin: 'default',
                animation: 'fadeIn',
                menu: {
                  hidden: false,
                  collapsed: false
                },
                navbar: {
                  hidden: false,
                  type: 'floating-nav',
                  background: 'navbar-light',
                  customBackgroundColor: true,
                  backgroundColor: ''
                },
                footer: {
                  hidden: false,
                  type: 'footer-static',
                  background: 'footer-light',
                  customBackgroundColor: false,
                  backgroundColor: 'bg-primary'
                }
              }
            });
          }
      } // Set navbar color


      this.navbarColor(this.form.get('layout.navbar.backgroundColor').value);
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Patch selected navbar color value to form
     *
     * @param value
     */

  }, {
    key: "navbarColor",
    value: function navbarColor(value) {
      this.navbarColorValue = value;
      this.form.patchValue({
        layout: {
          navbar: {
            customBackgroundColor: true,
            backgroundColor: this.navbarColorValue
          }
        }
      });
    }
    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);

  return CoreThemeCustomizerComponent;
}();

CoreThemeCustomizerComponent.ɵfac = function CoreThemeCustomizerComponent_Factory(t) {
  return new (t || CoreThemeCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_3__.CoreSidebarService));
};

CoreThemeCustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CoreThemeCustomizerComponent,
  selectors: [["core-theme-customizer"]],
  decls: 101,
  vars: 8,
  consts: [[1, "customizer-content", 3, "perfectScrollbar"], [1, "customizer-header", "px-2", "pt-1", "pb-0", "position-relative"], [1, "mb-0"], [1, "m-0"], [1, "customizer-close", 3, "click"], [3, "data-feather"], [3, "formGroup"], ["formGroupName", "layout"], ["id", "customizer-styling", 1, "px-2"], ["id", "customizer-styling-skin"], [1, "font-weight-bold"], [1, "d-flex"], [1, "custom-control", "custom-radio", "mr-1"], ["type", "radio", "id", "skinlight", "formControlName", "skin", "value", "default", 1, "custom-control-input", "layout-name"], ["for", "skinlight", 1, "custom-control-label"], ["type", "radio", "id", "skinbordered", "formControlName", "skin", "value", "bordered", 1, "custom-control-input", "layout-name"], ["for", "skinbordered", 1, "custom-control-label"], ["type", "radio", "id", "skindark", "formControlName", "skin", "value", "dark", 1, "custom-control-input", "layout-name"], ["for", "skindark", 1, "custom-control-label"], ["class", "custom-control custom-radio", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], ["for", "routeSelect", 1, "font-weight-bold", "mr-auto", "m-0"], ["formControlName", "animation", "id", "routeSelect", 1, "form-control", "w-50"], ["value", "fadeInLeft"], ["value", "zoomIn"], ["value", "fadeIn"], ["value", "none"], [1, "customizer-menu", "px-2"], ["id", "customizer-menu-type"], ["type", "radio", "id", "menu-type-vertical", "value", "vertical", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-vertical", 1, "custom-control-label"], ["type", "radio", "id", "menu-type-horizontal", "value", "horizontal", "formControlName", "type", 1, "custom-control-input"], ["for", "menu-type-horizontal", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "class", "d-flex mt-2", "formGroupName", "menu", 4, "ngIf"], ["id", "customizer-menu-hidden", "formGroupName", "menu", 1, "d-flex", "mt-2"], [1, "font-weight-bold", "mr-auto", "m-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["type", "checkbox", "id", "collapse-sidebar-hidden", "formControlName", "hidden", 1, "custom-control-input"], ["for", "collapse-sidebar-hidden", 1, "custom-control-label"], ["id", "customizer-navbar", "formGroupName", "navbar", 1, "px-2"], ["id", "customizer-navbar-colors", 4, "ngIf"], ["id", "customizer-navbar-type"], ["class", "navbar-type-text font-weight-bold", 4, "ngIf", "ngIfElse"], ["navbarTypeHorizontal", ""], ["type", "radio", "id", "nav-type-floating", "value", "floating-nav", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-floating", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-sticky", "value", "fixed-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "nav-type-static", "value", "navbar-static-top", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-static", 1, "custom-control-label"], ["id", "customizer-footer", "formGroupName", "footer", 1, "px-2", "mb-2"], ["id", "customizer-footer-type"], ["type", "radio", "id", "footer-type-sticky", "value", "footer-sticky", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-sticky", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-static", "value", "footer-static", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-static", 1, "custom-control-label"], ["type", "radio", "id", "footer-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "footer-type-hidden", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "skinsemidark", "formControlName", "skin", "value", "semi-dark", 1, "custom-control-input", "layout-name"], ["for", "skinsemidark", 1, "custom-control-label"], ["id", "customizer-menu-collapsible", "formGroupName", "menu", 1, "d-flex", "mt-2"], ["type", "checkbox", "id", "collapse-sidebar-switch", "formControlName", "collapsed", 1, "custom-control-input"], ["for", "collapse-sidebar-switch", 1, "custom-control-label"], ["id", "customizer-navbar-colors"], [1, "list-inline", "unstyled-list"], [1, "color-box", "bg-white", "border", 3, "ngClass", "click"], [1, "color-box", "bg-primary", 3, "ngClass", "click"], [1, "color-box", "bg-secondary", 3, "ngClass", "click"], [1, "color-box", "bg-success", 3, "ngClass", "click"], [1, "color-box", "bg-danger", 3, "ngClass", "click"], [1, "color-box", "bg-info", 3, "ngClass", "click"], [1, "color-box", "bg-warning", 3, "ngClass", "click"], [1, "color-box", "bg-dark", 3, "ngClass", "click"], [1, "navbar-type-text", "font-weight-bold"], ["type", "radio", "id", "nav-type-hidden", "value", "d-none", "formControlName", "type", 1, "custom-control-input"], ["for", "nav-type-hidden", 1, "custom-control-label"]],
  template: function CoreThemeCustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CoreThemeCustomizerComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar("themeCustomizer");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Skin");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CoreThemeCustomizerComponent_div_28_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Route Transition");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Fade In Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Zoom In");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Fade In");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "None");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Menu Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CoreThemeCustomizerComponent_div_55_Template, 6, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Menu Hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CoreThemeCustomizerComponent_div_64_Template, 12, 24, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, CoreThemeCustomizerComponent_p_66_Template, 2, 0, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, CoreThemeCustomizerComponent_ng_template_67_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Floating");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Sticky");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, CoreThemeCustomizerComponent_div_82_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Footer Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Sticky");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Static");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Hidden");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical")("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type == "vertical");
    }
  },
  directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
  styles: [".customizer.show {\n  box-shadow: 0 15px 30px 0 rgba(34, 41, 47, 0.11), 0 5px 15px 0 rgba(34, 41, 47, 0.08);\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBQTtFQUNBLFFBQUE7QUFDRiIsImZpbGUiOiJ0aGVtZS1jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbWl6ZXIuc2hvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxNXB4IDMwcHggMCByZ2JhKDM0LCA0MSwgNDcsIDAuMTEpLCAwIDVweCAxNXB4IDAgcmdiYSgzNCwgNDEsIDQ3LCAwLjA4KTtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 81100:
/*!**************************************************************************!*\
  !*** ./src/@core/components/theme-customizer/theme-customizer.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreThemeCustomizerModule": function() { return /* binding */ CoreThemeCustomizerModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/directives */ 55448);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.module */ 13207);
/* harmony import */ var _core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/theme-customizer/theme-customizer.component */ 67976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);









var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var CoreThemeCustomizerModule = function CoreThemeCustomizerModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreThemeCustomizerModule);
};

CoreThemeCustomizerModule.ɵfac = function CoreThemeCustomizerModule_Factory(t) {
  return new (t || CoreThemeCustomizerModule)();
};

CoreThemeCustomizerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CoreThemeCustomizerModule
});
CoreThemeCustomizerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreThemeCustomizerModule, {
    declarations: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_3__.CoreThemeCustomizerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_1__.CoreDirectivesModule, _core_components_core_sidebar_core_sidebar_module__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule],
    exports: [_core_components_theme_customizer_theme_customizer_component__WEBPACK_IMPORTED_MODULE_3__.CoreThemeCustomizerComponent]
  });
})();

/***/ }),

/***/ 53822:
/*!**********************************!*\
  !*** ./src/@core/core.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




var CoreModule = /*#__PURE__*/function () {
  function CoreModule(parentModule) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreModule);

    if (parentModule) {
      throw new Error('Import CoreModule in the AppModule only');
    }
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreModule, null, [{
    key: "forRoot",
    value: function forRoot(config) {
      return {
        ngModule: CoreModule,
        providers: [{
          provide: _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CORE_CUSTOM_CONFIG,
          useValue: config
        }]
      };
    }
  }]);

  return CoreModule;
}();

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CoreModule, 12));
};

CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

/***/ }),

/***/ 9850:
/*!***********************************************************************!*\
  !*** ./src/@core/directives/core-feather-icons/core-feather-icons.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconDirective": function() { return /* binding */ FeatherIconDirective; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ 42560);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);





var FeatherIconDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function FeatherIconDirective(_elementRef, _changeDetector) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeatherIconDirective);

    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatherIconDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement; // SVG parameter

      this.name = changes.name ? changes.name.currentValue : '';
      this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14

      this.class = changes.class ? changes.class.currentValue : ''; // Create SVG

      var svg = feather_icons__WEBPACK_IMPORTED_MODULE_2__.icons[this.name].toSvg({
        class: this.class,
        width: this.size,
        height: this.size
      }); // Set SVG

      if (this.inner) {
        this._nativeElement.innerHTML = svg;
      } else {
        this._nativeElement.outerHTML = svg;
      }

      this._changeDetector.markForCheck();
    }
  }]);

  return FeatherIconDirective;
}();

FeatherIconDirective.ɵfac = function FeatherIconDirective_Factory(t) {
  return new (t || FeatherIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};

FeatherIconDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FeatherIconDirective,
  selectors: [["", "data-feather", ""]],
  inputs: {
    name: ["data-feather", "name"],
    class: "class",
    size: "size",
    inner: "inner"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

/***/ }),

/***/ 13113:
/*!*********************************************************************************!*\
  !*** ./src/@core/directives/core-ripple-effect/core-ripple-effect.directive.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RippleEffectDirective": function() { return /* binding */ RippleEffectDirective; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 24116);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




var RippleEffectDirective = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   */
  function RippleEffectDirective(_elementRef) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RippleEffectDirective);

    this._elementRef = _elementRef;
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RippleEffectDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // Get the native element
      this._nativeElement = this._elementRef.nativeElement;

      if ( // Attach ripple with light style i.e solid variant of button
      !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-outline-.*/.test(c);
      }) && !this._nativeElement.className.split(' ').some(function (c) {
        return /btn-flat-.*/.test(c);
      })) {
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement, ['waves-float', 'waves-light']);
      } else {
        // Attach ripple with transparent style i.e flat, outline variant of button
        node_waves__WEBPACK_IMPORTED_MODULE_2__.attach(this._nativeElement);
      }
    }
  }]);

  return RippleEffectDirective;
}();

RippleEffectDirective.ɵfac = function RippleEffectDirective_Factory(t) {
  return new (t || RippleEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};

RippleEffectDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: RippleEffectDirective,
  selectors: [["", "rippleEffect", ""]],
  inputs: {
    wave: "wave"
  }
});

/***/ }),

/***/ 55448:
/*!********************************************!*\
  !*** ./src/@core/directives/directives.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreDirectivesModule": function() { return /* binding */ CoreDirectivesModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 13113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




var CoreDirectivesModule = function CoreDirectivesModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreDirectivesModule);
};

CoreDirectivesModule.ɵfac = function CoreDirectivesModule_Factory(t) {
  return new (t || CoreDirectivesModule)();
};

CoreDirectivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CoreDirectivesModule
});
CoreDirectivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreDirectivesModule, {
    declarations: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective],
    exports: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective]
  });
})();

/***/ }),

/***/ 95104:
/*!****************************************!*\
  !*** ./src/@core/pipes/filter.pipe.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



var FilterPipe = /*#__PURE__*/function () {
  function FilterPipe() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterPipe);
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterPipe, [{
    key: "transform",
    value:
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @param {string} key
     *
     * @returns {any}
     */
    function transform(items, searchText, key) {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter(function (it) {
        return it[key].toLowerCase().includes(searchText);
      });
    }
  }]);

  return FilterPipe;
}();

FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};

FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: true
});

/***/ }),

/***/ 4932:
/*!******************************************!*\
  !*** ./src/@core/pipes/initials.pipe.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialsPipe": function() { return /* binding */ InitialsPipe; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



var InitialsPipe = /*#__PURE__*/function () {
  function InitialsPipe() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InitialsPipe);
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InitialsPipe, [{
    key: "transform",
    value: function transform(fullName) {
      return fullName === null || fullName === void 0 ? void 0 : fullName.split(' ').map(function (n) {
        return n[0];
      }).join('');
    }
  }]);

  return InitialsPipe;
}();

InitialsPipe.ɵfac = function InitialsPipe_Factory(t) {
  return new (t || InitialsPipe)();
};

InitialsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "initials",
  type: InitialsPipe,
  pure: true
});

/***/ }),

/***/ 80324:
/*!*****************************************!*\
  !*** ./src/@core/pipes/pipes.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorePipesModule": function() { return /* binding */ CorePipesModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 95104);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 4932);
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/pipes/safe.pipe */ 83031);
/* harmony import */ var _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/stripHtml.pipe */ 30799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);






var CorePipesModule = function CorePipesModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CorePipesModule);
};

CorePipesModule.ɵfac = function CorePipesModule_Factory(t) {
  return new (t || CorePipesModule)();
};

CorePipesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CorePipesModule
});
CorePipesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CorePipesModule, {
    declarations: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_2__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_4__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe],
    exports: [_core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_2__.InitialsPipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _core_pipes_stripHtml_pipe__WEBPACK_IMPORTED_MODULE_4__.StripHtmlPipe, _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe]
  });
})();

/***/ }),

/***/ 83031:
/*!**************************************!*\
  !*** ./src/@core/pipes/safe.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": function() { return /* binding */ SafePipe; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 86219);




/**
 * Sanitize HTML
 */

var SafePipe = /*#__PURE__*/function () {
  /**
   * Pipe Constructor
   *
   * @param _sanitizer: DomSanitezer
   */
  // tslint:disable-next-line
  function SafePipe(_sanitizer) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SafePipe);

    this._sanitizer = _sanitizer;
  }
  /**
   * Transform
   *
   * @param value: string
   * @param type: string
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SafePipe, [{
    key: "transform",
    value: function transform(value, type) {
      switch (type) {
        case 'html':
          return this._sanitizer.bypassSecurityTrustHtml(value);

        case 'style':
          return this._sanitizer.bypassSecurityTrustStyle(value);

        case 'script':
          return this._sanitizer.bypassSecurityTrustScript(value);

        case 'url':
          return this._sanitizer.bypassSecurityTrustUrl(value);

        case 'resourceUrl':
          return this._sanitizer.bypassSecurityTrustResourceUrl(value);

        default:
          return this._sanitizer.bypassSecurityTrustHtml(value);
      }
    }
  }]);

  return SafePipe;
}();

SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};

SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});

/***/ }),

/***/ 30799:
/*!*******************************************!*\
  !*** ./src/@core/pipes/stripHtml.pipe.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripHtmlPipe": function() { return /* binding */ StripHtmlPipe; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



var StripHtmlPipe = /*#__PURE__*/function () {
  function StripHtmlPipe() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StripHtmlPipe);
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StripHtmlPipe, [{
    key: "transform",
    value: function transform(value) {
      return value.replace(/<.*?>/g, ''); // replace tags
    }
  }]);

  return StripHtmlPipe;
}();

StripHtmlPipe.ɵfac = function StripHtmlPipe_Factory(t) {
  return new (t || StripHtmlPipe)();
};

StripHtmlPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "striphtml",
  type: StripHtmlPipe,
  pure: true
});

/***/ }),

/***/ 68726:
/*!**********************************************!*\
  !*** ./src/@core/services/config.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_CUSTOM_CONFIG": function() { return /* binding */ CORE_CUSTOM_CONFIG; },
/* harmony export */   "CoreConfigService": function() { return /* binding */ CoreConfigService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);








 // Injection token for the core custom settings

var CORE_CUSTOM_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('coreCustomConfig');
var CoreConfigService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _config
   * @param {Router} _router
   */
  function CoreConfigService(_router, _config) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreConfigService);

    this._router = _router;
    this._config = _config; // Get the config from local storage

    if (_config.layout.enableLocalStorage) {
      this.localConfig = JSON.parse(localStorage.getItem('config'));
    } else {
      localStorage.removeItem('config');
    } // Set the defaultConfig to localConfig if we have else appConfig (app-config.ts)


    this._defaultConfig = this.localConfig ? this.localConfig : _config; // Initialize the config service

    this._initConfig();
  } //  Accessors
  // -----------------------------------------------------------------------------------------------------
  // Set the config


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreConfigService, [{
    key: "config",
    get: // Get the config
    function get() {
      return this._configSubject.asObservable();
    }
    /**
     * Get default config
     *
     * @returns {any}
     */
    ,
    set: function set(data) {
      var config; // Set config = localConfig, If we have else defaultConfig

      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      } // Merge provided data with config, and create new merged config


      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data); // Set config to local storage if enableLocalStorage parameter is true

      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      } // Inform the observers


      this._configSubject.next(config);
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return this._defaultConfig;
    } // Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */

  }, {
    key: "_initConfig",
    value: function _initConfig() {
      var _this = this;

      // Set the config from the default config
      this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig)); // On every RoutesRecognized event
      // Check if localDefault (localStorage if we have else defaultConfig) is different form the default one

      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.ResolveEnd;
      })).subscribe(function () {
        // Get the local config from local storage
        _this.localConfig = JSON.parse(localStorage.getItem('config')); // Set localDefault to localConfig if we have else defaultConfig

        var localDefault = _this.localConfig ? _this.localConfig : _this._defaultConfig; // If localDefault is different form the provided config (page config)

        if (!lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual(_this._configSubject.getValue().layout, localDefault.layout)) {
          // Clone the current config
          var config = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(_this._configSubject.getValue()); // Reset the layout from the default config


          config.layout = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(localDefault.layout); // Set the config

          _this._configSubject.next(config);
        }
      });
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set config
     *
     * @param data
     * @param {{emitEvent: boolean}} param
     */

  }, {
    key: "setConfig",
    value: function setConfig(data) {
      var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        emitEvent: true
      };
      var config; // Set config = localConfig, If we have else defaultConfig

      this.localConfig = JSON.parse(localStorage.getItem('config'));

      if (this.localConfig) {
        config = this.localConfig;
      } else {
        config = this._configSubject.getValue();
      } // Merge provided value with config, and create new merged config


      config = lodash__WEBPACK_IMPORTED_MODULE_2__.merge({}, config, data); // Set config to local storage if enableLocalStorage parameter is true

      if (config.layout.enableLocalStorage) {
        localStorage.setItem('config', JSON.stringify(config));
      } // If emitEvent option is true...


      if (param.emitEvent === true) {
        // Inform the observers
        this._configSubject.next(config);
      }
    }
    /**
     * Get config
     *
     * @returns {Observable<any>}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      return this._configSubject.asObservable();
    }
    /**
     * Reset to the default config
     */

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this._configSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this._defaultConfig));
    }
  }]);

  return CoreConfigService;
}();

CoreConfigService.ɵfac = function CoreConfigService_Factory(t) {
  return new (t || CoreConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](CORE_CUSTOM_CONFIG));
};

CoreConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CoreConfigService,
  factory: CoreConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 24074:
/*!******************************************************!*\
  !*** ./src/@core/services/loading-screen.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreLoadingScreenService": function() { return /* binding */ CoreLoadingScreenService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 46755);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);









var CoreLoadingScreenService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param _document
   * @param {Router} _router
   * @param {AnimationBuilder} _animationBuilder
   */
  function CoreLoadingScreenService(_document, _router, _animationBuilder) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreLoadingScreenService);

    this._document = _document;
    this._router = _router;
    this._animationBuilder = _animationBuilder; // Initialize

    this._init();
  } // Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreLoadingScreenService, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      // Get the loading screen element
      this.loadingScreenEl = this._document.body.querySelector('#loading-bg'); // If loading screen element

      if (this.loadingScreenEl) {
        // Hide it on the first NavigationEnd event
        this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(function () {
          setTimeout(function () {
            _this.hide();
          });
        });
      }
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Show the loading screen
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '99999'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this2.animationPlayer.play();
      }, 0);
    }
    /**
     * Hide the loading screen
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      this.animationPlayer = this._animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '1'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: '0',
        zIndex: '-10'
      }))]).create(this.loadingScreenEl);
      setTimeout(function () {
        _this3.loadingScreenEl.remove();

        _this3.animationPlayer.play();
      }, 0);
    }
  }]);

  return CoreLoadingScreenService;
}();

CoreLoadingScreenService.ɵfac = function CoreLoadingScreenService_Factory(t) {
  return new (t || CoreLoadingScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_5__.AnimationBuilder));
};

CoreLoadingScreenService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: CoreLoadingScreenService,
  factory: CoreLoadingScreenService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 50216:
/*!*********************************************!*\
  !*** ./src/@core/services/media.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMediaService": function() { return /* binding */ CoreMediaService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 55224);






var CoreMediaService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {MediaObserver} _mediaObserver
   */
  function CoreMediaService(_mediaObserver) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreMediaService);

    this._mediaObserver = _mediaObserver;
    this.onMediaUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(''); // Set the defaults

    this.currentMediaQuery = ''; // Initialize

    this._init();
  } // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreMediaService, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._mediaObserver.media$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(function (change) {
        if (_this.currentMediaQuery !== change.mqAlias) {
          _this.currentMediaQuery = change.mqAlias;

          _this.onMediaUpdate.next(change.mqAlias);
        }
      });
    }
  }]);

  return CoreMediaService;
}();

CoreMediaService.ɵfac = function CoreMediaService_Factory(t) {
  return new (t || CoreMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver));
};

CoreMediaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: CoreMediaService,
  factory: CoreMediaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 27330:
/*!***************************************************!*\
  !*** ./src/@core/services/translation.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreTranslationService": function() { return /* binding */ CoreTranslationService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 79686);




var CoreTranslationService = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {TranslateService} _translateService
   */
  function CoreTranslationService(_translateService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoreTranslationService);

    this._translateService = _translateService;
  } // Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Translate
   *
   * @param {Locale} args
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoreTranslationService, [{
    key: "translate",
    value: function translate() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var locales = [].concat(args);
      locales.forEach(function (locale) {
        // use setTranslation() with the third argument value as true to append translations instead of replacing them
        _this._translateService.setTranslation(locale.lang, locale.data, true);
      });
    }
  }]);

  return CoreTranslationService;
}();

CoreTranslationService.ɵfac = function CoreTranslationService_Factory(t) {
  return new (t || CoreTranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
};

CoreTranslationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CoreTranslationService,
  factory: CoreTranslationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 60635:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coreConfig": function() { return /* binding */ coreConfig; }
/* harmony export */ });
/**
 * Default App Config
 *
 * ? TIP:
 *
 * Change app config based on your preferences.
 * You can also change them on each component basis. i.e `app/main/pages/authentication/auth-login-v1/auth-login-v1.component.ts`
 *
 * ! IMPORTANT: If the enableLocalStorage option is true then make sure you clear the browser local storage(https://developers.google.com/web/tools/chrome-devtools/storage/localstorage#delete).
 *  ! Otherwise, it will not take the below config changes and use stored config from local storage.
 *
 */
// prettier-ignore
var coreConfig = {
  app: {
    appName: 'Asedinfo',
    appTitle: 'Asedinfo',
    appLogoImage: 'assets/images/ico/logo_mineduc_corto_.png',
    appLanguage: 'en' // App Default Language (en, fr, de, pt etc..)

  },
  layout: {
    skin: 'default',
    type: 'vertical',
    animation: 'fadeIn',
    menu: {
      hidden: false,
      collapsed: false // Boolean: true, false

    },
    // ? For horizontal menu, navbar type will work for navMenu type
    navbar: {
      hidden: false,
      type: 'floating-nav',
      background: 'navbar-light',
      customBackgroundColor: true,
      backgroundColor: '' // BS color i.e bg-primary, bg-success

    },
    footer: {
      hidden: false,
      type: 'footer-static',
      background: 'footer-light',
      customBackgroundColor: false,
      backgroundColor: '' // BS color i.e bg-primary, bg-success

    },
    enableLocalStorage: true,
    customizer: true,
    scrollTop: true,
    buyNow: false // Boolean: true, false (Set false in real project, For demo purpose only)

  }
};

/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-waves */ 24116);
/* harmony import */ var node_waves__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_waves__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var _core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/loading-screen.service */ 24074);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/translation.service */ 27330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 32923);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 11851);


















function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "vertical-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}

function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "horizontal-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}

var AppComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {Title} _title
   * @param {Renderer2} _renderer
   * @param {ElementRef} _elementRef
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreLoadingScreenService} _coreLoadingScreenService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreTranslationService} _coreTranslationService
   * @param {TranslateService} _translateService
   */
  function AppComponent(document, _title, _renderer, _elementRef, _coreConfigService, _coreSidebarService, _coreLoadingScreenService, _coreMenuService, _coreTranslationService, _translateService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.document = document;
    this._title = _title;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._coreConfigService = _coreConfigService;
    this._coreSidebarService = _coreSidebarService;
    this._coreLoadingScreenService = _coreLoadingScreenService;
    this._coreMenuService = _coreMenuService;
    this._coreTranslationService = _coreTranslationService;
    this._translateService = _translateService; // Get the application main menu

    var menuArmar = JSON.parse(localStorage.getItem('menuJson'));

    if (menuArmar != null) {
      this.menu = this.obtenerRoles(menuArmar);
    } else {
      this.menu = null;
    } //this.menu = menu;


    this._coreMenuService.unregister('main'); // Register the menu to the menu service


    this._coreMenuService.register('main', this.menu); // Set the main menu as our current menu


    this._coreMenuService.setCurrentMenu('main'); // Add languages to the translation service


    this._translateService.addLangs(['en', 'fr', 'de', 'pt']); // This language will be used as a fallback when a translation isn't found in the current language


    this._translateService.setDefaultLang('en'); // Set the private defaults


    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "obtenerRoles",
    value: function obtenerRoles(roles) {
      var _this = this;

      var menuItem = [];
      roles.forEach(function (rol) {
        var item = {
          id: rol.codigo.toString(),
          type: 'section',
          title: rol.nombre
        };

        if (rol.menu.length > 0) {
          item.children = _this.obtenerRecursos(rol.menu);
        } else {}

        menuItem.push(item);
      });
      return menuItem;
    }
  }, {
    key: "obtenerRecursos",
    value: function obtenerRecursos(recursos) {
      var _this2 = this;

      var menuProceso = [];
      recursos.forEach(function (hijo) {
        var item = {
          id: hijo.codigo.toString(),
          type: 'collapsible',
          title: hijo.nombre,
          icon: 'file-text'
        };

        if (hijo.recursosHijos.length > 0) {
          item.children = _this2.obtenerRecursos(hijo.recursosHijos);
        } else {
          item.type = 'item';
          item.url = hijo.url;
          item.icon = 'circle';
        }

        menuProceso.push(item);
      });
      return menuProceso;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      // Init wave effect (Ripple effect)
      node_waves__WEBPACK_IMPORTED_MODULE_2__.init(); // Subscribe to config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this3.coreConfig = config; // Set application default language.
        // Change application language? Read the ngxTranslate Fix
        // ? Use app-config.ts file to set default language

        var appLanguage = _this3.coreConfig.app.appLanguage || 'en';

        _this3._translateService.use(appLanguage); // ? OR
        // ? User the current browser lang if available, if undefined use 'en'
        // const browserLang = this._translateService.getBrowserLang();
        // this._translateService.use(browserLang.match(/en|fr|de|pt/) ? browserLang : 'en');

        /**
         * ! Fix : ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         *
         * Using different language than the default ('en') one i.e French?
         * In this case, you may find the issue where application is not properly translated when your app is initialized.
         *
         * It's due to ngxTranslate module and below is a fix for that.
         * Eventually we will move to the multi language implementation over to the Angular's core language service.
         *
         **/
        // Set the default language to 'en' and then back to 'fr'.


        setTimeout(function () {
          _this3._translateService.setDefaultLang('en');

          _this3._translateService.setDefaultLang(appLanguage);
        });
        /**
         * !Fix: ngxTranslate
         * ----------------------------------------------------------------------------------------------------
         */
        // Layout
        //--------
        // Remove default classes first

        _this3._elementRef.nativeElement.classList.remove('vertical-layout', 'vertical-menu-modern', 'horizontal-layout', 'horizontal-menu'); // Add class based on config options


        if (_this3.coreConfig.layout.type === 'vertical') {
          _this3._elementRef.nativeElement.classList.add('vertical-layout', 'vertical-menu-modern');
        } else if (_this3.coreConfig.layout.type === 'horizontal') {
          _this3._elementRef.nativeElement.classList.add('horizontal-layout', 'horizontal-menu');
        } // Navbar
        //--------
        // Remove default classes first


        _this3._elementRef.nativeElement.classList.remove('navbar-floating', 'navbar-static', 'navbar-sticky', 'navbar-hidden'); // Add class based on config options


        if (_this3.coreConfig.layout.navbar.type === 'navbar-static-top') {
          _this3._elementRef.nativeElement.classList.add('navbar-static');
        } else if (_this3.coreConfig.layout.navbar.type === 'fixed-top') {
          _this3._elementRef.nativeElement.classList.add('navbar-sticky');
        } else if (_this3.coreConfig.layout.navbar.type === 'floating-nav') {
          _this3._elementRef.nativeElement.classList.add('navbar-floating');
        } else {
          _this3._elementRef.nativeElement.classList.add('navbar-hidden');
        } // Footer
        //--------
        // Remove default classes first


        _this3._elementRef.nativeElement.classList.remove('footer-fixed', 'footer-static', 'footer-hidden'); // Add class based on config options


        if (_this3.coreConfig.layout.footer.type === 'footer-sticky') {
          _this3._elementRef.nativeElement.classList.add('footer-fixed');
        } else if (_this3.coreConfig.layout.footer.type === 'footer-static') {
          _this3._elementRef.nativeElement.classList.add('footer-static');
        } else {
          _this3._elementRef.nativeElement.classList.add('footer-hidden');
        } // Blank layout


        if (_this3.coreConfig.layout.menu.hidden && _this3.coreConfig.layout.navbar.hidden && _this3.coreConfig.layout.footer.hidden) {
          _this3._elementRef.nativeElement.classList.add('blank-page'); // ! Fix: Transition issue while coming from blank page


          _this3._renderer.setAttribute(_this3._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:none');
        } else {
          _this3._elementRef.nativeElement.classList.remove('blank-page'); // ! Fix: Transition issue while coming from blank page


          setTimeout(function () {
            _this3._renderer.setAttribute(_this3._elementRef.nativeElement.getElementsByClassName('app-content')[0], 'style', 'transition:300ms ease all');
          }, 0); // If navbar hidden

          if (_this3.coreConfig.layout.navbar.hidden) {
            _this3._elementRef.nativeElement.classList.add('navbar-hidden');
          } // Menu (Vertical menu hidden)


          if (_this3.coreConfig.layout.menu.hidden) {
            _this3._renderer.setAttribute(_this3._elementRef.nativeElement, 'data-col', '1-column');
          } else {
            _this3._renderer.removeAttribute(_this3._elementRef.nativeElement, 'data-col');
          } // Footer


          if (_this3.coreConfig.layout.footer.hidden) {
            _this3._elementRef.nativeElement.classList.add('footer-hidden');
          }
        } // Skin Class (Adding to body as it requires highest priority)


        if (_this3.coreConfig.layout.skin !== '' && _this3.coreConfig.layout.skin !== undefined) {
          _this3.document.body.classList.remove('default-layout', 'bordered-layout', 'dark-layout', 'semi-dark-layout');

          _this3.document.body.classList.add(_this3.coreConfig.layout.skin + '-layout');
        }
      }); // Set the application page title


      this._title.setTitle(this.coreConfig.app.appTitle);
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_loading_screen_service__WEBPACK_IMPORTED_MODULE_5__.CoreLoadingScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_6__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__.CoreTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.type === "horizontal");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_8__.VerticalLayoutComponent, app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_9__.HorizontalLayoutComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 76200);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 62351);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@core/core.module */ 53822);
/* harmony import */ var _ctrl_ngx_rightclick__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ctrl/ngx-rightclick */ 98332);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app-config */ 60635);
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.component */ 2050);
/* harmony import */ var app_auth_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/auth/helpers */ 21902);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 79079);
/* harmony import */ var app_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/layout.module */ 46092);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ 85336);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 59013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);


























/*export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}
*/

var appRoutes = [{
  path: 'pages',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_main_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/pages/pages.module */ 89550)).then(function (m) {
      return m.PagesModule;
    });
  }
}, {
  path: '',
  redirectTo: '/pages/inicio',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found

}];
var AppModule = function AppModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppModule);
};

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: app_auth_helpers__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: app_auth_helpers__WEBPACK_IMPORTED_MODULE_7__.ErrorInterceptor,
    multi: true
  }
  /*ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    deps: [ConfigService],
    multi: true
  }*/
  ],
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot(), _ctrl_ngx_rightclick__WEBPACK_IMPORTED_MODULE_19__.ContextMenuModule, _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule.forRoot(app_app_config__WEBPACK_IMPORTED_MODULE_5__.coreConfig), _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, app_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__.LayoutModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_8__.ContentHeaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _ctrl_ngx_rightclick__WEBPACK_IMPORTED_MODULE_19__.ContextMenuModule, _core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreThemeCustomizerModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_3__.CardSnippetModule, app_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__.LayoutModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_8__.ContentHeaderModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_20__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule]
  });
})();

/***/ }),

/***/ 61409:
/*!*********************************************!*\
  !*** ./src/app/auth/helpers/auth.guards.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/service */ 33650);





var AuthGuard = /*#__PURE__*/function () {
  /**
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  function AuthGuard(_router, _authenticationService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuard);

    this._router = _router;
    this._authenticationService = _authenticationService;
  } // canActivate


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuard, [{
    key: "canActivate",
    value: function canActivate(route, state) {
      var currentUser = this._authenticationService.currentUserValue;

      if (currentUser) {
        //verificar acceso a las paginas por el menu asignado excepto la pagina de inicio
        if (state.url.localeCompare("/pages/inicio") != 0) {
          var acceso = this.permitirAcceso(state.url); // check if route is restricted by role
          //if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {

          if (acceso == false) {
            // role not authorised so redirect to not-authorized page
            this._router.navigate(['/pages/miscellaneous/not-authorized']);

            return false;
          }
        } // authorised so return true


        return true;
      } // not logged in so redirect to login page with the return url


      this._router.navigate(['/pages/authentication/login-v2'], {
        queryParams: {
          returnUrl: state.url
        }
      });

      return false;
    }
  }, {
    key: "permitirAcceso",
    value: function permitirAcceso(url) {
      var _this = this;

      var accesoConcedido = false;
      var menu = JSON.parse(localStorage.getItem('menuJson'));
      menu.forEach(function (rol) {
        var respuesta = _this.revisarMenu(rol.menu, url);

        if (respuesta === true) {
          accesoConcedido = respuesta;
        }
      });
      return accesoConcedido;
    }
  }, {
    key: "revisarMenu",
    value: function revisarMenu(recursos, urlBuscar) {
      var _this2 = this;

      var recursoEncontrado = false;
      recursos.forEach(function (recurso) {
        if (recurso.recursosHijos.length > 0) {
          var respuesta = _this2.revisarMenu(recurso.recursosHijos, urlBuscar);

          if (respuesta === true) {
            recursoEncontrado = true;
          }
        } else {
          if (recurso.url.localeCompare(urlBuscar) == 0) {
            recursoEncontrado = true;
          }
        }
      });
      return recursoEncontrado;
    }
  }]);

  return AuthGuard;
}();

AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};

AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 79069:
/*!***************************************************!*\
  !*** ./src/app/auth/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/auth/service */ 33650);







var ErrorInterceptor = /*#__PURE__*/function () {
  /**
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  function ErrorInterceptor(_router, _authenticationService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorInterceptor);

    this._router = _router;
    this._authenticationService = _authenticationService;
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      var _this = this;

      return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) {
        if ([401, 403].indexOf(err.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          _this._router.navigate(['/pages/miscellaneous/not-authorized']); // ? Can also logout and reload if needed
          // this._authenticationService.logout();
          // location.reload(true);

        } // throwError


        var error = err.error.message || err.statusText;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
      }));
    }
  }]);

  return ErrorInterceptor;
}();

ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};

ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 21902:
/*!***************************************!*\
  !*** ./src/app/auth/helpers/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* reexport safe */ _auth_guards__WEBPACK_IMPORTED_MODULE_0__.AuthGuard; },
/* harmony export */   "ErrorInterceptor": function() { return /* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor; },
/* harmony export */   "JwtInterceptor": function() { return /* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__.JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var _auth_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guards */ 61409);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 79069);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ 95052);




/***/ }),

/***/ 95052:
/*!*************************************************!*\
  !*** ./src/app/auth/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/service */ 33650);






var JwtInterceptor = /*#__PURE__*/function () {
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  function JwtInterceptor(_router, _authenticationService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JwtInterceptor);

    this._router = _router;
    this._authenticationService = _authenticationService;
  }
  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(JwtInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      var currentUser = this._authenticationService.currentUserValue;
      var isLoggedIn = currentUser && currentUser.token;
      var isApiUrl = request.url.startsWith(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url_seguridad); //const isApiUrlCatalogo = request.url.startsWith(environment.url_catalogo)//colocar aqui las url ha interceptar para enviar cabecera

      if (isLoggedIn && isApiUrl) {
        //agregar url a interceptar
        if (this.tokenExpired(currentUser.token)) {
          // token expired
          this._authenticationService.logout();

          this._router.navigate(['/pages/authentication/login-v2']);
        }

        request = request.clone({
          setHeaders: {
            Authorization: "".concat(currentUser.token)
          }
        });
      }

      return next.handle(request);
    }
  }, {
    key: "tokenExpired",
    value: function tokenExpired(token) {
      var expiry = JSON.parse(atob(token.split('.')[1])).exp;
      return Math.floor(new Date().getTime() / 1000) >= expiry;
    }
  }]);

  return JwtInterceptor;
}();

JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService));
};

JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 90261:
/*!********************************************************!*\
  !*** ./src/app/auth/service/authentication.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 59013);








var AuthenticationService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  function AuthenticationService(_http, _toastrService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthenticationService);

    this._http = _http;
    this._toastrService = _toastrService;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  } // getter: currentUserValue


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthenticationService, [{
    key: "currentUserValue",
    get: function get() {
      return this.currentUserSubject.value;
    }
    /**
     * User login
     *
     * @param usuario
     * @param password
     * @returns user
     */

  }, {
    key: "login",
    value: function login(usuario, password) {
      var _this = this;

      var usuarioLogueo = {
        identificacion: usuario,
        clave: password
      };
      return this._http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url_seguridad, "/public/loginAplicacion"), usuarioLogueo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (user) {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          _this.codigoUsuario = user.codigoUsuario;
          _this.token = user.token; // notify

          _this.currentUserSubject.next(user);
        }

        return user;
      }));
    }
  }, {
    key: "obtenerMenu",
    value: function obtenerMenu() {
      var JsonEnvio = {
        codigoUsuario: this.codigoUsuario,
        prefijoAplicacion: environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.prefijoApp
      };
      /*
      return this._http
        .post<Rol[]>(`${environment.url_seguridad}/private/obtenerRolesMenu`, JsonEnvio)
        .pipe(
          map(menu => {
            localStorage.setItem('menuJson', JSON.stringify(menu));
            return menu;
          })
        );
        */
      // Para obtener todos los aplicativo y sus recursos asignados
      // jbrito-20230821

      return this._http.post("".concat(environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.url_seguridad, "/seguridad/listarAplicacionMenu"), JsonEnvio).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (menu) {
        localStorage.setItem('menuJson', JSON.stringify(menu));
        return menu;
      }));
    }
    /**
     * User logout
     *
     */

  }, {
    key: "logout",
    value: function logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('menuJson'); // notify

      this.currentUserSubject.next(null);
    }
  }]);

  return AuthenticationService;
}();

AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
};

AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 33650:
/*!***************************************!*\
  !*** ./src/app/auth/service/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* reexport safe */ _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService; }
/* harmony export */ });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 90261);


/***/ }),

/***/ 53957:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);






function BreadcrumbComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", link_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}

function BreadcrumbComponent_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](link_r1.name);
  }
}

function BreadcrumbComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_a_1_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", link_r1.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !link_r1.isLink);
  }
}

var _c0 = function _c0(a0, a1) {
  return {
    "justify-content-center": a0,
    "justify-content-end": a1
  };
};

var _c1 = function _c1(a0, a1, a2, a3, a4, a5) {
  return {
    "breadcrumb-slash": a0,
    "breadcrumb-dots": a1,
    "breadcrumb-dashes": a2,
    "breadcrumb-pipes": a3,
    "breadcrumb-chevron": a4,
    "mr-1": a5
  };
};

var BreadcrumbComponent = /*#__PURE__*/function () {
  function BreadcrumbComponent() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BreadcrumbComponent);
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BreadcrumbComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      // concatenate default properties with passed properties
      this.breadcrumb = this.breadcrumb;
    }
  }]);

  return BreadcrumbComponent;
}();

BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};

BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  inputs: {
    breadcrumb: "breadcrumb"
  },
  decls: 3,
  vars: 13,
  consts: [[1, "breadcrumb-wrapper", "d-flex", 3, "ngClass"], [1, "breadcrumb", 3, "ngClass"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.breadcrumb.alignment == "center", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](6, _c1, ctx.breadcrumb.type == "slash", ctx.breadcrumb.type == "dots", ctx.breadcrumb.type == "dashes", ctx.breadcrumb.type == "pipes", ctx.breadcrumb.type == "chevron", ctx.breadcrumb.alignment == "right"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.breadcrumb.links);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
  encapsulation: 2
});

/***/ }),

/***/ 3586:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/content-header/breadcrumb/breadcrumb.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": function() { return /* binding */ BreadcrumbModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 53957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);






var BreadcrumbModule = function BreadcrumbModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BreadcrumbModule);
};

BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};

BreadcrumbModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([])]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
    declarations: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 4665:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderComponent": function() { return /* binding */ ContentHeaderComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.component */ 53957);






function ContentHeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-breadcrumb", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.contentHeader.headerTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx_r0.contentHeader.breadcrumb);
  }
}

var ContentHeaderComponent = /*#__PURE__*/function () {
  function ContentHeaderComponent() {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentHeaderComponent);
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentHeaderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ContentHeaderComponent;
}();

ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) {
  return new (t || ContentHeaderComponent)();
};

ContentHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ContentHeaderComponent,
  selectors: [["app-content-header"]],
  inputs: {
    contentHeader: "contentHeader"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "content-header", "row"], [1, "content-header-left", "col-md-9", "col-12", "mb-2"], [1, "row", "breadcrumbs-top"], [1, "col-12", "d-flex"], [1, "content-header-title", "float-left", "mb-0"], [3, "breadcrumb"]],
  template: function ContentHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContentHeaderComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contentHeader);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, app_layout_components_content_header_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent],
  encapsulation: 2
});

/***/ }),

/***/ 79079:
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/content-header/content-header.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentHeaderModule": function() { return /* binding */ ContentHeaderModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/breadcrumb/breadcrumb.module */ 3586);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);








var ContentHeaderModule = function ContentHeaderModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentHeaderModule);
};

ContentHeaderModule.ɵfac = function ContentHeaderModule_Factory(t) {
  return new (t || ContentHeaderModule)();
};

ContentHeaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ContentHeaderModule
});
ContentHeaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContentHeaderModule, {
    declarations: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, app_layout_components_content_header_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule],
    exports: [app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderComponent]
  });
})();

/***/ }),

/***/ 39575:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/content/content.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": function() { return /* binding */ ContentComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/animations/core.animation */ 76911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);








var ContentComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   *
   */
  function ContentComponent(_coreConfigService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentComponent);

    this._coreConfigService = _coreConfigService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  /**
   * Fade In Left Animation
   *
   * @param outlet
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentComponent, [{
    key: "fadeInLeft",
    value: function fadeInLeft(outlet) {
      if (this.animate === 'fadeInLeft') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    }
    /**
     * Zoom In Animation
     *
     * @param outlet
     */

  }, {
    key: "zoomIn",
    value: function zoomIn(outlet) {
      if (this.animate === 'zoomIn') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    }
    /**
     * Fade In Animation
     *
     * @param outlet
     */

  }, {
    key: "fadeIn",
    value: function fadeIn(outlet) {
      if (this.animate === 'fadeIn') {
        return outlet.activatedRouteData.animation;
      }

      return null;
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On Init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
        _this.animate = _this.coreConfig.layout.animation;
      });
    }
  }]);

  return ContentComponent;
}();

ContentComponent.ɵfac = function ContentComponent_Factory(t) {
  return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__.CoreConfigService));
};

ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ContentComponent,
  selectors: [["content"]],
  decls: 3,
  vars: 3,
  consts: [["outlet", "outlet"]],
  template: function ContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@zoomIn", ctx.zoomIn(_r0))("@fadeInLeft", ctx.fadeInLeft(_r0))("@fadeIn", ctx.fadeIn(_r0));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  encapsulation: 2,
  data: {
    animation: [_core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.zoomIn, _core_animations_core_animation__WEBPACK_IMPORTED_MODULE_2__.fadeIn]
  }
});

/***/ }),

/***/ 16294:
/*!*************************************************************!*\
  !*** ./src/app/layout/components/content/content.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentModule": function() { return /* binding */ ContentModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content/content.component */ 39575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);





var ContentModule = function ContentModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentModule);
};

ContentModule.ɵfac = function ContentModule_Factory(t) {
  return new (t || ContentModule)();
};

ContentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ContentModule
});
ContentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContentModule, {
    declarations: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule],
    exports: [app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent]
  });
})();

/***/ }),

/***/ 83081:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 80323);









function FooterComponent_app_scroll_top_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-scroll-top");
  }
}

var FooterComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function FooterComponent(_coreConfigService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);

    this._coreConfigService = _coreConfigService;
    this.year = new Date().getFullYear(); // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  } // Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return FooterComponent;
}();

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["footer"]],
  decls: 8,
  vars: 2,
  consts: [[1, "clearfix", "mb-0"], [1, "float-md-left", "d-block", "d-md-inline-block", "mt-25"], [1, "d-none", "d-sm-inline-block"], [1, "float-md-right", "d-block", "d-md-inline-block", "mt-25"], ["src", "assets/images/footer/GobiernoDelEncuentro.svg", 1, "rounded", "float-right", "img-fluid", 2, "width", "200px"], [4, "ngIf"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Todos los derechos reservados");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FooterComponent_app_scroll_top_7_Template, 1, 0, "app-scroll-top", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \xA9Ministerio de Educaci\xF3n ", ctx.year, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.coreConfig.layout.scrollTop);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__.ScrollTopComponent],
  encapsulation: 2
});

/***/ }),

/***/ 32004:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/footer/footer.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 83081);
/* harmony import */ var app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/footer/scroll-to-top/scroll-top.component */ 80323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);






var FooterModule = function FooterModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterModule);
};

FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};

FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, app_layout_components_footer_scroll_to_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_3__.ScrollTopComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule],
    exports: [app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent]
  });
})();

/***/ }),

/***/ 80323:
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/footer/scroll-to-top/scroll-top.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTopComponent": function() { return /* binding */ ScrollTopComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 13113);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);









var _c0 = function _c0(a0) {
  return {
    "show-scroll-to-top": a0
  };
};

var ScrollTopComponent = /*#__PURE__*/function () {
  function ScrollTopComponent(document) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollTopComponent);

    this.document = document;
    this.topOffset = 150; // Top offset to display scroll to top button
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollTopComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if (window.pageYOffset > this.topOffset || document.documentElement.scrollTop > this.topOffset || document.body.scrollTop > this.topOffset) {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 8);
        }
      })();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ScrollTopComponent;
}();

ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) {
  return new (t || ScrollTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
};

ScrollTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScrollTopComponent,
  selectors: [["app-scroll-top"]],
  hostBindings: function ScrollTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function ScrollTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 2,
  vars: 4,
  consts: [["type", "button", "rippleEffect", "", 1, "btn", "btn-primary", "btn-icon", "scroll-to-top", 3, "ngClass", "click"], [3, "data-feather"]],
  template: function ScrollTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScrollTopComponent_Template_button_click_0_listener() {
        return ctx.scrollToTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx.windowScrolled));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", "arrow-up");
    }
  },
  directives: [_core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_2__.RippleEffectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective],
  styles: [".scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 5%;\n  right: 30px;\n  z-index: 99;\n  display: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scroll-to-top[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  transition: all 0.2s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtdG8tdG9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1JTtcclxuICByaWdodDogMzBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2hvdy1zY3JvbGwtdG8tdG9wIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 23693:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 14557);









var HorizontalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   */
  function HorizontalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuComponent);

    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      }); // Get current menu


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return HorizontalMenuComponent;
}();

HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) {
  return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService));
};

HorizontalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: HorizontalMenuComponent,
  selectors: [["horizontal-menu"]],
  decls: 2,
  vars: 0,
  consts: [[1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "layout", "horizontal", "core-menu", "", 1, "nav", "navbar-nav"]],
  template: function HorizontalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
  },
  directives: [_core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_5__.CoreMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 62130:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/menu/horizontal-menu/horizontal-menu.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuModule": function() { return /* binding */ HorizontalMenuModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components */ 76200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 23693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);





var HorizontalMenuModule = function HorizontalMenuModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalMenuModule);
};

HorizontalMenuModule.ɵfac = function HorizontalMenuModule_Factory(t) {
  return new (t || HorizontalMenuModule)();
};

HorizontalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HorizontalMenuModule
});
HorizontalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_core_components__WEBPACK_IMPORTED_MODULE_1__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HorizontalMenuModule, {
    declarations: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_1__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule],
    exports: [app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent]
  });
})();

/***/ }),

/***/ 39389:
/*!**********************************************************!*\
  !*** ./src/app/layout/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 74075);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.component */ 23693);







function MenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "vertical-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function MenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "horizontal-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

var MenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {ElementRef} _elementRef
   * @param {Renderer2} _renderer
   */
  function MenuComponent(_elementRef, _renderer) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuComponent);

    this._elementRef = _elementRef;
    this._renderer = _renderer; // Set the default menu

    this._menuType = 'vertical-menu';
  } // Accessors
  // -----------------------------------------------------------------------------------------------------
  //Get the menu type


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuComponent, [{
    key: "menuType",
    get: function get() {
      return this._menuType;
    },
    set: function set(value) {
      // Remove the old class name from native element
      this._renderer.removeClass(this._elementRef.nativeElement, this.menuType); // Store the menuType value


      this._menuType = value; // Add the new class name from native element

      this._renderer.addClass(this._elementRef.nativeElement, value);
    }
  }]);

  return MenuComponent;
}();

MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
};

MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  inputs: {
    menuType: "menuType"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MenuComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "vertical-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuType === "horizontal-menu");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent, app_layout_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 54735:
/*!*******************************************************!*\
  !*** ./src/app/layout/components/menu/menu.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": function() { return /* binding */ MenuModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 39389);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.module */ 85314);
/* harmony import */ var app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/menu/horizontal-menu/horizontal-menu.module */ 62130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);






var MenuModule = function MenuModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuModule);
};

MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || MenuModule)();
};

MenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MenuModule
});
MenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_3__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent],
    imports: [_core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, app_layout_components_menu_vertical_menu_vertical_menu_module__WEBPACK_IMPORTED_MODULE_3__.VerticalMenuModule, app_layout_components_menu_horizontal_menu_horizontal_menu_module__WEBPACK_IMPORTED_MODULE_4__.HorizontalMenuModule],
    exports: [app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent]
  });
})();

/***/ }),

/***/ 74075:
/*!*********************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/core-menu/core-menu.service */ 68029);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-menu/core-menu.component */ 14557);

















var _c0 = function _c0() {
  return ["/"];
};

var _c1 = function _c1(a0) {
  return {
    "d-block": a0
  };
};

var VerticalMenuComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreMenuService} _coreMenuService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {Router} _router
   */
  function VerticalMenuComponent(_coreConfigService, _coreMenuService, _coreSidebarService, _router) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuComponent);

    this._coreConfigService = _coreConfigService;
    this._coreMenuService = _coreMenuService;
    this._coreSidebarService = _coreSidebarService;
    this._router = _router;
    this.isScrolled = false; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalMenuComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe config change
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });

      this.isCollapsed = this._coreSidebarService.getSidebarRegistry('menu').collapsed; // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)

      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        if (_this._coreSidebarService.getSidebarRegistry('menu')) {
          _this._coreSidebarService.getSidebarRegistry('menu').close();
        }
      }); // scroll to active on navigation end


      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(function () {
        setTimeout(function () {
          _this.directiveRef.scrollToElement('.navigation .active', -180, 500);
        });
      }); // Get current menu


      this._coreMenuService.onMenuChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (value) {
        return value !== null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
        _this.menu = _this._coreMenuService.getCurrentMenu();
      });
    }
    /**
     * On Destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On Sidebar scroll set isScrolled as true
     */

  }, {
    key: "onSidebarScroll",
    value: function onSidebarScroll() {
      if (this.directiveRef.position(true).y > 3) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
    /**
     * Toggle sidebar expanded status
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
    }
    /**
     * Toggle sidebar collapsed status
     */

  }, {
    key: "toggleSidebarCollapsible",
    value: function toggleSidebarCollapsible() {
      var _this2 = this;

      // Get the current menu state
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.isCollapsed = config.layout.menu.collapsed;
      });

      if (this.isCollapsed) {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: false
            }
          }
        }, {
          emitEvent: true
        });
      } else {
        this._coreConfigService.setConfig({
          layout: {
            menu: {
              collapsed: true
            }
          }
        }, {
          emitEvent: true
        });
      }
    }
  }]);

  return VerticalMenuComponent;
}();

VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) {
  return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_menu_core_menu_service__WEBPACK_IMPORTED_MODULE_3__.CoreMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

VerticalMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: VerticalMenuComponent,
  selectors: [["vertical-menu"]],
  viewQuery: function VerticalMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 18,
  vars: 6,
  consts: [[1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mr-auto"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["src", "assets/images/logo/gobiernoLogo.png", "alt", "brand-logo", 2, "width", "60px", "height", "30px"], ["src", "assets/images/logo/logo.png", 2, "width", "120px", "margin-top", "-5px", "margin-left", "17px"], [1, "nav-item", "nav-toggle"], [1, "nav-link", "modern-nav-toggle", "d-none", "d-xl-block", "pr-0", 3, "click"], [1, "toggle-icon", "feather", "font-medium-4", "collapse-toggle-icon", "text-primary", 3, "ngClass"], [1, "nav-link", "modern-nav-toggle", "d-block", "d-xl-none", "pr-0", 3, "click"], ["data-feather", "x", 1, "font-medium-4", "text-primary", "toggle-icon"], [1, "shadow-bottom", 3, "ngClass"], [1, "main-menu-content", 3, "perfectScrollbar", "scroll"], ["layout", "vertical", "core-menu", "", 1, "navigation", "navigation-main"], [1, "fixed-bottom"], ["src", "assets/images/menu/colmena-lineas.svg"]],
  template: function VerticalMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_9_listener() {
        return ctx.toggleSidebarCollapsible();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function VerticalMenuComponent_Template_a_click_11_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("scroll", function VerticalMenuComponent_Template_div_scroll_14_listener() {
        return ctx.onSidebarScroll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "ul", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.isCollapsed === true ? "icon-circle" : "icon-disc");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c1, ctx.isScrolled));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_5__.FeatherIconDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _core_components_core_menu_core_menu_component__WEBPACK_IMPORTED_MODULE_6__.CoreMenuComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 85314:
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/menu/vertical-menu/vertical-menu.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuModule": function() { return /* binding */ VerticalMenuModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components */ 76200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/menu/vertical-menu/vertical-menu.component */ 74075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);








var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var VerticalMenuModule = function VerticalMenuModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalMenuModule);
};

VerticalMenuModule.ɵfac = function VerticalMenuModule_Factory(t) {
  return new (t || VerticalMenuModule)();
};

VerticalMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: VerticalMenuModule
});
VerticalMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_core_components__WEBPACK_IMPORTED_MODULE_1__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VerticalMenuModule, {
    declarations: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_3__.VerticalMenuComponent],
    imports: [_core_components__WEBPACK_IMPORTED_MODULE_1__.CoreMenuModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [app_layout_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_3__.VerticalMenuComponent]
  });
})();

/***/ }),

/***/ 80830:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarBookmarkComponent": function() { return /* binding */ NavbarBookmarkComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 31704);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 95104);













var _c0 = ["openBookmark"];

function NavbarBookmarkComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", page_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r5.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r5.icon);
  }
}

var _c1 = function _c1(a0) {
  return {
    current_item: a0
  };
};

function NavbarBookmarkComponent_ng_container_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r9.closeBookmark();
      return ctx_r9.removeOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_container_12_li_1_Template_button_click_6_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var page_r7 = restoredCtx.$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return ctx_r11.toggleBookmark(page_r7.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var page_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r8 === ctx_r6.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r7.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r7.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_12_li_1_Template, 8, 10, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.bookmarkText, "title"), 0, 6));
  }
}

function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      $event.stopPropagation();
      $event.preventDefault();
      ctx_r16.closeBookmark();
      return ctx_r16.removeOverlay();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var page_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      $event.preventDefault();
      return ctx_r18.toggleBookmark(page_r13.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var i_r14 = ctx_r20.index;
    var page_r13 = ctx_r20.$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, i_r14 === ctx_r15.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r13.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("feather icon-", page_r13.icon, " mr-75");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-warning", page_r13.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_template_13_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_template_13_ng_container_0_li_1_Template, 8, 10, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var page_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", page_r13.isBookmarked);
  }
}

function NavbarBookmarkComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NavbarBookmarkComponent_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "filter");
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](1, 1, ctx_r4.pages, ctx_r4.bookmarkText, "title"));
  }
}

var NavbarBookmarkComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param _searchService
   */
  function NavbarBookmarkComponent(document, _searchService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarBookmarkComponent);

    this.document = document;
    this._searchService = _searchService; // Public

    this.bookmarkText = '';
    this.openBookmarkRef = false;
    this.activeIndex = 0;
    this.pages = [];
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarBookmarkComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openBookmarkRef = false;
      this.bookmarkText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      // Close Bookmark if Clicked on Overlay
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      } // Close Bookmark if clicked Outside of Container


      if (!(event.target.nodeName === 'INPUT') && this.openBookmarkRef === true) {
        this.removeOverlay();
        this.openBookmarkRef = false;
        this.bookmarkText = '';
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Add Bookmark
     *
     * @param id
     */

  }, {
    key: "addBookmark",
    value: function addBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });
      this.pages[index].isBookmarked = true;
      this.bookmarkedItems.push(this.pages[index]);
    }
    /**
     * Remove Bookmark
     *
     * @param id
     */

  }, {
    key: "removeBookmark",
    value: function removeBookmark(id) {
      var index = this.bookmarkedItems.findIndex(function (object) {
        return object.id === id;
      });
      this.bookmarkedItems[index].isBookmarked = false;
      this.bookmarkedItems.splice(index, 1);
    }
    /**
     * Open Bookmark
     */

  }, {
    key: "openBookmark",
    value: function openBookmark() {
      this.openBookmarkRef = true;

      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Close Bookmark
     */

  }, {
    key: "closeBookmark",
    value: function closeBookmark() {
      this.openBookmarkRef = false;

      this._searchService.onIsBookmarkOpenChange.next(this.openBookmarkRef);
    }
    /**
     * Remove Overlay
     */

  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Next Active Match
     */

  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.bookmarkSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */

  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */

  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }

      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }
    }
    /**
     * Toggle Bookmark
     *
     * @param id
     */

  }, {
    key: "toggleBookmark",
    value: function toggleBookmark(id) {
      var index = this.pages.findIndex(function (object) {
        return object.id === id;
      });

      if (this.pages[index].isBookmarked === true) {
        this.removeBookmark(id);
      } else {
        this.addBookmark(id);
      }
    }
    /**
     * Toggle Bookmark Popup
     */

  }, {
    key: "toggleBookmarkPopup",
    value: function toggleBookmarkPopup() {
      var _this = this;

      setTimeout(function () {
        if (_this.openBookmarkRef === false) {
          _this.openBookmark();
        } else {
          _this.closeBookmark();
        }

        setTimeout(function () {
          _this._bookmarkElement.nativeElement.focus();
        }, 0);
      }, 0);
    }
    /**
     * Update Bookmark
     *
     * @param event
     */

  }, {
    key: "bookmarkUpdate",
    value: function bookmarkUpdate(event) {
      var val = event.target.value.toLowerCase();

      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }

      this.autoSuggestion(event);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.bookmarkedItems = _this2.pages.filter(function (page) {
          return page.isBookmarked === true;
        });
        _this2.bookmarkSearchLimit = _this2.apiData[0].bookmarkLimit;
      });

      this._searchService.onIsBookmarkOpenChange.subscribe(function (res) {
        _this2.openBookmarkRef = res;
      });
    }
  }]);

  return NavbarBookmarkComponent;
}();

NavbarBookmarkComponent.ɵfac = function NavbarBookmarkComponent_Factory(t) {
  return new (t || NavbarBookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};

NavbarBookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarBookmarkComponent,
  selectors: [["app-navbar-bookmark"]],
  viewQuery: function NavbarBookmarkComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._bookmarkElement = _t.first);
    }
  },
  hostBindings: function NavbarBookmarkComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarBookmarkComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarBookmarkComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 15,
  vars: 10,
  consts: [[1, "nav", "navbar-nav", "bookmark-icons"], [4, "ngFor", "ngForOf"], [1, "nav", "navbar-nav"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "bookmark-star", 3, "click"], [3, "data-feather"], [1, "bookmark-input", "search-input"], [1, "bookmark-input-icon"], ["type", "text", "placeholder", "Bookmark", "tabindex", "0", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openBookmark", ""], [1, "search-list", "search-list-bookmark", "show", 3, "perfectScrollbar"], [4, "ngIf", "ngIfElse"], ["defaultBookmarks", ""], ["placement", "bottom", 1, "nav-link", 3, "routerLink", "ngbTooltip"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click"], [1, "d-flex", "justify-content-start", "align-items-center"], ["type", "button", 1, "btn", "p-0", 3, "click"], [1, "feather", "icon-star"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngIf"]],
  template: function NavbarBookmarkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarBookmarkComponent_ng_container_1_Template, 4, 5, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarBookmarkComponent_Template_a_click_4_listener() {
        return ctx.toggleBookmarkPopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarBookmarkComponent_Template_input_keyup_9_listener($event) {
        return ctx.bookmarkUpdate($event);
      })("ngModelChange", function NavbarBookmarkComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.bookmarkText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, NavbarBookmarkComponent_ng_container_12_Template, 4, 9, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, NavbarBookmarkComponent_ng_template_13_Template, 2, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.bookmarkedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon text-warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "star");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.openBookmarkRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.bookmarkText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bookmarkText !== "")("ngIfElse", _r3);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe, _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe],
  encapsulation: 2
});

/***/ }),

/***/ 67920:
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/navbar-notification.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarNotificationComponent": function() { return /* binding */ NavbarNotificationComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/notifications.service */ 42008);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);










function NavbarNotificationComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", message_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", message_r2.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r2.text);
  }
}

var _c0 = function _c0(a0, a1, a2) {
  return {
    "bg-light-danger": a0,
    "bg-light-success": a1,
    "bg-light-warning": a2
  };
};

function NavbarNotificationComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var systemMessage_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c0, systemMessage_r3.icon === "x", systemMessage_r3.icon === "check", systemMessage_r3.icon === "alert-triangle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data-feather", systemMessage_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", systemMessage_r3.heading, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](systemMessage_r3.text);
  }
}

var NavbarNotificationComponent = /*#__PURE__*/function () {
  /**
   *
   * @param {NotificationsService} _notificationsService
   */
  function NavbarNotificationComponent(_notificationsService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarNotificationComponent);

    this._notificationsService = _notificationsService;
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarNotificationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this._notificationsService.onApiDataChange.subscribe(function (res) {
        _this.notifications = res;
      });
    }
  }]);

  return NavbarNotificationComponent;
}();

NavbarNotificationComponent.ɵfac = function NavbarNotificationComponent_Factory(t) {
  return new (t || NavbarNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_notification_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService));
};

NavbarNotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NavbarNotificationComponent,
  selectors: [["app-navbar-notification"]],
  decls: 24,
  vars: 5,
  consts: [["ngbDropdown", "", 1, "nav-item", "dropdown-notification", "mr-25"], ["ngbDropdownToggle", "", "id", "navbarNotificationDropdown", 1, "nav-link"], ["data-feather", "bell", 1, "ficon"], [1, "badge", "badge-pill", "badge-danger", "badge-up"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarNotificationDropdown", 1, "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex"], [1, "notification-title", "mb-0", "mr-auto"], [1, "badge", "badge-pill", "badge-light-primary"], [1, "scrollable-container", "media-list", 3, "perfectScrollbar"], ["class", "d-flex", "href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [1, "media", "d-flex", "align-items-center"], [1, "font-weight-bolder", "mr-auto", "mb-0"], [1, "custom-control", "custom-control-primary", "custom-switch"], ["id", "systemNotification", "type", "checkbox", 1, "custom-control-input", 3, "checked"], ["for", "systemNotification", 1, "custom-control-label"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-block"], ["href", "javascript:void(0)", 1, "d-flex"], [1, "media", "d-flex", "align-items-start"], [1, "media-left"], [1, "avatar"], ["alt", "avatar", "width", "32", "height", "32", 3, "src"], [1, "media-body"], [1, "media-heading", 3, "innerHTML"], [1, "notification-text"], [1, "avatar", 3, "ngClass"], [1, "avatar-content"], [1, "avatar-icon", 3, "data-feather"]],
  template: function NavbarNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NavbarNotificationComponent_a_13_Template, 9, 3, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "System Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NavbarNotificationComponent_a_20_Template, 10, 8, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Read all notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx.notifications.messages == null ? null : ctx.notifications.messages.length) + (ctx.notifications.systemMessages == null ? null : ctx.notifications.systemMessages.length), " New ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.messages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.notifications.system);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notifications.systemMessages);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective],
  encapsulation: 2
});

/***/ }),

/***/ 42008:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-notification/notifications.service.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": function() { return /* binding */ NotificationsService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





var NotificationsService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function NotificationsService(_httpClient) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationsService);

    this._httpClient = _httpClient; // Public

    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.getNotificationsData();
  }
  /**
   * Get Notifications Data
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationsService, [{
    key: "getNotificationsData",
    value: function getNotificationsData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/notifications-data').subscribe(function (response) {
          _this.apiData = response;

          _this.onApiDataChange.next(_this.apiData);

          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);

  return NotificationsService;
}();

NotificationsService.ɵfac = function NotificationsService_Factory(t) {
  return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

NotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationsService,
  factory: NotificationsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 36097:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/navbar-search.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarSearchComponent": function() { return /* binding */ NavbarSearchComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/search.service */ 31704);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/filter.pipe */ 95104);












var _c0 = ["openSearch"];
var _c1 = ["pageList"];

var _c2 = function _c2(a0) {
  return {
    current_item: a0
  };
};

function NavbarSearchComponent_ng_container_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseover_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return page_r12.hover = true;
    })("mouseout", function NavbarSearchComponent_ng_container_16_li_1_Template_li_mouseout_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      return page_r12.hover = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_ng_container_16_li_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r17.toggleSearch();
    })("keyup.enter", function NavbarSearchComponent_ng_container_16_li_1_Template_a_keyup_enter_1_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      var page_r12 = restoredCtx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r18.navigate(page_r12.link);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var page_r12 = ctx.$implicit;
    var i_r13 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("current_item", page_r12.hover);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, i_r13 === ctx_r11.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", page_r12.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", page_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r12.title);
  }
}

function NavbarSearchComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_16_li_1_Template, 6, 8, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r2.pages, ctx_r2.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function NavbarSearchComponent_ng_container_24_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var file_r20 = ctx.$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, ctx_r19.i === ctx_r19.activeIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", file_r20.file, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.by);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r20.size);
  }
}

function NavbarSearchComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_24_li_1_Template, 12, 7, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r5.files, ctx_r5.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function NavbarSearchComponent_ng_container_32_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var contact_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", contact_r22.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r22.date);
  }
}

function NavbarSearchComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NavbarSearchComponent_ng_container_32_li_1_Template, 12, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 5, ctx_r8.contacts, ctx_r8.searchText, "title"), 0, 4));
  }
}

function NavbarSearchComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var NavbarSearchComponent = /*#__PURE__*/function () {
  /**
   *
   * @param document
   * @param router
   * @param _searchService
   */
  function NavbarSearchComponent(document, _elementRef, router, _searchService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarSearchComponent);

    this.document = document;
    this._elementRef = _elementRef;
    this.router = router;
    this._searchService = _searchService; // Public

    this.searchText = '';
    this.openSearchRef = false;
    this.activeIndex = 0;
    this.pages = [];
    this.files = [];
    this.contacts = [];
  }

  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarSearchComponent, [{
    key: "fn",
    value: function fn() {
      this.removeOverlay();
      this.openSearchRef = false;
      this.searchText = '';
    }
  }, {
    key: "clickout",
    value: function clickout(event) {
      if (event.target.className === 'content-overlay') {
        this.removeOverlay();
        this.openSearchRef = false;
        this.searchText = '';
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Next Active Match
     */

  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      this.activeIndex = this.activeIndex < this.pageSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */

  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Remove Overlay
     */

  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */

  }, {
    key: "autoSuggestion",
    value: function autoSuggestion(event) {
      var _a;

      if (38 === event.keyCode) {
        return this.prevActiveMatch();
      }

      if (40 === event.keyCode) {
        return this.nextActiveMatch();
      }

      if (13 === event.keyCode) {
        // Navigate to activeIndex
        // ! Todo: Improve this code
        var current_item = this._pageListElement.nativeElement.getElementsByClassName('current_item');

        (_a = current_item[0]) === null || _a === void 0 ? void 0 : _a.children[0].click();
      }
    }
    /**
     * Toggle Search
     */

  }, {
    key: "toggleSearch",
    value: function toggleSearch() {
      var _this = this;

      this._searchService.onIsBookmarkOpenChange.next(false);

      this.removeOverlay();
      this.openSearchRef = !this.openSearchRef;
      this.activeIndex = 0;
      setTimeout(function () {
        _this._inputElement.nativeElement.focus();
      });

      if (this.openSearchRef === false) {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
        this.searchText = '';
      }
    }
    /**
     * Search Update
     *
     * @param event
     */

  }, {
    key: "searchUpdate",
    value: function searchUpdate(event) {
      var val = event.target.value.toLowerCase();

      if (val !== '') {
        this.document.querySelector('.app-content').classList.add('show-overlay');
      } else {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
      }

      this.autoSuggestion(event);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._searchService.onApiDataChange.subscribe(function (res) {
        _this2.apiData = res;
        _this2.pages = _this2.apiData[0].data;
        _this2.pageSearchLimit = _this2.apiData[0].searchLimit;
        _this2.files = _this2.apiData[1].data;
        _this2.contacts = _this2.apiData[2].data;
      });
    }
  }]);

  return NavbarSearchComponent;
}();

NavbarSearchComponent.ɵfac = function NavbarSearchComponent_Factory(t) {
  return new (t || NavbarSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_layout_components_navbar_navbar_search_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService));
};

NavbarSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavbarSearchComponent,
  selectors: [["app-navbar-search"]],
  viewQuery: function NavbarSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._pageListElement = _t.first);
    }
  },
  hostBindings: function NavbarSearchComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.escape", function NavbarSearchComponent_keydown_escape_HostBindingHandler() {
        return ctx.fn();
      })("click", function NavbarSearchComponent_click_HostBindingHandler($event) {
        return ctx.clickout($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 36,
  vars: 28,
  consts: [[1, "nav-item", "nav-search"], [1, "nav-link", "nav-link-search", 3, "click"], [3, "data-feather"], [1, "search-input"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Vuexy...", "tabindex", "-1", "data-search", "search", 1, "form-control", "input", 3, "ngModel", "keyup", "ngModelChange"], ["openSearch", ""], [1, "btn", "search-input-close", "p-0", 3, "click"], [1, "search-list", "search-list-main", 3, "perfectScrollbar"], ["pageList", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0)"], [1, "section-label", "mt-75", "mb-0"], [4, "ngIf", "ngIfElse"], ["noResultsPages", ""], ["noResultsFiles", ""], ["noResultsMembers", ""], ["class", "auto-suggestion", 3, "ngClass", "current_item", "mouseover", "mouseout", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass", "mouseover", "mouseout"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink", "click", "keyup.enter"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "mr-75", 3, "data-feather"], [1, "auto-suggestion", "justify-content-between"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "py-50"], [1, "d-flex", "justify-content-start"], ["data-feather", "alert-circle", 1, "mr-25"], ["class", "auto-suggestion", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "auto-suggestion", 3, "ngClass"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex"], [1, "mr-75"], ["alt", "png", "height", "32", 3, "src"], [1, "search-data"], [1, "search-data-title", "mb-0"], [1, "text-muted"], [1, "search-data-size", "mr-50", "text-muted"], ["class", "auto-suggestion", 4, "ngFor", "ngForOf"], [1, "auto-suggestion"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center", "justify-content-between", "py-50", "w-100"], [1, "avatar", "mr-75"]],
  template: function NavbarSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_a_click_1_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function NavbarSearchComponent_Template_input_keyup_6_listener($event) {
        return ctx.searchUpdate($event);
      })("ngModelChange", function NavbarSearchComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarSearchComponent_Template_button_click_8_listener() {
        return ctx.toggleSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ul", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Pages");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, NavbarSearchComponent_ng_container_16_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, NavbarSearchComponent_ng_template_18_Template, 6, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NavbarSearchComponent_ng_container_24_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NavbarSearchComponent_ng_template_26_Template, 6, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, NavbarSearchComponent_ng_container_32_Template, 4, 9, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, NavbarSearchComponent_ng_template_34_Template, 6, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);

      var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("ficon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.openSearchRef === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data-feather", "x");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.searchText !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](17, 16, ctx.pages, ctx.searchText, "title").length)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](25, 20, ctx.files, ctx.searchText, "title").length)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 24, ctx.contacts, ctx.searchText, "title").length)("ngIfElse", _r9);
    }
  },
  directives: [_core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_3__.FeatherIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
  pipes: [_core_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__.FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
  encapsulation: 2
});

/***/ }),

/***/ 31704:
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar-search/search.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





var SearchService = /*#__PURE__*/function () {
  /**
   *
   * @param {HttpClient} _httpClient
   */
  function SearchService(_httpClient) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchService);

    this._httpClient = _httpClient; // Public

    this.search = '';
    this.apiData = [];
    this.onApiDataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.onIsBookmarkOpenChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.getSearchData();
  }
  /**
   * Get Search Data
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchService, [{
    key: "getSearchData",
    value: function getSearchData() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this._httpClient.get('api/search-data').subscribe(function (response) {
          _this.apiData = response;

          _this.onApiDataChange.next(_this.apiData);

          resolve(_this.apiData);
        }, reject);
      });
    }
  }]);

  return SearchService;
}();

SearchService.ɵfac = function SearchService_Factory(t) {
  return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

SearchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SearchService,
  factory: SearchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 30360:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 38127);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/service */ 33650);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _core_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/media.service */ 50216);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.service */ 86528);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 55224);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);


















var _c0 = function _c0() {
  return ["/"];
};

function NavbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r0.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}

function NavbarComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_ul_3_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r3.toggleSidebar("menu");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("ficon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "menu");
  }
}

function NavbarComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.currentUser.nombre, " ");
  }
}

var NavbarComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   * @param {CoreConfigService} _coreConfigService
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CoreMediaService} _coreMediaService
   * @param {MediaObserver} _mediaObserver
   * @param {TranslateService} _translateService
   */
  function NavbarComponent(_router, _authenticationService, _coreConfigService, _coreMediaService, _coreSidebarService, _mediaObserver, _translateService) {
    var _this = this;

    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this._router = _router;
    this._authenticationService = _authenticationService;
    this._coreConfigService = _coreConfigService;
    this._coreMediaService = _coreMediaService;
    this._coreSidebarService = _coreSidebarService;
    this._mediaObserver = _mediaObserver;
    this._translateService = _translateService;
    this.isFixed = false;
    this.windowScrolled = false;

    this._authenticationService.currentUser.subscribe(function (x) {
      return _this.currentUser = x;
    });

    this.languageOptions = {
      en: {
        title: 'English',
        flag: 'us'
      },
      fr: {
        title: 'French',
        flag: 'fr'
      },
      de: {
        title: 'German',
        flag: 'de'
      },
      pt: {
        title: 'Portuguese',
        flag: 'pt'
      }
    }; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Add .navbar-static-style-on-scroll on scroll using HostListener & HostBinding


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "onWindowScroll",
    value: function onWindowScroll() {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) && this.coreConfig.layout.navbar.type == 'navbar-static-top' && this.coreConfig.layout.type == 'horizontal') {
        this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
      }
    } // Public Methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(key) {
      this._coreSidebarService.getSidebarRegistry(key).toggleOpen();
    }
    /**
     * Set the language
     *
     * @param language
     */

  }, {
    key: "setLanguage",
    value: function setLanguage(language) {
      // Set the selected language for the navbar on change
      this.selectedLanguage = language; // Use the selected language id for translations

      this._translateService.use(language);

      this._coreConfigService.setConfig({
        app: {
          appLanguage: language
        }
      }, {
        emitEvent: true
      });
    }
    /**
     * Toggle Dark Skin
     */

  }, {
    key: "toggleDarkSkin",
    value: function toggleDarkSkin() {
      var _this2 = this;

      // Get the current skin
      this._coreConfigService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.currentSkin = config.layout.skin;
      }); // Toggle Dark skin with prevSkin skin


      this.prevSkin = localStorage.getItem('prevSkin');

      if (this.currentSkin === 'dark') {
        this._coreConfigService.setConfig({
          layout: {
            skin: this.prevSkin ? this.prevSkin : 'default'
          }
        }, {
          emitEvent: true
        });
      } else {
        localStorage.setItem('prevSkin', this.currentSkin);

        this._coreConfigService.setConfig({
          layout: {
            skin: 'dark'
          }
        }, {
          emitEvent: true
        });
      }
    }
    /**
     * Logout method
     */

  }, {
    key: "logout",
    value: function logout() {
      this._authenticationService.logout();

      this._router.navigate(['/pages/authentication/login-v2']);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      // get the currentUser details from localStorage
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')); // Subscribe to the config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this3.coreConfig = config;
        _this3.horizontalMenu = config.layout.type === 'horizontal';
        _this3.hiddenMenu = config.layout.menu.hidden === true;
        _this3.currentSkin = config.layout.skin; // Fix: for vertical layout if default navbar fixed-top than set isFixed = true

        if (_this3.coreConfig.layout.type === 'vertical') {
          setTimeout(function () {
            if (_this3.coreConfig.layout.navbar.type === 'fixed-top') {
              _this3.isFixed = true;
            }
          }, 0);
        }
      }); // Horizontal Layout Only: Add class fixed-top to navbar below large screen


      if (this.coreConfig.layout.type == 'horizontal') {
        // On every media(screen) change
        this._coreMediaService.onMediaUpdate.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function () {
          var isFixedTop = _this3._mediaObserver.isActive('bs-gt-xl');

          if (isFixedTop) {
            _this3.isFixed = false;
          } else {
            _this3.isFixed = true;
          }
        });
      } // Set the selected language from default languageOptions


      this.selectedLanguage = lodash__WEBPACK_IMPORTED_MODULE_2__.find(this.languageOptions, {
        id: this._translateService.currentLang
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_4__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_media_service__WEBPACK_IMPORTED_MODULE_5__.CoreMediaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_components_core_sidebar_core_sidebar_service__WEBPACK_IMPORTED_MODULE_6__.CoreSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService));
};

NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  hostVars: 4,
  hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fixed-top", ctx.isFixed)("navbar-static-style-on-scroll", ctx.windowScrolled);
    }
  },
  decls: 15,
  vars: 7,
  consts: [["class", "navbar-header d-xl-block d-none", 4, "ngIf"], [1, "navbar-container", "d-flex", "content"], [1, "bookmark-wrapper", "d-flex", "align-items-center"], ["class", "nav navbar-nav d-xl-none", 4, "ngIf"], [1, "nav", "navbar-nav", "align-items-center", "ml-auto"], [1, "nav-item", "d-none", "d-lg-block"], [1, "nav-link", "nav-link-style", "btn", 3, "click"], [1, "ficon", "font-medium-5", "feather", 3, "ngClass"], ["ngbDropdown", "", 1, "nav-item", "dropdown-user"], ["id", "dropdown-user", "ngbDropdownToggle", "", "id", "navbarUserDropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "dropdown-user-link"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarUserDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdownItem", "", 3, "click"], [3, "data-feather"], [1, "navbar-header", "d-xl-block", "d-none"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", "width", "36", 3, "src"], ["src", "assets/images/logo/logo.png", 2, "width", "120px", "margin-top", "-5px", "margin-left", "17px"], [1, "nav", "navbar-nav", "d-xl-none"], [1, "nav-link", "menu-toggle", 3, "click"], [1, "user-nav", "d-sm-flex", "d-none"], [1, "user-name", "font-weight-bolder"], [1, "avatar"], ["src", "assets/images/portrait/small/user_info.png", "alt", "avatar", "height", "40", "width", "40", 1, "round"], [1, "avatar-status-online"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 8, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, NavbarComponent_ul_3_Template, 4, 3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_6_listener() {
        return ctx.toggleDarkSkin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, NavbarComponent_ng_container_10_Template, 7, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.horizontalMenu);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.menu.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.currentSkin === "dark" ? "icon-sun" : "icon-moon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"]("mr-50");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data-feather", "power");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownItem, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_7__.FeatherIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref],
  styles: [".dropdown-menu-right {\n  right: 0 !important;\n  left: auto !important;\n}\n\n.touchspin-cart .touchspin-wrapper {\n  width: 6.4rem;\n}\n\n.touchspin-cart:focus-within {\n  box-shadow: none !important;\n}\n\napp-navbar-bookmark {\n  display: flex;\n}\n\n.navbar-static-style-on-scroll {\n  background-color: #fff !important;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 0px !important;\n}\n\n.dark-layout .navbar-container .search-input .search-list li.auto-suggestion:hover {\n  background-color: #161d31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBUUU7RUFDRSxhQUFBO0FBTEo7O0FBT0U7RUFDRSwyQkFBQTtBQUxKOztBQVNBO0VBQ0UsYUFBQTtBQU5GOztBQVVBO0VBQ0UsaUNBQUE7RUFDQSwyREFBQTtBQVBGOztBQWlCWTtFQUNFLHlCQ3BCTztBRE1yQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdAY29yZS9zY3NzL2Jhc2UvYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcclxuXHJcbi8vIFRvIG9wZW4gZGQgb24gcmlnaHRcclxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xyXG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBDYXJ0IFRvdWNoc3BpblxyXG4udG91Y2hzcGluLWNhcnQge1xyXG4gIC50b3VjaHNwaW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNi40cmVtO1xyXG4gIH1cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtbmF2YmFyLWJvb2ttYXJrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vLyBBcHBseSBzdHlsZSBvbiB3aW5kb3cgc2Nyb2xsIGZvciBuYXZiYXIgc3RhdGljIHR5cGVcclxuLm5hdmJhci1zdGF0aWMtc3R5bGUtb24tc2Nyb2xsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIERhcmsgTGF5b3V0XHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgIC5zZWFyY2gtbGlzdCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgJi5hdXRvLXN1Z2dlc3Rpb24ge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1ib2R5LWJnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLWRhcmsuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vL0JvZHlcclxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9keS1jb2xvcjogI2I0YjdiZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yOiAjM2I0MjUzICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XHJcblxyXG4vL1R5cG9ncmFwaHlcclxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWxhYmVsLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10ZXh0LW11dGVkLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xyXG5cclxuLy9DYXJkXHJcbiR0aGVtZS1kYXJrLWNhcmQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XHJcblxyXG4vL0lucHV0XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0NjU2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjNDQ0YjYwICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZzogIzU0NWE2YTtcclxuJHRoZW1lLWRhcmstc3dpdGNoLWJnLWRpc2FibGVkOiAjMWIyMzM3O1xyXG5cclxuLy9UYWJsZVxyXG4kdGhlbWUtZGFyay10YWJsZS1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1yb3ctYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhvdmVyLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWRhcmstbW9kYWwtaGVhZGVyLWJnOiAjMTYxZDMxICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jaGFydC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstd2lkZ2V0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 72625:
/*!***********************************************************!*\
  !*** ./src/app/layout/components/navbar/navbar.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 30914);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 80105);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/core-touchspin/core-touchspin.module */ 14677);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 30360);
/* harmony import */ var app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar-bookmark/navbar-bookmark.component */ 80830);
/* harmony import */ var app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/navbar/navbar-search/navbar-search.component */ 36097);
/* harmony import */ var app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/navbar/navbar-notification/navbar-notification.component */ 67920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);











var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true,
  wheelPropagation: false
};
var NavbarModule = function NavbarModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarModule);
};

NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || NavbarModule)();
};

NavbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: NavbarModule
});
NavbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, app_layout_components_navbar_navbar_search_navbar_search_component__WEBPACK_IMPORTED_MODULE_5__.NavbarSearchComponent, app_layout_components_navbar_navbar_bookmark_navbar_bookmark_component__WEBPACK_IMPORTED_MODULE_4__.NavbarBookmarkComponent, app_layout_components_navbar_navbar_notification_navbar_notification_component__WEBPACK_IMPORTED_MODULE_6__.NavbarNotificationComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _core_components_core_touchspin_core_touchspin_module__WEBPACK_IMPORTED_MODULE_2__.CoreTouchspinModule],
    exports: [app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent]
  });
})();

/***/ }),

/***/ 76840:
/*!**********************************************!*\
  !*** ./src/app/layout/custom-breakpoints.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomBreakPointsProvider": function() { return /* binding */ CustomBreakPointsProvider; }
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ 55224);

var BS_BREAKPOINTS = [{
  alias: 'bs-xs',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsXs'
}, {
  alias: 'bs-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px) and (max-width: 767.98px)',
  suffix: 'BsSm'
}, {
  alias: 'bs-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px) and (max-width: 991.98px)',
  suffix: 'BsMd'
}, {
  alias: 'bs-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px) and (max-width: 1199.98px)',
  suffix: 'BsLg'
}, {
  alias: 'bs-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsXl'
}, {
  alias: 'bs-gt-sm',
  overlapping: false,
  mediaQuery: '(min-width: 576px)',
  suffix: 'BsGtSm'
}, {
  alias: 'bs-gt-md',
  overlapping: false,
  mediaQuery: '(min-width: 768px)',
  suffix: 'BsGtMd'
}, {
  alias: 'bs-gt-lg',
  overlapping: false,
  mediaQuery: '(min-width: 992px)',
  suffix: 'BsGtLg'
}, {
  alias: 'bs-gt-xl',
  overlapping: false,
  mediaQuery: '(min-width: 1200px)',
  suffix: 'BsGtXl'
}, {
  alias: 'bs-lt-sm',
  overlapping: false,
  mediaQuery: '(max-width: 575.98px)',
  suffix: 'BsLtSm'
}, {
  alias: 'bs-lt-md',
  overlapping: false,
  mediaQuery: '(max-width: 767.98px)',
  suffix: 'BsLtMd'
}, {
  alias: 'bs-lt-lg',
  overlapping: false,
  mediaQuery: '(max-width: 991.98px)',
  suffix: 'BsLtLg'
}, {
  alias: 'bs-lt-xl',
  overlapping: false,
  mediaQuery: '(max-width: 1199.98px)',
  suffix: 'BsLtXl'
}];
var CustomBreakPointsProvider = {
  provide: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT,
  useValue: BS_BREAKPOINTS,
  multi: true
};

/***/ }),

/***/ 11851:
/*!******************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutComponent": function() { return /* binding */ HorizontalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 39575);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 30360);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 39389);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 29039);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 83081);














function HorizontalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}

function HorizontalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background);
  }
}

function HorizontalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 1, "app-navbar", 8);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}

var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};

function HorizontalLayoutComponent_ng_template_9_app_menu_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-menu", 13);
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r11.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type + " " + ctx_r11.coreConfig.layout.navbar.backgroundColor : ctx_r11.coreConfig.layout.navbar.background + " " + ctx_r11.coreConfig.layout.navbar.type, ctx_r11.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

function HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r12.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r12.coreConfig.layout.menu.collapsed === true ? "" : "expanded"));
  }
}

function HorizontalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_template_9_app_menu_1_Template, 1, 4, "app-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HorizontalLayoutComponent_ng_template_9_core_sidebar_2_Template, 2, 4, "core-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}

function HorizontalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 17);
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r13.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type + " " + ctx_r13.coreConfig.layout.footer.backgroundColor : ctx_r13.coreConfig.layout.footer.background + " " + ctx_r13.coreConfig.layout.footer.type);
  }
}

function HorizontalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 16);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}

var HorizontalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function HorizontalLayoutComponent(_coreConfigService) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalLayoutComponent);

    this._coreConfigService = _coreConfigService; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HorizontalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return HorizontalLayoutComponent;
}();

HorizontalLayoutComponent.ɵfac = function HorizontalLayoutComponent_Factory(t) {
  return new (t || HorizontalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};

HorizontalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HorizontalLayoutComponent,
  selectors: [["horizontal-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar horizontal-header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "horizontal-header-navbar", "navbar-expand-lg", "navbar", "navbar-fixed", "align-items-center", "navbar-shadow", "navbar-brand-center", 3, "ngClass"], [1, "horizontal-menu-wrapper"], ["menuType", "horizontal-menu", "class", "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-shadow menu-border d-none d-xl-block", 3, "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-light menu-accordio menu-shadow d-xl-none", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["menuType", "horizontal-menu", 1, "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-shadow", "menu-border", "d-none", "d-xl-block", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-light", "menu-accordio", "menu-shadow", "d-xl-none", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function HorizontalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, HorizontalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HorizontalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HorizontalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, HorizontalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, HorizontalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, HorizontalLayoutComponent_ng_template_9_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, HorizontalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.CoreSidebarComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.horizontal-menu .content {\n  margin-left: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n.horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  background: #fff;\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n.horizontal-menu .header-navbar.navbar-light {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  left: 0;\n  top: 62px;\n  width: calc(100vw - (100vw - 100%) - (2rem * 2));\n  background: #fff;\n}\n.horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  left: calc(50% - 56px);\n  padding: 0;\n  z-index: 1000;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: flex;\n  align-items: center;\n  margin-right: 0;\n  font-size: inherit;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 36px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #130591;\n  padding-left: 1rem;\n  margin-bottom: 0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  border: none;\n  margin-top: 0;\n  min-height: 52px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  right: 1rem;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n  display: flex;\n  align-items: center;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n  left: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n  color: #6e6b7b;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transform: translateX(5px);\n  transition: transform 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n  color: #130591;\n  font-weight: 500;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n  display: flex;\n  margin-right: 0.715rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #130591, rgba(19, 5, 145, 0.7));\n  box-shadow: 0px 0px 6px 1px rgba(19, 5, 145, 0.6);\n  color: #fff;\n  border-radius: 4px;\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  padding: 8px 20px;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #130591;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n  .horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n  }\n}\n.horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n  top: 62px;\n  background-color: #fff;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - (4.45rem + calc(3.35rem + 0.2rem)));\n}\n.horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n  width: 100%;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)));\n  }\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem));\n  }\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc(100vh - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(1vh * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n  height: calc(var(--vh, 1vh) * 100 - (\n        calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem\n      ));\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc(100vh - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(1vh * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n    height: calc(var(--vh, 1vh) * 100 - (calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem));\n  }\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n  .horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n  }\n  .horizontal-layout .header-navbar {\n    background: #fff;\n  }\n  .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n@media (max-width: 575.98px) {\n  html body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n.horizontal-layout .horizontal-header-navbar .navbar-container ul.navbar-nav li.dropdown .dropdown-menu {\n  top: 41px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtZW51XFxtZW51LXR5cGVzXFxob3Jpem9udGFsLW1lbnUuc2NzcyIsImhvcml6b250YWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxib290c3RyYXAtZXh0ZW5kZWRcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtaXhpbnNcXG1haW4tbWVudS1taXhpbi5zY3NzIiwiLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1lbnVcXG1lbnUtdHlwZXNcXHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUFDRSxjQUFBO0FDVko7QURZTTtFQUNFLHVCQUFBO0FDVlI7QURpQkk7RUFDRSxvQkFBQTtBQ2ZOO0FEb0JJO0VBQ0UsbUJFUm1CO0FEVnpCO0FEc0JFO0VBQ0UsZ0JBQUE7QUNwQko7QUQwQkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeEJKO0FEMkJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUN6QlI7QUQyQk07RUFDRSxhQUFBO0FDekJSO0FENkJFO0VBQ0UsZ0JHeERJO0VIeURKLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDM0JKO0FENEJJO0VBQ0UsZ0JHN0RFO0FGbUNSO0FEOEJJO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxnREFBQTtFQUNBLGdCR3JFRTtBRnlDUjtBRDhCSTtFQUNFLHVCRzZDVTtBRnpFaEI7QUQ4Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzVCTjtBRCtCTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQzdCUjtBRDhCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVCVjtBRDZCVTtFQUNFLGVBQUE7QUMzQlo7QUQrQlU7RUFDRSxjR2pGRjtFSGtGRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDN0JaO0FEc0NVO0VBQ0UsWUFBQTtFQUNBLCtTQUFBO0FDcENaO0FEMENVO0VBQ0UsNFNBQUE7QUN4Q1o7QUQ0Q007RUFDRSxhQUFBO0FDMUNSO0FENENNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDMUNSO0FEMkNRO0VBQ0UsK0JBQUE7QUN6Q1Y7QUQwQ1U7RUFDRSxjRzlIRDtBRnNGWDtBRDJDUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxnVEFBQTtBQzFDVjtBRDRDUTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDMUNWO0FENENRO0VBQ0Usa0JBQUE7QUMxQ1Y7QUQ2Q1k7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDM0NkO0FEK0NVO0VBQ0UsbUJHeEVGO0FGMkJWO0FEZ0RVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDOUNaO0FEK0NZOztFQUVFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQzdDZDtBRGtETTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNoRFI7QURvRFk7RUFDRSx5QkFBQTtBQ2xEZDtBRG9EWTtFQUNFLDZCQUFBO0VBQ0EsY0dsR0Q7QUZnRGI7QURtRGM7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FDakRoQjtBRHFEVTtFQUNFLG1CRzNHRjtFSDRHRSxjR3pMRjtFSDBMRSxnQkFBQTtBQ25EWjtBRHVEYztFQUNFLGNHakhIO0VIa0hHLG1CQUFBO0FDckRoQjtBRDBEUTs7RUFFRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN4RFY7QUQwRFE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3hEVjtBRDJEVTtFQUNFLG1CR3RJRjtFSHVJRSxrQkFBQTtBQ3pEWjtBRDZEVTtFQUNFLG1FQUFBO0VBQ0EsaURBQUE7RUFDQSxXR3pPSjtFSDBPSSxrQkFBQTtBQzNEWjtBRGtFRTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDaEVKO0FEcUVNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQ25FUjtBRDZFSTtFQUNFLFlBQUE7QUMxRU47QUc3SUk7RUowTkU7SUFDRSxTQUFBO0VDMUVOO0FBQ0Y7QUQ2RU07RUFFRSxxREFBQTtBQzVFUjtBRCtFSTtFQUNFLGlJQUFBO0VBTUEsMkJBQUE7QUNsRk47QUQ2RlE7O0VLaFBOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnNKRjtBR3JKSTtFSnlPSTs7SUtqT0YseUVBQUE7SUFHQSw2RUFBQTtJQUFBLHdGQUFBO0VKZ0pKO0FBQ0Y7QUQ2RlE7O0VLaFFOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnNLRjtBR3JLSTtFSnlQSTs7SUtqUEYsc0VBQUE7SUFHQSwwRUFBQTtJQUFBLHFGQUFBO0VKZ0tKO0FBQ0Y7QUQ2RlE7O0VLaFJOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnNMRjtBR3JMSTtFSnlRSTs7SUtqUUYseUVBQUE7SUFHQSw2RUFBQTtJQUFBLHdGQUFBO0VKZ0xKO0FBQ0Y7QUQrRkk7RUFDRSw0Q0FBQTtBQzdGTjtBRCtGSTtFQUNFLHlCR2xRSTtFSG1RSixnQkFBQTtBQzdGTjtBRGdHTTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JHcFdBO0VIcVdBLDhDQUFBO0FDOUZSO0FEcUdROztFS3JUTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUptTkY7QUdsTkk7RUo4U0k7O0lLdFNGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFSjZNSjtBQUNGO0FEcUdROztFS3JVTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUptT0Y7QUdsT0k7RUo4VEk7O0lLdFRGLHNFQUFBO0lBR0EsMEVBQUE7SUFBQSxxRkFBQTtFSjZOSjtBQUNGO0FEcUdROztFS3JWTjs7UUFBQTtFQU1BOztRQUFBO0VBQUE7O1FBQUE7QUptUEY7QUdsUEk7RUo4VUk7O0lLdFVGLHlFQUFBO0lBR0EsNkVBQUE7SUFBQSx3RkFBQTtFSjZPSjtBQUNGO0FEc0dJO0VBQ0UseUNBQUE7QUNwR047QURzR0k7RUFDRSwyREFBQTtBQ3BHTjtBRHNHSTtFQUNFLHlCR3pVSTtFSDBVSixnQkFBQTtBQ3BHTjtBRHNHSTtFQUNFLGtCQUFBO0FDcEdOO0FEcUdNO0VBQ0UsZ0JHMWFBO0FGdVVSO0FEcUdRO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUNuR1Y7QUQwR1E7O0VLOVhOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVSRjtBR3RSSTtFSnVYSTs7SUsvV0Ysd0ZBQUE7SUFHQSw0RkFBQTtJQUFBLHVHQUFBO0VKaVJKO0FBQ0Y7QUQwR1E7O0VLOVlOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVTRjtBR3RTSTtFSnVZSTs7SUsvWEYsc0VBQUE7SUFHQSwwRUFBQTtJQUFBLHFGQUFBO0VKaVNKO0FBQ0Y7QUQwR1E7O0VLOVpOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVURjtBR3RUSTtFSnVaSTs7SUsvWUYseUVBQUE7SUFHQSw2RUFBQTtJQUFBLHdGQUFBO0VKaVRKO0FBQ0Y7QUQ4R1E7O0VLbGJOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVVRjtBR3RVSTtFSjJhSTs7SUtuYUYsc0VBQUE7SUFHQSwwRUFBQTtJQUFBLHFGQUFBO0VKaVVKO0FBQ0Y7QUQ4R1E7O0VLbGNOOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVWRjtBR3RWSTtFSjJiSTs7SUtuYkYsbUVBQUE7SUFHQSx1RUFBQTtJQUFBLGtGQUFBO0VKaVZKO0FBQ0Y7QUQ4R1E7O0VLbGROOztRQUFBO0VBTUE7O1FBQUE7RUFBQTs7UUFBQTtBSnVXRjtBR3RXSTtFSjJjSTs7SUtuY0Ysc0VBQUE7SUFHQSwwRUFBQTtJQUFBLHFGQUFBO0VKaVdKO0FBQ0Y7QURvSGM7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDbEhoQjtBR25YSTtFSm9mSTtJQUNFLGFBQUE7RUM3SFI7RURpSUU7SUFDRSxnQkd4akJFO0VGeWJOO0VEaUlFO0lBQ0UsaUdBQUE7RUMvSEo7QUFDRjtBRy9YSTtFSnFnQkY7SUFDRSwyRkFBQTtFQ25JRjtBQUNGO0FLN2NBOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUROQSxjQ08yQjtBTG9jN0I7QUtoY0k7RURSRixXQUFBO0VBQ0EsWUg2Qm9CO0FEOGF0QjtBSy9iRTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUpha0I7RUlabEIsWUFBQTtBTGljSjtBSzViVTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FMOGJaO0FLN2JZOztFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUxnY2Q7QUloZEk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJDaUJ1QztFRGhCdkMsWUNnQnVDO0VEZnZDLFdDZXVDO0VEZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUprZE47QUkvY007RUFDRSx3QkFBQTtBSmlkUjtBS3hjUTtFQUNFLGFBQUE7QUwwY1Y7QUtwY0k7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBTHNjTjtBSzVnQkE7Ozs7Ozs7OzsyRkFBQTtBQXFCRTtFRE5BLGNDTzJCO0FMbWdCN0I7QUsvZkk7RURSRixXQUFBO0VBQ0EsWUg2Qm9CO0FENmV0QjtBSzlmRTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUpha0I7RUlabEIsWUFBQTtBTGdnQko7QUszZlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBTDZmWjtBSzVmWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FMK2ZkO0FJL2dCSTtFQUNFLFdBQUE7RUFDQSxnVEFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkNpQnVDO0VEaEJ2QyxZQ2dCdUM7RURmdkMsV0NldUM7RURkdkMscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBSmloQk47QUk5Z0JNO0VBQ0Usd0JBQUE7QUpnaEJSO0FLdmdCUTtFQUNFLGFBQUE7QUx5Z0JWO0FLbmdCSTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVEQUFBO0FMcWdCTjtBQXZrQkE7RUFDRSxvQkFBQTtBQXlrQkYiLCJmaWxlIjoiaG9yaXpvbnRhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0RmlsZSBOYW1lOiBob3Jpem9udGFsLW1lbnUuc2Nzc1xyXG5cdERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgaG9yaXpvbnRhbCBtZW51IGZvciBlYXN5IG5hdmlnYXRpb24gJiBzdXBwb3J0IGFsbCBkZXZpY2VzLlxyXG5cdEl0IHN1cHBvcnQgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZsaXBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBib3JkZXJzIG1lbnUgZm9yXHJcblx0aXRlbSBzZXBhcmF0aW9uLlxyXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVUaGVtZVxyXG5cdEF1dGhvcjogUElYSU5WRU5UXHJcblx0QXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJzsgLy8gQm9vdHN0cmFwIGluY2x1ZGVzXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2NvbXBvbmVudHMvaW5jbHVkZSc7IC8vIENvbXBvbmVudHMgaW5jbHVkZXNcclxuXHJcbi8vIEltcG9ydCBmaXJzdCBtYWluIG1lbnUgbWl4aW5cclxuQGltcG9ydCAnLi4vLi4vbWl4aW5zL21haW4tbWVudS1taXhpbic7XHJcblxyXG4vLyBIb3Jpem9udGFsIE1lbnVcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5ob3Jpem9udGFsLW1lbnUge1xyXG4gIC8vIENvbnRlbnQgQXJlYSBtYXJnaW5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICYuc2hvdy1vdmVybGF5IHtcclxuICAgICAgLmNvbnRlbnQtb3ZlcmxheSB7XHJcbiAgICAgICAgei1pbmRleDogOTk4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE5hdmJhciBjb250YWluZXIgc3BhY2luZyBmb3IgYWxsXHJcbiAgLm5hdmJhci5oZWFkZXItbmF2YmFyIHtcclxuICAgIC5uYXZiYXItY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMC44cmVtICN7JGNvbnRlbnQtcGFkZGluZ307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiAkaG9yaXpvbnRhbC1tZW51LWhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0vL1xyXG4gIC8vIE5hdmJhciBIZWFkZXIgLy9cclxuICAvLy0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjJweDtcclxuICAgIHotaW5kZXg6IDk5MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgLm5hdmJhci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICYubmF2YmFyLWxpZ2h0IHtcclxuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5hdmJhci0gQnJhbmQgQ2VudGVyIC0gTG9nb1xyXG4gICAgJi5uYXZiYXItaG9yaXpvbnRhbC5mbG9hdGluZy1uYXYge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDYycHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKiAyKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICB9XHJcbiAgICAmLm5hdmJhci1maXhlZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLm5hdmJhci1icmFuZC1jZW50ZXIge1xyXG4gICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTZweCk7IC8vIGxlZnQgNTAlIC0gYnJhbmRpbmcgd2lkdGhcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgIC5icmFuZC1sb2dvIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBCcmFuZCBUZXh0IFNjc3NcclxuICAgICAgICAgIC5icmFuZC10ZXh0IHtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5uYXZiYXItaG9yaXpvbnRhbCB7XHJcbiAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgJi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1kb3duLCAnY3VycmVudENvbG9yJywgJGJvZHktY29sb3IpLCAnIycsICclMjMnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XHJcbiAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1kb3duLCAnY3VycmVudENvbG9yJywgJHdoaXRlKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBtaW4td2lkdGg6IDIxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgLmRpc2FibGVkIHtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LTYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgLy8gY29udGVudDogJ1xcZTg0NCcgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzdHItcmVwbGFjZShzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRib2R5LWNvbG9yKSwgJyMnLCAnJTIzJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMC42OHJlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjY4cmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi1zdWJtZW51IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAmLm9wZW5MZWZ0IHtcclxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICByaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjg1N3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44NTdyZW07XHJcblxyXG4gICAgICAgID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICYgPiAqIHtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICAgICAgICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlID4gYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3BlbiB7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaSxcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgcGFkZGluZzogMC43MTVyZW0gMS4yNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzE1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib2R5LWJnO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMXB4IHJnYmEoJHByaW1hcnksIDAuNik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZpZ2F0aW9uLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1kYXJrIHtcclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICYuYWN0aXZlID4gYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTNjNTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWxheW91dCB7XHJcbiAgLy8gbmF2YmFyIGZsb2F0aW5nXHJcbiAgJi5uYXZiYXItZmxvYXRpbmcge1xyXG4gICAgLy8gSG9yaXpvbnRhbCBsYXlvdXQgbmF2YmFyIHNoYWRvdyBwb3NpdGlvbiBhbmQgaGVpZ2h0IGZpeFxyXG4gICAgLmhlYWRlci1uYXZiYXItc2hhZG93IHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xyXG4gICAgICAuaGVhZGVyLW5hdmJhci1zaGFkb3cge1xyXG4gICAgICAgIHRvcDogNDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpub3QoLmJsYW5rLXBhZ2UpIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogOS43NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAjeyRuYXZiYXItaGVpZ2h0fSogMiArICN7JGZsb2F0aW5nLW5hdi1tYXJnaW59KSAjeyRjb250ZW50LXBhZGRpbmd9IDAgI3skY29udGVudC1wYWRkaW5nfTsgLy8gKiAyICBhcyB3ZSBoYXZlIDIgbmF2YmFyIChtZW51ICsgbmF2YmFyKSAgaW4gaG9yaXpvbnRhbCBsYXlvdXQuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjk1KSA0NCUsXHJcbiAgICAgICAgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjQ2KSA3MyUsXHJcbiAgICAgICAgcmdiYSgkd2hpdGUsIDApIDEwMCVcclxuICAgICAgKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgICAubmF2YmFyLWhvcml6b250YWwuZmxvYXRpbmctbmF2IHtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAkZmxvYXRpbmctbmF2LW1hcmdpbjtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHAgY29udGVudCBhcmVhIHdyYXBwZXIgaGVpZ2h0XHJcbiAgICAmLmZvb3Rlci1zdGF0aWMge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZsb2F0aW5nLW5hdi1tYXJnaW59LFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skZmxvYXRpbmctbmF2LW1hcmdpbn0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAjeyRmbG9hdGluZy1uYXYtbWFyZ2lufSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gbmF2YmFyIHN0aWNreVxyXG4gICYubmF2YmFyLXN0aWNreSB7XHJcbiAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAjeyRuYXZiYXItaGVpZ2h0fSogMikgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcclxuICAgICAgLm5hdmJhci1ob3Jpem9udGFsLmhlYWRlci1uYXZiYXIuZml4ZWQtdG9wIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogNjJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwIGNvbnRlbnQgYXJlYSB3cmFwcGVyIGhlaWdodFxyXG4gICAgJi5mb290ZXItc3RhdGljIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgICN7JGZvb3Rlci1oZWlnaHR9LFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItZml4ZWQge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gbmF2YmFyIHN0YXRpY1xyXG4gICYubmF2YmFyLXN0YXRpYyB7XHJcbiAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSkgI3skY29udGVudC1wYWRkaW5nfSAwICN7JGNvbnRlbnQtcGFkZGluZ307XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIGNhbGMoI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0gKyBjYWxjKCN7JGZvb3Rlci1oZWlnaHR9ICsgMC4ycmVtKSkpO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLm5hdmJhci1ob3Jpem9udGFsLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAvLyA/IEFkZGVkIGZvciBhbmd1bGFyIGZpeCBhcyBpdCBhZGRzIHRoaXMgY2xhc3MgdG8gbmF2YmFyIGluIGh6IGxheW91dFxyXG4gICAgICAgICYubmF2YmFyLXN0YXRpYy10b3Age1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQXBwIGNvbnRlbnQgYXJlYSB3cmFwcGVyIGhlaWdodFxyXG4gICAgJi5mb290ZXItc3RhdGljIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgI3skbmF2YmFyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIGNhbGMoI3skZm9vdGVyLWhlaWdodH0gKyAwLjJyZW0pLFxyXG4gICAgICAgICAgICAwcmVtLFxyXG4gICAgICAgICAgICAjeyRob3Jpem9udGFsLW1lbnUtaGVpZ2h0fSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJGhvcml6b250YWxMYXlvdXQ6IHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvb3Rlci1oaWRkZW4ge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skaG9yaXpvbnRhbC1tZW51LWhlaWdodH0sXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgICRob3Jpem9udGFsTGF5b3V0OiB0cnVlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mb290ZXItZml4ZWQge1xyXG4gICAgICAuYXBwLWNvbnRlbnQge1xyXG4gICAgICAgIC5jb250ZW50LWFyZWEtd3JhcHBlcixcclxuICAgICAgICAua2FuYmFuLXdyYXBwZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgY29udGVudC1hcmVhLXdyYXBwZXItaGVpZ2h0KFxyXG4gICAgICAgICAgICAjeyRjb250ZW50LXBhZGRpbmd9LFxyXG4gICAgICAgICAgICAjeyRuYXZiYXItaGVpZ2h0fSxcclxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG5hdmJhciBIaWRkZW5cclxuICAmLm5hdmJhci1oaWRkZW4ge1xyXG4gICAgJi5mb290ZXItc3RhdGljIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWhpZGRlbiB7XHJcbiAgICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgICAgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxyXG4gICAgICAgIC5rYW5iYW4td3JhcHBlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgICAgICAgICAgICN7JGNvbnRlbnQtcGFkZGluZ30sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9vdGVyLWZpeGVkIHtcclxuICAgICAgLmFwcC1jb250ZW50IHtcclxuICAgICAgICAuY29udGVudC1hcmVhLXdyYXBwZXIsXHJcbiAgICAgICAgLmthbmJhbi13cmFwcGVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGNvbnRlbnQtYXJlYS13cmFwcGVyLWhlaWdodChcclxuICAgICAgICAgICAgI3skY29udGVudC1wYWRkaW5nfSxcclxuICAgICAgICAgICAgMHJlbSxcclxuICAgICAgICAgICAgI3skZm9vdGVyLWhlaWdodH0sXHJcbiAgICAgICAgICAgIDByZW0sXHJcbiAgICAgICAgICAgICN7JGhvcml6b250YWwtbWVudS1oZWlnaHR9LFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbExheW91dDogdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudmVydGljYWwtb3ZlcmxheS1tZW51IHtcclxuICAgICNtYWluLW1lbnUtbmF2aWdhdGlvbiB7XHJcbiAgICAgID4gbGkge1xyXG4gICAgICAgID4gdWwge1xyXG4gICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbml0aWFsbHkgbWVudSAmIGNvbnRlbnQgd2lkdGggZm9yIG1kIGFuZCBkb3duIHNjcmVlblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcclxuICAuaG9yaXpvbnRhbC1sYXlvdXQge1xyXG4gICAgJi5ob3Jpem9udGFsLW1lbnUge1xyXG4gICAgICAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xyXG4gICAgICAgIC5oZWFkZXItbmF2YmFyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLW5hdmJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC5hcHAtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IGNhbGMoI3skbmF2YmFyLWhlaWdodH0gKyBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0pKSBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0pIDBcclxuICAgICAgICBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0pICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAvLyBGb3Igc3RhdGljIG5hdmJhclxyXG4gIGh0bWwgYm9keS5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljIC5hcHAtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gLSAwLjhyZW0gKyAjeyRuYXZiYXItaGVpZ2h0fSkgY2FsYygjeyRjb250ZW50LXBhZGRpbmd9IC0gMC44cmVtKSAwXHJcbiAgICAgIGNhbGMoI3skY29udGVudC1wYWRkaW5nfSAtIDAuOHJlbSkgIWltcG9ydGFudDsgLy8gLSAwLjhyZW0gdG8gcmVkdWNlIHBhZGRpbmcgaW4gc21hbGwgc2NyZWVuXHJcbiAgfVxyXG59XHJcbi8vIEltcG9ydCB2ZXJ0aWNhbC1vdmVybGF5LW1lbnUuc2NzcyBmb3Igc21hbGwgc2NyZWVuIHN1cHBvcnRcclxuQGltcG9ydCAndmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MnO1xyXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdEZpbGUgTmFtZTogaG9yaXpvbnRhbC1tZW51LnNjc3Ncblx0RGVzY3JpcHRpb246IEEgY2xhc3NpYyBob3Jpem9udGFsIG1lbnUgZm9yIGVhc3kgbmF2aWdhdGlvbiAmIHN1cHBvcnQgYWxsIGRldmljZXMuXG5cdEl0IHN1cHBvcnQgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZsaXBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBib3JkZXJzIG1lbnUgZm9yXG5cdGl0ZW0gc2VwYXJhdGlvbi5cblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVUaGVtZVxuXHRBdXRob3I6IFBJWElOVkVOVFxuXHRBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5ob3Jpem9udGFsLW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmNvbnRlbnQuc2hvdy1vdmVybGF5IC5jb250ZW50LW92ZXJsYXkge1xuICB6LWluZGV4OiA5OTggIWltcG9ydGFudDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLm5hdmJhci5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XG59XG4uaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciAuaGVhZGVyLW5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDQuNDVyZW07XG59XG4uaG9yaXpvbnRhbC1tZW51IGZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MnB4O1xuICB6LWluZGV4OiA5OTA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbWVudSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbWVudSAuaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWluLWhlaWdodDogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwuZmxvYXRpbmctbmF2IHtcbiAgbGVmdDogMDtcbiAgdG9wOiA2MnB4O1xuICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gKDJyZW0gKiAyKSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNTdyZW07XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1icmFuZC1jZW50ZXIgLm5hdmJhci1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNTZweCk7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1icmFuZC1jZW50ZXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItYnJhbmQtY2VudGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgLmJyYW5kLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAzNnB4O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItYnJhbmQtY2VudGVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgLmJyYW5kLXRleHQge1xuICBjb2xvcjogIzEzMDU5MTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGxlZnQ6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5zaWRlYmFyLWdyb3VwLWFjdGl2ZSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24nJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudTo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDIxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDUycHg7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kaXNhYmxlZCBhIHtcbiAgY29sb3I6ICNiOGMyY2M7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgbGVmdDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgcmlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNmU2YjdiJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiKTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjY4cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42OHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51Lm9wZW5MZWZ0IC5kcm9wZG93bi1tZW51IHtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICByaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudS5zaWRlYmFyLWdyb3VwLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51ID4gLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51ID4gLmRyb3Bkb3duLW1lbnUgaSxcbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnUgPiAuZHJvcGRvd24tbWVudSBzdmcge1xuICBoZWlnaHQ6IDExcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDExcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkge1xuICBwYWRkaW5nLXRvcDogMC44NTdyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjg1N3JlbTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IC5kcm9wZG93bi1tZW51IGEgPiAqIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IC5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM2ZTZiN2I7XG59XG4uaG9yaXpvbnRhbC1tZW51IC5oZWFkZXItbmF2YmFyLm5hdmJhci1ob3Jpem9udGFsIHVsI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiAuZHJvcGRvd24tbWVudSBhOmhvdmVyID4gKiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSA+IGEge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBjb2xvcjogIzEzMDU5MTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IC5kcm9wZG93bi1tZW51IC5vcGVuLmFjdGl2ZSA+IGEge1xuICBjb2xvcjogIzZlNmI3YjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSBpLFxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpIHN2ZyB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IGEge1xuICBwYWRkaW5nOiAwLjcxNXJlbSAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNzE1cmVtO1xufVxuLmhvcml6b250YWwtbWVudSAuaGVhZGVyLW5hdmJhci5uYXZiYXItaG9yaXpvbnRhbCB1bCNtYWluLW1lbnUtbmF2aWdhdGlvbiA+IGxpOmhvdmVyID4gYSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLmhlYWRlci1uYXZiYXIubmF2YmFyLWhvcml6b250YWwgdWwjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaS5hY3RpdmUgPiBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExOGRlZywgIzEzMDU5MSwgcmdiYSgxOSwgNSwgMTQ1LCAwLjcpKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMXB4IHJnYmEoMTksIDUsIDE0NSwgMC42KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3Jpem9udGFsLW1lbnUgLm5hdmlnYXRpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiAjOTI5MjkyO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhvcml6b250YWwtbWVudSAubmF2YmFyLWRhcmsgLm5hdi1pdGVtLmFjdGl2ZSA+IGEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEzMDU5MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2M1MDtcbn1cblxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZyAuaGVhZGVyLW5hdmJhci1zaGFkb3cge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcgLmhlYWRlci1uYXZiYXItc2hhZG93IHtcbiAgICB0b3A6IDQ1cHg7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmc6bm90KC5ibGFuay1wYWdlKSAuYXBwLWNvbnRlbnQge1xuICBwYWRkaW5nOiBjYWxjKDJyZW0gKyA0LjQ1cmVtKiAyICsgMS4zcmVtKSAycmVtIDAgMnJlbTtcbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjk1KSA0NCUsIHJnYmEoMjQ4LCAyNDgsIDI0OCwgMC40NikgNzMlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMS4zcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMSkgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDEuM3JlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMSkgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDByZW0gKyAxLjNyZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAwcmVtICsgMS4zcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAwcmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDByZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1mbG9hdGluZy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0gKyAxLjNyZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMS4zcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItZmxvYXRpbmcuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWZsb2F0aW5nLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5IC5hcHAtY29udGVudCB7XG4gIHBhZGRpbmc6IGNhbGMoMnJlbSArIDQuNDVyZW0qIDIpIDJyZW0gMCAycmVtO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kgLmhlYWRlci1uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyLmZpeGVkLXRvcCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCAwIHJnYmEoMzQsIDQxLCA0NywgMC4xKTtcbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMSkgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDEpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAwcmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDByZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDByZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMHJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0aWNreS5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RpY2t5LmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGlja3kuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAzLjM1cmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmFwcC1jb250ZW50IHtcbiAgcGFkZGluZzogY2FsYygycmVtICsgNC40NXJlbSkgMnJlbSAwIDJyZW07XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYyAuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICg0LjQ1cmVtICsgY2FsYygzLjM1cmVtICsgMC4ycmVtKSkpO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmhlYWRlci1uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmhvcml6b250YWwtbWVudS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMgLmhvcml6b250YWwtbWVudS13cmFwcGVyIC5uYXZiYXItaG9yaXpvbnRhbC5oZWFkZXItbmF2YmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljIC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciAubmF2YmFyLWhvcml6b250YWwuaGVhZGVyLW5hdmJhci5uYXZiYXItc3RhdGljLXRvcCB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAxKSArIDQuNDVyZW0gKyBjYWxjKDMuMzVyZW0gKyAwLjJyZW0pICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDEpICsgNC40NXJlbSArIGNhbGMoMy4zNXJlbSArIDAuMnJlbSkgKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1zdGF0aWMgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDEpICsgNC40NXJlbSArIGNhbGMoMy4zNXJlbSArIDAuMnJlbSkpKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMSkgKyA0LjQ1cmVtICsgY2FsYygzLjM1cmVtICsgMC4ycmVtKSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDByZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMHJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLWhpZGRlbiAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMHJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDQuNDVyZW0gKyAwcmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1zdGF0aWMuZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLXN0YXRpYy5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgNC40NXJlbSArIDMuMzVyZW0pKTtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDAgLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyA0LjQ1cmVtICsgMy4zNXJlbSkpO1xuICB9XG59XG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItc3RhdGljIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoXG4gICAgICAgIGNhbGMoMnJlbSAqIDEpICsgMHJlbSArIDMuMzVyZW0gKyAwcmVtICsgNC40NXJlbVxuICAgICAgKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChcbiAgICAgICAgY2FsYygycmVtICogMSkgKyAwcmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtYXJlYS13cmFwcGVyLFxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLXN0YXRpYyAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMSkgKyAwcmVtICsgMy4zNXJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAxKSArIDByZW0gKyAzLjM1cmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1oaWRkZW4gLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyAwcmVtICsgMHJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDByZW0gKyAwcmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItaGlkZGVuIC5hcHAtY29udGVudCAua2FuYmFuLXdyYXBwZXIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDByZW0gKyAwcmVtKSk7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKGNhbGMoY2FsYygycmVtIC0gMC44cmVtKSAqIDIpICsgMHJlbSArIDByZW0pKTtcbiAgfVxufVxuLmhvcml6b250YWwtbGF5b3V0Lm5hdmJhci1oaWRkZW4uZm9vdGVyLWZpeGVkIC5hcHAtY29udGVudCAuY29udGVudC1hcmVhLXdyYXBwZXIsXG4uaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5rYW5iYW4td3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIChcbiAgICAgICAgY2FsYygycmVtICogMikgKyAwcmVtICsgMy4zNXJlbSArIDByZW0gKyA0LjQ1cmVtXG4gICAgICApKTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwIC0gKFxuICAgICAgICBjYWxjKDJyZW0gKiAyKSArIDByZW0gKyAzLjM1cmVtICsgMHJlbSArIDQuNDVyZW1cbiAgICAgICkpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQubmF2YmFyLWhpZGRlbi5mb290ZXItZml4ZWQgLmFwcC1jb250ZW50IC5jb250ZW50LWFyZWEtd3JhcHBlcixcbi5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItaGlkZGVuLmZvb3Rlci1maXhlZCAuYXBwLWNvbnRlbnQgLmthbmJhbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoY2FsYyhjYWxjKDJyZW0gLSAwLjhyZW0pICogMikgKyAwcmVtICsgMy4zNXJlbSkpO1xuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCAtIChjYWxjKGNhbGMoMnJlbSAtIDAuOHJlbSkgKiAyKSArIDByZW0gKyAzLjM1cmVtKSk7XG4gIH1cbn1cbi5ob3Jpem9udGFsLWxheW91dC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgI21haW4tbWVudS1uYXZpZ2F0aW9uID4gbGkgPiB1bCA+IGxpID4gYSBpLFxuLmhvcml6b250YWwtbGF5b3V0LnZlcnRpY2FsLW92ZXJsYXktbWVudSAjbWFpbi1tZW51LW5hdmlnYXRpb24gPiBsaSA+IHVsID4gbGkgPiBhIHN2ZyB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaG9yaXpvbnRhbC1sYXlvdXQuaG9yaXpvbnRhbC1tZW51IC5ob3Jpem9udGFsLW1lbnUtd3JhcHBlciAuaGVhZGVyLW5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaG9yaXpvbnRhbC1sYXlvdXQgLmhlYWRlci1uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLmhvcml6b250YWwtbGF5b3V0IC5hcHAtY29udGVudCB7XG4gICAgcGFkZGluZzogY2FsYyg0LjQ1cmVtICsgY2FsYygycmVtIC0gMC44cmVtKSkgY2FsYygycmVtIC0gMC44cmVtKSAwIGNhbGMoMnJlbSAtIDAuOHJlbSkgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIGh0bWwgYm9keS5ob3Jpem9udGFsLWxheW91dC5uYXZiYXItc3RhdGljIC5hcHAtY29udGVudCB7XG4gICAgcGFkZGluZzogY2FsYygycmVtIC0gMC44cmVtICsgNC40NXJlbSkgY2FsYygycmVtIC0gMC44cmVtKSAwIGNhbGMoMnJlbSAtIDAuOHJlbSkgIWltcG9ydGFudDtcbiAgfVxufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufVxuLmhvcml6b250YWwtbGF5b3V0IC5ob3Jpem9udGFsLWhlYWRlci1uYXZiYXIgLm5hdmJhci1jb250YWluZXIgdWwubmF2YmFyLW5hdiBsaS5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogNDFweCAhaW1wb3J0YW50O1xufSIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gY29tcG9uZW50IHZhcmlhYmxlXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXHJcbi8vICBUSElTIEZJTEUgV0lMTCBHRVQgT1ZFUldSSVRURU4gV0lUSCBFQUNIIFZVRVhZIEhUTUwgVEVNUExBVEUgUkVMRUFTRS5cclxuLy8gIFRJUDpcclxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRiYXNlLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuJGJvZHktZGlyZWN0aW9uOiBsdHIgIWRlZmF1bHQ7IC8vIERlZmF1bHQgbHRyLCBjaGFuZ2UgaXQgdG8gcnRsIGZvciBSaWdodCBUbyBMZWZ0IHN1cHBvcnQuXHJcbiRjb250ZW50LXBhZGRpbmc6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIENvbG9yc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRuYXYtY29tcG9uZW50LWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzd2lwZXItYmc6ICNmMmY0ZjQgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIE5hdmJhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRuYXZiYXItaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcclxuJGZvb3Rlci1oZWlnaHQ6IDMuMzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIE1haW4gTWVudVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL21haW4gbWVudSBkYXJrXHJcbiRtZW51LWRhcmstY29sb3I6ICNkY2RjZGMgIWRlZmF1bHQ7XHJcbiRtZW51LWRhcmstYmctY29sb3I6ICMxMDE2M2EgIWRlZmF1bHQ7XHJcblxyXG4kbWVudS1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4ICFkZWZhdWx0O1xyXG4kbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMjBweCAhZGVmYXVsdDtcclxuJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcclxuJG1lbnUtZm9ydGgtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcclxuXHJcbi8vIHZlcnRpY2FsIG1lbnVcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xyXG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIFNpZGViYXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHNpZGViYXItd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xyXG4kY2hhdC1zaWRlYmFyLXdpZHRoOiAzNjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIEF2YXRhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGF2YXRhci1zaXplOiAzMnB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXN0YXR1cy1zaXplOiAxMXB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4ICFkZWZhdWx0O1xyXG5cclxuJGF2YXRhci1zaXplLXhsOiA3MHB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXNpemUtbGc6IDUwcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc2l6ZS1zbTogMjRweCAhZGVmYXVsdDtcclxuXHJcbiRhdmF0YXItYmc6ICNjM2MzYzM7XHJcbiRhdmF0YXItZ3JvdXAtYm9yZGVyOiAkd2hpdGU7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgUHJvZ3Jlc3NcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHByb2dyZXNzLXNpemUteGw6IDEuMTRyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLWxnOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtbWQ6IDAuNTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLXNtOiAwLjE0M3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBGb3JtXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtaGVpZ2h0LWxnLCAkaW5wdXQtaGVpZ2h0LXNtIGFyZSBpbiB2YXJpYWJsZXNcclxuJGZvbnQtc2l6ZS14czogMC43NXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS14bDogKCRmb250LXNpemUtYmFzZSArIDAuNSkgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14bDogMS43ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteHM6IDEuNSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteS14bDogMC41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LXhzOiAwLjJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgteHM6IDAuMjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXMteGw6IDAuMzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXhzOiAwLjEycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14bDogJGJvcmRlci1yYWRpdXMteGwgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhzOiAkYm9yZGVyLXJhZGl1cy14cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQteGw6ICgoJGZvbnQtc2l6ZS14bCAqICRsaW5lLWhlaWdodC14bCkgKyAoJGlucHV0LXBhZGRpbmcteS14bCAqIDIpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC14czogKCgkZm9udC1zaXplLXhzICogJGxpbmUtaGVpZ2h0LXhzKSArICgkaW5wdXQtcGFkZGluZy15LXhzICogMikpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgQmxhbmsgUGFnZSBCZyBDb2xvclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJsYW5rLWJnLWNvbG9yOiAjZWZmMmY3ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIERhdGEgVGFibGVzIEJnIENvbG9yXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZGF0YXRhYmxlLWJnLWNvbG9yOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFN3aXRjaFxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kc3dpdGNoLWJnLWNvbG9yOiAjZTJlMmUyICFkZWZhdWx0O1xyXG4kc3dpdGNoLWluZGljYXRvci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFRpbWVsaW5lXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiR0aW1lbGluZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtcG9pbnQtc2l6ZTogMS43NXJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1zaXplOiAxMnB4ICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci13cmFwcGVyLXNpemU6IDIwcHggIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtaXRlbS1taW4taGVpZ2h0OiA0cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtaXRlbS1pY29uLWZvbnQtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1ldmVudC10aW1lLXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1ldmVudC10aW1lLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBvdmVycmlkZXMgb2YgQm9vdHN0cmFwIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XHJcbiRncmF5LTIwMDogI2VkZWRlZCAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlclxyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XHJcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XHJcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMWUxZTFlICFkZWZhdWx0OyAvLyAkZ3JheS1kYXJrXHJcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcclxuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXHJcblxyXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5IFxyXG4kTWluZWR1YzogIzEzMDU5MSAhZGVmYXVsdDsvL251ZXZvIGNvbG9yIHBhcmEgbGEgcGxhbnRpbGxhIE1pbmVkdWMgXHJcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xyXG4kYmx1ZTogIzAwY2ZlOCAhZGVmYXVsdDsgLy8kaW5mb1xyXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXHJcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxyXG5cclxuJHByaW1hcnk6ICRNaW5lZHVjICFkZWZhdWx0OyAvLyRwcmltYXJ5OiAkcHVycGxlICFkZWZhdWx0OyB2YWxvciBwb3IgZGVmZWN0byBkZSBsYSBwbGFudGlsbGFcclxuJHNlY29uZGFyeTogIzgyODY4YiAhZGVmYXVsdDtcclxuJGluZm86ICRibHVlICFkZWZhdWx0O1xyXG4kd2FybmluZzogJG9yYW5nZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAkZ3JheS01MCAhZGVmYXVsdDtcclxuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgMjU6IChcclxuICAgICAgJHNwYWNlciAqIDAuMjVcclxuICAgICksXHJcbiAgICA1MDogKFxyXG4gICAgICAkc3BhY2VyICogMC41XHJcbiAgICApLFxyXG4gICAgNzU6IChcclxuICAgICAgJHNwYWNlciAqIDAuNzVcclxuICAgICksXHJcbiAgICAxOiAoXHJcbiAgICAgICRzcGFjZXJcclxuICAgICksXHJcbiAgICAyOiAoXHJcbiAgICAgICRzcGFjZXIgKiAxLjVcclxuICAgICksXHJcbiAgICAzOiAoXHJcbiAgICAgICRzcGFjZXIgKiAzXHJcbiAgICApLFxyXG4gICAgNDogKFxyXG4gICAgICAkc3BhY2VyICogMy41XHJcbiAgICApLFxyXG4gICAgNTogKFxyXG4gICAgICAkc3BhY2VyICogNFxyXG4gICAgKVxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjM1N3JlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBzaGFkb3dcclxuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuLy8gVHlwb2dyYXBoeVxyXG5cclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjQ1ICFkZWZhdWx0O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43MTQgIWRlZmF1bHQ7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XHJcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMDcgIWRlZmF1bHQ7XHJcblxyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1jb2xvcjogIzVlNTg3MyAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI2I5YjljMyAhZGVmYXVsdDtcclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG5cclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1hY2NlbnQtYmc6ICNmYWZhZmMgIWRlZmF1bHQ7XHJcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAjNDA0MDQwICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcclxuJGJ0bi1wYWRkaW5nLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuOSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWRpc2FibGVkLWJnOiAjZWZlZmVmICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtbGc6IDMuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1jaGVja2VkLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYSgkcHJpbWFyeSwgMC42NSk7XHJcblxyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLXNwYWNlcjogMCAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd25fc3BhY2luZzogMC41cmVtOyAvLyBjdXN0b21cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC41NTc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC43NDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLWxnOiAxLjE0cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwLjQyOHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vQWxlcnRzXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdiB0YWJzXHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6IDAuMjUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBuYXZiYXJcclxuXHJcbiRmbG9hdGluZy1uYXYtbWFyZ2luOiAxLjNyZW07XHJcblxyXG4vLyBUb29sdGlwc1xyXG5cclxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuNzc1cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogMSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtbWF4LXdpZHRoOiAzODBweCAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI4NnJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcblxyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiA1cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjZyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuOHJlbSAxLjRyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiA0MDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAgIFNsaWRlIEluIE1vZGFsXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1zbTogMjVyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XHJcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQ29kZVxyXG5cclxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTd2l0Y2hcclxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vc3ZnIGNvbG9yXHJcbiRzdmctY29sb3ItbGlnaHQ6ICM2MjYyNjIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTVkcgaWNvbnNcclxuLy8gRm9yIEJyZWFkY3J1bWJcclxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbi8vIENoZXZyb24gSWNvbnNcclxuJGNoZXZyb24tbGVmdDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tZG93bjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRyZW1vdmU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcclxuJGluZm9JY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWluZm8nJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMi4wMScgeTI9JzgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZpbGUgTmFtZTogbWFpbi1tZW51LW1peGluLnNjc3NcclxuLy8gRGVzY3JpcHRpb246IENvbW1vbiBtaXhpbiBmb3IgbWVudXMsIGNvbnRhaW4gZGFyayBhbmQgbGlnaHQgdmVyc2lvbiBzY3NzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSGVhZGVyIG5hdmJhciBjb250ZW50IGFuZCBicmFuZCBleHBhbmRlZCAmIGNvbGxhcHNlZCBzdGF0c1xyXG4vLyBzcGFjaW5nIGFuZCBzaXppbmcuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gTWl4aW5zIGZvciB0aGUgbWVudSBhbmQgbmF2YmFyIHBvc2l0aW9uLCBtYXJnaW4gYW5kIHdpZHRoIGNoYW5nZVxyXG5AbWl4aW4gbWFpbi1tZW51LXdpZHRoKCRtZW51LXdpZHRoKSB7XHJcbiAgbWFyZ2luLWxlZnQ6ICRtZW51LXdpZHRoO1xyXG59XHJcbkBtaXhpbiBtZW51LW5hdmJhci13aWR0aCgkbWVudS13aWR0aCkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAkbWVudS13aWR0aDtcclxufVxyXG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IHNob3cgaGlkZSBiYXNlZCBvbiB3aWR0aFxyXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0tc2hvdygkdHJhbnNmb3JtLXdpZHRoKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHJhbnNmb3JtLXdpZHRoLCAwLCAwKTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XHJcbn1cclxuQG1peGluIHZlcnRpY2FsLW1lbnUtdHJhbnNmb3JtLWhpZGUoKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLy8gTWl4aW5zIGZvciB0aGUgc3ViIG1lbnUgYXJyb3dcclxuQG1peGluIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygkYXJyb3ctZm9udC1zaXplKSB7XHJcbiAgJi5oYXMtc3ViIHtcclxuICAgID4gYTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkYm9keS1jb2xvciksICcjJywgJyUyMycpKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6ICRhcnJvdy1mb250LXNpemU7XHJcbiAgICAgIGhlaWdodDogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgd2lkdGg6ICRhcnJvdy1mb250LXNpemU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykge1xyXG4gICAgICA+IGE6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBVc2VkIGZvciBhcHBzXHJcbkBtaXhpbiBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgJGNvbnRlbnRQYWRkaW5nOiAwcmVtLFxyXG4gICRuYXZiYXJIZWlnaHQ6IDByZW0sXHJcbiAgJGZvb3RlckhlaWdodDogMHJlbSxcclxuICAkZmxvYXRpbmdOYXZNYXJnaW46IDByZW0sXHJcbiAgJGhvcml6b250YWxNZW51SGVpZ2h0OiAwcmVtLFxyXG4gICRzcGFjaW5nU2lkZXM6IDEsXHJcbiAgJGhvcml6b250YWxMYXlvdXQ6IGZhbHNlXHJcbikge1xyXG4gIGhlaWdodDogY2FsYyhcclxuICAgIDEwMHZoIC1cclxuICAgICAgY2FsYyhcclxuICAgICAgICBjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gKyAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICBjYWxjKFxyXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICApXHJcbiAgKTtcclxuICAvLyByZXNwb25zaXZlIHNpemUgaGVpZ2h0XHJcbiAgQGlmICRob3Jpem9udGFsTGF5b3V0IHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihsZykge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgMTAwdmggLSBjYWxjKGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gLSAwLjhyZW0pICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSlcclxuICAgICAgKTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cclxuICAgICAgICAgIGNhbGMoY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAtIDAuOHJlbSkgKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICAxMDB2aCAtXHJcbiAgICAgICAgICBjYWxjKFxyXG4gICAgICAgICAgICBjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgLSBjYWxjKDAuOHJlbSAqICN7JHNwYWNpbmdTaWRlc30pKSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICtcclxuICAgICAgICAgICAgICAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cclxuICAgICAgICAgIGNhbGMoXHJcbiAgICAgICAgICAgIGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSAtIGNhbGMoMC44cmVtICogI3skc3BhY2luZ1NpZGVzfSkpICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gK1xyXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGlnaHQgJiBEYXJrIG1lbnUgbWl4aW5cclxuLy8gJHRoZW1lLWNvbG9yIDogTWVudSB0ZXh0IGNvbG9yXHJcbi8vICR0aGVtZS1iZyAgICA6IE1lbnUgYmFja2dyb3VuZCBjb2xvclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1peGluIG1lbnUtdGhlbWUoJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcclxuICAkbWFpbi1tZW51LXRvcC1vcGVuLWNvbG9yOiBkYXJrZW4oJHRoZW1lLWNvbG9yLCAxMCUpO1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc6IGRhcmtlbigkdGhlbWUtYmcsIDYlKTtcclxuICAkbWFpbi1tZW51LXRvcC1vcGVuLWhlYWQtYmc6IGRhcmtlbigkdGhlbWUtYmcsIDQlKTtcclxuXHJcbiAgJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc6IGRhcmtlbigkdGhlbWUtYmcsIDQlKTsgLy8kcHJpbWFyeVxyXG5cclxuICAkbWFpbi1tZW51LXN1Yi1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICRtYWluLW1lbnUtc3ViLWhvdmVyLWNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgNCUpO1xyXG5cclxuICAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcblxyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWJnO1xyXG5cclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XHJcbiAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDIxLjUlKTtcclxuICAgICAgbWFyZ2luOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAwLjI4NnJlbSkgMCAwLjhyZW0gKCRjb250ZW50LXBhZGRpbmcgKyAwLjJyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAmLmhhcy1zdWIge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLCBiYWNrZ3JvdW5kIDBzLCBjb2xvciAwcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDQuOSUpO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtZW51LXBhZGRpbmc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcblxyXG4gICAgICAgIHNwYW4ubWVudS1zdWItdGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCAzMCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVudSBJdGVtIEhvdmVyIEFuaW1hdGlvblxyXG4gICAgbGkubmF2LWl0ZW0ge1xyXG4gICAgICBhOmhvdmVyID4gKiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgIH1cclxuICAgICAgdWwubWVudS1jb250ZW50IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBhOmhvdmVyID4gKiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGxpIHtcclxuICAgICAgPiBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGksXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICA+IHVsIGxpIHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm5vdCguaGFzLXN1Yikge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGFzLXN1YiB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IHVsID4gbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpLFxyXG4gICAgICAmLnNpZGViYXItZ3JvdXAtYWN0aXZlIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1vcGVuLWhlYWQtYmc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAgID4gdWwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjcpO1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1vcGVuLWhvdmVyLWJnO1xyXG5cclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3ZlcixcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhhcy1zdWIge1xyXG4gICAgICAgICAgJjpub3QoLm9wZW4pIHtcclxuICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wZW4sXHJcbiAgICAgICAgLnNpZGViYXItZ3JvdXAtYWN0aXZlIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9mb3IgMnJkIGxldmVsIG1lbnVcclxuICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy9mb3IgM3JkIGxldmVsIG1lbnVcclxuICAgICAgICAgICAgLm9wZW4ge1xyXG4gICAgICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaG92ZXIsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS1zdWItaG92ZXItY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjcpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIE1lbnUgY29udGVudCBkaXNwbGF5IG1peGluXHJcbi8vICRtZW51LWV4cGFuZGVkLXdpZHRoIDogRXhwYW5kZWQgbWVudSB3aWR0aFxyXG4vLyAkbWVudS1jb2xsYXBzZWQtd2lkdGg6IENvbGxhcHNlZCBtZW51IHdpZHRoXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWl4aW4gbWVudS1jb250ZW50KCRtZW51LWV4cGFuZGVkLXdpZHRoLCAkbWVudS1jb2xsYXBzZWQtd2lkdGgsICR0aGVtZS1jb2xvciwgJHRoZW1lLWJnKSB7XHJcbiAgLm1haW4tbWVudS1jb250ZW50IHtcclxuICAgID4gc3Bhbi5tZW51LXRpdGxlLFxyXG4gICAgYS5tZW51LXRpdGxlIHtcclxuICAgICAgcmlnaHQ6IC0oJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xyXG4gICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgPiB1bC5tZW51LWNvbnRlbnQge1xyXG4gICAgICBsZWZ0OiAkbWVudS1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cztcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAycHggcmdiYSgkYmxhY2ssIDAuMSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKCRibGFjaywgMC4yKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCRibGFjaywgMC4wMik7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBGaWxlIE5hbWU6IHZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzXHJcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcclxuICAgIGxpZ2h0ICYgZGFyayB2ZXJzaW9uLCBmaWxwcGVkIGxheW91dCwgcmlnaHQgc2lkZSBpY29ucywgbmF0aXZlIHNjcm9sbCBhbmQgYm9yZGVycyBtZW51XHJcbiAgICBpdGVtIHNlcGVyYXRpb24uXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xyXG5cclxuLy8gSW1wb3J0IGZpcnN0IG1haW4gbWVudSBtaXhpblxyXG5AaW1wb3J0ICcuLi8uLi9taXhpbnMvbWFpbi1tZW51LW1peGluJztcclxuXHJcbi8vIFZlcnRpY2FsIE92ZXJsYXkgTWVudVxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSB7XHJcbiAgLy9Db250ZW50IGV4cGFuZGVkXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xyXG4gIH1cclxuICAvL05hdmJhciBleHBhbmRlZFxyXG4gIC5uYXZiYXIge1xyXG4gICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICBAaW5jbHVkZSBtZW51LW5hdmJhci13aWR0aCgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIE1haW4gbWVudSBleHBhbmRlZFxyXG4gIC5tYWluLW1lbnUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xyXG4gICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgbGVmdDogLSgkbWVudS1leHBhbmRlZC13aWR0aCk7XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICA+IGxpIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgPiBzdmcsXHJcbiAgICAgICAgICA+IGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40MjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5tZW51LW9wZW4ge1xyXG4gICAgLm1haW4tbWVudSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1lbnUtZXhwYW5kZWQtd2lkdGgsIDAsIDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1lbnUtaGlkZSB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgQGV4dGVuZCAubWFpbi1tZW51O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 15648:
/*!***************************************************************!*\
  !*** ./src/app/layout/horizontal/horizontal-layout.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutModule": function() { return /* binding */ HorizontalLayoutModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components */ 76200);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 72625);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content/content.module */ 16294);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 54735);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 32004);
/* harmony import */ var app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.component */ 11851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);










var HorizontalLayoutModule = function HorizontalLayoutModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HorizontalLayoutModule);
};

HorizontalLayoutModule.ɵfac = function HorizontalLayoutModule_Factory(t) {
  return new (t || HorizontalLayoutModule)();
};

HorizontalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: HorizontalLayoutModule
});
HorizontalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HorizontalLayoutModule, {
    declarations: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_1__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavbarModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__.ContentModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__.MenuModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule],
    exports: [app_layout_horizontal_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalLayoutComponent]
  });
})();

/***/ }),

/***/ 46092:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/layout/custom-breakpoints */ 76840);
/* harmony import */ var app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.module */ 28477);
/* harmony import */ var app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/horizontal/horizontal-layout.module */ 15648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







var LayoutModule = function LayoutModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutModule);
};

LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};

LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [app_layout_custom_breakpoints__WEBPACK_IMPORTED_MODULE_1__.CustomBreakPointsProvider],
  imports: [[_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule.withConfig({
    disableDefaultBps: true
  }), app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_2__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalLayoutModule], app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_2__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalLayoutModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutModule, {
    imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_2__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalLayoutModule],
    exports: [app_layout_vertical_vertical_layout_module__WEBPACK_IMPORTED_MODULE_2__.VerticalLayoutModule, app_layout_horizontal_horizontal_layout_module__WEBPACK_IMPORTED_MODULE_3__.HorizontalLayoutModule]
  });
})();

/***/ }),

/***/ 32923:
/*!**************************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutComponent": function() { return /* binding */ VerticalLayoutComponent; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 59367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 68726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content/content.component */ 39575);
/* harmony import */ var app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/navbar/navbar.component */ 30360);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/core-sidebar/core-sidebar.component */ 29039);
/* harmony import */ var app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/menu/menu.component */ 39389);
/* harmony import */ var app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/components/footer/footer.component */ 83081);














function VerticalLayoutComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function VerticalLayoutComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

function VerticalLayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}

function VerticalLayoutComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}

var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};

function VerticalLayoutComponent_ng_template_7_app_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-navbar", 9);
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](1, _c0, ctx_r10.coreConfig.layout.navbar.customBackgroundColor === true ? ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type + " " + ctx_r10.coreConfig.layout.navbar.backgroundColor : ctx_r10.coreConfig.layout.navbar.background + " " + ctx_r10.coreConfig.layout.navbar.type, ctx_r10.coreConfig.layout.navbar.type === "floating-nav" ? "container-xxl" : ""));
  }
}

function VerticalLayoutComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_7_app_navbar_0_Template, 1, 4, "app-navbar", 8);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.coreConfig.layout.navbar.hidden);
  }
}

function VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "core-sidebar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-menu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("collapsed", ctx_r11.coreConfig.layout.menu.collapsed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](2, _c0, ctx_r11.coreConfig.layout.skin === "semi-dark" || ctx_r11.coreConfig.layout.skin === "dark" ? "menu-dark" : "menu-light", ctx_r11.coreConfig.layout.menu.collapsed ? "" : "expanded"));
  }
}

function VerticalLayoutComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_9_core_sidebar_0_Template, 2, 5, "core-sidebar", 10);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r7.coreConfig.layout.menu.hidden);
  }
}

function VerticalLayoutComponent_ng_template_11_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "footer", 14);
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r12.coreConfig.layout.footer.customBackgroundColor === true ? ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type + " " + ctx_r12.coreConfig.layout.footer.backgroundColor : ctx_r12.coreConfig.layout.footer.background + " " + ctx_r12.coreConfig.layout.footer.type);
  }
}

function VerticalLayoutComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_template_11_footer_0_Template, 1, 1, "footer", 13);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r9.coreConfig.layout.footer.hidden);
  }
}

var VerticalLayoutComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function VerticalLayoutComponent(_coreConfigService, _elementRef) {
    (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalLayoutComponent);

    this._coreConfigService = _coreConfigService;
    this._elementRef = _elementRef; // Set the private defaults

    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VerticalLayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return VerticalLayoutComponent;
}();

VerticalLayoutComponent.ɵfac = function VerticalLayoutComponent_Factory(t) {
  return new (t || VerticalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};

VerticalLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: VerticalLayoutComponent,
  selectors: [["vertical-layout"]],
  decls: 13,
  vars: 4,
  consts: [[4, "ngTemplateOutlet"], [1, "app-content", "content"], [1, "content-overlay"], ["class", "header-navbar-shadow", 4, "ngIf"], ["navbar", ""], ["menu", ""], ["footer", ""], [1, "header-navbar-shadow"], ["class", "header-navbar navbar navbar-expand-lg align-items-center navbar-shadow", 3, "ngClass", 4, "ngIf"], [1, "header-navbar", "navbar", "navbar-expand-lg", "align-items-center", "navbar-shadow", 3, "ngClass"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "class", "main-menu menu-fixed menu-accordio menu-shadow", "overlayClass", "sidenav-overlay", 3, "collapsed", "ngClass", 4, "ngIf"], ["name", "menu", "collapsibleSidebar", "bs-gt-xl", "overlayClass", "sidenav-overlay", 1, "main-menu", "menu-fixed", "menu-accordio", "menu-shadow", 3, "collapsed", "ngClass"], ["menuType", "vertical-menu", 1, "vertical-menu"], ["class", "footer", 3, "ngClass", 4, "ngIf"], [1, "footer", 3, "ngClass"]],
  template: function VerticalLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, VerticalLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, VerticalLayoutComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, VerticalLayoutComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "content");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, VerticalLayoutComponent_ng_container_6_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, VerticalLayoutComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VerticalLayoutComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, VerticalLayoutComponent_ng_template_11_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);

      var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);

      var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.coreConfig.layout.navbar.hidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, app_layout_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__.ContentComponent, app_layout_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _core_components_core_sidebar_core_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.CoreSidebarComponent, app_layout_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__.MenuComponent, app_layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
  styles: ["/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  margin-right: 1.1rem;\n  flex-shrink: 0;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n  color: #565656;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n  left: 74px;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .app-content,\n.vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n  }\n  .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n  }\n  .vertical-layout.vertical-menu-modern .content,\n.vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n  }\n}\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-overlay-menu .content {\n  margin-left: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n  width: 260px;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n  left: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  top: 14px;\n  transform: rotate(0deg);\n  transition: all 0.2s ease-out;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transform: translate3d(260px, 0, 0);\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxtZW51XFxtZW51LXR5cGVzXFx2ZXJ0aWNhbC1tZW51LnNjc3MiLCJ2ZXJ0aWNhbC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcbWFpbi1tZW51LW1peGluLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29yZVxcbWVudVxcbWVudS10eXBlc1xcdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OzsyRkFBQTtBQXFCSTtFQUNFLGdFQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDVk47QURZUTtFQUNFLG1CQUFBO0FDVlY7QURZUTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDVlY7QURjVTs7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1paO0FEcUJNO0VBQ0UsWUVOYztBRGJ0QjtBRHNCWTtFQUNFLGFBQUE7QUNwQmQ7QUQyQmdCOztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN4QmxCO0FFVkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJIbUMyQztFR2xDM0MsY0hrQzJDO0VHakMzQyxhSGlDMkM7RUdoQzNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZZTjtBRVRNO0VBQ0Usd0JBQUE7QUZXUjtBRGlCTTtFR2hFSixrQkRpQ29CO0FEaUJ0QjtBRHNCUTtFR3JFTixXQUFBO0VBQ0EsV0Q4QnFCO0FEb0J2QjtBRG9CVTtFQUNFLGFBQUE7QUNsQlo7QURvQlU7RUFDRSxZRTdDVTtFRjhDVixhQUFBO0FDbEJaO0FEbUJZO0VBQ0UsY0FBQTtBQ2pCZDtBRHNCUTtFQUVFLFVFdERhO0FEaUN2QjtBRHlCTTtFQUNFLFdFM0RlO0FEb0N2QjtBRHlCUTs7RUFFRSxhQUFBO0FDdkJWO0FENEJVO0VBQ0UsbUJBQUE7QUMxQlo7QUQyQlk7RUFDRSxhQUFBO0FDekJkO0FEMkJZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN6QmQ7QUQ2Qlk7RUFDRSxpQ0FBQTtBQzNCZDtBRDhCYztFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDNUJoQjtBRG1DUTtFQUNFLFlFakdZO0FEZ0V0QjtBRG9DYztFQUNFLGNBQUE7QUNsQ2hCO0FEb0NjO0VBQ0UsYUFBQTtBQ2xDaEI7QUVwRkk7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJIcUg2QztFR3BIN0MsWUhvSDZDO0VHbkg3QyxXSG1INkM7RUdsSDdDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZzRk47QUVuRk07RUFDRSx3QkFBQTtBRnFGUjtBRHVCVTtFQUNFLGVBQUE7QUNyQlo7QUR1QlU7RUFDRSxjQUFBO0FDckJaO0FEMEJRO0VBQ0UsaUJBQUE7QUN4QlY7QUQwQlk7RUFDRSxhQUFBO0FDeEJkO0FENEJZO0VBQ0Usc0JBQUE7QUMxQmQ7QURnQ007O0VHeEtKLGlCRGtDcUI7QUQwR3ZCO0FEa0NRO0VBQ0UsbURBQUE7QUNoQ1Y7QURtQ1E7RUFDRSwwQ0FBQTtFQUNBLFVBQUE7QUNqQ1Y7QURzQ0k7O0VBRUUsc0JBQUE7QUNwQ047QURxQ007O0VBQ0UsYUFBQTtBQ2xDUjtBRzlHSTtFSjBKRTtJQUNFLFlFdktjO0VEK0hwQjtBQUNGO0FHdkdJO0VKeUpFO0lBQ0UsUUFBQTtFQy9DTjtFRGtETTtJQUNFLFFBQUE7RUNoRFI7RURtREk7O0lHM05KLGNINk4rQjtFQ2pEL0I7RURvRE07O0lBRUUsY0FBQTtFQ2xEUjtFRG9ETTtJQUNFLFFBQUE7RUNsRFI7QUFDRjtBRzFISTtFSnVMRTtJQUNFLFFBQUE7RUMxRE47RUQ2RE07SUFDRSxRQUFBO0VDM0RSO0VEOERJOztJR3pQSixjSDJQK0I7RUM1RC9CO0FBQ0Y7QURpRUE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QUR5REE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QURpRUE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QUR5REE7RUFDRTtJQUNFLFVBQUE7RUMvREY7RURpRUE7SUFDRSxVQUFBO0VDL0RGO0FBQ0Y7QURrRUE7RUFDRTtJQUNFLHVCQUFBO1lBQUEsZUFBQTtFQ2hFRjtBQUNGO0FJcE9BOzs7Ozs7Ozs7MkZBQUE7QUFxQkU7RUZOQSxjRU8yQjtBSjJON0I7QUl2Tkk7RUZSRixXQUFBO0VBQ0EsWUQ2Qm9CO0FEcU10QjtBSXRORTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUhha0I7RUdabEIsWUFBQTtBSndOSjtBSW5OVTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FKcU5aO0FJcE5ZOztFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUp1TmQ7QUV2T0k7RUFDRSxXQUFBO0VBQ0EsZ1RBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJFaUJ1QztFRmhCdkMsWUVnQnVDO0VGZnZDLFdFZXVDO0VGZHZDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZ5T047QUV0T007RUFDRSx3QkFBQTtBRndPUjtBSS9OUTtFQUNFLGFBQUE7QUppT1Y7QUkzTkk7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx1REFBQTtBSjZOTjtBSW5TQTs7Ozs7Ozs7OzJGQUFBO0FBcUJFO0VGTkEsY0VPMkI7QUowUjdCO0FJdFJJO0VGUkYsV0FBQTtFQUNBLFlENkJvQjtBRG9RdEI7QUlyUkU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSx1REFBQTtFQUNBLFlIYWtCO0VHWmxCLFlBQUE7QUp1Uko7QUlsUlU7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBSm9SWjtBSW5SWTs7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FKc1JkO0FFdFNJO0VBQ0UsV0FBQTtFQUNBLGdUQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCRWlCdUM7RUZoQnZDLFlFZ0J1QztFRmZ2QyxXRWV1QztFRmR2QyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FGd1NOO0FFclNNO0VBQ0Usd0JBQUE7QUZ1U1I7QUk5UlE7RUFDRSxhQUFBO0FKZ1NWO0FJMVJJO0VBQ0UsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsdURBQUE7QUo0Uk4iLCJmaWxlIjoidmVydGljYWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgRmlsZSBOYW1lOiB2ZXJ0aWNhbC1tZW51LnNjc3NcclxuICAgIERlc2NyaXB0aW9uOiBBIGNsYXNzaWMgdmVydGljYWwgbW9kZXJuIHN0eWxlIG1lbnUgd2l0aCBleHBhbmQgYW5kIGNvbGxvcHMgc3VwcG9ydC4gSXQgc3VwcG9ydFxyXG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZsaXBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcclxuICAgIGl0ZW0gc2VwYXJhdGlvbi5cclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gIFZlcnRpY2FsIG1lbnVcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi52ZXJ0aWNhbC1sYXlvdXQge1xyXG4gICYudmVydGljYWwtbWVudS1tb2Rlcm4ge1xyXG4gICAgLm1haW4tbWVudSB7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGJhY2tncm91bmQgMHM7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBsaSA+IGEgc3ZnLFxyXG4gICAgICAgID4gbGkgPiBhIGkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWItbWVudSBpY29uIHNpemVcclxuICAgICAgICAubWVudS1jb250ZW50IHtcclxuICAgICAgICAgID4gbGkgPiBhIHN2ZyxcclxuICAgICAgICAgID4gbGkgPiBhIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNDVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1ZlcnRpY2FsIG1lbnUgW0V4cGFuZGVkXVxyXG4gICAgJi5tZW51LWV4cGFuZGVkIHtcclxuICAgICAgLy8gTWFpbiBtZW51IGV4cGFuZGVkXHJcbiAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgID4gaSxcclxuICAgICAgICAgICAgICA+IHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KCRmb250LXNpemUtYmFzZSArIDAuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vQ29udGVudCBleHBhbmRlZFxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1ZlcnRpY2FsIG1lbnUgW0NvbGxhcHNlZF1cclxuICAgICYubWVudS1jb2xsYXBzZWQge1xyXG4gICAgICAvL05hdmJhciBjb2xsYXBzZWRcclxuICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVudS1uYXZiYXItd2lkdGgoJG1lbnUtY29sbGFwc2VkLXdpZHRoKTtcclxuICAgICAgICAgIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmV4cGFuZGVkIHtcclxuICAgICAgICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAubW9kZXJuLW5hdi10b2dnbGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeGVkLXRvcCBuYXZiYXIgd2hlbiBtZW51LWNvbGxhcHNlZFxyXG4gICAgICAgICYuZml4ZWQtdG9wLFxyXG4gICAgICAgICYuZmxvYXRpbmctbmF2IHtcclxuICAgICAgICAgIGxlZnQ6ICRtZW51LWNvbGxhcHNlZC13aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gTWFpbiBtZW51IGNvbGxhcHNlZFxyXG4gICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICB3aWR0aDogJG1lbnUtY29sbGFwc2VkLXdpZHRoO1xyXG5cclxuICAgICAgICAubmF2YmFyLWhlYWRlciAuYnJhbmQtdGV4dCxcclxuICAgICAgICAubW9kZXJuLW5hdi10b2dnbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdoZW4gbWVudSBpcyBjb2xsYXBzZWQgYW5kIG1vdXNlIGlzIG5vdCBob3ZlcmVkIG92ZXIgbWVudVxyXG4gICAgICAgICY6bm90KC5leHBhbmRlZCkge1xyXG4gICAgICAgICAgLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuMnJlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODVyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2aWdhdGlvbiBsaSB7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXaGVuIG1lbnUgaXMgY29sbGFwc2VkIGJ1dCBtb3VzZSBpcyBob3ZlcmVkIG92ZXIgbWVudVxyXG4gICAgICAgICYuZXhwYW5kZWQge1xyXG4gICAgICAgICAgd2lkdGg6ICRtZW51LWV4cGFuZGVkLXdpZHRoO1xyXG4gICAgICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdmJhci1oZWFkZXIgLmJyYW5kLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9kZXJuLW5hdi10b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTmF2aWdhdGlvbiBjb2xsYXBzZWRcclxuICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgID4gbGkubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vQnJhbmQgY2VudGVyIGNvbnRlbnQgY29sbGFwc2VkXHJcbiAgICAgIC5hcHAtY29udGVudCxcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKCRtZW51LWNvbGxhcHNlZC13aWR0aCk7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlci1uYXZiYXIge1xyXG4gICAgICAgIC8vIEZsb2F0aW5nLW5hdmJhclxyXG4gICAgICAgICYuZmxvYXRpbmctbmF2IHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA0LjRyZW0gLSA3NHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTmF2YmFyLXN0YXRpYy10b3BcclxuICAgICAgICAmLm5hdmJhci1zdGF0aWMtdG9wIHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA3NHB4KTtcclxuICAgICAgICAgIGxlZnQ6IDc0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZ2dsZS1pY29uLFxyXG4gICAgLmNvbGxhcHNlLXRvZ2dsZS1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjQyNXJlbTtcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBsZyBhbmQgdXAgc2NyZWVuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAudmVydGljYWwtbGF5b3V0IHtcclxuICAgICYudmVydGljYWwtbWVudS1tb2Rlcm4ge1xyXG4gICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxseSBtZW51ICYgY29udGVudCB3aWR0aCBmb3IgbWQgYW5kIGRvd24gc2NyZWVuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihsZykge1xyXG4gIC52ZXJ0aWNhbC1sYXlvdXQge1xyXG4gICAgJi52ZXJ0aWNhbC1tZW51LW1vZGVybiB7XHJcbiAgICAgIC8vIG5vdCB1c2luZyB0aGlzIGNsYXNzIGluIGJlbG93IDwgOTkyXHJcbiAgICAgIC5tYWluLW1lbnUge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVudCxcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWFpbi1tZW51LXdpZHRoKDApO1xyXG4gICAgICB9XHJcbiAgICAgICYubWVudS1jb2xsYXBzZWQge1xyXG4gICAgICAgIC5hcHAtY29udGVudCxcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGx5IG1lbnUgJiBjb250ZW50IHdpZHRoIGZvciBzbSBhbmQgZG93biBzY3JlZW5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgLnZlcnRpY2FsLWxheW91dCB7XHJcbiAgICAmLnZlcnRpY2FsLW1lbnUtbW9kZXJuIHtcclxuICAgICAgLy8gbm90IHVzaW5nIHRoaXMgY2xhc3MgPDk5MlxyXG4gICAgICAubWFpbi1tZW51IHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIHtcclxuICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRlbnQsXHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1haW4tbWVudS13aWR0aCgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi8vIElFIFNwZWNpZmljIENTU1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xyXG4gIC52ZXJ0aWNhbC1tZW51LW1vZGVybi52ZXJ0aWNhbC1sYXlvdXQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHNwYW4ge1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG4vLyBJbXBvcnQgdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3MgZm9yIHNtYWxsIHNjcmVlbiBzdXBwb3J0XHJcbkBpbXBvcnQgJ3ZlcnRpY2FsLW92ZXJsYXktbWVudS5zY3NzJztcclxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtbWVudS5zY3NzXG4gICAgRGVzY3JpcHRpb246IEEgY2xhc3NpYyB2ZXJ0aWNhbCBtb2Rlcm4gc3R5bGUgbWVudSB3aXRoIGV4cGFuZCBhbmQgY29sbG9wcyBzdXBwb3J0LiBJdCBzdXBwb3J0XG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZsaXBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcbiAgICBpdGVtIHNlcGFyYXRpb24uXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxuICAgIEF1dGhvcjogUElYSU5WRU5UXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUge1xuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBiYWNrZ3JvdW5kIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgc3ZnLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhIGkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXNpemU6IDEuNDVyZW07XG4gIG1hcmdpbi1yaWdodDogMS4xcmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiAubWVudS1jb250ZW50ID4gbGkgPiBhIHN2Zyxcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLm1haW4tbWVudSAubmF2aWdhdGlvbiAubWVudS1jb250ZW50ID4gbGkgPiBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEuNDVyZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogMTFweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAubWFpbi1tZW51IHtcbiAgd2lkdGg6IDI2MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtZXhwYW5kZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGk6YmVmb3JlLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBzdmc6YmVmb3JlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxLjQ1cmVtO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjFyZW07XG4gIGhlaWdodDogMS4xcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWV4cGFuZGVkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24gbGkuaGFzLXN1Yi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1leHBhbmRlZCAuZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubmF2YmFyIC5uYXZiYXItaGVhZGVyIC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIuZXhwYW5kZWQge1xuICB3aWR0aDogMjYwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIuZXhwYW5kZWQgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIuZml4ZWQtdG9wLCAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5uYXZiYXIuZmxvYXRpbmctbmF2IHtcbiAgbGVmdDogODBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZiYXItaGVhZGVyIC5icmFuZC10ZXh0LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5tb2Rlcm4tbmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24taGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIuMnJlbTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudTpub3QoLmV4cGFuZGVkKSAubmF2aWdhdGlvbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMjg1cmVtO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51Om5vdCguZXhwYW5kZWQpIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnU6bm90KC5leHBhbmRlZCkgLm5hdmlnYXRpb24gbGkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogIzU2NTY1Njtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCB7XG4gIHdpZHRoOiAyNjBweDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudS5leHBhbmRlZCAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmlnYXRpb24gbGkuaGFzLXN1YiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzZlNmI3Yicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzkgMTggMTUgMTIgOSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51LmV4cGFuZGVkIC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIub3Blbjpub3QoLm1lbnUtaXRlbS1jbG9zaW5nKSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm5hdmJhci1oZWFkZXIgLmJyYW5kLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUuZXhwYW5kZWQgLm1vZGVybi1uYXYtdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUgLm5hdmlnYXRpb24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpLm5hdmlnYXRpb24taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAubWFpbi1tZW51IC5uYXZpZ2F0aW9uID4gbGkgPiBhIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmFwcC1jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5oZWFkZXItbmF2YmFyLmZsb2F0aW5nLW5hdiB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA0LjRyZW0gLSA3NHB4KTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmhlYWRlci1uYXZiYXIubmF2YmFyLXN0YXRpYy10b3Age1xuICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gNzRweCk7XG4gIGxlZnQ6IDc0cHg7XG59XG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC50b2dnbGUtaWNvbixcbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbGxhcHNlLXRvZ2dsZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjQyNXJlbTtcbn1cbi52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLnRvZ2dsZS1pY29uOmZvY3VzLFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAuY29sbGFwc2UtdG9nZ2xlLWljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4ubWVudS1jb2xsYXBzZWQgLmFwcC1jb250ZW50LFxuLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybi5tZW51LWNvbGxhcHNlZCAuZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuLm1lbnUtY29sbGFwc2VkIC5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnZlcnRpY2FsLWxheW91dC52ZXJ0aWNhbC1tZW51LW1vZGVybiAubWFpbi1tZW51IHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAudmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC52ZXJ0aWNhbC1sYXlvdXQudmVydGljYWwtbWVudS1tb2Rlcm4gLmNvbnRlbnQsXG4udmVydGljYWwtbGF5b3V0LnZlcnRpY2FsLW1lbnUtbW9kZXJuIC5mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gIC52ZXJ0aWNhbC1tZW51LW1vZGVybi52ZXJ0aWNhbC1sYXlvdXQgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHNwYW4ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcbiAgICBEZXNjcmlwdGlvbjogQSBvdmVybGF5IHN0eWxlIHZlcnRpY2FsIG1lbnUgd2l0aCBzaG93IGFuZCBoaWRlIHN1cHBvcnQuIEl0IHN1cHBvcnRcbiAgICBsaWdodCAmIGRhcmsgdmVyc2lvbiwgZmlscHBlZCBsYXlvdXQsIHJpZ2h0IHNpZGUgaWNvbnMsIG5hdGl2ZSBzY3JvbGwgYW5kIGJvcmRlcnMgbWVudVxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcbiAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm5hdmJhciAubmF2YmFyLWhlYWRlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG59XG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUsIC52ZXJ0aWNhbC1vdmVybGF5LW1lbnUubWVudS1oaWRlIC5tYWluLW1lbnUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICB3aWR0aDogMjYwcHg7XG4gIGxlZnQ6IC0yNjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2Zyxcbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlIGFsbDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiA+IGxpID4gYSA+IHN2ZzpiZWZvcmUsXG4udmVydGljYWwtb3ZlcmxheS1tZW51IC5tYWluLW1lbnUgLm5hdmlnYXRpb24gPiBsaSA+IGEgPiBpOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIGxpLmhhcy1zdWIgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjM2ZTZiN2InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cbi52ZXJ0aWNhbC1vdmVybGF5LW1lbnUgLm1haW4tbWVudSAubmF2aWdhdGlvbiBsaS5oYXMtc3ViLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudSAubWFpbi1tZW51IC5uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWhlYWRlciAuZmVhdGhlci1tb3JlLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLW92ZXJsYXktbWVudS5tZW51LW9wZW4gLm1haW4tbWVudSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjYwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xufSIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gY29tcG9uZW50IHZhcmlhYmxlXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBXQVJOSU5HOiBQTEVBU0UgRE8gTk9UIENIQU5HRSBUSElTIFZBUklBQkxFIEZJTEUuXHJcbi8vICBUSElTIEZJTEUgV0lMTCBHRVQgT1ZFUldSSVRURU4gV0lUSCBFQUNIIFZVRVhZIEhUTUwgVEVNUExBVEUgUkVMRUFTRS5cclxuLy8gIFRJUDpcclxuLy8gIFdlIHN1Z2dlc3QgeW91IHRvIHVzZSB0aGlzIChhc3NldHMvc2Nzcy92YXJpYWJsZXMvX3ZhcmlhYmxlcy1jb21wb25lbnRzLnNjc3MpIGZpbGUgZm9yIG92ZXJyaWRpbmcgY29tcG9uZW50cyB2YXJpYWJsZXMuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRiYXNlLWZvbnQtc2l6ZTogMTRweCAhZGVmYXVsdDtcclxuJGJvZHktZGlyZWN0aW9uOiBsdHIgIWRlZmF1bHQ7IC8vIERlZmF1bHQgbHRyLCBjaGFuZ2UgaXQgdG8gcnRsIGZvciBSaWdodCBUbyBMZWZ0IHN1cHBvcnQuXHJcbiRjb250ZW50LXBhZGRpbmc6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIENvbG9yc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRuYXYtY29tcG9uZW50LWJvcmRlci1jb2xvcjogI2RkZCAhZGVmYXVsdDtcclxuXHJcbiRzd2lwZXItYmc6ICNmMmY0ZjQgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIE5hdmJhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiRuYXZiYXItaGVpZ2h0OiA0LjQ1cmVtICFkZWZhdWx0O1xyXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogNC40NXJlbSAhZGVmYXVsdDtcclxuJGZvb3Rlci1oZWlnaHQ6IDMuMzVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIE1haW4gTWVudVxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vL21haW4gbWVudSBkYXJrXHJcbiRtZW51LWRhcmstY29sb3I6ICNkY2RjZGMgIWRlZmF1bHQ7XHJcbiRtZW51LWRhcmstYmctY29sb3I6ICMxMDE2M2EgIWRlZmF1bHQ7XHJcblxyXG4kbWVudS1wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4ICFkZWZhdWx0O1xyXG4kbWVudS1zZWNvbmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggMjBweCAhZGVmYXVsdDtcclxuJG1lbnUtdGhpcmQtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcclxuJG1lbnUtZm9ydGgtbGV2ZWwtcGFkZGluZzogMTBweCAxNXB4IDEwcHggNTNweCAhZGVmYXVsdDtcclxuXHJcbi8vIHZlcnRpY2FsIG1lbnVcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xyXG4kbWVudS1jb2xsYXBzZWQtd2lkdGg6IDgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIFNpZGViYXJcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHNpZGViYXItd2lkdGg6IDI2MHB4ICFkZWZhdWx0O1xyXG4kY2hhdC1zaWRlYmFyLXdpZHRoOiAzNjBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAgIEF2YXRhclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGF2YXRhci1zaXplOiAzMnB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXN0YXR1cy1zaXplOiAxMXB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXN0YXR1cy1zaXplLWxnOiAxN3B4ICFkZWZhdWx0O1xyXG5cclxuJGF2YXRhci1zaXplLXhsOiA3MHB4ICFkZWZhdWx0O1xyXG4kYXZhdGFyLXNpemUtbGc6IDUwcHggIWRlZmF1bHQ7XHJcbiRhdmF0YXItc2l6ZS1zbTogMjRweCAhZGVmYXVsdDtcclxuXHJcbiRhdmF0YXItYmc6ICNjM2MzYzM7XHJcbiRhdmF0YXItZ3JvdXAtYm9yZGVyOiAkd2hpdGU7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgUHJvZ3Jlc3NcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJHByb2dyZXNzLXNpemUteGw6IDEuMTRyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLWxnOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLXNpemUtbWQ6IDAuNTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1zaXplLXNtOiAwLjE0M3JlbSAhZGVmYXVsdDtcclxuXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBGb3JtXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAkaW5wdXQtaGVpZ2h0LCAkaW5wdXQtaGVpZ2h0LWxnLCAkaW5wdXQtaGVpZ2h0LXNtIGFyZSBpbiB2YXJpYWJsZXNcclxuJGZvbnQtc2l6ZS14czogMC43NXJlbSAhZGVmYXVsdDtcclxuJGZvbnQtc2l6ZS14bDogKCRmb250LXNpemUtYmFzZSArIDAuNSkgIWRlZmF1bHQ7XHJcbiRsaW5lLWhlaWdodC14bDogMS43ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQteHM6IDEuNSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteS14bDogMC41cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14LXhsOiAwLjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LXhzOiAwLjJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgteHM6IDAuMjc1cmVtICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci1yYWRpdXMteGw6IDAuMzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXhzOiAwLjEycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy14bDogJGJvcmRlci1yYWRpdXMteGwgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXhzOiAkYm9yZGVyLXJhZGl1cy14cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1oZWlnaHQteGw6ICgoJGZvbnQtc2l6ZS14bCAqICRsaW5lLWhlaWdodC14bCkgKyAoJGlucHV0LXBhZGRpbmcteS14bCAqIDIpKSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC14czogKCgkZm9udC1zaXplLXhzICogJGxpbmUtaGVpZ2h0LXhzKSArICgkaW5wdXQtcGFkZGluZy15LXhzICogMikpICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XHJcblxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgQmxhbmsgUGFnZSBCZyBDb2xvclxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJsYW5rLWJnLWNvbG9yOiAjZWZmMmY3ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIERhdGEgVGFibGVzIEJnIENvbG9yXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZGF0YXRhYmxlLWJnLWNvbG9yOiAjZjhmOGY4ICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFN3aXRjaFxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kc3dpdGNoLWJnLWNvbG9yOiAjZTJlMmUyICFkZWZhdWx0O1xyXG4kc3dpdGNoLWluZGljYXRvci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIFRpbWVsaW5lXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiR0aW1lbGluZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtcG9pbnQtc2l6ZTogMS43NXJlbSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci1zaXplOiAxMnB4ICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtcG9pbnQtaW5kaWNhdG9yLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHRpbWVsaW5lLXBvaW50LWluZGljYXRvci13cmFwcGVyLXNpemU6IDIwcHggIWRlZmF1bHQ7XHJcblxyXG4kdGltZWxpbmUtaXRlbS1taW4taGVpZ2h0OiA0cmVtICFkZWZhdWx0O1xyXG4kdGltZWxpbmUtaXRlbS1pY29uLWZvbnQtc2l6ZTogMC44NXJlbSAhZGVmYXVsdDtcclxuXHJcbiR0aW1lbGluZS1ldmVudC10aW1lLXNpemU6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiR0aW1lbGluZS1ldmVudC10aW1lLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZpbGUgTmFtZTogbWFpbi1tZW51LW1peGluLnNjc3NcclxuLy8gRGVzY3JpcHRpb246IENvbW1vbiBtaXhpbiBmb3IgbWVudXMsIGNvbnRhaW4gZGFyayBhbmQgbGlnaHQgdmVyc2lvbiBzY3NzLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gSGVhZGVyIG5hdmJhciBjb250ZW50IGFuZCBicmFuZCBleHBhbmRlZCAmIGNvbGxhcHNlZCBzdGF0c1xyXG4vLyBzcGFjaW5nIGFuZCBzaXppbmcuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gTWl4aW5zIGZvciB0aGUgbWVudSBhbmQgbmF2YmFyIHBvc2l0aW9uLCBtYXJnaW4gYW5kIHdpZHRoIGNoYW5nZVxyXG5AbWl4aW4gbWFpbi1tZW51LXdpZHRoKCRtZW51LXdpZHRoKSB7XHJcbiAgbWFyZ2luLWxlZnQ6ICRtZW51LXdpZHRoO1xyXG59XHJcbkBtaXhpbiBtZW51LW5hdmJhci13aWR0aCgkbWVudS13aWR0aCkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAkbWVudS13aWR0aDtcclxufVxyXG4vLyBNaXhpbnMgZm9yIHRoZSBtZW51IHNob3cgaGlkZSBiYXNlZCBvbiB3aWR0aFxyXG5AbWl4aW4gdmVydGljYWwtbWVudS10cmFuc2Zvcm0tc2hvdygkdHJhbnNmb3JtLXdpZHRoKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkdHJhbnNmb3JtLXdpZHRoLCAwLCAwKTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XHJcbn1cclxuQG1peGluIHZlcnRpY2FsLW1lbnUtdHJhbnNmb3JtLWhpZGUoKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxufVxyXG5cclxuLy8gTWl4aW5zIGZvciB0aGUgc3ViIG1lbnUgYXJyb3dcclxuQG1peGluIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygkYXJyb3ctZm9udC1zaXplKSB7XHJcbiAgJi5oYXMtc3ViIHtcclxuICAgID4gYTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tcmlnaHQsICdjdXJyZW50Q29sb3InLCAkYm9keS1jb2xvciksICcjJywgJyUyMycpKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6ICRhcnJvdy1mb250LXNpemU7XHJcbiAgICAgIGhlaWdodDogJGFycm93LWZvbnQtc2l6ZTtcclxuICAgICAgd2lkdGg6ICRhcnJvdy1mb250LXNpemU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjBweDtcclxuICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAmLm9wZW46bm90KC5tZW51LWl0ZW0tY2xvc2luZykge1xyXG4gICAgICA+IGE6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBVc2VkIGZvciBhcHBzXHJcbkBtaXhpbiBjb250ZW50LWFyZWEtd3JhcHBlci1oZWlnaHQoXHJcbiAgJGNvbnRlbnRQYWRkaW5nOiAwcmVtLFxyXG4gICRuYXZiYXJIZWlnaHQ6IDByZW0sXHJcbiAgJGZvb3RlckhlaWdodDogMHJlbSxcclxuICAkZmxvYXRpbmdOYXZNYXJnaW46IDByZW0sXHJcbiAgJGhvcml6b250YWxNZW51SGVpZ2h0OiAwcmVtLFxyXG4gICRzcGFjaW5nU2lkZXM6IDEsXHJcbiAgJGhvcml6b250YWxMYXlvdXQ6IGZhbHNlXHJcbikge1xyXG4gIGhlaWdodDogY2FsYyhcclxuICAgIDEwMHZoIC1cclxuICAgICAgY2FsYyhcclxuICAgICAgICBjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAqICN7JHNwYWNpbmdTaWRlc30pICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gKyAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgKVxyXG4gICk7XHJcbiAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgdmFyKC0tdmgsIDF2aCkgKiAxMDAgLVxyXG4gICAgICBjYWxjKFxyXG4gICAgICAgIGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSArICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICApXHJcbiAgKTtcclxuICAvLyByZXNwb25zaXZlIHNpemUgaGVpZ2h0XHJcbiAgQGlmICRob3Jpem9udGFsTGF5b3V0IHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihsZykge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoXHJcbiAgICAgICAgMTAwdmggLSBjYWxjKGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gLSAwLjhyZW0pICogI3skc3BhY2luZ1NpZGVzfSkgKyAjeyRuYXZiYXJIZWlnaHR9ICsgI3skZm9vdGVySGVpZ2h0fSlcclxuICAgICAgKTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cclxuICAgICAgICAgIGNhbGMoY2FsYyhjYWxjKCN7JGNvbnRlbnRQYWRkaW5nfSAtIDAuOHJlbSkgKiAjeyRzcGFjaW5nU2lkZXN9KSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhzKSB7XHJcbiAgICAgIGhlaWdodDogY2FsYyhcclxuICAgICAgICAxMDB2aCAtXHJcbiAgICAgICAgICBjYWxjKFxyXG4gICAgICAgICAgICBjYWxjKGNhbGMoI3skY29udGVudFBhZGRpbmd9ICogI3skc3BhY2luZ1NpZGVzfSkgLSBjYWxjKDAuOHJlbSAqICN7JHNwYWNpbmdTaWRlc30pKSArICN7JG5hdmJhckhlaWdodH0gKyAjeyRmb290ZXJIZWlnaHR9ICtcclxuICAgICAgICAgICAgICAjeyRmbG9hdGluZ05hdk1hcmdpbn0gKyAjeyRob3Jpem9udGFsTWVudUhlaWdodH1cclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKFxyXG4gICAgICAgIHZhcigtLXZoLCAxdmgpICogMTAwIC1cclxuICAgICAgICAgIGNhbGMoXHJcbiAgICAgICAgICAgIGNhbGMoY2FsYygjeyRjb250ZW50UGFkZGluZ30gKiAjeyRzcGFjaW5nU2lkZXN9KSAtIGNhbGMoMC44cmVtICogI3skc3BhY2luZ1NpZGVzfSkpICsgI3skbmF2YmFySGVpZ2h0fSArICN7JGZvb3RlckhlaWdodH0gK1xyXG4gICAgICAgICAgICAgICN7JGZsb2F0aW5nTmF2TWFyZ2lufSArICN7JGhvcml6b250YWxNZW51SGVpZ2h0fVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGlnaHQgJiBEYXJrIG1lbnUgbWl4aW5cclxuLy8gJHRoZW1lLWNvbG9yIDogTWVudSB0ZXh0IGNvbG9yXHJcbi8vICR0aGVtZS1iZyAgICA6IE1lbnUgYmFja2dyb3VuZCBjb2xvclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuQG1peGluIG1lbnUtdGhlbWUoJHRoZW1lLWNvbG9yLCAkdGhlbWUtYmcpIHtcclxuICAkbWFpbi1tZW51LXRvcC1vcGVuLWNvbG9yOiBkYXJrZW4oJHRoZW1lLWNvbG9yLCAxMCUpO1xyXG4gICRtYWluLW1lbnUtdG9wLW9wZW4taG92ZXItYmc6IGRhcmtlbigkdGhlbWUtYmcsIDYlKTtcclxuICAkbWFpbi1tZW51LXRvcC1vcGVuLWhlYWQtYmc6IGRhcmtlbigkdGhlbWUtYmcsIDQlKTtcclxuXHJcbiAgJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc6IGRhcmtlbigkdGhlbWUtYmcsIDQlKTsgLy8kcHJpbWFyeVxyXG5cclxuICAkbWFpbi1tZW51LXN1Yi1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICRtYWluLW1lbnUtc3ViLWhvdmVyLWNvbG9yOiBsaWdodGVuKCR0aGVtZS1jb2xvciwgNCUpO1xyXG5cclxuICAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcblxyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWJnO1xyXG5cclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtYmc7XHJcbiAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICBjb2xvcjogbGlnaHRlbigkdGhlbWUtY29sb3IsIDIxLjUlKTtcclxuICAgICAgbWFyZ2luOiBjYWxjKCN7JGNvbnRlbnQtcGFkZGluZ30gKyAwLjI4NnJlbSkgMCAwLjhyZW0gKCRjb250ZW50LXBhZGRpbmcgKyAwLjJyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAmLmhhcy1zdWIge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLCBiYWNrZ3JvdW5kIDBzLCBjb2xvciAwcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbigkdGhlbWUtY29sb3IsIDQuOSUpO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtZW51LXBhZGRpbmc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcblxyXG4gICAgICAgIHNwYW4ubWVudS1zdWItdGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJHRoZW1lLWNvbG9yLCAzMCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVudSBJdGVtIEhvdmVyIEFuaW1hdGlvblxyXG4gICAgbGkubmF2LWl0ZW0ge1xyXG4gICAgICBhOmhvdmVyID4gKiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgIH1cclxuICAgICAgdWwubWVudS1jb250ZW50IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBhOmhvdmVyID4gKiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IGxpIHtcclxuICAgICAgPiBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGksXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICA+IHVsIGxpIHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm5vdCguaGFzLXN1Yikge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGFzLXN1YiB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IHVsID4gbGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5vcGVuOm5vdCgubWVudS1pdGVtLWNsb3NpbmcpLFxyXG4gICAgICAmLnNpZGViYXItZ3JvdXAtYWN0aXZlIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLW1lbnUtdG9wLW9wZW4tY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1vcGVuLWhlYWQtYmc7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgub3Blbikge1xyXG4gICAgICAgID4gdWwge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjcpO1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1vcGVuLWhvdmVyLWJnO1xyXG5cclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ob3ZlcixcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG1haW4tbWVudS10b3AtYWN0aXZlLWhlYWQtYmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogJG1lbnUtc2Vjb25kLWxldmVsLXBhZGRpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICRtZW51LXRoaXJkLWxldmVsLXBhZGRpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhhcy1zdWIge1xyXG4gICAgICAgICAgJjpub3QoLm9wZW4pIHtcclxuICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wZW4sXHJcbiAgICAgICAgLnNpZGViYXItZ3JvdXAtYWN0aXZlIHtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1tZW51LXN1Yi1vcGVuLWNvbG9yO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1tZW51LXRvcC1hY3RpdmUtaGVhZC1iZztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9mb3IgMnJkIGxldmVsIG1lbnVcclxuICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLy9mb3IgM3JkIGxldmVsIG1lbnVcclxuICAgICAgICAgICAgLm9wZW4ge1xyXG4gICAgICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaG92ZXIsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW4tbWVudS1zdWItaG92ZXItY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMThkZWcsIHJnYmEoJHByaW1hcnksIDEpLCByZ2JhKCRwcmltYXJ5LCAwLjcpKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKCRwcmltYXJ5LCAwLjcpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIE1lbnUgY29udGVudCBkaXNwbGF5IG1peGluXHJcbi8vICRtZW51LWV4cGFuZGVkLXdpZHRoIDogRXhwYW5kZWQgbWVudSB3aWR0aFxyXG4vLyAkbWVudS1jb2xsYXBzZWQtd2lkdGg6IENvbGxhcHNlZCBtZW51IHdpZHRoXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AbWl4aW4gbWVudS1jb250ZW50KCRtZW51LWV4cGFuZGVkLXdpZHRoLCAkbWVudS1jb2xsYXBzZWQtd2lkdGgsICR0aGVtZS1jb2xvciwgJHRoZW1lLWJnKSB7XHJcbiAgLm1haW4tbWVudS1jb250ZW50IHtcclxuICAgID4gc3Bhbi5tZW51LXRpdGxlLFxyXG4gICAgYS5tZW51LXRpdGxlIHtcclxuICAgICAgcmlnaHQ6IC0oJG1lbnUtZXhwYW5kZWQtd2lkdGgpO1xyXG4gICAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgPiB1bC5tZW51LWNvbnRlbnQge1xyXG4gICAgICBsZWZ0OiAkbWVudS1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICAgIHdpZHRoOiAkbWVudS1leHBhbmRlZC13aWR0aDtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cztcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAycHggcmdiYSgkYmxhY2ssIDAuMSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKCRibGFjaywgMC4yKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKCRibGFjaywgMC4wMik7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHZlcnRpY2FsLW1lbnUtaGFzLXN1Yi1hcnJvdygxcmVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEZpbGUgTmFtZTogdmVydGljYWwtb3ZlcmxheS1tZW51LnNjc3NcclxuICAgIERlc2NyaXB0aW9uOiBBIG92ZXJsYXkgc3R5bGUgdmVydGljYWwgbWVudSB3aXRoIHNob3cgYW5kIGhpZGUgc3VwcG9ydC4gSXQgc3VwcG9ydFxyXG4gICAgbGlnaHQgJiBkYXJrIHZlcnNpb24sIGZpbHBwZWQgbGF5b3V0LCByaWdodCBzaWRlIGljb25zLCBuYXRpdmUgc2Nyb2xsIGFuZCBib3JkZXJzIG1lbnVcclxuICAgIGl0ZW0gc2VwZXJhdGlvbi5cclxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4gICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9ib290c3RyYXAtZXh0ZW5kZWQvaW5jbHVkZSc7IC8vIEJvb3RzdHJhcCBpbmNsdWRlc1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyBJbXBvcnQgZmlyc3QgbWFpbiBtZW51IG1peGluXHJcbkBpbXBvcnQgJy4uLy4uL21peGlucy9tYWluLW1lbnUtbWl4aW4nO1xyXG5cclxuLy8gVmVydGljYWwgT3ZlcmxheSBNZW51XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4udmVydGljYWwtb3ZlcmxheS1tZW51IHtcclxuICAvL0NvbnRlbnQgZXhwYW5kZWRcclxuICAuY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBtYWluLW1lbnUtd2lkdGgoMCk7XHJcbiAgfVxyXG4gIC8vTmF2YmFyIGV4cGFuZGVkXHJcbiAgLm5hdmJhciB7XHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIEBpbmNsdWRlIG1lbnUtbmF2YmFyLXdpZHRoKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gTWFpbiBtZW51IGV4cGFuZGVkXHJcbiAgLm1haW4tbWVudSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB3aWR0aDogJG1lbnUtZXhwYW5kZWQtd2lkdGg7XHJcbiAgICBsZWZ0OiAtKCRtZW51LWV4cGFuZGVkLXdpZHRoKTtcclxuXHJcbiAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgID4gbGkge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICA+IHN2ZyxcclxuICAgICAgICAgID4gaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQyOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdmVydGljYWwtbWVudS1oYXMtc3ViLWFycm93KDFyZW0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2aWdhdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIC5mZWF0aGVyLW1vcmUtaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLm1lbnUtb3BlbiB7XHJcbiAgICAubWFpbi1tZW51IHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkbWVudS1leHBhbmRlZC13aWR0aCwgMCwgMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYubWVudS1oaWRlIHtcclxuICAgIC5tYWluLW1lbnUge1xyXG4gICAgICBAZXh0ZW5kIC5tYWluLW1lbnU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 28477:
/*!***********************************************************!*\
  !*** ./src/app/layout/vertical/vertical-layout.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutModule": function() { return /* binding */ VerticalLayoutModule; }
/* harmony export */ });
/* harmony import */ var D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 65960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common.module */ 41705);
/* harmony import */ var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components */ 76200);
/* harmony import */ var app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/navbar/navbar.module */ 72625);
/* harmony import */ var app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/components/content/content.module */ 16294);
/* harmony import */ var app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/components/menu/menu.module */ 54735);
/* harmony import */ var app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/components/footer/footer.module */ 32004);
/* harmony import */ var app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/vertical/vertical-layout.component */ 32923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);










var VerticalLayoutModule = function VerticalLayoutModule() {
  (0,D_desarrollo_spring_boot_java_8_WorkSpaceAsedInfo_asedinfo_sistema_ASEDINFO_FRONTEND_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerticalLayoutModule);
};

VerticalLayoutModule.ɵfac = function VerticalLayoutModule_Factory(t) {
  return new (t || VerticalLayoutModule)();
};

VerticalLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: VerticalLayoutModule
});
VerticalLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](VerticalLayoutModule, {
    declarations: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_7__.VerticalLayoutComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_components__WEBPACK_IMPORTED_MODULE_2__.CoreSidebarModule, app_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavbarModule, app_layout_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__.MenuModule, app_layout_components_content_content_module__WEBPACK_IMPORTED_MODULE_4__.ContentModule, app_layout_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__.FooterModule],
    exports: [app_layout_vertical_vertical_layout_component__WEBPACK_IMPORTED_MODULE_7__.VerticalLayoutComponent]
  });
})();

/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false,
  hmr: false,
  prefijoApp: "SEG",
  //url_seguridad: 'http://localhost:8080/seguridad-servicios',
  //url_seguridad: 'http://localhost:8080/asedinfo-servicios',
  url_seguridad: 'https://spring.asedinfo.com/asedinfo-servicios' //url_catalogo: 'http://localhost:8080/catalogo-servicios',

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5590:
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hmrBootstrap": function() { return /* binding */ hmrBootstrap; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ 77431);


var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
  var ngModule;
  module.hot.accept();
  bootstrap().then(function (mod) {
    return ngModule = mod;
  });
  module.hot.dispose(function () {
    var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef);
    var elements = appRef.components.map(function (c) {
      return c.location.nativeElement;
    });
    var makeVisible = (0,_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__.createNewHosts)(elements);
    ngModule.destroy();
    makeVisible();
  });
};

/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmr */ 5590);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}

var bootstrap = function bootstrap() {
  return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
};

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.hmr) {
  if (false) {} else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap().catch(function (err) {
    return console.log(err);
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(90271); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map