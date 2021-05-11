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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      pageScrolled = _useState[0],
      setPageScrolled = _useState[1];

  var topRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useThemeContext = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext)(),
      theme = _useThemeContext.theme;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var _useTypeWriter = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useTypeWriter)(),
      typeWriter = _useTypeWriter.typeWriter;

  var handleScroll = function handleScroll() {
    var offset = window.scrollY;

    if (offset >= 1000) {
      setPageScrolled(true);
    } else {
      setPageScrolled(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    typeWriter(t("homeSentence1"), "home-title", function () {
      return typeWriter(t("homeSentence2"), "home-subtitle", "");
    });
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", function () {
        return handleScroll;
      });
    };
  }, [i18n.language]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    ref: topRef,
    className: "".concat((_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().homeRoot), " ").concat(theme === _utils_enums__WEBPACK_IMPORTED_MODULE_7__.Themes.DARK ? (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dark) : ""),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().homeContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().introText),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "home-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "home-subtitle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_HomeLandingAnimation__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bottomLearnMore),
        onClick: onClickRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: t("aboutWhatIDo")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().expandIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__.default, {
      onScroll: function onScroll() {
        return topRef.current.scrollIntoView({
          behavior: "smooth"
        });
      },
      pageScrolled: pageScrolled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 3
  }, _this);
};

