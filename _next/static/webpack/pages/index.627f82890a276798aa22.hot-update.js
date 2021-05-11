self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/HomePage */ "./src/components/home/HomePage.tsx");
/* harmony import */ var _components_technologyStack_TechnologyStackPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/technologyStack/TechnologyStackPage */ "./src/components/technologyStack/TechnologyStackPage.tsx");
/* harmony import */ var _components_portifolio_PortfolioPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/portifolio/PortfolioPage */ "./src/components/portifolio/PortfolioPage.tsx");
/* harmony import */ var _components_about_AboutPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/AboutPage */ "./src/components/about/AboutPage.tsx");
/* harmony import */ var _components_footer_FooterPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/FooterPage */ "./src/components/footer/FooterPage.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Home = function Home() {
  _s();

  var scrollToRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_HomePage__WEBPACK_IMPORTED_MODULE_2__.default, {
      onClickRef: function onClickRef() {
        return scrollToRef.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technologyStack_TechnologyStackPage__WEBPACK_IMPORTED_MODULE_3__.default, {
      scrollToRef: scrollToRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portifolio_PortfolioPage__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_AboutPage__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_FooterPage__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(Home, "dtn5KPl5gGK3UWc+d/93XgkkRgQ=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwic2Nyb2xsVG9SZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUU1QixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUVBLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsOERBQUQ7QUFBVSxnQkFBVSxFQUFFO0FBQUEsZUFBTUQsV0FBVyxDQUFDRSxPQUFaLENBQW9CQyxjQUFwQixDQUFtQztBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBbkMsQ0FBTjtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLG9GQUFEO0FBQXFCLGlCQUFXLEVBQUVKO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQUdDLDhEQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQUlDLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRCxlQUtDLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRDtBQUFBLGtCQUREO0FBU0EsQ0FiRDs7R0FBTUQsSTs7S0FBQUEsSTtBQWVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyN2Y4Mjg5MGEyNzY3OThhYTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL0hvbWVQYWdlXCI7XG5pbXBvcnQgVGVjaG5vbG9neVN0YWNrUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy90ZWNobm9sb2d5U3RhY2svVGVjaG5vbG9neVN0YWNrUGFnZVwiO1xuaW1wb3J0IFBvcnRmb2xpb1BhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9ydGlmb2xpby9Qb3J0Zm9saW9QYWdlXCI7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0L0Fib3V0UGFnZVwiO1xuaW1wb3J0IEZvb3RlclBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3RlclBhZ2VcIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG5cblx0Y29uc3Qgc2Nyb2xsVG9SZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhvbWVQYWdlIG9uQ2xpY2tSZWY9eygpID0+IHNjcm9sbFRvUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX0gLz5cblx0XHRcdDxUZWNobm9sb2d5U3RhY2tQYWdlIHNjcm9sbFRvUmVmPXtzY3JvbGxUb1JlZn0gLz5cblx0XHRcdDxQb3J0Zm9saW9QYWdlIC8+XG5cdFx0XHQ8QWJvdXRQYWdlIC8+XG5cdFx0XHQ8Rm9vdGVyUGFnZSAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=