self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/HomePage.tsx":
/*!******************************************!*\
  !*** ./src/components/home/HomePage.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_home_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/TopBar */ "./src/components/home/TopBar.tsx");
/* harmony import */ var _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/scrollToTop/ScrollToTop */ "./src/components/scrollToTop/ScrollToTop.tsx");
/* harmony import */ var _components_home_HomeLandingAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/home/HomeLandingAnimation */ "./src/components/home/HomeLandingAnimation.tsx");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/hooks */ "./src/utils/hooks.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ThemeContext */ "./src/contexts/ThemeContext.tsx");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.module.scss */ "./src/components/home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\components\\home\\HomePage.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var HomePage = function HomePage(_ref) {
  _s();

  var onClickRef = _ref.onClickRef;
  var topRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useThemeContext = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext)(),
      theme = _useThemeContext.theme;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var _useTypeWriter = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useTypeWriter)(),
      typeWriter = _useTypeWriter.typeWriter;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    typeWriter(t("homeSentence1"), "home-title", function () {
      return typeWriter(t("homeSentence2"), "home-subtitle", "");
    }); // window.addEventListener("scroll", handleScroll);
    // return () => {
    // 	window.removeEventListener("scroll", () => handleScroll);
    // };
  }, [i18n.language]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: topRef,
    className: "".concat((_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().homeRoot), " ").concat(theme === _utils_enums__WEBPACK_IMPORTED_MODULE_7__.Themes.DARK ? (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dark) : ""),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().homeContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().introText),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "home-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "home-subtitle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_HomeLandingAnimation__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bottomLearnMore),
        onClick: onClickRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: t("aboutWhatIDo")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().expandIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__.default, {
      onScroll: function onScroll() {
        return topRef.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, _this);
};