_s(HomePage, "u8YSmNWLTP/rcHu19uIAYdZ1FXo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50c3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJvbkNsaWNrUmVmIiwidXNlU3RhdGUiLCJwYWdlU2Nyb2xsZWQiLCJzZXRQYWdlU2Nyb2xsZWQiLCJ0b3BSZWYiLCJ1c2VSZWYiLCJ1c2VUaGVtZUNvbnRleHQiLCJ0aGVtZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VUeXBlV3JpdGVyIiwidHlwZVdyaXRlciIsImhhbmRsZVNjcm9sbCIsIm9mZnNldCIsIndpbmRvdyIsInNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxhbmd1YWdlIiwic3R5bGVzIiwiVGhlbWVzIiwiZXhwYW5kSWNvbiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUVyQkMsK0NBQVEsQ0FBQyxLQUFELENBRmE7QUFBQSxNQUV0REMsWUFGc0Q7QUFBQSxNQUV4Q0MsZUFGd0M7O0FBRzdELE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXJCOztBQUg2RCx5QkFLM0NDLHVFQUFlLEVBTDRCO0FBQUEsTUFLckRDLEtBTHFELG9CQUtyREEsS0FMcUQ7O0FBQUEsd0JBTXpDQyw2REFBYyxFQU4yQjtBQUFBLE1BTXJEQyxDQU5xRCxtQkFNckRBLENBTnFEO0FBQUEsTUFNbERDLElBTmtELG1CQU1sREEsSUFOa0Q7O0FBQUEsdUJBT3RDQywyREFBYSxFQVB5QjtBQUFBLE1BT3JEQyxVQVBxRCxrQkFPckRBLFVBUHFEOztBQVM3RCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUF0Qjs7QUFDQSxRQUFJRixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNuQlgscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQSxLQUZELE1BRU87QUFDTkEscUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQTtBQUNELEdBUEQ7O0FBU0FjLGtEQUFTLENBQUMsWUFBTTtBQUNmTCxjQUFVLENBQUNILENBQUMsQ0FBQyxlQUFELENBQUYsRUFBcUIsWUFBckIsRUFBbUM7QUFBQSxhQUFNRyxVQUFVLENBQUNILENBQUMsQ0FBQyxlQUFELENBQUYsRUFBcUIsZUFBckIsRUFBc0MsRUFBdEMsQ0FBaEI7QUFBQSxLQUFuQyxDQUFWO0FBRUFNLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NMLFlBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1pFLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUM7QUFBQSxlQUFNTixZQUFOO0FBQUEsT0FBckM7QUFDQSxLQUZEO0FBR0EsR0FQUSxFQU9OLENBQUNILElBQUksQ0FBQ1UsUUFBTixDQVBNLENBQVQ7QUFTQSxzQkFDQztBQUFLLE9BQUcsRUFBRWhCLE1BQVY7QUFBa0IsYUFBUyxZQUFLaUIsbUVBQUwsY0FBd0JkLEtBQUssS0FBS2UscURBQVYsR0FBd0JELCtEQUF4QixHQUFzQyxFQUE5RCxDQUEzQjtBQUFBLDRCQUNDLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVBLG9FQUFoQjtBQUFBLGdDQUNDO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBS0MsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBTUM7QUFBSyxpQkFBUyxFQUFFQSwwRUFBaEI7QUFBd0MsZUFBTyxFQUFFckIsVUFBakQ7QUFBQSxnQ0FDQztBQUFBLG9CQUFJUyxDQUFDLENBQUMsY0FBRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQyw4REFBQyxtRUFBRDtBQUFnQixtQkFBUyxFQUFFWSxxRUFBaUJFO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFhQyw4REFBQyx3RUFBRDtBQUNDLGNBQVEsRUFBRTtBQUFBLGVBQU1uQixNQUFNLENBQUNvQixPQUFQLENBQWVDLGNBQWYsQ0FBOEI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTlCLENBQU47QUFBQSxPQURYO0FBRUMsa0JBQVksRUFBRXhCO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0JBLENBL0NEOztHQUFNSCxRO1VBS2FPLG1FLEVBQ0VFLHlELEVBQ0dHLHVEOzs7S0FQbEJaLFE7QUFpRE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzliM2JmMzU0NzQ1MDBiN2M5M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1RvcEJhclwiO1xuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Njcm9sbFRvVG9wL1Njcm9sbFRvVG9wXCI7XG5pbXBvcnQgSG9tZUxhbmRpbmdBbmltYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ib21lTGFuZGluZ0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5cbmltcG9ydCB7IHVzZVR5cGVXcml0ZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaG9va3NcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgeyB1c2VUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZW51bXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIEhvbWVQYWdlUHJvcHMgPSB7XG5cdG9uQ2xpY2tSZWY6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDPEhvbWVQYWdlUHJvcHM+ID0gKHsgb25DbGlja1JlZiB9KSA9PiB7XG5cblx0Y29uc3QgW3BhZ2VTY3JvbGxlZCwgc2V0UGFnZVNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdG9wUmVmID0gdXNlUmVmKG51bGwpO1xuXG5cdGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lQ29udGV4dCgpO1xuXHRjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cdGNvbnN0IHsgdHlwZVdyaXRlciB9ID0gdXNlVHlwZVdyaXRlcigpO1xuXG5cdGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblx0XHRjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRpZiAob2Zmc2V0ID49IDEwMDApIHtcblx0XHRcdHNldFBhZ2VTY3JvbGxlZCh0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0UGFnZVNjcm9sbGVkKGZhbHNlKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHR0eXBlV3JpdGVyKHQoXCJob21lU2VudGVuY2UxXCIpLCBcImhvbWUtdGl0bGVcIiwgKCkgPT4gdHlwZVdyaXRlcih0KFwiaG9tZVNlbnRlbmNlMlwiKSwgXCJob21lLXN1YnRpdGxlXCIsIFwiXCIpKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IGhhbmRsZVNjcm9sbCk7XG5cdFx0fTtcblx0fSwgW2kxOG4ubGFuZ3VhZ2VdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgcmVmPXt0b3BSZWZ9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhvbWVSb290fSAke3RoZW1lID09PSBUaGVtZXMuREFSSyA/IHN0eWxlcy5kYXJrIDogXCJcIn1gfT5cblx0XHRcdDxUb3BCYXIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUNvbnRlbnR9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvVGV4dH0+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhvbWUtdGl0bGVcIj48L2gxPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJob21lLXN1YnRpdGxlXCI+PC9oMj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxIb21lTGFuZGluZ0FuaW1hdGlvbiAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbUxlYXJuTW9yZX0gb25DbGljaz17b25DbGlja1JlZn0+XG5cdFx0XHRcdFx0PHA+e3QoXCJhYm91dFdoYXRJRG9cIil9PC9wPlxuXHRcdFx0XHRcdDxFeHBhbmRNb3JlSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5leHBhbmRJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PFNjcm9sbFRvVG9wXG5cdFx0XHRcdG9uU2Nyb2xsPXsoKSA9PiB0b3BSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pfVxuXHRcdFx0XHRwYWdlU2Nyb2xsZWQ9e3BhZ2VTY3JvbGxlZH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9