self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/scrollToTop/ScrollToTop.tsx":
/*!****************************************************!*\
  !*** ./src/components/scrollToTop/ScrollToTop.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scrolltotop_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrolltotop.module.scss */ "./src/components/scrollToTop/scrolltotop.module.scss");
/* harmony import */ var _scrolltotop_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scrolltotop_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/hooks */ "./src/utils/hooks.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\components\\scrollToTop\\ScrollToTop.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ScrollToTop = function ScrollToTop(_ref) {
  _s();

  var scrollRef = _ref.scrollRef;

  var _usePageScroll = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.usePageScroll)(),
      handleScroll = _usePageScroll.handleScroll,
      pageScrolled = _usePageScroll.pageScrolled;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", function () {
        return handleScroll;
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "".concat((_scrolltotop_module_scss__WEBPACK_IMPORTED_MODULE_3___default().scrollToTopIcon), " ").concat(pageScrolled ? (_scrolltotop_module_scss__WEBPACK_IMPORTED_MODULE_3___default().scrolled) : ""),
    onClick: function onClick() {
      return scrollRef.current.scrollIntoView({
        behavior: "smooth"
      });
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_s(ScrollToTop, "8YYsES5Kr/c/QQJsQeYFpahnfAU=", false, function () {
  return [_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.usePageScroll];
});

_c = ScrollToTop;
/* harmony default export */ __webpack_exports__["default"] = (ScrollToTop);

var _c;

$RefreshReg$(_c, "ScrollToTop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2Nyb2xsVG9Ub3AvU2Nyb2xsVG9Ub3AudHN4Il0sIm5hbWVzIjpbIlNjcm9sbFRvVG9wIiwic2Nyb2xsUmVmIiwidXNlUGFnZVNjcm9sbCIsImhhbmRsZVNjcm9sbCIsInBhZ2VTY3JvbGxlZCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTs7QUFPQSxJQUFNQSxXQUF1QyxHQUFHLFNBQTFDQSxXQUEwQyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsdUJBRTNCQywyREFBYSxFQUZjO0FBQUEsTUFFMURDLFlBRjBELGtCQUUxREEsWUFGMEQ7QUFBQSxNQUU1Q0MsWUFGNEMsa0JBRTVDQSxZQUY0Qzs7QUFJbEVDLGtEQUFTLENBQUMsWUFBTTtBQUNmQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNaRyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDO0FBQUEsZUFBTUwsWUFBTjtBQUFBLE9BQXJDO0FBQ0EsS0FGRDtBQUdBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDQztBQUNDLGFBQVMsWUFBS00saUZBQUwsY0FBK0JMLFlBQVksR0FBR0ssMEVBQUgsR0FBcUIsRUFBaEUsQ0FEVjtBQUVDLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsY0FBbEIsQ0FBaUM7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQWpDLENBQU47QUFBQSxLQUZWO0FBQUEsMkJBSUMsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVFBLENBbkJEOztHQUFNWixXO1VBRWtDRSx1RDs7O0tBRmxDRixXO0FBcUJOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4MWRmNzg4NmRkZTQ2Mzg3NzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2Nyb2xsdG90b3AubW9kdWxlLnNjc3NcIjtcblxuaW1wb3J0IEFycm93VXBXYXJkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkXCI7XG5cbmltcG9ydCB7IHVzZVBhZ2VTY3JvbGwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaG9va3NcIjtcblxudHlwZSBTY3JvbGxUb1RvcFByb3BzID0ge1xuXHRvblNjcm9sbDogKCkgPT4gdm9pZFxuXHRwYWdlU2Nyb2xsZWQ6IGJvb2xlYW5cbn1cblxuY29uc3QgU2Nyb2xsVG9Ub3A6IFJlYWN0LkZDPFNjcm9sbFRvVG9wUHJvcHM+ID0gKHsgc2Nyb2xsUmVmIH0pID0+IHtcblxuXHRjb25zdCB7IGhhbmRsZVNjcm9sbCwgcGFnZVNjcm9sbGVkIH0gPSB1c2VQYWdlU2Nyb2xsKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiBoYW5kbGVTY3JvbGwpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLnNjcm9sbFRvVG9wSWNvbn0gJHtwYWdlU2Nyb2xsZWQgPyBzdHlsZXMuc2Nyb2xsZWQgOiBcIlwifWB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pfVxuXHRcdD5cblx0XHRcdDxBcnJvd1VwV2FyZEljb24gLz5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvVG9wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==