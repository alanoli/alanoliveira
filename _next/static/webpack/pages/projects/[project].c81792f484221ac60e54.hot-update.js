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

var useLanguage = function useLanguage(defaultLanguage) {
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultLanguage),
      currentLanguage = _useState3[0],
      setCurrentLanguage = _useState3[1];

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      i18n = _useTranslation.i18n;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(i18n);
    i18n.changeLanguage(currentLanguage.value);
  }, [currentLanguage]);
  return {
    setCurrentLanguage: setCurrentLanguage,
    currentLanguage: currentLanguage,
    languageOptions: languageOptions
  };
};

_s2(useLanguage, "L57OVmCbHyF3o8Cp61HhxhnmAMw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VMYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBZ0M7QUFBQTs7QUFBQSxrQkFFbkJDLCtDQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFMURDLGVBRjBEO0FBQUEsTUFFekNDLGtCQUZ5Qzs7QUFBQSxtQkFHN0JGLCtDQUFRLENBQUMsRUFBRCxDQUhxQjtBQUFBLE1BRzFERyxVQUgwRDtBQUFBLE1BRzlDQyxhQUg4Qzs7QUFLakUsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRixVQUFELEVBQXFCRyxVQUFyQixFQUE0QztBQUNuRUMsYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QkgsVUFBOUI7QUFDQUYsaUJBQWEsQ0FBQ0QsVUFBRCxDQUFiO0FBQ0FELHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQVEsY0FBVSxDQUFDO0FBQUEsYUFBTVIsa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBLEtBQUQsRUFBa0MsSUFBbEMsQ0FBVjtBQUNBLEdBTEQ7O0FBT0EsTUFBTVMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUNuQyx3QkFDQztBQUFTLGVBQVMsWUFBS0MsOEVBQUwsY0FBMEJYLGVBQWUsR0FBR1csMEVBQUgsR0FBbUIsRUFBNUQsQ0FBbEI7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBLGtCQUFxQlQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUtBLEdBTkQ7O0FBUUEsU0FBTztBQUFFRixtQkFBZSxFQUFmQSxlQUFGO0FBQW1CSSxtQkFBZSxFQUFmQSxlQUFuQjtBQUFvQ00sZUFBVyxFQUFYQTtBQUFwQyxHQUFQO0FBQ0EsQ0FyQk07O0dBQU1aLGtCOztBQXVCTixJQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxlQUFELEVBQXVDO0FBQUE7O0FBRWpFLE1BQU1DLGVBQWUsR0FBRyxDQUN2QjtBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FEdUIsRUFFdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBRnVCLEVBR3ZCO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUh1QixDQUF4Qjs7QUFGaUUsbUJBUW5CakIsK0NBQVEsQ0FBQ2MsZUFBRCxDQVJXO0FBQUEsTUFRMURJLGVBUjBEO0FBQUEsTUFRekNDLGtCQVJ5Qzs7QUFBQSx3QkFTaERDLDZEQUFjLEVBVGtDO0FBQUEsTUFTekRDLElBVHlELG1CQVN6REEsSUFUeUQ7O0FBV2pFQyxrREFBUyxDQUFDLFlBQU07QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUEsUUFBSSxDQUFDSSxjQUFMLENBQW9CUCxlQUFlLENBQUNGLEtBQXBDO0FBQ0EsR0FIUSxFQUdOLENBQUNFLGVBQUQsQ0FITSxDQUFUO0FBS0EsU0FBTztBQUFFQyxzQkFBa0IsRUFBbEJBLGtCQUFGO0FBQXNCRCxtQkFBZSxFQUFmQSxlQUF0QjtBQUF1Q0gsbUJBQWUsRUFBZkE7QUFBdkMsR0FBUDtBQUNBLENBakJNOztJQUFNRixXO1VBU0tPLHlEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL1twcm9qZWN0XS5jODE3OTJmNDg0MjIxYWM2MGU1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvcHljbGlwYm9hcmQubW9kdWxlLnNjc3NcIjtcblxudHlwZSBMYW5ndWFnZSA9IHtcblx0dmFsdWU6IHN0cmluZ1xuXHRsYWJlbDogc3RyaW5nXG59XG5cbnR5cGUgVXNlTGFuZ3VhZ2VQcm9wcyA9IHtcblx0ZGVmYXVsdExhbmd1YWdlOiBMYW5ndWFnZVxufVxuXG50eXBlIFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9IHtcblx0Y29weUl0ZW1WaXNpYmxlOiBib29sZWFuXG5cdGNvcHlUb0NsaXBib2FyZDogKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB2b2lkXG5cdENvcGllZFRvYXN0OiBSZWFjdC5GQ1xufVxuXG4vLyB0eXBlIFVzZUxhbmd1YWdlUmV0dXJuID0ge1xuLy8gXHRzZXRDdXJyZW50TGFuZ3VhZ2U6ICgpID0+IHZvaWRcbi8vIFx0Y3VycmVudExhbmd1YWdlOiBMYW5ndWFnZVxuLy8gXHRsYW5ndWFnZU9wdGlvbnM6IExhbmd1YWdlW11cbi8vIH1cblxuZXhwb3J0IGNvbnN0IHVzZUNvcHlUb0NsaXBib2FyZCA9ICgpOiBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPT4ge1xuXG5cdGNvbnN0IFtjb3B5SXRlbVZpc2libGUsIHNldENvcHlJdGVtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjb3BpZWRUZXh0LCBzZXRDb3BpZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4ge1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZERhdGEpO1xuXHRcdHNldENvcGllZFRleHQoY29waWVkVGV4dCk7XG5cdFx0c2V0Q29weUl0ZW1WaXNpYmxlKHRydWUpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0Q29weUl0ZW1WaXNpYmxlKGZhbHNlKSwgMzAwMCk7XG5cdH07XG5cblx0Y29uc3QgQ29waWVkVG9hc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3BpZWRJdGVtfSAke2NvcHlJdGVtVmlzaWJsZSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifWB9PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NvcGllZFRleHR9PC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIHsgY29weUl0ZW1WaXNpYmxlLCBjb3B5VG9DbGlwYm9hcmQsIENvcGllZFRvYXN0IH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoZGVmYXVsdExhbmd1YWdlOiBVc2VMYW5ndWFnZVByb3BzKSA9PiB7XG5cblx0Y29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuXHRcdHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxuXHRcdHsgdmFsdWU6IFwicHRcIiwgbGFiZWw6IFwiUFRcIiB9LFxuXHRcdHsgdmFsdWU6IFwiZXNcIiwgbGFiZWw6IFwiRVNcIiB9XG5cdF07XG5cblx0Y29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKGRlZmF1bHRMYW5ndWFnZSk7XG5cdGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGkxOG4pO1xuXHRcdGkxOG4uY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlLnZhbHVlKTtcblx0fSwgW2N1cnJlbnRMYW5ndWFnZV0pO1xuXG5cdHJldHVybiB7IHNldEN1cnJlbnRMYW5ndWFnZSwgY3VycmVudExhbmd1YWdlLCBsYW5ndWFnZU9wdGlvbnMgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==