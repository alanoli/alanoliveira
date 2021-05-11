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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwiZGVmYXVsdExhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFnQztBQUFBOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUUxREMsZUFGMEQ7QUFBQSxNQUV6Q0Msa0JBRnlDOztBQUFBLG1CQUc3QkYsK0NBQVEsQ0FBQyxFQUFELENBSHFCO0FBQUEsTUFHMURHLFVBSDBEO0FBQUEsTUFHOUNDLGFBSDhDOztBQUtqRSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNGLFVBQUQsRUFBcUJHLFVBQXJCLEVBQTRDO0FBQ25FQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCSCxVQUE5QjtBQUNBRixpQkFBYSxDQUFDRCxVQUFELENBQWI7QUFDQUQsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBUSxjQUFVLENBQUM7QUFBQSxhQUFNUixrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsS0FBRCxFQUFrQyxJQUFsQyxDQUFWO0FBQ0EsR0FMRDs7QUFPQSxNQUFNUyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQ25DLHdCQUNDO0FBQVMsZUFBUyxZQUFLQyw4RUFBTCxjQUEwQlgsZUFBZSxHQUFHVywwRUFBSCxHQUFtQixFQUE1RCxDQUFsQjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUEsa0JBQXFCVDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBS0EsR0FORDs7QUFRQSxTQUFPO0FBQUVGLG1CQUFlLEVBQWZBLGVBQUY7QUFBbUJJLG1CQUFlLEVBQWZBLGVBQW5CO0FBQW9DTSxlQUFXLEVBQVhBO0FBQXBDLEdBQVA7QUFDQSxDQXJCTTs7R0FBTVosa0I7O0FBdUJOLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLGVBQUQsRUFBdUM7QUFBQTs7QUFFakUsTUFBTUMsZUFBZSxHQUFHLENBQ3ZCO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUF0QixHQUR1QixFQUV2QjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxTQUFLLEVBQUU7QUFBdEIsR0FGdUIsRUFHdkI7QUFBRUQsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQXRCLEdBSHVCLENBQXhCOztBQUZpRSxtQkFRbkJqQiwrQ0FBUSxDQUFDYyxlQUFELENBUlc7QUFBQSxNQVExREksZUFSMEQ7QUFBQSxNQVF6Q0Msa0JBUnlDOztBQUFBLHdCQVNoREMsNkRBQWMsRUFUa0M7QUFBQSxNQVN6REMsSUFUeUQsbUJBU3pEQSxJQVR5RDs7QUFXakVDLGtEQUFTLENBQUMsWUFBTTtBQUNmRCxRQUFJLENBQUNFLGNBQUwsQ0FBb0JMLGVBQWUsQ0FBQ0YsS0FBcEM7QUFDQSxHQUZRLEVBRU4sQ0FBQ0UsZUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPO0FBQUVDLHNCQUFrQixFQUFsQkEsa0JBQUY7QUFBc0JELG1CQUFlLEVBQWZBLGVBQXRCO0FBQXVDSCxtQkFBZSxFQUFmQTtBQUF2QyxHQUFQO0FBQ0EsQ0FoQk07O0lBQU1GLFc7VUFTS08seUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvW3Byb2plY3RdLjZhMjc5YzM2ZTc5OTI3YjNhODFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3B5Y2xpcGJvYXJkLm1vZHVsZS5zY3NzXCI7XHJcblxyXG50eXBlIExhbmd1YWdlID0ge1xyXG5cdHZhbHVlOiBzdHJpbmdcclxuXHRsYWJlbDogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgVXNlTGFuZ3VhZ2VQcm9wcyA9IHtcclxuXHRkZWZhdWx0TGFuZ3VhZ2U6IExhbmd1YWdlXHJcbn1cclxuXHJcbnR5cGUgVXNlQ29weVRvQ2xpcGJvYXJkUmV0dXJuID0ge1xyXG5cdGNvcHlJdGVtVmlzaWJsZTogYm9vbGVhblxyXG5cdGNvcHlUb0NsaXBib2FyZDogKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB2b2lkXHJcblx0Q29waWVkVG9hc3Q6IFJlYWN0LkZDXHJcbn1cclxuXHJcbi8vIHR5cGUgVXNlTGFuZ3VhZ2VSZXR1cm4gPSB7XHJcbi8vIFx0c2V0Q3VycmVudExhbmd1YWdlOiAoKSA9PiB2b2lkXHJcbi8vIFx0Y3VycmVudExhbmd1YWdlOiBMYW5ndWFnZVxyXG4vLyBcdGxhbmd1YWdlT3B0aW9uczogTGFuZ3VhZ2VbXVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29weVRvQ2xpcGJvYXJkID0gKCk6IFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9PiB7XHJcblxyXG5cdGNvbnN0IFtjb3B5SXRlbVZpc2libGUsIHNldENvcHlJdGVtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2NvcGllZFRleHQsIHNldENvcGllZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4ge1xyXG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29waWVkRGF0YSk7XHJcblx0XHRzZXRDb3BpZWRUZXh0KGNvcGllZFRleHQpO1xyXG5cdFx0c2V0Q29weUl0ZW1WaXNpYmxlKHRydWUpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiBzZXRDb3B5SXRlbVZpc2libGUoZmFsc2UpLCAzMDAwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBDb3BpZWRUb2FzdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3BpZWRJdGVtfSAke2NvcHlJdGVtVmlzaWJsZSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifWB9PlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHRcIj57Y29waWVkVGV4dH08L3A+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHsgY29weUl0ZW1WaXNpYmxlLCBjb3B5VG9DbGlwYm9hcmQsIENvcGllZFRvYXN0IH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoZGVmYXVsdExhbmd1YWdlOiBVc2VMYW5ndWFnZVByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IFtcclxuXHRcdHsgdmFsdWU6IFwiZW5cIiwgbGFiZWw6IFwiRU5cIiB9LFxyXG5cdFx0eyB2YWx1ZTogXCJwdFwiLCBsYWJlbDogXCJQVFwiIH0sXHJcblx0XHR7IHZhbHVlOiBcImVzXCIsIGxhYmVsOiBcIkVTXCIgfVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZShkZWZhdWx0TGFuZ3VhZ2UpO1xyXG5cdGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGkxOG4uY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlLnZhbHVlKTtcclxuXHR9LCBbY3VycmVudExhbmd1YWdlXSk7XHJcblxyXG5cdHJldHVybiB7IHNldEN1cnJlbnRMYW5ndWFnZSwgY3VycmVudExhbmd1YWdlLCBsYW5ndWFnZU9wdGlvbnMgfTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9