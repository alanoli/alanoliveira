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
      scrollRef: topRef
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50c3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJvbkNsaWNrUmVmIiwidG9wUmVmIiwidXNlUmVmIiwidXNlVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlVHlwZVdyaXRlciIsInR5cGVXcml0ZXIiLCJ1c2VFZmZlY3QiLCJsYW5ndWFnZSIsInN0eWxlcyIsIlRoZW1lcyIsImV4cGFuZEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFFN0QsTUFBTUMsTUFBTSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBckI7O0FBRjZELHlCQUkzQ0MsdUVBQWUsRUFKNEI7QUFBQSxNQUlyREMsS0FKcUQsb0JBSXJEQSxLQUpxRDs7QUFBQSx3QkFLekNDLDZEQUFjLEVBTDJCO0FBQUEsTUFLckRDLENBTHFELG1CQUtyREEsQ0FMcUQ7QUFBQSxNQUtsREMsSUFMa0QsbUJBS2xEQSxJQUxrRDs7QUFBQSx1QkFPdENDLDJEQUFhLEVBUHlCO0FBQUEsTUFPckRDLFVBUHFELGtCQU9yREEsVUFQcUQ7O0FBUzdEQyxrREFBUyxDQUFDLFlBQU07QUFDZkQsY0FBVSxDQUFDSCxDQUFDLENBQUMsZUFBRCxDQUFGLEVBQXFCLFlBQXJCLEVBQW1DO0FBQUEsYUFBTUcsVUFBVSxDQUFDSCxDQUFDLENBQUMsZUFBRCxDQUFGLEVBQXFCLGVBQXJCLEVBQXNDLEVBQXRDLENBQWhCO0FBQUEsS0FBbkMsQ0FBVixDQURlLENBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBRLEVBT04sQ0FBQ0MsSUFBSSxDQUFDSSxRQUFOLENBUE0sQ0FBVDtBQVNBLHNCQUNDO0FBQUssT0FBRyxFQUFFVixNQUFWO0FBQWtCLGFBQVMsWUFBS1csbUVBQUwsY0FBd0JSLEtBQUssS0FBS1MscURBQVYsR0FBd0JELCtEQUF4QixHQUFzQyxFQUE5RCxDQUEzQjtBQUFBLDRCQUNDLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLG9FQUFoQjtBQUFBLGdDQUNDO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBS0MsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBTUM7QUFBSyxpQkFBUyxFQUFFQSwwRUFBaEI7QUFBd0MsZUFBTyxFQUFFWixVQUFqRDtBQUFBLGdDQUNDO0FBQUEsb0JBQUlNLENBQUMsQ0FBQyxjQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLG1FQUFEO0FBQWdCLG1CQUFTLEVBQUVNLHFFQUFpQkU7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQWFDLDhEQUFDLHdFQUFEO0FBQWEsZUFBUyxFQUFFYjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0FuQ0Q7O0dBQU1GLFE7VUFJYUksbUUsRUFDRUUseUQsRUFFR0csdUQ7OztLQVBsQlQsUTtBQXFDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZDA4ODU4Y2MyYzhlMDhkNWIzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvVG9wQmFyXCI7XG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2Nyb2xsVG9Ub3AvU2Nyb2xsVG9Ub3BcIjtcbmltcG9ydCBIb21lTGFuZGluZ0FuaW1hdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL0hvbWVMYW5kaW5nQW5pbWF0aW9uXCI7XG5cbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcblxuaW1wb3J0IHsgdXNlVHlwZVdyaXRlciB9IGZyb20gXCIuLi8uLi91dGlscy9ob29rc1wiO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmltcG9ydCB7IHVzZVRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gXCIuLi8uLi91dGlscy9lbnVtc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgSG9tZVBhZ2VQcm9wcyA9IHtcblx0b25DbGlja1JlZjogKCkgPT4gdm9pZFxufVxuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkM8SG9tZVBhZ2VQcm9wcz4gPSAoeyBvbkNsaWNrUmVmIH0pID0+IHtcblxuXHRjb25zdCB0b3BSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0Y29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWVDb250ZXh0KCk7XG5cdGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXHRjb25zdCB7IHR5cGVXcml0ZXIgfSA9IHVzZVR5cGVXcml0ZXIoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHR5cGVXcml0ZXIodChcImhvbWVTZW50ZW5jZTFcIiksIFwiaG9tZS10aXRsZVwiLCAoKSA9PiB0eXBlV3JpdGVyKHQoXCJob21lU2VudGVuY2UyXCIpLCBcImhvbWUtc3VidGl0bGVcIiwgXCJcIikpO1xuXG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHQvLyByZXR1cm4gKCkgPT4ge1xuXHRcdC8vIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gaGFuZGxlU2Nyb2xsKTtcblx0XHQvLyB9O1xuXHR9LCBbaTE4bi5sYW5ndWFnZV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiByZWY9e3RvcFJlZn0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaG9tZVJvb3R9ICR7dGhlbWUgPT09IFRoZW1lcy5EQVJLID8gc3R5bGVzLmRhcmsgOiBcIlwifWB9PlxuXHRcdFx0PFRvcEJhciAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGVudH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9UZXh0fT5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaG9tZS10aXRsZVwiPjwvaDE+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImhvbWUtc3VidGl0bGVcIj48L2gyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEhvbWVMYW5kaW5nQW5pbWF0aW9uIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tTGVhcm5Nb3JlfSBvbkNsaWNrPXtvbkNsaWNrUmVmfT5cblx0XHRcdFx0XHQ8cD57dChcImFib3V0V2hhdElEb1wiKX08L3A+XG5cdFx0XHRcdFx0PEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmV4cGFuZEljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8U2Nyb2xsVG9Ub3Agc2Nyb2xsUmVmPXt0b3BSZWZ9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9