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
/* harmony export */   "useLanguage": function() { return /* binding */ useLanguage; },
/* harmony export */   "useTypeWriter": function() { return /* binding */ useTypeWriter; }
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

var useTypeWriter = function useTypeWriter() {
  var typeWriter = function typeWriter(text, className, callBack) {
    var currentLetterPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (currentLetterPosition < text.length) {
      document.getElementsByClassName(className)[0].innerHTML = text.substring(0, currentLetterPosition + 1);
      setTimeout(function () {
        typeWriter(text, className, callBack, currentLetterPosition + 1);
      }, 50);
    } else if (typeof callBack == "function") {
      setTimeout(function () {
        callBack();
      }, 300);
    }
  };

  return {
    typeWriter: typeWriter
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJ1c2VTdGF0ZSIsImNvcHlJdGVtVmlzaWJsZSIsInNldENvcHlJdGVtVmlzaWJsZSIsImNvcGllZFRleHQiLCJzZXRDb3BpZWRUZXh0IiwiY29weVRvQ2xpcGJvYXJkIiwiY29waWVkRGF0YSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldFRpbWVvdXQiLCJDb3BpZWRUb2FzdCIsInN0eWxlcyIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2VPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiaTE4biIsInVzZUVmZmVjdCIsImNoYW5nZUxhbmd1YWdlIiwidXNlVHlwZVdyaXRlciIsInR5cGVXcml0ZXIiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiY2FsbEJhY2siLCJjdXJyZW50TGV0dGVyUG9zaXRpb24iLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQW1CTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQWdDO0FBQUE7O0FBQUEsa0JBRW5CQywrQ0FBUSxDQUFDLEtBQUQsQ0FGVztBQUFBLE1BRTFEQyxlQUYwRDtBQUFBLE1BRXpDQyxrQkFGeUM7O0FBQUEsbUJBRzdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FIcUI7QUFBQSxNQUcxREcsVUFIMEQ7QUFBQSxNQUc5Q0MsYUFIOEM7O0FBS2pFLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0YsVUFBRCxFQUFxQkcsVUFBckIsRUFBNEM7QUFDbkVDLGFBQVMsQ0FB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YWdlcy9wcm9qZWN0cy9bcHJvamVjdF0uY2JlMzdjOGFlODBjNTA0ZWVmMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb3B5Y2xpcGJvYXJkLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgTGFuZ3VhZ2UgPSB7XG5cdHZhbHVlOiBzdHJpbmdcblx0bGFiZWw6IHN0cmluZ1xufVxuXG50eXBlIFVzZUNvcHlUb0NsaXBib2FyZFJldHVybiA9IHtcblx0Y29weUl0ZW1WaXNpYmxlOiBib29sZWFuXG5cdGNvcHlUb0NsaXBib2FyZDogKGNvcGllZFRleHQ6IHN0cmluZywgY29waWVkRGF0YTogc3RyaW5nKSA9PiB2b2lkXG5cdENvcGllZFRvYXN0OiBSZWFjdC5GQ1xufVxuXG50eXBlIFVzZUxhbmd1YWdlUmV0dXJuID0ge1xuXHRzZXRDdXJyZW50TGFuZ3VhZ2U6ICgpID0+IHZvaWRcblx0Y3VycmVudExhbmd1YWdlOiBMYW5ndWFnZVxuXHRsYW5ndWFnZU9wdGlvbnM6IExhbmd1YWdlW11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNvcHlUb0NsaXBib2FyZCA9ICgpOiBVc2VDb3B5VG9DbGlwYm9hcmRSZXR1cm4gPT4ge1xuXG5cdGNvbnN0IFtjb3B5SXRlbVZpc2libGUsIHNldENvcHlJdGVtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjb3BpZWRUZXh0LCBzZXRDb3BpZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChjb3BpZWRUZXh0OiBzdHJpbmcsIGNvcGllZERhdGE6IHN0cmluZykgPT4ge1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvcGllZERhdGEpO1xuXHRcdHNldENvcGllZFRleHQoY29waWVkVGV4dCk7XG5cdFx0c2V0Q29weUl0ZW1WaXNpYmxlKHRydWUpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4gc2V0Q29weUl0ZW1WaXNpYmxlKGZhbHNlKSwgMzAwMCk7XG5cdH07XG5cblx0Y29uc3QgQ29waWVkVG9hc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3BpZWRJdGVtfSAke2NvcHlJdGVtVmlzaWJsZSA/IHN0eWxlcy5hY3RpdmUgOiBcIlwifWB9PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NvcGllZFRleHR9PC9wPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIHsgY29weUl0ZW1WaXNpYmxlLCBjb3B5VG9DbGlwYm9hcmQsIENvcGllZFRvYXN0IH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoKTogVXNlTGFuZ3VhZ2VSZXR1cm4gPT4ge1xuXG5cdGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IFtcblx0XHR7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVOXCIgfSxcblx0XHR7IHZhbHVlOiBcInB0XCIsIGxhYmVsOiBcIlBUXCIgfSxcblx0XHR7IHZhbHVlOiBcImVzXCIsIGxhYmVsOiBcIkVTXCIgfVxuXHRdO1xuXG5cdGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZSh7IHZhbHVlOiBcImVuXCIsIGxhYmVsOiBcIkVOXCIgfSk7XG5cdGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGkxOG4uY2hhbmdlTGFuZ3VhZ2UoY3VycmVudExhbmd1YWdlLnZhbHVlKTtcblx0fSwgW2N1cnJlbnRMYW5ndWFnZV0pO1xuXG5cdHJldHVybiB7IHNldEN1cnJlbnRMYW5ndWFnZSwgY3VycmVudExhbmd1YWdlLCBsYW5ndWFnZU9wdGlvbnMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUeXBlV3JpdGVyID0gKCkgPT4ge1xuXHRjb25zdCB0eXBlV3JpdGVyID0gKHRleHQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcsIGNhbGxCYWNrLCBjdXJyZW50TGV0dGVyUG9zaXRpb24gPSAwKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiA8ICh0ZXh0Lmxlbmd0aCkpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXS5pbm5lckhUTUwgPSB0ZXh0LnN1YnN0cmluZygwLCBjdXJyZW50TGV0dGVyUG9zaXRpb24gKyAxKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0eXBlV3JpdGVyKHRleHQsIGNsYXNzTmFtZSwgY2FsbEJhY2ssIGN1cnJlbnRMZXR0ZXJQb3NpdGlvbiArIDEpO1xuXHRcdFx0fSwgNTApO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhbGxCYWNrID09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGNhbGxCYWNrKCk7XG5cdFx0XHR9LCAzMDApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4geyB0eXBlV3JpdGVyIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==