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
        lineNumber: 39,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQW1CTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQWdDO0FBQUE7O0FBQUEsa0JBRW5CQywrQ0FBUSxDQUFDLEtBQUQsQ0FGVztBQUFBLE1BRTFEQyxlQUYwRDtBQUFBLE1BRXpDQyxrQkFGeUM7O0FBQUEsbUJBRzdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FIcUI7QUFBQSxNQUcxREcsVUFIMEQ7QUFBQSxNQUc5Q0MsYUFIOEM7O0FBS2pFLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0YsVUFBRCxFQUFxQkcsVUFBckIsRUFBNEM7QUFDbkVDLGFBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJILFVBQTlCO0FBQ0FGLGlCQUFhLENBQUNELFVBQUQsQ0FBYjtBQUNBRCxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FRLGNBQVUsQ0FBQztBQUFBLGFBQU1SLGtCQUFrQixDQUFDLEtBQUQsQ0FBeEI7QUFBQSxLQUFELEVBQWtDLElBQWxDLENBQVY7QUFDQSxHQUxEOztBQU9BLE1BQU1TLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFDbkMsd0JBQ0M7QUFBUyxlQUFTLFlBQUtDLDhFQUFMLGNBQTBCWCxlQUFlLEdBQUdXLDBFQUFILEdBQW1CLEVBQTVELENBQWxCO0FBQUEsNkJBQ0M7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQSxrQkFBcUJUO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFLQSxHQU5EOztBQVFBLFNBQU87QUFBRUYsbUJBQWUsRUFBZkEsZUFBRjtBQUFtQkksbUJBQWUsRUFBZkEsZUFBbkI7QUFBb0NNLGVBQVcsRUFBWEE7QUFBcEMsR0FBUDtBQUNBLENBckJNOztHQUFNWixrQjs7QUF1Qk4sSUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBeUI7QUFBQTs7QUFFbkQsTUFBTUMsZUFBZSxHQUFHLENBQ3ZCO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUR1QixFQUV2QjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FGdUIsRUFHdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBSHVCLENBQXhCOztBQUZtRCxtQkFRTGhCLCtDQUFRLENBQUM7QUFBRWUsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBQUQsQ0FSSDtBQUFBLE1BUTVDQyxlQVI0QztBQUFBLE1BUTNCQyxrQkFSMkI7O0FBQUEsd0JBU2xDQyw2REFBYyxFQVRvQjtBQUFBLE1BUzNDQyxJQVQyQyxtQkFTM0NBLElBVDJDOztBQVduREMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZELFFBQUksQ0FBQ0UsY0FBTCxDQUFvQkwsZUFBZSxDQUFDRixLQUFwQztBQUNBLEdBRlEsRUFFTixDQUFDRSxlQUFELENBRk0sQ0FBVDtBQUlBLFNBQU87QUFBRUMsc0JBQWtCLEVBQWxCQSxrQkFBRjtBQUFzQkQsbUJBQWUsRUFBZkEsZUFBdEI7QUFBdUNILG1CQUFlLEVBQWZBO0FBQXZDLEdBQVA7QUFDQSxDQWhCTTs7SUFBTUQsVztVQVNLTSx5RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZGRhM2I1N2EyZDQ0ODg2MzQyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvcHljbGlwYm9hcmQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBMYW5ndWFnZSA9IHtcblx0dmFsdWU6IHN0cmluZ1xuXHRsYWJlbDogc3RyaW5nXG59XG5cbnR5cGUgVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0ge1xuXHRjb3B5SXRlbVZpc2libGU6IGJvb2xlYW5cblx0Y29weVRvQ2xpcGJvYXJkOiAoY29waWVkVGV4dDogc3RyaW5nLCBjb3BpZWREYXRhOiBzdHJpbmcpID0+IHZvaWRcblx0Q29waWVkVG9hc3Q6IFJlYWN0LkZDXG59XG5cbnR5cGUgVXNlTGFuZ3VhZ2VSZXR1cm4gPSB7XG5cdHNldEN1cnJlbnRMYW5ndWFnZTogKCkgPT4gdm9pZFxuXHRjdXJyZW50TGFuZ3VhZ2U6IExhbmd1YWdlXG5cdGxhbmd1YWdlT3B0aW9uczogTGFuZ3VhZ2VbXVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ29weVRvQ2xpcGJvYXJkID0gKCk6IFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9PiB7XG5cblx0Y29uc3QgW2NvcHlJdGVtVmlzaWJsZSwgc2V0Q29weUl0ZW1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NvcGllZFRleHQsIHNldENvcGllZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29waWVkRGF0YSk7XG5cdFx0c2V0Q29waWVkVGV4dChjb3BpZWRUZXh0KTtcblx0XHRzZXRDb3B5SXRlbVZpc2libGUodHJ1ZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiBzZXRDb3B5SXRlbVZpc2libGUoZmFsc2UpLCAzMDAwKTtcblx0fTtcblxuXHRjb25zdCBDb3BpZWRUb2FzdDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvcGllZEl0ZW19ICR7Y29weUl0ZW1WaXNpYmxlID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9YH0+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHRcIj57Y29waWVkVGV4dH08L3A+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4geyBjb3B5SXRlbVZpc2libGUsIGNvcHlUb0NsaXBib2FyZCwgQ29waWVkVG9hc3QgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpOiBVc2VMYW5ndWFnZVJldHVybiA9PiB7XG5cblx0Y29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuXHRcdHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxuXHRcdHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUFRcIiB9LFxuXHRcdHsgdmFsdWU6IFwiZXNcIiwgbGFiZWw6IFwiRVNcIiB9XG5cdF07XG5cblx0Y29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9KTtcblx0Y29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aTE4bi5jaGFuZ2VMYW5ndWFnZShjdXJyZW50TGFuZ3VhZ2UudmFsdWUpO1xuXHR9LCBbY3VycmVudExhbmd1YWdlXSk7XG5cblx0cmV0dXJuIHsgc2V0Q3VycmVudExhbmd1YWdlLCBjdXJyZW50TGFuZ3VhZ2UsIGxhbmd1YWdlT3B0aW9ucyB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9