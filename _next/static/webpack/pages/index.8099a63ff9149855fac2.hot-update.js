self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/hooks.tsx":
/*!*****************************!*\
  !*** ./src/utils/hooks.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCopyToClipboard": function() { return /* binding */ useCopyToClipboard; },
/* harmony export */   "useLanguage": function() { return /* binding */ useLanguage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyclipboard.module.scss */ "./src/utils/copyclipboard.module.scss");
/* harmony import */ var _copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\alanc\\Documents\\Projects\\portifolio3\\src\\utils\\hooks.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var useCopyToClipboard = function useCopyToClipboard() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      copyItemVisible = _useState[0],
      setCopyItemVisible = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      copiedText = _useState2[0],
      setCopiedText = _useState2[1];

  var copyToClipboard = function copyToClipboard(copiedText, copiedData) {
    navigator.clipboard.writeText(copiedData);
    setCopiedText(copiedText);
    setCopyItemVisible(true);
    setTimeout(function () {
      return setCopyItemVisible(false);
    }, 3000);
  };

  var CopiedToast = function CopiedToast() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "".concat((_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().copiedItem), " ").concat(copyItemVisible ? (_copyclipboard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : ""),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text",
        children: copiedText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this);
  };

  return {
    copyItemVisible: copyItemVisible,
    copyToClipboard: copyToClipboard,
    CopiedToast: CopiedToast
  };
};

_s(useCopyToClipboard, "pk4DSMbcRIWyJMkVg/eYF1mvrEk=");

var useLanguage = function useLanguage() {
  _s2();

  var languageOptions = [{
    value: "en",
    label: "EN"
  }, {
    value: "pt",
    label: "PT"
  }, {
    value: "es",
    label: "ES"
  }];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    value: "en",
    label: "EN"
  }),
      currentLanguage = _useState3[0],
      setCurrentLanguage = _useState3[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      i18n = _useTranslation.i18n;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    i18n.changeLanguage(currentLanguage.value);
  }, [currentLanguage]);
  return {
    setCurrentLanguage: setCurrentLanguage,
    currentLanguage: currentLanguage,
    languageOptions: languageOptions
  };
};

_s2(useLanguage, "CAhhdikjQUz6sbacuO1gFeJmHRE=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQWFPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBZ0M7QUFBQTs7QUFBQSxrQkFFbkJDLCtDQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFMURDLGVBRjBEO0FBQUEsTUFFekNDLGtCQUZ5Qzs7QUFBQSxtQkFHN0JGLCtDQUFRLENBQUMsRUFBRCxDQUhxQjtBQUFBLE1BRzFERyxVQUgwRDtBQUFBLE1BRzlDQyxhQUg4Qzs7QUFLakUsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRixVQUFELEVBQXFCRyxVQUFyQixFQUE0QztBQUNuRUMsYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QkgsVUFBOUI7QUFDQUYsaUJBQWEsQ0FBQ0QsVUFBRCxDQUFiO0FBQ0FELHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQVEsY0FBVSxDQUFDO0FBQUEsYUFBTVIsa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBLEtBQUQsRUFBa0MsSUFBbEMsQ0FBVjtBQUNBLEdBTEQ7O0FBT0EsTUFBTVMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUNuQyx3QkFDQztBQUFTLGVBQVMsWUFBS0MsOEVBQUwsY0FBMEJYLGVBQWUsR0FBR1csMEVBQUgsR0FBbUIsRUFBNUQsQ0FBbEI7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBLGtCQUFxQlQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUtBLEdBTkQ7O0FBUUEsU0FBTztBQUFFRixtQkFBZSxFQUFmQSxlQUFGO0FBQW1CSSxtQkFBZSxFQUFmQSxlQUFuQjtBQUFvQ00sZUFBVyxFQUFYQTtBQUFwQyxHQUFQO0FBQ0EsQ0FyQk07O0dBQU1aLGtCOztBQXVCTixJQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRWhDLE1BQU1DLGVBQWUsR0FBRyxDQUN2QjtBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FEdUIsRUFFdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBRnVCLEVBR3ZCO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUh1QixDQUF4Qjs7QUFGZ0MsbUJBUWNoQiwrQ0FBUSxDQUFDO0FBQUVlLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUFELENBUnRCO0FBQUEsTUFRekJDLGVBUnlCO0FBQUEsTUFRUkMsa0JBUlE7O0FBQUEsd0JBU2ZDLDZEQUFjLEVBVEM7QUFBQSxNQVN4QkMsSUFUd0IsbUJBU3hCQSxJQVR3Qjs7QUFXaENDLGtEQUFTLENBQUMsWUFBTTtBQUNmRCxRQUFJLENBQUNFLGNBQUwsQ0FBb0JMLGVBQWUsQ0FBQ0YsS0FBcEM7QUFDQSxHQUZRLEVBRU4sQ0FBQ0UsZUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPO0FBQUVDLHNCQUFrQixFQUFsQkEsa0JBQUY7QUFBc0JELG1CQUFlLEVBQWZBLGVBQXRCO0FBQXVDSCxtQkFBZSxFQUFmQTtBQUF2QyxHQUFQO0FBQ0EsQ0FoQk07O0lBQU1ELFc7VUFTS00seUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA5OWE2M2ZmOTE0OTg1NWZhYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3B5Y2xpcGJvYXJkLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgTGFuZ3VhZ2UgPSB7XG5cdHZhbHVlOiBzdHJpbmdcblx0bGFiZWw6IHN0cmluZ1xufVxuXG50eXBlIFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9IHtcblx0Y29weUl0ZW1WaXNpYmxlOiBib29sZWFuXG5cdGNvcHlUb0NsaXBib2FyZDogKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB2b2lkXG5cdENvcGllZFRvYXN0OiBSZWFjdC5GQ1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ29weVRvQ2xpcGJvYXJkID0gKCk6IFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9PiB7XG5cblx0Y29uc3QgW2NvcHlJdGVtVmlzaWJsZSwgc2V0Q29weUl0ZW1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NvcGllZFRleHQsIHNldENvcGllZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29waWVkRGF0YSk7XG5cdFx0c2V0Q29waWVkVGV4dChjb3BpZWRUZXh0KTtcblx0XHRzZXRDb3B5SXRlbVZpc2libGUodHJ1ZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiBzZXRDb3B5SXRlbVZpc2libGUoZmFsc2UpLCAzMDAwKTtcblx0fTtcblxuXHRjb25zdCBDb3BpZWRUb2FzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvcGllZEl0ZW19ICR7Y29weUl0ZW1WaXNpYmxlID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9YH0+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHRcIj57Y29waWVkVGV4dH08L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4geyBjb3B5SXRlbVZpc2libGUsIGNvcHlUb0NsaXBib2FyZCwgQ29waWVkVG9hc3QgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHtcblxuXHRjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBbXG5cdFx0eyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0sXG5cdFx0eyB2YWx1ZTogXCJwdFwiLCBsYWJlbDogXCJQVFwiIH0sXG5cdFx0eyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFU1wiIH1cblx0XTtcblxuXHRjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0pO1xuXHRjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpMThuLmNoYW5nZUxhbmd1YWdlKGN1cnJlbnRMYW5ndWFnZS52YWx1ZSk7XG5cdH0sIFtjdXJyZW50TGFuZ3VhZ2VdKTtcblxuXHRyZXR1cm4geyBzZXRDdXJyZW50TGFuZ3VhZ2UsIGN1cnJlbnRMYW5ndWFnZSwgbGFuZ3VhZ2VPcHRpb25zIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=