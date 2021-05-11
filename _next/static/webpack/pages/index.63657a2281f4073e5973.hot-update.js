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

  var _usePageScroll = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.usePageScroll)(),
      handleScroll = _usePageScroll.handleScroll,
      pageScrolled = _usePageScroll.pageScrolled;

  var _useTypeWriter = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useTypeWriter)(),
      typeWriter = _useTypeWriter.typeWriter;

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
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().homeContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().introText),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "home-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "home-subtitle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_HomeLandingAnimation__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bottomLearnMore),
        onClick: onClickRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: t("aboutWhatIDo")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().expandIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 54,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, _this);
};

_s(HomePage, "yDkweOr5dqVZTpYSyDmSlsZ7hU8=", false, function () {
  return [_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_6__.useThemeContext, react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation, _utils_hooks__WEBPACK_IMPORTED_MODULE_5__.usePageScroll, _utils_hooks__WEBPACK_IMPORTED_MODULE_5__.useTypeWriter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50c3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJvbkNsaWNrUmVmIiwidG9wUmVmIiwidXNlUmVmIiwidXNlVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlUGFnZVNjcm9sbCIsImhhbmRsZVNjcm9sbCIsInBhZ2VTY3JvbGxlZCIsInVzZVR5cGVXcml0ZXIiLCJ0eXBlV3JpdGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsYW5ndWFnZSIsInN0eWxlcyIsIlRoZW1lcyIsImV4cGFuZEljb24iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUU3RCxNQUFNQyxNQUFNLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUFyQjs7QUFGNkQseUJBSTNDQyx1RUFBZSxFQUo0QjtBQUFBLE1BSXJEQyxLQUpxRCxvQkFJckRBLEtBSnFEOztBQUFBLHdCQUt6Q0MsNkRBQWMsRUFMMkI7QUFBQSxNQUtyREMsQ0FMcUQsbUJBS3JEQSxDQUxxRDtBQUFBLE1BS2xEQyxJQUxrRCxtQkFLbERBLElBTGtEOztBQUFBLHVCQU90QkMsMkRBQWEsRUFQUztBQUFBLE1BT3JEQyxZQVBxRCxrQkFPckRBLFlBUHFEO0FBQUEsTUFPdkNDLFlBUHVDLGtCQU92Q0EsWUFQdUM7O0FBQUEsdUJBUXRDQywyREFBYSxFQVJ5QjtBQUFBLE1BUXJEQyxVQVJxRCxrQkFRckRBLFVBUnFEOztBQVU3REMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZELGNBQVUsQ0FBQ04sQ0FBQyxDQUFDLGVBQUQsQ0FBRixFQUFxQixZQUFyQixFQUFtQztBQUFBLGFBQU1NLFVBQVUsQ0FBQ04sQ0FBQyxDQUFDLGVBQUQsQ0FBRixFQUFxQixlQUFyQixFQUFzQyxFQUF0QyxDQUFoQjtBQUFBLEtBQW5DLENBQVY7QUFFQVEsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sWUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWkssWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQztBQUFBLGVBQU1QLFlBQU47QUFBQSxPQUFyQztBQUNBLEtBRkQ7QUFHQSxHQVBRLEVBT04sQ0FBQ0YsSUFBSSxDQUFDVSxRQUFOLENBUE0sQ0FBVDtBQVNBLHNCQUNDO0FBQUssT0FBRyxFQUFFaEIsTUFBVjtBQUFrQixhQUFTLFlBQUtpQixtRUFBTCxjQUF3QmQsS0FBSyxLQUFLZSxxREFBVixHQUF3QkQsK0RBQXhCLEdBQXNDLEVBQTlELENBQTNCO0FBQUEsNEJBQ0MsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsb0VBQWhCO0FBQUEsZ0NBQ0M7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFLQyw4REFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQsZUFNQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUF3QyxlQUFPLEVBQUVsQixVQUFqRDtBQUFBLGdDQUNDO0FBQUEsb0JBQUlNLENBQUMsQ0FBQyxjQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLG1FQUFEO0FBQWdCLG1CQUFTLEVBQUVZLHFFQUFpQkU7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQWFDLDhEQUFDLHdFQUFEO0FBQ0MsY0FBUSxFQUFFO0FBQUEsZUFBTW5CLE1BQU0sQ0FBQ29CLE9BQVAsQ0FBZUMsY0FBZixDQUE4QjtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBOUIsQ0FBTjtBQUFBLE9BRFg7QUFFQyxrQkFBWSxFQUFFYjtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW9CQSxDQXZDRDs7R0FBTVgsUTtVQUlhSSxtRSxFQUNFRSx5RCxFQUVtQkcsdUQsRUFDaEJHLHVEOzs7S0FSbEJaLFE7QUF5Q04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjM2NTdhMjI4MWY0MDczZTU5NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob21lL1RvcEJhclwiO1xuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Njcm9sbFRvVG9wL1Njcm9sbFRvVG9wXCI7XG5pbXBvcnQgSG9tZUxhbmRpbmdBbmltYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ib21lTGFuZGluZ0FuaW1hdGlvblwiO1xuXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5cbmltcG9ydCB7IHVzZVR5cGVXcml0ZXIsIHVzZVBhZ2VTY3JvbGwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaG9va3NcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgeyB1c2VUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZW51bXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIEhvbWVQYWdlUHJvcHMgPSB7XG5cdG9uQ2xpY2tSZWY6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDPEhvbWVQYWdlUHJvcHM+ID0gKHsgb25DbGlja1JlZiB9KSA9PiB7XG5cblx0Y29uc3QgdG9wUmVmID0gdXNlUmVmKG51bGwpO1xuXG5cdGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lQ29udGV4dCgpO1xuXHRjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cblx0Y29uc3QgeyBoYW5kbGVTY3JvbGwsIHBhZ2VTY3JvbGxlZCB9ID0gdXNlUGFnZVNjcm9sbCgpO1xuXHRjb25zdCB7IHR5cGVXcml0ZXIgfSA9IHVzZVR5cGVXcml0ZXIoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHR5cGVXcml0ZXIodChcImhvbWVTZW50ZW5jZTFcIiksIFwiaG9tZS10aXRsZVwiLCAoKSA9PiB0eXBlV3JpdGVyKHQoXCJob21lU2VudGVuY2UyXCIpLCBcImhvbWUtc3VidGl0bGVcIiwgXCJcIikpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gaGFuZGxlU2Nyb2xsKTtcblx0XHR9O1xuXHR9LCBbaTE4bi5sYW5ndWFnZV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiByZWY9e3RvcFJlZn0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuaG9tZVJvb3R9ICR7dGhlbWUgPT09IFRoZW1lcy5EQVJLID8gc3R5bGVzLmRhcmsgOiBcIlwifWB9PlxuXHRcdFx0PFRvcEJhciAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lQ29udGVudH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9UZXh0fT5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaG9tZS10aXRsZVwiPjwvaDE+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImhvbWUtc3VidGl0bGVcIj48L2gyPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEhvbWVMYW5kaW5nQW5pbWF0aW9uIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tTGVhcm5Nb3JlfSBvbkNsaWNrPXtvbkNsaWNrUmVmfT5cblx0XHRcdFx0XHQ8cD57dChcImFib3V0V2hhdElEb1wiKX08L3A+XG5cdFx0XHRcdFx0PEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmV4cGFuZEljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8U2Nyb2xsVG9Ub3Bcblx0XHRcdFx0b25TY3JvbGw9eygpID0+IHRvcFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSl9XG5cdFx0XHRcdHBhZ2VTY3JvbGxlZD17cGFnZVNjcm9sbGVkfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=