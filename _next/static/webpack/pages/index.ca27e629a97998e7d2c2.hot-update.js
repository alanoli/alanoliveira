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




// type UseLanguageReturn = {
// 	setCurrentLanguage: () => void
// 	currentLanguage: Language
// 	languageOptions: Language[]
// }
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
        lineNumber: 43,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFnQztBQUFBOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUUxREMsZUFGMEQ7QUFBQSxNQUV6Q0Msa0JBRnlDOztBQUFBLG1CQUc3QkYsK0NBQVEsQ0FBQyxFQUFELENBSHFCO0FBQUEsTUFHMURHLFVBSDBEO0FBQUEsTUFHOUNDLGFBSDhDOztBQUtqRSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNGLFVBQUQsRUFBcUJHLFVBQXJCLEVBQTRDO0FBQ25FQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCSCxVQUE5QjtBQUNBRixpQkFBYSxDQUFDRCxVQUFELENBQWI7QUFDQUQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBUSxjQUFVLENBQUM7QUFBQSxhQUFNUixrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsS0FBRCxFQUFrQyxJQUFsQyxDQUFWO0FBQ0EsR0FMRDs7QUFPQSxNQUFNUyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQ25DLHdCQUNDO0FBQVMsZUFBUyxZQUFLQyw4RUFBTCxjQUEwQlgsZUFBZSxHQUFHVywwRUFBSCxHQUFtQixFQUE1RCxDQUFsQjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUEsa0JBQXFCVDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBS0EsR0FORDs7QUFRQSxTQUFPO0FBQUVGLG1CQUFlLEVBQWZBLGVBQUY7QUFBbUJJLG1CQUFlLEVBQWZBLGVBQW5CO0FBQW9DTSxlQUFXLEVBQVhBO0FBQXBDLEdBQVA7QUFDQSxDQXJCTTs7R0FBTVosa0I7O0FBdUJOLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQ3ZCO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUR1QixFQUV2QjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FGdUIsRUFHdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBSHVCLENBQXhCOztBQUZnQyxtQkFRY2hCLCtDQUFRLENBQUM7QUFBRWUsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBQUQsQ0FSdEI7QUFBQSxNQVF6QkMsZUFSeUI7QUFBQSxNQVFSQyxrQkFSUTs7QUFBQSx3QkFTZkMsNkRBQWMsRUFUQztBQUFBLE1BU3hCQyxJQVR3QixtQkFTeEJBLElBVHdCOztBQVdoQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZELFFBQUksQ0FBQ0UsY0FBTCxDQUFvQkwsZUFBZSxDQUFDRixLQUFwQztBQUNBLEdBRlEsRUFFTixDQUFDRSxlQUFELENBRk0sQ0FBVDtBQUlBLFNBQU87QUFBRUMsc0JBQWtCLEVBQWxCQSxrQkFBRjtBQUFzQkQsbUJBQWUsRUFBZkEsZUFBdEI7QUFBdUNILG1CQUFlLEVBQWZBO0FBQXZDLEdBQVA7QUFDQSxDQWhCTTs7SUFBTUQsVztVQVNLTSx5RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTI3ZTYyOWE5Nzk5OGU3ZDJjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29weWNsaXBib2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBMYW5ndWFnZSA9IHtcclxuXHR2YWx1ZTogc3RyaW5nXHJcblx0bGFiZWw6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIFVzZUxhbmd1YWdlUHJvcHMgPSB7XHJcblx0ZGVmYXVsdExhbmd1YWdlOiBMYW5ndWFnZVxyXG59XHJcblxyXG50eXBlIFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9IHtcclxuXHRjb3B5SXRlbVZpc2libGU6IGJvb2xlYW5cclxuXHRjb3B5VG9DbGlwYm9hcmQ6IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4gdm9pZFxyXG5cdENvcGllZFRvYXN0OiBSZWFjdC5GQ1xyXG59XHJcblxyXG4vLyB0eXBlIFVzZUxhbmd1YWdlUmV0dXJuID0ge1xyXG4vLyBcdHNldEN1cnJlbnRMYW5ndWFnZTogKCkgPT4gdm9pZFxyXG4vLyBcdGN1cnJlbnRMYW5ndWFnZTogTGFuZ3VhZ2VcclxuLy8gXHRsYW5ndWFnZU9wdGlvbnM6IExhbmd1YWdlW11cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNvcHlUb0NsaXBib2FyZCA9ICgpOiBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPT4ge1xyXG5cclxuXHRjb25zdCBbY29weUl0ZW1WaXNpYmxlLCBzZXRDb3B5SXRlbVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtjb3BpZWRUZXh0LCBzZXRDb3BpZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHRjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHtcclxuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZERhdGEpO1xyXG5cdFx0c2V0Q29waWVkVGV4dChjb3BpZWRUZXh0KTtcclxuXHRcdHNldENvcHlJdGVtVmlzaWJsZSh0cnVlKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0Q29weUl0ZW1WaXNpYmxlKGZhbHNlKSwgMzAwMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgQ29waWVkVG9hc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29waWVkSXRlbX0gJHtjb3B5SXRlbVZpc2libGUgPyBzdHlsZXMuYWN0aXZlIDogXCJcIn1gfT5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NvcGllZFRleHR9PC9wPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7IGNvcHlJdGVtVmlzaWJsZSwgY29weVRvQ2xpcGJvYXJkLCBDb3BpZWRUb2FzdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxhbmd1YWdlID0gKCkgPT4ge1xyXG5cclxuXHRjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBbXHJcblx0XHR7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVOXCIgfSxcclxuXHRcdHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUFRcIiB9LFxyXG5cdFx0eyB2YWx1ZTogXCJlc1wiLCBsYWJlbDogXCJFU1wiIH1cclxuXHRdO1xyXG5cclxuXHRjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoeyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0pO1xyXG5cdGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGkxOG4uY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlLnZhbHVlKTtcclxuXHR9LCBbY3VycmVudExhbmd1YWdlXSk7XHJcblxyXG5cdHJldHVybiB7IHNldEN1cnJlbnRMYW5ndWFnZSwgY3VycmVudExhbmd1YWdlLCBsYW5ndWFnZU9wdGlvbnMgfTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9