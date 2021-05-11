self["webpackHotUpdate_N_E"]("pages/projects/[project]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFnQztBQUFBOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUUxREMsZUFGMEQ7QUFBQSxNQUV6Q0Msa0JBRnlDOztBQUFBLG1CQUc3QkYsK0NBQVEsQ0FBQyxFQUFELENBSHFCO0FBQUEsTUFHMURHLFVBSDBEO0FBQUEsTUFHOUNDLGFBSDhDOztBQUtqRSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNGLFVBQUQsRUFBcUJHLFVBQXJCLEVBQTRDO0FBQ25FQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCSCxVQUE5QjtBQUNBRixpQkFBYSxDQUFDRCxVQUFELENBQWI7QUFDQUQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBUSxjQUFVLENBQUM7QUFBQSxhQUFNUixrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsS0FBRCxFQUFrQyxJQUFsQyxDQUFWO0FBQ0EsR0FMRDs7QUFPQSxNQUFNUyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQ25DLHdCQUNDO0FBQVMsZUFBUyxZQUFLQyw4RUFBTCxjQUEwQlgsZUFBZSxHQUFHVywwRUFBSCxHQUFtQixFQUE1RCxDQUFsQjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUEsa0JBQXFCVDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBS0EsR0FORDs7QUFRQSxTQUFPO0FBQUVGLG1CQUFlLEVBQWZBLGVBQUY7QUFBbUJJLG1CQUFlLEVBQWZBLGVBQW5CO0FBQW9DTSxlQUFXLEVBQVhBO0FBQXBDLEdBQVA7QUFDQSxDQXJCTTs7R0FBTVosa0I7O0FBdUJOLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHLENBQ3ZCO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUR1QixFQUV2QjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FGdUIsRUFHdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBSHVCLENBQXhCOztBQUZnQyxtQkFRY2hCLCtDQUFRLENBQUM7QUFBRWUsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBQUQsQ0FSdEI7QUFBQSxNQVF6QkMsZUFSeUI7QUFBQSxNQVFSQyxrQkFSUTs7QUFBQSx3QkFTZkMsNkRBQWMsRUFUQztBQUFBLE1BU3hCQyxJQVR3QixtQkFTeEJBLElBVHdCOztBQVdoQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZELFFBQUksQ0FBQ0UsY0FBTCxDQUFvQkwsZUFBZSxDQUFDRixLQUFwQztBQUNBLEdBRlEsRUFFTixDQUFDRSxlQUFELENBRk0sQ0FBVDtBQUlBLFNBQU87QUFBRUMsc0JBQWtCLEVBQWxCQSxrQkFBRjtBQUFzQkQsbUJBQWUsRUFBZkEsZUFBdEI7QUFBdUNILG1CQUFlLEVBQWZBO0FBQXZDLEdBQVA7QUFDQSxDQWhCTTs7SUFBTUQsVztVQVNLTSx5RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9bcHJvamVjdF0uY2EyN2U2MjlhOTc5OThlN2QyYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvcHljbGlwYm9hcmQubW9kdWxlLnNjc3NcIjtcclxuXHJcbnR5cGUgTGFuZ3VhZ2UgPSB7XHJcblx0dmFsdWU6IHN0cmluZ1xyXG5cdGxhYmVsOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBVc2VMYW5ndWFnZVByb3BzID0ge1xyXG5cdGRlZmF1bHRMYW5ndWFnZTogTGFuZ3VhZ2VcclxufVxyXG5cclxudHlwZSBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPSB7XHJcblx0Y29weUl0ZW1WaXNpYmxlOiBib29sZWFuXHJcblx0Y29weVRvQ2xpcGJvYXJkOiAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHZvaWRcclxuXHRDb3BpZWRUb2FzdDogUmVhY3QuRkNcclxufVxyXG5cclxuLy8gdHlwZSBVc2VMYW5ndWFnZVJldHVybiA9IHtcclxuLy8gXHRzZXRDdXJyZW50TGFuZ3VhZ2U6ICgpID0+IHZvaWRcclxuLy8gXHRjdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlXHJcbi8vIFx0bGFuZ3VhZ2VPcHRpb25zOiBMYW5ndWFnZVtdXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb3B5VG9DbGlwYm9hcmQgPSAoKTogVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0+IHtcclxuXHJcblx0Y29uc3QgW2NvcHlJdGVtVmlzaWJsZSwgc2V0Q29weUl0ZW1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbY29waWVkVGV4dCwgc2V0Q29waWVkVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB7XHJcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3BpZWREYXRhKTtcclxuXHRcdHNldENvcGllZFRleHQoY29waWVkVGV4dCk7XHJcblx0XHRzZXRDb3B5SXRlbVZpc2libGUodHJ1ZSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHNldENvcHlJdGVtVmlzaWJsZShmYWxzZSksIDMwMDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IENvcGllZFRvYXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvcGllZEl0ZW19ICR7Y29weUl0ZW1WaXNpYmxlID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9YH0+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dFwiPntjb3BpZWRUZXh0fTwvcD5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4geyBjb3B5SXRlbVZpc2libGUsIGNvcHlUb0NsaXBib2FyZCwgQ29waWVkVG9hc3QgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xyXG5cdFx0eyB2YWx1ZTogXCJlblwiLCBsYWJlbDogXCJFTlwiIH0sXHJcblx0XHR7IHZhbHVlOiBcInB0XCIsIGxhYmVsOiBcIlBUXCIgfSxcclxuXHRcdHsgdmFsdWU6IFwiZXNcIiwgbGFiZWw6IFwiRVNcIiB9XHJcblx0XTtcclxuXHJcblx0Y29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9KTtcclxuXHRjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpMThuLmNoYW5nZUxhbmd1YWdlKGN1cnJlbnRMYW5ndWFnZS52YWx1ZSk7XHJcblx0fSwgW2N1cnJlbnRMYW5ndWFnZV0pO1xyXG5cclxuXHRyZXR1cm4geyBzZXRDdXJyZW50TGFuZ3VhZ2UsIGN1cnJlbnRMYW5ndWFnZSwgbGFuZ3VhZ2VPcHRpb25zIH07XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==