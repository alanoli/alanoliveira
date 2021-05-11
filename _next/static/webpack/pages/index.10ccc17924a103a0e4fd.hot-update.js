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
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ThemeContext */ "./src/contexts/ThemeContext.tsx");
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.module.scss */ "./src/components/home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
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

  var _useThemeContext = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.useThemeContext)(),
      theme = _useThemeContext.theme;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var _useTypeWriter = useTypeWriter(),
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
    className: "".concat((_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().homeRoot), " ").concat(theme === _utils_enums__WEBPACK_IMPORTED_MODULE_6__.Themes.DARK ? (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dark) : ""),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_TopBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().homeContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().introText),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "home-title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "home-subtitle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_HomeLandingAnimation__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bottomLearnMore),
        onClick: onClickRef,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: t("aboutWhatIDo")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().expandIcon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 61,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, _this);
};

_s(HomePage, "u8YSmNWLTP/rcHu19uIAYdZ1FXo=", true, function () {
  return [_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.useThemeContext, react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9Ib21lUGFnZS50c3giXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJvbkNsaWNrUmVmIiwidXNlU3RhdGUiLCJwYWdlU2Nyb2xsZWQiLCJzZXRQYWdlU2Nyb2xsZWQiLCJ0b3BSZWYiLCJ1c2VSZWYiLCJ1c2VUaGVtZUNvbnRleHQiLCJ0aGVtZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VUeXBlV3JpdGVyIiwidHlwZVdyaXRlciIsImhhbmRsZVNjcm9sbCIsIm9mZnNldCIsIndpbmRvdyIsInNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxhbmd1YWdlIiwic3R5bGVzIiwiVGhlbWVzIiwiZXhwYW5kSWNvbiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsT0FBb0I7QUFBQTs7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLGtCQUVyQkMsK0NBQVEsQ0FBQyxLQUFELENBRmE7QUFBQSxNQUV0REMsWUFGc0Q7QUFBQSxNQUV4Q0MsZUFGd0M7O0FBRzdELE1BQU1DLE1BQU0sR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXJCOztBQUg2RCx5QkFLM0NDLHVFQUFlLEVBTDRCO0FBQUEsTUFLckRDLEtBTHFELG9CQUtyREEsS0FMcUQ7O0FBQUEsd0JBTXpDQyw2REFBYyxFQU4yQjtBQUFBLE1BTXJEQyxDQU5xRCxtQkFNckRBLENBTnFEO0FBQUEsTUFNbERDLElBTmtELG1CQU1sREEsSUFOa0Q7O0FBQUEsdUJBT3RDQyxhQUFhLEVBUHlCO0FBQUEsTUFPckRDLFVBUHFELGtCQU9yREEsVUFQcUQ7O0FBUzdELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUIsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQXRCOztBQUNBLFFBQUlGLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ25CWCxxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBLEtBRkQsTUFFTztBQUNOQSxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBO0FBQ0QsR0FQRDs7QUFTQWMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZMLGNBQVUsQ0FBQ0gsQ0FBQyxDQUFDLGVBQUQsQ0FBRixFQUFxQixZQUFyQixFQUFtQztBQUFBLGFBQU1HLFVBQVUsQ0FBQ0gsQ0FBQyxDQUFDLGVBQUQsQ0FBRixFQUFxQixlQUFyQixFQUFzQyxFQUF0QyxDQUFoQjtBQUFBLEtBQW5DLENBQVY7QUFFQU0sVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsWUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWkUsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQztBQUFBLGVBQU1OLFlBQU47QUFBQSxPQUFyQztBQUNBLEtBRkQ7QUFHQSxHQVBRLEVBT04sQ0FBQ0gsSUFBSSxDQUFDVSxRQUFOLENBUE0sQ0FBVDtBQVVBLHNCQUNDO0FBQUssT0FBRyxFQUFFaEIsTUFBVjtBQUFrQixhQUFTLFlBQUtpQixtRUFBTCxjQUF3QmQsS0FBSyxLQUFLZSxxREFBVixHQUF3QkQsK0RBQXhCLEdBQXNDLEVBQTlELENBQTNCO0FBQUEsNEJBQ0MsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBSyxlQUFTLEVBQUVBLHNFQUFoQjtBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsb0VBQWhCO0FBQUEsZ0NBQ0M7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUksbUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFLQyw4REFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQsZUFNQztBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUF3QyxlQUFPLEVBQUVyQixVQUFqRDtBQUFBLGdDQUNDO0FBQUEsb0JBQUlTLENBQUMsQ0FBQyxjQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDLDhEQUFDLGtFQUFEO0FBQWdCLG1CQUFTLEVBQUVZLHFFQUFpQkU7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRCxlQWFDLDhEQUFDLHdFQUFEO0FBQ0MsY0FBUSxFQUFFO0FBQUEsZUFBTW5CLE1BQU0sQ0FBQ29CLE9BQVAsQ0FBZUMsY0FBZixDQUE4QjtBQUFFQyxrQkFBUSxFQUFFO0FBQVosU0FBOUIsQ0FBTjtBQUFBLE9BRFg7QUFFQyxrQkFBWSxFQUFFeEI7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvQkEsQ0FoREQ7O0dBQU1ILFE7VUFLYU8sbUUsRUFDRUUseUQ7OztLQU5mVCxRO0FBa0ROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEwY2NjMTc5MjRhMTAzYTBlNGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBUb3BCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9tZS9Ub3BCYXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zY3JvbGxUb1RvcC9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IEhvbWVMYW5kaW5nQW5pbWF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvbWUvSG9tZUxhbmRpbmdBbmltYXRpb25cIjtcblxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmltcG9ydCB7IHVzZVRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gXCIuLi8uLi91dGlscy9lbnVtc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgSG9tZVBhZ2VQcm9wcyA9IHtcblx0b25DbGlja1JlZjogKCkgPT4gdm9pZFxufVxuXG5jb25zdCBIb21lUGFnZTogUmVhY3QuRkM8SG9tZVBhZ2VQcm9wcz4gPSAoeyBvbkNsaWNrUmVmIH0pID0+IHtcblxuXHRjb25zdCBbcGFnZVNjcm9sbGVkLCBzZXRQYWdlU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB0b3BSZWYgPSB1c2VSZWYobnVsbCk7XG5cblx0Y29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWVDb250ZXh0KCk7XG5cdGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblx0Y29uc3QgeyB0eXBlV3JpdGVyIH0gPSB1c2VUeXBlV3JpdGVyKCk7XG5cblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGNvbnN0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xuXHRcdGlmIChvZmZzZXQgPj0gMTAwMCkge1xuXHRcdFx0c2V0UGFnZVNjcm9sbGVkKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRQYWdlU2Nyb2xsZWQoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHR5cGVXcml0ZXIodChcImhvbWVTZW50ZW5jZTFcIiksIFwiaG9tZS10aXRsZVwiLCAoKSA9PiB0eXBlV3JpdGVyKHQoXCJob21lU2VudGVuY2UyXCIpLCBcImhvbWUtc3VidGl0bGVcIiwgXCJcIikpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gaGFuZGxlU2Nyb2xsKTtcblx0XHR9O1xuXHR9LCBbaTE4bi5sYW5ndWFnZV0pO1xuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHJlZj17dG9wUmVmfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5ob21lUm9vdH0gJHt0aGVtZSA9PT0gVGhlbWVzLkRBUksgPyBzdHlsZXMuZGFyayA6IFwiXCJ9YH0+XG5cdFx0XHQ8VG9wQmFyIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250ZW50fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb1RleHR9PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJob21lLXRpdGxlXCI+PC9oMT5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiaG9tZS1zdWJ0aXRsZVwiPjwvaDI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8SG9tZUxhbmRpbmdBbmltYXRpb24gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21MZWFybk1vcmV9IG9uQ2xpY2s9e29uQ2xpY2tSZWZ9PlxuXHRcdFx0XHRcdDxwPnt0KFwiYWJvdXRXaGF0SURvXCIpfTwvcD5cblx0XHRcdFx0XHQ8RXhwYW5kTW9yZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuZXhwYW5kSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxTY3JvbGxUb1RvcFxuXHRcdFx0XHRvblNjcm9sbD17KCkgPT4gdG9wUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX1cblx0XHRcdFx0cGFnZVNjcm9sbGVkPXtwYWdlU2Nyb2xsZWR9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==