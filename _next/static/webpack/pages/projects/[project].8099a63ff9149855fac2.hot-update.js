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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQWFPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBZ0M7QUFBQTs7QUFBQSxrQkFFbkJDLCtDQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFMURDLGVBRjBEO0FBQUEsTUFFekNDLGtCQUZ5Qzs7QUFBQSxtQkFHN0JGLCtDQUFRLENBQUMsRUFBRCxDQUhxQjtBQUFBLE1BRzFERyxVQUgwRDtBQUFBLE1BRzlDQyxhQUg4Qzs7QUFLakUsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRixVQUFELEVBQXFCRyxVQUFyQixFQUE0QztBQUNuRUMsYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QkgsVUFBOUI7QUFDQUYsaUJBQWEsQ0FBQ0QsVUFBRCxDQUFiO0FBQ0FELHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQVEsY0FBVSxDQUFDO0FBQUEsYUFBTVIsa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBLEtBQUQsRUFBa0MsSUFBbEMsQ0FBVjtBQUNBLEdBTEQ7O0FBT0EsTUFBTVMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUNuQyx3QkFDQztBQUFTLGVBQVMsWUFBS0MsOEVBQUwsY0FBMEJYLGVBQWUsR0FBR1csMEVBQUgsR0FBbUIsRUFBNUQsQ0FBbEI7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBLGtCQUFxQlQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUtBLEdBTkQ7O0FBUUEsU0FBTztBQUFFRixtQkFBZSxFQUFmQSxlQUFGO0FBQW1CSSxtQkFBZSxFQUFmQSxlQUFuQjtBQUFvQ00sZUFBVyxFQUFYQTtBQUFwQyxHQUFQO0FBQ0EsQ0FyQk07O0dBQU1aLGtCOztBQXVCTixJQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBRWhDLE1BQU1DLGVBQWUsR0FBRyxDQUN2QjtBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FEdUIsRUFFdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBRnVCLEVBR3ZCO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUh1QixDQUF4Qjs7QUFGZ0MsbUJBUWNoQiwrQ0FBUSxDQUFDO0FBQUVlLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUFELENBUnRCO0FBQUEsTUFRekJDLGVBUnlCO0FBQUEsTUFRUkMsa0JBUlE7O0FBQUEsd0JBU2ZDLDZEQUFjLEVBVEM7QUFBQSxNQVN4QkMsSUFUd0IsbUJBU3hCQSxJQVR3Qjs7QUFXaENDLGtEQUFTLENBQUMsWUFBTTtBQUNmRCxRQUFJLENBQUNFLGNBQUwsQ0FBb0JMLGVBQWUsQ0FBQ0YsS0FBcEM7QUFDQSxHQUZRLEVBRU4sQ0FBQ0UsZUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPO0FBQUVDLHNCQUFrQixFQUFsQkEsa0JBQUY7QUFBc0JELG1CQUFlLEVBQWZBLGVBQXRCO0FBQXVDSCxtQkFBZSxFQUFmQTtBQUF2QyxHQUFQO0FBQ0EsQ0FoQk07O0lBQU1ELFc7VUFTS00seUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3Byb2plY3RdLjgwOTlhNjNmZjkxNDk4NTVmYWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29weWNsaXBib2FyZC5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIExhbmd1YWdlID0ge1xuXHR2YWx1ZTogc3RyaW5nXG5cdGxhYmVsOiBzdHJpbmdcbn1cblxudHlwZSBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPSB7XG5cdGNvcHlJdGVtVmlzaWJsZTogYm9vbGVhblxuXHRjb3B5VG9DbGlwYm9hcmQ6IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4gdm9pZFxuXHRDb3BpZWRUb2FzdDogUmVhY3QuRkNcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvcHlUb0NsaXBib2FyZCA9ICgpOiBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPT4ge1xuXG5cdGNvbnN0IFtjb3B5SXRlbVZpc2libGUsIHNldENvcHlJdGVtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjb3BpZWRUZXh0LCBzZXRDb3BpZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4ge1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZERhdGEpO1xuXHRcdHNldENvcGllZFRleHQoY29waWVkVGV4dCk7XG5cdFx0c2V0Q29weUl0ZW1WaXNpYmxlKHRydWUpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0Q29weUl0ZW1WaXNpYmxlKGZhbHNlKSwgMzAwMCk7XG5cdH07XG5cblx0Y29uc3QgQ29waWVkVG9hc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3BpZWRJdGVtfSAke2NvcHlJdGVtVmlzaWJsZSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifWB9PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NvcGllZFRleHR9PC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIHsgY29weUl0ZW1WaXNpYmxlLCBjb3B5VG9DbGlwYm9hcmQsIENvcGllZFRvYXN0IH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoKSA9PiB7XG5cblx0Y29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuXHRcdHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxuXHRcdHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUFRcIiB9LFxuXHRcdHsgdmFsdWU6IFwiZXNcIiwgbGFiZWw6IFwiRVNcIiB9XG5cdF07XG5cblx0Y29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9KTtcblx0Y29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aTE4bi5jaGFuZ2VMYW5ndWFnZShjdXJyZW50TGFuZ3VhZ2UudmFsdWUpO1xuXHR9LCBbY3VycmVudExhbmd1YWdlXSk7XG5cblx0cmV0dXJuIHsgc2V0Q3VycmVudExhbmd1YWdlLCBjdXJyZW50TGFuZ3VhZ2UsIGxhbmd1YWdlT3B0aW9ucyB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9