_s(HomePage, "7vM/8Q9qADjHI63QiGrRgMso5HU=", false, function () {
  return [_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext, react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useTypeWriter];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50c3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJvbkNsaWNrUmVmIiwidG9wUmVmIiwidXNlUmVmIiwidXNlVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlVHlwZVdyaXRlciIsInR5cGVXcml0ZXIiLCJ1c2VFZmZlY3QiLCJsYW5ndWFnZSIsInN0eWxlcyIsIlRoZW1lcyIsImV4cGFuZEljb24iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUU3RCxNQUFNQyxNQUFNLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFyQjs7QUFGNkQseUJBSTNDQyx1RUFBZSxFQUo0QjtBQUFBLE1BSXJEQyxLQUpxRCxvQkFJckRBLEtBSnFEOztBQUFBLHdCQUt6Q0MsNkRBQWMsRUFMMkI7QUFBQSxNQUtyREMsQ0FMcUQsbUJBS3JEQSxDQUxxRDtBQUFBLE1BS2xEQyxJQUxrRCxtQkFLbERBLElBTGtEOztBQUFBLHVCQU90Q0MsMkRBQWEsRUFQeUI7QUFBQSxNQU9yREMsVUFQcUQsa0JBT3JEQSxVQVBxRDs7QUFTN0RDLGtEQUFTLENBQUMsWUFBTTtBQUNmRCxjQUFVLENBQUNILENBQUMsQ0FBQyxlQUFELENBQUYsRUFBcUIsWUFBckIsRUFBbUM7QUFBQSxhQUFNRyxVQUFVLENBQUNILENBQUMsQ0FBQyxlQUFELENBQUYsRUFBcUIsZUFBckIsRUFBc0MsRUFBdEMsQ0FBaEI7QUFBQSxLQUFuQyxDQUFWLENBRGUsQ0FHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUFEsRUFPTixDQUFDQyxJQUFJLENBQUNJLFFBQU4sQ0FQTSxDQUFUO0FBU0Esc0JBQ0M7QUFBSyxPQUFHLEVBQUVWLE1BQVY7QUFBa0IsYUFBUyxZQUFLVyxtRUFBTCxjQUF3QlIsS0FBSyxLQUFLUyxxREFBVixHQUF3QkQsK0RBQXhCLEdBQXNDLEVBQTlELENBQTNCO0FBQUEsNEJBQ0MsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsb0VBQWhCO0FBQUEsZ0NBQ0M7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFLQyw4REFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQsZUFNQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUF3QyxlQUFPLEVBQUVaLFVBQWpEO0FBQUEsZ0NBQ0M7QUFBQSxvQkFBSU0sQ0FBQyxDQUFDLGNBQUQ7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMsOERBQUMsbUVBQUQ7QUFBZ0IsbUJBQVMsRUFBRU0scUVBQWlCRTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZELGVBYUMsOERBQUMsd0VBQUQ7QUFDQyxjQUFRLEVBQUU7QUFBQSxlQUFNYixNQUFNLENBQUNjLE9BQVAsQ0FBZUMsY0FBZixDQUE4QjtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBOUIsQ0FBTjtBQUFBO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBbUJBLENBckNEOztHQUFNbEIsUTtVQUlhSSxtRSxFQUNFRSx5RCxFQUVHRyx1RDs7O0tBUGxCVCxRO0FBdUNOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkNDViNTM4MzllMGZhYWE0MTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ub3BCYXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zY3JvbGxUb1RvcC9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IEhvbWVMYW5kaW5nQW5pbWF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvSG9tZUxhbmRpbmdBbmltYXRpb25cIjtcblxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuXG5pbXBvcnQgeyB1c2VUeXBlV3JpdGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hvb2tzXCI7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuaW1wb3J0IHsgdXNlVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2VudW1zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hvbWUubW9kdWxlLnNjc3NcIjtcblxudHlwZSBIb21lUGFnZVByb3BzID0ge1xuXHRvbkNsaWNrUmVmOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IEhvbWVQYWdlOiBSZWFjdC5GQzxIb21lUGFnZVByb3BzPiA9ICh7IG9uQ2xpY2tSZWYgfSkgPT4ge1xuXG5cdGNvbnN0IHRvcFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHRjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZUNvbnRleHQoKTtcblx0Y29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG5cdGNvbnN0IHsgdHlwZVdyaXRlciB9ID0gdXNlVHlwZVdyaXRlcigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0dHlwZVdyaXRlcih0KFwiaG9tZVNlbnRlbmNlMVwiKSwgXCJob21lLXRpdGxlXCIsICgpID0+IHR5cGVXcml0ZXIodChcImhvbWVTZW50ZW5jZTJcIiksIFwiaG9tZS1zdWJ0aXRsZVwiLCBcIlwiKSk7XG5cblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXHRcdC8vIHJldHVybiAoKSA9PiB7XG5cdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwpO1xuXHRcdC8vIH07XG5cdH0sIFtpMThuLmxhbmd1YWdlXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHJlZj17dG9wUmVmfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5ob21lUm9vdH0gJHt0aGVtZSA9PT0gVGhlbWVzLkRBUksgPyBzdHlsZXMuZGFyayA6IFwiXCJ9YH0+XG5cdFx0XHQ8VG9wQmFyIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250ZW50fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb1RleHR9PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJob21lLXRpdGxlXCI+PC9oMT5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiaG9tZS1zdWJ0aXRsZVwiPjwvaDI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8SG9tZUxhbmRpbmdBbmltYXRpb24gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21MZWFybk1vcmV9IG9uQ2xpY2s9e29uQ2xpY2tSZWZ9PlxuXHRcdFx0XHRcdDxwPnt0KFwiYWJvdXRXaGF0SURvXCIpfTwvcD5cblx0XHRcdFx0XHQ8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZXhwYW5kSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxTY3JvbGxUb1RvcFxuXHRcdFx0XHRvblNjcm9sbD17KCkgPT4gdG9wUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9